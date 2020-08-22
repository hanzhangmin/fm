<template>
  <div>
    <van-tabs v-model="active"
              animated
              sticky
              swipeable
              :color="maincolor"
              :title-active-color="maincolor"
              line-width="20px"
              line-height="2px"
              lazy-render>
      <van-tab title="推荐">
        <SubRecommend></SubRecommend>
      </van-tab>
      <van-tab title="我的">
        <SubMain></SubMain>
      </van-tab>
      <van-tab title="排行">
        <SubRank></SubRank>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant';
import { maincolor } from 'assets/js/theme'
import SubMain from './plates/SubMain'
import SubRecommend from './plates/SubRecommend'
import SubRank from './plates/SubRank'
export default {
  name: "subscribe",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    SubMain,
    SubRecommend,
    SubRank
  },
  data () {
    return {
      active: 0,
      maincolor
    };
  },

}
</script>
<style >
.van-tabs__wrap {
  height: 80px !important;
}
</style>
