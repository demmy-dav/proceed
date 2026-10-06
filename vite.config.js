import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // One HTML file per page: /, /work/, /how-we-work/ and /book/
    rollupOptions: {
      input: {
        home: 'index.html',
        work: 'work/index.html',
        how: 'how-we-work/index.html',
        book: 'book/index.html',
      },
    },
  },
})
