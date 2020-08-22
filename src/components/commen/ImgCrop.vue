<template>
  <div class="jc-clip-image"
       :style="{width: `${clip.width}`}">
    <canvas ref="ctx"
            :width="clip.width"
            :height="clip.height"
            @mousedown="handleClip($event)">
    </canvas>
    <input type="file"
           ref="file"
           @change="readFileMsg($event)">
    <div class="clip-scale-btn">
      <a class="add"
         @click="handleScale(false)">+</a>
      <a @click="rotate"
         class="right-rotate">转</a>
      <a class="poor"
         @click="handleScale(true)">-</a>
      <span>{{scale}}</span>
    </div>
    <div class="upload-warp">
      <a class="upload-btn"
         @click="dispatchUpload($event)">upload</a>
      <a class="upload-cancel">cancel</a>
    </div>
    <div class="create-canvas">
      <a class="to-send-file"
         @click="outFile"
         title="请打开控制台">生成文件</a>
    </div>
  </div>
</template>
<script>
import { on, off, once } from '../../utils/dom'
export default {
  ctx: null,
  file: null,
  x: 0, // 点击canvas x 鼠标地址
  y: 0,// 点击canvas y 鼠标地址
  xV: 0, // 鼠标移动 x距离
  yV: 0, // 鼠标移动 y距离
  nX: 0, // 原始坐标点 图像 x
  nY: 0,// 原始坐标点 图像 y
  img: null,
  props: {
    src: {
      type: String,
      default: null
    },
    clip: {
      type: Object,
      default () {
        return { width: '200px', height: '200px' }
      }
    }
  },
  data () {
    return {
      isShow: false,
      base64: null,
      scale: 1.5, //放大比例
      deg: 0 //旋转角度
    }
  },
  computed: {
    width () {
      const { clip } = this
      return parseFloat(clip.width.replace('px', ''))
    },
    height () {
      const { clip } = this
      return parseFloat(clip.height.replace('px', ''))
    }
  },
  mounted () {
    const { $options, $refs, width, height } = this
    // 初始化 canvas file nX nY
    Object.assign($options, {
      ctx: $refs.ctx.getContext('2d'),
      file: $refs.file,
      nX: -width / 2,
      nY: -height / 2
    })
  },
  methods: {
    // 旋转操作
    rotate () {
      const { $options, draw } = this
      this.deg = (this.deg + Math.PI / 2) % (Math.PI * 2)
      draw($options.img, $options.nX + $options.xV, $options.nY + $options.yV, this.scale, this.deg)
    },
    // 处理放大
    handleScale (flag) {
      const { $options, draw, deg } = this
      flag && this.scale > 0.1 && (this.scale = this.scale - 0.1)
      !flag && this.scale < 1.9 && (this.scale = this.scale + 0.1)
      $options.img && draw($options.img, $options.nX + $options.xV, $options.nY + $options.yV, this.scale, deg)
    },
    // 模拟file 点击事件
    dispatchUpload (e) {
      this.clearState()
      const { file } = this.$options
      e.preventDefault()
      file.click()
    },
    // 读取 input file 信息
    readFileMsg () {
      const { file } = this.$options
      const { draw, createImage, $options: { nX, nY }, scale, deg } = this
      const wFile = file.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = createImage(e.target.result, (img) => {
          draw(img, nX, nY, scale, deg)
        })
        file.value = null
      }
      reader.readAsDataURL(wFile)
    },
    // 生成 图像
    createImage (src, cb) {
      const img = new Image()
      this.$el.append(img)
      img.className = 'base64-hidden'
      img.onload = () => {
        cb(img)
      }
      img.src = src
      this.$options.img = img
    },
    // 操作画布画图
    draw (img, x = 0, y = 0, scale = 0.5, deg = Math.PI) {
      const { ctx } = this.$options
      let { width, height } = this
      // 图片尺寸
      let imgW = img.offsetWidth
      let imgH = img.offsetHeight
      ctx.save()
      ctx.clearRect(0, 0, width, height)
      ctx.translate(width / 2, height / 2, img)
      ctx.rotate(deg)
      ctx.drawImage(img, x, y, imgW * scale, imgH * scale)
      ctx.restore()
    },
    // ... 事件绑定
    handleClip (e) {
      const { handleMove, $options, deg } = this
      if (!$options.img) {
        return
      }
      Object.assign(this.$options, {
        x: e.screenX,
        y: e.screenY
      })
      on({
        el: window,
        type: 'mousemove',
        fn: handleMove
      })
      once({
        el: window,
        type: 'mouseup',
        fn: (e) => {
          console.log('down')
          switch (deg) {
            case 0: {
              Object.assign($options, {
                nX: $options.nX + $options.xV,
                nY: $options.nY + $options.yV,
                xV: 0,
                yV: 0
              })
              break;
            }
            case Math.PI / 2: {
              Object.assign($options, {
                nX: $options.nY + $options.yV,
                nY: $options.nX - $options.xV,
                xV: 0,
                yV: 0
              })
              break;
            }
            case Math.PI: {
              Object.assign($options, {
                nX: $options.nX - $options.xV,
                nY: $options.nY - $options.yV,
                xV: 0,
                yV: 0
              })
              break;
            }
            default: {
              // $options.nY - $options.yV, $options.nX + $options.xV
              Object.assign($options, {
                nX: $options.nY - $options.yV,
                nY: $options.nX + $options.xV,
                xV: 0,
                yV: 0
              })
            }
          }
          off({
            el: window,
            type: 'mousemove',
            fn: handleMove
          })
        }
      })
    },
    // ... 处理鼠标移动
    handleMove (e) {
      e.preventDefault()
      e.stopPropagation()
      const { $options, draw, scale, deg } = this
      Object.assign($options, {
        xV: e.screenX - $options.x,
        yV: e.screenY - $options.y
      })
      switch (deg) {
        case 0: {
          draw($options.img, $options.nX + $options.xV, $options.nY + $options.yV, scale, deg)
          break;
        }
        case Math.PI / 2: {
          draw($options.img, $options.nY + $options.yV, $options.nX - $options.xV, scale, deg)
          break;
        }
        case Math.PI: {
          draw($options.img, $options.nX - $options.xV, $options.nY - $options.yV, scale, deg)
          break;
        }
        default: {
          draw($options.img, $options.nY - $options.yV, $options.nX + $options.xV, scale, deg)
          break;
        }
      }
    },
    // 清除状态
    clearState () {
      const { $options, width, height } = this
      if ($options.img) {
        this.$el.removeChild($options.img)
        Object.assign($options, {
          x: 0,
          y: 0,
          xV: 0,
          yV: 0,
          nX: -width / 2,
          nY: -height / 2,
          img: null,
        })
      }
    },
    // 输出文件
    outFile () {
      const { $refs: { ctx } } = this
      console.log(ctx.toDataURL())
      ctx.toBlob((blob) => { console.log(blob) })
    }
  }
}
</script>
