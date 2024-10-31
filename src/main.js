/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import 'element-plus/dist/index.css';
import './assets/style.scss';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
// import { Repl, useStore, useVueImportMap } from '../repl/index.ts';
import router from './router/index';
import App from './App.vue';
import { GridRender } from 'CME-GridRender';

const window = globalThis.window;
window.process = { env: {} }


// const App = {
//   setup() {
//     const query = new URLSearchParams(location.search)
//     const { importMap: builtinImportMap, vueVersion } = useVueImportMap({
//       runtimeDev: import.meta.env.PROD
//         ? undefined
//         : `${location.origin}/src/vue-dev-proxy`,
//       serverRenderer: import.meta.env.PROD
//         ? undefined
//         : `${location.origin}/src/vue-server-renderer-dev-proxy`,
//     })
//     const store = (window.store = useStore(
//       {
//         builtinImportMap,
//         vueVersion,
//         showOutput: ref(query.has('so')),
//         outputMode: ref(query.get('om') || 'preview'),
//       },
//       location.hash,
//     ))
//     console.info(store)

//     watchEffect(() => history.replaceState({}, '', store.serialize()))

//     // setTimeout(() => {
//     //   store.setFiles(
//     //     {
//     //       'src/index.html': '<h1>yo</h1>',
//     //       'src/main.js': 'document.body.innerHTML = "<h1>hello</h1>"',
//     //       'src/foo.js': 'document.body.innerHTML = "<h1>hello</h1>"',
//     //       'src/bar.js': 'document.body.innerHTML = "<h1>hello</h1>"',
//     //       'src/baz.js': 'document.body.innerHTML = "<h1>hello</h1>"',
//     //     },
//     //     'src/index.html',
//     //   )
//     // }, 1000)

//     // store.vueVersion = '3.4.1'
//     const theme = ref('dark');
//     window.theme = theme
//     const previewTheme = ref(false)
//     window.previewTheme = previewTheme

//     return () =>
//       h(Repl, {
//         store,
//         theme: theme.value,
//         previewTheme: previewTheme.value,
//         // editor: MonacoEditor,
//         // layout: 'vertical',
//         ssr: true,
//         sfcOptions: {
//           script: {
//             // inlineTemplate: false
//           },
//         },
//         showCompileOutput: false,
//         showImportMap: false
//         // autoSave: false,
//       })
//   },
// }

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(GridRender);
app.mount('#app')
