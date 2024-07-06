export default function(eleventyConfig) {
	eleventyConfig.addCollection('everything', async (collection) => {
		const macroImport = `{%- from "component.njk" import component with context -%}`;

		let posts = collection.getFilteredByGlob(['**.njk','**.md']);

		for(let item of posts) {
			const frontMatter = await item.template.read();
			frontMatter.content = `${macroImport}\n${frontMatter.content}`;
			item.template.frontMatter = frontMatter;
		}
		return posts;
	});

	return {
		markdownTemplateEngine: "njk",
		templateFormats: [
			"md",
			"njk",
		]
	};
};
