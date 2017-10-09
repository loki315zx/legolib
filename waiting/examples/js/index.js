/*!
 * @project : lego-waiting
 * @version : 0.0.1
 * @author  : UED.David
 * @update  : 2017-10-09 5:07:31 pm
 */!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="./js/",e(0)}([function(t,e,n){var i=n(1),r=new i({title:"加载中...",extraClass:"extraClass"});r.open(),setTimeout(function(){r.close()},2e3),$(".btn").on("click",function(){r.text("change"),r.open(),setTimeout(function(){r.close()},2e3)})},function(t,e,n){function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(2),o=i(r),a=n(3),s=i(a),u=n(22),f=i(u);t.exports=function(){function t(e){(0,o["default"])(this,t),"undefined"==typeof e?(this.title="加载中",this.extraClass=""):(this.title=e.title||"加载中",this.extraClass=e.extraClass||""),this.init()}return(0,s["default"])(t,[{key:"init",value:function e(){this.waitingDiv=null,this.hasWaitingDiv=!1,this.waitingDivTit=""}},{key:"createModule",value:function i(){this.waitingDiv=document.createElement("div"),this.waitingDiv.classList.add("legoWaiting-overlay",this.extraClass);var t=n(24),e=this.title;this.waitingDiv.innerHTML="<style>"+t+"</style>"+(0,f["default"])({title:e}),document.body.appendChild(this.waitingDiv),this.waitingDiv.classList.add("is-waitingShow"),this.hasWaitingDiv=!0,this.waitingDivTit=document.querySelector(".legoWaiting-tit")}},{key:"open",value:function r(){this.hasWaitingDiv?(this.waitingDivTit.innerHTML=this.title,this.waitingDiv.style.display="block",this.waitingDiv.classList.add("is-waitingShow"),this.waitingDiv.classList.remove("is-waitingHide")):this.createModule()}},{key:"close",value:function a(){var t=this;this.waitingDiv.classList.add("is-waitingHide"),this.waitingDiv.classList.remove("is-waitingShow"),setTimeout(function(){t.waitingDiv.style.display="none"},120)}},{key:"text",value:function u(t){this.title=t}}]),t}()},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(4),o=i(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o["default"])(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={"default":n(5),__esModule:!0}},function(t,e,n){n(6);var i=n(9).Object;t.exports=function r(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(7);i(i.S+i.F*!n(17),"Object",{defineProperty:n(13).f})},function(t,e,n){var i=n(8),r=n(9),o=n(10),a=n(12),s="prototype",u=function(t,e,n){var f=t&u.F,c=t&u.G,l=t&u.S,p=t&u.P,d=t&u.B,m=t&u.W,h=c?r:r[e]||(r[e]={}),g=h[s],v=c?i:l?i[e]:(i[e]||{})[s],y,w,b;c&&(n=e);for(y in n)w=!f&&v&&void 0!==v[y],w&&y in h||(b=w?v[y]:n[y],h[y]=c&&"function"!=typeof v[y]?n[y]:d&&w?o(b,i):m&&v[y]==b?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[s]=t[s],e}(b):p&&"function"==typeof b?o(Function.call,b):b,p&&((h.virtual||(h.virtual={}))[y]=b,t&u.R&&g&&!g[y]&&a(g,y,b)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(11);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(13),r=n(21);t.exports=n(17)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(14),r=n(16),o=n(20),a=Object.defineProperty;e.f=n(17)?Object.defineProperty:function s(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(15);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var i=n(15),r=n(8).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var i=n(15);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(23);t.exports=i("4b2ecc70-acd1-11e7-b8d4-5bf7cbc75b30",function(t,e){"use strict";var n=this,i=n.$helpers,r=n.$escape,o=t.title,a="";return a+='<div class="legoWaiting"> <div class="legoWaiting-inner"> <p class="legoWaiting-tit">',a+=r(o),a+='</p> <div class="legoWaiting-loading"> </div> </div> </div>',new String(a)})},function(t,e){!function(){function e(t,e){return(/string|function/.test(typeof e)?u:s)(t,e)}function n(t,e){return"string"!=typeof t&&(e=typeof t,"number"===e?t+="":t="function"===e?n(t.call(t)):""),t}function i(t){return p[t]}function r(t){return n(t).replace(/&(?![\w#]+;)|[<>"']/g,i)}function o(t,e){if(d(t))for(var n=0,i=t.length;i>n;n++)e.call(t,t[n],n,t);else for(n in t)e.call(t,t[n],n)}function a(t,e){var n=/(\/)[^\/]+\1\.\.\1/,i=("./"+t).replace(/[^\/]+$/,""),r=i+e;for(r=r.replace(/\/\.\//g,"/");r.match(n);)r=r.replace(n,"/");return r}function s(t,n){var i=e.get(t)||f({filename:t,name:"Render Error",message:"Template not found"});return n?i(n):i}function u(t,e){if("string"==typeof e){var n=e;e=function(){return new l(n)}}var i=c[t]=function(n){try{return new e(n,t)+""}catch(i){return f(i)()}};return i.prototype=e.prototype=m,i.toString=function(){return e+""},i}function f(t){var e="{Template Error}",n=t.stack||"";if(n)n=n.split("\n").slice(0,2).join("\n");else for(var i in t)n+="<"+i+">\n"+t[i]+"\n\n";return function(){return"object"==typeof console&&console.error(e+"\n\n"+n),e}}var c=e.cache={},l=this.String,p={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},d=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},m=e.utils={$helpers:{},$include:function(t,e,n){return t=a(n,t),s(t,e)},$string:n,$escape:r,$each:o},h=e.helpers=m.$helpers;e.get=function(t){return c[t.replace(/^\.\//,"")]},e.helper=function(t,e){h[t]=e},t.exports=e}()},function(t,e,n){var i=n(25);"string"==typeof i&&(i=[[t.id,i,""]]);var r=n(27)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(26)(),e.push([t.id,".legoWaiting-overlay{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.2);z-index:999;-webkit-transition-duration:.4s;transition-duration:.4s}.legoWaiting-overlay.is-waitingShow{-webkit-animation-name:overlayshow;animation-name:overlayshow;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.legoWaiting-overlay.is-waitingShow .legoWaiting-inner{-webkit-animation-name:waitingshow;animation-name:waitingshow;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.legoWaiting-overlay.is-waitingHide,.legoWaiting-overlay.is-waitingShow .legoWaiting-inner{-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:.1s;animation-duration:.1s}.legoWaiting-overlay.is-waitingHide{-webkit-animation-name:overlayhide;animation-name:overlayhide;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.legoWaiting-overlay.is-waitingHide .legoWaiting-inner{-webkit-animation-name:waitinghide;animation-name:waitinghide;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.legoWaiting{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.legoWaiting-inner{width:260px;opacity:0;border-radius:8px;background-color:#e8e8e8;-webkit-transform:scale(1.185);transform:scale(1.185);overflow:hidden}.legoWaiting-tit{padding:0 1rem;margin:14px auto;text-align:center;font-size:16px}.legoWaiting-loading{position:relative;width:36px;height:36px;margin:0 auto 10px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");-webkit-animation:preloader-spin 1s steps(12) infinite;animation:preloader-spin 1s steps(12) infinite}@-webkit-keyframes preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loading{0%{opacity:1}to{opacity:.2}}@keyframes loading{0%{opacity:1}to{opacity:.2}}@-webkit-keyframes overlayshow{0%{opacity:0}to{opacity:1}}@keyframes overlayshow{0%{opacity:0}to{opacity:1}}@-webkit-keyframes overlayhide{0%{opacity:1}to{opacity:0}}@keyframes overlayhide{0%{opacity:1}to{opacity:0}}@-webkit-keyframes waitingshow{0%{opacity:0;-webkit-transform:scale(1.185);transform:scale(1.185)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes waitingshow{0%{opacity:0;-webkit-transform:scale(1.185);transform:scale(1.185)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes waitinghide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(.815);transform:scale(.815)}}@keyframes waitinghide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(.815);transform:scale(.815)}}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function e(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=d[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(f(i.parts[o],e))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(f(i.parts[o],e));d[i.id]={id:i.id,refs:1,parts:a}}}}function r(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],a=r[1],s=r[2],u=r[3],f={css:a,media:s,sourceMap:u};n[o]?n[o].parts.push(f):e.push(n[o]={id:o,parts:[f]})}return e}function o(t,e){var n=g(),i=w[w.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function f(t,e){var n,i,r;if(e.singleton){var o=y++;n=v||(v=s(e)),i=c.bind(null,n,o,!1),r=c.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),i=p.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),i=l.bind(null,n),r=function(){a(n)});return i(t),function f(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function c(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function l(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var d={},m=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=m(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,w=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return i(n,e),function o(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=d[s.id];u.refs--,o.push(u)}if(t){var f=r(t);i(f,e)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}]);