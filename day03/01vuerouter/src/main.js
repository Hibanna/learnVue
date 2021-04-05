import Vue from 'vue'
import App from './App.vue'
/*导入路由器*/
import router from "./router";

Vue.config.productionTip = false

new Vue({
  /*4.挂载路由器*/
  router,
  render: h => h(App)
}).$mount('#app')
