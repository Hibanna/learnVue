<template>
  <div>
    <h2>我是用户</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "user"
}
</script>

<style scoped>

</style>