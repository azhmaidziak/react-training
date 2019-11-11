const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => [
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
    optimization: {
      minimize: !!env.production,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          terserOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              inline: 2
            },
            mangle: {
              safari10: true
            },
            output: {
              comments: false
            }
          }
        })
      ]
    },
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
