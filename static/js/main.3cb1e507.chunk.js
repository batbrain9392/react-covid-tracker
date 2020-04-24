(this["webpackJsonpreact-covid-tracker"]=this["webpackJsonpreact-covid-tracker"]||[]).push([[0],{207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),u=(a(94),a(240)),l=a(24),i=Object(n.memo)((function(e){var t=e.countryData;return r.a.createElement("pre",null,JSON.stringify(t,null,2))})),s=a(38),d=Object(n.memo)((function(e){var t=e.data;if(!t)return null;var a=[{data:[t.confirmed,t.recovered,t.deaths],backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"]}];return r.a.createElement(s.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:a},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(t.country)}}})})),f=Object(n.memo)((function(e){var t=e.data;if(!t.length)return null;var a=t.map((function(e){return e.reportDate})),n=[{label:"Infected",data:t.map((function(e){return e.confirmed.total})),borderColor:"rgba(0,0,255,1)",fill:!0},{label:"Deaths",data:t.map((function(e){return e.deaths.total})),borderColor:"rgba(255,0,0,1)",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}];return r.a.createElement(s.b,{data:{labels:a,datasets:n}})})),m=Object(n.memo)((function(e){var t=e.countryData,a=e.dailyData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{data:t}),r.a.createElement(f,{data:a}))})),p=a(243),b=a(242),v=a(241),h=Object(n.memo)((function(e){var t=e.countries,a=e.onChange;return r.a.createElement(b.a,null,r.a.createElement(p.a,{shrink:!0,htmlFor:"location"},"Location"),r.a.createElement(v.a,{native:!0,onChange:function(e){var t=e.target.value;a(t)},inputProps:{name:"location",id:"location"}},r.a.createElement("option",{value:""},"The World"),t.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))))})),g=a(20),E=a.n(g),O=a(43),j=a(30),y=a.n(j);y.a.defaults.baseURL="https://covid19.mathdro.id/api";var k=a(239),C=a(86),D=a.n(C),x=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(O.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/countries");case 2:t=e.sent,a=t.data,r(a.countries.map((function(e){return e.name})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a}(),u=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(O.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get(e?"/countries/".concat(e):"/");case 2:a=t.sent,n=a.data,c({country:e||"the World",confirmed:n.confirmed.value,recovered:n.recovered.value,deaths:n.deaths.value,lastUpdate:n.lastUpdate});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),r}(a),s=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(O.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/daily");case 2:t=e.sent,a=t.data,r(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a}(),d=Object(n.useCallback)((function(e){c(e)}),[]);return r.a.createElement(k.a,null,r.a.createElement("img",{src:D.a,alt:"COVID-19"}),r.a.createElement(h,{countries:o,onChange:d}),r.a.createElement(i,{countryData:u}),r.a.createElement(m,{countryData:u,dailyData:s}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null),r.a.createElement(x,null)),document.getElementById("root"))},86:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},89:function(e,t,a){e.exports=a(207)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.3cb1e507.chunk.js.map