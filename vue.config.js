const path = require("path")
const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');
const pxtoviewport = require('postcss-px-to-viewport');
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "components": "@/components",
                "views": "@/views",
                "network": "@/network",
            }
        }
    },
    // vant使用的是px，将px转为rem
    css: {
        modules: false,
        extract: true,
        sourceMap: false,
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtoviewport({
                        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
                        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
                        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
                        viewportUnit: "vw", //指定需要转换成的视窗单位，建议使用vw
                        // selectorBlackList: ['.ignore'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                        mediaQuery: false // 允许在媒体查询中转换`px`
                    })
                ]
            },
            less: {
                // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 直接覆盖变量
                        'text-color': '#111',
                        'border-color': '#eee',
                        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                        // hack: `true; @import "your-less-file-path.less";`,
                        hack: `true; @import "${path.join(
                        __dirname,
                        "./src/assets/css/resetui.less"//这个import 的路径必须是绝对路径
                      )}";`
                    },
                },
            },
        },
    },
    devServer: {
        port: 9898
    }
}