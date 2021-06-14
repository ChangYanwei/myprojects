const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //注意dist前边不要加 /
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '22.单击300ms延迟问题.html'
    })
  ],
  devServer: {
    contentBase: '/dist',
    open: true,
    port: 8000,
    proxy: {
      '/api/*': {
        //将以 api 开头的请求映射到下面的地址去，它会把请求路径如 /api/list.json，直接拼接到下面的地址上
        //在src/demo文件夹处开启一个http-server，端口是8001
        //如果请求：http://localhost:8000/api/list.json 会转到 http://localhost:8001/api/list.json
        target: 'http://127.0.0.1:8001'
      }
    }
  }
}
