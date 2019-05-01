import { UserProps, users } from '../models/users'
import bcrypt from 'bcrypt'
import { Flow, River } from 'river-flow'
import { ReactParser, parser } from '../reactParser'
import { database } from '../database'

export default [
  [
    'GET',
    '/register',
    async ({ req, res }) => {
      await parser.render(res, '/register')
    },
  ],
  [
    'POST',
    '/register',
    async ({ req, res }) => {
      let { email, login, password } = req.body as UserProps
      console.dir(req.body, { colors: true, depth: 3 })

      if(!email || !login || !password)  {
        res.writeHead(409, `Insufficent credencials: ${JSON.stringify(req.body)}`) 
        return void 0 
      }

      const used = await isUsed(login, email)
      console.log(used)
      if (used) {
        res.writeHead(409, `Credencial(s): ${used} already exist`)
        return
      }

      password = await bcrypt.hash(password, 10)
      const db_res = await database.create(users, req.body)
      console.dir(db_res, { colors: true, depth: 3 })

      if (db_res.result.ok && db_res.result.n === 1) {
        await res.send(
          await database.get({
            users: {
              login,
            },
          })
        )
        return void 0
      } else {
        await res.send({
          status: 406,
          message: 'Error during registration despite correct crudentials',
        })
        return {
          error: new Error('Server-db error'),
        }
      }
    },
  ],
] as River.RouteExport[]

async function isUsed(
  login: string,
  email: string
): Promise<'email' | 'login' | 'both' | null> {
  debugger
  const res = (await database.get({
    users: {
      $or: [{ login }, { email }],
    },
  })) as users[]

  console.dir({ res, login, email }, { colors: true, depth: 3 })

  let [l, em] = [false, false]
  for (let i = 0; i < res.length, !l || !em; i++) {
    if (!l && res[i].login === login) l = true
    if (!em && res[i].email === email) em = true
  }

  return l && em ? 'both' : l ? 'login' : em ? 'email' : null
}
