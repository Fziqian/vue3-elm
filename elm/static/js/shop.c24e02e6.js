(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"0b5c":function(t,s,e){t.exports=e.p+"static/img/shop_back_svg.bb4fe42d.svg"},"13c8":function(t,s,e){var i=e("c3a1"),a=e("36c3"),o=e("355d").f;t.exports=function(t){return function(s){var e,n=a(s),r=i(n),c=r.length,l=0,d=[];while(c>l)o.call(n,e=r[l++])&&d.push(t?[e,n[e]]:n[e]);return d}}},"1d43":function(t,s,e){"use strict";var i=e("a5c2"),a=e.n(i);a.a},"23a5":function(t,s,e){"use strict";var i=e("3c82"),a=e.n(i);a.a},"319f":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"cart_module"},[t.foods.specifications.length?e("section",{staticClass:"choose_specification"},[e("section",{staticClass:"choose_icon_container"},[e("transition",{attrs:{name:"showReduce"}},[t.foodNum?e("svg",{staticClass:"specs_reduce_icon",on:{click:t.showReduceTip}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-minus"}})]):t._e()]),e("transition",{attrs:{name:"fade"}},[t.foodNum?e("span",{staticClass:"cart_num"},[t._v(t._s(t.foodNum))]):t._e()]),e("span",{staticClass:"show_chooselist",on:{click:function(s){return t.showChooseList(t.foods)}}},[t._v("选规格")])],1)]):e("section",{staticClass:"cart_button"},[e("transition",{attrs:{name:"showReduce"}},[t.foodNum?e("span",{on:{click:function(s){return t.removeOutCart(t.foods.category_id,t.foods.item_id,t.foods.specfoods[0].food_id,t.foods.specfoods[0].name,t.foods.specfoods[0].price,"",t.foods.specfoods[0].packing_fee,t.foods.specfoods[0].sku_id,t.foods.specfoods[0].stock)}}},[e("svg",[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-minus"}})])]):t._e()]),e("transition",{attrs:{name:"fade"}},[t.foodNum?e("span",{staticClass:"cart_num"},[t._v(t._s(t.foodNum))]):t._e()]),e("svg",{staticClass:"add_icon",on:{click:function(s){return t.addToCart(t.foods.category_id,t.foods.item_id,t.foods.specfoods[0].food_id,t.foods.specfoods[0].name,t.foods.specfoods[0].price,"",t.foods.specfoods[0].packing_fee,t.foods.specfoods[0].sku_id,t.foods.specfoods[0].stock,s)}}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-add"}})])],1)])},a=[],o=e("db0c"),n=e.n(o),r=(e("ac6a"),e("5176")),c=e.n(r),l=e("cebc"),d=e("2f62"),h={data:function(){return{showMoveDot:[]}},mounted:function(){},computed:Object(l["a"])({},Object(d["d"])(["cartList"]),{shopCart:function(){return c()({},this.cartList[this.shopId])},foodNum:function(){var t=this.foods.category_id,s=this.foods.item_id;if(this.shopCart&&this.shopCart[t]&&this.shopCart[t][s]){var e=0;return n()(this.shopCart[t][s]).forEach(function(t,s){e+=t.num}),e}return 0}}),props:["foods","shopId"],methods:Object(l["a"])({},Object(d["c"])(["ADD_CART","REDUCE_CART"]),{removeOutCart:function(t,s,e,i,a,o,n,r,c){this.foodNum>0&&this.REDUCE_CART({shopid:this.shopId,category_id:t,item_id:s,food_id:e,name:i,price:a,specs:o,packing_fee:n,sku_id:r,stock:c})},addToCart:function(t,s,e,i,a,o,n,r,c,l){this.ADD_CART({shopid:this.shopId,category_id:t,item_id:s,food_id:e,name:i,price:a,specs:o,packing_fee:n,sku_id:r,stock:c});var d=l.target.getBoundingClientRect().left,h=l.target.getBoundingClientRect().bottom;this.showMoveDot.push(!0),this.$emit("showMoveDot",this.showMoveDot,d,h)},showChooseList:function(t){this.$emit("showChooseList",t)},showReduceTip:function(){this.$emit("showReduceTip")}})},u=h,_=(e("8e95"),e("2877")),p=Object(_["a"])(u,i,a,!1,null,"05f04264",null);s["a"]=p.exports},"3c82":function(t,s,e){},"6e7b":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t.showLoading?t._e():i("section",{staticClass:"shop_container"},[i("nav",{staticClass:"goback",on:{click:t.goback}},[i("svg",{attrs:{width:"4rem",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[i("polyline",{staticStyle:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"3"},attrs:{points:"12,18 4,9 12,0"}})])]),i("header",{ref:"shopheader",staticClass:"shop_detail_header",style:{zIndex:t.showActivities?"14":"10"}},[i("img",{staticClass:"header_cover_img",attrs:{src:t.imgBaseUrl+t.shopDetailData.image_path}}),i("section",{staticClass:"description_header"},[i("router-link",{staticClass:"description_top",attrs:{to:"/shop/shopDetail"}},[i("section",{staticClass:"description_left"},[i("img",{attrs:{src:t.imgBaseUrl+t.shopDetailData.image_path}})]),i("section",{staticClass:"description_right"},[i("h4",{staticClass:"description_title ellipsis"},[t._v(t._s(t.shopDetailData.name))]),i("p",{staticClass:"description_text"},[t._v("商家配送／"+t._s(t.shopDetailData.order_lead_time)+"分钟送达／配送费¥"+t._s(t.shopDetailData.float_delivery_fee))]),i("p",{staticClass:"description_promotion ellipsis"},[t._v("公告："+t._s(t.promotionInfo))])]),i("svg",{staticClass:"description_arrow",attrs:{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[i("path",{attrs:{d:"M0 0 L8 7 L0 14",stroke:"#fff","stroke-width":"1",fill:"none"}})])]),t.shopDetailData.activities.length?i("footer",{staticClass:"description_footer",on:{click:t.showActivitiesFun}},[i("p",{staticClass:"ellipsis"},[i("span",{staticClass:"tip_icon",style:{backgroundColor:"#"+t.shopDetailData.activities[0].icon_color,borderColor:"#"+t.shopDetailData.activities[0].icon_color}},[t._v(t._s(t.shopDetailData.activities[0].icon_name))]),i("span",[t._v(t._s(t.shopDetailData.activities[0].description)+"（APP专享）")])]),i("p",[t._v(t._s(t.shopDetailData.activities.length)+"个活动")]),i("svg",{staticClass:"footer_arrow"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-left"}})])]):t._e()],1)]),i("transition",{attrs:{name:"fade"}},[t.showActivities?i("section",{staticClass:"activities_details"},[i("h2",{staticClass:"activities_shoptitle"},[t._v(t._s(t.shopDetailData.name))]),i("h3",{staticClass:"activities_ratingstar"},[i("rating-star",{attrs:{rating:t.shopDetailData.rating}})],1),i("section",{staticClass:"activities_list"},[i("header",{staticClass:"activities_title_style"},[i("span",[t._v("优惠信息")])]),i("ul",t._l(t.shopDetailData.activities,function(s){return i("li",{key:s.id},[i("span",{staticClass:"activities_icon",style:{backgroundColor:"#"+s.icon_color,borderColor:"#"+s.icon_color}},[t._v(t._s(s.icon_name))]),i("span",[t._v(t._s(s.description)+"（APP专享）")])])}),0)]),i("section",{staticClass:"activities_shopinfo"},[i("header",{staticClass:"activities_title_style"},[i("span",[t._v("商家公告")])]),i("p",[t._v(t._s(t.promotionInfo))])]),i("svg",{staticClass:"close_activities",attrs:{width:"60",height:"60"},on:{click:function(s){return s.stopPropagation(),t.showActivitiesFun(s)}}},[i("circle",{attrs:{cx:"30",cy:"30",r:"25",stroke:"#555","stroke-width":"1",fill:"none"}}),i("line",{staticStyle:{stroke:"#999","stroke-width":"2"},attrs:{x1:"22",y1:"38",x2:"38",y2:"22"}}),i("line",{staticStyle:{stroke:"#999","stroke-width":"2"},attrs:{x1:"22",y1:"22",x2:"38",y2:"38"}})])]):t._e()]),i("section",{ref:"chooseType",staticClass:"change_show_type"},[i("div",[i("span",{class:{activity_show:"food"==t.changeShowType},on:{click:function(s){t.changeShowType="food"}}},[t._v("商品")])]),i("div",[i("span",{class:{activity_show:"rating"==t.changeShowType},on:{click:function(s){t.changeShowType="rating"}}},[t._v("评价")])])]),i("transition",{attrs:{name:"fade-choose"}},[i("section",{directives:[{name:"show",rawName:"v-show",value:"food"==t.changeShowType,expression:"changeShowType =='food'"}],staticClass:"food_container"},[i("section",{staticClass:"menu_container"},[i("section",{ref:"wrapperMenu",staticClass:"menu_left",attrs:{id:"wrapper_menu"}},[i("ul",t._l(t.menuList,function(s,e){return i("li",{key:e,staticClass:"menu_left_li",class:{activity_menu:e==t.menuIndex},on:{click:function(s){return t.chooseMenu(e)}}},[s.icon_url?i("img",{attrs:{src:t.getImgPath(s.icon_url)}}):t._e(),i("span",[t._v(t._s(s.name))]),t.categoryNum[e]&&1==s.type?i("span",{staticClass:"category_num"},[t._v(t._s(t.categoryNum[e]))]):t._e()])}),0)]),i("section",{ref:"menuFoodList",staticClass:"menu_right"},[i("ul",t._l(t.menuList,function(s,e){return i("li",{key:e},[i("header",{staticClass:"menu_detail_header"},[i("section",{staticClass:"menu_detail_header_left"},[i("strong",{staticClass:"menu_item_title"},[t._v(t._s(s.name))]),i("span",{staticClass:"menu_item_description"},[t._v(t._s(s.description))])]),i("span",{staticClass:"menu_detail_header_right",on:{click:function(s){return t.showTitleDetail(e)}}}),e==t.TitleDetailIndex?i("p",{staticClass:"description_tip"},[i("span",[t._v(t._s(s.name))]),t._v("\n                                        "+t._s(s.description)+"\n                                    ")]):t._e()]),t._l(s.foods,function(s,e){return i("section",{key:e,staticClass:"menu_detail_list"},[i("router-link",{staticClass:"menu_detail_link",attrs:{to:{path:"shop/foodDetail",query:{image_path:s.image_path,description:s.description,month_sales:s.month_sales,name:s.name,rating:s.rating,rating_count:s.rating_count,satisfy_rate:s.satisfy_rate,foods:s,shopId:t.shopId}},tag:"div"}},[i("section",{staticClass:"menu_food_img"},[i("img",{attrs:{src:t.imgBaseUrl+s.image_path}})]),i("section",{staticClass:"menu_food_description"},[i("h3",{staticClass:"food_description_head"},[i("strong",{staticClass:"description_foodname"},[t._v(t._s(s.name))]),s.attributes.length?i("ul",{staticClass:"attributes_ul"},t._l(s.attributes,function(s,e){return s?i("li",{key:e,class:{attribute_new:"新"==s.icon_name},style:{color:"#"+s.icon_color,borderColor:"#"+s.icon_color}},[i("p",{style:{color:"新"==s.icon_name?"#fff":"#"+s.icon_color}},[t._v(t._s("新"==s.icon_name?"新品":s.icon_name))])]):t._e()}),0):t._e()]),i("p",{staticClass:"food_description_content"},[t._v(t._s(s.description))]),i("p",{staticClass:"food_description_sale_rating"},[i("span",[t._v("月售"+t._s(s.month_sales)+"份")]),i("span",[t._v("好评率"+t._s(s.satisfy_rate)+"%")])]),s.activity?i("p",{staticClass:"food_activity"},[i("span",{style:{color:"#"+s.activity.image_text_color,borderColor:"#"+s.activity.icon_color}},[t._v(t._s(s.activity.image_text))])]):t._e()])]),i("footer",{staticClass:"menu_detail_footer"},[i("section",{staticClass:"food_price"},[i("span",[t._v("¥")]),i("span",[t._v(t._s(s.specfoods[0].price))]),s.specifications.length?i("span",[t._v("起")]):t._e()]),i("buy-cart",{attrs:{shopId:t.shopId,foods:s},on:{moveInCart:t.listenInCart,showChooseList:t.showChooseList,showReduceTip:t.showReduceTip,showMoveDot:t.showMoveDotFun}})],1)],1)})],2)}),0)])]),i("section",{staticClass:"buy_cart_container"},[i("section",{staticClass:"cart_icon_num",on:{click:t.toggleCartList}},[i("div",{ref:"cartContainer",staticClass:"cart_icon_container",class:{cart_icon_activity:t.totalPrice>0,move_in_cart:t.receiveInCart}},[t.totalNum?i("span",{staticClass:"cart_list_length"},[t._v("\n                                "+t._s(t.totalNum)+"\n                            ")]):t._e(),i("svg",{staticClass:"cart_icon"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-icon"}})])]),i("div",{staticClass:"cart_num"},[i("div",[t._v("¥ "+t._s(t.totalPrice))]),i("div",[t._v("配送费¥"+t._s(t.deliveryFee))])])]),i("section",{staticClass:"gotopay",class:{gotopay_acitvity:t.minimumOrderAmount<=0}},[t.minimumOrderAmount>0?i("span",{staticClass:"gotopay_button_style"},[t._v("还差¥"+t._s(t.minimumOrderAmount)+"起送")]):i("router-link",{staticClass:"gotopay_button_style",attrs:{to:{path:"/confirmOrder",query:{geohash:t.geohash,shopId:t.shopId}}}},[t._v("去结算")])],1)]),i("transition",{attrs:{name:"toggle-cart"}},[i("section",{directives:[{name:"show",rawName:"v-show",value:t.showCartList&&t.cartFoodList.length,expression:"showCartList&&cartFoodList.length"}],staticClass:"cart_food_list"},[i("header",[i("h4",[t._v("购物车")]),i("div",{on:{click:t.clearCart}},[i("svg",[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-remove"}})]),i("span",{staticClass:"clear_cart"},[t._v("清空")])])]),i("section",{staticClass:"cart_food_details",attrs:{id:"cartFood"}},[i("ul",t._l(t.cartFoodList,function(s,e){return i("li",{key:e,staticClass:"cart_food_li"},[i("div",{staticClass:"cart_list_num"},[i("p",{staticClass:"ellipsis"},[t._v(t._s(s.name))]),i("p",{staticClass:"ellipsis"},[t._v(t._s(s.specs))])]),i("div",{staticClass:"cart_list_price"},[i("span",[t._v("¥")]),i("span",[t._v(t._s(s.price))])]),i("section",{staticClass:"cart_list_control"},[i("span",{on:{click:function(e){return t.removeOutCart(s.category_id,s.item_id,s.food_id,s.name,s.price,s.specs)}}},[i("svg",[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-minus"}})])]),i("span",{staticClass:"cart_num"},[t._v(t._s(s.num))]),i("svg",{staticClass:"cart_add",on:{click:function(e){return t.addToCart(s.category_id,s.item_id,s.food_id,s.name,s.price,s.specs)}}},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-add"}})])])])}),0)])])]),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showCartList&&t.cartFoodList.length,expression:"showCartList&&cartFoodList.length"}],staticClass:"screen_cover",on:{click:t.toggleCartList}})])],1)]),i("transition",{attrs:{name:"fade-choose"}},[i("section",{directives:[{name:"show",rawName:"v-show",value:"rating"==t.changeShowType,expression:"changeShowType =='rating'"}],staticClass:"rating_container",attrs:{id:"ratingContainer"}},[i("section",{directives:[{name:"load-more",rawName:"v-load-more",value:t.loaderMoreRating,expression:"loaderMoreRating"}],attrs:{type:"2"}},[i("section",[i("header",{staticClass:"rating_header"},[i("section",{staticClass:"rating_header_left"},[i("p",[t._v(t._s(t.shopDetailData.rating))]),i("p",[t._v("综合评价")]),i("p",[t._v("高于周边商家"+t._s((100*t.ratingScoresData.compare_rating).toFixed(1))+"%")])]),i("section",{staticClass:"rating_header_right"},[i("p",[i("span",[t._v("服务态度")]),i("rating-star",{attrs:{rating:t.ratingScoresData.service_score}}),i("span",{staticClass:"rating_num"},[t._v(t._s(t.ratingScoresData.service_score.toFixed(1)))])],1),i("p",[i("span",[t._v("菜品评价")]),i("rating-star",{attrs:{rating:t.ratingScoresData.food_score}}),i("span",{staticClass:"rating_num"},[t._v(t._s(t.ratingScoresData.food_score.toFixed(1)))])],1),i("p",[i("span",[t._v("送达时间")]),i("span",{staticClass:"delivery_time"},[t._v(t._s(t.shopDetailData.order_lead_time)+"分钟")])])])]),i("ul",{staticClass:"tag_list_ul"},t._l(t.ratingTagsList,function(s,e){return i("li",{key:e,class:{unsatisfied:s.unsatisfied,tagActivity:t.ratingTageIndex==e},on:{click:function(i){return t.changeTgeIndex(e,s.name)}}},[t._v(t._s(s.name)+"("+t._s(s.count)+")")])}),0),i("ul",{staticClass:"rating_list_ul"},t._l(t.ratingList,function(s,e){return i("li",{key:e,staticClass:"rating_list_li"},[i("img",{staticClass:"user_avatar",attrs:{src:t.getImgPath(s.avatar)}}),i("section",{staticClass:"rating_list_details"},[i("header",[i("section",{staticClass:"username_star"},[i("p",{staticClass:"username"},[t._v(t._s(s.username))]),i("p",{staticClass:"star_desc"},[i("rating-star",{attrs:{rating:s.rating_star}}),i("span",{staticClass:"time_spent_desc"},[t._v(t._s(s.time_spent_desc))])],1)]),i("time",{staticClass:"rated_at"},[t._v(t._s(s.rated_at))])]),i("ul",{staticClass:"food_img_ul"},t._l(s.item_ratings,function(s,e){return i("li",{key:e},[s.image_hash?i("img",{attrs:{src:t.getImgPath(s.image_hash)}}):t._e()])}),0),i("ul",{staticClass:"food_name_ul"},t._l(s.item_ratings,function(s,e){return i("li",{key:e,staticClass:"ellipsis"},[t._v("\n                                            "+t._s(s.food_name)+"\n                                        ")])}),0)])])}),0)])])])])],1),i("section",[i("transition",{attrs:{name:"fade"}},[t.showSpecs?i("div",{staticClass:"specs_cover",on:{click:t.showChooseList}}):t._e()]),i("transition",{attrs:{name:"fadeBounce"}},[t.showSpecs?i("div",{staticClass:"specs_list"},[i("header",{staticClass:"specs_list_header"},[i("h4",{staticClass:"ellipsis"},[t._v(t._s(t.choosedFoods.name))]),i("svg",{staticClass:"specs_cancel",attrs:{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},on:{click:t.showChooseList}},[i("line",{attrs:{x1:"0",y1:"0",x2:"16",y2:"16",stroke:"#666","stroke-width":"1.2"}}),i("line",{attrs:{x1:"0",y1:"16",x2:"16",y2:"0",stroke:"#666","stroke-width":"1.2"}})])]),i("section",{staticClass:"specs_details"},[i("h5",{staticClass:"specs_details_title"},[t._v(t._s(t.choosedFoods.specifications[0].name))]),i("ul",t._l(t.choosedFoods.specifications[0].values,function(s,e){return i("li",{class:{specs_activity:e==t.specsIndex},on:{click:function(s){return t.chooseSpecs(e)}}},[t._v("\n                            "+t._s(s)+"\n                        ")])}),0)]),i("footer",{staticClass:"specs_footer"},[i("div",{staticClass:"specs_price"},[i("span",[t._v("¥ ")]),i("span",[t._v(t._s(t.choosedFoods.specfoods[t.specsIndex].price))])]),i("div",{staticClass:"specs_addto_cart",on:{click:function(s){return t.addSpecs(t.choosedFoods.category_id,t.choosedFoods.item_id,t.choosedFoods.specfoods[t.specsIndex].food_id,t.choosedFoods.specfoods[t.specsIndex].name,t.choosedFoods.specfoods[t.specsIndex].price,t.choosedFoods.specifications[0].values[t.specsIndex],t.choosedFoods.specfoods[t.specsIndex].packing_fee,t.choosedFoods.specfoods[t.specsIndex].sku_id,t.choosedFoods.specfoods[t.specsIndex].stock)}}},[t._v("加入购物车")])])]):t._e()])],1),i("transition",{attrs:{name:"fade"}},[t.showDeleteTip?i("p",{staticClass:"show_delete_tip"},[t._v("多规格商品只能去购物车删除哦")]):t._e()]),t._l(t.showMoveDot,function(s,e){return i("transition",{attrs:{appear:""},on:{"after-appear":t.afterEnter,"before-appear":t.beforeEnter}},[s?i("span",{staticClass:"move_dot"},[i("svg",{staticClass:"move_liner"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-add"}})])]):t._e()])}),i("loading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading||t.loadRatings,expression:"showLoading || loadRatings"}]}),t.showLoading?i("section",{staticClass:"animation_opactiy shop_back_svg_container"},[i("img",{attrs:{src:e("0b5c")}})]):t._e(),i("transition",{attrs:{name:"router-slid",mode:"out-in"}},[i("router-view")],1)],2)},a=[],o=e("75fc"),n=(e("7f7f"),e("a4bb")),r=e.n(n),c=e("774e"),l=e.n(c),d=(e("96cf"),e("3b8d")),h=(e("ac6a"),e("cebc")),u=e("2f62"),_=e("1273"),p=e("bf93"),f=e("319f"),g=e("958b"),m=e("f300"),v=e("51be"),C=e("323e"),w={data:function(){return{geohash:"",shopId:null,showLoading:!0,changeShowType:"food",shopDetailData:null,showActivities:!1,menuList:[],menuIndex:0,menuIndexChange:!0,shopListTop:[],TitleDetailIndex:null,categoryNum:[],totalPrice:0,cartFoodList:[],showCartList:!1,receiveInCart:!1,ratingList:null,ratingOffset:0,ratingScoresData:null,ratingTagsList:null,ratingTageIndex:0,preventRepeatRequest:!1,ratingTagName:"",loadRatings:!1,foodScroll:null,showSpecs:!1,specsIndex:0,choosedFoods:null,showDeleteTip:!1,showMoveDot:[],windowHeight:null,elLeft:0,elBottom:0,ratingScroll:null,imgBaseUrl:v["b"]}},created:function(){this.geohash=this.$route.query.geohash,this.shopId=this.$route.query.id,this.INIT_BUYCART()},mounted:function(){this.initData(),this.windowHeight=window.innerHeight},beforeDestroy:function(){},mixins:[m["b"],m["a"]],components:{loading:p["a"],ratingStar:g["a"],buyCart:f["a"]},computed:Object(h["a"])({},Object(u["d"])(["latitude","longitude","cartList"]),{promotionInfo:function(){return this.shopDetailData.promotion_info||"欢迎光临，用餐高峰期请提前下单，谢谢。"},deliveryFee:function(){return this.shopDetailData?this.shopDetailData.float_delivery_fee:null},minimumOrderAmount:function(){return this.shopDetailData?this.shopDetailData.float_minimum_order_amount-this.totalPrice:null},shopCart:function(){return Object(h["a"])({},this.cartList[this.shopId])},totalNum:function(){var t=0;return this.cartFoodList.forEach(function(s){t+=s.num}),t}}),methods:Object(h["a"])({},Object(u["c"])(["RECORD_ADDRESS","ADD_CART","REDUCE_CART","INIT_BUYCART","CLEAR_CART","RECORD_SHOPDETAIL"]),{initData:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.latitude){t.next=5;break}return t.next=3,Object(_["z"])(this.geohash);case 3:s=t.sent,this.RECORD_ADDRESS(s);case 5:return t.next=7,Object(_["L"])(this.shopId,this.latitude,this.longitude);case 7:return this.shopDetailData=t.sent,t.next=10,Object(_["l"])(this.shopId);case 10:return this.menuList=t.sent,t.next=13,Object(_["r"])(this.shopId,this.ratingOffset);case 13:return this.ratingList=t.sent,t.next=16,Object(_["E"])(this.shopId);case 16:return this.ratingScoresData=t.sent,t.next=19,Object(_["F"])(this.shopId);case 19:this.ratingTagsList=t.sent,this.RECORD_SHOPDETAIL(this.shopDetailData),this.hideLoading();case 22:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),getFoodListHeight:function(){var t=this,s=this.$refs.menuFoodList;if(s){var e=l()(s.children[0].children);e.forEach(function(s,e){t.shopListTop[e]=s.offsetTop}),this.listenScroll(s)}},listenScroll:function(t){var s=this;this.foodScroll=new C["a"](t,{probeType:3,deceleration:.001,bounce:!1,swipeTime:2e3,click:!0});var e=new C["a"]("#wrapper_menu",{click:!0}),i=this.$refs.wrapperMenu.clientHeight;this.foodScroll.on("scroll",function(t){s.$refs.wrapperMenu&&s.shopListTop.forEach(function(a,o){if(s.menuIndexChange&&Math.abs(Math.round(t.y))>=a){s.menuIndex=o;var n=s.$refs.wrapperMenu.querySelectorAll(".activity_menu"),r=n[0];e.scrollToElement(r,800,0,-(i/2-50))}})})},showActivitiesFun:function(){this.showActivities=!this.showActivities},chooseMenu:function(t){var s=this;this.menuIndex=t,this.menuIndexChange=!1,this.foodScroll.scrollTo(0,-this.shopListTop[t],400),this.foodScroll.on("scrollEnd",function(){s.menuIndexChange=!0})},showTitleDetail:function(t){this.TitleDetailIndex==t?this.TitleDetailIndex=null:this.TitleDetailIndex=t},addToCart:function(t,s,e,i,a,o){this.ADD_CART({shopid:this.shopId,category_id:t,item_id:s,food_id:e,name:i,price:a,specs:o})},removeOutCart:function(t,s,e,i,a,o){this.REDUCE_CART({shopid:this.shopId,category_id:t,item_id:s,food_id:e,name:i,price:a,specs:o})},initCategoryNum:function(){var t=this,s=[],e=0;this.totalPrice=0,this.cartFoodList=[],this.menuList.forEach(function(i,a){if(t.shopCart&&t.shopCart[i.foods[0].category_id]){var o=0;r()(t.shopCart[i.foods[0].category_id]).forEach(function(s){r()(t.shopCart[i.foods[0].category_id][s]).forEach(function(a){var n=t.shopCart[i.foods[0].category_id][s][a];o+=n.num,1==i.type&&(t.totalPrice+=n.num*n.price,n.num>0&&(t.cartFoodList[e]={},t.cartFoodList[e].category_id=i.foods[0].category_id,t.cartFoodList[e].item_id=s,t.cartFoodList[e].food_id=a,t.cartFoodList[e].num=n.num,t.cartFoodList[e].price=n.price,t.cartFoodList[e].name=n.name,t.cartFoodList[e].specs=n.specs,e++))})}),s[a]=o}else s[a]=0}),this.totalPrice=this.totalPrice.toFixed(2),this.categoryNum=[].concat(s)},toggleCartList:function(){!this.cartFoodList.length||(this.showCartList=!this.showCartList)},clearCart:function(){this.toggleCartList(),this.CLEAR_CART(this.shopId)},listenInCart:function(){var t=this;this.receiveInCart||(this.receiveInCart=!0,this.$refs.cartContainer.addEventListener("animationend",function(){t.receiveInCart=!1}),this.$refs.cartContainer.addEventListener("webkitAnimationEnd",function(){t.receiveInCart=!1}))},changeTgeIndex:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(s,e){var i,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.ratingTageIndex=s,this.ratingOffset=0,this.ratingTagName=e,t.next=5,Object(_["r"])(this.shopId,this.ratingOffset,e);case 5:i=t.sent,this.ratingList=Object(o["a"])(i),this.$nextTick(function(){a.ratingScroll.refresh()});case 8:case"end":return t.stop()}},t,this)}));function s(s,e){return t.apply(this,arguments)}return s}(),loaderMoreRating:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.preventRepeatRequest){t.next=2;break}return t.abrupt("return");case 2:return this.loadRatings=!0,this.preventRepeatRequest=!0,this.ratingOffset+=10,t.next=7,Object(_["r"])(this.shopId,this.ratingOffset,this.ratingTagName);case 7:s=t.sent,this.ratingList=[].concat(Object(o["a"])(this.ratingList),Object(o["a"])(s)),this.loadRatings=!1,s.length>=10&&(this.preventRepeatRequest=!1);case 11:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),hideLoading:function(){this.showLoading=!1},showChooseList:function(t){t&&(this.choosedFoods=t),this.showSpecs=!this.showSpecs,this.specsIndex=0},chooseSpecs:function(t){this.specsIndex=t},addSpecs:function(t,s,e,i,a,o,n,r,c){this.ADD_CART({shopid:this.shopId,category_id:t,item_id:s,food_id:e,name:i,price:a,specs:o,packing_fee:n,sku_id:r,stock:c}),this.showChooseList()},showReduceTip:function(){var t=this;this.showDeleteTip=!0,clearTimeout(this.timer),this.timer=setTimeout(function(){clearTimeout(t.timer),t.showDeleteTip=!1},3e3)},showMoveDotFun:function(t,s,e){this.showMoveDot=[].concat(Object(o["a"])(this.showMoveDot),Object(o["a"])(t)),this.elLeft=s,this.elBottom=e},beforeEnter:function(t){t.style.transform="translate3d(0,".concat(37+this.elBottom-this.windowHeight,"px,0)"),t.children[0].style.transform="translate3d(".concat(this.elLeft-30,"px,0,0)"),t.children[0].style.opacity=0},afterEnter:function(t){var s=this;t.style.transform="translate3d(0,0,0)",t.children[0].style.transform="translate3d(0,0,0)",t.style.transition="transform .55s cubic-bezier(0.3, -0.25, 0.7, -0.15)",t.children[0].style.transition="transform .55s linear",this.showMoveDot=this.showMoveDot.map(function(t){return!1}),t.children[0].style.opacity=1,t.children[0].addEventListener("transitionend",function(){s.listenInCart()}),t.children[0].addEventListener("webkitAnimationEnd",function(){s.listenInCart()})},goback:function(){this.$router.go(-1)}}),watch:{showLoading:function(t){var s=this;t||this.$nextTick(function(){s.getFoodListHeight(),s.initCategoryNum()})},shopCart:function(t){this.initCategoryNum()},cartFoodList:function(t){t.length||(this.showCartList=!1)},changeShowType:function(t){var s=this;"rating"===t&&this.$nextTick(function(){s.ratingScroll=new C["a"]("#ratingContainer",{probeType:3,deceleration:.003,bounce:!1,swipeTime:2e3,click:!0}),s.ratingScroll.on("scroll",function(t){Math.abs(Math.round(t.y))>=Math.abs(Math.round(s.ratingScroll.maxScrollY))&&(s.loaderMoreRating(),s.ratingScroll.refresh())})})}}},y=w,x=(e("1d43"),e("2877")),k=Object(x["a"])(y,i,a,!1,null,"5e733a4c",null);s["default"]=k.exports},7080:function(t,s,e){},7228:function(t,s,e){},"7d6d":function(t,s,e){var i=e("63b6"),a=e("13c8")(!1);i(i.S,"Object",{values:function(t){return a(t)}})},"8e95":function(t,s,e){"use strict";var i=e("7228"),a=e.n(i);a.a},"958b":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rating_container"},[e("section",{staticClass:"star_container"},t._l(5,function(t){return e("svg",{key:t,staticClass:"grey_fill"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"}})])}),0),e("div",{staticClass:"star_overflow",style:"width:"+2*t.rating/5+"rem"},[e("section",{staticClass:"star_container"},t._l(5,function(t){return e("svg",{key:t,staticClass:"orange_fill"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"}})])}),0)])])},a=[],o={data:function(){return{}},mounted:function(){},props:["rating"]},n=o,r=(e("d767"),e("2877")),c=Object(r["a"])(n,i,a,!1,null,"94be79a0",null);s["a"]=c.exports},"9e1c":function(t,s,e){e("7d6d"),t.exports=e("584a").Object.values},a5c2:function(t,s,e){},bf93:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"loading_container"},[e("div",{staticClass:"load_img",style:{backgroundPositionY:-t.positionY%7*2.5+"rem"}}),e("svg",{staticClass:"load_ellipse",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("ellipse",{staticStyle:{fill:"#ddd",stroke:"none"},attrs:{cx:"26",cy:"10",rx:"26",ry:"10"}})])])},a=[],o={data:function(){return{positionY:0,timer:null}},mounted:function(){var t=this;this.timer=setInterval(function(){t.positionY++},600)},beforeDestroy:function(){clearInterval(this.timer)}},n=o,r=(e("23a5"),e("2877")),c=Object(r["a"])(n,i,a,!1,null,"39cb30c2",null);s["a"]=c.exports},d767:function(t,s,e){"use strict";var i=e("7080"),a=e.n(i);a.a},db0c:function(t,s,e){t.exports=e("9e1c")},f300:function(t,s,e){"use strict";e.d(s,"b",function(){return a}),e.d(s,"a",function(){return o});var i=e("3f55"),a=(e("51be"),{directives:{"load-more":{bind:function(t,s){var e,a,o,n,r,c,l,d,h=window.screen.height,u=t.attributes.type&&t.attributes.type.value,_=2;2==u?(l=t,d=t.children[0]):(l=document.body,d=t),t.addEventListener("touchstart",function(){e=d.clientHeight,2==u&&(e=e),a=t.offsetTop,o=Object(i["c"])(t,"paddingBottom"),n=Object(i["c"])(t,"marginBottom")},!1),t.addEventListener("touchmove",function(){f()},!1),t.addEventListener("touchend",function(){c=l.scrollTop,p()},!1);var p=function t(){r=requestAnimationFrame(function(){l.scrollTop!=c?(c=l.scrollTop,t()):(cancelAnimationFrame(r),e=d.clientHeight,f())})},f=function(){l.scrollTop+h>=e+a+o+n-_&&s.value()}}}}}),o={methods:{getImgPath:function(t){var s;if(!t)return"//elm.cangdu.org/img/default.jpg";s=-1!==t.indexOf("jpeg")?".jpeg":".png";var e="/"+t.substr(0,1)+"/"+t.substr(1,2)+"/"+t.substr(3)+s;return"https://fuss10.elemecdn.com"+e}}}}}]);