!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.disabled=!0,t.disabled=!1,t.addEventListener("click",(function(){return t.disabled=!0,e.disabled=!1,document.body.style.backgroundColor=d(),void(n=setInterval((function(){document.body.style.backgroundColor=d()}),1e3))})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.839b1686.js.map
