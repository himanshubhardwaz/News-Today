(this["webpackJsonpnews-web-app"]=this["webpackJsonpnews-web-app"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(7),a=n.n(r),i=(n(27),n(28),n(4)),o=(n(29),n(5)),j=n(1),u=Object(c.createContext)(),b=function(e){var t="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=".concat(o.a.API_KEY),n=Object(c.useState)(t),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(j.jsx)(u.Provider,{value:[r,a],children:e.children})};var l=function(){var e=Object(c.useContext)(u),t=Object(i.a)(e,2),n=(t[0],t[1]);return Object(j.jsx)("div",{className:"banner",children:Object(j.jsx)("div",{className:"banner__heading",onClick:function(){n("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=".concat(o.a.API_KEY))},children:Object(j.jsx)("h1",{children:"NEWS TODAY"})})})},d=n(9),O=n.n(d),h=n(18),p=n(19),f=n.n(p);n(50);var x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useContext)(u),a=Object(i.a)(r,2),o=a[0];return a[1],Object(c.useEffect)((function(){(function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(o);case 2:return t=e.sent,s(t.data.articles),console.log("request >>>>> ",t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(c.useEffect)((function(){console.log(n)}),[n]),n.map((function(e,t){return Object(j.jsxs)("div",{className:"news",children:[Object(j.jsx)("div",{className:"news__title",children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsxs)("div",{className:"news__content",children:[Object(j.jsx)("div",{className:"news__image",children:Object(j.jsx)("img",{src:e.urlToImage,alt:"img"})}),Object(j.jsxs)("div",{className:"news__description",children:[Object(j.jsx)("p",{children:e.description}),Object(j.jsxs)("p",{children:[e.content," ",Object(j.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})]})]})}))},v=(n(51),n(20)),g=n.n(v);var w=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useContext)(u),a=Object(i.a)(r,2),b=(a[0],a[1]);return Object(j.jsxs)("div",{className:"searchBar",children:[Object(j.jsx)(g.a,{}),Object(j.jsx)("input",{placeholder:"search for News, Articles or Topics",type:"text",value:n,onChange:function(e){s(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(b("https://newsapi.org/v2/everything?q=".concat(n,"&apiKey=").concat(o.a.API_KEY)),s(""))}})]})};var m=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(b,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(w,{}),Object(j.jsx)(x,{})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),_()}},[[61,1,2]]]);
//# sourceMappingURL=main.f186ea92.chunk.js.map