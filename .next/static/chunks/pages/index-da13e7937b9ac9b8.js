(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4369)}])},4369:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var s=t(5893),r=t(9008),i=t.n(r),a=t(7294),c=t(4848),u=t.n(c);function o(){let[e,n]=(0,a.useState)(""),[t,r]=(0,a.useState)();async function c(t){t.preventDefault();try{let s=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({animal:e})}),i=await s.json();if(200!==s.status)throw i.error||Error("Request failed with status ".concat(s.status));r(i.result),n("")}catch(a){console.error(a),alert(a.message)}}return(0,s.jsxs)("div",{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"OpenAI Quickstart"}),(0,s.jsx)("link",{rel:"icon",href:"/commerce.png"})]}),(0,s.jsxs)("main",{className:u().main,children:[(0,s.jsx)("img",{src:"/commerce.png",className:u().icon}),(0,s.jsx)("h3",{children:"Tell us about your product"}),(0,s.jsxs)("form",{onSubmit:c,children:[(0,s.jsx)("input",{type:"text",name:"specs",placeholder:"Enter specs",value:e,onChange:e=>n(e.target.value)}),(0,s.jsx)("input",{type:"submit",value:"Generate description"})]}),(0,s.jsx)("div",{className:u().result,children:t})]})]})}},4848:function(e){e.exports={main:"index_main__3wZvj",icon:"index_icon__CgRrC",result:"index_result__66e57"}},9008:function(e,n,t){e.exports=t(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);