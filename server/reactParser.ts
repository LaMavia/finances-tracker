import fs from 'fs-extra'
import { resolve } from 'path'
import ReactDOMServer, {
  renderToNodeStream,
  renderToString,
} from 'react-dom/server'
import React from 'react'
import ReactDOM from 'react-dom'
import { Laplax } from 'laplax'
// @ts-ignore
global.React = React
// @ts-ignore
global.ReactDOM = ReactDOM
// @ts-ignore
global.ReactDOMServer = ReactDOMServer

export class ReactParser {
  loadLayout() {
    return fs.readFile(resolve(__dirname, '../client/build/index.html'), {
      encoding: 'utf-8',
    })
  }

  render(response: Laplax.ShieldRes, path: string) {
    return new Promise((res, rej) => {
      const initRoot = require(resolve(__dirname, '../client/src/', 'Root.tsx'))
        .default as any
      const el = initRoot('Server', {
        context: {
          code: 200,
        },
        location: path,
      })
      const rendered_string = renderToString(el)
      this.loadLayout()
        .then((layout: string) => {
          response.writable &&
            response.write(
              layout.replace('id="root">()<', rendered_string),
              () => {
                res('')
              }
            )
        })
        .catch(response.write)
    })
  }
}
