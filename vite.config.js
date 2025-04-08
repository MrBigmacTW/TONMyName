import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    proxy: {
      '/manifest': {
        target: 'https://raw.githubusercontent.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/manifest/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  publicDir: 'public'
}) 