<template>
    <div class="con-Architecture">
        <div class="title">{{$t("Technological")}}</div>
        <img class="sanjiao" src="../../../assets/imgs/sanjiao.png" alt="">
        <div class="Arch-con">
            <div class="con-lis">
                <div class="lis-title"><img src="../../../assets/imgs/america.png" alt="">{{$t("America")}}</div>
                <div class="lis-con">{{$t("utilizes")}}</div>
            </div>
            <div class="con-lis">
                <div class="lis-title"><img src="../../../assets/imgs/PRIVACY.png" alt="">{{$t("Privacy")}}</div>
                <div class="lis-con">{{$t("Whatever")}}</div>
            </div>
            <div class="con-lis">
                <div class="lis-title"><img src="../../../assets/imgs/SHARD.png" alt="">{{$t("Shard")}}</div>
                <div class="lis-con">{{$t("decentralized")}}</div>
            </div>
            <div class="con-lis">
                <div class="lis-title"><img src="../../../assets/imgs/contract.png" alt="">{{$t("Contract")}}</div>
                <div class="lis-con">{{$t("whole")}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'IndexArch'
}
</script>
<style lang="less">
    .con-Architecture{
        width: 100%;
        height: 790px;
        padding: 52px 60px 0 0px;
        box-sizing: border-box;
        background: #fff;
        .sanjiao{
            width: 18px;
            height: 16px;
            margin-left: 49%;
            margin-bottom: 50px;
        }
        .title{
            text-align: center;
            font:bold 28px/85px '微软雅黑';
        }
        .Arch-con{
            width: 100%;
            height: 590px;
            padding-left: 208px;
            box-sizing: border-box;
            overflow: hidden;
            .con-lis{
                width: 523px;
                height: 287px;
                margin-right: 80px;
                float: left;
                
                .lis-title{
                    height: 55px;
                    padding-top: 18px;
                    box-sizing: border-box;
                    font: 18px/42px "微软雅黑";
                    img{
                        margin-right: 22px;
                        margin-top: -18px;
                    }
                }
                .lis-con{
                    font: 16px/24px "微软雅黑";
                    margin-top: 20px;
                }
            }
        }
    }

</style>

