<template>
  <div class="Header"
       :style="{'background-color':backcolor,'color':fontcolor}">
    <div class="Header_left">
      <slot name="Header_left"></slot>
    </div>
    <div class="Header_title">
      <slot name="Header_title"></slot>
    </div>
    <div class="Header_right">
      <slot name="Header_right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    backcolor: {
      type: String,
      default: "#ffffff"
    },
    fontcolor: {
      type: String,
      default: "#888888"
    }
  }
}
</script>
<style lang="less" scoped>
.Header {
  width: 100%;
  display: flex;
  height: 80px;
  line-height: 80px;
  transition: all 0.3s ease-in;
  z-index: 1000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.Header div {
  font-size: 30px;
  text-align: center;
}
.Header .Header_left,
.Header .Header_right {
  width: 80px;
  text-align: center;
}
.Header .Header_title {
  flex: auto;
  font-size: @font-size-lg;
}
</style>
