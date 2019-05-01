import mongo, { UpdateManyOptions, FilterQuery, Condition } from 'mongodb'
import q, { natifyCondition } from 'querifier'
import { UpdateQuery } from 'querifier/dist/src/dictionaries/update.dict'
import {
  ConditionQuery,
  HighConditionQuery
} from 'querifier/dist/src/dictionaries/condition.dict'
import { natifyUpdate } from 'querifier/dist/src/helpers/nativfy'
import { ClassConstructor } from './types';
import { River, initLogger } from 'river-flow';
import { load } from 'dotenv';
import { resolve } from 'path';

interface Update<T> {
  collection: string
  filter: FilterQuery<T>
  query: UpdateQuery
}

export class MongoDBridge {
  cache: Map<
    string,
    {
      value: any[]
      date: Date
    }
  > = new Map()
  // @ts-ignore
  db: mongo.Db
  private uri: string
  constructor(db_uri: string) {
    this.uri = db_uri
    this.initConnection()
  }

  initConnection() {
    return new Promise(res => {
      mongo
        .connect(this.uri)
        .then(d => d.db())
        .then(d => {
          this.db = d
          res()
        })
        .catch(initLogger('MongoDBridge', 'bgRed'))
    })
  }

  async *getIter(query: HighConditionQuery) {
    for (const collection in query) {
      const col = this.db.collection(collection)
      const dontWantMORE = yield await col
        .find(natifyCondition(query[collection]))
        .toArray()
      if (dontWantMORE === true) break
    }
    return
  }

  get<T = any>(query: HighConditionQuery): Promise<T[]> {
    return new Promise(async (res, rej) => {
      const promises: any[] = []
      for (const collection in query) {
        const col = this.db.collection(collection)
        const arr = col
          .find(natifyCondition(query))
          .toArray()
          .catch(rej)
        promises.push(arr)
      }

      res(Promise.all(promises))
    })
  }

  create<T extends ClassConstructor>(
    model: T,
    data: Partial<InstanceType<T>> | Partial<InstanceType<T>>[]
  ): Promise<mongo.InsertWriteOpResult | mongo.InsertOneWriteOpResult> {
    const collection = model.name
    const col = this.db.collection(collection)

    if (Array.isArray(data)) {
      const obs = data.map(d => {
        const ob: River.KeyValueMap = {}
        for (const k in d) {
          ob[k] = d[k]
        }
        return ob
      })

      return col.insertMany(obs)
    } else {
      const inst = new model(data)
      const ob: River.KeyValueMap = {}
      for (const k in inst) {
        ob[k] = inst[k]
      }

      return col.insertOne(data)
    }
  }

  update<T>({
    filter,
    query,
    collection
  }: Update<T>): Promise<mongo.UpdateWriteOpResult> {
    const q = natifyUpdate(query)
    return this.db.collection(collection).updateMany(filter, q)
  }

  delete<T>(query: {[collection: string]: mongo.FilterQuery<T>}) {
    const ps = [] as Promise<mongo.DeleteWriteOpResultObject>[]
    for(const col in query) {
      const q = query[col]
      ps.push(this.db.collection(col).deleteMany(q))
    }

    return Promise.all(ps)
  }
}
load({
  path: resolve(__dirname, "../.env")
})
export const database = new MongoDBridge(process.env['DBURI'])