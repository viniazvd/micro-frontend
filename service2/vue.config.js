const { ModuleFederationPlugin } = require('webpack').container

const deps = require("./package.json").dependencies

module.exports = {
  publicPath: "http://localhost:8082/",

  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "service2",

        filename: "service2Entry.js",

        exposes: {
          "./App": "./src/App.vue",
          "./store": "./src/store/index.ts",
          "./routes": "./src/router/routes.ts"
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