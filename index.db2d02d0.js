function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o("48iJm");var a=o("5o68A");const i=document.querySelector(".search__input");document.querySelector(".preloader__image");i.addEventListener("input",(function(e){s=e.target.value.trim();const t=new URLSearchParams({api_key:"1962278b5026dd7c7bb0a91cd47f798b",query:s,page:1});d(`https://api.themoviedb.org/3/search/movie?${t}`).then((e=>{c=e.total_results,console.log(e),(0,a.renderMarkup)(e)})).catch((e=>{console.log(e)}))}));let s="",c=0;function d(e){return fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}var l=o("jkMrE"),u=o("g6yUq"),h=o("2shzp"),p=(a=o("5o68A"),new WeakMap),f=new WeakMap;const w=new class{async fetchMovies(){try{return await h.default.get(`${e(l)(this,p)}trending/movie/week?api_key=${e(l)(this,f)}`)}catch(e){throw new Error(e.message)}}constructor(){e(u)(this,p,{writable:!0,value:"https://api.themoviedb.org/3/"}),e(u)(this,f,{writable:!0,value:"1962278b5026dd7c7bb0a91cd47f798b"}),this.page=1}};window.addEventListener("load",(()=>{w.fetchMovies().then((({data:e})=>{(0,a.renderMarkup)(e)})).catch((e=>{console.log(e)}))})),o("2BFXB");
//# sourceMappingURL=index.db2d02d0.js.map
