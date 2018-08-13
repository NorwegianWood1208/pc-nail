<template>
    <header class="head">
        <h1>NAIL</h1>
        <div class="float-right">
            <nav class="nav">
            <div class="lis">{{$t("download")}}</div>
            <div class="lis">财产</div>
            <div class="lis">介绍</div>
            </nav>
            <div class="lis-login">
            <div class="login">登录/</div>
            <div class="register">注册</div>
            </div>
            <select class="lange" @change="handchange($event)" ref="aaa">
                <option class="desfont" v-for="(index,value) in langu" :value="value" :key="value">{{index}}</option>
            </select>
        </div>
    </header>
</template>

<script>
export default{
    name:'IndexHeader',
    data(){
      return {
          langu:{
            zh:"中文",
            en:"English",
            ru:"русский",
            ko:"한국어",
            ja:"日本語"
          },
      }
    },
    mounted(){
      let lan = window.localStorage.getItem('language')
      if (lan) {
           this.$refs.aaa.value = lan
        }
    },
    methods:{
      handchange(event){
        this.$i18n.locale = event.target.value
        window.localStorage.setItem('language', event.target.value)
        window.localStorage.setItem('lang', this.langu[event.target.value])
      },
    },
}
</script>
<style lang="less">
    .head{
        width: 100%;
        height: 128px;
        box-sizing: border-box;
        background: #3b3b3b;
        h1{
            height: 128px;
            float: left;
            color: #757575;
            margin-left: 20px;
            font: 48px/128px "华文细黑";
        }
        .float-right{
            float: right;
            margin-top: 28px;
            .nav{
                overflow: hidden;
                float: left;
                color: #757575;
                margin-right: 20px;
                .lis{
                    width: 69px;
                    font: 28px/68px "华文细黑";
                    float: left;
                    text-align: center;
                    margin: 0 20px;
                }
                .lis:hover{
                    border-bottom: 1px solid #757575;
                }
            }
            .lis-login{
                overflow: hidden;
                float: left;
                font: 28px/68px "华文细黑";
                    color: #757575;
                    .login{
                        float: left;
                    }
                    .register{
                        float: left;
                    }
            }
            .lange{
                background: transparent;
                float: right;
                margin-left: 20px;
                color: #b9bcc3;
                text-align: center;
                font: 28px/68px "微软雅黑";
                -webkit-appearance: none; /*for chrome*/
            }
        }
    }
</style>

