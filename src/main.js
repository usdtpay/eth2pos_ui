/*
 * @Author: 大菠萝
 * @Date: 2020-09-20 20:59:33
 * @LastEditors: daboluo
 * @LastEditTime: 2020-09-28 11:42:31
 * @FilePath: /eth_h5/src/main.js
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/layer/layer';
import './assets/layer/need/layer.css';
import 'lib-flexible';
import '@/web3';

// eslint-disable-next-line import/order
import Directives from '@/components/directives';

Vue.use(Directives);

Vue.prototype.$layer = (method, options) => {
  if (!!window.imToken || window.ethereum.isImToken) {
    console.log('imtoken');
    if (method === 'open') {
      if (options && options.type === 2) {
        // eslint-disable-next-line no-undef
        imToken.callAPI('native.showLoading', 'loading！');
        console.log('操作中 imToken：”loading！”');
      } else {
        // eslint-disable-next-line no-undef
        imToken.callAPI('native.toast', {
          type: 'warnning',
          message: options.content,
          align: 'bottom',
          model: 'banner',
          duration: 1000 * 5,
        });
      }
    } else if (method === 'close') {
      // eslint-disable-next-line no-undef
      imToken.callAPI('native.hideLoading');
    }
  } else {
    console.log('pc', method);
    switch (method) {
      case 'open':
        // eslint-disable-next-line no-undef
        layer.open(options);
        break;
      case 'close':
        // eslint-disable-next-line no-undef
        layer.closeAll();
        break;
      default:
        // eslint-disable-next-line no-undef
        layer.close(options);
        break;
    }
  }
};
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
