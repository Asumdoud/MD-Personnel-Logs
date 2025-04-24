// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Registry Home',
			favicon: '/src/assets/MD_logo.png',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Asumdoud/MD-Personnel-Logs' }],
			sidebar: [
				{
					label: 'Resources',
					autogenerate: { directory: 'Resources' },
				},
			],
		}),
	],
});
