import { ReactParser, parser } from './reactParser'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import ReactDOM from 'react-dom'
import { Flow, River, initLogger } from 'river-flow'
import { resolve } from 'path'
import initListeners from './listeners'
import dot from 'dotenv'

// @ts-ignore
global.React = React
// @ts-ignore
global.ReactDOM = ReactDOM
// @ts-ignore
global.ReactDOMServer = ReactDOMServer
dot.load({
  debug: true,
  path: '../.env',
})

const m = new Flow(/*['npm run build', 'npm run postcss:build', 'npm run build:temp']*/)
m.public = resolve(__dirname, '../client/build')
m.get('/', async ({ res, path }) => {
  await parser.render(res, '/')
  return
})

m.gate(({ req }) => {
  initLogger('Logger', 'italic')(
    `${req.method}: ${
      req.method === 'POST'
        ? req.url + ' >> ' + JSON.stringify(req.body, null, 2)
        : req.url
    }`
  )
})

initListeners(m)
m.listen(+(process.env['PORT'] || 8000))
