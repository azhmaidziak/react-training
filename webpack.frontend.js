const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = [
  {
    entry: "./src/client.tsx",
    output: {
      path: path.resolve(__dirname, "dist/assets"),
      filename: "client.js",
      publicPath: "/"
    },
    target: "web",
    plugins: [new CleanWebpackPlugin(), new ExtractTextPlugin("index.css")],
    module: {
      rules: [
        {
          test: /\.(css|sass)$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
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
          })
        },
        {
          test: /\.(js|ts|tsx)$/,
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
