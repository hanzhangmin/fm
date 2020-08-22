<template>
  <van-list v-model="loading"
            :finished="finished"
            finished-text="我是有底线的"
            @load="onLoad">
    <div class="comment"
         v-for="(comment,index) in comments"
         :key="'comment'+index"
         @click.stop="gocomment(comment.id)">
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
        </div>
        <div class="comment_body">
          <p>{{comment.comment}}</p>
        </div>
        <div v-if="comment.replay.length!=0"
             class="comment-footer">
          <div class="flexauto">
            <a>共{{comment.replay.length}}条回复</a>
          </div>
          <div class="flex1"> <span>回复</span></div>
          <div class="flex1">
            <img class="nozan"
                 :src="nozan"
                 @click.stop="getzan($event)">
            <!-- <img v-if="iszan"
                 src="~assets/icon/zan.png"> -->
            <!-- <img v-else
                 src="~assets/icon/zan1.png"
                 alt=""
                 srcset=""> -->
          </div>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script>
import zan from 'assets/icon/zan.png'
import nozan from 'assets/icon/zan1.png'
export default {
  name: "comments",
  data () {
    return {
      zan,
      nozan,
      loading: false,
      finished: false,
      comments: [
        {
          id: 1,
          img: "http://q.qlogo.cn/qqapp/100467046/9C95D59A125B635EE8D3F8B6264B2E70/40",
          name: "来吃西瓜吧",
          time: "2020-08-03",
          comment: "超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！超级好听的歌呀！",
          replay: [
            {
              id: 1,
              img: "http://book.img.ireader.com/idc_1/m_1,w_300,h_400/f4c36301/group6/M00/AB/D5/CmQUNlnHFMOEaRIXAAAAAJXJ0Es642134556.jpg?v=tijXnznb&t=CmQUNlnHFMM.",
              name: "来吃西瓜吧",
              time: "2020-08-03",
              comment: "超级喜欢！",
            },
            {
              id: 1,
              img: "http://pweb.d.zhangyue01.com/static/images/common/touxiang.png",
              name: "来吃西瓜吧",
              time: "2020-08-03",
              comment: "超级好听的歌呀！",
            }
          ]
        },
        {
          id: 1,
          img: "http://q.qlogo.cn/qqapp/100467046/D98ED69A77522978312F2B74C1C2D057/40",
          name: "来吃西瓜吧",
          time: "2020-08-03",
          comment: "超级好听的歌呀！",
          replay: [
            {
              id: 1,
              img: "http://book.img.ireader.com/idc_1/m_1,w_300,h_400/6dc9ca5a/group61/M00/96/27/CmQUOV4VG4-EZQajAAAAAAAkwqA873200446.png?v=THuMrJlG&t=CmQUOV4VG48.",
              name: "来吃西瓜吧",
              time: "2020-08-03",
              comment: "超级喜欢！",
            }
          ]
        },
        {
          id: 1,
          img: "http://q.qlogo.cn/qqapp/100467046/7E269C62B68E1094B14571ACA77CB020/40",
          name: "来吃西瓜吧",
          time: "2020-08-03",
          comment: "超级好听的歌呀！",
          replay: [
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
          ]
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
          this.comments.push(this.comments.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.comments.length >= 3) {
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
    gocomment (commentId) {
      // console.log(commentId);
      this.$router.push(`/commentCenter/${commentId}`)
    }
  },
}
</script>
