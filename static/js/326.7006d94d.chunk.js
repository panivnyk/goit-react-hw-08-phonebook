"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[326],{4326:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r,o,i,c,a,u,s,f=e(2791),l=e(9434),d=e(3634),p=function(n){return n.contacts},x=function(n){return n.filter},h=function(n){return n.contacts.isLoading},b=e(168),g=e(7402),v=g.Z.ul(r||(r=(0,b.Z)(["\n  margin-left: 40px;\n  list-style-type: decimal;\n  padding: 0;\n  font-size: 18px;\n  font-weight: 500;\n"]))),m=g.Z.li(o||(o=(0,b.Z)([""]))),Z=g.Z.p(i||(i=(0,b.Z)([""]))),j=g.Z.button(c||(c=(0,b.Z)(["\n  margin-left: 10px;\n  font-size: 14px;\n  cursor: pointer;\n"]))),k=e(184),w=function(){var n=(0,l.I0)(),t=(0,l.v9)(p).contactsList,e=(0,l.v9)(x),r=function(){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}();return(0,k.jsxs)(v,{children:[0===r.length&&(0,k.jsx)("p",{children:"There is not any contacts"}),r.map((function(t){var e=t.name,r=t.phone,o=t.id;return(0,k.jsx)(m,{children:(0,k.jsxs)(Z,{children:[e,": ",r,(0,k.jsx)(j,{type:"button",onClick:function(){return t=o,void n((0,d.GK)(t));var t},children:"Delete"})]})},o)}))]})},y=g.Z.form(a||(a=(0,b.Z)(["\n  display: flex;\n  width: 100%;\n  gap: 4px;\n  margin-bottom: 12px;\n"]))),_=g.Z.input(u||(u=(0,b.Z)(["\n  flex-grow: 1;\n  padding: 8px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  font: inherit;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  resize: none;\n"]))),C=g.Z.button(s||(s=(0,b.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  padding: 0 8px;\n  border-radius: 4px;\n  background-color: #3f51b5;\n  color: #fff;\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n\n  &:active {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),L=function(){var n=(0,l.I0)();return(0,k.jsxs)(y,{onSubmit:function(t){t.preventDefault();var e=t.currentTarget,r=e.elements.text.value;if(""!==r)return n((0,d.uK)(r)),void e.reset();alert("Contact cannot be empty. Enter some text!")},children:[(0,k.jsx)(_,{name:"text"}),(0,k.jsx)(C,{type:"submit",children:"Add contactk"})]})},z=e(1362);function I(){var n=(0,l.I0)(),t=(0,l.v9)(h);return(0,f.useEffect)((function(){n((0,d.yF)())}),[n]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(L,{}),(0,k.jsx)("div",{children:t&&(0,k.jsx)(z.a,{})}),(0,k.jsx)(w,{})]})}}}]);
//# sourceMappingURL=326.7006d94d.chunk.js.map