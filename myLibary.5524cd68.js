function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("04jNI"),r("7bYU0");var n=r("jkMrE"),i=r("g6yUq"),c=r("5o68A"),o=r("2shzp");const l=document.querySelector(".js_queue"),d=document.querySelector(".js_watched"),u=document.querySelector(".galleryFilms-js"),h=document.querySelector(".start");var v=new WeakMap;const g=new class{async fetchMovies(t){try{return await o.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=${e(n)(this,v)}`)}catch(e){throw new Error(e.message)}}constructor(){e(i)(this,v,{writable:!0,value:"1962278b5026dd7c7bb0a91cd47f798b"}),this.page=1}};function p(){u.innerHTML="";const e=localStorage.getItem("watched"),t=JSON.parse(e);0===t.length&&h.classList.remove("is-hidden"),l.classList.contains("is-active")&&l.classList.remove("is-active"),d.classList.add("is-active"),d.classList.add("btn-active"),l.classList.remove("btn-active");let s=[],a={results:[]};if(t)try{t.map((e=>{g.fetchMovies(e).then((({data:e})=>{s=e.genres.map((e=>e.id)),e.genre_ids=s,e.genres.map((t=>e.genre_ids.push(t.id))),a.results.push(e)})).catch((e=>{console.log(e)})).finally((()=>(0,c.renderMarkup)(a)))}))}catch(e){console.error("Get state error: ",e.message)}}d.addEventListener("click",p),l.addEventListener("click",(function(){u.innerHTML="";const e=localStorage.getItem("queue"),t=JSON.parse(e);0===t.length&&h.classList.remove("is-hidden"),d.classList.contains("is-active")&&d.classList.remove("is-active"),l.classList.add("is-active"),d.classList.remove("btn-active"),l.classList.add("btn-active");let s=[],a={results:[]};if(t)try{t.map((e=>{g.fetchMovies(e).then((({data:e})=>{s=e.genres.map((e=>e.id)),e.genre_ids=s,e.genres.map((t=>e.genre_ids.push(t.id))),a.results.push(e)})).catch((e=>{console.log(e)})).finally((()=>(0,c.renderMarkup)(a)))}))}catch(e){console.error("Get state error: ",e.message)}})),window.addEventListener("load",p);const m=document.querySelector(".add-watched-btn"),f=document.querySelector(".add-queue-btn");m.addEventListener("click",(function(){const e=localStorage.getItem("watched");0===JSON.parse(e).length&&h.classList.remove("is-hidden")})),f.addEventListener("click",(function(){const e=localStorage.getItem("queue");0===JSON.parse(e).length&&h.classList.remove("is-hidden")})),r("9vds0");
//# sourceMappingURL=myLibary.5524cd68.js.map