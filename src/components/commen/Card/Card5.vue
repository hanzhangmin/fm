<template>
  <div class="Card5">
    <slot name="C5_rank">
    </slot>
    <div class="c5_left">
      <slot name="img"></slot>
    </div>
    <div class="c5_center">
      <div>
        <slot name="name"></slot>
        <slot name="intro"></slot>
      </div>
    </div>
    <div class="c5_right">
      <slot name="button">
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card5"
}
</script>
<style lang="less" scoped>
.Card5 {
  display: flex;
  height: 160px;
  // border-bottom: 1px solid @gray-4;
  padding-left: 5px;
  padding-right: 5px;
  font-size: @font-size-md;
  background-color: #ffffff;
  margin: 20px 0px;
  border-radius: 10px;
  overflow: hidden;
  .C5_rank {
    // flex: auto;
    width: 50px;
    text-align: center;
    height: 70px;
    line-height: 70px;
    background-color: @gray-1;
    // float: right;
    span {
      font-size: @font-size-md;
      color: @gray-6;
    }
    .iconfont {
      font-size: 30px;
    }
    .icon-first {
      background-image: linear-gradient(red, rgb(134, 1, 1));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .icon-third {
      background-image: linear-gradient(rgb(44, 171, 255), rgb(31, 127, 190));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .icon-second {
      background-image: linear-gradient(orange, rgb(155, 101, 1));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    // .rank1 {
    // }
    // .rank2 {
    // }
    // .rank3 {
    // }
  }
  .c5_right {
    width: 100px;
    height: 160px;
    line-height: 160px;
    text-align: right;
    button {
      position: absolute;
      right: 20px;
      width: 80px;
      height: 40px;
      border-radius: 10px;
      text-align: center;
      color: #ffffff;
      transform: translateY(60px);
    }
    .add {
      background-color: @maincolor;
      color: #ffffff;
      padding: 10px 20px;
      border-radius: 10px;
    }
    .del {
      background-color: @gray-6;
      color: #ffffff;
      padding: 10px 20px;
      border-radius: 10px;
    }
  }
  .c5_left {
    width: 100px;
    height: 160px;
    text-align: center;
    .img {
      margin-top: 40px;
      width: 80px;
      height: 80px;
      display: inline-block;
      border-radius: 100%;
      background-position: center;
      background-size: cover;
    }
  }
  .c5_center {
    flex: auto;
    max-width: calc(100% - 220px);
    // max-width: 60%;
    div {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      b {
        overflow: hidden;
        letter-spacing: 4px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: @gray-6;
        font-size: @font-size-sm;
        letter-spacing: 2px;
      }
    }
  }
}
</style>