/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Breakpoints from the wireframe table. Each is min-width = wireframe max + 1,
    // so `bp640:` means "wider than 640px".
    screens: {
      bp480: '481px',
      bp560: '561px',
      bp640: '641px',
      bp700: '701px',
      bp760: '761px',
      bp820: '821px',
      lg: '1024px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      navy: '#0B2559',
      deep: '#06163A',
      onyx: '#0A0A0C',
      white: '#FFFFFF',
      motion: '#2C62C9',
      mist: '#EEF2F8',
      highlight: '#8FB0F2', // one word in the hero H1 only
      live: '#1E7A4C', // "Live" status badge only
      line: '#D9DFEA', // hairline on light surfaces
      muted: '#4A5468', // secondary text on light surfaces (AA on white and mist)
    },
    borderRadius: {
      none: '0',
      card: '18px',
      full: '9999px',
    },
    fontFamily: {
      display: ['Sora', 'Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'Arial', 'sans-serif'],
      sans: ['Inter', '"Inter Fallback"', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
    },
    extend: {
      maxWidth: {
        container: '1120px',
      },
      spacing: {
        gutter: 'clamp(16px, 4vw, 40px)',
      },
    },
  },
  plugins: [],
}
