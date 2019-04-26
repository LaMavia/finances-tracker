import { ReactParser } from "./reactParser";
import ReactDOMServer from 'react-dom/server'
import React from 'react';
import ReactDOM from 'react-dom';
import { Master } from "laplax";
import { resolve } from "path";

// @ts-ignore
global.React = React;
// @ts-ignore
global.ReactDOM = ReactDOM;
// @ts-ignore
global.ReactDOMServer = ReactDOMServer;

(async () => {
  const m = new Master([
    'npm run build'
  ])
  m.public = resolve(__dirname, "../client/build")
  m.listen(+(process.env["PORT"] || 8000))
})()