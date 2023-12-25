import path = require("path");
import rspack = require("@rspack/cli");
import rspackCore = require("@rspack/core");
import highlightConfig = require("./config");

// eslint-disable-next-line import/no-default-export
export default rspack.defineConfig({
  devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
  entry: {
    main: "./index.ts",
  },
  output: {
    filename: "[name].js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  builtins: {
    html: [
      {
        templateContent:
          "<!DOCTYPE html><html><head></head><body></body></html>",
      },
    ],
    define: {
      __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
      __DEPLOY_ENV__: JSON.stringify(process.env.DEPLOY_ENV),
      __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
      __STAGING__: JSON.stringify(process.env.DEPLOY_ENV === "staging"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "builtin:swc-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        prismJs0: {
          test: new RegExp(
            `node_modules/prismjs/components/prism-(${highlightConfig.commonLangs.join(
              "|"
            )}).min`
          ),
          priority: 1,
          name: "p-[chunkhash]",
        },
        prismJs1: {
          test: /node_modules\/prismjs\/components\/prism-(a|b|c|d)/,
          name: "p1-[chunkhash]",
        },
        prismJs2: {
          test: /node_modules\/prismjs\/components\/prism-(e|f|g|h|i|j|k|l)/,
          name: "p2-[chunkhash]",
        },
        prismJs3: {
          test: /node_modules\/prismjs\/components\/prism-(m|n|o|p|q|r)/,
          name: "p3-[chunkhash]",
        },
        prismJs4: {
          test: /node_modules\/prismjs\/components\/prism-(s|t|u|v|w|x|y|z)/,
          name: "p4-[chunkhash]",
        },
      },
    },
  },
});
