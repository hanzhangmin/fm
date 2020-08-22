<template>
  <div class="body">
    <div class="fixed">
      <Header backcolor="#ffffff">
        <span slot="Header_left"
              @click="goback"
              class="iconfont icon-jiantouarrowhead7"></span>
        <span slot="Header_title">分类</span>
        <span slot="Header_right"
              class="search">
          <span>完成</span>

        </span>
      </Header>
    </div>
    <div class="box">
      <div class="panel">
        <h6>我的分类</h6>
        <div id="myclasses"
             class="class_item"
             v-for="(item,index) in myClasses"
             :key="index+'history'"
             @click="deleteClass(item,index)">

          {{item.name}}

        </div>
      </div>
      <div class="panel">
        <h6>所有分类</h6>
        <div id="class"
             class="class_item"
             v-for="(item,index) in classes"
             :key="index+'class'"
             @click="add(item,index)">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { maincolor } from 'assets/js/theme'
import { Toast } from 'vant'
import Header from 'components/commen/Header/Header'
export default {
  name: "recommend",
  components: {
    Header,
  },
  data () {
    return {
      isok: false,
      myClasses: [
        {
          id: 1,
          name: "推荐",
        },
        {
          id: 1,
          name: "音乐",
        },
        {
          id: 1,
          name: "电台",
        },
        {
          id: 1,
          name: "小说",
        },
        {
          id: 1,
          name: "音乐",
        },
      ],
      classes: [
        {
          id: 1,
          name: "推荐",
        },
        {
          id: 1,
          name: "音乐",
        },
        {
          id: 1,
          name: "电台",
        },
        {
          id: 1,
          name: "小说",
        },
        {
          id: 1,
          name: "音乐",
        },
      ]
    }
  },

  methods: {
    goback () {
      this.$router.go(-1)
    },
    deleteClass (item, index) {
      this.myClasses.splice(index, 1);
      this.classes.push(item)
    },
    add (item, index) {
      this.myClasses.push(item);
      this.classes.splice(index, 1)
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
  min-height: 94vh;
}
.search {
  display: inline-block;
  font-size: 28px;
  color: @maincolor;
}
.panel {
  overflow: hidden;
}
.class_item {
  float: left;
  color: @gray-8;
  padding: 20px 40px;
  background-color: @gray-1;
  margin: 20px 20px 20px 0px;
  border-radius: 5px;
  letter-spacing: 6px;
  font-size: @font-size-md;
}
</style>