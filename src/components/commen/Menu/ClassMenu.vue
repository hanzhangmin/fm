<template>
  <ul class="menu">
    <li v-for="(item,index) in menuDatas"
        :key="index"
        :ref="'class'+index"
        :class="{active:index==active}"
        @click.stop="changeActive(index)">{{item.name}}
    </li>

  </ul>
</template>

<script>
export default {
  name: "ClassMenu",
  props: {
    menuDatas: Array
  },
  data () {
    return {
      active: 0,
    }
  },
  mounted () {
    // console.log(this.$refs['class' + this.active]);
    // let activedom = this.$refs['class' + this.active]
    // activedom.className = "active"
    // this.$refs['class' + this.active].className = "active"
  },
  methods: {
    changeActive (index) {
      this.active = index
    }
  },
}
</script>
<style lang="less" scoped>
.menu {
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  li {
    text-align: center;
    font-size: @font-size-sm;
    letter-spacing: 4px;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid @gray-2;
    color: @gray-7;
    transition: all 0.3s linear;
    // box-shadow: 8px 0px 8px 8px @gray-2;
  }
  .active {
    border-left: 4px solid @maincolor;
    background-color: @gray-1;
    color: @maincolor;
  }
}
</style>