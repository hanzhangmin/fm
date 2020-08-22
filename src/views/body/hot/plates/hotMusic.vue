<template>
  <div class="hotcontainer">
    <div class="hotbox-left flex1">
      <classMenu :menuDatas="menuDatas" />
    </div>
    <div class="hotbox-right flex3">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="我是有底线的"
                @load="onLoad">
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
          <p class="moreintro"
             slot="rank"
             style="color:red">
            音乐榜 {{item.rank}}
          </p>
          <div slot="score"
               class="score">
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
  </div>
</template>
<script>
import classMenu from 'components/commen/Menu/ClassMenu'
import BookCard from 'components/commen/Card/BookCard'
import Card1 from 'components/commen/Card/Card1'
export default {
  name: "HotMusic",
  components: {
    classMenu,
    BookCard,
    Card1
  },
  data () {
    return {
      loading: false,
      finished: false,
      menuDatas: [
        {
          id: 1,
          name: "全部分类"
        },
        {
          id: 2,
          name: "历史"
        },
        {
          id: 3,
          name: "现代文学"
        },
        {
          id: 4,
          name: "流行"
        },
        {
          id: 5,
          name: "科技"
        },
        {
          id: 6,
          name: "工具"
        },
      ],
      mp3lsit2: [

        {
          id: 345,
          theimg: "http://huitengit.com/assets/imgs/f2.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "我会记得你霍建",
          intro: " 电视剧战长沙片尾曲",
          rank: "1",
          score: 4,
          playNum: "3400"
        },
        {
          id: 234,
          theimg: "http://huitengit.com/assets/imgs/f5.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "水星记",
          intro: " 音乐",
          rank: "1",
          score: 5,
          playNum: "3400"
        },
        {
          id: 123,
          theimg: "http://huitengit.com/assets/imgs/f6.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "若只如初见",
          intro: " 电视剧青云志片尾曲",
          rank: "1",
          score: 5,
          playNum: "3400"
        },
        {
          id: 345,
          theimg: "http://huitengit.com/assets/imgs/f2.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "我会记得你",
          intro: " 电视剧战长沙片尾曲品味去片尾曲",
          rank: "1",
          score: 4,
          playNum: "3400"
        },
        {
          id: 234,
          theimg: "http://huitengit.com/assets/imgs/f5.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "水星记",
          intro: " 音乐",
          rank: "1",
          score: 5,
          playNum: "3400"
        },
        {
          id: 123,
          theimg: "http://huitengit.com/assets/imgs/f6.jpg",
          audio: "http://huitengit.com/assets/mp3/MP31.mp3",
          title: "若只如初见",
          intro: " 电视剧青云志片尾曲",
          rank: "1",
          score: 5,
          playNum: "3400"
        },
      ]
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 0; i++) {
          this.mp3lsit2.push(this.mp3lsit2.length + 1);
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
