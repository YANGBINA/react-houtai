(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"TG/f":function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var u=n(a("3S7+"));a("Pwec");var i=n(a("CtXQ")),r=n(a("lwsE")),d=n(a("W8MJ")),c=n(a("a1gu")),o=n(a("Nsbk")),s=n(a("7W2i")),f=l(a("q1tI")),p=n(a("zHco")),m=a("MuoO"),h=a("KTCi"),v=n(a("rmP6"));a("91UR");var y,g,E=n(a("pOmZ")),C=function(e){var t=e.mytestpage,a=t.num,n=t.visitData;return{num:a,visitData:n}},k=function(e){return{addNum:function(t){e({type:"mytestpage/add",step:t})},disNum:function(t){e({type:"mytestpage/dis",step:t})},initVisitData:function(){e({type:"mytestpage/getScoresData"})}}},w=(y=(0,m.connect)(C,k),y(g=function(e){function t(){var e,a;(0,r.default)(this,t);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return a=(0,c.default)(this,(e=(0,o.default)(t)).call.apply(e,[this].concat(l))),a.state={value:"\u8bf7\u5728\u8fd9\u91cc\u8f93\u5165\u5185\u5bb9"},a}return(0,s.default)(t,e),(0,d.default)(t,[{key:"handleClick",value:function(e,t){var a=this.props,n=a.addNum,l=a.disNum;"+"===e?n(t):l(t)}},{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"componentDidMount",value:function(){this.props.initVisitData()}},{key:"render",value:function(){var e=this.props,t=e.num,a=e.visitData,n=this.state.value;return f.default.createElement(p.default,null,f.default.createElement("div",{className:E.default.wrapper},f.default.createElement("span",{onClick:this.handleClick.bind(this,"-",5)},"-"),f.default.createElement("span",null,t),f.default.createElement("span",{onClick:this.handleClick.bind(this,"+",10)},"+")),f.default.createElement("div",null,f.default.createElement("h1",null,"\u5bcc\u6587\u672c\u7f16\u8f91\u5668"),f.default.createElement(v.default,{value:n,onChange:this.handleChange.bind(this)})),f.default.createElement("div",null,f.default.createElement("h1",null,"\u56fe\u6807\u4f7f\u7528\u4f8b\u5b50"),f.default.createElement(h.ChartCard,{title:"\u73ed\u7ea7\u603b\u4eba\u6570",action:f.default.createElement(u.default,{title:"\u73ed\u7ea7\u4eba\u6570\u7edf\u8ba1\u8868"},f.default.createElement(i.default,{type:"exclamation-circle-o"})),total:a.reduce(function(e,t){return e+t.y},0),contentHeight:300},f.default.createElement(h.Bar,{height:200,data:a,title:"\u7537\u5973\u6bd4\u4f8b"})),f.default.createElement(h.ChartCard,{title:"\u73ed\u7ea7\u603b\u4eba\u6570",total:a.reduce(function(e,t){return e+t.y},0),contentHeight:300},f.default.createElement(h.Pie,{hasLegend:!0,data:a,padding:[10,20,30],total:"\u603b\u4eba\u6570\uff1a".concat(a.reduce(function(e,t){return e+t.y},0))}))))}}]),t}(f.Component))||g),D=w;t.default=D},pOmZ:function(e,t,a){e.exports={wrapper:"antd-pro\\pages\\-mytest-page\\index-wrapper"}}}]);