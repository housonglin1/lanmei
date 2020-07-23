import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from './cart'
import order from './order'
import address from './address'
import  favorite from './favorite'
export default new Vuex.Store({
  //数据状态data需要数据状态管理位置
  state: {
    username:"",
  },
  //定义处理data数据的方法
  mutations: {
    
  },
  // 定义处理state数据dstate方法,actions可以用mutaions方法.修改data的数据
  actions: {
  },
  modules: {
    cart,//购物车数据
    order,//订单数据
    address,//地址数据
    favorite,//收藏的数据
  }
})
