import { Listener, hookup, Request, Response } from "curie-server";

@hookup("/")
export default class Index extends Listener {
  async onGET(req: Request, res: Response) {
    await this.render(res, "index")
    return [null, false]
  }
}