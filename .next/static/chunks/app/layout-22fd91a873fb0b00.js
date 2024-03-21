(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6334:function(t,n,r){Promise.resolve().then(r.t.bind(r,2853,23)),Promise.resolve().then(r.bind(r,5343)),Promise.resolve().then(r.bind(r,9817)),Promise.resolve().then(r.t.bind(r,413,23)),Promise.resolve().then(r.t.bind(r,3925,23))},5343:function(t,n,r){"use strict";r.r(n),r.d(n,{ThemeProvider:function(){return ThemeProvider}});var o=r(7437),i=r(2265);let a=["light","dark"],s="(prefers-color-scheme: dark)",l="undefined"==typeof window,c=(0,i.createContext)(void 0),$=t=>(0,i.useContext)(c)?i.createElement(i.Fragment,null,t.children):i.createElement(f,t),d=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:o=!0,storageKey:l="theme",themes:m=d,defaultTheme:h=r?"system":"light",attribute:v="data-theme",value:w,children:y,nonce:g})=>{let[k,E]=(0,i.useState)(()=>S(l,h)),[T,_]=(0,i.useState)(()=>S(l)),C=w?Object.values(w):m,P=(0,i.useCallback)(t=>{let i=t;if(!i)return;"system"===t&&r&&(i=p());let s=w?w[i]:i,l=n?b():null,c=document.documentElement;if("class"===v?(c.classList.remove(...C),s&&c.classList.add(s)):s?c.setAttribute(v,s):c.removeAttribute(v),o){let t=a.includes(h)?h:null,n=a.includes(i)?i:t;c.style.colorScheme=n}null==l||l()},[]),A=(0,i.useCallback)(t=>{E(t);try{localStorage.setItem(l,t)}catch(t){}},[t]),j=(0,i.useCallback)(n=>{let o=p(n);_(o),"system"===k&&r&&!t&&P("system")},[k,t]);(0,i.useEffect)(()=>{let t=window.matchMedia(s);return t.addListener(j),j(t),()=>t.removeListener(j)},[j]),(0,i.useEffect)(()=>{let e=t=>{t.key===l&&A(t.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),(0,i.useEffect)(()=>{P(null!=t?t:k)},[t,k]);let x=(0,i.useMemo)(()=>({theme:k,setTheme:A,forcedTheme:t,resolvedTheme:"system"===k?T:k,themes:r?[...m,"system"]:m,systemTheme:r?T:void 0}),[k,A,t,T,r,m]);return i.createElement(c.Provider,{value:x},i.createElement(u,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:o,storageKey:l,themes:m,defaultTheme:h,attribute:v,value:w,children:y,attrs:C,nonce:g}),y)},u=(0,i.memo)(({forcedTheme:t,storageKey:n,attribute:r,enableSystem:o,enableColorScheme:l,defaultTheme:c,value:d,attrs:u,nonce:m})=>{let h="system"===c,v="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${u.map(t=>`'${t}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,w=l?a.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(t,n=!1,o=!0)=>{let i=d?d[t]:t,s=n?t+"|| ''":`'${i}'`,c="";return l&&o&&!n&&a.includes(t)&&(c+=`d.style.colorScheme = '${t}';`),"class"===r?c+=n||i?`c.add(${s})`:"null":i&&(c+=`d[s](n,${s})`),c},y=t?`!function(){${v}${$(t)}}()`:o?`!function(){try{${v}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${$(d?"x[e]":"e",!0)}}${h?"":"else{"+$(c,!1,!1)+"}"}${w}}catch(e){}}()`:`!function(){try{${v}var e=localStorage.getItem('${n}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${$(d?"x[e]":"e",!0)}}else{${$(c,!1,!1)};}${w}}catch(t){}}();`;return i.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})},()=>!0),S=(t,n)=>{let r;if(!l){try{r=localStorage.getItem(t)||void 0}catch(t){}return r||n}},b=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=t=>(t||(t=window.matchMedia(s)),t.matches?"dark":"light");function ThemeProvider(t){let{children:n,...r}=t;return(0,o.jsx)($,{...r,children:n})}},2853:function(){},3925:function(t){t.exports={style:{fontFamily:"'__Inter_c4b7cb', '__Inter_Fallback_c4b7cb'",fontStyle:"normal"},className:"__className_c4b7cb"}},9817:function(t,n,r){"use strict";r.r(n),r.d(n,{Analytics:function(){return Analytics},track:function(){return track}});var o=r(2265),initQueue=()=>{window.va||(window.va=function(...t){(window.vaq=window.vaq||[]).push(t)})};function isBrowser(){return"undefined"!=typeof window}function detectEnvironment(){return"production"}function getMode(){let t=isBrowser()?window.vam:detectEnvironment();return t||"production"}function isProduction(){return"production"===getMode()}function isDevelopment(){return"development"===getMode()}function track(t,n){var r,o;if(!isBrowser()){let t="[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";if(isProduction())console.warn(t);else throw Error(t);return}if(!n){null==(r=window.va)||r.call(window,"event",{name:t});return}try{let r=function(t,n){if(!t)return;let r=t,o=[];for(let[i,a]of Object.entries(t))"object"==typeof a&&null!==a&&(n.strip?r=function(t,{[t]:n,...r}){return r}(i,r):o.push(i));if(o.length>0&&!n.strip)throw Error(`The following properties are not valid: ${o.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);return r}(n,{strip:isProduction()});null==(o=window.va)||o.call(window,"event",{name:t,data:r})}catch(t){t instanceof Error&&isDevelopment()&&console.error(t)}}function Analytics(t){return(0,o.useEffect)(()=>{!function(t={debug:!0}){var n;if(!isBrowser())return;(function(t="auto"){if("auto"===t){window.vam=detectEnvironment();return}window.vam=t})(t.mode),initQueue(),t.beforeSend&&(null==(n=window.va)||n.call(window,"beforeSend",t.beforeSend));let r=t.scriptSrc||(isDevelopment()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector(`script[src*="${r}"]`))return;let o=document.createElement("script");o.src=r,o.defer=!0,o.dataset.sdkn="@vercel/analytics"+(t.framework?`/${t.framework}`:""),o.dataset.sdkv="1.2.2",t.disableAutoTrack&&(o.dataset.disableAutoTrack="1"),t.endpoint&&(o.dataset.endpoint=t.endpoint),t.dsn&&(o.dataset.dsn=t.dsn),o.onerror=()=>{let t=isDevelopment()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${t}`)},isDevelopment()&&!1===t.debug&&(o.dataset.debug="false"),document.head.appendChild(o)}({framework:t.framework||"react",...void 0!==t.route&&{disableAutoTrack:!0},...t})},[]),(0,o.useEffect)(()=>{t.route&&t.path&&function({route:t,path:n}){var r;null==(r=window.va)||r.call(window,"pageview",{route:t,path:n})}({route:t.route,path:t.path})},[t.route,t.path]),null}}},function(t){t.O(0,[868,971,472,744],function(){return t(t.s=6334)}),_N_E=t.O()}]);