import fs from 'fs'
import { resolve } from 'path'
import { pkgPath } from './path'

const stayFile = ['package.json', 'README.md']

const delPath = async (path: string) => {
  let files: string[] = []

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)

    files.forEach(async (file) => {
      let curPath = resolve(path, file)

      if (fs.statSync(curPath).isDirectory()) {
        // recures
        if (file != "node_modules") await delPath(curPath)
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath)
        }
      }
    })

    if(path != `${pkgPath}/fanqie-ui`) fs.rmdirSync(path)
  }
}

export default delPath