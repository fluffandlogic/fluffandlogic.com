module.exports = function(eleventyConfig) {
    //Return your Object options:
    return {
        dir: {
            includes: "../includes",
            input: "src",
            output: "dist",
            "dataTemplateEngine": "njk",
            "htmlTemplateEngine": "njk"
        }
    }
};
