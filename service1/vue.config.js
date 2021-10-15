const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin

const deps = require("./package.json").dependencies

module.exports = {
  publicPath: "http://localhost:8081/",

  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "service1",

        filename: "remoteEntry.js",

        exposes: {
          "./App": "./src/App.vue",
          "./routes": "./src/router/routes.ts"
        },

        shared: { ...deps }
      })
    ]
  },

  devServer: { port: 8081 }
}