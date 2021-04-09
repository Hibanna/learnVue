<template>
  <div id="app">
    <h2> {{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <hellovuex/>
  </div>
</template>

<script>
import hellovuex from "./components/hellovuex";
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    add() {
      this.$store.commit("inc");
    },
    sub() {
      this.$store.commit("dec");
    }
  },
  components : {
    hellovuex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
