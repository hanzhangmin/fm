(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-138661d7"],{"0e0e":function(t,i,o){"use strict";var s=o("e636"),a=o.n(s);a.a},"0e4f":function(t,i,o){"use strict";var s=o("652d"),a=o.n(s);a.a},1394:function(t,i,o){},"16c7":function(t,i,o){"use strict";var s=o("f5ac"),a=o.n(s);a.a},1858:function(t,i,o){"use strict";o.r(i);var s,a=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("van-tabs",{attrs:{animated:"",sticky:"",swipeable:"",color:t.maincolor,"title-active-color":t.maincolor,"line-width":"20px","line-height":"2px","lazy-render":""},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[o("van-tab",{attrs:{title:"有声书"}},[o("hotbooks")],1),o("van-tab",{attrs:{title:"音乐"}},[o("hotMusic")],1),o("van-tab",{attrs:{title:"时政"}},[o("hotNews")],1),o("van-tab",{attrs:{title:"专题"}},[o("hotSubject")],1),o("van-tab",{attrs:{title:"电台"}},[o("hotSation")],1),o("van-tab",{attrs:{title:"节目"}},[o("hotProgrem")],1)],1)],1)},e=[],n=(o("b0c0"),o("ade3")),l=(o("8990"),o("5e46")),r=(o("558f"),o("0b33")),c=o("0a92"),m=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"hotcontainer"},[o("div",{staticClass:"hotbox-left flex1"},[o("classMenu",{attrs:{menuDatas:t.menuDatas}})],1),o("div",{staticClass:"hotbox-right flex3"},[o("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.books,(function(i,s){return o("div",{key:s+"books",staticClass:"panel"},[o("BookCard",[o("img",{attrs:{slot:"audiobox",src:i.theimg,alt:""},slot:"audiobox"}),o("p",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(i.title)+" ")]),o("p",{staticClass:"moreintro",attrs:{slot:"moreintro"},slot:"moreintro"},[t._v(" "+t._s(i.intro)+" ")]),o("div",{staticClass:"score",attrs:{slot:"score"},slot:"score"},[o("div",[o("span",{staticClass:"iconfont icon-erji2"}),t._v(" "+t._s(i.playNum)+" ")]),o("div",[o("span",{staticClass:"iconfont icon-shoucang2"})])])])],1)})),0)],1)])},d=[],u=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("ul",{staticClass:"menu"},t._l(t.menuDatas,(function(i,s){return o("li",{key:s,ref:"class"+s,refInFor:!0,class:{active:s==t.active},on:{click:function(i){return i.stopPropagation(),t.changeActive(s)}}},[t._v(t._s(i.name)+" ")])})),0)},p=[],h={name:"ClassMenu",props:{menuDatas:Array},data:function(){return{active:0}},mounted:function(){},methods:{changeActive:function(t){this.active=t}}},g=h,f=(o("557d"),o("2877")),_=Object(f["a"])(g,u,p,!1,null,"e9ae4562",null),b=_.exports,v=o("8174"),A={name:"hotbooks",components:{classMenu:b,BookCard:v["a"]},data:function(){return{loading:!1,finished:!1,menuDatas:[{id:1,name:"全部分类"},{id:2,name:"历史"},{id:3,name:"现代文学"},{id:4,name:"流行"},{id:5,name:"科技"},{id:6,name:"工具"}],books:[{id:1,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:2,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:3,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:4,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:5,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:6,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4}]}},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var i=0;i<0;i++)t.books.push(t.books.length+1);t.loading=!1,t.books.length>=3&&(t.finished=!0)}),1e3)}}},C=A,w=(o("6b02"),Object(f["a"])(C,m,d,!1,null,"e34daaf2",null)),y=w.exports,k=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"hotcontainer"},[o("div",{staticClass:"hotbox-left flex1"},[o("classMenu",{attrs:{menuDatas:t.menuDatas}})],1),o("div",{staticClass:"hotbox-right flex3"},[o("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.mp3lsit2,(function(i,s){return o("Card1",{key:s+"mp3lsit2"},[o("img",{attrs:{slot:"audiobox",src:i.theimg,alt:""},on:{click:function(o){return o.stopPropagation(),t.playorpause(i.id+"mp3","play"+i.id,i,o)}},slot:"audiobox"}),o("p",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(i.title)+" ")]),o("p",{staticClass:"moreintro",attrs:{slot:"moreintro"},slot:"moreintro"},[t._v(" "+t._s(i.intro)+" ")]),o("p",{staticClass:"moreintro",staticStyle:{color:"red"},attrs:{slot:"rank"},slot:"rank"},[t._v(" 音乐榜 "+t._s(i.rank)+" ")]),o("div",{staticClass:"score",attrs:{slot:"score"},slot:"score"},[o("div",[o("span",{staticClass:"iconfont icon-erji2"}),t._v(" "+t._s(i.playNum)+" ")]),o("div",[o("span",{staticClass:"iconfont icon-shoucang2"})])])])})),1)],1)])},N=[],x=o("47eb"),Q={name:"HotMusic",components:{classMenu:b,BookCard:v["a"],Card1:x["a"]},data:function(){return{loading:!1,finished:!1,menuDatas:[{id:1,name:"全部分类"},{id:2,name:"历史"},{id:3,name:"现代文学"},{id:4,name:"流行"},{id:5,name:"科技"},{id:6,name:"工具"}],mp3lsit2:[{id:345,theimg:"http://huitengit.com/assets/imgs/f2.jpg",audio:"http://huitengit.com/assets/mp3/MP31.mp3",title:"我会记得你霍建",intro:" 电视剧战长沙片尾曲",rank:"1",score:4,playNum:"3400"},{id:234,theimg:"http://huitengit.com/assets/imgs/f5.jpg",audio:"http://huitengit.com/assets/mp3/MP31.mp3",title:"水星记",intro:" 音乐",rank:"1",score:5,playNum:"3400"},{id:123,theimg:"http://huitengit.com/assets/imgs/f6.jpg",audio:"http://huitengit.com/assets/mp3/MP31.mp3",title:"若只如初见",intro:" 电视剧青云志片尾曲",rank:"1",score:5,playNum:"3400"},{id:345,theimg:"http://huitengit.com/assets/imgs/f2.jpg",audio:"http://huitengit.com/assets/mp3/MP31.mp3",title:"我会记得你",intro:" 电视剧战长沙片尾曲品味去片尾曲",rank:"1",score:4,playNum:"3400"},{id:234,theimg:"http://huitengit.com/assets/imgs/f5.jpg",audio:"http://huitengit.com/assets/mp3/MP31.mp3",title:"水星记",intro:" 音乐",rank:"1",score:5,playNum:"3400"},{id:123,theimg:"http://huitengit.com/assets/imgs/f6.jpg",audio:"http://huitengit.com/assets/mp3/MP31.mp3",title:"若只如初见",intro:" 电视剧青云志片尾曲",rank:"1",score:5,playNum:"3400"}]}},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var i=0;i<0;i++)t.mp3lsit2.push(t.mp3lsit2.length+1);t.loading=!1,t.mp3lsit2.length>=3&&(t.finished=!0)}),1e3)},playorpause:function(t,i,o,s){var a=document.getElementById("theaudio");a.src=o.audio,localStorage.setItem("audioSrc",o.audio),localStorage.setItem("imgSrc",o.theimg),this.$store.commit("changeAudioSrc",o.id,o.audio,o.theimg),""!==this.playid?(console.log("not null"),t===this.playmp3id?(a.pause(),s.target.className=this.pauseclass,this.$store.commit("changPlay",!1),this.playmp3id="",this.playid=""):(document.getElementById(this.playid).className=this.pauseclass,document.getElementById(this.playmp3id).pause(),s.target.className=this.playclass,a.play(),this.$store.commit("changPlay",!0),this.playmp3id=t,this.playid=i)):(s.target.className=this.playclass,a.play(),this.$store.commit("changPlay",!0),this.playmp3id=t,this.playid=i)}}},E=Q,j=Object(f["a"])(E,k,N,!1,null,null,null),J=j.exports,U=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"hotcontainer"},[o("div",{staticClass:"hotbox-left flex1"},[o("classMenu",{attrs:{menuDatas:t.menuDatas}})],1),o("div",{staticClass:"hotbox-right flex3"},[o("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.books,(function(i,s){return o("div",{key:s+"books",staticClass:"panel"},[o("News",[o("img",{attrs:{slot:"audiobox",src:i.theimg,alt:""},slot:"audiobox"}),o("p",{staticClass:"title2",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(i.title)+" ")]),o("div",{staticClass:"score",attrs:{slot:"score"},slot:"score"},[o("div",[t._v(" "+t._s(i.score)+"评论 ")]),o("div",[t._v(" 2020-07-25 ")])])])],1)})),0)],1)])},W=[],X=o("df93"),M={name:"HotNews",components:{classMenu:b,News:X["a"]},data:function(){return{loading:!1,finished:!1,menuDatas:[{id:1,name:"全部分类"},{id:2,name:"历史"},{id:3,name:"现代文学"},{id:4,name:"流行"},{id:5,name:"科技"},{id:6,name:"工具"}],books:[{id:1,theimg:"https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",title:"人生低谷的时候，不要只想着健身和读书",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:2,theimg:"https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",title:"人生低谷的时候，不要只想着健身和读书",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:3,theimg:"https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",title:"人生低谷的时候，不要只想着健身和读书",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:4,theimg:"https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",title:"人生低谷的时候，不要只想着健身和读书",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:5,theimg:"https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",title:"人生低谷的时候，不要只想着健身和读书",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:6,theimg:"https://p3.pstatp.com/list/190x124/pgc-image/R69dEGtBjlnLBF",title:"人生低谷的时候，不要只想着健身和读书",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4}]}},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var i=0;i<0;i++)t.books.push(t.books.length+1);t.loading=!1,t.books.length>=3&&(t.finished=!0)}),1e3)}}},P=M,I=(o("6255"),Object(f["a"])(P,U,W,!1,null,"60370105",null)),B=I.exports,q=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"hotcontainer"},[o("div",{staticClass:"hotbox-left flex1"},[o("classMenu",{attrs:{menuDatas:t.menuDatas}})],1),o("div",{staticClass:"hotbox-right flex3"},[o("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.books,(function(i,s){return o("div",{key:s+"books",staticClass:"panel"},[o("BookCard",[o("img",{attrs:{slot:"audiobox",src:i.theimg,alt:""},slot:"audiobox"}),o("p",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(i.title)+" ")]),o("p",{staticClass:"moreintro",attrs:{slot:"moreintro"},slot:"moreintro"},[t._v(" "+t._s(i.intro)+" ")]),o("div",{staticClass:"score",attrs:{slot:"score"},slot:"score"},[o("div",[o("span",{staticClass:"iconfont icon-erji2"}),t._v(" "+t._s(i.playNum)+" ")]),o("div",[o("span",{staticClass:"iconfont icon-shoucang2"})])])])],1)})),0)],1)])},K=[],D={name:"HotProgrem",components:{classMenu:b,BookCard:v["a"]},data:function(){return{loading:!1,finished:!1,menuDatas:[{id:1,name:"全部分类"},{id:2,name:"历史"},{id:3,name:"现代文学"},{id:4,name:"流行"},{id:5,name:"科技"},{id:6,name:"工具"}],books:[{id:1,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:2,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:3,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:4,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:5,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:6,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4}]}},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var i=0;i<0;i++)t.books.push(t.books.length+1);t.loading=!1,t.books.length>=3&&(t.finished=!0)}),1e3)}}},O=D,L=(o("23e71"),Object(f["a"])(O,q,K,!1,null,"2358a6b8",null)),$=L.exports,S=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"hotcontainer"},[o("div",{staticClass:"hotbox-left flex1"},[o("classMenu",{attrs:{menuDatas:t.menuDatas}})],1),o("div",{staticClass:"hotbox-right flex3"},[o("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.books,(function(i,s){return o("div",{key:s+"books",staticClass:"panel"},[o("BookCard",[o("img",{attrs:{slot:"audiobox",src:i.theimg,alt:""},slot:"audiobox"}),o("p",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(i.title)+" ")]),o("p",{staticClass:"moreintro",attrs:{slot:"moreintro"},slot:"moreintro"},[t._v(" "+t._s(i.intro)+" ")]),o("div",{staticClass:"score",attrs:{slot:"score"},slot:"score"},[o("div",[o("span",{staticClass:"iconfont icon-erji2"}),t._v(" "+t._s(i.playNum)+" ")]),o("div",[o("span",{staticClass:"iconfont icon-shoucang2"})])])])],1)})),0)],1)])},F=[],G={name:"HotSation",components:{classMenu:b,BookCard:v["a"]},data:function(){return{loading:!1,finished:!1,menuDatas:[{id:1,name:"全部分类"},{id:2,name:"历史"},{id:3,name:"现代文学"},{id:4,name:"流行"},{id:5,name:"科技"},{id:6,name:"工具"}],books:[{id:1,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:2,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:3,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:4,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:5,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:6,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4}]}},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var i=0;i<0;i++)t.books.push(t.books.length+1);t.loading=!1,t.books.length>=3&&(t.finished=!0)}),1e3)}}},R=G,T=(o("0e4f"),Object(f["a"])(R,S,F,!1,null,"24b2d4ea",null)),H=T.exports,z=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"hotcontainer"},[o("div",{staticClass:"hotbox-left flex1"},[o("classMenu",{attrs:{menuDatas:t.menuDatas}})],1),o("div",{staticClass:"hotbox-right flex3"},[o("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.books,(function(i,s){return o("div",{key:s+"books",staticClass:"panel"},[o("BookCard",[o("img",{attrs:{slot:"audiobox",src:i.theimg,alt:""},slot:"audiobox"}),o("p",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(i.title)+" ")]),o("p",{staticClass:"moreintro",attrs:{slot:"moreintro"},slot:"moreintro"},[t._v(" "+t._s(i.intro)+" ")]),o("div",{staticClass:"score",attrs:{slot:"score"},slot:"score"},[o("div",[o("span",{staticClass:"iconfont icon-erji2"}),t._v(" "+t._s(i.playNum)+" ")]),o("div",[o("span",{staticClass:"iconfont icon-shoucang2"})])])])],1)})),0)],1)])},V=[],Y={name:"HotSubject",components:{classMenu:b,BookCard:v["a"]},data:function(){return{loading:!1,finished:!1,menuDatas:[{id:1,name:"全部分类"},{id:2,name:"历史"},{id:3,name:"现代文学"},{id:4,name:"流行"},{id:5,name:"科技"},{id:6,name:"工具"}],books:[{id:1,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:2,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:3,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:4,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:5,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4},{id:6,theimg:"http://book.img.ireader.com/idc_1/m_1,w_105,h_140,q_100/7f726aeb/group6/M00/34/18/CmQUN1X2wwWEWn9xAAAAAKmJbXQ847123974.jpg?v=JswtAlPy&t=CmQUN16IsfE.",title:"口才三绝：会赞美 会幽默 会拒绝",intro:" 生活交际中说得最多的话、听得最多的话、用得最多的话，就是赞美话、幽默话、拒绝话。　",playNum:"3400",score:4}]}},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var i=0;i<0;i++)t.books.push(t.books.length+1);t.loading=!1,t.books.length>=3&&(t.finished=!0)}),1e3)}}},Z=Y,tt=(o("16c7"),Object(f["a"])(Z,z,V,!1,null,"7c2d1024",null)),it=tt.exports,ot={name:"hot",components:(s={},Object(n["a"])(s,r["a"].name,r["a"]),Object(n["a"])(s,l["a"].name,l["a"]),Object(n["a"])(s,"hotbooks",y),Object(n["a"])(s,"hotMusic",J),Object(n["a"])(s,"hotSation",H),Object(n["a"])(s,"hotSubject",it),Object(n["a"])(s,"hotProgrem",$),Object(n["a"])(s,"hotNews",B),s),data:function(){return{active:0,maincolor:c["c"]}}},st=ot,at=Object(f["a"])(st,a,e,!1,null,null,null);i["default"]=at.exports},"23e71":function(t,i,o){"use strict";var s=o("1394"),a=o.n(s);a.a},3830:function(t,i,o){},"47eb":function(t,i,o){"use strict";var s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"card"},[o("div",{staticClass:"img"},[t._t("audiobox")],2),o("div",{staticClass:"intro"},[t._t("title"),t._t("moreintro"),t._t("rank"),t._t("score")],2)])},a=[],e={name:"Card1"},n=e,l=(o("0e0e"),o("2877")),r=Object(l["a"])(n,s,a,!1,null,"682bb344",null);i["a"]=r.exports},"557d":function(t,i,o){"use strict";var s=o("f7bc"),a=o.n(s);a.a},6255:function(t,i,o){"use strict";var s=o("d9fa"),a=o.n(s);a.a},"652d":function(t,i,o){},"6b02":function(t,i,o){"use strict";var s=o("a4a7"),a=o.n(s);a.a},8174:function(t,i,o){"use strict";var s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"bookcard"},[o("div",{staticClass:"img"},[t._t("audiobox")],2),o("div",{staticClass:"intro"},[t._t("title"),t._t("moreintro"),t._t("score")],2)])},a=[],e={name:"BookCard"},n=e,l=(o("dee0"),o("2877")),r=Object(l["a"])(n,s,a,!1,null,"0b53e69d",null);i["a"]=r.exports},a4a7:function(t,i,o){},b0c0:function(t,i,o){var s=o("83ab"),a=o("9bf2").f,e=Function.prototype,n=e.toString,l=/^\s*function ([^ (]*)/,r="name";s&&!(r in e)&&a(e,r,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(t){return""}}})},b37a:function(t,i,o){},d9fa:function(t,i,o){},dee0:function(t,i,o){"use strict";var s=o("3830"),a=o.n(s);a.a},df93:function(t,i,o){"use strict";var s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"bookcard"},[o("div",{staticClass:"img"},[t._t("audiobox")],2),o("div",{staticClass:"intro"},[t._t("title"),t._t("score")],2)])},a=[],e={name:"News"},n=e,l=(o("e84b"),o("2877")),r=Object(l["a"])(n,s,a,!1,null,"0cf1404a",null);i["a"]=r.exports},e636:function(t,i,o){},e84b:function(t,i,o){"use strict";var s=o("b37a"),a=o.n(s);a.a},f5ac:function(t,i,o){},f7bc:function(t,i,o){}}]);