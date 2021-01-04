/*
 * @Author: 大菠萝
 * @Date: 2020-09-20 20:59:33
 * @LastEditors: daboluo
 * @LastEditTime: 2020-09-24 00:32:09
 * @FilePath: /eth_h5/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-underscore-dangle':'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
