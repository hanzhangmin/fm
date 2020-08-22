<template>
  <div class="carditem">
    <div class="theimg"
         :style="{'background-image':'url('+item.theimg+')'}">
      <div class="playnum">
        <span class="iconfont icon-erji2"></span>
        {{item.playNum}}
      </div>
    </div>
    <div class="intro">
      <b>{{item.title}}</b>{{item.intro}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

