import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
	  host: '0.0.0.0',
    https: {
      key: fs.readFileSync(path.resolve('/opt/psa/var/certificates/server.key')),
      cert: fs.readFileSync(path.resolve('/opt/psa/var/certificates/server.crt')),
    },
  },
})
