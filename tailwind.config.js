/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          50: "#fcfcfc",
          100: "#f5f5f5",
          200: "#e8e8e8",
          300: "#d1d1d1",
          400: "#b0b0b0",
          500: "#8a8a8a",
          600: "#6d6d6d",
          700: "#555555",
          800: "#2a2a2a",
          900: "#121212",
          950: "#000000",
        },
        secondary: {
          DEFAULT: "#5E6AD2",
          50: "#f1f2fc",
          100: "#e3e5f8",
          200: "#c6cbf0",
          300: "#9fa8e5",
          400: "#7c88da",
          500: "#5E6AD2",
          600: "#4c55bc",
          700: "#3d4498",
          800: "#313778",
          900: "#1e214a",
        },
        dark: {
          DEFAULT: "#050505",
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#1a1a1a",
          900: "#0a0a0a",
          950: "#050505",
        },
        accent: {
          green: "#3FB950",
          blue: "#5E6AD2",
          purple: "#8957e5",
          red: "#e5534b",
          yellow: "#d29922",
        },
        surface: {
          DEFAULT: "#0f0f0f",
          hover: "#1a1a1a",
          active: "#202020",
          raised: "#161616",
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Audiowide', 'Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-out': 'fadeOut 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite alternate',
        'fadeSlideUp': 'fadeSlideUp 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'float-rotate': 'floatRotate 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeSlideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 8px rgba(94, 106, 210, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(94, 106, 210, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          },
        },
        textShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatRotate: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)'
          },
          '25%': { 
            transform: 'translateY(-5px) rotate(1deg)'
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(0deg)'
          },
          '75%': { 
            transform: 'translateY(-5px) rotate(-1deg)'
          },
        },
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'linear-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'linear': '0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'linear-lg': '0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.03)',
        'glow': '0 0 15px rgba(94, 106, 210, 0.5)',
        'glow-sm': '0 0 8px rgba(94, 106, 210, 0.3)',
        'glow-lg': '0 0 25px rgba(94, 106, 210, 0.5), 0 0 5px rgba(137, 87, 229, 0.3)',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #5E6AD2, 0 0 20px #5E6AD2, 0 0 25px #5E6AD2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 