/* eslint-disable */
/*! https://github.com/zzarcon/default-passive-events/blob/master/default-passive-events.js */
(function(){function e(e){var t={passive:!1,capture:!1};EventTarget.prototype.addEventListener=function(a,n,r){var i="object"==typeof r,v=i?r.capture:r;r=i?r:{},r.passive=void 0!==r.passive?r.passive:t.passive,r.capture=void 0!==v?v:t.capture,e.call(this,a,n,r)}}function t(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}var a=t();if(a){var n=EventTarget.prototype.addEventListener;e(n)}})();
/*! requestAnimationFrame.js by zhangxinxu 2013-09-30 *
(function(){for(var n=0,i=["webkit","moz"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,e){var a=(new Date).getTime(),o=Math.max(0,16.7-(a-n)),t=window.setTimeout(function(){i(a+o)},o);return n=a+o,t}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})})();
/*! cookiejs v1.0.10 | MIT (c) 2016 kenny wang | https://github.com/jaywcjlove/cookie.js */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.cookie=e()}}(function(){function e(e){return!!e&&"[object Object]"===Object.prototype.toString.call(e)}function t(e){return e instanceof Array}function n(e){return Array.prototype.slice.call(e)}function r(){if(!(this instanceof r))return new r}var o=Object.names||function(e){var t=[],n="";for(n in e)e.hasOwnProperty(n)&&t.push(n);return t};r.prototype={get:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return unescape(o.substring(t.length,o.length))}return!1},set:function(t,n,r){if(e(t))for(var o in t)t.hasOwnProperty(o)&&this.set(o,t[o],n);else{var i=e(r)?r:{expires:r},u=void 0!==i.expires?i.expires:"",a=typeof u,f=void 0!==i.path?";path="+i.path:";path=/",l=i.domain?";domain="+i.domain:"",s=i.secure?";secure":"";"string"===a&&""!==u?u=new Date(u):"number"===a&&(u=new Date(+new Date+864e5*u)),""!==u&&"toGMTString"in u&&(u=";expires="+u.toGMTString()),document.cookie=t+"="+escape(n)+u+f+l+s}},remove:function(e){e=t(e)?e:n(arguments);for(var r=0,o=e.length;r<o;r++)this.set(e[r],"",-1);return e},clear:function(e){return e?this.remove(e):this.remove(o(this.all()))},all:function(){if(""===document.cookie)return{};for(var e=document.cookie.split("; "),t={},n=0,r=e.length;n<r;n++){var o=e[n].split("=");t[unescape(o[0])]=unescape(o[1])}return t}};var i=function(t,n,o){var i=arguments;return 0===i.length?r().all():1===i.length&&null===t?r().clear():2!==i.length||n?"string"!=typeof t||n?e(t)||i.length>1&&t&&n?r().set(t,n,o):null===n?r().remove(t):r().all():r().get(t):r().clear(t)};for(var u in r.prototype)i[u]=r.prototype[u];return i});
//devin87@qq.com build:2017/03/21 10:20:44
!function(t,e){"use strict";function r(t,r){return t!==e?t:r}function n(t){return"[object Function]"===L.call(t)}function i(t){return"number"==typeof t&&t>0&&t===Math.floor(t)}function a(t,e){return n(t)?t.apply(e,M.call(arguments,2)):void 0}function s(t,r,n){if(!t||!r)return t;for(var i in r)i!=e&&k.call(r,i)&&(n||t[i]===e)&&(t[i]=r[i]);return t}function o(t,e){if(e!==!1&&!/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))throw new Error("JSON SyntaxError");try{return new Function("return "+t)()}catch(r){}}function l(t,r){1>=r&&(r*=100),t.style.opacity!=e?t.style.opacity=r/100:t.style.filter!=e&&(t.style.filter="alpha(opacity="+parseInt(r)+")")}function u(t,e){var r=0,n=0,i=t.offsetWidth,a=t.offsetHeight;do r+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent;while(t&&t!=e);return{left:r,top:n,width:i,height:a}}function c(t,e,r,n){for(var i=t[r||e],a=[];i;){if(1==i.nodeType){if(!n)return i;a.push(i)}i=i[e]}return n?a:null}function d(t){return t.previousElementSibling||c(t,"previousSibling",null,!1)}function f(t){return t.nextElementSibling||c(t,"nextSibling",null,!1)}function p(t){return t.firstElementChild||c(t,"nextSibling","firstChild",!1)}function h(t){return t.lastElementChild||c(t,"previousSibling","lastChild",!1)}function v(t){return t.children||c(t,"nextSibling","firstChild",!0)}function m(t,e,r){var n=document.createElement(t);return e&&(n.className=e),r&&(n.innerHTML=r),n}function g(t,e){var r=m("div","",t);return e?r.childNodes:p(r)}function w(e){var r=e||t.event;return r.target||(r.target=r.srcElement),r}function y(t,e,r,n){var i=function(a){r.call(t,w(a)),n&&N(t,e,i)};return O(t,e,i),n?void 0:{stop:function(){N(t,e,i)}}}function b(t,e){if(n(t[e]))t[e]();else if(t.fireEvent)t.fireEvent("on"+e);else if(t.dispatchEvent){var r=document.createEvent("HTMLEvents");r.initEvent(e,!0,!0),t.dispatchEvent(r)}}function x(t,e,r){var n=w(t);e!==!1&&(n.preventDefault?n.preventDefault():n.returnValue=!1),r!==!1&&(n.stopPropagation?n.stopPropagation():n.cancelBubble=!0)}function _(t){return C.test(t)}function E(t){if(!_(t))return!0;var r=RegExp.lastMatch.length,n=t.indexOf("/",r),i=t.slice(0,-1!=n?n:e);return i.toLowerCase()==(location.protocol+"//"+location.host).toLowerCase()}function S(t,e,r){t=+t,e=e||1024;for(var n=0,a="number"==typeof e,s=1,o=i(r)?r:a?100:e.length;t>=s&&o>n;)s*=a?e:e[n],n++;return n&&s>t&&(s/=a?e:e.last(),n--),{value:n?t/s:t,level:n}}function T(t,n){if(n=n===!0?{all:!0}:n||{},isNaN(t)||t==e||0>t){var i=n.error||"--";return n.all?{text:i}:i}var a=S(t,n.steps,n.limit),s=a.value,o=s.toFixed(r(n.digit,2));return n.trim!==!1&&-1!=o.lastIndexOf(".")&&(o=o.replace(/\.?0+$/,"")),a.text=o+(n.join||"")+(n.units||H)[a.level+(n.start||0)],n.all?a:a.text}var L=Object.prototype.toString,k=Object.prototype.hasOwnProperty,M=Array.prototype.slice;s(Object,{forEach:function(t,e,r){for(var n in t)k.call(t,n)&&e.call(r,n,t[n],t)}}),s(Date,{now:function(){return+new Date}});var I;(t.ActiveXObject||t.msIndexedDB)&&(I=document.documentMode||(t.XMLHttpRequest?7:6)),t.JSON||(t.JSON={}),JSON.parse||(JSON.parse=o);var O,N;document.addEventListener?(O=function(t,e,r){t.addEventListener(e,r,!1)},N=function(t,e,r){t.removeEventListener(e,r,!1)}):document.attachEvent&&(O=function(t,e,r){t.attachEvent("on"+e,r)},N=function(t,e,r){t.detachEvent("on"+e,r)});var C=/^https?:\/\//i,H=["B","KB","MB","GB","TB","PB","EB"],Q={def:r,isFunc:n,isUInt:i,fire:a,extend:s,ie:I,setOpacity:l,getOffset:u,walk:c,getPrev:d,getNext:f,getFirst:p,getLast:h,getChilds:v,createEle:m,parseHTML:g,isHttpURL:_,isSameHost:E,parseLevel:S,formatSize:T};I&&(Q["ie"+(6>I?6:I)]=!0),Q.event={fix:w,stop:x,trigger:b,add:y},t.Q=Q}(window),function(t,e){"use strict";function r(t){var e=l.Lang;switch(t){case O:return e.status_ready;case N:return e.status_processing;case C:return e.status_complete;case H:return e.status_skip;case R:return e.status_cancel;case P:return e.status_error}return t}function n(){var e=t.XMLHttpRequest;e&&(new e).upload&&t.FormData&&(S=!0);var r=document.createElement("input");r.type="file",T=!!r.files,L=S}function i(t,e){var r=t.lastIndexOf(e);return-1!=r?t.slice(r):""}function a(t){if(t){for(var e=t.split(","),r={},n=0,i=e.length;i>n;n++)r[e[n]]=!0;return r}}function s(t,e){t.attachEvent?t.attachEvent("onload",e):t.addEventListener("load",e,!1)}function o(t,e,r){if(e&&!(0>=e)){var n,i=Date.now();if(r>=e)return n=i-t.startTime,n?t.avgSpeed=Math.min(Math.round(1e3*e/n),e):t.speed||(t.avgSpeed=t.speed=e),t.time=n||0,void(t.endTime=i);n=i-t.lastTime,200>n||(t.speed=Math.min(Math.round(1e3*(r-t.loaded)/n),t.total),t.lastTime=i)}}function l(t){var e=this;e.guid=t.guid||"uploader"+ ++k,e.url=t.url,e.dataType=t.dataType||"json",e.data=t.data,e.target=t.target,e.html5=S&&!!u(t.html5,!0),e.multiple=T&&e.html5&&!!u(t.multiple,!0),e.clickTrigger=L&&!!u(t.clickTrigger,!0),e.workerThread=e.html5?t.workerThread||1:1,e.workerIdle=e.workerThread,e.auto=t.auto!==!1,e.upName=t.upName||"upfile",e.allows=a(t.allows),e.disallows=a(t.disallows),e.chunkSize=t.chunkSize||2097152,e.isSlice=!!t.isSlice,e.isQueryState=!!u(t.isQueryState,e.isSlice),e.isMd5=!!u(t.isMd5,e.isSlice),e.isUploadAfterHash=t.isUploadAfterHash!==!1,e.container=t.container||document.body,t.getPos&&(e.getPos=t.getPos);var r=t.UI||{};r.init&&(e.init=r.init),r.draw&&(e.draw=r.draw),r.update&&(e.update=r.update),r.over&&(e.over=r.over),e.fns=t.on||{},e.ops=t,e.list=[],e.map={},e.index=0,e.started=!1,e._init()}var u=Q.def,c=Q.fire,d=Q.extend,f=Q.getFirst,p=Q.getLast,h=JSON.parse,v=Q.createEle,m=Q.parseHTML,g=Q.setOpacity,w=Q.getOffset,y=Q.md5File,b=Q.event,x=b.add,_=b.trigger,E=b.stop,S=!1,T=!1,L=!1,k=0,M=0,I=0,O=0,N=1,C=2,H=-1,R=-2,P=-3;l.prototype={constructor:l,_init:function(){var t=this;if(!t._inited){t._inited=!0;var r=t.guid,n=t.target,i=t.container,a=v("div","upload-input "+r);if(i.appendChild(a),t.boxInput=a,!t.html5){var o="upload_iframe_"+r,l='<iframe class="u-iframe" name="'+o+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+o+'"></form>',u=v("div","upload-html4 "+r,l);i.appendChild(u);var c=f(u),d=p(u);t.iframe=c,t.form=d,s(c,function(){if(0==t.workerIdle){var r;try{r=c.contentWindow.document.body.innerHTML}catch(n){}t.complete(e,C,r)}})}return t.clickTrigger?x(n,"click",function(e){t.fire("select",e)!==!1&&(t.resetInput(),_(t.inputFile,"click"))}):(x(a,"click",function(e){t.fire("select",e)===!1&&E(e)}),g(a,0),t.resetInput()),t.fire("init"),t.run("init")}},resetInput:function(){var t=this,e=t.boxInput;e.innerHTML='<input type="file" name="'+t.upName+'" style="'+(t.clickTrigger?"visibility: hidden;":"font-size:100px;")+'"'+(t.multiple?' multiple="multiple"':"")+">";var r=f(e);return x(r,"change",function(e){t.add(this),t.html5||t.resetInput()}),t.inputFile=r,t.updatePos()},updatePos:function(t){var e=this;if(e.clickTrigger)return e;var r=e.getPos||w,n=e.boxInput,i=f(n),a=e.target,s=a.offsetWidth,o=a.offsetHeight,l=0==s?{left:-1e4,top:-1e4}:r(a);return n.style.width=i.style.width=s+"px",n.style.height=i.style.height=o+"px",n.style.left=l.left+"px",n.style.top=l.top+"px",t&&(n.style.zIndex=++I),e},fire:function(t,e,r){if(!r)return c(this.fns[t],this,e);var n=this.fns[t+"Async"];return n?c(n,this,e,r):void r(c(this.fns[t],this,e))},run:function(t,e){var r=this[t];return r&&c(r,this,e),this},addTask:function(t,e){if(t||e){var r,n;e?(r=e.name||e.fileName,n=e.size||e.fileSize):(r=i(t.value,"\\").slice(1)||t.value,n=-1);var a=this,s=i(r,".").toLowerCase(),o=a.disallows&&a.disallows[s]||a.allows&&!a.allows[s],l={id:++M,name:r,ext:s,size:n,input:t,file:e,state:o?H:O};return o&&(l.disabled=!0),a.fire("add",l,function(t){t===!1||l.disabled||(l.index=a.list.length,a.list.push(l),a.map[l.id]=l,a.run("draw",l),a.auto&&a.start())}),l}},add:function(t){var r=this;if("INPUT"==t.tagName){var n=t.files;if(n)for(var i=0,a=n.length;a>i;i++)r.addTask(t,n[i]);else r.addTask(t)}else r.addTask(e,t)},addList:function(t){for(var e=0,r=t.length;r>e;e++)this.add(t[e])},get:function(t){return t!=e?this.map[t]:void 0},cancel:function(t,e){var r=this,n=r.get(t);if(n){var i=n.state;if(i!=O&&i!=N)return r;if(i==N){var a=n.xhr;if(a)return a.abort(),r;r.iframe.contentWindow.location="about:blank"}return e?r:r.complete(n,R)}},remove:function(t){var e=this.get(t);e&&(e.state==N&&this.cancel(t),e.deleted=!0,this.fire("remove",e))},start:function(){var t=this,e=t.workerIdle,r=t.list,n=t.index,i=r.length;if(t.started||(t.started=!0),0>=i||n>=i||0>=e)return t;var a=r[n];return t.index++,t.upload(a)},upload:function(t){var e=this;return!t||t.state!=O||t.skip?e.start():(t.url=e.url,e.workerIdle--,e.fire("upload",t,function(r){return r===!1?e.complete(t,H):void(e.html5&&t.file?e._upload_html5_ready(t):t.input?e._upload_html4(t):e.complete(t,H))}),e)},queryState:function(t,e){var r=this,n=r.url,i=new XMLHttpRequest;return t.queryUrl=n+(-1==n.indexOf("?")?"?":"&")+"action=query&hash="+(t.hash||t.name),r.fire("sliceQuery",t),i.open("GET",t.queryUrl),i.onreadystatechange=function(){if(4==i.readyState){var n,a;if(i.status>=200&&i.status<400)if(n=i.responseText,"ok"===n?a={ret:1}:n&&(a=h(n)),a&&"number"!=typeof a||(a={ret:0,start:a}),t.response=n,t.json=a,1==a.ret)t.queryOK=!0,r.cancel(t.id,!0).complete(t,C);else{var s=+a.start||0;s!=Math.floor(s)&&(s=0),t.sliceStart=s}c(e,r,i)}},i.onerror=function(){c(e,r,i)},i.send(null),r},_upload_html5_ready:function(t){var e=this,r=function(){t.state!=C&&(e.isSlice?e._upload_slice(t):e._upload_html5(t))},n=function(r){e.fire("hash",t,function(){t.hash&&e.isQueryState&&t.state!=C?e.queryState(t,r):r()})},i=function(r){if(e.isMd5&&y){var i=e.fns.hashProgress;y(t.file,function(e,i){t.hash=e,t.timeHash=i,n(r)},function(r){c(i,e,t,r)})}else n(r)};return e.isUploadAfterHash?i(r):(r(),i()),e},_process_params:function(t,e){this.data&&Object.forEach(this.data,e),t.data&&Object.forEach(t.data,e)},_upload_html5:function(t){var e=this,r=new XMLHttpRequest;t.xhr=r,r.upload.addEventListener("progress",function(r){e.progress(t,r.total,r.loaded)},!1),r.addEventListener("load",function(r){e.complete(t,C,r.target.responseText)},!1),r.addEventListener("error",function(){e.complete(t,P)},!1),r.addEventListener("abort",function(){e.complete(t,R)},!1);var n=new FormData;e._process_params(t,function(t,e){n.append(t,e)}),n.append("fileName",t.name),n.append(e.upName,t.blob||t.file,t.name),r.open("POST",t.url),e.fire("send",t,function(i){return i===!1?e.complete(t,H):(r.send(n),void e._afterSend(t))})},_upload_html4:function(t){var e=this,r=e.form,n=t.input;return n._uploaded?e.complete(t,C):(n._uploaded=!0,n.name=e.upName,r.innerHTML="",r.appendChild(n),r.action=t.url,e._process_params(t,function(t,e){r.appendChild(m('<input type="hidden" name="'+t+'" value="'+e+'">'))}),void e.fire("send",t,function(n){return n===!1?e.complete(t,H):(r.submit(),void e._afterSend(t))}))},_afterSend:function(t){t.lastTime=t.startTime=Date.now(),t.state=N,this._lastTask=t,this.progress(t)},progress:function(t,e,r){e||(e=t.size),(!r||0>r)&&(r=0);var n=t.state||O;r>e&&(r=e),r>0&&n==O&&(t.state=n=N);var i=n==C;i&&(e=r=t.size),o(t,e,r),t.total=e,t.loaded=r,this.fire("progress",t),this.run("update",t)},_process_response:function(t,e){t.response=e,e&&"json"==this.dataType&&(t.json=h(e))},complete:function(t,r,n){var i=this;return t||1!=i.workerThread||(t=i._lastTask),t&&(r!=e&&(t.state=r),t.state!=N&&r!=C||(t.state=C,i.progress(t,t.size,t.size)),n!==e&&i._process_response(t,n)),r==R&&i.fire("cancel",t),i.fire("complete",t),i.run("over",t).run("update",t),i.workerIdle++,i.started&&i.start(),i}},l.extend=function(t,e){d(l.prototype,t,e)},n(),d(l,{support:{html5:S,multiple:T},READY:O,PROCESSING:N,COMPLETE:C,SKIP:H,CANCEL:R,ERROR:P,Lang:{status_ready:"准备中",status_processing:"上传中",status_complete:"已完成",status_skip:"已跳过",status_cancel:"已取消",status_error:"已失败"},getStatusText:r}),Q.Uploader=l}(window),function(t,e){"use strict";function r(t,e){t.className+=" "+e}function n(t,e){t&&(t.innerHTML=e||"")}function i(e,r){var n=t.URL||t.webkitURL;if(n)return r(n.createObjectURL(e));if(t.FileReader){var i=new FileReader;i.onload=function(t){r(t.target.result)},i.readAsDataURL(e)}else e.readAsDataURL&&r(e.readAsDataURL())}function a(t,r,n){var a=r.input,s=r.file||(a.files?a.files[0]:e);if(s)i(s,function(e){e&&(t.innerHTML='<img src="'+e+'" />'),n&&n(e)});else if(a){var o=a.value;if(o&&!/^\w:\\fakepath/.test(o)||(a.select(),parent.document.body.focus(),document.selection&&(o=document.selection.createRange().text)),o){t.innerHTML='<img src="'+o+'" />';try{p>6&&(t.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='"+o+"')")}catch(l){}}n&&n(o)}}function s(t){var e=t.slice(1);return"image/"+("jpg"==e?"jpeg":e)}function o(t,e){for(var r=t.split(","),n=atob(r[1]),i=[],a=0,s=n.length;s>a;a++)i[a]=n.charCodeAt(a);if(v)return new v([new Uint8Array(i)],{type:e});var o=new m;return o.append(i),o.getBlob(e)}function l(t,e,r,n){var i=new Image;i.src=t,i.onload=function(){var t=i.width,a=i.height,s=r.maxWidth,o=r.maxHeight,l=s&&t>s,u=o&&a>o,c=l||u;if(!c)return n&&n(!1);l&&(t=s,a=Math.floor(i.height*t/i.width)),u&&(a=o,t=Math.floor(i.width*a/i.height));var d=document.createElement("canvas"),f=d.getContext("2d");d.width=t,d.height=a,f.drawImage(i,0,0,t,a),n&&n(d.toDataURL(e),e)}}var u=Q.getFirst,c=Q.getNext,d=Q.createEle,f=Q.setOpacity,p=Q.ie,h=Q.Uploader,v=t.Blob||t.WebkitBlob||t.MozBlob,m=t.WebKitBlobBuilder||t.MozBlobBuilder,g=function(){if(!t.FileReader||!t.atob||!v&&!m)return!1;var e=document.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")}(),w=".jpg,.png,.gif,.bmp,.webp,.tif,.tiff",y=".jpg";h.support.imageScale=g,h.previewImage=a,h.scaleImage=l,h.extend({init:function(){var t=this.ops,e=t.boxView;t.allows||(t.allows=w),e&&r(e,this.html5?"html5":"html4")},supportScale:function(t){if(!g)return!1;".jpeg"==t&&(t=".jpg");var e=(this.ops.scale||{}).types||y,r=-1!=w.indexOf(t);return r?"*"==e||-1!=e.indexOf(t):!1},previewImage:function(t,e,r){var n=this,i=e.scale||r.scale,u=i&&n.supportScale(e.ext);return u&&(e.skip=!0),a(t,e,function(t){n.fire("preview",{task:e,src:t}),t&&u&&l(t,s(e.ext),i,function(t,r){if(t){var i=o(t,r);e.blob=i,n.fire("scale",{task:e,base64:t,type:r,blob:i})}e.skip=!1,n.list.push(e),n.auto&&n.start()})}),n},draw:function(t){var e=this,r=e.ops,n=r.view;if(n){var i=t.name,a='<div class="u-img"></div><div class="u-progress-bar"><div class="u-progress"></div></div><div class="u-detail"></div><div class="u-name" title="'+i+'">'+i+"</div>",s=t.id,o=d("div","u-item",a);o.taskId=s;var l=u(o),p=c(l),h=u(p),v=c(p);f(p,.3),f(h,.5),t.box=o,t.boxProgress=h,t.boxDetail=v,n.appendChild(o),e.previewImage(l,t,r).update(t)}},update:function(t){if(t&&t.box){var r=this,i=t.total||t.size,a=t.loaded,s=t.state,o=t.boxProgress,l=t.boxDetail,u=h.getStatusText(s);if(r.html5&&a!=e&&a>=0){var c;if(s==h.PROCESSING){var d=Math.min(100*a/i,100);c=d.toFixed(1),"100.0"==c&&(c="99.9")}else s==h.COMPLETE&&(c="100");c&&(c+="%",u+=" "+c,o.style.width=c)}n(l,u)}},over:function(t){t&&t.box&&r(t.box,"u-over")}})}(window);
/* store.js - Copyright (c) 2010-2017 Marcus Westin */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.ls=e()}}(function(){var define,module,exports;return function e(t,n,r){function o(u,a){if(!n[u]){if(!t[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[u]={exports:{}};t[u][0].call(f.exports,function(e){var n=t[u][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){"use strict";var r=e("../src/store-engine"),o=e("../storages/all"),i=e("../plugins/all");t.exports=r.createStore(o,i)},{"../plugins/all":2,"../src/store-engine":13,"../storages/all":15}],2:[function(e,t,n){"use strict";t.exports={defaults:e("./defaults"),dump:e("./dump"),events:e("./events"),observe:e("./observe"),expire:e("./expire"),json2:e("./json2"),operations:e("./operations"),update:e("./update"),"v1-backcompat":e("./v1-backcompat")}},{"./defaults":3,"./dump":4,"./events":5,"./expire":6,"./json2":7,"./observe":9,"./operations":10,"./update":11,"./v1-backcompat":12}],3:[function(e,t,n){"use strict";function r(){function e(e,t){n=t}function t(e,t){var r=e();return void 0!==r?r:n[t]}var n={};return{defaults:e,get:t}}t.exports=r},{}],4:[function(e,t,n){"use strict";function r(){function e(e){var t={};return this.each(function(e,n){t[n]=e}),t}return{dump:e}}t.exports=r},{}],5:[function(e,t,n){"use strict";function r(){function e(e,t,n){return c.on(t,u(this,n))}function t(e,t){c.off(t)}function n(e,t,n){c.once(t,u(this,n))}function r(e,t,n){var r=this.get(t);e(),c.fire(t,n,r)}function i(e,t){var n=this.get(t);e(),c.fire(t,void 0,n)}function s(e){var t={};this.each(function(e,n){t[n]=e}),e(),a(t,function(e,t){c.fire(t,void 0,e)})}var c=o();return{watch:e,unwatch:t,once:n,set:r,remove:i,clearAll:s}}function o(){return s(f,{_id:0,_subSignals:{},_subCallbacks:{}})}var i=e("../src/util"),u=i.bind,a=i.each,s=i.create,c=i.slice;t.exports=r;var f={_id:null,_subCallbacks:null,_subSignals:null,on:function(e,t){return this._subCallbacks[e]||(this._subCallbacks[e]={}),this._id+=1,this._subCallbacks[e][this._id]=t,this._subSignals[this._id]=e,this._id},off:function(e){var t=this._subSignals[e];delete this._subCallbacks[t][e],delete this._subSignals[e]},once:function(e,t){var n=this.on(e,u(this,function(){t.apply(this,arguments),this.off(n)}))},fire:function(e){var t=c(arguments,1);a(this._subCallbacks[e],function(e){e.apply(this,t)})}}},{"../src/util":14}],6:[function(e,t,n){"use strict";function r(){function e(e,t,n,i){return this.hasNamespace(o)||r.set(t,i),e()}function t(e,t){if(!this.hasNamespace(o)){var n=r.get(t,Number.MAX_VALUE);n<=(new Date).getTime()&&this.remove(t)}return e()}function n(e,t){return this.hasNamespace(o)||r.remove(t),e()}var r=this.namespace(o);return{set:e,get:t,remove:n}}var o="expire_mixin";t.exports=r},{}],7:[function(e,t,n){"use strict";function r(){return e("./lib/json2"),{}}t.exports=r},{"./lib/json2":8}],8:[function(require,module,exports){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,o,i,u,a=gap,s=t[e];switch(s&&"object"===("undefined"==typeof s?"undefined":_typeof(s))&&"function"==typeof s.toJSON&&(s=s.toJSON(e)),"function"==typeof rep&&(s=rep.call(t,e,s)),"undefined"==typeof s?"undefined":_typeof(s)){case"string":return quote(s);case"number":return isFinite(s)?String(s):"null";case"boolean":case"null":return String(s);case"object":if(!s)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(s)){for(i=s.length,n=0;n<i;n+=1)u[n]=str(n,s)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+a+"]":"["+u.join(",")+"]",gap=a,o}if(rep&&"object"===("undefined"==typeof rep?"undefined":_typeof(rep)))for(i=rep.length,n=0;n<i;n+=1)"string"==typeof rep[n]&&(r=rep[n],o=str(r,s),o&&u.push(quote(r)+(gap?": ":":")+o));else for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(o=str(r,s),o&&u.push(quote(r)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+a+"}":"{"+u.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;r<n;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!==("undefined"==typeof t?"undefined":_typeof(t))||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,o=e[t];if(o&&"object"===("undefined"==typeof o?"undefined":_typeof(o)))for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r=walk(o,n),void 0!==r?o[n]=r:delete o[n]);return reviver.call(e,t,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},{}],9:[function(e,t,n){"use strict";function r(){function e(e,t,n){var r=this.watch(t,n);return n(this.get(t)),r}function t(e,t){this.unwatch(t)}return{observe:e,unobserve:t}}var o=e("./events");t.exports=[o,r]},{"./events":5}],10:[function(e,t,n){"use strict";function r(){function e(e,t,n,r,o,i){return s.call(this,"push",arguments)}function t(e,t){return s.call(this,"pop",arguments)}function n(e,t){return s.call(this,"shift",arguments)}function r(e,t,n,r,o,i){return s.call(this,"unshift",arguments)}function i(e,t,n,r,i,s){var c=u(arguments,2);return this.update(t,{},function(e){if("object"!=("undefined"==typeof e?"undefined":o(e)))throw new Error('store.assign called for non-object value with key "'+t+'"');return c.unshift(e),a.apply(Object,c)})}function s(e,t){var n,r=t[1],o=u(t,2);return this.update(r,[],function(t){n=Array.prototype[e].apply(t,o)}),n}return{push:e,pop:t,shift:n,unshift:r,assign:i}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=e("../src/util"),u=i.slice,a=i.assign,s=e("./update");t.exports=[s,r]},{"../src/util":14,"./update":11}],11:[function(e,t,n){"use strict";function r(){function e(e,t,n,r){3==arguments.length&&(r=n,n=void 0);var o=this.get(t,n),i=r(o);this.set(t,void 0!=i?i:o)}return{update:e}}t.exports=r},{}],12:[function(e,t,n){"use strict";function r(){return this.disabled=!this.enabled,{has:o,transact:i,clear:u,forEach:a,getAll:s,serialize:c,deserialize:f}}function o(e,t){return void 0!==this.get(t)}function i(e,t,n,r){null==r&&(r=n,n=null),null==n&&(n={});var o=this.get(t,n),i=r(o);this.set(t,void 0===i?o:i)}function u(e){return this.clearAll.call(this)}function a(e,t){return this.each.call(this,function(e,n){t(n,e)})}function s(e){return this.dump.call(this)}function c(e,t){return JSON.stringify(t)}function f(e,t){if("string"==typeof t)try{return JSON.parse(t)}catch(n){return t||void 0}}var l=e("./dump"),p=e("./json2");t.exports=[l,p,r]},{"./dump":4,"./json2":7}],13:[function(e,t,n){"use strict";function r(e,t){var n={_seenPlugins:[],_namespacePrefix:"",_namespaceRegexp:null,_legalNamespace:/^[a-zA-Z0-9_\-]+$/,_storage:function(){if(!this.enabled)throw new Error("store.js: No supported storage has been added! Add one (e.g store.addStorage(require('store/storages/cookieStorage')) or use a build with more built-in storages (e.g https://github.com/marcuswestin/store.js/tree/master/dist/store.legacy.min.js)");return this._storage.resolved},_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var n=e.read(t)===t;return e.remove(t),n}catch(r){return!1}},_assignPluginFnProp:function(e,t){var n=this[t];this[t]=function(){function t(){if(n){var e=n.apply(o,t.args);return delete t.args,e}}var r=Array.prototype.slice.call(arguments,0),o=this,i=[t].concat(r);return t.args=r,e.apply(o,i)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var n="";try{n=JSON.parse(e)}catch(r){n=e}return void 0!==n?n:t}},r=a(n,l);return u(e,function(e){r.addStorage(e)}),u(t,function(e){r.addPlugin(e)}),r}var o=e("./util"),i=o.pluck,u=o.each,a=o.create,s=o.isList,c=o.isFunction,f=o.isObject;t.exports={createStore:r};var l={version:"2.0.3",enabled:!1,storage:null,addStorage:function(e){this.enabled||this._testStorage(e)&&(this._storage.resolved=e,this.enabled=!0,this.storage=e.name)},addPlugin:function(e){var t=this;if(s(e))return void u(e,function(e){t.addPlugin(e)});var n=i(this._seenPlugins,function(t){return e===t});if(!n){if(this._seenPlugins.push(e),!c(e))throw new Error("Plugins must be function values that return objects");var r=e.call(this);if(!f(r))throw new Error("Plugins must return an object of function properties");u(r,function(n,r){if(!c(n))throw new Error("Bad plugin property: "+r+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(n,r)})}},get:function(e,t){var n=this._storage().read(this._namespacePrefix+e);return this._deserialize(n,t)},set:function(e,t){return void 0===t?this.remove(e):(this._storage().write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this._storage().remove(this._namespacePrefix+e)},each:function(e){var t=this;this._storage().each(function(n,r){e(t._deserialize(n),r.replace(t._namespaceRegexp,""))})},clearAll:function(){this._storage().clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},namespace:function(e){if(!this._legalNamespace.test(e))throw new Error("store.js namespaces can only have alhpanumerics + underscores and dashes");var t="__storejs_"+e+"_";return a(this,{_namespacePrefix:t,_namespaceRegexp:t?new RegExp("^"+t):null})},createStore:function(e,t){return r(e,t)}}},{"./util":14}],14:[function(e,t,n){(function(e){"use strict";function n(){return Object.assign?Object.assign:function(e,t,n,r){for(var o=1;o<arguments.length;o++)a(Object(arguments[o]),function(t,n){e[n]=t});return e}}function r(){if(Object.create)return function(e,t,n,r){var o=u(arguments,1);return d.apply(this,[Object.create(e)].concat(o))};var e=function(){};return function(t,n,r,o){var i=u(arguments,1);return e.prototype=t,d.apply(this,[new e].concat(i))}}function o(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function i(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function u(e,t){return Array.prototype.slice.call(e,t||0)}function a(e,t){c(e,function(e,n){return t(e,n),!1})}function s(e,t){var n=f(e)?[]:{};return c(e,function(e,r){return n[r]=t(e,r),!1}),n}function c(e,t){if(f(e)){for(var n=0;n<e.length;n++)if(t(e[n],n))return e[n]}else for(var r in e)if(e.hasOwnProperty(r)&&t(e[r],r))return e[r]}function f(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function l(e){return e&&"[object Function]"==={}.toString.call(e)}function p(e){return e&&"[object Object]"==={}.toString.call(e)}var d=n(),g=r(),h=o(),v="undefined"!=typeof window?window:e;t.exports={assign:d,create:g,trim:h,bind:i,slice:u,each:a,map:s,pluck:c,isList:f,isFunction:l,isObject:p,Global:v}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,n){"use strict";t.exports={localStorage:e("./localStorage"),"oldFF-globalStorage":e("./oldFF-globalStorage"),"oldIE-userDataStorage":e("./oldIE-userDataStorage"),cookieStorage:e("./cookieStorage"),sessionStorage:e("./sessionStorage"),memoryStorage:e("./memoryStorage")}},{"./cookieStorage":16,"./localStorage":17,"./memoryStorage":18,"./oldFF-globalStorage":19,"./oldIE-userDataStorage":20,"./sessionStorage":21}],16:[function(e,t,n){"use strict";function r(e){if(!e||!s(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(p.cookie.replace(new RegExp(t),"$1"))}function o(e){for(var t=p.cookie.split(/; ?/g),n=t.length-1;n>=0;n--)if(l(t[n])){var r=t[n].split("="),o=unescape(r[0]),i=unescape(r[1]);e(i,o)}}function i(e,t){e&&(p.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function u(e){e&&s(e)&&(p.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function a(){o(function(e,t){u(t)})}function s(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(p.cookie)}var c=e("../src/util"),f=c.Global,l=c.trim;t.exports={name:"cookieStorage",read:r,write:i,each:o,remove:u,clearAll:a};var p=f.document},{"../src/util":14}],17:[function(e,t,n){"use strict";function r(){return f.localStorage}function o(e){return r().getItem(e)}function i(e,t){return r().setItem(e,t)}function u(e){for(var t=r().length-1;t>=0;t--){var n=r().key(t);e(o(n),n)}}function a(e){return r().removeItem(e)}function s(){return r().clear()}var c=e("../src/util"),f=c.Global;t.exports={name:"localStorage",read:o,write:i,each:u,remove:a,clearAll:s}},{"../src/util":14}],18:[function(e,t,n){"use strict";function r(e){return s[e]}function o(e,t){s[e]=t}function i(e){for(var t in s)s.hasOwnProperty(t)&&e(s[t],t)}function u(e){delete s[e]}function a(e){s={}}t.exports={name:"memoryStorage",read:r,write:o,each:i,remove:u,clearAll:a};var s={}},{}],19:[function(e,t,n){"use strict";function r(e){return f[e]}function o(e,t){f[e]=t}function i(e){for(var t=f.length-1;t>=0;t--){var n=f.key(t);e(f[n],n)}}function u(e){return f.removeItem(e)}function a(){i(function(e,t){delete f[e]})}var s=e("../src/util"),c=s.Global;t.exports={name:"oldFF-globalStorage",read:r,write:o,each:i,remove:u,clearAll:a};var f=c.globalStorage},{"../src/util":14}],20:[function(e,t,n){"use strict";function r(e,t){if(!h){var n=s(e);g(function(e){e.setAttribute(n,t),e.save(p)})}}function o(e){if(!h){var t=s(e),n=null;return g(function(e){n=e.getAttribute(t)}),n}}function i(e){g(function(t){for(var n=t.XMLDocument.documentElement.attributes,r=n.length-1;r>=0;r--){var o=n[r];e(t.getAttribute(o.name),o.name)}})}function u(e){var t=s(e);g(function(e){e.removeAttribute(t),e.save(p)})}function a(){g(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(p);for(var n=t.length-1;n>=0;n--)e.removeAttribute(t[n].name);e.save(p)})}function s(e){return e.replace(/^d/,"___$&").replace(v,"___")}function c(){if(!d||!d.documentElement||!d.documentElement.addBehavior)return null;var e,t,n,r="script";try{t=new ActiveXObject("htmlfile"),t.open(),t.write("<"+r+">document.w=window</"+r+'><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,n=e.createElement("div")}catch(o){n=d.createElement("div"),e=d.body}return function(t){var r=[].slice.call(arguments,0);r.unshift(n),e.appendChild(n),n.addBehavior("#default#userData"),n.load(p),t.apply(this,r),e.removeChild(n)}}var f=e("../src/util"),l=f.Global;t.exports={name:"oldIE-userDataStorage",write:r,read:o,each:i,remove:u,clearAll:a};var p="storejs",d=l.document,g=c(),h=(l.navigator?l.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./),v=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g")},{"../src/util":14}],21:[function(e,t,n){"use strict";function r(){return f.sessionStorage}function o(e){return r().getItem(e)}function i(e,t){return r().setItem(e,t)}function u(e){for(var t=r().length-1;t>=0;t--){var n=r().key(t);e(o(n),n)}}function a(e){return r().removeItem(e)}function s(){return r().clear()}var c=e("../src/util"),f=c.Global;t.exports={name:"sessionStorage",read:o,write:i,each:u,remove:a,clearAll:s}},{"../src/util":14}]},{},[1])(1)});