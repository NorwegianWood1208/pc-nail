<template>
    <div class="team-tree">
        <ul class="nav">
            <li class="lis">Token发行</li>
            <li class="lis">品牌推广</li>
            <li class="lis">发展历程</li>
            <li class="lis">项目计划</li>
            <li class="lis">团队架构</li>
            <li class="lis">基金会节点架构</li>
        </ul>
        <div class="tree">
            <div class="tree-title">团队构架</div>
            <div class="tree-des">20个主权国家支持，10个以上NAIL区块链地标项目</div>
            <ul class="word1">
                <li class="lis wid70">成熟模式运营经验</li>
                <li class="lis">全球顶级技术开发团队</li>
                <li class="lis wid70">完善的客服社群管理团队</li>
                <li class="lis wid70">顶级市值管理团队</li>
                <li class="lis">危机公关团队</li>
            </ul>
            <ul class="word2">
                <li class="lis wid70">全球20个主权国家支持</li>
                <li class="lis">专业的运营团队</li>
                <li class="lis wid70">强大生态支撑迅速布局</li>
                <li class="lis wid70">专业的量化管理团队</li>
                <li class="lis">舆情管理团队</li>
                <li class="lis wid70">品牌宣传推广团</li>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'TeamTree',
}
</script>
<style lang="less">
    #app .wid70{
        width: 70px;
    }
    .team-tree{
        width: 100%;
        height: 1008px;
        background: #fff;
        .nav{
            width: 100%;
            height: 142px;
            box-sizing: border-box;
            margin-left: 131px;
            padding-top: 45px;
            margin-bottom: 14px;
            font: 20px/48px "微软雅黑";
            .lis{
                float: left;
                margin:  0 50px;
            }
            .lis:hover{
                border-bottom: 2px solid red;
            }
        }
        .tree{
            width: 100%;
            height: 855px;
            background: url(../../../assets/imgs/tree.png) no-repeat 253px 130px;
            .tree-title{
                width: 100%;
                height: 47px;
                text-align: center;
                font: 24px/47px "微软雅黑";
            }
            .tree-des{
                width: 210px;
                height: 42px;
                margin: 0 auto;
                color: #2f2f2f;
                text-align: center;
                font: 14px/21px "微软雅黑";
            }
            .word1{
                width: 100%;
                margin-left: 320px;
                margin-top: 270px;
                overflow: hidden;
                .lis{
                    width: 106px;
                    float: left;
                    text-align: center;
                    font: bold 16px/24px "微软雅黑";
                    margin-right: 116px;
                }
            }
            .word2{
                width: 100%;
                margin-left: 216px;
                margin-top: 120px;
                overflow: hidden;
                .lis{
                    width: 106px;
                    float: left;
                    text-align: center;
                    font: bold 16px/24px "微软雅黑";
                    margin-right: 116px;
                }
            }
        }
    }
</style>
