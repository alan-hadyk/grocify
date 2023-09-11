process.env.TAMAGUI_TARGET = "native"

module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@client/assets": "./src/assets",
            "@client/clients": "./src/clients",
            "@client/components": "./src/components",
            "@client/helpers": "./src/helpers",
            "@client/hoc": "./src/hoc",
            "@client/theme": "./src/theme",
          },
          root: ["./src"],
        },
      ],
    ],
    presets: ["babel-preset-expo"],
  }
}
