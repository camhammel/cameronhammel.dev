import { sveltekit } from '@sveltejs/kit/vite';
import Components from 'unplugin-svelte-components/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		Components({
			dts: './src/components.d.ts',
			external: [
				{
					from: 'svelte-seo',
					defaultImport: false,
					names: ['default as SvelteSeo']
				}
			]
		}),
		sveltekit(),
	]
});
