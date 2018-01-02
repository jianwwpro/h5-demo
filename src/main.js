// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import './store/config'
import {map} from './filters/map'
import 'swiper/dist/css/swiper.css'
import './assets/css/base.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.filter('map', map)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
//根据比例改变 HTML字号大小
var w=320;
var h=504;
var docEle = document.documentElement, //获取html元素
    width = docEle.clientWidth,
    height = docEle.clientHeight;
if( width / height < w / h) {
    height && (docEle.style.fontSize = 10 * height / h + 'px'); //设置html的fontSize，随着event的改变而改变。
} else {
    width && (docEle.style.fontSize = 10 * width / w + 'px'); //设置html的fontSize，随着event的改变而改变。
}      