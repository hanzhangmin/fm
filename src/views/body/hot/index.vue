<template>
  <div>
    <!-- animated -->
    <van-tabs v-model="active"
              animated
              sticky
              swipeable
              :color="maincolor"
              :title-active-color="maincolor"
              line-width="20px"
              line-height="2px"
              lazy-render>
      <van-tab title="有声书">
        <hotbooks></hotbooks>
      </van-tab>
      <van-tab title="音乐">
        <hotMusic></hotMusic>
      </van-tab>
      <van-tab title="时政">
        <hotNews></hotNews>
      </van-tab>
      <van-tab title="专题">
        <hotSubject />
      </van-tab>
      <van-tab title="电台">
        <hotSation />
      </van-tab>
      <van-tab title="节目">
        <hotProgrem />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant';
import { maincolor } from 'assets/js/theme'
import hotbooks from './plates/books'
import hotMusic from './plates/hotMusic'
import hotNews from './plates/hotNews'
import hotProgrem from './plates/hotProgrem'
import hotSation from './plates/hotSation'
import hotSubject from './plates/hotSubject'

// import SubRecommend from './plates/SubRecommend'
// import SubRank from './plates/SubRank'
export default {
  name: "hot",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    hotbooks,
    hotMusic,
    hotSation,
    hotSubject,
    hotProgrem,
    hotNews
    // SubRecommend,
    // SubRank
  },
  data () {
    return {
      active: 0,
      maincolor
    };
  },

}
</script>

