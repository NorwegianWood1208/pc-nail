<template>
    <footer class="foot">
        <div class="left">
            <div class="des1">
                More than 10,000 users within 3 years
            </div>
            <div class="des2">
                 Covering 60 nations as the global top 3 virtual currencies
            </div>
            <div class="other">
                <div class="pic-left">
                    
                    <span class="title1">Business cooperation</span>
                    <span class="pic1"></span>
                </div>
                <div class="pic-right">
                    <span class="title2">Customer service</span>
                    <span class="pic2"></span>
                </div>
            </div>
            <div class="des3">
                ©Copyrights 金钱报 2017-2020. All rights reserved.
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
      width: 100%;
      height: 350px;
      overflow: hidden;
      background: #343434;
      margin: 0 auto;
      color: #fff;
      .left{
          width: 100%;
          float: left;
          margin-right: 80px;
          box-sizing: border-box;
          background: #343434;
          padding-top: 54px;
          .des1{
              width: 100%;
              text-indent: 35px;
              font:bold 24px/36px "微软雅黑";
          }
          .des2{
              width: 100%;
              text-align: left;
              text-indent: 35px;
              font:bold 24px/36px "微软雅黑";
          }
          .des3{
              width: 100%;
              text-indent: 56px;
              color: #3b3b3b;
              color: #949494;
              font: 14px/56px "微软雅黑";
          }
          .other{
              width: 100%;
              overflow: hidden;
              padding-left: 35px;
              box-sizing: border-box;
              margin-bottom: 31px;
              .pic-left{
                width: 50%;   
                float: left;
                .title1{
                    font: 16px/32px "微软雅黑"; 
                }
                .pic1{
                    display: block;
                    width: 100px;
                    height: 100px;
                    display: none;
                    background: #585858;
                }
            }
            .pic-right{
                width: 50%;
                float: left;
                .title2{
                    font: 16px/32px "微软雅黑"; 
                }
                .pic2{
                    display: block;
                    width: 100px;
                    height: 100px;
                    display: none;
                    background: #585858;
                }
            }
          }
      }
    
      
    }
</style>

