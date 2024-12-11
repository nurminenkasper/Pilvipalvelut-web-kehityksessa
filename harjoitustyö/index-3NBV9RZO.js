(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Ad={exports:{}},Ma={},Cd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function jE(){if(Dg)return Pe;Dg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,F={};function O(V,G,pe){this.props=V,this.context=G,this.refs=F,this.updater=pe||L}O.prototype.isReactComponent={},O.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},O.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function q(){}q.prototype=O.prototype;function K(V,G,pe){this.props=V,this.context=G,this.refs=F,this.updater=pe||L}var ee=K.prototype=new q;ee.constructor=K,N(ee,O.prototype),ee.isPureReactComponent=!0;var oe=Array.isArray,fe=Object.prototype.hasOwnProperty,me={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function I(V,G,pe){var Ae,Ce={},Ne=null,Ue=null;if(G!=null)for(Ae in G.ref!==void 0&&(Ue=G.ref),G.key!==void 0&&(Ne=""+G.key),G)fe.call(G,Ae)&&!x.hasOwnProperty(Ae)&&(Ce[Ae]=G[Ae]);var je=arguments.length-2;if(je===1)Ce.children=pe;else if(1<je){for(var He=Array(je),_t=0;_t<je;_t++)He[_t]=arguments[_t+2];Ce.children=He}if(V&&V.defaultProps)for(Ae in je=V.defaultProps,je)Ce[Ae]===void 0&&(Ce[Ae]=je[Ae]);return{$$typeof:n,type:V,key:Ne,ref:Ue,props:Ce,_owner:me.current}}function R(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function b(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return G[pe]})}var M=/\/+/g;function C(V,G){return typeof V=="object"&&V!==null&&V.key!=null?b(""+V.key):G.toString(36)}function rt(V,G,pe,Ae,Ce){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Ue=!1;if(V===null)Ue=!0;else switch(Ne){case"string":case"number":Ue=!0;break;case"object":switch(V.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=V,Ce=Ce(Ue),V=Ae===""?"."+C(Ue,0):Ae,oe(Ce)?(pe="",V!=null&&(pe=V.replace(M,"$&/")+"/"),rt(Ce,G,pe,"",function(_t){return _t})):Ce!=null&&(P(Ce)&&(Ce=R(Ce,pe+(!Ce.key||Ue&&Ue.key===Ce.key?"":(""+Ce.key).replace(M,"$&/")+"/")+V)),G.push(Ce)),1;if(Ue=0,Ae=Ae===""?".":Ae+":",oe(V))for(var je=0;je<V.length;je++){Ne=V[je];var He=Ae+C(Ne,je);Ue+=rt(Ne,G,pe,He,Ce)}else if(He=S(V),typeof He=="function")for(V=He.call(V),je=0;!(Ne=V.next()).done;)Ne=Ne.value,He=Ae+C(Ne,je++),Ue+=rt(Ne,G,pe,He,Ce);else if(Ne==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Nt(V,G,pe){if(V==null)return V;var Ae=[],Ce=0;return rt(V,Ae,"","",function(Ne){return G.call(pe,Ne,Ce++)}),Ae}function Ot(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var ze={current:null},re={transition:null},ge={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:re,ReactCurrentOwner:me};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Nt,forEach:function(V,G,pe){Nt(V,function(){G.apply(this,arguments)},pe)},count:function(V){var G=0;return Nt(V,function(){G++}),G},toArray:function(V){return Nt(V,function(G){return G})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Pe.Component=O,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=K,Pe.StrictMode=i,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Pe.act=ae,Pe.cloneElement=function(V,G,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=N({},V.props),Ce=V.key,Ne=V.ref,Ue=V._owner;if(G!=null){if(G.ref!==void 0&&(Ne=G.ref,Ue=me.current),G.key!==void 0&&(Ce=""+G.key),V.type&&V.type.defaultProps)var je=V.type.defaultProps;for(He in G)fe.call(G,He)&&!x.hasOwnProperty(He)&&(Ae[He]=G[He]===void 0&&je!==void 0?je[He]:G[He])}var He=arguments.length-2;if(He===1)Ae.children=pe;else if(1<He){je=Array(He);for(var _t=0;_t<He;_t++)je[_t]=arguments[_t+2];Ae.children=je}return{$$typeof:n,type:V.type,key:Ce,ref:Ne,props:Ae,_owner:Ue}},Pe.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Pe.createElement=I,Pe.createFactory=function(V){var G=I.bind(null,V);return G.type=V,G},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(V){return{$$typeof:d,render:V}},Pe.isValidElement=P,Pe.lazy=function(V){return{$$typeof:_,_payload:{_status:-1,_result:V},_init:Ot}},Pe.memo=function(V,G){return{$$typeof:y,type:V,compare:G===void 0?null:G}},Pe.startTransition=function(V){var G=re.transition;re.transition={};try{V()}finally{re.transition=G}},Pe.unstable_act=ae,Pe.useCallback=function(V,G){return ze.current.useCallback(V,G)},Pe.useContext=function(V){return ze.current.useContext(V)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(V){return ze.current.useDeferredValue(V)},Pe.useEffect=function(V,G){return ze.current.useEffect(V,G)},Pe.useId=function(){return ze.current.useId()},Pe.useImperativeHandle=function(V,G,pe){return ze.current.useImperativeHandle(V,G,pe)},Pe.useInsertionEffect=function(V,G){return ze.current.useInsertionEffect(V,G)},Pe.useLayoutEffect=function(V,G){return ze.current.useLayoutEffect(V,G)},Pe.useMemo=function(V,G){return ze.current.useMemo(V,G)},Pe.useReducer=function(V,G,pe){return ze.current.useReducer(V,G,pe)},Pe.useRef=function(V){return ze.current.useRef(V)},Pe.useState=function(V){return ze.current.useState(V)},Pe.useSyncExternalStore=function(V,G,pe){return ze.current.useSyncExternalStore(V,G,pe)},Pe.useTransition=function(){return ze.current.useTransition()},Pe.version="18.3.1",Pe}var Lg;function Of(){return Lg||(Lg=1,Cd.exports=jE()),Cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function BE(){if(bg)return Ma;bg=1;var n=Of(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var _,T={},S=null,L=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(L=p.ref);for(_ in p)i.call(p,_)&&!l.hasOwnProperty(_)&&(T[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)T[_]===void 0&&(T[_]=p[_]);return{$$typeof:e,type:d,key:S,ref:L,props:T,_owner:o.current}}return Ma.Fragment=t,Ma.jsx=c,Ma.jsxs=c,Ma}var Vg;function zE(){return Vg||(Vg=1,Ad.exports=BE()),Ad.exports}var Q=zE(),W=Of(),Mu={},Pd={exports:{}},en={},kd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function $E(){return Mg||(Mg=1,function(n){function e(re,ge){var ae=re.length;re.push(ge);e:for(;0<ae;){var V=ae-1>>>1,G=re[V];if(0<o(G,ge))re[V]=ge,re[ae]=G,ae=V;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var ge=re[0],ae=re.pop();if(ae!==ge){re[0]=ae;e:for(var V=0,G=re.length,pe=G>>>1;V<pe;){var Ae=2*(V+1)-1,Ce=re[Ae],Ne=Ae+1,Ue=re[Ne];if(0>o(Ce,ae))Ne<G&&0>o(Ue,Ce)?(re[V]=Ue,re[Ne]=ae,V=Ne):(re[V]=Ce,re[Ae]=ae,V=Ae);else if(Ne<G&&0>o(Ue,ae))re[V]=Ue,re[Ne]=ae,V=Ne;else break e}}return ge}function o(re,ge){var ae=re.sortIndex-ge.sortIndex;return ae!==0?ae:re.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],_=1,T=null,S=3,L=!1,N=!1,F=!1,O=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(re){for(var ge=t(y);ge!==null;){if(ge.callback===null)i(y);else if(ge.startTime<=re)i(y),ge.sortIndex=ge.expirationTime,e(p,ge);else break;ge=t(y)}}function oe(re){if(F=!1,ee(re),!N)if(t(p)!==null)N=!0,Ot(fe);else{var ge=t(y);ge!==null&&ze(oe,ge.startTime-re)}}function fe(re,ge){N=!1,F&&(F=!1,q(I),I=-1),L=!0;var ae=S;try{for(ee(ge),T=t(p);T!==null&&(!(T.expirationTime>ge)||re&&!b());){var V=T.callback;if(typeof V=="function"){T.callback=null,S=T.priorityLevel;var G=V(T.expirationTime<=ge);ge=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&i(p),ee(ge)}else i(p);T=t(p)}if(T!==null)var pe=!0;else{var Ae=t(y);Ae!==null&&ze(oe,Ae.startTime-ge),pe=!1}return pe}finally{T=null,S=ae,L=!1}}var me=!1,x=null,I=-1,R=5,P=-1;function b(){return!(n.unstable_now()-P<R)}function M(){if(x!==null){var re=n.unstable_now();P=re;var ge=!0;try{ge=x(!0,re)}finally{ge?C():(me=!1,x=null)}}else me=!1}var C;if(typeof K=="function")C=function(){K(M)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Nt=rt.port2;rt.port1.onmessage=M,C=function(){Nt.postMessage(null)}}else C=function(){O(M,0)};function Ot(re){x=re,me||(me=!0,C())}function ze(re,ge){I=O(function(){re(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){N||L||(N=!0,Ot(fe))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(S){case 1:case 2:case 3:var ge=3;break;default:ge=S}var ae=S;S=ge;try{return re()}finally{S=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,ge){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ae=S;S=re;try{return ge()}finally{S=ae}},n.unstable_scheduleCallback=function(re,ge,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,re){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,re={id:_++,callback:ge,priorityLevel:re,startTime:ae,expirationTime:G,sortIndex:-1},ae>V?(re.sortIndex=ae,e(y,re),t(p)===null&&re===t(y)&&(F?(q(I),I=-1):F=!0,ze(oe,ae-V))):(re.sortIndex=G,e(p,re),N||L||(N=!0,Ot(fe))),re},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(re){var ge=S;return function(){var ae=S;S=ge;try{return re.apply(this,arguments)}finally{S=ae}}}}(xd)),xd}var Fg;function HE(){return Fg||(Fg=1,kd.exports=$E()),kd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function qE(){if(Ug)return en;Ug=1;var n=Of(),e=HE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},T={};function S(r){return p.call(T,r)?!0:p.call(_,r)?!1:y.test(r)?T[r]=!0:(_[r]=!0,!1)}function L(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function N(r,s,a,h){if(s===null||typeof s>"u"||L(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function F(r,s,a,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){O[r]=new F(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];O[s]=new F(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){O[r]=new F(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){O[r]=new F(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){O[r]=new F(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){O[r]=new F(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){O[r]=new F(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){O[r]=new F(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){O[r]=new F(r,5,!1,r.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function K(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(q,K);O[s]=new F(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(q,K);O[s]=new F(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(q,K);O[s]=new F(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){O[r]=new F(r,1,!1,r.toLowerCase(),null,!1,!1)}),O.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){O[r]=new F(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,h){var f=O.hasOwnProperty(s)?O[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(N(s,a,f,h)&&(a=null),h||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var oe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),me=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),b=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),re=Symbol.iterator;function ge(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,V;function G(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var pe=!1;function Ae(r,s){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var h=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){h=z}r.call(s.prototype)}else{try{throw Error()}catch(z){h=z}r()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,A=g.length-1;1<=w&&0<=A&&f[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(f[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||f[w]!==g[A]){var k=`
`+f[w].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=w&&0<=A);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function Ce(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case me:return"Portal";case R:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case rt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case b:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Nt:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case Ot:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}function Ue(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function He(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function _t(r){var s=He(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function pr(r){r._valueTracker||(r._valueTracker=_t(r))}function ws(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=He(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function jr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ki(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Es(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function $o(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function Ho(r,s){$o(r,s);var a=je(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ts(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ts(r,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Tl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ts(r,s,a){(s!=="number"||jr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var mr=Array.isArray;function gr(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function qo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Is(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(mr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:je(a)}}function Ss(r,s){var a=je(s.value),h=je(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function Wo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,Ko=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Br(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ni=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(r){Ni.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),xi[s]=xi[r]})});function Go(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||xi.hasOwnProperty(r)&&xi[r]?(""+s).trim():s+"px"}function Qo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=Go(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var Jo=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yo(r,s){if(s){if(Jo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Xo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Rs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var As=null,mn=null,Kn=null;function Cs(r){if(r=Ta(r)){if(typeof As!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Xl(s),As(r.stateNode,r.type,s))}}function Gn(r){mn?Kn?Kn.push(r):Kn=[r]:mn=r}function Zo(){if(mn){var r=mn,s=Kn;if(Kn=mn=null,Cs(r),s)for(r=0;r<s.length;r++)Cs(s[r])}}function Di(r,s){return r(s)}function ea(){}var vr=!1;function ta(r,s,a){if(vr)return r(s,a);vr=!0;try{return Di(r,s,a)}finally{vr=!1,(mn!==null||Kn!==null)&&(ea(),Zo())}}function it(r,s){var a=r.stateNode;if(a===null)return null;var h=Xl(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ps=!1;if(d)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ps=!1}function Li(r,s,a,h,f,g,w,A,k){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(X){this.onError(X)}}var bi=!1,ks=null,Cn=!1,na=null,eh={onError:function(r){bi=!0,ks=r}};function xs(r,s,a,h,f,g,w,A,k){bi=!1,ks=null,Li.apply(eh,arguments)}function Il(r,s,a,h,f,g,w,A,k){if(xs.apply(this,arguments),bi){if(bi){var z=ks;bi=!1,ks=null}else throw Error(t(198));Cn||(Cn=!0,na=z)}}function Pn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Vi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function kn(r){if(Pn(r)!==r)throw Error(t(188))}function Sl(r){var s=r.alternate;if(!s){if(s=Pn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return kn(f),r;if(g===h)return kn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var w=!1,A=f.child;A;){if(A===a){w=!0,a=f,h=g;break}if(A===h){w=!0,h=f,a=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===a){w=!0,a=g,h=f;break}if(A===h){w=!0,h=g,a=f;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ra(r){return r=Sl(r),r!==null?Ns(r):null}function Ns(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ns(r);if(s!==null)return s;r=r.sibling}return null}var Os=e.unstable_scheduleCallback,ia=e.unstable_cancelCallback,Rl=e.unstable_shouldYield,th=e.unstable_requestPaint,qe=e.unstable_now,Al=e.unstable_getCurrentPriorityLevel,Mi=e.unstable_ImmediatePriority,zr=e.unstable_UserBlockingPriority,gn=e.unstable_NormalPriority,sa=e.unstable_LowPriority,Cl=e.unstable_IdlePriority,Fi=null,on=null;function Pl(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Fi,r,void 0,(r.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:xl,oa=Math.log,kl=Math.LN2;function xl(r){return r>>>=0,r===0?32:31-(oa(r)/kl|0)|0}var Ds=64,Ls=4194304;function $r(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ui(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var A=w&~f;A!==0?h=$r(A):(g&=w,g!==0&&(h=$r(g)))}else w=a&~f,w!==0?h=$r(w):g!==0&&(h=$r(g));if(h===0)return 0;if(s!==0&&s!==h&&!(s&f)&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(h&4&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-zt(s),f=1<<a,h|=r[a],s&=~f;return h}function nh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-zt(g),A=1<<w,k=f[w];k===-1?(!(A&a)||A&h)&&(f[w]=nh(A,s)):k<=s&&(r.expiredLanes|=A),g&=~A}}function an(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ji(){var r=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),r}function Hr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function qr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-zt(s),r[s]=a}function $e(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-zt(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function Wr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-zt(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var xe=0;function Kr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Nl,bs,Ol,Dl,Ll,aa=!1,Qn=[],Rt=null,xn=null,Nn=null,Gr=new Map,yn=new Map,Jn=[],rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Gr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(s.pointerId)}}function Kt(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ta(s),s!==null&&bs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function ih(r,s,a,h,f){switch(s){case"focusin":return Rt=Kt(Rt,r,s,a,h,f),!0;case"dragenter":return xn=Kt(xn,r,s,a,h,f),!0;case"mouseover":return Nn=Kt(Nn,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return Gr.set(g,Kt(Gr.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,yn.set(g,Kt(yn.get(g)||null,r,s,a,h,f)),!0}return!1}function Vl(r){var s=qi(r.target);if(s!==null){var a=Pn(s);if(a!==null){if(s=a.tag,s===13){if(s=Vi(a),s!==null){r.blockedOn=s,Ll(r.priority,function(){Ol(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function wr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Vs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Oi=h,a.target.dispatchEvent(h),Oi=null}else return s=Ta(a),s!==null&&bs(s),r.blockedOn=a,!1;s.shift()}return!0}function Bi(r,s,a){wr(r)&&a.delete(s)}function Ml(){aa=!1,Rt!==null&&wr(Rt)&&(Rt=null),xn!==null&&wr(xn)&&(xn=null),Nn!==null&&wr(Nn)&&(Nn=null),Gr.forEach(Bi),yn.forEach(Bi)}function On(r,s){r.blockedOn===s&&(r.blockedOn=null,aa||(aa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ml)))}function Dn(r){function s(f){return On(f,r)}if(0<Qn.length){On(Qn[0],r);for(var a=1;a<Qn.length;a++){var h=Qn[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Rt!==null&&On(Rt,r),xn!==null&&On(xn,r),Nn!==null&&On(Nn,r),Gr.forEach(s),yn.forEach(s),a=0;a<Jn.length;a++)h=Jn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Vl(a),a.blockedOn===null&&Jn.shift()}var Er=oe.ReactCurrentBatchConfig,Qr=!0;function Qe(r,s,a,h){var f=xe,g=Er.transition;Er.transition=null;try{xe=1,la(r,s,a,h)}finally{xe=f,Er.transition=g}}function sh(r,s,a,h){var f=xe,g=Er.transition;Er.transition=null;try{xe=4,la(r,s,a,h)}finally{xe=f,Er.transition=g}}function la(r,s,a,h){if(Qr){var f=Vs(r,s,a,h);if(f===null)gh(r,s,h,zi,a),bl(r,h);else if(ih(f,r,s,a,h))h.stopPropagation();else if(bl(r,h),s&4&&-1<rh.indexOf(r)){for(;f!==null;){var g=Ta(f);if(g!==null&&Nl(g),g=Vs(r,s,a,h),g===null&&gh(r,s,h,zi,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else gh(r,s,h,null,a)}}var zi=null;function Vs(r,s,a,h){if(zi=null,r=Rs(h),r=qi(r),r!==null)if(s=Pn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Vi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return zi=r,null}function ua(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Al()){case Mi:return 1;case zr:return 4;case gn:case sa:return 16;case Cl:return 536870912;default:return 16}default:return 16}}var ln=null,Ms=null,Gt=null;function ca(){if(Gt)return Gt;var r,s=Ms,a=s.length,h,f="value"in ln?ln.value:ln.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===f[g-h];h++);return Gt=f.slice(r,1<h?1-h:void 0)}function Fs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Yn(){return!0}function ha(){return!1}function At(r){function s(a,h,f,g,w){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Yn:ha,this.isPropagationStopped=ha,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=At(Ln),Xn=ae({},Ln,{view:0,detail:0}),oh=At(Xn),js,Tr,Jr,$i=ae({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Jr&&(Jr&&r.type==="mousemove"?(js=r.screenX-Jr.screenX,Tr=r.screenY-Jr.screenY):Tr=js=0,Jr=r),js)},movementY:function(r){return"movementY"in r?r.movementY:Tr}}),Bs=At($i),da=ae({},$i,{dataTransfer:0}),Fl=At(da),zs=ae({},Xn,{relatedTarget:0}),$s=At(zs),Ul=ae({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=At(Ul),jl=ae({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Bl=At(jl),zl=ae({},Ln,{data:0}),fa=At(zl),Hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$l={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=$l[r])?!!s[r]:!1}function Zn(){return Hl}var u=ae({},Xn,{key:function(r){if(r.key){var s=Hs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Fs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$t[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(r){return r.type==="keypress"?Fs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Fs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),v=ae({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=At(v),U=ae({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),$=At(U),ne=ae({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=At(ne),pt=ae({},$i,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(pt),wt=[9,13,27,32],lt=d&&"CompositionEvent"in window,vn=null;d&&"documentMode"in document&&(vn=document.documentMode);var un=d&&"TextEvent"in window&&!vn,Hi=d&&(!lt||vn&&8<vn&&11>=vn),qs=" ",Cp=!1;function Pp(r,s){switch(r){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ws=!1;function Mw(r,s){switch(r){case"compositionend":return kp(s);case"keypress":return s.which!==32?null:(Cp=!0,qs);case"textInput":return r=s.data,r===qs&&Cp?null:r;default:return null}}function Fw(r,s){if(Ws)return r==="compositionend"||!lt&&Pp(r,s)?(r=ca(),Gt=Ms=ln=null,Ws=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Hi&&s.locale!=="ko"?null:s.data;default:return null}}var Uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Uw[r.type]:s==="textarea"}function Np(r,s,a,h){Gn(h),s=Ql(s,"onChange"),0<s.length&&(a=new Us("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var pa=null,ma=null;function jw(r){Qp(r,0)}function ql(r){var s=Ys(r);if(ws(s))return r}function Bw(r,s){if(r==="change")return s}var Op=!1;if(d){var ah;if(d){var lh="oninput"in document;if(!lh){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),lh=typeof Dp.oninput=="function"}ah=lh}else ah=!1;Op=ah&&(!document.documentMode||9<document.documentMode)}function Lp(){pa&&(pa.detachEvent("onpropertychange",bp),ma=pa=null)}function bp(r){if(r.propertyName==="value"&&ql(ma)){var s=[];Np(s,ma,r,Rs(r)),ta(jw,s)}}function zw(r,s,a){r==="focusin"?(Lp(),pa=s,ma=a,pa.attachEvent("onpropertychange",bp)):r==="focusout"&&Lp()}function $w(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ql(ma)}function Hw(r,s){if(r==="click")return ql(s)}function qw(r,s){if(r==="input"||r==="change")return ql(s)}function Ww(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var bn=typeof Object.is=="function"?Object.is:Ww;function ga(r,s){if(bn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!bn(r[f],s[f]))return!1}return!0}function Vp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Mp(r,s){var a=Vp(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vp(a)}}function Fp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Fp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Up(){for(var r=window,s=jr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=jr(r.document)}return s}function uh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Kw(r){var s=Up(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Fp(a.ownerDocument.documentElement,a)){if(h!==null&&uh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=Mp(a,g);var w=Mp(a,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Gw=d&&"documentMode"in document&&11>=document.documentMode,Ks=null,ch=null,ya=null,hh=!1;function jp(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hh||Ks==null||Ks!==jr(h)||(h=Ks,"selectionStart"in h&&uh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),ya&&ga(ya,h)||(ya=h,h=Ql(ch,"onSelect"),0<h.length&&(s=new Us("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=Ks)))}function Wl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Gs={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},dh={},Bp={};d&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function Kl(r){if(dh[r])return dh[r];if(!Gs[r])return r;var s=Gs[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Bp)return dh[r]=s[a];return r}var zp=Kl("animationend"),$p=Kl("animationiteration"),Hp=Kl("animationstart"),qp=Kl("transitionend"),Wp=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(r,s){Wp.set(r,s),l(s,[r])}for(var fh=0;fh<Kp.length;fh++){var ph=Kp[fh],Qw=ph.toLowerCase(),Jw=ph[0].toUpperCase()+ph.slice(1);Yr(Qw,"on"+Jw)}Yr(zp,"onAnimationEnd"),Yr($p,"onAnimationIteration"),Yr(Hp,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(qp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function Gp(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Il(h,s,void 0,r),r.currentTarget=null}function Qp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var A=h[w],k=A.instance,z=A.currentTarget;if(A=A.listener,k!==g&&f.isPropagationStopped())break e;Gp(f,A,z),g=k}else for(w=0;w<h.length;w++){if(A=h[w],k=A.instance,z=A.currentTarget,A=A.listener,k!==g&&f.isPropagationStopped())break e;Gp(f,A,z),g=k}}}if(Cn)throw r=na,Cn=!1,na=null,r}function Ke(r,s){var a=s[Th];a===void 0&&(a=s[Th]=new Set);var h=r+"__bubble";a.has(h)||(Jp(s,r,2,!1),a.add(h))}function mh(r,s,a){var h=0;s&&(h|=4),Jp(a,r,h,s)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function _a(r){if(!r[Gl]){r[Gl]=!0,i.forEach(function(a){a!=="selectionchange"&&(Yw.has(a)||mh(a,!1,r),mh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Gl]||(s[Gl]=!0,mh("selectionchange",!1,s))}}function Jp(r,s,a,h){switch(ua(s)){case 1:var f=Qe;break;case 4:f=sh;break;default:f=la}a=f.bind(null,s,a,r),f=void 0,!Ps||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function gh(r,s,a,h,f){var g=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var A=h.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;w=w.return}for(;A!==null;){if(w=qi(A),w===null)return;if(k=w.tag,k===5||k===6){h=g=w;continue e}A=A.parentNode}}h=h.return}ta(function(){var z=g,X=Rs(a),Z=[];e:{var Y=Wp.get(r);if(Y!==void 0){var se=Us,ce=r;switch(r){case"keypress":if(Fs(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=$s;break;case"focusout":ce="blur",se=$s;break;case"beforeblur":case"afterblur":se=$s;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case zp:case $p:case Hp:se=Ir;break;case qp:se=Be;break;case"scroll":se=oh;break;case"wheel":se=Oe;break;case"copy":case"cut":case"paste":se=Bl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=E}var he=(s&4)!==0,st=!he&&r==="scroll",j=he?Y!==null?Y+"Capture":null:Y;he=[];for(var D=z,B;D!==null;){B=D;var te=B.stateNode;if(B.tag===5&&te!==null&&(B=te,j!==null&&(te=it(D,j),te!=null&&he.push(wa(D,te,B)))),st)break;D=D.return}0<he.length&&(Y=new se(Y,ce,null,a,X),Z.push({event:Y,listeners:he}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Y&&a!==Oi&&(ce=a.relatedTarget||a.fromElement)&&(qi(ce)||ce[Sr]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(ce=a.relatedTarget||a.toElement,se=z,ce=ce?qi(ce):null,ce!==null&&(st=Pn(ce),ce!==st||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=z),se!==ce)){if(he=Bs,te="onMouseLeave",j="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(he=E,te="onPointerLeave",j="onPointerEnter",D="pointer"),st=se==null?Y:Ys(se),B=ce==null?Y:Ys(ce),Y=new he(te,D+"leave",se,a,X),Y.target=st,Y.relatedTarget=B,te=null,qi(X)===z&&(he=new he(j,D+"enter",ce,a,X),he.target=B,he.relatedTarget=st,te=he),st=te,se&&ce)t:{for(he=se,j=ce,D=0,B=he;B;B=Qs(B))D++;for(B=0,te=j;te;te=Qs(te))B++;for(;0<D-B;)he=Qs(he),D--;for(;0<B-D;)j=Qs(j),B--;for(;D--;){if(he===j||j!==null&&he===j.alternate)break t;he=Qs(he),j=Qs(j)}he=null}else he=null;se!==null&&Yp(Z,Y,se,he,!1),ce!==null&&st!==null&&Yp(Z,st,ce,he,!0)}}e:{if(Y=z?Ys(z):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var de=Bw;else if(xp(Y))if(Op)de=qw;else{de=$w;var ye=zw}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(de=Hw);if(de&&(de=de(r,z))){Np(Z,de,a,X);break e}ye&&ye(r,Y,z),r==="focusout"&&(ye=Y._wrapperState)&&ye.controlled&&Y.type==="number"&&Ts(Y,"number",Y.value)}switch(ye=z?Ys(z):window,r){case"focusin":(xp(ye)||ye.contentEditable==="true")&&(Ks=ye,ch=z,ya=null);break;case"focusout":ya=ch=Ks=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,jp(Z,a,X);break;case"selectionchange":if(Gw)break;case"keydown":case"keyup":jp(Z,a,X)}var ve;if(lt)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ws?Pp(r,a)&&(Te="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Hi&&a.locale!=="ko"&&(Ws||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ws&&(ve=ca()):(ln=X,Ms="value"in ln?ln.value:ln.textContent,Ws=!0)),ye=Ql(z,Te),0<ye.length&&(Te=new fa(Te,r,null,a,X),Z.push({event:Te,listeners:ye}),ve?Te.data=ve:(ve=kp(a),ve!==null&&(Te.data=ve)))),(ve=un?Mw(r,a):Fw(r,a))&&(z=Ql(z,"onBeforeInput"),0<z.length&&(X=new fa("onBeforeInput","beforeinput",null,a,X),Z.push({event:X,listeners:z}),X.data=ve))}Qp(Z,s)})}function wa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Ql(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=it(r,a),g!=null&&h.unshift(wa(r,g,f)),g=it(r,s),g!=null&&h.push(wa(r,g,f))),r=r.return}return h}function Qs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Yp(r,s,a,h,f){for(var g=s._reactName,w=[];a!==null&&a!==h;){var A=a,k=A.alternate,z=A.stateNode;if(k!==null&&k===h)break;A.tag===5&&z!==null&&(A=z,f?(k=it(a,g),k!=null&&w.unshift(wa(a,k,A))):f||(k=it(a,g),k!=null&&w.push(wa(a,k,A)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var Xw=/\r\n?/g,Zw=/\u0000|\uFFFD/g;function Xp(r){return(typeof r=="string"?r:""+r).replace(Xw,`
`).replace(Zw,"")}function Jl(r,s,a){if(s=Xp(s),Xp(r)!==s&&a)throw Error(t(425))}function Yl(){}var yh=null,vh=null;function _h(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,eE=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,tE=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(r){return Zp.resolve(null).then(r).catch(nE)}:wh;function nE(r){setTimeout(function(){throw r})}function Eh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),Dn(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);Dn(s)}function Xr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function em(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Js=Math.random().toString(36).slice(2),er="__reactFiber$"+Js,Ea="__reactProps$"+Js,Sr="__reactContainer$"+Js,Th="__reactEvents$"+Js,rE="__reactListeners$"+Js,iE="__reactHandles$"+Js;function qi(r){var s=r[er];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Sr]||a[er]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=em(r);r!==null;){if(a=r[er])return a;r=em(r)}return s}r=a,a=r.parentNode}return null}function Ta(r){return r=r[er]||r[Sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Ys(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Xl(r){return r[Ea]||null}var Ih=[],Xs=-1;function Zr(r){return{current:r}}function Ge(r){0>Xs||(r.current=Ih[Xs],Ih[Xs]=null,Xs--)}function We(r,s){Xs++,Ih[Xs]=r.current,r.current=s}var ei={},Dt=Zr(ei),Qt=Zr(!1),Wi=ei;function Zs(r,s){var a=r.type.contextTypes;if(!a)return ei;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Jt(r){return r=r.childContextTypes,r!=null}function Zl(){Ge(Qt),Ge(Dt)}function tm(r,s,a){if(Dt.current!==ei)throw Error(t(168));We(Dt,s),We(Qt,a)}function nm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Ue(r)||"Unknown",f));return ae({},a,h)}function eu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ei,Wi=Dt.current,We(Dt,r),We(Qt,Qt.current),!0}function rm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=nm(r,s,Wi),h.__reactInternalMemoizedMergedChildContext=r,Ge(Qt),Ge(Dt),We(Dt,r)):Ge(Qt),We(Qt,a)}var Rr=null,tu=!1,Sh=!1;function im(r){Rr===null?Rr=[r]:Rr.push(r)}function sE(r){tu=!0,im(r)}function ti(){if(!Sh&&Rr!==null){Sh=!0;var r=0,s=xe;try{var a=Rr;for(xe=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Rr=null,tu=!1}catch(f){throw Rr!==null&&(Rr=Rr.slice(r+1)),Os(Mi,ti),f}finally{xe=s,Sh=!1}}return null}var eo=[],to=0,nu=null,ru=0,_n=[],wn=0,Ki=null,Ar=1,Cr="";function Gi(r,s){eo[to++]=ru,eo[to++]=nu,nu=r,ru=s}function sm(r,s,a){_n[wn++]=Ar,_n[wn++]=Cr,_n[wn++]=Ki,Ki=r;var h=Ar;r=Cr;var f=32-zt(h)-1;h&=~(1<<f),a+=1;var g=32-zt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Ar=1<<32-zt(s)+f|a<<f|h,Cr=g+r}else Ar=1<<g|a<<f|h,Cr=r}function Rh(r){r.return!==null&&(Gi(r,1),sm(r,1,0))}function Ah(r){for(;r===nu;)nu=eo[--to],eo[to]=null,ru=eo[--to],eo[to]=null;for(;r===Ki;)Ki=_n[--wn],_n[wn]=null,Cr=_n[--wn],_n[wn]=null,Ar=_n[--wn],_n[wn]=null}var cn=null,hn=null,Je=!1,Vn=null;function om(r,s){var a=Sn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function am(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,cn=r,hn=Xr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,cn=r,hn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Ki!==null?{id:Ar,overflow:Cr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Sn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,cn=r,hn=null,!0):!1;default:return!1}}function Ch(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ph(r){if(Je){var s=hn;if(s){var a=s;if(!am(r,s)){if(Ch(r))throw Error(t(418));s=Xr(a.nextSibling);var h=cn;s&&am(r,s)?om(h,a):(r.flags=r.flags&-4097|2,Je=!1,cn=r)}}else{if(Ch(r))throw Error(t(418));r.flags=r.flags&-4097|2,Je=!1,cn=r}}}function lm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;cn=r}function iu(r){if(r!==cn)return!1;if(!Je)return lm(r),Je=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!_h(r.type,r.memoizedProps)),s&&(s=hn)){if(Ch(r))throw um(),Error(t(418));for(;s;)om(r,s),s=Xr(s.nextSibling)}if(lm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){hn=Xr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}hn=null}}else hn=cn?Xr(r.stateNode.nextSibling):null;return!0}function um(){for(var r=hn;r;)r=Xr(r.nextSibling)}function no(){hn=cn=null,Je=!1}function kh(r){Vn===null?Vn=[r]:Vn.push(r)}var oE=oe.ReactCurrentBatchConfig;function Ia(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=f.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function su(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function cm(r){var s=r._init;return s(r._payload)}function hm(r){function s(j,D){if(r){var B=j.deletions;B===null?(j.deletions=[D],j.flags|=16):B.push(D)}}function a(j,D){if(!r)return null;for(;D!==null;)s(j,D),D=D.sibling;return null}function h(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function f(j,D){return j=ui(j,D),j.index=0,j.sibling=null,j}function g(j,D,B){return j.index=B,r?(B=j.alternate,B!==null?(B=B.index,B<D?(j.flags|=2,D):B):(j.flags|=2,D)):(j.flags|=1048576,D)}function w(j){return r&&j.alternate===null&&(j.flags|=2),j}function A(j,D,B,te){return D===null||D.tag!==6?(D=wd(B,j.mode,te),D.return=j,D):(D=f(D,B),D.return=j,D)}function k(j,D,B,te){var de=B.type;return de===x?X(j,D,B.props.children,te,B.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Ot&&cm(de)===D.type)?(te=f(D,B.props),te.ref=Ia(j,D,B),te.return=j,te):(te=ku(B.type,B.key,B.props,null,j.mode,te),te.ref=Ia(j,D,B),te.return=j,te)}function z(j,D,B,te){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=Ed(B,j.mode,te),D.return=j,D):(D=f(D,B.children||[]),D.return=j,D)}function X(j,D,B,te,de){return D===null||D.tag!==7?(D=ns(B,j.mode,te,de),D.return=j,D):(D=f(D,B),D.return=j,D)}function Z(j,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return D=wd(""+D,j.mode,B),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case fe:return B=ku(D.type,D.key,D.props,null,j.mode,B),B.ref=Ia(j,null,D),B.return=j,B;case me:return D=Ed(D,j.mode,B),D.return=j,D;case Ot:var te=D._init;return Z(j,te(D._payload),B)}if(mr(D)||ge(D))return D=ns(D,j.mode,B,null),D.return=j,D;su(j,D)}return null}function Y(j,D,B,te){var de=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return de!==null?null:A(j,D,""+B,te);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case fe:return B.key===de?k(j,D,B,te):null;case me:return B.key===de?z(j,D,B,te):null;case Ot:return de=B._init,Y(j,D,de(B._payload),te)}if(mr(B)||ge(B))return de!==null?null:X(j,D,B,te,null);su(j,B)}return null}function se(j,D,B,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return j=j.get(B)||null,A(D,j,""+te,de);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case fe:return j=j.get(te.key===null?B:te.key)||null,k(D,j,te,de);case me:return j=j.get(te.key===null?B:te.key)||null,z(D,j,te,de);case Ot:var ye=te._init;return se(j,D,B,ye(te._payload),de)}if(mr(te)||ge(te))return j=j.get(B)||null,X(D,j,te,de,null);su(D,te)}return null}function ce(j,D,B,te){for(var de=null,ye=null,ve=D,Te=D=0,It=null;ve!==null&&Te<B.length;Te++){ve.index>Te?(It=ve,ve=null):It=ve.sibling;var Fe=Y(j,ve,B[Te],te);if(Fe===null){ve===null&&(ve=It);break}r&&ve&&Fe.alternate===null&&s(j,ve),D=g(Fe,D,Te),ye===null?de=Fe:ye.sibling=Fe,ye=Fe,ve=It}if(Te===B.length)return a(j,ve),Je&&Gi(j,Te),de;if(ve===null){for(;Te<B.length;Te++)ve=Z(j,B[Te],te),ve!==null&&(D=g(ve,D,Te),ye===null?de=ve:ye.sibling=ve,ye=ve);return Je&&Gi(j,Te),de}for(ve=h(j,ve);Te<B.length;Te++)It=se(ve,j,Te,B[Te],te),It!==null&&(r&&It.alternate!==null&&ve.delete(It.key===null?Te:It.key),D=g(It,D,Te),ye===null?de=It:ye.sibling=It,ye=It);return r&&ve.forEach(function(ci){return s(j,ci)}),Je&&Gi(j,Te),de}function he(j,D,B,te){var de=ge(B);if(typeof de!="function")throw Error(t(150));if(B=de.call(B),B==null)throw Error(t(151));for(var ye=de=null,ve=D,Te=D=0,It=null,Fe=B.next();ve!==null&&!Fe.done;Te++,Fe=B.next()){ve.index>Te?(It=ve,ve=null):It=ve.sibling;var ci=Y(j,ve,Fe.value,te);if(ci===null){ve===null&&(ve=It);break}r&&ve&&ci.alternate===null&&s(j,ve),D=g(ci,D,Te),ye===null?de=ci:ye.sibling=ci,ye=ci,ve=It}if(Fe.done)return a(j,ve),Je&&Gi(j,Te),de;if(ve===null){for(;!Fe.done;Te++,Fe=B.next())Fe=Z(j,Fe.value,te),Fe!==null&&(D=g(Fe,D,Te),ye===null?de=Fe:ye.sibling=Fe,ye=Fe);return Je&&Gi(j,Te),de}for(ve=h(j,ve);!Fe.done;Te++,Fe=B.next())Fe=se(ve,j,Te,Fe.value,te),Fe!==null&&(r&&Fe.alternate!==null&&ve.delete(Fe.key===null?Te:Fe.key),D=g(Fe,D,Te),ye===null?de=Fe:ye.sibling=Fe,ye=Fe);return r&&ve.forEach(function(UE){return s(j,UE)}),Je&&Gi(j,Te),de}function st(j,D,B,te){if(typeof B=="object"&&B!==null&&B.type===x&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case fe:e:{for(var de=B.key,ye=D;ye!==null;){if(ye.key===de){if(de=B.type,de===x){if(ye.tag===7){a(j,ye.sibling),D=f(ye,B.props.children),D.return=j,j=D;break e}}else if(ye.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Ot&&cm(de)===ye.type){a(j,ye.sibling),D=f(ye,B.props),D.ref=Ia(j,ye,B),D.return=j,j=D;break e}a(j,ye);break}else s(j,ye);ye=ye.sibling}B.type===x?(D=ns(B.props.children,j.mode,te,B.key),D.return=j,j=D):(te=ku(B.type,B.key,B.props,null,j.mode,te),te.ref=Ia(j,D,B),te.return=j,j=te)}return w(j);case me:e:{for(ye=B.key;D!==null;){if(D.key===ye)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){a(j,D.sibling),D=f(D,B.children||[]),D.return=j,j=D;break e}else{a(j,D);break}else s(j,D);D=D.sibling}D=Ed(B,j.mode,te),D.return=j,j=D}return w(j);case Ot:return ye=B._init,st(j,D,ye(B._payload),te)}if(mr(B))return ce(j,D,B,te);if(ge(B))return he(j,D,B,te);su(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,D!==null&&D.tag===6?(a(j,D.sibling),D=f(D,B),D.return=j,j=D):(a(j,D),D=wd(B,j.mode,te),D.return=j,j=D),w(j)):a(j,D)}return st}var ro=hm(!0),dm=hm(!1),ou=Zr(null),au=null,io=null,xh=null;function Nh(){xh=io=au=null}function Oh(r){var s=ou.current;Ge(ou),r._currentValue=s}function Dh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function so(r,s){au=r,xh=io=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Yt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(xh!==r)if(r={context:r,memoizedValue:s,next:null},io===null){if(au===null)throw Error(t(308));io=r,au.dependencies={lanes:0,firstContext:r}}else io=io.next=r;return s}var Qi=null;function Lh(r){Qi===null?Qi=[r]:Qi.push(r)}function fm(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,Lh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Pr(r,h)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ni=!1;function bh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function kr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ri(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,Ve&2){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Pr(r,a)}return f=h.interleaved,f===null?(s.next=s,Lh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Pr(r,a)}function lu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Wr(r,a)}}function mm(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function uu(r,s,a,h){var f=r.updateQueue;ni=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var k=A,z=k.next;k.next=null,w===null?g=z:w.next=z,w=k;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==w&&(A===null?X.firstBaseUpdate=z:A.next=z,X.lastBaseUpdate=k))}if(g!==null){var Z=f.baseState;w=0,X=z=k=null,A=g;do{var Y=A.lane,se=A.eventTime;if((h&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ce=r,he=A;switch(Y=s,se=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){Z=ce.call(se,Z,Y);break e}Z=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Y=typeof ce=="function"?ce.call(se,Z,Y):ce,Y==null)break e;Z=ae({},Z,Y);break e;case 2:ni=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[A]:Y.push(A))}else se={eventTime:se,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(z=X=se,k=Z):X=X.next=se,w|=Y;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(X===null&&(k=Z),f.baseState=k,f.firstBaseUpdate=z,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);Xi|=w,r.lanes=w,r.memoizedState=Z}}function gm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Sa={},tr=Zr(Sa),Ra=Zr(Sa),Aa=Zr(Sa);function Ji(r){if(r===Sa)throw Error(t(174));return r}function Vh(r,s){switch(We(Aa,s),We(Ra,r),We(tr,Sa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ft(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ft(s,r)}Ge(tr),We(tr,s)}function oo(){Ge(tr),Ge(Ra),Ge(Aa)}function ym(r){Ji(Aa.current);var s=Ji(tr.current),a=ft(s,r.type);s!==a&&(We(Ra,r),We(tr,a))}function Mh(r){Ra.current===r&&(Ge(tr),Ge(Ra))}var Xe=Zr(0);function cu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Fh=[];function Uh(){for(var r=0;r<Fh.length;r++)Fh[r]._workInProgressVersionPrimary=null;Fh.length=0}var hu=oe.ReactCurrentDispatcher,jh=oe.ReactCurrentBatchConfig,Yi=0,Ze=null,mt=null,Et=null,du=!1,Ca=!1,Pa=0,aE=0;function Lt(){throw Error(t(321))}function Bh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!bn(r[a],s[a]))return!1;return!0}function zh(r,s,a,h,f,g){if(Yi=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,hu.current=r===null||r.memoizedState===null?hE:dE,r=a(h,f),Ca){g=0;do{if(Ca=!1,Pa=0,25<=g)throw Error(t(301));g+=1,Et=mt=null,s.updateQueue=null,hu.current=fE,r=a(h,f)}while(Ca)}if(hu.current=mu,s=mt!==null&&mt.next!==null,Yi=0,Et=mt=Ze=null,du=!1,s)throw Error(t(300));return r}function $h(){var r=Pa!==0;return Pa=0,r}function nr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=r:Et=Et.next=r,Et}function Tn(){if(mt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=mt.next;var s=Et===null?Ze.memoizedState:Et.next;if(s!==null)Et=s,mt=r;else{if(r===null)throw Error(t(310));mt=r,r={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?Ze.memoizedState=Et=r:Et=Et.next=r}return Et}function ka(r,s){return typeof s=="function"?s(r):s}function Hh(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=mt,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var A=w=null,k=null,z=g;do{var X=z.lane;if((Yi&X)===X)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:r(h,z.action);else{var Z={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(A=k=Z,w=h):k=k.next=Z,Ze.lanes|=X,Xi|=X}z=z.next}while(z!==null&&z!==g);k===null?w=h:k.next=A,bn(h,s.memoizedState)||(Yt=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=k,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Ze.lanes|=g,Xi|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function qh(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);bn(g,s.memoizedState)||(Yt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function vm(){}function _m(r,s){var a=Ze,h=Tn(),f=s(),g=!bn(h.memoizedState,f);if(g&&(h.memoizedState=f,Yt=!0),h=h.queue,Wh(Tm.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,xa(9,Em.bind(null,a,h,f,s),void 0,null),Tt===null)throw Error(t(349));Yi&30||wm(a,s,f)}return f}function wm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Em(r,s,a,h){s.value=a,s.getSnapshot=h,Im(s)&&Sm(r)}function Tm(r,s,a){return a(function(){Im(s)&&Sm(r)})}function Im(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!bn(r,a)}catch{return!0}}function Sm(r){var s=Pr(r,1);s!==null&&jn(s,r,1,-1)}function Rm(r){var s=nr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:r},s.queue=r,r=r.dispatch=cE.bind(null,Ze,r),[s.memoizedState,r]}function xa(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Am(){return Tn().memoizedState}function fu(r,s,a,h){var f=nr();Ze.flags|=r,f.memoizedState=xa(1|s,a,void 0,h===void 0?null:h)}function pu(r,s,a,h){var f=Tn();h=h===void 0?null:h;var g=void 0;if(mt!==null){var w=mt.memoizedState;if(g=w.destroy,h!==null&&Bh(h,w.deps)){f.memoizedState=xa(s,a,g,h);return}}Ze.flags|=r,f.memoizedState=xa(1|s,a,g,h)}function Cm(r,s){return fu(8390656,8,r,s)}function Wh(r,s){return pu(2048,8,r,s)}function Pm(r,s){return pu(4,2,r,s)}function km(r,s){return pu(4,4,r,s)}function xm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Nm(r,s,a){return a=a!=null?a.concat([r]):null,pu(4,4,xm.bind(null,s,r),a)}function Kh(){}function Om(r,s){var a=Tn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Bh(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Dm(r,s){var a=Tn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Bh(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Lm(r,s,a){return Yi&21?(bn(a,s)||(a=ji(),Ze.lanes|=a,Xi|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Yt=!0),r.memoizedState=a)}function lE(r,s){var a=xe;xe=a!==0&&4>a?a:4,r(!0);var h=jh.transition;jh.transition={};try{r(!1),s()}finally{xe=a,jh.transition=h}}function bm(){return Tn().memoizedState}function uE(r,s,a){var h=ai(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Vm(r))Mm(s,a);else if(a=fm(r,s,a,h),a!==null){var f=qt();jn(a,r,h,f),Fm(a,s,h)}}function cE(r,s,a){var h=ai(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vm(r))Mm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,a);if(f.hasEagerState=!0,f.eagerState=A,bn(A,w)){var k=s.interleaved;k===null?(f.next=f,Lh(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}a=fm(r,s,f,h),a!==null&&(f=qt(),jn(a,r,h,f),Fm(a,s,h))}}function Vm(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Mm(r,s){Ca=du=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Fm(r,s,a){if(a&4194240){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Wr(r,a)}}var mu={readContext:En,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},hE={readContext:En,useCallback:function(r,s){return nr().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:Cm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,fu(4194308,4,xm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return fu(4194308,4,r,s)},useInsertionEffect:function(r,s){return fu(4,2,r,s)},useMemo:function(r,s){var a=nr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=nr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=uE.bind(null,Ze,r),[h.memoizedState,r]},useRef:function(r){var s=nr();return r={current:r},s.memoizedState=r},useState:Rm,useDebugValue:Kh,useDeferredValue:function(r){return nr().memoizedState=r},useTransition:function(){var r=Rm(!1),s=r[0];return r=lE.bind(null,r[1]),nr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=Ze,f=nr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));Yi&30||wm(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Cm(Tm.bind(null,h,g,r),[r]),h.flags|=2048,xa(9,Em.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=nr(),s=Tt.identifierPrefix;if(Je){var a=Cr,h=Ar;a=(h&~(1<<32-zt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Pa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=aE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},dE={readContext:En,useCallback:Om,useContext:En,useEffect:Wh,useImperativeHandle:Nm,useInsertionEffect:Pm,useLayoutEffect:km,useMemo:Dm,useReducer:Hh,useRef:Am,useState:function(){return Hh(ka)},useDebugValue:Kh,useDeferredValue:function(r){var s=Tn();return Lm(s,mt.memoizedState,r)},useTransition:function(){var r=Hh(ka)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:vm,useSyncExternalStore:_m,useId:bm,unstable_isNewReconciler:!1},fE={readContext:En,useCallback:Om,useContext:En,useEffect:Wh,useImperativeHandle:Nm,useInsertionEffect:Pm,useLayoutEffect:km,useMemo:Dm,useReducer:qh,useRef:Am,useState:function(){return qh(ka)},useDebugValue:Kh,useDeferredValue:function(r){var s=Tn();return mt===null?s.memoizedState=r:Lm(s,mt.memoizedState,r)},useTransition:function(){var r=qh(ka)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:vm,useSyncExternalStore:_m,useId:bm,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Gh(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var gu={isMounted:function(r){return(r=r._reactInternals)?Pn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=qt(),f=ai(r),g=kr(h,f);g.payload=s,a!=null&&(g.callback=a),s=ri(r,g,f),s!==null&&(jn(s,r,f,h),lu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=qt(),f=ai(r),g=kr(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ri(r,g,f),s!==null&&(jn(s,r,f,h),lu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=qt(),h=ai(r),f=kr(a,h);f.tag=2,s!=null&&(f.callback=s),s=ri(r,f,h),s!==null&&(jn(s,r,h,a),lu(s,r,h))}};function Um(r,s,a,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!ga(a,h)||!ga(f,g):!0}function jm(r,s,a){var h=!1,f=ei,g=s.contextType;return typeof g=="object"&&g!==null?g=En(g):(f=Jt(s)?Wi:Dt.current,h=s.contextTypes,g=(h=h!=null)?Zs(r,f):ei),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=gu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Bm(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&gu.enqueueReplaceState(s,s.state,null)}function Qh(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},bh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=En(g):(g=Jt(s)?Wi:Dt.current,f.context=Zs(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Gh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&gu.enqueueReplaceState(f,f.state,null),uu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function ao(r,s){try{var a="",h=s;do a+=Ce(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Jh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Yh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var pE=typeof WeakMap=="function"?WeakMap:Map;function zm(r,s,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Iu||(Iu=!0,dd=h),Yh(r,s)},a}function $m(r,s,a){a=kr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){Yh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Yh(r,s),typeof h!="function"&&(si===null?si=new Set([this]):si.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function Hm(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new pE;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=PE.bind(null,r,s,a),s.then(r,r))}function qm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Wm(r,s,a,h,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=kr(-1,1),s.tag=2,ri(a,s,1))),a.lanes|=1),r)}var mE=oe.ReactCurrentOwner,Yt=!1;function Ht(r,s,a,h){s.child=r===null?dm(s,null,a,h):ro(s,r.child,a,h)}function Km(r,s,a,h,f){a=a.render;var g=s.ref;return so(s,f),h=zh(r,s,a,h,g,f),a=$h(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,xr(r,s,f)):(Je&&a&&Rh(s),s.flags|=1,Ht(r,s,h,f),s.child)}function Gm(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!_d(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Qm(r,s,g,h,f)):(r=ku(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(w,h)&&r.ref===s.ref)return xr(r,s,f)}return s.flags|=1,r=ui(g,h),r.ref=s.ref,r.return=s,s.child=r}function Qm(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(ga(g,h)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=h=g,(r.lanes&f)!==0)r.flags&131072&&(Yt=!0);else return s.lanes=r.lanes,xr(r,s,f)}return Xh(r,s,a,h,f)}function Jm(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(uo,dn),dn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(uo,dn),dn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,We(uo,dn),dn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,We(uo,dn),dn|=h;return Ht(r,s,f,a),s.child}function Ym(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Xh(r,s,a,h,f){var g=Jt(a)?Wi:Dt.current;return g=Zs(s,g),so(s,f),a=zh(r,s,a,h,g,f),h=$h(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,xr(r,s,f)):(Je&&h&&Rh(s),s.flags|=1,Ht(r,s,a,f),s.child)}function Xm(r,s,a,h,f){if(Jt(a)){var g=!0;eu(s)}else g=!1;if(so(s,f),s.stateNode===null)vu(r,s),jm(s,a,h),Qh(s,a,h,f),h=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var k=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=En(z):(z=Jt(a)?Wi:Dt.current,z=Zs(s,z));var X=a.getDerivedStateFromProps,Z=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==h||k!==z)&&Bm(s,w,h,z),ni=!1;var Y=s.memoizedState;w.state=Y,uu(s,h,w,f),k=s.memoizedState,A!==h||Y!==k||Qt.current||ni?(typeof X=="function"&&(Gh(s,a,X,h),k=s.memoizedState),(A=ni||Um(s,a,A,h,Y,k,z))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),w.props=h,w.state=k,w.context=z,h=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,pm(r,s),A=s.memoizedProps,z=s.type===s.elementType?A:Mn(s.type,A),w.props=z,Z=s.pendingProps,Y=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=En(k):(k=Jt(a)?Wi:Dt.current,k=Zs(s,k));var se=a.getDerivedStateFromProps;(X=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==Z||Y!==k)&&Bm(s,w,h,k),ni=!1,Y=s.memoizedState,w.state=Y,uu(s,h,w,f);var ce=s.memoizedState;A!==Z||Y!==ce||Qt.current||ni?(typeof se=="function"&&(Gh(s,a,se,h),ce=s.memoizedState),(z=ni||Um(s,a,z,h,Y,ce,k)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ce,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ce,k)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),w.props=h,w.state=ce,w.context=k,h=z):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),h=!1)}return Zh(r,s,a,h,g,f)}function Zh(r,s,a,h,f,g){Ym(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&rm(s,a,!1),xr(r,s,g);h=s.stateNode,mE.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=ro(s,r.child,null,g),s.child=ro(s,null,A,g)):Ht(r,s,A,g),s.memoizedState=h.state,f&&rm(s,a,!0),s.child}function Zm(r){var s=r.stateNode;s.pendingContext?tm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&tm(r,s.context,!1),Vh(r,s.containerInfo)}function eg(r,s,a,h,f){return no(),kh(f),s.flags|=256,Ht(r,s,a,h),s.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(r){return{baseLanes:r,cachePool:null,transitions:null}}function tg(r,s,a){var h=s.pendingProps,f=Xe.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),We(Xe,f&1),r===null)return Ph(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},!(h&1)&&g!==null?(g.childLanes=0,g.pendingProps=w):g=xu(w,h,0,null),r=ns(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=td(a),s.memoizedState=ed,r):nd(s,w));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return gE(r,s,w,h,A,f,a);if(g){g=h.fallback,w=s.mode,f=r.child,A=f.sibling;var k={mode:"hidden",children:h.children};return!(w&1)&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=ui(f,k),h.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=ui(A,g):(g=ns(g,w,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?td(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=ed,h}return g=r.child,r=g.sibling,h=ui(g,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function nd(r,s){return s=xu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function yu(r,s,a,h){return h!==null&&kh(h),ro(s,r.child,null,a),r=nd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function gE(r,s,a,h,f,g,w){if(a)return s.flags&256?(s.flags&=-257,h=Jh(Error(t(422))),yu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=xu({mode:"visible",children:h.children},f,0,null),g=ns(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,s.mode&1&&ro(s,r.child,null,w),s.child.memoizedState=td(w),s.memoizedState=ed,g);if(!(s.mode&1))return yu(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=Jh(g,h,void 0),yu(r,s,w,h)}if(A=(w&r.childLanes)!==0,Yt||A){if(h=Tt,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(h.suspendedLanes|w)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Pr(r,f),jn(h,r,f,-1))}return vd(),h=Jh(Error(t(421))),yu(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=kE.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,hn=Xr(f.nextSibling),cn=s,Je=!0,Vn=null,r!==null&&(_n[wn++]=Ar,_n[wn++]=Cr,_n[wn++]=Ki,Ar=r.id,Cr=r.overflow,Ki=s),s=nd(s,h.children),s.flags|=4096,s)}function ng(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Dh(r.return,s,a)}function rd(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function rg(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Ht(r,s,h.children,a),h=Xe.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ng(r,a,s);else if(r.tag===19)ng(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(Xe,h),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&cu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),rd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&cu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}rd(s,!0,a,null,g);break;case"together":rd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function xr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Xi|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=ui(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=ui(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function yE(r,s,a){switch(s.tag){case 3:Zm(s),no();break;case 5:ym(s);break;case 1:Jt(s.type)&&eu(s);break;case 4:Vh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;We(ou,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(Xe,Xe.current&1),s.flags|=128,null):a&s.child.childLanes?tg(r,s,a):(We(Xe,Xe.current&1),r=xr(r,s,a),r!==null?r.sibling:null);We(Xe,Xe.current&1);break;case 19:if(h=(a&s.childLanes)!==0,r.flags&128){if(h)return rg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(Xe,Xe.current),h)break;return null;case 22:case 23:return s.lanes=0,Jm(r,s,a)}return xr(r,s,a)}var ig,id,sg,og;ig=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},id=function(){},sg=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,Ji(tr.current);var g=null;switch(a){case"input":f=ki(r,f),h=ki(r,h),g=[];break;case"select":f=ae({},f,{value:void 0}),h=ae({},h,{value:void 0}),g=[];break;case"textarea":f=qo(r,f),h=qo(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Yl)}Yo(a,h);var w;a=null;for(z in f)if(!h.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var A=f[z];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in h){var k=h[z];if(A=f!=null?f[z]:void 0,h.hasOwnProperty(z)&&k!==A&&(k!=null||A!=null))if(z==="style")if(A){for(w in A)!A.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&A[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(g||(g=[]),g.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(g=g||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&Ke("scroll",r),g||A===k||(g=[])):(g=g||[]).push(z,k))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},og=function(r,s,a,h){a!==h&&(s.flags|=4)};function Na(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function bt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function vE(r,s,a){var h=s.pendingProps;switch(Ah(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(s),null;case 1:return Jt(s.type)&&Zl(),bt(s),null;case 3:return h=s.stateNode,oo(),Ge(Qt),Ge(Dt),Uh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(iu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Vn!==null&&(md(Vn),Vn=null))),id(r,s),bt(s),null;case 5:Mh(s);var f=Ji(Aa.current);if(a=s.type,r!==null&&s.stateNode!=null)sg(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return bt(s),null}if(r=Ji(tr.current),iu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[er]=s,h[Ea]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",h),Ke("close",h);break;case"iframe":case"object":case"embed":Ke("load",h);break;case"video":case"audio":for(f=0;f<va.length;f++)Ke(va[f],h);break;case"source":Ke("error",h);break;case"img":case"image":case"link":Ke("error",h),Ke("load",h);break;case"details":Ke("toggle",h);break;case"input":Es(h,g),Ke("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",h);break;case"textarea":Is(h,g),Ke("invalid",h)}Yo(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&Jl(h.textContent,A,r),f=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Jl(h.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&Ke("scroll",h)}switch(a){case"input":pr(h),Tl(h,g,!0);break;case"textarea":pr(h),Wo(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=Yl)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[er]=s,r[Ea]=h,ig(r,s,!1,!1),s.stateNode=r;e:{switch(w=Xo(a,h),a){case"dialog":Ke("cancel",r),Ke("close",r),f=h;break;case"iframe":case"object":case"embed":Ke("load",r),f=h;break;case"video":case"audio":for(f=0;f<va.length;f++)Ke(va[f],r);f=h;break;case"source":Ke("error",r),f=h;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),f=h;break;case"details":Ke("toggle",r),f=h;break;case"input":Es(r,h),f=ki(r,h),Ke("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=ae({},h,{value:void 0}),Ke("invalid",r);break;case"textarea":Is(r,h),f=qo(r,h),Ke("invalid",r);break;default:f=h}Yo(a,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var k=A[g];g==="style"?Qo(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ko(r,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Br(r,k):typeof k=="number"&&Br(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Ke("scroll",r):k!=null&&ee(r,g,k,w))}switch(a){case"input":pr(r),Tl(r,h,!1);break;case"textarea":pr(r),Wo(r);break;case"option":h.value!=null&&r.setAttribute("value",""+je(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?gr(r,!!h.multiple,g,!1):h.defaultValue!=null&&gr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Yl)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return bt(s),null;case 6:if(r&&s.stateNode!=null)og(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=Ji(Aa.current),Ji(tr.current),iu(s)){if(h=s.stateNode,a=s.memoizedProps,h[er]=s,(g=h.nodeValue!==a)&&(r=cn,r!==null))switch(r.tag){case 3:Jl(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Jl(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[er]=s,s.stateNode=h}return bt(s),null;case 13:if(Ge(Xe),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Je&&hn!==null&&s.mode&1&&!(s.flags&128))um(),no(),s.flags|=98560,g=!1;else if(g=iu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[er]=s}else no(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;bt(s),g=!1}else Vn!==null&&(md(Vn),Vn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||Xe.current&1?gt===0&&(gt=3):vd())),s.updateQueue!==null&&(s.flags|=4),bt(s),null);case 4:return oo(),id(r,s),r===null&&_a(s.stateNode.containerInfo),bt(s),null;case 10:return Oh(s.type._context),bt(s),null;case 17:return Jt(s.type)&&Zl(),bt(s),null;case 19:if(Ge(Xe),g=s.memoizedState,g===null)return bt(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)Na(g,!1);else{if(gt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=cu(r),w!==null){for(s.flags|=128,Na(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Xe,Xe.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>co&&(s.flags|=128,h=!0,Na(g,!1),s.lanes=4194304)}else{if(!h)if(r=cu(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Na(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Je)return bt(s),null}else 2*qe()-g.renderingStartTime>co&&a!==1073741824&&(s.flags|=128,h=!0,Na(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Xe.current,We(Xe,h?a&1|2:a&1),s):(bt(s),null);case 22:case 23:return yd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?dn&1073741824&&(bt(s),s.subtreeFlags&6&&(s.flags|=8192)):bt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function _E(r,s){switch(Ah(s),s.tag){case 1:return Jt(s.type)&&Zl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return oo(),Ge(Qt),Ge(Dt),Uh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Mh(s),null;case 13:if(Ge(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));no()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Xe),null;case 4:return oo(),null;case 10:return Oh(s.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var _u=!1,Vt=!1,wE=typeof WeakSet=="function"?WeakSet:Set,ue=null;function lo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){tt(r,s,h)}else a.current=null}function sd(r,s,a){try{a()}catch(h){tt(r,s,h)}}var ag=!1;function EE(r,s){if(yh=Qr,r=Up(),uh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,A=-1,k=-1,z=0,X=0,Z=r,Y=null;t:for(;;){for(var se;Z!==a||f!==0&&Z.nodeType!==3||(A=w+f),Z!==g||h!==0&&Z.nodeType!==3||(k=w+h),Z.nodeType===3&&(w+=Z.nodeValue.length),(se=Z.firstChild)!==null;)Y=Z,Z=se;for(;;){if(Z===r)break t;if(Y===a&&++z===f&&(A=w),Y===g&&++X===h&&(k=w),(se=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=se}a=A===-1||k===-1?null:{start:A,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(vh={focusedElem:r,selectionRange:a},Qr=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,st=ce.memoizedState,j=s.stateNode,D=j.getSnapshotBeforeUpdate(s.elementType===s.type?he:Mn(s.type,he),st);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){tt(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=ag,ag=!1,ce}function Oa(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&sd(s,a,g)}f=f.next}while(f!==h)}}function wu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function od(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function lg(r){var s=r.alternate;s!==null&&(r.alternate=null,lg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[er],delete s[Ea],delete s[Th],delete s[rE],delete s[iE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ug(r){return r.tag===5||r.tag===3||r.tag===4}function cg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ug(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ad(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Yl));else if(h!==4&&(r=r.child,r!==null))for(ad(r,s,a),r=r.sibling;r!==null;)ad(r,s,a),r=r.sibling}function ld(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(ld(r,s,a),r=r.sibling;r!==null;)ld(r,s,a),r=r.sibling}var Ct=null,Fn=!1;function ii(r,s,a){for(a=a.child;a!==null;)hg(r,s,a),a=a.sibling}function hg(r,s,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Fi,a)}catch{}switch(a.tag){case 5:Vt||lo(a,s);case 6:var h=Ct,f=Fn;Ct=null,ii(r,s,a),Ct=h,Fn=f,Ct!==null&&(Fn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Fn?(r=Ct,a=a.stateNode,r.nodeType===8?Eh(r.parentNode,a):r.nodeType===1&&Eh(r,a),Dn(r)):Eh(Ct,a.stateNode));break;case 4:h=Ct,f=Fn,Ct=a.stateNode.containerInfo,Fn=!0,ii(r,s,a),Ct=h,Fn=f;break;case 0:case 11:case 14:case 15:if(!Vt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&(g&2||g&4)&&sd(a,s,w),f=f.next}while(f!==h)}ii(r,s,a);break;case 1:if(!Vt&&(lo(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(A){tt(a,s,A)}ii(r,s,a);break;case 21:ii(r,s,a);break;case 22:a.mode&1?(Vt=(h=Vt)||a.memoizedState!==null,ii(r,s,a),Vt=h):ii(r,s,a);break;default:ii(r,s,a)}}function dg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new wE),s.forEach(function(h){var f=xE.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function Un(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,Fn=!1;break e;case 3:Ct=A.stateNode.containerInfo,Fn=!0;break e;case 4:Ct=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));hg(g,w,f),Ct=null,Fn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(z){tt(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)fg(s,r),s=s.sibling}function fg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Un(s,r),rr(r),h&4){try{Oa(3,r,r.return),wu(3,r)}catch(he){tt(r,r.return,he)}try{Oa(5,r,r.return)}catch(he){tt(r,r.return,he)}}break;case 1:Un(s,r),rr(r),h&512&&a!==null&&lo(a,a.return);break;case 5:if(Un(s,r),rr(r),h&512&&a!==null&&lo(a,a.return),r.flags&32){var f=r.stateNode;try{Br(f,"")}catch(he){tt(r,r.return,he)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,A=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&$o(f,g),Xo(A,w);var z=Xo(A,g);for(w=0;w<k.length;w+=2){var X=k[w],Z=k[w+1];X==="style"?Qo(f,Z):X==="dangerouslySetInnerHTML"?Ko(f,Z):X==="children"?Br(f,Z):ee(f,X,Z,z)}switch(A){case"input":Ho(f,g);break;case"textarea":Ss(f,g);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?gr(f,!!g.multiple,se,!1):Y!==!!g.multiple&&(g.defaultValue!=null?gr(f,!!g.multiple,g.defaultValue,!0):gr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ea]=g}catch(he){tt(r,r.return,he)}}break;case 6:if(Un(s,r),rr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(he){tt(r,r.return,he)}}break;case 3:if(Un(s,r),rr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(s.containerInfo)}catch(he){tt(r,r.return,he)}break;case 4:Un(s,r),rr(r);break;case 13:Un(s,r),rr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(hd=qe())),h&4&&dg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Vt=(z=Vt)||X,Un(s,r),Vt=z):Un(s,r),rr(r),h&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&r.mode&1)for(ue=r,X=r.child;X!==null;){for(Z=ue=X;ue!==null;){switch(Y=ue,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:Oa(4,Y,Y.return);break;case 1:lo(Y,Y.return);var ce=Y.stateNode;if(typeof ce.componentWillUnmount=="function"){h=Y,a=Y.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){tt(h,a,he)}}break;case 5:lo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){gg(Z);continue}}se!==null?(se.return=Y,ue=se):gg(Z)}X=X.sibling}e:for(X=null,Z=r;;){if(Z.tag===5){if(X===null){X=Z;try{f=Z.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Z.stateNode,k=Z.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=Go("display",w))}catch(he){tt(r,r.return,he)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(he){tt(r,r.return,he)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Un(s,r),rr(r),h&4&&dg(r);break;case 21:break;default:Un(s,r),rr(r)}}function rr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(ug(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(Br(f,""),h.flags&=-33);var g=cg(r);ld(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,A=cg(r);ad(r,A,w);break;default:throw Error(t(161))}}catch(k){tt(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function TE(r,s,a){ue=r,pg(r)}function pg(r,s,a){for(var h=(r.mode&1)!==0;ue!==null;){var f=ue,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||_u;if(!w){var A=f.alternate,k=A!==null&&A.memoizedState!==null||Vt;A=_u;var z=Vt;if(_u=w,(Vt=k)&&!z)for(ue=f;ue!==null;)w=ue,k=w.child,w.tag===22&&w.memoizedState!==null?yg(f):k!==null?(k.return=w,ue=k):yg(f);for(;g!==null;)ue=g,pg(g),g=g.sibling;ue=f,_u=A,Vt=z}mg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,ue=g):mg(r)}}function mg(r){for(;ue!==null;){var s=ue;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Vt||wu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Vt)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&gm(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}gm(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&Dn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||s.flags&512&&od(s)}catch(Y){tt(s,s.return,Y)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function gg(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function yg(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{wu(4,s)}catch(k){tt(s,a,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){tt(s,f,k)}}var g=s.return;try{od(s)}catch(k){tt(s,g,k)}break;case 5:var w=s.return;try{od(s)}catch(k){tt(s,w,k)}}}catch(k){tt(s,s.return,k)}if(s===r){ue=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ue=A;break}ue=s.return}}var IE=Math.ceil,Eu=oe.ReactCurrentDispatcher,ud=oe.ReactCurrentOwner,In=oe.ReactCurrentBatchConfig,Ve=0,Tt=null,ut=null,Pt=0,dn=0,uo=Zr(0),gt=0,Da=null,Xi=0,Tu=0,cd=0,La=null,Xt=null,hd=0,co=1/0,Nr=null,Iu=!1,dd=null,si=null,Su=!1,oi=null,Ru=0,ba=0,fd=null,Au=-1,Cu=0;function qt(){return Ve&6?qe():Au!==-1?Au:Au=qe()}function ai(r){return r.mode&1?Ve&2&&Pt!==0?Pt&-Pt:oE.transition!==null?(Cu===0&&(Cu=ji()),Cu):(r=xe,r!==0||(r=window.event,r=r===void 0?16:ua(r.type)),r):1}function jn(r,s,a,h){if(50<ba)throw ba=0,fd=null,Error(t(185));qr(r,a,h),(!(Ve&2)||r!==Tt)&&(r===Tt&&(!(Ve&2)&&(Tu|=a),gt===4&&li(r,Pt)),Zt(r,h),a===1&&Ve===0&&!(s.mode&1)&&(co=qe()+500,tu&&ti()))}function Zt(r,s){var a=r.callbackNode;_r(r,s);var h=Ui(r,r===Tt?Pt:0);if(h===0)a!==null&&ia(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&ia(a),s===1)r.tag===0?sE(_g.bind(null,r)):im(_g.bind(null,r)),tE(function(){!(Ve&6)&&ti()}),a=null;else{switch(Kr(h)){case 1:a=Mi;break;case 4:a=zr;break;case 16:a=gn;break;case 536870912:a=Cl;break;default:a=gn}a=Cg(a,vg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function vg(r,s){if(Au=-1,Cu=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(ho()&&r.callbackNode!==a)return null;var h=Ui(r,r===Tt?Pt:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=Pu(r,h);else{s=h;var f=Ve;Ve|=2;var g=Eg();(Tt!==r||Pt!==s)&&(Nr=null,co=qe()+500,es(r,s));do try{AE();break}catch(A){wg(r,A)}while(!0);Nh(),Eu.current=g,Ve=f,ut!==null?s=0:(Tt=null,Pt=0,s=gt)}if(s!==0){if(s===2&&(f=an(r),f!==0&&(h=f,s=pd(r,f))),s===1)throw a=Da,es(r,0),li(r,h),Zt(r,qe()),a;if(s===6)li(r,h);else{if(f=r.current.alternate,!(h&30)&&!SE(f)&&(s=Pu(r,h),s===2&&(g=an(r),g!==0&&(h=g,s=pd(r,g))),s===1))throw a=Da,es(r,0),li(r,h),Zt(r,qe()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:ts(r,Xt,Nr);break;case 3:if(li(r,h),(h&130023424)===h&&(s=hd+500-qe(),10<s)){if(Ui(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=wh(ts.bind(null,r,Xt,Nr),s);break}ts(r,Xt,Nr);break;case 4:if(li(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-zt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*IE(h/1960))-h,10<h){r.timeoutHandle=wh(ts.bind(null,r,Xt,Nr),h);break}ts(r,Xt,Nr);break;case 5:ts(r,Xt,Nr);break;default:throw Error(t(329))}}}return Zt(r,qe()),r.callbackNode===a?vg.bind(null,r):null}function pd(r,s){var a=La;return r.current.memoizedState.isDehydrated&&(es(r,s).flags|=256),r=Pu(r,s),r!==2&&(s=Xt,Xt=a,s!==null&&md(s)),r}function md(r){Xt===null?Xt=r:Xt.push.apply(Xt,r)}function SE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!bn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function li(r,s){for(s&=~cd,s&=~Tu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-zt(s),h=1<<a;r[a]=-1,s&=~h}}function _g(r){if(Ve&6)throw Error(t(327));ho();var s=Ui(r,0);if(!(s&1))return Zt(r,qe()),null;var a=Pu(r,s);if(r.tag!==0&&a===2){var h=an(r);h!==0&&(s=h,a=pd(r,h))}if(a===1)throw a=Da,es(r,0),li(r,s),Zt(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ts(r,Xt,Nr),Zt(r,qe()),null}function gd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(co=qe()+500,tu&&ti())}}function Zi(r){oi!==null&&oi.tag===0&&!(Ve&6)&&ho();var s=Ve;Ve|=1;var a=In.transition,h=xe;try{if(In.transition=null,xe=1,r)return r()}finally{xe=h,In.transition=a,Ve=s,!(Ve&6)&&ti()}}function yd(){dn=uo.current,Ge(uo)}function es(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,eE(a)),ut!==null)for(a=ut.return;a!==null;){var h=a;switch(Ah(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Zl();break;case 3:oo(),Ge(Qt),Ge(Dt),Uh();break;case 5:Mh(h);break;case 4:oo();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:Oh(h.type._context);break;case 22:case 23:yd()}a=a.return}if(Tt=r,ut=r=ui(r.current,null),Pt=dn=s,gt=0,Da=null,cd=Tu=Xi=0,Xt=La=null,Qi!==null){for(s=0;s<Qi.length;s++)if(a=Qi[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}a.pending=h}Qi=null}return r}function wg(r,s){do{var a=ut;try{if(Nh(),hu.current=mu,du){for(var h=Ze.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}du=!1}if(Yi=0,Et=mt=Ze=null,Ca=!1,Pa=0,ud.current=null,a===null||a.return===null){gt=1,Da=s,ut=null;break}e:{var g=r,w=a.return,A=a,k=s;if(s=Pt,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,X=A,Z=X.tag;if(!(X.mode&1)&&(Z===0||Z===11||Z===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=qm(w);if(se!==null){se.flags&=-257,Wm(se,w,A,g,s),se.mode&1&&Hm(g,z,s),s=se,k=z;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(k),s.updateQueue=he}else ce.add(k);break e}else{if(!(s&1)){Hm(g,z,s),vd();break e}k=Error(t(426))}}else if(Je&&A.mode&1){var st=qm(w);if(st!==null){!(st.flags&65536)&&(st.flags|=256),Wm(st,w,A,g,s),kh(ao(k,A));break e}}g=k=ao(k,A),gt!==4&&(gt=2),La===null?La=[g]:La.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var j=zm(g,k,s);mm(g,j);break e;case 1:A=k;var D=g.type,B=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(si===null||!si.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=$m(g,A,s);mm(g,te);break e}}g=g.return}while(g!==null)}Ig(a)}catch(de){s=de,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function Eg(){var r=Eu.current;return Eu.current=mu,r===null?mu:r}function vd(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||!(Xi&268435455)&&!(Tu&268435455)||li(Tt,Pt)}function Pu(r,s){var a=Ve;Ve|=2;var h=Eg();(Tt!==r||Pt!==s)&&(Nr=null,es(r,s));do try{RE();break}catch(f){wg(r,f)}while(!0);if(Nh(),Ve=a,Eu.current=h,ut!==null)throw Error(t(261));return Tt=null,Pt=0,gt}function RE(){for(;ut!==null;)Tg(ut)}function AE(){for(;ut!==null&&!Rl();)Tg(ut)}function Tg(r){var s=Ag(r.alternate,r,dn);r.memoizedProps=r.pendingProps,s===null?Ig(r):ut=s,ud.current=null}function Ig(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=_E(a,s),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{gt=6,ut=null;return}}else if(a=vE(a,s,dn),a!==null){ut=a;return}if(s=s.sibling,s!==null){ut=s;return}ut=s=r}while(s!==null);gt===0&&(gt=5)}function ts(r,s,a){var h=xe,f=In.transition;try{In.transition=null,xe=1,CE(r,s,a,h)}finally{In.transition=f,xe=h}return null}function CE(r,s,a,h){do ho();while(oi!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if($e(r,g),r===Tt&&(ut=Tt=null,Pt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Su||(Su=!0,Cg(gn,function(){return ho(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=In.transition,In.transition=null;var w=xe;xe=1;var A=Ve;Ve|=4,ud.current=null,EE(r,a),fg(a,r),Kw(vh),Qr=!!yh,vh=yh=null,r.current=a,TE(a),th(),Ve=A,xe=w,In.transition=g}else r.current=a;if(Su&&(Su=!1,oi=r,Ru=f),g=r.pendingLanes,g===0&&(si=null),Pl(a.stateNode),Zt(r,qe()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Iu)throw Iu=!1,r=dd,dd=null,r;return Ru&1&&r.tag!==0&&ho(),g=r.pendingLanes,g&1?r===fd?ba++:(ba=0,fd=r):ba=0,ti(),null}function ho(){if(oi!==null){var r=Kr(Ru),s=In.transition,a=xe;try{if(In.transition=null,xe=16>r?16:r,oi===null)var h=!1;else{if(r=oi,oi=null,Ru=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,ue=r.current;ue!==null;){var g=ue,w=g.child;if(ue.flags&16){var A=g.deletions;if(A!==null){for(var k=0;k<A.length;k++){var z=A[k];for(ue=z;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:Oa(8,X,g)}var Z=X.child;if(Z!==null)Z.return=X,ue=Z;else for(;ue!==null;){X=ue;var Y=X.sibling,se=X.return;if(lg(X),X===z){ue=null;break}if(Y!==null){Y.return=se,ue=Y;break}ue=se}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var st=he.sibling;he.sibling=null,he=st}while(he!==null)}}ue=g}}if(g.subtreeFlags&2064&&w!==null)w.return=g,ue=w;else e:for(;ue!==null;){if(g=ue,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Oa(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,ue=j;break e}ue=g.return}}var D=r.current;for(ue=D;ue!==null;){w=ue;var B=w.child;if(w.subtreeFlags&2064&&B!==null)B.return=w,ue=B;else e:for(w=D;ue!==null;){if(A=ue,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:wu(9,A)}}catch(de){tt(A,A.return,de)}if(A===w){ue=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,ue=te;break e}ue=A.return}}if(Ve=f,ti(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Fi,r)}catch{}h=!0}return h}finally{xe=a,In.transition=s}}return!1}function Sg(r,s,a){s=ao(a,s),s=zm(r,s,1),r=ri(r,s,1),s=qt(),r!==null&&(qr(r,1,s),Zt(r,s))}function tt(r,s,a){if(r.tag===3)Sg(r,r,a);else for(;s!==null;){if(s.tag===3){Sg(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(si===null||!si.has(h))){r=ao(a,r),r=$m(s,r,1),s=ri(s,r,1),r=qt(),s!==null&&(qr(s,1,r),Zt(s,r));break}}s=s.return}}function PE(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=qt(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(Pt&a)===a&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>qe()-hd?es(r,0):cd|=a),Zt(r,s)}function Rg(r,s){s===0&&(r.mode&1?(s=Ls,Ls<<=1,!(Ls&130023424)&&(Ls=4194304)):s=1);var a=qt();r=Pr(r,s),r!==null&&(qr(r,s,a),Zt(r,a))}function kE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Rg(r,a)}function xE(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Rg(r,a)}var Ag;Ag=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Yt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Yt=!1,yE(r,s,a);Yt=!!(r.flags&131072)}else Yt=!1,Je&&s.flags&1048576&&sm(s,ru,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;vu(r,s),r=s.pendingProps;var f=Zs(s,Dt.current);so(s,a),f=zh(null,s,h,r,f,a);var g=$h();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(h)?(g=!0,eu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,bh(s),f.updater=gu,s.stateNode=f,f._reactInternals=s,Qh(s,h,r,a),s=Zh(null,s,h,!0,g,a)):(s.tag=0,Je&&g&&Rh(s),Ht(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(vu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=OE(h),r=Mn(h,r),f){case 0:s=Xh(null,s,h,r,a);break e;case 1:s=Xm(null,s,h,r,a);break e;case 11:s=Km(null,s,h,r,a);break e;case 14:s=Gm(null,s,h,Mn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Mn(h,f),Xh(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Mn(h,f),Xm(r,s,h,f,a);case 3:e:{if(Zm(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,pm(r,s),uu(s,h,null,a);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=ao(Error(t(423)),s),s=eg(r,s,h,a,f);break e}else if(h!==f){f=ao(Error(t(424)),s),s=eg(r,s,h,a,f);break e}else for(hn=Xr(s.stateNode.containerInfo.firstChild),cn=s,Je=!0,Vn=null,a=dm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(no(),h===f){s=xr(r,s,a);break e}Ht(r,s,h,a)}s=s.child}return s;case 5:return ym(s),r===null&&Ph(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,_h(h,f)?w=null:g!==null&&_h(h,g)&&(s.flags|=32),Ym(r,s),Ht(r,s,w,a),s.child;case 6:return r===null&&Ph(s),null;case 13:return tg(r,s,a);case 4:return Vh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=ro(s,null,h,a):Ht(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Mn(h,f),Km(r,s,h,f,a);case 7:return Ht(r,s,s.pendingProps,a),s.child;case 8:return Ht(r,s,s.pendingProps.children,a),s.child;case 12:return Ht(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,We(ou,h._currentValue),h._currentValue=w,g!==null)if(bn(g.value,w)){if(g.children===f.children&&!Qt.current){s=xr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var k=A.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=kr(-1,a&-a),k.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?k.next=k:(k.next=X.next,X.next=k),z.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Dh(g.return,a,s),A.lanes|=a;break}k=k.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),Dh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Ht(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,so(s,a),f=En(f),h=h(f),s.flags|=1,Ht(r,s,h,a),s.child;case 14:return h=s.type,f=Mn(h,s.pendingProps),f=Mn(h.type,f),Gm(r,s,h,f,a);case 15:return Qm(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Mn(h,f),vu(r,s),s.tag=1,Jt(h)?(r=!0,eu(s)):r=!1,so(s,a),jm(s,h,f),Qh(s,h,f,a),Zh(null,s,h,!0,r,a);case 19:return rg(r,s,a);case 22:return Jm(r,s,a)}throw Error(t(156,s.tag))};function Cg(r,s){return Os(r,s)}function NE(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(r,s,a,h){return new NE(r,s,a,h)}function _d(r){return r=r.prototype,!(!r||!r.isReactComponent)}function OE(r){if(typeof r=="function")return _d(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Nt)return 14}return 2}function ui(r,s){var a=r.alternate;return a===null?(a=Sn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function ku(r,s,a,h,f,g){var w=2;if(h=r,typeof r=="function")_d(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case x:return ns(a.children,f,g,s);case I:w=8,f|=8;break;case R:return r=Sn(12,a,s,f|2),r.elementType=R,r.lanes=g,r;case C:return r=Sn(13,a,s,f),r.elementType=C,r.lanes=g,r;case rt:return r=Sn(19,a,s,f),r.elementType=rt,r.lanes=g,r;case ze:return xu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:w=10;break e;case b:w=9;break e;case M:w=11;break e;case Nt:w=14;break e;case Ot:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Sn(w,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function ns(r,s,a,h){return r=Sn(7,r,h,s),r.lanes=a,r}function xu(r,s,a,h){return r=Sn(22,r,h,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function wd(r,s,a){return r=Sn(6,r,null,s),r.lanes=a,r}function Ed(r,s,a){return s=Sn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function DE(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Td(r,s,a,h,f,g,w,A,k){return r=new DE(r,s,a,A,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Sn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(g),r}function LE(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Pg(r){if(!r)return ei;r=r._reactInternals;e:{if(Pn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return nm(r,a,s)}return s}function kg(r,s,a,h,f,g,w,A,k){return r=Td(a,h,!0,r,f,g,w,A,k),r.context=Pg(null),a=r.current,h=qt(),f=ai(a),g=kr(h,f),g.callback=s??null,ri(a,g,f),r.current.lanes=f,qr(r,f,h),Zt(r,h),r}function Nu(r,s,a,h){var f=s.current,g=qt(),w=ai(f);return a=Pg(a),s.context===null?s.context=a:s.pendingContext=a,s=kr(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=ri(f,s,w),r!==null&&(jn(r,f,w,g),lu(r,f,w)),w}function Ou(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function xg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Id(r,s){xg(r,s),(r=r.alternate)&&xg(r,s)}function bE(){return null}var Ng=typeof reportError=="function"?reportError:function(r){console.error(r)};function Sd(r){this._internalRoot=r}Du.prototype.render=Sd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Nu(r,s,null,null)},Du.prototype.unmount=Sd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Zi(function(){Nu(null,r,null,null)}),s[Sr]=null}};function Du(r){this._internalRoot=r}Du.prototype.unstable_scheduleHydration=function(r){if(r){var s=Dl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Jn.length&&s!==0&&s<Jn[a].priority;a++);Jn.splice(a,0,r),a===0&&Vl(r)}};function Rd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Lu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Og(){}function VE(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var z=Ou(w);g.call(z)}}var w=kg(s,h,r,0,null,!1,!1,"",Og);return r._reactRootContainer=w,r[Sr]=w.current,_a(r.nodeType===8?r.parentNode:r),Zi(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var A=h;h=function(){var z=Ou(k);A.call(z)}}var k=Td(r,0,!1,null,null,!1,!1,"",Og);return r._reactRootContainer=k,r[Sr]=k.current,_a(r.nodeType===8?r.parentNode:r),Zi(function(){Nu(s,k,a,h)}),k}function bu(r,s,a,h,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var A=f;f=function(){var k=Ou(w);A.call(k)}}Nu(s,w,r,f)}else w=VE(a,s,r,f,h);return Ou(w)}Nl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=$r(s.pendingLanes);a!==0&&(Wr(s,a|1),Zt(s,qe()),!(Ve&6)&&(co=qe()+500,ti()))}break;case 13:Zi(function(){var h=Pr(r,1);if(h!==null){var f=qt();jn(h,r,1,f)}}),Id(r,1)}},bs=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=qt();jn(s,r,134217728,a)}Id(r,134217728)}},Ol=function(r){if(r.tag===13){var s=ai(r),a=Pr(r,s);if(a!==null){var h=qt();jn(a,r,s,h)}Id(r,s)}},Dl=function(){return xe},Ll=function(r,s){var a=xe;try{return xe=r,s()}finally{xe=a}},As=function(r,s,a){switch(s){case"input":if(Ho(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=Xl(h);if(!f)throw Error(t(90));ws(h),Ho(h,f)}}}break;case"textarea":Ss(r,a);break;case"select":s=a.value,s!=null&&gr(r,!!a.multiple,s,!1)}},Di=gd,ea=Zi;var ME={usingClientEntryPoint:!1,Events:[Ta,Ys,Xl,Gn,Zo,gd]},Va={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FE={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ra(r),r===null?null:r.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||bE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Fi=Vu.inject(FE),on=Vu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME,en.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(s))throw Error(t(200));return LE(r,s,null,a)},en.createRoot=function(r,s){if(!Rd(r))throw Error(t(299));var a=!1,h="",f=Ng;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Td(r,1,!1,null,null,a,!1,h,f),r[Sr]=s.current,_a(r.nodeType===8?r.parentNode:r),new Sd(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ra(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return Zi(r)},en.hydrate=function(r,s,a){if(!Lu(s))throw Error(t(200));return bu(null,r,s,!0,a)},en.hydrateRoot=function(r,s,a){if(!Rd(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",w=Ng;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=kg(s,null,r,1,a??null,f,!1,g,w),r[Sr]=s.current,_a(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Du(s)},en.render=function(r,s,a){if(!Lu(s))throw Error(t(200));return bu(null,r,s,!1,a)},en.unmountComponentAtNode=function(r){if(!Lu(r))throw Error(t(40));return r._reactRootContainer?(Zi(function(){bu(null,null,r,!1,function(){r._reactRootContainer=null,r[Sr]=null})}),!0):!1},en.unstable_batchedUpdates=gd,en.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Lu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return bu(r,s,a,!1,h)},en.version="18.3.1-next-f1338f8080-20240426",en}var jg;function WE(){if(jg)return Pd.exports;jg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Pd.exports=qE(),Pd.exports}var Bg;function KE(){if(Bg)return Mu;Bg=1;var n=WE();return Mu.createRoot=n.createRoot,Mu.hydrateRoot=n.hydrateRoot,Mu}var GE=KE(),Fa={},zg;function QE(){if(zg)return Fa;zg=1,Object.defineProperty(Fa,"__esModule",{value:!0}),Fa.parse=c,Fa.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,L){const N=new l,F=S.length;if(F<2)return N;const O=(L==null?void 0:L.decode)||_;let q=0;do{const K=S.indexOf("=",q);if(K===-1)break;const ee=S.indexOf(";",q),oe=ee===-1?F:ee;if(K>oe){q=S.lastIndexOf(";",K-1)+1;continue}const fe=d(S,q,K),me=p(S,K,fe),x=S.slice(fe,me);if(N[x]===void 0){let I=d(S,K+1,oe),R=p(S,oe,I);const P=O(S.slice(I,R));N[x]=P}q=oe+1}while(q<F);return N}function d(S,L,N){do{const F=S.charCodeAt(L);if(F!==32&&F!==9)return L}while(++L<N);return N}function p(S,L,N){for(;L>N;){const F=S.charCodeAt(--L);if(F!==32&&F!==9)return L+1}return N}function y(S,L,N){const F=(N==null?void 0:N.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const O=F(L);if(!e.test(O))throw new TypeError(`argument val is invalid: ${L}`);let q=S+"="+O;if(!N)return q;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);q+="; Max-Age="+N.maxAge}if(N.domain){if(!t.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);q+="; Domain="+N.domain}if(N.path){if(!i.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);q+="; Path="+N.path}if(N.expires){if(!T(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);q+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&(q+="; HttpOnly"),N.secure&&(q+="; Secure"),N.partitioned&&(q+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return q}function _(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return o.call(S)==="[object Date]"}return Fa}QE();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $g="popstate";function JE(n={}){function e(i,o){let{pathname:l,search:c,hash:d}=i.location;return Xd("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:el(o)}return XE(e,t,null,n)}function Ye(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Bn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YE(){return Math.random().toString(36).substring(2,10)}function Hg(n,e){return{usr:n.state,key:n.key,idx:e}}function Xd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?No(e):e,state:t,key:e&&e.key||i||YE()}}function el({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function No(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function XE(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d="POP",p=null,y=_();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function _(){return(c.state||{idx:null}).idx}function T(){d="POP";let O=_(),q=O==null?null:O-y;y=O,p&&p({action:d,location:F.location,delta:q})}function S(O,q){d="PUSH";let K=Xd(F.location,O,q);y=_()+1;let ee=Hg(K,y),oe=F.createHref(K);try{c.pushState(ee,"",oe)}catch(fe){if(fe instanceof DOMException&&fe.name==="DataCloneError")throw fe;o.location.assign(oe)}l&&p&&p({action:d,location:F.location,delta:1})}function L(O,q){d="REPLACE";let K=Xd(F.location,O,q);y=_();let ee=Hg(K,y),oe=F.createHref(K);c.replaceState(ee,"",oe),l&&p&&p({action:d,location:F.location,delta:0})}function N(O){let q=o.location.origin!=="null"?o.location.origin:o.location.href,K=typeof O=="string"?O:el(O);return K=K.replace(/ $/,"%20"),Ye(q,`No window.location.(origin|href) available to create URL for href: ${K}`),new URL(K,q)}let F={get action(){return d},get location(){return n(o,c)},listen(O){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener($g,T),p=O,()=>{o.removeEventListener($g,T),p=null}},createHref(O){return e(o,O)},createURL:N,encodeLocation(O){let q=N(O);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:S,replace:L,go(O){return c.go(O)}};return F}function bv(n,e,t="/"){return ZE(n,e,t,!1)}function ZE(n,e,t,i){let o=typeof e=="string"?No(e):e,l=Ei(o.pathname||"/",t);if(l==null)return null;let c=Vv(n);eT(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=hT(l);d=uT(c[p],y,i)}return d}function Vv(n,e=[],t=[],i=""){let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Ye(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Vr([i,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(Ye(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Vv(l.children,e,_,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:aT(y,l.index),routesMeta:_})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of Mv(l.path))o(l,c,p)}),e}function Mv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=Mv(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function eT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:lT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var tT=/^:[\w-]+$/,nT=3,rT=2,iT=1,sT=10,oT=-2,qg=n=>n==="*";function aT(n,e){let t=n.split("/"),i=t.length;return t.some(qg)&&(i+=oT),e&&(i+=rT),t.filter(o=>!qg(o)).reduce((o,l)=>o+(tT.test(l)?nT:l===""?iT:sT),i)}function lT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function uT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",T=oc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),S=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=oc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Vr([l,T.pathname]),pathnameBase:mT(Vr([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=Vr([l,T.pathnameBase]))}return c}function oc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=cT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:_,isOptional:T},S)=>{if(_==="*"){let N=d[S]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const L=d[S];return T&&!L?y[_]=void 0:y[_]=(L||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function cT(n,e=!1,t=!0){Bn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function hT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bn(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ei(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function dT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?No(n):n;return{pathname:t?t.startsWith("/")?t:fT(t,e):e,search:gT(i),hash:yT(o)}}function fT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Nd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Df(n){let e=pT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Lf(n,e,t,i=!1){let o;typeof n=="string"?o=No(n):(o={...n},Ye(!o.pathname||!o.pathname.includes("?"),Nd("?","pathname","search",o)),Ye(!o.pathname||!o.pathname.includes("#"),Nd("#","pathname","hash",o)),Ye(!o.search||!o.search.includes("#"),Nd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;o.pathname=S.join("/")}d=T>=0?e[T]:"/"}let p=dT(o,d),y=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}var Vr=n=>n.join("/").replace(/\/\/+/g,"/"),mT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),gT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,yT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function vT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Fv=["POST","PUT","PATCH","DELETE"];new Set(Fv);var _T=["GET",...Fv];new Set(_T);var Oo=W.createContext(null);Oo.displayName="DataRouter";var Rc=W.createContext(null);Rc.displayName="DataRouterState";var Uv=W.createContext({isTransitioning:!1});Uv.displayName="ViewTransition";var wT=W.createContext(new Map);wT.displayName="Fetchers";var ET=W.createContext(null);ET.displayName="Await";var Hn=W.createContext(null);Hn.displayName="Navigation";var cl=W.createContext(null);cl.displayName="Location";var dr=W.createContext({outlet:null,matches:[],isDataRoute:!1});dr.displayName="Route";var bf=W.createContext(null);bf.displayName="RouteError";function TT(n,{relative:e}={}){Ye(Do(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=W.useContext(Hn),{hash:o,pathname:l,search:c}=hl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Vr([t,l])),i.createHref({pathname:d,search:c,hash:o})}function Do(){return W.useContext(cl)!=null}function Ci(){return Ye(Do(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(cl).location}var jv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bv(n){W.useContext(Hn).static||W.useLayoutEffect(n)}function Vf(){let{isDataRoute:n}=W.useContext(dr);return n?bT():IT()}function IT(){Ye(Do(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Oo),{basename:e,navigator:t}=W.useContext(Hn),{matches:i}=W.useContext(dr),{pathname:o}=Ci(),l=JSON.stringify(Df(i)),c=W.useRef(!1);return Bv(()=>{c.current=!0}),W.useCallback((p,y={})=>{if(Bn(c.current,jv),!c.current)return;if(typeof p=="number"){t.go(p);return}let _=Lf(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Vr([e,_.pathname])),(y.replace?t.replace:t.push)(_,y.state,y)},[e,t,l,o,n])}W.createContext(null);function hl(n,{relative:e}={}){let{matches:t}=W.useContext(dr),{pathname:i}=Ci(),o=JSON.stringify(Df(t));return W.useMemo(()=>Lf(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function ST(n,e){return zv(n,e)}function zv(n,e,t,i){var q;Ye(Do(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=W.useContext(Hn),{matches:l}=W.useContext(dr),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",y=c?c.pathnameBase:"/",_=c&&c.route;{let K=_&&_.path||"";$v(p,!_||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let T=Ci(),S;if(e){let K=typeof e=="string"?No(e):e;Ye(y==="/"||((q=K.pathname)==null?void 0:q.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${K.pathname}" was given in the \`location\` prop.`),S=K}else S=T;let L=S.pathname||"/",N=L;if(y!=="/"){let K=y.replace(/^\//,"").split("/");N="/"+L.replace(/^\//,"").split("/").slice(K.length).join("/")}let F=bv(n,{pathname:N});Bn(_||F!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Bn(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=kT(F&&F.map(K=>Object.assign({},K,{params:Object.assign({},d,K.params),pathname:Vr([y,o.encodeLocation?o.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?y:Vr([y,o.encodeLocation?o.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),l,t,i);return e&&O?W.createElement(cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},O):O}function RT(){let n=LT(),e=vT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:l},"ErrorBoundary")," or"," ",W.createElement("code",{style:l},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,c)}var AT=W.createElement(RT,null),CT=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(dr.Provider,{value:this.props.routeContext},W.createElement(bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function PT({routeContext:n,match:e,children:t}){let i=W.useContext(Oo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(dr.Provider,{value:n},t)}function kT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ye(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:_,errors:T}=t,S=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||S){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,_)=>{let T,S=!1,L=null,N=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,L=y.route.errorElement||AT,c&&(d<0&&_===0?($v("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,N=null):d===_&&(S=!0,N=y.route.hydrateFallbackElement||null)));let F=e.concat(o.slice(0,_+1)),O=()=>{let q;return T?q=L:S?q=N:y.route.Component?q=W.createElement(y.route.Component,null):y.route.element?q=y.route.element:q=p,W.createElement(PT,{match:y,routeContext:{outlet:p,matches:F,isDataRoute:t!=null},children:q})};return t&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?W.createElement(CT,{location:t.location,revalidation:t.revalidation,component:L,error:T,children:O(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):O()},null)}function Mf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xT(n){let e=W.useContext(Oo);return Ye(e,Mf(n)),e}function NT(n){let e=W.useContext(Rc);return Ye(e,Mf(n)),e}function OT(n){let e=W.useContext(dr);return Ye(e,Mf(n)),e}function Ff(n){let e=OT(n),t=e.matches[e.matches.length-1];return Ye(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function DT(){return Ff("useRouteId")}function LT(){var i;let n=W.useContext(bf),e=NT("useRouteError"),t=Ff("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function bT(){let{router:n}=xT("useNavigate"),e=Ff("useNavigate"),t=W.useRef(!1);return Bv(()=>{t.current=!0}),W.useCallback(async(o,l={})=>{Bn(t.current,jv),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Wg={};function $v(n,e,t){!e&&!Wg[n]&&(Wg[n]=!0,Bn(!1,t))}W.memo(VT);function VT({routes:n,future:e,state:t}){return zv(n,void 0,t,e)}function MT({to:n,replace:e,state:t,relative:i}){Ye(Do(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=W.useContext(Hn);Bn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=W.useContext(dr),{pathname:c}=Ci(),d=Vf(),p=Lf(n,Df(l),c,i==="path"),y=JSON.stringify(p);return W.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function Ba(n){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Ye(!Do(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=No(t));let{pathname:p="/",search:y="",hash:_="",state:T=null,key:S="default"}=t,L=W.useMemo(()=>{let N=Ei(p,c);return N==null?null:{location:{pathname:N,search:y,hash:_,state:T,key:S},navigationType:i}},[c,p,y,_,T,S,i]);return Bn(L!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:W.createElement(Hn.Provider,{value:d},W.createElement(cl.Provider,{children:e,value:L}))}function UT({children:n,location:e}){return ST(Zd(n),e)}function Zd(n,e=[]){let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,Zd(i.props.children,l));return}Ye(i.type===Ba,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Zd(i.props.children,l)),t.push(c)}),t}var Wu="get",Ku="application/x-www-form-urlencoded";function Ac(n){return n!=null&&typeof n.tagName=="string"}function jT(n){return Ac(n)&&n.tagName.toLowerCase()==="button"}function BT(n){return Ac(n)&&n.tagName.toLowerCase()==="form"}function zT(n){return Ac(n)&&n.tagName.toLowerCase()==="input"}function $T(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function HT(n,e){return n.button===0&&(!e||e==="_self")&&!$T(n)}var Fu=null;function qT(){if(Fu===null)try{new FormData(document.createElement("form"),0),Fu=!1}catch{Fu=!0}return Fu}var WT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Od(n){return n!=null&&!WT.has(n)?(Bn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ku}"`),null):n}function KT(n,e){let t,i,o,l,c;if(BT(n)){let d=n.getAttribute("action");i=d?Ei(d,e):null,t=n.getAttribute("method")||Wu,o=Od(n.getAttribute("enctype"))||Ku,l=new FormData(n)}else if(jT(n)||zT(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Ei(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Wu,o=Od(n.getAttribute("formenctype"))||Od(d.getAttribute("enctype"))||Ku,l=new FormData(d,n),!qT()){let{name:y,type:_,value:T}=n;if(_==="image"){let S=y?`${y}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else y&&l.append(y,T)}}else{if(Ac(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Wu,i=null,o=Ku,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:c}}function Uf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function GT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function QT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function JT(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await GT(l,t);return c.links?c.links():[]}return[]}));return eI(i.flat(1).filter(QT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Kg(n,e,t,i,o,l){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var _;return t[y].pathname!==p.pathname||((_=t[y].route.path)==null?void 0:_.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let _=i.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function YT(n,e){return XT(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function XT(n){return[...new Set(n)]}function ZT(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function eI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(ZT(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function tI(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function nI(){let n=W.useContext(Oo);return Uf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function rI(){let n=W.useContext(Rc);return Uf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var jf=W.createContext(void 0);jf.displayName="FrameworkContext";function Hv(){let n=W.useContext(jf);return Uf(n,"You must render this element inside a <HydratedRouter> element"),n}function iI(n,e){let t=W.useContext(jf),[i,o]=W.useState(!1),[l,c]=W.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:_,onTouchStart:T}=e,S=W.useRef(null);W.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let F=q=>{q.forEach(K=>{c(K.isIntersecting)})},O=new IntersectionObserver(F,{threshold:.5});return S.current&&O.observe(S.current),()=>{O.disconnect()}}},[n]),W.useEffect(()=>{if(i){let F=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(F)}}},[i]);let L=()=>{o(!0)},N=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:Ua(d,L),onBlur:Ua(p,N),onMouseEnter:Ua(y,L),onMouseLeave:Ua(_,N),onTouchStart:Ua(T,L)}]:[!1,S,{}]}function Ua(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function sI({page:n,...e}){let{router:t}=nI(),i=W.useMemo(()=>bv(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?W.createElement(aI,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function oI(n){let{manifest:e,routeModules:t}=Hv(),[i,o]=W.useState([]);return W.useEffect(()=>{let l=!1;return JT(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),i}function aI({page:n,matches:e,...t}){let i=Ci(),{manifest:o,routeModules:l}=Hv(),{loaderData:c,matches:d}=rI(),p=W.useMemo(()=>Kg(n,e,d,o,i,"data"),[n,e,d,o,i]),y=W.useMemo(()=>Kg(n,e,d,o,i,"assets"),[n,e,d,o,i]),_=W.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let L=new Set,N=!1;if(e.forEach(O=>{var K;let q=o.routes[O.route.id];!q||!q.hasLoader||(!p.some(ee=>ee.route.id===O.route.id)&&O.route.id in c&&((K=l[O.route.id])!=null&&K.shouldRevalidate)||q.hasClientLoader?N=!0:L.add(O.route.id))}),L.size===0)return[];let F=tI(n);return N&&L.size>0&&F.searchParams.set("_routes",e.filter(O=>L.has(O.route.id)).map(O=>O.route.id).join(",")),[F.pathname+F.search]},[c,i,o,p,e,n,l]),T=W.useMemo(()=>YT(y,o),[y,o]),S=oI(y);return W.createElement(W.Fragment,null,_.map(L=>W.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...t})),T.map(L=>W.createElement("link",{key:L,rel:"modulepreload",href:L,...t})),S.map(({key:L,link:N})=>W.createElement("link",{key:L,...N})))}function lI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var qv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qv&&(window.__reactRouterVersion="7.0.2")}catch{}function uI({basename:n,children:e,window:t}){let i=W.useRef();i.current==null&&(i.current=JE({window:t,v5Compat:!0}));let o=i.current,[l,c]=W.useState({action:o.action,location:o.location}),d=W.useCallback(p=>{W.startTransition(()=>c(p))},[c]);return W.useLayoutEffect(()=>o.listen(d),[o,d]),W.createElement(FT,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var Wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ka=W.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:_,viewTransition:T,...S},L){let{basename:N}=W.useContext(Hn),F=typeof y=="string"&&Wv.test(y),O,q=!1;if(typeof y=="string"&&F&&(O=y,qv))try{let R=new URL(window.location.href),P=y.startsWith("//")?new URL(R.protocol+y):new URL(y),b=Ei(P.pathname,N);P.origin===R.origin&&b!=null?y=b+P.search+P.hash:q=!0}catch{Bn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=TT(y,{relative:o}),[ee,oe,fe]=iI(i,S),me=fI(y,{replace:c,state:d,target:p,preventScrollReset:_,relative:o,viewTransition:T});function x(R){e&&e(R),R.defaultPrevented||me(R)}let I=W.createElement("a",{...S,...fe,href:O||K,onClick:q||l?e:x,ref:lI(L,oe),target:p,"data-discover":!F&&t==="render"?"true":void 0});return ee&&!F?W.createElement(W.Fragment,null,I,W.createElement(sI,{page:K})):I});Ka.displayName="Link";var cI=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:d,children:p,...y},_){let T=hl(c,{relative:y.relative}),S=Ci(),L=W.useContext(Rc),{navigator:N,basename:F}=W.useContext(Hn),O=L!=null&&vI(T)&&d===!0,q=N.encodeLocation?N.encodeLocation(T).pathname:T.pathname,K=S.pathname,ee=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;t||(K=K.toLowerCase(),ee=ee?ee.toLowerCase():null,q=q.toLowerCase()),ee&&F&&(ee=Ei(ee,F)||ee);const oe=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let fe=K===q||!o&&K.startsWith(q)&&K.charAt(oe)==="/",me=ee!=null&&(ee===q||!o&&ee.startsWith(q)&&ee.charAt(q.length)==="/"),x={isActive:fe,isPending:me,isTransitioning:O},I=fe?e:void 0,R;typeof i=="function"?R=i(x):R=[i,fe?"active":null,me?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(x):l;return W.createElement(Ka,{...y,"aria-current":I,className:R,ref:_,style:P,to:c,viewTransition:d},typeof p=="function"?p(x):p)});cI.displayName="NavLink";var hI=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:c=Wu,action:d,onSubmit:p,relative:y,preventScrollReset:_,viewTransition:T,...S},L)=>{let N=gI(),F=yI(d,{relative:y}),O=c.toLowerCase()==="get"?"get":"post",q=typeof d=="string"&&Wv.test(d),K=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let oe=ee.nativeEvent.submitter,fe=(oe==null?void 0:oe.getAttribute("formmethod"))||c;N(oe||ee.currentTarget,{fetcherKey:e,method:fe,navigate:t,replace:o,state:l,relative:y,preventScrollReset:_,viewTransition:T})};return W.createElement("form",{ref:L,method:O,action:F,onSubmit:i?p:K,...S,"data-discover":!q&&n==="render"?"true":void 0})});hI.displayName="Form";function dI(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kv(n){let e=W.useContext(Oo);return Ye(e,dI(n)),e}function fI(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:c}={}){let d=Vf(),p=Ci(),y=hl(n,{relative:l});return W.useCallback(_=>{if(HT(_,e)){_.preventDefault();let T=t!==void 0?t:el(p)===el(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[p,d,y,t,i,e,n,o,l,c])}var pI=0,mI=()=>`__${String(++pI)}__`;function gI(){let{router:n}=Kv("useSubmit"),{basename:e}=W.useContext(Hn),t=DT();return W.useCallback(async(i,o={})=>{let{action:l,method:c,encType:d,formData:p,body:y}=KT(i,e);if(o.navigate===!1){let _=o.fetcherKey||mI();await n.fetch(_,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function yI(n,{relative:e}={}){let{basename:t}=W.useContext(Hn),i=W.useContext(dr);Ye(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...hl(n||".",{relative:e})},c=Ci();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let _=d.toString();l.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Vr([t,l.pathname])),el(l)}function vI(n,e={}){let t=W.useContext(Uv);Ye(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Kv("useViewTransitionState"),o=hl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ei(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Ei(t.nextLocation.pathname,i)||t.nextLocation.pathname;return oc(o.pathname,c)!=null||oc(o.pathname,l)!=null}new TextEncoder;const _I=()=>Q.jsxs("div",{className:"home-container",children:[Q.jsx("h1",{children:"Pilvipalvelut Web-Kehityksessä"}),Q.jsx("h1",{children:"DIG001AS3A-3003"}),Q.jsx("p",{children:"Kasper Nurmisen Harjoitustyö"})]});function Gv(n,e){return function(){return n.apply(e,arguments)}}const{toString:wI}=Object.prototype,{getPrototypeOf:Bf}=Object,Cc=(n=>e=>{const t=wI.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),qn=n=>(n=n.toLowerCase(),e=>Cc(e)===n),Pc=n=>e=>typeof e===n,{isArray:Lo}=Array,tl=Pc("undefined");function EI(n){return n!==null&&!tl(n)&&n.constructor!==null&&!tl(n.constructor)&&fn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Qv=qn("ArrayBuffer");function TI(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Qv(n.buffer),e}const II=Pc("string"),fn=Pc("function"),Jv=Pc("number"),kc=n=>n!==null&&typeof n=="object",SI=n=>n===!0||n===!1,Gu=n=>{if(Cc(n)!=="object")return!1;const e=Bf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},RI=qn("Date"),AI=qn("File"),CI=qn("Blob"),PI=qn("FileList"),kI=n=>kc(n)&&fn(n.pipe),xI=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||fn(n.append)&&((e=Cc(n))==="formdata"||e==="object"&&fn(n.toString)&&n.toString()==="[object FormData]"))},NI=qn("URLSearchParams"),[OI,DI,LI,bI]=["ReadableStream","Request","Response","Headers"].map(qn),VI=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function dl(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,o;if(typeof n!="object"&&(n=[n]),Lo(n))for(i=0,o=n.length;i<o;i++)e.call(null,n[i],i,n);else{const l=t?Object.getOwnPropertyNames(n):Object.keys(n),c=l.length;let d;for(i=0;i<c;i++)d=l[i],e.call(null,n[d],d,n)}}function Yv(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,o;for(;i-- >0;)if(o=t[i],e===o.toLowerCase())return o;return null}const is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Xv=n=>!tl(n)&&n!==is;function ef(){const{caseless:n}=Xv(this)&&this||{},e={},t=(i,o)=>{const l=n&&Yv(e,o)||o;Gu(e[l])&&Gu(i)?e[l]=ef(e[l],i):Gu(i)?e[l]=ef({},i):Lo(i)?e[l]=i.slice():e[l]=i};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&dl(arguments[i],t);return e}const MI=(n,e,t,{allOwnKeys:i}={})=>(dl(e,(o,l)=>{t&&fn(o)?n[l]=Gv(o,t):n[l]=o},{allOwnKeys:i}),n),FI=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),UI=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},jI=(n,e,t,i)=>{let o,l,c;const d={};if(e=e||{},n==null)return e;do{for(o=Object.getOwnPropertyNames(n),l=o.length;l-- >0;)c=o[l],(!i||i(c,n,e))&&!d[c]&&(e[c]=n[c],d[c]=!0);n=t!==!1&&Bf(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},BI=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},zI=n=>{if(!n)return null;if(Lo(n))return n;let e=n.length;if(!Jv(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},$I=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Bf(Uint8Array)),HI=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let o;for(;(o=i.next())&&!o.done;){const l=o.value;e.call(n,l[0],l[1])}},qI=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},WI=qn("HTMLFormElement"),KI=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,o){return i.toUpperCase()+o}),Gg=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),GI=qn("RegExp"),Zv=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};dl(t,(o,l)=>{let c;(c=e(o,l,n))!==!1&&(i[l]=c||o)}),Object.defineProperties(n,i)},QI=n=>{Zv(n,(e,t)=>{if(fn(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(fn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},JI=(n,e)=>{const t={},i=o=>{o.forEach(l=>{t[l]=!0})};return Lo(n)?i(n):i(String(n).split(e)),t},YI=()=>{},XI=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e,Dd="abcdefghijklmnopqrstuvwxyz",Qg="0123456789",e_={DIGIT:Qg,ALPHA:Dd,ALPHA_DIGIT:Dd+Dd.toUpperCase()+Qg},ZI=(n=16,e=e_.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function eS(n){return!!(n&&fn(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const tS=n=>{const e=new Array(10),t=(i,o)=>{if(kc(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[o]=i;const l=Lo(i)?[]:{};return dl(i,(c,d)=>{const p=t(c,o+1);!tl(p)&&(l[d]=p)}),e[o]=void 0,l}}return i};return t(n,0)},nS=qn("AsyncFunction"),rS=n=>n&&(kc(n)||fn(n))&&fn(n.then)&&fn(n.catch),t_=((n,e)=>n?setImmediate:e?((t,i)=>(is.addEventListener("message",({source:o,data:l})=>{o===is&&l===t&&i.length&&i.shift()()},!1),o=>{i.push(o),is.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",fn(is.postMessage)),iS=typeof queueMicrotask<"u"?queueMicrotask.bind(is):typeof process<"u"&&process.nextTick||t_,H={isArray:Lo,isArrayBuffer:Qv,isBuffer:EI,isFormData:xI,isArrayBufferView:TI,isString:II,isNumber:Jv,isBoolean:SI,isObject:kc,isPlainObject:Gu,isReadableStream:OI,isRequest:DI,isResponse:LI,isHeaders:bI,isUndefined:tl,isDate:RI,isFile:AI,isBlob:CI,isRegExp:GI,isFunction:fn,isStream:kI,isURLSearchParams:NI,isTypedArray:$I,isFileList:PI,forEach:dl,merge:ef,extend:MI,trim:VI,stripBOM:FI,inherits:UI,toFlatObject:jI,kindOf:Cc,kindOfTest:qn,endsWith:BI,toArray:zI,forEachEntry:HI,matchAll:qI,isHTMLForm:WI,hasOwnProperty:Gg,hasOwnProp:Gg,reduceDescriptors:Zv,freezeMethods:QI,toObjectSet:JI,toCamelCase:KI,noop:YI,toFiniteNumber:XI,findKey:Yv,global:is,isContextDefined:Xv,ALPHABET:e_,generateString:ZI,isSpecCompliantForm:eS,toJSONObject:tS,isAsyncFn:nS,isThenable:rS,setImmediate:t_,asap:iS};function Se(n,e,t,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),o&&(this.response=o,this.status=o.status?o.status:null)}H.inherits(Se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const n_=Se.prototype,r_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{r_[n]={value:n}});Object.defineProperties(Se,r_);Object.defineProperty(n_,"isAxiosError",{value:!0});Se.from=(n,e,t,i,o,l)=>{const c=Object.create(n_);return H.toFlatObject(n,c,function(p){return p!==Error.prototype},d=>d!=="isAxiosError"),Se.call(c,n.message,e,t,i,o),c.cause=n,c.name=n.name,l&&Object.assign(c,l),c};const sS=null;function tf(n){return H.isPlainObject(n)||H.isArray(n)}function i_(n){return H.endsWith(n,"[]")?n.slice(0,-2):n}function Jg(n,e,t){return n?n.concat(e).map(function(o,l){return o=i_(o),!t&&l?"["+o+"]":o}).join(t?".":""):e}function oS(n){return H.isArray(n)&&!n.some(tf)}const aS=H.toFlatObject(H,{},null,function(e){return/^is[A-Z]/.test(e)});function xc(n,e,t){if(!H.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=H.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(F,O){return!H.isUndefined(O[F])});const i=t.metaTokens,o=t.visitor||_,l=t.dots,c=t.indexes,p=(t.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(e);if(!H.isFunction(o))throw new TypeError("visitor must be a function");function y(N){if(N===null)return"";if(H.isDate(N))return N.toISOString();if(!p&&H.isBlob(N))throw new Se("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(N)||H.isTypedArray(N)?p&&typeof Blob=="function"?new Blob([N]):Buffer.from(N):N}function _(N,F,O){let q=N;if(N&&!O&&typeof N=="object"){if(H.endsWith(F,"{}"))F=i?F:F.slice(0,-2),N=JSON.stringify(N);else if(H.isArray(N)&&oS(N)||(H.isFileList(N)||H.endsWith(F,"[]"))&&(q=H.toArray(N)))return F=i_(F),q.forEach(function(ee,oe){!(H.isUndefined(ee)||ee===null)&&e.append(c===!0?Jg([F],oe,l):c===null?F:F+"[]",y(ee))}),!1}return tf(N)?!0:(e.append(Jg(O,F,l),y(N)),!1)}const T=[],S=Object.assign(aS,{defaultVisitor:_,convertValue:y,isVisitable:tf});function L(N,F){if(!H.isUndefined(N)){if(T.indexOf(N)!==-1)throw Error("Circular reference detected in "+F.join("."));T.push(N),H.forEach(N,function(q,K){(!(H.isUndefined(q)||q===null)&&o.call(e,q,H.isString(K)?K.trim():K,F,S))===!0&&L(q,F?F.concat(K):[K])}),T.pop()}}if(!H.isObject(n))throw new TypeError("data must be an object");return L(n),e}function Yg(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function zf(n,e){this._pairs=[],n&&xc(n,this,e)}const s_=zf.prototype;s_.append=function(e,t){this._pairs.push([e,t])};s_.toString=function(e){const t=e?function(i){return e.call(this,i,Yg)}:Yg;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function lS(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function o_(n,e,t){if(!e)return n;const i=t&&t.encode||lS;H.isFunction(t)&&(t={serialize:t});const o=t&&t.serialize;let l;if(o?l=o(e,t):l=H.isURLSearchParams(e)?e.toString():new zf(e,t).toString(i),l){const c=n.indexOf("#");c!==-1&&(n=n.slice(0,c)),n+=(n.indexOf("?")===-1?"?":"&")+l}return n}class Xg{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,function(i){i!==null&&e(i)})}}const a_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},uS=typeof URLSearchParams<"u"?URLSearchParams:zf,cS=typeof FormData<"u"?FormData:null,hS=typeof Blob<"u"?Blob:null,dS={isBrowser:!0,classes:{URLSearchParams:uS,FormData:cS,Blob:hS},protocols:["http","https","file","blob","url","data"]},$f=typeof window<"u"&&typeof document<"u",nf=typeof navigator=="object"&&navigator||void 0,fS=$f&&(!nf||["ReactNative","NativeScript","NS"].indexOf(nf.product)<0),pS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mS=$f&&window.location.href||"http://localhost",gS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$f,hasStandardBrowserEnv:fS,hasStandardBrowserWebWorkerEnv:pS,navigator:nf,origin:mS},Symbol.toStringTag,{value:"Module"})),jt={...gS,...dS};function yS(n,e){return xc(n,new jt.classes.URLSearchParams,Object.assign({visitor:function(t,i,o,l){return jt.isNode&&H.isBuffer(t)?(this.append(i,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},e))}function vS(n){return H.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function _S(n){const e={},t=Object.keys(n);let i;const o=t.length;let l;for(i=0;i<o;i++)l=t[i],e[l]=n[l];return e}function l_(n){function e(t,i,o,l){let c=t[l++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),p=l>=t.length;return c=!c&&H.isArray(o)?o.length:c,p?(H.hasOwnProp(o,c)?o[c]=[o[c],i]:o[c]=i,!d):((!o[c]||!H.isObject(o[c]))&&(o[c]=[]),e(t,i,o[c],l)&&H.isArray(o[c])&&(o[c]=_S(o[c])),!d)}if(H.isFormData(n)&&H.isFunction(n.entries)){const t={};return H.forEachEntry(n,(i,o)=>{e(vS(i),o,t,0)}),t}return null}function wS(n,e,t){if(H.isString(n))try{return(e||JSON.parse)(n),H.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(0,JSON.stringify)(n)}const fl={transitional:a_,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",o=i.indexOf("application/json")>-1,l=H.isObject(e);if(l&&H.isHTMLForm(e)&&(e=new FormData(e)),H.isFormData(e))return o?JSON.stringify(l_(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return yS(e,this.formSerializer).toString();if((d=H.isFileList(e))||i.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return xc(d?{"files[]":e}:e,p&&new p,this.formSerializer)}}return l||o?(t.setContentType("application/json",!1),wS(e)):e}],transformResponse:[function(e){const t=this.transitional||fl.transitional,i=t&&t.forcedJSONParsing,o=this.responseType==="json";if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(i&&!this.responseType||o)){const c=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(d){if(c)throw d.name==="SyntaxError"?Se.from(d,Se.ERR_BAD_RESPONSE,this,null,this.response):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],n=>{fl.headers[n]={}});const ES=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),TS=n=>{const e={};let t,i,o;return n&&n.split(`
`).forEach(function(c){o=c.indexOf(":"),t=c.substring(0,o).trim().toLowerCase(),i=c.substring(o+1).trim(),!(!t||e[t]&&ES[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},Zg=Symbol("internals");function ja(n){return n&&String(n).trim().toLowerCase()}function Qu(n){return n===!1||n==null?n:H.isArray(n)?n.map(Qu):String(n)}function IS(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const SS=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Ld(n,e,t,i,o){if(H.isFunction(i))return i.call(this,e,t);if(o&&(e=t),!!H.isString(e)){if(H.isString(i))return e.indexOf(i)!==-1;if(H.isRegExp(i))return i.test(e)}}function RS(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function AS(n,e){const t=H.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(o,l,c){return this[i].call(this,e,o,l,c)},configurable:!0})})}class nn{constructor(e){e&&this.set(e)}set(e,t,i){const o=this;function l(d,p,y){const _=ja(p);if(!_)throw new Error("header name must be a non-empty string");const T=H.findKey(o,_);(!T||o[T]===void 0||y===!0||y===void 0&&o[T]!==!1)&&(o[T||p]=Qu(d))}const c=(d,p)=>H.forEach(d,(y,_)=>l(y,_,p));if(H.isPlainObject(e)||e instanceof this.constructor)c(e,t);else if(H.isString(e)&&(e=e.trim())&&!SS(e))c(TS(e),t);else if(H.isHeaders(e))for(const[d,p]of e.entries())l(p,d,i);else e!=null&&l(t,e,i);return this}get(e,t){if(e=ja(e),e){const i=H.findKey(this,e);if(i){const o=this[i];if(!t)return o;if(t===!0)return IS(o);if(H.isFunction(t))return t.call(this,o,i);if(H.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ja(e),e){const i=H.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Ld(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let o=!1;function l(c){if(c=ja(c),c){const d=H.findKey(i,c);d&&(!t||Ld(i,i[d],d,t))&&(delete i[d],o=!0)}}return H.isArray(e)?e.forEach(l):l(e),o}clear(e){const t=Object.keys(this);let i=t.length,o=!1;for(;i--;){const l=t[i];(!e||Ld(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const t=this,i={};return H.forEach(this,(o,l)=>{const c=H.findKey(i,l);if(c){t[c]=Qu(o),delete t[l];return}const d=e?RS(l):String(l).trim();d!==l&&delete t[l],t[d]=Qu(o),i[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return H.forEach(this,(i,o)=>{i!=null&&i!==!1&&(t[o]=e&&H.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(o=>i.set(o)),i}static accessor(e){const i=(this[Zg]=this[Zg]={accessors:{}}).accessors,o=this.prototype;function l(c){const d=ja(c);i[d]||(AS(o,c),i[d]=!0)}return H.isArray(e)?e.forEach(l):l(e),this}}nn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(nn.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});H.freezeMethods(nn);function bd(n,e){const t=this||fl,i=e||t,o=nn.from(i.headers);let l=i.data;return H.forEach(n,function(d){l=d.call(t,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function u_(n){return!!(n&&n.__CANCEL__)}function bo(n,e,t){Se.call(this,n??"canceled",Se.ERR_CANCELED,e,t),this.name="CanceledError"}H.inherits(bo,Se,{__CANCEL__:!0});function c_(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Se("Request failed with status code "+t.status,[Se.ERR_BAD_REQUEST,Se.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function CS(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function PS(n,e){n=n||10;const t=new Array(n),i=new Array(n);let o=0,l=0,c;return e=e!==void 0?e:1e3,function(p){const y=Date.now(),_=i[l];c||(c=y),t[o]=p,i[o]=y;let T=l,S=0;for(;T!==o;)S+=t[T++],T=T%n;if(o=(o+1)%n,o===l&&(l=(l+1)%n),y-c<e)return;const L=_&&y-_;return L?Math.round(S*1e3/L):void 0}}function kS(n,e){let t=0,i=1e3/e,o,l;const c=(y,_=Date.now())=>{t=_,o=null,l&&(clearTimeout(l),l=null),n.apply(null,y)};return[(...y)=>{const _=Date.now(),T=_-t;T>=i?c(y,_):(o=y,l||(l=setTimeout(()=>{l=null,c(o)},i-T)))},()=>o&&c(o)]}const ac=(n,e,t=3)=>{let i=0;const o=PS(50,250);return kS(l=>{const c=l.loaded,d=l.lengthComputable?l.total:void 0,p=c-i,y=o(p),_=c<=d;i=c;const T={loaded:c,total:d,progress:d?c/d:void 0,bytes:p,rate:y||void 0,estimated:y&&d&&_?(d-c)/y:void 0,event:l,lengthComputable:d!=null,[e?"download":"upload"]:!0};n(T)},t)},ey=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},ty=n=>(...e)=>H.asap(()=>n(...e)),xS=jt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,jt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,NS=jt.hasStandardBrowserEnv?{write(n,e,t,i,o,l){const c=[n+"="+encodeURIComponent(e)];H.isNumber(t)&&c.push("expires="+new Date(t).toGMTString()),H.isString(i)&&c.push("path="+i),H.isString(o)&&c.push("domain="+o),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function OS(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function DS(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function h_(n,e){return n&&!OS(e)?DS(n,e):e}const ny=n=>n instanceof nn?{...n}:n;function hs(n,e){e=e||{};const t={};function i(y,_,T,S){return H.isPlainObject(y)&&H.isPlainObject(_)?H.merge.call({caseless:S},y,_):H.isPlainObject(_)?H.merge({},_):H.isArray(_)?_.slice():_}function o(y,_,T,S){if(H.isUndefined(_)){if(!H.isUndefined(y))return i(void 0,y,T,S)}else return i(y,_,T,S)}function l(y,_){if(!H.isUndefined(_))return i(void 0,_)}function c(y,_){if(H.isUndefined(_)){if(!H.isUndefined(y))return i(void 0,y)}else return i(void 0,_)}function d(y,_,T){if(T in e)return i(y,_);if(T in n)return i(void 0,y)}const p={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:d,headers:(y,_,T)=>o(ny(y),ny(_),T,!0)};return H.forEach(Object.keys(Object.assign({},n,e)),function(_){const T=p[_]||o,S=T(n[_],e[_],_);H.isUndefined(S)&&T!==d||(t[_]=S)}),t}const d_=n=>{const e=hs({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:l,headers:c,auth:d}=e;e.headers=c=nn.from(c),e.url=o_(h_(e.baseURL,e.url),n.params,n.paramsSerializer),d&&c.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let p;if(H.isFormData(t)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((p=c.getContentType())!==!1){const[y,..._]=p?p.split(";").map(T=>T.trim()).filter(Boolean):[];c.setContentType([y||"multipart/form-data",..._].join("; "))}}if(jt.hasStandardBrowserEnv&&(i&&H.isFunction(i)&&(i=i(e)),i||i!==!1&&xS(e.url))){const y=o&&l&&NS.read(l);y&&c.set(o,y)}return e},LS=typeof XMLHttpRequest<"u",bS=LS&&function(n){return new Promise(function(t,i){const o=d_(n);let l=o.data;const c=nn.from(o.headers).normalize();let{responseType:d,onUploadProgress:p,onDownloadProgress:y}=o,_,T,S,L,N;function F(){L&&L(),N&&N(),o.cancelToken&&o.cancelToken.unsubscribe(_),o.signal&&o.signal.removeEventListener("abort",_)}let O=new XMLHttpRequest;O.open(o.method.toUpperCase(),o.url,!0),O.timeout=o.timeout;function q(){if(!O)return;const ee=nn.from("getAllResponseHeaders"in O&&O.getAllResponseHeaders()),fe={data:!d||d==="text"||d==="json"?O.responseText:O.response,status:O.status,statusText:O.statusText,headers:ee,config:n,request:O};c_(function(x){t(x),F()},function(x){i(x),F()},fe),O=null}"onloadend"in O?O.onloadend=q:O.onreadystatechange=function(){!O||O.readyState!==4||O.status===0&&!(O.responseURL&&O.responseURL.indexOf("file:")===0)||setTimeout(q)},O.onabort=function(){O&&(i(new Se("Request aborted",Se.ECONNABORTED,n,O)),O=null)},O.onerror=function(){i(new Se("Network Error",Se.ERR_NETWORK,n,O)),O=null},O.ontimeout=function(){let oe=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const fe=o.transitional||a_;o.timeoutErrorMessage&&(oe=o.timeoutErrorMessage),i(new Se(oe,fe.clarifyTimeoutError?Se.ETIMEDOUT:Se.ECONNABORTED,n,O)),O=null},l===void 0&&c.setContentType(null),"setRequestHeader"in O&&H.forEach(c.toJSON(),function(oe,fe){O.setRequestHeader(fe,oe)}),H.isUndefined(o.withCredentials)||(O.withCredentials=!!o.withCredentials),d&&d!=="json"&&(O.responseType=o.responseType),y&&([S,N]=ac(y,!0),O.addEventListener("progress",S)),p&&O.upload&&([T,L]=ac(p),O.upload.addEventListener("progress",T),O.upload.addEventListener("loadend",L)),(o.cancelToken||o.signal)&&(_=ee=>{O&&(i(!ee||ee.type?new bo(null,n,O):ee),O.abort(),O=null)},o.cancelToken&&o.cancelToken.subscribe(_),o.signal&&(o.signal.aborted?_():o.signal.addEventListener("abort",_)));const K=CS(o.url);if(K&&jt.protocols.indexOf(K)===-1){i(new Se("Unsupported protocol "+K+":",Se.ERR_BAD_REQUEST,n));return}O.send(l||null)})},VS=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,o;const l=function(y){if(!o){o=!0,d();const _=y instanceof Error?y:this.reason;i.abort(_ instanceof Se?_:new bo(_ instanceof Error?_.message:_))}};let c=e&&setTimeout(()=>{c=null,l(new Se(`timeout ${e} of ms exceeded`,Se.ETIMEDOUT))},e);const d=()=>{n&&(c&&clearTimeout(c),c=null,n.forEach(y=>{y.unsubscribe?y.unsubscribe(l):y.removeEventListener("abort",l)}),n=null)};n.forEach(y=>y.addEventListener("abort",l));const{signal:p}=i;return p.unsubscribe=()=>H.asap(d),p}},MS=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,o;for(;i<t;)o=i+e,yield n.slice(i,o),i=o},FS=async function*(n,e){for await(const t of US(n))yield*MS(t,e)},US=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},ry=(n,e,t,i)=>{const o=FS(n,e);let l=0,c,d=p=>{c||(c=!0,i&&i(p))};return new ReadableStream({async pull(p){try{const{done:y,value:_}=await o.next();if(y){d(),p.close();return}let T=_.byteLength;if(t){let S=l+=T;t(S)}p.enqueue(new Uint8Array(_))}catch(y){throw d(y),y}},cancel(p){return d(p),o.return()}},{highWaterMark:2})},Nc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",f_=Nc&&typeof ReadableStream=="function",jS=Nc&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),p_=(n,...e)=>{try{return!!n(...e)}catch{return!1}},BS=f_&&p_(()=>{let n=!1;const e=new Request(jt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),iy=64*1024,rf=f_&&p_(()=>H.isReadableStream(new Response("").body)),lc={stream:rf&&(n=>n.body)};Nc&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!lc[e]&&(lc[e]=H.isFunction(n[e])?t=>t[e]():(t,i)=>{throw new Se(`Response type '${e}' is not supported`,Se.ERR_NOT_SUPPORT,i)})})})(new Response);const zS=async n=>{if(n==null)return 0;if(H.isBlob(n))return n.size;if(H.isSpecCompliantForm(n))return(await new Request(jt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(H.isArrayBufferView(n)||H.isArrayBuffer(n))return n.byteLength;if(H.isURLSearchParams(n)&&(n=n+""),H.isString(n))return(await jS(n)).byteLength},$S=async(n,e)=>{const t=H.toFiniteNumber(n.getContentLength());return t??zS(e)},HS=Nc&&(async n=>{let{url:e,method:t,data:i,signal:o,cancelToken:l,timeout:c,onDownloadProgress:d,onUploadProgress:p,responseType:y,headers:_,withCredentials:T="same-origin",fetchOptions:S}=d_(n);y=y?(y+"").toLowerCase():"text";let L=VS([o,l&&l.toAbortSignal()],c),N;const F=L&&L.unsubscribe&&(()=>{L.unsubscribe()});let O;try{if(p&&BS&&t!=="get"&&t!=="head"&&(O=await $S(_,i))!==0){let fe=new Request(e,{method:"POST",body:i,duplex:"half"}),me;if(H.isFormData(i)&&(me=fe.headers.get("content-type"))&&_.setContentType(me),fe.body){const[x,I]=ey(O,ac(ty(p)));i=ry(fe.body,iy,x,I)}}H.isString(T)||(T=T?"include":"omit");const q="credentials"in Request.prototype;N=new Request(e,{...S,signal:L,method:t.toUpperCase(),headers:_.normalize().toJSON(),body:i,duplex:"half",credentials:q?T:void 0});let K=await fetch(N);const ee=rf&&(y==="stream"||y==="response");if(rf&&(d||ee&&F)){const fe={};["status","statusText","headers"].forEach(R=>{fe[R]=K[R]});const me=H.toFiniteNumber(K.headers.get("content-length")),[x,I]=d&&ey(me,ac(ty(d),!0))||[];K=new Response(ry(K.body,iy,x,()=>{I&&I(),F&&F()}),fe)}y=y||"text";let oe=await lc[H.findKey(lc,y)||"text"](K,n);return!ee&&F&&F(),await new Promise((fe,me)=>{c_(fe,me,{data:oe,headers:nn.from(K.headers),status:K.status,statusText:K.statusText,config:n,request:N})})}catch(q){throw F&&F(),q&&q.name==="TypeError"&&/fetch/i.test(q.message)?Object.assign(new Se("Network Error",Se.ERR_NETWORK,n,N),{cause:q.cause||q}):Se.from(q,q&&q.code,n,N)}}),sf={http:sS,xhr:bS,fetch:HS};H.forEach(sf,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const sy=n=>`- ${n}`,qS=n=>H.isFunction(n)||n===null||n===!1,m_={getAdapter:n=>{n=H.isArray(n)?n:[n];const{length:e}=n;let t,i;const o={};for(let l=0;l<e;l++){t=n[l];let c;if(i=t,!qS(t)&&(i=sf[(c=String(t)).toLowerCase()],i===void 0))throw new Se(`Unknown adapter '${c}'`);if(i)break;o[c||"#"+l]=i}if(!i){const l=Object.entries(o).map(([d,p])=>`adapter ${d} `+(p===!1?"is not supported by the environment":"is not available in the build"));let c=e?l.length>1?`since :
`+l.map(sy).join(`
`):" "+sy(l[0]):"as no adapter specified";throw new Se("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return i},adapters:sf};function Vd(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new bo(null,n)}function oy(n){return Vd(n),n.headers=nn.from(n.headers),n.data=bd.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),m_.getAdapter(n.adapter||fl.adapter)(n).then(function(i){return Vd(n),i.data=bd.call(n,n.transformResponse,i),i.headers=nn.from(i.headers),i},function(i){return u_(i)||(Vd(n),i&&i.response&&(i.response.data=bd.call(n,n.transformResponse,i.response),i.response.headers=nn.from(i.response.headers))),Promise.reject(i)})}const g_="1.7.9",Oc={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Oc[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const ay={};Oc.transitional=function(e,t,i){function o(l,c){return"[Axios v"+g_+"] Transitional option '"+l+"'"+c+(i?". "+i:"")}return(l,c,d)=>{if(e===!1)throw new Se(o(c," has been removed"+(t?" in "+t:"")),Se.ERR_DEPRECATED);return t&&!ay[c]&&(ay[c]=!0,console.warn(o(c," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,c,d):!0}};Oc.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function WS(n,e,t){if(typeof n!="object")throw new Se("options must be an object",Se.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let o=i.length;for(;o-- >0;){const l=i[o],c=e[l];if(c){const d=n[l],p=d===void 0||c(d,l,n);if(p!==!0)throw new Se("option "+l+" must be "+p,Se.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Se("Unknown option "+l,Se.ERR_BAD_OPTION)}}const Ju={assertOptions:WS,validators:Oc},ir=Ju.validators;class as{constructor(e){this.defaults=e,this.interceptors={request:new Xg,response:new Xg}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{i.stack?l&&!String(i.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+l):i.stack=l}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=hs(this.defaults,t);const{transitional:i,paramsSerializer:o,headers:l}=t;i!==void 0&&Ju.assertOptions(i,{silentJSONParsing:ir.transitional(ir.boolean),forcedJSONParsing:ir.transitional(ir.boolean),clarifyTimeoutError:ir.transitional(ir.boolean)},!1),o!=null&&(H.isFunction(o)?t.paramsSerializer={serialize:o}:Ju.assertOptions(o,{encode:ir.function,serialize:ir.function},!0)),Ju.assertOptions(t,{baseUrl:ir.spelling("baseURL"),withXsrfToken:ir.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let c=l&&H.merge(l.common,l[t.method]);l&&H.forEach(["delete","get","head","post","put","patch","common"],N=>{delete l[N]}),t.headers=nn.concat(c,l);const d=[];let p=!0;this.interceptors.request.forEach(function(F){typeof F.runWhen=="function"&&F.runWhen(t)===!1||(p=p&&F.synchronous,d.unshift(F.fulfilled,F.rejected))});const y=[];this.interceptors.response.forEach(function(F){y.push(F.fulfilled,F.rejected)});let _,T=0,S;if(!p){const N=[oy.bind(this),void 0];for(N.unshift.apply(N,d),N.push.apply(N,y),S=N.length,_=Promise.resolve(t);T<S;)_=_.then(N[T++],N[T++]);return _}S=d.length;let L=t;for(T=0;T<S;){const N=d[T++],F=d[T++];try{L=N(L)}catch(O){F.call(this,O);break}}try{_=oy.call(this,L)}catch(N){return Promise.reject(N)}for(T=0,S=y.length;T<S;)_=_.then(y[T++],y[T++]);return _}getUri(e){e=hs(this.defaults,e);const t=h_(e.baseURL,e.url);return o_(t,e.params,e.paramsSerializer)}}H.forEach(["delete","get","head","options"],function(e){as.prototype[e]=function(t,i){return this.request(hs(i||{},{method:e,url:t,data:(i||{}).data}))}});H.forEach(["post","put","patch"],function(e){function t(i){return function(l,c,d){return this.request(hs(d||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}as.prototype[e]=t(),as.prototype[e+"Form"]=t(!0)});class Hf{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const i=this;this.promise.then(o=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](o);i._listeners=null}),this.promise.then=o=>{let l;const c=new Promise(d=>{i.subscribe(d),l=d}).then(o);return c.cancel=function(){i.unsubscribe(l)},c},e(function(l,c,d){i.reason||(i.reason=new bo(l,c,d),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Hf(function(o){e=o}),cancel:e}}}function KS(n){return function(t){return n.apply(null,t)}}function GS(n){return H.isObject(n)&&n.isAxiosError===!0}const of={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(of).forEach(([n,e])=>{of[e]=n});function y_(n){const e=new as(n),t=Gv(as.prototype.request,e);return H.extend(t,as.prototype,e,{allOwnKeys:!0}),H.extend(t,e,null,{allOwnKeys:!0}),t.create=function(o){return y_(hs(n,o))},t}const ht=y_(fl);ht.Axios=as;ht.CanceledError=bo;ht.CancelToken=Hf;ht.isCancel=u_;ht.VERSION=g_;ht.toFormData=xc;ht.AxiosError=Se;ht.Cancel=ht.CanceledError;ht.all=function(e){return Promise.all(e)};ht.spread=KS;ht.isAxiosError=GS;ht.mergeConfig=hs;ht.AxiosHeaders=nn;ht.formToJSON=n=>l_(H.isHTMLForm(n)?new FormData(n):n);ht.getAdapter=m_.getAdapter;ht.HttpStatusCode=of;ht.default=ht;var ly={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},QS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},__={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|y>>6,L=y&63;p||(L=64,c||(S=64)),i.push(t[_],t[T],t[S],t[L])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(v_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):QS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new JS;const S=l<<2|d>>4;if(i.push(S),y!==64){const L=d<<4&240|y>>2;if(i.push(L),T!==64){const N=y<<6&192|T;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class JS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YS=function(n){const e=v_(n);return __.encodeByteArray(e,!0)},uc=function(n){return YS(n).replace(/\./g,"")},w_=function(n){try{return __.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=()=>XS().__FIREBASE_DEFAULTS__,e1=()=>{if(typeof process>"u"||typeof ly>"u")return;const n=ly.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},t1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&w_(n[1]);return e&&JSON.parse(e)},Dc=()=>{try{return ZS()||e1()||t1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},E_=n=>{var e,t;return(t=(e=Dc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},n1=n=>{const e=E_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},T_=()=>{var n;return(n=Dc())===null||n===void 0?void 0:n.config},I_=n=>{var e;return(e=Dc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[uc(JSON.stringify(t)),uc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function o1(){var n;const e=(n=Dc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function a1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function S_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function l1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u1(){const n=Bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function c1(){return!o1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R_(){try{return typeof indexedDB=="object"}catch{return!1}}function A_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function h1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="FirebaseError";class Wn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=d1,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?f1(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Wn(o,d,i)}}function f1(n,e){return n.replace(p1,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const p1=/\{\$([^}]+)}/g;function m1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(uy(l)&&uy(c)){if(!nl(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function uy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function $a(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function g1(n,e){const t=new y1(n,e);return t.subscribe.bind(t)}class y1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");v1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Md),o.error===void 0&&(o.error=Md),o.complete===void 0&&(o.complete=Md);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Md(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=1e3,w1=2,E1=4*60*60*1e3,T1=.5;function cy(n,e=_1,t=w1){const i=e*Math.pow(t,n),o=Math.round(T1*i*(Math.random()-.5)*2);return Math.min(E1,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n){return n&&n._delegate?n._delegate:n}class zn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new r1;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R1(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:S1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S1(n){return n===rs?void 0:n}function R1(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new I1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const C1={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},P1=ke.INFO,k1={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},x1=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=k1[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=P1,this._logHandler=x1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const N1=(n,e)=>e.some(t=>n instanceof t);let hy,dy;function O1(){return hy||(hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D1(){return dy||(dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C_=new WeakMap,af=new WeakMap,P_=new WeakMap,Fd=new WeakMap,qf=new WeakMap;function L1(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(vi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&C_.set(t,n)}).catch(()=>{}),qf.set(e,n),e}function b1(n){if(af.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});af.set(n,e)}let lf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return af.get(n);if(e==="objectStoreNames")return n.objectStoreNames||P_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function V1(n){lf=n(lf)}function M1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ud(this),e,...t);return P_.set(i,e.sort?e.sort():[e]),vi(i)}:D1().includes(n)?function(...e){return n.apply(Ud(this),e),vi(C_.get(this))}:function(...e){return vi(n.apply(Ud(this),e))}}function F1(n){return typeof n=="function"?M1(n):(n instanceof IDBTransaction&&b1(n),N1(n,O1())?new Proxy(n,lf):n)}function vi(n){if(n instanceof IDBRequest)return L1(n);if(Fd.has(n))return Fd.get(n);const e=F1(n);return e!==n&&(Fd.set(n,e),qf.set(e,n)),e}const Ud=n=>qf.get(n);function k_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=vi(c);return i&&c.addEventListener("upgradeneeded",p=>{i(vi(c.result),p.oldVersion,p.newVersion,vi(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const U1=["get","getKey","getAll","getAllKeys","count"],j1=["put","add","delete","clear"],jd=new Map;function fy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jd.get(e))return jd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=j1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||U1.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return jd.set(e,l),l}V1(n=>({...n,get:(e,t,i)=>fy(e,t)||n.get(e,t,i),has:(e,t)=>!!fy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(z1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function z1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uf="@firebase/app",py="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Lc("@firebase/app"),$1="@firebase/app-compat",H1="@firebase/analytics-compat",q1="@firebase/analytics",W1="@firebase/app-check-compat",K1="@firebase/app-check",G1="@firebase/auth",Q1="@firebase/auth-compat",J1="@firebase/database",Y1="@firebase/data-connect",X1="@firebase/database-compat",Z1="@firebase/functions",eR="@firebase/functions-compat",tR="@firebase/installations",nR="@firebase/installations-compat",rR="@firebase/messaging",iR="@firebase/messaging-compat",sR="@firebase/performance",oR="@firebase/performance-compat",aR="@firebase/remote-config",lR="@firebase/remote-config-compat",uR="@firebase/storage",cR="@firebase/storage-compat",hR="@firebase/firestore",dR="@firebase/vertexai",fR="@firebase/firestore-compat",pR="firebase",mR="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="[DEFAULT]",gR={[uf]:"fire-core",[$1]:"fire-core-compat",[q1]:"fire-analytics",[H1]:"fire-analytics-compat",[K1]:"fire-app-check",[W1]:"fire-app-check-compat",[G1]:"fire-auth",[Q1]:"fire-auth-compat",[J1]:"fire-rtdb",[Y1]:"fire-data-connect",[X1]:"fire-rtdb-compat",[Z1]:"fire-fn",[eR]:"fire-fn-compat",[tR]:"fire-iid",[nR]:"fire-iid-compat",[rR]:"fire-fcm",[iR]:"fire-fcm-compat",[sR]:"fire-perf",[oR]:"fire-perf-compat",[aR]:"fire-rc",[lR]:"fire-rc-compat",[uR]:"fire-gcs",[cR]:"fire-gcs-compat",[hR]:"fire-fst",[fR]:"fire-fst-compat",[dR]:"fire-vertex","fire-js":"fire-js",[pR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map,yR=new Map,hf=new Map;function my(n,e){try{n.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(hf.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;hf.set(e,n);for(const t of cc.values())my(t,n);for(const t of yR.values())my(t,n);return!0}function ys(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Or(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new gs("app","Firebase",vR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=mR;function bc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:cf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=T_()),!t)throw _i.create("no-options");const l=cc.get(o);if(l){if(nl(t,l.options)&&nl(i,l.config))return l;throw _i.create("duplicate-app",{appName:o})}const c=new A1(o);for(const p of hf.values())c.addComponent(p);const d=new _R(t,i,c);return cc.set(o,d),d}function Wf(n=cf){const e=cc.get(n);if(!e&&n===cf&&T_())return bc();if(!e)throw _i.create("no-app",{appName:n});return e}function Rn(n,e,t){var i;let o=(i=gR[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(d.join(" "));return}ur(new zn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="firebase-heartbeat-database",ER=1,rl="firebase-heartbeat-store";let Bd=null;function x_(){return Bd||(Bd=k_(wR,ER,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rl)}catch(t){console.warn(t)}}}}).catch(n=>{throw _i.create("idb-open",{originalErrorMessage:n.message})})),Bd}async function TR(n){try{const t=(await x_()).transaction(rl),i=await t.objectStore(rl).get(N_(n));return await t.done,i}catch(e){if(e instanceof Wn)Mr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function gy(n,e){try{const i=(await x_()).transaction(rl,"readwrite");await i.objectStore(rl).put(e,N_(n)),await i.done}catch(t){if(t instanceof Wn)Mr.warn(t.message);else{const i=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(i.message)}}}function N_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=1024,SR=30*24*60*60*1e3;class RR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new CR(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=yy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=SR}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Mr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yy(),{heartbeatsToSend:i,unsentEntries:o}=AR(this._heartbeatsCache.heartbeats),l=uc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function yy(){return new Date().toISOString().substring(0,10)}function AR(n,e=IR){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),vy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),vy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class CR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return R_()?A_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await TR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return gy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return gy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function vy(n){return uc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(n){ur(new zn("platform-logger",e=>new B1(e),"PRIVATE")),ur(new zn("heartbeat",e=>new RR(e),"PRIVATE")),Rn(uf,py,n),Rn(uf,py,"esm2017"),Rn("fire-js","")}PR("");var _y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls,O_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function R(){}R.prototype=I.prototype,x.D=I.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(P,b,M){for(var C=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)C[rt-2]=arguments[rt];return I.prototype[b].apply(P,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,I,R){R||(R=0);var P=Array(16);if(typeof I=="string")for(var b=0;16>b;++b)P[b]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(b=0;16>b;++b)P[b]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=x.g[0],R=x.g[1],b=x.g[2];var M=x.g[3],C=I+(M^R&(b^M))+P[0]+3614090360&4294967295;I=R+(C<<7&4294967295|C>>>25),C=M+(b^I&(R^b))+P[1]+3905402710&4294967295,M=I+(C<<12&4294967295|C>>>20),C=b+(R^M&(I^R))+P[2]+606105819&4294967295,b=M+(C<<17&4294967295|C>>>15),C=R+(I^b&(M^I))+P[3]+3250441966&4294967295,R=b+(C<<22&4294967295|C>>>10),C=I+(M^R&(b^M))+P[4]+4118548399&4294967295,I=R+(C<<7&4294967295|C>>>25),C=M+(b^I&(R^b))+P[5]+1200080426&4294967295,M=I+(C<<12&4294967295|C>>>20),C=b+(R^M&(I^R))+P[6]+2821735955&4294967295,b=M+(C<<17&4294967295|C>>>15),C=R+(I^b&(M^I))+P[7]+4249261313&4294967295,R=b+(C<<22&4294967295|C>>>10),C=I+(M^R&(b^M))+P[8]+1770035416&4294967295,I=R+(C<<7&4294967295|C>>>25),C=M+(b^I&(R^b))+P[9]+2336552879&4294967295,M=I+(C<<12&4294967295|C>>>20),C=b+(R^M&(I^R))+P[10]+4294925233&4294967295,b=M+(C<<17&4294967295|C>>>15),C=R+(I^b&(M^I))+P[11]+2304563134&4294967295,R=b+(C<<22&4294967295|C>>>10),C=I+(M^R&(b^M))+P[12]+1804603682&4294967295,I=R+(C<<7&4294967295|C>>>25),C=M+(b^I&(R^b))+P[13]+4254626195&4294967295,M=I+(C<<12&4294967295|C>>>20),C=b+(R^M&(I^R))+P[14]+2792965006&4294967295,b=M+(C<<17&4294967295|C>>>15),C=R+(I^b&(M^I))+P[15]+1236535329&4294967295,R=b+(C<<22&4294967295|C>>>10),C=I+(b^M&(R^b))+P[1]+4129170786&4294967295,I=R+(C<<5&4294967295|C>>>27),C=M+(R^b&(I^R))+P[6]+3225465664&4294967295,M=I+(C<<9&4294967295|C>>>23),C=b+(I^R&(M^I))+P[11]+643717713&4294967295,b=M+(C<<14&4294967295|C>>>18),C=R+(M^I&(b^M))+P[0]+3921069994&4294967295,R=b+(C<<20&4294967295|C>>>12),C=I+(b^M&(R^b))+P[5]+3593408605&4294967295,I=R+(C<<5&4294967295|C>>>27),C=M+(R^b&(I^R))+P[10]+38016083&4294967295,M=I+(C<<9&4294967295|C>>>23),C=b+(I^R&(M^I))+P[15]+3634488961&4294967295,b=M+(C<<14&4294967295|C>>>18),C=R+(M^I&(b^M))+P[4]+3889429448&4294967295,R=b+(C<<20&4294967295|C>>>12),C=I+(b^M&(R^b))+P[9]+568446438&4294967295,I=R+(C<<5&4294967295|C>>>27),C=M+(R^b&(I^R))+P[14]+3275163606&4294967295,M=I+(C<<9&4294967295|C>>>23),C=b+(I^R&(M^I))+P[3]+4107603335&4294967295,b=M+(C<<14&4294967295|C>>>18),C=R+(M^I&(b^M))+P[8]+1163531501&4294967295,R=b+(C<<20&4294967295|C>>>12),C=I+(b^M&(R^b))+P[13]+2850285829&4294967295,I=R+(C<<5&4294967295|C>>>27),C=M+(R^b&(I^R))+P[2]+4243563512&4294967295,M=I+(C<<9&4294967295|C>>>23),C=b+(I^R&(M^I))+P[7]+1735328473&4294967295,b=M+(C<<14&4294967295|C>>>18),C=R+(M^I&(b^M))+P[12]+2368359562&4294967295,R=b+(C<<20&4294967295|C>>>12),C=I+(R^b^M)+P[5]+4294588738&4294967295,I=R+(C<<4&4294967295|C>>>28),C=M+(I^R^b)+P[8]+2272392833&4294967295,M=I+(C<<11&4294967295|C>>>21),C=b+(M^I^R)+P[11]+1839030562&4294967295,b=M+(C<<16&4294967295|C>>>16),C=R+(b^M^I)+P[14]+4259657740&4294967295,R=b+(C<<23&4294967295|C>>>9),C=I+(R^b^M)+P[1]+2763975236&4294967295,I=R+(C<<4&4294967295|C>>>28),C=M+(I^R^b)+P[4]+1272893353&4294967295,M=I+(C<<11&4294967295|C>>>21),C=b+(M^I^R)+P[7]+4139469664&4294967295,b=M+(C<<16&4294967295|C>>>16),C=R+(b^M^I)+P[10]+3200236656&4294967295,R=b+(C<<23&4294967295|C>>>9),C=I+(R^b^M)+P[13]+681279174&4294967295,I=R+(C<<4&4294967295|C>>>28),C=M+(I^R^b)+P[0]+3936430074&4294967295,M=I+(C<<11&4294967295|C>>>21),C=b+(M^I^R)+P[3]+3572445317&4294967295,b=M+(C<<16&4294967295|C>>>16),C=R+(b^M^I)+P[6]+76029189&4294967295,R=b+(C<<23&4294967295|C>>>9),C=I+(R^b^M)+P[9]+3654602809&4294967295,I=R+(C<<4&4294967295|C>>>28),C=M+(I^R^b)+P[12]+3873151461&4294967295,M=I+(C<<11&4294967295|C>>>21),C=b+(M^I^R)+P[15]+530742520&4294967295,b=M+(C<<16&4294967295|C>>>16),C=R+(b^M^I)+P[2]+3299628645&4294967295,R=b+(C<<23&4294967295|C>>>9),C=I+(b^(R|~M))+P[0]+4096336452&4294967295,I=R+(C<<6&4294967295|C>>>26),C=M+(R^(I|~b))+P[7]+1126891415&4294967295,M=I+(C<<10&4294967295|C>>>22),C=b+(I^(M|~R))+P[14]+2878612391&4294967295,b=M+(C<<15&4294967295|C>>>17),C=R+(M^(b|~I))+P[5]+4237533241&4294967295,R=b+(C<<21&4294967295|C>>>11),C=I+(b^(R|~M))+P[12]+1700485571&4294967295,I=R+(C<<6&4294967295|C>>>26),C=M+(R^(I|~b))+P[3]+2399980690&4294967295,M=I+(C<<10&4294967295|C>>>22),C=b+(I^(M|~R))+P[10]+4293915773&4294967295,b=M+(C<<15&4294967295|C>>>17),C=R+(M^(b|~I))+P[1]+2240044497&4294967295,R=b+(C<<21&4294967295|C>>>11),C=I+(b^(R|~M))+P[8]+1873313359&4294967295,I=R+(C<<6&4294967295|C>>>26),C=M+(R^(I|~b))+P[15]+4264355552&4294967295,M=I+(C<<10&4294967295|C>>>22),C=b+(I^(M|~R))+P[6]+2734768916&4294967295,b=M+(C<<15&4294967295|C>>>17),C=R+(M^(b|~I))+P[13]+1309151649&4294967295,R=b+(C<<21&4294967295|C>>>11),C=I+(b^(R|~M))+P[4]+4149444226&4294967295,I=R+(C<<6&4294967295|C>>>26),C=M+(R^(I|~b))+P[11]+3174756917&4294967295,M=I+(C<<10&4294967295|C>>>22),C=b+(I^(M|~R))+P[2]+718787259&4294967295,b=M+(C<<15&4294967295|C>>>17),C=R+(M^(b|~I))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(b+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+b&4294967295,x.g[3]=x.g[3]+M&4294967295}i.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var R=I-this.blockSize,P=this.B,b=this.h,M=0;M<I;){if(b==0)for(;M<=R;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<I;)if(P[b++]=x.charCodeAt(M++),b==this.blockSize){o(this,P),b=0;break}}else for(;M<I;)if(P[b++]=x[M++],b==this.blockSize){o(this,P),b=0;break}}this.h=b,this.o+=I},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var R=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=R&255,R/=256;for(this.u(x),x=Array(16),I=R=0;4>I;++I)for(var P=0;32>P;P+=8)x[R++]=this.g[I]>>>P&255;return x};function l(x,I){var R=d;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=I(x)}function c(x,I){this.h=I;for(var R=[],P=!0,b=x.length-1;0<=b;b--){var M=x[b]|0;P&&M==I||(R[b]=M,P=!1)}this.g=R}var d={};function p(x){return-128<=x&&128>x?l(x,function(I){return new c([I|0],0>I?-1:0)}):new c([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return O(y(-x));for(var I=[],R=1,P=0;x>=R;P++)I[P]=x/R|0,R*=4294967296;return new c(I,0)}function _(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return O(_(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(I,8)),P=T,b=0;b<x.length;b+=8){var M=Math.min(8,x.length-b),C=parseInt(x.substring(b,b+M),I);8>M?(M=y(Math.pow(I,M)),P=P.j(M).add(y(C))):(P=P.j(R),P=P.add(y(C)))}return P}var T=p(0),S=p(1),L=p(16777216);n=c.prototype,n.m=function(){if(F(this))return-O(this).m();for(var x=0,I=1,R=0;R<this.g.length;R++){var P=this.i(R);x+=(0<=P?P:4294967296+P)*I,I*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(N(this))return"0";if(F(this))return"-"+O(this).toString(x);for(var I=y(Math.pow(x,6)),R=this,P="";;){var b=oe(R,I).g;R=q(R,b.j(I));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=b,N(R))return M+P;for(;6>M.length;)M="0"+M;P=M+P}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function N(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function F(x){return x.h==-1}n.l=function(x){return x=q(this,x),F(x)?-1:N(x)?0:1};function O(x){for(var I=x.g.length,R=[],P=0;P<I;P++)R[P]=~x.g[P];return new c(R,~x.h).add(S)}n.abs=function(){return F(this)?O(this):this},n.add=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0,b=0;b<=I;b++){var M=P+(this.i(b)&65535)+(x.i(b)&65535),C=(M>>>16)+(this.i(b)>>>16)+(x.i(b)>>>16);P=C>>>16,M&=65535,C&=65535,R[b]=C<<16|M}return new c(R,R[R.length-1]&-2147483648?-1:0)};function q(x,I){return x.add(O(I))}n.j=function(x){if(N(this)||N(x))return T;if(F(this))return F(x)?O(this).j(O(x)):O(O(this).j(x));if(F(x))return O(this.j(O(x)));if(0>this.l(L)&&0>x.l(L))return y(this.m()*x.m());for(var I=this.g.length+x.g.length,R=[],P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var b=0;b<x.g.length;b++){var M=this.i(P)>>>16,C=this.i(P)&65535,rt=x.i(b)>>>16,Nt=x.i(b)&65535;R[2*P+2*b]+=C*Nt,K(R,2*P+2*b),R[2*P+2*b+1]+=M*Nt,K(R,2*P+2*b+1),R[2*P+2*b+1]+=C*rt,K(R,2*P+2*b+1),R[2*P+2*b+2]+=M*rt,K(R,2*P+2*b+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new c(R,0)};function K(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function ee(x,I){this.g=x,this.h=I}function oe(x,I){if(N(I))throw Error("division by zero");if(N(x))return new ee(T,T);if(F(x))return I=oe(O(x),I),new ee(O(I.g),O(I.h));if(F(I))return I=oe(x,O(I)),new ee(O(I.g),I.h);if(30<x.g.length){if(F(x)||F(I))throw Error("slowDivide_ only works with positive integers.");for(var R=S,P=I;0>=P.l(x);)R=fe(R),P=fe(P);var b=me(R,1),M=me(P,1);for(P=me(P,2),R=me(R,2);!N(P);){var C=M.add(P);0>=C.l(x)&&(b=b.add(R),M=C),P=me(P,1),R=me(R,1)}return I=q(x,b.j(I)),new ee(b,I)}for(b=T;0<=x.l(I);){for(R=Math.max(1,Math.floor(x.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),M=y(R),C=M.j(I);F(C)||0<C.l(x);)R-=P,M=y(R),C=M.j(I);N(M)&&(M=S),b=b.add(M),x=q(x,C)}return new ee(b,x)}n.A=function(x){return oe(this,x).h},n.and=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)&x.i(P);return new c(R,this.h&x.h)},n.or=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)|x.i(P);return new c(R,this.h|x.h)},n.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)^x.i(P);return new c(R,this.h^x.h)};function fe(x){for(var I=x.g.length+1,R=[],P=0;P<I;P++)R[P]=x.i(P)<<1|x.i(P-1)>>>31;return new c(R,x.h)}function me(x,I){var R=I>>5;I%=32;for(var P=x.g.length-R,b=[],M=0;M<P;M++)b[M]=0<I?x.i(M+R)>>>I|x.i(M+R+1)<<32-I:x.i(M+R);return new c(b,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,O_=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=_,ls=c}).apply(typeof _y<"u"?_y:typeof self<"u"?self:typeof window<"u"?window:{});var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D_,Ha,L_,Yu,df,b_,V_,M_;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uu=="object"&&Uu];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var U=u[E];if(!(U in v))break e;v=v[U]}u=u[u.length-1],E=v[u],m=m(E),m!=E&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,E=!1,U={next:function(){if(!E&&v<u.length){var $=v++;return{value:m($,u[$]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function T(u,m,v){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function S(u,m,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,S.apply(null,arguments)}function L(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var E=v.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function N(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(E,U,$){for(var ne=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)ne[Be-2]=arguments[Be];return m.prototype[U].apply(E,ne)}}function F(u){const m=u.length;if(0<m){const v=Array(m);for(let E=0;E<m;E++)v[E]=u[E];return v}return[]}function O(u,m){for(let v=1;v<arguments.length;v++){const E=arguments[v];if(p(E)){const U=u.length||0,$=E.length||0;u.length=U+$;for(let ne=0;ne<$;ne++)u[U+ne]=E[ne]}else u.push(E)}}class q{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function K(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function oe(u){return oe[" "](u),u}oe[" "]=function(){};var fe=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function me(u,m,v){for(const E in u)m.call(v,u[E],E,u)}function x(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function I(u){const m={};for(const v in u)m[v]=u[v];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,m){let v,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(v in E)u[v]=E[v];for(let $=0;$<R.length;$++)v=R[$],Object.prototype.hasOwnProperty.call(E,v)&&(u[v]=E[v])}}function b(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function M(u){d.setTimeout(()=>{throw u},0)}function C(){var u=ge;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class rt{constructor(){this.h=this.g=null}add(m,v){const E=Nt.get();E.set(m,v),this.h?this.h.next=E:this.g=E,this.h=E}}var Nt=new q(()=>new Ot,u=>u.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,re=!1,ge=new rt,ae=()=>{const u=d.Promise.resolve(void 0);ze=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){M(v)}var m=Nt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u}();function Ce(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(fe){e:{try{oe(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}N(Ce,pe);var Ne={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),je=0;function He(u,m,v,E,U){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!E,this.ha=U,this.key=++je,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,m,v,E,U){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var ne=jr(u,m,E,U);return-1<ne?(m=u[ne],v||(m.fa=!1)):(m=new He(m,this.src,$,!!E,U),m.fa=v,u.push(m)),m};function ws(u,m){var v=m.type;if(v in u.g){var E=u.g[v],U=Array.prototype.indexOf.call(E,m,void 0),$;($=0<=U)&&Array.prototype.splice.call(E,U,1),$&&(_t(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function jr(u,m,v,E){for(var U=0;U<u.length;++U){var $=u[U];if(!$.da&&$.listener==m&&$.capture==!!v&&$.ha==E)return U}return-1}var ki="closure_lm_"+(1e6*Math.random()|0),Es={};function $o(u,m,v,E,U){if(Array.isArray(m)){for(var $=0;$<m.length;$++)$o(u,m[$],v,E,U);return null}return v=Wo(v),u&&u[Ue]?u.K(m,v,y(E)?!!E.capture:!!E,U):Ho(u,m,v,!1,E,U)}function Ho(u,m,v,E,U,$){if(!m)throw Error("Invalid event type");var ne=y(U)?!!U.capture:!!U,Be=Is(u);if(Be||(u[ki]=Be=new pr(u)),v=Be.add(m,v,E,ne,$),v.proxy)return v;if(E=Tl(),v.proxy=E,E.src=u,E.listener=v,u.addEventListener)Ae||(U=ne),U===void 0&&(U=!1),u.addEventListener(m.toString(),E,U);else if(u.attachEvent)u.attachEvent(gr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Tl(){function u(v){return m.call(u.src,u.listener,v)}const m=qo;return u}function Ts(u,m,v,E,U){if(Array.isArray(m))for(var $=0;$<m.length;$++)Ts(u,m[$],v,E,U);else E=y(E)?!!E.capture:!!E,v=Wo(v),u&&u[Ue]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],v=jr($,v,E,U),-1<v&&(_t($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Is(u))&&(m=u.g[m.toString()],u=-1,m&&(u=jr(m,v,E,U)),(v=-1<u?m[u]:null)&&mr(v))}function mr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ue])ws(m.i,u);else{var v=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(v,E,u.capture):m.detachEvent?m.detachEvent(gr(v),E):m.addListener&&m.removeListener&&m.removeListener(E),(v=Is(m))?(ws(v,u),v.h==0&&(v.src=null,m[ki]=null)):_t(u)}}}function gr(u){return u in Es?Es[u]:Es[u]="on"+u}function qo(u,m){if(u.da)u=!0;else{m=new Ce(m,this);var v=u.listener,E=u.ha||u.src;u.fa&&mr(u),u=v.call(E,m)}return u}function Is(u){return u=u[ki],u instanceof pr?u:null}var Ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wo(u){return typeof u=="function"?u:(u[Ss]||(u[Ss]=function(m){return u.handleEvent(m)}),u[Ss])}function dt(){G.call(this),this.i=new pr(this),this.M=this,this.F=null}N(dt,G),dt.prototype[Ue]=!0,dt.prototype.removeEventListener=function(u,m,v,E){Ts(this,u,m,v,E)};function ft(u,m){var v,E=u.F;if(E)for(v=[];E;E=E.F)v.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var U=m;m=new pe(E,u),P(m,U)}if(U=!0,v)for(var $=v.length-1;0<=$;$--){var ne=m.g=v[$];U=yr(ne,E,!0,m)&&U}if(ne=m.g=u,U=yr(ne,E,!0,m)&&U,U=yr(ne,E,!1,m)&&U,v)for($=0;$<v.length;$++)ne=m.g=v[$],U=yr(ne,E,!1,m)&&U}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],E=0;E<v.length;E++)_t(v[E]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,v,E){return this.i.add(String(u),m,!1,v,E)},dt.prototype.L=function(u,m,v,E){return this.i.add(String(u),m,!0,v,E)};function yr(u,m,v,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,$=0;$<m.length;++$){var ne=m[$];if(ne&&!ne.da&&ne.capture==v){var Be=ne.listener,pt=ne.ha||ne.src;ne.fa&&ws(u.i,ne),U=Be.call(pt,E)!==!1&&U}}return U&&!E.defaultPrevented}function Ko(u,m,v){if(typeof u=="function")v&&(u=S(u,v));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Br(u){u.g=Ko(()=>{u.g=null,u.i&&(u.i=!1,Br(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class xi extends G{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Br(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(u){G.call(this),this.h=u,this.g={}}N(Ni,G);var Go=[];function Qo(u){me(u.g,function(m,v){this.g.hasOwnProperty(v)&&mr(m)},u),u.g={}}Ni.prototype.N=function(){Ni.aa.N.call(this),Qo(this)},Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=d.JSON.stringify,Yo=d.JSON.parse,Xo=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Oi(){}Oi.prototype.h=null;function Rs(u){return u.h||(u.h=u.i())}function As(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){pe.call(this,"d")}N(Kn,pe);function Cs(){pe.call(this,"c")}N(Cs,pe);var Gn={},Zo=null;function Di(){return Zo=Zo||new dt}Gn.La="serverreachability";function ea(u){pe.call(this,Gn.La,u)}N(ea,pe);function vr(u){const m=Di();ft(m,new ea(m))}Gn.STAT_EVENT="statevent";function ta(u,m){pe.call(this,Gn.STAT_EVENT,u),this.stat=m}N(ta,pe);function it(u){const m=Di();ft(m,new ta(m,u))}Gn.Ma="timingevent";function Ps(u,m){pe.call(this,Gn.Ma,u),this.size=m}N(Ps,pe);function An(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Li(){this.g=!0}Li.prototype.xa=function(){this.g=!1};function bi(u,m,v,E,U,$){u.info(function(){if(u.g)if($)for(var ne="",Be=$.split("&"),pt=0;pt<Be.length;pt++){var Oe=Be[pt].split("=");if(1<Oe.length){var wt=Oe[0];Oe=Oe[1];var lt=wt.split("_");ne=2<=lt.length&&lt[1]=="type"?ne+(wt+"="+Oe+"&"):ne+(wt+"=redacted&")}}else ne=null;else ne=$;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+m+`
`+v+`
`+ne})}function ks(u,m,v,E,U,$,ne){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+m+`
`+v+`
`+$+" "+ne})}function Cn(u,m,v,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+eh(u,v)+(E?" "+E:"")})}function na(u,m){u.info(function(){return"TIMEOUT: "+m})}Li.prototype.info=function(){};function eh(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var E=v[u];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var $=U[0];if($!="noop"&&$!="stop"&&$!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return Jo(v)}catch{return m}}var xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Il={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pn;function Vi(){}N(Vi,Oi),Vi.prototype.g=function(){return new XMLHttpRequest},Vi.prototype.i=function(){return{}},Pn=new Vi;function kn(u,m,v,E){this.j=u,this.i=m,this.l=v,this.R=E||1,this.U=new Ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sl}function Sl(){this.i=null,this.g="",this.h=!1}var ra={},Ns={};function Os(u,m,v){u.L=1,u.v=Wr(an(m)),u.m=v,u.P=!0,ia(u,null)}function ia(u,m){u.F=Date.now(),qe(u),u.A=an(u.v);var v=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Gr(v.i,"t",E),u.C=0,v=u.j.J,u.h=new Sl,u.g=zl(u.j,v?m:null,!u.m),0<u.O&&(u.M=new xi(S(u.Y,u,u.g),u.O)),m=u.U,v=u.g,E=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Go[0]=U.toString()),U=Go);for(var $=0;$<U.length;$++){var ne=$o(v,U[$],E||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),vr(),bi(u.i,u.u,u.A,u.l,u.R,u.m)}kn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Gt(u)==3?m.j():this.Y(u)},kn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Gt(this.g);var m=this.g.Ba();const vn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ca(this.g)))){this.J||lt!=4||m==7||(m==8||0>=vn?vr(3):vr(2)),Mi(this);var v=this.g.Z();this.X=v;t:if(Rl(this)){var E=ca(this.g);u="";var U=E.length,$=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),zr(this);var ne="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!($&&m==U-1)});E.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,ks(this.i,this.u,this.A,this.l,this.R,lt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,pt=this.g;if((Be=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Be)){var Oe=Be;break t}}Oe=null}if(v=Oe)Cn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sa(this,v);else{this.o=!1,this.s=3,it(12),gn(this),zr(this);break e}}if(this.P){v=!0;let un;for(;!this.J&&this.C<ne.length;)if(un=th(this,ne),un==Ns){lt==4&&(this.s=4,it(14),v=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(un==ra){this.s=4,it(15),Cn(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else Cn(this.i,this.l,un,null),sa(this,un);if(Rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||ne.length!=0||this.h.h||(this.s=1,it(16),v=!1),this.o=this.o&&v,!v)Cn(this.i,this.l,ne,"[Invalid Chunked Response]"),gn(this),zr(this);else if(0<ne.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),da(wt),wt.M=!0,it(11))}}else Cn(this.i,this.l,ne,null),sa(this,ne);lt==4&&gn(this),this.o&&!this.J&&(lt==4?$s(this.j,this):(this.o=!1,qe(this)))}else Fs(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),gn(this),zr(this)}}}catch{}finally{}};function Rl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function th(u,m){var v=u.C,E=m.indexOf(`
`,v);return E==-1?Ns:(v=Number(m.substring(v,E)),isNaN(v)?ra:(E+=1,E+v>m.length?Ns:(m=m.slice(E,E+v),u.C=E+v,m)))}kn.prototype.cancel=function(){this.J=!0,gn(this)};function qe(u){u.S=Date.now()+u.I,Al(u,u.I)}function Al(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(S(u.ba,u),m)}function Mi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}kn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(na(this.i,this.A),this.L!=2&&(vr(),it(17)),gn(this),this.s=2,zr(this)):Al(this,this.S-u)};function zr(u){u.j.G==0||u.J||$s(u.j,u)}function gn(u){Mi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Qo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function sa(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||zt(v.h,u))){if(!u.K&&zt(v.h,u)&&v.G==3){try{var E=v.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)zs(v),Ln(v);else break e;Bs(v),it(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=An(S(v.Za,v),6e3));if(1>=Pl(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ir(v,11)}else if((u.K||v.g==u)&&zs(v),!K(m))for(U=v.Da.g.parse(m),m=0;m<U.length;m++){let Oe=U[m];if(v.T=Oe[0],Oe=Oe[1],v.G==2)if(Oe[0]=="c"){v.K=Oe[1],v.ia=Oe[2];const wt=Oe[3];wt!=null&&(v.la=wt,v.j.info("VER="+v.la));const lt=Oe[4];lt!=null&&(v.Aa=lt,v.j.info("SVER="+v.Aa));const vn=Oe[5];vn!=null&&typeof vn=="number"&&0<vn&&(E=1.5*vn,v.L=E,v.j.info("backChannelRequestTimeoutMs_="+E)),E=v;const un=u.g;if(un){const Hi=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var $=E.h;$.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(oa($,$.h),$.h=null))}if(E.D){const qs=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(E.ya=qs,$e(E.I,E.D,qs))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),E=v;var ne=u;if(E.qa=Bl(E,E.J?E.ia:null,E.W),ne.K){kl(E.h,ne);var Be=ne,pt=E.L;pt&&(Be.I=pt),Be.B&&(Mi(Be),qe(Be)),E.g=ne}else $i(E);0<v.i.length&&Xn(v)}else Oe[0]!="stop"&&Oe[0]!="close"||Ir(v,7);else v.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Ir(v,7):At(v):Oe[0]!="noop"&&v.l&&v.l.ta(Oe),v.v=0)}}vr(4)}catch{}}var Cl=class{constructor(u,m){this.g=u,this.map=m}};function Fi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function on(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Pl(u){return u.h?1:u.g?u.g.size:0}function zt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function oa(u,m){u.g?u.g.add(m):u.h=m}function kl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Fi.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return F(u.i)}function Ds(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,E=0;E<v;E++)m.push(u[E]);return m}m=[],v=0;for(E in u)m[v++]=u[E];return m}function Ls(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const E in u)m[v++]=E;return m}}}function $r(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=Ls(u),E=Ds(u),U=E.length,$=0;$<U;$++)m.call(void 0,E[$],v&&v[$],u)}var Ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nh(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var E=u[v].indexOf("="),U=null;if(0<=E){var $=u[v].substring(0,E);U=u[v].substring(E+1)}else $=u[v];m($,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,ji(this,u.j),this.o=u.o,this.g=u.g,Hr(this,u.s),this.l=u.l;var m=u.i,v=new Qn;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),qr(this,v),this.m=u.m}else u&&(m=String(u).match(Ui))?(this.h=!1,ji(this,m[1]||"",!0),this.o=xe(m[2]||""),this.g=xe(m[3]||"",!0),Hr(this,m[4]),this.l=xe(m[5]||"",!0),qr(this,m[6]||"",!0),this.m=xe(m[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}_r.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Kr(m,bs,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Kr(m,bs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Kr(v,v.charAt(0)=="/"?Dl:Ol,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Kr(v,aa)),u.join("")};function an(u){return new _r(u)}function ji(u,m,v){u.j=v?xe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Hr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function qr(u,m,v){m instanceof Qn?(u.i=m,Jn(u.i,u.h)):(v||(m=Kr(m,Ll)),u.i=new Qn(m,u.h))}function $e(u,m,v){u.i.set(m,v)}function Wr(u){return $e(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Kr(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Nl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Nl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var bs=/[#\/\?@]/g,Ol=/[#\?:]/g,Dl=/[#\?]/g,Ll=/[#\?@]/g,aa=/#/g;function Qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&nh(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Qn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=yn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function xn(u,m){Rt(u),m=yn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Nn(u,m){return Rt(u),m=yn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(v,E){v.forEach(function(U){u.call(m,U,E,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let E=0;E<m.length;E++){const U=u[E];for(let $=0;$<U.length;$++)v.push(m[E])}return v},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")Nn(this,u)&&(m=m.concat(this.g.get(yn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=yn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Gr(u,m,v){xn(u,m),0<v.length&&(u.i=null,u.g.set(yn(u,m),F(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var E=m[v];const $=encodeURIComponent(String(E)),ne=this.V(E);for(E=0;E<ne.length;E++){var U=$;ne[E]!==""&&(U+="="+encodeURIComponent(String(ne[E]))),u.push(U)}}return this.i=u.join("&")};function yn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Jn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(v,E){var U=E.toLowerCase();E!=U&&(xn(this,E),Gr(this,U,v))},u)),u.j=m}function rh(u,m){const v=new Li;if(d.Image){const E=new Image;E.onload=L(Kt,v,"TestLoadImage: loaded",!0,m,E),E.onerror=L(Kt,v,"TestLoadImage: error",!1,m,E),E.onabort=L(Kt,v,"TestLoadImage: abort",!1,m,E),E.ontimeout=L(Kt,v,"TestLoadImage: timeout",!1,m,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function bl(u,m){const v=new Li,E=new AbortController,U=setTimeout(()=>{E.abort(),Kt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then($=>{clearTimeout(U),$.ok?Kt(v,"TestPingServer: ok",!0,m):Kt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Kt(v,"TestPingServer: error",!1,m)})}function Kt(u,m,v,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(v)}catch{}}function ih(){this.g=new Xo}function Vl(u,m,v){const E=v||"";try{$r(u,function(U,$){let ne=U;y(U)&&(ne=Jo(U)),m.push(E+$+"="+encodeURIComponent(ne))})}catch(U){throw m.push(E+"type="+encodeURIComponent("_badmap")),U}}function wr(u){this.l=u.Ub||null,this.j=u.eb||!1}N(wr,Oi),wr.prototype.g=function(){return new Bi(this.l,this.j)},wr.prototype.i=function(u){return function(){return u}}({});function Bi(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Bi,dt),n=Bi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ml(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ml(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?On(this):Dn(this),this.readyState==3&&Ml(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,On(this))},n.Qa=function(u){this.g&&(this.response=u,On(this))},n.ga=function(){this.g&&On(this)};function On(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Er(u){let m="";return me(u,function(v,E){m+=E,m+=":",m+=v,m+=`\r
`}),m}function Qr(u,m,v){e:{for(E in v){var E=!1;break e}E=!0}E||(v=Er(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):$e(u,m,v))}function Qe(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Qe,dt);var sh=/^https?$/i,la=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pn.g(),this.v=this.o?Rs(this.o):Rs(Pn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){zi(this,$);return}if(u=v||"",v=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)v.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const $ of E.keys())v.set($,E.get($));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),U=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(la,m,void 0))||E||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of v)this.g.setRequestHeader($,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ms(this),this.u=!0,this.g.send(u),this.u=!1}catch($){zi(this,$)}};function zi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Vs(u),ln(u)}function Vs(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ua(this):this.bb())},n.bb=function(){ua(this)};function ua(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Ko(u.Ea,0,u);else if(ft(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var E;if(E=ne===0){var U=String(u.D).match(Ui)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),E=!sh.test(U?U.toLowerCase():"")}v=E}if(v)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var $=2<Gt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Vs(u)}}finally{ln(u)}}}}function ln(u,m){if(u.g){Ms(u);const v=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ft(u,"ready");try{v.onreadystatechange=E}catch{}}}function Ms(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Yo(m)}};function ca(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Fs(u){const m={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(K(u[E]))continue;var v=b(u[E]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=m[U]||[];m[U]=$,$.push(v)}x(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function ha(u){this.Aa=0,this.i=[],this.j=new Li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,u),this.cb=Yn("retryDelaySeedMs",1e4,u),this.Wa=Yn("forwardChannelMaxRetries",2,u),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Fi(u&&u.concurrentRequestLimit),this.Da=new ih,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ha.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,E){it(0),this.W=u,this.H=m||{},v&&E!==void 0&&(this.H.OSID=v,this.H.OAID=E),this.F=this.X,this.I=Bl(this,null,this.W),Xn(this)};function At(u){if(Us(u),u.G==3){var m=u.U++,v=an(u.I);if($e(v,"SID",u.K),$e(v,"RID",m),$e(v,"TYPE","terminate"),Tr(u,v),m=new kn(u,u.j,m),m.L=2,m.v=Wr(an(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.v,v=!0),v||(m.g=zl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}jl(u)}function Ln(u){u.g&&(da(u),u.g.cancel(),u.g=null)}function Us(u){Ln(u),u.u&&(d.clearTimeout(u.u),u.u=null),zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Xn(u){if(!on(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||ae(),re||(ze(),re=!0),ge.add(m,u),u.B=0}}function oh(u,m){return Pl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(S(u.Ga,u,m),Ul(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new kn(this,this.j,u);let $=this.o;if(this.S&&($?($=I($),P($,this.S)):$=this.S),this.m!==null||this.O||(U.H=$,$=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var E=this.i[v];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=Jr(this,U,m),v=an(this.I),$e(v,"RID",u),$e(v,"CVER",22),this.D&&$e(v,"X-HTTP-Session-Id",this.D),Tr(this,v),$&&(this.O?m="headers="+encodeURIComponent(String(Er($)))+"&"+m:this.m&&Qr(v,this.m,$)),oa(this.h,U),this.Ua&&$e(v,"TYPE","init"),this.P?($e(v,"$req",m),$e(v,"SID","null"),U.T=!0,Os(U,v,null)):Os(U,v,m),this.G=2}}else this.G==3&&(u?js(this,u):this.i.length==0||on(this.h)||js(this))};function js(u,m){var v;m?v=m.l:v=u.U++;const E=an(u.I);$e(E,"SID",u.K),$e(E,"RID",v),$e(E,"AID",u.T),Tr(u,E),u.m&&u.o&&Qr(E,u.m,u.o),v=new kn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Jr(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),oa(u.h,v),Os(v,E,m)}function Tr(u,m){u.H&&me(u.H,function(v,E){$e(m,E,v)}),u.l&&$r({},function(v,E){$e(m,E,v)})}function Jr(u,m,v){v=Math.min(u.i.length,v);var E=u.l?S(u.l.Na,u.l,u):null;e:{var U=u.i;let $=-1;for(;;){const ne=["count="+v];$==-1?0<v?($=U[0].g,ne.push("ofs="+$)):$=0:ne.push("ofs="+$);let Be=!0;for(let pt=0;pt<v;pt++){let Oe=U[pt].g;const wt=U[pt].map;if(Oe-=$,0>Oe)$=Math.max(0,U[pt].g-100),Be=!1;else try{Vl(wt,ne,"req"+Oe+"_")}catch{E&&E(wt)}}if(Be){E=ne.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,E}function $i(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||ae(),re||(ze(),re=!0),ge.add(m,u),u.v=0}}function Bs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(S(u.Fa,u),Ul(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Ln(this),Fl(this))};function da(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Fl(u){u.g=new kn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=an(u.qa);$e(m,"RID","rpc"),$e(m,"SID",u.K),$e(m,"AID",u.T),$e(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&$e(m,"TO",u.ja),$e(m,"TYPE","xmlhttp"),Tr(u,m),u.m&&u.o&&Qr(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Wr(an(m)),v.m=null,v.P=!0,ia(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),Bs(this),it(19))};function zs(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function $s(u,m){var v=null;if(u.g==m){zs(u),da(u),u.g=null;var E=2}else if(zt(u.h,m))v=m.D,kl(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;E=Di(),ft(E,new Ps(E,v)),Xn(u)}else $i(u);else if(U=m.s,U==3||U==0&&0<m.X||!(E==1&&oh(u,m)||E==2&&Bs(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),U){case 1:Ir(u,5);break;case 4:Ir(u,10);break;case 3:Ir(u,6);break;default:Ir(u,2)}}}function Ul(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Ir(u,m){if(u.j.info("Error code "+m),m==2){var v=S(u.fb,u),E=u.Xa;const U=!E;E=new _r(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ji(E,"https"),Wr(E),U?rh(E.toString(),v):bl(E.toString(),v)}else it(2);u.G=0,u.l&&u.l.sa(m),jl(u),Us(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function jl(u){if(u.G=0,u.ka=[],u.l){const m=xl(u.h);(m.length!=0||u.i.length!=0)&&(O(u.ka,m),O(u.ka,u.i),u.h.i.length=0,F(u.i),u.i.length=0),u.l.ra()}}function Bl(u,m,v){var E=v instanceof _r?an(v):new _r(v);if(E.g!="")m&&(E.g=m+"."+E.g),Hr(E,E.s);else{var U=d.location;E=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var $=new _r(null);E&&ji($,E),m&&($.g=m),U&&Hr($,U),v&&($.l=v),E=$}return v=u.D,m=u.ya,v&&m&&$e(E,v,m),$e(E,"VER",u.la),Tr(u,E),E}function zl(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Qe(new wr({eb:v})):new Qe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fa(){}n=fa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hs(){}Hs.prototype.g=function(u,m){return new $t(u,m)};function $t(u,m){dt.call(this),this.g=new ha(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!K(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!K(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Zn(this)}N($t,dt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){At(this.g)},$t.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=Jo(u),u=v);m.i.push(new Cl(m.Ya++,u)),m.G==3&&Xn(m)},$t.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,$t.aa.N.call(this)};function $l(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}N($l,Kn);function Hl(){Cs.call(this),this.status=1}N(Hl,Cs);function Zn(u){this.g=u}N(Zn,fa),Zn.prototype.ua=function(){ft(this.g,"a")},Zn.prototype.ta=function(u){ft(this.g,new $l(u))},Zn.prototype.sa=function(u){ft(this.g,new Hl)},Zn.prototype.ra=function(){ft(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,M_=function(){return new Hs},V_=function(){return Di()},b_=Gn,df={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,Yu=xs,Il.COMPLETE="complete",L_=Il,As.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ha=As,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,D_=Qe}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});const wy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Lc("@firebase/firestore");function fo(){return ds.logLevel}function le(n,...e){if(ds.logLevel<=ke.DEBUG){const t=e.map(Kf);ds.debug(`Firestore (${Mo}): ${n}`,...t)}}function Fr(n,...e){if(ds.logLevel<=ke.ERROR){const t=e.map(Kf);ds.error(`Firestore (${Mo}): ${n}`,...t)}}function So(n,...e){if(ds.logLevel<=ke.WARN){const t=e.map(Kf);ds.warn(`Firestore (${Mo}): ${n}`,...t)}}function Kf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n="Unexpected state"){const e=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: `+n;throw Fr(e),new Error(e)}function et(n,e){n||Re()}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends Wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class xR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class NR{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){et(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new us;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new us,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new us)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(et(typeof i.accessToken=="string"),new F_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new Ft(e)}}class OR{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class DR{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new OR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){et(this.o===void 0);const i=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,le("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(et(typeof t.token=="string"),this.R=t.token,new LR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=VR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Le(n,e){return n<e?-1:n>e?1:0}function Ro(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{static now(){return rn.fromMillis(Date.now())}static fromDate(e){return rn.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new rn(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _e(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new rn(0,0))}static max(){return new Ie(new rn(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,i){t===void 0?t=0:t>e.length&&Re(),i===void 0?i=e.length-t:i>e.length-t&&Re(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return il.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof il?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class nt extends il{construct(e,t,i){return new nt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new _e(ie.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new nt(t)}static emptyPath(){return new nt([])}}const FR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends il{construct(e,t,i){return new Wt(e,t,i)}static isValidIdentifier(e){return FR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Wt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new _e(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new _e(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new _e(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new _e(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Wt(t)}static emptyPath(){return new Wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(nt.fromString(e))}static fromName(e){return new Ee(nt.fromString(e).popFirst(5))}static empty(){return new Ee(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new nt(e.slice()))}}function UR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new rn(t+1,0):new rn(t,i));return new Ti(o,Ee.empty(),e)}function jR(n){return new Ti(n.readTime,n.key,-1)}class Ti{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ti(Ie.min(),Ee.empty(),-1)}static max(){return new Ti(Ie.max(),Ee.empty(),-1)}}function BR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(n){if(n.code!==ie.FAILED_PRECONDITION||n.message!==zR)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,i)=>{t(e)})}static reject(e){return new J((t,i)=>{i(e)})}static waitFor(e){return new J((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=J.resolve(!1);for(const i of e)t=t.next(o=>o?J.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new J((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(_=>{c[y]=_,++d,d===l&&i(c)},_=>o(_))}})}static doWhile(e,t){return new J((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function HR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Fo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mc.oe=-1;function Fc(n){return n==null}function ff(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ey(e)),e=WR(n.get(t),e);return Ey(e)}function WR(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Ey(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ml(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function KR(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ju(this.root,e,this.comparator,!0)}}class ju{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new kt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Re();const e=this.left.check();if(e!==this.right.check())throw Re();return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Re()}get value(){throw Re()}get color(){throw Re()}get left(){throw Re()}get right(){throw Re()}copy(e,t,i,o,l){return this}insert(e,t,i){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Iy(this.data.getIterator())}getIteratorFrom(e){return new Iy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Iy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.fields=e,e.sort(Wt.comparator)}static empty(){return new gi([])}unionWith(e){let t=new vt(Wt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new gi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new U_("Invalid base64 string: "+l):l}}(e);return new xt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const GR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(n){if(et(!!n),typeof n=="string"){let e=0;const t=GR.exec(n);if(et(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Si(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Uc(n){const e=n.mapValue.fields.__previous_value__;return Gf(e)?Uc(e):e}function sl(n){const e=Ii(n.mapValue.fields.__local_write_time__.timestampValue);return new rn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class ol{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ri(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gf(n)?4:YR(n)?9007199254740991:JR(n)?10:11:Re()}function cr(n,e){if(n===e)return!0;const t=Ri(n);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sl(n).isEqual(sl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ii(o.timestampValue),d=Ii(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Si(o.bytesValue).isEqual(Si(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return ot(o.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ot(o.integerValue)===ot(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ot(o.doubleValue),d=ot(l.doubleValue);return c===d?ff(c)===ff(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Ro(n.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Ty(c)!==Ty(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!cr(c[p],d[p])))return!1;return!0}(n,e);default:return Re()}}function al(n,e){return(n.values||[]).find(t=>cr(t,e))!==void 0}function Ao(n,e){if(n===e)return 0;const t=Ri(n),i=Ri(e);if(t!==i)return Le(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=ot(l.integerValue||l.doubleValue),p=ot(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Sy(n.timestampValue,e.timestampValue);case 4:return Sy(sl(n),sl(e));case 5:return Le(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Si(l),p=Si(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const _=Le(d[y],p[y]);if(_!==0)return _}return Le(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Le(ot(l.latitude),ot(c.latitude));return d!==0?d:Le(ot(l.longitude),ot(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ry(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,_;const T=l.fields||{},S=c.fields||{},L=(d=T.value)===null||d===void 0?void 0:d.arrayValue,N=(p=S.value)===null||p===void 0?void 0:p.arrayValue,F=Le(((y=L==null?void 0:L.values)===null||y===void 0?void 0:y.length)||0,((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0);return F!==0?F:Ry(L,N)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===Bu.mapValue&&c===Bu.mapValue)return 0;if(l===Bu.mapValue)return 1;if(c===Bu.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let T=0;T<p.length&&T<_.length;++T){const S=Le(p[T],_[T]);if(S!==0)return S;const L=Ao(d[p[T]],y[_[T]]);if(L!==0)return L}return Le(p.length,_.length)}(n.mapValue,e.mapValue);default:throw Re()}}function Sy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=Ii(n),i=Ii(e),o=Le(t.seconds,i.seconds);return o!==0?o:Le(t.nanos,i.nanos)}function Ry(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Ao(t[o],i[o]);if(l)return l}return Le(t.length,i.length)}function Co(n){return pf(n)}function pf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ii(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Si(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=pf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${pf(t.fields[c])}`;return o+"}"}(n.mapValue):Re()}function Xu(n){switch(Ri(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uc(n);return e?16+Xu(e):16;case 5:return 2*n.stringValue.length;case 6:return Si(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Xu(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return ml(i.fields,(l,c)=>{o+=l.length+Xu(c)}),o}(n.mapValue);default:throw Re()}}function mf(n){return!!n&&"integerValue"in n}function Qf(n){return!!n&&"arrayValue"in n}function Ay(n){return!!n&&"nullValue"in n}function Cy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zd(n){return!!n&&"mapValue"in n}function JR(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ga(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ml(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ga(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ga(n.arrayValue.values[t]);return e}return Object.assign({},n)}function YR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.value=e}static empty(){return new sr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!zd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ga(t)}setAll(e){let t=Wt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=Ga(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());zd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];zd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ml(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new sr(Ga(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Ut(e,0,Ie.min(),Ie.min(),Ie.min(),sr.empty(),0)}static newFoundDocument(e,t,i,o){return new Ut(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Ie.min(),Ie.min(),sr.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Ie.min(),Ie.min(),sr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.position=e,this.inclusive=t}}function Py(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=Ee.comparator(Ee.fromName(c.referenceValue),t.key):i=Ao(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function ky(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!cr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t="asc"){this.field=e,this.dir=t}}function XR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{}class yt extends j_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new eA(e,t,i):t==="array-contains"?new rA(e,i):t==="in"?new iA(e,i):t==="not-in"?new sA(e,i):t==="array-contains-any"?new oA(e,i):new yt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new tA(e,i):new nA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ao(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(Ao(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hr extends j_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new hr(e,t)}matches(e){return B_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function B_(n){return n.op==="and"}function z_(n){return ZR(n)&&B_(n)}function ZR(n){for(const e of n.filters)if(e instanceof hr)return!1;return!0}function gf(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+Co(n.value);if(z_(n))return n.filters.map(e=>gf(e)).join(",");{const e=n.filters.map(t=>gf(t)).join(",");return`${n.op}(${e})`}}function $_(n,e){return n instanceof yt?function(i,o){return o instanceof yt&&i.op===o.op&&i.field.isEqual(o.field)&&cr(i.value,o.value)}(n,e):n instanceof hr?function(i,o){return o instanceof hr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&$_(c,o.filters[d]),!0):!1}(n,e):void Re()}function H_(n){return n instanceof yt?function(t){return`${t.field.canonicalString()} ${t.op} ${Co(t.value)}`}(n):n instanceof hr?function(t){return t.op.toString()+" {"+t.getFilters().map(H_).join(" ,")+"}"}(n):"Filter"}class eA extends yt{constructor(e,t,i){super(e,t,i),this.key=Ee.fromName(i.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class tA extends yt{constructor(e,t){super(e,"in",t),this.keys=q_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nA extends yt{constructor(e,t){super(e,"not-in",t),this.keys=q_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function q_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Ee.fromName(i.referenceValue))}class rA extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qf(t)&&al(t.arrayValue,this.value)}}class iA extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&al(this.value.arrayValue,t)}}class sA extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!al(this.value.arrayValue,t)}}class oA extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>al(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.ue=null}}function xy(n,e=null,t=[],i=[],o=null,l=null,c=null){return new aA(n,e,t,i,o,l,c)}function Jf(n){const e=be(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>gf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Fc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Co(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Co(i)).join(",")),e.ue=t}return e.ue}function Yf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!XR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ky(n.startAt,e.startAt)&&ky(n.endAt,e.endAt)}function yf(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lA(n,e,t,i,o,l,c,d){return new jc(n,e,t,i,o,l,c,d)}function W_(n){return new jc(n)}function Ny(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uA(n){return n.collectionGroup!==null}function Qa(n){const e=be(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new vt(Wt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new dc(l,i))}),t.has(Wt.keyField().canonicalString())||e.ce.push(new dc(Wt.keyField(),i))}return e.ce}function or(n){const e=be(n);return e.le||(e.le=cA(e,Qa(n))),e.le}function cA(n,e){if(n.limitType==="F")return xy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new dc(o.field,l)});const t=n.endAt?new hc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new hc(n.startAt.position,n.startAt.inclusive):null;return xy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function vf(n,e,t){return new jc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bc(n,e){return Yf(or(n),or(e))&&n.limitType===e.limitType}function K_(n){return`${Jf(or(n))}|lt:${n.limitType}`}function po(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>H_(o)).join(", ")}]`),Fc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Co(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Co(o)).join(",")),`Target(${i})`}(or(n))}; limitType=${n.limitType})`}function zc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ee.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Qa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=Py(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,Qa(i),o)||i.endAt&&!function(c,d,p){const y=Py(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,Qa(i),o))}(n,e)}function hA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function G_(n){return(e,t)=>{let i=!1;for(const o of Qa(n)){const l=dA(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function dA(n,e,t){const i=n.field.isKeyField()?Ee.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Ao(p,y):Re()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ml(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return KR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new at(Ee.comparator);function Ai(){return fA}const Q_=new at(Ee.comparator);function qa(...n){let e=Q_;for(const t of n)e=e.insert(t.key,t);return e}function pA(n){let e=Q_;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ss(){return Ja()}function J_(){return Ja()}function Ja(){return new vs(n=>n.toString(),(n,e)=>n.isEqual(e))}const mA=new vt(Ee.comparator);function Me(...n){let e=mA;for(const t of n)e=e.add(t);return e}const gA=new vt(Le);function yA(){return gA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ff(e)?"-0":e}}function _A(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this._=void 0}}function wA(n,e,t){return n instanceof _f?function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Gf(l)&&(l=Uc(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}}(t,e):n instanceof fc?Y_(n,e):n instanceof pc?X_(n,e):function(o,l){const c=TA(o,l),d=Oy(c)+Oy(o.Pe);return mf(c)&&mf(o.Pe)?_A(d):vA(o.serializer,d)}(n,e)}function EA(n,e,t){return n instanceof fc?Y_(n,e):n instanceof pc?X_(n,e):t}function TA(n,e){return n instanceof wf?function(i){return mf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class _f extends $c{}class fc extends $c{constructor(e){super(),this.elements=e}}function Y_(n,e){const t=Z_(e);for(const i of n.elements)t.some(o=>cr(o,i))||t.push(i);return{arrayValue:{values:t}}}class pc extends $c{constructor(e){super(),this.elements=e}}function X_(n,e){let t=Z_(e);for(const i of n.elements)t=t.filter(o=>!cr(o,i));return{arrayValue:{values:t}}}class wf extends $c{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Oy(n){return ot(n.integerValue||n.doubleValue)}function Z_(n){return Qf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function IA(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof fc&&o instanceof fc||i instanceof pc&&o instanceof pc?Ro(i.elements,o.elements,cr):i instanceof wf&&o instanceof wf?cr(i.Pe,o.Pe):i instanceof _f&&o instanceof _f}(n.transform,e.transform)}class cs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cs}static exists(e){return new cs(void 0,e)}static updateTime(e){return new cs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zu(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xf{}function e0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new RA(n.key,cs.none()):new Zf(n.key,n.data,cs.none());{const t=n.data,i=sr.empty();let o=new vt(Wt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Hc(n.key,i,new gi(o.toArray()),cs.none())}}function SA(n,e,t){n instanceof Zf?function(o,l,c){const d=o.value.clone(),p=Ly(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Hc?function(o,l,c){if(!Zu(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Ly(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(t0(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Ya(n,e,t,i){return n instanceof Zf?function(l,c,d,p){if(!Zu(l.precondition,c))return d;const y=l.value.clone(),_=by(l.fieldTransforms,p,c);return y.setAll(_),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Hc?function(l,c,d,p){if(!Zu(l.precondition,c))return d;const y=by(l.fieldTransforms,p,c),_=c.data;return _.setAll(t0(l)),_.setAll(y),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return Zu(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function Dy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Ro(i,o,(l,c)=>IA(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zf extends Xf{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Hc extends Xf{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function t0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Ly(n,e,t){const i=new Map;et(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,EA(c,d,t[o]))}return i}function by(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,wA(l,c,e))}return i}class RA extends Xf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&SA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=J_();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=e0(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Me())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(t,i)=>Dy(t,i))&&Ro(this.baseMutations,e.baseMutations,(t,i)=>Dy(t,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,De;function n0(n){if(n===void 0)return Fr("GRPC error has no .code"),ie.UNKNOWN;switch(n){case ct.OK:return ie.OK;case ct.CANCELLED:return ie.CANCELLED;case ct.UNKNOWN:return ie.UNKNOWN;case ct.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case ct.INTERNAL:return ie.INTERNAL;case ct.UNAVAILABLE:return ie.UNAVAILABLE;case ct.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case ct.NOT_FOUND:return ie.NOT_FOUND;case ct.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case ct.ABORTED:return ie.ABORTED;case ct.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case ct.DATA_LOSS:return ie.DATA_LOSS;default:return Re()}}(De=ct||(ct={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=new ls([4294967295,4294967295],0);function Vy(n){const e=kA().encode(n),t=new O_;return t.update(e),new Uint8Array(t.digest())}function My(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ls([t,i],0),new ls([o,l],0)]}class ep{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Wa(`Invalid padding: ${t}`);if(i<0)throw new Wa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ls.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(ls.fromNumber(i)));return o.compare(xA)===1&&(o=new ls([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Vy(e),[i,o]=My(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new ep(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Te===0)return;const t=Vy(e),[i,o]=My(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,gl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new qc(Ie.min(),o,new at(Le),Ai(),Me())}}class gl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new gl(i,t,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class r0{constructor(e,t){this.targetId=e,this.me=t}}class i0{constructor(e,t,i=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Fy{constructor(){this.fe=0,this.ge=Uy(),this.pe=xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Me(),t=Me(),i=Me();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Re()}}),new gl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Uy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,et(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class NA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ai(),this.qe=zu(),this.Qe=zu(),this.Ke=new at(Le)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Re()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(yf(l))if(i===0){const c=new Ee(l.path);this.We(t,c,Ut.newNoDocument(c,Ie.min()))}else et(i===1);else{const c=this.Ze(t);if(c!==i){const d=this.Xe(e),p=d?this.et(d,e,c):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=Si(i).toUint8Array()}catch(p){if(p instanceof U_)return So("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new ep(c,o,l)}catch(p){return So(p instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.Le.nt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,c)=>{const d=this.Ye(c);if(d){if(l.current&&yf(d.target)){const p=new Ee(d.target.path);this.st(p).has(c)||this.ot(c,p)||this.We(c,p,Ut.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}});let i=Me();this.Qe.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,c)=>c.setReadTime(e));const o=new qc(e,t,this.Ke,this.ke,i);return this.ke=Ai(),this.qe=zu(),this.Qe=zu(),this.Ke=new at(Le),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Fy,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new vt(Le),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new vt(Le),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Fy),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function zu(){return new at(Ee.comparator)}function Uy(){return new at(Ee.comparator)}const OA={asc:"ASCENDING",desc:"DESCENDING"},DA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LA={and:"AND",or:"OR"};class bA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ef(n,e){return n.useProto3Json||Fc(e)?e:{value:e}}function VA(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function MA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vo(n){return et(!!n),Ie.fromTimestamp(function(t){const i=Ii(t);return new rn(i.seconds,i.nanos)}(n))}function FA(n,e){return Tf(n,e).canonicalString()}function Tf(n,e){const t=function(o){return new nt(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function s0(n){const e=nt.fromString(n);return et(c0(e)),e}function $d(n,e){const t=s0(e);if(t.get(1)!==n.databaseId.projectId)throw new _e(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _e(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(a0(t))}function o0(n,e){return FA(n.databaseId,e)}function UA(n){const e=s0(n);return e.length===4?nt.emptyPath():a0(e)}function jy(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function a0(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function jA(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Re()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,_){return y.useProto3Json?(et(_===void 0||typeof _=="string"),xt.fromBase64String(_||"")):(et(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),xt.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const _=y.code===void 0?ie.UNKNOWN:n0(y.code);return new _e(_,y.message||"")}(c);t=new i0(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=$d(n,i.document.name),l=vo(i.document.updateTime),c=i.document.createTime?vo(i.document.createTime):Ie.min(),d=new sr({mapValue:{fields:i.document.fields}}),p=Ut.newFoundDocument(o,l,c,d),y=i.targetIds||[],_=i.removedTargetIds||[];t=new ec(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=$d(n,i.document),l=i.readTime?vo(i.readTime):Ie.min(),c=Ut.newNoDocument(o,l),d=i.removedTargetIds||[];t=new ec([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=$d(n,i.document),l=i.removedTargetIds||[];t=new ec([],l,o,null)}else{if(!("filter"in e))return Re();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new PA(o,l),d=i.targetId;t=new r0(d,c)}}return t}function BA(n,e){return{documents:[o0(n,e.path)]}}function zA(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=o0(n,o);const l=function(y){if(y.length!==0)return u0(hr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(_=>function(S){return{field:mo(S.field),direction:qA(S.dir)}}(_))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Ef(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function $A(n){let e=UA(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){et(i===1);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=function(T){const S=l0(T);return S instanceof hr&&z_(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(S=>function(N){return new dc(go(N.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(T){let S;return S=typeof T=="object"?T.value:T,Fc(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,L=T.values||[];return new hc(L,S)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const S=!T.before,L=T.values||[];return new hc(L,S)}(t.endAt)),lA(e,o,c,l,d,"F",p,y)}function HA(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Re()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function l0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=go(t.unaryFilter.field);return yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=go(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=go(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=go(t.unaryFilter.field);return yt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Re()}}(n):n.fieldFilter!==void 0?function(t){return yt.create(go(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Re()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return hr.create(t.compositeFilter.filters.map(i=>l0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Re()}}(t.compositeFilter.op))}(n):Re()}function qA(n){return OA[n]}function WA(n){return DA[n]}function KA(n){return LA[n]}function mo(n){return{fieldPath:n.canonicalString()}}function go(n){return Wt.fromServerFormat(n.fieldPath)}function u0(n){return n instanceof yt?function(t){if(t.op==="=="){if(Cy(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NAN"}};if(Ay(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Cy(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NAN"}};if(Ay(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(t.field),op:WA(t.op),value:t.value}}}(n):n instanceof hr?function(t){const i=t.getFilters().map(o=>u0(o));return i.length===1?i[0]:{compositeFilter:{op:KA(t.op),filters:i}}}(n):Re()}function c0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,i,o,l=Ie.min(),c=Ie.min(),d=xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.ht=e}}function QA(n){const e=$A({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.ln=new YA}addToCollectionParentIndex(e,t){return this.ln.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Ti.min())}updateCollectionGroup(e,t,i){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class YA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(nt.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(41943040,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Po(0)}static Qn(){return new Po(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy([n,e],[t,i]){const o=Le(n,t);return o===0?Le(e,i):o}class XA{constructor(e){this.Gn=e,this.buffer=new vt(zy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();zy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){le("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Fo(t)?le("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Vc(t)}await this.Yn(3e5)})}}class eC{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return J.resolve(Mc.oe);const i=new XA(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(By)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),By):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,c,d,p,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),fo()<=ke.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-_}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function tC(n,e){return new eC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.changes=new vs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?J.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ya(i.mutation,o,gi.empty(),rn.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Me()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Me()){const o=ss();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=qa();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=ss();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Me()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=Ai();const c=Ja(),d=function(){return Ja()}();return t.forEach((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof Hc)?l=l.insert(y.key,y):_!==void 0?(c.set(y.key,_.mutation.getFieldMask()),Ya(_.mutation,y,_.mutation.getFieldMask(),rn.now())):c.set(y.key,gi.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,_)=>c.set(y,_)),t.forEach((y,_)=>{var T;return d.set(y,new rC(_,(T=c.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Ja();let o=new at((c,d)=>c-d),l=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||gi.empty();_=d.applyToLocalView(y,_),i.set(p,_);const T=(o.get(d.batchId)||Me()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,_=p.value,T=J_();_.forEach(S=>{if(!l.has(S)){const L=e0(t.get(S),i.get(S));L!==null&&T.set(S,L),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return J.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return Ee.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):J.resolve(ss());let d=-1,p=l;return c.next(y=>J.forEach(y,(_,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(_)?J.resolve():this.remoteDocumentCache.getEntry(e,_).next(S=>{p=p.insert(_,S)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Me())).next(_=>({batchId:d,changes:pA(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next(i=>{let o=qa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=qa();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,p=>{const y=function(T,S){return new jc(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(_=>{_.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const _=y.getKey();c.get(_)===null&&(c=c.insert(_,Ut.newInvalidDocument(_)))});let d=qa();return c.forEach((p,y)=>{const _=l.get(p);_!==void 0&&Ya(_.mutation,y,gi.empty(),rn.now()),zc(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return J.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:vo(o.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:QA(o.bundledQuery),readTime:vo(o.readTime)}}(t)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.overlays=new at(Ee.comparator),this.Er=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ss();return J.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),J.resolve()}getOverlaysForCollection(e,t,i){const o=ss(),l=t.length+1,c=new Ee(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return J.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new at((y,_)=>y-_);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=l.get(y.largestBatchId);_===null&&(_=ss(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const d=ss(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,_)=>d.set(y,_)),!(d.size()>=o)););return J.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new CA(t,i));let l=this.Er.get(t);l===void 0&&(l=Me(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.dr=new vt(St.Ar),this.Rr=new vt(St.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new St(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new St(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new Ee(new nt([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Rr.forEachInRange([i,o],c=>{this.gr(c),l.push(c.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new Ee(new nt([])),i=new St(t,e),o=new St(t,e+1);let l=Me();return this.Rr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new St(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Ee.comparator(e.key,t.key)||Le(e.br,t.br)}static Vr(e,t){return Le(e.br,t.br)||Ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new vt(St.Ar)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new AA(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.vr=this.vr.add(new St(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],c=>{const d=this.Cr(c.br);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(Le);return t.forEach(o=>{const l=new St(o,0),c=new St(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,c],d=>{i=i.add(d.br)})}),J.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;Ee.isDocumentKey(l)||(l=l.child(""));const c=new St(new Ee(l),0);let d=new vt(Le);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},c),J.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){et(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return J.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new St(t,0),o=this.vr.firstAfterOrEqual(i);return J.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.Nr=e,this.docs=function(){return new at(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return J.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=Ai();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),J.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Ai();const c=t.path,d=new Ee(c.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||BR(jR(_),i)<=0||(o.has(_.key)||zc(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Re()}Lr(e,t){return J.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new cC(this)}getSize(e){return J.resolve(this.size)}}class cC extends nC{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),J.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.persistence=e,this.Br=new vs(t=>Jf(t),Yf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new tp,this.targetCount=0,this.Qr=Po.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),J.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Po(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Un(t),J.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Br.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),J.waitFor(l).next(()=>o)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return J.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),J.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return J.resolve(i)}containsKey(e,t){return J.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Mc(0),this.Ur=!1,this.Ur=!0,this.Wr=new aC,this.referenceDelegate=e(this),this.Gr=new hC(this),this.indexManager=new JA,this.remoteDocumentCache=function(o){return new uC(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new GA(t),this.jr=new sC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new lC(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new dC(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return J.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class dC extends $R{constructor(e){super(),this.currentSequenceNumber=e}}class np{constructor(e){this.persistence=e,this.Zr=new tp,this.Xr=null}static ei(e){return new np(e)}get ti(){if(this.Xr)return this.Xr;throw Re()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),J.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),J.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.ti,i=>{const o=Ee.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return J.or([()=>J.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class mc{constructor(e,t){this.persistence=e,this.ri=new vs(i=>qR(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=tC(this,t)}static ei(e,t){return new mc(e,t)}Hr(){}Jr(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return J.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?J.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,c=>this.ir(e,c,t).next(d=>{d||(i++,l.removeEntry(c,Ie.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),J.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),J.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Xu(e.data.value)),t}ir(e,t,i){return J.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return J.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Me(),o=Me();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new rp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return c1()?8:HR(Bt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new fC;return this.ts(e,t,c).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,c,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(fo()<=ke.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),J.resolve()):(fo()<=ke.DEBUG&&le("QueryEngine","Query:",po(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(fo()<=ke.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):J.resolve())}Xi(e,t){if(Ny(t))return J.resolve(null);let i=or(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=vf(t,null,"F"),i=or(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Me(...l);return this.Zi.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,c,p.readTime)?this.Xi(e,vf(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Ny(t)||o.isEqual(Ie.min())?J.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const c=this.rs(t,l);return this.ss(t,c,i,o)?J.resolve(null):(fo()<=ke.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),po(t)),this.os(e,c,t,UR(o,-1)).next(d=>d))})}rs(e,t){let i=new vt(G_(e));return t.forEach((o,l)=>{zc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return fo()<=ke.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",po(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ti.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new at(Le),this.cs=new vs(l=>Jf(l),Yf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function gC(n,e,t,i){return new mC(n,e,t,i)}async function d0(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Me();for(const y of o){c.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of l){d.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:c,addedBatchIds:d}))})})}function f0(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function yC(n,e){const t=be(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((_,T)=>{const S=o.get(T);if(!S)return;d.push(t.Gr.removeMatchingKeys(l,_.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,_.addedDocuments,T)));let L=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?L=L.withResumeToken(xt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):_.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(_.resumeToken,i)),o=o.insert(T,L),function(F,O,q){return F.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(S,L,_)&&d.push(t.Gr.updateTargetData(l,L))});let p=Ai(),y=Me();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))}),d.push(vC(l,c,e.documentUpdates).next(_=>{p=_.Is,y=_.Es})),!i.isEqual(Ie.min())){const _=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(_)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function vC(n,e,t){let i=Me(),o=Me();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Ai();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):le("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:c,Es:o}})}function _C(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,J.resolve(o)):t.Gr.allocateTargetId(i).next(c=>(o=new yi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function If(n,e,t){const i=be(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Fo(c))throw c;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function $y(n,e,t){const i=be(n);let o=Ie.min(),l=Me();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,_){const T=be(p),S=T.cs.get(_);return S!==void 0?J.resolve(T.us.get(S)):T.Gr.getTargetData(y,_)}(i,c,or(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?l:Me())).next(d=>(wC(i,hA(e),d),{documents:d,ds:l})))}function wC(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class Hy{constructor(){this.activeTargetIds=yA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EC{constructor(){this._o=new Hy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Hy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u=null;function Hd(){return $u===null?$u=function(){return 268435456+Math.round(2147483648*Math.random())}():$u++,"0x"+$u.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class RC extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,c){const d=Hd(),p=this.No(t,i.toUriEncodedString());le("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,c),this.Bo(t,p,y,o).then(_=>(le("RestConnection",`Received RPC '${t}' ${d}: `,_),_),_=>{throw So("RestConnection",`RPC '${t}' ${d} failed with error: `,_,"url: ",p,"request:",o),_})}ko(t,i,o,l,c,d){return this.Oo(t,i,o,l,c)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),o&&o.headers.forEach((l,c)=>t[c]=l)}No(t,i){const o=IC[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=Hd();return new Promise((c,d)=>{const p=new D_;p.setWithCredentials(!0),p.listenOnce(L_.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Yu.NO_ERROR:const _=p.getResponseJson();le(Mt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(_)),c(_);break;case Yu.TIMEOUT:le(Mt,`RPC '${e}' ${l} timed out`),d(new _e(ie.DEADLINE_EXCEEDED,"Request time out"));break;case Yu.HTTP_ERROR:const T=p.getStatus();if(le(Mt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const L=S==null?void 0:S.error;if(L&&L.status&&L.message){const N=function(O){const q=O.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(q)>=0?q:ie.UNKNOWN}(L.status);d(new _e(N,L.message))}else d(new _e(ie.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new _e(ie.UNAVAILABLE,"Connection failed."));break;default:Re()}}finally{le(Mt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);le(Mt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=Hd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=M_(),d=V_(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=l.join("");le(Mt,`Creating RPC '${e}' stream ${o}: ${_}`,p);const T=c.createWebChannel(_,p);let S=!1,L=!1;const N=new SC({Eo:O=>{L?le(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,O):(S||(le(Mt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),le(Mt,`RPC '${e}' stream ${o} sending:`,O),T.send(O))},Ao:()=>T.close()}),F=(O,q,K)=>{O.listen(q,ee=>{try{K(ee)}catch(oe){setTimeout(()=>{throw oe},0)}})};return F(T,Ha.EventType.OPEN,()=>{L||(le(Mt,`RPC '${e}' stream ${o} transport opened.`),N.So())}),F(T,Ha.EventType.CLOSE,()=>{L||(L=!0,le(Mt,`RPC '${e}' stream ${o} transport closed`),N.Do())}),F(T,Ha.EventType.ERROR,O=>{L||(L=!0,So(Mt,`RPC '${e}' stream ${o} transport errored:`,O),N.Do(new _e(ie.UNAVAILABLE,"The operation could not be completed")))}),F(T,Ha.EventType.MESSAGE,O=>{var q;if(!L){const K=O.data[0];et(!!K);const ee=K,oe=(ee==null?void 0:ee.error)||((q=ee[0])===null||q===void 0?void 0:q.error);if(oe){le(Mt,`RPC '${e}' stream ${o} received error:`,oe);const fe=oe.status;let me=function(R){const P=ct[R];if(P!==void 0)return n0(P)}(fe),x=oe.message;me===void 0&&(me=ie.INTERNAL,x="Unknown error status: "+fe+" with message "+oe.message),L=!0,N.Do(new _e(me,x)),T.close()}else le(Mt,`RPC '${e}' stream ${o} received:`,K),N.vo(K)}}),F(d,b_.STAT_EVENT,O=>{O.stat===df.PROXY?le(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):O.stat===df.NOPROXY&&le(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{N.bo()},0),N}}function qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(n){return new bA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,t,i,o,l,c,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new m0(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===ie.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new _e(ie.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CC extends AC{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=jA(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?vo(c.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=jy(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=yf(p)?{documents:BA(l,p)}:{query:zA(l,p).ct},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=MA(l,c.resumeToken);const y=Ef(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=VA(l,c.snapshotVersion.toTimestamp());const y=Ef(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=HA(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=jy(this.serializer),t.removeTarget=e,this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new _e(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Oo(e,Tf(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _e(ie.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.ko(e,Tf(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new _e(ie.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class kC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Fr(t),this.C_=!1):le("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(c=>{i.enqueueAndForget(async()=>{vl(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=be(p);y.k_.add(4),await yl(y),y.K_.set("Unknown"),y.k_.delete(4),await Wc(y)}(this))})}),this.K_=new kC(i,o)}}async function Wc(n){if(vl(n))for(const e of n.q_)await e(!0)}async function yl(n){for(const e of n.q_)await e(!1)}function g0(n,e){const t=be(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),ap(t)?op(t):Uo(t).s_()&&sp(t,e))}function ip(n,e){const t=be(n),i=Uo(t);t.B_.delete(e),i.s_()&&y0(t,e),t.B_.size===0&&(i.s_()?i.a_():vl(t)&&t.K_.set("Unknown"))}function sp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Uo(n).V_(e)}function y0(n,e){n.U_.xe(e),Uo(n).m_(e)}function op(n){n.U_=new NA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Uo(n).start(),n.K_.F_()}function ap(n){return vl(n)&&!Uo(n).i_()&&n.B_.size>0}function vl(n){return be(n).k_.size===0}function v0(n){n.U_=void 0}async function NC(n){n.K_.set("Online")}async function OC(n){n.B_.forEach((e,t)=>{sp(n,e)})}async function DC(n,e){v0(n),ap(n)?(n.K_.O_(e),op(n)):n.K_.set("Unknown")}async function LC(n,e,t){if(n.K_.set("Online"),e instanceof i0&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.B_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.B_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Wy(n,i)}else if(e instanceof ec?n.U_.$e(e):e instanceof r0?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await f0(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.U_.it(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.B_.get(y);_&&l.B_.set(y,_.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const _=l.B_.get(p);if(!_)return;l.B_.set(p,_.withResumeToken(xt.EMPTY_BYTE_STRING,_.snapshotVersion)),y0(l,p);const T=new yi(_.target,p,y,_.sequenceNumber);sp(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){le("RemoteStore","Failed to raise snapshot:",i),await Wy(n,i)}}async function Wy(n,e,t){if(!Fo(e))throw e;n.k_.add(1),await yl(n),n.K_.set("Offline"),t||(t=()=>f0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Wc(n)})}async function Ky(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const i=vl(t);t.k_.add(3),await yl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Wc(t)}async function bC(n,e){const t=be(n);e?(t.k_.delete(2),await Wc(t)):e||(t.k_.add(2),await yl(t),t.K_.set("Unknown"))}function Uo(n){return n.W_||(n.W_=function(t,i,o){const l=be(t);return l.b_(),new CC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:NC.bind(null,n),mo:OC.bind(null,n),po:DC.bind(null,n),R_:LC.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),ap(n)?op(n):n.K_.set("Unknown")):(await n.W_.stop(),v0(n))})),n.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new lp(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _0(n,e){if(Fr("AsyncQueue",`${e}: ${n}`),Fo(n))return new _e(ie.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ee.comparator(t.key,i.key):(t,i)=>Ee.comparator(t.key,i.key),this.keyedMap=qa(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new _o;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.z_=new at(Ee.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Re():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class ko{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new ko(e,t,_o.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class MC{constructor(){this.queries=Qy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=be(t),l=o.queries;o.queries=Qy(),l.forEach((c,d)=>{for(const p of d.J_)p.onError(i)})})(this,new _e(ie.ABORTED,"Firestore shutting down"))}}function Qy(){return new vs(n=>K_(n),Bc)}async function FC(n,e){const t=be(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new VC,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=_0(c,`Initialization of query '${po(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&up(t)}async function UC(n,e){const t=be(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.J_.indexOf(e);c>=0&&(l.J_.splice(c,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function jC(n,e){const t=be(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.J_)d.ta(o)&&(i=!0);c.H_=o}}i&&up(t)}function BC(n,e,t){const i=be(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function up(n){n.X_.forEach(e=>{e.next()})}var Sf,Jy;(Jy=Sf||(Sf={})).na="default",Jy.Cache="cache";class zC{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new ko(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Sf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.key=e}}class E0{constructor(e){this.key=e}}class $C{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Me(),this.mutatedKeys=Me(),this.Va=G_(e),this.ma=new _o(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new Gy,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((_,T)=>{const S=o.get(_),L=zc(this.query,T)?T:null,N=!!S&&this.mutatedKeys.has(S.key),F=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let O=!1;S&&L?S.data.isEqual(L.data)?N!==F&&(i.track({type:3,doc:L}),O=!0):this.ya(S,L)||(i.track({type:2,doc:L}),O=!0,(p&&this.Va(L,p)>0||y&&this.Va(L,y)<0)&&(d=!0)):!S&&L?(i.track({type:0,doc:L}),O=!0):S&&!L&&(i.track({type:1,doc:S}),O=!0,(p||y)&&(d=!0)),O&&(L?(c=c.add(L),l=F?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{ma:c,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort((_,T)=>function(L,N){const F=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Re()}};return F(L)-F(N)}(_.type,T.type)||this.Va(_.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,c.length!==0||y?{snapshot:new ko(this.query,e.ma,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Gy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Me(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new E0(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new w0(i))}),t}va(e){this.da=e.ds,this.Ra=Me();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ko.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class HC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class qC{constructor(e){this.key=e,this.Fa=!1}}class WC{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new vs(d=>K_(d),Bc),this.Oa=new Map,this.Na=new Set,this.La=new at(Ee.comparator),this.Ba=new Map,this.ka=new tp,this.qa={},this.Qa=new Map,this.Ka=Po.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function KC(n,e,t=!0){const i=A0(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await T0(i,e,t,!0),o}async function GC(n,e){const t=A0(n);await T0(t,e,!0,!1)}async function T0(n,e,t,i){const o=await _C(n.localStore,or(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await QC(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&g0(n.remoteStore,o),d}async function QC(n,e,t,i,o){n.Ua=(T,S,L)=>async function(F,O,q,K){let ee=O.view.ga(q);ee.ss&&(ee=await $y(F.localStore,O.query,!1).then(({documents:x})=>O.view.ga(x,ee)));const oe=K&&K.targetChanges.get(O.targetId),fe=K&&K.targetMismatches.get(O.targetId)!=null,me=O.view.applyChanges(ee,F.isPrimaryClient,oe,fe);return Xy(F,O.targetId,me.ba),me.snapshot}(n,T,S,L);const l=await $y(n.localStore,e,!0),c=new $C(e,l.ds),d=c.ga(l.documents),p=gl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);Xy(n,t,y.ba);const _=new HC(e,t,c);return n.xa.set(e,_),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function JC(n,e,t){const i=be(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(c=>!Bc(c,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await If(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&ip(i.remoteStore,o.targetId),Rf(i,o.targetId)}).catch(Vc)):(Rf(i,o.targetId),await If(i.localStore,o.targetId,!0))}async function YC(n,e){const t=be(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ip(t.remoteStore,i.targetId))}async function I0(n,e){const t=be(n);try{const i=await yC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.Ba.get(l);c&&(et(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Fa=!0:o.modifiedDocuments.size>0?et(c.Fa):o.removedDocuments.size>0&&(et(c.Fa),c.Fa=!1))}),await R0(t,i,e)}catch(i){await Vc(i)}}function Yy(n,e,t){const i=be(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,c)=>{const d=c.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=be(c);p.onlineState=d;let y=!1;p.queries.forEach((_,T)=>{for(const S of T.J_)S.ea(d)&&(y=!0)}),y&&up(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function XC(n,e,t){const i=be(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let c=new at(Ee.comparator);c=c.insert(l,Ut.newNoDocument(l,Ie.min()));const d=Me().add(l),p=new qc(Ie.min(),new Map,new at(Le),c,d);await I0(i,p),i.La=i.La.remove(l),i.Ba.delete(e),cp(i)}else await If(i.localStore,e,!1).then(()=>Rf(i,e,t)).catch(Vc)}function Rf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||S0(n,i)})}function S0(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(ip(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),cp(n))}function Xy(n,e,t){for(const i of t)i instanceof w0?(n.ka.addReference(i.key,e),ZC(n,i)):i instanceof E0?(le("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||S0(n,i.key)):Re()}function ZC(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(le("SyncEngine","New document in limbo: "+t),n.Na.add(i),cp(n))}function cp(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new Ee(nt.fromString(e)),i=n.Ka.next();n.Ba.set(i,new qC(t)),n.La=n.La.insert(t,i),g0(n.remoteStore,new yi(or(W_(t.path)),i,"TargetPurposeLimboResolution",Mc.oe))}}async function R0(n,e,t){const i=be(n),o=[],l=[],c=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{c.push(i.Ua(p,e,t).then(y=>{var _;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=rp.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(c),i.Ma.R_(o),await async function(p,y){const _=be(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(y,S=>J.forEach(S.Wi,L=>_.persistence.referenceDelegate.addReference(T,S.targetId,L)).next(()=>J.forEach(S.Gi,L=>_.persistence.referenceDelegate.removeReference(T,S.targetId,L)))))}catch(T){if(!Fo(T))throw T;le("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const S=T.targetId;if(!T.fromCache){const L=_.us.get(S),N=L.snapshotVersion,F=L.withLastLimboFreeSnapshotVersion(N);_.us=_.us.insert(S,F)}}}(i.localStore,l))}async function eP(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const i=await d0(t.localStore,e);t.currentUser=e,function(l,c){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new _e(ie.CANCELLED,c))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await R0(t,i.Ts)}}function tP(n,e){const t=be(n),i=t.Ba.get(e);if(i&&i.Fa)return Me().add(i.key);{let o=Me();const l=t.Oa.get(e);if(!l)return o;for(const c of l){const d=t.xa.get(c);o=o.unionWith(d.view.fa)}return o}}function A0(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=I0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XC.bind(null,e),e.Ma.R_=jC.bind(null,e.eventManager),e.Ma.Wa=BC.bind(null,e.eventManager),e}class gc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=p0(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return gC(this.persistence,new pC,e.initialUser,this.serializer)}ja(e){return new h0(np.ei,this.serializer)}za(e){return new EC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gc.provider={build:()=>new gc};class nP extends gc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){et(this.persistence.referenceDelegate instanceof mc);const i=this.persistence.referenceDelegate.garbageCollector;return new ZA(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new h0(i=>mc.ei(i,t),this.serializer)}}class Af{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Yy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=eP.bind(null,this.syncEngine),await bC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MC}()}createDatastore(e){const t=p0(e.databaseInfo.databaseId),i=function(l){return new RC(l)}(e.databaseInfo);return function(l,c,d,p){return new PC(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new xC(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>Yy(this.syncEngine,t,0),function(){return qy.p()?new qy:new TC}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,_){const T=new WC(o,l,c,d,p,y);return _&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=be(o);le("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await yl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Af.provider={build:()=>new Af};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=MR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{le("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(le("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=_0(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Wd(n,e){n.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await d0(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zy(n,e){n.asyncQueue.verifyOperationInProgress();const t=await sP(n);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Ky(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Ky(e.remoteStore,o)),n._onlineComponents=e}async function sP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ie.FAILED_PRECONDITION||o.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;So("Error using user provided cache. Falling back to memory cache: "+t),await Wd(n,new gc)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await Wd(n,new nP(void 0));return n._offlineComponents}async function oP(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await Zy(n,n._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await Zy(n,new Af))),n._onlineComponents}async function aP(n){const e=await oP(n),t=e.eventManager;return t.onListen=KC.bind(null,e.syncEngine),t.onUnlisten=JC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=YC.bind(null,e.syncEngine),t}function lP(n,e,t={}){const i=new us;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const _=new rP({next:S=>{_.eu(),c.enqueueAndForget(()=>UC(l,T)),S.fromCache&&p.source==="server"?y.reject(new _e(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new zC(d,_,{includeMetadataChanges:!0,ua:!0});return FC(l,T)}(await aP(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new Map;function uP(n,e,t,i){if(e===!0&&i===!0)throw new _e(ie.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function tv(n){if(Ee.isDocumentKey(n))throw new _e(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function cP(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Re()}function Cf(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cP(n);throw new _e(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _e(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=C0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new _e(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new _e(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new _e(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new kR;switch(i.type){case"firstParty":return new DR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new _e(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=ev.get(t);i&&(le("ComponentProvider","Removing Datastore"),ev.delete(t),i.terminate())}(this),Promise.resolve()}}function hP(n,e,t,i={}){var o;const l=(n=Cf(n,hp))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&So("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ft.MOCK_USER;else{d=i1(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new _e(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}n._authCredentials=new xR(new F_(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Kc(this.firestore,e,this._query)}}class jo{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jo(this.firestore,e,this._key)}}class wo extends Kc{constructor(e,t,i){super(e,t,W_(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jo(this.firestore,null,new Ee(e))}withConverter(e){return new wo(this.firestore,e,this._path)}}function rv(n,e,...t){if(n=fr(n),n instanceof hp){const i=nt.fromString(e,...t);return tv(i),new wo(n,null,i)}{if(!(n instanceof jo||n instanceof wo))throw new _e(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(nt.fromString(e,...t));return tv(i),new wo(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new m0(this,"async_queue_retry"),this.fu=()=>{const i=qd();i&&le("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=qd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=qd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new us;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Fo(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Fr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=lp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&Re()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class P0 extends hp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new iv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iv(e),this._firestoreClient=void 0,await e}}}function k0(n,e){const t=typeof n=="object"?n:Wf(),i=typeof n=="string"?n:"(default)",o=ys(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=n1("firestore");l&&hP(o,...l)}return o}function dP(n){if(n._terminated)throw new _e(ie.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fP(n),n._firestoreClient}function fP(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,_){return new QR(d,p,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,C0(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new iP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yc(xt.fromBase64String(e))}catch(t){throw new _e(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yc(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}const gP=new RegExp("[~\\*/\\[\\]]");function yP(n,e,t){if(e.search(gP)>=0)throw sv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new x0(...e.split("."))._internalPath}catch{throw sv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function sv(n,e,t,i,o){let l=`Function ${e}() called with invalid data`;l+=". ";let c="";return new _e(ie.INVALID_ARGUMENT,l+n+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new jo(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(O0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vP extends N0{data(){return super.data()}}function O0(n,e){return typeof e=="string"?yP(n,e):e instanceof x0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _e(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wP{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Re()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ml(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>ot(c.doubleValue));return new mP(l)}convertGeoPoint(e){return new pP(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Uc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new rn(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=nt.fromString(e);et(c0(i));const o=new ol(i.get(1),i.get(3)),l=new Ee(i.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EP extends N0{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(O0("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class tc extends EP{data(e={}){return super.data(e)}}class TP{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Hu(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new tc(this._firestore,this._userDataWriter,i.key,i,new Hu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _e(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new tc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Hu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new tc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Hu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),_=c.indexOf(d.doc.key)),{type:IP(d.type),doc:p,oldIndex:y,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function IP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Re()}}class SP extends wP{constructor(e){super(),this.firestore=e}convertBytes(e){return new yc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new jo(this.firestore,null,t)}}function ov(n){n=Cf(n,Kc);const e=Cf(n.firestore,P0),t=dP(e),i=new SP(e);return _P(n._query),lP(t,n._query).then(o=>new TP(e,i,n,o))}(function(e,t=!0){(function(o){Mo=o})(Vo),ur(new zn("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new P0(new NR(i.getProvider("auth-internal")),new bR(i.getProvider("app-check-internal")),function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new _e(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(y.options.projectId,_)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Rn(wy,"4.7.5",e),Rn(wy,"4.7.5","esm2017")})();function dp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function D0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RP=D0,L0=new gs("auth","Firebase",D0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Lc("@firebase/auth");function AP(n,...e){vc.logLevel<=ke.WARN&&vc.warn(`Auth (${Vo}): ${n}`,...e)}function nc(n,...e){vc.logLevel<=ke.ERROR&&vc.error(`Auth (${Vo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n,...e){throw fp(n,...e)}function ar(n,...e){return fp(n,...e)}function b0(n,e,t){const i=Object.assign(Object.assign({},RP()),{[e]:t});return new gs("auth","Firebase",i).create(e,{appName:n.name})}function wi(n){return b0(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return L0.create(n,...e)}function we(n,e,...t){if(!n)throw fp(e,...t)}function Dr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw nc(e),new Error(e)}function Ur(n,e){n||Dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function CP(){return av()==="http:"||av()==="https:"}function av(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CP()||S_()||"connection"in navigator)?navigator.onLine:!0}function kP(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=s1()||l1()}get(){return PP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n,e){Ur(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=new _l(3e4,6e4);function _s(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pi(n,e,t,i,o={}){return M0(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=pl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return a1()||(y.referrerPolicy="no-referrer"),V0.fetch()(F0(n,n.config.apiHost,t,d),y)})}async function M0(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},xP),e);try{const o=new DP(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw qu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw qu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw qu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw qu(n,"user-disabled",c);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw b0(n,_,y);$n(n,_)}}catch(o){if(o instanceof Wn)throw o;$n(n,"network-request-failed",{message:String(o)})}}async function Gc(n,e,t,i,o={}){const l=await Pi(n,e,t,i,o);return"mfaPendingCredential"in l&&$n(n,"multi-factor-auth-required",{_serverResponse:l}),l}function F0(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?pp(n.config,o):`${n.config.apiScheme}://${o}`}function OP(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ar(this.auth,"network-request-failed")),NP.get())})}}function qu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ar(n,e,i);return o.customData._tokenResponse=t,o}function lv(n){return n!==void 0&&n.enterprise!==void 0}class LP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return OP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bP(n,e){return Pi(n,"GET","/v2/recaptchaConfig",_s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(n,e){return Pi(n,"POST","/v1/accounts:delete",e)}async function U0(n,e){return Pi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MP(n,e=!1){const t=fr(n),i=await t.getIdToken(e),o=mp(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Xa(Kd(o.auth_time)),issuedAtTime:Xa(Kd(o.iat)),expirationTime:Xa(Kd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Kd(n){return Number(n)*1e3}function mp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const o=w_(t);return o?JSON.parse(o):(nc("Failed to decode base64 JWT payload"),null)}catch(o){return nc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function uv(n){const e=mp(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Wn&&FP(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function FP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xa(this.lastLoginAt),this.creationTime=Xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _c(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ll(n,U0(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?j0(l.providerUserInfo):[],d=BP(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),_=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new kf(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,T)}async function jP(n){const e=fr(n);await _c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BP(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function j0(n){return n.map(e=>{var{providerId:t}=e,i=dp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(n,e){const t=await M0(n,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=F0(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",V0.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $P(n,e){return Pi(n,"POST","/v2/accounts:revokeToken",_s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=uv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await zP(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Eo;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=dp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new kf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ll(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return MP(this,e)}reload(){return jP(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await _c(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Or(this.auth.app))return Promise.reject(wi(this.auth));const e=await this.getIdToken();return await ll(this,VP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,_;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,L=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,N=(c=t.photoURL)!==null&&c!==void 0?c:void 0,F=(d=t.tenantId)!==null&&d!==void 0?d:void 0,O=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,q=(y=t.createdAt)!==null&&y!==void 0?y:void 0,K=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:ee,emailVerified:oe,isAnonymous:fe,providerData:me,stsTokenManager:x}=t;we(ee&&x,e,"internal-error");const I=Eo.fromJSON(this.name,x);we(typeof ee=="string",e,"internal-error"),hi(T,e.name),hi(S,e.name),we(typeof oe=="boolean",e,"internal-error"),we(typeof fe=="boolean",e,"internal-error"),hi(L,e.name),hi(N,e.name),hi(F,e.name),hi(O,e.name),hi(q,e.name),hi(K,e.name);const R=new Lr({uid:ee,auth:e,email:S,emailVerified:oe,displayName:T,isAnonymous:fe,photoURL:N,phoneNumber:L,tenantId:F,stsTokenManager:I,createdAt:q,lastLoginAt:K});return me&&Array.isArray(me)&&(R.providerData=me.map(P=>Object.assign({},P))),O&&(R._redirectEventId=O),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new Eo;o.updateFromServerResponse(t);const l=new Lr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await _c(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?j0(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new Eo;d.updateFromIdToken(i);const p=new Lr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new kf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Map;function br(n){Ur(n instanceof Function,"Expected a class definition");let e=cv.get(n);return e?(Ur(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}B0.type="NONE";const hv=B0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n,e,t){return`firebase:${n}:${e}:${t}`}class To{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=rc(this.userKey,o.apiKey,l),this.fullPersistenceKey=rc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new To(br(hv),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||br(hv);const c=rc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const _=await y._get(c);if(_){const T=Lr._fromJSON(e,_);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new To(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new To(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K0(e))return"Blackberry";if(G0(e))return"Webos";if($0(e))return"Safari";if((e.includes("chrome/")||H0(e))&&!e.includes("edge/"))return"Chrome";if(W0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function z0(n=Bt()){return/firefox\//i.test(n)}function $0(n=Bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H0(n=Bt()){return/crios\//i.test(n)}function q0(n=Bt()){return/iemobile/i.test(n)}function W0(n=Bt()){return/android/i.test(n)}function K0(n=Bt()){return/blackberry/i.test(n)}function G0(n=Bt()){return/webos/i.test(n)}function gp(n=Bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function HP(n=Bt()){var e;return gp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qP(){return u1()&&document.documentMode===10}function Q0(n=Bt()){return gp(n)||W0(n)||G0(n)||K0(n)||/windows phone/i.test(n)||q0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(n,e=[]){let t;switch(n){case"Browser":t=dv(Bt());break;case"Worker":t=`${dv(Bt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(n,e={}){return Pi(n,"GET","/v2/passwordPolicy",_s(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=6;class QP{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:GP,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fv(this),this.idTokenSubscription=new fv(this),this.beforeStateQueue=new WP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await U0(this,{idToken:e}),i=await Lr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Or(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _c(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Or(this.app))return Promise.reject(wi(this));const t=e?fr(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Or(this.app)?Promise.reject(wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Or(this.app)?Promise.reject(wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KP(this),t=new QP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await $P(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&AP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Bo(n){return fr(n)}class fv{constructor(e){this.auth=e,this.observer=null,this.addObserver=g1(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YP(n){Qc=n}function Y0(n){return Qc.loadJS(n)}function XP(){return Qc.recaptchaEnterpriseScript}function ZP(){return Qc.gapiScript}function ek(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class tk{constructor(){this.enterprise=new nk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class nk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const rk="recaptcha-enterprise",X0="NO_RECAPTCHA";class ik{constructor(e){this.type=rk,this.auth=Bo(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{bP(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new LP(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;lv(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(X0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tk().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&lv(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=XP();p.length!==0&&(p+=d),Y0(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function pv(n,e,t,i=!1,o=!1){const l=new ik(n);let c;if(o)c=X0;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function mv(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await pv(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await pv(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(n,e){const t=ys(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(nl(l,e??{}))return o;$n(o,"already-initialized")}return t.initialize({options:e})}function ok(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function ak(n,e,t){const i=Bo(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Z0(e),{host:c,port:d}=lk(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),uk()}function Z0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lk(n){const e=Z0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:gv(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:gv(c)}}}function gv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function uk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}async function ck(n,e){return Pi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(n,e){return Gc(n,"POST","/v1/accounts:signInWithPassword",_s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(n,e){return Gc(n,"POST","/v1/accounts:signInWithEmailLink",_s(n,e))}async function fk(n,e){return Gc(n,"POST","/v1/accounts:signInWithEmailLink",_s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends yp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ul(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ul(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mv(e,t,"signInWithPassword",hk);case"emailLink":return dk(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mv(e,i,"signUpPassword",ck);case"emailLink":return fk(e,{idToken:t,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(n,e){return Gc(n,"POST","/v1/accounts:signInWithIdp",_s(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="http://localhost";class fs extends yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=dp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new fs(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Io(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Io(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Io(e,t)}buildRequest(){const e={requestUri:pk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gk(n){const e=za($a(n)).link,t=e?za($a(e)).deep_link_id:null,i=za($a(n)).deep_link_id;return(i?za($a(i)).link:null)||i||t||e||n}class vp{constructor(e){var t,i,o,l,c,d;const p=za($a(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(i=p.oobCode)!==null&&i!==void 0?i:null,T=mk((o=p.mode)!==null&&o!==void 0?o:null);we(y&&_&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=_,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=gk(e);try{return new vp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,t){return ul._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=vp.parseLink(t);return we(i,"argument-error"),ul._fromEmailAndCode(e,i.code,i.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends ew{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends wl{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com";di.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return fi.credential(t,i)}catch{return null}}}fi.GOOGLE_SIGN_IN_METHOD="google.com";fi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends wl{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends wl{constructor(){super("twitter.com")}static credential(e,t){return fs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return mi.credential(t,i)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Lr._fromIdTokenResponse(e,i,o),c=yv(i);return new xo({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=yv(i);return new xo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function yv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends Wn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new wc(e,t,i,o)}}function tw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?wc._fromErrorAndOperation(n,l,e,i):l})}async function yk(n,e,t=!1){const i=await ll(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(n,e,t=!1){const{auth:i}=n;if(Or(i.app))return Promise.reject(wi(i));const o="reauthenticate";try{const l=await ll(n,tw(i,o,e,n),t);we(l.idToken,i,"internal-error");const c=mp(l.idToken);we(c,i,"internal-error");const{sub:d}=c;return we(n.uid===d,i,"user-mismatch"),xo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&$n(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(n,e,t=!1){if(Or(n.app))return Promise.reject(wi(n));const i="signIn",o=await tw(n,i,e),l=await xo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function _k(n,e){return nw(Bo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(n){const e=Bo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Ek(n,e,t){return Or(n.app)?Promise.reject(wi(n)):_k(fr(n),zo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&wk(n),i})}function Tk(n,e,t,i){return fr(n).onIdTokenChanged(e,t,i)}function Ik(n,e,t){return fr(n).beforeAuthStateChanged(e,t)}const Ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ec,"1"),this.storage.removeItem(Ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=1e3,Rk=10;class iw extends rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);qP()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Rk):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iw.type="LOCAL";const Ak=iw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw extends rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sw.type="SESSION";const ow=sw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Jc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await Ck(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=_p("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){return window}function kk(n){lr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function xk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ok(){return aw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="firebaseLocalStorageDb",Dk=1,Tc="firebaseLocalStorage",uw="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yc(n,e){return n.transaction([Tc],e?"readwrite":"readonly").objectStore(Tc)}function Lk(){const n=indexedDB.deleteDatabase(lw);return new El(n).toPromise()}function xf(){const n=indexedDB.open(lw,Dk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Tc,{keyPath:uw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Tc)?e(i):(i.close(),await Lk(),e(await xf()))})})}async function vv(n,e,t){const i=Yc(n,!0).put({[uw]:e,value:t});return new El(i).toPromise()}async function bk(n,e){const t=Yc(n,!1).get(e),i=await new El(t).toPromise();return i===void 0?null:i.value}function _v(n,e){const t=Yc(n,!0).delete(e);return new El(t).toPromise()}const Vk=800,Mk=3;class cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Mk)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(Ok()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xk(),!this.activeServiceWorker)return;this.sender=new Pk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xf();return await vv(e,Ec,"1"),await _v(e,Ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>vv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>bk(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_v(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Yc(o,!1).getAll();return new El(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cw.type="LOCAL";const Fk=cw;new _l(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(n,e){return e?br(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp extends yp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jk(n){return nw(n.auth,new wp(n),n.bypassAuthState)}function Bk(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),vk(t,new wp(n),n.bypassAuthState)}async function zk(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),yk(t,new wp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jk;case"linkViaPopup":case"linkViaRedirect":return zk;case"reauthViaPopup":case"reauthViaRedirect":return Bk;default:$n(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new _l(2e3,1e4);class yo extends hw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,yo.currentPopupAction&&yo.currentPopupAction.cancel(),yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=_p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$k.get())};e()}}yo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="pendingRedirect",ic=new Map;class qk extends hw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ic.get(this.auth._key());if(!e){try{const i=await Wk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ic.set(this.auth._key(),e)}return this.bypassAuthState||ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wk(n,e){const t=Qk(e),i=Gk(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function Kk(n,e){ic.set(n._key(),e)}function Gk(n){return br(n._redirectPersistence)}function Qk(n){return rc(Hk,n.config.apiKey,n.name)}async function Jk(n,e,t=!1){if(Or(n.app))return Promise.reject(wi(n));const i=Bo(n),o=Uk(i,e),c=await new qk(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=10*60*1e3;class Xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!dw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ar(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yk&&this.cachedEventUids.clear(),this.cachedEventUids.has(wv(e))}saveEventToCache(e){this.cachedEventUids.add(wv(e)),this.lastProcessedEventTime=Date.now()}}function wv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function dw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(n,e={}){return Pi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nx=/^https?/;async function rx(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ex(n);for(const t of e)try{if(ix(t))return}catch{}$n(n,"unauthorized-domain")}function ix(n){const e=Pf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!nx.test(t))return!1;if(tx.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=new _l(3e4,6e4);function Ev(){const n=lr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ox(n){return new Promise((e,t)=>{var i,o,l;function c(){Ev(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ev(),t(ar(n,"network-request-failed"))},timeout:sx.get()})}if(!((o=(i=lr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=lr().gapi)===null||l===void 0)&&l.load)c();else{const d=ek("iframefcb");return lr()[d]=()=>{gapi.load?c():t(ar(n,"network-request-failed"))},Y0(`${ZP()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw sc=null,e})}let sc=null;function ax(n){return sc=sc||ox(n),sc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=new _l(5e3,15e3),ux="__/auth/iframe",cx="emulator/auth/iframe",hx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fx(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?pp(e,cx):`https://${n.config.authDomain}/${ux}`,i={apiKey:e.apiKey,appName:n.name,v:Vo},o=dx.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function px(n){const e=await ax(n),t=lr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:fx(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hx,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=ar(n,"network-request-failed"),d=lr().setTimeout(()=>{l(c)},lx.get());function p(){lr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gx=500,yx=600,vx="_blank",_x="http://localhost";class Tv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wx(n,e,t,i=gx,o=yx){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},mx),{width:i.toString(),height:o.toString(),top:l,left:c}),y=Bt().toLowerCase();t&&(d=H0(y)?vx:t),z0(y)&&(e=e||_x,p.scrollbars="yes");const _=Object.entries(p).reduce((S,[L,N])=>`${S}${L}=${N},`,"");if(HP(y)&&d!=="_self")return Ex(e||"",d),new Tv(null);const T=window.open(e||"",d,_);we(T,n,"popup-blocked");try{T.focus()}catch{}return new Tv(T)}function Ex(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="__/auth/handler",Ix="emulator/auth/handler",Sx=encodeURIComponent("fac");async function Iv(n,e,t,i,o,l){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Vo,eventId:o};if(e instanceof ew){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",m1(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))c[_]=T}if(e instanceof wl){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),y=p?`#${Sx}=${encodeURIComponent(p)}`:"";return`${Rx(n)}?${pl(d).slice(1)}${y}`}function Rx({config:n}){return n.emulator?pp(n,Ix):`https://${n.authDomain}/${Tx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="webStorageSupport";class Ax{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ow,this._completeRedirectFn=Jk,this._overrideRedirectResult=Kk}async _openPopup(e,t,i,o){var l;Ur((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Iv(e,t,i,Pf(),o);return wx(e,c,_p())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Iv(e,t,i,Pf(),o);return kk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Ur(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await px(e),i=new Xk(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gd,{type:Gd},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Gd];c!==void 0&&t(!!c),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Q0()||$0()||gp()}}const Cx=Ax;var Sv="@firebase/auth",Rv="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xx(n){ur(new zn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J0(n)},y=new JP(i,o,l,p);return ok(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new zn("auth-internal",e=>{const t=Bo(e.getProvider("auth").getImmediate());return(i=>new Px(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Sv,Rv,kx(n)),Rn(Sv,Rv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=5*60,Ox=I_("authIdTokenMaxAge")||Nx;let Av=null;const Dx=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ox)return;const o=t==null?void 0:t.token;Av!==o&&(Av=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function fw(n=Wf()){const e=ys(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sk(n,{popupRedirectResolver:Cx,persistence:[Fk,Ak,ow]}),i=I_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=Dx(l.toString());Ik(t,c,()=>c(t.currentUser)),Tk(t,d=>c(d))}}const o=E_("auth");return o&&ak(t,`http://${o}`),t}function Lx(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}YP({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=ar("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Lx().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xx("Browser");var bx="firebase",Vx="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(bx,Vx,"app");const pw="@firebase/installations",Ep="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=1e4,gw=`w:${Ep}`,yw="FIS_v2",Mx="https://firebaseinstallations.googleapis.com/v1",Fx=60*60*1e3,Ux="installations",jx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ps=new gs(Ux,jx,Bx);function vw(n){return n instanceof Wn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w({projectId:n}){return`${Mx}/projects/${n}/installations`}function ww(n){return{token:n.token,requestStatus:2,expiresIn:$x(n.expiresIn),creationTime:Date.now()}}async function Ew(n,e){const i=(await e.json()).error;return ps.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Tw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function zx(n,{refreshToken:e}){const t=Tw(n);return t.append("Authorization",Hx(e)),t}async function Iw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function $x(n){return Number(n.replace("s","000"))}function Hx(n){return`${yw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=_w(n),o=Tw(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:yw,appId:n.appId,sdkVersion:gw},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await Iw(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:ww(y.authToken)}}else throw await Ew("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=/^[cdef][\w-]{21}$/,Nf="";function Gx(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Qx(n);return Kx.test(t)?t:Nf}catch{return Nf}}function Qx(n){return Wx(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new Map;function Aw(n,e){const t=Xc(n);Cw(t,e),Jx(t,e)}function Cw(n,e){const t=Rw.get(n);if(t)for(const i of t)i(e)}function Jx(n,e){const t=Yx();t&&t.postMessage({key:n,fid:e}),Xx()}let os=null;function Yx(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=n=>{Cw(n.data.key,n.data.fid)}),os}function Xx(){Rw.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx="firebase-installations-database",eN=1,ms="firebase-installations-store";let Qd=null;function Tp(){return Qd||(Qd=k_(Zx,eN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ms)}}})),Qd}async function Ic(n,e){const t=Xc(n),o=(await Tp()).transaction(ms,"readwrite"),l=o.objectStore(ms),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&Aw(n,e.fid),e}async function Pw(n){const e=Xc(n),i=(await Tp()).transaction(ms,"readwrite");await i.objectStore(ms).delete(e),await i.done}async function Zc(n,e){const t=Xc(n),o=(await Tp()).transaction(ms,"readwrite"),l=o.objectStore(ms),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!c||c.fid!==d.fid)&&Aw(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(n){let e;const t=await Zc(n.appConfig,i=>{const o=tN(i),l=nN(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Nf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function tN(n){const e=n||{fid:Gx(),registrationStatus:0};return kw(e)}function nN(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ps.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=rN(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iN(n)}:{installationEntry:e}}async function rN(n,e){try{const t=await qx(n,e);return Ic(n.appConfig,t)}catch(t){throw vw(t)&&t.customData.serverCode===409?await Pw(n.appConfig):await Ic(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function iN(n){let e=await Cv(n.appConfig);for(;e.registrationStatus===1;)await Sw(100),e=await Cv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Ip(n);return i||t}return e}function Cv(n){return Zc(n,e=>{if(!e)throw ps.create("installation-not-found");return kw(e)})}function kw(n){return sN(n)?{fid:n.fid,registrationStatus:0}:n}function sN(n){return n.registrationStatus===1&&n.registrationTime+mw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN({appConfig:n,heartbeatServiceProvider:e},t){const i=aN(n,t),o=zx(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:gw,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await Iw(()=>fetch(i,d));if(p.ok){const y=await p.json();return ww(y)}else throw await Ew("Generate Auth Token",p)}function aN(n,{fid:e}){return`${_w(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(n,e=!1){let t;const i=await Zc(n.appConfig,l=>{if(!xw(l))throw ps.create("not-registered");const c=l.authToken;if(!e&&cN(c))return l;if(c.requestStatus===1)return t=lN(n,e),l;{if(!navigator.onLine)throw ps.create("app-offline");const d=dN(l);return t=uN(n,d),d}});return t?await t:i.authToken}async function lN(n,e){let t=await Pv(n.appConfig);for(;t.authToken.requestStatus===1;)await Sw(100),t=await Pv(n.appConfig);const i=t.authToken;return i.requestStatus===0?Sp(n,e):i}function Pv(n){return Zc(n,e=>{if(!xw(e))throw ps.create("not-registered");const t=e.authToken;return fN(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uN(n,e){try{const t=await oN(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Ic(n.appConfig,i),t}catch(t){if(vw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Pw(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ic(n.appConfig,i)}throw t}}function xw(n){return n!==void 0&&n.registrationStatus===2}function cN(n){return n.requestStatus===2&&!hN(n)}function hN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Fx}function dN(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function fN(n){return n.requestStatus===1&&n.requestTime+mw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(n){const e=n,{installationEntry:t,registrationPromise:i}=await Ip(e);return i?i.catch(console.error):Sp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(n,e=!1){const t=n;return await gN(t),(await Sp(t,e)).token}async function gN(n){const{registrationPromise:e}=await Ip(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(n){if(!n||!n.options)throw Jd("App Configuration");if(!n.name)throw Jd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Jd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Jd(n){return ps.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="installations",vN="installations-internal",_N=n=>{const e=n.getProvider("app").getImmediate(),t=yN(e),i=ys(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},wN=n=>{const e=n.getProvider("app").getImmediate(),t=ys(e,Nw).getImmediate();return{getId:()=>pN(t),getToken:o=>mN(t,o)}};function EN(){ur(new zn(Nw,_N,"PUBLIC")),ur(new zn(vN,wN,"PRIVATE"))}EN();Rn(pw,Ep);Rn(pw,Ep,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="analytics",TN="firebase_id",IN="origin",SN=60*1e3,RN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Lc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pn=new gs("analytics","Analytics",AN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(n){if(!n.startsWith(Rp)){const e=pn.create("invalid-gtag-resource",{gtagURL:n});return sn.warn(e.message),""}return n}function Ow(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function PN(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function kN(n,e){const t=PN("firebase-js-sdk-policy",{createScriptURL:CN}),i=document.createElement("script"),o=`${Rp}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function xN(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function NN(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const p=(await Ow(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){sn.error(d)}n("config",o,l)}async function ON(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const d=await Ow(t);for(const p of c){const y=d.find(T=>T.measurementId===p),_=y&&e[y.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){sn.error(l)}}function DN(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[d,p]=c;await ON(n,e,t,d,p)}else if(l==="config"){const[d,p]=c;await NN(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=c;n("consent",d,p)}else if(l==="get"){const[d,p,y]=c;n("get",d,p,y)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){sn.error(d)}}return o}function LN(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=DN(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function bN(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Rp)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=30,MN=1e3;class FN{constructor(e={},t=MN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Dw=new FN;function UN(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function jN(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:UN(i)},l=RN.replace("{app-id}",t),c=await fetch(l,o);if(c.status!==200&&c.status!==304){let d="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw pn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function BN(n,e=Dw,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw pn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw pn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new HN;return setTimeout(async()=>{d.abort()},SN),Lw({appId:i,apiKey:o,measurementId:l},c,d,e)}async function Lw(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=Dw){var l;const{appId:c,measurementId:d}=n;try{await zN(i,e)}catch(p){if(d)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:d};throw p}try{const p=await jN(n);return o.deleteThrottleMetadata(c),p}catch(p){const y=p;if(!$N(y)){if(o.deleteThrottleMetadata(c),d)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:c,measurementId:d};throw p}const _=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?cy(t,o.intervalMillis,VN):cy(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(c,T),sn.debug(`Calling attemptFetch again in ${_} millis`),Lw(n,T,i,o)}}function zN(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(pn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $N(n){if(!(n instanceof Wn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class HN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qN(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c=Object.assign(Object.assign({},i),{send_to:l});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(){if(R_())try{await A_()}catch(n){return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function KN(n,e,t,i,o,l,c){var d;const p=BN(n);p.then(L=>{t[L.measurementId]=L.appId,n.options.measurementId&&L.measurementId!==n.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${L.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(L=>sn.error(L)),e.push(p);const y=WN().then(L=>{if(L)return i.getId()}),[_,T]=await Promise.all([p,y]);bN(l)||kN(l,_.measurementId),o("js",new Date);const S=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return S[IN]="firebase",S.update=!0,T!=null&&(S[TN]=T),o("config",_.measurementId,S),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.app=e}_delete(){return delete Za[this.app.options.appId],Promise.resolve()}}let Za={},kv=[];const xv={};let Yd="dataLayer",QN="gtag",Nv,bw,Ov=!1;function JN(){const n=[];if(S_()&&n.push("This is a browser extension environment."),h1()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=pn.create("invalid-analytics-context",{errorInfo:e});sn.warn(t.message)}}function YN(n,e,t){JN();const i=n.options.appId;if(!i)throw pn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pn.create("no-api-key");if(Za[i]!=null)throw pn.create("already-exists",{id:i});if(!Ov){xN(Yd);const{wrappedGtag:l,gtagCore:c}=LN(Za,kv,xv,Yd,QN);bw=l,Nv=c,Ov=!0}return Za[i]=KN(n,kv,xv,e,Nv,Yd,t),new GN(n)}function XN(n=Wf()){n=fr(n);const e=ys(n,Sc);return e.isInitialized()?e.getImmediate():ZN(n)}function ZN(n,e={}){const t=ys(n,Sc);if(t.isInitialized()){const o=t.getImmediate();if(nl(e,t.getOptions()))return o;throw pn.create("already-initialized")}return t.initialize({options:e})}function eO(n,e,t,i){n=fr(n),qN(bw,Za[n.app.options.appId],e,t,i).catch(o=>sn.error(o))}const Dv="@firebase/analytics",Lv="0.10.10";function tO(){ur(new zn(Sc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return YN(i,o,t)},"PUBLIC")),ur(new zn("analytics-internal",n,"PRIVATE")),Rn(Dv,Lv),Rn(Dv,Lv,"esm2017");function n(e){try{const t=e.getProvider(Sc).getImmediate();return{logEvent:(i,o,l)=>eO(t,i,o,l)}}catch(t){throw pn.create("interop-component-reg-failed",{reason:t})}}}tO();const Ap={apiKey:"AIzaSyCt-nEdJm9-fnfKIMPEqo8WLTO9XO3kVr8",authDomain:"kasper-weather-app.firebaseapp.com",projectId:"kasper-weather-app",storageBucket:"kasper-weather-app.firebasestorage.app",messagingSenderId:"366864081994",appId:"1:366864081994:web:d35caba4882b713b97f2b3",measurementId:"G-1LFDFPGGFV"},Vw=bc(Ap);XN(Vw);k0(Vw);const nO=()=>{const n=bc(Ap),e=k0(n);fw(n);const[t,i]=W.useState(""),[o,l]=W.useState(""),[c,d]=W.useState(null),[p,y]=W.useState([]),[_,T]=W.useState(""),[S,L]=W.useState(""),[N,F]=W.useState(!1),[O,q]=W.useState(!1),[K,ee]=W.useState([]),oe="1754bdebe169aa8d7cae58f8eb0c507e",fe=async()=>{F(!0),T("");try{const I=await ht.get(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=${oe}`);d(I.data)}catch{T("Kaupunkia ei löytynyt."),d(null)}F(!1)},me=async()=>{try{const R=(await ov(rv(e,"weatherData"))).docs.map(b=>b.data().city),P=[...new Set(R)];ee(P)}catch{L("Virhe haettaessa kaupunkeja Firestoresta.")}},x=async()=>{if(!o){L("Valitse kaupunki ennen hakua");return}q(!0),L("");try{const R=(await ov(rv(e,"weatherData"))).docs.map(P=>P.data()).filter(P=>P.city.toLowerCase()===o.toLowerCase());R.length>0?y(R):(L("Ei löytynyt tallennettuja säätiedoja tälle kaupungille."),y([]))}catch{L("Virhe haettaessa säädataa Firestoresta.")}q(!1)};return W.useEffect(()=>{me()},[]),Q.jsxs("div",{className:"weather-container",children:[Q.jsx("h1",{children:"Säätiedot"}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Tämänhetkinen sää"}),Q.jsx("input",{type:"text",placeholder:"Anna kaupungin nimi",value:t,onChange:I=>i(I.target.value)}),Q.jsx("button",{onClick:fe,disabled:N,children:N?"Ladataan...":"Hae sää"}),_&&Q.jsx("p",{style:{color:"red"},children:_}),c&&Q.jsxs("div",{children:[Q.jsx("h3",{children:c.name}),Q.jsxs("p",{children:["Lämpötila: ",c.main.temp," °C"]}),Q.jsxs("p",{children:["Kuvaus: ",c.weather[0].description]})]})]}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Tallennetut säätiedot"}),Q.jsxs("select",{value:o,onChange:I=>l(I.target.value),children:[Q.jsx("option",{value:"",children:"Valitse kaupunki"}),K.map((I,R)=>Q.jsx("option",{value:I,children:I},R))]}),Q.jsx("button",{onClick:x,disabled:O,children:O?"Ladataan...":"Hae tallennetut säätiedot"}),S&&Q.jsx("p",{style:{color:"red"},children:S}),p.length>0&&p.map((I,R)=>Q.jsxs("div",{children:[Q.jsx("h3",{children:I.city}),Q.jsxs("p",{children:["Lämpötila: ",I.weather.temp," °C"]}),Q.jsxs("p",{children:["Kuvaus: ",I.weather.desc]}),Q.jsxs("p",{children:["Tallennettu: ",new Date(I.timestamp).toLocaleString()]})]},R))]})]})},rO=()=>Q.jsxs("div",{className:"report-container",children:[Q.jsx("h2",{children:"Responsiivisuus:"}),Q.jsx("p",{children:"Sivusto mukautuu erikokoisiin näyttöihin / resoluutioihin, toimii responsiivisesti ainakin puhelimella ja tietokoneella testattuna."}),Q.jsx("h2",{children:"Selaintuki:"}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Chrome (v131)"})," Ei havaittuja ongelmia."]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Firefox (v133)"})," Ei havaittuja ongelmia."]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Edge (v131)"})," Ei havaittuja ongelmia."]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Firefox Mobiili (v133)"})," Pientä skaalausongelmaa raportointisivustolla, mutta muuten ei ongelmia."]}),Q.jsx("h2",{children:"Latausajat:"}),Q.jsx("p",{children:"Sivuston latausaika on nopea omissa testeissä eri laitteilla. Lisäksi kirjautuminen Firebase authentikaatiossa toimii, REST API Weather App toimii nopeasti ja Firebase Databasesta voi hakea tallennettuja säätietoja."}),Q.jsx("p",{children:"Tarkempaan latausaikojen testaamiseen käytin vielä Google PageSpeed Insights työkalua"}),Q.jsx("h3",{children:"Mobiili:"}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Performance:"})," 86/100p."]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"First Contentful Paint:"})," 1.4s"]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Total Blocking Time:"})," 0ms"]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Speed Index:"})," 2.7s"]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Largest Contentful Paint:"})," 4.1s - Tämä rokottaa mobiililla pisteissä, ilmeisesti JavaScriptin takia."]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Cumulative Layout Shift:"})," 0"]}),Q.jsx("h3",{children:"Työpöytä:"}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Performance:"})," 100/100p."]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"First Contentful Paint:"})," 0.3s"]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Total Blocking Time:"})," 20ms"]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Speed Index:"})," 0.4s"]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Largest Contentful Paint:"})," 0.5s"]}),Q.jsxs("p",{children:[Q.jsx("strong",{children:"Cumulative Layout Shift:"})," 0"]})]}),iO=({onLogin:n})=>{const e=bc(Ap),t=fw(e),[i,o]=W.useState(""),[l,c]=W.useState(""),[d,p]=W.useState(null),y=Vf(),_=async T=>{T.preventDefault();try{const L=(await Ek(t,i,l)).user;n(L),y("/")}catch{p("Invalid email or password. Please try again.")}};return Q.jsxs("div",{children:[Q.jsx("h2",{children:"Login"}),Q.jsxs("form",{onSubmit:_,children:[Q.jsxs("div",{children:[Q.jsx("label",{children:"Email:"}),Q.jsx("input",{type:"email",value:i,onChange:T=>o(T.target.value),required:!0})]}),Q.jsxs("div",{children:[Q.jsx("label",{children:"Password:"}),Q.jsx("input",{type:"password",value:l,onChange:T=>c(T.target.value),required:!0})]}),Q.jsx("button",{type:"submit",children:"Login"})]}),d&&Q.jsx("p",{style:{color:"red"},children:d})]})},sO=()=>{const[n,e]=W.useState(null),t=o=>{e(o)},i=({children:o})=>n?o:Q.jsx(MT,{to:"/login",replace:!0});return Q.jsx(uI,{children:Q.jsxs("div",{className:"app-container",children:[Q.jsxs("header",{className:"app-header",children:[Q.jsx("h1",{children:"Päivän säätiedot"}),Q.jsx("nav",{children:Q.jsxs("ul",{className:"nav-links",children:[Q.jsx("li",{children:Q.jsx(Ka,{to:n?"/":"/login",children:"Etusivu"})}),Q.jsx("li",{children:Q.jsx(Ka,{to:n?"/weather":"/login",children:"Säätiedot"})}),Q.jsx("li",{children:Q.jsx(Ka,{to:n?"/reports":"/login",children:"Raportti"})})]})})]}),Q.jsx("main",{className:"app-content",children:Q.jsxs(UT,{children:[Q.jsx(Ba,{path:"/login",element:Q.jsx(iO,{onLogin:t})}),Q.jsx(Ba,{path:"/",element:Q.jsx(i,{children:Q.jsx(_I,{})})}),Q.jsx(Ba,{path:"/weather",element:Q.jsx(i,{children:Q.jsx(nO,{})})}),Q.jsx(Ba,{path:"/reports",element:Q.jsx(i,{children:Q.jsx(rO,{})})})]})}),Q.jsx("footer",{className:"app-footer",children:Q.jsxs("p",{children:["Weather App © 2024."," ",Q.jsx("a",{href:"https://home.openweathermap.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"white",textDecoration:"underline"},children:"OpenWeather API"})]})})]})})};GE.createRoot(document.getElementById("root")).render(Q.jsx(W.StrictMode,{children:Q.jsx(sO,{})}));
