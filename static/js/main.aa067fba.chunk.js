(this["webpackJsonpreact-covid-tracker"]=this["webpackJsonpreact-covid-tracker"]||[]).push([[0],{214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),u=(a(99),a(255)),l=a(26),i=a(254),s=a(257),m=a(248),d=a(259),f=a(260),b=a(256),p=Object(n.memo)((function(e){var t=e.countries,a=e.onChange;return r.a.createElement(s.a,{mb:5},r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement(d.a,null,r.a.createElement(f.a,{shrink:!0,htmlFor:"location"},"Location"),r.a.createElement(b.a,{native:!0,onChange:function(e){var t=e.target.value;a(t)},inputProps:{name:"location",id:"location"}},r.a.createElement("option",{value:""},"The World"),t.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))))))})),v=a(250),h=a(251),E=a(252),g=a(253),O=a(85),j=a.n(O),y=Object(v.a)({root:{minWidth:170,height:"100%"},title:{fontSize:14},pos:{marginBottom:12}}),k=Object(n.memo)((function(e){var t=e.header,a=e.count,n=e.lastUpdate,c=e.children,o=y();return r.a.createElement(m.a,{item:!0,xs:12,sm:4,md:"auto"},r.a.createElement(h.a,{className:o.root},r.a.createElement(E.a,null,r.a.createElement(g.a,{className:o.title,color:"textSecondary",gutterBottom:!0},t),r.a.createElement(g.a,{variant:"h5",component:"h2"},r.a.createElement(j.a,{end:a,separator:","})),r.a.createElement(g.a,{className:o.pos,color:"textSecondary"},"as of ",new Date(n).toLocaleDateString()),r.a.createElement(g.a,{variant:"body2",component:"p"},c))))})),x=Object(n.memo)((function(e){var t=e.countryData;return t?r.a.createElement(s.a,{mb:5},r.a.createElement(m.a,{container:!0,justify:"center",spacing:2},r.a.createElement(k,{header:"Infected",count:t.confirmed,lastUpdate:t.lastUpdate},"Number of active cases of COVID-19."),r.a.createElement(k,{header:"Recovered",count:t.recovered,lastUpdate:t.lastUpdate},"Number of recoveries from COVID-19."),r.a.createElement(k,{header:"Deaths",count:t.deaths,lastUpdate:t.lastUpdate},"Number of deaths caused by COVID-19."))):null})),C=a(45),D=Object(n.memo)((function(e){var t=e.data;if(!t)return null;var a=[{data:[t.confirmed,t.recovered,t.deaths],backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"]}];return r.a.createElement(C.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:a},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(t.country)}}})})),U=Object(n.memo)((function(e){var t=e.data;if(!t.length)return null;var a=t.map((function(e){return e.reportDate})),n=[{label:"Infected",data:t.map((function(e){return e.confirmed.total})),borderColor:"rgba(0,0,255,1)",fill:!0},{label:"Deaths",data:t.map((function(e){return e.deaths.total})),borderColor:"rgba(255,0,0,1)",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}];return r.a.createElement(C.b,{data:{labels:a,datasets:n},options:{title:{display:!0,text:"Current state of the World"}}})})),w=a(22),S=a.n(w),I=a(47),N=a(33),V=a.n(N);V.a.defaults.baseURL="https://covid19.mathdro.id/api";var W=a(87),B=a.n(W),G=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(I.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("/countries");case 2:t=e.sent,a=t.data,r(a.countries.map((function(e){return e.name})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a}(),u=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(I.a)(S.a.mark((function t(){var a,n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.a.get(e?"/countries/".concat(e):"/");case 2:a=t.sent,n=a.data,c({country:e,confirmed:n.confirmed.value,recovered:n.recovered.value,deaths:n.deaths.value,lastUpdate:n.lastUpdate});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),r}(a),m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(I.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("/daily");case 2:t=e.sent,a=t.data,r(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a}(),d=Object(n.useCallback)((function(e){c(e)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"github-fork-ribbon",href:"https://github.com/batbrain9392/react-covid-tracker","data-ribbon":"GitHub",title:"GitHub",target:"_blank",rel:"noreferrer noopener"},"GitHub"),r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement(s.a,{my:7},r.a.createElement(s.a,{mb:5,textAlign:"center"},r.a.createElement("img",{src:B.a,alt:"COVID-19"})),r.a.createElement(p,{countries:o,onChange:d}),r.a.createElement(x,{countryData:u}),a?r.a.createElement(D,{data:u}):r.a.createElement(U,{data:m}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null),r.a.createElement(G,null)),document.getElementById("root"))},87:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},94:function(e,t,a){e.exports=a(214)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.aa067fba.chunk.js.map