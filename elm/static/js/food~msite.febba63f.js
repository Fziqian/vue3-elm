(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["food~msite"],{"1ddf":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shoplist_container"},[t.shopListArr.length?n("ul",{directives:[{name:"load-more",rawName:"v-load-more",value:t.loaderMore,expression:"loaderMore"}],attrs:{type:"1"}},t._l(t.shopListArr,function(e){return n("router-link",{key:e.id,staticClass:"shop_li",attrs:{to:{path:"shop",query:{geohash:t.geohash,id:e.id}},tag:"li"}},[n("section",[n("img",{staticClass:"shop_img",attrs:{src:t.imgBaseUrl+e.image_path}})]),n("hgroup",{staticClass:"shop_right"},[n("header",{staticClass:"shop_detail_header"},[n("h4",{staticClass:"shop_title ellipsis",class:e.is_premium?"premium":""},[t._v(t._s(e.name))]),n("ul",{staticClass:"shop_detail_ul"},t._l(e.supports,function(e){return n("li",{key:e.id,staticClass:"supports"},[t._v(t._s(e.icon_name))])}),0)]),n("h5",{staticClass:"rating_order_num"},[n("section",{staticClass:"rating_order_num_left"},[n("section",{staticClass:"rating_section"},[n("rating-star",{attrs:{rating:e.rating}}),n("span",{staticClass:"rating_num"},[t._v(t._s(e.rating))])],1),n("section",{staticClass:"order_section"},[t._v("\n\t\t\t\t\t\t\t月售"+t._s(e.recent_order_num)+"单\n\t\t\t\t\t\t")])]),n("section",{staticClass:"rating_order_num_right"},[e.delivery_mode?n("span",{staticClass:"delivery_style delivery_left"},[t._v(t._s(e.delivery_mode.text))]):t._e(),t.zhunshi(e.supports)?n("span",{staticClass:"delivery_style delivery_right"},[t._v("准时达")]):t._e()])]),n("h5",{staticClass:"fee_distance"},[n("p",{staticClass:"fee"},[t._v("\n\t\t\t\t\t\t¥"+t._s(e.float_minimum_order_amount)+"起送\n\t\t\t\t\t\t"),n("span",{staticClass:"segmentation"},[t._v("/")]),t._v("\n\t\t\t\t\t\t"+t._s(e.piecewise_agent_fee.tips)+"\n\t\t\t\t\t")]),n("p",{staticClass:"distance_time"},[Number(e.distance)?n("span",[t._v(t._s(e.distance>1e3?(e.distance/1e3).toFixed(2)+"km":e.distance+"m")+"\n\t\t\t\t\t\t\t"),n("span",{staticClass:"segmentation"},[t._v("/")])]):n("span",[t._v(t._s(e.distance))]),n("span",{staticClass:"segmentation"},[t._v("/")]),n("span",{staticClass:"order_time"},[t._v(t._s(e.order_lead_time))])])])])])}),1):n("ul",{staticClass:"animation_opactiy"},t._l(10,function(t){return n("li",{key:t,staticClass:"list_back_li"},[n("img",{staticClass:"list_back_svg",attrs:{src:s("d76c")}})])}),0),t.touchend?n("p",{staticClass:"empty_data"},[t._v("没有更多了")]):t._e(),t.showBackStatus?n("aside",{staticClass:"return_top",on:{click:t.backTop}},[n("svg",{staticClass:"back_top_svg"},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#backtop"}})])]):t._e(),n("div",{ref:"abc",staticStyle:{"background-color":"red"}}),n("transition",{attrs:{name:"loading"}},[n("loading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1)],1)},i=[],a=(s("ac6a"),s("75fc")),r=(s("96cf"),s("3b8d")),o=s("cebc"),c=s("2f62"),l=s("1273"),u=s("51be"),d=s("3f55"),h=s("f300"),p=s("bf93"),f=s("958b"),g={data:function(){return{offset:0,shopListArr:[],preventRepeatReuqest:!1,showBackStatus:!1,showLoading:!0,touchend:!1,imgBaseUrl:u["b"]}},mounted:function(){this.initData()},components:{loading:p["a"],ratingStar:f["a"]},props:["restaurantCategoryId","restaurantCategoryIds","sortByType","deliveryMode","supportIds","confirmSelect","geohash"],mixins:[h["b"],h["a"]],computed:Object(o["a"])({},Object(c["d"])(["latitude","longitude"])),updated:function(){},methods:{initData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["M"])(this.latitude,this.longitude,this.offset,this.restaurantCategoryId);case 2:e=t.sent,this.shopListArr=Object(a["a"])(e),e.length<20&&(this.touchend=!0),this.hideLoading(),Object(d["f"])(function(t){s.showBackStatus=t});case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loaderMore:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.touchend){t.next=2;break}return t.abrupt("return");case 2:if(!this.preventRepeatReuqest){t.next=4;break}return t.abrupt("return");case 4:return this.showLoading=!0,this.preventRepeatReuqest=!0,this.offset+=20,t.next=9,Object(l["M"])(this.latitude,this.longitude,this.offset,this.restaurantCategoryId);case 9:if(e=t.sent,this.hideLoading(),this.shopListArr=[].concat(Object(a["a"])(this.shopListArr),Object(a["a"])(e)),!(e.length<20)){t.next=15;break}return this.touchend=!0,t.abrupt("return");case 15:this.preventRepeatReuqest=!1;case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),backTop:function(){Object(d["a"])(document.body,{scrollTop:"0"},400,"ease-out")},listenPropChange:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.showLoading=!0,this.offset=0,t.next=4,Object(l["M"])(this.latitude,this.longitude,this.offset,"",this.restaurantCategoryIds,this.sortByType,this.deliveryMode,this.supportIds);case 4:e=t.sent,this.hideLoading(),this.shopListArr=Object(a["a"])(e);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),hideLoading:function(){this.showLoading=!1},zhunshi:function(t){var e;return t instanceof Array&&t.length?t.forEach(function(t){"准"===t.icon_name&&(e=!0)}):e=!1,e}},watch:{restaurantCategoryIds:function(t){this.listenPropChange()},sortByType:function(t){this.listenPropChange()},confirmSelect:function(t){this.listenPropChange()}}},_=g,m=(s("9fe8"),s("2877")),v=Object(m["a"])(_,n,i,!1,null,"3a40fd4d",null);e["a"]=v.exports},"23a5":function(t,e,s){"use strict";var n=s("3c82"),i=s.n(n);i.a},"3c82":function(t,e,s){},7080:function(t,e,s){},"958b":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rating_container"},[s("section",{staticClass:"star_container"},t._l(5,function(t){return s("svg",{key:t,staticClass:"grey_fill"},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"}})])}),0),s("div",{staticClass:"star_overflow",style:"width:"+2*t.rating/5+"rem"},[s("section",{staticClass:"star_container"},t._l(5,function(t){return s("svg",{key:t,staticClass:"orange_fill"},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"}})])}),0)])])},i=[],a={data:function(){return{}},mounted:function(){},props:["rating"]},r=a,o=(s("d767"),s("2877")),c=Object(o["a"])(r,n,i,!1,null,"94be79a0",null);e["a"]=c.exports},"9fe8":function(t,e,s){"use strict";var n=s("bf6e"),i=s.n(n);i.a},b384:function(t,e,s){"use strict";var n=s("d0f6"),i=s.n(n);i.a},bf6e:function(t,e,s){},bf93:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading_container"},[s("div",{staticClass:"load_img",style:{backgroundPositionY:-t.positionY%7*2.5+"rem"}}),s("svg",{staticClass:"load_ellipse",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[s("ellipse",{staticStyle:{fill:"#ddd",stroke:"none"},attrs:{cx:"26",cy:"10",rx:"26",ry:"10"}})])])},i=[],a={data:function(){return{positionY:0,timer:null}},mounted:function(){var t=this;this.timer=setInterval(function(){t.positionY++},600)},beforeDestroy:function(){clearInterval(this.timer)}},r=a,o=(s("23a5"),s("2877")),c=Object(o["a"])(r,n,i,!1,null,"39cb30c2",null);e["a"]=c.exports},c440:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{attrs:{id:"head_top"}},[t._t("logo"),t._t("search"),t.goBack?s("section",{staticClass:"head_goback",on:{click:function(e){return t.$router.go(-1)}}},[s("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[s("polyline",{staticStyle:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"},attrs:{points:"12,18 4,9 12,0"}})])]):t._e(),t.signinUp?s("router-link",{staticClass:"head_login",attrs:{to:t.userInfo?"/profile":"/login"}},[t.userInfo?s("svg",{staticClass:"user_avatar"},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"}})]):s("span",{staticClass:"login_span"},[t._v("登录|注册")])]):t._e(),t.headTitle?s("section",{staticClass:"title_head ellipsis"},[s("span",{staticClass:"title_text"},[t._v(t._s(t.headTitle))])]):t._e(),t._t("edit"),t._t("msite-title"),t._t("changecity"),t._t("changeLogin")],2)},i=[],a=s("cebc"),r=s("2f62"),o={data:function(){return{}},mounted:function(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:Object(a["a"])({},Object(r["d"])(["userInfo"])),methods:Object(a["a"])({},Object(r["b"])(["getUserInfo"]))},c=o,l=(s("b384"),s("2877")),u=Object(l["a"])(c,n,i,!1,null,"1aac478c",null);e["a"]=u.exports},d0f6:function(t,e,s){},d767:function(t,e,s){"use strict";var n=s("7080"),i=s.n(n);i.a},d76c:function(t,e,s){t.exports=s.p+"static/img/shopback.bed6b343.svg"},f300:function(t,e,s){"use strict";s.d(e,"b",function(){return i}),s.d(e,"a",function(){return a});var n=s("3f55"),i=(s("51be"),{directives:{"load-more":{bind:function(t,e){var s,i,a,r,o,c,l,u,d=window.screen.height,h=t.attributes.type&&t.attributes.type.value,p=2;2==h?(l=t,u=t.children[0]):(l=document.body,u=t),t.addEventListener("touchstart",function(){s=u.clientHeight,2==h&&(s=s),i=t.offsetTop,a=Object(n["c"])(t,"paddingBottom"),r=Object(n["c"])(t,"marginBottom")},!1),t.addEventListener("touchmove",function(){g()},!1),t.addEventListener("touchend",function(){c=l.scrollTop,f()},!1);var f=function t(){o=requestAnimationFrame(function(){l.scrollTop!=c?(c=l.scrollTop,t()):(cancelAnimationFrame(o),s=u.clientHeight,g())})},g=function(){l.scrollTop+d>=s+i+a+r-p&&e.value()}}}}}),a={methods:{getImgPath:function(t){var e;if(!t)return"//elm.cangdu.org/img/default.jpg";e=-1!==t.indexOf("jpeg")?".jpeg":".png";var s="/"+t.substr(0,1)+"/"+t.substr(1,2)+"/"+t.substr(3)+e;return"https://fuss10.elemecdn.com"+s}}}}}]);