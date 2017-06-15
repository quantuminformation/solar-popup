var path = require('path')
var webpack = require('webpack')
var WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, './src'),
  build: path.join(__dirname, './build')
}

module.exports = {

  entry: {
    'solar-popup': PATHS.src + '/SolarPopup.ts'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    library: 'SolarPopup',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          //loader: 'ts-loader'
          loader: 'awesome-typescript-loader'

        }]
        ,
        exclude:new RegExp('.test.ts')
      },
      {
        test: /\.p?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, url: false
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ],
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts', '.js']
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: 'My Project Webpack Build'
    }),
    new ExtractTextPlugin('solar-popup.css'),
    new webpack.IgnorePlugin(/test\.ts$/)


  ]
}
