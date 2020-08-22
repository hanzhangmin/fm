<template>
  <div class="iconlink_bar ">
    <Inconlink v-for="(link,index) in links"
               :key="index+'link'">
      <img class="icon-img"
           :src="link.icon"
           alt=""
           slot="linkicon"
           srcset="">
      <span class="icon-name"
            slot="linksign">{{link.name}}</span>
    </Inconlink>
  </div>
</template>
<script>
import Inconlink from 'components/commen/Iconlink/Inconlink'
import dingyue from 'assets/icon/dingyue.png'
import xiazai from 'assets/icon/xiazai.png'
import xihuan from 'assets/icon/xihuan.png'
import tingdan from 'assets/icon/tingdan.png'


export default {
  name: "IconlinkBar",
  components: {
    Inconlink
  },
  data () {
    return {
      links: [
        {
          icon: dingyue,
          name: "订阅"
        },
        {
          icon: xiazai,
          name: "下载"
        },
        {
          icon: xihuan,
          name: "喜欢"
        },
        {
          icon: tingdan,
          name: "听单"
        },
      ]
    }
  },
}
</script>
<style lang="less" scoped>
.iconlink_bar {
  display: grid;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
  // grid-template-columns: repeat(3, 33.33%);
  // grid-template-rows: repeat(3, 33.33%);
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(1, auto);
  padding: 5px 0px;
}
.iconfont {
  font-size: 40px;
}
.icon-wodedingyue {
  font-size: 30px;
}
.icon-xiazai {
  font-size: 40px;
}
</style>