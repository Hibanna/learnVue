const path = require('path')

module.exports = {
 /* 入口可以是字符串 对象 数组*/
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}