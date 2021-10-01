const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  // publicPath: "http://localhost:8080/",

  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",

        filename: "remoteEntry.js",

        remotes: {
          service: "service@http://localhost:8081/remoteEntry.js"
        }
      })
    ]
  },

  devServer: { port: 8080 }
};