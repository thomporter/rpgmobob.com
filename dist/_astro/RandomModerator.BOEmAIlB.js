import{j as e,c as o}from"./utils.CArAmitx.js";import{r as a}from"./index.l-SKCh62.js";function c(t){const[r,s]=a.useState(t.initial);return a.useEffect(()=>{const n=setInterval(()=>{s(t.mods[Math.floor(Math.random()*t.mods.length)])},15e3);return()=>clearInterval(n)},[]),e.jsxs("div",{className:o("p-0 flex flex-col w-full items-center justify-center",t.className),children:[e.jsx("img",{src:`/img/mods/${r}.png`,style:{height:"40px",width:"auto",margin:"0 auto"}}),e.jsx("div",{className:" text-[10px] text-nowrap",children:r})]})}export{c as RandomModerator};