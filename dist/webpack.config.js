const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.?(js|jsx)$/,
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        reacts: {
          test: (module)=>{
            return /react|react-dom|react-router-dom/.test(module.context);
          },
          name: 'reacts',
          chunks: 'all',
        },
        modules: {
          test: (module)=>{
            return /module-1|module-2|module-comon/.test(module.context);
          },
          name: 'modules',
          chunks: 'all',
        },
        commons: {
          test: (module)=>{
            return /node_modules/.test(module.context);
          },
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}