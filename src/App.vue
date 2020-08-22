<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName">
        <router-view class="view"></router-view>
      </transition>
    </keep-alive>
    <Audio @showPlayer="showPlayer" />
  </div>
</template>
<script>
import Audio from 'components/commen/Audio/Audio'
export default {
  name: 'App',
  components: {
    Audio
  },
  data () {
    return {
      transitionName: ''
    }
  },
  created () {
    document.addEventListener('plusready', function () {
      var webview = plus.webview.currentWebview();
      plus.key.addEventListener('backbutton', function () {
        webview.canBack(function (e) {
          if (e.canBack) {
            webview.back();
          } else {
            webview.close();//hide,quit
          }
        })
      });
    });
  },
  mounted () {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.fun, false);//false阻止默认事件
    }
  },
  methods: {
    fun () {
      console.log("监听到了");
      // alert("监听到了");
    },
    showPlayer (src) {
      this.$router.push("/play")
    },
  },
  destroyed () {
    window.removeEventListener('popstate', this.fun, false);//false阻止默认事件
  },
  watch: {//使用watch 监听$router的变化
    $route (to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  background-color: @gray-1;
  min-height: 100vh;
}
.view {
  width: 100%;
  position: absolute;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 250ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

