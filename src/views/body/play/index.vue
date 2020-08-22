<template>
  <div class="player">
    <div class="goup"
         @click.stop="goup"
         v-show="isshowit">
      <span class="iconfont icon-jiantoushang"></span>
    </div>
    <div class="play"
         :style="{'background-image':'url('+themusic.pic+')'}">
      <div class="fixed">
        <Header :backcolor="backcolor"
                :fontcolor="fontcolor">
          <span slot="Header_left"
                @click="hidenthis"
                class="iconfont icon-jiantouarrowhead7"></span>
          <span slot="Header_title">{{themusic.title}}—{{themusic.author}}</span>
          <span slot="Header_right">
            <van-icon name="ellipsis" />
          </span>
        </Header>
      </div>
      <div class="playmask ">
        <div class="play_box">
          <!-- <div class="my_play">
            <div class="item1"><span class="iconfont icon-shoucang5"></span></div>
            <div class="item1"><span class="iconfont icon-shoucang1"></span></div>
            <div class="item1"><span class="iconfont icon-xiazai1"></span></div>
            <div class="item1"><span class="iconfont icon-xiaoxi"></span></div>
            <div class="item1"><span class="iconfont icon-haofangtuo400iconfontxinpandingyue"></span></div>
          </div> -->
          <div class="my_progress">
            <div class="timebar">{{thetime}}</div>
            <van-slider v-model="progressValue"
                        @change="onChange"
                        bar-height="4px"
                        :active-color="maincolor" />
            <div class="timebar">{{duration}}</div>
          </div>
          <div class="my_play">
            <div class="item2"><span class="iconfont icon-xunhuan1"></span></div>
            <div class="item2">
              <span class="playchang">
                <span class="iconfont icon-shangyishou3"></span>
              </span>
            </div>
            <div class="item2">
              <span class="my_play_play">
                <span v-if="playstate"
                      class="iconfont icon-zanting"
                      @click.stop="changeAudioState"></span>
                <span v-else
                      class="iconfont icon-bofang"
                      @click.stop="changeAudioState"></span>
              </span>
            </div>
            <div class="item2">
              <span class="playchang">
                <span class="iconfont icon-xiayishou5"></span>
              </span>
            </div>
            <div class="item2"><span class="iconfont icon-liebiao"></span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="mypanel">
        <h6>附文</h6>
        <div class="books">
          <p> 霍建华、节目 - 我会记得你

            词：胡云龙

            曲：张恒

            女：天空染成了灰色

            身后燃烧着战火

            该怒放的青春

            未到精彩就凋落

            幸福 它在哪呢

            男：不必计较那么多

            借口只是太软弱

            不屈服就拼搏

            就算明天没有我

            我们的痛

            用时间来愈合

            合：你要的快乐

            支撑我的执著

            为明天我舍得

            男：承受辛酸 回应沉默

            合：离别前 却只能强忍着

            说一句不爱我

            眼眶已然温热

            会记得 爱过

            男：不必计较那么多

            借口只是太软弱

            不屈服就拼搏

            合：就算明天没有我

            男：我们的痛

            合：用时间来愈合

            你要的快乐

            支撑我的执著

            为明天我舍得

            男：承受辛酸 回应沉默

            合：离别前 却只能强忍着

            说一句不爱我

            眼眶已然温热

            会记得

            女：你要的快乐

            支撑我的执著

            为明天我舍得

            男：承受辛酸 回应沉默

            合：离别前 却只能强忍着

            说一句不爱我

            眼眶已然温热

            会记得

            男：爱过</p>

        </div>
      </div>

    </div>
    <div class="panel">
      <div class="mypanel">
        <h6>热评</h6>
        <comment />
      </div>
    </div>
  </div>
