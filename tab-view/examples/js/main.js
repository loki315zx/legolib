/*!
 * @project : lego-tabView
 * @version : 0.1.0
 * @author  : UED.David
 * @update  : 2017-10-09 4:45:40 pm
 */!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="./js/",e(0)}([function(t,e,n){function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=i(r),a=n(2),c=i(a);"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){o["default"].attach(document.body)},!1);var l=[{title:"推荐",link:"",attr:'data-id="11" data-role="first"'},{title:"音乐",attr:""},{title:"搞笑",link:"",attr:'data-id="11" data-index="first"'},{title:"脱口秀"},{title:"一起看",link:"",attr:'data-id="11" data-index="test"'},{title:"百度",link:"https://www.baidu.com/"},{title:"巴拉巴拉小魔仙",link:"",attr:""},{title:"户外",link:"",attr:""},{title:"摄影",link:"",attr:""},{title:"户外2",link:"",attr:""},{title:"摄影2",link:"",attr:""},{title:"旅行",link:"",attr:""}],s=new c["default"]({container:"#header",navConfig:l,activeIndex:2,easing:"easeInOut",switchCallBack:function u(t,e){console.log(t,e)}})},function(t,e,n){var i;!function(){"use strict";function r(t,e){function n(t,e){return function(){return t.apply(e,arguments)}}var i;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!r.notNeeded(t)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,l=0,s=o.length;l<s;l++)c[o[l]]=n(c[o[l]],c);a&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var r=Node.prototype.removeEventListener;"click"===e?r.call(t,e,n.hijacked||n,i):r.call(t,e,n,i)},t.addEventListener=function(e,n,i){var r=Node.prototype.addEventListener;"click"===e?r.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):r.call(t,e,n,i)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(t){i(t)},!1),t.onclick=null)}}var o=navigator.userAgent.indexOf("Windows Phone")>=0,a=navigator.userAgent.indexOf("Android")>0&&!o,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!o,l=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),s=c&&/OS [6-7]_\d/.test(navigator.userAgent),u=navigator.userAgent.indexOf("BB10")>0;r.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(c&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},r.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!a;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},r.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},r.prototype.determineEventType=function(t){return a&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},r.prototype.focus=function(t){var e;c&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},r.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},r.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},r.prototype.onTouchStart=function(t){var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],c){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!l){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},r.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},r.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},r.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},r.prototype.onTouchEnd=function(t){var e,n,i,r,o,u=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,s&&(o=t.changedTouches[0],u=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=u.tagName.toLowerCase(),"label"===i){if(e=this.findControl(u)){if(this.focus(u),a)return!1;u=e}}else if(this.needsFocus(u))return t.timeStamp-n>100||c&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,t),c&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return!(!c||l||(r=u.fastClickScrollParent,!r||r.fastClickLastScrollTop===r.scrollTop))||(this.needsClick(u)||(t.preventDefault(),this.sendClick(u,t)),!1)},r.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},r.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},r.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},r.prototype.destroy=function(){var t=this.layer;a&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},r.notNeeded=function(t){var e,n,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!a)return!0;if(e=document.querySelector("meta[name=viewport]")){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(u&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(e.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},r.attach=function(t,e){return new r(t,e)},i=function(){return r}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))}()},function(t,e,n){function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(3),o=i(r),a=n(4),c=i(a),l=n(23),s=i(l),u=n(27),f=i(u);n(28),t.exports=function(){function t(e){var n=this;(0,o["default"])(this,t),this.handleClick=function(t){var e=t.target,i=void 0;if("a"!=e.tagName.toLowerCase()){i="li"==e.tagName.toLowerCase()?e:e.parentNode,n.clickFlag||(n.navClientW=n.navWrap.clientWidth,n.navScrollW=n.navWrap.scrollWidth,n.navViewCenter=n.navClientW/2,n.maxScroll=n.navScrollW-n.navClientW/2),n.clickFlag=!0;var r=n.calcNavStyle(i),o=r.width,a=r.center,c=i.index,l=n.navContainer.querySelector(".is-current"),s=n.calcNavStyle(l),u=s.width,f=s.center;i.classList.contains("is-current")||(l.classList.remove("is-current"),n.panelContainer.querySelector(".is-show").classList.remove("is-show"),n.panelItem[c].classList.add("is-show"),i.classList.add("is-current"),a<=n.navViewCenter?n.scrollLeft(0):n.navScrollW-a>=n.navViewCenter?n.scrollLeft(a-n.navViewCenter):n.navScrollW-a<n.navViewCenter&&n.scrollLeft(n.maxScroll),n.scrollNavLine(f,a),n.setNavLineWidth(u,o),n.defaults.switchCallBack instanceof Function&&n.defaults.switchCallBack(l.index,c))}},this.defaults={container:null,navConfig:{},activeIndex:0,easing:"easeInOut",switchCallBack:function i(t,e){}},this.init(e)}return(0,c["default"])(t,[{key:"init",value:function e(t){this.defaults=f["default"].extend(this.defaults,t);var e=document.createElement("style");e.innerHTML=s["default"],document.head.appendChild(e),this.tabView=document.querySelector(this.defaults.container),this.render(),this.navContainer=document.querySelector('[data-role="nav-container"]'),this.navWrap=document.querySelector(".lego-tabView__navWrap"),this.allNavItem=document.querySelectorAll('[data-role="nav-item"]'),this.panelContainer=document.querySelector('[data-role="panel-container"]'),this.panelItem=document.querySelectorAll(".lego-tabView__panel"),this.navLine=document.querySelector(".lego-navLine"),this.clickFlag=!1,this.initNav(),this.bindEvent()}},{key:"render",value:function i(){var t=this.defaults.navConfig,e=n(29)(t);this.tabView.innerHTML=e}},{key:"initNav",value:function r(){var t=this.navContainer.querySelector(".is-current"),e=0;if(t){var n=this.calcNavStyle(t);this.navLine.style.width=n.width-20+"px",this.navLine.style.left=n.center+"px"}for(var i=0;i<this.allNavItem.length;i++)this.allNavItem[i].index=i,e+=this.allNavItem[i].clientWidth;this.navContainer.style.width=e+"px"}},{key:"bindEvent",value:function a(){for(var t=this.allNavItem.length,e=0;e<t;e++){var n=this.allNavItem[e];n.addEventListener("click",this.handleClick,!1)}var i=f["default"].getUrlParam("activeIndex")||this.defaults.activeIndex;i<t?this.switchTo(i):console.error("activeIndex必须是小于导航item总数的数字")}},{key:"switchTo",value:function l(t){this.allNavItem[t].click(this.handleClick.bind(this))}},{key:"calcNavStyle",value:function u(t){return{width:t.clientWidth,center:t.offsetLeft+t.clientWidth/2}}},{key:"scrollLeft",value:function d(t){var e=this,n=this.navWrap.scrollLeft;Math.animation(n,t,200,this.defaults.easing,function(t){e.navWrap.scrollLeft=t})}},{key:"scrollNavLine",value:function h(t,e){var n=this;Math.animation(t,e,200,this.defaults.easing,function(t){n.navLine.style.left=t+"px"})}},{key:"setNavLineWidth",value:function p(t,e){var n=this;Math.animation(t,e,200,this.defaults.easing,function(t){n.navLine.style.width=parseInt(t-20)+"px"})}},{key:"beforeDestroy",value:function v(){}},{key:"destroyed",value:function g(){}}]),t}()},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(5),o=i(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o["default"])(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={"default":n(6),__esModule:!0}},function(t,e,n){n(7);var i=n(10).Object;t.exports=function r(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(8);i(i.S+i.F*!n(18),"Object",{defineProperty:n(14).f})},function(t,e,n){var i=n(9),r=n(10),o=n(11),a=n(13),c="prototype",l=function(t,e,n){var s=t&l.F,u=t&l.G,f=t&l.S,d=t&l.P,h=t&l.B,p=t&l.W,v=u?r:r[e]||(r[e]={}),g=v[c],m=u?i:f?i[e]:(i[e]||{})[c],y,w,k;u&&(n=e);for(y in n)w=!s&&m&&void 0!==m[y],w&&y in v||(k=w?m[y]:n[y],v[y]=u&&"function"!=typeof m[y]?n[y]:h&&w?o(k,i):p&&m[y]==k?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(k):d&&"function"==typeof k?o(Function.call,k):k,d&&((v.virtual||(v.virtual={}))[y]=k,t&l.R&&g&&!g[y]&&a(g,y,k)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(12);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(14),r=n(22);t.exports=n(18)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(15),r=n(17),o=n(21),a=Object.defineProperty;e.f=n(18)?Object.defineProperty:function c(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(16);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(18)&&!n(19)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(19)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var i=n(16),r=n(9).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var i=n(16);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(24);"string"==typeof i?t.exports=i:t.exports=i.toString()},function(t,e,n){e=t.exports=n(25)(),e.push([t.id,".lego-navMore:after{width:.32rem;height:.32rem;background-image:url("+n(26)+");background-size:contain;background-repeat:no-repeat}.lego-tabView{position:relative}.lego-tabView__nav{position:fixed;top:0;left:0;z-index:2;width:100%;background-color:#fff;height:.8rem;line-height:.8rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-right:.5rem;overflow:hidden}.lego-tabView__nav:after{content:\" \";position:absolute;top:0;right:.5rem;height:.8rem;width:.4rem;z-index:100;background:-webkit-gradient(linear,left top,right top,color-stop(0,hsla(0,0%,100%,0)),color-stop(100%,#fff))}.lego-tabView__navWrap{position:relative;height:100%;box-sizing:content-box;overflow-x:scroll;overflow-y:hidden;padding-bottom:.1rem;-webkit-overflow-scrolling:touch}.lego-tabView__navWrap::-webkit-scrollbar{display:none}.lego-navList{white-space:nowrap;font-size:0}.lego-navList li{display:inline-block;font-size:.3rem;text-align:center;-webkit-transition:all .25s;transition:all .25s}.lego-navList li a,.lego-navList li span{display:inline-block;padding:0 .4rem;color:#666}.lego-navList li a:hover,.lego-navList li span:hover{text-decoration:none}.lego-navList li.is-current{font-weight:400}.lego-navList li.is-current a,.lego-navList li.is-current span{color:#fa0}.lego-navMore{height:100%;width:.5rem;position:absolute;right:0;top:0;background-color:#fff}.lego-navMore:after{content:'';position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.lego-tabView__panel{padding-top:.8rem;display:none}.lego-tabView__panel.is-show{display:block}.lego-navLine{position:absolute;left:50%;bottom:.1rem;width:1rem;height:.02rem;background:#fa0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function e(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAA0UlEQVRoQ+3Y0Q3CMAwE0OtkdCRGgE0YpWzACDAJyPwi0FU5XWt0/XYc59WtrExo+kxN60YKd7+5iEecFEirkFCysNbiBxmDMVGJP437ybZqXfgsYzAmav1xGp10W0VcZ8llijjnpIuKuM6SyxRxzkkXVeJ7nA4fAO6/jrnXIesM4PS3hesaz5gpfxUj9nuriEecFEirkFCysIjLKMlErcVrmHFew9XkdyFhv4ZtMR1eAQzfnlXhy+jpV66/ATiuXPMR3rrHRw+/yfqIu9nbir8AUYYPrD/SHx0AAAAASUVORK5CYII="},function(t,e){var n={extend:function i(t,e){var n=null;for(var i in e)n=e[i],t!==n&&"undefined"!=typeof n&&(t[i]=n);return t},getUrlParam:function r(t,e){var n=new RegExp("[\\?&#]"+t+"=([^&#]+)","gi"),i=(e||location.href).match(n),r=[];return i&&i.length>0?(r=i[i.length-1].split("="),r&&r.length>1?r[1]:""):""}};t.exports=n},function(t,e){var n={Linear:function i(t,e,n,r){return n*t/r+e},easeIn:function r(t,e,n,i){return n*(t/=i)*t+e},easeOut:function o(t,e,n,i){return-n*(t/=i)*(t-2)+e},easeInOut:function a(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}};Math.tween=n,Math.animation=function(t,e,n,i,r){var o=function y(t){return"undefined"==typeof t},a=function w(t){return"function"==typeof t},c=function k(t){return"number"==typeof t},l=function b(t){return"string"==typeof t},s=function E(t){if(c(t))return t;if(l(t)){if(/\d+m?s$/.test(t))return/ms/.test(t)?1*t.replace("ms",""):1e3*t.replace("s","");if(/^\d+$/.test(t))return+t}return-1};if(!c(t)||!c(e))return window.console&&console.error("from和to两个参数必须且为数值"),0;var u=Math.tween||window.Tween;if(!u)return window.console&&console.error("缓动算法函数缺失"),0;var f={duration:300,easing:"easeInOut",callback:function C(){}},d=function x(t){a(t)?f.callback=t:s(t)!=-1?f.duration=s(t):l(t)&&(f.easing=t)};d(n),d(i),d(r),window.requestAnimationFrame||(requestAnimationFrame=function S(t){setTimeout(t,17)});var h=0,p=Math.ceil(f.duration/17),v=f.easing,g;if(g=u[v],0==a(g))return void console.error('没有找到名为"'+f.easing+'"的动画算法');var m=function L(){var n=g(h,t,e-t,p);h++,h<=p?(f.callback(n),requestAnimationFrame(L)):f.callback(e,!0)};m()}},function(t,e,n){var i=n(30);t.exports=i("3da2a840-acce-11e7-9e33-db8b3e45f2a4",function(t,e){"use strict";var n=this,i=n.$helpers,r=n.$each,o=t.data,a=t.i,c=n.$escape,l="";return l+='<div class="lego-tabView"> <div class="lego-tabView__nav"> <div class="lego-tabView__navWrap"> <ul class="lego-navList" data-role="nav-container"> ',r(t,function(t,e){l+=" <li ",l+=c(0===e?"class=is-current":""),l+=' data-role="nav-item" ',l+=c(t.attr),l+="> ",t.link?(l+=" <a href=",l+=c(t.link),l+=' target="_blank">',l+=c(t.title),l+="</a> "):(l+=" <span>",l+=c(t.title),l+="</span> "),l+=" </li> "}),l+=' </ul> <div class="lego-navLine"></div> </div> <div class="lego-navMore"></div> </div> <div class="lego-tabView__content" data-role="panel-container"> ',r(t,function(t,e){l+=' <div class="lego-tabView__panel ',l+=c(0===e?"is-show":""),l+='"></div> '}),l+=" </div> </div> ",new String(l)})},function(t,e){!function(){function e(t,e){return(/string|function/.test(typeof e)?l:c)(t,e)}function n(t,e){return"string"!=typeof t&&(e=typeof t,"number"===e?t+="":t="function"===e?n(t.call(t)):""),t}function i(t){return d[t]}function r(t){return n(t).replace(/&(?![\w#]+;)|[<>"']/g,i)}function o(t,e){if(h(t))for(var n=0,i=t.length;i>n;n++)e.call(t,t[n],n,t);else for(n in t)e.call(t,t[n],n)}function a(t,e){var n=/(\/)[^\/]+\1\.\.\1/,i=("./"+t).replace(/[^\/]+$/,""),r=i+e;for(r=r.replace(/\/\.\//g,"/");r.match(n);)r=r.replace(n,"/");return r}function c(t,n){var i=e.get(t)||s({filename:t,name:"Render Error",message:"Template not found"});return n?i(n):i}function l(t,e){if("string"==typeof e){var n=e;e=function(){return new f(n)}}var i=u[t]=function(n){try{return new e(n,t)+""}catch(i){return s(i)()}};return i.prototype=e.prototype=p,i.toString=function(){return e+""},i}function s(t){var e="{Template Error}",n=t.stack||"";if(n)n=n.split("\n").slice(0,2).join("\n");else for(var i in t)n+="<"+i+">\n"+t[i]+"\n\n";return function(){return"object"==typeof console&&console.error(e+"\n\n"+n),e}}var u=e.cache={},f=this.String,d={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},h=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},p=e.utils={$helpers:{},$include:function(t,e,n){return t=a(n,t),c(t,e)},$string:n,$escape:r,$each:o},v=e.helpers=p.$helpers;e.get=function(t){return u[t.replace(/^\.\//,"")]},e.helper=function(t,e){v[t]=e},t.exports=e}()}]);