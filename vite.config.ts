import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@c': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views'),
      // '@/styles': path.resolve(__dirname, './src/styles'),
      // '@/utils': path.resolve(__dirname, './src/utils'),
      // '@/assets': path.resolve(__dirname, './src/assets'),
      // '@/pages': path.resolve(__dirname, './src/pages'),
      // '@/routes': path.resolve(__dirname, './src/routes'),
      // '@/hooks': path.resolve(__dirname, './src/hooks'),
      // '@/store': path.resolve(__dirname, './src/store')
    }
  }
})
