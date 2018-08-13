<template>
    <div class="person-index">
        <div class="person-head">

            <m-echarts
                :echartStyle="s"
                :titleText="a"
                :opinion="c"
                :seriesName="d"
                :opinionData="e"
                v-on:currentEchartData="getEchartData"
            ></m-echarts>
        </div>
    </div>
</template>
<script>
import mEcharts from './ex.vue'
export default {
    name:'PersonIndex',
    components: {
      mEcharts
    },
    data(){
      return {
        a:'水果销售统计',
        b:'销售数量',
        c:['香蕉','苹果'],
        // d:'销售统计',
        e:[
            {value:8, name:'可用'},
            {value:2, name:'不可用'},
          ],
        s: {
          height: '320px'
        }
      }
    },
    created(){
      // 获取屏幕高度
    //   this.s.height = document.documentElement.clientHeight - 44 + 'px';
    },
    methods: {
      getEchartData(val){
        console.log(val);
      }
    }
}
</script>
<style lang="less">
    .person-index{
        width: 100%;
        height: 2500px;
        padding: 0 60px 0 70px;
        background: #fff;
        .person-head{
            width: 100%;
            height: 410px;;
            border-bottom: 1px solid #b8b8b8;
        }
    }
</style>
