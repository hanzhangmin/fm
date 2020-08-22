<template>

  <div class="panel">
    <div class="hotsearch">
      <div class="hot">
        <span> hot</span>
      </div>
      <ul>
        <li v-for="(item,index) in items"
            :key="index+'search'">
          <a href="">
            <span class="paiming">{{index+1}}</span>
            {{item.name}}
            <span class="trend">^</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "HotSearch",
  data () {
    return {
      items: [
        {
          id: 0,
          name: "郭德纲"
        },
        {
          id: 0,
          name: "盗墓笔记"
        },
        {
          id: 0,
          name: "三国演义"
        },
        {
          id: 0,
          name: "百家讲坛"
        },
        {
          id: 0,
          name: "宝宝巴士"
        },
        {
          id: 0,
          name: "植物大战僵尸"
        },
        {
          id: 0,
          name: "儿童睡前故事"
        },
        {
          id: 0,
          name: "宝宝巴士"
        },
        {
          id: 0,
          name: "植物大战僵尸"
        },
        {
          id: 0,
          name: "儿童睡前故事"
        },
        {
          id: 0,
          name: "宝宝巴士"
        },
        {
          id: 0,
          name: "植物大战僵尸"
        },
        {
          id: 0,
          name: "儿童睡前故事"
        },
        {
          id: 0,
          name: "宝宝巴士"
        },
        {
          id: 0,
          name: "植物大战僵尸"
        },
        {
          id: 0,
          name: "儿童睡前故事"
        },
        {
          id: 0,
          name: "宝宝巴士"
        },
        {
          id: 0,
          name: "植物大战僵尸"
        },
        {
          id: 0,
          name: "儿童睡前故事"
        },

      ]
    }
  },
}
</script>
<style lang="less" scoped>
.hotsearch {
  height: 70vh;
  overflow: scroll;
  box-shadow: 0px 0px 4px #cccccc;
  border-radius: 10px;
  padding: 0px 12px;
}
.hot span {
  font-size: 60px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: italic;
  background: linear-gradient(to top, #ffffff, @maincolor);
  -webkit-background-clip: text;
  color: transparent;
}
.hotsearch ::-webkit-scrollbar {
  display: none;
}
li a {
  font-size: 30px;
  letter-spacing: 6px;
  height: 60px;
  line-height: 80px;
  color: black;
}
a .paiming {
  font-style: italic;
  font-size: 60px;
  display: inline-block;
  padding: 0px 20px;
  font-weight: 600;
  color: @gray-5;
  display: inline-block;
  width: 50px;
}
li:nth-child(1) .paiming {
  color: red;
}
li:nth-child(2) .paiming {
  color: orangered;
}
li:nth-child(3) .paiming {
  color: rgb(44, 171, 255);
}
.trend {
  float: right;
  font-size: 30px;
}
</style>