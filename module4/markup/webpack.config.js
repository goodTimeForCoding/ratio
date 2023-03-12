const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,

  //точка входа
  entry: {
    main: './src/js/main.js' //точка входа
  },

  //будет складывать картинки в отдельную папку assets, и удалять старые файлы при сборке + компиляция js со своим хэшем
  output: {
    filename: 'main.js',
    assetModuleFilename: "assets/[name][ext][query]",
    clean: true
  },
  //пути до исходных файлов
  devtool: 'source-map',

  /*
  Здесь происходит обработка файлов на выходе с webpack
  Чтобы делить все файлы на выходе, чтобы был не один бандл
  */
  plugins: [
    new MiniCssExtractPlugin({
      /*
      contenthash - изменяется при изменеии css файла разработчиком,
      клиент благодаря этому заберёт с последнюю версию,
      так как браузер сверяет имена файлов и если изменились то забирает новый
      */
      filename: 'style.css'
    }),

    /*создает index.html в директории с бандлом и автоматически 
    добавляет в него ссылку на бандл(на js файл) */
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

  /*
  Модули нужны для того чтобы webpack понимал импорты не только js кода но и css и картинок и т д
  Здесь происходит обработка файлов на входе в webpack
  */
  module: {
    rules: [
      //для работы с изображениями встроенными в html
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.less$/i,
        use: [
          /*
          "style-loader" - встраивает стили напрямую в DOM дерево в head
          MiniCssExtractPlugin.loader - извлекает стили в отдельный файл css в dist
          */
          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          //для понимания импортов в файле js
          "css-loader",

          //"postcss-loader" - автоматически добавляет префиксы для поддержки стилей браузерами
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      //Options
                    },
                  ]
                ],
              },
            }
          },
          //обработка less
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
        //игнорируются js файлы в папке node_modules
        exclude: /node_modules/,
        //babel-loader - преобразует современный js в старый стандарт
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