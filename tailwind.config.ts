import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				// teal: {
				// 	DEFAULT: '#008080'
				// },
				teal: {
					DEFAULT: '#255957'
				},
				navy: {
					DEFAULT: '#001f3f'
				},
				mustard: {
					DEFAULT: '#ffdd57'
				},
				lightgray: {
					DEFAULT: '#f5f5f5'
				},
				white: {
					DEFAULT: '#EFEFF3'
				},
				// aqua: {
				// 	DEFAULT: '#66CDAA'
				// },
				aqua: {
					DEFAULT: '#437C90'
				},
				blue: {
					DEFAULT: '#22158A'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
};
export default config;
