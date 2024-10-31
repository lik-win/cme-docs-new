import { createRouter, createWebHistory } from 'vue-router'
import examples from './examples';
import Laytout from './../Layout.vue';
// import EditIndex from './../EditIndex.vue';
import Samples from './../views/docs/Samples.vue';

/**
 * 路径规范：
 * 1、url路径部分，全部使用小写字母，如果有多个单词，使用“-”连接
 * 2、query/hash或其他部分，大小写不限制，推荐驼峰写法
 * 如：/example/scene/init-2d-map?keyword=init2dMap  (问号前面需遵循规范1，其他地方遵循规范2)
 */
const routes = [{
  path: '/',
  redirect: '/samples',
}, {
  path: '/samples',
  name: 'samples',
  component: Samples
}, {
  path: '/example',
  name: 'example',
  component: Laytout,
  children: [...examples]
}];

const routeBase = 'cmedocs';
const router = createRouter({
  history: createWebHistory(routeBase),
  routes
});

function getMenus(routeList, menus = []) {
  routeList.forEach(item => {
    const { meta, path, children } = item;
    if (!(meta && meta.title) || meta.hidden) return;
    const menuItem = { path, ...meta };
    if (children && children.length) {
      menuItem.children = [];
      getMenus(children, menuItem.children);
    }
    menus.push(menuItem);
  });
  return menus;
}
const menus = getMenus(examples);

function getExampleRoutes() {
  return router.getRoutes().filter(r => ('vueName' in r.meta));
}

const exampleRoutes = getExampleRoutes();

export { menus, routeBase, exampleRoutes };
export default router;
