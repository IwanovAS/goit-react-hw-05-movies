"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[181],{515:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(689),a=e(439),u=e(281),c=e(791),i=e(184),o="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",s=function(){var t=function(t){var n=(0,c.useState)([]),e=(0,a.Z)(n,2),r=e[0],i=e[1],o=(0,c.useState)(!0),s=(0,a.Z)(o,2),p=s[0],f=s[1],l=(0,c.useState)(null),d=(0,a.Z)(l,2),h=d[0],v=d[1];return(0,c.useEffect)((function(){f(!0),v(null),u.zv(t).then((function(t){i(t),f(!1)})).catch((function(t){v(t),f(!1)}))}),[t]),{movieCredits:r,loading:p,error:h}}((0,r.UO)().movieId),n=t.movieCredits;return(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:n.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w300_and_h450_bestv2/".concat(t.profile_path):o,onError:function(t){t.target.src=o},width:250,alt:t.name}),(0,i.jsx)("p",{children:t.name}),(0,i.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}},281:function(t,n,e){e.d(n,{Hg:function(){return o},TP:function(){return p},q5:function(){return l},z1:function(){return s},zv:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="?api_key=f0775f3489a93860120578755f2ec813",o=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie".concat(i,"&query=").concat(n,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n).concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=181.f4dca6e4.chunk.js.map