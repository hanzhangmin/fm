<template>
  <div>
    <Header :backcolor="backcolor"
            :fontcolor="color">
      <span slot="Header_left"
            @click="goback"
            class="iconfont icon-jiantouarrowhead7"
            :style="{'color':color}"></span>
      <span slot="Header_title">
        <slot name="Headertitle"></slot>
      </span>
      <span slot="Header_right">
        <slot name="Headerright"></slot>
      </span>
    </Header>
  </div>
</template>
<script>
import Header from "./Header"
export default {
  name: 'Headergoback',
  components: {
    Header
  },
  props: {
    backcolor: Array,
    color: Array
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
}
</script>
<style lang="less" scoped>
// .icon-jiantouarrowhead7 {
//   color: #000000;
//   font-size: 16px;
// }
</style>