import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://165.232.177.165:5000/',
        changeOrigin: true,
        secure: false,
      },
      '/uploads': {
        target: 'http://165.232.177.165:5000/',
        changeOrigin: true,
        secure: false,
      },
    },
    port: 3000
  }
});