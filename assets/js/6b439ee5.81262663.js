"use strict";(self.webpackChunktech_talks_in=self.webpackChunktech_talks_in||[]).push([[320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,m=s["".concat(u,".").concat(g)]||s[g]||d[g]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"live-coding-demo",title:"Playground - Live Coding",authors:["pavan"],description:"playground - live coding in docusaurus",tags:["api","development"]},i=void 0,l={permalink:"/blog/live-coding-demo",source:"@site/blog/2022-12-29-live-coding.md",title:"Playground - Live Coding",description:"playground - live coding in docusaurus",date:"2022-12-29T00:00:00.000Z",formattedDate:"December 29, 2022",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"development",permalink:"/blog/tags/development"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"Pavan Kumar",title:"tech-talks Core Team",url:"https://github.com/mrpavan",imageURL:"https://github.com/mrpavan.png",key:"pavan"}],frontMatter:{slug:"live-coding-demo",title:"Playground - Live Coding",authors:["pavan"],description:"playground - live coding in docusaurus",tags:["api","development"]},nextItem:{title:"Public API's Listing",permalink:"/blog/public-api-listing"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wanted to create something fun with jsx, Live coding. Go ahead try setting initial value of the counter and udpate function to your liking or write your own code. Give it a try! visit ",(0,o.kt)("strong",{parentName:"p"},"Live Coding Demo")," under tutorials on how to implement in your website"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function LiveCode(props) {\n    const [count, setCount] = useState(0);\n\n    return (\n        <div>\n        <h1> {count} </h1>\n        <button onClick={() => setCount(count + 1)}>Add</button>\n        <span> </span>\n        <button onClick={() => setCount(count - 1)}>Sub</button>\n        </div>\n    )\n}\n\n")))}s.isMDXComponent=!0}}]);