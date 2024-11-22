/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		typography: {
			DEFAULT: {

				css: {
					h2: {
						color: 'var(--color-900)',
						marginBottom: '0 !important',
					},
					h3: {
						color: 'var(--color-900)',
						marginBottom: '0',
					},
					strong: {
						color: 'var(--color-900)',
					},
					a: {
						color: 'var(--color-700)',
						'&:hover': {
							color: 'var(--color-500)',
						},

					},

				},

			},

		},
	},
	plugins: [typography]
}
