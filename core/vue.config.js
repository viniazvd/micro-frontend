const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

const deps = require("./package.json").dependencies

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",

        filename: "remoteEntry.js",

        exposes: {
          "./store": "./src/store/index.ts",
        },

        remotes: {
          service1: "service1@http://localhost:8081/remoteEntry.js",
          service2: "service2@http://localhost:8082/remoteEntry.js"
        },

        shared: [{
          ...deps,
          vue: { eager: true, singleton: true },
          vuex: { eager: true, singleton: true }
        }]
      })
    ]
  },

  devServer: { port: 8080 }
};