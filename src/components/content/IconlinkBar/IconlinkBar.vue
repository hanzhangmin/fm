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
import shizheng from 'assets/icon/xinwen.png'
import keji from 'assets/icon/keji.png'
import junshi from 'assets/icon/junshi.png'
import caijing from 'assets/icon/caiwu.png'
import tiyu from 'assets/icon/tiyu.png'
import lishi from 'assets/icon/lishi.png'
import wenhua from 'assets/icon/wenhua.png'
import jiankang from 'assets/icon/jiankang.png'
import lvxing from 'assets/icon/lvxing.png'
import gongyi from 'assets/icon/gongyi.png'
export default {
  name: "IconlinkBar",
  components: {
    Inconlink
  },
  data () {
    return {
      links: [
        {
          icon: shizheng,
          name: "时政"
        },
        {
          icon: keji,
          name: "科技"
        },
        {
          icon: junshi,
          // icon: "icon-junren",
          name: "军事"
        },
        {
          icon: caijing,
          name: "财经"
        },
        {
          icon: tiyu,
          name: "体育"
        },
        {
          icon: lishi,
          name: "历史"
        },
        {
          icon: wenhua,
          name: "文化"
        },
        {
          icon: jiankang,
          name: "健康"
        },
        {
          icon: lvxing,
          name: "旅行"
        },
        {
          icon: gongyi,
          // icon: "icon-weixingongyihuodongshanghu",
          name: "公益"
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
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(2, auto);
  padding: 5px 0px;
}
</style>