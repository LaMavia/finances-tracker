import { Listener, hookup, Request, Response, send } from "curie-server";
import { UserProps, users, User } from "../models/users";
import bcrypt from 'bcrypt'

@hookup("/login")
export default class Index extends Listener {
  async onGET(req: Request, res: Response) {
    await this.render(res, "/login")
    return [null, false]
  }

  async onPOST(req: Request, res: Response) {
    if(!this.server.db) return [new Error("Databse not found"), false]
    let { login, password } = req.body as {login: string, password: string}

    const users: any[] = await this.server.db.get({
      users: {
        login,
      }
    })

    const user = users.find((u: users) => bcrypt.compareSync(password, u.password))

    if(user) {
      send(res, new User(user), {
        'Content-Type': 'application/json'
      })
      return [null, false]
    } else {
      send(res, null, {
        status: 404,
        message: 'user not found'
      })
      return [new Error("User not found"), false]
    }
  }
}