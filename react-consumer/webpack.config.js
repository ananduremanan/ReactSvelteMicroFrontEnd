const webpackConfig = require("@grampro/react-mf-consumer");

module.exports = webpackConfig({
  mode: "production",
  publicPath: "http://localhost:8082/",
  port: 8082,
  federationConfig: {
    name: "consumer",
    filename: "remoteEntry.js",
    remotes: {},
    exposes: {},
  },
});
