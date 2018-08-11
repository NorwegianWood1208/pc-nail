<template>
    <div class="con-layout">
        <div class="layout-top">
            <div class="layout-pic"></div>
            <div class="layout-des">
            <div class="one">10 national blockchain landmarks</div>
            <div class="one">10 national blockchain</div>
            <div class="one">10 national blockchain landmarks</div>
            </div>
            <div class="layout-title">Strategic objectives</div>
            <div class="layout-right">
            <div class="one">10 national blockchain landmarks</div>
            <div class="one">10 national blockchain</div>
            <div class="one">10 national blockchain landmarks</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'IndexLayout',
}
</script>
<style lang="less">
.con-layout{
    width: 100%;
    height: 1280px;
    padding: 0 60px;
    box-sizing: border-box;
    background: #fff;
    .layout-top{
    position: relative;
    .layout-pic{
        width: 330px;
        height: 425px;
        position: absolute;
        top: -38px;
        left: 84px;
        background: red;
    }
    .layout-des{
        width: 303px;
        height: 378px;
        padding-top: 83px;
        box-sizing: border-box;
        background: #323232;
        opacity: 0.3;
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
        top: 30px;
        right: 100px;
        color: #9c9c9c;
        font: 24px/32px Calibri;
        .one{
        margin-bottom: 55px;
        }
    }
    }
}
       
</style>

