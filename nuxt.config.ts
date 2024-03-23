// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		['@nuxtjs/google-fonts', {
			families: {
				'Space Grotesk': [100, 200, 400, 500, 600, 700, 800],
				'Raleway': [100, 200, 400, 500, 600, 700, 800],
				'Inter': [100, 200, 400, 500, 600, 700, 800],
				download: true,
				inject: true
			}
		}]
	],
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
		tailwindcss: {},
		autoprefixer: {},
		},
	},
	image: {
		// Options
	}
})
