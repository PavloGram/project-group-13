function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("48iJm"),r("2BFXB");var a=r("jkMrE"),n=r("g6yUq"),c=r("5o68A"),i=r("2shzp");const l=document.querySelector(".js_queue"),d=document.querySelector(".js_watched"),u=document.querySelector(".galleryFilms-js"),g=document.querySelector(".start");var f=new WeakMap;const h=new class{async fetchMovies(t){try{return await i.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=${e(a)(this,f)}`)}catch(e){throw new Error(e.message)}}constructor(){e(n)(this,f,{writable:!0,value:"1962278b5026dd7c7bb0a91cd47f798b"}),this.page=1}};function p(){const e=localStorage.getItem("watched");g.classList.add("is-hidden"),l.classList.contains("is-active")&&l.classList.remove("is-active"),d.classList.add("is-active");let t={results:[]};if(e)try{const s=JSON.parse(e);console.log(s),s.map((e=>{h.fetchMovies(e).then((({data:e})=>{console.log(e),e.genre_ids=e.genres,t.results.push(e),console.log(t),(0,c.renderMarkup)(t)})).catch((e=>{console.log(e)}))}))}catch(e){console.error("Get state error: ",e.message)}}d.addEventListener("click",p),l.addEventListener("click",(function(){u.innerHTML="";const e=localStorage.getItem("queue");g.classList.add("is-hidden"),d.classList.contains("is-active")&&d.classList.remove("is-active"),l.classList.add("is-active");let t={results:[]};if(e)try{const s=JSON.parse(e);console.log(s),s.map((e=>{h.fetchMovies(e).then((({data:e})=>{console.log(e),e.genre_ids=e.genres,t.results.push(e),console.log(t),(0,c.renderMarkup)(t)})).catch((e=>{console.log(e)}))}))}catch(e){console.error("Get state error: ",e.message)}})),window.addEventListener("load",p);
//# sourceMappingURL=myLibary.9e0d207d.js.map