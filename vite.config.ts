import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
  },
  server: {
    port: 3000,
    strictPort: false, // Changed from true to false to allow fallback ports
    host: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watch: {
      usePolling: true,
    },
    hmr: {
      // Fix for WebSocket connection issues
      protocol: 'ws',
      host: 'localhost',
      // Remove clientPort to let Vite handle it automatically
    },
    allowedHosts: ['localhost', '.blink.new']
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
})