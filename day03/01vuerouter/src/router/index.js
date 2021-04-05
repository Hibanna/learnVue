import  VueRouter from "vue-router"
import Vue from "vue"
import home from "../components/home";
import about from "../components/about";
/*1.通过Vue.use 安装插件*/
Vue.use(VueRouter)
/*2.创建VueRouter对象*/
/* 创建映射规则*/
const routes = [
  {path:"/home",
  component:home
  },
  {path:"/about",
    component:about
  },
];
const vueRouter = new VueRouter({
  routes
})
/*3.导出这个路由器*/
export  default  vueRouter;
