

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
        <!-- <div class="panel">
          <h1>励志</h1>
          <div class="baseCard_body">
            <div v-for="(item,index) in books"
                 :key="'love'+index"
                 class="card">
              <div class="img">
                <img :src="item.theimg"
                     alt=""
                     srcset="">
                <div class="imgmask">
                </div>
              </div>
              <p class="intro">
                <b>{{item.title}}</b>
                <span> {{item.intro}}</span>
              </p>
            </div>
          </div>
        </div> -->
        <van-list v-model="loading"
                  :finished="finished"
                  finished-text="我是有底线的"
                  @load="onLoad">
          <div class="panel"
               v-for="(item,index) in books"
               :key="index+'books'">
            <News>
              <img slot="audiobox"
                   :src="item.theimg"
                   alt="">
              <p class="title2"
                 slot="title">
                {{item.title}}
              </p>
              <!-- <p class="moreintro"
                 slot="moreintro">
                {{item.intro}}
              </p> -->
              <div slot="score"
                   class="score">
                <div>
                  中国青年报
                </div>
                <div>
                  {{item.score}}评论
                </div>
                <div>
                  2020-07-25
                </div>
              </div>
            </News>
          </div>

        </van-list>
      </div>

    </van-pull-refresh>

  </div>

</template>
<script>
import { maincolor } from 'assets/js/theme'
import audio from 'assets/js/audio'
import { Toast } from 'vant'

import News from 'components/commen/Card/News'


export default {
  name: "listenBook",
  components: {
    News
  },
  data () {
    return {
      skeletonShow: true,
      isLoading: false,
      loading: false,
      finished: false,
      maincolor,
      books: [
        {
          id: 1,
          theimg: "https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",
          title: "人生低谷的时候，不要只想着健身和读书",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,

        },
        {
          id: 2,
          theimg: "https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",
          title: "人生低谷的时候，不要只想着健身和读书",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 3,
          theimg: "https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",

          title: "人生低谷的时候，不要只想着健身和读书",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 4,
          theimg: "https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",

          title: "人生低谷的时候，不要只想着健身和读书",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 5,
          theimg: "https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",
          title: "人生低谷的时候，不要只想着健身和读书",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 6,
          theimg: "https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",
          title: "人生低谷的时候，不要只想着健身和读书",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 7,
          theimg: "https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",
          title: "人生低谷的时候，不要只想着健身和读书",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
      ],
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
          this.books.push(this.books.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.books.length >= 3) {
          this.finished = true;
        }
      }, 1000);
    },

  },
}
</script>
<style lang="less" scoped>
@import url("assets/css/baseCard.less");
</style>