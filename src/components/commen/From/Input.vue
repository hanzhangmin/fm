<template>
  <div class="input flexauto">
    <div class="input-left">
      <span class="iconfont icon-search"></span>
    </div>
    <input @focus="gosearch"
           type="text"
           clearble />

  </div>

</template>
<script>
export default {
  name: "Input",
  methods: {
    gosearch () {
      this.$router.push("/search")
    }
  },
}
</script>
<style lang="less" scoped>
.input {
  background-color: @gray-1;
  border-radius: 30px;
  display: flex;
  input {
    width: 100%;
    color: @gray-7;
    font-size: @font-size-md;
  }
}
.input-left,
.icon-search {
  float: left;
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: @font-size-md;
  color: @gray-7;
}
.input-center {
}
</style>