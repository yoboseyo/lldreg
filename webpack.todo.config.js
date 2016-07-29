var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  entry: {
    index: './todo/index.jsx',
  },
  output: {
    path: './todo_build/',
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
        test: /\.jsx?$/,
    /*    loaders: ['babel'],*/
        loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
    /*    query: ['es2015','react'],*/
        exclude: "/node_modules/",
        include: path.resolve(__dirname, 'todo')
      }

    ]
  },
  resolve: {
    extensions: ['','.js',".css",'.jsx'],  //自动补全识别后缀
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
