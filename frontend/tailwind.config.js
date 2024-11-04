/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'glass': {
          'light': 'rgba(255, 255, 255, 0.08)',
          'medium': 'rgba(255, 255, 255, 0.12)',
          'heavy': 'rgba(255, 255, 255, 0.16)',
        },
        'outline': {
          'default': 'rgba(255, 255, 255, 0.15)',
        },
      },
      backdropBlur: {
        'xs': '2px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 4px 30px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'gradient-xy': 'gradient-xy 3s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'pulse': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '.5'
          }
        },
        'spin': {
          'from': {
            transform: 'rotate(0deg)'
          },
          'to': {
            transform: 'rotate(360deg)'
          }
        }
      }
    },
  },
  plugins: [],
}