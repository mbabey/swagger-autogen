"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[397],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={id:"api-keys-token",title:"API Keys (Token)",sidebar_position:1},i=void 0,c={unversionedId:"swagger-2/authentication/api-keys-token",id:"swagger-2/authentication/api-keys-token",title:"API Keys (Token)",description:"The security example below was taken from the original Swagger documentation.",source:"@site/docs/swagger-2/authentication/api-keys-token.md",sourceDirName:"swagger-2/authentication",slug:"/swagger-2/authentication/api-keys-token",permalink:"/docs/swagger-2/authentication/api-keys-token",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"api-keys-token",title:"API Keys (Token)",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/swagger-2/authentication/"},next:{title:"OAuth2",permalink:"/docs/swagger-2/authentication/oauth2"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The security example below was taken from the original Swagger documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const doc = {\n  ...\n  securityDefinitions: {\n    apiKeyAuth: {\n      type: 'apiKey',\n      in: 'header', // can be 'header', 'query' or 'cookie'\n      name: 'X-API-KEY', // name of the header, query parameter or cookie\n      description: 'Some description...'\n    }\n  }\n};\n")),(0,a.kt)("p",null,"To see more about the properties of the ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," object, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/advanced-usage"},"Advanced Usage")," section."),(0,a.kt)("p",null,"In the endpoint, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"#swagger.security"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example"',title:'"Example"'},"app.get('/path', (req, res) => {\n    ...\n    /* #swagger.security = [{\n            \"apiKeyAuth\": []\n    }] */\n    ...\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," To assign security to an entire route, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/endpoints/property-inheritance"},"Property Inheritance")," section."))}d.isMDXComponent=!0}}]);