<template>

  <div class="ScrollCards">
    <div v-for="(item,index) in cards"
         :key="'love'+index"
         class="card">
      <div class="img">
        <img :src="item.theimg"
             alt=""
             srcset="">
        <div class="imgmask">
        </div>
      </div>
      <p class="moreintro">
        <b>{{item.title}}</b>
        <span> {{item.intro}}</span>
      </p>
    </div>
    <!-- <div v-for="(item,index) in cards"
         :key="'love'+index"
         class="carditem">
      <div class="theimg"
           :style="{'background-image':'url('+item.theimg+')'}">
        <div class="playnum">
          <span class="iconfont icon-erji2"></span>
          {{item.playNum}}
        </div>
      </div>
      <p class="intro">
        <b>{{item.title}}</b>
        <span> {{item.intro}}</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ScrollCards",
  props: {
    cards: Array
  },
}
</script>

<style lang="less" scoped>
.ScrollCards {
  width: 1800px;
  margin-bottom: 20px;
  padding: 10px;
  white-space: nowrap;
  overflow-x: scroll;
}
.ScrollCards::-webkit-scrollbar {
  display: none;
}
.card {
  float: left;
  width: 260px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px #cccccc;
  margin: 10px;
  overflow: hidden;
  .img {
    height: 160px;
    overflow: hidden;
    img {
      position: relative;
      max-width: 460px;
      max-height: 460px;
      min-width: 260px;
      min-height: 260px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .moreintro {
    white-space: pre-wrap;
    box-sizing: border-box;
    padding: 10px;
    line-height: 40px;
    letter-spacing: 2px;
    color: @gray-8;
    overflow: hidden;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    b {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }
}
</style>