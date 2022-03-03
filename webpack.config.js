const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // loaders

  // plugins

  mode: "development",
  devServer: {
    host: "local-ip",
    hot: true,
    open: {
      app: {
        name: "firefox",
        arguments: ["--private-window"],
      },
    },
    port: 3000,
    static: {
      directory: path.join(__dirname, "app/public"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
