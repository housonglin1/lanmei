import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "./assets/base.css"
import "./assets/font/iconfont.css"
// import "./assets/font/iconfont.js"

// 地址插件
import vRegion from 'v-region'
Vue.use(vRegion)


// 安装vant包
// $cnpm i vant -S
// $cnpm i babel-plugin-import  -D
// import Vant from 'vant'
// import "vant/lib/index.css"
// Vue.use(Vant)

// 引入插件
// cnpm i swiper -S
import "swiper/css/swiper.min.css";

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios"

axios.defaults.baseURL="http://49.234.116.224:3001/"
// axios.defaults.baseURL="http://127.0.0.1:3000/"

Vue.prototype.$axios=axios
 
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
