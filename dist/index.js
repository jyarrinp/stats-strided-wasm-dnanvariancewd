"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=o(function(H,p){
var W=require("path").resolve,A=require('@stdlib/fs-read-wasm/dist').sync,O=A(W(__dirname,"..","src","main.wasm"));p.exports=O
});var v=o(function(I,w){
var S=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),f=require('@stdlib/wasm-module-wrapper/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),z=y();function n(e){if(!(this instanceof n))return new n(e);if(!S(e))throw new TypeError(j('nullH0',e));return f.call(this,z,e,{env:{memory:e}}),this}g(n,f);q(n.prototype,"main",function(r,i,t,a){return this._instance.exports.stdlib_strided_dnanvariancewd(r,i,t,a)});q(n.prototype,"ndarray",function(r,i,t,a,d){return this._instance.exports.stdlib_strided_dnanvariancewd_ndarray(r,i,t,a,d)});w.exports=n
});var M=o(function(J,m){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=require('@stdlib/utils-inherit/dist'),E=require('@stdlib/strided-base-stride2offset/dist'),T=require('@stdlib/wasm-memory/dist'),V=require('@stdlib/wasm-base-arrays2ptrs/dist'),k=require('@stdlib/wasm-base-strided2object/dist'),c=v();function s(){return this instanceof s?(c.call(this,new T({initial:0})),this):new s}B(s,c);h(s.prototype,"main",function(r,i,t,a){return this.ndarray(r,i,t,a,E(r,a))});h(s.prototype,"ndarray",function(r,i,t,a,d){var l,u;return l=V(this,[k(r,t,a,d)]),u=l[0],c.prototype.ndarray.call(this,r,i,u.ptr,u.stride,u.offset)});m.exports=s
});var x=o(function(K,b){
var C=M(),_=new C;_.initializeSync();b.exports=_
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=x(),F=v();D(R,"Module",F);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
