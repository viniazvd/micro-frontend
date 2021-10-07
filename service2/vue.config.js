const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin

const deps = require("./package.json").dependencies

module.exports = {
  publicPath: "http://localhost:8082/",

  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "service2",

        filename: "remoteEntry.js",

        exposes: {
          "./App": "./src/App.vue",
          "./routes": "./src/router/routes.js"
        },

        remotes: {
          core: "core@http://localhost:8080/remoteEntry.js",
        },

        shared: { ...deps }
      })
    ]
  },

  devServer: { port: 8082 }
}