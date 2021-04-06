<template>
  <div id="app">
<!--    <router-link to = "/home" tag="li" replace active-class="active">首页</router-link>
    <router-link to = "/about" tag="li"replace active-class="active">关于</router-link>-->
<!--    通过代码跳转-->
    <button @click="linkToHome">首页</button><button @click="linkToAbout">关于</button>
<!--    注意path 不要写成 path:'user/123' 要写成path:'/user/123' 不带/它会向后坠变成/user/user 写了/代表他从根路径开始-->
    <router-link  :to = "{path:'/user/123',query : {name : '张三',age:'18'}}">用户</router-link >
<!--    <button @click="linkToUser">用户</button>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>
<script>
export default {
  name: "App",
  methods : {
    linkToHome() {

        /*this.$router.push("/home");*/
      this.$router.replace("/home").catch(err => {
        console.log(err);
      })
    },
    linkToAbout() {
      /*this.$router.push("/about");*/
      this.$router.replace("/about")
    },
    linkToUser() {
     /* this.$router.push("/user/123");*/
      this.$router.replace("/user/123")
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active {
  color: #f00;
}
.active {
  color: green;
}
</style>
