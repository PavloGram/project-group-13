function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o("48iJm");var a=o("5o68A");function i(e){const t=document.querySelector(".error-input "),r=document.querySelector(".start");return 0===e?(r.classList.remove("is-hidden"),t.classList.remove("is-hidden")):(r.classList.add("is-hidden"),t.classList.add("is-hidden"))}const s=document.querySelector(".search"),d=(document.querySelector(".preloader__image"),document.querySelector(".error-input "));s.addEventListener("submit",(function(e){if(e.preventDefault(),c=c=e.currentTarget.search.value.trim(),""===c)return d.classList.add("is-hidden");const t=new URLSearchParams({api_key:"1962278b5026dd7c7bb0a91cd47f798b",query:c,page:1});u(`https://api.themoviedb.org/3/search/movie?${t}`).then((e=>{l=e.total_results,console.log(e),(0,a.renderMarkup)(e),i(l)})).catch((e=>{console.log(e)}))}));let c="",l=0;function u(e){return fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}var h=o("jkMrE"),f=o("g6yUq"),p=o("2shzp"),v=(a=o("5o68A"),new WeakMap),w=new WeakMap;const g=new class{async fetchMovies(){try{return await p.default.get(`${e(h)(this,v)}trending/movie/week?api_key=${e(h)(this,w)}`)}catch(e){throw new Error(e.message)}}constructor(){e(f)(this,v,{writable:!0,value:"https://api.themoviedb.org/3/"}),e(f)(this,w,{writable:!0,value:"1962278b5026dd7c7bb0a91cd47f798b"}),this.page=1}};window.addEventListener("load",(()=>{g.fetchMovies().then((({data:e})=>{(0,a.renderMarkup)(e)})).catch((e=>{console.log(e)}))})),o("2BFXB");
//# sourceMappingURL=index.98b780dc.js.map
