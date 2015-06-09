module.exports = {
  entry: './src/app.js',
  output: {
      path: "./dist",
      filename: "bundle.js"
    },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?module&localIdentName=[sha512:hash:4]'
      }
    ]
  }
}