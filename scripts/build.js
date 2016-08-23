var z = require('zunder')
var u = z.undertaker
var setZunderConfig = require('./set-zunder-config')

setZunderConfig(z)

u.series(
  z.applyProdEnv,
  z.cleanDev,
  u.parallel(
    z.buildDevScripts,
    z.buildDevStylesheets,
    z.buildDevStaticAssets
  )
)()
