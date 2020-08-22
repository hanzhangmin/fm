<template>
  <div class="body">
    <div class="fixed">
      <Header backcolor="#ffffff">
        <span slot="Header_left"
              @click="goback"
              class="iconfont icon-jiantouarrowhead7"></span>
        <span slot="Header_title">编辑资料</span>
        <!-- <span slot="Header_right">
          <van-icon name="ellipsis" />
        </span> -->
      </Header>
    </div>
    <div class="box">
      <div class="panel flex"
           @click="showPopup(0)">
        <span>头像:</span>
        <div class="flexauto">
          <img src="http://pweb.d.zhangyue01.com/static/images/common/touxiang.png"
               alt=""
               srcset="">
        </div>

        <span class="iconfont icon-arrow-right"></span>
      </div>
      <div class="panel flex"
           @click="showPopup(1)">
        <span>昵称:</span>
        <div class="flexauto">
          <span>听友xxxxxxxxxxxxxx</span>
        </div>
        <span class="iconfont icon-arrow-right"></span>
      </div>
      <div class="panel flex"
           @click="showPopup(2)">
        <span>性别:</span>
        <div class="flexauto">
          <span>待完善</span>
        </div>
        <span class="iconfont icon-arrow-right"></span>
      </div>
    </div>
    <!-- <van-popup v-model="showtouxiang"
               position="bottom"
               closeable
               :style="{ height: 'auto' }">
      <div class="panel">
        <p></p>
        <p></p>
      </div>
    </van-popup> -->
    <van-popup v-model="shownicheng"
               position="bottom"
               closeable
               :style="{ height: 'auto' }">
      <div class="panel">
        <input type="text"
               placeholder="请输入昵称">
        <button>提交</button>
      </div>
    </van-popup>
    <van-popup v-model="showsex"
               position="bottom"
               closeable
               :style="{ height: 'auto' }">
      <div class="panel">
        <p class="changesex">
          <label for="">
            <input type="radio"
                   name="sex"
                   id=""
                   value="女">
            女
          </label>
        </p>
        <p class="changesex">
          <label for="">
            <input type="radio"
                   name="sex"
                   id=""
                   value="男">
            男
          </label>
        </p>

      </div>
    </van-popup>
  </div>

</template>
<script>
import { maincolor } from 'assets/js/theme'
import { Toast } from 'vant'
import Header from 'components/commen/Header/Header'
export default {
  name: "recommend",
  components: {
    Header,
  },
  data () {
    return {
      showtouxiang: false,
      shownicheng: false,
      showsex: false,
    }
  },
  methods: {
    showPopup (type) {
      switch (type) {
        case 0:
          // this.showtouxiang = true;
          this.$router.push("/getimg")
          break;
        case 1:
          this.shownicheng = true
          break;
        case 2:
          this.showsex = true
          break;
        default:
          break;
      }
    },
    goback () {
      this.$router.go(-1)
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
}
.panel img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.flexauto {
  justify-self: right;
  text-align: right;
  padding-right: 10px;
}
.panel {
  min-height: 100px;
  input {
    border: 1px solid #cccccc;
    height: 60px;
    font-size: @font-size-md;
    border-radius: 10px;
    padding: 0px 10px;
  }
  button {
    height: 60px;
    font-size: @font-size-md;
    color: #ffffff;
    background-color: @maincolor;
    padding: 0px 10px;
    border-radius: 10px;
    margin-left: 20px;
  }
}
.changesex {
  font-size: @font-size-md;
  height: 80px;
  line-height: 80px;
  padding: 0px 10px;
  input {
    // appearance: none;
    display: none;
  }
  border-bottom: 1px solid #cccccc;
}
.changesex:last-child {
  border: none;
}
// @import url("assets/css/Card1.less");
</style>