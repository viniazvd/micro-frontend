const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin

const deps = require("./package.json").dependencies

module.exports = {
  publicPath: "http://localhost:8081/",

  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "service1",

        filename: "service1Entry.js",

        exposes: {
          "./App": "./src/App.vue",
          "./store": "./src/store/index.ts",
          "./routes": "./src/router/routes.ts"
        },

        shared: [{
          // ...deps,
          // vue: {
          //   singleton: true,
          //   requiredVersion: deps.vue,
          // },
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

  devServer: { port: 8081 }
}