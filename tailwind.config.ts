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
				teal: {
					DEFAULT: '#008080'
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
				aqua: {
					DEFAULT: '#66CDAA'
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
	plugins: [
		function({ addUtilities }: PluginAPI) {
			addUtilities({
				'.border-gradient': {
					position: 'relative'
				},
				'.border-gradient:before': {
					content: '""',
					position: 'absolute',
					top: '-2px',
					left: '-2px',
					right: '-2px',
					bottom: '-2px',
					zIndex: '-1',
					background: 'linear-gradient(to right, #008080, #66CDAA)',
					borderRadius: 'inherit'
				}
			});
		}
	]
};
export default config;
