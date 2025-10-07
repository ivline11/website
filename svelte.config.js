import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use the static adapter to produce a prerendered site for static hosts.
		adapter: adapter(),
		prerender: (function () {
			// include default crawl plus explicit entries for each post slug
			const entries = ['*'];
			try {
				const postsDir = path.resolve('src/posts');
				const files = fs.readdirSync(postsDir);
				for (const f of files) {
					if (f.endsWith('.md')) {
						const slug = f.replace(/\.md$/, '');
						entries.push(`/Archive/${slug}`);
					}
				}
			} catch (e) {
				// if reading fails (e.g., during some installs), fall back to default
				console.warn('Could not read src/posts for prerender entries:', e);
			}
			return { entries };
		})()
	}
};

export default config;
