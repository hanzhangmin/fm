<template>
  <div class="card">
    <div class="img">
      <slot name="audiobox">

      </slot>
    </div>
    <div class="intro">
      <slot name="title"></slot>
      <slot name="moreintro"></slot>
      <slot name="rank"> </slot>
      <slot name="score"></slot>
    </div>

  </div>

</template>
<script>
export default {
  name: "Card1"
}
</script>
<style lang="less" scoped>
.card {
  display: flex;
  padding: 20px;
  margin: 20px 10px;
  background-color: #ffffff;
  .img {
    flex-shrink: 0;
    width: 160px;
    height: 160px;
    border-radius: 10px;
    overflow: hidden;
    img {
      position: relative;
      max-width: 400px;
      max-height: 400px;
      min-width: 200px;
      min-height: 200px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .intro {
    flex: auto;
    p {
      height: 40px;
      line-height: 40px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>