const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const PORT = 8088

const indexPage = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'app', 'index.html'),
  filename: './index.html',
})

const formPage = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'app', 'form.html'),
  filename: './form.html',
})

const maidPage = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'app', 'maid.html'),
  filename: './maid.html',
})

// const copyPlugin = new CopyWebpackPlugin([
//   {
//     from: path.resolve(__dirname, 'app', 'static'),
//     to: path.resolve(__dirname, 'dev', 'static')
//   }
// ])

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
})

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      'rxjs',
      'event-source-polyfill',
      './app/index.js',
      './app/index.scss',
      './app/bootstrap/css/bootstrap.min.css',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, './app')],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sass|scss|css)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loaders: ['url-loader?limit=70000&name=images/[name].[ext]']
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    indexPage,
    formPage,
    maidPage,
    // copyPlugin,
    cssExtractPlugin,
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: PORT,
    hot: true,
    contentBase: './app',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
