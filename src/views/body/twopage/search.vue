<template>
  <div>
    <div class="fixed">
      <Header backcolor="#ffffff">
        <span slot="Header_left"
              @click="goback"
              class="iconfont icon-jiantouarrowhead7"></span>
        <Input2 />
        <div slot="Header_title"
             class="search_input">
          <div class="search-icon">
            <span class="iconfont icon-search"></span>
          </div>
          <div class="search-box">
            <input type="text"
                   name=""
                   id="">
          </div>
          <div class="search-icon">
            <span class="iconfont icon-shibai"></span>
          </div>

        </div>
        <span slot="Header_right">
          <span class="search">搜索</span>
        </span>
      </Header>
    </div>
    <div class="box">
      <div class="panel">
        <h6>搜索历史</h6>
        <div class="search_item"
             v-for="(item,index) in searchhistory"
             :key="index+'history'">
          {{item.name}}
        </div>
      </div>
      <div class="panel">
        <h6>搜索推荐</h6>
        <div class="search_item"
             v-for="(item,index) in searchhistory"
             :key="index+'history'">
          {{item.name}}
        </div>
      </div>
      <!-- <van-tabs v-model="active"
                animated
                swipeable
                :color="maincolor"
                :title-active-color="maincolor"
                line-width="20px"
                line-height="2px"
                lazy-render>
        <van-tab title="热搜">
          <HotSearch />
        </van-tab>
        <van-tab title="有声书">
          <HotSearch />
        </van-tab>
        <van-tab title="相声评书">
          <HotSearch />
        </van-tab>
        <van-tab title="儿童">
          <HotSearch />
        </van-tab>
        <van-tab title="历史">
          <HotSearch />
        </van-tab>
        <van-tab title="音乐">
          <HotSearch />
        </van-tab>
        <van-tab title="人文">
          <HotSearch />
        </van-tab>
        <van-tab title="商业财经">
          <HotSearch />
        </van-tab>
        <van-tab title="其他">
          <HotSearch />
        </van-tab>
      </van-tabs> -->
    </div>
  </div>

</template>
<script>
import { maincolor } from 'assets/js/theme'
import { Toast } from 'vant'
import Card1 from 'components/commen/Card/Card1'
// import BaseCard from 'components/commen/Card/BaseCard'
import Header from 'components/commen/Header/Header'
import HotSearch from 'components/content/HotSerach'
export default {
  name: "recommend",
  components: {
    Header,
    // BaseCard,
    Card1,
    HotSearch
  },
  data () {
    return {
      searchhistory: [
        {
          id: 1,
          name: "郭德纲单口相声"
        },
        {
          id: 2,
          name: "林清玄"
        },
        {
          id: 3,
          name: "读者"
        },
        {
          id: 2,
          name: "三国演义"
        },
        {
          id: 3,
          name: "水浒传"
        },
        {
          id: 3,
          name: "红楼梦"
        },
        {
          id: 3,
          name: "西游记"
        },
      ]
    }
  },

  methods: {


    goback () {
      this.$router.go(-1)
    }
  },
}
</script>
<style >
.van-tabs__nav {
  width: 100vw !important;
}
.van-tabs__wrap {
  height: 6vh !important;
}
</style>
<style lang="less" scoped>
.panel {
  overflow: hidden;
}
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
.search_input {
  display: flex;
  justify-content: stretch;
  align-items: center;
  height: 60px;
  margin-top: 10px;
  background-color: @gray-1;
  border-radius: 30px;
  padding: 0px 10px;
  .search-icon {
    width: 50px;
    text-align: center;
  }
  .search-box {
    flex: auto;
    input {
      width: 100%;
    }
  }
}
.iconfont {
  font-size: 30px;
}
input {
  padding-left: 10px;
}
.search_item {
  float: left;
  background-color: @gray-1;
  padding: 5px 20px;
  margin: 24px;
  font-size: 28px;
  letter-spacing: 2px;
  border-radius: 30px;
  color: @gray-7;
}

// @import url("assets/css/Card1.less");
</style>