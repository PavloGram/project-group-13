document.querySelector(".input");const e=new URLSearchParams({api_key:"1962278b5026dd7c7bb0a91cd47f798b"});var t;(t=`https://api.themoviedb.org/3/trending/all/day?${e}`,fetch(t).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>{console.log(e)})).catch((e=>{cvonsole.log(e)}));
//# sourceMappingURL=myLibary.47fa2ba9.js.map
