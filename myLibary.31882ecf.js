function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("04jNI"),r("7bYU0");var i=r("jkMrE"),c=r("g6yUq"),n=r("5o68A"),o=r("2shzp");const d=document.querySelector(".js_queue"),l=document.querySelector(".js_watched"),u=document.querySelector(".galleryFilms-js"),v=document.querySelector(".start");var h=new WeakMap;const f=new class{async fetchMovies(t){try{return await o.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=${e(i)(this,h)}`)}catch(e){throw new Error(e.message)}}constructor(){e(c)(this,h,{writable:!0,value:"1962278b5026dd7c7bb0a91cd47f798b"}),this.page=1}};function p(){u.innerHTML="";const e=localStorage.getItem("watched");v.classList.remove("is-hidden"),d.classList.contains("is-active")&&d.classList.remove("is-active"),l.classList.add("is-active"),l.classList.add("btn-active"),d.classList.remove("btn-active");let t={results:[]};if(e)try{JSON.parse(e).map((e=>{f.fetchMovies(e).then((({data:e})=>{v.classList.add("is-hidden"),e.genre_ids=e.genres,t.results.push(e),(0,n.renderMarkup)(t)})).catch((e=>{console.log(e)}))}))}catch(e){console.error("Get state error: ",e.message)}}l.addEventListener("click",p),d.addEventListener("click",(function(){u.innerHTML="";const e=localStorage.getItem("queue");v.classList.remove("is-hidden"),l.classList.contains("is-active")&&l.classList.remove("is-active"),d.classList.add("is-active"),l.classList.remove("btn-active"),d.classList.add("btn-active");let t={results:[]};if(e)try{JSON.parse(e).map((e=>{f.fetchMovies(e).then((({data:e})=>{v.classList.add("is-hidden"),e.genre_ids=e.genres,t.results.push(e),(0,n.renderMarkup)(t)})).catch((e=>{console.log(e)}))}))}catch(e){console.error("Get state error: ",e.message)}})),window.addEventListener("load",p),r("9vds0");
//# sourceMappingURL=myLibary.31882ecf.js.map
