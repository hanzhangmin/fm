<template>
  <div class="slot1">
    <slot name="slot1"></slot>
  </div>
</template>
<script>
export default {
  name: "slot1"
}
</script>
<style lang="less" scoped>
.slot1 {
  font-size: 20px;
  border-left: 4px solid @maincolor;
}
</style>