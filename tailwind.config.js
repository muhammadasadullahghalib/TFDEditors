/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b0b0e',
        panel: '#121218',
        panelLight: '#171722',
        accent: '#ff6a2f',
        accentSoft: '#ff9a57',
        neon: '#2cf5d7',
        steel: '#2b2b34',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 106, 47, 0.25)',
        glowSoft: '0 0 80px rgba(44, 245, 215, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out both',
        marquee: 'marquee 22s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
      backgroundImage: {
        hero:
          'radial-gradient(900px circle at 10% 10%, rgba(255, 106, 47, 0.28), transparent 55%), radial-gradient(700px circle at 85% 15%, rgba(44, 245, 215, 0.25), transparent 45%), linear-gradient(180deg, rgba(11,11,14,0.9) 0%, rgba(11,11,14,1) 45%)',
      },
    },
  },
  plugins: [],
}
