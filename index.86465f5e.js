const e=document.querySelector(".search__input");document.querySelector(".preloader__image");e.addEventListener("input",(function(e){t=e.target.value.trim();const n=new URLSearchParams({api_key:"1962278b5026dd7c7bb0a91cd47f798b",query:t,page:1});(function(e){return fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))})(`https://api.themoviedb.org/3/search/movie?${n}`).then((e=>console.log(e))).catch((e=>{console.log(e)}))}));let t="";const n=document.querySelector(".pagination"),r=n.querySelectorAll(".pagination-btn"),c=n.querySelector(".previous-btn"),o=n.querySelector(".next-btn"),i=n.querySelector(".end-btn"),a=n.querySelector(".next-dots");let s=1;const l=r.length-2;function d(){r.forEach((e=>{e.classList.remove("active-pagination"),e.innerText==s&&e.classList.add("active-pagination")}))}r.forEach((e=>{e.addEventListener("click",(()=>{"..."!=e.innerText&&s!=e.innerText&&(s=parseInt(e.innerText),d())}))})),c.addEventListener("click",(()=>{s>1&&(s--,d())})),o.addEventListener("click",(()=>{s<l&&(s++,d())})),i.addEventListener("click",(()=>{s!=l&&(s=l,d())})),a.addEventListener("click",(()=>{s<l-2?(s+=3,d()):(s=l,d())}));
//# sourceMappingURL=index.86465f5e.js.map
