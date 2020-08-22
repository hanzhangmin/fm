<template>
  <div class="body">
    <div class="fixed">
      <Header>
        <div slot="Header_right">
          <span class="iconfont icon-shezhi"></span>
        </div>
      </Header>
    </div>

    <div class="mainbox">
      <div class="panel"
           @click.stop="updataProfile">
        <div class="flex">
          <div class="flex1">
            <div class="mypicture">
              <img src="http://huitengit.com/assets/imgs/f3.jpg"
                   alt=""
                   srcset="">
            </div>
          </div>
          <div class="flexauto">
            <div class="myintro">
              <b>听友xxxxxxxxxxx</b>
              <p> <span>听书32000分钟</span> &nbsp; <span class="fenge">/</span> &nbsp;<span class="myrank">听霸</span> </p>
            </div>
          </div>

        </div>
      </div>

      <IconlinkBar />
      <Lovecard :youlove="youlove">
        <span slot="left">
          <span class="iconfont icon-xihuan2"></span>
          我喜欢
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
        <Lovecard :youlove="newlist">
          <span slot="left">
            <span slot="left"
                  class="iconfont icon-shoucang"></span>
            我收藏
          </span>
          <span slot="footer">
            <span class="iconfont icon-xunhuan"></span>
            <span> 换一批</span>
          </span>
        </Lovecard>
        <div class="slot1">推荐</div>
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
              <span class="iconfont icon-erji2"> {{item.playNum}}</span>
            </div>
            <div>
              <span class="iconfont icon-shoucang2"></span>
            </div>
          </div>
        </Card1>
      </van-list>
    </div>

  </div>
</template>
<script>
import { maincolor } from 'assets/js/theme'
import audio from 'assets/js/audio'
import { Toast } from 'vant'
import Header from 'components/commen/Header/Header'
import IconlinkBar from 'components/content/IconlinkBar/Profilebar'
// import BaseCard from 'components/commen/Card/BaseCard'
import Card1 from 'components/commen/Card/Card1'
import Lovecard from 'components/commen/Card/Lovecard'
import Card2 from 'components/commen/Card/Card2'
// import Slotzj from 'components/commen/Little/Slotzj'
export default {
  name: "profile",
  components: {
    IconlinkBar,
    // BaseCard,
    Card1,
    Lovecard,
    Card2,
    Header,
    // Slotzj
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
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          title: "若只如初见---杨紫",
          intro: " 电视剧青云志片尾曲",
          playNum: "3400"
        },
        {
          id: 2,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          title: "若只如初见---杨紫",
          intro: " 电视剧青云志片尾曲",
          playNum: "3400"
        },
        {
          id: 3,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          title: "若只如初见---杨紫",
          intro: " 电视剧青云志片尾曲",
          playNum: "3400"
        },
      ],
      youlove: [
        {
          id: 4,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          title: "若只如初见---杨紫",
          intro: " 电视剧青云志片尾曲",
          playNum: "3400"
        },
        {
          id: 5,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          title: "若只如初见---杨紫",
          intro: " 电视剧青云志片尾曲",
          playNum: "3400"
        },
        {
          id: 6,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          title: "若只如初见---杨紫",
          intro: " 电视剧青云志片尾曲",
          playNum: "3400"
        },
      ],
      mp3lsit2: [

        {
          id: 345,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "我会记得你---霍建华，杨紫",
          intro: " 电视剧战长沙片尾曲",
          rank: "1",
          score: 4,
          playNum: "3400"
        },
        {
          id: 234,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "水星记---杨紫",
          intro: " 杨紫",
          rank: "1",
          score: 5,
          playNum: "3400"
        },
        {
          id: 123,
          theimg: "http://huitengit.com/assets/imgs/f4.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "若只如初见---杨紫",
          intro: " 电视剧青云志片尾曲",
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
    },
    updataProfile () {
      this.$router.push("/updataprofile")
    }
  },
}
</script>
<style lang="less" scoped>
.fixed {
  z-index: 1000;
}
.profile {
  font-size: 16px;
  header {
    display: flex;
  }
  overflow-y: scroll;
}
.icon-shoucang {
  color: @maincolor;
}
.mainbox {
  padding-top: 80px;
}
.mypicture {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  overflow: hidden;
  img {
    width: 120px;
    height: 120px;
  }
}
.myintro {
  b {
    font-size: @font-size-lg;
  }
  p {
    font-size: @font-size-md;
    color: @gray-7;
    span {
      display: inline-block;
    }
  }

  .fenge {
    color: @gray-3;
    font-size: @font-size-lg;
  }
  .myrank {
    background-color: @maincolor;
    color: #ffffff;
    font-size: @font-size-xs;
    padding: 4px 10px;
    letter-spacing: 4px;
    border-radius: 10px;
  }
}

.container {
  height: calc(100% - 170px) !important;
}
</style>