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
        exclude: /\-style.css$/,
        loader: 'style!css'
      },
      {
        test: /\-style.css$/,
        loader: 'style!css?module&importLoaders=1&localIdentName=[name]--[local]'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'components']
  }
}