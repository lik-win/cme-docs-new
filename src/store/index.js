import { defineStore } from 'pinia';
import { getMenuTree, getSampleList } from '../apis';
import { reactive, ref } from 'vue';
const isArray = Array.isArray;
const copy = obj => JSON.parse(JSON.stringify(obj));

// 解析菜单树
function parseTree(root, level, result = []) {
  if (isArray(root)) {
    root.forEach(item => parseTree(item, level, result));
  } else {
    const { id, name, parentId, code, path, children } = root;
    const newItem = { id, name, parentId, code, path, level };
    if (isArray(children)) {
      newItem.children = parseTree(children, level + 1, []);
    }
    result.push(newItem);
  }
  return result;
}

function flatTree(tree, result = []) {
  if (isArray(tree)) {
    tree.forEach(item => {
      const children = item.children;
      Reflect.deleteProperty(item, 'children');
      result.push(item);
      if (isArray(children) && children.length) {
        flatTree(children, result);
      }
    });
  }
  return result;
}

const useGlobal = defineStore('global', () => {
  const menuList = {
    components: [],
    dataServices: [],
    algorithms: []
  };
  let currentCate = null;
  let sampleList = [];
  const menus = ref([]);
  const expandKey = ref(null);
  const samples = reactive({});

  // 获取菜单树和示例列表
  Promise.all([getMenuTree(), getSampleList()]).then(resArr => {
    const [data1, data2] = resArr;
    sampleList = data2;
    data1.forEach(data => {
      const tree = parseTree(data.children || [], 1);
      menuList[data.alias] = flatTree(tree, []);
    });
    if (!currentCate) return;
    var cate = currentCate;
    currentCate = null;
    updateMenus(cate);
  });


  function getMenus2(mList) {
    const root = copy(mList.filter(m => m.level === 1));
    const menus2 = copy(mList.filter(m => m.level === 2));
    root.forEach(item => {
      const subs = menus2.filter(m => m.parentId === item.id);
      if (!subs.length) return;
      item.children = subs;
    });
    return root;
  }

  const cMenus = {
    path: 'quickStart',
    name: '快速上手',
    level: 1,
    ignore: true,
    children: [
      { path: 'npm', name: 'npm安装', level: 2 },
      { path: 'cdn', name: 'CDN', level: 2 }
    ]
  };
  function updateMenus(cate) {
    if (currentCate === cate) return;
    currentCate = cate;
    const mList = menuList[cate] || [];
    menus.value = getMenus2(mList);
    expandKey.value = menus.value[0]?.id;
    const m2 = copy(mList.filter(m => m.level === 2));
    const m2Ids = m2.map(m => m.id);
    m2.forEach(m => m.children = []);
    Object.keys(samples).forEach(n => samples[n] = []);
    sampleList.forEach(item => {
      if (!m2Ids.includes(item.appMenuId)) return;
      if (!isArray(samples[item.appMenuId])) {
        samples[item.appMenuId] = [];
      }
      samples[item.appMenuId].push(item);
      const { id, title } = item;
      const m2Item = m2.find(m => m.id === item.appMenuId);
      m2Item.children.push({ id, name: title, level: 3 });
    });
    // 添加三级菜单
    // menus.value.forEach(menu => {
    //   menu.children.forEach(m2 => {
    //     if (!(samples[m2.id] && samples[m2.id].length)) return;
    //     m2.children = samples[m2.id].map(s => {
    //       const { id, title } = s;
    //       return { id, name: title, level: 3 };
    //     });
    //   });
    // });
    // 组件服务添加快速上手菜单
    // if (cate === 'components') {
    //   menus.value.unshift(copy(cMenus));
    // }
  }

  function setCurrentKey(hash) {
    if (!(hash && typeof hash === 'string')) return;
    let id = hash;
    if (hash.startsWith('#')) {
      const p = hash.slice(1);
      id = menus.value.find(m => m.path === p)?.id;
      if (!id) return;
    }
    console.log('设置expandKey =>', id);
    expandKey.value = id;
  }


  return { menus, expandKey, samples, updateMenus, setCurrentKey };
});

export { useGlobal };
