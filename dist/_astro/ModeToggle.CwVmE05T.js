import{j as o}from"./utils.CArAmitx.js";import{r as a}from"./index.l-SKCh62.js";import{B as g}from"./button.GjH40r0f.js";import"./index.BNpdp-pu.js";/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(e,r)=>{const s=a.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:m=2,absoluteStrokeWidth:l,className:i="",children:c,...h},u)=>a.createElement("svg",{ref:u,...y,width:n,height:n,stroke:t,strokeWidth:l?Number(m)*24/Number(n):m,className:["lucide",`lucide-${f(e)}`,i].join(" "),...h},[...r.map(([k,p])=>a.createElement(k,p)),...Array.isArray(c)?c:[c]]));return s.displayName=`${e}`,s};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=d("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=d("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function b(){const[e,r]=a.useState("dark");a.useEffect(()=>{const t=document.documentElement.classList.contains("dark");r(t?"dark":"theme-light")},[]),a.useEffect(()=>{const t=e==="dark"||e==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList[t?"add":"remove"]("dark")},[e]);const s=()=>{const t=document.documentElement.classList.contains("dark");r(t?"theme-light":"dark")};return o.jsxs(g,{variant:"ghost",className:"rounded-full",size:"icon",onClick:()=>{s()},children:[o.jsx(x,{className:"h-[1.2rem] w-[1.2rem] -rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),o.jsx(w,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"}),o.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}export{b as ModeToggle};
