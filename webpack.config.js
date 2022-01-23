/* eslint-disable import/no-extraneous-dependencies */
const nodeExternals = require("webpack-node-externals");

const browserConfig = {
  name: "app",
  entry: { app: "./App.js" },
  target: "web",
  output: {
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: "defaults",
                  },
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "all",
    },
  },
};

const serverConfig = {
  name: "server",
  entry: { server: ["./server.js"] },
  output: {
    filename: "server.bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { node: "16" },
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
};

module.exports = (env, options) => {
  if (options.mode === "development") {
    // Add source-map for easier debugging
    serverConfig.devtool = "source-map";
    browserConfig.devtool = "source-map";
  }
  return [serverConfig, browserConfig];
};
