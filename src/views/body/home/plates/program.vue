<template>
  <div class="body">
    <van-pull-refresh v-model="isLoading"
                      @refresh="onRefresh">

      <van-skeleton v-show="skeletonShow"
                    title
                    :row="3"
                    animate>
      </van-skeleton>
      <van-skeleton v-show="skeletonShow"
                    title
                    :row="3"
                    animate>
      </van-skeleton>
      <van-skeleton v-show="skeletonShow"
                    title
                    :row="3"
                    animate>
      </van-skeleton>
      <van-skeleton v-show="skeletonShow"
                    title
                    :row="3"
                    animate>
      </van-skeleton>
      <div v-show="!skeletonShow">
        <Lovecard :youlove="youlove">
          <span slot="left">
            <span class="iconfont icon-xihuan2"></span>
            猜你喜欢
          </span>
          <span slot="footer">
            <span class="iconfont icon-xunhuan"></span>
            <span> 换一批</span>
          </span>
        </Lovecard>

        <van-list v-model="loading"
                  :finished="finished"
                  finished-text="我是有底线的"
                  @load="onLoad">
          <Card1 v-for="(item,index) in mp3lsit"
                 :key="index+'mp3lsit'">
            <img slot="audiobox"
                 :src="item.theimg"
                 @click.stop="playorpause(item.id+'mp3','play'+item.id,item,$event)"
                 alt="">
            <p class="title"
               slot="title">
              {{item.title}}
            </p>
            <p class="moreintro"
               slot="moreintro">
              {{item.intro}}
            </p>
            <p slot="rank"
               class="moreintro"
               style="color:red">
              音乐榜 {{item.rank}}
            </p>
            <div slot="score"
                 class="score">
              <!-- <div>
                <van-rate v-model="item.score"
                          :size="10"
                          color="#ffd21e"
                          void-icon="star"
                          void-color="#eee" />
              </div> -->
              <div>
                <span class="iconfont icon-erji2"></span> {{item.playNum}}
              </div>
              <div>
                <span class="iconfont icon-shoucang2"></span>
              </div>
            </div>
          </Card1>
          <Lovecard :youlove="newlist">
            <span slot="left">
              <span slot="left"
                    class="iconfont icon-new"></span>
              最新
            </span>
            <span slot="footer">
              <span class="iconfont icon-xunhuan"></span>
              <span> 换一批</span>
            </span>
          </Lovecard>
          <Card1 v-for="(item,index) in mp3lsit2"
                 :key="index+'mp3lsit2'">
            <img slot="audiobox"
                 :src="item.theimg"
                 @click.stop="playorpause(item.id+'mp3','play'+item.id,item,$event)"
                 alt="">
            <p class="title"
               slot="title">
              {{item.title}}
            </p>
            <p class="moreintro"
               slot="moreintro">
              {{item.intro}}
            </p>
            <p slot="rank"
               class="moreintro"
               style="color:red">
              音乐榜 {{item.rank}}
            </p>
            <div slot="score"
                 class="score">
              <!-- <div>
                <van-rate v-model="item.score"
                          :size="10"
                          color="#ffd21e"
                          void-icon="star"
                          void-color="#eee" />
              </div> -->
              <div>
                <span class="iconfont icon-erji2"></span> {{item.playNum}}
              </div>
              <div>
                <span class="iconfont icon-shoucang2"></span>
              </div>
            </div>
          </Card1>
        </van-list>
      </div>

    </van-pull-refresh>

  </div>

