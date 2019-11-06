const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = [
    {
        entry: './src/client.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'client.js',
            publicPath: '/'
        },
        target: 'node',
        node: {
            console: false,
            global: false,
            process: false,
            Buffer: false,
            __filename: false,
            __dirname: false
        },
        externals: nodeExternals(),
        plugins: [new ExtractTextPlugin('index.css')],
        module: {
            rules: [
                {
                    test: /(\.js)|(\.tsx)$/,
                    use: [{
                        loader: 'babel-loader'
                    }]
                }
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx','.tsx']
        }
    }
];