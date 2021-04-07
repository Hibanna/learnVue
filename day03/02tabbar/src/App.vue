<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "assets/css/base.css";
#tab-bar {
  display: flex;
  background-color: #e2e2e2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;

}
</style>
