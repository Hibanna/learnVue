<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="active">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :class="{active:active}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props : {
    path:{
      type:String
    }
  },
  data() {
    return{};
  },
  computed : {
    active() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods : {
    itemclick() {
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;

}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  margin-bottom: -2px;
}
.active {
  color: red;
}
</style>
