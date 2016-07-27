var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './demo/index.js',
    index2: './demo/index2.js'
  },
  output: {
    path: './app/',
    filename: '[name].js',
  },
  module:{
    loaders:[
      {
        test:/.css$/,
        loaders:["style","css"],
        exclude:"/node_modules/"
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
    }),
    new htmlWebpackPlugin({
      title:"My 2nd react app",
      filename: 'index2.html',
      chunks: ["index2"]
    })
  ]

};
