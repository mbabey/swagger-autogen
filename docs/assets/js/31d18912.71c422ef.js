"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[932],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(t),f=o,g=l["".concat(c,".").concat(f)]||l[f]||u[f]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(7462),o=(t(7294),t(4137));const a={id:"forced-endpoint-creation",title:"Forced Endpoint Creation",sidebar_position:12},i=void 0,p={unversionedId:"endpoints/forced-endpoint-creation",id:"endpoints/forced-endpoint-creation",title:"Forced Endpoint Creation",description:"If you want to forcibly create an endpoint, use the #swagger.start and #swagger.end, for example:",source:"@site/docs/endpoints/forced-endpoint-creation.md",sourceDirName:"endpoints",slug:"/endpoints/forced-endpoint-creation",permalink:"/docs/endpoints/forced-endpoint-creation",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"forced-endpoint-creation",title:"Forced Endpoint Creation",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Manual capture",permalink:"/docs/endpoints/manual-capture"},next:{title:"Swagger 2.0",permalink:"/docs/swagger-2/"}},c={},s=[],d={toc:s},l="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to forcibly create an endpoint, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"#swagger.start")," and",(0,o.kt)("inlineCode",{parentName:"p"}," #swagger.end"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    // #swagger.start\n    ...\n    /*\n        #swagger.path = '/forcedEndpoint/{id}'\n        #swagger.method = 'put'\n        #swagger.description = 'Forced endpoint.'\n        #swagger.produces = ['application/json']\n    */\n    ...\n    /*  #swagger.parameters['id'] = {\n            in: 'path',\n            type: 'integer',\n            description: 'User ID.' \n        } */\n    ...\n    /*  #swagger.parameters['obj'] = {\n            in: 'query',\n            description: 'User data.',\n            schema: { $ref: '#/definitions/AddUser' }\n        } */\n    \n    // #swagger.responses[200]\n    ...\n    // #swagger.responses[404]\n    ...\n    // #swagger.end\n")))}u.isMDXComponent=!0}}]);