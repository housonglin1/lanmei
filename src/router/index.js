import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



// Vue router / Element 重复点击导航路由报错解决方法
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
// 首页
import home from './routes/home'
import photo from "./routes/photo"
import voice from "./routes/voice"
import parts from './routes/parts'
import life from "./routes/life"
import details from "./routes/details"
import login from "./routes/login"
import register from "./routes/register"
import cart from "./routes/cart"
import merchant from './routes/merchant'
import order from './routes/order'
import orderrefund from './routes/orderrefund'
  const routes = [
  {
    path:"/",
    redirect:"/home"
  },
      home,//首页
      photo,//手机列表
      voice , // 声学列表
      parts,//配件列表
      life,//生活列表
      details,//详情页
      login,//登录页
      register,//注册页
      cart,//购物车
      order,//订单列表
      ...merchant,//商城
      orderrefund,//退款页
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
