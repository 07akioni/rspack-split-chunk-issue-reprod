import path = require("path");
import rspack = require("@rspack/cli");
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
    define: {
      __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
      __DEPLOY_ENV__: JSON.stringify(process.env.DEPLOY_ENV),
      __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
      __STAGING__: JSON.stringify(process.env.DEPLOY_ENV === "staging"),
    },
  },
  module: {
    rules: [],
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
        },
        prismJs1: {
          test: /node_modules\/prismjs\/components\/prism-(a|b|c|d)/,
        },
        prismJs2: {
          test: /node_modules\/prismjs\/components\/prism-(e|f|g|h|i|j|k|l)/,
        },
        prismJs3: {
          test: /node_modules\/prismjs\/components\/prism-(m|n|o|p|q|r)/,
        },
        prismJs4: {
          test: /node_modules\/prismjs\/components\/prism-(s|t|u|v|w|x|y|z)/,
        },
      },
    },
  },
});
