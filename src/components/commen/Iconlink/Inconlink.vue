<template>
  <div class="icon_link">
    <slot name="linkicon"></slot>
    <br>
    <slot name="linksign"></slot>
  </div>
</template>
<script>
export default {
  name: "Iconlink",
}
</script>
<style lang="less" scoped>
.icon_link {
  text-align: center;
  padding: 10px 0px;
  line-height: 50px;
  .icon-img {
    width: 50px;
    height: 50px;
  }
  .icon-name {
    letter-spacing: 3px;
    font-size: @font-size-md;
    color: @gray-6;
  }
}
</style>