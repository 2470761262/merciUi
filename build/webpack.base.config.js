const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'style-resources-loader',
            options: {
              // preProcessor: 'less',
              patterns: path.resolve(__dirname, '../assets/global.less')
            }
          }
        ]
      },
      {
        test: /\.ts?$/,
        exclude: /node-modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/] // 为script有lang='ts'标识的脚本文件添加ts后缀
            }

          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: [
          // 'babel-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },

      {
        // 处理html文件里直接引用的url文件
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}
