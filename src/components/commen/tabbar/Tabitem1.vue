<template>
  <div class="Tabitem">
    <!-- <span class="iconfont icon-shipinbofang"></span> -->
    <slot name="play" />

  </div>
</template>
<script>
export default {
  name: "Tabitem",
  methods: {
    // itemclick () {
    //   // 显示播放组件
    // }
  },
}
</script>
<style lang="less" scoped>
</style>