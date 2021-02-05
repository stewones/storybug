const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
module.exports = {
  stories: [],
  addons: ['@storybook/addon-knobs/register'],
  // webpackFinal: async (config, { configType }) => {
  //   config.resolve.alias['@org/another'] = path.resolve(
  //     __dirname,
  //     '../libs/another/src'
  //   );
  //   // config.resolve.modules.push(path.resolve(__dirname, '../libs/core'));
  //   // config.resolve.modules.push(path.resolve(__dirname, '../libs/another'));
  //   // config.resolve.modules.push(path.resolve(__dirname, '../libs/ui'));
  //   console.log(123, config);

  //   return config;
  // },
};
