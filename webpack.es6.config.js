var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  entry: {
    index: './es6/index.js',
  },
  output: {
    path: './es6_build/',
    filename: '[name].js',
  },
  module:{
    loaders:[
      {
        test:/\.css$/,
        loaders: ["style","css"],
        exclude: "/node_modules/"
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        query: ['es2015'],
        exclude: "/node_modules/",
        include: path.resolve(__dirname,'/es6/')
      }

    ]
  },
  resolve: {
    extensions: ['','.js',".css",'jsx'],  //自动补全识别后缀
  },
  devServer: {
    hot: true,
    inline: true,
  },
  plugins:[
    new htmlWebpackPlugin({
      title:"My 1st react app",
      chunks: ["index"]
    })
  ]
};
