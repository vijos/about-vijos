exports.modifyWebpackConfig = function (config, stage) {
  config.merge({
    stylus: {
      preferPathResolver: 'webpack',
      use: [
        require('rupture')(),
      ],
      import: [
        '~css/inc.styl',
      ],
    },
  });
  switch (stage) {
    case 'develop':
      config.loader('styl', {
        test: /\.styl/,
        loaders: ['style', 'css', 'postcss', 'stylus'],
      });
      break;
    case 'build-css':
      config.loader('styl', {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract(['css?minimize', 'postcss', 'stylus']),
      });
      break;
    case 'build-html':
    case 'build-javascript':
      config.loader('styl', {
        test: /\.styl/,
        loader: 'null',
      });
      break;
  }
  return config;
};
