import Vue from 'vue'
import Router from 'vue-router'

const home = ()=> import("../views/home/home");
const category = ()=> import("../views/category/category");
const shopcart = ()=> import("../views/shopcart/shopcart");
const profile = ()=> import("../views/profile/profile");
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"",
      redirect:"/home"
    },
    {
      path:"/home",
      component:home
    },
    {
      path:"/category",
      component:category
    },
    {
      path:"/shopcart",
      component:shopcart
    },
    {
      path:"/profile",
      component:profile
    }
  ],
  mode:"history"
})
