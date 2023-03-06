"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[84],{5084:function(n,e,r){r.r(e),r.d(e,{default:function(){return Ln}});var o,t,i,a,s,c,l,d,u,p,f,m,x,b,h,g,Z,j,w,y,v,k,C,z,R,E=r(9439),S=r(2791),N=r(9434),A=r(3634),q=r(6916),I=function(n){return n.contacts.items},L=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},P=(0,q.P1)([I,function(n){return n.filter}],(function(n,e){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),X=r(4164),$=r(168),B=r(3081),F=B.Z.div(o||(o=(0,$.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n"]))),Q=B.Z.div(t||(t=(0,$.Z)(["\n  position: relative;\n"]))),T=B.Z.button(i||(i=(0,$.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  padding: 10px;\n  background-color: transparent;\n  cursor: pointer;\n  color: #8f9eb2;\n\n  border: none;\n  border-radius: 50px;\n\n  transition: color 300ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: rgba(100, 135, 239, 0.8);\n  }\n"]))),G=r(9126),K=r(3329),O=document.querySelector("#modal-root"),U=function(n){var e=n.onClose,r=n.children;(0,S.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,X.createPortal)((0,K.jsx)(F,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,K.jsxs)(Q,{className:"modalContent",children:[(0,K.jsx)(T,{onClick:e,children:(0,K.jsx)(G.C7Q,{})}),r]})}),O)},V=r(1413),Y=B.Z.div(a||(a=(0,$.Z)(["\n  background-color: ",";\n  border-radius: ",";\n  padding: 30px;\n\n  @media (min-width: 320px) {\n    width: 300px;\n  }\n\n  @media (min-width: 768px) {\n    width: 320px;\n  }\n\n  > h2 {\n    text-align: center;\n    margin-bottom: 40px;\n  }\n"])),(function(n){return n.theme.secondaryBgCl}),(function(n){return n.theme.borderRadius})),H=B.Z.form(s||(s=(0,$.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),M=B.Z.label(c||(c=(0,$.Z)(["\n  position: relative;\n  color: #8f9eb2;\n\n  > input {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #8f9eb2;\n    padding: 8px 4px;\n\n    background-color: transparent;\n    outline: transparent;\n    color: #8f9eb2;\n    transition: border-color 300ms ease-in-out;\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      border-color: #fff;\n    }\n\n    &::placeholder {\n      color: transparent;\n      transition: color 300ms ease-in-out;\n    }\n\n    &:focus::placeholder {\n      color: #8f9eb2;\n    }\n\n    &:focus + span,\n    &:not(:placeholder-shown) + span {\n      color: #fff;\n      transform: translateY(-20px);\n    }\n  }\n\n  > span {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    font-size: 18px;\n    transform-origin: top left;\n    transition: transform 300ms ease-in-out, color 300ms ease-in-out;\n  }\n\n  > p {\n    position: absolute;\n    bottom: -15px;\n    left: 50%;\n    width: 300px;\n    transform: translateX(-50%);\n    font-size: 10px;\n    color: tomato;\n    text-align: center;\n  }\n"]))),D=B.Z.button(l||(l=(0,$.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 8px 16px;\n  border-radius: ",";\n  border: 1px solid #8f9eb2;\n  background-color: transparent;\n  color: #8f9eb2;\n  font-weight: 500;\n  font-size: 16px;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n\n  &:hover {\n    border-color: #6487ef;\n    background-color: #6487ef;\n    color: #ddf2ff;\n  }\n"])),(function(n){return n.theme.borderRadius})),J=r(887),W=r(4695),nn=r(2797),en=r(5218),rn=nn.Ry({name:nn.Z_().min(3).max(12).required().lowercase().trim().matches(/^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/,"Name may contain only letters, apostrophe, dash and spaces."),number:nn.Z_().min(6).max(10).required().trim().matches(/^\d+$/,"Number must be only digits")}).required(),on=function(n){var e=n.onClose,r=(0,N.I0)(),o=(0,N.v9)(I),t=(0,J.cI)({resolver:(0,W.X)(rn)}),i=t.register,a=t.reset,s=t.handleSubmit,c=t.formState.errors;return(0,K.jsxs)(Y,{children:[(0,K.jsx)("h2",{children:"Contact"}),(0,K.jsxs)(H,{onSubmit:s((function(n){if(o.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})))return en.ZP.error("".concat(n.name," is already in contacts"));r((0,A.uK)(n)),a(),e()})),autoComplete:"off",children:[(0,K.jsxs)(M,{children:[(0,K.jsx)("input",(0,V.Z)((0,V.Z)({},i("name")),{},{placeholder:"Enter contact name"})),(0,K.jsx)("span",{children:"Name"}),c.name&&(0,K.jsx)("p",{children:c.name.message})]}),(0,K.jsxs)(M,{children:[(0,K.jsx)("input",(0,V.Z)((0,V.Z)({},i("number")),{},{placeholder:"Enter contact number"})),(0,K.jsx)("span",{children:"Number"}),c.number&&(0,K.jsx)("p",{children:c.number.message})]}),(0,K.jsxs)(D,{type:"submit",children:[(0,K.jsx)(G.cQX,{}),"\xa0 Add contact"]})]})]})},tn=r(3165),an=B.Z.label(d||(d=(0,$.Z)(["\n  display: block;\n  margin: 30px auto;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  max-width: 400px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n  background-color: ",";\n  border-radius: ",";\n\n  > span {\n    margin-left: 10px;\n  }\n"])),(function(n){return n.theme.secondaryBgCl}),(function(n){return n.theme.borderRadius})),sn=B.Z.input(u||(u=(0,$.Z)(["\n  display: block;\n  margin-top: 8px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 8px 10px;\n  width: 80%;\n  color: #8f9eb2;\n  background-color: transparent;\n  border: 1px solid rgba(143, 158, 178, 0.5);\n  outline: none;\n  border-radius: ",";\n  transition: border-color 300ms ease-in-out;\n\n  &::placeholder {\n    text-align: center;\n    color: #8f9eb2;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: rgba(100, 135, 239, 0.8);\n  }\n"])),(function(n){return n.theme.borderRadius})),cn=function(){var n=(0,N.I0)();return(0,K.jsxs)(an,{children:[(0,K.jsx)(G.dVI,{}),(0,K.jsx)("span",{children:"Find contacts by name"}),(0,K.jsx)(sn,{type:"text",name:"filter",placeholder:"Enter contact name",onChange:function(e){n((0,tn.T)(e.target.value))}})]})},ln=B.Z.li(p||(p=(0,$.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 4px 16px;\n  background-color: #232f3d;\n  border-radius: ",";\n"])),(function(n){return n.theme.borderRadius})),dn=B.Z.div(f||(f=(0,$.Z)(["\n  margin-right: auto;\n"]))),un=B.Z.span(m||(m=(0,$.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n  font-size: 18px;\n  color: #8f9eb2;\n  font-weight: 500;\n"]))),pn=B.Z.span(x||(x=(0,$.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 18px;\n  color: #8f9eb2;\n"]))),fn=B.Z.button(b||(b=(0,$.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  background-color: transparent;\n  cursor: pointer;\n  color: #8f9eb2;\n\n  border: none;\n  border-radius: 50px;\n\n  transition: color 300ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: rgba(100, 135, 239, 0.8);\n  }\n"]))),mn=B.Z.p(h||(h=(0,$.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  background-color: #ea2364;\n  border-radius: 50px;\n  width: 40px;\n  height: 40px;\n  border: none;\n"]))),xn=B.Z.div(g||(g=(0,$.Z)(["\n  background-color: ",";\n  border-radius: ",";\n  padding: 30px;\n\n  @media (min-width: 320px) {\n    width: 300px;\n  }\n\n  @media (min-width: 768px) {\n    width: 320px;\n  }\n\n  > h2 {\n    color: #8f9eb2;\n    text-align: center;\n    margin-bottom: 40px;\n  }\n"])),(function(n){return n.theme.secondaryBgCl}),(function(n){return n.theme.borderRadius})),bn=B.Z.form(Z||(Z=(0,$.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),hn=B.Z.label(j||(j=(0,$.Z)(["\n  position: relative;\n  color: #8f9eb2;\n\n  > input {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #8f9eb2;\n    padding: 8px 4px;\n\n    background-color: transparent;\n    outline: transparent;\n    color: #8f9eb2;\n    transition: border-color 300ms ease-in-out;\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      border-color: #fff;\n    }\n\n    &::placeholder {\n      color: transparent;\n      transition: color 300ms ease-in-out;\n    }\n\n    &:focus::placeholder {\n      color: #8f9eb2;\n    }\n\n    &:focus + span,\n    &:not(:placeholder-shown) + span {\n      color: #fff;\n      transform: translateY(-20px);\n    }\n  }\n\n  > span {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    font-size: 18px;\n    transform-origin: top left;\n    transition: transform 300ms ease-in-out, color 300ms ease-in-out;\n  }\n\n  > p {\n    position: absolute;\n    bottom: -15px;\n    left: 50%;\n    width: 300px;\n    transform: translateX(-50%);\n    font-size: 10px;\n    color: tomato;\n    text-align: center;\n  }\n"]))),gn=B.Z.button(w||(w=(0,$.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 8px 16px;\n  border-radius: ",";\n  border: 1px solid #8f9eb2;\n  background-color: transparent;\n  color: #8f9eb2;\n  font-weight: 500;\n  font-size: 16px;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n\n  &:hover {\n    border-color: #6487ef;\n    background-color: #6487ef;\n    color: #ddf2ff;\n  }\n"])),(function(n){return n.theme.borderRadius})),Zn=nn.Ry({name:nn.Z_().min(3).max(12).required().trim().matches(/^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/,"Name may contain only letters, apostrophe, dash and spaces."),number:nn.Z_().min(6).max(10).required().trim().matches(/^\d+$/,"Number must be only digits")}).required(),jn=function(n){var e=n.id,r=n.name,o=n.number,t=n.onClose,i=(0,N.I0)(),a=(0,J.cI)({resolver:(0,W.X)(Zn),defaultValues:{name:r,number:o}}),s=a.register,c=a.handleSubmit,l=a.formState.errors;return(0,K.jsxs)(xn,{children:[(0,K.jsx)("h2",{children:"Edit contact"}),(0,K.jsxs)(bn,{onSubmit:c((function(n){if(r===n.name&&o===n.number)return en.ZP.error("contact not changed");i((0,A.Tk)((0,V.Z)({id:e},n))),t()})),autoComplete:"off",children:[(0,K.jsxs)(hn,{children:[(0,K.jsx)("input",(0,V.Z)((0,V.Z)({},s("name")),{},{placeholder:"Enter contact name"})),(0,K.jsx)("span",{children:"Name"}),l.name&&(0,K.jsx)("p",{children:l.name.message})]}),(0,K.jsxs)(hn,{children:[(0,K.jsx)("input",(0,V.Z)((0,V.Z)({},s("number")),{},{placeholder:"Enter contact number"})),(0,K.jsx)("span",{children:"Number"}),l.number&&(0,K.jsx)("p",{children:l.number.message})]}),(0,K.jsx)(gn,{type:"submit",children:"Save"})]})]})},wn=function(n){var e=n.id,r=n.name,o=n.number,t=(0,N.I0)(),i=(0,S.useState)(!1),a=(0,E.Z)(i,2),s=a[0],c=a[1],l=function(){return c((function(n){return!n}))};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(ln,{children:[(0,K.jsx)(mn,{children:r.slice(0,1).toUpperCase()}),(0,K.jsxs)(dn,{children:[(0,K.jsxs)(un,{children:[(0,K.jsx)(G.RPM,{}),r[0].toUpperCase()+r.slice(1)]}),(0,K.jsxs)(pn,{children:[(0,K.jsx)(G.lfG,{size:"14"}),o.replace(/\d{2}(?=.)/g,"$&-")]})]}),(0,K.jsx)(fn,{onClick:l,children:(0,K.jsx)(G.Ph1,{})}),(0,K.jsx)(fn,{onClick:function(){return t((0,A.GK)(e))},children:(0,K.jsx)(G.C7Q,{})})]}),s&&(0,K.jsx)(U,{onClose:l,children:(0,K.jsx)(jn,{onClose:l,id:e,name:r,number:o})})]})},yn=B.Z.ul(y||(y=(0,$.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 0 auto;\n  padding: 10px;\n  max-width: 400px;\n\n  border-radius: ",";\n"])),(function(n){return n.theme.borderRadius})),vn=B.Z.p(v||(v=(0,$.Z)(["\n  display: inline-block;\n  padding: 4px 16px;\n  text-align: center;\n  font-size: 18px;\n  color: #8f9eb2;\n  background-color: #232f3d;\n  border-radius: ",";\n"])),(function(n){return n.theme.borderRadius})),kn=function(){var n=(0,N.v9)(P);return(0,K.jsx)(yn,{children:0===n.length?(0,K.jsx)(vn,{children:"Contacts list is empty!"}):n.map((function(n){var e=n.id,r=n.name,o=n.number;return(0,K.jsx)(wn,{id:e,name:r,number:o},e)}))})},Cn=r(4270),zn=B.Z.div(k||(k=(0,$.Z)(["\n  display: flex;\n  margin: 20px auto;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 400px;\n"]))),Rn=B.Z.button(C||(C=(0,$.Z)(["\n  padding: 8px 16px;\n  border-radius: ",";\n  border: 1px solid #8f9eb2;\n  background-color: transparent;\n  color: #8f9eb2;\n  font-weight: 500;\n  font-size: 16px;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n\n  &:hover {\n    border-color: #6487ef;\n    background-color: #6487ef;\n    color: #ddf2ff;\n  }\n"])),(function(n){return n.theme.borderRadius})),En=B.Z.p(z||(z=(0,$.Z)(["\n  color: #8f9eb2;\n  font-weight: 500;\n  font-size: 16px;\n"]))),Sn=function(n){var e=n.onOpen,r=(0,N.v9)(I);return(0,K.jsxs)(zn,{children:[(0,K.jsxs)(En,{children:["All: ",r.length]}),(0,K.jsx)(Rn,{onClick:e,children:"+ Add"})]})},Nn=r(8966),An=B.Z.div(R||(R=(0,$.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),qn=function(){return(0,K.jsx)(An,{children:(0,K.jsx)(Nn.g4,{height:"80",width:"80",radius:"9",color:"#8f9eb2",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"wrapper",visible:!0})})},In={container:{minHeight:"calc(100vh - 180px)"}},Ln=function(){var n=(0,N.I0)(),e=(0,N.v9)(L),r=(0,N.v9)(_),o=(0,S.useState)(!1),t=(0,E.Z)(o,2),i=t[0],a=t[1],s=function(){return a((function(n){return!n}))};return(0,S.useEffect)((function(){n((0,A.yF)())}),[n]),(0,K.jsxs)("div",{style:In.container,children:[(0,K.jsx)(Cn.q,{children:(0,K.jsx)("title",{children:"Contacts"})}),(0,K.jsx)(cn,{}),(0,K.jsx)(Sn,{onOpen:s}),e&&!r&&(0,K.jsx)(qn,{}),(0,K.jsx)(kn,{}),i&&(0,K.jsx)(U,{onClose:s,children:(0,K.jsx)(on,{onClose:s})})]})}}}]);
//# sourceMappingURL=84.454037f1.chunk.js.map