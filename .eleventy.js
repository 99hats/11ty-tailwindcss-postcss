module.exports = function (eleventyConfig) {
  
  eleventyConfig.setDataDeepMerge(true);
  // eleventyConfig.addPassthroughCopy(true);
  eleventyConfig.addPassthroughCopy("**/*.jpg");

  return {
    dir: {
      input: "src",
      output: "dist",
      
    }
  }
};