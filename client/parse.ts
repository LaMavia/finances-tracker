import cp from "child_process"
import fs from "fs-extra"

fs.readdir("./to_parse/")
  .then(fnames => fnames.filter(n => /\.svg$/.test(n)))
  .then(fnames => 
    fnames.map(n => {
      cp.exec(`npx @svgr/cli --icon --ext tsx --expand-props end ./to_parse/${n} --out-dir ./src/components/`, (err, out) => {
        if(err) console.error(err)
        else console.log(out)
      })
    })
  )
  .catch(console.error)