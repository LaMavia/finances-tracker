import fs, { promises } from 'fs-extra'
import { resolve } from 'path'
import ReactDOMServer, {
  renderToNodeStream,
  renderToString,
} from 'react-dom/server'
import React from 'react'
import ReactDOM from 'react-dom'
import { River } from 'river-flow'
// @ts-ignore
global.React = React
// @ts-ignore
global.ReactDOM = ReactDOM
// @ts-ignore
global.ReactDOMServer = ReactDOMServer

export class ReactParser {
  private _cache: Map<string, string> = new Map()
  root = require(resolve(__dirname, '../_temp/client/src/', 'Root.js')).default

  private write(
    response: River.Outflow,
    rendered_string: string,
    layout: string,
    res: (value?: {} | PromiseLike<{}> | undefined) => void
  ) {
    response.writable &&
      response.write(layout.replace('id="root">()<', rendered_string), () => {
        res('')
      })
  }

  loadLayout() {
    if (this._cache.has('__layout__'))
      return Promise.resolve(this._cache.get('__layout__') as string)
    return fs.readFile(resolve(__dirname, '../client/build/index.html'), {
      encoding: 'utf-8',
    })
  }

  render(response: River.Outflow, path: string) {
    return new Promise((res, rej) => {
      if (this._cache.has(path) && this._cache.has('__layout__')) {
        return this.write(
          response,
          this._cache.get(path) as string,
          this._cache.get('__layout__') as string,
          res
        )
      }

      const el = this.root('Server', {
        context: {
          code: 200,
        },
        location: path,
      })
      const rendered_string = renderToString(el)
      this._cache.set(path, rendered_string)
      this.loadLayout()
        .then((layout: string) => {
          this._cache.set('__layout__', layout)
          this.write(response, rendered_string, layout, res)
        })
        .catch(response.write)
    })
  }
}

export const parser = new ReactParser()
