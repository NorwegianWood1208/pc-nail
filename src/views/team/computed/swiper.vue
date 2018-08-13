<template>
    <div class="team-swiper">
        <div class="swiper-left">
            <div class="swiper-title">
                NAIL是一款能够在区块链上实现智能合约、开源的底层系统，发行总量恒定为10亿个，且保证永不增发。
            </div>
            <div class="swiper-other">
               <div class="left">
                   <div class=download>白皮书</div>
                   <div class="title"><span>Offi</span>cial</div>
                   <div class="logo">
                       <img class="facebook" src="../../../assets/imgs/facebook.png" alt="">
                        <img class="tw1" src="../../../assets/imgs/推特_twitter43.png" alt="">
                        <img class="tw2" src="../../../assets/imgs/tw.png" alt="">
                   </div>
               </div>
               <div class="right">
                   <div class="lis">总量10亿</div>
                   <div class="lis">创始团队：20%</div>
                   <div class="lis">预售：30%</div>
                   <div class="lis">品牌运营：30%</div>
                   <div class="lis">基金会：20%</div>
               </div>
            </div>
        </div>
        <swiper class="swiper-right" :options="swiperOption">
             <swiper-slide class="swiper-slider">123456</swiper-slide>
             <swiper-slide class="swiper-slider">123456</swiper-slide>
             <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'TeamSwiper',
    data(){
        return {
            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }
    }
}
</script>
<style lang="less">
    .team-swiper{
        width: 100%;
        height: 620px;
        z-index: 99;
        background: #3b3b3b;
        .swiper-left{
            width: 587px;
            height: 426px;
            float: left;
            padding-top: 110px;
            .swiper-title{
                width: 504px;
                height: 187px;
                padding-left: 13px;
                color: #fff;
                position: relative;
                box-sizing: border-box;
                font: 24px/54px "微软雅黑";
            }
            .swiper-other{
                width: 587px;
                height: 236px;
                margin-top: 3px;
                .left{
                    width: 192px;
                    height: 206px;
                    float: left;
                    .download{
                        width: 124px;
                        height: 42px;
                        color: #fff;
                        margin-left: 28px;
                        font: 22px/36px "微软雅黑";
                        border-bottom: 2px solid red;
                    }
                    .title{
                        width: 83px;
                        height: 48px;
                        margin-top: 30px;
                        text-align: right;
                        color: #fff;
                        border-top: 2px solid #757575;
                        font: 18px/48px "微软雅黑";
                        transform: rotate(-90deg);
                        span{
                            color: #727272;
                        }
                    }
                    .logo{
                        width: 192px;
                        height: 26px;
                        margin-top: 20px;
                        img{
                            margin-left: 28px;
                            margin-right: 10px;
                        }
                    }
                }
                .right{
                    width: 200px;
                    height: 236px;
                    float: right;
                    text-align: right;
                    font: 18px/48px "微软雅黑";
                    color: #fff;
                }
            }
        }
        .swiper-right{
            width: 824px;
            height: 480px;
            float: right;
            margin-top: 70px;
            background: lightgoldenrodyellow;
            .swiper-slider{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
