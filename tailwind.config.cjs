/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#111111',
				light: '#f6f6f6',
				gray: '#666'
			},
			// fontFamily: {
			// 	'Soyuz-Grotesk': ['SoyuzGroteskBold', 'sans'],
			// 	'HK-Grotesk': ['HKGrotesk-Regular', 'sans-serif'],
			// },
		},
	},
	plugins: [],
}
