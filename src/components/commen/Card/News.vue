<template>
  <div class="bookcard">
    <div class="img">
      <slot name="audiobox">
      </slot>
    </div>
    <div class="intro">
      <slot name="title"></slot>
      <slot name="score"></slot>
    </div>
  </div>

</template>
<script>
export default {
  name: "News"
}
</script>
<style lang="less" scoped>
.bookcard {
  display: flex;
  background-color: #ffffff;
  .img {
    img {
      position: relative;
      width: 24vw;
      height: 18vw;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>