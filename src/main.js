/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import 'element-plus/dist/index.css';
import './assets/style.scss';
import './assets/element-rewrite.scss';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router/index';
import App from './App.vue';
import { GridRender } from 'CME-GridRender';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(GridRender);
app.mount('#app')
