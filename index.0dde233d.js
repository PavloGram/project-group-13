const e=document.querySelector(".search__input");document.querySelector(".preloader__image");e.addEventListener("input",(function(e){t=e.target.value.trim();const c=new URLSearchParams({api_key:"1962278b5026dd7c7bb0a91cd47f798b",query:t,page:1});r(`https://api.themoviedb.org/3/search/movie?${c}`).then((e=>{n=e.total_results})).catch((e=>{console.log(e)}))}));let t="",n=0;function r(e){return fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const c=document.querySelector(".pagination"),i=c.querySelectorAll(".pagination-btn"),o=c.querySelector(".previous-btn"),a=c.querySelector(".next-btn"),s=c.querySelector(".end-btn"),l=c.querySelector(".next-dots");let d=1;const u=i.length-2;function h(){i.forEach((e=>{e.classList.remove("active-pagination"),e.innerText==d&&e.classList.add("active-pagination")}))}i.forEach((e=>{e.addEventListener("click",(()=>{"..."!=e.innerText&&d!=e.innerText&&(d=parseInt(e.innerText),h())}))})),o.addEventListener("click",(()=>{d>1&&(d--,h())})),a.addEventListener("click",(()=>{d<u&&(d++,h())})),s.addEventListener("click",(()=>{d!=u&&(d=u,h())})),l.addEventListener("click",(()=>{d<u-2?(d+=3,h()):(d=u,h())}));
//# sourceMappingURL=index.0dde233d.js.map
