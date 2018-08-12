<template>
    <div class="con-swiper">
        <h3><span>Offi</span>cial</h3>
        <div class="logo">
            <img class="facebook" src="../../../assets/imgs/facebook.png" alt="">
            <img class="tw1" src="../../../assets/imgs/推特_twitter43.png" alt="">
            <img class="tw2" src="../../../assets/imgs/tw.png" alt="">
        </div>
        <swiper :options="swiperOption" class="swiper-container">
            <swiper-slide class="swiper-slider">
                <div class="swiper-title1">Pan-ecology </div>
                <div class="swiper-title2">Blockchain Hatching Alliance </div>
                <div class="swiper-des">To Build Digital Currency World in the Global Finance Center</div>
                <img src="../../../assets/imgs/btc.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slider">
                 <img class="facebook" src="../../../assets/imgs/facebook.png" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default{
    name:'IndexSwiper',
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
     .con-swiper{
        width: 100%;
        height: 508px;
        padding:  0 60px;
        box-sizing: border-box;
        background:  #3b3b3b ;
        h3{
            width: 69px;
            height: 28px;
            color: #fff;
            font: 18px/28px "微软雅黑";
            transform: rotate(-90deg);
            position: absolute;
            top: 310px;
            span{
                color: #646464;
            } 
        }
        .logo{
            width: 28px;
            height: 100%;
            margin-left: 24px;
            padding-top: 310px;
            float: left;
            img{
                margin-bottom: 12px;
            }
        }
        .swiper-container{
            width: 1040px;
            height: 500px;
            box-sizing: border-box;
            padding-top: 116px;
            margin-left: 208px;
            .swiper-slider{
                width: 640px;
                height: 120px;
                color: #fff;
                font: 42px/66px "微软雅黑";
                img{
                    position: absolute;
                    left: 700px;
                    top: 40px;
                }
                .swiper-des{
                    width: 310px;
                    height: 90px;
                    margin-top: 80px;
                    margin-left: 160px;
                    color: #909090;
                    font: 24px/38px "微软雅黑";
                }
            }
            .swiper-pagination{
                text-align: right;
            }
        }
    }
</style>

