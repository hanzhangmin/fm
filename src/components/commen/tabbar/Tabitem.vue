<template>
  <div class="Tabitem"
       @click="itemclick"
       :class="activeClass"
       :style="Color">
    <slot name="Tabitem_icon"></slot>
    <slot name="Tabitem_sign"></slot>
  </div>
</template>
<script>
export default {
  name: "Tabitem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "green"
    }
  },
  computed: {
    isActive () {
      return !this.$route.path.indexOf(this.path)
    },
    activeClass () {
      return this.isActive ? "active" : "";
    },
    Color () {
      return this.isActive ? { "color": this.activeColor } : {}
    }
  },
  methods: {
    itemclick () {
      try {
        this.$router.push(this.path)
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>
<style lang="less" scoped>
.Tabitem {
  flex: 1;
  text-align: center;
  height: 90px;
  color: @gray-7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .iconfont {
    font-size: 40px;
    transition: color 0.3s ease-in;
  }
  .tab-name {
    font-size: @font-size-xs;
  }
}
</style>