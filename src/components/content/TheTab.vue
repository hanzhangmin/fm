<template>
  <div class="tabbar">
    <Tabitem path="/index/home"
             :activeColor="activeColor">
      <span class="iconfont icon-shouye2"
            slot="Tabitem_icon"></span>
      <span class="tab-name"
            slot="Tabitem_sign">首页</span>
    </Tabitem>
    <Tabitem path="/index/hot"
             :activeColor="activeColor">
      <span class="iconfont icon-huobao"
            slot="Tabitem_icon"></span>
      <span class="tab-name"
            slot="Tabitem_sign">热门</span>
    </Tabitem>
    <Tabitem>
    </Tabitem>
    <Tabitem path="/index/subscribe"
             :activeColor="activeColor">
      <span class="iconfont icon-wodedingyue"
            slot="Tabitem_icon"></span>
      <span class="tab-name"
            slot="Tabitem_sign">订阅</span>
    </Tabitem>
    <Tabitem path="/index/profile"
             :activeColor="activeColor">
      <span class="iconfont icon-wode1"
            slot="Tabitem_icon"></span>
      <span class="tab-name"
            slot="Tabitem_sign">我的</span>
    </Tabitem>

  </div>

</template>
<script>
import { maincolor } from "assets/js/theme.js"
import Tabitem from "components/commen/tabbar/Tabitem"
export default {
  name: "TheTab",
  components: {
    Tabitem,
  },
  data () {
    return {
      activeColor: maincolor
    }
  },
  methods: {
    myshowPopup () {
      console.log(1);
      this.$emit("myshowPopup")
    }
  },
}
</script>
<style lang="less" scoped>
.tabbar {
  background-color: #ffffff;
  z-index: 100;
  width: 100%;
  bottom: 0px;
  left: 0px;
  display: flex;
  box-shadow: 0px 5px 4px #cccccc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .fixed();
}
</style>

