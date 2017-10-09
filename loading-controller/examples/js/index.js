/*!
 * @project : lego-loadingController
 * @version : 0.0.1
 * @author  : UED.David
 * @update  : 2017-10-09 4:22:00 pm
 */!function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="./js/",e(0)}([function(t,e,o){var n=o(1);window.onload=function(){var t=(new Date).getTime();window.loading=new n({text:"当前进度：${progress}",progress:function(e){console.log(e),document.querySelector(".line").style.width=document.body.clientWidth*(e/100)+"px",document.querySelector(".line").innerHTML=e,90==e&&console.log("总时间"+((new Date).getTime()-t)/1e3)},complete:function(){console.log("已经完成")},debug:!0}),loading.start()}},function(t,e,o){function n(t){return this.init(),t=t?t:{},this instanceof n?(this.text=t.text?t.text:"",this.text.indexOf("${progress}")!=-1?this.firtText=this.text.replace(/(\$\{progress\})/g,"0%"):this.firtText=this.text,"default"!=t.theme&&t.theme?"clean"!=t.theme?this.theme=t.theme:this.theme="clean":this.theme="ext-legoLoadingDefault",this.debug=!!t.debug&&t.debug,this._start=!1,this._startProgress=0,this._progress=0,this._endProgress=100,this._animate=!1,this._moveEnd=!1,this.onProgress=t.progress?t.progress:function(){},this.onComplete=t.complete?t.complete:function(){},void(this._stepsCB=function(){})):new n(t)}n.prototype._set=function(t){this._moveEnd?(this._endProgress=100,this._timingFunction="fast"):this._endProgress=t,this._work()},n.prototype._renderDom=function(){this.ready();var t=o(2).toString(),e=document.createElement("style");e.setAttribute("rel","stylesheet"),e.type="text/css",e.styleSheet?e.styleSheet.cssText=t:e.innerHTML=t,document.querySelector("head").appendChild(e);var n={text:this.firtText?this.firtText:"",img:this.loadingImage};this.appendText=o(5)(n);var i=document.createElement("div");i.className="legoLoading "+this.theme,i.innerHTML=this.appendText,document.querySelector("body").appendChild(i),this.loadingDom=document.querySelector(".legoLoading");var r=this.loadingDom.querySelector(".legoLoading__text");r&&(this.loadingDomText=r),this.render()},n.prototype.start=function(t,e,o){"clean"!=this.theme&&(document.querySelector(".legoLoading")||this._renderDom(),this.loadingDom.style.display="block",this._removeClass(this.loadingDom,"is-legoLoadingComplete")),this._start=!0,100==this._progress&&(this._startProgress=0,this._progress=0);var n=t?t:90;return this._set(n),o&&(this._stepsCB=o),this._moveEnd?this._timingFunction="fast":this._timingFunction=e?e:"default",this},n.prototype.to=function(t,e,o){return this._moveEnd?void(this._timingFunction="fast"):this._progress>t?void(this.debug&&console.log("输入的值比当前值要小")):(this._set(t),o&&(this._stepsCB=o),this._timingFunction=e?e:"default",this)},n.prototype._work=function(){var t=this,e=function(){var o=(t._endProgress-t._progress)/t._endProgress,n=0;switch(t._timingFunction){case"fast":n=o*o*o*100;break;case"slow":n=500*o*1.2;break;default:n=300*o}n=n<=10?10:n,setTimeout(function(){if(!(t._progress<t._endProgress))return void t._stepsCB();var o=t._calcProgress();return t._progress=o+t._startProgress,t._startProgress=t._progress,t._progress>t._endProgress&&(t._progress=t._endProgress),t.onProgress(t._progress),""!=t.text&&"clean"!=t.theme&&(t.loadingDomText.innerHTML=t.text.replace(/(\$\{progress\})/g,t._progress+"%")),100==t._progress?(t.onComplete(),void("clean"!=t.theme&&(t._addClass(t.loadingDom,"is-legoLoadingComplete"),setTimeout(function(){t.loadingDom.style.display="none"},400)))):void e()},n)};e()},n.prototype._calcProgress=function(){switch(!0){case this._progress>=0&&this._progress<=20:return Math.ceil(3*Math.random()+3);case this._progress>20&&this._progress<=65:return Math.ceil(3*Math.random());case this._progress>65&&this._progress<=90:return Math.ceil(2*Math.random());case this._progress>90&&this._progress<=100:return 1}},n.prototype.done=function(){return this._start?(this._moveEnd=!0,this._set(100),this._timingFunction="fast",this._stepsCB=function(){},this):void(this.debug&&console.log("还未开始!"))},n.prototype._addClass=function(t,e){this._hasClass(t,e)||(t.className+=" "+e)},n.prototype._removeClass=function(t,e){if(this._hasClass(t,e)){var o=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(o," ")}},n.prototype._hasClass=function(t,e){return t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},n.prototype.init=function(){},n.prototype.ready=function(){},n.prototype.render=function(){},n.prototype.beforeDestory=function(){},n.prototype.destroyed=function(){},t.exports=n},function(t,e,o){var n=o(3);"string"==typeof n?t.exports=n:t.exports=n.toString()},function(t,e,o){e=t.exports=o(4)(),e.push([t.id,'.legoLoading{background-color:#fff;position:fixed;left:0;top:0;right:0;bottom:0;-webkit-transition:opacity .4s ease;transition:opacity .4s ease;font-size:0;text-align:center;z-index:1000000}.legoLoading.is-legoLoadingComplete{opacity:0;filter:alpha(opacity=0)}.legoLoading.ext-legoLoadingDefault .legoLoading__con{width:120px}.legoLoading.ext-legoLoadingDefault .legoLoading__loader{width:50px;height:50px;background-image:url("https://s1.yy.com/ued_web_static/common/img/loading2.gif");background-size:100% 100%;margin-left:auto;margin-right:auto}.legoLoading__content{display:inline-block;_display:inline;vertical-align:middle;text-align:center}.legoLoading__pos{width:0;height:100%;display:inline-block;vertical-align:middle}.legoLoading__icon img{width:100%;height:100%}.legoLoading__text{font-size:12px;line-height:25px}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function e(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},function(t,e,o){var n=o(6);t.exports=n("ed4283a0-acca-11e7-bfd9-77c4b95f1d20",function(t,e){"use strict";var o=this,n=o.$helpers,i=o.$escape,r="";return r+=' <div class="legoLoading__content"> <div class="legoLoading__loader"></div> ',""!=t.text&&(r+=' <div class="legoLoading__text"> ',r+=i(t.text),r+=" </div> "),r+=' </div> <i class="legoLoading__pos"></i> ',new String(r)})},function(t,e){!function(){function e(t,e){return(/string|function/.test(typeof e)?c:a)(t,e)}function o(t,e){return"string"!=typeof t&&(e=typeof t,"number"===e?t+="":t="function"===e?o(t.call(t)):""),t}function n(t){return u[t]}function i(t){return o(t).replace(/&(?![\w#]+;)|[<>"']/g,n)}function r(t,e){if(d(t))for(var o=0,n=t.length;n>o;o++)e.call(t,t[o],o,t);else for(o in t)e.call(t,t[o],o)}function s(t,e){var o=/(\/)[^\/]+\1\.\.\1/,n=("./"+t).replace(/[^\/]+$/,""),i=n+e;for(i=i.replace(/\/\.\//g,"/");i.match(o);)i=i.replace(o,"/");return i}function a(t,o){var n=e.get(t)||l({filename:t,name:"Render Error",message:"Template not found"});return o?n(o):n}function c(t,e){if("string"==typeof e){var o=e;e=function(){return new p(o)}}var n=g[t]=function(o){try{return new e(o,t)+""}catch(n){return l(n)()}};return n.prototype=e.prototype=h,n.toString=function(){return e+""},n}function l(t){var e="{Template Error}",o=t.stack||"";if(o)o=o.split("\n").slice(0,2).join("\n");else for(var n in t)o+="<"+n+">\n"+t[n]+"\n\n";return function(){return"object"==typeof console&&console.error(e+"\n\n"+o),e}}var g=e.cache={},p=this.String,u={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},d=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},h=e.utils={$helpers:{},$include:function(t,e,o){return t=s(o,t),a(t,e)},$string:o,$escape:i,$each:r},f=e.helpers=h.$helpers;e.get=function(t){return g[t.replace(/^\.\//,"")]},e.helper=function(t,e){f[t]=e},t.exports=e}()}]);