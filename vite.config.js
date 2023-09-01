import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import paths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), paths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      src: path.resolve(__dirname, 'src/'),
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      context: path.resolve(__dirname, 'src/context/')
    }
  }
})
