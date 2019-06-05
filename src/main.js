import Vue from 'vue'
import App from './App' // 导入 App 组件对象
import router from './router'
import store from './store'


// import Vuex from 'vuex'
// Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {
//     // count: 0,
//   },
//   mutations: {
//     // increment(state){
//     //   state.count++
//     // }
//   },
// });


import { Cookie } from './utils/storage'
Vue.prototype.Cookie = Cookie


// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import '../static/vue.css'


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})