<!--
 * @Author: 大菠萝
 * @Date: 2020-10-08 14:15:19
 * @LastEditors: daboluo
 * @LastEditTime: 2020-10-29 17:46:44
 * @FilePath: /eth_h5/src/views/exchange.vue
-->
<!--  -->
<template>
  <div class="exchange">
    <div class="card">
      <div class="input-box">
        <div class="clomon">
          <span> 从</span>
          <span> 余额：0.000</span>
        </div>
        <div class="clomon input-text">
          <input placeholder="0.0" type="text" />
          <div class="icon-img">
            <img src="../assets/logo.png" alt="" />
            LIZ
          </div>
        </div>
      </div>
      <img class="goback" src="../assets/blank.png" alt="" srcset="" />
      <div class="input-box">
        <div class="clomon">
          <span> 到（预估）</span>
          <span> 余额：0.000</span>
        </div>
        <div class="clomon input-text">
          <input placeholder="0.0" type="text" />
          <div class="icon-img">
            <img src="../assets/eth.png" alt="" />
            ETH
          </div>
        </div>
      </div>
      <button class="btn"> Swap </button>
    </div>
    <div class="details">
      <p>
        Minimum receive
        <span>
          1152 AKRO
        </span>
      </p>  <p>
        Price Impact
        <span style="color:#204e34">
           ＜ 0.01%
        </span>
      </p>  <p>
       Liquidity Provider Fee
        <span>
          0.0001511 ETH
        </span>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'exchange',

  data() {
    return {};
  },

  components: {
    // 模板
  },

  computed: {
    // 计算属性
  },

  methods: {
    // 方法
  },
  // beforeCreate:function(){
  //     console.log('1-beforeCreate 初始化之后');
  // },
  // created:function(){
  //     console.log('2-created 创建完成');
  // },
  // beforeMount:function(){
  //     console.log('3-beforeMount 挂载之前');
  // },
  // mounted:function(){
  //     console.log('4-mounted 被创建');
  // },
  // beforeUpdate:function(){
  //     console.log('5-beforeUpdate 数据更新前');
  // },
  // updated:function(){
  //     console.log('6-updated 被更新后');
  // },
  // activated:function(){
  //     console.log('7-activated');
  // },
  // deactivated:function(){
  //     console.log('8-deactivated');
  // },
  // beforeDestroy:function(){
  //     console.log('9-beforeDestroy 销毁之前');
  // },
  // destroyed:function(){
  //     console.log('10-destroyed 销毁之后')
  // }
};
</script>
<style lang='scss' scoped>
.details{
   margin: 30px;
  padding-left: 60px;
   color:#999;
     padding-right: 55px;
     p{
       font-size: 30px;
       display: flex;
       line-height: 2;
       justify-content: space-between;
       span{
         color: #fff;
       }
     }
}
.exchange {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #0c090a;
}
.card {
 box-shadow: 1px 10px 10px #333;
  background: #010101;
  border-radius: 40px;
  padding-top: 90px;
  padding-left: 60px;
  padding-bottom: 30px;
  padding-right: 55px;
  margin: 20px;
  margin-top: 100px;
  .btn{
    // margin: 30px ;
    margin: 0;
    color: #fff;
    font-size: 35px;
    margin-top:130px;
    background: #f0bb0b;
    width: 100%;
  }
  .goback {
    margin: 0 auto;
    display: block;
    margin-top: 65px;
    margin-bottom: 65px;
    width: 30px;

  }
  .input-box {
    .input-text {
      margin-top: 35px;
    }
    .clomon {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 35px;
        color: #999;
      }
      input {
        flex: 1;
        background: #010101;
        outline: none;
        border: none;
        color: #fff;
        font-size: 35px;
      }
      .icon-img {
        img {
          width: 47px;
          vertical-align: sub;
          height: 47px;
        }
        font-size: 35px;
        vertical-align: sub;
        color: #fff;
        width: 34%;
      }
    }
  }
}
</style>
