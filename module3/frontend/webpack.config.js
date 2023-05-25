const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./js/board.js",
  devtool: "source-map",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "css", to: "css" },
      ],
    }),
  ],
};
