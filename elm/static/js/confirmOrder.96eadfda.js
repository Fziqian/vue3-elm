(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["confirmOrder"],{"13c8":function(t,s,e){var a=e("c3a1"),i=e("36c3"),r=e("355d").f;t.exports=function(t){return function(s){var e,n=i(s),c=a(n),o=c.length,l=0,u=[];while(o>l)r.call(n,e=c[l++])&&u.push(t?[e,n[e]]:n[e]);return u}}},2223:function(t,s,e){},"23a5":function(t,s,e){"use strict";var a=e("3c82"),i=e.n(a);i.a},"3c82":function(t,s,e){},"520a8":function(t,s,e){"use strict";var a=e("2223"),i=e.n(a);i.a},7474:function(t,s,e){"use strict";var a=e("95f2"),i=e.n(a);i.a},"7d6d":function(t,s,e){var a=e("63b6"),i=e("13c8")(!1);a(a.S,"Object",{values:function(t){return i(t)}})},"8a3a":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"alet_container"},[e("section",{staticClass:"tip_text_container"},[t._m(0),e("p",{staticClass:"tip_text"},[t._v(t._s(t.alertText))]),e("div",{staticClass:"confrim",on:{click:t.closeTip}},[t._v("确认")])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip_icon"},[e("span"),e("span")])}],r={data:function(){return{positionY:0,timer:null}},mounted:function(){},props:["alertText"],methods:{closeTip:function(){this.$emit("closeTip")}}},n=r,c=(e("7474"),e("2877")),o=Object(c["a"])(n,a,i,!1,null,"018cc0ae",null);s["a"]=o.exports},"95f2":function(t,s,e){},"9e0a":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"confirmOrderContainer"},[t.showLoading?t._e():e("section",[e("head-top",{attrs:{"head-title":"确认订单",goBack:"true","signin-up":"confirmOrder"}}),e("router-link",{staticClass:"address_container",attrs:{to:{path:"/confirmOrder/chooseAddress",query:{id:t.checkoutData.cart.id,sig:t.checkoutData.sig}}}},[e("div",{staticClass:"address_empty_left"},[e("svg",{staticClass:"location_icon"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#location"}})]),t.choosedAddress?e("div",{staticClass:"address_detail_container"},[e("header",[e("span",[t._v(t._s(t.choosedAddress.name))]),e("span",[t._v(t._s(1==t.choosedAddress.sex?"先生":"女士"))]),e("span",[t._v(t._s(t.choosedAddress.phone))])]),e("div",{staticClass:"address_detail"},[t.choosedAddress.tag?e("span",{style:{backgroundColor:t.iconColor(t.choosedAddress.tag)}},[t._v(t._s(t.choosedAddress.tag))]):t._e(),e("p",[t._v(t._s(t.choosedAddress.address_detail))])])]):e("div",{staticClass:"add_address"},[t._v("请添加一个收货地址")])]),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])]),e("section",{staticClass:"delivery_model container_style"},[e("p",{staticClass:"deliver_text"},[t._v("送达时间")]),e("section",{staticClass:"deliver_time"},[e("p",[t._v("尽快送达 | 预计 "+t._s(t.checkoutData.delivery_reach_time))]),t.checkoutData.cart.is_deliver_by_fengniao?e("p",[t._v("蜂鸟专送")]):t._e()])]),e("section",{staticClass:"pay_way container_style"},[e("header",{staticClass:"header_style"},[e("span",[t._v("支付方式")]),e("div",{staticClass:"more_type",on:{click:t.showPayWayFun}},[e("span",[t._v("在线支付")]),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])]),t._m(0)]),e("section",{staticClass:"food_list"},[t.checkoutData.cart.restaurant_info?e("header",[e("img",{attrs:{src:t.imgBaseUrl+t.checkoutData.cart.restaurant_info.image_path}}),e("span",[t._v(t._s(t.checkoutData.cart.restaurant_info.name))])]):t._e(),t.checkoutData.cart.groups?e("ul",{staticClass:"food_list_ul"},t._l(t.checkoutData.cart.groups[0],function(s){return e("li",{key:s.id,staticClass:"food_item_style"},[e("p",{staticClass:"food_name ellipsis"},[t._v(t._s(s.name))]),e("div",{staticClass:"num_price"},[e("span",[t._v("x "+t._s(s.quantity))]),e("span",[t._v("¥"+t._s(s.price))])])])}),0):t._e(),t.checkoutData.cart.extra?e("div",{staticClass:"food_item_style"},[e("p",{staticClass:"food_name ellipsis"},[t._v(t._s(t.checkoutData.cart.extra[0].name))]),e("div",{staticClass:"num_price"},[e("span"),e("span",[t._v("¥ "+t._s(t.checkoutData.cart.extra[0].price))])])]):t._e(),e("div",{staticClass:"food_item_style"},[e("p",{staticClass:"food_name ellipsis"},[t._v("配送费")]),e("div",{staticClass:"num_price"},[e("span"),e("span",[t._v("¥ "+t._s(t.checkoutData.cart.deliver_amount||0))])])]),e("div",{staticClass:"food_item_style total_price"},[e("p",{staticClass:"food_name ellipsis"},[t._v("订单 ¥"+t._s(t.checkoutData.cart.total))]),e("div",{staticClass:"num_price"},[e("span",[t._v("待支付 ¥"+t._s(t.checkoutData.cart.total))])])])]),e("section",{staticClass:"pay_way container_style"},[e("router-link",{staticClass:"header_style",attrs:{to:{path:"/confirmOrder/remark",query:{id:t.checkoutData.cart.id,sig:t.checkoutData.sig}}}},[e("span",[t._v("订单备注")]),e("div",{staticClass:"more_type"},[e("span",{staticClass:"ellipsis"},[t._v(t._s(t.remarkText||t.inputText?t.remarklist:"口味、偏好等"))]),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])]),e("router-link",{staticClass:"hongbo",class:{support_is_available:t.checkoutData.invoice.is_available},attrs:{to:t.checkoutData.invoice.is_available?"/confirmOrder/invoice":""}},[e("span",[t._v("发票抬头")]),e("span",[t._v("\n                    "+t._s(t.checkoutData.invoice.status_text)+"\n                    "),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])])],1),e("section",{staticClass:"confrim_order"},[e("p",[t._v("待支付 ¥"+t._s(t.checkoutData.cart.total))]),e("p",{on:{click:t.confrimOrder}},[t._v("确认下单")])]),e("transition",{attrs:{name:"fade"}},[t.showPayWay?e("div",{staticClass:"cover",on:{click:t.showPayWayFun}}):t._e()]),e("transition",{attrs:{name:"slid_up"}},[t.showPayWay?e("div",{staticClass:"choose_type_Container"},[e("header",[t._v("支付方式")]),e("ul",t._l(t.checkoutData.payments,function(s){return e("li",{key:s.id,class:{choose:t.payWayId==s.id}},[e("span",[t._v(t._s(s.name)),s.is_online_payment?t._e():e("span",[t._v(t._s(s.description))])]),e("svg",{staticClass:"address_empty_right",on:{click:function(e){return t.choosePayWay(s.is_online_payment,s.id)}}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#select"}})])])}),0)]):t._e()])],1),t.showLoading?e("loading"):t._e(),t.showAlert?e("alert-tip",{attrs:{alertText:t.alertText},on:{closeTip:function(s){t.showAlert=!1}}}):t._e(),e("transition",{attrs:{name:"router-slid",mode:"out-in"}},[e("router-view")],1)],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"hongbo"},[e("span",[t._v("红包")]),e("span",[t._v("暂时只在饿了么 APP 中支持")])])}],r=(e("7f7f"),e("96cf"),e("3b8d")),n=e("db0c"),c=e.n(n),o=(e("ac6a"),e("cebc")),l=e("2f62"),u=e("c440"),h=e("8a3a"),d=e("bf93"),_=e("1273"),p=e("51be"),f={data:function(){return{geohash:"",shopId:null,showLoading:!0,checkoutData:null,shopCart:null,imgBaseUrl:p["b"],showPayWay:!1,payWayId:1,showAlert:!1,alertText:null}},created:function(){this.geohash=this.$route.query.geohash,this.shopId=this.$route.query.shopId,this.INIT_BUYCART(),this.SAVE_SHOPID(this.shopId),this.shopCart=this.cartList[this.shopId]},mounted:function(){this.geohash&&(this.initData(),this.SAVE_GEOHASH(this.geohash)),!this.userInfo||this.userInfo.user_id},components:{headTop:u["a"],alertTip:h["a"],loading:d["a"]},computed:Object(o["a"])({},Object(l["d"])(["cartList","remarkText","inputText","invoice","choosedAddress","userInfo"]),{remarklist:function(){var t=new String;return this.remarkText&&c()(this.remarkText).forEach(function(s){t+=s[1]+"，"}),this.inputText?t+this.inputText:t.substr(0,t.lastIndexOf("，"))}}),methods:Object(o["a"])({},Object(l["c"])(["INIT_BUYCART","SAVE_GEOHASH","CHOOSE_ADDRESS","NEED_VALIDATION","SAVE_CART_ID_SIG","SAVE_ORDER_PARAM","ORDER_SUCCESS","SAVE_SHOPID"]),{initData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=new Array,c()(this.shopCart).forEach(function(t){c()(t).forEach(function(t){c()(t).forEach(function(t){s.push({attrs:[],extra:{},id:t.id,name:t.name,packing_fee:t.packing_fee,price:t.price,quantity:t.num,sku_id:t.sku_id,specs:[t.specs],stock:t.stock})})})}),t.next=4,Object(_["d"])(this.geohash,[s],this.shopId);case 4:this.checkoutData=t.sent,this.SAVE_CART_ID_SIG({cart_id:this.checkoutData.cart.id,sig:this.checkoutData.sig}),this.initAddress(),this.showLoading=!1;case 8:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),initAddress:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.userInfo||!this.userInfo.user_id){t.next=5;break}return t.next=3,Object(_["m"])(this.userInfo.user_id);case 3:s=t.sent,s instanceof Array&&s.length&&this.CHOOSE_ADDRESS({address:s[0],index:0});case 5:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),showPayWayFun:function(){this.showPayWay=!this.showPayWay},choosePayWay:function(t,s){t&&(this.showPayWay=!this.showPayWay,this.payWayId=s)},iconColor:function(t){switch(t){case"公司":return"#4cd964";case"学校":return"#3190e8"}},confrimOrder:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.userInfo&&this.userInfo.user_id){t.next=6;break}return this.showAlert=!0,this.alertText="请登录",t.abrupt("return");case 6:if(this.choosedAddress){t.next=10;break}return this.showAlert=!0,this.alertText="请添加一个收货地址",t.abrupt("return");case 10:return this.SAVE_ORDER_PARAM({user_id:this.userInfo.user_id,cart_id:this.checkoutData.cart.id,address_id:this.choosedAddress.id,description:this.remarklist,entities:this.checkoutData.cart.groups,geohash:this.geohash,sig:this.checkoutData.sig}),t.next=13,Object(_["C"])(this.userInfo.user_id,this.checkoutData.cart.id,this.choosedAddress.id,this.remarklist,this.checkoutData.cart.groups,this.geohash,this.checkoutData.sig);case 13:s=t.sent,s.need_validation?(this.NEED_VALIDATION(s),this.$router.push("/confirmOrder/userValidation")):(this.ORDER_SUCCESS(s),this.$router.push("/confirmOrder/payment"));case 15:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}()}),watch:{userInfo:function(t){t&&t.user_id&&this.initAddress()}}},v=f,m=(e("520a8"),e("2877")),g=Object(m["a"])(v,a,i,!1,null,"dffd75ce",null);s["default"]=g.exports},"9e1c":function(t,s,e){e("7d6d"),t.exports=e("584a").Object.values},b384:function(t,s,e){"use strict";var a=e("d0f6"),i=e.n(a);i.a},bf93:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"loading_container"},[e("div",{staticClass:"load_img",style:{backgroundPositionY:-t.positionY%7*2.5+"rem"}}),e("svg",{staticClass:"load_ellipse",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("ellipse",{staticStyle:{fill:"#ddd",stroke:"none"},attrs:{cx:"26",cy:"10",rx:"26",ry:"10"}})])])},i=[],r={data:function(){return{positionY:0,timer:null}},mounted:function(){var t=this;this.timer=setInterval(function(){t.positionY++},600)},beforeDestroy:function(){clearInterval(this.timer)}},n=r,c=(e("23a5"),e("2877")),o=Object(c["a"])(n,a,i,!1,null,"39cb30c2",null);s["a"]=o.exports},c440:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{attrs:{id:"head_top"}},[t._t("logo"),t._t("search"),t.goBack?e("section",{staticClass:"head_goback",on:{click:function(s){return t.$router.go(-1)}}},[e("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("polyline",{staticStyle:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"},attrs:{points:"12,18 4,9 12,0"}})])]):t._e(),t.signinUp?e("router-link",{staticClass:"head_login",attrs:{to:t.userInfo?"/profile":"/login"}},[t.userInfo?e("svg",{staticClass:"user_avatar"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"}})]):e("span",{staticClass:"login_span"},[t._v("登录|注册")])]):t._e(),t.headTitle?e("section",{staticClass:"title_head ellipsis"},[e("span",{staticClass:"title_text"},[t._v(t._s(t.headTitle))])]):t._e(),t._t("edit"),t._t("msite-title"),t._t("changecity"),t._t("changeLogin")],2)},i=[],r=e("cebc"),n=e("2f62"),c={data:function(){return{}},mounted:function(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:Object(r["a"])({},Object(n["d"])(["userInfo"])),methods:Object(r["a"])({},Object(n["b"])(["getUserInfo"]))},o=c,l=(e("b384"),e("2877")),u=Object(l["a"])(o,a,i,!1,null,"1aac478c",null);s["a"]=u.exports},d0f6:function(t,s,e){},db0c:function(t,s,e){t.exports=e("9e1c")}}]);