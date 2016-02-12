var webpack = require(process.cwd() + "/config/webpack.conf");

module.exports = function(config) {
  config.set({
    basePath: process.cwd(),
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'spec/**/*Spec.js*'
    ],
    preprocessors: {
      'spec/**/*Spec.js*':['webpack']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    logLevel: config.LOG_INFO,
    webpack: {
      module: webpack.module,
      resolve: webpack.resolve
    },
    webpackMiddleware: {
      noInfo: true
    },
  });
};
