/*
 * @Author: daboluo
 * @Date: 2020-09-21 09:48:44
 * @LastEditors: daboluo
 * @LastEditTime: 2020-10-26 23:42:11
 * @FilePath: /eth_h5/vue.config.js
 */
const BASE_URL = process.env.NODE_ENV === 'production' ? '' : '/';
module.exports = {
  // 路径问题
  // publicPath: './',
  publicPath: BASE_URL,
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('scss')
  //     .oneOf('vue')
  //     .use('px2rem-loader')
  //     .loader('px2rem-loader')
  //     .before('postcss-loader') // this makes it work.
  //     .options({ remUnit: 75, remPrecision: 8 })
  //     .end();
  // },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // eslint-disable-next-line global-require
          require('postcss-plugin-px2rem')({
            rootValue: 75, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/,
            // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法
            // ，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 2, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ],
      },
    },
  },

  devServer: {
    // proxy: 'http://10.0.0.12:8082/'
  },
};
