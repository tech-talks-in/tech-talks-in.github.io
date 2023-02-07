"use strict";(self.webpackChunktech_talks_in=self.webpackChunktech_talks_in||[]).push([[4890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={slug:"github-multiple-accounts",title:"GitHub Multiple Accounts",authors:["pavan"],tags:["github","ssh"]},i=void 0,s={permalink:"/blog/github-multiple-accounts",source:"@site/blog/2022-11-11-github-multiple-accounts.md",title:"GitHub Multiple Accounts",description:"To use two GitHub accounts on a Mac over ssh, you will need to set up separate ssh keys for each account.",date:"2022-11-11T00:00:00.000Z",formattedDate:"November 11, 2022",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"ssh",permalink:"/blog/tags/ssh"}],readingTime:2.04,hasTruncateMarker:!0,authors:[{name:"Pavan Kumar",title:"tech-talks Core Team",url:"https://github.com/mrpavan",imageURL:"https://github.com/mrpavan.png",key:"pavan"}],frontMatter:{slug:"github-multiple-accounts",title:"GitHub Multiple Accounts",authors:["pavan"],tags:["github","ssh"]},prevItem:{title:"Public API's Listing",permalink:"/blog/public-api-listing"},nextItem:{title:"Unlock the full potential of your customer data with the right CDP and DMP tools",permalink:"/blog/cdp-dmp-landscape"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use two GitHub accounts on a Mac over ssh, you will need to set up separate ssh keys for each account."),(0,o.kt)("p",null,"Follow the steps below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Generate a new ssh key for your second GitHub account. You can do this by running the ssh-keygen command in the terminal and following the prompts. Make sure to specify a different file name for the key than the one you used for your first account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Add the public key for your second account to your GitHub account. You can do this by going to the "SSH and GPG keys" section of your GitHub profile settings and clicking the "New SSH key" button. Then, paste the contents of the public key file (located in the ~/.ssh directory on your Mac) into the "Key" field and give it a descriptive name.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add the private key for your second account to your ssh agent. You can do this by running the following command in the terminal:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="username@hostname:~$"',title:'"username@hostname:~$"'},"ssh-add ~/.ssh/<private key file name>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Modify your ssh config file to specify which ssh key to use for each GitHub account. To do this, open the ~/.ssh/config file in a text editor and add the following lines:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="username@hostname:~$nano ~/.ssh/config"',title:'"username@hostname:~$nano','~/.ssh/config"':!0},"Host github.com-<account1username>\n  HostName github.com\n  User git\n  IdentityFile ~/.ssh/<private key file name for account 1>\n\nHost github.com-<account2username>\n  HostName github.com\n  User git\n  IdentityFile ~/.ssh/<private key file name for account 2>\n")))),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<account1username>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<account2username>")," with the respective usernames for each account, and ",(0,o.kt)("inlineCode",{parentName:"p"},"<private key file name for account 1>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<private key file name for account 2>")," with the respective private key file names for each account."),(0,o.kt)("admonition",{title:"check access by running below on terminal ",type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -T git@github.com-account1username\n")),(0,o.kt)("p",{parentName:"admonition"},"Hi account1username! You've successfully authenticated, but GitHub does not provide shell access.")),(0,o.kt)("p",null,"Repeat for ",(0,o.kt)("em",{parentName:"p"},"account2username"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations!")," you have successfuly authenticated and verified access to both the accounts and you may clone and do other operations by running git commands. Use the ",(0,o.kt)("strong",{parentName:"p"},"modified ssh URLs")," for your repositories to push and pull code from your separate accounts. For example, to push to a repository owned by your second account, you would use a URL like ",(0,o.kt)("inlineCode",{parentName:"p"},"git@github.com-<account2username>:<username>/<repository>.git"),"."),(0,o.kt)("p",null,"For any reason, if you ever wanted to check available identities in your ssh agent or delete them use below commands in your terminal"),(0,o.kt)("admonition",{title:"Run with extreme caution",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To list all identities ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-add -l")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-add -L")),(0,o.kt)("p",{parentName:"admonition"},"To remove all identities ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-add -D"))))}p.isMDXComponent=!0}}]);