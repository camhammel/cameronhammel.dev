import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        'bg-gradient': (value: string) => ({
          'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme('radialGradients') }
    )
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
)

/**
 * utility class presets
 */
function _presets(): Record<string, string> {
  const shapes = ['circle', 'ellipse'];
  const pos: Record<string, string> = {
    c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
  };
  let result: Record<string, string> = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

const config: Config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-light': 'rgb(var(--color-primary-light) / <alpha-value>)',
        'primary-lighter': 'rgb(var(--color-primary-lighter) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 45s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      screens: {
        '3xl': '1700px',
      },
      fontSize: {
        '2xs': '11px',
        '3xs': '10px',
      },
      dropShadow: {
        'solid': '0 0 1px rgba(0, 0, 0, 1)',
      }
    },
  },

  plugins: [
    require('daisyui'),
    radialGradientPlugin
  ],

  daisyui: {
    themes: ["light"],
  },
};

export default config;
