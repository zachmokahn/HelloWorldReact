module.exports = {
  entry: process.cwd() + '/src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: process.cwd() + '/www/public/javascripts'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', ''],
    alias: {
      "src": process.cwd() + "/src",
      "spec": process.cwd() + "/spec",
    }
  }
}
