<template>
    <div class="con-global">
        <h3 class="title"><span>Global</span> trend  —</h3>
        <div class="ul1">
            <div class="ul">
                <div class="lis ma-le-160">
                    <img src="../../../assets/imgs/meiguo.png" alt="">
                    <div class="lis-title">America</div>
                    <div class="lis-des">Commodity FuturesTrading Commission(CFTC) categorizes Bitcoin as “commodity”</div>
                </div>
                <div class="lis">
                    <img src="../../../assets/imgs/canada.png" alt="">
                    <div class="lis-title">America</div>
                    <div class="lis-des">Commodity FuturesTrading Commission(CFTC) categorizes Bitcoin as “commodity”</div>
                </div>
                <div class="lis">
                    <img src="../../../assets/imgs/japan.png" alt="">
                    <div class="lis-title">America</div>
                    <div class="lis-des">Commodity FuturesTrading Commission(CFTC) categorizes Bitcoin as “commodity”</div>
                </div>
                <div class="lis">
                    <img src="../../../assets/imgs/singapore.png" alt="">
                    <div class="lis-title">America</div>
                    <div class="lis-des">Commodity FuturesTrading Commission(CFTC) categorizes Bitcoin as “commodity”</div>
                </div>
                <div class="lis">
                    <img src="../../../assets/imgs/germany.png" alt="">
                    <div class="lis-title">America</div>
                    <div class="lis-des">Commodity FuturesTrading Commission(CFTC) categorizes Bitcoin as “commodity”</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'IndexGlobal',
}
</script>
<style lang="less">
    #app .ma-le-160{
        margin-left: 160px;
    }
    .con-global{
        width: 100%;
        height: 590px;
        background: #323232;
        position: relative;
        padding-top: 120px;
        box-sizing: border-box;
        overflow-x: auto;
        overflow-y: hidden;
        .title{
            width:590px;
            height: 42px;
            font: 42px/42px '微软雅黑';
            color: #949494;
            position: absolute;
            top: 274px;
            left: -210px;
            text-align: right;
            transform: rotate(-90deg);
            span{
                color: #fff;
            }
        }
        .ul{
            width: 1500px;
            height: 397px;;
            .lis{
                width: 226px;
                height: 397px;
                background: #fff;
                margin-left: 37px;
                padding-left: 30px;
                padding-right: 30px;
                padding-top: 22px;
                float: left;
                box-sizing: border-box;
                img{
                    width: 120px;
                    height: 120px;;
                    margin-left: 16px;
                    margin-bottom: 15px;
                }
                .lis-title{
                    width: 100%;
                    height: 28px;
                    text-align: center;
                    font:bold 16px/28px "微软雅黑";
                }
                .lis-des{
                    width: 100%;
                    font: 14px/24px "微软雅黑";
                }
            }
        }
        
    }
</style>