</template>
<script>
import MusicPlayer from './MusicPlayer'
import Header from 'components/commen/Header/Header'
import { maincolor, gray_7 } from 'assets/js/theme.js'
import { getTime } from 'assets/js/audio.js'
import comment from './comment'
export default {
  name: "play",
  components: {
    MusicPlayer,
    Header,
    comment
  },
  data () {
    return {
      maincolor,
      progressValue: 0,
      thetime: "0",
      duration: "0",
      themusic: {
        title: "人生若只如初见",
        author: "节目",
        url: 'http://huitengit.com/assets/mp3/MP32.mp3',//音乐资源
        pic: "http://huitengit.com/assets/imgs/f3.jpg",//背景图片
      },
      backcolor: "transparent",
      fontcolor: "#ffffff",
      isshowit: false
    }
  },
  computed: {
    imgSrc () {
      return this.$store.state.imgSrc
    },
    audioSrc () {
      return this.$store.state.audioSrc
    },
    playstate () {
      // console.log(this.$store.state.playstate);
      return this.$store.state.playstate
    },
    playId () {
      return this.$store.state.playId
    },
    playstyle () {
      if (this.imgSrc != null || this.imgSrc != "") {
        return {
          'background-image': ' url(' + this.imgSrc + ')'
        }
      } else {
        return {
          // 'background-image': ' url(' + this.imgSrc + ')'
        }
      }
    }
  },
  created () {
  },
  methods: {
    onChange (value) {
      let audio = document.getElementById("theaudio")
      audio.currentTime = audio.duration * value / 100
      this.thetime = getTime((audio.currentTime).toString())
      // this.changeprogress()
    },
    hidenthis () {
      this.$router.go(-1);
    },
    changeAudioState () {
      let audio = document.getElementById("theaudio")
      if (this.playstate) {
        this.$store.commit("changPlay", false)
        audio.pause()
      } else {
        this.$store.commit("changPlay", true)
        audio.play()
        this.changeprogress()
      }
    },
    changeprogress () {
      let audio = document.getElementById("theaudio")
      this.duration = getTime((audio.duration).toString())
      const timer = setInterval(() => {
        this.duration = getTime((audio.duration).toString())
        if (audio.ended) {
          this.progressValue = 100
          this.thetime = this.duration
          clearInterval(timer)
        } else {
          this.progressValue = audio.currentTime / audio.duration * 100
          this.thetime = getTime((audio.currentTime).toString())
        }
      }, 30)
    },
    handleScroll () {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      //当滚动到距离顶部200px时，返回顶部的锚点显示
      if (t > 80) {
        // console.log("hah");
        this.backcolor = "#ffffff";
        this.fontcolor = gray_7;
        this.isshowit = true;
      } else {          //恢复正常
        this.backcolor = "transparent";
        this.fontcolor = "#ffffff";
        this.isshowit = false;
      }
    },
    goup () {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  },
  mounted () {
    setTimeout(() => {
      this.changeprogress()
    }, 300);
    window.addEventListener('scroll', this.handleScroll);
  },
  watch: {
    playId () {
      this.changeprogress()
    }
  },
}
</script>
<style lang="less" scoped>
.books {
  p {
    font-size: @font-size-lg;
    line-height: 60px;
    color: @gray-7;
  }
}
.container {
  padding: 0px !important;
}
.player {
  background-color: #efefef;
  min-height: 100vh;
}
.play {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.playmask {
  background-color: rgba(0, 0, 0, 0.2);
}
.playitemintro {
  overflow: scroll;
}
// .my_play:first-child {

// }
.my_play {
  display: flex;
  text-align: center;
  padding: 40px 0px;
  div {
    flex: 1;
    color: #ffffff;
    .iconfont {
      font-size: @font-size-lg !important;
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
      position: relative;
    }
    span {
      display: inline-block;
    }
  }
  .item1 {
    height: auto;
  }
  .item2 {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    .icon-wodedingyue {
      font-size: @font-size-lg;
    }
    .my_play_play {
      height: 140px;
      width: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .playchang {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
.my_progress {
  padding-top: 200px;
  display: grid;
  grid-template-columns: 160px auto 160px;
  .timebar {
    font-size: @font-size-md;
    text-align: center;
    color: #efefef;
    transform: translateY(-8px);
  }
}
.goup {
  position: fixed;
  // width: 80px;
  // height: 80px;
  font-size: 40px;
  padding: 20px;
  right: 20px;
  bottom: 90px;
  color: @maincolor;
  background-color: #ffffff;
  transition: all 0.3s linear;
  border-radius: 50%;
  border: 1px solid @gray-3;
  box-shadow: 0px 0px 4px @gray-3;
}
</style>