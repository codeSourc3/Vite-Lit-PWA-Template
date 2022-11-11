(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const h="modulepreload",y=function(r){return"/Vite-Lit-PWA-Template/"+r},p={},L=function(i,o,a){if(!o||o.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=y(e),e in p)return;p[e]=!0;const n=e.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(!!a)for(let d=t.length-1;d>=0;d--){const u=t[d];if(u.href===e&&(!n||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${c}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":h,n||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),n)return new Promise((d,u)=>{s.addEventListener("load",d),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i())};function w(r={}){const{immediate:i=!1,onNeedRefresh:o,onOfflineReady:a,onRegistered:t,onRegisteredSW:e,onRegisterError:n}=r;let c,f,s,d;const u=async(g=!0)=>{await s,g&&(c==null||c.addEventListener("controlling",m=>{m.isUpdate&&window.location.reload()})),await(d==null?void 0:d())};async function v(){if("serviceWorker"in navigator){const{Workbox:g,messageSW:m}=await L(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);d=async()=>{f&&f.waiting&&await m(f.waiting,{type:"SKIP_WAITING"})},c=new g("/Vite-Lit-PWA-Template/sw.js",{scope:"/Vite-Lit-PWA-Template/",type:"classic"}),c.addEventListener("activated",l=>{l.isUpdate||a==null||a()});{const l=()=>{o==null||o()};c.addEventListener("waiting",l),c.addEventListener("externalwaiting",l)}c.register({immediate:i}).then(l=>{f=l,e?e("/Vite-Lit-PWA-Template/sw.js",l):t==null||t(l)}).catch(l=>{n==null||n(l)})}}return s=v(),u}const S="/Vite-Lit-PWA-Template/assets/javascript.8dac5379.svg";function W(r){let i=0;const o=a=>{i=a,r.innerHTML=`count is ${i}`};r.addEventListener("click",()=>o(i+1)),o(0)}const k=w({onNeedRefresh(){const r=confirm("New content available. Reload?");r&&k(r)},onOfflineReady(){alert("Ready to work offline!")}});document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/Vite-Lit-PWA-Template//vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${S}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;W(document.querySelector("#counter"));
