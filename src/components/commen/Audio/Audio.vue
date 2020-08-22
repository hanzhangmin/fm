<template>
  <div :class="{audio:true, isshow:showaudio===true}"
       id="audio_box"
       :style="playstyle">
    <span v-if="playstate"
          class="iconfont icon-zanting"
          @click.stop="playaudio"></span>
    <span v-else
          class="iconfont icon-triangle-right"
          @click.stop="playaudio"></span>
    <audio id="theaudio"
           controller
           ref="theaudio">
      <source :src="audiosrc"
              type="audio/mpeg">
    </audio>
  </div>
</template>
<script>
export default {
  name: "Audio",
  data () {
    return {
      showaudio: false
    }
  },
  computed: {
    audiosrc () {
      return this.$store.state.audioSrc
    },
    imgSrc () {
      return this.$store.state.imgSrc
    },
    playstate () {
      return this.$store.state.playstate
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
  methods: {
    playaudio () {
      if (this.audiosrc != null) {
        this.$refs.theaudio.play()
        this.$store.commit("changPlay", true)
      }
      this.$emit("showPlayer", document.getElementById("theaudio").src)
    },
    getplaystyle () {
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
  watch: {
    imgSrc (val) {
      console.log(val);
      this.getplaystyle()
    },
    $route () {
      console.log(this.$route.path.indexOf("commentCenter"));
      // getimg imgcrop
      if (this.$route.path.indexOf("imgcrop") > 0 || this.$route.path.indexOf("getimg") > 0 || this.$route.path.indexOf("commentCenter") > 0 || this.$route.path.indexOf("play") > 0 || this.$route.path.indexOf("updataprofile") > 0) {
        this.showaudio = true;
      } else {
        this.showaudio = false;
      }

    }
  },
}
</script>
<style lang="less" scoped>
.isshow {
  display: none;
}
.audio {
  position: fixed;
  bottom: 0px;
  width: 90px;
  height: 90px;
  // line-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: @maincolor;
  background-position: center;
  background-size: cover;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  .iconfont {
    color: #ffffff;
    font-size: 40px;
  }
  .icon-zanting {
    font-size: 3vh;
    // color: @maincolor;
  }
}
audio {
  appearance: none;
}
</style>