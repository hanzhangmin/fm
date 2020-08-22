<template>
  <div class="">
    <aplayer :theme="maincolor"
             controls
             :music="list[0]"
             :list="list">
    </aplayer>
  </div>
</template>
<script>
import { maincolor } from 'assets/js/theme.js'
import aplayer from "vue-aplayer";
export default {
  name: "MusicPlayer",
  props: ["pdfurl"],
  components: {
    //别忘了引入组件
    aplayer: aplayer,
  },
  data () {
    return {
      maincolor,
      // themusic: {
      //   title: "人生若只如初见",
      //   author: "杨紫",
      //   url: 'http://www.huitengit.com/HZMtest/yz-qyz.mp3',//音乐资源
      //   pic: "http://www.huitengit.com/HZMtest/yz2.jpg",//从图片中提取主题色,
      //   // lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
      // },
      list: [
        {
          title: "人生若只如初见",
          author: "杨紫",
          url: 'http://www.huitengit.com/HZMtest/yz-qyz.mp3',//音乐资源
          pic: "http://www.huitengit.com/HZMtest/yz2.jpg",//从图片中提取主题色,
        },
        {
          title: "我会记得你",
          author: "霍建华，杨紫",
          url: 'http://www.huitengit.com/HZMtest/yz-zcs.mp3',//音乐资源
          pic: "http://www.huitengit.com/HZMtest/yz3.jpg",//从图片中提取主题色,
        }
      ]
    };
  },
  computed: {
    url () {
      return this.pdfurl;
    }
  },
  mounted () {
    this.music = {
      title: "youkao100",
      author: "youkao100",
      url: this.url,
      pic: "",
      lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
    };
  }
}
</script>
<style lang="less" scoped>
</style>