import delPath from "../utils/delpath";
import { series, parallel, src, dest } from 'gulp'
import { componentPath, pkgPath } from "../utils/path";
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import run from "../utils/run";

// 删除 fanqie-ui

export const removeDist = () => {
  return delPath(`${pkgPath}/fanqie-ui`)
}

export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/fanqie-ui/lib/src`))
    .pipe(dest(`${pkgPath}/fanqie-ui/es/src`))
}

export const buildComponent = async () => {
  run('pnpm run build', componentPath)
}

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
)