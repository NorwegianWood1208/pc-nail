<template>
  <div class="person-wrap">
    <div class="index">
      <index-header></index-header>
      <div class="content">
          <person-index></person-index>
      </div>
    </div>
  </div>
</template>

<script>
import IndexHeader from '../../views/index/computed/head'
import PersonIndex from './computed/content'
export default {
  name:'Person',
  components:{
    IndexHeader,
    PersonIndex
  }
}
</script>
<style lang="less">
  .person-wrap{
    width: 100%;
    overflow: hidden;
    position: relative;
    background: #3b3b3b;
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

