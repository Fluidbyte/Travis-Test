module.exports = function ( grunt ) {

    grunt.initConfig({
		
        /**
         * Get package.json data
         */
        pkg: grunt.file.readJSON("package.json"),
        
        /**
         * JSHint
         */
        jshint: {
            dev: {
                options: {
                    jshintrc: ".jshintrc",
                    jshintignore: ".jshintignore"
                },
                files: {
                    src: ["src/js/**/*.js"]
                }
            }
        },
        
        /**
         * Mocha Unit Tests - !! Run independently
         */
        mocha: {
			all: ['test/**/*.html'],
			options: {
				run: true
			}
        },
        
        /**
         * Blanket-Mocha Code Coverage - !! Handles BOTH unit tests AND code coverage
         */
        blanket_mocha: {
			all: [ 'test/**/*.html' ],
			options: {
				threshold: 70,
				run: true
			}
		},
        
        /**
         * Concatenate JavaScript
         */
        concat: {
			options: {
				banner: "/*!\n <%= pkg.name %>, Build version: <%= pkg.version %>, <%= grunt.template.today(\"mm-dd-yyyy\") %>\n*/\n",
				separator: "\n"
			},
			js: {
				src: [ "src/js/**/*.js", "!src/js/vendor/**" ],
				dest: "dist/js/<%= pkg.name %>.js"
			},
		},
		
		/**
		 * Uglify (minimize) concated script file
		 */
		uglify: {
			options: {
				banner: "/*!\n <%= pkg.name %>, Build version <%= pkg.version %>, <%= grunt.template.today(\"mm-dd-yyyy\") %>\n*/\n",
				report: "gzip"
			},
			dist: {
				files: {
					"dist/js/<%= pkg.name %>.min.js": [ "<%= concat.js.dest %>" ]
				}
			}
		},
		
		/**
		 * Copy files into dist from src
		 */
		copy: {
			main: {
				files: [ 
					{ expand: true, cwd: "src/css/", src: [ "**" ], dest: "dist/css/" },
					{ expand: true, cwd: "src/assets/", src: [ "**" ], dest: "dist/assets/" },
				]
			}
		},
		
		/**
		 * Watch - runs designated tasks when files are modified
		 */
		watch: {
			scripts: {
				files: [ "src/js/**/*.js" ],
				tasks: [ "jshint", "mocha" ],
				options: {
					spawn: false
				},
			},
        }
        
    });
    
    // Load NPM Tasks
    grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-mocha");
	grunt.loadNpmTasks("grunt-blanket-mocha");
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
    
    // Register Tasks
    grunt.registerTask("default", ["jshint", "blanket_mocha", "concat", "uglify", "copy"]);
    grunt.registerTask("tests", ["jshint", "blanket_mocha"]);
    
};