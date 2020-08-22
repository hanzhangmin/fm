<template>
  <div class="homebox">
    <div class="container">
      <keep-alive>
        <transition :name="transitionName">
          <router-view class="child_view"></router-view>
        </transition>
      </keep-alive>
    </div>
    <div class="footer">
      <TheTab />
    </div>
    <!-- <Audio @showPlayer="showPlayer" /> -->
  </div>
</template>
<script>
import TheTab from 'components/content/TheTab'
import Audio from 'components/commen/Audio/Audio'
import {
  Button,
  Popup,
  Tabbar,
  TabbarItem,
} from 'vant';
export default {
  name: 'Index',
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    Audio,
    TheTab
  },
  data () {
    return {
      transitionName: 'slide-left'
    };
  },
  methods: {
    showPlayer (src) {
      this.$router.push("/index/play")
    },
  },
  watch: {
    '$route' (to, from) {
      if (to.path == '/') {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    }
  },
  // 注意：组件挂载后才能访问到 ref 对象
}
</script>
<style lang="less" scoped>
.homebox {
  width: 100%;
  background-color: @gray-1;
  // .container {
  //   height: calc(100vh - 90px);
  //   margin-bottom: 90px;
  // }
  .footer {
    height: 90px;
  }
}
</style>
