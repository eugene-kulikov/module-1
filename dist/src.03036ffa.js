parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VCoT":[function(require,module,exports) {
"use strict";function e(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(0===r.length)throw Error("sum required at least 1 argument");return r.reduce(function(e,r){return e+r},0)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sum=e;
},{}],"H99C":[function(require,module,exports) {
"use strict";var t=require("./modules/sum"),e=document.querySelector("#root");e.textContent=(0,t.sum)(63,-13).toString();
},{"./modules/sum":"VCoT"}]},{},["H99C"], null)
//# sourceMappingURL=/src.03036ffa.js.map