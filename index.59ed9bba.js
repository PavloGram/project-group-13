!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("clD6c");var a=o("7VSht"),c="https://api.themoviedb.org/3/search/movie",i=document.querySelector(".search__input");document.querySelector(".preloader__image");i.addEventListener("input",(function(e){u=e.target.value.trim();var t=new URLSearchParams({api_key:"1962278b5026dd7c7bb0a91cd47f798b",query:u,page:1});s("".concat(c,"?").concat(t)).then((function(e){e.total_results,console.log(e),(0,a.renderMarkup)(e)})).catch((function(e){console.log(e)}))}));var u="";function s(e){return fetch(e).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var d=o("bpxeT"),l=o("8MBJY"),f=o("4KMWL"),p=o("8MQK7"),h=o("a2hTj"),v=o("2TvXO"),w=o("dIxxU"),b=(a=o("7VSht"),new WeakMap),g=new WeakMap,m=new(function(){"use strict";function t(){e(l)(this,t),e(p)(this,b,{writable:!0,value:"https://api.themoviedb.org/3/"}),e(p)(this,g,{writable:!0,value:"1962278b5026dd7c7bb0a91cd47f798b"}),this.page=1}return e(h)(t,[{key:"fetchMovies",value:function(){var t=this;return e(d)(e(v).mark((function n(){return e(v).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.default.get("".concat(e(f)(t,b),"trending/movie/week?api_key=").concat(e(f)(t,g)));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}]),t}());window.addEventListener("load",(function(){m.fetchMovies().then((function(e){var t=e.data;(0,a.renderMarkup)(t)})).catch((function(e){console.log(e)}))})),o("bFQM0")}();
//# sourceMappingURL=index.59ed9bba.js.map
