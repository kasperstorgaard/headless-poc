const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/components/app.ts'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'server/types': path.resolve(__dirname, '../server/src/types')
    },
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/'
  },
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/service-worker.js',
      swDest: 'service-worker.js'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ]
}