import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'
// 配置vant - ui屏幕适配， 之后直接安照UI设计稿750px写像素单位。
import 'amfe-flexible';
import "vant/lib/index.less"
import Swiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// 骨架占位Skeleton
// 下拉刷新PullRefresh
// import { Toast } from 'vant';
import {
    Button,
    Skeleton,
    PullRefresh,
    List,
    Cell,
    CellGroup,
    Popup,
    Rate,
    Sticky, //粘性布局
    Icon,
    Toast,
    Slider, //滑块
    Tab,
    Tabs,
    Checkbox,
    CheckboxGroup,
    RadioGroup,
    Radio
} from 'vant';
Vue.use(Button);
Vue.use(Sticky);
Vue.use(Rate);
Vue.use(Skeleton);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Slider);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Swiper, /* { default global options } */ )

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')