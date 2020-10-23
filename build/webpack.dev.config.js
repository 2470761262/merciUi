const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpackBaseConfig = require('./webpack.base.config.js')

module.exports = merge(webpackBaseConfig, {
  devtool: 'eval-source-map',

  entry: {
    main: path.join(__dirname, '../examples/main.ts')
  },

  mode: 'development',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|jsx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }]
  },
  // 输出
  output: {
    path: path.resolve(process.cwd(), './examples/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  optimization: {
    minimize: false
  },
  devServer: {

    publicPath: '/',

    hot: true,

    overlay: { errors: true },

    quiet: true

  },
  resolve: {

    extensions: ['.js', '.vue', '.json', '.ts'],
    // 添加别名
    alias: {
      '@': path.resolve('src'),
      vue: '@vue/runtime-dom'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../examples/dist/index.html'),
      template: path.join(__dirname, '../examples/index.html')
    })
  ]
})
