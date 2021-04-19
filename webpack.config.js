/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module : {
      rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
          test: /\.(ts|tsx)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: [{
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader')
          }],
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              // Adds CSS to the DOM by injecting a `<style>` tag
              loader: 'style-loader'
            },
            {
              // Interprets `@import` and `url()` like `import/require()` and will resolve them
              loader: 'css-loader'
            },
            // {
            //   // Loader for webpack to process CSS with PostCSS
            //   loader: 'postcss-loader',
            //   options: {
            //     postcssOptions: {
            //       // postcss plugins, can be exported to postcss.config.js
            //       plugins: function () {
            //         return [
            //           require('autoprefixer')
            //         ];
            //       }
            //     }
            //   }
            // },
            {
              // Loads a SASS/SCSS file and compiles it to CSS
              loader: 'sass-loader'
            }
          ]
        }
    ],
  },
  resolve: {
      extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html"
    }),
    new Dotenv()
  ]
};