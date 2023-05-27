const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,

  entry: {
    main: './src/js/main.js'
  },

  output: {
    filename: 'main.js',
    assetModuleFilename: "assets/[name][ext][query]",
    clean: true
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ['main']
    }),

    new HtmlWebpackPlugin({
      template: './src/blog.html',
      filename: 'blog.html',
      chunks: ['main']
    }),

    new HtmlWebpackPlugin({
      template: './src/article.html',
      filename: 'article.html',
      chunks: ['main']
    }),

    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['main']
    })
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.less$/i,
        use: [
          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env"
                  ]
                ],
              },
            }
          },
          "less-loader",
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
    ]
  }
}