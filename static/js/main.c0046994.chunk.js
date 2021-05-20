(this["webpackJsonpcavea-systems-panel"]=this["webpackJsonpcavea-systems-panel"]||[]).push([[0],{189:function(t,e,a){},345:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a(60),o=a.n(s),n=(a(189),a(115)),c=a(53),i=a(17),l=a(80),p=a(81),d=a(48),h=a(82),u=a(88),m=a(160),g=a.n(m),j=a(8);var x=function(){return Object(j.jsx)("div",{className:"h-40 flex justify-center items-center",children:Object(j.jsx)(g.a,{type:"pacman",size:"custom",active:!0})})},y=a(83),f=a.n(y),b=function(t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:[Object(j.jsxs)("span",{className:"font-semibold",children:[t.text,":"]})," ",t.data]})})},v=6e4,O="https://cavea-test-api-php-review-develop-3zknud.cavea.dev",_=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getAveragePerHour=r.getAveragePerHour.bind(Object(d.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getAveragePerHour(),this.updateMetric=setInterval(this.getAveragePerHour,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getAveragePerHour",value:function(){var t=this;f.a.get("".concat(O,"/api/logs/import/average"),{params:{platform:this.platform,from:30,type:this.type,interval:3600}}).then((function(e){var a=e.data.avg;t.setState({data:a,loading:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(j.jsx)(x,{}):Object(j.jsx)(b,{data:this.state.data,text:this.props.text})}}]),a}(r.Component);var k=function(t){var e=Object(r.useState)(Object(c.a)(t.averages)),a=Object(i.a)(e,1)[0];return Object(j.jsx)(j.Fragment,{children:a.map((function(e,a){return Object(j.jsx)(_,{platform:t.platform,type:e.type,text:e.text})}))})},P=a(161),I=a.n(P),N=a(347),H=a(348),C=a(177),F=a(178),M=a(71),S=a(180),w=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getTotalImports=r.getTotalImports.bind(Object(d.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getTotalImports(),this.updateMetric=setInterval(this.getTotalImports,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getTotalImports",value:function(){var t=this;f.a.get("".concat(O,"/api/logs/import/total"),{params:{platform:this.platform,type:this.type,from:30}}).then((function(e){var a=Object(c.a)(e.data).map((function(t){return{x:I()(t.date).format("YYYY-MM-DD"),y:parseInt(t.count)}}));t.setState({data:a,loading:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(j.jsx)(x,{}):Object(j.jsx)(N.a,{width:"100%",height:this.props.height,children:Object(j.jsxs)(H.a,{data:this.state.data,children:[Object(j.jsx)(C.a,{dataKey:"x",stroke:"#222",tick:!1}),Object(j.jsx)(F.a,{dataKey:"y",stroke:"#222"}),Object(j.jsx)(M.a,{}),Object(j.jsx)(S.a,{dataKey:"y",name:"Posts",stroke:this.props.color,strokeWidth:5})]})})}}]),a}(r.Component);var A=function(t){var e=Object(r.useState)(Object(c.a)(t.graphs));return Object(i.a)(e,1)[0].map((function(e,a){return Object(j.jsxs)("div",{className:"metric grid gap-y-5",children:[Object(j.jsxs)("div",{className:"metric-header grid grid-flow-col-dense items-center",children:[Object(j.jsx)("h2",{className:"text-left font-semibold text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:e.header}),Object(j.jsx)(k,{averages:e.averages,platform:t.platform})]}),Object(j.jsx)(w,{platform:t.platform,color:t.color,type:e.total.type,width:200,height:150})]},e.platform+e.header+a)}))};var T=function(t){return Object(j.jsxs)("div",{id:t.platform+"-metric",className:"grid gap-y-3",children:[Object(j.jsx)("h2",{className:"capitalize text-left font-bold text-3xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.platform}),Object(j.jsx)(A,{graphs:t.graphs,platform:t.platform,color:t.color})]})},D=[{platform:"facebook",color:"#4267B2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"Handles/h"},{type:"post_imported",text:"Posts/h"}]}]},{platform:"instagram",color:"#C13584",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"Handles/h"},{type:"post_imported",text:"Posts/h"}]},{header:"Stories",total:{type:"story_count"},averages:[{type:"process_story_handle",text:"Handles/h"},{type:"story_created",text:"Stories/h"}]}]},{platform:"twitch",color:"#6441a5",graphs:[{header:"Clips",total:{type:"post_count"},averages:[{type:"process_handle",text:"Handles/h"},{type:"post_imported",text:"Clips/h"}]}]},{platform:"twitter",color:"#1DA1F2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"Handles/h"},{type:"post_count",text:"Posts/h"}]},{header:"Metrics",total:{type:"post_metric_count"},averages:[{type:"process_metric_handle",text:"Handles/h"},{type:"post_metric_imported",text:"Posts/h"}]}]},{platform:"youtube",color:"#FF0000",graphs:[{header:"Videos",total:{type:"post_count"},averages:[{type:"process_handle",text:"Channels/h"},{type:"post_imported",text:"Videos/h"}]}]}].map((function(t,e){return Object(r.createElement)(T,Object(n.a)(Object(n.a)({},t),{},{key:t.platform}))})),E=function(){return Object(j.jsx)("div",{className:"p-5 mx-auto grid grid-cols-2 gap-y-5",children:Object(j.jsx)("div",{className:"import-logs",children:D})})},Y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,353)).then((function(e){var a=e.getCLS,r=e.getFID,s=e.getFCP,o=e.getLCP,n=e.getTTFB;a(t),r(t),s(t),o(t),n(t)}))};o.a.render(Object(j.jsx)(E,{}),document.getElementById("root")),Y()}},[[345,1,2]]]);
//# sourceMappingURL=main.c0046994.chunk.js.map