//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    preprocessors: {
      'app/{,!(bower_components)/**/}!(*spec).js': 'coverage',
    },

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/pokedex/pokedex.module.js',
      'app/components/**/*.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-coverage',
    ],

    logLevel: config.LOG_ERROR,

    reporters: ['coverage', 'mocha'],

    mochaReporter: {
      output: 'full',
    },

    coverageReporter: {
      dir: 'coverage/',
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
