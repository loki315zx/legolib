/*TMODJS:{"version":111,"md5":"7b458d35c152160695892aa7e2272115"}*/
template("/Users/liveme/Sites/git@LegoComponents/tab-view/src/js/export/tpl/nav",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=(a.data,a.i,b.$escape),e="";return e+='<div class="lego-tabView"> <div class="lego-tabView__nav"> <div class="lego-tabView__navWrap"> <ul class="lego-navList" data-role="nav-container"> ',c(a,function(a,b){e+=" <li ",e+=d(0===b?"class=is-current":""),e+=' data-role="nav-item" ',e+=d(a.attr),e+="> ",a.link?(e+=" <a href=",e+=d(a.link),e+=' target="_blank">',e+=d(a.title),e+="</a> "):(e+=" <span>",e+=d(a.title),e+="</span> "),e+=" </li> "}),e+=' </ul> <div class="lego-navLine"></div> </div> <div class="lego-navMore"></div> </div> <div class="lego-tabView__content" data-role="panel-container"> ',c(a,function(a,b){e+=' <div class="lego-tabView__panel ',e+=d(0===b?"is-show":""),e+='"></div> '}),e+=" </div> </div> ",new String(e)});