const { ModuleFederationPlugin } = require('webpack').container

const deps = require("./package.json").dependencies

module.exports = {
  publicPath: "http://localhost:8082/",

  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "forgotPassword",

        filename: "forgotPasswordEntry.js",

        exposes: {
          "./App": "./src/App.vue",
          "./store": "./src/store/index.js",
          "./routes": "./src/router/routes.js"
        },

        shared: {
          'vue-sdz': {
            singleton: true,
            requiredVersion: deps['vue-sdz']
          }
        }
      })
    ]
  },

  devServer: { port: 8082 }
}