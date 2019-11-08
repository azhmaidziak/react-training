const path = require("path");
const nodeExternals = require("webpack-node-externals");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    entry: "./src/server.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "server.js",
      publicPath: "/"
    },
    target: "node",
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    externals: nodeExternals(),
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
