const { ModuleFederationPlugin } = require('webpack').container

const deps = require("./package.json").dependencies

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",

        // filename: "coreEntry.js",

        // library: { type: "var", name: "core" },

        remotes: {
          onboarding: "onboarding@http://localhost:8081/onboardingEntry.js",
          forgotPassword: "forgotPassword@http://localhost:8082/forgotPasswordEntry.js"
        },

        shared: {
          'vue-sdz': {
            singleton: true,
            requiredVersion: deps['vue-sdz'],
          }
        }
      })
    ]
  },

  devServer: { port: 8080 }
}