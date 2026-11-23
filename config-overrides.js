// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "path": require.resolve("path-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "http": require.resolve("stream-http"),
    "url": require.resolve("url/"),
    "querystring": require.resolve("querystring-es3"),
    "buffer": require.resolve("buffer/"),
    "util": require.resolve("util/"),
    "fs": false, // Can't polyfill fs, so we set it to false
    "net": false, // Can't polyfill net
    "async_hooks": false, // Can't polyfill async_hooks
  });
  config.resolve.fallback = fallback;

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};