(this["webpackJsonpcavea-systems-panel"]=this["webpackJsonpcavea-systems-panel"]||[]).push([[0],{189:function(t,e,a){},345:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a(60),o=a.n(s),n=(a(189),a(115)),c=a(53),i=a(17),l=a(80),p=a(81),d=a(48),h=a(82),u=a(88),g=a(160),m=a.n(g),x=a(8);var j=function(){return Object(x.jsx)("div",{className:"h-40 flex justify-center items-center",children:Object(x.jsx)(m.a,{type:"pacman",size:"custom",active:!0})})},v=a(83),y=a.n(v),f=function(t){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{className:"text-center font-semibold text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:t.text}),Object(x.jsx)("p",{className:"text-center text-xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.data})]})},b=6e4,O="https://cavea-test-api-php-review-develop-3zknud.cavea.dev",_=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getAveragePerHour=r.getAveragePerHour.bind(Object(d.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getAveragePerHour(),this.updateMetric=setInterval(this.getAveragePerHour,b)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getAveragePerHour",value:function(){var t=this;y.a.get("".concat(O,"/api/logs/import/average"),{params:{platform:this.platform,from:30,type:this.type,interval:3600}}).then((function(e){var a=e.data.avg;t.setState({data:a,loading:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(x.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(x.jsx)(j,{}):Object(x.jsx)(f,{data:this.state.data,text:this.props.text})}}]),a}(r.Component);var k=function(t){var e=Object(r.useState)(Object(c.a)(t.averages)),a=Object(i.a)(e,1)[0];return Object(x.jsx)(x.Fragment,{children:a.map((function(e,a){return Object(x.jsx)("div",{className:e.type+"-per-hour",children:Object(x.jsx)(_,{platform:t.platform,type:e.type,text:e.text})},e.type+a)}))})},A=a(161),P=a.n(A),N=a(347),I=a(348),H=a(177),C=a(178),F=a(71),M=a(180),S=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getTotalImports=r.getTotalImports.bind(Object(d.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getTotalImports(),this.updateMetric=setInterval(this.getTotalImports,b)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getTotalImports",value:function(){var t=this;y.a.get("".concat(O,"/api/logs/import/total"),{params:{platform:this.platform,type:this.type,from:30}}).then((function(e){var a=Object(c.a)(e.data).map((function(t){return{x:P()(t.date).format("YYYY-MM-DD"),y:parseInt(t.count)}}));t.setState({data:a,loading:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(x.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(x.jsx)(j,{}):Object(x.jsx)(N.a,{width:"100%",height:this.props.height,children:Object(x.jsxs)(I.a,{data:this.state.data,children:[Object(x.jsx)(H.a,{dataKey:"x",stroke:"#000000"}),Object(x.jsx)(C.a,{dataKey:"y",stroke:"#000000"}),Object(x.jsx)(F.a,{}),Object(x.jsx)(M.a,{dataKey:"y",name:"Posts",stroke:this.props.color,strokeWidth:5})]})})}}]),a}(r.Component);var w=function(t){var e=Object(r.useState)(Object(c.a)(t.graphs));return Object(i.a)(e,1)[0].map((function(e,a){return Object(x.jsxs)("div",{className:"metric space-y-5",children:[Object(x.jsxs)("div",{className:"grid grid-cols-3 grid-rows-1 items-center",children:[Object(x.jsx)("h2",{className:"text-left font-semibold text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:e.header}),Object(x.jsx)(k,{averages:e.averages,platform:t.platform})]}),Object(x.jsx)(S,{platform:t.platform,color:t.color,type:e.total.type,width:200,height:150})]},e.platform+e.header+a)}))};var T=function(t){return Object(x.jsxs)("div",{id:t.platform+"-metric",className:"space-y-5",children:[Object(x.jsx)("h2",{className:"capitalize text-left font-bold text-3xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.platform}),Object(x.jsx)("div",{className:"grid gap-y-3 items-start",children:Object(x.jsx)(w,{graphs:t.graphs,platform:t.platform,color:t.color})})]})},D=[{platform:"facebook",color:"#4267B2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"Avg. Handles/h"},{type:"post_imported",text:"Avg. Posts/h"}]}]},{platform:"instagram",color:"#C13584",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"Avg. Handles/h"},{type:"post_imported",text:"Avg. Posts/h"}]},{header:"Stories",total:{type:"story_count"},averages:[{type:"process_story_handle",text:"Avg. Handles/h"},{type:"story_created",text:"Avg. Stories/h"}]}]},{platform:"twitch",color:"#6441a5",graphs:[{header:"Clips",total:{type:"post_count"},averages:[{type:"process_handle",text:"Avg. Handles/h"},{type:"post_imported",text:"Avg. Clips/h"}]}]},{platform:"twitter",color:"#1DA1F2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"Avg. Handles/h"},{type:"post_count",text:"Avg. Posts/h"}]},{header:"Metrics",total:{type:"post_metric_count"},averages:[{type:"process_metric_handle",text:"Avg. Handles/h"},{type:"post_metric_imported",text:"Avg. Posts/h"}]}]},{platform:"youtube",color:"#FF0000",graphs:[{header:"Videos",total:{type:"post_count"},averages:[{type:"process_handle",text:"Avg. Channels/h"},{type:"post_imported",text:"Avg. Videos/h"}]}]}].map((function(t,e){return Object(r.createElement)(T,Object(n.a)(Object(n.a)({},t),{},{key:t.platform}))})),E=function(){return Object(x.jsx)("div",{className:"p-5 mx-auto grid grid-cols-2 gap-x-10",children:Object(x.jsx)("div",{className:"importer-metrics grid grid-cols-1 gap-x-5",children:D})})},Y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,353)).then((function(e){var a=e.getCLS,r=e.getFID,s=e.getFCP,o=e.getLCP,n=e.getTTFB;a(t),r(t),s(t),o(t),n(t)}))};o.a.render(Object(x.jsx)(E,{}),document.getElementById("root")),Y()}},[[345,1,2]]]);
//# sourceMappingURL=main.6a59c667.chunk.js.map