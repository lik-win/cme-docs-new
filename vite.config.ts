import { type Plugin, mergeConfig } from 'vite'
import dts from 'vite-plugin-dts'
import base from './vite.preview.config'
import fs from 'node:fs'
import path from 'node:path'

const genStub: Plugin = {
  name: 'gen-stub',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'ssr-stub.js',
      source: `module.exports = {}`,
    })
  },
}

const cssNameMap = {
  'vue-repl': 'index',
  'monaco-editor': 'MonacoEditor',
};
/**
 * Patch generated entries and import their corresponding CSS files.
 * Also normalize MonacoEditor.css
 */
const patchCssFiles: Plugin = {
  name: 'patch-css',
  apply: 'build',
  writeBundle() {
    //  inject css imports to the files
    const outDir = path.resolve('dist')
      ;['vue-repl', 'monaco-editor'].forEach((file) => {
        const filePath = path.resolve(outDir, file + '.js')
        const content = fs.readFileSync(filePath, 'utf-8')
        // @ts-ignore
        fs.writeFileSync(filePath, `import './${cssNameMap[file]}.css'\n${content}`)
      })
  },
}

export default mergeConfig(base, {
  server: {
    port: 8090,
    proxy: {
      '/echartUrl': {
        target: 'http://192.168.110.25:32189/', // 目标后端API域名
        changeOrigin: true, // 是否改变源
        rewrite: (path) => path.replace(/^\/echartUrl/, '/') // 重写路径
      }
    }
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
    genStub,
    patchCssFiles,
  ],
  resolve: {
    alias: {
      '@': 'src'
    },
  },
  optimizeDeps: {
    // avoid late discovered deps
    include: [
      'typescript',
      'monaco-editor-core/esm/vs/editor/editor.worker',
      'vue/server-renderer',
    ],
  },
  base: './',
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: {
        'vue-repl': './src/index.ts',
        'monaco-editor': './src/editor/MonacoEditor.vue'
      },
      formats: ['es'],
      fileName: () => '[name].js',
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
      external: ['vue', 'vue/compiler-sfc'],
    },
  },
})
