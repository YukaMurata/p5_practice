// プラグインを利用するためにwebpackを読み込んでおく
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'production' ? '#cheap-module-source-map' : false,
  entry: {
    index: [path.resolve(__dirname, 'js/index.js')],
    sin: [path.resolve(__dirname, 'js/sin.js')],
    '3d': [path.resolve(__dirname, 'js/threeD.js')],
    forces: [path.resolve(__dirname, 'js/forces.js')]
  },
  output: {
    path: path.resolve(__dirname, './../js'),
    filename: '[name].bundle.js'
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname)]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // JS内の'process.env.NODE_ENV'が'development'か'production'に置き換わる
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    // 共通プラグインを利用するときはこれを書いておけばインポート不要
    new webpack.ProvidePlugin({
      // $: 'jquery',
      // jQuery: 'jquery',
      // velocity: 'velocity-animate',
    })
  ]
};
