(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["addAddress"],{"30ad":function(t,e){t.exports="data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSAiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCOEFBQUFmQ0FZQUFBQWZyaFk1QUFBQUFYTlNSMElBcnM0YzZRQUFBSFJKUkVGVVNBMWpaQ0FUOEU1OS9SK205WE8yS0NPTVRRck5SSXBpYXFzZHRaemFJVXFVZWFQQlRsUXdVVnZSYUxCVE8wU0pNbTgwMklrS0ptb3JZa1N1bmFodE9DSHpSbTZjazlVSUFBVW5jblNOTmlZSUpUQjArWkdiNEVaOWpwNFc2TUlmRFhhNkJETzZKYVBCamg0aWRPRURBT1RaQ3NpRE04SmpBQUFBQUVsRlRrU3VRbUNDIg=="},7474:function(t,e,s){"use strict";var a=s("95f2"),n=s.n(a);n.a},8672:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address_page"},[a("head-top",{attrs:{"head-title":"添加地址","go-back":"true"}}),a("section",{staticClass:"page_text_container"},[a("section",{staticClass:"section_list"},[a("span",{staticClass:"section_left"},[t._v("联系人")]),a("section",{staticClass:"section_right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input_style",attrs:{type:"text",name:"name",placeholder:"你的名字"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("div",{staticClass:"choose_sex"},[a("span",{staticClass:"choose_option"},[a("svg",{staticClass:"address_empty_right",class:{choosed:1==t.sex},on:{click:function(e){return t.chooseSex(1)}}},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#select"}})]),a("span",[t._v("先生")])]),a("span",{staticClass:"choose_option"},[a("svg",{staticClass:"address_empty_right",class:{choosed:2==t.sex},on:{click:function(e){return t.chooseSex(2)}}},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#select"}})]),a("span",[t._v("女士")])])])])]),a("section",{staticClass:"section_list"},[a("span",{staticClass:"section_left"},[t._v("联系电话")]),a("section",{staticClass:"section_right"},[a("div",{staticClass:"phone_add"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"input_style",attrs:{type:"text",name:"phone",placeholder:"你的手机号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),a("img",{attrs:{src:s("30ad"),height:"20",width:"20"},on:{click:function(e){t.phone_bk=!0}}})]),t.phone_bk?a("input",{directives:[{name:"model",rawName:"v-model",value:t.anntherPhoneNumber,expression:"anntherPhoneNumber"}],staticClass:"input_style phone_bk",attrs:{type:"text",name:"anntherPhoneNumber",placeholder:"备选电话"},domProps:{value:t.anntherPhoneNumber},on:{input:function(e){e.target.composing||(t.anntherPhoneNumber=e.target.value)}}}):t._e()])]),a("section",{staticClass:"section_list"},[a("span",{staticClass:"section_left"},[t._v("送餐地址")]),a("section",{staticClass:"section_right"},[a("router-link",{staticClass:"choose_address",attrs:{to:"/confirmOrder/chooseAddress/addAddress/searchAddress",tag:"div"}},[t._v(t._s(t.searchAddress?t.searchAddress.name:"小区/写字楼/学校等"))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address_detail,expression:"address_detail"}],staticClass:"input_style",attrs:{type:"text",name:"address_detail",placeholder:"详细地址（如门牌号等）"},domProps:{value:t.address_detail},on:{input:function(e){e.target.composing||(t.address_detail=e.target.value)}}})],1)]),a("section",{staticClass:"section_list"},[a("span",{staticClass:"section_left"},[t._v("标签")]),a("section",{staticClass:"section_right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],staticClass:"input_style",attrs:{type:"text",name:"tag",placeholder:"无/家/学校/公司"},domProps:{value:t.tag},on:{input:function(e){e.target.composing||(t.tag=e.target.value)}}})])])]),a("div",{staticClass:"determine",on:{click:t.addAddress}},[t._v("确定")]),t.showAlert?a("alert-tip",{attrs:{alertText:t.alertText},on:{closeTip:function(e){t.showAlert=!1}}}):t._e(),a("transition",{attrs:{name:"router-slid",mode:"out-in"}},[a("router-view")],1)],1)},n=[],i=(s("7f7f"),s("96cf"),s("3b8d")),o=s("cebc"),r=s("c440"),c=s("2f62"),l=s("1273"),d=s("8a3a"),h={data:function(){return{name:null,sex:1,phone:null,address_detail:null,tag:"",tag_type:1,phone_bk:!1,anntherPhoneNumber:"",showAlert:!1,alertText:null,poi_type:0}},created:function(){},components:{headTop:r["a"],alertTip:d["a"]},computed:Object(o["a"])({},Object(c["d"])(["searchAddress","geohash","userInfo"])),methods:Object(o["a"])({},Object(c["c"])(["CONFIRM_ADDRESS"]),{chooseSex:function(t){this.sex=t},addAddress:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.userInfo&&this.userInfo.user_id?this.name?this.phone?this.searchAddress?this.address_detail||(this.showAlert=!0,this.alertText="请输入详细地址"):(this.showAlert=!0,this.alertText="请选择地址"):(this.showAlert=!0,this.alertText="请输入电话号码"):(this.showAlert=!0,this.alertText="请输入姓名"):(this.showAlert=!0,this.alertText="请登录"),"家"==this.tag?this.tag_type=2:"学校"==this.tag?this.tag_type=3:"公司"==this.tag&&(this.tag_type=4),t.next=4,Object(l["D"])(this.userInfo.user_id,this.searchAddress.name,this.address_detail,this.geohash,this.name,this.phone,this.anntherPhoneNumber,0,this.sex,this.tag,this.tag_type);case 4:e=t.sent,e.message?(this.showAlert=!0,this.alertText=e.message):(this.CONFIRM_ADDRESS(1),this.$router.go(-1));case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})},p=h,u=(s("9c02"),s("2877")),_=Object(u["a"])(p,a,n,!1,null,"468862e2",null);e["default"]=_.exports},"8a3a":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alet_container"},[s("section",{staticClass:"tip_text_container"},[t._m(0),s("p",{staticClass:"tip_text"},[t._v(t._s(t.alertText))]),s("div",{staticClass:"confrim",on:{click:t.closeTip}},[t._v("确认")])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip_icon"},[s("span"),s("span")])}],i={data:function(){return{positionY:0,timer:null}},mounted:function(){},props:["alertText"],methods:{closeTip:function(){this.$emit("closeTip")}}},o=i,r=(s("7474"),s("2877")),c=Object(r["a"])(o,a,n,!1,null,"018cc0ae",null);e["a"]=c.exports},"95f2":function(t,e,s){},"9c02":function(t,e,s){"use strict";var a=s("bc18"),n=s.n(a);n.a},b384:function(t,e,s){"use strict";var a=s("d0f6"),n=s.n(a);n.a},bc18:function(t,e,s){},c440:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{attrs:{id:"head_top"}},[t._t("logo"),t._t("search"),t.goBack?s("section",{staticClass:"head_goback",on:{click:function(e){return t.$router.go(-1)}}},[s("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[s("polyline",{staticStyle:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"},attrs:{points:"12,18 4,9 12,0"}})])]):t._e(),t.signinUp?s("router-link",{staticClass:"head_login",attrs:{to:t.userInfo?"/profile":"/login"}},[t.userInfo?s("svg",{staticClass:"user_avatar"},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"}})]):s("span",{staticClass:"login_span"},[t._v("登录|注册")])]):t._e(),t.headTitle?s("section",{staticClass:"title_head ellipsis"},[s("span",{staticClass:"title_text"},[t._v(t._s(t.headTitle))])]):t._e(),t._t("edit"),t._t("msite-title"),t._t("changecity"),t._t("changeLogin")],2)},n=[],i=s("cebc"),o=s("2f62"),r={data:function(){return{}},mounted:function(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:Object(i["a"])({},Object(o["d"])(["userInfo"])),methods:Object(i["a"])({},Object(o["b"])(["getUserInfo"]))},c=r,l=(s("b384"),s("2877")),d=Object(l["a"])(c,a,n,!1,null,"1aac478c",null);e["a"]=d.exports},d0f6:function(t,e,s){}}]);