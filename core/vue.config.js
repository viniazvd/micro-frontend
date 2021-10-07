const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",

        filename: "remoteEntry.js",

        exposes: {
          "./store": "./src/store",
        },

        remotes: {
          service1: "service1@http://localhost:8081/remoteEntry.js",
          service2: "service2@http://localhost:8082/remoteEntry.js"
        },

        shared: {
          "core-js": "^3.6.5",
          "vue": "^2.6.11",
          "vue-router": "^3.2.0",
          "vuex": "^3.4.0"
        }
      })
    ]
  },

  devServer: { port: 8080 }
};