(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)i=s[f],n[i]&&d.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0cca":function(t,e,a){},1700:function(t,e,a){"use strict";a.r(e);var o=a("e832");a.d(e,"Vue",function(){return o["a"]})},"22e9":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mars-view",{staticClass:"hello",staticStyle:{backgroundColor:"null"}},[a("mars-view",[a("mars-text",[t._v("https://github.com/max-team/Mars")])],1)],1)},n=[],r={},i=r,s=(a("bdc3"),a("a6c2")),c=Object(s["a"])(i,o,n,!1,null,"1258b71d",null);e["default"]=c.exports},"249e":function(t,e){self.addEventListener("install",function(){console.log("Service Worker 状态： install")})},2773:function(t,e,a){t.exports=a.p+"img/test.faffc8b5.jpg"},"32bf":function(t){t.exports={libVersion:"2.0.35",appid:"",setting:{urlCheck:!1}}},"36f1":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"scroller",staticClass:"mars-pull-refresh-wrap"},[a("div",{staticClass:"mars-pull-refresh-header",class:{"mars-pull-refresh-header-loading":3===t.currentStep,"mars-pull-refresh-header-loaded":4===t.currentStep},style:{height:t.height+"px"}},[t._m(0),t._m(1)]),a("div",{staticClass:"mars-pull-refresh-content"},[t._t("default")],2)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mars-pull-refresh-loading"},[a("span",{staticClass:"mars-pull-refresh-pulling-text mars-gap-left-small"},[t._v("松手加载")]),a("span",{staticClass:"mars-pull-refresh-loading-text mars-gap-left-small"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mars-pull-refresh-loaded"},[a("span",{staticClass:"mars-pull-refresh-loaded-text mars-gap-left-middle"},[t._v("\n                刷新完毕\n            ")])])}],r=(a("7b62"),1),i=2,s=3,c=4,l={props:{offset:{type:Number,default:30},errorTip:{type:String,default:"暂时没有更新，休息一下吧"},tipShowTime:{type:Number,default:600},enableReachBottom:{type:Boolean,default:!1},enablePullDownRefresh:{type:Boolean,default:!1},onReachBottomDistance:{type:Number,default:50}},data:function(){return{curY:0,moveY:0,height:0,originY:0,iconPosY:0,loading:!1,triggerFlag:!1,scrollTopStart:0,currentStep:1}},mounted:function(){this.scroller=this.$refs.scroller,this.container=window,this.enablePullDownRefresh&&this.initTouch(),this.initScroll()},updated:function(){this.enablePullDownRefresh?this.initTouch():this.detachTouch()},methods:{initTouch:function(){var t=this.enablePullDownRefresh,e=this.onTouchStart,a=this.onTouchMove,o=this.onTouchEnd,n=this.onTouchCancel;t&&(window.addEventListener("touchstart",e),window.addEventListener("touchmove",a),window.addEventListener("touchend",o),window.addEventListener("touchcancel",n))},detachTouch:function(){this.enablePullDownRefresh;var t=this.onTouchStart,e=this.onTouchMove,a=this.onTouchEnd,o=this.onTouchCancel;window.removeEventListener("touchstart",t),window.removeEventListener("touchmove",e),window.removeEventListener("touchend",a),window.removeEventListener("touchcancel",o)},initScroll:function(){this.scrollHandler=null,window.addEventListener("scroll",this.onScroll)},onScroll:function(){var t=this;this.$emit("page-scroll",{scrollTop:window.pageYOffset}),this.enableReachBottom&&(this.containerHeight=this.container.offsetHeight,this.scrollHandler&&(clearTimeout(this.scrollHandler),this.scrollHandler=null),this.scroller.offsetHeight-window.pageYOffset-window.innerHeight<=this.onReachBottomDistance&&(this.scrollHandler=setTimeout(function(){t.$emit("reach-bottom")},50)))},detachScroll:function(){this.scrollHandler=null,window.removeEventListener("scroll",this.onScroll)},onTouchStart:function(t){this.loading||(this.currentStep=r,this.originY=t.touches[0].clientY,this.scrollTopStart=window.pageYOffset)},onTouchMove:function(t){if(!this.loading){var e=0;this.curY=t.touches[0].clientY,this.moveY=this.curY-this.originY,e=this.scrollTopStart-this.moveY,this.moveY>0&&e<=0&&!this.scrollTopStart&&(this.height=this.moveY,this.currentStep=i,this.triggerFlag=this.moveY>this.offset)}},onTouchEnd:function(t){var e=this;e.loading||(e.triggerFlag?(e.loading=!0,this.currentStep=s,this.height=this.offset,e.$emit("pull-down-refresh")):e.reset())},stopPullDownRefresh:function(){this.loading&&(this.currentStep=c,setTimeout(this.reset,this.tipShowTime))},reset:function(){this.loading=!1,this.triggerFlag=!1,this.height=0,this.iconPosY=0}}},u=l,f=(a("c347"),a("a6c2")),d=Object(f["a"])(u,o,n,!1,null,"d928a042",null);e["default"]=d.exports},"41cb":function(t,e,a){"use strict";a.r(e);a("67c8"),a("e1a2");var o=a("d35a"),n=a("f5b8"),r=a("e832"),i=a("4af9"),s=a("fc6e");r["a"].use(i["a"]);var c=new i["a"]({mode:"hash",routes:[{path:"/pages/home/index",component:n["default"]},{path:"/pages/second/index",component:o["default"]},{path:"*",redirect:"/pages/home/index"}]});function l(){return Math.random().toString(36).substr(2,12)}r["a"].prototype.isBack=!1,r["a"].prototype.fromRouterPosY=0,c.beforeEach(function(t,e,a){t.query._||(t.query._=l());var o=decodeURI(t.fullPath),n=decodeURI(e.fullPath),i=s["default"].list,u=i.length,f=u>1&&i[u-1].path===n&&i[u-2].path===o;if(r["a"].prototype.isBack=f,!f){var d=t.query;d._&&delete d._}o=decodeURI(t.fullPath),n=decodeURI(e.fullPath);for(var h=s["default"].length,p=-1,g=h;g>=0;g--)i[g]&&i[g].path===o&&(p=g);for(var b=h;b>=0;b--)i[b]&&i[b].path===n&&(i[b].pos=window.pageYOffset);h>1&&p<=h-2&&p>=0?i.splice(p+1,h-p-1):0!==s["default"].length&&-1!==p&&p===h-1||i.push({path:o,route:t.path.replace(/^\//,""),uri:t.path.replace(/^\//,""),options:t.query}),r["a"].prototype.currentRoute=i,s["default"].set(i),c.app.$nextTick(function(){var t=s["default"].list,e=s["default"].length,a=t[e-1];o===a.path&&a.pos?r["a"].prototype.fromRouterPosY=a.pos:r["a"].prototype.fromRouterPosY=0}),a()}),e["default"]=c},"460a":function(t,e,a){"use strict";a.r(e),a.d(e,"set",function(){return l}),a.d(e,"get",function(){return u}),a.d(e,"remove",function(){return f});var o=a("2e40"),n=a("3289"),r=function(){function t(){Object(o["a"])(this,t),this.data={}}return Object(n["a"])(t,[{key:"setItem",value:function(t,e){this.data[t]=e}},{key:"getItem",value:function(t){return this.data[t]}}]),t}(),i=null,s=null;try{i=window.localStorage,s=window.sessionStorage}catch(d){i=new r,s=new r}var c="MARS_";function l(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=a?s:i;if(!o)return!1;try{o.setItem("".concat(c).concat(t),JSON.stringify(e))}catch(d){return!1}return!0}function u(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=a?s:i,n=o.getItem("".concat(c).concat(t));try{n=JSON.parse(n),n||(n=e)}catch(d){n=e}return n}function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e?sessionStorage:localStorage;a.removeItem("".concat(c).concat(t))}},"4eb2":function(t,e,a){},"534a":function(t,e,a){"use strict";var o=a("e083"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("6b3c"),n=(a("2bf3"),a("0dbc"),a("e612"),a("8cf6"),a("e832")),r=a("ddb8"),i=a("d8ba"),s=a("a8d0"),c=a("41cb"),l=a("d9a4"),u=(a("84db"),a("a2cb"));Object(r["default"])("./sw.js"),n["a"].use(i["default"]),n["a"].config.productionTip=!1;var f=u["default"];window.getApp=function(){return f},n["a"].prototype.currentRoute=[],n["a"].prototype.$mpUpdated=function(t){return this.$nextTick(t)},window.getCurrentPages=function(){return n["a"].prototype.currentRoute};var d=new n["a"]({router:c["default"],data:{pageTitleMap:{"/app":{title:"",enablePullDownRefresh:!1,enableReachBottom:!1,navigationBarBackgroundColor:"",navigationBarTextStyle:"",backgroundColor:"",backgroundTextStyle:"",navigationStyle:""},"/pages/home/index":{title:"Mars",enablePullDownRefresh:!1,enableReachBottom:!1,navigationBarBackgroundColor:"",navigationBarTextStyle:"",backgroundColor:"",backgroundTextStyle:"",navigationStyle:""},"/pages/second/index":{title:"Full House Page Title",enablePullDownRefresh:!1,enableReachBottom:!1,navigationBarBackgroundColor:"",navigationBarTextStyle:"",backgroundColor:"",backgroundTextStyle:"",navigationStyle:""}}},render:function(t){var e;return t(s["default"],{props:(e={tabBars:[],navigationBarBackgroundColor:"#3eaf7c",navigationBarTextStyle:"white",useTransition:!0,navigationBarHomeColor:"light",showNavigationBorder:!0},Object(o["a"])(e,"useTransition",!0),Object(o["a"])(e,"homePage","/pages/home/index"),e)})}}).$mount("#app");Object(l["default"])(n["a"],d),f.$api=d.$api},"6b55":function(t,e,a){"use strict";var o=a("d457"),n=a.n(o);n.a},"7fe4":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default")],2)},n=[],r={beforeMount:function(){(function(){}).call(this,this.$route.query)},mounted:function(){(function(){}).call(this,this.$route.query)}},i=r,s=a("a6c2"),c=Object(s["a"])(i,o,n,!1,null,null,null);e["default"]=c.exports},"81d5":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swan-app-navigation-bar",style:{transitionProperty:"background-color, color",transitionDuration:t.transitionDuration,transitionTimingFunction:t.transitionTimingFunc,backgroundColor:t.backgroundColor,color:t.textStyle,borderBottom:t.showBottomBorder?"1px #ccc solid":null},attrs:{align:"center"}},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isHomePage,expression:"!isHomePage"}],staticClass:"return-to-home",class:["dark"===t.homeIconColor?"dark":"light"],attrs:{to:"/pages/home/index"}}),a("div",{staticClass:"title"},[a("div",{staticClass:"title-inner"},[t._v("\n            "+t._s(t.title)+"\n        ")])])],1)},n=[],r=(a("7b62"),{props:{transitionDuration:{type:Number,default:0},transitionTimingFunc:{type:String,default:"linear"},backgroundColor:{type:String},textStyle:{type:String},showBottomBorder:{type:Boolean,default:!0},homeIconColor:{type:String,default:"dark"},title:{type:String},isHomePage:{type:Boolean,default:!1}}}),i=r,s=(a("534a"),a("a6c2")),c=Object(s["a"])(i,o,n,!1,null,"eb5d47d2",null);e["default"]=c.exports},"84db":function(t,e,a){},8903:function(t,e,a){},"8c5f":function(t,e,a){},a2cb:function(t,e,a){"use strict";a.r(e),e["default"]={}},a8d0:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["enter"===t.transitionStatus?"transition-status-enter":null],attrs:{id:"mars"}},[a("custom-app",{ref:"app"},[a("div",{staticClass:"swan-app-container",class:["enter"===t.transitionStatus?"transition-status-enter":null]},[a("navigation-bar",{attrs:{transitionDuration:t.transitionDuration,transitionTimingFunc:t.transitionTimingFunc,backgroundColor:t.currentNavigationBarBackgroundColor,textStyle:t.currentNavigationBarTextStyle,showBottomBorder:t.showNavigationBorder,homeIconColor:t.navigationBarHomeColor,title:t.currentTitle,isHomePage:t.isHomePage}}),a("div",{staticClass:"swan-app-tab-panel",class:["enter"===t.transitionStatus?"transition-status-enter":null]},[a("pull-down-refresh",{ref:"refresherHandler",staticClass:"tab-panel-content",style:{top:(t.pos||0)+"px",height:t.bodyHeight,position:"enter"===t.transitionStatus?"relative":"static"},attrs:{enablePullDownRefresh:t.enablePullDownRefresh,enableReachBottom:t.enableReachBottom,onReachBottomDistance:t.onReachBottomDistance},on:{"pull-down-refresh":t.handleRefresh,"reach-bottom":t.handleReachBottom,"page-scroll":t.handlePageScroll}},[a("transition",{attrs:{name:!t.useTransition||t.tabChange||t.browserAction?"back":"fold-left",mode:t.useTransition&&!t.browserAction?"in-out":null},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,enter:t.enter,leave:t.leave,"before-leave":t.beforeLeave}},[a("keep-alive",{attrs:{max:6}},[t.showRouterView?a("router-view",{key:t.routerViewKey,ref:"currentRouter",style:{paddingBottom:t.tabBarHeight+"px",backgroundColor:t.currentBackgroundColor||"#fff",top:"enter"===t.transitionStatus?-t.pos+"px":null}}):t._e()],1)],1)],1)],1),t.tabList.length>0&&t.showTabBar&&t.customShowTabBar?a("tab-bar",{attrs:{tabList:t.tabList,currentPath:t.currentPath,color:t.tabBarColor,selectedColor:t.tabBarSelectedColor,borderStyle:t.tabBarBorderStyle,backgroundColor:t.tabBarBackgroundColor},on:{"tab-item-tap":t.handleTabItemTap}}):t._e()],1)])],1)},n=[],r=(a("8ade"),a("7b62"),a("fa92")),i=a("36f1"),s=a("81d5"),c=a("7fe4"),l={name:"app",props:{tabBars:{type:Array},navigationBarBackgroundColor:{type:String,default:"#000"},navigationBarTextStyle:{type:String,default:"white"},backgroundTextStyle:{type:String,default:"dark"},backgroundColor:{type:String,default:"#fff"},onReachBottomDistance:{type:Number,default:50},navigationBarHomeColor:{type:String,default:"dark"},showNavigationBorder:{type:Boolean,default:!0},useTransition:{type:Boolean,default:!0},homePage:{type:String}},components:{"tab-bar":r["default"],"pull-down-refresh":i["default"],"navigation-bar":s["default"],"custom-app":c["default"]},data:function(){return{currentTitle:"",currentPath:"",customShowTabBar:!0,showTabBar:!0,enablePullDownRefresh:!1,enableReachBottom:!1,tabChange:!0,showRouterView:!1,transitionDuration:0,transitionTimingFunc:"linear",tabList:[],tabBarColor:"#a2a2a2",tabBarSelectedColor:"#000",tabBarBackgroundColor:"#fff",tabBarBorderStyle:"white",browserAction:!1,routerViewKey:null,currentNavigationBarBackgroundColor:"",currentNavigationBarTextStyle:"",currentNavigationStyle:"",transitionStatus:"end",transitionMode:"in-out",pos:0,bodyHeight:"auto",isHomePage:!1}},computed:{tabBarHeight:function(){var t=this;return this.tabList.some(function(e){return e.pagePath===t.$route.path})?45:0}},watch:{$route:function(t,e){this.getPageConfig(t.path),this.currentPath=t.path;var a=this.tabList.find(function(e){return e.pagePath===t.path});this.$refs.refresherHandler.stopPullDownRefresh();var o=this.tabList.some(function(t){return t.pagePath===e.path}),n=this.tabList.some(function(e){return e.pagePath===t.path});this.tabChange=(o||n)&&!!a,this.browserAction=this.isBack,this.isHomePage=t.path===this.homePage,t.path!==e.path||t.path===e.path&&JSON.stringify(t.query)!==JSON.stringify(e.query)?this.routerViewKey=t.fullPath:this.routerViewKey=null,document.querySelector("body").style.backgroundColor=this.currentBackgroundColor||"#fff"}},mounted:function(){this.tabList=this.tabBars,this.currentPath=this.$route.path,this.getPageConfig(this.$route.path),this.showRouterView=!0,this.routerViewKey=this.$route.path,this.isHomePage=this.$route.path===this.homePage},methods:{afterEnter:function(){var t=this;this.transitionStatus="end",this.pos=0,this.bodyHeight="auto",this.$refs.currentRouter.$emit("marsTransitionEnterEnd"),this.$nextTick(function(){t.isBack&&window.scrollTo(0,t.fromRouterPosY)})},enter:function(){this.isBack&&window.scrollTo(0,this.fromRouterPosY)},beforeEnter:function(){this.isBack?window.scrollTo(0,this.fromRouterPosY):(this.transitionMode="in-out",this.pos=-window.pageYOffset,!this.isBack&&(this.transitionStatus="enter"),this.bodyHeight=screen.height-38+"px")},beforeLeave:function(){this.leavePos=window.pageYOffset},leave:function(){window.scrollTo(0,this.leavePos)},getPageConfig:function(t){var e=this.tabList.find(function(e){return e.pagePath===t});this.showTabBar=!!e;var a=this.$root.$data["pageTitleMap"][t],o=a.title,n=a.enablePullDownRefresh,r=a.enableReachBottom,i=a.backgroundColor,s=a.navigationBarBackgroundColor,c=a.navigationBarTextStyle,l=a.navigationStyle,u=this.backgroundColor,f=this.navigationBarBackgroundColor,d=this.navigationBarTextStyle,h=this.navigationStyle;this.currentTitle=o,this.enablePullDownRefresh=n,this.enableReachBottom=r,this.currentBackgroundColor=i||u,this.currentNavigationBarBackgroundColor=s||f,this.currentNavigationBarTextStyle=c||d,this.currentNavigationStyle=l||h},handleRefresh:function(){"end"===this.transitionStatus&&this.$refs.currentRouter.onPullDownRefresh&&this.$refs.currentRouter.onPullDownRefresh()},handleReachBottom:function(){"end"===this.transitionStatus&&this.$refs.currentRouter.onReachBottom&&this.$refs.currentRouter.onReachBottom()},handlePageScroll:function(t){"end"===this.transitionStatus&&this.$refs.currentRouter.onPageScroll&&this.$refs.currentRouter.onPageScroll(t)},handleTabItemTap:function(t){"end"===this.transitionStatus&&this.$refs.currentRouter.onTabItemTap&&this.$refs.currentRouter.onTabItemTap(t)}}},u=l,f=(a("6b55"),a("a6c2")),d=Object(f["a"])(u,o,n,!1,null,"799c423a",null);e["default"]=d.exports},a8ec:function(t,e,a){var o={"./MarsApp":"a8d0","./MarsApp.vue":"a8d0","./app":"7fe4","./app-components/NavigationBar/NavigationBar":"81d5","./app-components/NavigationBar/NavigationBar.vue":"81d5","./app-components/PullDownRefresh/PullDownRefresh":"36f1","./app-components/PullDownRefresh/PullDownRefresh.vue":"36f1","./app-components/TabBar/TabBar":"fa92","./app-components/TabBar/TabBar.vue":"fa92","./app.vue":"7fe4","./appApi":"a2cb","./appApi.js":"a2cb","./browserHistory":"fc6e","./browserHistory.js":"fc6e","./components":"d8ba","./components.js":"d8ba","./components/Hello/Hello":"22e9","./components/Hello/Hello.vue":"22e9","./globalApi":"d9a4","./globalApi.js":"d9a4","./imags/test.jpg":"2773","./main":"56d7","./main.js":"56d7","./mars-base.css":"84db","./mars-core":"1700","./mars-core/":"1700","./mars-core/index":"1700","./mars-core/index.js":"1700","./pages/home":"f5b8","./pages/home/":"f5b8","./pages/home/index":"f5b8","./pages/home/index.vue":"f5b8","./pages/second":"d35a","./pages/second/":"d35a","./pages/second/index":"d35a","./pages/second/index.vue":"d35a","./project.swan":"32bf","./project.swan.json":"32bf","./registerServiceWorker":"ddb8","./registerServiceWorker.js":"ddb8","./router":"41cb","./router.js":"41cb","./storage":"460a","./storage.js":"460a","./sw":"249e","./sw.js":"249e"};function n(t){var e=r(t);return a(e)}function r(t){var e=o[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id="a8ec"},b18b:function(t,e,a){"use strict";var o=a("8903"),n=a.n(o);n.a},bdc3:function(t,e,a){"use strict";var o=a("8c5f"),n=a.n(o);n.a},c347:function(t,e,a){"use strict";var o=a("4eb2"),n=a.n(o);n.a},cdfa:function(t,e,a){"use strict";var o=a("0cca"),n=a.n(o);n.a},d35a:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mars-view",{staticClass:"home-wrap",staticStyle:{backgroundColor:"null"}},[t._v("\n    Full House page\n    "),a("img",{attrs:{src:t.imgSrc}}),a("mars-view",[t._v("异步获取的数据")]),t.bookInfo?a("mars-view",[a("span",[t._v(" name: ice and fire")]),a("br"),a("br"),a("span",[t._v(" title: "+t._s(t.bookInfo.titles[0]))]),a("br"),a("br"),t._l(t.bookInfo.aliases,function(e,o){return a("div",{key:o},[a("span",[t._v(" "+t._s(e)+" ")])])})],2):t._e()],1)],1)},n=[],r={data:function(){return{imgSrc:a("2773"),bookInfo:null}},mounted:function(){var t=this;console.log("Full house page  mounted"),fetch("https://anapioficeandfire.com/api/characters/583").then(function(e){e.json().then(function(e){console.log(e),t.bookInfo=e})})}},i=r,s=a("a6c2"),c=Object(s["a"])(i,o,n,!1,null,null,null);e["default"]=c.exports},d457:function(t,e,a){},d8ba:function(t,e,a){"use strict";a.r(e);var o=a("b311"),n=a("86ea"),r=a("5bbe"),i=a("4291");function s(t){t.component("MarsView",i["a"]),t.component("MarsText",r["a"]),t.component("MarsNavigator",n["a"]),t.component("MarsButton",o["a"])}e["default"]=s},d9a4:function(t,e,a){"use strict";a.r(e);a("ef92"),a("5b54"),a("67c8"),a("1a43");var o=a("8035"),n=a("a99e");function r(t){return t&&"object"===Object(o["a"])(t)?{res:!0}:{res:!1}}function i(t){var e=t.name,a=void 0===e?"":e,o=t.para,n=t.correct,r=t.wrong,i=o?"parameter.".concat(o):"parameter",c=s(null===r?"Null":r);return"".concat(a,":fail parameter error: ").concat(i," should be ").concat(n," instead of ").concat(c)}function s(t){return"string"!==typeof t?t:(t=t.replace(/^./,function(t){return t.toUpperCase()}),t)}function c(t,e,a,o,n,r,s){t.errMsg=i({name:e,para:a,correct:n,wrong:o}),console.error(t.errMsg),"function"===typeof r&&r(t),"function"===typeof s&&s(t)}function l(t,e){var a=r(t);a.res||console.error(i({name:e,para:null,correct:"Object",wrong:Object(o["a"])(t)}))}function u(t,e,a,o,n){var r=null,i=t.pageYOffset;if(i!==e){var s=a/16,c=i>e?"UP":"DOWN",l="UP"===c?(i-e)/s:(e-i)/s;window.requestAnimationFrame(u)}function u(){"UP"===c?(i-=l,window.scrollTo(0,i),i>e?(t.scrollTop=i,r=window.requestAnimationFrame(u)):(window.scrollTo(0,e),window.cancelAnimationFrame(r),"function"===typeof o&&o(),"function"===typeof n&&n())):"DOWN"===c&&(i+=l,i<e?(window.scrollTo(0,i),r=window.requestAnimationFrame(u)):(window.scrollTo(0,e),window.cancelAnimationFrame(r),"function"===typeof o&&o(),"function"===typeof n&&n()))}}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(function(a){t.directive(a,e[a])})}function d(t,e){f(t,n["b"]);var a=e.$root.$children[0];t.prototype.$api=Object.assign(n["a"],{$router:e.$router,stopPullDownRefresh:a.$refs.refresherHandler.stopPullDownRefresh,setNavigationBarTitle:function(t){l(t,"setNavigationBarTitle");var e=t.title,n=t.success,r=t.fail,i=t.complete,s={errMsg:"setNavigationBarTitle:ok"};if(e&&"string"!==typeof e||void 0===e)return c(s,"setNavigationBarTitle","title",Object(o["a"])(e),"string",r,i);a.currentTitle=t.title,"function"===typeof n&&n(s),"function"===typeof i&&i(s)},setNavigationBarColor:function(t){l(t,"setNavigationBarColor");var e=t.frontColor,n=t.backgroundColor,i=t.animation,s=t.success,u=t.fail,f=t.complete,d={errMsg:"setNavigationBarColor:ok"};if("#ffffff"!==e&&"#000000"!==e)return c(d,"setNavigationBarColor","frontColor",e,"#000000|#ffffff",u,f);if(n&&"string"!==typeof n||void 0===n)return c(d,"setNavigationBarColor","backgroundColor",Object(o["a"])(n),"string",u,f);var h=0,p="linear";if(i){var g=r(i);if(!g.res)return c(d,"setNavigationBarColor","animation",Object(o["a"])(i),"object",u,f);var b=i.duration,m=i.timingFunc;if(b&&"number"!==typeof b)return c(d,"setNavigationBarColor","animation.duration",Object(o["a"])(b),"number",u,f);if(h=b,-1===["linear","easeIn","easeOut","easeInOut"].indexOf(m))return c(d,"setNavigationBarColor","animation.timingFunc",m,"linear|easeIn|easeOut|easeInOut",u,f);p=m}a.currentNavigationBarTextStyle=e,a.currentNavigationBarBackgroundColor=n,a.transitionDuration=h&&h/1e3+"s"||0,a.transitionTimingFunc=p,"function"===typeof s&&s(d),"function"===typeof f&&f(d)},setTabBarBadge:function(t){l(t,"setTabBarBadge");var e=t.index,n=t.text,r=t.success,i=t.fail,s=t.complete,u={errMsg:"setTabBarBadge:ok"};return e&&"number"!==typeof e?c(u,"setTabBarBadge","index",Object(o["a"])(e),"number",i,s):n&&"string"!==typeof n?c(u,"setTabBarBadge","text",Object(o["a"])(n),"string",i,s):(n.length>4&&(n=n.substring(0,4)+"..."),a.tabList[e]&&(a.tabList[e].badge=n),"function"===typeof r&&r(u),void("function"===typeof s&&s(u)))},removeTabBarBadge:function(t){l(t,"removeTabBarBadge");var e=t.index,n=t.success,r=t.fail,i=t.complete,s={errMsg:"removeTabBarBadge:ok"};if(e&&"number"!==typeof e)return c(s,"removeTabBarBadge","index",Object(o["a"])(e),"number",r,i);a.tabList[e]&&(a.tabList[e].badge=""),"function"===typeof n&&n(s),"function"===typeof i&&i(s)},showTabBarRedDot:function(t){l(t,"showTabBarRedDot");var e=t.index,n=t.success,r=t.fail,i=t.complete,s={errMsg:"showTabBarRedDot:ok"};if(e&&"number"!==typeof e)return c(s,"showTabBarRedDot","index",Object(o["a"])(e),"number",r,i);a.tabList[e]&&(a.tabList[e].showRedDot=!0),"function"===typeof n&&n(s),"function"===typeof i&&i(s)},hideTabBarRedDot:function(t){l(t,"hideTabBarRedDot");var e=t.index,n=t.success,r=t.fail,i=t.complete,s={errMsg:"hideTabBarRedDot:ok"};if(e&&"number"!==typeof e)return c(s,"hideTabBarRedDot","index",Object(o["a"])(e),"number",r,i);a.tabList[e]&&(a.tabList[e].showRedDot=!1),"function"===typeof n&&n(s),"function"===typeof i&&i(s)},setTabBarStyle:function(t){l(t,"setTabBarStyle");var e=t.color,n=t.selectedColor,r=t.backgroundColor,i=t.borderStyle,s=t.success,u=t.fail,f=t.complete,d={errMsg:"setTabBarStyle:ok"};return e&&"string"!==typeof e?c(d,"setTabBarStyle","color",Object(o["a"])(e),"string",u,f):n&&"string"!==typeof n?c(d,"setTabBarStyle","selectedColor",Object(o["a"])(n),"string",u,f):r&&"string"!==typeof r?c(d,"setTabBarStyle","backgroundColor",Object(o["a"])(r),"string",u,f):i&&"white"!==i&&"black"!==i?c(d,"setTabBarStyle","borderStyle",i,"black|white",u,f):(a.tabBarSelectedColor=n,a.tabBarColor=e,a.tabBarBackgroundColor=r,a.tabBarBorderStyle=i,"function"===typeof s&&s(d),void("function"===typeof f&&f(d)))},setTabBarItem:function(t){l(t,"setTabBarItem");var e=t.index,n=t.text,r=t.iconPath,i=t.selectedIconPath,s=t.success,u=t.fail,f=t.complete,d={errMsg:"setTabBarItem:ok"};return e&&"number"!==typeof e?c(d,"setTabBarItem","index",Object(o["a"])(e),"number",u,f):n&&"string"!==typeof n?c(d,"setTabBarItem","text",Object(o["a"])(n),"string",u,f):r&&"string"!==typeof r?c(d,"setTabBarItem","iconPath",Object(o["a"])(r),"string",u,f):i&&"string"!==typeof i?c(d,"setTabBarItem","selectedIconPath",Object(o["a"])(i),"string",u,f):(a.tabList[e]&&(a.tabList[e].text=n),a.tabList[e]&&r&&(a.tabList[e].iconPath=r),a.tabList[e]&&i&&(a.tabList[e].selectedIconPath=i),"function"===typeof s&&s(d),void("function"===typeof f&&f(d)))},showTabBar:function(t){l(t,"showTabBar");var e=t.animation,n=t.success,r=t.fail,i=t.complete,s={errMsg:"showTabBar:ok"};if(e&&"boolean"!==typeof e)return c(s,"showTabBar","animation",Object(o["a"])(e),"boolean",r,i);a.customShowTabBar=!0,"function"===typeof n&&n(s),"function"===typeof i&&i(s)},hideTabBar:function(t){l(t,"hideTabBar");var e=t.animation,n=t.success,r=t.fail,i=t.complete,s={errMsg:"hideTabBa:ok"};if(e&&"boolean"!==typeof e)return c(s,"hideTabBar","animation",Object(o["a"])(e),"boolean",r,i);a.customShowTabBar=!1,"function"===typeof n&&n(s),"function"===typeof i&&i(s)},pageScrollTo:function(t){l(t,"pageScrollTo");var e=t.scrollTop,a=t.duration,n=t.success,r=t.fail,i=t.complete,s={errMsg:"pageScrollTo:ok"};if(e&&"number"!==typeof e)return c(s,"pageScrollTo","scrollTop",Object(o["a"])(e),"number",r,i);if(a&&"number"!==typeof a)return c(s,"pageScrollTo","duration",Object(o["a"])(a),"number",r,i);var f=window;u(f,e,a,n,i)}})}e["default"]=d},ddb8:function(t,e,a){"use strict";function o(t){"serviceWorker"in navigator&&navigator.serviceWorker.register(t).then(function(){console.log("Service Worker 注册成功")})}a.r(e),e["default"]=o},e083:function(t,e,a){},f5b8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mars-view",{staticClass:"home-wrap",staticStyle:{backgroundColor:"null"}},[a("mars-view",{staticClass:"home-text"},[t._v("Vue 驱动的多端开发框架")]),a("hello"),a("mars-button",[a("mars-navigator",{attrs:{url:"/pages/second/index","open-type":"switchTab"}},[t._v("点我切换到ROOM TAB")])],1)],1)],1)},n=[],r=a("22e9"),i={data:function(){return{}},components:{hello:r["default"]}},s=i,c=(a("cdfa"),a("a6c2")),l=Object(c["a"])(s,o,n,!1,null,"06152725",null);e["default"]=l.exports},fa92:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-bar-wrap",style:{borderTop:"1px "+("black"===t.borderStyle?"#eee":"#fff")+" solid",backgroundColor:t.backgroundColor,color:t.color}},t._l(t.tabList,function(e,n){return o("router-link",{key:n,staticClass:"tab-item-link",style:{width:1/t.tabList.length*100+"%",color:t.currentPath===e.pagePath?t.selectedColor:t.color},attrs:{to:e.pagePath}},[e.iconPath?o("div",{staticClass:"tab-item icon-and-text",on:{click:function(a){return t.tap(e,n)}}},[o("div",{staticClass:"tab-item-icon",style:{backgroundImage:"url("+a("a8ec")("./"+(t.currentPath===e.pagePath?e.selectedIconPath:e.iconPath))+")"}},[e.badge?o("div",{staticClass:"tab-item-badge"},[t._v("\n                    "+t._s(e.badge)+"\n                ")]):!e.badge&&e.showRedDot?o("div",{staticClass:"tab-item-red-dot"}):t._e()]),o("div",{staticClass:"tab-item-text"},[t._v(t._s(e.text))])]):o("div",{staticClass:"tab-item"},[o("span",{staticClass:"tab-link"},[t._v(t._s(e.text))])])])}),1)},n=[],r=(a("67c8"),{props:{tabList:{type:Array,default:[]},selectedColor:{type:String,default:"#3388ff"},color:{type:String,default:"#a2a2a2"},backgroundColor:{type:String,default:"#fff"},currentPath:{type:String},borderStyle:{type:String,default:"#fff"}},methods:{tap:function(t,e){this.$emit("tab-item-tap",{index:"".concat(e),text:t.text,pagePath:t.pagePath.replace(/^\//,"")})}}}),i=r,s=(a("b18b"),a("a6c2")),c=Object(s["a"])(i,o,n,!1,null,"5109ef78",null);e["default"]=c.exports},fc6e:function(t,e,a){"use strict";a.r(e);var o=a("2e40"),n=a("3289"),r=a("460a"),i="browser_history",s=function(){function t(){Object(o["a"])(this,t),this.list=r["get"](i,[],!0)}return Object(n["a"])(t,[{key:"backTo",value:function(t){var e=this.list,a=e.length;if(a>=2){var o=0;while(o<a&&!t.test(e[a-1-o].path))o++;return!(o===a||!t.test(e[a-o-1].path))&&(0!==o&&window.history.go(-o),!0)}return!1}},{key:"get",value:function(t){return null==t?this.list:this.list[t]}},{key:"set",value:function(t){this.list=t,r["set"](i,t,!0)}},{key:"length",get:function(){return this.list.length}}]),t}();e["default"]=new s}});
//# sourceMappingURL=app.fb0b720b.js.map