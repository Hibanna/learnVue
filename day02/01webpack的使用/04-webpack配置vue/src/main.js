import V from 'vue';
import test from "./vue/index.vue";
new V (
  {
    el : "#app",
    template : `
    <div id="app">
    <test/>
    </div>
    `,
    components : {
      test : test
    }
  }
);