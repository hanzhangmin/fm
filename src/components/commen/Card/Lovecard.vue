<template>
  <div class="baseCard">
    <div class="baseCard_title">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <p slot="right"
           @click.stop="gomore">
          更多 >
        </p>
      </div>
    </div>
    <div class="baseCard_body">
      <div v-for="(item,index) in youlove"
           :key="'love'+index"
           class="carditem">
        <div class="theimg"
             :style="{'background-image':'url('+item.theimg+')'}">
          <div class="playnum">
            <span class="iconfont icon-erji2"></span>
            {{item.playNum}}
          </div>
        </div>
        <div class="intro">
          <b>{{item.title}}</b>
          <span> {{item.intro}}</span>
        </div>
      </div>
    </div>
    <div class="baseCard_footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "loveCard",
  props: {
    youlove: Array
  },
  created () {
  },
  methods: {
    gomore () {
      this.$emit("gomore")
    },
    // update () {
    //   this.$emit("update")
    // }
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