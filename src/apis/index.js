const HOST = 'http://10.40.88.119:11000';

function getUrl(url) {
  if (!url.includes('http')) {
    url = `${HOST}/${url}`.replace(/(?<!http:)\/{2,}/ig, '/');
  }
  return url;
}

function get(url, params = {}) {
  const urlObj = new URL(getUrl(url));
  Object.keys(params).forEach(n => urlObj.searchParams.append(n, params[n]));
  return fetch(urlObj.toString(), { mode: 'cors' })
    .then(res => res.json())
    .then(resObj => {
      if (resObj?.code !== 200) {
        throw Error(resObj);
      }
      return resObj.data;
    });
}

function post(url, params = {}) {
  return fetch(getUrl(url), {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(params)
  }).then(res => res.json())
    .then(resObj => {
      if (resObj?.code !== 200) {
        throw Error(resObj?.msg);
      }
      return resObj.data;
    });
}

export function getMenuTree() {
  const url = '/cmes-manager/appMenu/routes';
  return get(url, { appId: '1860975575465824258' });
}

export function getSampleList() {
  return get('/cmes-function/document/getList');
}

export function getSampleInfo(id) {
  if (!id) return Promise.reject('参数缺失！');
  return get('/cmes-function/document/detail', { id });
}