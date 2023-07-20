module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@dtos": "./src/dtos",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
            "@layouts": "./src/layouts",
            "@services": "./src/services",
            "@hooks": "./src/hooks",
            "@contexts": "./src/contexts",
            "@routes": "./src/routes",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
