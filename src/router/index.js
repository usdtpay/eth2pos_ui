/*
 * @Author: 大菠萝
 * @Date: 2020-09-20 20:59:33
 * @LastEditors: 大菠萝
 * @LastEditTime: 2020-10-09 23:36:04
 * @FilePath: /eth_h5/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Black from '../views/Black.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: () => import('../views/exchange.vue'),
  },
  {
    path: '*',
    component: Home,
  },
  // {
  //   path: '/black',
  //   name: 'black',
  //   component: Black,
  // },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
