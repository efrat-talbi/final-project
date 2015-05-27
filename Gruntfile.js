module.exports = function(grunt) {
  
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["src/less"]
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
 
};
