(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],f=0,h=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"35cb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("AppNavigation")],1),n("section",[n("keep-alive",[n("router-view",{key:t.$route.fullPath,on:{"open-modal":t.toggleModal}})],1),t.showModal?n("AppModal",{on:{"close-modal":t.toggleModal}}):t._e()],1),n("footer",[n("AppFooter")],1)])},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[n("ul",[t._l(t.links,(function(e,a){return n("li",{key:a},[n("router-link",{attrs:{to:e.url}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:e.icon,transform:e.transform,size:"2x"}}),n("br"),n("span",[t._v(t._s(e.text))])],1)],1)})),n("li",[n("AppSearch")],1)],2)])},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-container"},[n("button",[n("font-awesome-icon",{staticClass:"icon-search",attrs:{icon:"search",transform:"shrink-6",size:"2x"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",maxlength:"20",placeholder:"Пошук фільму, серіалу..."},domProps:{value:t.query},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},blur:t.resetSearch,input:function(e){e.target.composing||(t.query=e.target.value)}}})])},u=[],l={name:"AppSearch",data:function(){return{query:"",lastQuery:null}},methods:{search:function(){this.query.length>=2&&this.query!=this.lastQuery&&(this.lastQuery=this.query,this.$router.push("/search?q="+this.query),this.resetSearch())},resetSearch:function(){this.query=""}}},f=l,h=(n("a92d"),n("2877")),p=Object(h["a"])(f,c,u,!1,null,"1761a67e",null),m=p.exports,d={name:"AppNavigation",components:{AppSearch:m},data:function(){return{links:[{url:"/tops",text:"Топ",icon:"star",transform:"shrink-7"},{url:"/movies",text:"Фільми",icon:"film",transform:"shrink-6"},{url:"/tv-shows",text:"ТВ Передачі ",icon:"tv",transform:"shrink-8"}]}}},v=d,g=(n("d3b4"),Object(h["a"])(v,i,o,!1,null,"521ff1e1",null)),A=g.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",[t._v(" Movies Catalog ✔ Created with Vue.js")])])}],w=(n("ec3e"),{}),y=Object(h["a"])(w,_,b,!1,null,"260dd17c",null),I=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"overlay",on:{click:t.closeModal}}),n("div",{staticClass:"modal_content"},[n("div",{staticClass:"item_content clearfix"},[t.showItemInfo?[n("aside",{staticClass:"poster"},[n("figure",[n("img",{attrs:{src:t.urlImg}})]),n("ScoreIndicator",{attrs:{score:t.itemInfo.vote_average,size:"82","stroke-width":"5","stroke-color":"#ff6633"}}),n("i",[t._v("Оцінка користувачів ")])],1),n("section",{staticClass:"info"},[n("h1",[t._v(t._s(t.itemInfo.title))]),n("p",[t._v(t._s(t.itemInfo.overview))]),n("h2",{staticClass:"label"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.icon,size:"1x"}}),t._v(" "+t._s(t.dateLabel))],1),n("p",[t._v(t._s(this.date))]),n("h2",{staticClass:"label"},[t._v("Жанри")]),n("ul",t._l(t.genres,(function(e,a){return n("li",{key:a},[t._v(t._s(e))])})),0),n("h2",{staticClass:"label"},[t._v("Актори")]),n("p",[t._v(t._s(t.itemInfo.cast))]),n("h2",{staticClass:"label"},[t._v("Website")]),null!=t.itemInfo.homepage?n("p",{staticClass:"web"},[n("a",{attrs:{href:t.itemInfo.homepage}},[t._v(t._s(t.itemInfo.homepage))])]):t._e()])]:[t._v("Loading ...")]],2),n("button",{staticClass:"close_modal",attrs:{title:"Close"},on:{click:t.closeModal}},[n("font-awesome-icon",{attrs:{icon:"times",transform:"shrink-6",size:"1x"}})],1)])])},x=[],O=(n("99af"),n("d81d"),n("b0c0"),n("b64b"),n("5530")),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"display"},[n("div",{staticClass:"circle"},[n("svg",{staticClass:"circle__svg",attrs:{width:t.size,height:t.size}},[n("circle",{staticClass:"circle__progress circle__progress--path",style:t.strokePathStyles,attrs:{cx:t.center,cy:t.center,r:t.radius}}),n("circle",{staticClass:"circle__progress circle__progress--fill",style:t.strokeFillStyles,attrs:{cx:t.center,cy:t.center,r:t.radius}})]),n("div",{staticClass:"percent"},[n("span",{staticClass:"percent__int"},[t._v(t._s(t.valueInt))]),n("span",{staticClass:"percent__dec"},[t._v(t._s(t.valueDec))])])])])},C=[],j=(n("a9e3"),n("ac1f"),n("1276"),n("3835")),D={name:"ScoreIndicator",props:["score","size","strokeWidth","strokeColor"],data:function(){return{strokeDasharray:0,strokeDashoffset:0,transitionDuration:0,valueInt:"0.",valueDec:"00"}},computed:{center:function(){return Math.floor(this.size/2)},radius:function(){return this.center-this.strokeWidth},strokePathStyles:function(){return{stroke:this.strokeColor,"stroke-width":this.strokeWidth}},strokeFillStyles:function(){return{stroke:this.strokeColor,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDasharray,"stroke-dashoffset":this.strokeDashoffset,transition:"stroke-dashoffset ".concat(this.transitionDuration,"ms ease")}}},created:function(){this.animateCircle(),this.animateValue()},methods:{animateCircle:function(){var t=this,e=2*Math.PI*this.radius,n=parseFloat(this.score),a=e*((10-n)/10);this.strokeDasharray=e,this.strokeDashoffset=e,this.transitionDuration=900,setTimeout((function(){return t.strokeDashoffset=a}),100)},animateValue:function(){var t=String(this.score).split("."),e=Object(j["a"])(t,2),n=e[0],a=e[1],r=[Number(n),Number(a)];n=r[0],a=r[1],a<10&&(a*=10);var s=a>0?".":"";this.increaseValue(n,"int",s),a>0?this.increaseValue(a,"dec"):this.valueDec=""},increaseValue:function(t,e){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=this.transitionDuration/t,s=0,i=setInterval((function(){s===t&&window.clearInterval(i),"int"==e?n.valueInt=s+a:n.valueDec=s,s++}),r)}}},T=D,E=(n("e189"),Object(h["a"])(T,M,C,!1,null,"6afa82ce",null)),P=E.exports,N=n("2f62"),L=n("5a0c"),S=n.n(L),R={name:"Modal",components:{ScoreIndicator:P},computed:Object(O["a"])(Object(O["a"])(Object(O["a"])({},Object(N["c"])(["type","itemInfo"])),Object(N["b"])(["imgPath"])),{},{showItemInfo:function(){return!!Object.keys(this.itemInfo).length},urlImg:function(){return null!=this.itemInfo.poster_path?"".concat(this.imgPath).concat(this.itemInfo.poster_path):n("d810")},genres:function(){return this.itemInfo.genres.map((function(t){return t.name.toUpperCase()}))},date:function(){return this.itemInfo.year?S()(this.itemInfo.year).format("MMM D, YYYY"):""},dateLabel:function(){return"movie"==this.itemInfo.type?"Дата випуску":"Дата першого релізу"},icon:function(){return"movie"==this.itemInfo.type?"film":"tv"}}),methods:{closeModal:function(){this.$emit("close-modal")}}},V=R,q=(n("b6f6"),Object(h["a"])(V,k,x,!1,null,"7f2ac8bb",null)),z=q.exports,X={name:"app",components:{AppNavigation:A,AppFooter:I,AppModal:z},data:function(){return{showModal:!1}},created:function(){this.loadInitialData()},methods:{loadInitialData:function(){try{this.$store.dispatch("getInitialData")}catch(t){this.error="Error: configuration not loaded"}},toggleModal:function(){this.showModal=!this.showModal}}},$=X,U=(n("5c0b"),Object(h["a"])($,r,s,!1,null,null,null)),J=U.exports,F=(n("a15b"),n("fb6a"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),W=n("bc3a"),Q=n.n(W),H="468881e0ac550a7015e6d069d87122c9",Z=Q.a.create({baseURL:"https://api.themoviedb.org/3/"}),K="uk-UA",G="false",Y={getConfiguration:function(){return Z.get("configuration?api_key=".concat(H))},search:function(t,e){var n="search/multi?api_key=".concat(H,"&language=").concat(K,"&query=").concat(t,"&page=").concat(e,"&include_adult=").concat(G);return Z.get(n)},getItemInfo:function(t,e){var n="".concat(e,"/").concat(t,"?api_key=").concat(H,"&language=").concat(K);return Z.get(n)},getCast:function(t,e){var n="".concat(e,"/").concat(t,"/credits?api_key=").concat(H,"&language=").concat(K);return Z.get(n)},getTop:function(t){var e="".concat(t,"/top_rated?api_key=").concat(H,"&language=").concat(K,"&page=1");return Z.get(e)},getMoviesUpcoming:function(t){var e="movie/upcoming?api_key=".concat(H,"&language=").concat(K,"&page=").concat(t);return Z.get(e)},getMoviesLatest:function(t){var e="movie/latest?api_key=".concat(H,"&language=").concat(K,"&page=").concat(t);return Z.get(e)},getTvShowsOnAir:function(t){var e="tv/on_the_air?api_key=".concat(H,"&language=").concat(K,"&page=").concat(t);return Z.get(e)}};a["a"].use(N["a"]);var B=new N["a"].Store({state:{baseUrl:"",itemInfo:{}},getters:{imgPath:function(t){return"".concat(t.baseUrl,"w370_and_h556_bestv2")}},mutations:{LOAD_CONF:function(t,e){t.baseUrl=e},RESET_ITEM:function(t){a["a"].set(t,"itemInfo",{})},LOAD_ITEM:function(t,e){var n=e.type,r=e.info,s=e.cast,i={type:n,title:"movie"==n?r.title:r.name,year:"movie"==n?r.release_date:r.first_air_date,overview:r.overview,homepage:r.homepage,genres:r.genres,poster_path:r.poster_path,backdrop_path:r.backdrop_path,vote_average:r.vote_average,cast:s.map((function(t){return t.name})).slice(0,6).join(", ")};a["a"].set(t,"itemInfo",i)}},actions:{getInitialData:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Y.getConfiguration();case 3:a=t.sent,n("LOAD_CONF",a.data.images.secure_base_url);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getItem:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e,n){var a,r,s,i,o,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,r=n.id,s=n.type,a("RESET_ITEM"),t.next=5,Promise.all([Y.getItemInfo(r,s),Y.getCast(r,s)]);case 5:i=t.sent,o=Object(j["a"])(i,2),c=o[0],u=o[1],a("LOAD_ITEM",{type:s,info:c.data,cast:u.data.cast});case 10:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}}),tt=n("8c4f"),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"title"},[n("font-awesome-icon",{attrs:{icon:"film",size:"1x"}}),t._v(" Топ 10 фільмів ")],1),n("ItemList",{attrs:{results:t.resultsMovie,type:"movie"},on:{"item-clicked":t.viewDetailInfo}}),n("h2",{staticClass:"title"},[n("font-awesome-icon",{attrs:{icon:"tv",transform:"shrink-3",size:"1x"}}),t._v(" Топ 10 ТВ передач ")],1),n("ItemList",{attrs:{results:t.resultsTv,type:"tv"},on:{"item-clicked":t.viewDetailInfo}})],1)},nt=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies_list"},t._l(t.results,(function(e,a){return n("ItemCard",t._g({key:a,attrs:{item:e,type:t.type}},t.$listeners))})),1)},rt=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.viewDetail(e)}}},[n("figure",[n("img",{attrs:{src:t.urlImg}})]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showIcon,expression:"showIcon"}],staticClass:"icon-container"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.icon,size:"1x"}})],1),n("span",{staticClass:"card-title"},[t._v(t._s(t.title))])])])])},it=[],ot={name:"ItemCard",props:{item:Object,type:String},computed:Object(O["a"])(Object(O["a"])({},Object(N["b"])(["imgPath"])),{},{urlImg:function(){return null!=this.item.poster_path?"".concat(this.imgPath).concat(this.item.poster_path):n("d810")},mediaType:function(){return"multi"==this.type?this.item.media_type:this.type},title:function(){return"movie"==this.mediaType?this.item.title:this.item.name},showIcon:function(){return"multi"==this.type},icon:function(){return"movie"==this.mediaType?"film":"tv"}}),methods:{viewDetail:function(){this.$emit("item-clicked",this.item.id,this.mediaType)}}},ct=ot,ut=(n("708f"),Object(h["a"])(ct,st,it,!1,null,"425de198",null)),lt=ut.exports,ft={name:"ItemList",components:{ItemCard:lt},props:{results:Array,type:String}},ht=ft,pt=(n("bb28"),Object(h["a"])(ht,at,rt,!1,null,"270a98e6",null)),mt=pt.exports,dt={methods:{viewDetailInfo:function(t,e){try{this.$store.dispatch("getItem",{id:t,type:e}),this.$emit("open-modal")}catch(n){this.error=n}}}},vt={name:"TopsView",mixins:[dt],components:{ItemList:mt},data:function(){return{numItems:10,resultsMovie:[],resultsTv:[],loading:!0}},created:function(){this.fetchTops()},methods:{fetchTops:function(){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([Y.getTop("movie"),Y.getTop("tv")]);case 3:n=e.sent,a=Object(j["a"])(n,2),r=a[0],s=a[1],t.resultsMovie=r.data.results.slice(0,t.numItems),t.resultsTv=s.data.results.slice(0,t.numItems),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.error=e.t0;case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()}}},gt=vt,At=Object(h["a"])(gt,et,nt,!1,null,"78d55875",null),_t=At.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"message"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMessage,expression:"showMessage"}]},[t._v(t._s(t.message))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showResults,expression:"showResults"}]},[t._v(" Знайдені результати "),n("span",{staticClass:"query"},[t._v(t._s(t.query))]),t._v(" : "+t._s(t.totalResults)+" ")])]),n("ItemList",{attrs:{results:t.results,type:"multi"},on:{"item-clicked":t.viewDetailInfo}}),n("ItemListMore",{attrs:{loading:t.loading,loadMore:t.loadMore},on:{"view-more":function(e){return t.fetchData("MORE")}}})],1)},wt=[],yt=(n("841c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loadMore,expression:"loadMore"}],staticClass:"more-container"},[t.loading?n("span",[t._v("Loading...")]):n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.viewMoreData(e)}}},[n("span",[t._v("Завантажити більше")])])])])}),It=[],kt={name:"ItemListMore",props:["loading","loadMore"],methods:{viewMoreData:function(){this.$emit("view-more")}}},xt=kt,Ot=(n("9e17"),Object(h["a"])(xt,yt,It,!1,null,"242f241d",null)),Mt=Ot.exports,Ct={name:"SearchView",mixins:[dt],components:{ItemList:mt,ItemListMore:Mt},data:function(){return{query:this.$route.query.q,page:1,searching:!1,loading:!1,error:"",results:[],totalResults:null,totalPages:null}},computed:{loadMore:function(){return this.totalPages>this.page},showResults:function(){return!this.searching&&null!=this.totalResults},showMessage:function(){return!(!this.searching&&""==this.error)},message:function(){return this.searching?"Searching...":this.error}},created:function(){this.fetchData("INIT")},methods:{fetchData:function(t){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return"INIT"==t?(e.page=1,e.searching=!0,e.results=[]):(e.page++,e.loading=!0),n.prev=1,n.next=4,Y.search(e.query,e.page);case 4:a=n.sent,e.results=e.results.concat(a.data.results),e.totalResults=a.data.total_results,e.totalPages=a.data.total_pages,n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),"MORE"==t&&e.page--,e.error=n.t0;case 14:return n.prev=14,e.searching=!1,e.loading=!1,n.finish(14);case 18:case"end":return n.stop()}}),n,null,[[1,10,14,18]])})))()}}},jt=Ct,Dt=(n("c59d"),Object(h["a"])(jt,bt,wt,!1,null,"5ed13b25",null)),Tt=Dt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"title"},[n("font-awesome-icon",{attrs:{icon:"film",size:"1x"}}),t._v(" Фільми ")],1),n("ItemList",{attrs:{results:t.results,type:"movie"},on:{"item-clicked":t.viewDetailInfo}}),n("ItemListMore",{attrs:{loading:t.loading,loadMore:t.loadMore},on:{"view-more":function(e){return t.fetchData("MORE")}}})],1)},Pt=[],Nt={name:"MoviesView",mixins:[dt],components:{ItemList:mt,ItemListMore:Mt},data:function(){return{page:1,loading:!1,error:"",results:[],totalPages:null}},computed:{loadMore:function(){return this.totalPages>this.page},showMessage:function(){return!(!this.searching&&""==this.error)}},created:function(){this.fetchData("INIT")},methods:{fetchData:function(t){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return"INIT"==t?e.page=1:(e.page++,e.loading=!0),n.prev=1,n.next=4,Y.getMoviesUpcoming(e.page);case 4:a=n.sent,e.results=e.results.concat(a.data.results),e.totalPages=a.data.total_pages,n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](1),"MORE"==t&&e.page--,e.error=n.t0;case 13:return n.prev=13,e.loading=!1,n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,9,13,16]])})))()}}},Lt=Nt,St=Object(h["a"])(Lt,Et,Pt,!1,null,"be8c2e5e",null),Rt=St.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"title"},[n("font-awesome-icon",{attrs:{icon:"tv",transform:"shrink-3",size:"1x"}}),t._v(" ТВ Передачі ")],1),n("ItemList",{attrs:{results:t.results,type:"tv"},on:{"item-clicked":t.viewDetailInfo}}),n("ItemListMore",{attrs:{loading:t.loading,loadMore:t.loadMore},on:{"view-more":function(e){return t.fetchData("MORE")}}})],1)},qt=[],zt={name:"TvShowsView",mixins:[dt],components:{ItemList:mt,ItemListMore:Mt},data:function(){return{page:1,loading:!1,error:"",results:[],totalPages:null}},computed:{loadMore:function(){return this.totalPages>this.page},showMessage:function(){return!(!this.searching&&""==this.error)}},created:function(){this.fetchData("INIT")},methods:{fetchData:function(t){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return"INIT"==t?e.page=1:(e.page++,e.loading=!0),n.prev=1,n.next=4,Y.getTvShowsOnAir(e.page);case 4:a=n.sent,e.results=e.results.concat(a.data.results),e.totalPages=a.data.total_pages,n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](1),"MORE"==t&&e.page--,e.error=n.t0;case 13:return n.prev=13,e.loading=!1,n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,9,13,16]])})))()}}},Xt=zt,$t=Object(h["a"])(Xt,Vt,qt,!1,null,"fd465960",null),Ut=$t.exports;a["a"].use(tt["a"]);var Jt=new tt["a"]({base:"/vue-movies/",routes:[{path:"/",redirect:{name:"tops"}},{path:"/tops",name:"tops",component:_t},{path:"/search",name:"search",component:Tt},{path:"/movies",name:"movies",component:Rt},{path:"/tv-shows",name:"tv-shows",component:Ut},{path:"/*",redirect:{name:"tops"}}]}),Ft=n("ecee"),Wt=n("c074"),Qt=n("ad3d");Ft["c"].add(Wt["a"],Wt["e"],Wt["b"],Wt["d"],Wt["c"]),a["a"].component("font-awesome-icon",Qt["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Jt,store:B,render:function(t){return t(J)}}).$mount("#app")},"58d6":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"708f":function(t,e,n){"use strict";var a=n("58d6"),r=n.n(a);r.a},9673:function(t,e,n){},"9c0c":function(t,e,n){},"9e17":function(t,e,n){"use strict";var a=n("9673"),r=n.n(a);r.a},a3f6:function(t,e,n){},a92d:function(t,e,n){"use strict";var a=n("a3f6"),r=n.n(a);r.a},b1ff:function(t,e,n){},b6f6:function(t,e,n){"use strict";var a=n("f461"),r=n.n(a);r.a},bb28:function(t,e,n){"use strict";var a=n("d4e2"),r=n.n(a);r.a},c59d:function(t,e,n){"use strict";var a=n("b1ff"),r=n.n(a);r.a},d3b4:function(t,e,n){"use strict";var a=n("d8ca"),r=n.n(a);r.a},d4e2:function(t,e,n){},d810:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAIsBAMAAAAdZj8gAAAAG1BMVEW9vb3////FxcXm5ube3t7V1dXNzc329vbu7u6rJmYyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADfElEQVR4nO3WQU8bRxgG4KkB28ecmqsFUd0jwiThiJRFydEqccNxUxqbo+UmkCNqEsLP7szs7BpRpEgVVi/Pg1i+WX+7++4yOxACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH/Sm0xORvHn+e2LuH12ezgKp5Oo7qVt2Jsc/pb79mJT7ziE/tGXOpSW7oNnqdgeNYMwKzviAQepYVLV7Z69eNj+IyXvX87f/hXC8Gb3/O/Q+7j74SbM5+/m81H8YD4Pi/mH18ep7328YG8Zwu0fvxyNSks+wZv48SCV4zIIVQgXzcm3v8ZNPMXLuuxZxHPWj5X8OoSt45AucZaK5gLlgybCt1xc5uTD2LFzXVqy1TI0x52WwZ3kg3Fziv6y7Ll4pNRt8t4yhxlOh/VDyfPlLi5y8rNQbmXRHX9Tem/K4E7yi3TCVK82lDwsh9Ncbh8/lPw8F1vTlPxbu7NNvj3Nz7qZSs1gnfxkZ7+pN/fM80QNT3qXDyWvctFbpXCrVP90J/kgfuWWdNfdoCRcxq9UxxvYTPKt43GuV2FxsE7+aTb7PV+23MKrmDw92OaFbJOfh/jLSG/ncNQOuuT9/fA8ds7eHrZ7FrPZrH685P2j0CYPr2+65B+r6iQsJkdfQ5N8UD+U/EV6oCHO53E36JJv1em1XVSvvoza5FVVTR8r+dOrz9N18rA4Dndny2L+56ok718/lHyZD4uBq27QJR/k1rS2bOwNzTM3zvP43VuFe/P8rL3m85j7Sdtdku/E38ynUN6AMuiSv6uq19Ncn24seV4Omwda3U/eLJWxGO8uQ55M43Xy4cls9ib+vEntZdAl/zqbvb3O9XhjyfNy2KyJr+4n39lvi4Nls860N1duIk2e0+1pN2iT5yexKmvoppLnOTIepfL5/eTNSpj/mC5zTzehyn3m9XCwHrTJt/fzXab6cGPJw6KO/8GEnTrs/Guel/U87V6mptTbJU+zp5/+/k/Wgzb5sOmL9d715pL3vt9+rkPvZdqW5E+vrq7KJC3X3IoRf/38vVs421cj3k3/5/UgJn8fj73Mxw3qWH8re/J2+Yjps91mO/pRX++HHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPy//gEo2cMjAP0YFwAAAABJRU5ErkJggg=="},d8ca:function(t,e,n){},d997:function(t,e,n){},e189:function(t,e,n){"use strict";var a=n("d997"),r=n.n(a);r.a},ec3e:function(t,e,n){"use strict";var a=n("35cb"),r=n.n(a);r.a},f461:function(t,e,n){}});
//# sourceMappingURL=app.89eecd4c.js.map