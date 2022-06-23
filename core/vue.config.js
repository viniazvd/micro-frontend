const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

const deps = require("./package.json").dependencies

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",

        // library: { type: "var", name: "core" },

        // filename: "coreEntry.js",

        remotes: {
          service1: "service1@http://localhost:8081/service1Entry.js",
          service2: "service2@http://localhost:8082/service2Entry.js"
        },

        shared: [{
          // ...deps,
          vue: {
            singleton: true,
            requiredVersion: deps.vue,
          },
          vuex: {
            singleton: true,
            requiredVersion: deps.vuex,
          },
          'vue-sdz': {
            singleton: true,
            requiredVersion: deps['vue-sdz'],
          }
        }]
      })
    ]
  },

  devServer: { port: 8080 }
}