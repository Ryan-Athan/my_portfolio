import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my_portfolio/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
  build: {
    outDir: 'dist', // Render will look for 'dist' by default
  },
  server: {
    headers: {
      'Content-Type': 'text/css',
    },
  },
});
