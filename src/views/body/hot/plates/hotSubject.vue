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
          <BookCard>
            <img slot="audiobox"
                 :src="item.theimg"
                 alt="">
            <p class="title"
               slot="title">
              {{item.title}}
            </p>
            <p class="moreintro"
               slot="moreintro">
              {{item.intro}}
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
                <span class="iconfont icon-erji2"></span> {{item.playNum}}
              </div>
              <div>
                <span class="iconfont icon-shoucang2"></span>
              </div>
            </div>
          </BookCard>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import classMenu from 'components/commen/Menu/ClassMenu'
import BookCard from 'components/commen/Card/BookCard'
export default {
  name: "HotSubject",
  components: {
    classMenu,
    BookCard
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
          theimg: "http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",
          title: "口才三绝：会赞美 会幽默 会拒绝",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 2,
          theimg: "http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",

          title: "口才三绝：会赞美 会幽默 会拒绝",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 3,
          theimg: "http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",

          title: "口才三绝：会赞美 会幽默 会拒绝",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 4,
          theimg: "http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",

          title: "口才三绝：会赞美 会幽默 会拒绝",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 5,
          theimg: "http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",
          title: "口才三绝：会赞美 会幽默 会拒绝",
          intro: " 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",
          playNum: "3400",
          score: 4,
        },
        {
          id: 6,
          theimg: "http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",
          title: "口才三绝：会赞美 会幽默 会拒绝",
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