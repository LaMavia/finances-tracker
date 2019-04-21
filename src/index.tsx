import React from 'react'
import ReactDOM from 'react-dom'
import initRoot from './Root'
import * as serviceWorker from './serviceWorker'

const Root = initRoot('Client')
const root = document.getElementById('root')
ReactDOM.hydrate(<Root />, root)
if(location.port === '3000' && root) {
  const css_link = document.createElement('link')
  css_link.rel = "stylesheet"
  css_link.type = 'text/css';
  css_link.media = 'all'
  css_link.href = `${location.origin.replace(':3000', ':8080')}/static/css/styles.css`
  document.head.appendChild(css_link)
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
