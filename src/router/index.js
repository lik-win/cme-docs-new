import { createRouter, createWebHistory } from 'vue-router'
import EditIndex from '../views/EditIndex.vue';
import Samples from '../views/Samples.vue';
import Home from '../views/Home.vue';

/**
 * 路径规范：
 * 1、url路径部分，全部使用小写字母，如果有多个单词，使用“-”连接
 * 2、query/hash或其他部分，大小写不限制，推荐驼峰写法
 * 如：/example/scene/init-2d-map?keyword=init2dMap  (问号前面需遵循规范1，其他地方遵循规范2)
 */
const routes = [{
  path: '/',
  redirect: '/index',
}, {
  path: '/index',
  name: 'index',
  component: Home
}, {
  path: '/samples',
  name: 'samples',
  component: Samples
}, {
  path: '/example/:id',
  name: 'example',
  component: EditIndex,
}];

const routeBase = 'cmedocs';
const router = createRouter({
  history: createWebHistory(routeBase),
  routes
});

router.beforeEach((to, from, next) => {
  console.log('to ==>', to);
  next();
});


export { routeBase };
export default router;
