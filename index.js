!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("TxtAnime",[],t):"object"==typeof exports?exports.TxtAnime=t():e.TxtAnime=t()}(self,(function(){return(()=>{"use strict";var e={366:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(81),n=o.n(a),r=o(645),i=o.n(r)()(n());i.push([e.id,".hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline}\n",""]);const s=i},676:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(81),n=o.n(a),r=o(645),i=o.n(r)()(n());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap);"]),i.push([e.id,"@import url(http://fonts.cdnfonts.com/css/cunia);"]),i.push([e.id,'*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Poppins",sans-serif}ul{list-style:none}a{text-decoration:none}button{border:none;outline:0;background:transparent}.tx-container{width:80%;margin:auto}.header{background:#fff;height:80px;display:flex;align-items:center;box-shadow:0 0 30px #ededed}.header .header-container{width:80%;margin:auto}.header .header-container nav{display:flex;justify-content:space-between;align-items:center}.header .header-container nav .logo a{color:#a29bfe}.header .header-container nav .nav-bar{display:flex;align-items:center}.header .header-container nav .nav-bar ul{margin-right:27px;padding-right:27px;border-right:1px solid #f1f1f1;display:flex}.header .header-container nav .nav-bar ul li{margin-right:3px}.header .header-container nav .nav-bar ul li a{color:#5a5a5a;font-size:13px;font-weight:400;text-transform:capitalize;letter-spacing:.35px;padding:5px 15px;transition:color .5s ease-in-out}.header .header-container nav .nav-bar ul li a:hover{color:#a29bfe}.header .header-container nav .nav-bar .btn{width:50px;height:50px;border:0;outline:0;border-radius:5px}.header .header-container nav .nav-bar .btn a i{font-size:20px;color:#a29bfe}.demo{width:100%;height:100%;padding:30px 0}.demo .demo-item{margin-bottom:25px}.demo .demo-item .demo-item-content{display:flex}.demo .demo-item .demo-item-content .demo-view{flex:1;height:400px;display:flex;align-items:center;justify-content:center;overflow:hidden}.demo .demo-item .demo-item-content .demo-view h2,.demo .demo-item .demo-item-content .demo-view div span{font-size:48px;font-weight:900;letter-spacing:.25px;color:#5a5a5a}.demo .demo-item .demo-item-content .demo-code{flex:1;background:#f9f9f9;display:flex;align-items:center;justify-content:center}.demo .demo-item .demo-item-content .demo-code pre{background:#FFFFFF;padding:0 30px;width:50%}.demo .demo-item .demo-item-content .demo-code pre code{line-height:1.8;background:#FFFFFF;color:gray}.demo .demo-item.d-1{border:1px solid #d2eaff}.demo .demo-item.d-1 .demo-view{background:#d2eaff}.demo .demo-item.d-2{border:1px solid #f1dcd7}.demo .demo-item.d-2 .demo-view{background:#f1dcd7}.demo .demo-item.d-3{border:1px solid #d7dce3}.demo .demo-item.d-3 .demo-view{background:#d7dce3}.demo .demo-item.d-4{border:1px solid #ffeaa7}.demo .demo-item.d-4 .demo-view{background:#ffeaa7}.demo .demo-item.d-5{border:1px solid #d0e6ef}.demo .demo-item.d-5 .demo-view{background:#d0e6ef}.demo .demo-item.d-6{border:1px solid #f3cec5}.demo .demo-item.d-6 .demo-view{background:#f3cec5}.demo .demo-item.d-7{border:1px solid #d7e7e7}.demo .demo-item.d-7 .demo-view{background:#d7e7e7}.demo .demo-item.d-8{border:1px solid #d5d2f9}.demo .demo-item.d-8 .demo-view{background:#d5d2f9}.demo .demo-item.d-9{border:1px solid #f7e6e3}.demo .demo-item.d-9 .demo-view{background:#f7e6e3}.demo .demo-item.d-10{border:1px solid #d3d3d3}.demo .demo-item.d-10 .demo-view{background:#d3d3d3}.demo .demo-item.d-11{border:1px solid #d7e7e8}.demo .demo-item.d-11 .demo-view{background:#d7e7e8}.demo .demo-item.d-12{border:1px solid #d3eaff}.demo .demo-item.d-12 .demo-view{background:#d3eaff}\n',""]);const s=i},169:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(81),n=o.n(a),r=o(645),i=o.n(r)()(n());i.push([e.id,":root{--easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1);--easeOutQuad: cubic-bezier(0.5, 1, 0.89, 1);--easeOutQuart: cubic-bezier(0.25, 1, 0.5, 1);--easeOutBack: cubic-bezier(0.34, 1.56, 0.64, 1);--easeOutCirc: cubic-bezier(0, 0.55, 0.45, 1);--easeOutOne: cubic-bezier(0.075, 0.82, 0.165, 1);--easeOutTwo: cubic-bezier(0.165, 0.84, 0.44, 1);--easeOutThree: cubic-bezier(0.09, 0.78, 0, 1.28)}.tx-an-1{display:inline-block;animation:tx-an-1 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-1{0%{opacity:0;transform:translateY(150px) translateX(150px) rotate(200deg)}100%{opacity:1;transform:translateY(0) translateX(0) rotateZ(0)}}.tx-an-2{display:inline-block;animation:tx-an-2 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-2{0%{opacity:0;transform:translateY(-200px) translateX(150px) rotate(-280deg)}100%{opacity:1;transform:translateY(0) translateX(0) rotate(0)}}.tx-an-3{display:inline-block;animation:tx-an-3 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-3{0%{opacity:0;transform:translateX(100px) scale(10);filter:blur(5)}100%{opacity:1;transform:translateX(0) scale(1);filter:blur(0)}}.tx-an-4{display:inline-block;animation:tx-an-4 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-4{0%{opacity:0;transform:translateX(100px)}100%{opacity:1;transform:translateX(0px)}}.tx-an-5{display:inline-block;animation:tx-an-5 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-5{0%{opacity:0;transform:translateY(100px)}100%{opacity:1;transform:translateY(0px)}}.tx-an-6{display:inline-block;animation:tx-an-6 var(--easeOutBack) forwards;opacity:0}@keyframes tx-an-6{0%{opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}.tx-an-7{display:inline-block;animation:tx-an-7 var(--easeOutCirc) forwards;opacity:0}@keyframes tx-an-7{0%{opacity:0}100%{opacity:1}}.tx-an-8{display:inline-block;animation:tx-an-8 var(--easeOutQuart) forwards;opacity:0}@keyframes tx-an-8{0%{filter:blur(5px);opacity:0}100%{filter:blur(0px);opacity:1}}.tx-an-9{display:inline-block;animation:tx-an-9 var(--easeOutQuart) forwards;opacity:0}@keyframes tx-an-9{0%{transform:scale(1.3);opacity:0}100%{transform:scale(1);opacity:1}}.tx-an-10{display:inline-block;animation:tx-an-10 var(--easeOutCirc) both;opacity:0}@keyframes tx-an-10{0%{transform:translateY(70px);opacity:0}50%{transform:translateY(0);opacity:1}100%{transform:translateY(-70px);opacity:0}}.scale-1{display:block;animation:scale-1 var(--easeOutThree) forwards;opacity:0;transform-origin:center}@keyframes scale-1{0%{transform:scale(0)}50%{filter:blur(0px);opacity:1;transform:scale(1)}100%{filter:blur(5px);opacity:0;transform:scale(2)}}.scale-2{display:block;animation:scale-2 var(--easeOutThree) forwards;opacity:0;transform-origin:center}@keyframes scale-2{0%{filter:blur(5px);transform:scale(5)}50%{filter:blur(0px);opacity:1;transform:scale(1.3)}100%{opacity:0;transform:scale(0)}}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",a=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),a&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),a&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,a,n,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&i[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,a=0;a<t.length;a++)if(t[a].identifier===e){o=a;break}return o}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var d=e[s],l=a.base?d[0]+a.base:d[0],c=r[l]||0,m="".concat(l," ").concat(c);r[l]=c+1;var p=o(m),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var u=n(f,a);a.byIndex=s,t.splice(s,0,{identifier:m,updater:u,references:1})}i.push(m)}return i}function n(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,n){var r=a(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=o(r[i]);t[s].references--}for(var d=a(e,n),l=0;l<r.length;l++){var c=o(r[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=d}}},569:e=>{var t={};e.exports=function(e,o){var a=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var a="";o.supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,n&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};return(()=>{var e=o(379),t=o.n(e),a=o(795),n=o.n(a),r=o(569),i=o.n(r),s=o(565),d=o.n(s),l=o(216),c=o.n(l),m=o(589),p=o.n(m),f=o(169),u={};u.styleTagTransform=p(),u.setAttributes=d(),u.insert=i().bind(null,"head"),u.domAPI=n(),u.insertStyleElement=c(),t()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals,"undefined"!=typeof window&&(window.TxtAnime=function(){this.animate=function(e,t){"string"==typeof e?this.el=Array.from(document.querySelectorAll(e)):"object"==typeof e&&(e instanceof NodeList?this.el=Array.from(e):e instanceof Element&&(this.el=[e])),this.default={effect:"tx-an-1",delayStart:0,delay:.05,duration:.7,loop:!0,loopTime:2e3,overflow:!0},this.options=Object.assign(this.default,t);let o=this.el,a=this.options.effect,n=this.options.delayStart,r=this.options.delay,i=this.options.duration,s=this.options.loop,d=this.options.loopTime,l=this.options.overflow;function c(){o.forEach((e=>{e.innerHTML=e.textContent.replace(/\S/g,"<span>$&</span>");let t=Array.from(e.querySelectorAll("span"));setTimeout((()=>{t.forEach(((e,t)=>{1==l&&(e.parentNode.style.overflow="hidden"),e.parentNode.style.display="block",e.parentNode.style.opacity="1",e.classList.add(a),e.style.display="inline-flex",e.style.animationDelay=t*r+"s",e.style.animationDuration=`${i}s`}))}),1e3*n)}))}c(),1==s&&setInterval((()=>{c()}),d)},this.scale=function(e,t){"string"==typeof e?this.el=Array.from(document.querySelectorAll(e)):"object"==typeof e&&(e instanceof NodeList?this.el=Array.from(e):e instanceof Element&&(this.el=[e])),this.default={effect:"scale-1",delayStart:0,delay:1.5,duration:2,loop:!0,text:["Go","To","Site"]},this.options=Object.assign(this.default,t);let o=this.el,a=this.options.effect,n=this.options.delayStart,r=this.options.delay,i=this.options.duration,s=this.options.loop,d=(this.options.loopTime,this.options.overflow,this.options.text);setTimeout((()=>{!function(){o.forEach((e=>{e.style.position="relative"}));for(let e=0;e<d.length;e++){let t=document.createElement("span");t.innerHTML=d[e],o.forEach((e=>{e.appendChild(t)})),t.classList.remove(a)}o.forEach((e=>{let t=Array.from(e.querySelectorAll("span")),o=0;t.forEach((e=>{e.style.display="none",t[o].style.display="block",t[o].classList.add(a),e.classList.contains(a)&&(e.style.animationDuration=`${i}s`)}));let n=setInterval((()=>{t[o].classList.remove(a),t[o].style.display="none",o++,o>d.length-1&&(o=0,!0!==s&&(e.innerHTML="",clearInterval(n))),t[o].classList.add(a),t[o].style.display="block",t.forEach((e=>{e.classList.contains(a)&&(e.style.animationDuration=`${i}s`)}))}),1e3*r)}))}()}),1e3*n)}});var h=o(676),y={};y.styleTagTransform=p(),y.setAttributes=d(),y.insert=i().bind(null,"head"),y.domAPI=n(),y.insertStyleElement=c(),t()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;var x=o(366),b={};b.styleTagTransform=p(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=n(),b.insertStyleElement=c(),t()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals,hljs.initHighlightingOnLoad(),new class{constructor(){return this.run()}run(){this.addEffect()}addEffect(){let e=document.querySelector(".d-1 .demo-view h2"),t=document.querySelector(".d-2 .demo-view h2"),o=document.querySelector(".d-3 .demo-view h2"),a=document.querySelector(".d-4 .demo-view h2"),n=document.querySelector(".d-5 .demo-view h2"),r=document.querySelector(".d-6 .demo-view h2"),i=document.querySelector(".d-7 .demo-view h2"),s=document.querySelector(".d-8 .demo-view h2"),d=document.querySelector(".d-9 .demo-view h2"),l=document.querySelector(".d-10 .demo-view h2"),c=document.querySelector(".d-11 .demo-view .tx"),m=document.querySelector(".d-12 .demo-view .tx"),p=new TxtAnime;p.animate(e,{effect:"tx-an-1",loop:!0,delay:.07}),p.animate(t,{effect:"tx-an-2",loop:!0,loopTime:2300,delay:.07}),p.animate(o,{effect:"tx-an-3",loop:!0,loopTime:5e3,delay:.3,overflow:!1}),p.animate(a,{effect:"tx-an-4",loop:!0}),p.animate(n,{effect:"tx-an-5",loop:!0,loopTime:1700}),p.animate(r,{effect:"tx-an-6",loop:!0,loopTime:2700,delay:.1,overflow:!1}),p.animate(i,{effect:"tx-an-7",loop:!0,loopTime:2100}),p.animate(s,{effect:"tx-an-8",loop:!0,loopTime:2300}),p.animate(d,{effect:"tx-an-9",loop:!0,loopTime:2e3}),p.animate(l,{effect:"tx-an-10",loopTime:1700,duration:2,delay:0}),p.scale(c,{text:["Go","To","Site"],effect:"scale-1"}),p.scale(m,{text:["Go","To","Site"],effect:"scale-2",delayStart:1})}}})(),a.default})()}));