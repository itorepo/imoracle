/**
 * A module that defines the configuration and registers both 
 * defaults and globals for the project's Grunt tasks
 *
 * @module imoracle/grunt
 * @author Kostyantyn Didenko <kdidenko@ito-global.com>
 * @date   12.04.2018
 * */
const path = require("path");


/**
 * @function
 * Creates the initial Grunt configuration, loads the rest of Grunt tasks
 * and registers Grunt's global tasks 
 * 
 * @param {IGrunt} grunt - instance itself
 * @returns void
 */
module.exports = function (grunt) {
	'use strict';

	// init Grunt project configuration
	grunt.initConfig({
		/** 
		 * @readonly 
		 * read and store the project's metadata and settings
		 */
		package: grunt.file.readJSON('package.json'),
		/** 
		 * @readonly
		 * @enum enumerates main paths for current project
		 */
		paths: {
			src:  path.join(__dirname, 'src/'),
			dist: path.join(__dirname, 'dist/'),
			test: path.join(__dirname, 'test/'),
			grunt: {
				file:  path.join(__dirname, 'Gruntfile.js'),
				tasks: path.join('grunt/')
			}
		},
		/** 
		 * @readonly
		 * @enum enumerates main matching globs for project files
		 */
		globs: {
			js: {
				flat: '*.js',
				deep: '**/*.js'
			}
		}
	});
	/** 
	 * @external 
	 * load and marge external Grunt tasks into current configuration
	 */
	grunt.loadTasks(grunt.config('paths.grunt.tasks'));
	/**
	 * @global
	 * registers default task dependencies
	 */
	//grunt.registerTask('dist', ['clean', 'copy-assets']);
	grunt.registerTask('dist', ['copy-assets']);
	/**
	 * @default
	 * registers default Grunt task 
	 */
	grunt.registerTask('default', ['dist']);
};

