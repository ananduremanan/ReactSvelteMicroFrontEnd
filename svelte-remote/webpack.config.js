const generateWebpackConfig = require("@grampro/svelte-mf-remote");

module.exports = generateWebpackConfig({
  mode: process.env.NODE_ENV,
  publicPath: "http://localhost:8080/",
  federationConfig: {
    name: "header",
    filename: "remoteEntry.js",
    exposes: {
      "./Dash": "./src/Dash.svelte",
      "./Header": "./src/Header.svelte",
    },
  },
});
