(()=>{"use strict";function e(e){const n=document.querySelector(e);return n||console.error(`Element with id "${e}" not found.`),n}function n(e,n){n.classList.add("hidden"),e.classList.remove("hidden")}const o=e("#e-radio"),r=e("#d-radio"),t=e("#e-box"),d=e("#d-box"),s=e("#e-form"),i=e("#d-form");t&&d?(null==o||o.addEventListener("change",(()=>n(t,d))),null==r||r.addEventListener("change",(()=>n(d,t)))):console.error("One or more elements are missing"),s&&i&&s.addEventListener("submit",(e=>{e.preventDefault(),new FormData(s).forEach(((e,n)=>{console.warn(`${n}: ${e}`)}))}))})();