(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(5),r=c.n(i),s=(c(10),c(11),c(4)),o=c(2),l=c(0);var j=function(e){var t=e.id,c=e.flip,n=e.value,a=e.setCompareArr;return Object(l.jsx)("div",{className:"flip-card",onClick:function(){return function(e){a({id:e,value:n,flip:!0})}(t)},id:t,children:Object(l.jsxs)("div",{className:"flip-card-inner  ".concat(c?"flip":"no-flip"),children:[Object(l.jsx)("div",{className:"flip-card-front",children:Object(l.jsx)("img",{src:"https://image.shutterstock.com/image-illustration/try-your-luck-text-on-600w-1865733352.jpg",alt:""})}),Object(l.jsx)("div",{className:"flip-card-back",children:Object(l.jsx)("h1",{children:n})})]})})};function d(e){e.sort((function(){return Math.random()-.5}))}var u=function(){var e=[],t=Object(n.useState)(e),c=Object(o.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)({}),u=Object(o.a)(r,2),b=u[0],m=u[1],f=Object(n.useState)(!1),O=Object(o.a)(f,2),h=O[0],p=O[1],v=Object(n.useState)("Memory Game!"),g=Object(o.a)(v,2),x=g[0],N=g[1],y=Object(n.useState)(1),C=Object(o.a)(y,2),S=C[0],k=C[1],A=Object(n.useState)(0),M=Object(o.a)(A,2),w=M[0],F=M[1];!function(t){for(var c=1;c<=t;c++)e.push({flip:!1,value:Math.ceil(c/2)})}(16),d(e);var G=function(){d(e),i(e),m({}),k(1),F(0)},D=function(e){i(a.map((function(t,c){return c===e.id?(t.flip=e.flip,t):t}))),m((function(t){return c=t,"[object Object]"===Object.prototype.toString.call(c)&&"{}"===JSON.stringify(c)?e:t.id===e.id?t:t.value===e.value?(k(S+1),F(w+1),console.log("Match Found",S),S>=8&&(N("Congratulation you Won!"),p(!0)),{}):(F(w+1),setTimeout((function(){i(a.map((function(c,n){return n===t.id||n===e.id?(c.flip=!1,c):c})))}),500),{});var c}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{className:"board-header",children:[Object(l.jsxs)("h2",{className:"board-heading score",children:["Moves: ",w]}),Object(l.jsx)("h2",{className:"board-heading",children:x}),Object(l.jsx)("button",{className:"btn",onClick:G,disabled:h,children:"Reset"})]}),Object(l.jsx)("div",{className:"board-body",children:h?Object(l.jsxs)("div",{className:"winnerContainer",children:[Object(l.jsx)("iframe",{title:"winner Gif",src:"https://giphy.com/embed/l0HlSDiA6WUytl9oA",className:"winnerGif"}),Object(l.jsx)("button",{className:"btn",onClick:function(){G(),N("Memory Game!"),p(!1)},children:"Play Again"})]}):Object(l.jsx)("div",{className:"board-game",children:a.map((function(e,t){return Object(l.jsx)(j,Object(s.a)(Object(s.a)({cardDeck:a},e),{},{id:t,compareCardArr:b,setCompareArr:D}),t)}))})})]})};var b=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(u,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.a2345be9.chunk.js.map