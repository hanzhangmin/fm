<template>
  <div style="overflow:hidden;">
    <div class="header fixed">
      <div class="menublock">
        <div class="shead">
          <swiper :options="swiperOption1"
                  ref="mySwiper1">
            <swiper-slide v-for="(item,index) in items"
                          :key="index">
              {{item.name}}
            </swiper-slide>
          </swiper>
        </div>
        <span @click.stop="gomenu"
              class="iconfont icon-caidan1"></span>
      </div>
      <div class="flex input-box">
        <Input />
        <span @click.stop="gohistory"
              class="iconfont icon-shijian3"></span>
      </div>

    </div>

    <div class="scontainer flexauto">
      <swiper :options="swiperOption2"
              ref="mySwiper2">
        <!-- 首页 -->
        <swiper-slide v-for="(item,index) in items"
                      :key="index+'sslide'">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </swiper-slide>
      </swiper>
    </div>
  </div>

</template>
<script>
import { maincolor, gray_8 } from "assets/js/theme.js"
let mySwiper1, mySwiper2
import Input from 'components/commen/From/Input'
import recommend from "views/body/home/plates/recommend"
import news from "views/body/home/plates/news"
import subject from "views/body/home/plates/subject"
import listenBook from "views/body/home/plates/listenBook"
import broadStation from "views/body/home/plates/broadStation"
import program from "views/body/home/plates/program"
export default {
  name: "home",
  data () {
    return {
      items: [
        { path: "/home/recommend", name: "推荐", component: recommend, show: true },
        { path: "/home/news", name: "要闻", component: news, show: false },
        { path: "/home/subject", name: "专题", component: subject, show: false },
        { path: "/home/listenBook", name: "听书", component: listenBook, show: false },
        { path: "/home/broadStation", name: "电台", component: broadStation, show: false },
        { path: "/home/program", name: "节目", component: program, show: false },
      ],
      swiperOption1: {
        slidesPerView: "auto",
        speed: 300,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        on: {
          click: function () {
            for (let index = 0; index < mySwiper1.slides.length; index++) {
              mySwiper1.slides[index].style.color = gray_8
            }
            mySwiper1.slides[this.clickedIndex].style.color = maincolor
            mySwiper2.slideTo(this.clickedIndex, 300, false)
          },
        }
      },
      swiperOption2: {
        speed: 300,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        on: {
          slideChange: function () {
            mySwiper1.slideTo(this.activeIndex, 300, false)
            for (let index = 0; index < mySwiper1.slides.length; index++) {
              mySwiper1.slides[index].style.color = gray_8
            }
            mySwiper1.slides[this.activeIndex].style.color = maincolor
          },
        }
      }
    }
  },
  computed: {
  },
  mounted () {
    mySwiper1 = this.$refs.mySwiper1.$swiper
    mySwiper2 = this.$refs.mySwiper2.$swiper
  },
  components: {
    Input
  },
  methods: {
    gomenu () {
      this.$router.push("/menu")
    },
    gohistory () {
      this.$router.push("/history")
    },
  },
}
</script>
<style lang="less" scoped>
.header {
  z-index: 1000;
  background-color: #ffffff;
}

.menublock {
  display: flex;
  align-items: center;
}
// .menublock .menu {
//   text-align: center;
//   width: 80px;
//   height: 70px;
//   line-height: 70px;
//   text-align: center;
//   display: inline-block;
// }
.icon-caidan1 {
  display: inline-block;
  margin-right: 22px;
  font-size: 40px;
  color: rgb(241, 63, 24);
}
.menublock .shead {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
}
.shead {
  height: 80px;
  line-height: 80px;
}
.shead .swiper-slide {
  position: relative;
  overflow: hidden;
  width: auto !important;
  padding: 0px 30px;
  font-size: 36px;
  letter-spacing: 3px;
  text-align: center;
  transition: all 0.3s linear;
  color: #969799;
}
.shead .swiper-slide-active {
  color: rgb(241, 63, 24);
}
.scontainer .swiper-slide {
  margin-top: 150px;
  height: calc(100vh - 240px);
  overflow-y: scroll;
}

.icon-shijian3 {
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 40px;
}
.input-box {
  height: 70px;
  align-items: center;
}
</style>
