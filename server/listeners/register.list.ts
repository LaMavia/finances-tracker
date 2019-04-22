import Curie, { Listener, send, hookup } from "curie-server";
import { UserProps, users } from "../models/users";
import bcrypt from "bcrypt"
import { MongoDBridge } from "curie-mongo";


@hookup("/register")
export default class Register extends Listener {
  async onGET(req: Curie.Request, res: Curie.Response) {
    await this.render(res, '/register')
    return [null, false]
  }

  async isUsed(login: string, email: string): Promise<"email" | "login" | "both" | null> {
    if(!this.server.db) throw new Error("Database not initialized")
    debugger
    const res = await this.server.db.get({
      users: {
        $or: [
          {login}, {email} 
        ]
      }
    }) as users[]  
    let [l, em] = [false, false]
    for(let i = 0; i < res.length, !l || !em; i++) {
      if(!l && res[i].login === login) l = true
      if(!em&& res[i].email === email) em = true
    }

    return l && em 
      ? 'both' 
      : (l ? 'login' : (
        em ? 'email' : null
      ))
  }

  async onPOST(req: Curie.Request, res: Curie.Response) {
    if(!this.server.db) throw new Error("Database not initialized")
    debugger
    let { email, login, password } = req.body as UserProps
    const used = this.isUsed(login, email)
    if(used) return [new Error(`Credencial(s): ${used} already exist`), false]

    password = await bcrypt.hash(password, 10)
    debugger
    const db_res = await (this.server.db as MongoDBridge).create(users, req.body)

    if(db_res.result.ok && db_res.result.n === 1) {
      await send(res, await this.server.db.get({
        users: {
          login,
        }
      }))
      return [null, false]
    } else {
      await send(res, {
        status: 406,
        message: "Error during registration despite correct crudentials"
      })
      return [new Error("Server-db error"), false]
    }
  }
}