"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[496],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7661:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),i=n(6010),a=n(8259),o=n(3699),c=n(2735),s=n(7325);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:o},o))}function m(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},6536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(4137)),a=n(7661);const o={id:"authentication",title:"Authentication",sidebar_position:7},c="Authentication",s={unversionedId:"openapi-3/authentication/authentication",id:"openapi-3/authentication/authentication",title:"Authentication",description:"",source:"@site/docs/openapi-3/authentication/index.md",sourceDirName:"openapi-3/authentication",slug:"/openapi-3/authentication/",permalink:"/docs/openapi-3/authentication/",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"authentication",title:"Authentication",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"oneOf and anyOf",permalink:"/docs/openapi-3/x-of"},next:{title:"Bearer Auth",permalink:"/docs/openapi-3/authentication/bearer-auth"}},l={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("div",{style:{textAlign:"justify"}},(0,i.kt)("p",null,"It is possible to define authentication to endpoints. The following are some topics about that, but a complete approach can be seen on the website ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication"},"swagger.io"))),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);