!function(){var e="https://api.themoviedb.org/3/search/movie",n=document.querySelector(".search__input");document.querySelector(".preloader__image");n.addEventListener("input",(function(n){t=n.target.value.trim();var r=new URLSearchParams({api_key:"1962278b5026dd7c7bb0a91cd47f798b",query:t,page:1});c("".concat(e,"?").concat(r)).then((function(e){e.total_results})).catch((function(e){console.log(e)}))}));var t="";function c(e){return fetch(e).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var r=document.querySelector(".pagination"),i=r.querySelectorAll(".pagination-btn"),o=r.querySelector(".previous-btn"),a=r.querySelector(".next-btn"),u=r.querySelector(".end-btn"),s=r.querySelector(".next-dots"),d=1,l=i.length-2;function f(){i.forEach((function(e){e.classList.remove("active-pagination"),e.innerText==d&&e.classList.add("active-pagination")}))}i.forEach((function(e){e.addEventListener("click",(function(){"..."!=e.innerText&&d!=e.innerText&&(d=parseInt(e.innerText),f())}))})),o.addEventListener("click",(function(){d>1&&(d--,f())})),a.addEventListener("click",(function(){d<l&&(d++,f())})),u.addEventListener("click",(function(){d!=l&&(d=l,f())})),s.addEventListener("click",(function(){d<l-2?(d+=3,f()):(d=l,f())}))}();
//# sourceMappingURL=index.41b950b9.js.map
