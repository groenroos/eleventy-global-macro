module.exports = function(eleventyConfig) {
	eleventyConfig.addCollection('everything', async (collection) => {
		const macroImport = `{%- from "component.njk" import component with context -%}`;

		return collection.getFilteredByGlob(['**.njk','**.md']).map((item) => {
			item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`;
			return item;
		});
	});

	return {
		markdownTemplateEngine: "njk",
		templateFormats: [
			"md",
			"njk",
		]
	};
};
