import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			"style": "src/styles/app.css",
			"components": "src/components",
			"photoshoots": "src/photoshoots",
			"team": "src/team"
		},
		adapter: adapter(),
		prerender: {
			entries: ["*"],
		},
	},
};

export default config;
