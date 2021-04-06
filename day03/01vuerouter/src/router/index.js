import  VueRouter from "vue-router"
import Vue from "vue"
import home from "../components/home";
import about from "../components/about";
import user from "@/components/user";
// 解决点击重复路由报错问题

/*1.通过Vue.use 安装插件*/
Vue.use(VueRouter)
/*2.创建VueRouter对象*/
/* 创建映射规则*/
const routes = [
  {
  
/*  这种方法默认地址栏不会变成/home
    path:"",
    component:home*/
    /*  这种方法默认地址栏会变成/home
    */
    path:"",
    redirect:"/home"
  },
  {

    /*  这种方法默认地址栏不会变成/home
        path:"",
        component:home*/
    /*  这种方法默认地址栏会变成/home
    */
    path:"/home",
    redirect:"/home/news"
  },
  
/* 以下的方式会将所有的路由组件一次性加载
 {
    path:"/home",
    component:home
  },
  {
    path:"/about",
    component:about
  },
  /!*动态路由 无论你传入/user/123 还是/user/234都能匹配的到*!/
  {
    path:"/user/:id",
    component:user
  }*/
  /*路由的懒加载 一次性加载各种组件 页面会非常卡 解决方法使用路由懒加载 只有在用到路由的时候 才去加载对应的路由*/
  
  {
    path:"/home",
    meta : {
      title :"首页"
    },
    component:() => import("../components/home"),
    children : [
      {
        path:"news",
        component:() => import("../components/homeNews")
      },
      {
        path:"maps",
        component:() => import("../components/homeMaps")
      }
    ]
  },

  {
    path:"/about",
    meta : {
      title :"关于"
    },
    component:() => import("../components/about")
  },
 
  {
    path:"/user/:id",
    meta : {
      title :"用户"
    },
    component:() => import("../components/user")
  }
];
const vueRouter = new VueRouter({
  routes,
  mode : "history"
})
vueRouter.beforeEach((to,from,next)=>{
  next();
  document.title = to.matched[0].meta.title;
})
/*3.导出这个路由器*/
export  default  vueRouter;
