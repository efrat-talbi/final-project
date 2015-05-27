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
    }
  });
  
  
  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-less');
 
};
