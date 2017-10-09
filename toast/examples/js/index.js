/*!
 * @project : lego-toast
 * @version : 0.0.1
 * @author  : UED.David
 * @update  : 2017-10-09 4:58:27 pm
 */!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="./js/",e(0)}([function(t,e,n){var i=n(1),o=new i({msg:"操作成功",time:1200,extraClass:""});o.open(),$(".btn").on("click",function(){o.changeText("change"+Math.random()),o.open()})},function(t,e,n){function i(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),r=i(o),s=n(3),a=i(s);t.exports=function(){function t(e){(0,r["default"])(this,t),"undefined"==typeof e?(this.msg="操作成功",this.time=2e3,this.extraClass=""):(this.msg=e.msg||"",this.time=e.time||2e3,this.extraClass=e.extraClass||""),this.init()}return(0,a["default"])(t,[{key:"init",value:function e(){this.legoToastInner=null,this.toastTimer=null,this.delTimer=null,this.toastDiv=null,this.hasToastDiv=!1,this.isToastShow=!1}},{key:"createModule",value:function i(t){this.toastDiv=document.createElement("div"),this.toastDiv.classList.add("legoToast"),this.extraClass&&this.toastDiv.classList.add(this.extraClass);var e='<div class="legoToast-inner">'+this.msg+"</div>",i=n(22);this.toastDiv.innerHTML="<style>"+i+"</style>"+e,document.body.appendChild(this.toastDiv),this.hasToastDiv=!0,this.legoToastInner=document.querySelector(".legoToast-inner"),"function"==typeof t&&(this.legoToastInner.classList.add("legoToast-inner","is-toastShow"),t.call(this))}},{key:"open",value:function o(){var t=this;this.isToastShow&&(this.close(),this.delTimer&&clearTimeout(this.delTimer)),this.hasToastDiv?(this.legoToastInner.innerHTML=this.msg,this.toastDiv.style.display="block",this.legoToastInner.classList.add("is-toastShow"),this.legoToastInner.classList.remove("is-toastHide"),this.toastTimer=setTimeout(function(){t.close()},this.time)):this.createModule(function(){var t=this;this.toastTimer=setTimeout(function(){t.close()},this.time)}),this.isToastShow=!0}},{key:"close",value:function s(){var t=this;this.toastTimer&&clearTimeout(this.toastTimer),this.legoToastInner.classList.remove("is-toastShow"),this.legoToastInner.classList.add("is-toastHide"),this.delTimer=setTimeout(function(){t.toastDiv.style.display="none",t.isToastShow=!1},450)}},{key:"changeText",value:function u(t){this.msg=t}},{key:"changeTime",value:function c(t){this.time=t}}]),t}()},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(4),r=i(o);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r["default"])(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={"default":n(5),__esModule:!0}},function(t,e,n){n(6);var i=n(9).Object;t.exports=function o(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(7);i(i.S+i.F*!n(17),"Object",{defineProperty:n(13).f})},function(t,e,n){var i=n(8),o=n(9),r=n(10),s=n(12),a="prototype",u=function(t,e,n){var c=t&u.F,f=t&u.G,l=t&u.S,d=t&u.P,h=t&u.B,p=t&u.W,m=f?o:o[e]||(o[e]={}),v=m[a],y=f?i:l?i[e]:(i[e]||{})[a],g,b,w;f&&(n=e);for(g in n)b=!c&&y&&void 0!==y[g],b&&g in m||(w=b?y[g]:n[g],m[g]=f&&"function"!=typeof y[g]?n[g]:h&&b?r(w,i):p&&y[g]==w?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[a]=t[a],e}(w):d&&"function"==typeof w?r(Function.call,w):w,d&&((m.virtual||(m.virtual={}))[g]=w,t&u.R&&v&&!v[g]&&s(v,g,w)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(11);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(13),o=n(21);t.exports=n(17)?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(14),o=n(16),r=n(20),s=Object.defineProperty;e.f=n(17)?Object.defineProperty:function a(t,e,n){if(i(t),e=r(e,!0),i(n),o)try{return s(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(15);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var i=n(15),o=n(8).document,r=i(o)&&i(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}},function(t,e,n){var i=n(15);t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(23);"string"==typeof i&&(i=[[t.id,i,""]]);var o=n(25)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(24)(),e.push([t.id,".legoToast{position:fixed;left:50%;top:50%;z-index:999;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.legoToast-inner{width:auto;background:rgba(0,0,0,.8);border-radius:20px;color:#fff;padding:0 16px;height:32px;line-height:32px;font-size:14px;opacity:0}.legoToast-inner.is-toastShow{-webkit-animation-name:toastshow;animation-name:toastshow;-webkit-animation-timing-function:cubic-bezier(0,.33,.2,1);animation-timing-function:cubic-bezier(0,.33,.2,1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.legoToast-inner.is-toastHide,.legoToast-inner.is-toastShow{-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:.4s;animation-duration:.4s}.legoToast-inner.is-toastHide{-webkit-animation-name:toasthide;animation-name:toasthide;-webkit-animation-timing-function:cubic-bezier(0,.33,.2,1);animation-timing-function:cubic-bezier(0,.33,.2,1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes toastshow{0%{opacity:0;-webkit-transform:scale(1.185);transform:scale(1.185)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes toastshow{0%{opacity:0;-webkit-transform:scale(1.185);transform:scale(1.185)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes toasthide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(.815);transform:scale(.815)}}@keyframes toasthide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(.815);transform:scale(.815)}}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function e(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=h[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(c(i.parts[r],e))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(c(i.parts[r],e));h[i.id]={id:i.id,refs:1,parts:s}}}}function o(t){for(var e=[],n={},i=0;i<t.length;i++){var o=t[i],r=o[0],s=o[1],a=o[2],u=o[3],c={css:s,media:a,sourceMap:u};n[r]?n[r].parts.push(c):e.push(n[r]={id:r,parts:[c]})}return e}function r(t,e){var n=v(),i=b[b.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function c(t,e){var n,i,o;if(e.singleton){var r=g++;n=y||(y=a(e)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),i=d.bind(null,n),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),i=l.bind(null,n),o=function(){s(n)});return i(t),function c(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}function f(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function l(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var h={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},m=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=p(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,g=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=m()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return i(n,e),function r(t){for(var r=[],s=0;s<n.length;s++){var a=n[s],u=h[a.id];u.refs--,r.push(u)}if(t){var c=o(t);i(c,e)}for(var s=0;s<r.length;s++){var u=r[s];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete h[u.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}]);