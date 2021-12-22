module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '原神祈愿记录分析工具'
        return args
      })
  },
}
