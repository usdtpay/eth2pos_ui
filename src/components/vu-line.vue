<template>
    <ECharts style="width:100%;height:100%;"
     @rendered='rendered'
     ref="line" :options="data"
      autoresize/>
</template>

<script>
import ECharts from 'vue-echarts';
import echarts from 'echarts';
import 'echarts/lib/chart/line';
// import numeral from 'numeral';
// import { showPib } from '@/libs/util';
export default {
  name: 'veLine',
  props: {

    xAxis: {
      type: Array,
      default: () => [],
    },
    series: {
      type: Array,
      default: () => [],
    },

  },
  data() {
    return {
      data: {

        grid: {
          left: '0',
          right: '0%',
          bottom: '0%',
          top: 0,
          containLabel: true,
        },
        tooltip: {
          itemGap: 20,
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: this.xAxis,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },

          boundaryGap: false,
          splitLine: {
            show: false,
          },
        },
        yAxis: [
          {
            type: 'value',
            min: 0,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: 'USDT',
            type: 'line',
            smooth: true, // 是否平滑
            showAllSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            // symbolSize: 2,
            lineStyle: {
              normal: {
                color: 'RGBA(249, 193, 29, 1)',
              },
            },
            itemStyle: {
              color: '#65370c',
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'RGBA(249, 193, 29, 0.4)',
                },
                {
                  offset: 1,
                  color: 'RGBA(249, 193, 29, 0.5)',
                },
                ], false),
                shadowColor: 'RGBA(249, 193, 29, 0.9)',
                shadowBlur: 20,
              },
            },
            data: this.series[0].data,
          },
          {
            name: 'CNY',
            type: 'line',
            smooth: true, // 是否平滑
            showAllSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            // symbolSize: 2,
            lineStyle: {
              normal: {
                color: 'RGBA(249, 193, 29, 1)',
              },
            },
            itemStyle: {
              color: '#65370c',
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'RGBA(249, 193, 29, 0.4)',
                },
                {
                  offset: 1,
                  color: 'RGBA(249, 193, 29, 0.5)',
                },
                ], false),
                shadowColor: 'RGBA(249, 193, 29, 0.9)',
                shadowBlur: 20,
              },
            },
            data: this.series[1].data,
          },
        ],
      },
    };
  },
  components: { // 模板
    ECharts,
  },
  computed: { // 计算属性
  },
  watch: {
    xAxis: {
      deep: true,
      handler() {
        console.log('23323232');
        this.mergeOptions({
          xAxis: {
            data: this.xAxis,
          },
        });
      },
    },
    series: {
      deep: true,
      handler() {
        this.mergeOptions({
          series: this.series,
        });
      },
    },
  },
  methods: { // 方法
    resize(e) {
      console.log(e);
    },
    rendered() {
      this.$refs.line.hideLoading();
    },
    mergeOptions(options) {
      this.$nextTick(() => {
        // this.$refs.line.showLoading();
        this.$refs.line.mergeOptions({ ...options });
        // this.$refs.line.hideLoading();
      });
    },
  },
  updated() {
    // this.mergeOptions();
  },
  created() {
    this.$nextTick(() => {
      this.$refs.line.showLoading();
    });
  },
  mounted() {
  },
};
</script>