</template>
<script>
import { maincolor } from 'assets/js/theme'
import audio from 'assets/js/audio'
import { Toast } from 'vant'
import BaseCard from 'components/commen/Card/BaseCard'
import Card1 from 'components/commen/Card/Card1'
import Lovecard from 'components/commen/Card/Lovecard'
import Card2 from 'components/commen/Card/Card2'
export default {
  name: "program",
  components: {
    BaseCard,
    Card1,
    Lovecard,
    Card2
  },
  data () {
    return {
      skeletonShow: true,
      isLoading: false,
      list: [],
      loading: false,
      finished: false,
      playclass: "iconfont icon-erji",
      pauseclass: "iconfont icon-triangle-right",
      playmp3id: "",
      playid: "",
      maincolor,
      newlist: [
        {
          id: 1,
          theimg: "http://huitengit.com/assets/imgs/f2.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 2,
          theimg: "http://huitengit.com/assets/imgs/f3.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 3,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 4,
          theimg: "http://huitengit.com/assets/imgs/f5.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 5,
          theimg: "http://huitengit.com/assets/imgs/f6.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 6,
          theimg: "http://huitengit.com/assets/imgs/f2.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
      ],
      youlove: [
        {
          id: 1,
          theimg: "http://huitengit.com/assets/imgs/f2.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 2,
          theimg: "http://huitengit.com/assets/imgs/f3.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 3,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 4,
          theimg: "http://huitengit.com/assets/imgs/f5.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 5,
          theimg: "http://huitengit.com/assets/imgs/f6.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
        {
          id: 6,
          theimg: "http://huitengit.com/assets/imgs/f2.jpg",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          playNum: "3400"
        },
      ],
      mp3lsit: [
        {
          id: 123,
          theimg: "http://huitengit.com/assets/imgs/f2.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          rank: "1",
          score: 5,
          playNum: "3400"
        },
        {
          id: 345,
          theimg: "http://huitengit.com/assets/imgs/f3.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "法律",
          intro: "今日说法",
          rank: "1",
          score: 4,
          playNum: "3400"
        },
        {
          id: 234,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "政法",
          intro: " 法治频道",
          rank: "1",
          score: 5,
          playNum: "3400"
        },
      ],
      mp3lsit2: [

        {
          id: 345,
          theimg: "http://huitengit.com/assets/imgs/f2.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "法律",
          intro: "今日说法",
          rank: "1",
          score: 4,
          playNum: "3400"
        },
        {
          id: 234,
          theimg: "http://huitengit.com/assets/imgs/f5.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "政法",
          intro: "法治频道 ",
          rank: "1",
          score: 5,
          playNum: "3400"
        },
        {
          id: 123,
          theimg: "http://huitengit.com/assets/imgs/f6.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "穆桂英挂帅",
          intro: " 老梁故事汇",
          rank: "1",
          score: 5,
          playNum: "3400"
        },
      ]
    }
  },
  created () {
    setTimeout(() => {
      this.skeletonShow = false
    }, 1000)
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 0; i++) {
          this.mp3lsit.push(this.mp3lsit2.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.mp3lsit2.length >= 3) {
          this.finished = true;
        }
      }, 1000);
    },
    playorpause (mp3id, playid, item, event) {
      let audio = document.getElementById("theaudio")
      audio.src = item.audio
      localStorage.setItem("audioSrc", item.audio)
      localStorage.setItem("imgSrc", item.theimg)
      // localStorage.setItem("")
      this.$store.commit("changeAudioSrc", item.id, item.audio, item.theimg)
      // this.$store.commit("changeAudioSrc", item.audio, item.theimg)
      // changePlayId
      if (this.playid !== "") {
        // console.log(this.playid);
        console.log("not null");
        if (mp3id === this.playmp3id) {
          audio.pause();// 这个就是暂停
          event.target.className = this.pauseclass
          this.$store.commit("changPlay", false)
          this.playmp3id = ""
          this.playid = ""
        } else {
          document.getElementById(this.playid).className = this.pauseclass
          document.getElementById(this.playmp3id).pause()
          event.target.className = this.playclass
          audio.play();//audio.play();// 这个就是播放  
          this.$store.commit("changPlay", true)
          this.playmp3id = mp3id
          this.playid = playid
        }
      } else {
        event.target.className = this.playclass
        audio.play();//audio.play();// 这个就是播放
        this.$store.commit("changPlay", true)
        this.playmp3id = mp3id
        this.playid = playid
      }
      //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
    }
  },
}
</script>
<style lang="less" scoped>
// @import url("assets/css/Card1.less");
</style>