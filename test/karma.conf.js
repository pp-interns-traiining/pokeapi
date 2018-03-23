var args = require('minimist')(process.argv.slice(2));
var debugMode = !!args.debug;

module.exports = function (config) {
  config.set({

    basePath: '../',

    preprocessors: {
      'app/{,!(bower_components)/**/}!(*spec).js': 'coverage',
    },

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/pokedex/pokedex.module.js',
      'app/components/**/*.js',
      'app/services/**/*.js',
    ],

    autoWatch: true,

    client: {
      captureConsole: debugMode,
    },

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-coverage',
    ],

    logLevel: debugMode ? config.LOG_DEBUG : config.LOG_ERROR,

    reporters: ['coverage', 'mocha'],

    mochaReporter: {
      output: 'full',
    },

    coverageReporter: {
      dir: 'test/coverage/',
      reporters: [
        {
          type: 'html',
        },
        {
          type: 'text-summary',
        },
      ],
    },

  });
};
