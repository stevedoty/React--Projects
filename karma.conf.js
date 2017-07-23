'use strict';

const webpackCfg = require('./webpack.config')('test');

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		// basePath: '',
		webpack: webpackCfg,
		webpackServer: {
			noInfo: false
		},
		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai', 'sinon'],
		client: {
			mocha: {}
		},
		mochaReporter: {
			output: 'autowatch'
		},

		// list of files / patterns to load in the browser
		files: [
			// 'test/index.js',
			'test/loadtest.js'
		],

		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			// 'test/index.js': ['webpack', 'sourcemap'],
			'test/loadtest.js': ['webpack', 'sourcemap']
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 8080,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		junitReporter: {
			outputDir: 'coverage',
			outputFile: 'junit-result.xml',
			useBrowserName: false
		},
		coverageReporter: {
			dir: 'coverage/',
			watermarks: {
				statements: [70, 80],
				functions: [70, 80],
				branches: [70, 80],
				lines: [70, 80]
			},
			reporters: [{
				type: 'text'
			}, {
				type: 'html',
				subdir: 'html'
			}, {
				type: 'cobertura',
				subdir: 'cobertura'
			}, {
				type: 'lcovonly',
				subdir: 'lcov'
			}]
		}
	})
}