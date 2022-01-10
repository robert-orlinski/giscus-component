"use strict";var e=Object.defineProperty,n=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(n,t,i)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i,s=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&a(e,t,n[t]);if(i)for(var t of i(n))r.call(n,t)&&a(e,t,n[t]);return e},c=(e,i)=>n(e,t(i));Object.defineProperty(exports,"__esModule",{value:!0}),exports[Symbol.toStringTag]="Module";var u=require("react"),d=require("prop-types");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=l(u),m=l(d);const g="Please consider reporting this error at https://github.com/laymonage/giscus/issues/new.";function h(e){return`[giscus] An error occurred. Error message: "${e}".`}function p(e){const n=document.querySelector(`meta[property='og:${e}'],meta[name='${e}']`);return n?n.content:""}function w({repo:e,repoId:n,category:t="",categoryId:i="",mapping:o,term:r="",theme:a="light",reactionsEnabled:s="1",emitMetadata:c="0",session:u,origin:d=location.href}){const l={origin:d,session:u,theme:a,reactionsEnabled:s,emitMetadata:c,repo:e,repoId:n,category:t,categoryId:i,description:p("description")};switch(o){case"url":l.term=location.href;break;case"title":l.term=document.title;break;case"og:title":l.term=p("title");break;case"specific":l.term=r;break;case"number":l.number=r;break;case"pathname":default:l.term=location.pathname.length<2?"index":location.pathname.substr(1).replace(/\.\w+$/,"")}return`https://giscus.app/widget?${new URLSearchParams(l)}`}function b(){const e=document.getElementById("giscus-css")||document.createElement("style");e.id="giscus-css",e.textContent="\n    .giscus, .giscus-frame {\n      width: 100%;\n    }\n    .giscus-frame {\n      border: none;\n      color-scheme: auto;\n    }\n  ",document.head.prepend(e)}function y(){return(y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function v(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}var M,I=(function(e){!function(n){if("undefined"!=typeof window){var t,i=0,o=!1,r=!1,a="message".length,s="[iFrameSizer]",c=s.length,u=null,d=window.requestAnimationFrame,l={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},f={},m=null,g={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){z("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},h={};window.jQuery&&((t=window.jQuery).fn?t.fn.iFrameResize||(t.fn.iFrameResize=function(e){return this.filter("iframe").each((function(n,t){H(t,e)})).end()}):I("","Unable to bind to jQuery, it is not fully loaded.")),e.exports=$(),window.iFrameResize=window.iFrameResize||$()}function p(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function w(e,n,t){e.addEventListener(n,t,!1)}function b(e,n,t){e.removeEventListener(n,t,!1)}function y(e){return s+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}function v(e){return f[e]?f[e].log:o}function M(e,n){x("log",e,n,v(e))}function I(e,n){x("info",e,n,v(e))}function z(e,n){x("warn",e,n,!0)}function x(e,n,t,i){!0===i&&"object"==typeof window.console&&console[e](y(n),t)}function O(e){function n(){o("Height"),o("Width"),W((function(){P(q),S($),y("onResized",q)}),q,"init")}function t(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function i(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function o(e){var n=Number(f[$]["max"+e]),t=Number(f[$]["min"+e]),i=e.toLowerCase(),o=Number(q[i]);M($,"Checking "+i+" is in range "+t+"-"+n),o<t&&(o=t,M($,"Set "+i+" to min value")),o>n&&(o=n,M($,"Set "+i+" to max value")),q[i]=""+o}function r(e){return B.substr(B.indexOf(":")+a+e)}function d(e,n){var t,i,o;t=function(){var t,i;j("Send Page Info","pageInfo:"+(t=document.body.getBoundingClientRect(),i=q.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(i.top-t.top,10),offsetLeft:parseInt(i.left-t.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},i=32,h[o=n]||(h[o]=setTimeout((function(){h[o]=null,t()}),i))}function l(e){var n=e.getBoundingClientRect();return F($),{x:Math.floor(Number(n.left)+Number(u.x)),y:Math.floor(Number(n.top)+Number(u.y))}}function m(e){var n=e?l(q.iframe):{x:0,y:0},t={x:Number(q.width)+n.x,y:Number(q.height)+n.y};M($,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):z($,"Unable to scroll to requested position, window.parentIFrame not found"):(u=t,g(),M($,"--"))}function g(){!1!==y("onScroll",u)?S($):T()}function p(e){y(e,{iframe:q.iframe,screenX:q.width,screenY:q.height,type:q.type})}function y(e,n){return k($,e,n)}var v,x,O,E,H,L,A,B=e.data,q={},$=null;"[iFrameResizerChild]Ready"===B?function(){for(var e in f)j("iFrame requested init",N(e),f[e].iframe,e)}():s===(""+B).substr(0,c)&&B.substr(c).split(":")[0]in f?(E=B.substr(c).split(":"),H=E[1]?parseInt(E[1],10):0,L=f[E[0]]&&f[E[0]].iframe,A=getComputedStyle(L),q={iframe:L,id:E[0],height:H+t(A)+i(A),width:E[2],type:E[3]},$=q.id,f[$]&&(f[$].loaded=!0),(O=q.type in{true:1,false:1,undefined:1})&&M($,"Ignoring init message from meta parent page"),!O&&(x=!0,f[v=$]||(x=!1,z(q.type+" No settings for "+v+". Message was: "+B)),x)&&(M($,"Received: "+B),function(){var e=!0;return null===q.iframe&&(z($,"IFrame ("+q.id+") not found"),e=!1),e}()&&function(){var n,t=e.origin,i=f[$]&&f[$].checkOrigin;if(i&&""+t!="null"&&!(i.constructor===Array?function(){var e=0,n=!1;for(M($,"Checking connection is from allowed list of origins: "+i);e<i.length;e++)if(i[e]===t){n=!0;break}return n}():(n=f[$]&&f[$].remoteHost,M($,"Checking connection is from: "+n),t===n)))throw new Error("Unexpected message received from: "+t+" for "+q.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(f[$]&&f[$].firstRun&&f[$]&&(f[$].firstRun=!1),q.type){case"close":R(q.iframe);break;case"message":a=r(6),M($,"onMessage passed: {iframe: "+q.iframe.id+", message: "+a+"}"),y("onMessage",{iframe:q.iframe,message:JSON.parse(a)}),M($,"--");break;case"mouseenter":p("onMouseEnter");break;case"mouseleave":p("onMouseLeave");break;case"autoResize":f[$].autoResize=JSON.parse(r(9));break;case"scrollTo":m(!1);break;case"scrollToOffset":m(!0);break;case"pageInfo":d(f[$]&&f[$].iframe,$),function(){function e(e,i){function o(){f[t]?d(f[t].iframe,t):n()}["scroll","resize"].forEach((function(n){M(t,e+n+" listener for sendPageInfo"),i(window,n,o)}))}function n(){e("Remove ",b)}var t=$;e("Add ",w),f[t]&&(f[t].stopPageInfo=n)}();break;case"pageInfoStop":f[$]&&f[$].stopPageInfo&&(f[$].stopPageInfo(),delete f[$].stopPageInfo);break;case"inPageLink":t=r(9).split("#")[1]||"",i=decodeURIComponent(t),(o=document.getElementById(i)||document.getElementsByName(i)[0])?(e=l(o),M($,"Moving to in page link (#"+t+") at x: "+e.x+" y: "+e.y),u={x:e.x,y:e.y},g(),M($,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):M($,"In page link #"+t+" not found and window.parentIFrame not found"):M($,"In page link #"+t+" not found");break;case"reset":C(q);break;case"init":n(),y("onInit",q.iframe);break;default:n()}var e,t,i,o,a}())):I($,"Ignored: "+B)}function k(e,n,t){var i=null,o=null;if(f[e]){if("function"!=typeof(i=f[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=i(t)}return o}function E(e){var n=e.id;delete f[n]}function R(e){var n=e.id;if(!1!==k(n,"onClose",n)){M(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(t){z(t)}k(n,"onClosed",n),M(n,"--"),E(e)}else M(n,"Close iframe cancelled by onClose event")}function F(e){null===u&&M(e,"Get page position: "+(u={x:window.pageXOffset!==n?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==n?window.pageYOffset:document.documentElement.scrollTop}).x+","+u.y)}function S(e){null!==u&&(window.scrollTo(u.x,u.y),M(e,"Set page position: "+u.x+","+u.y),T())}function T(){u=null}function C(e){M(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),F(e.id),W((function(){P(e),j("reset","reset",e.iframe,e.id)}),e,"reset")}function P(e){function n(n){r||"0"!==e[n]||(r=!0,M(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){function e(e){function n(n){return"0px"===(f[e]&&f[e].iframe.style[n])}function t(e){return null!==e.offsetParent}f[e]&&t(f[e].iframe)&&(n("height")||n("width"))&&j("Visibility change","resize",f[e].iframe,e)}Object.keys(f).forEach((function(n){e(n)}))}function n(n){M("window","Mutation observed: "+n[0].target+" "+n[0].type),L(e,16)}function t(){var e=document.querySelector("body"),t={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};new i(n).observe(e,t)}var i=p();i&&t()}())}function t(t){!function(n){e.id?(e.iframe.style[n]=e[n]+"px",M(e.id,"IFrame ("+i+") "+n+" set to "+e[n]+"px")):M("undefined","messageData id not set")}(t),n(t)}var i=e.iframe.id;f[i]&&(f[i].sizeHeight&&t("height"),f[i].sizeWidth&&t("width"))}function W(e,n,t){t!==n.type&&d&&!window.jasmine?(M(n.id,"Requesting animation frame"),d(e)):e()}function j(e,n,t,i,o){var r,a=!1;i=i||t.id,f[i]&&(t&&"contentWindow"in t&&null!==t.contentWindow?(r=f[i]&&f[i].targetOrigin,M(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+r),t.contentWindow.postMessage(s+n,r)):z(i,"["+e+"] IFrame("+i+") not found"),o&&f[i]&&f[i].warningTimeout&&(f[i].msgTimeout=setTimeout((function(){!f[i]||f[i].loaded||a||(a=!0,z(i,"IFrame has not responded within "+f[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),f[i].warningTimeout)))}function N(e){return e+":"+f[e].bodyMarginV1+":"+f[e].sizeWidth+":"+f[e].log+":"+f[e].interval+":"+f[e].enablePublicMethods+":"+f[e].autoResize+":"+f[e].bodyMargin+":"+f[e].heightCalculationMethod+":"+f[e].bodyBackground+":"+f[e].bodyPadding+":"+f[e].tolerance+":"+f[e].inPageLinks+":"+f[e].resizeFrom+":"+f[e].widthCalculationMethod}function H(e,t){function r(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],z(b,"Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}var a,s,c,u,d,m,h,b=(""===(a=e.id)&&(e.id=(s=t&&t.id||g.id+i++,null!==document.getElementById(s)&&(s+=i++),a=s),o=(t||{}).log,M(a,"Added missing iframe ID: "+a+" ("+e.src+")")),a);b in f&&"iFrameResizer"in e?z(b,"Ignored iFrame, already setup."):(m=(m=t)||{},f[b]={firstRun:!0,iframe:e,remoteHost:e.src&&e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(m),Object.keys(m).forEach(r,m),function(e){for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(f[b][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:g[n])}(m),f[b]&&(f[b].targetOrigin=!0===f[b].checkOrigin?""===(h=f[b].remoteHost)||null!==h.match(/^(about:blank|javascript:|file:\/\/)/)?"*":h:"*"),function(){switch(M(b,"IFrame scrolling "+(f[b]&&f[b].scrolling?"enabled":"disabled")+" for "+b),e.style.overflow=!1===(f[b]&&f[b].scrolling)?"hidden":"auto",f[b]&&f[b].scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=f[b]?f[b].scrolling:"no"}}(),function(){function n(n){f[b][n]!==1/0&&0!==f[b][n]&&(e.style[n]=f[b][n]+"px",M(b,"Set "+n+" = "+f[b][n]+"px"))}function t(e){if(f[b]["min"+e]>f[b]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),"number"!=typeof(f[b]&&f[b].bodyMargin)&&"0"!==(f[b]&&f[b].bodyMargin)||(f[b].bodyMarginV1=f[b].bodyMargin,f[b].bodyMargin=f[b].bodyMargin+"px"),c=N(b),(d=p())&&(u=d,e.parentNode&&new u((function(n){n.forEach((function(n){Array.prototype.slice.call(n.removedNodes).forEach((function(n){n===e&&R(e)}))}))})).observe(e.parentNode,{childList:!0})),w(e,"load",(function(){var t,i;j("iFrame.onload",c,e,n,!0),t=f[b]&&f[b].firstRun,i=f[b]&&f[b].heightCalculationMethod in l,!t&&i&&C({iframe:e,height:0,width:0,type:"init"})})),j("init",c,e,n,!0),f[b]&&(f[b].iframe.iFrameResizer={close:R.bind(null,f[b].iframe),removeListeners:E.bind(null,f[b].iframe),resize:j.bind(null,"Window resize","resize",f[b].iframe),moveToAnchor:function(e){j("Move to anchor","moveToAnchor:"+e,f[b].iframe,b)},sendMessage:function(e){j("Send Message","message:"+(e=JSON.stringify(e)),f[b].iframe,b)}}))}function L(e,n){null===m&&(m=setTimeout((function(){m=null,e()}),n))}function A(){"hidden"!==document.visibilityState&&(M("document","Trigger event: Visiblity change"),L((function(){B("Tab Visable","resize")}),16))}function B(e,n){Object.keys(f).forEach((function(t){(function(e){return f[e]&&"parent"===f[e].resizeFrom&&f[e].autoResize&&!f[e].firstRun})(t)&&j(e,n,f[t].iframe,t)}))}function q(){w(window,"message",O),w(window,"resize",(function(){var e;M("window","Trigger event: "+(e="resize")),L((function(){B("Window "+e,"resize")}),16)})),w(document,"visibilitychange",A),w(document,"-webkit-visibilitychange",A)}function $(){function e(e,n){n&&(function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),H(n,e),t.push(n))}var t;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!d;e+=1)d=window[n[e]+"RequestAnimationFrame"];d?d=d.bind(window):M("setup","RequestAnimationFrame not supported")}(),q(),function(i,o){switch(t=[],function(e){e&&e.enablePublicMethods&&z("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(i),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),e.bind(n,i));break;case"object":e(i,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return t}}}()}(M={exports:{}},M.exports),M.exports),z=function(){},x=function(e){var n=e.title,t=e.forwardRef,i=v(e,["title","forwardRef"]),o=function(e){return e.autoResize,e.bodyBackground,e.bodyMargin,e.bodyPadding,e.checkOrigin,e.inPageLinks,e.heightCalculationMethod,e.interval,e.log,e.maxHeight,e.maxWidth,e.minHeight,e.minWidth,e.resizeFrom,e.scrolling,e.sizeHeight,e.sizeWidth,e.warningTimeout,e.tolerance,e.widthCalculationMethod,e.onClosed,e.onInit,e.onMessage,e.onMouseEnter,e.onMouseLeave,e.onResized,v(e,["autoResize","bodyBackground","bodyMargin","bodyPadding","checkOrigin","inPageLinks","heightCalculationMethod","interval","log","maxHeight","maxWidth","minHeight","minWidth","resizeFrom","scrolling","sizeHeight","sizeWidth","warningTimeout","tolerance","widthCalculationMethod","onClosed","onInit","onMessage","onMouseEnter","onMouseLeave","onResized"])}(i),r=u.useRef(null),a=function(){return z(!r.current,"[iframeSizerReact]["+(r&&r.current&&r.current.id)+"] Close event ignored, to remove the iframe update your React component"),!r.current};return u.useEffect((function(){var e=r.current;return I(y({},i,{onClose:a}),e),function(){return e.iFrameResizer&&e.iFrameResizer.removeListeners()}}),[]),u.useImperativeHandle(t,(function(){return{resize:function(){return r.current.iFrameResizer.resize()},moveToAnchor:function(e){return r.current.iFrameResizer.moveToAnchor(e)},sendMessage:function(e,n){r.current.iFrameResizer.sendMessage(e,n)}}})),f.default.createElement("iframe",y({title:n},o,{ref:r}))};function O(e){const n=location.href,t=new URL(n),i=localStorage.getItem("giscus-session"),[o,r]=u.useState(t.searchParams.get("giscus")||""),[a,d]=u.useState(w(c(s({},e),{session:o}))),l=u.useRef(null);return u.useEffect((()=>{if(o){localStorage.setItem("giscus-session",JSON.stringify(o)),t.searchParams.delete("giscus");const n=t.toString(),i=w(c(s({},e),{session:o,origin:n}));return d(i),void history.replaceState(void 0,document.title,n)}if(i)try{r(JSON.parse(i||"")||"")}catch(n){r(""),localStorage.removeItem("giscus-session"),console.warn(`${h(null==n?void 0:n.message)} Session has been cleared.`)}}),[]),u.useEffect(b,[]),u.useEffect((()=>{const e=(n=()=>r(""),function(e){var t;if("https://giscus.app"!==e.origin)return;const{data:i}=e;if("object"!=typeof i||!(null==(t=null==i?void 0:i.giscus)?void 0:t.error))return;const o=i.giscus.error;if(o.includes("Bad credentials")||o.includes("Invalid state value")){if(null!==localStorage.getItem("giscus-session"))return localStorage.removeItem("giscus-session"),n(),void console.warn(`${h(o)} Session has been cleared.`);console.error(`${h(o)} No session is stored initially. ${g}`)}o.includes("Discussion not found")?console.warn(`[giscus] ${o}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${h(o)} ${g}`)});var n;return window.addEventListener("message",e),()=>window.removeEventListener("message",e)}),[]),u.useEffect((()=>{l.current&&(l.current.src=a)}),[a]),f.default.createElement("div",{className:"giscus"},f.default.createElement(x,{className:"giscus-frame",title:"Comments",src:a,forwardRef:l,checkOrigin:["https://giscus.app"]}))}x.defaultProps={title:"iframe"},x.propTypes={title:m.default.string},exports.Giscus=function({repo:e,repoId:n,category:t,categoryId:i,mapping:o,term:r,theme:a,reactionsEnabled:s,emitMetadata:c}){const[d,l]=u.useState(!1);return u.useEffect((()=>l(!0)),[]),d?f.default.createElement(O,{repo:e,repoId:n,category:t,categoryId:i,mapping:o,term:r,theme:a,reactionsEnabled:s,emitMetadata:c}):null};
