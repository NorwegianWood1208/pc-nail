<template>
    <footer class="foot">
        <div class="left">
            <div class="des1">
                More than 10,000 users within 3 years
            </div>
            <div class="des2">
                 Covering 60 nations as the global top 3 virtual currencies
            </div>
            <div class="des3">
                ©Copyrights 金钱报 2017-2020. All rights reserved.
            </div>
        </div>
        <div class="right">
            <div class="right-title">
                <span class="title1">Business cooperation</span>
                <span class="title2">Customer service</span>
            </div>
            <div class="right-pic">
                <span class="pic1"></span>
                <span class="pic2"></span>
            </div>
        </div>
    </footer>
</template>

<script>
export default{
    name:'IndexFooter'
}
</script>
<style lang="less">
    .foot{
      width: 1500px;
      overflow: hidden;
      background: #343434;
      margin: 0 auto;
      color: #fff;
      .left{
          width: 735px;
          float: left;
          margin-right: 80px;
          box-sizing: border-box;
          background: #343434;
          padding-top: 54px;
          .des1{
              width: 100%;
              text-indent: 35px;
              font:bold 16px/36px "微软雅黑";
          }
          .des2{
              width: 100%;
              text-align: right;
              font:bold 16px/36px "微软雅黑";
              margin-bottom: 80px;
          }
          .des3{
              width: 100%;
              text-indent: 56px;
              color: #949494;
              font: 14px/56px "微软雅黑";
          }
      }
      .right{
          width: 685px;
          height: 230px;
          padding-top: 33px;
          float: left;
          .right-title{
              width: 100%;
              height: 37px;
              box-sizing: border-box;
              font: 12px/37px "微软雅黑";
              color: #ebebeb;
              padding-left: 263px;
              .title1{
                  margin-right: 90px;   
              }
          }
          .right-pic{
              width: 100%;
              height: 100px;
              box-sizing: border-box;
              padding-left: 263px;
              .pic1{
                  float: left;
                  width: 100px;
                  height: 100px;
                  background: #585858;
                  margin-right: 120px; 
              }
              .pic2{
                  float: left;
                  width: 100px;
                  height: 100px;
                  background: #585858;
              }
          }
      }
    }
</style>

