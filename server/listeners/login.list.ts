import { UserProps, users, User } from "../models/users";
import bcrypt from 'bcrypt'
import { Flow, River, initLogger } from "river-flow"
import { parser } from "../reactParser";
import { database } from "../database";

export default [
  [
    'GET', '/login', async ({req, res}) => {
      await parser.render(res, "/login")
    }
  ],
  [
    'POST', '/login', async ({req, res}) => {
      let { login, password } = req.body as {login: string, password: string}
  
      const users: any[] = await database.get({
        users: {
          login,
        }
      })
  
      const user = users.find((u: users) => bcrypt.compareSync(password, u.password))
  
      if(user) {
        res.send(new User(user), {
          'Content-Type': 'application/json'
        })
        return void 0
      } else {
        res.send(null, {
          status: 404,
          message: 'user not found'
        })
        return {
          error: new Error("User not found")
        } as River.RouteResponse
      }
    }
  ]
] as River.RouteExport[]
