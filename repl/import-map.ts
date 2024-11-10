import { computed, version as currentVersion, ref } from 'vue'

export function useVueImportMap(
  defaults: {
    runtimeDev?: string | (() => string)
    runtimeProd?: string | (() => string)
    serverRenderer?: string | (() => string)
    vueVersion?: string | null
  } = {},
) {
  // function normalizeDefaults(defaults?: string | (() => string)) {
  //   if (!defaults) return
  //   return typeof defaults === 'string' ? defaults : defaults()
  // }
  const productionMode = ref(false)
  const vueVersion = ref<string | null>(defaults.vueVersion || null)
  const importMap = computed<ImportMap>(() => {
    const vue = `/libs/runtime-dom.esm-browser.js`;
    const serverRenderer = `/libs/server-renderer.esm-browser.js`;
    return {
      imports: {
        vue,
        'vue/server-renderer': serverRenderer,
        CME2D: '/libs/cme2d.mjs',
        CME3D: '/libs/CME3D/CME3D.js',
        'CME3D/': '/libs/CME3D/'
        // 'CME2D/': '/libs/CME2D/',
        // CME2D: '/libs/cme2d.js'
      }
    }
  })

  return {
    productionMode,
    importMap,
    vueVersion,
    defaultVersion: currentVersion,
  }
}

export interface ImportMap {
  imports?: Record<string, string | undefined>
  scopes?: Record<string, Record<string, string>>
}

export function mergeImportMap(a: ImportMap, b: ImportMap): ImportMap {
  return {
    imports: { ...a.imports, ...b.imports },
    scopes: { ...a.scopes, ...b.scopes },
  }
}
