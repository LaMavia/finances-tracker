const http = require('http')
const fs = require('fs')
const path = require('path')
http
  .createServer((req, res) => {
    console.log(req.url)
    if (/static\/(css|js)\//.test(req.url)) {
      const uri = req.url.replace(/^[\\\/]/, '')
      console.log(`Matched: ${uri}`)
      const content = fs.readFileSync(path.resolve(__dirname, "../client/public/", uri), { encoding: 'utf-8' })
      res.write(content)
    } else {
      res.writeHead(404, `${req.url} Not found`)
    }

    res.end()
  })
  .listen(8080)
