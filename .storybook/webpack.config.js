const path = require("path")

// storybookのデフォルト設定の上書き
module.exports = (baseConfig, env, defaultConfig) => {
  // nuxtのパス解決をstorybookでも使用できるようにする
  Object.assign(defaultConfig.resolve.alias, {
    "~": path.resolve(__dirname, "../")
  })
  return defaultConfig
}
