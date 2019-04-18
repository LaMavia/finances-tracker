import { RouteParser, Response } from 'curie-server'
import fs from 'fs-extra'
import { resolve } from 'path';
import ReactDOMServer, { renderToNodeStream, renderToString } from 'react-dom/server'
import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
global.React = React;
// @ts-ignore
global.ReactDOM = ReactDOM;
// @ts-ignore
global.ReactDOMServer = ReactDOMServer;

export class ReactParser extends RouteParser<any> {
  urlMap = {
    "index": "home.tsx"
  } as {[key: string]: string}

  compile() {
    return ''
  }
  async compileAll() {
    return ''
  }

  loadLayout() {
    return fs.readFile(resolve(__dirname, '../build/index.html'), { encoding: 'utf-8' })
  }

  mapUrl(path: string): string {
    return this.urlMap[path]||path
  }

  render(response: Response, path: string) {
    return new Promise((res, rej) => {
      const p = this.mapUrl(path.replace(/^\\/, ''))
      const el = require(resolve(__dirname, '../src/', p)).default as React.ReactElement
      const rendered_string = renderToString(el)
      this.loadLayout()
        .then(layout => {
          response.writable &&
            response.write(
              layout.replace('id="root">()<', rendered_string),
              () => {
                res("")
              }
            )
        })
        .catch(response.write)
    })
  }
}
