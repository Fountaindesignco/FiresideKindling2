(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507,833],{6902:function(e,r,l){Promise.resolve().then(l.t.bind(l,414,23)),Promise.resolve().then(l.bind(l,2409))},2580:function(e,r,l){"use strict";l.d(r,{M:function(){return s}});var t=l(226),i=l(9128);let s=()=>{t.p8.registerPlugin(i.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{t.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-scale");r.forEach(e=>{var r=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");t.p8.fromTo(e,{ease:"sine",scale:r},{scale:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-parallax");l.forEach(e=>{var r=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");t.p8.fromTo(e,{ease:"sine",y:r},{y:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-skill-prog");s.forEach(e=>{var r=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");t.p8.fromTo(e,{width:r,ease:"sine"},{width:l,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let n=document.querySelectorAll(".mil-counter");n.forEach(e=>{var r=e,l={val:0},i=e.dataset.number,s=(i+"").split("."),n=s.length>1?s[1].length:0;t.p8.to(l,{val:i,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){r.innerHTML=l.val.toFixed(n)}})}),t.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let a=document.querySelector(".mil-top-panel");void 0!=a&&window.addEventListener("scroll",e=>{window.scrollY>10?a.classList.add("mil-active"):a.classList.remove("mil-active")})}},2409:function(e,r,l){"use strict";l.r(r);var t=l(9268),i=l(5846),s=l.n(i),n=l(6008),a=l(6006),o=l(2580);let c=e=>{let r,{pageTitle:l,breadTitle:i,bgImage:c}=e,g=(0,n.usePathname)();if(r=void 0!=i?i:l.replace(/(<([^>]+)>)/gi,""),"Search: %s"==l){let e=(0,n.useSearchParams)(),r=e.get("key");l="Search: "+r}return(0,a.useEffect)(()=>{(0,o.M)()},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{className:"mil-banner mil-banner-sm",children:[(0,t.jsx)("img",{src:c,className:"mil-bg-img mil-scale","data-value-1":".4","data-value-2":"1.4",alt:"image",style:{objectPosition:"top"}}),(0,t.jsx)("div",{className:"mil-overlay"}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"mil-background-grid mil-top-space"}),(0,t.jsx)("div",{className:"mil-banner-content mil-center",children:(0,t.jsxs)("div",{className:"mil-mb-90",children:[(0,t.jsx)("h1",{className:"mil-light mil-upper mil-mb-30",dangerouslySetInnerHTML:{__html:l}}),(0,t.jsxs)("ul",{className:"mil-breadcrumbs mil-center",children:[(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/",children:"Home"})}),-1!=g.indexOf("/blog/")&&-1==g.indexOf("/blog/page/")&&(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/blog",children:"Blog"})}),-1!=g.indexOf("/projects/")&&(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/projects",children:"Projects"})}),-1!=g.indexOf("/services/")&&(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/services",children:"Services"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{dangerouslySetInnerHTML:{__html:r}})})]})]})})]})]})})};r.default=c},5846:function(e,r,l){e.exports=l(414)},6008:function(e,r,l){e.exports=l(167)}},function(e){e.O(0,[968,710,77,667,139,744],function(){return e(e.s=6902)}),_N_E=e.O()}]);