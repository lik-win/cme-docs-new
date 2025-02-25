/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import 'element-plus/dist/index.css';
import './assets/style.scss';
import './assets/element-rewrite.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';
import router from './router/index';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.use(ElementPlus);
app.use(router);
app.mount('#app');
