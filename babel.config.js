module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '@': './', // Matches "@/components/TaskInput" to "./components/TaskInput"
            },
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
      ],
    };
  };