"use strict";(self.webpackChunktech_talks_in=self.webpackChunktech_talks_in||[]).push([[4021],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(a),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=a(7462),r=(a(7294),a(3905));const i={slug:"json-web-tokens",title:"JWT",authors:{name:"Pavan Kumar",title:"tech-talks Core Team",url:"https://github.com/mrpavan",image_url:"https://github.com/mrpavan.png"},tags:["jwt","jsonwebtokens","node","authentication","authorization"]},o=void 0,s={permalink:"/blog/json-web-tokens",source:"@site/blog/2022-05-27-json-web-tokens.md",title:"JWT",description:"You might have heard about JWT if you are in field of developing applications or not from other domains. JSON Web Token (JWT) is a standard for representing claims securely between two parties. It is typically used to securely transmit information between a server and a client, such as an API and a single-page application. JWTs are a useful tool for securely transmitting information between parties, and are commonly used in modern web applications for authentication and authorization",date:"2022-05-27T00:00:00.000Z",formattedDate:"May 27, 2022",tags:[{label:"jwt",permalink:"/blog/tags/jwt"},{label:"jsonwebtokens",permalink:"/blog/tags/jsonwebtokens"},{label:"node",permalink:"/blog/tags/node"},{label:"authentication",permalink:"/blog/tags/authentication"},{label:"authorization",permalink:"/blog/tags/authorization"}],readingTime:4.6,hasTruncateMarker:!0,authors:[{name:"Pavan Kumar",title:"tech-talks Core Team",url:"https://github.com/mrpavan",image_url:"https://github.com/mrpavan.png",imageURL:"https://github.com/mrpavan.png"}],frontMatter:{slug:"json-web-tokens",title:"JWT",authors:{name:"Pavan Kumar",title:"tech-talks Core Team",url:"https://github.com/mrpavan",image_url:"https://github.com/mrpavan.png",imageURL:"https://github.com/mrpavan.png"},tags:["jwt","jsonwebtokens","node","authentication","authorization"]},prevItem:{title:"GitHub Multiple Accounts",permalink:"/blog/github-multiple-accounts"},nextItem:{title:"MDX Sample",permalink:"/blog/mdx-sample-post"}},l={authorsImageUrls:[void 0]},h=[],c={toc:h};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You might have heard about JWT if you are in field of developing applications or not from other domains. ",(0,r.kt)("strong",{parentName:"p"},"JSON Web Token")," (JWT) is a standard for representing claims securely between two parties. It is typically used to securely transmit information between a server and a client, such as an API and a single-page application. JWTs are a useful tool for securely transmitting information between parties, and are commonly used in modern web applications for authentication and authorization"),(0,r.kt)("p",null,"A JWT consists of three parts: a header, a payload, and a signature. The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA. The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims. Registered claims are a set of predefined claims that are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of the registered claims are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and others. Public claims are claims that are defined in the IANA JSON Web Token Registry or defined in other specifications, but are not registered. Private claims are claims that are used to share information between parties that agree on using them and are neither registered or public claims..."),(0,r.kt)("p",null,"The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. The signature is created by taking the encoded header, the encoded payload, a secret, and the algorithm specified in the header, and signing that. For example, if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:"),(0,r.kt)("p",null,'HMACSHA256(\nbase64UrlEncode(header) + "." +\nbase64UrlEncode(payload),\nsecret)'),(0,r.kt)("p",null,"To verify the signature, the recipient of the JWT needs to compute the signature and compare it to the one provided in the JWT. If they match, the JWT is considered to be valid."),(0,r.kt)("p",null,"JWTs are commonly used to authenticate users. When a user logs in to a system, the server generates a JWT that contains the user's information, such as the user's name, email, and other details, and signs it with a secret. The JWT is then sent back to the client, where it is stored in a cookie or local storage. When the client makes a request to the server, it includes the JWT in the request header. The server verifies the signature and, if it is valid, grants the client access to the requested resource."),(0,r.kt)("p",null,"JWTs have a number of benefits over traditional authentication methods, such as cookies and sessions. They are stateless, meaning that the server does not need to store any information about the client in order to verify the JWT. This makes them scalable and easy to implement. They are also secure, as they are signed and can't be modified without the signature being invalidated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"),(0,r.kt)("p",null,"This JWT has three parts, separated by dots (.). The first part is the header, which consists of the type of the token (JWT) and the signing algorithm being used (HS256). The second part is the payload, which contains the claims. In this case, the claims are the subject (sub), which is the user's ID, and the name (name) of the user. The third part is the signature, which is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way."),(0,r.kt)("p",null,"Here is the same JWT, with the parts decoded:"),(0,r.kt)("p",null,'Header:\n{\n"alg": "HS256",\n"typ": "JWT"\n}'),(0,r.kt)("p",null,'Payload:\n{\n"sub": "1234567890",\n"name": "John Doe",\n"iat": 1516239022\n}'),(0,r.kt)("p",null,"To create this JWT, you would first need to create the header and payload as JSON objects, and then encode them using base64Url encoding. Then, you would create the signature by signing the encoded header and payload with a secret using the HMAC SHA256 algorithm."),(0,r.kt)("p",null,"To verify the signature of this JWT, you would need to decode the header and payload and then recompute the signature using the same algorithm and secret. If the signature you compute matches the one provided in the JWT, the JWT is considered to be valid."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nodejs sample")),(0,r.kt)("p",null,"To use JWTs in a Node.js application, you can use the jsonwebtoken library. This library provides functions for creating and verifying JWTs."),(0,r.kt)("p",null,"Here is an example of how you can use the jsonwebtoken library to create a JWT:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const jwt = require('jsonwebtoken');\n\nconst payload = {\n  sub: '1234567890',\n  name: 'John Doe'\n};\n\nconst secret = 'my-secret';\n\nconst token = jwt.sign(payload, secret);\n\n")),(0,r.kt)("p",null,"The sign() function takes the payload and the secret as arguments, and returns the JWT. The payload can be any JSON object, and the secret is a string that is used to sign the JWT."),(0,r.kt)("p",null,"Here is an example of how you can use the jsonwebtoken library to verify a JWT:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const jwt = require('jsonwebtoken');\n\nconst token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';\nconst secret = 'my-secret';\n\ntry {\n  const payload = jwt.verify(token, secret);\n  console.log(payload);\n} catch (error) {\n  console.error(error);\n}\n\n")),(0,r.kt)("p",null,"The verify() function takes the JWT and the secret as arguments, and returns the payload if the signature is valid. If the signature is invalid, it throws an error."),(0,r.kt)("p",null,"You can also pass additional options to the sign() and verify() functions, such as the expiration time of the JWT or the audience for which the JWT is intended."))}u.isMDXComponent=!0}}]);