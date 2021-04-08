<template>
  <div id="app">
    <router-view></router-view>
  <tabbar>
    <tabbaritem path = "/home" activeColor="blue">
      <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text" >首页</div>
    </tabbaritem>
    <tabbaritem path = "/category">
      <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path = "/shopcart">
      <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path = "/profile">
      <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar/tabbar";
import tabbaritem from "./components/tabbar/tabbaritem";
export default {
  name: 'App',
  components : {
    tabbar,
    tabbaritem
  }
}
</script>

<style>

</style>
