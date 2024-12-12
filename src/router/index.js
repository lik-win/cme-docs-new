import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeNew.vue';
// import EditIndex from '../views/EditIndex.vue';
// import ViewIndex from '../views/ViewIndex.vue';
// import Samples from '../views/Samples.vue';
// import DataServices from '../views/DataServices.vue';
// import Algorithms from '../views/Algorithms.vue';
// import SceneVue from '../views/Scene.vue';
// import CasesVue from '../views/Cases.vue';
// import Support from '../views/Support.vue';

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
  component: Home,
  meta: { cate: 'index' }
}, {
  path: '/components',
  name: 'components',
  component: () => import('./../views/Samples.vue'),
  meta: { cate: 'components' }
}, {
  path: '/components/:id',
  name: 'example',
  component: () => import('./../views/EditIndex.vue'),
  meta: { cate: 'components' }
}, {
  path: '/data-services',
  name: 'dataServices',
  component: () => import('./../views/DataServices.vue'),
  meta: { cate: 'dataServices' }
}, {
  path: '/data-services/:id',
  name: 'dataServicesDemo',
  component: () => import('./../views/ViewIndex.vue'),
  meta: { cate: 'dataServices' }
}, {
  path: '/algorithms',
  name: 'algorithms',
  component: () => import('./../views/Algorithms.vue'),
  meta: { cate: 'algorithms' }
}, {
  path: '/algorithms/:id',
  name: 'algorithmsDemo',
  component: () => import('./../views/ViewIndex.vue'),
  meta: { cate: 'algorithms' }
}, {
  path: '/scenes',
  name: 'scenes',
  component: () => import('./../views/Scene.vue'),
  meta: { cate: 'scenes' }
}, {
  path: '/scenes/:type',
  name: 'scenesDetail',
  component: () => import("../views/SceneDetail.vue"),
  meta: { cate: 'scenesDetail' }
}, {
  path: '/cases',
  name: 'cases',
  component: () => import('./../views/Cases.vue'),
  meta: { cate: 'cases' }
}, {
  path: '/support',
  name: 'support',
  component: () => import('./../views/Support.vue'),
  meta: { cate: 'support' }
}];

const routeBase = 'cmedocs';
const router = createRouter({
  history: createWebHistory(routeBase),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});


export { routeBase };
export default router;
