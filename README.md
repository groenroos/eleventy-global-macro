# Eleventy global macro test

Both projects build two routes, `/nunjucks` and `/markdown`. Each relies on a globally loaded macro, `component()`, defined in `_includes/component.njk`.

The Eleventy 2.0.1 project uses the approach from [this comment](https://github.com/11ty/eleventy/issues/613#issuecomment-999637109) to globally inject importing the `component()` macro from `component.njk`.

The Eleventy 3.0.0 project attempts to use the slightly modified approach suggested [here](https://github.com/11ty/eleventy/issues/3345#issuecomment-2211172226).
