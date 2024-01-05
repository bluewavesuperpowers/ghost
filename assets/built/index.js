!function(){"use strict";const e={forwardHero:{className:".gh-hero-slider--forward",direction:"vertical",reverseDirection:!0,speed:7e3,speedMobile:7e3},reverseHero:{className:".gh-hero-slider--reverse",direction:"vertical",reverseDirection:!1,speed:7e3,speedMobile:7e3},horizontalHero:{className:".gh-hero-slider--horizontal",reverseDirection:!1,speed:5e3,speedMobile:7e3},forwardFooter:{className:".gh-foot-slider--forward",direction:"vertical",reverseDirection:!0,speed:5e3,speedMobile:4e3,mobileDirection:"vertical"},reverseFooter:{className:".gh-foot-slider--reverse",direction:"vertical",reverseDirection:!1,speed:5e3,speedMobile:4e3,mobileDirection:"vertical"}};class t{constructor(e){this.nextDom=document,this.loadBtnElement=e,this.tag=e.name?.toLowerCase(),this.container=e.closest(".gh-grid-section").querySelector(".gh-posts-feed"),e&&(this.toLoadMore(),this.loadNextPage())}async loadNextPage(){const e=this.nextDom.querySelector('link[rel="next"]');if(e){let t=e.href;if(this.tag&&"latest"!==this.tag){const o=new URL(e.href);t=`${o.origin}/tag/${this.tag}${o.pathname}`}try{const e=await fetch(t);if(!e.ok)return void(this.loadBtnElement.style.display="none");this.nextDom=document.createRange().createContextualFragment(await e.text())}catch{this.loadBtnElement.style.display="none"}}else this.loadBtnElement.style.display="none"}toLoadMore(){this.loadBtnElement.addEventListener("click",(()=>{this.loadNextPage();const e="latest"===this.tag?".gh-grid-section-latest .gh-card":".gh-posts-feed .gh-card";for(const t of this.nextDom.querySelectorAll(e))this.container.appendChild(t)}))}}const o=()=>{const e=document.querySelector("html"),t=document.querySelector(".gh-foot-main-wrapper"),o=(e=>{const t=e.slice(4,-1).split(", ");return(299*t[0]+587*t[1]+114*t[2])/1e3>=128?"dark":"light"})(window.getComputedStyle(t).backgroundColor),s=document.querySelector("#ghost-comments-root > iframe[title='comments-frame']");if(s){const t=s.contentWindow.document.querySelector(".ghost-display");e.classList.contains("gh-color-section-font-dark")?t.classList.add("dark"):t.classList.remove("dark")}e.classList.contains("gh-color-section-font-dark")?(e.classList.remove("gh-color-section-font-dark"),e.classList.add(`gh-color-section-font-${o}`)):(e.classList.remove("gh-color-section-font-light"),e.classList.add(`gh-color-section-font-${o}`)),e.classList.add(`gh-color-section-font-${o}`)},s=()=>{const e=window.innerWidth;let t=0;t=e>=1300?30:e<=768?22.5:26;const o=document.querySelector(".gh-topic-slider--large .gh-card-image-video-outer"),s=document.querySelector(".gh-topic-slider--small .gh-card-image-video-outer");if(o){const e=o.offsetHeight;document.querySelectorAll(".gh-topic-slider--large .gh-next-slide-btn, .gh-topic-slider--large .gh-prev-slide-btn").forEach((o=>{o.style.top=e/2-t+"px"}))}if(s){const e=s.offsetHeight;document.querySelectorAll(".gh-topic-slider--small .gh-next-slide-btn, .gh-topic-slider--small .gh-prev-slide-btn").forEach((o=>{o.style.top=e/2-t+"px"}))}},r=()=>{const e=document.querySelectorAll("[data-tweet-id]");e&&(()=>{const t=localStorage.getItem("color-scheme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");o="dark"===t?"light":"dark",s=t,e.forEach((e=>{const t=e.getAttribute("src");e.setAttribute("src",t.replace("theme="+o,"theme="+s))}));var o,s})()};(e=>{const t=()=>{const t=document.querySelector("html[data-color-scheme]");let o="light"===t.getAttribute("data-color-scheme")?"dark":"light";t.setAttribute("data-color-scheme",o),localStorage.setItem("color-scheme",o),e()};document.querySelectorAll(".gh-dark-mode-toggle-btn").forEach((e=>{e.addEventListener("click",t)}))})(r),(()=>{const t=e=>{let{className:t,direction:o="horizontal",reverseDirection:s,speed:r,speedMobile:i,mobileDirection:c="horizontal"}=e;new Swiper(t,{autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:s},direction:o,slidesPerView:"auto",speed:r,loop:!0,allowTouchMove:!1,breakpoints:{1e3:{spaceBetween:32,speed:r,direction:o},769:{spaceBetween:32,speed:r,direction:o},500:{spaceBetween:24,speed:r,direction:c},300:{spaceBetween:16,speed:i,direction:c}}})};for(const o in e)t(e[o]);const o=(e,t,o,s)=>{new Swiper(e,{spaceBetween:32,navigation:{nextEl:".gh-next-slide-btn",prevEl:".gh-prev-slide-btn"},breakpoints:{900:{slidesPerView:t},600:{slidesPerView:o},300:{slidesPerView:s}}})};o(".gh-topic-slider--large",3,2,1),o(".gh-topic-slider--small",4,3,1)})(),(()=>{const e=document.querySelectorAll(".gh-load-more-button");e.length&&e.forEach((e=>new t(e)))})(),(()=>{const e=document.querySelectorAll(".copyToClipboardBtn");e&&Array.from(e).forEach((e=>{e.addEventListener("click",(()=>(e=>{const t=window.location.href,o=(e,t)=>{t?(e.classList.add("copied"),setTimeout((()=>{e.classList.remove("copied")}),1e3)):(e.classList.add("notCopied"),setTimeout((()=>{e.classList.remove("notCopied")}),1e3))};navigator.clipboard.writeText(t).then((()=>{o(e,!0)}),(()=>{o(e,!1)}))})(e)))}))})(),(()=>{const e=document.documentElement,t=document.querySelector(".gh-foot-main-wrapper"),o=(e=>{const t=e.slice(4,-1).split(", ");return(299*t[0]+587*t[1]+114*t[2])/1e3>=128?"dark":"light"})(window.getComputedStyle(t).backgroundColor);e.classList.add(`gh-color-section-font-${o}`)})(),(()=>{const e=document.querySelector("#gh-head");let t=0;window.addEventListener("scroll",(()=>{const o=window.scrollY;o>200&&(o>t?e.classList.add("is-hidden"):e.classList.remove("is-hidden")),t=o}))})(),(()=>{const e=document.querySelector(".gh-subnav-icon");document.querySelectorAll(".gh-subnav-item").length&&e.classList.add("show")})(),(()=>{const e=document.querySelector(".gh-burger-btn"),t=document.querySelector(".gh-mobile-menu"),o=document.querySelector(".gh-overlay"),s=document.querySelector(".gh-mobile-menu__close-btn"),r=document.querySelector(".gh-mobile-menu__footer"),i=document.querySelector(".gh-scroll-top-btn"),c=()=>{t.classList.add("show","animateRight"),r.classList.add("show","animateRight"),o.classList.add("show"),i.classList.add("hide"),document.documentElement.classList.add("lock-scroll"),setTimeout((()=>{t.classList.remove("animateRight"),r.classList.remove("animateRight")}),475)},n=()=>{t.classList.add("animateLeft"),r.classList.add("animateLeft"),o.classList.remove("show"),document.documentElement.classList.remove("lock-scroll"),setTimeout((()=>{t.classList.remove("show","animateLeft"),r.classList.remove("show","animateLeft"),i.classList.remove("hide")}),250)},l=e=>{e.target.closest(".gh-mobile-menu")||n()};e&&(e.addEventListener("click",c),o.addEventListener("click",l),s.addEventListener("click",n))})(),(()=>{const e=document.querySelector(".gh-scroll-top-btn"),t=()=>{window.scrollTo({top:0,behavior:"smooth"})},o=document.querySelector(".gh-scroll-top-progress path"),s=o.getTotalLength();o.style.transition=o.style.WebkitTransition="none",o.style.strokeDasharray=`${s} ${s}`,o.style.strokeDashoffset=s,o.getBoundingClientRect(),o.style.transition=o.style.WebkitTransition="stroke-dashoffset 10ms linear";const r=function(){const e=window.scrollY||window.scrollTopBtn||document.documentElement.scrollTopBtn,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),r=Math.max(document.documentElement.clientHeight,window.innerHeight||0);var i=s-e*s/(t-r);o.style.strokeDashoffset=i};r(),e&&e.addEventListener("click",t),window.addEventListener("scroll",(()=>{r();(window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop)>200?e.classList.add("is-active"):e.classList.remove("is-active")}))})(),(()=>{const e=document.querySelector(".gh-membership-toggle-btn"),t=document.querySelector(".gh-membership-page"),o=()=>{t.classList.toggle("yearly")};e&&t&&e.addEventListener("click",o)})(),s(),(()=>{if(document.querySelectorAll(".gh-tier-card").length&&window.innerWidth>1100){const e=document.querySelectorAll(".gh-tier-card__desc");let t=0;e.forEach((e=>{e.clientHeight>=t&&(console.log(e.clientHeight),t=e.clientHeight)})),e.forEach((e=>{e.style.height=`${t}px`}))}})(),(()=>{const e=document.querySelector(".gh-foot-subscribtion-sliders-wrapper"),t=document.querySelector(".gh-foot");e&&window.addEventListener("scroll",(()=>{const o=window.scrollY,s=window.innerHeight;t.offsetTop<=o+.9*s&&e.classList.add("animateFade")}))})();document.querySelectorAll(".gh-dark-mode-toggle-btn").forEach((e=>{e.addEventListener("click",o)})),window.addEventListener("load",r),window.addEventListener("resize",s),window.addEventListener("load",(()=>{const e=document.querySelector(".gh-scroll-top-btn");document.querySelector("#ghost-portal-root iframe")&&e.classList.add("alignUp")}))}();
//# sourceMappingURL=index.js.map