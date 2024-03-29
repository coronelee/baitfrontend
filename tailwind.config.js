/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        openHamburger: {
          '0%': {
            transform: 'matrix3d(1, 0, 0, 0,  0, 1, 0, 0,  0, 0, 1, 0, 0, 0, 0, 1) scale(1)',
            outline: 'none'
          },
          '100%': {
            transform:
              'matrix3d(3.894348, 0.638783, 0, 0.002261,  0, 2.82, 0, 0,  0, 0, 1, 0, 101, 109, 0, 1) scaleY(0.2) scaleX(0.15)',
            outline: '15px solid #0f33ff'
          }
        },
        closeHamburger: {
          '0%': {
            transform:
              'matrix3d(3.894348, 0.638783, 0, 0.002261,  0, 2.82, 0, 0,  0, 0, 1, 0, 101, 109, 0, 1) scaleY(0.2) scaleX(0.15)',
            outline: '15px solid #0f33ff'
          },
          '100%': {
            transform: 'matrix3d(1, 0, 0, 0,  0, 1, 0, 0,  0, 0, 1, 0, 0, 0, 0, 1) scale(1)',
            outline: 'none'
          }
        },
        openMenu: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': {
            opacity: 1
          }
        },
        openPage: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '50%': { opacity: 0 },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        loadText: {
          '0%': { width: 0 },

          '100%': {
            width: '100%'
          }
        },
        backgroundRadial: {
          '0%': {
            'background-position': '0px 0px'
          },

          '50%': { 'background-position': '50% 50%' },

          '100%': {
            'background-position': '0px 0px'
          }
        },
        animateWorks: {
          '0%': {
            transform: 'translateX(0)'
          },

          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      }
    },
    fontFamily: {
      numbers: ['numbers', 'sans-serif'],
      maintext: ['maintext', 'sans-serif'],
      tech: ['tech', 'sans-serif']
    }
  },
  plugins: []
}
