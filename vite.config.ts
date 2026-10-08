import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works in public_html or any subfolder.
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
    // Never inline assets as data: URIs — the CSP only allows 'self'.
    assetsInlineLimit: 0,
  },
})
