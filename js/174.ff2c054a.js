"use strict";(self["webpackChunkfairr_web_client"]=self["webpackChunkfairr_web_client"]||[]).push([[174],{7819:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var l=a(6768),r=a(537),n=a(3813),i=a(9669);function o(e,t,a,o,s,u){const d=(0,l.g2)("selected-products-table"),c=(0,l.g2)("order-form");return(0,l.uX)(),(0,l.Wv)(n.I,null,{default:(0,l.k6)((()=>[(0,l.bF)(r.P,{items:o.breadcrumbs},{divider:(0,l.k6)((()=>[(0,l.bF)(i.w,{icon:"mdi-chevron-right"})])),_:1},8,["items"]),(0,l.bF)(d),(0,l.bF)(c)])),_:1})}var s=a(4232),u=a(2807),d=a(4593),c=a(1606),p=a(697),v=a(1560),m=a(3948),b=a(5130),f=(a(2936),a(1622)),g=a(4577),y=a(5035),F=a(6935),k=a(1950),C=a(2067),h=a(9629),x=a(144),V=a(4587),S=a(1247),_=a(9094),W=a(4600);const I=(0,V.j)({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...(0,y.V)(),...(0,g.tG)()},"VTextarea"),w=(0,S.RW)()({name:"VTextarea",directives:{Intersect:h.A},inheritAttrs:!1,props:I(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:a,emit:r,slots:n}=t;const i=(0,C.q)(e,"modelValue"),{isFocused:o,focus:s,blur:u}=(0,F.i)(e),d=(0,l.EW)((()=>"function"===typeof e.counterValue?e.counterValue(i.value):(i.value||"").toString().length)),c=(0,l.EW)((()=>a.maxlength?a.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function p(t,a){e.autofocus&&t&&a[0].target?.focus?.()}const v=(0,x.KR)(),m=(0,x.KR)(),h=(0,x.IJ)(""),V=(0,x.KR)(),S=(0,l.EW)((()=>e.persistentPlaceholder||o.value||e.active));function I(){V.value!==document.activeElement&&V.value?.focus(),o.value||s()}function w(e){I(),r("click:control",e)}function A(e){r("mousedown:control",e)}function B(t){t.stopPropagation(),I(),(0,l.dY)((()=>{i.value="",(0,_.P)(e["onClick:clear"],t)}))}function R(t){const a=t.target;if(i.value=a.value,e.modelModifiers?.trim){const e=[a.selectionStart,a.selectionEnd];(0,l.dY)((()=>{a.selectionStart=e[0],a.selectionEnd=e[1]}))}}const D=(0,x.KR)(),E=(0,x.KR)(+e.rows),K=(0,l.EW)((()=>["plain","underlined"].includes(e.variant)));function N(){e.autoGrow&&(0,l.dY)((()=>{if(!D.value||!m.value)return;const t=getComputedStyle(D.value),a=getComputedStyle(m.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),r=D.value.scrollHeight,n=parseFloat(t.lineHeight),i=Math.max(parseFloat(e.rows)*n+l,parseFloat(a.getPropertyValue("--v-input-control-height"))),o=parseFloat(e.maxRows)*n+l||1/0,s=(0,_.qE)(r??0,i,o);E.value=Math.floor((s-l)/n),h.value=(0,_.Dg)(s)}))}let P;return(0,l.nT)((()=>{e.autoGrow||(E.value=+e.rows)})),(0,l.sV)(N),(0,l.wB)(i,N),(0,l.wB)((()=>e.rows),N),(0,l.wB)((()=>e.maxRows),N),(0,l.wB)((()=>e.density),N),(0,l.wB)(D,(e=>{e?(P=new ResizeObserver(N),P.observe(D.value)):P?.disconnect()})),(0,l.xo)((()=>{P?.disconnect()})),(0,W.C)((()=>{const t=!!(n.counter||e.counter||e.counterValue),r=!(!t&&!n.details),[s,F]=(0,_.ph)(a),{modelValue:k,...C}=y.Z.filterProps(e),x=(0,g.jz)(e);return(0,l.bF)(y.Z,(0,l.v6)({ref:v,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":K.value},e.class],style:e.style},s,C,{centerAffix:1===E.value&&!K.value,focused:o.value}),{...n,default:t=>{let{id:a,isDisabled:r,isDirty:s,isReadonly:d,isValid:c}=t;return(0,l.bF)(g.xR,(0,l.v6)({ref:m,style:{"--v-textarea-control-height":h.value},onClick:w,onMousedown:A,"onClick:clear":B,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},x,{id:a.value,active:S.value||s.value,centerAffix:1===E.value&&!K.value,dirty:s.value||e.dirty,disabled:r.value,focused:o.value,error:!1===c.value}),{...n,default:t=>{let{props:{class:a,...n}}=t;return(0,l.bF)(l.FK,null,[e.prefix&&(0,l.bF)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,l.bo)((0,l.bF)("textarea",(0,l.v6)({ref:V,class:a,value:i.value,onInput:R,autofocus:e.autofocus,readonly:d.value,disabled:r.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:I,onBlur:u},n,F),null),[[(0,l.gN)("intersect"),{handler:p},null,{once:!0}]]),e.autoGrow&&(0,l.bo)((0,l.bF)("textarea",{class:[a,"v-textarea__sizer"],id:`${n.id}-sizer`,"onUpdate:modelValue":e=>i.value=e,ref:D,readonly:!0,"aria-hidden":"true"},null),[[b.Jo,i.value]]),e.suffix&&(0,l.bF)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:r?a=>(0,l.bF)(l.FK,null,[n.details?.(a),t&&(0,l.bF)(l.FK,null,[(0,l.bF)("span",null,null),(0,l.bF)(f.p,{active:e.persistentCounter||o.value,value:d.value,max:c.value,disabled:e.disabled},n.counter)])]):void 0})})),(0,k.O)({},v,m,V)}});function A(e,t,a,r,i,o){const b=(0,l.g2)("auth-dialog");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(n.I,null,{default:(0,l.k6)((()=>[(0,l.bF)(d.J,null,{default:(0,l.k6)((()=>[(0,l.bF)(c.r,null,{default:(0,l.k6)((()=>[(0,l.eW)("Summary")])),_:1}),(0,l.bF)(p.O,null,{default:(0,l.k6)((()=>[(0,l.bF)(v.n,{ref:"form",modelValue:r.isValid,"onUpdate:modelValue":t[5]||(t[5]=e=>r.isValid=e)},{default:(0,l.k6)((()=>[(0,l.bF)(m.W,{label:e.$t("form.name"),modelValue:r.formData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>r.formData.name=e),rules:[r.rules.required]},null,8,["label","modelValue","rules"]),(0,l.bF)(m.W,{label:e.$t("form.email"),modelValue:r.formData.email,"onUpdate:modelValue":t[1]||(t[1]=e=>r.formData.email=e),rules:[r.rules.required,r.rules.email]},null,8,["label","modelValue","rules"]),(0,l.bF)(m.W,{label:e.$t("form.address"),modelValue:r.formData.address,"onUpdate:modelValue":t[2]||(t[2]=e=>r.formData.address=e),rules:[r.rules.required]},null,8,["label","modelValue","rules"]),(0,l.bF)(m.W,{label:e.$t("form.phone"),modelValue:r.formData.phone,"onUpdate:modelValue":t[3]||(t[3]=e=>r.formData.phone=e),rules:[r.rules.required,r.rules.phone]},null,8,["label","modelValue","rules"]),(0,l.bF)(w,{label:e.$t("form.message"),modelValue:r.formData.message,"onUpdate:modelValue":t[4]||(t[4]=e=>r.formData.message=e),"auto-grow":"",rules:[r.rules.maxLength(500)]},null,8,["label","modelValue","rules"]),(0,l.bF)(u.D,{disabled:r.isSubmitDisabled,onClick:r.handleSubmit,color:"primary"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.$t("common.send")),1)])),_:1},8,["disabled","onClick"])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.bF)(b,{context:"order",onAuthComplete:r.handleAuthComplete,modelValue:r.isLoginDialogOpen,"onUpdate:modelValue":t[6]||(t[6]=e=>r.isLoginDialogOpen=e),onClosed:t[7]||(t[7]=e=>r.isLoginDialogOpen=!1)},null,8,["onAuthComplete","modelValue"])],64)}a(4114);var B=a(1387),R=a(5360);const D={required:e=>!!e||"This field is required",email:e=>/.+@.+\..+/.test(e)||"Enter a valid email address",phone:e=>/^\d{10,15}$/.test(e)||"Enter a valid phone number (10-15 digits)",maxLength:e=>t=>t&&t.length<=e||`Message must be less than ${e} characters`};var E=a(7882),K=a(9004),N={name:"OrderForm",components:{AuthDialog:K.A},setup(){const e=(0,x.KR)(!1),t=(0,x.KR)(null),a=(0,x.KR)(!1),r=(0,x.KR)({name:null,email:null,address:null,phone:null,message:null}),n=(0,B.rd)(),i=(0,E.k)(),o=(0,l.EW)((()=>i.profile)),s=(0,l.EW)((()=>(0,R.e)().basket)),u=(0,l.EW)((()=>0===s.value.length||!e.value)),d=()=>{e.value&&(o.value?(0,R.e)().submitOrder({description:r.value.message,items:s.value}).then((e=>{p(e)})):a.value=!0)},c=()=>{a.value=!1,console.log("profile.value",o.value),o.value?.details||(0,E.k)().updateProfile(r.value)},p=e=>{e&&n.push("/orders/"+e)};return(0,l.wB)(o,(e=>{e&&(r.value.name=e.name,r.value.email=e.email||e.details?.email,r.value.phone=e.details?.phoneNumber),setTimeout((()=>{t.value&&t.value.validate()}))}),{immediate:!0}),{rules:D,isLoginDialogOpen:a,isValid:e,formData:r,form:t,isSubmitDisabled:u,handleAuthComplete:c,handleSubmit:d}}},P=a(1241);const X=(0,P.A)(N,[["render",A]]);var O=X,T=a(5523),q=a(2689),L=a(2598);const $={class:"v-row-group__header"},j=["colspan"],z={class:"v-data-table__tr"},G={key:0};function U(e,t,a,r,o,d){return(0,l.uX)(),(0,l.Wv)(n.I,null,{default:(0,l.k6)((()=>[(0,l.bF)(q.Py,{class:"products-table elevation-1 mt-0",headers:r.tableHeaders,items:r.basketItems,"items-per-page":-1,"hide-default-footer":"","mobile-breakpoint":0,"group-by":[{key:"storeId"}],"item-value":"id","disable-sort":""},{"group-header":(0,l.k6)((({item:e,columns:t,toggleGroup:a,isGroupOpen:n})=>[(0,l.Lk)("template",{ref:()=>{n(e)||r.loaded||a(e)}},null,512),(0,l.Lk)("tr",$,[(0,l.Lk)("td",{colspan:t.length-1},[(0,l.bF)(L.L,{class:"products-table__vendor"},{default:(0,l.k6)((()=>[(0,l.bF)(i.w,{class:"pr-2"},{default:(0,l.k6)((()=>[(0,l.eW)("mdi-chevron-right")])),_:1}),(0,l.eW)((0,s.v_)(r.getStoreName(e.items)),1)])),_:2},1024)],8,j)])])),"item.title":(0,l.k6)((({item:e})=>[(0,l.Lk)("span",null,(0,s.v_)(e.title),1)])),"item.quantity":(0,l.k6)((({item:e})=>[(0,l.bF)(u.D,{icon:"mdi-plus",variant:"text",size:"small",onClick:t=>r.changeQuantity(e,"add")},null,8,["onClick"]),(0,l.bF)(T.x,{label:""},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.quantity),1)])),_:2},1024),(0,l.bF)(u.D,{icon:"mdi-minus",variant:"text",size:"small",onClick:t=>r.changeQuantity(e,"remove")},null,8,["onClick"])])),"item.price":(0,l.k6)((({item:e})=>[(0,l.bF)(T.x,{color:"secondary"},{default:(0,l.k6)((()=>[(0,l.eW)("$"+(0,s.v_)(e.price),1)])),_:2},1024)])),"item.total":(0,l.k6)((({item:e})=>[(0,l.bF)(T.x,{color:"primary"},{default:(0,l.k6)((()=>[(0,l.eW)("$"+(0,s.v_)(r.getTotalPriceForItem(e)),1)])),_:2},1024)])),"item.actions":(0,l.k6)((({item:e})=>[(0,l.bF)(u.D,{icon:"mdi-trash-can-outline",color:"error",variant:"text",onClick:t=>r.removeFromBasket(e)},null,8,["onClick"])])),"body.append":(0,l.k6)((({columns:t})=>[(0,l.Lk)("tr",z,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t,((t,a)=>((0,l.uX)(),(0,l.CE)("td",{key:t.text},[0===a?((0,l.uX)(),(0,l.CE)("div",G,[(0,l.Lk)("strong",null,(0,s.v_)(e.$t("products.total")),1)])):(0,l.Q3)("",!0),"total"===t.key?((0,l.uX)(),(0,l.Wv)(T.x,{key:1,color:"primary",label:""},{default:(0,l.k6)((()=>[(0,l.eW)(" $"+(0,s.v_)(r.totalPrice),1)])),_:1})):(0,l.Q3)("",!0)])))),128))])])),_:1},8,["headers","items"])])),_:1})}var M=a(5384),Q={name:"SelectedProductsTable",setup(){const{t:e}=(0,M.s9)(),t=(0,l.EW)((()=>(0,R.e)().basket)),a=(0,x.KR)(!1),r=(0,x.KR)([{title:e("products.product"),value:"title"},{title:e("products.quantity"),value:"quantity"},{title:e("products.price"),value:"price"},{title:e("products.totalPrice"),value:"total"},{title:"",value:"actions"}]),n=e=>{(0,R.e)().removeFromBasket(e.id)},i=e=>(e.price*(e?.quantity||1)).toFixed(2),o=(0,l.EW)((()=>{const e=t.value.reduce(((e,t)=>e+t.price*(t?.quantity||1)),0);return e.toFixed(2)})),s=(e,t="add")=>{const{quantity:a,id:l}=e,r="add"===t?a+1:a-1;r<1||(0,R.e)().updateProductQuantity(l,r)},u=e=>e[0].raw?.storeName;return(0,l.sV)((()=>{a.value=!0})),{basketItems:t,tableHeaders:r,totalPrice:o,loaded:a,getStoreName:u,removeFromBasket:n,changeQuantity:s,getTotalPriceForItem:i}}};const H=(0,P.A)(Q,[["render",U]]);var J=H,Z={components:{SelectedProductsTable:J,OrderForm:O},setup(){const e=[{title:"Home",disabled:!1,href:"/"},{title:"Basket",disabled:!0}];return{breadcrumbs:e}}};const Y=(0,P.A)(Z,[["render",o]]);var ee=Y},537:function(e,t,a){a.d(t,{P:function(){return x}});var l=a(6768),r=a(9262),n=a(4587),i=a(1247),o=a(4600);const s=(0,n.j)({divider:[Number,String],...(0,r.u)()},"VBreadcrumbsDivider"),u=(0,i.RW)()({name:"VBreadcrumbsDivider",props:s(),setup(e,t){let{slots:a}=t;return(0,o.C)((()=>(0,l.bF)("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[a?.default?.()??e.divider]))),{}}});var d=a(2886),c=a(6314),p=a(4663);const v=(0,n.j)({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...(0,r.u)(),...(0,c.WC)(),...(0,p.X)({tag:"li"})},"VBreadcrumbsItem"),m=(0,i.RW)()({name:"VBreadcrumbsItem",props:v(),setup(e,t){let{slots:a,attrs:r}=t;const n=(0,c.iE)(e,r),i=(0,l.EW)((()=>e.active||n.isActive?.value)),s=(0,l.EW)((()=>i.value?e.activeColor:e.color)),{textColorClasses:u,textColorStyles:p}=(0,d.aH)(s);return(0,o.C)((()=>(0,l.bF)(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":i.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:i.value&&e.activeClass},u.value,e.class],style:[p.value,e.style],"aria-current":i.value?"page":void 0},{default:()=>[n.isLink.value?(0,l.bF)("a",{class:"v-breadcrumbs-item--link",href:n.href.value,"aria-current":i.value?"page":void 0,onClick:n.navigate},[a.default?.()??e.title]):a.default?.()??e.title]}))),{}}});var b=a(7852),f=a(9669),g=a(2858),y=a(2191),F=a(4581),k=a(3240),C=a(144);const h=(0,n.j)({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:F.TX,items:{type:Array,default:()=>[]},...(0,r.u)(),...(0,y.r)(),...(0,k.S)(),...(0,p.X)({tag:"ul"})},"VBreadcrumbs"),x=(0,i.RW)()({name:"VBreadcrumbs",props:h(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:r,backgroundColorStyles:n}=(0,d.z6)((0,C.lW)(e,"bgColor")),{densityClasses:i}=(0,y.Q)(e),{roundedClasses:s}=(0,k.v)(e);(0,g.Uh)({VBreadcrumbsDivider:{divider:(0,C.lW)(e,"divider")},VBreadcrumbsItem:{activeClass:(0,C.lW)(e,"activeClass"),activeColor:(0,C.lW)(e,"activeColor"),color:(0,C.lW)(e,"color"),disabled:(0,C.lW)(e,"disabled")}});const c=(0,l.EW)((()=>e.items.map((e=>"string"===typeof e?{item:{title:e},raw:e}:{item:e,raw:e}))));return(0,o.C)((()=>{const t=!(!a.prepend&&!e.icon);return(0,l.bF)(e.tag,{class:["v-breadcrumbs",r.value,i.value,s.value,e.class],style:[n.value,e.style]},{default:()=>[t&&(0,l.bF)("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?(0,l.bF)(b.K,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):(0,l.bF)(f.w,{key:"prepend-icon",start:!0,icon:e.icon},null)]),c.value.map(((e,t,r)=>{let{item:n,raw:i}=e;return(0,l.bF)(l.FK,null,[a.item?.({item:n,index:t})??(0,l.bF)(m,(0,l.v6)({key:t,disabled:t>=r.length-1},"string"===typeof n?{title:n}:n),{default:a.title?()=>a.title?.({item:n,index:t}):void 0}),t<r.length-1&&(0,l.bF)(u,null,{default:a.divider?()=>a.divider?.({item:i,index:t}):void 0})])})),a.default?.()]})})),{}}})},4593:function(e,t,a){a.d(t,{J:function(){return D}});var l=a(6768),r=a(3745),n=a(5832),i=a(1606),o=a(3416),s=a(7852),u=a(9669),d=a(9262),c=a(2191),p=a(4581),v=a(4587),m=a(1247),b=a(4600);const f=(0,v.j)({appendAvatar:String,appendIcon:p.TX,prependAvatar:String,prependIcon:p.TX,subtitle:[String,Number],title:[String,Number],...(0,d.u)(),...(0,c.r)()},"VCardItem"),g=(0,m.RW)()({name:"VCardItem",props:f(),setup(e,t){let{slots:a}=t;return(0,b.C)((()=>{const t=!(!e.prependAvatar&&!e.prependIcon),r=!(!t&&!a.prepend),d=!(!e.appendAvatar&&!e.appendIcon),c=!(!d&&!a.append),p=!(null==e.title&&!a.title),v=!(null==e.subtitle&&!a.subtitle);return(0,l.bF)("div",{class:["v-card-item",e.class],style:e.style},[r&&(0,l.bF)("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?(0,l.bF)(s.K,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):(0,l.bF)(l.FK,null,[e.prependAvatar&&(0,l.bF)(o.y,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&(0,l.bF)(u.w,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),(0,l.bF)("div",{class:"v-card-item__content"},[p&&(0,l.bF)(i.r,{key:"title"},{default:()=>[a.title?.()??e.title]}),v&&(0,l.bF)(n.Z,{key:"subtitle"},{default:()=>[a.subtitle?.()??e.subtitle]}),a.default?.()]),c&&(0,l.bF)("div",{key:"append",class:"v-card-item__append"},[a.append?(0,l.bF)(s.K,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):(0,l.bF)(l.FK,null,[e.appendIcon&&(0,l.bF)(u.w,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&(0,l.bF)(o.y,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])})),{}}});var y=a(697),F=a(5126),k=a(9923),C=a(2542),h=a(7018),x=a(773),V=a(9788),S=a(8184),_=a(3240),W=a(6314),I=a(4663),w=a(7664),A=a(2428),B=a(759);const R=(0,v.j)({appendAvatar:String,appendIcon:p.TX,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:p.TX,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...(0,k.r)(),...(0,d.u)(),...(0,c.r)(),...(0,C.X)(),...(0,h.s)(),...(0,x.gi)(),...(0,V.M)(),...(0,S.S)(),...(0,_.S)(),...(0,W.WC)(),...(0,I.X)(),...(0,w.yx)(),...(0,A.gI)({variant:"elevated"})},"VCard"),D=(0,m.RW)()({name:"VCard",directives:{Ripple:B.n},props:R(),setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=(0,w.NX)(e),{borderClasses:o}=(0,k.M)(e),{colorClasses:u,colorStyles:d,variantClasses:p}=(0,A.rn)(e),{densityClasses:v}=(0,c.Q)(e),{dimensionStyles:m}=(0,C.S)(e),{elevationClasses:f}=(0,h.j)(e),{loaderClasses:I}=(0,x.pn)(e),{locationStyles:B}=(0,V.z)(e),{positionClasses:R}=(0,S.J)(e),{roundedClasses:D}=(0,_.v)(e),E=(0,W.iE)(e,a),K=(0,l.EW)((()=>!1!==e.link&&E.isLink.value)),N=(0,l.EW)((()=>!e.disabled&&!1!==e.link&&(e.link||E.isClickable.value)));return(0,b.C)((()=>{const t=K.value?"a":e.tag,a=!(!n.title&&null==e.title),c=!(!n.subtitle&&null==e.subtitle),b=a||c,k=!!(n.append||e.appendAvatar||e.appendIcon),C=!!(n.prepend||e.prependAvatar||e.prependIcon),h=!(!n.image&&!e.image),V=b||C||k,S=!(!n.text&&null==e.text);return(0,l.bo)((0,l.bF)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":N.value},i.value,o.value,u.value,v.value,f.value,I.value,R.value,D.value,p.value,e.class],style:[d.value,m.value,B.value,e.style],href:E.href.value,onClick:N.value&&E.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[h&&(0,l.bF)("div",{key:"image",class:"v-card__image"},[n.image?(0,l.bF)(s.K,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):(0,l.bF)(F.y,{key:"image-img",cover:!0,src:e.image},null)]),(0,l.bF)(x.E2,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:n.loader}),V&&(0,l.bF)(g,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),S&&(0,l.bF)(y.O,{key:"text"},{default:()=>[n.text?.()??e.text]}),n.default?.(),n.actions&&(0,l.bF)(r.S,null,{default:n.actions}),(0,A.wN)(N.value,"v-card")]}),[[(0,l.gN)("ripple"),N.value&&e.ripple]])})),{}}})},3745:function(e,t,a){a.d(t,{S:function(){return s}});var l=a(6768),r=a(9262),n=a(2858),i=a(1247),o=a(4600);const s=(0,i.RW)()({name:"VCardActions",props:(0,r.u)(),setup(e,t){let{slots:a}=t;return(0,n.Uh)({VBtn:{slim:!0,variant:"text"}}),(0,o.C)((()=>(0,l.bF)("div",{class:["v-card-actions",e.class],style:e.style},[a.default?.()]))),{}}})},5832:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(6768),r=a(9262),n=a(4663),i=a(4587),o=a(1247),s=a(4600);const u=(0,i.j)({opacity:[Number,String],...(0,r.u)(),...(0,n.X)()},"VCardSubtitle"),d=(0,o.RW)()({name:"VCardSubtitle",props:u(),setup(e,t){let{slots:a}=t;return(0,s.C)((()=>(0,l.bF)(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a))),{}}})},697:function(e,t,a){a.d(t,{O:function(){return d}});var l=a(6768),r=a(9262),n=a(4663),i=a(4587),o=a(1247),s=a(4600);const u=(0,i.j)({opacity:[Number,String],...(0,r.u)(),...(0,n.X)()},"VCardText"),d=(0,o.RW)()({name:"VCardText",props:u(),setup(e,t){let{slots:a}=t;return(0,s.C)((()=>(0,l.bF)(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a))),{}}})},1606:function(e,t,a){a.d(t,{r:function(){return r}});var l=a(2586);const r=(0,l.G)("v-card-title")},1560:function(e,t,a){a.d(t,{n:function(){return p}});var l=a(6768),r=a(9262),n=a(3651),i=a(1950),o=a(144),s=a(4587),u=a(1247),d=a(4600);const c=(0,s.j)({...(0,r.u)(),...(0,n.pE)()},"VForm"),p=(0,u.RW)()({name:"VForm",props:c(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:a,emit:r}=t;const s=(0,n.DG)(e),u=(0,o.KR)();function c(e){e.preventDefault(),s.reset()}function p(e){const t=e,a=s.validate();t.then=a.then.bind(a),t.catch=a.catch.bind(a),t.finally=a.finally.bind(a),r("submit",t),t.defaultPrevented||a.then((e=>{let{valid:t}=e;t&&u.value?.submit()})),t.preventDefault()}return(0,d.C)((()=>(0,l.bF)("form",{ref:u,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:c,onSubmit:p},[a.default?.(s)]))),(0,i.O)(s,u)}})}}]);
//# sourceMappingURL=174.ff2c054a.js.map