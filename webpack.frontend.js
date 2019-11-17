const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => [
  {
    entry: "./src/client.tsx",
    output: {
      path: path.resolve(__dirname, "dist/assets"),
      filename: "client.js",
      publicPath: "/"
    },
    target: "web",
    plugins: [new CleanWebpackPlugin(), new ExtractTextPlugin("index.css")],
    optimization: {
      minimize: !!env && !!env.production,
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
