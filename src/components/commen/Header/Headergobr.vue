<template>
  <div>
    <Header>
      <span slot="Header_left"
            @click="goback"
            class="iconfont icon-zuo"
            style="font-size:2rem"></span>
      <span slot="Header_title"
            class="">
        <slot name="Headertitle"></slot>
      </span>
      <span slot="Header_right"
            class="">
        <slot name="Headerright"></slot>
      </span>
    </Header>
  </div>
</template>
<script>
import Header from "./Header"
export default {
  name: 'Headergobr',
  components: {
    Header
  },
  methods: {
    goback () {
      this.$router.go(-1)
      // this.$router.back()
      // window.history.back()
      // window.history.back();
    }
  },
}
</script>
<style scoped>
</style>