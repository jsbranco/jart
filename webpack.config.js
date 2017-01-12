var webpack = require("webpack");
var path = require("path");
const settings ={
  entry:{
    "app":'./src/index.js',
    "example":'./example/index.js',
  },
  devtool:"eval",
  output:{
    filename:"bundle.js",
    publicPath:"/assets/",
    path:path.join(__dirname, "dist")
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({name:"example", filename:"example.bundle.js"})
  ],
  module:{
    loaders:[
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['react-hot', 'babel-loader'],
        include: [
          path.resolve(__dirname, "./src"),
          path.resolve(__dirname, "./example"),
        ],
      },
      {
        test: /(\.scss|\.css)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: [
          path.resolve(__dirname, "./src"),
        ],
      }
    ],
  },
  resolve:{
    root:path.resolve('./src')
  }
};
module.exports= settings;
