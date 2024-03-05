"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[416],{5050:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(9434),r=n(3165),s=n(1313),c=n(184),i={containerDiv:["flex","justify-center","mt-4"].join(" "),filterForm:["flex","justify-center","flex-col","border-2","p-8","bg-white","rounded-2xl","shadow-lg"].join(" "),textH3:["text-center","mb-5"].join(" "),label:"mb-5"},l=function(){var e=(0,a.I0)();return(0,c.jsx)("div",{className:i.containerDiv,children:(0,c.jsxs)("form",{className:i.filterForm,children:[(0,c.jsx)("h3",{className:i.textH3,children:"Find contacts by name"}),(0,c.jsx)("label",{className:i.label,children:(0,c.jsx)(s.Z,{onChange:function(t){t.preventDefault();var n=t.target.value;e((0,r.f)(n))},size:"small",label:"Enter name"})})]})})},o=n(3634),m=n(6916),u=function(e){return e.contacts.contacts},d=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},f=(0,m.P1)([u,function(e){return e.filters}],(function(e,t){return""===t.filter?e:e.filter((function(e){return e.name.toLowerCase().includes(t.filter.toLowerCase())}))})),x=n(142),j={containerDiv:["flex","justify-center","mt-5"].join(" "),contactForm:["flex","flex-col","bg-white","border-2","p-8","rounded-2xl","shadow-lg"].join(" "),label:"mb-5"},b=function(){var e=(0,a.I0)(),t=(0,a.v9)(u).map((function(e){return e.name}));return(0,c.jsx)("div",{className:j.containerDiv,children:(0,c.jsxs)("form",{className:j.contactForm,onSubmit:function(n){n.preventDefault();var a={name:n.target.elements.name.value,number:n.target.elements.number.value};if(t.includes(a.name))return n.target.reset(),alert("".concat(a.name," is alredy in contacts"));e((0,o.uK)(a)),n.target.reset()},children:[(0,c.jsx)("label",{className:j.label,children:(0,c.jsx)(s.Z,{type:"text",size:"small",name:"name",label:"Name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,c.jsx)("label",{className:j.label,children:(0,c.jsx)(s.Z,{type:"tel",size:"small",name:"number",label:"Number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,c.jsx)(x.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})},v={contactsListItem:"ContactsList_contactsListItem__DDy5j",contactsName:"ContactsList_contactsName__aMNYv"},p=function(){var e=(0,a.v9)(f),t=(0,a.I0)();return(0,c.jsx)("ul",{className:v.contactsList,children:e.map((function(e){return(0,c.jsxs)("li",{className:v.contactsItem,children:[(0,c.jsxs)("span",{className:v.contactsName,children:[e.name,": ",e.number]}),(0,c.jsx)(x.Z,{type:"submit",onClick:function(){return n=e.id,t((0,o.GK)(n));var n},children:"Delete"})]},e.id)}))})},g=n(6907),N={containerDiv:["flex","mb-4","gap-4"].join(" "),contactsDiv:["mt-6"]},_=function(){var e=(0,a.v9)(d),t=(0,a.v9)(h);return(0,c.jsxs)("div",{className:N.containerDiv,children:[(0,c.jsx)(g.B6,{children:(0,c.jsx)(g.ql,{children:(0,c.jsx)("title",{children:"Phonebook"})})}),(0,c.jsxs)("div",{children:[(0,c.jsx)(b,{}),(0,c.jsx)(l,{})]}),(0,c.jsxs)("div",{className:N.contactsDiv,children:[e?(0,c.jsx)("p",{children:"Loading contacts..."}):(0,c.jsx)(p,{}),t&&(0,c.jsx)("p",{children:"Something went wrong. Try again later."})]})]})}}}]);
//# sourceMappingURL=phonebook-page.9eb15232.chunk.js.map