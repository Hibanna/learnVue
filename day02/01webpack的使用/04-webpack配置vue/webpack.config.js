const path = require('path')

module.exports = {
 /* 入口可以是字符串 对象 数组*/
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    // alias: 别名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module : {
    rules : [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  }}