"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[446],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={id:"bearer-auth",title:"Bearer Auth",sidebar_position:1},i=void 0,p={unversionedId:"openapi-3/authentication/bearer-auth",id:"openapi-3/authentication/bearer-auth",title:"Bearer Auth",description:"The security example below was taken from the original Swagger documentation.",source:"@site/docs/openapi-3/authentication/bearer-auth.md",sourceDirName:"openapi-3/authentication",slug:"/openapi-3/authentication/bearer-auth",permalink:"/docs/openapi-3/authentication/bearer-auth",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"bearer-auth",title:"Bearer Auth",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/openapi-3/authentication/"},next:{title:"OAuth2",permalink:"/docs/openapi-3/authentication/oauth2"}},c={},u=[],s={toc:u},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The security example below was taken from the original Swagger documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const doc = {\n    ...\n    components: {\n        securitySchemes:{\n            bearerAuth: {\n                type: 'http',\n                scheme: 'bearer'\n            }\n        }\n    }\n};\n")),(0,a.kt)("p",null,"To see more about the properties of the ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," object, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/advanced-usage#openapi-3x"},"Advanced Usage")," section."),(0,a.kt)("p",null,"At the endpoint, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"#swagger.security"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/path', (req, res) => {\n    ...\n    /* #swagger.security = [{\n            \"bearerAuth\": []\n    }] */\n    ...\n});\n")))}d.isMDXComponent=!0}}]);