// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import LyTab from 'ly-tab';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//引入字体图标
import './common/icomoon/style.css'


Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(LyTab);
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
