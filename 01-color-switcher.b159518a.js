const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.disabled=!0,t.disabled=!1,t.addEventListener("click",(function(){return t.disabled=!0,e.disabled=!1,document.body.style.backgroundColor=n(),void(d=setInterval((()=>{document.body.style.backgroundColor=n()}),1e3))})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.b159518a.js.map
