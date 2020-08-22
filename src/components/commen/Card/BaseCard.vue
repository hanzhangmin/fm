<template>
  <div class="baseCard">
    <div class="baseCard_title">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <span slot="right"
              @click.stop="gomore"> 更多>></span>
      </div>
    </div>
    <div class="baseCard_body">
      <slot name="baseCard_body"></slot>
    </div>
    <div class="baseCard_footer">
      <slot name="footer"></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: "baseCard",
  props: {
    youlove: Array
  },
  created () {
  },
  methods: {
    gomore () {
      this.$emit("gomore")
    },
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/baseCard.less";
.icon-xihuan2,
.icon-xunhuan,
.icon-new {
  color: @maincolor;
}
.icon-new {
  font-size: 0.6rem;
}
</style>