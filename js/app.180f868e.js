(function(t){function e(e){for(var o,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dfdbda3c"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"2737e410"}[t]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ff0":function(t,e,n){"use strict";n("8f18")},"4fc1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Modal",{attrs:{title:"登出"},on:{"on-ok":function(e){return t.logout()},"on-cancel":function(e){return t.cancel()}},model:{value:t.confirmLogout,callback:function(e){t.confirmLogout=e},expression:"confirmLogout"}},[n("h2",[t._v(t._s(t.name)+"，即將登出您的帳號")])]),n("div",{attrs:{id:"nav"}},[n("Menu",{staticClass:"navBar",attrs:{mode:"horizontal","active-name":""}},[n("MenuItem",{attrs:{name:"home",to:"/"}},[n("div",{staticClass:"logoAndWord"},[n("Icon",{staticClass:"logo",attrs:{type:"logo-youtube",size:"45"}}),n("h1",[t._v("首頁")])],1)]),n("MenuItem",{attrs:{name:"search",to:"/Search"}},[n("h1",[t._v("搜尋")])]),n("MenuItem",{staticClass:"login",attrs:{name:"login"}},[t.name.length>0?n("div",{staticClass:"googleInfo",on:{click:function(e){return t.checkLogout()}}},[n("Avatar",{staticStyle:{color:"#f56a00","background-color":"#fde3cf"},attrs:{size:"45"}},[t._v(t._s(t.name))])],1):n("div",{staticClass:"googleInfo",on:{click:function(e){return t.login()}}},[n("Avatar",{attrs:{icon:"ios-person",size:"45"}})],1)])],1)],1),n("keep-alive",[n("router-view")],1)],1)},r=[],i=n("1da1"),s=(n("b0c0"),n("96cf"),{data:function(){return{confirmLogout:!1,name:""}},methods:{login:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="",window.gapi.load("auth2"),e.next=4,window.gapi.auth2.init({apiKey:"AIzaSyAq1g791oia0UHVsMEkFKjIu_yGCfPbqtg",clientId:"102771112570-5md88bkhcnmeg0k3l4kss516mjgamjtc.apps.googleusercontent.com"});case 4:return e.next=6,window.gapi.auth2.getAuthInstance().signIn().then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.Ts.Me,console.log("Sign-in successful");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){console.error("Error signing in",t)}));case 6:t.name=n,window.gapi.auth2.getAuthInstance().disconnect();case 8:case"end":return e.stop()}}),e)})))()},checkLogout:function(){this.confirmLogout=!0},cancel:function(){this.confirmLogout=!1},logout:function(){this.confirmLogout=!1,this.name=""}},mounted:function(){}}),c=s,u=(n("7faf"),n("2877")),l=Object(u["a"])(c,a,r,!1,null,null,null),d=l.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Row",{attrs:{type:"flex",justify:"start"}},t._l(t.cards,(function(t,e){return n("Col",{key:e,attrs:{xs:24,sm:12,md:12,lg:8,xl:6,xxl:6}},[n("YoutubeCard",{attrs:{data:t,type:0}})],1)})),1)],1)},m=[],h=(n("d81d"),n("a4d3"),n("e01a"),n("a434"),{data:function(){return{searchValue:"",cards:[],videoDuration:"medium",dataReady:!1}},methods:{recommend:function(){if(!0===this.dataReady){var t=window.gapi.client.youtube.videos.list({part:["snippet,contentDetails,statistics"],regionCode:"tw",maxResults:50,chart:"mostPopular"}),e=[];t.execute((function(t){t.items.map((function(t){try{if(!t.id.playlistId){var n={};n.id=t.id,n.title=t.snippet.title,n.url="https://www.youtube.com/embed/"+n.id,n.description=t.snippet.description,n.channelTitle=t.snippet.channelTitle,n.src="http://img.youtube.com/vi/"+n.id+"/0.jpg",n.viewCount=t.statistics.viewCount,e.splice(Math.floor(Math.random()*e.length),0,n)}}catch(o){console.log(o)}}))})),this.cards=e}},setApi:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.gapi.client.load("youtube","v3");case 3:window.gapi.client.setApiKey("AIzaSyAq1g791oia0UHVsMEkFKjIu_yGCfPbqtg"),t.dataReady=!0,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0),t.$router.go(0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setApi();case 2:this.recommend();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),v=h,b=(n("c219"),Object(u["a"])(v,g,m,!1,null,null,null)),y=b.exports;o["default"].use(p["a"]);var w=[{path:"/",name:"Home",component:y},{path:"/search",name:"Search",component:function(){return n.e("about").then(n.bind(null,"2d3b"))}},{path:"/player",name:"Player",component:function(){return n.e("about").then(n.bind(null,"bf5c"))}}],C=new p["a"]({routes:w}),_=C,k=n("2f62");o["default"].use(k["a"]);var j=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=n("f825"),A=n.n(x),I=(n("f8ce"),n("ed18")),O=n.n(I),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"YoutubeCard",staticStyle:{margin:"8px"}},[0===t.type?n("Card",{attrs:{padding:8}},[n("div",{staticClass:"topCard",on:{click:function(e){return t.play(t.data.id)}}},[n("div",{staticClass:"img"},[n("div",{staticClass:"playIcon"},[n("Icon",{attrs:{type:"logo-youtube",size:"100"}})],1),n("img",{attrs:{src:t.data.src}})])]),n("h3",{staticClass:"title"},[t._v(t._s(t.data.title))]),n("h5",[t._v(t._s(t.data.channelTitle))]),n("h5",[t._v("觀看次數:"+t._s(t.data.viewCount)+"人次")]),n("Collapse",{staticClass:"floating",attrs:{"hide-arrow":!1}},[n("Panel",{attrs:{name:"1"}},[t._v("完整資訊"),n("p",{staticClass:"info",attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.data.description))])])],1)],1):1===t.type?n("Card",{staticClass:"searchCard",attrs:{padding:8}},[n("div",{staticClass:"card",on:{click:function(e){return t.play(t.data.id)}}},[n("Row",{attrs:{justify:"space-around"}},[n("Col",[n("div",{staticClass:"img2"},[n("div",{staticClass:"playIcon"},[n("Icon",{attrs:{type:"logo-youtube",size:"100"}})],1),n("img",{attrs:{src:t.data.src}})])]),n("Col",{staticClass:"infoCard",attrs:{xs:24,sm:12,md:12,lg:14,xl:16,xxl:18}},[n("h3",{staticClass:"title"},[t._v(t._s(t.data.title))]),n("h5",[t._v(t._s(t.data.channelTitle))]),n("p",{staticClass:"info"},[t._v(t._s(t.data.description))])])],1)],1)]):t._e()],1)},E=[],P=(n("a9e3"),{props:{type:Number,data:Object},methods:{play:function(t){this.$router.push({name:"Player",query:{id:t}})}}}),M=P,L=(n("0ff0"),Object(u["a"])(M,S,E,!1,null,null,null)),R=L.exports,T=n("e0ec"),q=n.n(T),z=n("485e");O.a.config(),n("ed18").config(),o["default"].use(A.a),o["default"].use(q.a),o["default"].use(z["a"],{apiKey:"AIzaSyAq1g791oia0UHVsMEkFKjIu_yGCfPbqtg",clientId:"102771112570-5md88bkhcnmeg0k3l4kss516mjgamjtc.apps.googleusercontent.com",scope:"https://apis.google.com/js/client.js",discoveryDocs:["https://apis.google.com/js/client.js"]}),o["default"].component("YoutubeCard",R),o["default"].config.productionTip=!0,new o["default"]({router:_,store:j,render:function(t){return t(d)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";n("b8ff")},"8f18":function(t,e,n){},b8ff:function(t,e,n){},c219:function(t,e,n){"use strict";n("4fc1")}});
//# sourceMappingURL=app.180f868e.js.map