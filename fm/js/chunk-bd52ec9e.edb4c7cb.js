(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd52ec9e"],{"0a92":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"a",(function(){return a}));var n="#F13F18",a=" #323233"},"15cd":function(t,i,e){},"35f6":function(t,i,e){"use strict";var n=e("753f"),a=e.n(n);a.a},"3b0d":function(t,i,e){"use strict";var n=e("6a15"),a=e.n(n);a.a},"5a15":function(t,i,e){},"6a15":function(t,i,e){},"753f":function(t,i,e){},"884c":function(t,i,e){"use strict";e.r(i);var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"homebox"},[e("div",{staticClass:"container"},[e("keep-alive",[e("transition",{attrs:{name:t.transitionName}},[e("router-view",{staticClass:"child_view"})],1)],1)],1),e("div",{staticClass:"footer"},[e("TheTab")],1),e("Audio",{on:{showPlayer:t.showPlayer}})],1)},o=[],s=(e("b0c0"),e("ade3")),c=(e("3cd0"),e("1a44"),e("acc2"),e("adc1"),e("c31d")),r=e("d282"),l=e("a142"),u=e("48f4"),h=e("9884"),d=e("ad06"),f=e("6f2f"),b=Object(r["a"])("tabbar-item"),m=b[0],p=b[1],v=m({mixins:[Object(h["a"])("vanTabbar")],props:Object(c["a"])({},u["c"],{dot:Boolean,icon:String,name:[Number,String],info:[Number,String],badge:[Number,String],iconPrefix:String}),data:function(){return{active:!1}},computed:{routeActive:function(){var t=this.to,i=this.$route;if(t&&i){var e=Object(l["e"])(t)?t:{path:t},n=e.path===i.path,a=Object(l["c"])(e.name)&&e.name===i.name;return n||a}}},methods:{onClick:function(t){this.parent.onChange(this.name||this.index),this.$emit("click",t),Object(u["b"])(this.$router,this)},genIcon:function(t){var i=this.$createElement,e=this.slots("icon",{active:t});return e||(this.icon?i(d["a"],{attrs:{name:this.icon,classPrefix:this.iconPrefix}}):void 0)}},render:function(){var t=arguments[0],i=this.parent.route?this.routeActive:this.active,e=this.parent[i?"activeColor":"inactiveColor"];return t("div",{class:p({active:i}),style:{color:e},on:{click:this.onClick}},[t("div",{class:p("icon")},[this.genIcon(i),t(f["a"],{attrs:{dot:this.dot,info:Object(l["c"])(this.badge)?this.badge:this.info}})]),t("div",{class:p("text")},[this.slots("default",{active:i})])])}}),g=(e("5a15"),e("b1d2")),C=Object(r["a"])("tabbar"),y=C[0],x=C[1],T=y({mixins:[Object(h["b"])("vanTabbar")],props:{route:Boolean,zIndex:[Number,String],placeholder:Boolean,activeColor:String,inactiveColor:String,value:{type:[Number,String],default:0},border:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:null}},data:function(){return{height:null}},computed:{fit:function(){return null!==this.safeAreaInsetBottom?this.safeAreaInsetBottom:this.fixed}},watch:{value:"setActiveItem",children:"setActiveItem"},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.tabbar.getBoundingClientRect().height)},methods:{setActiveItem:function(){var t=this;this.children.forEach((function(i,e){i.active=(i.name||e)===t.value}))},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))},genTabbar:function(){var t,i=this.$createElement;return i("div",{ref:"tabbar",style:{zIndex:this.zIndex},class:[(t={},t[g["b"]]=this.border,t),x({unfit:!this.fit,fixed:this.fixed})]},[this.slots()])}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:x("placeholder"),style:{height:this.height+"px"}},[this.genTabbar()]):this.genTabbar()}}),_=(e("c625"),e("b650")),S=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tabbar"},[e("Tabitem",{attrs:{path:"/index/home",activeColor:t.activeColor}},[e("span",{staticClass:"iconfont icon-shouye2",attrs:{slot:"Tabitem_icon"},slot:"Tabitem_icon"}),e("span",{staticClass:"tab-name",attrs:{slot:"Tabitem_sign"},slot:"Tabitem_sign"},[t._v("首页")])]),e("Tabitem",{attrs:{path:"/index/hot",activeColor:t.activeColor}},[e("span",{staticClass:"iconfont icon-huobao",attrs:{slot:"Tabitem_icon"},slot:"Tabitem_icon"}),e("span",{staticClass:"tab-name",attrs:{slot:"Tabitem_sign"},slot:"Tabitem_sign"},[t._v("热门")])]),e("Tabitem"),e("Tabitem",{attrs:{path:"/index/subscribe",activeColor:t.activeColor}},[e("span",{staticClass:"iconfont icon-wodedingyue",attrs:{slot:"Tabitem_icon"},slot:"Tabitem_icon"}),e("span",{staticClass:"tab-name",attrs:{slot:"Tabitem_sign"},slot:"Tabitem_sign"},[t._v("订阅")])]),e("Tabitem",{attrs:{path:"/index/profile",activeColor:t.activeColor}},[e("span",{staticClass:"iconfont icon-wode1",attrs:{slot:"Tabitem_icon"},slot:"Tabitem_icon"}),e("span",{staticClass:"tab-name",attrs:{slot:"Tabitem_sign"},slot:"Tabitem_sign"},[t._v("我的")])])],1)},O=[],$=e("0a92"),w=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"Tabitem",class:t.activeClass,style:t.Color,on:{click:t.itemclick}},[t._t("Tabitem_icon"),t._t("Tabitem_sign")],2)},j=[],A=(e("c975"),{name:"Tabitem",props:{path:String,activeColor:{type:String,default:"green"}},computed:{isActive:function(){return!this.$route.path.indexOf(this.path)},activeClass:function(){return this.isActive?"active":""},Color:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemclick:function(){try{this.$router.push(this.path)}catch(t){console.log(t)}}}}),k=A,I=(e("35f6"),e("2877")),P=Object(I["a"])(k,w,j,!1,null,"7968a5ad",null),B=P.exports,E={name:"TheTab",components:{Tabitem:B},data:function(){return{activeColor:$["b"]}},methods:{myshowPopup:function(){console.log(1),this.$emit("myshowPopup")}}},N=E,z=(e("d904"),Object(I["a"])(N,S,O,!1,null,"0dc5e28e",null)),R=z.exports,F=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"audio",style:t.playstyle,attrs:{id:"audio_box"}},[t.playstate?e("span",{staticClass:"iconfont icon-zanting",on:{click:function(i){return i.stopPropagation(),t.playaudio(i)}}}):e("span",{staticClass:"iconfont icon-triangle-right",on:{click:function(i){return i.stopPropagation(),t.playaudio(i)}}}),e("audio",{ref:"theaudio",attrs:{id:"theaudio",controller:""}},[e("source",{attrs:{src:t.audiosrc,type:"audio/mpeg"}})])])},J=[],q={name:"Audio",data:function(){return{}},computed:{audiosrc:function(){return this.$store.state.audioSrc},imgSrc:function(){return this.$store.state.imgSrc},playstate:function(){return this.$store.state.playstate},playstyle:function(){return null!=this.imgSrc||""!=this.imgSrc?{"background-image":" url("+this.imgSrc+")"}:{}}},methods:{playaudio:function(){null!=this.audiosrc&&(this.$refs.theaudio.play(),this.$store.commit("changPlay",!0)),this.$emit("showPlayer",document.getElementById("theaudio").src)},getplaystyle:function(){return null!=this.imgSrc||""!=this.imgSrc?{"background-image":" url("+this.imgSrc+")"}:{}}},created:function(){},watch:{imgSrc:function(t){console.log(t),this.getplaystyle()}}},D=q,G=(e("3b0d"),Object(I["a"])(D,F,J,!1,null,"09af8942",null)),H=G.exports,K={name:"Index",components:(n={},Object(s["a"])(n,_["a"].name,_["a"]),Object(s["a"])(n,T.name,T),Object(s["a"])(n,v.name,v),Object(s["a"])(n,"Audio",H),Object(s["a"])(n,"TheTab",R),n),data:function(){return{transitionName:"slide-left"}},methods:{showPlayer:function(t){this.$router.push("/index/play")}},watch:{$route:function(t,i){"/"==t.path?this.transitionName="slide-right":this.transitionName="slide-left"}}},L=K,M=(e("bb79"),Object(I["a"])(L,a,o,!1,null,"eeba70c4",null));i["default"]=M.exports},a640:function(t,i,e){"use strict";var n=e("d039");t.exports=function(t,i){var e=[][t];return!!e&&n((function(){e.call(null,i||function(){throw 1},1)}))}},adc1:function(t,i,e){},ae40:function(t,i,e){var n=e("83ab"),a=e("d039"),o=e("5135"),s=Object.defineProperty,c={},r=function(t){throw t};t.exports=function(t,i){if(o(c,t))return c[t];i||(i={});var e=[][t],l=!!o(i,"ACCESSORS")&&i.ACCESSORS,u=o(i,0)?i[0]:r,h=o(i,1)?i[1]:void 0;return c[t]=!!e&&!a((function(){if(l&&!n)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:r}):t[1]=1,e.call(t,u,h)}))}},b0c0:function(t,i,e){var n=e("83ab"),a=e("9bf2").f,o=Function.prototype,s=o.toString,c=/^\s*function ([^ (]*)/,r="name";n&&!(r in o)&&a(o,r,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},bb79:function(t,i,e){"use strict";var n=e("bcdd"),a=e.n(n);a.a},bcdd:function(t,i,e){},c975:function(t,i,e){"use strict";var n=e("23e7"),a=e("4d64").indexOf,o=e("a640"),s=e("ae40"),c=[].indexOf,r=!!c&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:r||!l||!u},{indexOf:function(t){return r?c.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},d904:function(t,i,e){"use strict";var n=e("15cd"),a=e.n(n);a.a}}]);