"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[722],{151:function(t,e,n){n.d(e,{O:function(){return i}});var r=n(689),a=n(87),u="TrendingList_list__7xRuf",c=n(184),i=function(t){var e=t.movies,n=(0,r.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:e.map((function(t){return(0,c.jsx)("li",{className:u,children:(0,c.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:n},children:t.title})},t.id)}))})})}},722:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(439),a="SearchForm_input__HOxJo",u="SearchForm_searchBtn__rp2a7",c=n(791),i=n(184),o=function(t){var e=t.setSearchParams,n=(0,c.useState)(""),o=(0,r.Z)(n,2),s=o[0],f=o[1];return(0,i.jsx)("div",{children:(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({query:s})},children:[(0,i.jsx)("input",{className:a,type:"text",placeholder:"Movie name ...",value:s,onChange:function(t){return f(t.target.value)}}),(0,i.jsx)("button",{className:u,type:"submit",children:"Search"})]})})},s=n(151),f=n(87),p=n(281),l=n(936),d=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],a=e[1],u=(0,f.lr)(),d=(0,r.Z)(u,2),h=d[0],v=d[1],m=h.get("query"),x=(0,c.useState)(!1),g=(0,r.Z)(x,2),_=g[0],w=g[1];return(0,c.useEffect)((function(){m&&(w(!0),p.z1(m).then((function(t){a(t),w(!1)})).catch((function(t){console.error(t),w(!1)})))}),[m]),(0,i.jsxs)("div",{children:[(0,i.jsx)(o,{setSearchParams:v}),_?(0,i.jsx)(l.Loader,{}):(0,i.jsx)(s.O,{movies:n})]})}},281:function(t,e,n){n.d(e,{Hg:function(){return o},TP:function(){return f},q5:function(){return l},z1:function(){return s},zv:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="?api_key=f0775f3489a93860120578755f2ec813",o=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie".concat(i,"&query=").concat(e,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e).concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=722.4f8a11e8.chunk.js.map