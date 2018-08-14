<template>
    <header class="head">
        <h1>NAIL</h1>
        <div class="float-right">
            <nav class="nav">
                <!-- <div class="lis">{{$t("home")}}</div> -->
                <!-- <div class="lis">{{$t("Assets")}}</div>
                <div class="lis">{{$t("Introduction")}}</div> -->
            </nav>
            <!-- <div class="lis-login">
                <div class="login">{{$t("Login")}}/</div>
                <div class="register">{{$t("Register")}}</div>
            </div> -->
            <select class="lange" @change="handchange($event)" ref="aaa">
                <option class="desfont" v-for="(index,value) in langu" :value="value" :key="value">{{index}}</option>
            </select>
            <img src="../../../assets/imgs/xiala.png" alt="">
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
            position: relative;
            .nav{
            overflow: hidden;
            float: left;
            color: #757575;
            margin-left: 620px;
            .lis{
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
                font-size: 16px;
                float: right;
                color: #b9bcc3;
                text-align: center;
                margin-right: 40px;
                background: #3b3b3b;
                font: 16px/34px "微软雅黑";
                -webkit-appearance: none; /*for chrome*/
                .desfont{
                    background: #3b3b3b;
                    border: none;
                }
            }
            img{
                width: 10px;
                height: 5px;
                position: absolute;
                right: 20px;;
                top: 15px;
            }
        }
    }
</style>

