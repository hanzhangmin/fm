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
        <p>
          <img :src="oldimg"
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
    }
  },
  // computed: {
  //   clientWidth () {
  //     return document.getElementById("cbox").offsetWidth
  //   },

  // },
  created () {
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    getimg (e) {
      console.log(e.srcElement.files[0]);
      localStorage.getimg = getObjectURL(e.srcElement.files[0]);
      console.log(localStorage.getimg);
      this.$router.push("/imgcrop");
    }
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

img {
  width: 100%;
  height: auto;
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