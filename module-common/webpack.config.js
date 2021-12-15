const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
// const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: {
        "index": path.join(__dirname, "src", "index.js")
    },
    externals: [nodeExternals()],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'commonjs'
        }
    },
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/index.css", to: "index.css" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
}