import mongo, { FilterQuery } from 'mongodb';
import { UpdateQuery } from 'querifier/dist/src/dictionaries/update.dict';
import { HighConditionQuery } from 'querifier/dist/src/dictionaries/condition.dict';
import { ClassConstructor } from './types';
interface Update<T> {
    collection: string;
    filter: FilterQuery<T>;
    query: UpdateQuery;
}
export declare class MongoDBridge {
    cache: Map<string, {
        value: any[];
        date: Date;
    }>;
    db: mongo.Db;
    private uri;
    constructor(db_uri: string);
    initConnection(): Promise<{}>;
    getIter(query: HighConditionQuery): AsyncIterableIterator<any>;
    get<T = any>(query: HighConditionQuery): Promise<T[]>;
    create<T extends ClassConstructor>(model: T, data: Partial<InstanceType<T>> | Partial<InstanceType<T>>[]): Promise<mongo.InsertWriteOpResult | mongo.InsertOneWriteOpResult>;
    update<T>({ filter, query, collection }: Update<T>): Promise<mongo.UpdateWriteOpResult>;
    delete<T>(query: {
        [collection: string]: mongo.FilterQuery<T>;
    }): Promise<any[]>;
}
export declare const database: MongoDBridge;
export {};
