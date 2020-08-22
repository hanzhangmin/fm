<template>
  <div class="body">
    <div class="fixed">
      <Header backcolor="#ffffff">
        <span slot="Header_left"
              @click="goback"
              class="iconfont icon-jiantouarrowhead7"></span>
        <!-- <span slot="Header_title">评论</span> -->
      </Header>
    </div>
    <div class="box">
      <div class="panel">
        <div class="comment">
          <div class="comment-right">
            <div class="comment_header">
              <div class="comment-person-img">
                <img :src="comment.img"
                     alt=""
                     srcset="">
              </div>
              <div class="comment-person-intro">
                <p>{{comment.name}}</p>
                <p>{{comment.time}}</p>
              </div>
            </div>
            <div class="comment_body">
              <p>{{comment.comment}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <van-list v-model="loading"
                  :finished="finished"
                  finished-text="我是有底线的"
                  @load="onLoad">
          <div class="comment"
               v-for="(comment,index) in replays"
               :key="'comment'+index">
            <div class="comment-left">
              <div class="img">
                <img :src="comment.img" />
              </div>
            </div>
            <div class="comment-right">
              <div class="comment_header">
                <div class="comment-person-intro">
                  <p>{{comment.name}}</p>
                  <p>{{comment.time}}</p>
                </div>
                <div class="zan">
                  <img class="nozan"
                       :src="nozan"
                       @click.stop="getzan($event)">
                </div>
              </div>
              <div class="comment_body">
                <p>{{comment.comment}}</p>
              </div>
              <!-- <div v-if="comment.replay.length!=0"
                 class="comment-footer">
              <div class="flex1">
                <img class="nozan"
                     :src="nozan"
                     @click.stop="getzan($event)">
              </div>
            </div> -->
            </div>
          </div>
        </van-list>
      </div>
    </div>
    <div class="fixed footer">

      <!-- <input type="text"
               placeholder="回复"> -->
      <div class="flexauto">
        <textarea name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="回复">

        </textarea>
      </div>
      <div class="dianzan">
        <img class="nozan"
             :src="nozan"
             @click.stop="getzan($event)">
        <br>
        <button>提交</button>
      </div>

    </div>
  </div>
</template>

<script>
import zan from 'assets/icon/zan.png'
import nozan from 'assets/icon/zan1.png'
import { maincolor } from 'assets/js/theme'
import { Toast } from 'vant'
import Header from 'components/commen/Header/Header'
export default {
  name: "CommentCenter",
  components: {
    Header
  },
  data () {
    return {
      zan,
      nozan,
      loading: false,
      finished: false,
      comment: {
        id: 1,
        img: "http://q.qlogo.cn/qqapp/100467046/9C95D59A125B635EE8D3F8B6264B2E70/40",
        name: "来吃西瓜吧",
        time: "2020-08-03",
        comment: "超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！",

      },
      replays: [
        {
          id: 1,
          img: "http://book.img.ireader.com/idc_1/m_1,w_300,h_400/f4c36301/group6/M00/AB/D5/CmQUNlnHFMOEaRIXAAAAAJXJ0Es642134556.jpg?v=tijXnznb&t=CmQUNlnHFMM.",
          name: "来吃西瓜吧",
          time: "2020-08-03",
          comment: "超级喜欢！",
        },
        {
          id: 1,
          img: "//pweb.d.zhangyue01.com/static/images/common/touxiang.png",
          name: "来吃西瓜吧",
          time: "2020-08-03",
          comment: "超级好听的歌呀！",
        },
        {
          id: 1,
          img: "http://book.img.ireader.com/idc_1/m_1,w_300,h_400/6dc9ca5a/group61/M00/96/27/CmQUOV4VG4-EZQajAAAAAAAkwqA873200446.png?v=THuMrJlG&t=CmQUOV4VG48.",
          name: "来吃西瓜吧",
          time: "2020-08-03",
          comment: "超级喜欢！",
        },
        {
          id: 1,
          img: "http://book.img.ireader.com/idc_1/m_1,w_300,h_400/156b7dbf/group6/M00/49/D3/CmQUOVfGwRKEKRDTAAAAAJvm5g4357992666.jpg?v=lJt8E1T0",
          name: "来吃西瓜吧",
          time: "2020-08-03",
          comment: "超级喜欢！",
        },
        {
          id: 1,
          img: "http://book.img.ireader.com/idc_1/m_1,w_300,h_400/c567a9be/group6/M00/3F/CC/CmRaIVjOlHGELRdxAAAAAKVprXA564486944.jpg?v=eu5NultJ",
          name: "来吃西瓜吧",
          time: "2020-08-03",
          comment: "超级好听的歌呀！",
        }
      ],
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 0; i++) {
          this.replays.push(this.replays.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.replays.length >= 3) {
          this.finished = true;
        }
      }, 1000);
    },
    getzan (e) {
      // console.log(e.currentTarget.className);
      let dom = e.currentTarget
      if (dom.className === "nozan") {
        dom.className = "zan";
        dom.src = zan
      } else {
        dom.className = "nozan";
        dom.src = nozan
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
  background-color: @gray-1;
  height: calc(100vh - 200px);
  overflow: scroll;
}
.footer {
  bottom: 0px;
  height: 120px;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffffff;
  z-index: 100;
  padding: 20px 22px;
  display: flex;

  .dianzan {
    width: 100px;
    text-align: right;
    flex-shrink: 0;
    img {
      width: @font-size-lg;
    }
    button {
      background-color: @maincolor;
      color: #ffffff;
      font-size: @font-size-md;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
}
textarea {
  width: 100%;
  border: none;
  background-color: @gray-1;
  border-radius: 10px;
  font-size: @font-size-md;
  letter-spacing: 4px;
}
</style>