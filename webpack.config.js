var HtmlWebpackPlugin = require('html-webpack-plugin')
var nib = require('nib')

module.exports = {
  entry: ['./src/app/app.js'],
  output: {
    path: './build/js',
    filename: 'bundle.[hash].js',
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['babel?stage=0'] },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LightBulb',
      filename: '../index.html'
    })
  ],
  stylus: {
    use: [nib()]
 }
}
