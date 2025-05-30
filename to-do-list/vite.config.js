import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { qrcode } from 'vite-plugin-qrcode';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qrcode() 
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
