(function(){var e={3466:function(e,t,n){"use strict";var r=n(5130),o=n(6768),i=n(6450);function a(e,t){const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(i.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(n)])),_:1})}var u=n(1241);const s={},c=(0,u.A)(s,[["render",a]]);var l=c,d=n(1387),f=n(4232),p=n(249),m=n(9562);const v=["src"],h={key:0,class:"app-header__title"},g={class:"app-header__actions"};function b(e,t,n,r,i,a){const u=(0,o.g2)("view-toggle-button"),s=(0,o.g2)("open-basket-button");return(0,o.uX)(),(0,o.Wv)(p.z,{class:"app-header"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",{class:"app-header__logo",onClick:t[0]||(t[0]=(...e)=>r.openHomePage&&r.openHomePage(...e))},[(0,o.bF)(m.mM,null,{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:r.logo,class:(0,f.C4)({mini:!r.isHomePage}),alt:"Logo",key:"logo"},null,10,v)])),_:1})]),r.pageTitle?((0,o.uX)(),(0,o.CE)("div",h,(0,f.v_)(r.pageTitle),1)):(0,o.Q3)("",!0),(0,o.Lk)("div",g,[(0,o.bF)(u,{class:"mr-1"}),(0,o.bF)(s)])])),_:1})}n(4114);var k=n(5360),y=n(3462),w=n(2807),_=n(9669),E={__name:"OpenBasketButton",setup(e){const t=(0,d.lq)(),n=(0,k.e)(),r=(0,o.EW)((()=>n.basket.length)),i=(0,o.EW)((()=>"home"===t.name)),a=(0,o.EW)((()=>0===r.value));return(e,t)=>i.value?((0,o.uX)(),(0,o.Wv)(w.D,{key:0,variant:"text",icon:"mdi-shopping",color:"primary",disabled:a.value,to:{name:"basket"}},{default:(0,o.k6)((()=>[a.value?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(y.Q,{key:0,content:r.value,color:"info"},{default:(0,o.k6)((()=>[(0,o.bF)(_.w,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-shopping")])),_:1})])),_:1},8,["content"]))])),_:1},8,["disabled"])):(0,o.Q3)("",!0)}};const O=E;var S=O;function j(e,t,n,r,i,a){return r.isButtonVisible?((0,o.uX)(),(0,o.Wv)(w.D,{key:0,variant:"text",icon:r.buttonIcon,color:"primary",onClick:r.toggleView},null,8,["icon","onClick"])):(0,o.Q3)("",!0)}var C=n(8353),F=n(6258),A={name:"ViewToggleButton",setup(){const e=(0,d.lq)(),t=(0,F.l)(),{smAndDown:n}=(0,C._F)(),r=(0,o.EW)((()=>{const t="home"===e.name;return n.value&&t})),i=(0,o.EW)((()=>"map"===t.currentHomeView)),a=(0,o.EW)((()=>i.value?"mdi-list-box":"mdi-map")),u=()=>{const e=i.value?"list":"map";t.setHomeView(e)};return{toggleView:u,buttonIcon:a,isButtonVisible:r}}};const N=(0,u.A)(A,[["render",j]]);var T=N,W={name:"AppHeader",components:{OpenBasketButton:S,ViewToggleButton:T},props:{title:String},setup(){const e=(0,d.lq)(),t=(0,d.rd)(),r=(0,o.EW)((()=>"/"===e.path)),i=(0,o.EW)((()=>r.value?null:e.meta?.title)),a=(0,o.EW)((()=>{const e=r.value?"logo":"logo-mini";return n(7477)(`./${e}.svg`)})),u=()=>{r.value||t.push("/")};return{logo:a,isHomePage:r,pageTitle:i,openHomePage:u}}};const x=(0,u.A)(W,[["render",b]]);var B=x,L=n(2598),P=n(8477),V={__name:"AppLayout",setup(e){return(e,t)=>{const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(L.L,{class:"rounded rounded-md"},{default:(0,o.k6)((()=>[(0,o.bF)(B),(0,o.bF)(P.Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(n)])),_:1})])),_:1})}}};const D=V;var H=D;const G=[{path:"/",component:H,children:[{path:"",name:"home",component:()=>Promise.all([n.e(763),n.e(114),n.e(19),n.e(527)]).then(n.bind(n,5527))},{path:"basket",name:"basket",meta:{title:"Order"},component:()=>Promise.all([n.e(763),n.e(114),n.e(975)]).then(n.bind(n,4975))},{path:"vendor/:id",name:"vendor",props:!0,meta:{title:"Store Details"},component:()=>Promise.all([n.e(763),n.e(19),n.e(270)]).then(n.bind(n,8270))},{path:"/:catchAll(.*)",name:"not-found",meta:{title:"Not Found"},component:()=>n.e(412).then(n.bind(n,8412))}]}],X=(0,d.aE)({history:(0,d.LA)(),routes:G});var q=X,I=n(5234);const M=(0,I.Ey)();var Q=M,U=(n(5524),n(5790));const z=(0,U.$N)({icons:{defaultSet:"mdi"},theme:{themes:{light:{dark:!1,colors:{primary:"#228B22",secondary:"#8B4513",inactive:"#F5F5F5"}}}}});var J=z,Z=n(5384);const Y=e=>{const t=localStorage.getItem("language");let n=navigator.language||"";n.includes("-")&&(n=n.split("-").shift());let r=t||n;return e.includes(r)?r:"en"},$=()=>{const e=n(2350),t={};return e.keys().forEach((n=>{const r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){const o=r[1];t[o]=e(n)}})),{locale:Y(Object.keys(t)),fallbackLocale:"en",messages:t}},K=(0,Z.hU)($());var R=K,ee=n(5847);(0,r.Ef)(l).use(Q).use(q).use(J).use(R).use(ee.A).mount("#app")},6258:function(e,t,n){"use strict";n.d(t,{l:function(){return o}});var r=n(5234);const o=(0,r.nY)("layout",{state:()=>({homeView:null}),getters:{currentHomeView:e=>e.homeView||"map"},actions:{setHomeView(e){this.homeView=e}}})},5360:function(e,t,n){"use strict";n.d(t,{e:function(){return i}});n(4114);var r=n(5234),o=n(9634);const i=(0,r.nY)("order",{state:()=>({orders:(0,o.g)("user-orders")||[],basket:(0,o.g)("user-basket")||[]}),actions:{addToBasket(e){this.basket.push(e),(0,o.G)("user-basket",this.basket)},removeFromBasket(e){this.basket=this.basket.filter((({id:t})=>t!==e)),(0,o.G)("user-basket",this.basket)},updateProductQuantity(e,t){const n=this.basket.find((({id:t})=>t===e));n&&(n.quantity=t,(0,o.G)("user-basket",this.basket))},addOrder(e){this.orders.push(e),(0,o.G)("user-orders",this.orders)},removeOrder(e){this.orders=this.orders.filter((t=>t.id!==e)),(0,o.G)("user-orders",this.orders)}}})},9634:function(e,t,n){"use strict";n.d(t,{G:function(){return r},g:function(){return o}});const r=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},o=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null}},7477:function(e,t,n){var r={"./logo-mini.svg":7334,"./logo.svg":5318};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=7477},2350:function(e,t,n){var r={"./en.json":1166,"./pl.json":6277};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=2350},7334:function(e,t,n){"use strict";e.exports=n.p+"img/logo-mini.d31d3d4d.svg"},5318:function(e,t,n){"use strict";e.exports=n.p+"img/logo.6023b469.svg"},1166:function(e){"use strict";e.exports=JSON.parse('{"common":{"save":"Save","send":"Send","done":"Done","search":"Search","close":"Close","edit":"Edit","reset":"Reset"}}')},6277:function(e){"use strict";e.exports=JSON.parse('{"common":{"save":"Zapisz","send":"Wyślij","done":"Gotowe","search":"Szukaj","close":"Zamknij","edit":"Edytuj","reset":"Zresetuj"}}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{19:"6b6c4b28",114:"50ab8315",270:"409d9ad3",412:"7080ecf3",527:"b183d3dc",763:"77840359",975:"02aa42aa"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{114:"379a5808",270:"08c08905",412:"89cd1881",527:"ee6cfb8a",763:"81050fac",975:"8258c7b9"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="fairr-web-client:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var u=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=u,a.parentNode&&a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=u,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={114:1,270:1,412:1,527:1,763:1,975:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkfairr_web_client"]=self["webpackChunkfairr_web_client"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(3466)}));r=n.O(r)})();
//# sourceMappingURL=app.a0ed0502.js.map