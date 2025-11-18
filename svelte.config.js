import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			"style": "src/styles/app.css",
			"components": "src/components",
			"data": "src/data"
		},
		adapter: adapter({
			fallback: '404.html'
		}),
		prerender: {
			entries: ["*"],
		},
	},
};

export default config;
