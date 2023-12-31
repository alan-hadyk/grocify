module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@client/api": "./src/api",
            "@client/assets": "./src/assets",
            "@client/clients": "./src/clients",
            "@client/components": "./src/components",
            "@client/containers": "./src/containers",
            "@client/helpers": "./src/helpers",
            "@client/hoc": "./src/hoc",
            "@client/hooks": "./src/hooks",
            "@client/icons": "./src/icons",
            "@client/lib": "./src/lib",
            "@client/models": "./src/models",
            "@client/routing": "./src/routing",
            "@client/theme": "./src/theme",
            "@client/translations": "./src/translations",
          },
          root: ["./src"],
        },
      ],
      "expo-router/babel",
      "react-native-reanimated/plugin",
    ],
    presets: ["babel-preset-expo"],
  }
}
