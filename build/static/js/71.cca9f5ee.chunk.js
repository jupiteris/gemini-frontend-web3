(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{6708:function(e,t,a){"use strict";a.r(t);var c=a(14),r=a(23),l=a(17),n=a(15),o=a(16),i=a(0),s=a.n(i),m=a(835),d=a(894),p=[{name:"Page A",pv:200},{name:"Page B",pv:1200},{name:"Page C",pv:600},{name:"Page D",pv:1600},{name:"Page D",pv:1e3},{name:"Page H",pv:2260},{name:"Page K",pv:800}],h=a(843),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(n.a)(t).call(this,e))).onTapBlock=function(e){a.props.history.push(e)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(m.a,{match:this.props.match,title:"Dashboard"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-9 col-md-9 col-sm-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer",onClick:function(){return e.onTapBlock("new-job")}},s.a.createElement(h.a,{chartProperties:{title:"NEW JOB",number:"30",icon:"stats",bgColor:"indigo",styleName:"up",desc:"ON THIS WEEK",percent:"+3"},children:s.a.createElement(d.c,{width:"100%",height:75},s.a.createElement(d.b,{data:p,margin:{top:0,right:0,left:0,bottom:0}},s.a.createElement(d.a,{dataKey:"pv",strokeWidth:0,stackId:"2",stroke:"#273894",fill:"#273894",fillOpacity:1})))})),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer",onClick:function(){return e.onTapBlock("accepted")}},s.a.createElement(h.a,{chartProperties:{title:"ACCEPTED",number:"5",icon:"stats",bgColor:"indigo",styleName:"up",desc:"ON THIS WEEK",percent:"+3"},children:s.a.createElement(d.c,{width:"100%",height:75},s.a.createElement(d.b,{data:p,margin:{top:0,right:0,left:0,bottom:0}},s.a.createElement(d.a,{dataKey:"pv",strokeWidth:0,stackId:"2",stroke:"#273894",fill:"#273894",fillOpacity:1})))})),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer",onClick:function(){return e.onTapBlock("in-progress")}},s.a.createElement(h.a,{chartProperties:{title:"IN PROGRESS",number:"12",icon:"stats",bgColor:"indigo",styleName:"down",desc:"ON THIS WEEK",percent:"+3"},children:s.a.createElement(d.c,{width:"100%",height:75},s.a.createElement(d.b,{data:p,margin:{top:0,right:0,left:0,bottom:0}},s.a.createElement(d.a,{dataKey:"pv",strokeWidth:0,stackId:"2",stroke:"#273894",fill:"#273894",fillOpacity:1})))})),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer",onClick:function(){return e.onTapBlock("to-check")}},s.a.createElement(h.a,{chartProperties:{title:"TO CHECK",number:"12",icon:"stats",bgColor:"indigo",styleName:"down",desc:"ON THIS WEEK",percent:"+3"},children:s.a.createElement(d.c,{width:"100%",height:75},s.a.createElement(d.b,{data:p,margin:{top:0,right:0,left:0,bottom:0}},s.a.createElement(d.a,{dataKey:"pv",strokeWidth:0,stackId:"2",stroke:"#273894",fill:"#273894",fillOpacity:1})))})),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer",onClick:function(){return e.onTapBlock("out-standing")}},s.a.createElement(h.a,{chartProperties:{title:"OUTSTANDING",number:"10",icon:"stats",bgColor:"pink accent-2",styleName:"down",desc:"ON THIS WEEK",percent:"+3"},children:s.a.createElement(d.c,{width:"100%",height:75},s.a.createElement(d.b,{data:p,margin:{top:0,right:0,left:0,bottom:0}},s.a.createElement(d.a,{dataKey:"pv",strokeWidth:0,stackId:"2",stroke:"#da2361",fill:"#da2361",fillOpacity:1})))})),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer",onClick:function(){return e.onTapBlock("closed")}},s.a.createElement(h.a,{chartProperties:{title:"CLOSED",number:"5",icon:"stats",bgColor:"pink accent-2",styleName:"up",desc:"ON THIS WEEK",percent:"+3"},children:s.a.createElement(d.c,{width:"100%",height:75},s.a.createElement(d.b,{data:p,margin:{top:0,right:0,left:0,bottom:0}},s.a.createElement(d.a,{dataKey:"pv",strokeWidth:0,stackId:"2",stroke:"#da2361",fill:"#da2361",fillOpacity:1})))})),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer",onClick:function(){return e.onTapBlock("rejected")}},s.a.createElement(h.a,{chartProperties:{title:"REJECTED",number:"12",icon:"stats",bgColor:"pink accent-2",styleName:"down",desc:"ON THIS WEEK",percent:"+3"},children:s.a.createElement(d.c,{width:"100%",height:75},s.a.createElement(d.b,{data:p,margin:{top:0,right:0,left:0,bottom:0}},s.a.createElement(d.a,{dataKey:"pv",strokeWidth:0,stackId:"2",stroke:"#da2361",fill:"#da2361",fillOpacity:1})))}))))))}}]),t}(s.a.Component);t.default=E},835:function(e,t,a){"use strict";var c=a(0),r=a.n(c);t.a=function(e){var t=e.title;e.match.path.substr(1).split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},t))}},843:function(e,t,a){"use strict";var c=a(14),r=a(23),l=a(17),n=a(15),o=a(16),i=a(0),s=a.n(i),m=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(n.a)(t)).call.apply(e,[this].concat(o)))).state={isHide:!1,children:"",chartProperties:{number:"",title:"",bgColor:"",styleName:"",desc:"",percent:""}},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(t){return{chartProperties:e.props.chartProperties,children:e.props.children}})}},{key:"handleToggle",value:function(){this.setState(function(e){return{isHide:!e.isHide}})}},{key:"render",value:function(){var e=this.state,t=e.chartProperties,a=e.isHide,c=e.children,r=t.number,l=t.title,n=t.styleName,o=t.desc,i=t.bgColor,m=t.percent;return s.a.createElement("div",{className:"jr-card jr-card-full"},s.a.createElement("div",{className:"jr-fillchart bg-".concat(i,!0===a?" jr-fillchart-nocontent":" jr-overlay-fillchart")},s.a.createElement("div",{className:"card-title mb-3"},l),c,s.a.createElement("div",{className:"jr-fillchart-content"},s.a.createElement("div",{className:"card-title mb-4"},l),s.a.createElement("h2",{className:"mb-2 jr-fs-xl jr-font-weight-medium"},r),m>0,s.a.createElement("p",{className:"mb-0 jr-fs-sm"},s.a.createElement("span",{className:"jr-font-weight-medium jr-fs-md jr-chart-".concat(n)},m),o))))}}]),t}(s.a.Component);t.a=m}}]);
//# sourceMappingURL=71.cca9f5ee.chunk.js.map