(function () {
  const host = location.host || location.ancestorOrigins[0];
  if (window.top === window) return;
  if (apiInfo) {
    const message = JSON.stringify({ msgType: 'apiInfo', data: apiInfo });
    window.top.postMessage(message, host);
  }

  function parseData(value, type) {
    if (!type) return value;
    const _type = type.toLowerCase();
    switch (_type) {
      case 'number':
      case 'float':
      case 'int':
      case 'integer':
      case 'double':
        return Number(value);
      case 'array':
        return value.split(',');
      default:
        return value;
    }
  }

  function isEmpty(val) {
    return val === null || val === undefined || val === '';
  }

  const numTypes = ['number', 'float', 'int', 'integer', 'double'];

  function parseArgsAndRun(params) {
    const args = {};
    let errMsg = '';
    params.forEach(item => {
      if (errMsg) return;
      const val = typeof item.value === 'string' ? (item.value || '').trim() : item.value;
      if (item.required && isEmpty(val)) {
        errMsg = `参数"${item.name}"为必传参数!`;
        return;
      }
      const _type = item.type.toLowerCase();
      const value = parseData(val, _type);
      if (value !== value) {
        errMsg = `参数"${item.name}"类型错误，应传${item.type}类型!`;
        return;
      }
      args[item.name] = value;
    });

    if (errMsg) {
      const message = JSON.stringify({ msgType: 'paramError', data: errMsg });
      window.top.postMessage(message, host);
      return;
    }
    if (!onRun) return;
    onRun(args);
  }

  window.addEventListener('message', evt => {
    if (typeof evt.data !== 'string') return;
    const msgData = JSON.parse(evt.data);
    if (msgData.msgType === 'toRun') {
      parseArgsAndRun(msgData.params);
    }
  });

  window.postResult = function (data) {
    const msg = JSON.stringify({ msgType: 'response', data });
    window.top.postMessage(msg, host);
  }
})();