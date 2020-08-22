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
        <div class="slot1">排行榜top10</div>
        <Card5 v-for="(item ,index) in listrank"
               :key="'item'+index">
          <div slot="C5_rank"
               class="C5_rank">
            <span v-if="index==0"
                  class="iconfont icon-first"></span>
            <span v-else-if="index==1"
                  class="iconfont icon-second"></span>
            <span v-else-if="index==2"
                  class="iconfont icon-third"></span>
            <span v-else>
              {{item.rank}}
            </span>
            <!-- {{item.rank}} -->
          </div>
          <div class="img"
               slot="img"
               :style="{'background-image': 'url('+item.img+')'}"></div>
          <b slot="name">{{item.name}}</b>
          <p slot="intro">{{item.intro}}</p>
          <div slot="button">
            <span class="add">+</span>
          </div>
        </Card5>
        <van-list v-model="loading"
                  :finished="finished"
                  finished-text="我是有底线的"
                  @load="onLoad">
          <div class="slot1">推荐</div>
          <Card5 v-for="(item ,index) in list"
                 :key="'item'+index">
            <div class="img"
                 slot="img"
                 :style="{'background-image': 'url('+item.img+')'}"></div>
            <b slot="name">{{item.name}}</b>
            <p slot="intro">{{item.intro}}</p>
            <div slot="button">
              <span class="add">+</span>
            </div>
          </Card5>
        </van-list>
      </div>
    </van-pull-refresh>
  </div>

</template>

<script>
import { maincolor } from 'assets/js/theme'
import { Toast } from 'vant'
import Card5 from 'components/commen/Card/Card5'
export default {
  name: "SubRank",
  components: {
    Card5
  },
  data () {
    return {
      skeletonShow: true,
      isLoading: false,
      list: [
        {
          id: 1,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 1
        },
        {
          id: 2,
          img: "http://huitengit.com/assets/imgs/f4.jpg",
          name: "求是网",
          intro: "中共中央机关刊《求是》主管主办，传递权威思想理论的声音",
          rank: 2
        },
        {
          id: 3,
          img: "http://huitengit.com/assets/imgs/f4.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 3
        },
        {
          id: 4,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 4
        },
        {
          id: 5,
          img: "http://huitengit.com/assets/imgs/f4.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 5,

        },
        {
          id: 6,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 6,
        },
        {
          id: 7,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 7,
        },
        {
          id: 7,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 8,
        },
        {
          id: 9,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 9,
        },
        {
          id: 10,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 10,
        },
      ],
      listrank: [
        {
          id: 1,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 1
        },
        {
          id: 2,
          img: "http://huitengit.com/assets/imgs/f4.jpg",
          name: "求是网",
          intro: "中共中央机关刊《求是》主管主办，传递权威思想理论的声音",
          rank: 2
        },
        {
          id: 3,
          img: "http://huitengit.com/assets/imgs/f4.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 3
        },
        {
          id: 4,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 4
        },
        {
          id: 5,
          img: "http://huitengit.com/assets/imgs/f4.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 5,

        },
        {
          id: 6,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 6,
        },
        {
          id: 7,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 7,
        },
        {
          id: 7,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 8,
        },
        {
          id: 9,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 9,
        },
        {
          id: 10,
          img: "http://huitengit.com/assets/imgs/f6.jpg",
          name: "人民日报",
          intro: "参与，沟通，记录时代",
          rank: 10,
        },
      ],
      loading: false,
      finished: false,
      maincolor,
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
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
  },
}
</script>
<style lang="less" scoped>
.slot1 {
  margin-top: 10px;
  margin-bottom: 20px;
}
.body {
  height: calc(100% - 170px);
}
</style>
