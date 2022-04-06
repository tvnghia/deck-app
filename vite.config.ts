const path = require('path')
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    server: {
      port: Number(process.env.VITE_PORT) || 3001,
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    plugins: [react()],
  })
}
