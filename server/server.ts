import c, { initApp, Middleware, use, Request, Response, CallbackReturnType as RT, LoggerFunction, initLogger } from "curie-server"
import { ReactParser } from "./reactParser";
import ReactDOMServer from 'react-dom/server'
import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
global.React = React;
// @ts-ignore
global.ReactDOM = ReactDOM;
// @ts-ignore
global.ReactDOMServer = ReactDOMServer;

(async () => {
  await initApp({
    port: +(process.env["PORT"] || 8000),
    database: '',
    routeParser: ReactParser,
    listeners: ["./listeners", "list.[tj]s"],
    public: "../build",
    preRun: [
      "npm run build"
    ],
  })

  @use()
  // @ts-ignore
  class _ extends Middleware {
    logger: LoggerFunction = initLogger("Logger", "whiteBright")
    async intercept(req: Request, _res: Response) {
      this.logger(req.url)
      return [null, true] as RT
    }
  }
})()