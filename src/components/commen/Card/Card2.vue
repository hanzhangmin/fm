<template>
  <div class="card2">
    <slot name="card2img"></slot>
  </div>
</template>
<script>
export default {
  name: "Card2"
}
</script>
<style lang="less" scoped>
.card2 {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>