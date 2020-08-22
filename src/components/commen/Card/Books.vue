<template>
  <div class="baseCard">
    <div class="baseCard_title">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <p slot="right"
           @click.stop="gomore"
           style="font-size:12px;"> 更多
          <!-- <van-icon name="arrow" /> -->
          >
        </p>
      </div>
    </div>
    <div class="baseCard_body">
      <div v-for="(item,index) in cards"
           :key="'love'+index"
           class="card">
        <div class="img">
          <img :src="item.theimg"
               alt=""
               srcset="">
          <div class="imgmask">
          </div>
        </div>
        <p class="moreintro">
          <b>{{item.title}}</b>
          <span> {{item.intro}}</span>
        </p>
      </div>
    </div>
    <div class="baseCard_footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Books",
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