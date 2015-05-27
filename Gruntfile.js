module.exports = function(grunt) {
  
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["src/less"],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers : [ "last 2 versions" ]}),
            new (require('less-plugin-clean-css'))()
          ]
        },
        files: {
          "public/main.css": "src/less/main.less"
        }
      }
    },
    
    express: {
      all: {
        options: {
          bases: ['.', '/public'],
          livereload: true,
          open: 'http://localhost:3000'
        }
      }
    },
    
    watch: {
      files: "src/less/*.less",
      tasks: ["less"]
    }
  });
  
  
  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('start', ['express', 'watch']);
};
