<template>
  <div class="wrap">
    <div class="index">
      <index-header></index-header>
      <div class="content">
        <div class="con-swiper"></div>
          <index-layout></index-layout>
          <div class="layout-bottom"></div>
        </div>
        <div class="con-global"></div>
        <div class="con-Architecture"></div>
      </div>
      <footer class="foot">这里是底部</footer>
    </div>
</template>

<script>
import IndexHeader from './computed/head'
import IndexLayout from './computed/layout'
export default {
  name:'Home',
  components:{
    IndexHeader,
    IndexLayout
  }
}
</script>
<style lang="less">
  .wrap{
    width: 100%;
    overflow: hidden;
    background: #343434;
    .index{
      width: 1500px;
      height: 100%;
      background: #fff;
      margin: 0 auto;
      .content{
        width: 100%;
        .con-swiper{
          width: 100%;
          height: 508px;
          padding:  0 60px;
          box-sizing: border-box;
          background: yellow;
        }
        .con-global{
          width: 100%;
          height: 590px;
          background: #323232;
        }
        .con-Architecture{
          width: 100%;
          height: 790px;
          background: #fff;
        }
      }
    }
    .foot{
      width: 1500px;
      height: 263px;
      background: #343434;
      margin: 0 auto;
      color: #fff;
    }
  }
</style>

