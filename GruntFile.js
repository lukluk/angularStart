'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        injector: {
            options: {
                ignorePath: ['bower_components', 'node_modules'],
            },
            local_dependencies: {
                files: {
                    'index.html': ['includes/*.js', 'includes/*.css'],
                }
            },
            bower_dependencies: {
                files: {
                    'index.html': ['bower.json'],
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js','**/*.css'],
                tasks: ['injector'],
                options: {
                    spawn: false,
                },
            },
        }
    })
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['injector']);


}