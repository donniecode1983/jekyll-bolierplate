const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets/js"),
  },
  entry: "./src/js/custom.js",
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: "custom.js",
    libraryTarget: "var",
    library: "custom",
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: {
              publicPath: "",
              // path: path.resolve(__dirname, "assets/css"),
              filename: "style.css"
            },
          },
          "css-loader",
          "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
    ],
  },
};
