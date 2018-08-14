<template>
    <div class="con-layout">
        <div class="layout-top">
            <div class="layout-pic"></div>
            <div class="layout-des" ref="des">
                <div class="one" ref="one1">{{$t("Digital")}}</div>
                <div class="one"  ref="one2">{{$t("ecological")}}</div>
                <div class="one"  ref="one3">{{$t("institution")}}</div>
            </div>
            <img class="pic1" src="../../../assets/imgs/svg1.png" alt="">
            <div class="layout-title">{{$t("Strategic")}}</div>
            <img class="pic2" src="../../../assets/imgs/svg2.png" alt="">
            <div class="layout-right">
                <div class="one"  ref="one4">{{$t("Recognition")}}</div>
                <div class="one"  ref="one5">{{$t("Trading")}}</div>
                <div class="one"  ref="one6">{{$t("Exchange")}}</div>
            </div>
        </div>
        <div class="layout-bottom">
            <div class="title">{{$t("layout")}}</div>
            <div class="ul">
                <div class="con">
                    <!-- 第一个模块 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/LO.png" alt="">
                        <div class="zh" >
                            <div class="swiper-title">{{$t("high")}}</div>
                            <div class="swiper-con">
                                <div class="swiper-lis">{{$t("Stock")}}</div>
                                <div class="swiper-lis">{{$t("NASDAQ")}}</div>
                                <div class="swiper-lis">{{$t("Tokyo")}}</div>
                            </div>
                        </div>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("high")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Stock")}}</div>
                                    <div class="swiper-lis">{{$t("NASDAQ")}}</div>
                                    <div class="swiper-lis">{{$t("Tokyo")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 第二个模块 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/imp.png" alt="">
                        <div class="zh">
                            <div class="swiper-title">{{$t("Implementation")}}</div>
                            <div class="swiper-con">
                                <div class="swiper-lis">{{$t("Inauguaration")}}</div>
                                <div class="swiper-lis">{{$t("Designated")}}</div>
                                <div class="swiper-lis">{{$t("publicity")}}</div>
                                <div class="swiper-lis">{{$t("customer")}}</div>
                                <div class="swiper-lis">{{$t("programme")}}</div>
                                <div class="swiper-lis">{{$t("vulenteers")}}</div>
                            </div>
                        </div>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide style="width=215px;">
                                <div class="swiper-title">{{$t("Implementation")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Inauguaration")}}</div>
                                    <div class="swiper-lis">{{$t("Designated")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Implementation")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("customer")}}</div>
                                    <div class="swiper-lis">{{$t("programme")}}</div>
                                    
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Implementation")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("vulenteers")}}</div>
                                    <div class="swiper-lis">{{$t("publicity")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 第三个模块 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/sup.png" alt="">
                         <swiper  :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("construction")}}</div>
                                    <div class="swiper-lis">{{$t("management")}}</div>
                                    <div class="swiper-lis">{{$t("offline")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Github")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("construction")}}</div>
                                    <div class="swiper-lis">{{$t("management")}}</div>
                                    <div class="swiper-lis">{{$t("offline")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Github")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("free")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("multidimensionally")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 第四个模块 -->
                    <div class="lis no-magin-r">
                        <img src="../../../assets/imgs/fir.png" alt="">
                        <swiper :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Investment")}}</div>
                                    <div class="swiper-lis">{{$t("platform")}}</div>
                                    <div class="swiper-lis">{{$t("Blockchain")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("ecol")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Investment")}}</div>
                                    <div class="swiper-lis">{{$t("platform")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Blockchain")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("ecol")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("blockchain")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 五个 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/gre.png" alt="">
                        <swiper :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Great")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">20个主权合作国家分别是：日本、韩国、蒙古、美国、新加坡、中国、马来西亚、加拿大、印度、吉尔吉斯斯坦</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Great")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">乌兹别克斯坦、哈萨克斯坦、俄罗斯、布里亚特、印尼、越南、泰国、菲律宾、阿塞拜疆、白俄罗斯、英国</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Great")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("sovereign")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Malaysia")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 留个 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/block.png" alt="">
                        <div class="zh">
                             <div class="swiper-title">{{$t("landmark")}}</div>
                            <div class="swiper-con">
                                <div class="swiper-lis">{{$t("follows")}}</div>
                            </div>
                        </div>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("landmark")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("follows")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("landmark")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("United")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 七个 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/international.png" alt="">
                        <div class="zh">
                            <div class="swiper-title">{{$t("international")}}</div>
                            <div class="swiper-con">
                                <div class="swiper-lis">{{$t("stribuild")}}</div>
                            </div>
                        </div>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("international")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("stribuild")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 八个 -->
                    <div class="lis no-magin-r">
                        <img src="../../../assets/imgs/mail.png" alt="">
                        <div class="zh">
                            <div class="swiper-title">{{$t("hatching")}}</div>
                            <div class="swiper-con">
                                <div class="swiper-lis">{{$t("base")}}</div>
                            </div>
                        </div>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("hatching")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("base")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'IndexLayout',
  data(){
      return {
          swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/

            pagination: {
                    el: '.swiper-pagination',
            },
        }
      }
  },
  updated() {
      let lang = window.localStorage.getItem('language')
      if (lang === 'en') {
        var zh = document.querySelectorAll('.zh')
        var zhh = document.querySelectorAll('.zhh')
        var slide = document.querySelectorAll('.mySwiper')
        for (let i = 0; i < zhh.length; i++) {
            zhh[i].style.display = 'none'
        }
        for (let i = 0; i < zh.length; i++) {
            zh[i].style.display = 'none'
        }
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'block'
        }
         this.$refs.des.style.paddingTop = '53px'
         console.log(this.$refs.one1);
         
         this.$refs.one1.style.marginBottom = '20px'
         this.$refs.one4.style.marginBottom = '40px'
      }else if(lang === 'zh'){
        var zh = document.querySelectorAll('.zh')
        var zhh = document.querySelectorAll('.zhh')
        var slide = document.querySelectorAll('.mySwiper')
        for (let i = 0; i < zh.length; i++) {
            zh[i].style.display = 'block'
        }
        for (let i = 0; i < zhh.length; i++) {
            zhh[i].style.display = 'block'
        }
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none'
        }
         this.$refs.des.style.paddingTop = '83px'
         this.$refs.one1.style.marginBottom = '35px'
         this.$refs.one2.style.marginBottom = '75px'
         this.$refs.one4.style.marginBottom = '75px'
      }else{
           var zh = document.querySelectorAll('.zh')
           var zhh = document.querySelectorAll('.zhh')
            var slide = document.querySelectorAll('.mySwiper')
            console.log(zh);
            for (let i = 0; i < zh.length; i++) {
                zh[i].style.display = 'none'
            }
            for (let i = 0; i < zhh.length; i++) {
                zhh[i].style.display = 'none'
            }
            for (let i = 0; i < slide.length; i++) {
                slide[i].style.display = 'block'
            }
          this.$refs.one1.style.marginBottom = '40px'
          this.$refs.one3.style.marginBottom = '75px'
          this.$refs.one2.style.marginBottom = '50px'
          this.$refs.des.style.paddingTop = '70px'
      }
  },
  mounted (){
      let lang = window.localStorage.getItem('language')
      if (lang === 'en') {
        var zh = document.querySelectorAll('.zh')
        var zhh = document.querySelectorAll('.zhh')
        var slide = document.querySelectorAll('.mySwiper')
        for (let i = 0; i < zhh.length; i++) {
            zhh[i].style.display = 'none'
        }
        for (let i = 0; i < zh.length; i++) {
            zh[i].style.display = 'none'
        }

        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'block'
        }
         this.$refs.des.style.paddingTop = '53px'
         this.$refs.one1.style.marginBottom = '20px'
         this.$refs.one4.style.marginBottom = '40px'
      }else if(lang === 'zh'){
          var zh = document.querySelectorAll('.zh')
          var zhh = document.querySelectorAll('.zhh')
           var slide = document.querySelectorAll('.mySwiper')
        for (let i = 0; i < zh.length; i++) {
            zh[i].style.display = 'block'
        }
        for (let i = 0; i < zhh.length; i++) {
            zhh[i].style.display = 'block'
        }
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none'
        }
         this.$refs.des.style.paddingTop = '83px'
         this.$refs.one1.style.marginBottom = '35px'
         this.$refs.one2.style.marginBottom = '75px'
         this.$refs.one4.style.marginBottom = '75px'
      }else{
          var zh = document.querySelectorAll('.zh')
          var zhh = document.querySelectorAll('.zhh')
           var slide = document.querySelectorAll('.mySwiper')       
            console.log(zh);
            for (let i = 0; i < zh.length; i++) {
                zh[i].style.display = 'none'
            }
            for (let i = 0; i < zhh.length; i++) {
                zhh[i].style.display = 'none'
            }
            for (let i = 0; i < slide.length; i++) {
                slide[i].style.display = 'block'
            }
            this.$refs.one1.style.marginBottom = '40px'
          this.$refs.one3.style.marginBottom = '75px'
          this.$refs.one2.style.marginBottom = '50px'
          this.$refs.des.style.paddingTop = '70px'
      }
  }
}
</script>
<style lang="less">
 #app .no-magin-r{
    margin-right: 0;
}
.con-layout{
    width: 100%;
    padding: 0 60px;
    box-sizing: border-box;
    background: #fff;
    .layout-top{
        position: relative;
        height: 436px;
        .pic1{
            position: absolute;
            top: 120px;
            left: 451px;
        }
        .pic2{
            position: absolute;
            top: 120px;
            left: 866px;
        }
        .layout-pic{
            width: 330px;
            height: 425px;
            position: absolute;
            top: -38px;
            left: 84px;
            background: url(../../../assets/imgs/pic.png) no-repeat;
        }
        .layout-des{
            width: 303px;
            height: 378px;
            padding-top: 83px;
            box-sizing: border-box;
            background: #323232;
            opacity: 0.5;
            padding-left: 10px;
            position: absolute;
            top: 30px;
            left: 100px;
            color: #fff;
            font: 24px/32px Calibri;
            .one{
            color: #fff;
            margin-bottom: 55px;
            }
        }
        .layout-title{
            width: 350px;
            height: 60px;
            color: #fff;
            background: #4e4e4e;
            position: absolute;
            top: 200px;
            left: 516px;
            text-align: center;
            font: 26px/60px "Humnst777";
        }
        .layout-right{
            width: 355px;
            height: 378px;
            padding-top: 83px;
            box-sizing: border-box;
            position: absolute;
            top: 23px;
            right: 70px;
            color: #9c9c9c;
            font: 24px/32px Calibri;
            .one{
                margin-bottom: 75px;
            }
        }
    }
    .layout-bottom{
        width: 100%;
        .title{
            font: 30px/90px "Humnst777";
            margin-bottom: 50px;
        }
        .con{
            overflow: hidden;
            padding-left: 44px;
            .swiper-pagination-bullet{
                background: #3d3d3d;
            }
            .swiper-pagination-bullet-active{
                background: #969696;
            }
            .lis{
                width: 245px;
                height: 280px;
                float: left;
                margin-right: 100px;
                img{
                    float: left;
                }
                .zh{
                    width: 213px;
                    height: 280px;
                    float: left;
                    display: none;
                    .swiper-title{
                        font: 16px/28px "Humnst777";
                        margin-bottom: 20px;
                    }
                    .swiper-con{
                        font: 14px/24px "Humnst777";
                    }
                }
                .swiper-slide{
                    height: 225px;
                    float: left;
                    .swiper-title{
                        font: 16px/28px "Humnst777";
                        margin-bottom: 20px;
                    }
                    .swiper-con{
                        font: 14px/24px "Humnst777";
                    }
                    
                }
                
            }
        }
    }
}
       
</style>

