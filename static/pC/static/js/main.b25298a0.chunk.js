(this.webpackJsonpp_c=this.webpackJsonpp_c||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),s=(a(22),a(23),a(7)),m=a(1),o=a(9),i=(a(24),null);function u(e,t){return e===t}var E=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){i=function(e){l(a===e?"":e)}}),[a]),c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"head_content"},c.a.createElement("div",{className:"logo"},"\u4e2a\u4eba\u4e2d\u5fc3"),c.a.createElement("ul",{className:"nav"},c.a.createElement("li",{className:"case",onClick:function(){i("case")}},c.a.createElement("span",{className:"case_text"},"\u6848\u4f8b"),u("case",a)&&c.a.createElement("div",{className:"case_down down"},c.a.createElement(s.b,{to:"/pC/case/project"},"project"),c.a.createElement(s.b,{to:"/pC/case/game"},"game"),c.a.createElement(s.b,{to:"/pC/case/demo"},"demo"))),c.a.createElement("li",{className:"note",onClick:function(){i("note")}},c.a.createElement("span",{className:"note_text"},"\u7b14\u8bb0"),u("note",a)&&c.a.createElement("div",{className:"note_down down"},c.a.createElement("a",{href:"#"},"\u529f\u80fd\u5f00\u53d1\u4e2d"))),c.a.createElement("li",{className:"bok",onClick:function(){i("bok")}},c.a.createElement("span",{className:"bok_text"},"\u672c\u4eba\u535a\u5ba2"),u("bok",a)&&c.a.createElement("div",{className:"bok_down down"},c.a.createElement("a",{href:"/bok"},"\u70b9\u51fb\u8fdb\u5165\u535a\u5ba2"))))))};a(30);var p="http://127.0.0.1:10086";var d=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){(function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("GET",e,!0),n.send(),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&t(n.responseText)}}))})(p+"/pC/getCase?type="+e.match.params.id).then((function(e){var t=JSON.parse(e).data;r(t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:p+e.href},c.a.createElement("img",{src:e.imgSrc}),c.a.createElement("div",null,c.a.createElement("h4",null,e.title),c.a.createElement("p",null,e.intreduce))))})))}))}),[e.match.params.id]),c.a.createElement("div",{className:"case_ass"},c.a.createElement("ul",{className:"case_content"},l))};var f=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"\u529f\u80fd\u5b8c\u5584\u4e2d\uff0c\u53ea\u6709\u6848\u4f8b\u6309\u94ae\u548c\u535a\u5ba2\u6309\u94ae\u6709\u6548"))};var v=function(){return c.a.createElement("div",{id:"pC"},c.a.createElement(s.a,null,c.a.createElement(E,null),c.a.createElement("div",{className:"pC_content"},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/pC/case/:id",component:d}),c.a.createElement(m.a,{path:"/pC",exact:!0,component:f})))))};r.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b25298a0.chunk.js.map