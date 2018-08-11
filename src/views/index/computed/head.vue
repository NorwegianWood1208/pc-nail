<template>
    <header class="head">
        <h1>NAIL</h1>
        <div class="float-right">
            <nav class="nav">
            <div class="lis">主页</div>
            <div class="lis">财产</div>
            <div class="lis">介绍</div>
            </nav>
            <div class="lis-login">
            <div class="login">登录/</div>
            <div class="register">注册</div>
            </div>
            <div class="lange">中文</div>
        </div>
    </header>
</template>

<script>
export default{
    name:'IndexHeader'
}
</script>
<style lang="less">
    .head{
        width: 100%;
        height: 63px;
        padding-top: 14px;
        box-sizing: border-box;
        background: #3b3b3b;
        h1{
            width: 81px;
            height: 49px;
            float: left;
            color: #757575;
            font: 26px/49px "华文细黑";
        }
        .float-right{
            float: right;
            .nav{
            overflow: hidden;
            float: left;
            color: #757575;
            margin-left: 620px;
            .lis{
                width: 54px;
                font: 18px/34px "华文细黑";
                float: left;
                text-align: center;
                margin:  0 40px;
                border-bottom: 1px solid #757575;
            }
            }
            .lis-login{
            overflow: hidden;
            padding:  0 40px;
            float: left;
            font: 18px/34px "华文细黑";
            color: #757575;
            .login{
                float: left;
            }
            .register{
                float: left;
            }
            }
            .lange{
            padding-left: 40px;
            float: left;
            font: 18px/34px "华文细黑";
            color: #757575;
            }
        }
    }
</style>

