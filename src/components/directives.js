/*
 * @Author: 大菠萝
 * @Date: 2020-09-25 08:56:30
 * @LastEditors: daboluo
 * @LastEditTime: 2020-09-25 08:56:46
 * @FilePath: /eth_h5/src/components/directives.js
 */
import copy from './copy';
// 自定义指令
const directives = {
  copy,
};
// 这种写法可以批量注册指令
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
