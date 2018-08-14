<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
// export default {
//     data() {
//       return{
//           screenWidth: document.body.clientWidth   // 这里是给到了一个默认值 （这个很重要）
//       }
//     },
//     methods:{
//         _isMobile() {
//             let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
//             return flag;
//         }
//   },
//   mounted () {
//         if (this._isMobile()) {
//             this.$router.replace('/mobile');
//         }else{
//           this.$router.replace('/');
//         }
//     },
//     watch: {
//     }
// }
</script>

<style lang="less">

</style>
