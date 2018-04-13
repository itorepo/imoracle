/**
 * A module that defines Grunt's Copy task configuration
 * @module imoracle/grunt/copy
 * @author Kostyantyn Didenko <kdidenko@ito-global.com>
 * @date   12.04.2018
 */

/**
 * @function
 * When executed, defines the Copy task configuration
 * and registers it as a Grunt's global task
 * 
 * @param {IGrunt} grunt - instance itself
 * @returns void
 */
module.exports = function (grunt) {
	'use strict';

	//load the copy module
	grunt.loadNpmTasks('grunt-contrib-copy');

	// define the Copy task configuration
	grunt.config('copy', {
		
		/** @exports copy:build */
		dist: {
			files: [{ 
					// copy the README and LICENSE files
					cwd: '<%= paths.root %>', 
					src: ['README.md', 'LICENSE'], 
					dest: '<%= paths.dist %>', expand: true 
				},{
					// copy all static  assets 
					cwd: '<%= paths.root %>',
					src: ['public/**'],
					dest: '<%= paths.dist %>',
					expand: true
				},{
					// copy view engine templates 
					cwd: '<%= paths.src %>',
					src: ['views/**'],
					dest: '<%= paths.dist %>',
					expand: true
			}]
		}
	});

	/** 
	 * @global
	 * register additional `copy-all` task for current module
	 */
	grunt.registerTask('copy-assets', ['copy:dist']);
};

