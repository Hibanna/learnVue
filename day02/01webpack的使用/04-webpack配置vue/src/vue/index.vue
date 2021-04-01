<template>
<div>
  {{message}}
  <app/>
</div>
</template>

<script>
import app from './app'
export default {
  name: "index",
  data()  {
    return  {
      message : "我是父组件信息！"
    }

  },
  components : {
    app
  }
}
</script>

<style scoped>

</style>