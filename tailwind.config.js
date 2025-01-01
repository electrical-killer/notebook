import svgToDataUri from 'mini-svg-data-uri'
import { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const twConfig: Config = {
  content: [
    "./src/**/*.{md,mdx,js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx,js,jsx,ts,tsx}",
    "./blog/**/*.{md,mdx,js,jsx,ts,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--content-background)',
  			card: 'var(--ifm-card-background-color)',
  			text: 'var(--ifm-text-color)',
  			secondary: 'var(--ifm-secondary-text-color)',
  			link: 'var(--ifm-link-color)',
  			primary: 'var(--ifm-color-primary)',
  			border: 'var(--ifm-border-color)'
  		},
  		fontFamily: {
  			misans: [
  				'misans'
  			]
  		},
  		borderRadius: {
  			card: 'var(--ifm-card-border-radius)'
  		},
  		boxShadow: {
  			blog: 'var(--blog-item-shadow)'
  		},
  		animation: {
  			aurora: 'aurora 60s linear infinite',
  			marquee: 'marquee var(--duration) linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		},
  		keyframes: {
  			aurora: {
  				from: {
  					backgroundPosition: '50% 50%, 50% 50%'
  				},
  				to: {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			}
  		}
  	}
  },
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的基础样式重置
  },
  // important: '#tailwind-wrapper', // 增加所有 Tailwind 类的优先级
  plugins: [
    addVariablesForColors,
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'bg-grid': value => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      )
    }),
    addVariablesForColors,
  ],
}

export default twConfig

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}
