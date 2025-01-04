/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-300': '300% 300%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-50': '50% 50%',
        'pos-100': '100% 100%',
      },
      backgroundImage: {
        'mesh': 'url("/assets/main/gradient.webp")',
        'mesh-green': 'url("/assets/gradients/green.webp")',
        'mesh-red': 'url("/assets/gradients/red.webp")',
        'mesh-blue': 'url("/assets/gradients/blue.webp")',
        'mesh-yellow': 'url("/assets/gradients/yellow.webp")',
      }
    },
  },
  plugins: [],
}