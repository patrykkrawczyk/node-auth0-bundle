// const nodeExternals = require('webpack-node-externals');

const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  target: 'node',
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ],
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: __dirname,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        sideEffects: true,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'node-auth0-bundle.js',
    library: '',
    libraryTarget: 'commonjs'
  }
};
