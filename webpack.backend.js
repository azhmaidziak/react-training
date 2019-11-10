const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
    plugins: [new CleanWebpackPlugin()],

    module: {
      rules: [
        {
          test: /\.(css|sass)$/,
          use: [
            { loader: "isomorphic-style-loader" },
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[path][name]__[local]--[hash:base64:5]"
                }
              }
            },
            { loader: "sass-loader" }
          ]
        },
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
      extensions: [".js", ".ts", ".jsx", ".tsx", ".css"]
    }
  }
];
