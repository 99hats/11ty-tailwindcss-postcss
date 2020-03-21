module.exports = function (eleventyConfig) {
  
  eleventyConfig.setDataDeepMerge(true);
  
  return {
    dir: {
      input: "src",
      output: "dist",
      
    }
  }
};