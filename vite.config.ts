import { mergeConfig } from 'vite'
import base from './vite.preview.config'

export default mergeConfig(base, {
  server: {
    port: 8090,
    proxy: {
      '/echartUrl': {
        target: 'http://10.1.64.146',
        changeOrigin: true,
        rewrite: (p: string) => p.replace(/^\/echartUrl/i, ''),
      },
      '/tiffUrl': {
        target: 'http://10.20.107.239:864',
        changeOrigin: true,
        rewrite: (p: string) => p.replace(/^\/tiffUrl/i, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': 'src',
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
  },
})
