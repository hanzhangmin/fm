<template>
  <imgcroper :img="img"
             :clipperImgWidth="clipperImgWidth"
             :clipperImgHeight="clipperImgHeight" />
</template>

<script>
import imgcroper from './getimg1'
export default {
  name: "imgcrop",
  components: {
    imgcroper
  },
  computed: {
    img () {
      var fr = new FileReader();
      fr.onloadend = function (e) { //为fr对象绑定onloadend事件(当文件读取完毕时触发,此时result已经获取了加载内容)
        console.log(e.target.result);
      };
      fr.readAsDataURL(new Blob(localStorage.getimg));
    }
  },
  data () {
    return {
      clipperImgWidth: 300,
      clipperImgHeight: 300,
    }
  },
}
</script>

<style>
</style>