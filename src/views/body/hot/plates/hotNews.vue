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
              <!-- <div>
                中国青年报
              </div> -->
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
  </div>
</template>
<script>
import classMenu from 'components/commen/Menu/ClassMenu'
import News from 'components/commen/Card/News'
export default {
  name: "HotNews",
  components: {
    classMenu,
    News
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
      ],
    }
  },
  methods: {
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