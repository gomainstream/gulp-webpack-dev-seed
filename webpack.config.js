var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:7777',
    'webpack/hot/only-dev-server',
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    root: path.resolve(__dirname),
    alias: {
      js: 'src/js',
      sass: 'src/sass'
    }
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};
