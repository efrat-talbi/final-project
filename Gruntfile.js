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
    
    watch: {
      files: "src/less/*.less",
      tasks: ["less"]
    }
  });
  
  
  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.registerTask('default', ['less', 'watch']);
};
