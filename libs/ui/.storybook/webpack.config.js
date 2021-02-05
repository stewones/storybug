const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rootWebpackConfig = require('../../../.storybook/webpack.config');
const path = require('path');
/**
 * Export a function. Accept the base config as the only param.
 *
 * @param {Parameters<typeof rootWebpackConfig>[0]} options
 */
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });

  const tsPaths = new TsconfigPathsPlugin({
    configFile: './tsconfig.base.json',
  });

  config.resolve.plugins
    ? config.resolve.plugins.push(tsPaths)
    : (config.resolve.plugins = [tsPaths]);

  // config.resolve.alias['@org/another'] = path.resolve(
  //   __dirname,
  //   '../../another/src'
  // );
  // config.resolve.alias['@org/core'] = path.resolve(__dirname, '../../core/src');

  // console.log(456, config);

  return config;
};
