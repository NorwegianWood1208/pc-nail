<template>
  <div class="team-wrap">
    <div class="pos"></div>
    <div class="index">
      <index-header></index-header>
      <div class="content">
        <team-swiper></team-swiper>
        <team-tree></team-tree>
      </div>
      <index-footer></index-footer>
    </div>
  </div>
</template>

<script>
import IndexHeader from '../../views/index/computed/head'
import TeamSwiper from './computed/swiper'
import TeamTree from './computed/tree'
import IndexFooter from '../../views/index/computed/footer'
export default {
  name:'Home',
  components:{
    IndexHeader,
    TeamSwiper,
    TeamTree,
    IndexFooter,
  }
}
</script>
<style lang="less">
  .team-wrap{
    width: 100%;
    overflow: hidden;
    position: relative;
    background: #3b3b3b;
    .pos{
      width: 100%;
      height: 346px;
      position: absolute;
      left: 0px;
      top: 120px;
      background: url(../../assets/imgs/NAIL.png) no-repeat;
      background-size: 1100px 346px;
    }
    .index{
      width: 1500px;
      height: 100%;
      background: #fff;
      margin: 0 auto;
      .content{
        width: 100%;
      }
    }
  }
</style>

