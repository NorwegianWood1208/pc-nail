import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from '../lang/zh.js'
import en from '../lang/en.js'
import ja from '../lang/ja.js'
// import Cookies from 'js-cookie'

Vue.use(VueI18n)

function lang () {
  // 将选择的语言存在localStorage中
    let t = window.localStorage.getItem('language')
    if (t) return t
    // 默认中文
    else return 'zh'
  } 
const language = lang()
  // 自定义 window 的 lang 属性
window.lang = lang()
const i18n = new VueI18n({
  locale: language, // set locale
  messages: {
    'zh': zh,
    'en': en,
    'ja': ja
  } // set locale messages
})
export default i18n
