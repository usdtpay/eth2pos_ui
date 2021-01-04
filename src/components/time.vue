<!--
 * @Author: 大菠萝
 * @Date: 2020-09-25 23:33:29
 * @LastEditors: daboluo
 * @LastEditTime: 2020-10-09 00:27:41
 * @FilePath: /eth_h5/src/components/time.vue
-->
<!--  -->
<template>
    <div class="bander">
        <h2>抢购第一批白名单</h2>
        <p>距离活动结束时间</p>
        <ul>
          <li>
            <h4>{{ timeArray()[0] }}</h4>
            <p>天</p>
          </li>
          <li>
            <h4>{{ timeArray()[1] }}</h4>
            <p>时</p>
          </li>
          <li>
            <h4>{{ timeArray()[2] }}</h4>
            <p>分</p>
          </li>
          <li>
            <h4>{{ timeArray()[3] }}</h4>
            <p>秒</p>
          </li>
        </ul>
   </div>
</template>

<script>
import { getDistanceSpecifiedTime } from '@/libs/util';

export default {

  data() {
    return {
      time: null,
      timestamp: 1604409600000,
      // timeArray: getDistanceSpecifiedTime(1603638018000),
    };
  },
  beforeDestroy() {
    clearInterval(this.time);
  },
  methods: {
    timeArray() {
      return getDistanceSpecifiedTime(this.timestamp);
    },
  },
  mounted() {
    this.time = setInterval(() => {
      // this.$nextTick(() => {

      // this.timeArray = getDistanceSpecifiedTime(1603638018000);
      this.$forceUpdate();
      // });
    }, 1000);
  },

};
</script>
