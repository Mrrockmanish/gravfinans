const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
  mode: mode,
  entry: {
    scripts: './src/index.js',
    // user: './src/user.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: "images/[name][ext][query]",
    clean: true,
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./src/index.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'calc-v-2.html',
      template: "./src/calc-v-2.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'entry.html',
      template: "./src/entry.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'step-about.html',
      template: "./src/step-about.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'step-2.html',
      template: "./src/step-2.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'up-rating.html',
      template: "./src/up-rating.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'step-confirm.html',
      template: "./src/step-confirm.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'up-rating-2.html',
      template: "./src/up-rating-2.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'clarify.html',
      template: "./src/clarify.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'add-card.html',
      template: "./src/add-card.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'questions-1.html',
      template: "./src/questions-1.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'success.html',
      template: "./src/success.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'verdict.html',
      template: "./src/verdict.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'upload.html',
      template: "./src/upload.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'last-step.html',
      template: "./src/last-step.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-status-active.html',
      template: "./src/lk-status-active.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-status-active.html',
      template: "./src/lk-status-active.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-status-expired.html',
      template: "./src/lk-status-expired.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-loans.html',
      template: "./src/lk-loans.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-periods.html',
      template: "./src/lk-periods.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-actions.html',
      template: "./src/lk-actions.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-notify.html',
      template: "./src/lk-notify.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-correspondence.html',
      template: "./src/lk-correspondence.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-contacts.html',
      template: "./src/lk-contacts.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-my-loans.html',
      template: "./src/lk-my-loans.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-get-loan.html',
      template: "./src/lk-get-loan.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-end-loan.html',
      template: "./src/lk-end-loan.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-my-data.html',
      template: "./src/lk-my-data.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-questions.html',
      template: "./src/lk-questions.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'offer.html',
      template: "./src/offer.pug"
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}