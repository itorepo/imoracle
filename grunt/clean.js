/**
 * A module that defines Grunt's Clean task configuration
 * @module imoracle/grunt/clean
 * @author Kostyantyn Didenko <kdidenko@ito-global.com>
 * @since version 1.2.0
 */

/**
 * @function
 * When executed, defines the Clean task configuration
 * and registers it as a Grunt's global task
 * 
 * @param {IGrunt} grunt - instance itself
 * @returns void
 */
module.exports = function (grunt) {
	'use strict';

	//load the copy module
	grunt.loadNpmTasks('grunt-contrib-clean');

	// define the Copy task configuration
	grunt.config('clean', {		

		/** @exports clean:dist */
		dist: ['<%= paths.dist %>']
	});

	/** 
	 * @global
	 * register additional `copy-all` task for current module
	 */
	grunt.registerTask('clean', ['clean:dist']);
}; 

