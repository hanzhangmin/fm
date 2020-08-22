<template>
  <div class="carditem">
    <div class="theimg"
         :style="{'background-image':'url('+img+')'}">
      <div class="playnum">

        1
      </div>
    </div>
    <div class="intro">
      简单介绍
    </div>
  </div>
</template>

<script>
export default {
  name: "Card3",
  data () {
    return {
      img: "http://huitengit.com/assets/imgs/f3.jpg",
    }
  },
}
</script>

<style lang="less" scoped>
@import "assets/css/Card4.less";
</style>