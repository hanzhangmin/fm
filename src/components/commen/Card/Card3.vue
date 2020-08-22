<template>
  <div class="carditem">
    <div class="theimg"
         :style="{'background-image':'url('+img+')'}">
      <div :class="'playnum'+num">
        {{num}}
      </div>
    </div>
    <div class="intro">
      {{intro}}
    </div>
  </div>
</template>
<script>
export default {
  name: "Card3",
  // data () {
  //   return {
  //     img: "http://www.huitengit.com/HZMtest/yz2.jpg",
  //   }
  // },
  props: {
    img: { type: String, default: "http://huitengit.com/assets/imgs/f3.jpg" },
    num: { type: Number, default: 2 },
    intro: { type: String, default: "详细信息" },
  }
}
</script>

<style lang="less" scoped>
@import "assets/css/Card3.less";
</style>