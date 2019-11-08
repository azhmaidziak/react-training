const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    entry: "./src/client.tsx",
    output: {
      path: path.resolve(__dirname, "dist/assets"),
      filename: "client.js",
      publicPath: "/"
    },
    target: "web",
    plugins: [new ExtractTextPlugin("index.css")],
    module: {
      rules: [
        {
          test: /(\.js)|(\.ts)|(\.tsx)$/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx"]
    }
  }
];
