// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI, sequence } from '@melt-ui/pp'
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([
		vitePreprocess(),
		preprocessMeltUI()
	]),
	kit: {
		adapter: adapter(),
		alias: {
			$ui: './src/lib/components/ui',
			$elements: './src/lib/components/elements',
			$stores: './src/lib/stores',
			$utils: './src/lib/utils',
			$lib: './src/lib',
			$components: './src/lib/components',
			$paraglide: './src/paraglide'
		}
		// adapter : adapter({out:'build'})
	}
};
export default config;
