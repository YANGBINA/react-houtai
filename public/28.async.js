(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"2Py/":function(e,t,a){"use strict";var l=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var d=l(a("BMrR"));a("jCWc");var n=l(a("kPKH")),u=l(a("pVnL"));a("Mwp2");var c=l(a("VXEj"));a("IzEo");var i=l(a("bx4M")),f=l(a("lwsE")),o=l(a("W8MJ")),s=l(a("a1gu")),m=l(a("Nsbk")),p=l(a("7W2i"));a("y8nQ");var v=l(a("Vl3Y"));a("OaEy");var E,g,h,I=l(a("2fM7")),y=r(a("q1tI")),w=l(a("wd/R")),x=a("MuoO"),L=l(a("+px+")),O=l(a("pUXw")),b=l(a("xNuS")),k=l(a("SaYD")),C=l(a("wgDz")),M=I.default.Option,N=v.default.Item,z=(E=(0,x.connect)(function(e){var t=e.list,a=e.loading;return{list:t,loading:a.models.list}}),g=v.default.create({onValuesChange:function(e,t,a){var l=e.dispatch;console.log(t,a),l({type:"list/fetch",payload:{count:8}})}}),E(h=g(h=function(e){function t(){return(0,f.default)(this,t),(0,s.default)(this,(0,m.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"list/fetch",payload:{count:8}})}},{key:"render",value:function(){var e=this.props,t=e.list.list,a=void 0===t?[]:t,l=e.loading,r=e.form,f=r.getFieldDecorator,o=a?y.default.createElement(c.default,{rowKey:"id",loading:l,grid:{gutter:24,xl:4,lg:3,md:3,sm:2,xs:1},dataSource:a,renderItem:function(e){return y.default.createElement(c.default.Item,null,y.default.createElement(i.default,{className:C.default.card,hoverable:!0,cover:y.default.createElement("img",{alt:e.title,src:e.cover})},y.default.createElement(i.default.Meta,{title:y.default.createElement("a",null,e.title),description:y.default.createElement(b.default,{lines:2},e.subDescription)}),y.default.createElement("div",{className:C.default.cardItemContent},y.default.createElement("span",null,(0,w.default)(e.updatedAt).fromNow()),y.default.createElement("div",{className:C.default.avatarList},y.default.createElement(O.default,{size:"mini"},e.members.map(function(t,a){return y.default.createElement(O.default.Item,{key:"".concat(e.id,"-avatar-").concat(a),src:t.avatar,tips:t.name})}))))))}}):null,s={wrapperCol:{xs:{span:24},sm:{span:16}}};return y.default.createElement("div",{className:C.default.coverCardList},y.default.createElement(i.default,{bordered:!1},y.default.createElement(v.default,{layout:"inline"},y.default.createElement(k.default,{title:"\u6240\u5c5e\u7c7b\u76ee",block:!0,style:{paddingBottom:11}},y.default.createElement(N,null,f("category")(y.default.createElement(L.default,{expandable:!0},y.default.createElement(L.default.Option,{value:"cat1"},"\u7c7b\u76ee\u4e00"),y.default.createElement(L.default.Option,{value:"cat2"},"\u7c7b\u76ee\u4e8c"),y.default.createElement(L.default.Option,{value:"cat3"},"\u7c7b\u76ee\u4e09"),y.default.createElement(L.default.Option,{value:"cat4"},"\u7c7b\u76ee\u56db"),y.default.createElement(L.default.Option,{value:"cat5"},"\u7c7b\u76ee\u4e94"),y.default.createElement(L.default.Option,{value:"cat6"},"\u7c7b\u76ee\u516d"),y.default.createElement(L.default.Option,{value:"cat7"},"\u7c7b\u76ee\u4e03"),y.default.createElement(L.default.Option,{value:"cat8"},"\u7c7b\u76ee\u516b"),y.default.createElement(L.default.Option,{value:"cat9"},"\u7c7b\u76ee\u4e5d"),y.default.createElement(L.default.Option,{value:"cat10"},"\u7c7b\u76ee\u5341"),y.default.createElement(L.default.Option,{value:"cat11"},"\u7c7b\u76ee\u5341\u4e00"),y.default.createElement(L.default.Option,{value:"cat12"},"\u7c7b\u76ee\u5341\u4e8c"))))),y.default.createElement(k.default,{title:"\u5176\u5b83\u9009\u9879",grid:!0,last:!0},y.default.createElement(d.default,{gutter:16},y.default.createElement(n.default,{lg:8,md:10,sm:10,xs:24},y.default.createElement(N,(0,u.default)({},s,{label:"\u4f5c\u8005"}),f("author",{})(y.default.createElement(I.default,{placeholder:"\u4e0d\u9650",style:{maxWidth:200,width:"100%"}},y.default.createElement(M,{value:"lisa"},"\u738b\u662d\u541b"))))),y.default.createElement(n.default,{lg:8,md:10,sm:10,xs:24},y.default.createElement(N,(0,u.default)({},s,{label:"\u597d\u8bc4\u5ea6"}),f("rate",{})(y.default.createElement(I.default,{placeholder:"\u4e0d\u9650",style:{maxWidth:200,width:"100%"}},y.default.createElement(M,{value:"good"},"\u4f18\u79c0"),y.default.createElement(M,{value:"normal"},"\u666e\u901a"))))))))),y.default.createElement("div",{className:C.default.cardList},o))}}]),t}(y.PureComponent))||h)||h),j=z;t.default=j},hJYk:function(e,t,a){e.exports={avatarList:"antd-pro\\components\\-avatar-list\\index-avatarList",avatarItem:"antd-pro\\components\\-avatar-list\\index-avatarItem",avatarItemLarge:"antd-pro\\components\\-avatar-list\\index-avatarItemLarge",avatarItemSmall:"antd-pro\\components\\-avatar-list\\index-avatarItemSmall",avatarItemMini:"antd-pro\\components\\-avatar-list\\index-avatarItemMini"}},pUXw:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var r=l(a("3S7+"));a("Telt");var d=l(a("Tckk")),n=l(a("lSNA")),u=l(a("pVnL")),c=l(a("QILm")),i=l(a("q1tI")),f=l(a("TSYQ")),o=l(a("hJYk")),s=function(e){var t=e.children,a=e.size,l=(0,c.default)(e,["children","size"]),r=i.default.Children.map(t,function(e){return i.default.cloneElement(e,{size:a})});return i.default.createElement("div",(0,u.default)({},l,{className:o.default.avatarList}),i.default.createElement("ul",null," ",r," "))},m=function(e){var t,a=e.src,l=e.size,u=e.tips,c=e.onClick,s=void 0===c?function(){}:c,m=(0,f.default)(o.default.avatarItem,(t={},(0,n.default)(t,o.default.avatarItemLarge,"large"===l),(0,n.default)(t,o.default.avatarItemSmall,"small"===l),(0,n.default)(t,o.default.avatarItemMini,"mini"===l),t));return i.default.createElement("li",{className:m,onClick:s},u?i.default.createElement(r.default,{title:u},i.default.createElement(d.default,{src:a,size:l,style:{cursor:"pointer"}})):i.default.createElement(d.default,{src:a,size:l}))};s.Item=m;var p=s;t.default=p},wgDz:function(e,t,a){e.exports={coverCardList:"antd-pro\\pages\\-list\\-projects-coverCardList",card:"antd-pro\\pages\\-list\\-projects-card",cardItemContent:"antd-pro\\pages\\-list\\-projects-cardItemContent",avatarList:"antd-pro\\pages\\-list\\-projects-avatarList",cardList:"antd-pro\\pages\\-list\\-projects-cardList"}}}]);