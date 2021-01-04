/* eslint-disable guard-for-in */
/* eslint-disable no-mixed-operators */
/*
 * @Author: daboluo
 * @Date: 2020-09-22 13:58:10
 * @LastEditors: daboluo
 * @LastEditTime: 2020-10-29 16:35:19
 * @FilePath: /eth_h5/src/libs/util.js
 */
/**
  * 获取距离指定时间还有多少天
  * @param {String | Number | Date} dateTime 日期时间
  * @example
  * ```javascript
  *     getDistanceSpecifiedTime('2019/02/02 02:02:00');
  *     getDistanceSpecifiedTime(1549036800000);
  *     getDistanceSpecifiedTime(new Date("2019/2/2 00:00:00"));
  * ```
  */
// eslint-disable-next-line import/prefer-default-export
export const getDistanceSpecifiedTime = (dateTime) => {
  // 指定日期和时间
  const EndTime = new Date(dateTime);
  // 当前系统时间
  const NowTime = new Date();
  const t = EndTime.getTime() - NowTime.getTime();
  const d = Math.floor(t / 1000 / 60 / 60 / 24);
  const h = Math.floor(t / 1000 / 60 / 60 % 24);
  const m = Math.floor(t / 1000 / 60 % 60);
  const s = Math.floor(t / 1000 % 60);
  // const html = `${d} 天${h} 时${m} 分${s} 秒`;
  // console.log(html);
  return [d, h, m, s];
};

/**
 * @param  {setting}
 */
export const ajax = (setting) => {
  // 设置参数的初始值
  const opts = {
    method: (setting.method || 'GET').toUpperCase(), // 请求方式
    url: setting.url || '', // 请求地址
    async: setting.async || true, // 是否异步
    dataType: setting.dataType || 'json', // 解析方式
    data: setting.data || '', // 参数
    success: setting.success || function () {}, // 请求成功回调
    error: setting.error || function () {}, // 请求失败回调
  };

  // 参数格式化
  // eslint-disable-next-line camelcase
  function params_format(obj) {
    let str = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const i in obj) {
      str += `${i}=${obj[i]}&`;
    }
    return str.split('').slice(0, -1).join('');
  }

  // 创建ajax对象
  const xhr = new XMLHttpRequest();

  // 连接服务器open(方法GET/POST，请求地址， 异步传输)
  if (opts.method === 'GET') {
    xhr.open(opts.method, `${opts.url}?${params_format(opts.data)}`, opts.async);
    xhr.send();
  } else {
    xhr.open(opts.method, opts.url, opts.async);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(opts.data);
  }

  /*
  ** 每当readyState改变时，就会触发onreadystatechange事件
  ** readyState属性存储有XMLHttpRequest的状态信息
  ** 0 ：请求未初始化
  ** 1 ：服务器连接已建立
  ** 2 ：请求已接受
  ** 3 : 请求处理中
  ** 4 ：请求已完成，且相应就绪
  */
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
      switch (opts.dataType) {
        case 'json':
          // eslint-disable-next-line no-case-declarations
          const json = JSON.parse(xhr.responseText);
          opts.success(json);
          break;
        case 'xml':
          opts.success(xhr.responseXML);
          break;
        default:
          opts.success(xhr.responseText);
          break;
      }
    }
  };

  xhr.onerror = function (err) {
    opts.error(err);
  };
};
