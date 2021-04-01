<template>
<div class="title">
  {{message}}
</div>
</template>

<script>
export default {
name: "app",
  data() {
    return {
      message : "我是子组件信息！"
    }
  }
}
</script>

<style scoped>
  .title {
    color: green;
  }
</style>