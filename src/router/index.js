import { createRouter, createWebHistory } from 'vue-router'
import EditIndex from '../views/EditIndex.vue';
import ViewIndex from '../views/ViewIndex.vue';
import Samples from '../views/Samples.vue';
import DataServices from '../views/DataServices.vue';
import Algorithms from '../views/Algorithms.vue';
import Home from '../views/HomeNew.vue';
import SceneVue from '../views/Scene.vue';
import CasesVue from '../views/Cases.vue';
import Support from '../views/Support.vue';

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
  component: Samples,
  meta: { cate: 'components' }
}, {
  path: '/components/:id',
  name: 'example',
  component: EditIndex,
  meta: { cate: 'components' }
}, {
  path: '/data-services',
  name: 'dataServices',
  component: DataServices,
  meta: { cate: 'dataServices' }
}, {
  path: '/data-services/:id',
  name: 'dataServicesDemo',
  component: ViewIndex,
  meta: { cate: 'dataServices' }
}, {
  path: '/algorithms',
  name: 'algorithms',
  component: Algorithms,
  meta: { cate: 'algorithms' }
}, {
  path: '/algorithms/:id',
  name: 'algorithmsDemo',
  component: ViewIndex,
  meta: { cate: 'algorithms' }
}, {
  path: '/scenes',
  name: 'scenes',
  component: SceneVue,
  meta: { cate: 'scenes' }
}, {
  path: '/scenes/:type',
  name: 'scenesDetail',
  component: () => import("../views/SceneDetail.vue"),
  meta: { cate: 'scenesDetail' }
}, {
  path: '/cases',
  name: 'cases',
  component: CasesVue,
  meta: { cate: 'cases' }
}, {
  path: '/support',
  name: 'support',
  component: Support,
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
