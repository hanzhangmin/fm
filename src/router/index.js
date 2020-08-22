import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const index = () =>
    import ("views/body/index")
const home = () =>
    import ('views/body/home/index')
const hot = () =>
    import ('views/body/hot/index')
const play = () =>
    import ('views/body/play/index')
const subscribe = () =>
    import ('views/body/subscribe/index')
const profile = () =>
    import ('views/body/profile/index')
const updata = () =>
    import ("views/body/profile/updata")
const getimg = () =>
    import ("views/body/profile/getimg");
const imgcrop = () =>
    import ("views/body/profile/imgCrop");
const history = () =>
    import ("views/body/twopage/history")
const search = () =>
    import ("views/body/twopage/search")
const menu = () =>
    import ("views/body/twopage/menu")
    // 评论中心
const commentCenter = () =>
    import ("views/body/twopage/CommentCenter");

const routes = [{
        path: '',
        redirect: "/index",
    },
    {
        path: '/play',
        component: play,
        meta: {
            index: 3
        },
        // meta: '播放'
    },
    {
        path: '/index',
        component: index,
        meta: '首页',
        meta: {
            index: 3
        },
        children: [{
                path: '',
                redirect: "home",

            }, {
                path: 'home',
                component: home,
                meta: {
                    index: 2
                },
                //  meta: '首页',
            },
            {
                path: 'hot',
                component: hot,
                meta: {
                    index: 2
                },
                // meta: '热门'
            },
            {
                path: 'play',
                component: play,
                meta: {
                    index: 2
                },
                // meta: '播放'
            },
            {
                path: 'subscribe',
                component: subscribe,
                meta: {
                    index: 2
                },
                // meta: '订阅'
            }, {
                path: 'profile',
                component: profile,
                meta: {
                    index: 2
                },
                // meta: '我的'
            },
        ]
    },
    {
        path: "/history",
        component: history,
        meta: {
            index: 3
        },
    },
    {
        path: "/search",
        component: search,
        meta: {
            index: 3
        },
    },
    {
        path: "/menu",
        component: menu,
        meta: {
            index: 3
        },
    },
    {
        path: "/updataprofile",
        component: updata,
        meta: {
            index: 3
        }
    },
    {
        path: "/commentCenter/:id",
        component: commentCenter,
        meta: {
            index: 3
        }
    },
    {
        path: "/getimg",
        component: getimg,
        meta: {
            index: 3
        }
    },
    {
        path: "/imgcrop",
        component: imgcrop,
        meta: {
            index: 3
        }
    }


];

var router = new VueRouter({
    routes,
})


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}


export default router