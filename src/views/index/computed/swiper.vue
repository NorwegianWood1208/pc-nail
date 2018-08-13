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
                <div class="swiper-title1">Pan-ecology </div>
                <div class="swiper-title2">Blockchain Hatching Alliance </div>
                <div class="swiper-des">To Build Digital Currency World in the Global Finance Center</div>
                <img src="../../../assets/imgs/btc.png" alt="">
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
        height: 400px;
        box-sizing: border-box;
        background:  #3b3b3b ;
        h3{
            width: 74px;
            height: 28px;
            color: #fff;
            font: 26px/28px "微软雅黑";
            transform: rotate(-90deg);
            position: absolute;
            top: 350px;
            left: 12px;
            span{
                color: #646464;
            } 
        }
        .logo{
            width: 28px;
            float: left;
            padding-top: 280px;
            position: absolute;
            left: 36px;
            img{
                width: 26px;
                height: 26px;
                margin-bottom: 12px;
            }
        }
        .swiper-container{
            width: 100%;
            height: 400px;
            box-sizing: border-box;
            position: absolute;
            .swiper-slider{
                width: 100%;
                color: #fff;
                padding-top: 54px;
                padding-left: 47px;
                box-sizing: border-box;
                font: 32px/48px "微软雅黑";
                .title1{
                    width: 446px;
                    margin-left: 48px;
                    margin-top: 54px;
                }
                .title2{
                    width: 446px;
                }
                img{
                    width: 196px;
                    height: 196px;
                    position: absolute;
                    left: 500px;
                    top: 54px;
                }
                .swiper-des{
                    width: 326px;
                    padding-left: 20px;
                    margin-left: 120px;
                    margin-top: 80px;
                    color: #909090;
                    font: 26px/30px "微软雅黑";
                    border-left: 2px solid #757575;
                }
            }
            .swiper-pagination{
                text-align: right;
            }
        }
    }
</style>

