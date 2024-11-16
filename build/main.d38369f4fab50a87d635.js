(()=>{"use strict";var e={365:(e,o,n)=>{n.d(o,{A:()=>i});var t=n(601),r=n.n(t),l=n(314),c=n.n(l)()(r());c.push([e.id,"body{\n    margin: 0;\n    box-sizing: border-box;\n}\ninput {\n    min-width: 0;\n  }\n.numBtn{\n    border-style: none;\n    width:100px;\n    height: 100px;\n    border-radius: 10px;\n    background: gray;\n    margin: 3px;\n    font-size: 25px;\n    color: white;\n}\n.numBtn:hover{\n    background: rgb(107, 107, 107);\n}\n.numBtn:active{\n    background: rgb(145, 145, 145);\n}\n.actionBtn{\n    border-style: none;\n    width:100px;\n    height: 100px;\n    border-radius: 10px;\n    background: rgb(224, 183, 0);\n    margin: 3px;\n    font-size: 25px;\n    color: white;\n}\n.actionBtn:hover{\n    background: rgb(192, 157, 0);\n}\n.actionBtn:active{\n    background: rgb(241, 197, 0);\n}\n#row{\n width: 430px;\n display: flex;\n justify-content: space-around;\n \n}\n#row:last-child >.numBtn:first-child{\n    width: 206px;\n    \n}\n#calculator{\n    max-width:441px;\n    padding: 6px;\n    box-sizing: border-box;\n    position: absolute;\n    left: calc(50vw - 260px);\n    top: calc(50vh - 290px);\n    align-items: center;\n    overflow: hidden;\n    background: black;\n    font-family: Arial, sans-serif;\n    border-radius: 15px;\n    \n}\n#calcDisplay{\n    \n    width: 100%;\n    height: 90px;\n    border-radius: 15px;\n    margin: 0 0 10px 0;\n    padding: 10px 10px 10px 10px;\n    padding-inline-start: 0;\n    padding-inline-end: 0;\n    padding-block: 0 0;\n    background-color: rgb(75, 75, 75);\n    border-color: black;\n    border-style: none;\n    font-size: 40px;\n    color: white;\n    text-align: end;\n}",""]);const i=c},314:e=>{e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var n="",t=void 0!==o[5];return o[4]&&(n+="@supports (".concat(o[4],") {")),o[2]&&(n+="@media ".concat(o[2]," {")),t&&(n+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),n+=e(o),t&&(n+="}"),o[2]&&(n+="}"),o[4]&&(n+="}"),n})).join("")},o.i=function(e,n,t,r,l){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);t&&c[u[0]]||(void 0!==l&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=l),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),o.push(u))}},o}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var o=[];function n(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function t(e,t){for(var l={},c=[],i=0;i<e.length;i++){var s=e[i],a=t.base?s[0]+t.base:s[0],u=l[a]||0,g="".concat(a," ").concat(u);l[a]=u+1;var d=n(g),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)o[d].references++,o[d].updater(p);else{var f=r(p,t);t.byIndex=i,o.splice(i,0,{identifier:g,updater:f,references:1})}c.push(g)}return c}function r(e,o){var n=o.domAPI(o);return n.update(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap&&o.supports===e.supports&&o.layer===e.layer)return;n.update(e=o)}else n.remove()}}e.exports=function(e,r){var l=t(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<l.length;c++){var i=n(l[c]);o[i].references--}for(var s=t(e,r),a=0;a<l.length;a++){var u=n(l[a]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}l=s}}},659:e=>{var o={};e.exports=function(e,n){var t=function(e){if(void 0===o[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}o[e]=n}return o[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},540:e=>{e.exports=function(e){var o=document.createElement("style");return e.setAttributes(o,e.attributes),e.insert(o,e.options),o}},56:(e,o,n)=>{e.exports=function(e){var o=n.nc;o&&e.setAttribute("nonce",o)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var o=e.insertStyleElement(e);return{update:function(n){!function(e,o,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,r&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),o.styleTagTransform(t,e,o.options)}(o,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)}}}},113:e=>{e.exports=function(e,o){if(o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var l=o[t]={id:t,exports:{}};return e[t](l,l.exports,n),l.exports}n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),n.nc=void 0;var t=n(72),r=n.n(t),l=n(825),c=n.n(l),i=n(659),s=n.n(i),a=n(56),u=n.n(a),g=n(540),d=n.n(g),p=n(113),f=n.n(p),h=n(365),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=d(),r()(h.A,v),h.A&&h.A.locals&&h.A.locals;const b=document.getElementById("calcDisplay");let m=[],x=[],y=0,w=[];function N(){try{if(m[m.length-1].length>11){const e=Array.from(m[m.length-1]);let o;console.log(e[e.indexOf("e")]);let n=e.pop();void 0===e[e.indexOf("e")]&&(n=e.pop(),n=e.pop(),n=e.pop()),console.log(e),console.log(e[e.length-1]);for(let t=e.length-1;t>=0;t--)if(console.log(e[e.length-1]+"popapapodandadan"),"9"!==e[t]&&"0"!==e[t]||"skip"===o||void 0!==e[e.indexOf("e")]){if(console.log("lastdec is ",o),void 0===o){e.push(n),console.log(e+"     BOOOOBAAAA");const o=e.indexOf("e")-1;if(console.log(o+" 007"),"0"!==e[o]){let n;e.splice(o,1),console.log(e),console.log("MEMQEKJQNWEUIYHQW"),console.log(e[o-1]);for(let t=o-1;t>=0;t--){if("9"!==e[t]&&"0"!==e[t]&&"."!==e[t]||(n=e[t],console.log(n),console.log(e)),"0"===n){console.log(e),m[m.length-1]=Number(e.reduce(((e,o)=>e+o))).toString();break}if("9"!==e[t]){"."===e[t]&&(e.splice(t,1),t--),console.log(e[t]),e[t]=(Number(e[t])+1).toString(),console.log(e[t]),console.log(e),m[m.length-1]=Number(e.reduce(((e,o)=>e+o))).toString();break}e.splice(t,1)}break}console.log(e[e.indexOf("e")]),console.log(e.indexOf("e")-1),console.log(e),e.splice(o,1),console.log(e),m[m.length-1]=Number(e.reduce(((e,o)=>e+o))).toString()}if("0"===o){console.log(e),m[m.length-1]=Number(e.reduce(((e,o)=>e+o))).toString();break}if("0"!==e[t]){if("skip"===o){m[m.length-1]=Number(e.reduce(((e,o)=>e+o))).toString();break}console.log(o+"    LASTDEC IN ELSE"),console.log(e[t]),e[t]=(Number(e[t])+1).toString(),m[m.length-1]=Number(e.reduce(((e,o)=>e+o))).toString();break}}else console.log(o),"0"===o&&"9"===e[t]?(console.log("okaruuuuun"),o="skip"):o=e[t],console.log(o),void 0!==o&&"skip"!==o?e.pop():t++,console.log(e)}}catch(e){b.value="Error"}}window.toDisplay=function(e){try{const o=Array.from(b.value)[b.value.length-1];("-"===e||"+"===e||"*"===e||"/"===e||"."===e)&&("-"===o||"+"===o||"*"===o||"/"===o||"."===o||void 0===o)||"."===e&&"%"===o||("-"===e||"+"===e||"*"===e||"/"===e?(console.log(y+"STAGECOUNT"),0===y?(console.log("i"),console.log(x),console.log(m),"+"!==m[m.length-1]&&"-"!==m[m.length-1]&&"*"!==m[m.length-1]&&"/"!==m[m.length-1]&&m[0]||m.push(x.reduce(((e,o)=>e+o))),x=[]):2===y&&(m.push(x.reduce(((e,o)=>e+o))),y=0),m.push(e),y=1,b.value+=e,console.log(x),console.log(m)):(console.log(x),1===y&&(x=[],y=0),x.includes(".")&&"."===e||(x.push(e),console.log(x),b.value+=e)))}catch(e){b.value="Error"}},window.disClear=function(){try{m=[],b.value="",x=[],console.log(x),y=0}catch(e){b.value="Error"}},window.changeSign=function(){try{const e=m.slice(-1)[0];if(console.log(m),console.log(e),console.log(x[0]),void 0===m[0])if("-"!==x[0]){console.log(x);const e=["-"].concat(x);x=e,b.value=x.reduce(((e,o)=>e+o))}else console.log(x),x.shift(),void 0===x[0]?b.value="":b.value=x.reduce(((e,o)=>e+o));else"+"===e?void 0===x[0]?(console.log(m),m.pop(),m.push("-"),b.value=b.value.slice(0,-1)+"-"):(m.pop(),m.push("-"),b.value=m.reduce(((e,o)=>e+o))+x.reduce(((e,o)=>e+o))):"-"===e&&(void 0===x[0]?(console.log(m),m.pop(),m.push("+"),b.value=b.value.slice(0,-1)+"+"):(m.pop(),m.push("+"),b.value=m.reduce(((e,o)=>e+o))+x.reduce(((e,o)=>e+o))))}catch(e){b.value="Error"}},window.proc=function(){try{const e=Array.from(b.value)[b.value.length-1];if("-"===e||"+"===e||"*"===e||"/"===e||"%"===e||"."===e);else if(void 0===e);else{if(console.log(x),x[0]){console.log(x);const e=m.slice(-1);console.log(e),0===m.length&&m.push(b.value),console.log(x),console.log(m),console.log(m.length),"+"===m[m.length-1]||"-"===m[m.length-1]||"*"===m[m.length-1]||"/"===m[m.length-1]?m.push((Number(x.reduce(((e,o)=>e+o)))/100).toString()):m[m.length-1]=(Number(x.reduce(((e,o)=>e+o)))/100).toString(),N(),x=Array.from((Number(x.reduce(((e,o)=>e+o)))/100).toString()),console.log(x)}else console.log(w),m[0]=Number(w[0])/100,m[0]=m[0].toString(),N(),w[0]=Number(m[0]),console.log(m);console.log(m),b.value=m.reduce(((e,o)=>e+o)),1===m.length&&(m=[]),y=0,console.log(m)}}catch(e){b.value="Error"}},window.equals=function(){try{"+"!==m[m.length-1]&&"-"!==m[m.length-1]&&"*"!==m[m.length-1]&&"/"!==m[m.length-1]||(x[0]?(console.log("kek"),m.push(x.reduce(((e,o)=>e+o)))):(console.log(m),m.pop())),console.log(m);const e=Array.from(b.value)[b.value.length-1];console.log(e);for(let e=0;e<m.length;e++)"/"===m[e]&&(m[e-1]=(Number(m[e-1])/Number(m[e+1])).toString(),m.splice(e,2),e--,console.log(m)),"*"===m[e]&&(m[e-1]=(Number(m[e-1])*Number(m[e+1])).toString(),m.splice(e,2),console.log(m),e--);for(let e=0;e<m.length;e++)"+"===m[e]&&(m[e-1]=(Number(m[e-1])+Number(m[e+1])).toString(),m.splice(e,2),e--,console.log(m)),"-"===m[e]&&(m[e-1]=(Number(m[e-1])-Number(m[e+1])).toString(),m.splice(e,2),console.log(m),e--);y=0,console.log(m),N(),console.log(m),b.value=m[0].toString(),w=m,console.log(m),x=Array.from(m[0]),m=[],console.log(x+" lastnum")}catch(e){b.value="Error"}}})();