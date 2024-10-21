import { createRouter, createWebHistory } from 'vue-router'
import Laytout from './../Layout.vue';
import DemoIndex from './../DemoIndex.vue';
import Samples from './../views/docs/Samples.vue';

const routes = [{
  path: '/',
  redirect: '/samples',
}, {
  path: '/samples',
  name: 'samples',
  component: Samples,
}, {
  path: '/cogtif',
  component: Laytout,
  meta: { menu: 'CogTif' },
  children: [{
    path: '/cogtif/radar',
    name: 'radar',
    component: DemoIndex,
    meta: {
      menu: '雷达',
      fileName: 'radar.vue',
      filePath: './../views/cogtif/radar.vue'
    }
  }]
}];

const routeBase = 'cmedocs';
const router = createRouter({
  history: createWebHistory('cmedocs'),
  routes
});

function getMenus(routeList, menus = []) {
  routeList.forEach(item => {
    if (!(item.meta && item.meta.menu)) return;
    const { path, meta, children } = item;
    const menuItem = { path, ...meta };
    if (children && children.length) {
      menuItem.children = [];
      getMenus(children, menuItem.children);
    }
    menus.push(menuItem);
  });
  return menus;
}

const menus = getMenus(routes);

export { menus, routeBase };
export default router;
