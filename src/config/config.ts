// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

// export const configData: Config = {
// 	siteTitle: 'ValetPro. 1# Valet SaaS',
// 	siteDescription:
// 		'ValetPro is your fully-fledged solution for managing valet services',
// 	ogImage: '/og.jpg',
// 	logo: {
// 		src: '/logo.svg',
// 		alt: 'Valetpro. logo'
// 	},
// 	canonical: true,
// 	noindex: false,
// 	mode: 'auto',
// 	scrollAnimations: true
// }

export const configData = {
	siteTitle: 'ValetPro. 1# Valet SaaS',
	siteDescription:
	  'ValetPro is your fully-fledged solution for managing valet services',
	ogImage: '/og.jpg',
	logo: {
	  src: '/logo-light.svg', // Light theme logo
	  darkSrc: '/logo-dark.svg', // Dark theme logo (optional)
	  alt: 'Valetpro. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
  }