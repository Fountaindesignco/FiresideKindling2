(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[975,852,327,222,825],{6031:function(e,r,t){Promise.resolve().then(t.t.bind(t,414,23)),Promise.resolve().then(t.t.bind(t,6996,23)),Promise.resolve().then(t.t.bind(t,9297,23)),Promise.resolve().then(t.t.bind(t,190,23)),Promise.resolve().then(t.t.bind(t,2666,23)),Promise.resolve().then(t.bind(t,2409)),Promise.resolve().then(t.bind(t,1411))},2666:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{suspense:function(){return s},NoSSR:function(){return i}}),t(6927),t(6006);let l=t(8131);function s(){let e=Error(l.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=l.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:r}=e;return r}},2580:function(e,r,t){"use strict";t.d(r,{M:function(){return i}});var l=t(226),s=t(9128);let i=()=>{l.p8.registerPlugin(s.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{l.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-scale");r.forEach(e=>{var r=e.getAttribute("data-value-1"),t=e.getAttribute("data-value-2");l.p8.fromTo(e,{ease:"sine",scale:r},{scale:t,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let t=document.querySelectorAll(".mil-parallax");t.forEach(e=>{var r=e.getAttribute("data-value-1"),t=e.getAttribute("data-value-2");l.p8.fromTo(e,{ease:"sine",y:r},{y:t,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let i=document.querySelectorAll(".mil-skill-prog");i.forEach(e=>{var r=e.getAttribute("data-value-1"),t=e.getAttribute("data-value-2");l.p8.fromTo(e,{width:r,ease:"sine"},{width:t,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let n=document.querySelectorAll(".mil-counter");n.forEach(e=>{var r=e,t={val:0},s=e.dataset.number,i=(s+"").split("."),n=i.length>1?i[1].length:0;l.p8.to(t,{val:s,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){r.innerHTML=t.val.toFixed(n)}})}),l.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let a=document.querySelector(".mil-top-panel");void 0!=a&&window.addEventListener("scroll",e=>{window.scrollY>10?a.classList.add("mil-active"):a.classList.remove("mil-active")})}},2409:function(e,r,t){"use strict";t.r(r);var l=t(9268),s=t(5846),i=t.n(s),n=t(6008),a=t(6006),o=t(2580);let c=e=>{let r,{pageTitle:t,breadTitle:s,bgImage:c}=e,u=(0,n.usePathname)();if(r=void 0!=s?s:t.replace(/(<([^>]+)>)/gi,""),"Search: %s"==t){let e=(0,n.useSearchParams)(),r=e.get("key");t="Search: "+r}return(0,a.useEffect)(()=>{(0,o.M)()},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("section",{className:"mil-banner mil-banner-sm",children:[(0,l.jsx)("img",{src:c,className:"mil-bg-img mil-scale","data-value-1":".4","data-value-2":"1.4",alt:"image",style:{objectPosition:"top"}}),(0,l.jsx)("div",{className:"mil-overlay"}),(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"mil-background-grid mil-top-space"}),(0,l.jsx)("div",{className:"mil-banner-content mil-center",children:(0,l.jsxs)("div",{className:"mil-mb-90",children:[(0,l.jsx)("h1",{className:"mil-light mil-upper mil-mb-30",dangerouslySetInnerHTML:{__html:t}}),(0,l.jsxs)("ul",{className:"mil-breadcrumbs mil-center",children:[(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/",children:"Home"})}),-1!=u.indexOf("/blog/")&&-1==u.indexOf("/blog/page/")&&(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/blog",children:"Blog"})}),-1!=u.indexOf("/projects/")&&(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/projects",children:"Projects"})}),-1!=u.indexOf("/services/")&&(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/services",children:"Services"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{dangerouslySetInnerHTML:{__html:r}})})]})]})})]})]})})};r.default=c},1411:function(e,r,t){"use strict";t.r(r);var l=t(9268),s=t(6006),i=t(6008);let n=()=>{let e=(0,i.useRouter)(),r=(0,i.useSearchParams)(),t=r.get("key")||"",[n,a]=(0,s.useState)(t),o=(0,s.useCallback)((e,t)=>{let l=new URLSearchParams(r);return l.set(e,t),l.toString()},[r]),c=e=>{a(e.target.value)},u=r=>{("Enter"===r.key||13===r.keyCode)&&e.push("/search?"+o("key",n))};return(0,l.jsxs)("div",{className:"mil-sidebar-search mil-up mil-mb-30",children:[(0,l.jsx)("input",{type:"text",placeholder:"Search in blog ...",value:n,onChange:c,onKeyDown:u,id:"searchField"}),(0,l.jsx)("button",{onClick:()=>{e.push("/search?"+o("key",n))},children:(0,l.jsx)("img",{src:"/img/icons/13.svg",alt:"search"})})]})};r.default=n},5846:function(e,r,t){e.exports=t(414)},6008:function(e,r,t){e.exports=t(167)}},function(e){e.O(0,[968,710,77,667,139,744],function(){return e(e.s=6031)}),_N_E=e.O()}]);