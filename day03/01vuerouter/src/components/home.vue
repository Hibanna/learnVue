<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/news" replace >新闻</router-link>
    <router-link to="/home/maps" replace >地图</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "home"
}
</script>

<style scoped>

</style>