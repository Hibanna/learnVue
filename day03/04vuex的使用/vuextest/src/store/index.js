import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store(
  {
    state : {
      counter : 1000
    },
    mutations : {
      inc(state) {
        state.counter++;
      },
      dec(state) {
        state.counter--;
      }
    }
  }
);
export default store;
