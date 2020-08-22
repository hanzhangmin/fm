<template>
  <div class="body">
    <div class="fixed">
      <Header backcolor="#ffffff">
        <span slot="Header_left"
              @click="goback"
              class="iconfont icon-jiantouarrowhead7"></span>
        <!-- <span slot="Header_title">编辑资料</span> -->
        <!-- <span slot="Header_right">
          <van-icon name="ellipsis" />
        </span> -->
      </Header>
    </div>
    <div class="box">
      <div class="changeimg">
        <canvas id="myCanvas"
                @mousedown="mymousedown($event)"
                @mouseleave="mymouseleave($event)"></canvas>
      </div>
      <div class="changeimg">
        <p>
          <img id="myimg"
               :src="oldimg"
               alt=""
               srcset="">
        </p>
        <p>
          <label for="getimg">
            更换头像
          </label>
          <input type="file"
                 id="getimg"
                 capture="camera"
                 multiple="multiple"
                 accept="image/*"
                 @change="getimg($event)">
        </p>
      </div>

    </div>
  </div>
</template>
<script>
import { maincolor, getObjectURL } from 'assets/js/theme'
import { Toast } from 'vant'
import Header from 'components/commen/Header/Header'
export default {
  name: "recommend",
  components: {
    Header,
  },
  data () {
    return {
      oldimg: "http://pweb.d.zhangyue01.com/static/images/common/touxiang.png",
      myCanvastx: Object,
      img: String, //url或dataUrl
      clipperImgWidth: 200,

      clipperImgHeight: 200

    }
  },
  computed: {
    clientWidth () {
      return document.getElementById("myCanvas").offsetWidth
    },
    clientHeight () {
      return document.getElementById("myCanvas").offsetHeight
    }
  },
  created () {

  },
  methods: {
    getimg (e) {
      console.log(e.srcElement.files[0]);
      this.oldimg = getObjectURL(e.srcElement.files[0]);
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("scream");
      this.oldimg = document.getElementById("myimg");
      ctx.drawImage(this.oldimg, 200, 200);
    },
    goback () {
      this.$router.go(-1)
    },
    mymousedown (e) {
      console.log(e);
    },
    mymouseleave (e) {
      console.log("leave");
      console.log(e);
    },
    drawimg (img) {
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
    }
  },
  mounted () {
    // this.myCanvastx = document.getElementById("myCanvas").getContext("2d");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    this.oldimg = document.getElementById("myimg");
    console.log(this.oldimg);
    console.log(this.clientWidth);
    console.log(this.clientHeight);
    ctx.drawImage(this.oldimg, 0, 0, 200, 200);
  },
}
</script>
<style lang="less" scoped>
.fixed {
  z-index: 1000;
}
.box {
  padding-top: 80px;
  font-size: @font-size-md;
  color: @gray-6;
  background-color: #ffffff;
  min-height: calc(100vh - 80px);
}
.changeimg {
  width: 100%;
}
#img {
  position: absolute;
  width: 100vw;
  height: 100vw;
}
canvas {
  width: 100%;
  height: 100vw;
}
input {
  display: none;
}
p {
  text-align: center;
  margin-bottom: 40px;
}
label {
  padding: 20px 60px;
  letter-spacing: 20px;
  font-size: 40px;
  border-radius: 50px;
  border: 1px solid #cccccc;
}
</style>