const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",

        filename: "remoteEntry.js",

        remotes: {
          service1: "service1@http://localhost:8081/remoteEntry.js",
          service2: "service2@http://localhost:8082/remoteEntry.js"
        }
      })
    ]
  },

  devServer: { port: 8080 }
};