var Hv=Object.defineProperty,Wv=Object.defineProperties;var Kv=Object.getOwnPropertyDescriptors;var $i=Object.getOwnPropertySymbols,qv=Object.getPrototypeOf,Bu=Object.prototype.hasOwnProperty,$u=Object.prototype.propertyIsEnumerable,Gv=Reflect.get;var Ho=Math.pow,Uu=(t,e,n)=>e in t?Hv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,D=(t,e)=>{for(var n in e||(e={}))Bu.call(e,n)&&Uu(t,n,e[n]);if($i)for(var n of $i(e))$u.call(e,n)&&Uu(t,n,e[n]);return t},H=(t,e)=>Wv(t,Kv(e));var pe=(t,e)=>{var n={};for(var s in t)Bu.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&$i)for(var s of $i(t))e.indexOf(s)<0&&$u.call(t,s)&&(n[s]=t[s]);return n};var Yv=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var hn=(t,e,n)=>Gv(qv(t),n,e);var S=(t,e,n)=>new Promise((s,i)=>{var r=l=>{try{c(n.next(l))}catch(h){i(h)}},o=l=>{try{c(n.throw(l))}catch(h){i(h)}},c=l=>l.done?s(l.value):Promise.resolve(l.value).then(r,o);c((n=n.apply(t,e)).next())});import{r as N,a as Xv,R as at}from"./vendor-react-DbiWhUg4.js";var Ix=Yv(Fl=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Jf={exports:{}},Jr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=N,Jv=Symbol.for("react.element"),Zv=Symbol.for("react.fragment"),e0=Object.prototype.hasOwnProperty,t0=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n0={key:!0,ref:!0,__self:!0,__source:!0};function Zf(t,e,n){var s,i={},r=null,o=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)e0.call(e,s)&&!n0.hasOwnProperty(s)&&(i[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:Jv,type:t,key:r,ref:o,props:i,_owner:t0.current}}Jr.Fragment=Zv;Jr.jsx=Zf;Jr.jsxs=Zf;Jf.exports=Jr;var y=Jf.exports,ep,tp,zu=Xv;tp=zu.createRoot,ep=zu.hydrateRoot;var np={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Hu=at.createContext&&at.createContext(np),s0=["attr","size","title"];function i0(t,e){if(t==null)return{};var n=r0(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function r0(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function wr(){return wr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},wr.apply(this,arguments)}function Wu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function Tr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wu(Object(n),!0).forEach(function(s){o0(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wu(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function o0(t,e,n){return e=a0(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a0(t){var e=c0(t,"string");return typeof e=="symbol"?e:e+""}function c0(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function sp(t){return t&&t.map((e,n)=>at.createElement(e.tag,Tr({key:n},e.attr),sp(e.child)))}function fe(t){return e=>at.createElement(l0,wr({attr:Tr({},t.attr)},e),sp(t.child))}function l0(t){var e=n=>{var{attr:s,size:i,title:r}=t,o=i0(t,s0),c=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),at.createElement("svg",wr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,o,{className:l,style:Tr(Tr({color:t.color||n.color},n.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),r&&at.createElement("title",null,r),t.children)};return Hu!==void 0?at.createElement(Hu.Consumer,null,n=>e(n)):e(np)}function u0(t){return fe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(t)}function h0(t){return fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(t)}function d0(t){return fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function f0(t){return fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function p0(t){return fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(t)}function m0(t){return fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"},child:[]}]})(t)}function g0(t){return fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(t)}function y0(t){return fe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function v0(t){return fe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function _0(t){return fe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(t)}function w0(t){return fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function T0(t){return fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"},child:[]}]})(t)}function E0(t){return fe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(t)}function I0(t){return fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"},child:[]}]})(t)}function A0(t){return fe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(t)}function b0(t){return fe({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}const S0=typeof window!="undefined"&&(window.navigator.userAgent==="ReactSnap"||window.__PRERENDER_INJECTED),P0=typeof window!="undefined"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&!S0,C0=[{name:"Kone Consult",description:"Mentorship & research",logo:"/app-consult.svg",color:"consult",glow:"rgba(37, 99, 235, 0.12)",url:"https://consult.koneacademy.io"},{name:"Kone Code",description:"Software development",logo:"/app-code.svg",color:"code",glow:"rgba(34, 197, 94, 0.12)",url:"https://code.koneacademy.io"},{name:"Kone Lab",description:"Hardware & embedded",logo:"/app-lab.svg",color:"lab",glow:"rgba(168, 85, 247, 0.12)",url:"https://lab.koneacademy.io"},{name:"Kone Digital",description:"Cloud infrastructure",logo:"/app-digital.svg",color:"digital",glow:"rgba(0, 255, 255, 0.12)",url:"https://digital.koneacademy.io"},{name:"Anim Studio",description:"3D animation tools",logo:"/app-studio.svg",color:"studio",glow:"rgba(239, 68, 68, 0.12)",url:P0?"http://localhost:5175/#/anim-studio":"https://lab.koneacademy.io/#/anim-studio"},{name:"Kone Kids",description:"Early tech education",logo:"/app-kids.svg",color:"kids",glow:"rgba(245, 158, 11, 0.12)",url:"https://kids.koneacademy.io"},{name:"Kone Shop",description:"Hardware store",logo:"/app-shop.svg",color:"shop",glow:"rgba(236, 72, 153, 0.12)",url:"https://shop.koneacademy.io"},{name:"Kone Pay",description:"Secure transactions",logo:"/app-pay.svg",color:"pay",glow:"rgba(255, 215, 0, 0.12)",url:"https://consult.koneacademy.io/pay"}],Ku=()=>{const[t,e]=N.useState(!1),n=N.useRef(null);return N.useEffect(()=>{const s=i=>{n.current&&!n.current.contains(i.target)&&e(!1)};return t&&document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[t]),N.useEffect(()=>{const s=i=>{i.key==="Escape"&&e(!1)};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[]),y.jsxs("div",{className:"app-launcher",ref:n,children:[y.jsx("button",{className:`app-launcher-trigger ${t?"active":""}`,onClick:()=>e(!t),"aria-label":"Open app launcher",title:"Kone Apps",children:y.jsx("span",{className:"waffle-icon",children:[...Array(9)].map((s,i)=>y.jsx("span",{className:"waffle-dot"},i))})}),y.jsxs("div",{className:`app-launcher-dropdown ${t?"open":""}`,children:[y.jsx("div",{className:"app-launcher-dropdown-header",children:"Kone Ecosystem"}),y.jsx("div",{className:"app-grid",children:C0.map((s,i)=>y.jsxs("a",{className:"app-grid-item",href:s.url,target:"_blank",rel:"noopener noreferrer",style:{"--item-glow":s.glow,"--anim-delay":`${i*.08}s`},onClick:()=>e(!1),children:[y.jsx("div",{className:`app-icon app-icon--${s.color}`,children:y.jsx("img",{src:s.logo,alt:s.name,className:"app-icon-img"})}),y.jsxs("div",{className:"app-text-content",children:[y.jsx("span",{className:"app-label",children:s.name}),s.description&&y.jsx("span",{className:"app-description",children:s.description})]})]},s.name))})]})]})},sr={blue:{name:"Neon Blue",primary:"#58a6ff",secondary:"#bc8cff",glow:"rgba(88, 166, 255, 0.3)",textAccent:"#58a6ff"},green:{name:"Matrix Green",primary:"#3fb950",secondary:"#00ffcc",glow:"rgba(63, 185, 80, 0.3)",textAccent:"#3fb950"},pink:{name:"Cyberpunk Pink",primary:"#ec4899",secondary:"#f43f5e",glow:"rgba(236, 72, 153, 0.3)",textAccent:"#ec4899"},orange:{name:"Lava Orange",primary:"#f59e0b",secondary:"#ef4444",glow:"rgba(245, 158, 11, 0.3)",textAccent:"#f59e0b"},purple:{name:"Galactic Purple",primary:"#9333ea",secondary:"#c084fc",glow:"rgba(147, 51, 234, 0.3)",textAccent:"#9333ea"}},Aa=t=>{const e=sr[t];if(!e)return;const n=document.documentElement;n.style.setProperty("--accent-primary",e.primary),n.style.setProperty("--accent-secondary",e.secondary),n.style.setProperty("--shadow-glow",`0 0 15px ${e.glow}`),n.style.setProperty("--text-accent",e.textAccent)},qu=()=>{const[t,e]=N.useState(!1),[n,s]=N.useState("blue"),i=N.useRef(null);N.useEffect(()=>{const o=localStorage.getItem("kca-neon-theme");if(o&&sr[o]){s(o),Aa(o);const c=`/logo-circle-${o}.svg`,l=document.querySelector('link[rel="icon"]'),h=document.querySelector('link[rel="apple-touch-icon"]');l&&(l.href=c),h&&(h.href=c)}},[]),N.useEffect(()=>{const o=c=>{i.current&&!i.current.contains(c.target)&&e(!1)};return t&&document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[t]),N.useEffect(()=>{const o=c=>{c.key==="Escape"&&e(!1)};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[]);const r=o=>{s(o),Aa(o),localStorage.setItem("kca-neon-theme",o),e(!1);const c=`/logo-circle-${o}.svg`,l=document.querySelector('link[rel="icon"]'),h=document.querySelector('link[rel="apple-touch-icon"]');l&&(l.href=c),h&&(h.href=c),window.dispatchEvent(new CustomEvent("themeChanged",{detail:o}))};return y.jsxs("div",{className:"theme-selector",ref:i,children:[y.jsx("button",{className:`theme-selector-trigger ${t?"active":""}`,onClick:()=>e(!t),"aria-label":"Change neon theme",title:"Change neon theme",children:y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"palette-icon",children:[y.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32621 19.4676 5.86435 19.8517 6.45265 20.1342C6.73273 20.2687 7.04257 20.3019 7.33718 20.2223C7.92639 20.0631 8.57724 19.9234 9.27315 19.8242C9.80554 19.7483 10.3475 19.897 10.7411 20.2452L10.7816 20.281C11.1444 20.6019 11.4552 21.0118 11.6848 21.4883C11.7947 21.7166 11.8906 21.9566 12 22Z"}),y.jsx("circle",{cx:"7.5",cy:"10.5",r:"1.5",fill:"var(--accent-primary)"}),y.jsx("circle",{cx:"11.5",cy:"7.5",r:"1.5",fill:"var(--accent-secondary)"}),y.jsx("circle",{cx:"16.5",cy:"9.5",r:"1.5",fill:"#3fb950"}),y.jsx("circle",{cx:"15.5",cy:"14.5",r:"1.5",fill:"#f59e0b"})]})}),y.jsxs("div",{className:`theme-selector-dropdown ${t?"open":""}`,children:[y.jsx("div",{className:"theme-selector-dropdown-header",children:"Neon Style Accent"}),y.jsx("div",{className:"theme-options-list",children:Object.keys(sr).map(o=>{const c=sr[o];return y.jsxs("button",{className:`theme-option-item ${n===o?"active":""}`,onClick:()=>r(o),children:[y.jsx("span",{className:"color-dot",style:{background:`linear-gradient(135deg, ${c.primary}, ${c.secondary})`,boxShadow:`0 0 10px ${c.glow}`}}),y.jsx("span",{className:"theme-label",children:c.name}),n===o&&y.jsx("span",{className:"check-mark",children:"✓"})]},o)})})]})]})},R0=()=>{const[t,e]=N.useState(!1),[n,s]=N.useState(!1),[i,r]=N.useState("blue"),o=typeof window!="undefined"&&(window.navigator.userAgent==="ReactSnap"||window.__PRERENDER_INJECTED),c=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&!o?"http://localhost:3001/login":"https://consult.koneacademy.io/login";N.useEffect(()=>{const m=localStorage.getItem("kca-neon-theme")||"blue";r(m);const v=()=>{e(window.scrollY>50)},I=k=>{r(k.detail)};return window.addEventListener("scroll",v),window.addEventListener("themeChanged",I),()=>{window.removeEventListener("scroll",v),window.removeEventListener("themeChanged",I)}},[]);const h={blue:"/logo-circle-blue.svg",green:"/logo-circle-green.svg",pink:"/logo-circle-pink.svg",orange:"/logo-circle-orange.svg",purple:"/logo-circle-purple.svg"}[i]||"/logo-circle-blue.svg",d=()=>{s(!n)},p=()=>{s(!1)};return y.jsx("header",{className:`header ${t?"scrolled":""}`,children:y.jsxs("div",{className:"header-container",children:[y.jsxs("div",{className:"logo",children:[y.jsx("img",{src:h,alt:"KCA Logo",className:"logo-icon",style:{width:"40px",height:"40px"}}),y.jsx("span",{className:"logo-text",children:"Kone Academy"})]}),y.jsx("div",{className:"mobile-toggle",onClick:d,children:n?y.jsx(b0,{}):y.jsx(v0,{})}),y.jsxs("nav",{className:`nav-menu ${n?"active":""}`,children:[y.jsx("a",{href:"#vision",className:"nav-link",onClick:p,children:"Vision"}),y.jsx("a",{href:"#divisions",className:"nav-link",onClick:p,children:"Divisions"}),y.jsx("a",{href:"#services",className:"nav-link",onClick:p,children:"Services"}),y.jsx("a",{href:"#careers",className:"nav-link",onClick:p,children:"Careers"}),y.jsxs("div",{className:"mobile-actions",children:[y.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[y.jsx(Ku,{}),y.jsx(qu,{})]}),y.jsx("a",{href:c,className:"btn-login",style:{display:"block",marginBottom:"1rem",textAlign:"center",textDecoration:"none",color:"var(--text-primary)"},children:"Login"}),y.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{textDecoration:"none",display:"inline-block",textAlign:"center"},children:"Get Started"})]})]}),y.jsxs("div",{className:"header-actions desktop-only",children:[y.jsx(Ku,{}),y.jsx(qu,{}),y.jsx("a",{href:c,className:"btn-login",style:{marginRight:"1rem",textDecoration:"none",color:"var(--text-primary)",fontWeight:"500"},children:"Login"}),y.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{textDecoration:"none"},children:"Get Started"})]})]})})},Gu={help:`Available commands:
  about       - Vision and purpose of Kone Academy
  divisions   - Overview of our 3 core modules (Consult, Code, Lab)
  neofetch    - Show system information and ASCII brand logo
  join        - Links and instructions to start learning
  clear       - Clear the terminal history
  easteregg   - Reveal a secret developer message`,about:`Kone Academy is a multidisciplinary technology and innovation collective.
We foster a global community of learners, researchers, and builders,
where high-quality education and professional resources are made accessible.
We leverage collective talent to provide custom, high-performance solutions.
Research, code, and engineer the future the right way.`,divisions:`🔬 [RESEARCH] Kone Consult:
  Research guidance, topic selection, and complex data analysis.
  Active - Empowering academic and professional publications.

💻 [CODING] Kone Code:
  Software development and comprehensive programming (Python, C++, R).
  Enrollment Open - Master deep computational concepts.

🛠️ [ENGINEERING] Kone Lab:
  Practical engineering, 3D modeling, and embedded systems.
  Lab Access - Arduino, circuit simulation, and automation.`,join:`Ready to initialize your journey?
1. Click the "Start Learning" button in the Hero section.
2. Direct Application: https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform
3. Join our Discord Community to collaborate: https://discord.gg/Ab4SCxPgUK`,easteregg:`Congratulations, you found a hidden segment!
  
"The best way to predict the future is to invent it." - Alan Kay
Engineered with precision by the Kone Academy developer collective.
Thank you for exploring our ecosystem! 🚀`,neofetch:`      .::::::::.     OS: KCA-OS v1.2.0
    .::'      '::.   Host: Kone Academy Collective
   .::          ::.  Ecosystem: Active / Online
   ::.   K C A  .::  Kernel: React 18 / Vite 5
   '::.        .::'  Theme: Deep Slate / Neon Blue
     '::::::::'      Uptime: 2026 cycles`},Yu=["Kone Academy [Version 1.2.0]","Initializing KCA-OS core services...","✓ Research Engine (Kone Consult) loaded.","✓ Coding Engine (Kone Code) active.","✓ Engineering Engine (Kone Lab) online.","",'Type "help" to explore the academy.',""],x0=()=>{const[t,e]=N.useState([]),[n,s]=N.useState(""),[i,r]=N.useState(0),[o,c]=N.useState(!0),l=N.useRef(null),h=N.useRef(null);N.useEffect(()=>{if(i<Yu.length){const v=setTimeout(()=>{e(I=>[...I,{type:"output",text:Yu[i]}]),r(I=>I+1)},i===1?400:150);return()=>clearTimeout(v)}else c(!1)},[i]),N.useEffect(()=>{l.current&&(l.current.scrollTop=l.current.scrollHeight)},[t]);const d=()=>{h.current&&h.current.focus()},p=m=>{if(m.key==="Enter"){const v=n.trim().toLowerCase(),I=[...t,{type:"input",text:n}];if(v===""){e(I),s("");return}v==="clear"?e([]):Gu[v]?e([...I,{type:"output",text:Gu[v]}]):e([...I,{type:"output",text:`bash: command not found: ${n}. Type "help" to see available commands.`}]),s("")}};return y.jsxs("div",{className:"terminal-window glass-panel",onClick:d,children:[y.jsxs("div",{className:"terminal-header",children:[y.jsx("div",{className:"dot red"}),y.jsx("div",{className:"dot yellow"}),y.jsx("div",{className:"dot green"}),y.jsx("div",{className:"terminal-title",children:"bash — ka-cli"})]}),y.jsxs("div",{className:"terminal-body",ref:l,children:[y.jsx("div",{className:"terminal-history",children:t.map((m,v)=>y.jsx("div",{className:m.type==="input"?"terminal-line":"terminal-output",children:m.type==="input"?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"prompt",children:"user@ka:~$"}),y.jsx("span",{className:"command",children:m.text})]}):y.jsx("pre",{children:m.text})},v))}),!o&&y.jsxs("div",{className:"terminal-input-line",children:[y.jsx("span",{className:"prompt",children:"user@ka:~$"}),y.jsx("span",{className:"typed-input",children:n}),y.jsx("span",{className:"cursor",children:"|"}),y.jsx("input",{ref:h,type:"text",className:"hidden-terminal-input",value:n,onChange:m=>s(m.target.value),onKeyDown:p,"aria-label":"Terminal prompt input",autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"})]})]})]})},k0=()=>{const t=typeof window!="undefined"&&(window.navigator.userAgent==="ReactSnap"||window.__PRERENDER_INJECTED),e=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&!t?"http://localhost:3001/docs?category=general":"https://consult.koneacademy.io/docs?category=general";return y.jsxs("section",{className:"hero",id:"home",children:[y.jsxs("div",{className:"hero-container",children:[y.jsxs("div",{className:"hero-content",children:[y.jsx("div",{className:"badge",children:"v1.2 Now Available"}),y.jsxs("h1",{className:"hero-title",children:["Research. Coding.",y.jsx("br",{}),y.jsx("span",{className:"text-gradient",children:"Engineering."})]}),y.jsxs("p",{className:"hero-subtitle",children:["The open-source initiative dedicated to pioneering research and building the next generation of engineers.",y.jsx("br",{}),y.jsx("span",{className:"text-white",children:"Research, code, and engineer the future the right way."})]}),y.jsxs("div",{className:"hero-actions",children:[y.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header",target:"_blank",rel:"noreferrer",className:"btn-primary big",style:{textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:"Start Learning"}),y.jsx("a",{href:e,target:"_blank",rel:"noreferrer",className:"btn-secondary big",style:{textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:"View Documentation"})]})]}),y.jsx("div",{className:"hero-visual",children:y.jsx(x0,{})})]}),y.jsx("div",{className:"hero-background-glow"})]})},V0=()=>y.jsx("section",{className:"vision",id:"vision",children:y.jsxs("div",{className:"vision-container glass-panel",children:[y.jsxs("h2",{className:"section-title",children:["Our ",y.jsx("span",{className:"text-gradient",children:"Purpose"})]}),y.jsxs("div",{className:"vision-grid",children:[y.jsxs("div",{className:"vision-card",children:[y.jsx("h3",{className:"card-title",children:"Vision"}),y.jsx("p",{className:"vision-text",children:"Kone Academy is a multidisciplinary technology and innovation collective. We foster a powerful, global community of learners, researchers, and builders, where high-quality education and professional resources are made accessible to everyone. We blend deep educational accessibility with cutting-edge engineering, leveraging our collective talent to provide custom, high-performance digital, creative, and strategic solutions. From personalized learning pathways to commercial B2B growth platforms, we empower innovators and businesses at all levels to solve real-world problems through advanced design and computational precision."})]}),y.jsxs("div",{className:"vision-card",children:[y.jsx("h3",{className:"card-title",children:"Mission"}),y.jsx("p",{className:"vision-text",children:"Our mission is to empower innovators and developers at all levels by merging world-class software education and research with high-performance engineering, deploying custom digital solutions and creative services that deliver measurable results and sustainable competitive advantage to businesses."})]})]})]})}),D0=()=>{const t=typeof window!="undefined"&&(window.navigator.userAgent==="ReactSnap"||window.__PRERENDER_INJECTED),e=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&!t,n=[{id:"research",title:"Research",subtitle:"Kone Consult",icon:"🔬",description:"Research, data analysis, and mentorship.",features:["Topic Selection","Data Analysis","Writing"],status:"Active",link:e?"http://localhost:3001/":"https://consult.koneacademy.io/"},{id:"coding",title:"Coding",subtitle:"Kone Code",icon:"💻",description:"Software development and general programming from Python to C++ and R.",features:["Python Masterclass","Web Development","Data Science"],status:"Enrollment Open",link:e?"http://localhost:5174/":"https://code.koneacademy.io/"},{id:"engineering",title:"Engineering",subtitle:"Kone Lab",icon:"🛠️",description:"Practical engineering, 3D modeling, and embedded systems.",features:["Arduino","3D Simulation","Circuit Design"],status:"Lab Access",link:e?"http://localhost:5175/":"https://lab.koneacademy.io/"}];return y.jsxs("section",{className:"divisions",id:"divisions",children:[y.jsxs("div",{className:"section-header",children:[y.jsxs("h2",{className:"section-title",children:["Core ",y.jsx("span",{className:"text-gradient",children:"Modules"})]}),y.jsx("p",{className:"section-subtitle",children:"Select a specialized division to begin your journey."})]}),y.jsx("div",{className:"divisions-grid",children:n.map((s,i)=>y.jsxs("div",{className:"division-card glass-panel",children:[y.jsxs("div",{className:"card-header",children:[y.jsx("div",{className:"card-icon",children:s.icon}),y.jsxs("div",{className:"card-status",children:[y.jsx("span",{className:"status-dot",style:{animationDelay:`${i*.4}s`}}),s.status]})]}),y.jsxs("div",{className:"card-content",children:[y.jsx("h3",{className:"card-title",children:s.title}),y.jsx("p",{className:"card-subtitle",children:s.subtitle}),y.jsx("p",{className:"card-description",children:s.description}),y.jsx("div",{className:"card-features",children:s.features.map((r,o)=>y.jsx("span",{className:"feature-tag",children:r},o))})]}),y.jsx("div",{className:"card-footer",children:y.jsx("a",{href:s.link,className:"btn-link",target:s.link!=="#"?"_blank":"_self",rel:"noopener noreferrer",children:"Access Module →"})})]},s.id))})]})};function N0(t){return fe({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"},child:[]}]})(t)}function M0(t){return fe({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2.746c-6.627 0-12 3.599-12 8.037 0 3.897 4.144 7.144 9.64 7.88V16.26c-2.924-.915-4.925-2.755-4.925-4.877 0-3.035 4.084-5.494 9.12-5.494 5.038 0 8.757 1.683 8.757 5.494 0 1.976-.999 3.379-2.662 4.272.09.066.174.128.258.216.169.149.25.363.372.544 2.128-1.45 3.44-3.437 3.44-5.631 0-4.44-5.373-8.038-12-8.038zm-2.111 4.99v13.516l4.093-.002-.002-5.291h1.1c.225 0 .321.066.549.25.272.22.715.982.715.982l2.164 4.063 4.627-.002-2.864-4.826s-.086-.193-.265-.383a2.22 2.22 0 00-.582-.416c-.422-.214-1.149-.434-1.149-.434s3.578-.264 3.578-3.826c0-3.562-3.744-3.63-3.744-3.63zm4.127 2.93l2.478.002s1.149-.062 1.149 1.127c0 1.165-1.149 1.17-1.149 1.17h-2.478zm1.754 6.119c-.494.049-1.012.079-1.54.088v1.807a16.622 16.622 0 002.37-.473l-.471-.891s-.108-.183-.248-.394c-.039-.054-.08-.098-.111-.137z"},child:[]}]})(t)}const O0=({item:t})=>y.jsx("div",{className:"service-item glass-panel",children:y.jsxs("div",{className:"service-content",children:[y.jsx("span",{className:"service-icon",style:{color:"var(--accent-primary)",fontSize:"2rem"},children:t.icon}),y.jsx("h4",{className:"service-title",children:t.title}),y.jsx("p",{className:"service-desc",children:t.desc}),y.jsx("div",{style:{marginTop:"auto",paddingTop:"1rem"},children:y.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{display:"block",textAlign:"center",textDecoration:"none",padding:"0.5rem",fontSize:"0.85rem"},children:"Request Service"})})]})}),L0=()=>{const t=[{category:"Research",items:[{title:"Thesis Guidance",desc:"End-to-end support for academic writing.",icon:y.jsx(E0,{})},{title:"Data Analysis",desc:"Processing complex datasets with Python/R.",icon:y.jsx(w0,{})},{title:"Publication",desc:"Assistance with journal submissions.",icon:y.jsx(_0,{})}]},{category:"Coding",items:[{title:"Python Masterclass",desc:"From syntax to advanced algorithms.",icon:y.jsx(p0,{})},{title:"C / C++ School",desc:"System programming and memory management.",icon:y.jsx(N0,{})},{title:"R & MATLAB",desc:"Statistical computing and data visualization.",icon:y.jsx(M0,{})}]},{category:"Engineering",items:[{title:"IoT Systems",desc:"Arduino & ESP32 prototyping.",icon:y.jsx(I0,{})},{title:"3D Simulation",desc:"CAD modeling for manufacturing.",icon:y.jsx(T0,{})},{title:"Robotics",desc:"Control systems and automation.",icon:y.jsx(A0,{})}]}];return y.jsx("section",{className:"services",id:"services",children:y.jsxs("div",{className:"services-container",children:[y.jsxs("div",{className:"section-header",children:[y.jsxs("h2",{className:"section-title",children:["Available ",y.jsx("span",{className:"text-gradient",children:"Services"})]}),y.jsx("p",{className:"section-subtitle",children:"Comprehensive tools and resources for your growth."})]}),y.jsx("div",{className:"services-layout",children:t.map((e,n)=>y.jsxs("div",{className:"service-category",children:[y.jsx("h3",{className:"category-title",children:e.category}),y.jsx("div",{className:"category-grid",children:e.items.map((s,i)=>y.jsx(O0,{item:s},i))})]},n))})]})})},j0=()=>y.jsx("section",{className:"cta-section",id:"contact",children:y.jsx("div",{className:"cta-container glass-panel",children:y.jsxs("div",{className:"cta-content",children:[y.jsxs("h2",{className:"cta-title",children:["Ready to ",y.jsx("span",{className:"text-gradient",children:"Initialize?"})]}),y.jsx("p",{className:"cta-description",children:"Join the community and start building your future today."}),y.jsxs("div",{className:"cta-terminal",children:[y.jsxs("div",{className:"terminal-line",children:[y.jsx("span",{className:"prompt",children:"$"}),y.jsx("span",{className:"cmd",children:"kca join --user=you"})]}),y.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform",target:"_blank",rel:"noopener noreferrer",className:"btn-primary cta-btn",children:"Execute Join Command"})]})]})})});function F0(t){return fe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(t)}function U0(t){return fe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(t)}function B0(t){return fe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(t)}const $0=()=>y.jsx("section",{className:"careers-section",id:"careers",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-header",children:[y.jsx("span",{className:"badge-premium mb-3",style:{display:"inline-block",marginBottom:"1rem"},children:"CAREERS & INTERNSHIPS"}),y.jsxs("h2",{className:"section-title",children:["Join the ",y.jsx("span",{className:"text-gradient",children:"Collective"})]}),y.jsx("p",{className:"section-subtitle",children:"We don't just teach technology; we build it. Help us shape the future of engineering education."})]}),y.jsxs("div",{className:"careers-grid",children:[y.jsxs("div",{className:"career-card glass-panel-premium highlight",children:[y.jsx("div",{className:"card-badge",children:"OPEN INTERNSHIP"}),y.jsxs("div",{className:"role-header",children:[y.jsx("div",{className:"role-icon",children:y.jsx(B0,{})}),y.jsxs("div",{className:"role-title",children:[y.jsx("h3",{children:"IDE Stress Test Intern"}),y.jsx("span",{className:"location",children:"Remote"})]})]}),y.jsx("div",{className:"role-description",children:y.jsxs("p",{children:["Push the ",y.jsx("span",{className:"text-white fw-bold",children:"Kone Code IDE"})," to its absolute limits. We are looking for detail-oriented individuals to find edge cases, break compilers, and help us build the most robust browser-based development environment."]})}),y.jsxs("div",{className:"role-features",children:[y.jsxs("div",{className:"feature",children:[y.jsx(U0,{style:{color:"var(--accent-primary)"}}),y.jsx("span",{children:"Edge-case discovery & QA"})]}),y.jsxs("div",{className:"feature",children:[y.jsx(F0,{style:{color:"var(--accent-primary)"}}),y.jsx("span",{children:"Performance Benchmarking"})]})]}),y.jsx("div",{className:"role-footer mt-4",children:y.jsx("a",{href:"https://forms.gle/5ZcJBtAgqpJsxs8o9",target:"_blank",rel:"noreferrer",className:"btn-primary w-100 py-3",children:"Apply to Test"})})]}),y.jsxs("div",{className:"career-card glass-panel-premium secondary",children:[y.jsx("h3",{className:"text-white mb-3",style:{fontSize:"1.25rem",fontFamily:"var(--font-heading)",fontWeight:700},children:"Future Opportunities"}),y.jsx("p",{className:"text-secondary small",children:"We are constantly expanding our divisions (Lab, Consult, Shop). If you are a specialist in robotics, physical engineering, or AI architecture, we want to hear from you."}),y.jsx("div",{className:"mt-auto pt-4",children:y.jsx("a",{href:"mailto:philipkone45@gmail.com",className:"text-link",children:"General Application →"})})]})]})]})}),z0=[{question:"What is Kone Academy?",answer:"Kone Academy is a futuristic tech education platform that bridges the gap between theory and practical execution. We provide hands-on experience through our dedicated remote labs."},{question:"How do I access Kone Lab?",answer:"Once enrolled in a lab-based module, you will receive secure access credentials to our physical and cloud-hosted infrastructure, enabling you to build, deploy, and hack in real-time."},{question:"Is the curriculum suitable for beginners?",answer:"Absolutely. We offer specialized learning paths that take you from foundational concepts in Linux and Networking, all the way to advanced DevOps, Cybersecurity, and Cloud Architectures."},{question:"Are the courses self-paced?",answer:"Yes, you learn at your own pace. However, we complement your self-driven study with structured lab assignments and live mentoring sessions via Kone Consult to ensure continuous progress."},{question:"Do you offer enterprise training or team upskilling?",answer:"Yes, we partner with organizations globally to upskill their tech teams. Reach out to us to design a tailored curriculum that aligns with your company's technology stack and goals."}],H0=()=>{const[t,e]=N.useState(null),n=s=>{e(t===s?null:s)};return y.jsx("section",{id:"faq",className:"faq-section",children:y.jsxs("div",{className:"faq-container",children:[y.jsxs("div",{className:"faq-header",children:[y.jsx("h2",{className:"faq-title",children:"Frequently Asked Questions"}),y.jsx("p",{className:"faq-subtitle",children:"Everything you need to know to get started."})]}),y.jsx("div",{className:"faq-accordion",children:z0.map((s,i)=>y.jsxs("div",{className:`faq-item ${t===i?"active":""}`,children:[y.jsxs("button",{className:"faq-question",onClick:()=>n(i),"aria-expanded":t===i,children:[y.jsx("span",{children:s.question}),y.jsx("span",{className:"faq-icon",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),y.jsx("div",{className:"faq-answer-wrapper",style:{maxHeight:t===i?"200px":"0",opacity:t===i?1:0},children:y.jsx("div",{className:"faq-answer",children:y.jsx("p",{children:s.answer})})})]},i))})]})})};function W0(t){return fe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(t)}const K0=()=>{const[t,e]=N.useState("blue");N.useEffect(()=>{const i=localStorage.getItem("kca-neon-theme")||"blue";e(i);const r=o=>{e(o.detail)};return window.addEventListener("themeChanged",r),()=>{window.removeEventListener("themeChanged",r)}},[]);const s={blue:"/logo-circle-blue.svg",green:"/logo-circle-green.svg",pink:"/logo-circle-pink.svg",orange:"/logo-circle-orange.svg",purple:"/logo-circle-purple.svg"}[t]||"/logo-circle-blue.svg";return y.jsxs("footer",{className:"footer",children:[y.jsxs("div",{className:"footer-container",children:[y.jsxs("div",{className:"footer-brand",children:[y.jsxs("div",{className:"logo",children:[y.jsx("img",{src:s,alt:"KCA Logo",className:"logo-icon",style:{width:"40px",height:"40px"}}),y.jsx("span",{className:"logo-text",children:"Kone Academy"})]}),y.jsx("p",{className:"footer-tagline",children:"Research. Coding. Engineering."})]}),y.jsxs("div",{className:"footer-links",children:[y.jsxs("div",{className:"link-group",children:[y.jsx("h3",{children:"Platform"}),y.jsx("a",{href:"#vision",children:"Vision"}),y.jsx("a",{href:"#divisions",children:"Divisions"}),y.jsx("a",{href:"#services",children:"Services"}),y.jsx("a",{href:"#careers",children:"Careers"})]}),y.jsxs("div",{className:"link-group",children:[y.jsx("h3",{children:"Community"}),y.jsxs("div",{className:"social-icons",children:[y.jsx("a",{href:"https://x.com/koneacademy","aria-label":"X",children:y.jsx(W0,{})}),y.jsx("a",{href:"https://www.tiktok.com/@koneacademy?_r=1&_t=ZM-931L3z5lu71","aria-label":"TikTok",children:y.jsx(g0,{})}),y.jsx("a",{href:"https://discord.gg/Ab4SCxPgUK",target:"_blank",rel:"noreferrer","aria-label":"Discord",children:y.jsx(u0,{})}),y.jsx("a",{href:"https://www.linkedin.com/company/konecodeacdemy/?viewAsMember=true","aria-label":"LinkedIn",children:y.jsx(f0,{})}),y.jsx("a",{href:"https://www.facebook.com/profile.php?id=61584327765846","aria-label":"Facebook",children:y.jsx(h0,{})}),y.jsx("a",{href:"https://www.instagram.com/koneacademy?igsh=bnlnaTZ5YmNsMXJ1&utm_source=qr","aria-label":"Instagram",children:y.jsx(d0,{})}),y.jsx("a",{href:"https://join.slack.com/t/koneacademy/shared_invite/zt-3te5lrqpj-d3gixasFIoSerlBnoQ1UMg",target:"_blank",rel:"noreferrer","aria-label":"Slack",children:y.jsx(m0,{})}),y.jsx("a",{href:"https://youtube.com/@koneacademy?si=zqEGBiiu0NRdNk6p",target:"_blank",rel:"noreferrer","aria-label":"YouTube",children:y.jsx(y0,{})})]})]})]})]}),y.jsx("div",{className:"footer-bottom",children:y.jsxs("p",{children:["© ",new Date().getFullYear()," Kone Academy. Open Source License."]})})]})},q0=()=>{const[t,e]=N.useState(null),[n,s]=N.useState(!1),[i,r]=N.useState(!1);N.useEffect(()=>{const l=localStorage.getItem("kca-install-dismissed");if(l){const p=parseInt(l,10),m=7*24*60*60*1e3;if(Date.now()-p<m)return}if(window.matchMedia("(display-mode: standalone)").matches)return;const h=p=>{p.preventDefault(),e(p),s(!0)};window.addEventListener("beforeinstallprompt",h);const d=setTimeout(()=>{window.matchMedia("(display-mode: standalone)").matches||s(!0)},5e3);return()=>{window.removeEventListener("beforeinstallprompt",h),clearTimeout(d)}},[]);const o=()=>S(Fl,null,function*(){if(t){t.prompt();const{outcome:l}=yield t.userChoice;l==="accepted"&&s(!1),e(null)}else alert(`To install Kone Academy:

• Chrome/Edge: Click the install icon (⊕) in the address bar
• Safari: Tap Share → Add to Home Screen
• Firefox: Not yet supported for PWA install`)}),c=()=>{r(!0),localStorage.setItem("kca-install-dismissed",Date.now().toString()),setTimeout(()=>s(!1),350)};return n?y.jsx("div",{className:`install-banner ${i?"dismissing":""}`,children:y.jsxs("div",{className:"install-banner-inner",children:[y.jsx("div",{className:"install-banner-icon",children:y.jsx("img",{src:"/logo-circle-blue.svg",alt:"Kone Academy"})}),y.jsxs("div",{className:"install-banner-text",children:[y.jsx("div",{className:"install-banner-title",children:"Install Kone Academy"}),y.jsx("div",{className:"install-banner-subtitle",children:"Quick access from your home screen"})]}),y.jsxs("div",{className:"install-banner-actions",children:[y.jsx("button",{className:"install-btn",onClick:o,children:"Install"}),y.jsx("button",{className:"install-dismiss",onClick:c,"aria-label":"Dismiss install banner",children:"✕"})]})]})}):null},_c=N.createContext({});function Qt(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}const G0=typeof window!="undefined",Zr=G0?N.useLayoutEffect:N.useEffect,eo=N.createContext(null);function wc(t,e){t.indexOf(e)===-1&&t.push(e)}function Er(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const lt=(t,e,n)=>n>e?e:n<t?t:n;let Zs=()=>{};const Jt={},ip=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function rp(t){return typeof t=="object"&&t!==null}const op=t=>/^0[^.\s]+$/u.test(t);function ap(t){let e;return()=>(e===void 0&&(e=t()),e)}const ze=t=>t,Y0=(t,e)=>n=>e(t(n)),di=(...t)=>t.reduce(Y0),ts=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s};class Tc{constructor(){this.subscriptions=[]}add(e){return wc(this.subscriptions,e),()=>Er(this.subscriptions,e)}notify(e,n,s){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,s);else for(let r=0;r<i;r++){const o=this.subscriptions[r];o&&o(e,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const qe=t=>t*1e3,Xe=t=>t/1e3;function Ec(t,e){return e?t*(1e3/e):0}const cp=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,X0=1e-7,Q0=12;function J0(t,e,n,s,i){let r,o,c=0;do o=e+(n-e)/2,r=cp(o,s,i)-t,r>0?n=o:e=o;while(Math.abs(r)>X0&&++c<Q0);return o}function fi(t,e,n,s){if(t===e&&n===s)return ze;const i=r=>J0(r,0,1,t,n);return r=>r===0||r===1?r:cp(i(r),e,s)}const lp=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,up=t=>e=>1-t(1-e),hp=fi(.33,1.53,.69,.99),Ic=up(hp),dp=lp(Ic),fp=t=>t>=1?1:(t*=2)<1?.5*Ic(t):.5*(2-Math.pow(2,-10*(t-1))),Ac=t=>1-Math.sin(Math.acos(t)),pp=up(Ac),mp=lp(Ac),Z0=fi(.42,0,1,1),e_=fi(0,0,.58,1),gp=fi(.42,0,.58,1),t_=t=>Array.isArray(t)&&typeof t[0]!="number",yp=t=>Array.isArray(t)&&typeof t[0]=="number",n_={linear:ze,easeIn:Z0,easeInOut:gp,easeOut:e_,circIn:Ac,circInOut:mp,circOut:pp,backIn:Ic,backInOut:dp,backOut:hp,anticipate:fp},s_=t=>typeof t=="string",Xu=t=>{if(yp(t)){Zs(t.length===4);const[e,n,s,i]=t;return fi(e,n,s,i)}else if(s_(t))return n_[t];return t},zi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function i_(t,e){let n=new Set,s=new Set,i=!1,r=!1;const o=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function l(d){o.has(d)&&(h.schedule(d),t()),d(c)}const h={schedule:(d,p=!1,m=!1)=>{const I=m&&i?n:s;return p&&o.add(d),I.add(d),d},cancel:d=>{s.delete(d),o.delete(d)},process:d=>{if(c=d,i){r=!0;return}i=!0;const p=n;n=s,s=p,n.forEach(l),n.clear(),i=!1,r&&(r=!1,h.process(d))}};return h}const r_=40;function vp(t,e){let n=!1,s=!0;const i={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,o=zi.reduce((L,F)=>(L[F]=i_(r),L),{}),{setup:c,read:l,resolveKeyframes:h,preUpdate:d,update:p,preRender:m,render:v,postRender:I}=o,k=()=>{const L=Jt.useManualTiming,F=L?i.timestamp:performance.now();n=!1,L||(i.delta=s?1e3/60:Math.max(Math.min(F-i.timestamp,r_),1)),i.timestamp=F,i.isProcessing=!0,c.process(i),l.process(i),h.process(i),d.process(i),p.process(i),m.process(i),v.process(i),I.process(i),i.isProcessing=!1,n&&e&&(s=!1,t(k))},R=()=>{n=!0,s=!0,i.isProcessing||t(k)};return{schedule:zi.reduce((L,F)=>{const B=o[F];return L[F]=(W,b=!1,_=!1)=>(n||R(),B.schedule(W,b,_)),L},{}),cancel:L=>{for(let F=0;F<zi.length;F++)o[zi[F]].cancel(L)},state:i,steps:o}}const{schedule:J,cancel:Je,state:Ee,steps:Wo}=vp(typeof requestAnimationFrame!="undefined"?requestAnimationFrame:ze,!0);let ir;function o_(){ir=void 0}const Fe={now:()=>(ir===void 0&&Fe.set(Ee.isProcessing||Jt.useManualTiming?Ee.timestamp:performance.now()),ir),set:t=>{ir=t,queueMicrotask(o_)}},_p=t=>e=>typeof e=="string"&&e.startsWith(t),wp=_p("--"),a_=_p("var(--"),bc=t=>a_(t)?c_.test(t.split("/*")[0].trim()):!1,c_=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Qu(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const ls={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ei=H(D({},ls),{transform:t=>lt(0,1,t)}),Hi=H(D({},ls),{default:1}),Fs=t=>Math.round(t*1e5)/1e5,Sc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function l_(t){return t==null}const u_=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pc=(t,e)=>n=>!!(typeof n=="string"&&u_.test(n)&&n.startsWith(t)||e&&!l_(n)&&Object.prototype.hasOwnProperty.call(n,e)),Tp=(t,e,n)=>s=>{if(typeof s!="string")return s;const[i,r,o,c]=s.match(Sc);return{[t]:parseFloat(i),[e]:parseFloat(r),[n]:parseFloat(o),alpha:c!==void 0?parseFloat(c):1}},h_=t=>lt(0,255,t),Ko=H(D({},ls),{transform:t=>Math.round(h_(t))}),mn={test:Pc("rgb","red"),parse:Tp("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+Ko.transform(t)+", "+Ko.transform(e)+", "+Ko.transform(n)+", "+Fs(ei.transform(s))+")"};function d_(t){let e="",n="",s="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const ba={test:Pc("#"),parse:d_,transform:mn.transform},pi=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Bt=pi("deg"),vt=pi("%"),$=pi("px"),f_=pi("vh"),p_=pi("vw"),Ju=H(D({},vt),{parse:t=>vt.parse(t)/100,transform:t=>vt.transform(t*100)}),$n={test:Pc("hsl","hue"),parse:Tp("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+vt.transform(Fs(e))+", "+vt.transform(Fs(n))+", "+Fs(ei.transform(s))+")"},ge={test:t=>mn.test(t)||ba.test(t)||$n.test(t),parse:t=>mn.test(t)?mn.parse(t):$n.test(t)?$n.parse(t):ba.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?mn.transform(t):$n.transform(t),getAnimatableNone:t=>{const e=ge.parse(t);return e.alpha=0,ge.transform(e)}},m_=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function g_(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Sc))==null?void 0:e.length)||0)+(((n=t.match(m_))==null?void 0:n.length)||0)>0}const Ep="number",Ip="color",y_="var",v_="var(",Zu="${}",__=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ns(t){const e=t.toString(),n=[],s={color:[],number:[],var:[]},i=[];let r=0;const c=e.replace(__,l=>(ge.test(l)?(s.color.push(r),i.push(Ip),n.push(ge.parse(l))):l.startsWith(v_)?(s.var.push(r),i.push(y_),n.push(l)):(s.number.push(r),i.push(Ep),n.push(parseFloat(l))),++r,Zu)).split(Zu);return{values:n,split:c,indexes:s,types:i}}function w_(t){return ns(t).values}function Ap({split:t,types:e}){const n=t.length;return s=>{let i="";for(let r=0;r<n;r++)if(i+=t[r],s[r]!==void 0){const o=e[r];o===Ep?i+=Fs(s[r]):o===Ip?i+=ge.transform(s[r]):i+=s[r]}return i}}function T_(t){return Ap(ns(t))}const E_=t=>typeof t=="number"?0:ge.test(t)?ge.getAnimatableNone(t):t,I_=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:E_(t);function A_(t){const e=ns(t);return Ap(e)(e.values.map((s,i)=>I_(s,e.split[i])))}const ct={test:g_,parse:w_,createTransformer:T_,getAnimatableNone:A_};function qo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function b_({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let i=0,r=0,o=0;if(!e)i=r=o=n;else{const c=n<.5?n*(1+e):n+e-n*e,l=2*n-c;i=qo(l,c,t+1/3),r=qo(l,c,t),o=qo(l,c,t-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:s}}function Ir(t,e){return n=>n>0?e:t}const re=(t,e,n)=>t+(e-t)*n,Go=(t,e,n)=>{const s=t*t,i=n*(e*e-s)+s;return i<0?0:Math.sqrt(i)},S_=[ba,mn,$n],P_=t=>S_.find(e=>e.test(t));function eh(t){const e=P_(t);if(!e)return!1;let n=e.parse(t);return e===$n&&(n=b_(n)),n}const th=(t,e)=>{const n=eh(t),s=eh(e);if(!n||!s)return Ir(t,e);const i=D({},n);return r=>(i.red=Go(n.red,s.red,r),i.green=Go(n.green,s.green,r),i.blue=Go(n.blue,s.blue,r),i.alpha=re(n.alpha,s.alpha,r),mn.transform(i))},Sa=new Set(["none","hidden"]);function C_(t,e){return Sa.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function R_(t,e){return n=>re(t,e,n)}function Cc(t){return typeof t=="number"?R_:typeof t=="string"?bc(t)?Ir:ge.test(t)?th:V_:Array.isArray(t)?bp:typeof t=="object"?ge.test(t)?th:x_:Ir}function bp(t,e){const n=[...t],s=n.length,i=t.map((r,o)=>Cc(r)(r,e[o]));return r=>{for(let o=0;o<s;o++)n[o]=i[o](r);return n}}function x_(t,e){const n=D(D({},t),e),s={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(s[i]=Cc(t[i])(t[i],e[i]));return i=>{for(const r in s)n[r]=s[r](i);return n}}function k_(t,e){var i;const n=[],s={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],c=t.indexes[o][s[o]],l=(i=t.values[c])!=null?i:0;n[r]=l,s[o]++}return n}const V_=(t,e)=>{const n=ct.createTransformer(e),s=ns(t),i=ns(e);return s.indexes.var.length===i.indexes.var.length&&s.indexes.color.length===i.indexes.color.length&&s.indexes.number.length>=i.indexes.number.length?Sa.has(t)&&!i.values.length||Sa.has(e)&&!s.values.length?C_(t,e):di(bp(k_(s,i),i.values),n):Ir(t,e)};function Sp(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?re(t,e,n):Cc(t)(t,e)}const D_=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>J.update(e,n),stop:()=>Je(e),now:()=>Ee.isProcessing?Ee.timestamp:Fe.now()}},Pp=(t,e,n=10)=>{let s="";const i=Math.max(Math.round(e/n),2);for(let r=0;r<i;r++)s+=Math.round(t(r/(i-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Ar=2e4;function Rc(t){let e=0;const n=50;let s=t.next(e);for(;!s.done&&e<Ar;)e+=n,s=t.next(e);return e>=Ar?1/0:e}function N_(t,e=100,n){const s=n(H(D({},t),{keyframes:[0,e]})),i=Math.min(Rc(s),Ar);return{type:"keyframes",ease:r=>s.next(i*r).value/e,duration:Xe(i)}}const he={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Pa(t,e){return t*Math.sqrt(1-e*e)}const M_=12;function O_(t,e,n){let s=n;for(let i=1;i<M_;i++)s=s-t(s)/e(s);return s}const Yo=.001;function L_({duration:t=he.duration,bounce:e=he.bounce,velocity:n=he.velocity,mass:s=he.mass}){let i,r,o=1-e;o=lt(he.minDamping,he.maxDamping,o),t=lt(he.minDuration,he.maxDuration,Xe(t)),o<1?(i=h=>{const d=h*o,p=d*t,m=d-n,v=Pa(h,o),I=Math.exp(-p);return Yo-m/v*I},r=h=>{const p=h*o*t,m=p*n+n,v=Math.pow(o,2)*Math.pow(h,2)*t,I=Math.exp(-p),k=Pa(Math.pow(h,2),o);return(-i(h)+Yo>0?-1:1)*((m-v)*I)/k}):(i=h=>{const d=Math.exp(-h*t),p=(h-n)*t+1;return-Yo+d*p},r=h=>{const d=Math.exp(-h*t),p=(n-h)*(t*t);return d*p});const c=5/t,l=O_(i,r,c);if(t=qe(t),isNaN(l))return{stiffness:he.stiffness,damping:he.damping,duration:t};{const h=Math.pow(l,2)*s;return{stiffness:h,damping:o*2*Math.sqrt(s*h),duration:t}}}const j_=["duration","bounce"],F_=["stiffness","damping","mass"];function nh(t,e){return e.some(n=>t[n]!==void 0)}function U_(t){let e=D({velocity:he.velocity,stiffness:he.stiffness,damping:he.damping,mass:he.mass,isResolvedFromDuration:!1},t);if(!nh(t,F_)&&nh(t,j_))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,s=2*Math.PI/(n*1.2),i=s*s,r=2*lt(.05,1,1-(t.bounce||0))*Math.sqrt(i);e=H(D({},e),{mass:he.mass,stiffness:i,damping:r})}else{const n=L_(H(D({},t),{velocity:0}));e=H(D(D({},e),n),{mass:he.mass}),e.isResolvedFromDuration=!0}return e}function br(t=he.visualDuration,e=he.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:s,restDelta:i}=n;const r=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],c={done:!1,value:r},{stiffness:l,damping:h,mass:d,duration:p,velocity:m,isResolvedFromDuration:v}=U_(H(D({},n),{velocity:-Xe(n.velocity||0)})),I=m||0,k=h/(2*Math.sqrt(l*d)),R=o-r,V=Xe(Math.sqrt(l/d)),O=Math.abs(R)<5;s||(s=O?he.restSpeed.granular:he.restSpeed.default),i||(i=O?he.restDelta.granular:he.restDelta.default);let L,F,B,W,b,_;if(k<1)B=Pa(V,k),W=(I+k*V*R)/B,L=T=>{const A=Math.exp(-k*V*T);return o-A*(W*Math.sin(B*T)+R*Math.cos(B*T))},b=k*V*W+R*B,_=k*V*R-W*B,F=T=>Math.exp(-k*V*T)*(b*Math.sin(B*T)+_*Math.cos(B*T));else if(k===1){L=A=>o-Math.exp(-V*A)*(R+(I+V*R)*A);const T=I+V*R;F=A=>Math.exp(-V*A)*(V*T*A-I)}else{const T=V*Math.sqrt(k*k-1);L=se=>{const be=Math.exp(-k*V*se),Ye=Math.min(T*se,300);return o-be*((I+k*V*R)*Math.sinh(Ye)+T*R*Math.cosh(Ye))/T};const A=(I+k*V*R)/T,P=k*V*A-R*T,E=k*V*R-A*T;F=se=>{const be=Math.exp(-k*V*se),Ye=Math.min(T*se,300);return be*(P*Math.sinh(Ye)+E*Math.cosh(Ye))}}const w={calculatedDuration:v&&p||null,velocity:T=>qe(F(T)),next:T=>{if(!v&&k<1){const P=Math.exp(-k*V*T),E=Math.sin(B*T),se=Math.cos(B*T),be=o-P*(W*E+R*se),Ye=qe(P*(b*E+_*se));return c.done=Math.abs(Ye)<=s&&Math.abs(o-be)<=i,c.value=c.done?o:be,c}const A=L(T);if(v)c.done=T>=p;else{const P=qe(F(T));c.done=Math.abs(P)<=s&&Math.abs(o-A)<=i}return c.value=c.done?o:A,c},toString:()=>{const T=Math.min(Rc(w),Ar),A=Pp(P=>w.next(T*P).value,T,30);return T+"ms "+A},toTransition:()=>{}};return w}br.applyToOptions=t=>{const e=N_(t,100,br);return t.ease=e.ease,t.duration=qe(e.duration),t.type="keyframes",t};const B_=5;function Cp(t,e,n){const s=Math.max(e-B_,0);return Ec(n-t(s),e-s)}function Ca({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:r=500,modifyTarget:o,min:c,max:l,restDelta:h=.5,restSpeed:d}){const p=t[0],m={done:!1,value:p},v=_=>c!==void 0&&_<c||l!==void 0&&_>l,I=_=>c===void 0?l:l===void 0||Math.abs(c-_)<Math.abs(l-_)?c:l;let k=n*e;const R=p+k,V=o===void 0?R:o(R);V!==R&&(k=V-p);const O=_=>-k*Math.exp(-_/s),L=_=>V+O(_),F=_=>{const w=O(_),T=L(_);m.done=Math.abs(w)<=h,m.value=m.done?V:T};let B,W;const b=_=>{v(m.value)&&(B=_,W=br({keyframes:[m.value,I(m.value)],velocity:Cp(L,_,m.value),damping:i,stiffness:r,restDelta:h,restSpeed:d}))};return b(0),{calculatedDuration:null,next:_=>{let w=!1;return!W&&B===void 0&&(w=!0,F(_),b(_)),B!==void 0&&_>=B?W.next(_-B):(!w&&F(_),m)}}}function $_(t,e,n){const s=[],i=n||Jt.mix||Sp,r=t.length-1;for(let o=0;o<r;o++){let c=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||ze:e;c=di(l,c)}s.push(c)}return s}function xc(t,e,{clamp:n=!0,ease:s,mixer:i}={}){const r=t.length;if(Zs(r===e.length),r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const c=$_(e,s,i),l=c.length,h=d=>{if(o&&d<t[0])return e[0];let p=0;if(l>1)for(;p<t.length-2&&!(d<t[p+1]);p++);const m=ts(t[p],t[p+1],d);return c[p](m)};return n?d=>h(lt(t[0],t[r-1],d)):h}function z_(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=ts(0,e,s);t.push(re(n,1,i))}}function Rp(t){const e=[0];return z_(e,t.length-1),e}function H_(t,e){return t.map(n=>n*e)}function W_(t,e){return t.map(()=>e||gp).splice(0,t.length-1)}function Us({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const i=t_(s)?s.map(Xu):Xu(s),r={done:!1,value:e[0]},o=H_(n&&n.length===e.length?n:Rp(e),t),c=xc(o,e,{ease:Array.isArray(i)?i:W_(e,i)});return{calculatedDuration:t,next:l=>(r.value=c(l),r.done=l>=t,r)}}const K_=t=>t!==null;function to(t,{repeat:e,repeatType:n="loop"},s,i=1){const r=t.filter(K_),c=i<0||e&&n!=="loop"&&e%2===1?0:r.length-1;return!c||s===void 0?r[c]:s}const q_={decay:Ca,inertia:Ca,tween:Us,keyframes:Us,spring:br};function xp(t){typeof t.type=="string"&&(t.type=q_[t.type])}class kc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const G_=t=>t/100;class ti extends kc{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Fe.now()&&this.tick(Fe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(s=this.options).onStop)==null||i.call(s))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;xp(e);const{type:n=Us,repeat:s=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=e;let{keyframes:c}=e;const l=n||Us;l!==Us&&typeof c[0]!="number"&&(this.mixKeyframes=di(G_,Sp(c[0],c[1])),c=[0,100]);const h=l(H(D({},e),{keyframes:c}));r==="mirror"&&(this.mirroredGenerator=l(H(D({},e),{keyframes:[...c].reverse(),velocity:-o}))),h.calculatedDuration===null&&(h.calculatedDuration=Rc(h));const{calculatedDuration:d}=h;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(s+1)-i,this.generator=h}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:s,totalDuration:i,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:c,calculatedDuration:l}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:d,repeat:p,repeatType:m,repeatDelay:v,type:I,onUpdate:k,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const V=this.currentTime-h*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?V<0:V>i;this.currentTime=Math.max(V,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let L=this.currentTime,F=s;if(p){const _=Math.min(this.currentTime,i)/c;let w=Math.floor(_),T=_%1;!T&&_>=1&&(T=1),T===1&&w--,w=Math.min(w,p+1),!!(w%2)&&(m==="reverse"?(T=1-T,v&&(T-=v/c)):m==="mirror"&&(F=o)),L=lt(0,1,T)*c}let B;O?(this.delayState.value=d[0],B=this.delayState):B=F.next(L),r&&!O&&(B.value=r(B.value));let{done:W}=B;!O&&l!==null&&(W=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return b&&I!==Ca&&(B.value=to(d,this.options,R,this.speed)),k&&k(B.value),b&&this.finish(),B}then(e,n){return this.finished.then(e,n)}get duration(){return Xe(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Xe(e)}get time(){return Xe(this.currentTime)}set time(e){e=qe(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return Cp(s=>this.generator.next(s).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(Fe.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Xe(this.currentTime))}play(){var i,r;if(this.isStopped)return;const{driver:e=D_,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(r=(i=this.options).onPlay)==null||r.call(i);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n!=null?n:s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Fe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function Y_(t){var e;for(let n=1;n<t.length;n++)(e=t[n])!=null||(t[n]=t[n-1])}const gn=t=>t*180/Math.PI,Ra=t=>{const e=gn(Math.atan2(t[1],t[0]));return xa(e)},X_={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Ra,rotateZ:Ra,skewX:t=>gn(Math.atan(t[1])),skewY:t=>gn(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},xa=t=>(t=t%360,t<0&&(t+=360),t),sh=Ra,ih=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),rh=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Q_={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ih,scaleY:rh,scale:t=>(ih(t)+rh(t))/2,rotateX:t=>xa(gn(Math.atan2(t[6],t[5]))),rotateY:t=>xa(gn(Math.atan2(-t[2],t[0]))),rotateZ:sh,rotate:sh,skewX:t=>gn(Math.atan(t[4])),skewY:t=>gn(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function ka(t){return t.includes("scale")?1:0}function Va(t,e){if(!t||t==="none")return ka(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,i;if(n)s=Q_,i=n;else{const c=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=X_,i=c}if(!i)return ka(e);const r=s[e],o=i[1].split(",").map(Z_);return typeof r=="function"?r(o):o[r]}const J_=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Va(n,e)};function Z_(t){return parseFloat(t.trim())}const us=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],hs=new Set(us),oh=t=>t===ls||t===$,ew=new Set(["x","y","z"]),tw=us.filter(t=>!ew.has(t));function nw(t){const e=[];return tw.forEach(n=>{const s=t.getValue(n);s!==void 0&&(e.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),e}const qt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Va(e,"x"),y:(t,{transform:e})=>Va(e,"y")};qt.translateX=qt.x;qt.translateY=qt.y;const _n=new Set;let Da=!1,Na=!1,Ma=!1;function kp(){if(Na){const t=Array.from(_n).filter(s=>s.needsMeasurement),e=new Set(t.map(s=>s.element)),n=new Map;e.forEach(s=>{const i=nw(s);i.length&&(n.set(s,i),s.render())}),t.forEach(s=>s.measureInitialState()),e.forEach(s=>{s.render();const i=n.get(s);i&&i.forEach(([r,o])=>{var c;(c=s.getValue(r))==null||c.set(o)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Na=!1,Da=!1,_n.forEach(t=>t.complete(Ma)),_n.clear()}function Vp(){_n.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Na=!0)})}function sw(){Ma=!0,Vp(),kp(),Ma=!1}class Vc{constructor(e,n,s,i,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=s,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(_n.add(this),Da||(Da=!0,J.read(Vp),J.resolveKeyframes(kp))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:s,motionValue:i}=this;if(e[0]===null){const r=i==null?void 0:i.get(),o=e[e.length-1];if(r!==void 0)e[0]=r;else if(s&&n){const c=s.readValue(n,o);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=o),i&&r===void 0&&i.set(e[0])}Y_(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),_n.delete(this)}cancel(){this.state==="scheduled"&&(_n.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const iw=t=>t.startsWith("--");function Dp(t,e,n){iw(e)?t.style.setProperty(e,n):t.style[e]=n}const rw={};function Dc(t,e){const n=ap(t);return()=>{var s;return(s=rw[e])!=null?s:n()}}const Nc=Dc(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Np=Dc(()=>window.ViewTimeline!==void 0,"viewTimeline"),Mp=Dc(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0},"linearEasing"),Os=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`,ah={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Os([0,.65,.55,1]),circOut:Os([.55,0,1,.45]),backIn:Os([.31,.01,.66,-.59]),backOut:Os([.33,1.53,.69,.99])};function Op(t,e){if(t)return typeof t=="function"?Mp()?Pp(t,e):"ease-out":yp(t)?Os(t):Array.isArray(t)?t.map(n=>Op(n,e)||ah.easeOut):ah[t]}function ow(t,e,n,{delay:s=0,duration:i=300,repeat:r=0,repeatType:o="loop",ease:c="easeOut",times:l}={},h=void 0){const d={[e]:n};l&&(d.offset=l);const p=Op(c,i);Array.isArray(p)&&(d.easing=p);const m={delay:s,duration:i,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"};return h&&(m.pseudoElement=h),t.animate(d,m)}function Lp(t){return typeof t=="function"&&"applyToOptions"in t}function aw(n){var s=n,{type:t}=s,e=pe(s,["type"]);var i,r;return Lp(t)&&Mp()?t.applyToOptions(e):((i=e.duration)!=null||(e.duration=300),(r=e.ease)!=null||(e.ease="easeOut"),e)}class jp extends kc{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:s,keyframes:i,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:c,onComplete:l}=e;this.isPseudoElement=!!r,this.allowFlatten=o,this.options=e,Zs(typeof e.type!="string");const h=aw(e);this.animation=ow(n,s,i,h,r),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const d=to(i,this.options,c,this.speed);this.updateMotionValue&&this.updateMotionValue(d),Dp(n,s,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch(e){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,s,i;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(s=this.animation).commitStyles)==null||i.call(s))}get duration(){var n,s;const e=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return Xe(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Xe(e)}get time(){return Xe(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=qe(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var e;return(e=this.manualStartTime)!=null?e:Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:s,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Nc()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),s&&(this.animation.rangeEnd=s),ze):i(this)}}const Fp={anticipate:fp,backInOut:dp,circInOut:mp};function cw(t){return t in Fp}function lw(t){typeof t.ease=="string"&&cw(t.ease)&&(t.ease=Fp[t.ease])}const Xo=10;class uw extends jp{constructor(e){lw(e),xp(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const m=this.options,{motionValue:n,onUpdate:s,onComplete:i,element:r}=m,o=pe(m,["motionValue","onUpdate","onComplete","element"]);if(!n)return;if(e!==void 0){n.set(e);return}const c=new ti(H(D({},o),{autoplay:!1})),l=Math.max(Xo,Fe.now()-this.startTime),h=lt(0,Xo,l-Xo),d=c.sample(l).value,{name:p}=this.options;r&&p&&Dp(r,p,d),n.setWithVelocity(c.sample(Math.max(0,l-h)).value,d,h),c.stop()}}const ch=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ct.test(t)||t==="0")&&!t.startsWith("url("));function hw(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function dw(t,e,n,s){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const r=t[t.length-1],o=ch(i,e),c=ch(r,e);return!o||!c?!1:hw(t)||(n==="spring"||Lp(n))&&s}function Oa(t){t.duration=0,t.type="keyframes"}const Up=new Set(["opacity","clipPath","filter","transform"]),fw=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function pw(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&fw.test(t[e]))return!0;return!1}const mw=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),gw=ap(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function yw(t){var p;const{motionValue:e,name:n,repeatDelay:s,repeatType:i,damping:r,type:o,keyframes:c}=t;if(!(((p=e==null?void 0:e.owner)==null?void 0:p.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:d}=e.owner.getProps();return gw()&&n&&(Up.has(n)||mw.has(n)&&pw(c))&&(n!=="transform"||!d)&&!h&&!s&&i!=="mirror"&&r!==0&&o!=="inertia"}const vw=40;class _w extends kc{constructor(m){var v=m,{autoplay:e=!0,delay:n=0,type:s="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",keyframes:c,name:l,motionValue:h,element:d}=v,p=pe(v,["autoplay","delay","type","repeat","repeatDelay","repeatType","keyframes","name","motionValue","element"]);var R;super(),this.stop=()=>{var V,O;this._animation&&(this._animation.stop(),(V=this.stopTimeline)==null||V.call(this)),(O=this.keyframeResolver)==null||O.cancel()},this.createdAt=Fe.now();const I=D({autoplay:e,delay:n,type:s,repeat:i,repeatDelay:r,repeatType:o,name:l,motionValue:h,element:d},p),k=(d==null?void 0:d.KeyframeResolver)||Vc;this.keyframeResolver=new k(c,(V,O,L)=>this.onKeyframesResolved(V,O,I,!L),l,h,d),(R=this.keyframeResolver)==null||R.scheduleResolve()}onKeyframesResolved(e,n,s,i){var V,O;this.keyframeResolver=void 0;const{name:r,type:o,velocity:c,delay:l,isHandoff:h,onUpdate:d}=s;this.resolvedAt=Fe.now();let p=!0;dw(e,r,o,c)||(p=!1,(Jt.instantAnimations||!l)&&(d==null||d(to(e,s,n))),e[0]=e[e.length-1],Oa(s),s.repeat=0);const m=i?this.resolvedAt?this.resolvedAt-this.createdAt>vw?this.resolvedAt:this.createdAt:this.createdAt:void 0,v=H(D({startTime:m,finalKeyframe:n},s),{keyframes:e}),I=p&&!h&&yw(v),k=(O=(V=v.motionValue)==null?void 0:V.owner)==null?void 0:O.current;let R;if(I)try{R=new uw(H(D({},v),{element:k}))}catch(L){R=new ti(v)}else R=new ti(v);R.finished.then(()=>{this.notifyFinished()}).catch(ze),this.pendingTimeline&&(this.stopTimeline=R.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=R}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),sw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function Bp(t,e,n,s=0,i=1){const r=Array.from(t).sort((h,d)=>h.sortNodePosition(d)).indexOf(e),o=t.size,c=(o-1)*s;return typeof n=="function"?n(r,o):i===1?r*s:c-r*s}const ww=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Tw(t){const e=ww.exec(t);if(!e)return[,];const[,n,s,i]=e;return[`--${n!=null?n:s}`,i]}function $p(t,e,n=1){const[s,i]=Tw(t);if(!s)return;const r=window.getComputedStyle(e).getPropertyValue(s);if(r){const o=r.trim();return ip(o)?parseFloat(o):o}return bc(i)?$p(i,e,n+1):i}const Ew={type:"spring",stiffness:500,damping:25,restSpeed:10},Iw=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Aw={type:"keyframes",duration:.8},bw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Sw=(t,{keyframes:e})=>e.length>2?Aw:hs.has(t)?t.startsWith("scale")?Iw(e[1]):Ew:bw;function zp(t,e){if(t!=null&&t.inherit&&e){const n=t,{inherit:s}=n,i=pe(n,["inherit"]);return D(D({},e),i)}return t}function Mc(t,e){var s,i;const n=(i=(s=t==null?void 0:t[e])!=null?s:t==null?void 0:t.default)!=null?i:t;return n!==t?zp(n,t):n}const Pw=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Cw(t){for(const e in t)if(!Pw.has(e))return!0;return!1}const Oc=(t,e,n,s={},i,r)=>o=>{const c=Mc(s,t)||{},l=c.delay||s.delay||0;let{elapsed:h=0}=s;h=h-qe(l);const d=H(D({keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity()},c),{delay:-h,onUpdate:m=>{e.set(m),c.onUpdate&&c.onUpdate(m)},onComplete:()=>{o(),c.onComplete&&c.onComplete()},name:t,motionValue:e,element:r?void 0:i});Cw(c)||Object.assign(d,Sw(t,d)),d.duration&&(d.duration=qe(d.duration)),d.repeatDelay&&(d.repeatDelay=qe(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Oa(d),d.delay===0&&(p=!0)),(Jt.instantAnimations||Jt.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(p=!0,Oa(d),d.delay=0),d.allowFlatten=!c.type&&!c.ease,p&&!r&&e.get()!==void 0){const m=to(d.keyframes,c);if(m!==void 0){J.update(()=>{d.onUpdate(m),d.onComplete()});return}}return c.isSync?new ti(d):new _w(d)};function lh(t){const e=[{},{}];return t==null||t.values.forEach((n,s)=>{e[0][s]=n.get(),e[1][s]=n.getVelocity()}),e}function Lc(t,e,n,s){if(typeof e=="function"){const[i,r]=lh(s);e=e(n!==void 0?n:t.custom,i,r)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,r]=lh(s);e=e(n!==void 0?n:t.custom,i,r)}return e}function wn(t,e,n){const s=t.getProps();return Lc(s,e,n!==void 0?n:s.custom,t)}const Hp=new Set(["width","height","top","left","right","bottom",...us]),uh=30,Rw=t=>!isNaN(parseFloat(t)),Bs={current:void 0};class xw{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var r;const i=Fe.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((r=this.events.change)==null||r.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Fe.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Rw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Tc);const s=this.events[e].add(n);return e==="change"?()=>{s(),J.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-s}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Bs.current&&Bs.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Fe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>uh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,uh);return Ec(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function it(t,e){return new xw(t,e)}const La=t=>Array.isArray(t);function kw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,it(n))}function Vw(t){return La(t)?t[t.length-1]||0:t}function Dw(t,e){let o=wn(t,e)||{},{transitionEnd:s={},transition:i={}}=o,r=pe(o,["transitionEnd","transition"]);r=D(D({},r),s);for(const c in r){const l=Vw(r[c]);kw(t,c,l)}}const we=t=>!!(t&&t.getVelocity);function Nw(t){return!!(we(t)&&t.add)}function ja(t,e){const n=t.getValue("willChange");if(Nw(n))return n.add(e);if(!n&&Jt.WillChange){const s=new Jt.WillChange("auto");t.addValue("willChange",s),s.add(e)}}function jc(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Mw="framerAppearId",Wp="data-"+jc(Mw);function Kp(t){return t.props[Wp]}function Ow({protectedKeys:t,needsAnimating:e},n){const s=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,s}function qp(t,e,{delay:n=0,transitionOverride:s,type:i}={}){var v;let m=e,{transition:r,transitionEnd:o}=m,c=pe(m,["transition","transitionEnd"]);const l=t.getDefaultTransition();r=r?zp(r,l):l;const h=r==null?void 0:r.reduceMotion;s&&(r=s);const d=[],p=i&&t.animationState&&t.animationState.getState()[i];for(const I in c){const k=t.getValue(I,(v=t.latestValues[I])!=null?v:null),R=c[I];if(R===void 0||p&&Ow(p,I))continue;const V=D({delay:n},Mc(r||{},I)),O=k.get();if(O!==void 0&&!k.isAnimating()&&!Array.isArray(R)&&R===O&&!V.velocity){J.update(()=>k.set(R));continue}let L=!1;if(window.MotionHandoffAnimation){const W=Kp(t);if(W){const b=window.MotionHandoffAnimation(W,I,J);b!==null&&(V.startTime=b,L=!0)}}ja(t,I);const F=h!=null?h:t.shouldReduceMotion;k.start(Oc(I,k,R,F&&Hp.has(I)?{type:!1}:V,t,L));const B=k.animation;B&&d.push(B)}if(o){const I=()=>J.update(()=>{o&&Dw(t,o)});d.length?Promise.all(d).then(I):I()}return d}function Fa(t,e,n={}){var l;const s=wn(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(i=n.transitionOverride);const r=s?()=>Promise.all(qp(t,s,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(h=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:m}=i;return Lw(t,e,h,d,p,m,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[h,d]=c==="beforeChildren"?[r,o]:[o,r];return h().then(()=>d())}else return Promise.all([r(),o(n.delay)])}function Lw(t,e,n=0,s=0,i=0,r=1,o){const c=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),c.push(Fa(l,e,H(D({},o),{delay:n+(typeof s=="function"?0:s)+Bp(t.variantChildren,l,s,i,r)})).then(()=>l.notify("AnimationComplete",e)));return Promise.all(c)}function jw(t,e,n={}){t.notify("AnimationStart",e);let s;if(Array.isArray(e)){const i=e.map(r=>Fa(t,r,n));s=Promise.all(i)}else if(typeof e=="string")s=Fa(t,e,n);else{const i=typeof e=="function"?wn(t,e,n.custom):e;s=Promise.all(qp(t,i,n))}return s.then(()=>{t.notify("AnimationComplete",e)})}const Fw={test:t=>t==="auto",parse:t=>t},Gp=t=>e=>e.test(t),Yp=[ls,$,vt,Bt,p_,f_,Fw],hh=t=>Yp.find(Gp(t));function Uw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||op(t):!0}const Bw=new Set(["brightness","contrast","saturate","opacity"]);function $w(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(Sc)||[];if(!s)return t;const i=n.replace(s,"");let r=Bw.has(e)?1:0;return s!==n&&(r*=100),e+"("+r+i+")"}const zw=/\b([a-z-]*)\(.*?\)/gu,Ua=H(D({},ct),{getAnimatableNone:t=>{const e=t.match(zw);return e?e.map($w).join(" "):t}}),Ba=H(D({},ct),{getAnimatableNone:t=>{const e=ct.parse(t);return ct.createTransformer(t)(e.map(s=>typeof s=="number"?0:typeof s=="object"?H(D({},s),{alpha:1}):s))}}),dh=H(D({},ls),{transform:Math.round}),Hw={rotate:Bt,rotateX:Bt,rotateY:Bt,rotateZ:Bt,scale:Hi,scaleX:Hi,scaleY:Hi,scaleZ:Hi,skew:Bt,skewX:Bt,skewY:Bt,distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:ei,originX:Ju,originY:Ju,originZ:$},Fc=H(D({borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,borderTopLeftRadius:$,borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,top:$,right:$,bottom:$,left:$,inset:$,insetBlock:$,insetBlockStart:$,insetBlockEnd:$,insetInline:$,insetInlineStart:$,insetInlineEnd:$,padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,paddingBlock:$,paddingBlockStart:$,paddingBlockEnd:$,paddingInline:$,paddingInlineStart:$,paddingInlineEnd:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,marginBlock:$,marginBlockStart:$,marginBlockEnd:$,marginInline:$,marginInlineStart:$,marginInlineEnd:$,fontSize:$,backgroundPositionX:$,backgroundPositionY:$},Hw),{zIndex:dh,fillOpacity:ei,strokeOpacity:ei,numOctaves:dh}),Ww=H(D({},Fc),{color:ge,backgroundColor:ge,outlineColor:ge,fill:ge,stroke:ge,borderColor:ge,borderTopColor:ge,borderRightColor:ge,borderBottomColor:ge,borderLeftColor:ge,filter:Ua,WebkitFilter:Ua,mask:Ba,WebkitMask:Ba}),Xp=t=>Ww[t],Kw=new Set([Ua,Ba]);function Qp(t,e){let n=Xp(t);return Kw.has(n)||(n=ct),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const qw=new Set(["auto","none","0"]);function Gw(t,e,n){let s=0,i;for(;s<t.length&&!i;){const r=t[s];typeof r=="string"&&!qw.has(r)&&ns(r).values.length&&(i=t[s]),s++}if(i&&n)for(const r of e)t[r]=Qp(n,i)}class Yw extends Vc{constructor(e,n,s,i,r){super(e,n,s,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let p=e[d];if(typeof p=="string"&&(p=p.trim(),bc(p))){const m=$p(p,n.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Hp.has(s)||e.length!==2)return;const[i,r]=e,o=hh(i),c=hh(r),l=Qu(i),h=Qu(r);if(l!==h&&qt[s]){this.needsMeasurement=!0;return}if(o!==c)if(oh(o)&&oh(c))for(let d=0;d<e.length;d++){const p=e[d];typeof p=="string"&&(e[d]=parseFloat(p))}else qt[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,s=[];for(let i=0;i<e.length;i++)(e[i]===null||Uw(e[i]))&&s.push(i);s.length&&Gw(e,s,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:s}=this;if(!e||!e.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=qt[s](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(s,i).jump(i,!1)}measureEndState(){var c;const{element:e,name:n,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const r=s.length-1,o=s[r];s[r]=qt[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(c=this.removedTransforms)!=null&&c.length&&this.removedTransforms.forEach(([l,h])=>{e.getValue(l).set(h)}),this.resolveNoneKeyframes()}}function Jp(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const i=document.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(s=>s!=null)}const Zp=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function $s(t){return rp(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Uc}=vp(queueMicrotask,!1),et={x:!1,y:!1};function em(){return et.x||et.y}function Xw(t){return t==="x"||t==="y"?et[t]?null:(et[t]=!0,()=>{et[t]=!1}):et.x||et.y?null:(et.x=et.y=!0,()=>{et.x=et.y=!1})}function tm(t,e){const n=Jp(t),s=new AbortController,i=H(D({passive:!0},e),{signal:s.signal});return[n,i,()=>s.abort()]}function Qw(t){return!(t.pointerType==="touch"||em())}function Jw(t,e,n={}){const[s,i,r]=tm(t,n);return s.forEach(o=>{let c=!1,l=!1,h;const d=()=>{o.removeEventListener("pointerleave",I)},p=R=>{h&&(h(R),h=void 0),d()},m=R=>{c=!1,window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),l&&(l=!1,p(R))},v=()=>{c=!0,window.addEventListener("pointerup",m,i),window.addEventListener("pointercancel",m,i)},I=R=>{if(R.pointerType!=="touch"){if(c){l=!0;return}p(R)}},k=R=>{if(!Qw(R))return;l=!1;const V=e(o,R);typeof V=="function"&&(h=V,o.addEventListener("pointerleave",I,i))};o.addEventListener("pointerenter",k,i),o.addEventListener("pointerdown",v,i)}),r}const nm=(t,e)=>e?t===e?!0:nm(t,e.parentElement):!1,Bc=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Zw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function eT(t){return Zw.has(t.tagName)||t.isContentEditable===!0}const tT=new Set(["INPUT","SELECT","TEXTAREA"]);function nT(t){return tT.has(t.tagName)||t.isContentEditable===!0}const rr=new WeakSet;function fh(t){return e=>{e.key==="Enter"&&t(e)}}function Qo(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const sT=(t,e)=>{const n=t.currentTarget;if(!n)return;const s=fh(()=>{if(rr.has(n))return;Qo(n,"down");const i=fh(()=>{Qo(n,"up")}),r=()=>Qo(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",r,e)});n.addEventListener("keydown",s,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),e)};function ph(t){return Bc(t)&&!em()}const mh=new WeakSet;function iT(t,e,n={}){const[s,i,r]=tm(t,n),o=c=>{const l=c.currentTarget;if(!ph(c)||mh.has(c))return;rr.add(l),n.stopPropagation&&mh.add(c);const h=e(l,c),d=(v,I)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",m),rr.has(l)&&rr.delete(l),ph(v)&&typeof h=="function"&&h(v,{success:I})},p=v=>{d(v,l===window||l===document||n.useGlobalTarget||nm(l,v.target))},m=v=>{d(v,!1)};window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",m,i)};return s.forEach(c=>{(n.useGlobalTarget?window:c).addEventListener("pointerdown",o,i),$s(c)&&(c.addEventListener("focus",h=>sT(h,i)),!eT(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),r}function $c(t){return rp(t)&&"ownerSVGElement"in t}const or=new WeakMap;let $t;const sm=(t,e,n)=>(s,i)=>i&&i[0]?i[0][t+"Size"]:$c(s)&&"getBBox"in s?s.getBBox()[e]:s[n],rT=sm("inline","width","offsetWidth"),oT=sm("block","height","offsetHeight");function aT({target:t,borderBoxSize:e}){var n;(n=or.get(t))==null||n.forEach(s=>{s(t,{get width(){return rT(t,e)},get height(){return oT(t,e)}})})}function cT(t){t.forEach(aT)}function lT(){typeof ResizeObserver!="undefined"&&($t=new ResizeObserver(cT))}function uT(t,e){$t||lT();const n=Jp(t);return n.forEach(s=>{let i=or.get(s);i||(i=new Set,or.set(s,i)),i.add(e),$t==null||$t.observe(s)}),()=>{n.forEach(s=>{const i=or.get(s);i==null||i.delete(e),i!=null&&i.size||$t==null||$t.unobserve(s)})}}const ar=new Set;let zn;function hT(){zn=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};ar.forEach(e=>e(t))},window.addEventListener("resize",zn)}function dT(t){return ar.add(t),zn||hT(),()=>{ar.delete(t),!ar.size&&typeof zn=="function"&&(window.removeEventListener("resize",zn),zn=void 0)}}function $a(t,e){return typeof t=="function"?dT(t):uT(t,e)}function im(t,e){let n;const s=()=>{const{currentTime:i}=e,o=(i===null?0:i.value)/100;n!==o&&t(o),n=o};return J.preUpdate(s,!0),()=>Je(s)}function fT(t){return $c(t)&&t.tagName==="svg"}function pT(...t){const e=!Array.isArray(t[0]),n=e?0:-1,s=t[0+n],i=t[1+n],r=t[2+n],o=t[3+n],c=xc(i,r,o);return e?c(s):c}function mT(t,e,n={}){const s=t.get();let i=null,r=s,o;const c=typeof s=="string"?s.replace(/[\d.-]/g,""):void 0,l=()=>{i&&(i.stop(),i=null),t.animation=void 0},h=()=>{const p=gh(t.get()),m=gh(r);if(p===m){l();return}const v=i?i.getGeneratorVelocity():t.getVelocity();l(),i=new ti(H(D({keyframes:[p,m],velocity:v,type:"spring",restDelta:.001,restSpeed:.01},n),{onUpdate:o}))},d=()=>{var p;h(),t.animation=i!=null?i:void 0,(p=t.events.animationStart)==null||p.notify(),i==null||i.then(()=>{var m;t.animation=void 0,(m=t.events.animationComplete)==null||m.notify()})};if(t.attach((p,m)=>{r=p,o=v=>m(Jo(v,c)),J.postRender(d)},l),we(e)){let p=n.skipInitialAnimation===!0;const m=e.on("change",I=>{p?(p=!1,t.jump(Jo(I,c),!1)):t.set(Jo(I,c))}),v=t.on("destroy",m);return()=>{m(),v()}}return l}function Jo(t,e){return e?t+e:t}function gh(t){return typeof t=="number"?t:parseFloat(t)}const gT=[...Yp,ge,ct],yT=t=>gT.find(Gp(t)),yh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hn=()=>({x:yh(),y:yh()}),vh=()=>({min:0,max:0}),_e=()=>({x:vh(),y:vh()}),vT=new WeakMap;function no(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ni(t){return typeof t=="string"||Array.isArray(t)}const zc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hc=["initial",...zc];function so(t){return no(t.animate)||Hc.some(e=>ni(t[e]))}function rm(t){return!!(so(t)||t.variants)}function _T(t,e,n){for(const s in e){const i=e[s],r=n[s];if(we(i))t.addValue(s,i);else if(we(r))t.addValue(s,it(i,{owner:t}));else if(r!==i)if(t.hasValue(s)){const o=t.getValue(s);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(s);t.addValue(s,it(o!==void 0?o:i,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const za={current:null},om={current:!1},wT=typeof window!="undefined";function TT(){if(om.current=!0,!!wT)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>za.current=t.matches;t.addEventListener("change",e),e()}else za.current=!1}const _h=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Sr={};function am(t){Sr=t}function ET(){return Sr}class IT{scrapeMotionValuesFromProps(e,n,s){return{}}constructor({parent:e,props:n,presenceContext:s,reducedMotionConfig:i,skipAnimations:r,blockInitialAnimation:o,visualState:c},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Vc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const I=Fe.now();this.renderScheduledAt<I&&(this.renderScheduledAt=I,J.render(this.render,!1,!0))};const{latestValues:h,renderState:d}=c;this.latestValues=h,this.baseTarget=D({},h),this.initialValues=n.initial?D({},h):{},this.renderState=d,this.parent=e,this.props=n,this.presenceContext=s,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=r,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=so(n),this.isVariantNode=rm(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const v=this.scrapeMotionValuesFromProps(n,{},this),{willChange:p}=v,m=pe(v,["willChange"]);for(const I in m){const k=m[I];h[I]!==void 0&&we(k)&&k.set(h[I])}}mount(e){var n,s,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,vT.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(om.current||TT(),this.shouldReduceMotion=za.current),this.shouldSkipAnimations=(s=this.skipAnimationsConfig)!=null?s:!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Je(this.notifyUpdate),Je(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(e){var n;this.children.add(e),(n=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&Up.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:c,times:l,ease:h,duration:d}=n.accelerate,p=new jp({element:this.current,name:e,keyframes:c,times:l,ease:h,duration:qe(d)}),m=o(p);this.valueSubscriptions.set(e,()=>{m(),p.cancel()});return}const s=hs.has(e);s&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&J.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;typeof window!="undefined"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),r&&r(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Sr){const n=Sr[e];if(!n)continue;const{isEnabled:s,Feature:i}=n;if(!this.features[e]&&i&&s(this.props)&&(this.features[e]=new i(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):_e()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<_h.length;s++){const i=_h[s];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const r="on"+i,o=e[r];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=_T(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const s=this.values.get(e);n!==s&&(s&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let s=this.values.get(e);return s===void 0&&n!==void 0&&(s=it(n===null?void 0:n,{owner:this}),this.addValue(e,s)),s}readValue(e,n){var i;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!=null?i:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(ip(s)||op(s))?s=parseFloat(s):!yT(s)&&ct.test(n)&&(s=Qp(e,n)),this.setBaseTarget(e,we(s)?s.get():s)),we(s)?s.get():s}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var r;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const o=Lc(this.props,n,(r=this.presenceContext)==null?void 0:r.custom);o&&(s=o[e])}if(n&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!we(i)?i:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Tc),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Uc.render(this.render)}}class cm extends IT{constructor(){super(...arguments),this.KeyframeResolver=Yw}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const s=e.style;return s?s[n]:void 0}removeValueFromRenderState(e,{vars:n,style:s}){delete n[e],delete s[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;we(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class rn{constructor(e){this.isMounted=!1,this.node=e}update(){}}function lm({top:t,left:e,right:n,bottom:s}){return{x:{min:e,max:n},y:{min:t,max:s}}}function AT({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function bT(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),s=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Zo(t){return t===void 0||t===1}function Ha({scale:t,scaleX:e,scaleY:n}){return!Zo(t)||!Zo(e)||!Zo(n)}function fn(t){return Ha(t)||um(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function um(t){return wh(t.x)||wh(t.y)}function wh(t){return t&&t!=="0%"}function Pr(t,e,n){const s=t-n,i=e*s;return n+i}function Th(t,e,n,s,i){return i!==void 0&&(t=Pr(t,i,s)),Pr(t,n,s)+e}function Wa(t,e=0,n=1,s,i){t.min=Th(t.min,e,n,s,i),t.max=Th(t.max,e,n,s,i)}function hm(t,{x:e,y:n}){Wa(t.x,e.translate,e.scale,e.originPoint),Wa(t.y,n.translate,n.scale,n.originPoint)}const Eh=.999999999999,Ih=1.0000000000001;function ST(t,e,n,s=!1){var c;const i=n.length;if(!i)return;e.x=e.y=1;let r,o;for(let l=0;l<i;l++){r=n[l],o=r.projectionDelta;const{visualElement:h}=r.options;h&&h.props.style&&h.props.style.display==="contents"||(s&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(gt(t.x,-r.scroll.offset.x),gt(t.y,-r.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,hm(t,o)),s&&fn(r.latestValues)&&cr(t,r.latestValues,(c=r.layout)==null?void 0:c.layoutBox))}e.x<Ih&&e.x>Eh&&(e.x=1),e.y<Ih&&e.y>Eh&&(e.y=1)}function gt(t,e){t.min+=e,t.max+=e}function Ah(t,e,n,s,i=.5){const r=re(t.min,t.max,i);Wa(t,e,n,r,s)}function bh(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function cr(t,e,n){const s=n!=null?n:t;Ah(t.x,bh(e.x,s.x),e.scaleX,e.scale,e.originX),Ah(t.y,bh(e.y,s.y),e.scaleY,e.scale,e.originY)}function dm(t,e){return lm(bT(t.getBoundingClientRect(),e))}function PT(t,e,n){const s=dm(t,n),{scroll:i}=e;return i&&(gt(s.x,i.offset.x),gt(s.y,i.offset.y)),s}const CT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},RT=us.length;function xT(t,e,n){let s="",i=!0;for(let r=0;r<RT;r++){const o=us[r],c=t[o];if(c===void 0)continue;let l=!0;if(typeof c=="number")l=c===(o.startsWith("scale")?1:0);else{const h=parseFloat(c);l=o.startsWith("scale")?h===1:h===0}if(!l||n){const h=Zp(c,Fc[o]);if(!l){i=!1;const d=CT[o]||o;s+=`${d}(${h}) `}n&&(e[o]=h)}}return s=s.trim(),n?s=n(e,i?"":s):i&&(s="none"),s}function Wc(t,e,n){const{style:s,vars:i,transformOrigin:r}=t;let o=!1,c=!1;for(const l in e){const h=e[l];if(hs.has(l)){o=!0;continue}else if(wp(l)){i[l]=h;continue}else{const d=Zp(h,Fc[l]);l.startsWith("origin")?(c=!0,r[l]=d):s[l]=d}}if(e.transform||(o||n?s.transform=xT(e,t.transform,n):s.transform&&(s.transform="none")),c){const{originX:l="50%",originY:h="50%",originZ:d=0}=r;s.transformOrigin=`${l} ${h} ${d}`}}function fm(t,{style:e,vars:n},s,i){const r=t.style;let o;for(o in e)r[o]=e[o];i==null||i.applyProjectionStyles(r,s);for(o in n)r.setProperty(o,n[o])}function Sh(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Vs={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if($.test(t))t=parseFloat(t);else return t;const n=Sh(t,e.target.x),s=Sh(t,e.target.y);return`${n}% ${s}%`}},kT={correct:(t,{treeScale:e,projectionDelta:n})=>{const s=t,i=ct.parse(t);if(i.length>5)return s;const r=ct.createTransformer(t),o=typeof i[0]!="number"?1:0,c=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=c,i[1+o]/=l;const h=re(c,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=h),typeof i[3+o]=="number"&&(i[3+o]/=h),r(i)}},Ka={borderRadius:H(D({},Vs),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:Vs,borderTopRightRadius:Vs,borderBottomLeftRadius:Vs,borderBottomRightRadius:Vs,boxShadow:kT};function pm(t,{layout:e,layoutId:n}){return hs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ka[t]||t==="opacity")}function Kc(t,e,n){var o;const s=t.style,i=e==null?void 0:e.style,r={};if(!s)return r;for(const c in s)(we(s[c])||i&&we(i[c])||pm(c,t)||((o=n==null?void 0:n.getValue(c))==null?void 0:o.liveStyle)!==void 0)&&(r[c]=s[c]);return r}function VT(t){return window.getComputedStyle(t)}class DT extends cm{constructor(){super(...arguments),this.type="html",this.renderInstance=fm}readValueFromInstance(e,n){var s;if(hs.has(n))return(s=this.projection)!=null&&s.isProjecting?ka(n):J_(e,n);{const i=VT(e),r=(wp(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return dm(e,n)}build(e,n,s){Wc(e,n,s.transformTemplate)}scrapeMotionValuesFromProps(e,n,s){return Kc(e,n,s)}}const NT={offset:"stroke-dashoffset",array:"stroke-dasharray"},MT={offset:"strokeDashoffset",array:"strokeDasharray"};function OT(t,e,n=1,s=0,i=!0){t.pathLength=1;const r=i?NT:MT;t[r.offset]=`${-s}`,t[r.array]=`${e} ${n}`}const LT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function mm(t,p,l,h,d){var m=p,{attrX:e,attrY:n,attrScale:s,pathLength:i,pathSpacing:r=1,pathOffset:o=0}=m,c=pe(m,["attrX","attrY","attrScale","pathLength","pathSpacing","pathOffset"]);var k,R;if(Wc(t,c,h),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:I}=t;v.transform&&(I.transform=v.transform,delete v.transform),(I.transform||v.transformOrigin)&&(I.transformOrigin=(k=v.transformOrigin)!=null?k:"50% 50%",delete v.transformOrigin),I.transform&&(I.transformBox=(R=d==null?void 0:d.transformBox)!=null?R:"fill-box",delete v.transformBox);for(const V of LT)v[V]!==void 0&&(I[V]=v[V],delete v[V]);e!==void 0&&(v.x=e),n!==void 0&&(v.y=n),s!==void 0&&(v.scale=s),i!==void 0&&OT(v,i,r,o,!1)}const gm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),ym=t=>typeof t=="string"&&t.toLowerCase()==="svg";function jT(t,e,n,s){fm(t,e,void 0,s);for(const i in e.attrs)t.setAttribute(gm.has(i)?i:jc(i),e.attrs[i])}function vm(t,e,n){const s=Kc(t,e,n);for(const i in t)if(we(t[i])||we(e[i])){const r=us.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;s[r]=t[i]}return s}class FT extends cm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=_e}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(hs.has(n)){const s=Xp(n);return s&&s.default||0}return n=gm.has(n)?n:jc(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,s){return vm(e,n,s)}build(e,n,s){mm(e,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(e,n,s,i){jT(e,n,s,i)}mount(e){this.isSVGTag=ym(e.tagName),super.mount(e)}}const UT=Hc.length;function _m(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?_m(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<UT;n++){const s=Hc[n],i=t.props[s];(ni(i)||i===!1)&&(e[s]=i)}return e}function wm(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1;return!0}const BT=[...zc].reverse(),$T=zc.length;function zT(t){return e=>Promise.all(e.map(({animation:n,options:s})=>jw(t,n,s)))}function HT(t){let e=zT(t),n=Ph(),s=!0,i=!1;const r=h=>(d,p)=>{var v;const m=wn(t,p,h==="exit"?(v=t.presenceContext)==null?void 0:v.custom:void 0);if(m){const I=m,{transition:k,transitionEnd:R}=I,V=pe(I,["transition","transitionEnd"]);d=D(D(D({},d),V),R)}return d};function o(h){e=h(t)}function c(h){const{props:d}=t,p=_m(t.parent)||{},m=[],v=new Set;let I={},k=1/0;for(let V=0;V<$T;V++){const O=BT[V],L=n[O],F=d[O]!==void 0?d[O]:p[O],B=ni(F),W=O===h?L.isActive:null;W===!1&&(k=V);let b=F===p[O]&&F!==d[O]&&B;if(b&&(s||i)&&t.manuallyAnimateOnMount&&(b=!1),L.protectedKeys=D({},I),!L.isActive&&W===null||!F&&!L.prevProp||no(F)||typeof F=="boolean")continue;if(O==="exit"&&L.isActive&&W!==!0){L.prevResolvedValues&&(I=D(D({},I),L.prevResolvedValues));continue}const _=WT(L.prevProp,F);let w=_||O===h&&L.isActive&&!b&&B||V>k&&B,T=!1;const A=Array.isArray(F)?F:[F];let P=A.reduce(r(O),{});W===!1&&(P={});const{prevResolvedValues:E={}}=L,se=D(D({},E),P),be=le=>{w=!0,v.has(le)&&(T=!0,v.delete(le)),L.needsAnimating[le]=!0;const Se=t.getValue(le);Se&&(Se.liveStyle=!1)};for(const le in se){const Se=P[le],bt=E[le];if(I.hasOwnProperty(le))continue;let St=!1;La(Se)&&La(bt)?St=!wm(Se,bt):St=Se!==bt,St?Se!=null?be(le):v.add(le):Se!==void 0&&v.has(le)?be(le):L.protectedKeys[le]=!0}L.prevProp=F,L.prevResolvedValues=P,L.isActive&&(I=D(D({},I),P)),(s||i)&&t.blockInitialAnimation&&(w=!1);const Ye=b&&_;w&&(!Ye||T)&&m.push(...A.map(le=>{const Se={type:O};if(typeof le=="string"&&(s||i)&&!Ye&&t.manuallyAnimateOnMount&&t.parent){const{parent:bt}=t,St=wn(bt,le);if(bt.enteringChildren&&St){const{delayChildren:Ci}=St.transition||{};Se.delay=Bp(bt.enteringChildren,t,Ci)}}return{animation:le,options:Se}}))}if(v.size){const V={};if(typeof d.initial!="boolean"){const O=wn(t,Array.isArray(d.initial)?d.initial[0]:d.initial);O&&O.transition&&(V.transition=O.transition)}v.forEach(O=>{const L=t.getBaseTarget(O),F=t.getValue(O);F&&(F.liveStyle=!0),V[O]=L!=null?L:null}),m.push({animation:V})}let R=!!m.length;return s&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(R=!1),s=!1,i=!1,R?e(m):Promise.resolve()}function l(h,d){var m;if(n[h].isActive===d)return Promise.resolve();(m=t.variantChildren)==null||m.forEach(v=>{var I;return(I=v.animationState)==null?void 0:I.setActive(h,d)}),n[h].isActive=d;const p=c(h);for(const v in n)n[v].protectedKeys={};return p}return{animateChanges:c,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Ph(),i=!0}}}function WT(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!wm(e,t):!1}function dn(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ph(){return{animate:dn(!0),whileInView:dn(),whileHover:dn(),whileTap:dn(),whileDrag:dn(),whileFocus:dn(),exit:dn()}}function qa(t,e){t.min=e.min,t.max=e.max}function Ze(t,e){qa(t.x,e.x),qa(t.y,e.y)}function Ch(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const Tm=1e-4,KT=1-Tm,qT=1+Tm,Em=.01,GT=0-Em,YT=0+Em;function Ue(t){return t.max-t.min}function XT(t,e,n){return Math.abs(t-e)<=n}function Rh(t,e,n,s=.5){t.origin=s,t.originPoint=re(e.min,e.max,t.origin),t.scale=Ue(n)/Ue(e),t.translate=re(n.min,n.max,t.origin)-t.originPoint,(t.scale>=KT&&t.scale<=qT||isNaN(t.scale))&&(t.scale=1),(t.translate>=GT&&t.translate<=YT||isNaN(t.translate))&&(t.translate=0)}function zs(t,e,n,s){Rh(t.x,e.x,n.x,s?s.originX:void 0),Rh(t.y,e.y,n.y,s?s.originY:void 0)}function xh(t,e,n,s=0){const i=s?re(n.min,n.max,s):n.min;t.min=i+e.min,t.max=t.min+Ue(e)}function QT(t,e,n,s){xh(t.x,e.x,n.x,s==null?void 0:s.x),xh(t.y,e.y,n.y,s==null?void 0:s.y)}function kh(t,e,n,s=0){const i=s?re(n.min,n.max,s):n.min;t.min=e.min-i,t.max=t.min+Ue(e)}function Cr(t,e,n,s){kh(t.x,e.x,n.x,s==null?void 0:s.x),kh(t.y,e.y,n.y,s==null?void 0:s.y)}function Vh(t,e,n,s,i){return t-=e,t=Pr(t,1/n,s),i!==void 0&&(t=Pr(t,1/i,s)),t}function JT(t,e=0,n=1,s=.5,i,r=t,o=t){if(vt.test(e)&&(e=parseFloat(e),e=re(o.min,o.max,e/100)-o.min),typeof e!="number")return;let c=re(r.min,r.max,s);t===r&&(c-=e),t.min=Vh(t.min,e,n,c,i),t.max=Vh(t.max,e,n,c,i)}function Dh(t,e,[n,s,i],r,o){JT(t,e[n],e[s],e[i],e.scale,r,o)}const ZT=["x","scaleX","originX"],eE=["y","scaleY","originY"];function Nh(t,e,n,s){Dh(t.x,e,ZT,n?n.x:void 0,s?s.x:void 0),Dh(t.y,e,eE,n?n.y:void 0,s?s.y:void 0)}function Mh(t){return t.translate===0&&t.scale===1}function Im(t){return Mh(t.x)&&Mh(t.y)}function Oh(t,e){return t.min===e.min&&t.max===e.max}function tE(t,e){return Oh(t.x,e.x)&&Oh(t.y,e.y)}function Lh(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Am(t,e){return Lh(t.x,e.x)&&Lh(t.y,e.y)}function jh(t){return Ue(t.x)/Ue(t.y)}function Fh(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function pt(t){return[t("x"),t("y")]}function nE(t,e,n){let s="";const i=t.x.translate/e.x,r=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||r||o)&&(s=`translate3d(${i}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(s+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:h,rotate:d,rotateX:p,rotateY:m,skewX:v,skewY:I}=n;h&&(s=`perspective(${h}px) ${s}`),d&&(s+=`rotate(${d}deg) `),p&&(s+=`rotateX(${p}deg) `),m&&(s+=`rotateY(${m}deg) `),v&&(s+=`skewX(${v}deg) `),I&&(s+=`skewY(${I}deg) `)}const c=t.x.scale*e.x,l=t.y.scale*e.y;return(c!==1||l!==1)&&(s+=`scale(${c}, ${l})`),s||"none"}const bm=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],sE=bm.length,Uh=t=>typeof t=="string"?parseFloat(t):t,Bh=t=>typeof t=="number"||$.test(t);function iE(t,e,n,s,i,r){var o,c,l,h;i?(t.opacity=re(0,(o=n.opacity)!=null?o:1,rE(s)),t.opacityExit=re((c=e.opacity)!=null?c:1,0,oE(s))):r&&(t.opacity=re((l=e.opacity)!=null?l:1,(h=n.opacity)!=null?h:1,s));for(let d=0;d<sE;d++){const p=bm[d];let m=$h(e,p),v=$h(n,p);if(m===void 0&&v===void 0)continue;m||(m=0),v||(v=0),m===0||v===0||Bh(m)===Bh(v)?(t[p]=Math.max(re(Uh(m),Uh(v),s),0),(vt.test(v)||vt.test(m))&&(t[p]+="%")):t[p]=v}(e.rotate||n.rotate)&&(t.rotate=re(e.rotate||0,n.rotate||0,s))}function $h(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const rE=Sm(0,.5,pp),oE=Sm(.5,.95,ze);function Sm(t,e,n){return s=>s<t?0:s>e?1:n(ts(t,e,s))}function aE(t,e,n){const s=we(t)?t:it(t);return s.start(Oc("",s,e,n)),s.animation}function si(t,e,n,s={passive:!0}){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n)}const cE=(t,e)=>t.depth-e.depth;class lE{constructor(){this.children=[],this.isDirty=!1}add(e){wc(this.children,e),this.isDirty=!0}remove(e){Er(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(cE),this.isDirty=!1,this.children.forEach(e)}}function uE(t,e){const n=Fe.now(),s=({timestamp:i})=>{const r=i-n;r>=e&&(Je(s),t(r-e))};return J.setup(s,!0),()=>Je(s)}function lr(t){return we(t)?t.get():t}class hE{constructor(){this.members=[]}add(e){wc(this.members,e);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===e||s===this.lead||s===this.prevLead)continue;const i=s.instance;(!i||i.isConnected===!1)&&!s.snapshot&&(Er(this.members,s),s.unmount())}e.scheduleRender()}remove(e){if(Er(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let s=this.members.indexOf(e)-1;s>=0;s--){const i=this.members[s];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(e,n){var i;const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=s.options,{layoutDependency:o}=e.options;(r===void 0||r!==o)&&(e.resumeFrom=s,n&&(s.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),(i=e.root)!=null&&i.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,s,i,r,o;(s=(n=e.options).onExitComplete)==null||s.call(n),(o=(i=e.resumingFrom)==null?void 0:(r=i.options).onExitComplete)==null||o.call(r)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const ur={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ea=["","X","Y","Z"],dE=1e3;let fE=0;function ta(t,e,n,s){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),s&&(s[t]=0))}function Pm(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Kp(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:r}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",J,!(i||r))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&Pm(s)}function Cm({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:s,resetTransform:i}){return class{constructor(o={},c=e==null?void 0:e()){this.id=fE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(gE),this.nodes.forEach(EE),this.nodes.forEach(IE),this.nodes.forEach(yE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new lE)}addEventListener(o,c){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Tc),this.eventHandlers.get(o).add(c)}notifyListeners(o,...c){const l=this.eventHandlers.get(o);l&&l.notify(...c)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=$c(o)&&!fT(o),this.instance=o;const{layoutId:c,layout:l,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||c)&&(this.isLayoutDirty=!0),t){let d,p=0;const m=()=>this.root.updateBlockedByResize=!1;J.read(()=>{p=window.innerWidth}),t(o,()=>{const v=window.innerWidth;v!==p&&(p=v,this.root.updateBlockedByResize=!0,d&&d(),d=uE(m,250),ur.hasAnimatedSinceResize&&(ur.hasAnimatedSinceResize=!1,this.nodes.forEach(Wh)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&h&&(c||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:m,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const I=this.options.transition||h.getDefaultTransition()||CE,{onLayoutAnimationStart:k,onLayoutAnimationComplete:R}=h.getProps(),V=!this.targetLayout||!Am(this.targetLayout,v),O=!p&&m;if(this.options.layoutRoot||this.resumeFrom||O||p&&(V||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L=H(D({},Mc(I,"layout")),{onPlay:k,onComplete:R});(h.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(d,O)}else p||Wh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Je(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(AE),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Pm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,(typeof p.latestValues.x=="string"||typeof p.latestValues.y=="string")&&(p.isLayoutDirty=!0),p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:c,layout:l}=this.options;if(c===void 0&&!l)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(_E),this.nodes.forEach(zh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Hh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(wE),this.nodes.forEach(TE),this.nodes.forEach(pE),this.nodes.forEach(mE)):this.nodes.forEach(Hh),this.clearAllSnapshots();const c=Fe.now();Ee.delta=lt(0,1e3/60,c-Ee.timestamp),Ee.timestamp=c,Ee.isProcessing=!0,Wo.update.process(Ee),Wo.preRender.process(Ee),Wo.render.process(Ee),Ee.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Uc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vE),this.sharedNodes.forEach(bE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,J.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){J.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ue(this.snapshot.measuredBox.x)&&!Ue(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=_e()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(c=!1),c&&this.instance){const l=s(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!Im(this.projectionDelta),l=this.getTransformTemplate(),h=l?l(this.latestValues,""):void 0,d=h!==this.prevTransformTemplateValue;o&&this.instance&&(c||fn(this.latestValues)||d)&&(i(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const c=this.measurePageBox();let l=this.removeElementScroll(c);return o&&(l=this.removeTransform(l)),RE(l),{animationId:this.root.animationId,measuredBox:c,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:o}=this.options;if(!o)return _e();const c=o.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(xE))){const{scroll:d}=this.root;d&&(gt(c.x,d.offset.x),gt(c.y,d.offset.y))}return c}removeElementScroll(o){var l;const c=_e();if(Ze(c,o),(l=this.scroll)!=null&&l.wasRoot)return c;for(let h=0;h<this.path.length;h++){const d=this.path[h],{scroll:p,options:m}=d;d!==this.root&&p&&m.layoutScroll&&(p.wasRoot&&Ze(c,o),gt(c.x,p.offset.x),gt(c.y,p.offset.y))}return c}applyTransform(o,c=!1,l){var d,p;const h=l||_e();Ze(h,o);for(let m=0;m<this.path.length;m++){const v=this.path[m];!c&&v.options.layoutScroll&&v.scroll&&v!==v.root&&(gt(h.x,-v.scroll.offset.x),gt(h.y,-v.scroll.offset.y)),fn(v.latestValues)&&cr(h,v.latestValues,(d=v.layout)==null?void 0:d.layoutBox)}return fn(this.latestValues)&&cr(h,this.latestValues,(p=this.layout)==null?void 0:p.layoutBox),h}removeTransform(o){var l;const c=_e();Ze(c,o);for(let h=0;h<this.path.length;h++){const d=this.path[h];if(!fn(d.latestValues))continue;let p;d.instance&&(Ha(d.latestValues)&&d.updateSnapshot(),p=_e(),Ze(p,d.measurePageBox())),Nh(c,d.latestValues,(l=d.snapshot)==null?void 0:l.layoutBox,p)}return fn(this.latestValues)&&Nh(c,this.latestValues),c}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options=H(D(D({},this.options),o),{crossfade:o.crossfade!==void 0?o.crossfade:!0})}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ee.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var v;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==c;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:p}=this.options;if(!this.layout||!(d||p))return;this.resolvedRelativeTargetAt=Ee.timestamp;const m=this.getClosestProjectingParent();m&&this.linkedParentVersion!==m.layoutVersion&&!m.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&m&&m.layout?this.createRelativeTarget(m,this.layout.layoutBox,m.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=_e(),this.targetWithTransforms=_e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),QT(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ze(this.target,this.layout.layoutBox),hm(this.target,this.targetDelta)):Ze(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?this.createRelativeTarget(m,this.target,m.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ha(this.parent.latestValues)||um(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,c,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=_e(),this.relativeTargetOrigin=_e(),Cr(this.relativeTargetOrigin,c,l,this.options.layoutAnchor||void 0),Ze(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var I;const o=this.getLead(),c=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(I=this.parent)!=null&&I.isProjectionDirty)&&(l=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ee.timestamp&&(l=!1),l)return;const{layout:h,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||d))return;Ze(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;ST(this.layoutCorrected,this.treeScale,this.path,c),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=_e());const{target:v}=o;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ch(this.prevProjectionDelta.x,this.projectionDelta.x),Ch(this.prevProjectionDelta.y,this.projectionDelta.y)),zs(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==m||!Fh(this.projectionDelta.x,this.prevProjectionDelta.x)||!Fh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var c;if((c=this.options.visualElement)==null||c.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Hn(),this.projectionDelta=Hn(),this.projectionDeltaWithTransform=Hn()}setAnimationOrigin(o,c=!1){const l=this.snapshot,h=l?l.latestValues:{},d=D({},this.latestValues),p=Hn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const m=_e(),v=l?l.source:void 0,I=this.layout?this.layout.source:void 0,k=v!==I,R=this.getStack(),V=!R||R.members.length<=1,O=!!(k&&!V&&this.options.crossfade===!0&&!this.path.some(PE));this.animationProgress=0;let L;this.mixTargetDelta=F=>{const B=F/1e3;Kh(p.x,o.x,B),Kh(p.y,o.y,B),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Cr(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),SE(this.relativeTarget,this.relativeTargetOrigin,m,B),L&&tE(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=_e()),Ze(L,this.relativeTarget)),k&&(this.animationValues=d,iE(d,h,this.latestValues,B,O,V)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=B},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var c,l,h;this.notifyListeners("animationStart"),(c=this.currentAnimation)==null||c.stop(),(h=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Je(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=J.update(()=>{ur.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=it(0)),this.motionValue.jump(0,!1),this.currentAnimation=aE(this.motionValue,[0,1e3],H(D({},o),{velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),o.onUpdate&&o.onUpdate(d)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}})),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(dE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:c,target:l,layout:h,latestValues:d}=o;if(!(!c||!l||!h)){if(this!==o&&this.layout&&h&&Rm(this.options.animationType,this.layout.layoutBox,h.layoutBox)){l=this.target||_e();const p=Ue(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+p;const m=Ue(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+m}Ze(c,l),cr(c,d),zs(this.projectionDeltaWithTransform,this.layoutCorrected,c,d)}}registerSharedNode(o,c){this.sharedNodes.has(o)||this.sharedNodes.set(o,new hE),this.sharedNodes.get(o).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var c;const{layoutId:o}=this.options;return o?((c=this.getStack())==null?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:o}=this.options;return o?(c=this.getStack())==null?void 0:c.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:c,preserveFollowOpacity:l}={}){const h=this.getStack();h&&h.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let c=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(c=!0),!c)return;const h={};l.z&&ta("z",o,h,this.animationValues);for(let d=0;d<ea.length;d++)ta(`rotate${ea[d]}`,o,h,this.animationValues),ta(`skew${ea[d]}`,o,h,this.animationValues);o.render();for(const d in h)o.setStaticValue(d,h[d]),this.animationValues&&(this.animationValues[d]=h[d]);o.scheduleRender()}applyProjectionStyles(o,c){var I,k;if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=lr(c==null?void 0:c.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=lr(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!fn(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const d=h.animationValues||h.latestValues;this.applyTransformsToTarget();let p=nE(this.projectionDeltaWithTransform,this.treeScale,d);l&&(p=l(d,p)),o.transform=p;const{x:m,y:v}=this.projectionDelta;o.transformOrigin=`${m.origin*100}% ${v.origin*100}% 0`,h.animationValues?o.opacity=h===this?(k=(I=d.opacity)!=null?I:this.latestValues.opacity)!=null?k:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:o.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const R in Ka){if(d[R]===void 0)continue;const{correct:V,applyTo:O,isCSSVariable:L}=Ka[R],F=p==="none"?d[R]:V(d[R],h);if(O){const B=O.length;for(let W=0;W<B;W++)o[O[W]]=F}else L?this.options.visualElement.renderState.vars[R]=F:o[R]=F}this.options.layoutId&&(o.pointerEvents=h===this?lr(c==null?void 0:c.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var c;return(c=o.currentAnimation)==null?void 0:c.stop()}),this.root.nodes.forEach(zh),this.root.sharedNodes.clear()}}}function pE(t){t.updateLayout()}function mE(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:i}=t.layout,{animationType:r}=t.options,o=e.source!==t.layout.source;if(r==="size")pt(p=>{const m=o?e.measuredBox[p]:e.layoutBox[p],v=Ue(m);m.min=s[p].min,m.max=m.min+v});else if(r==="x"||r==="y"){const p=r==="x"?"y":"x";qa(o?e.measuredBox[p]:e.layoutBox[p],s[p])}else Rm(r,e.layoutBox,s)&&pt(p=>{const m=o?e.measuredBox[p]:e.layoutBox[p],v=Ue(s[p]);m.max=m.min+v,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[p].max=t.relativeTarget[p].min+v)});const c=Hn();zs(c,s,e.layoutBox);const l=Hn();o?zs(l,t.applyTransform(i,!0),e.measuredBox):zs(l,s,e.layoutBox);const h=!Im(c);let d=!1;if(!t.resumeFrom){const p=t.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:m,layout:v}=p;if(m&&v){const I=t.options.layoutAnchor||void 0,k=_e();Cr(k,e.layoutBox,m.layoutBox,I);const R=_e();Cr(R,s,v.layoutBox,I),Am(k,R)||(d=!0),p.options.layoutRoot&&(t.relativeTarget=R,t.relativeTargetOrigin=k,t.relativeParent=p)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:e,delta:l,layoutDelta:c,hasLayoutChanged:h,hasRelativeLayoutChanged:d})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function gE(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function yE(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function vE(t){t.clearSnapshot()}function zh(t){t.clearMeasurements()}function _E(t){t.isLayoutDirty=!0,t.updateLayout()}function Hh(t){t.isLayoutDirty=!1}function wE(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function TE(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Wh(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function EE(t){t.resolveTargetDelta()}function IE(t){t.calcProjection()}function AE(t){t.resetSkewAndRotation()}function bE(t){t.removeLeadSnapshot()}function Kh(t,e,n){t.translate=re(e.translate,0,n),t.scale=re(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function qh(t,e,n,s){t.min=re(e.min,n.min,s),t.max=re(e.max,n.max,s)}function SE(t,e,n,s){qh(t.x,e.x,n.x,s),qh(t.y,e.y,n.y,s)}function PE(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const CE={duration:.45,ease:[.4,0,.1,1]},Gh=t=>typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Yh=Gh("applewebkit/")&&!Gh("chrome/")?Math.round:ze;function Xh(t){t.min=Yh(t.min),t.max=Yh(t.max)}function RE(t){Xh(t.x),Xh(t.y)}function Rm(t,e,n){return t==="position"||t==="preserve-aspect"&&!XT(jh(e),jh(n),.2)}function xE(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const kE=Cm({attachResizeListener:(t,e)=>si(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),na={current:void 0},xm=Cm({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!na.current){const t=new kE({});t.mount(window),t.setOptions({layoutScroll:!0}),na.current=t}return na.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),mi=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Qh(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function VE(...t){return e=>{let n=!1;const s=t.map(i=>{const r=Qh(i,e);return!n&&typeof r=="function"&&(n=!0),r});if(n)return()=>{for(let i=0;i<s.length;i++){const r=s[i];typeof r=="function"?r():Qh(t[i],null)}}}}function DE(...t){return N.useCallback(VE(...t),t)}class NE extends N.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if($s(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,i=$s(s)&&s.offsetWidth||0,r=$s(s)&&s.offsetHeight||0,o=getComputedStyle(n),c=this.props.sizeRef.current;c.height=parseFloat(o.height),c.width=parseFloat(o.width),c.top=n.offsetTop,c.left=n.offsetLeft,c.right=i-c.width-c.left,c.bottom=r-c.height-c.top}return null}componentDidUpdate(){}render(){return this.props.children}}function ME({children:t,isPresent:e,anchorX:n,anchorY:s,root:i,pop:r}){var m,v;const o=N.useId(),c=N.useRef(null),l=N.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:h}=N.useContext(mi),d=(v=(m=t.props)==null?void 0:m.ref)!=null?v:t==null?void 0:t.ref,p=DE(c,d);return N.useInsertionEffect(()=>{const{width:I,height:k,top:R,left:V,right:O,bottom:L}=l.current;if(e||r===!1||!c.current||!I||!k)return;const F=n==="left"?`left: ${V}`:`right: ${O}`,B=s==="bottom"?`bottom: ${L}`:`top: ${R}`;c.current.dataset.motionPopId=o;const W=document.createElement("style");h&&(W.nonce=h);const b=i!=null?i:document.head;return b.appendChild(W),W.sheet&&W.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${I}px !important;
            height: ${k}px !important;
            ${F}px !important;
            ${B}px !important;
          }
        `),()=>{var _;(_=c.current)==null||_.removeAttribute("data-motion-pop-id"),b.contains(W)&&b.removeChild(W)}},[e]),y.jsx(NE,{isPresent:e,childRef:c,sizeRef:l,pop:r,children:r===!1?t:N.cloneElement(t,{ref:p})})}const OE=({children:t,initial:e,isPresent:n,onExitComplete:s,custom:i,presenceAffectsLayout:r,mode:o,anchorX:c,anchorY:l,root:h})=>{const d=Qt(LE),p=N.useId();let m=!0,v=N.useMemo(()=>(m=!1,{id:p,initial:e,isPresent:n,custom:i,onExitComplete:I=>{d.set(I,!0);for(const k of d.values())if(!k)return;s&&s()},register:I=>(d.set(I,!1),()=>d.delete(I))}),[n,d,s]);return r&&m&&(v=D({},v)),N.useMemo(()=>{d.forEach((I,k)=>d.set(k,!1))},[n]),N.useEffect(()=>{!n&&!d.size&&s&&s()},[n]),t=y.jsx(ME,{pop:o==="popLayout",isPresent:n,anchorX:c,anchorY:l,root:h,children:t}),y.jsx(eo.Provider,{value:v,children:t})};function LE(){return new Map}function km(t=!0){const e=N.useContext(eo);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:i}=e,r=N.useId();N.useEffect(()=>{if(t)return i(r)},[t]);const o=N.useCallback(()=>t&&s&&s(r),[r,s,t]);return!n&&s?[!1,o]:[!0]}const Wi=t=>t.key||"";function Jh(t){const e=[];return N.Children.forEach(t,n=>{N.isValidElement(n)&&e.push(n)}),e}const jE=({children:t,custom:e,initial:n=!0,onExitComplete:s,presenceAffectsLayout:i=!0,mode:r="sync",propagate:o=!1,anchorX:c="left",anchorY:l="top",root:h})=>{const[d,p]=km(o),m=N.useMemo(()=>Jh(t),[t]),v=o&&!d?[]:m.map(Wi),I=N.useRef(!0),k=N.useRef(m),R=Qt(()=>new Map),V=N.useRef(new Set),[O,L]=N.useState(m),[F,B]=N.useState(m);Zr(()=>{I.current=!1,k.current=m;for(let _=0;_<F.length;_++){const w=Wi(F[_]);v.includes(w)?(R.delete(w),V.current.delete(w)):R.get(w)!==!0&&R.set(w,!1)}},[F,v.length,v.join("-")]);const W=[];if(m!==O){let _=[...m];for(let w=0;w<F.length;w++){const T=F[w],A=Wi(T);v.includes(A)||(_.splice(w,0,T),W.push(T))}return r==="wait"&&W.length&&(_=W),B(Jh(_)),L(m),null}const{forceRender:b}=N.useContext(_c);return y.jsx(y.Fragment,{children:F.map(_=>{const w=Wi(_),T=o&&!d?!1:m===F||v.includes(w),A=()=>{if(V.current.has(w))return;if(R.has(w))V.current.add(w),R.set(w,!0);else return;let P=!0;R.forEach(E=>{E||(P=!1)}),P&&(b==null||b(),B(k.current),o&&(p==null||p()),s&&s())};return y.jsx(OE,{isPresent:T,initial:!I.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:r,root:h,onExitComplete:T?void 0:A,anchorX:c,anchorY:l,children:_},w)})})},Vm=N.createContext({strict:!1}),Zh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let ed=!1;function FE(){if(ed)return;const t={};for(const e in Zh)t[e]={isEnabled:n=>Zh[e].some(s=>!!n[s])};am(t),ed=!0}function Dm(){return FE(),ET()}function UE(t){const e=Dm();for(const n in t)e[n]=D(D({},e[n]),t[n]);am(e)}const BE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Rr(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||BE.has(t)}let Nm=t=>!Rr(t);function $E(t){typeof t=="function"&&(Nm=e=>e.startsWith("on")?!Rr(e):t(e))}try{$E(require("@emotion/is-prop-valid").default)}catch(t){}function zE(t,e,n){const s={};for(const i in t)i==="values"&&typeof t.values=="object"||we(t[i])||(Nm(i)||n===!0&&Rr(i)||!e&&!Rr(i)||t.draggable&&i.startsWith("onDrag"))&&(s[i]=t[i]);return s}const io=N.createContext({});function HE(t,e){if(so(t)){const{initial:n,animate:s}=t;return{initial:n===!1||ni(n)?n:void 0,animate:ni(s)?s:void 0}}return t.inherit!==!1?e:{}}function WE(t){const{initial:e,animate:n}=HE(t,N.useContext(io));return N.useMemo(()=>({initial:e,animate:n}),[td(e),td(n)])}function td(t){return Array.isArray(t)?t.join(" "):t}const qc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Mm(t,e,n){for(const s in e)!we(e[s])&&!pm(s,n)&&(t[s]=e[s])}function KE({transformTemplate:t},e){return N.useMemo(()=>{const n=qc();return Wc(n,e,t),Object.assign({},n.vars,n.style)},[e])}function qE(t,e){const n=t.style||{},s={};return Mm(s,n,t),Object.assign(s,KE(t,e)),s}function GE(t,e){const n={},s=qE(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=s,n}const Om=()=>H(D({},qc()),{attrs:{}});function YE(t,e,n,s){const i=N.useMemo(()=>{const r=Om();return mm(r,e,ym(s),t.transformTemplate,t.style),H(D({},r.attrs),{style:D({},r.style)})},[e]);if(t.style){const r={};Mm(r,t.style,t),i.style=D(D({},r),i.style)}return i}const XE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Gc(t){return typeof t!="string"||t.includes("-")?!1:!!(XE.indexOf(t)>-1||/[A-Z]/u.test(t))}function QE(t,e,n,{latestValues:s},i,r=!1,o){const l=((o!=null?o:Gc(t))?YE:GE)(e,s,i,t),h=zE(e,typeof t=="string",r),d=t!==N.Fragment?H(D(D({},h),l),{ref:n}):{},{children:p}=e,m=N.useMemo(()=>we(p)?p.get():p,[p]);return N.createElement(t,H(D({},d),{children:m}))}function JE({scrapeMotionValuesFromProps:t,createRenderState:e},n,s,i){return{latestValues:ZE(n,s,i,t),renderState:e()}}function ZE(t,e,n,s){const i={},r=s(t,{});for(const v in r)i[v]=lr(r[v]);let{initial:o,animate:c}=t;const l=so(t),h=rm(t);e&&h&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),c===void 0&&(c=e.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const p=d?c:o;if(p&&typeof p!="boolean"&&!no(p)){const v=Array.isArray(p)?p:[p];for(let I=0;I<v.length;I++){const k=Lc(t,v[I]);if(k){const m=k,{transitionEnd:R,transition:V}=m,O=pe(m,["transitionEnd","transition"]);for(const L in O){let F=O[L];if(Array.isArray(F)){const B=d?F.length-1:0;F=F[B]}F!==null&&(i[L]=F)}for(const L in R)i[L]=R[L]}}}return i}const Lm=t=>(e,n)=>{const s=N.useContext(io),i=N.useContext(eo),r=()=>JE(t,e,s,i);return n?r():Qt(r)},e1=Lm({scrapeMotionValuesFromProps:Kc,createRenderState:qc}),t1=Lm({scrapeMotionValuesFromProps:vm,createRenderState:Om}),n1=Symbol.for("motionComponentSymbol");function s1(t,e,n){const s=N.useRef(n);N.useInsertionEffect(()=>{s.current=n});const i=N.useRef(null);return N.useCallback(r=>{var c;r&&((c=t.onMount)==null||c.call(t,r));const o=s.current;if(typeof o=="function")if(r){const l=o(r);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):o(r);else o&&(o.current=r);e&&(r?e.mount(r):e.unmount())},[e])}const jm=N.createContext({});function Fn(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function i1(t,e,n,s,i,r){var L,F;const{visualElement:o}=N.useContext(io),c=N.useContext(Vm),l=N.useContext(eo),h=N.useContext(mi),d=h.reducedMotion,p=h.skipAnimations,m=N.useRef(null),v=N.useRef(!1);s=s||c.renderer,!m.current&&s&&(m.current=s(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:d,skipAnimations:p,isSVG:r}),v.current&&m.current&&(m.current.manuallyAnimateOnMount=!0));const I=m.current,k=N.useContext(jm);I&&!I.projection&&i&&(I.type==="html"||I.type==="svg")&&r1(m.current,n,i,k);const R=N.useRef(!1);N.useInsertionEffect(()=>{I&&R.current&&I.update(n,l)});const V=n[Wp],O=N.useRef(!!V&&typeof window!="undefined"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,V))&&((F=window.MotionHasOptimisedAnimation)==null?void 0:F.call(window,V)));return Zr(()=>{v.current=!0,I&&(R.current=!0,window.MotionIsMounted=!0,I.updateFeatures(),I.scheduleRenderMicrotask(),O.current&&I.animationState&&I.animationState.animateChanges())}),N.useEffect(()=>{I&&(!O.current&&I.animationState&&I.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var B;(B=window.MotionHandoffMarkAsComplete)==null||B.call(window,V)}),O.current=!1),I.enteringChildren=void 0)}),I}function r1(t,e,n,s){const{layoutId:i,layout:r,drag:o,dragConstraints:c,layoutScroll:l,layoutRoot:h,layoutAnchor:d,layoutCrossfade:p}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Fm(t.parent)),t.projection.setOptions({layoutId:i,layout:r,alwaysMeasureLayout:!!o||c&&Fn(c),visualElement:t,animationType:typeof r=="string"?r:"both",initialPromotionConfig:s,crossfade:p,layoutScroll:l,layoutRoot:h,layoutAnchor:d})}function Fm(t){if(t)return t.options.allowProjection!==!1?t.projection:Fm(t.parent)}function sa(t,{forwardMotionProps:e=!1,type:n}={},s,i){var h,d;s&&UE(s);const r=n?n==="svg":Gc(t),o=r?t1:e1;function c(p,m){let v;const I=H(D(D({},N.useContext(mi)),p),{layoutId:o1(p)}),{isStatic:k}=I,R=WE(p),V=o(p,k);if(!k&&typeof window!="undefined"){a1();const O=c1(I);v=O.MeasureLayout,R.visualElement=i1(t,V,I,i,O.ProjectionNode,r)}return y.jsxs(io.Provider,{value:R,children:[v&&R.visualElement?y.jsx(v,D({visualElement:R.visualElement},I)):null,QE(t,p,s1(V,R.visualElement,m),V,k,e,r)]})}c.displayName=`motion.${typeof t=="string"?t:`create(${(d=(h=t.displayName)!=null?h:t.name)!=null?d:""})`}`;const l=N.forwardRef(c);return l[n1]=t,l}function o1({layoutId:t}){const e=N.useContext(_c).id;return e&&t!==void 0?e+"-"+t:t}function a1(t,e){N.useContext(Vm).strict}function c1(t){const e=Dm(),{drag:n,layout:s}=e;if(!n&&!s)return{};const i=D(D({},n),s);return{MeasureLayout:n!=null&&n.isEnabled(t)||s!=null&&s.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function l1(t,e){if(typeof Proxy=="undefined")return sa;const n=new Map,s=(r,o)=>sa(r,o,t,e),i=(r,o)=>s(r,o);return new Proxy(i,{get:(r,o)=>o==="create"?s:(n.has(o)||n.set(o,sa(o,void 0,t,e)),n.get(o))})}const u1=(t,e)=>{var s;return((s=e.isSVG)!=null?s:Gc(t))?new FT(e):new DT(e,{allowProjection:t!==N.Fragment})};class h1 extends rn{constructor(e){super(e),e.animationState||(e.animationState=HT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();no(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let d1=0;class f1 extends rn{constructor(){super(...arguments),this.id=d1++,this.isExitComplete=!1}update(){var o;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;if(e&&s===!1){if(this.isExitComplete){const{initial:c,custom:l}=this.node.getProps();if(typeof c=="string"){const h=wn(this.node,c,l);if(h){const r=h,{transition:d,transitionEnd:p}=r,m=pe(r,["transition","transitionEnd"]);for(const v in m)(o=this.node.getValue(v))==null||o.jump(m[v])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const p1={animation:{Feature:h1},exit:{Feature:f1}};function gi(t){return{point:{x:t.pageX,y:t.pageY}}}const m1=t=>e=>Bc(e)&&t(e,gi(e));function Hs(t,e,n,s){return si(t,e,m1(n),s)}const Um=({current:t})=>t?t.ownerDocument.defaultView:null,nd=(t,e)=>Math.abs(t-e);function g1(t,e){const n=nd(t.x,e.x),s=nd(t.y,e.y);return Math.sqrt(Ho(n,2)+Ho(s,2))}const sd=new Set(["auto","scroll"]);class Bm{constructor(e,n,{transformPagePoint:s,contextWindow:i=window,dragSnapToOrigin:r=!1,distanceThreshold:o=3,element:c}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ki(this.lastRawMoveEventInfo,this.transformPagePoint));const v=ia(this.lastMoveEventInfo,this.history),I=this.startEvent!==null,k=g1(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!I&&!k)return;const{point:R}=v,{timestamp:V}=Ee;this.history.push(H(D({},R),{timestamp:V}));const{onStart:O,onMove:L}=this.handlers;I||(O&&O(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,v)},this.handlePointerMove=(v,I)=>{this.lastMoveEvent=v,this.lastRawMoveEventInfo=I,this.lastMoveEventInfo=Ki(I,this.transformPagePoint),J.update(this.updatePoint,!0)},this.handlePointerUp=(v,I)=>{this.end();const{onEnd:k,onSessionEnd:R,resumeAnimation:V}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&V&&V(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=ia(v.type==="pointercancel"?this.lastMoveEventInfo:Ki(I,this.transformPagePoint),this.history);this.startEvent&&k&&k(v,O),R&&R(v,O)},!Bc(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=o,this.contextWindow=i||window;const l=gi(e),h=Ki(l,this.transformPagePoint),{point:d}=h,{timestamp:p}=Ee;this.history=[H(D({},d),{timestamp:p})];const{onSessionStart:m}=n;m&&m(e,ia(h,this.history)),this.removeListeners=di(Hs(this.contextWindow,"pointermove",this.handlePointerMove),Hs(this.contextWindow,"pointerup",this.handlePointerUp),Hs(this.contextWindow,"pointercancel",this.handlePointerUp)),c&&this.startScrollTracking(c)}startScrollTracking(e){let n=e.parentElement;for(;n;){const s=getComputedStyle(n);(sd.has(s.overflowX)||sd.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const s=e===window,i=s?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},r={x:i.x-n.x,y:i.y-n.y};r.x===0&&r.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(e,i),J.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Je(this.updatePoint)}}function Ki(t,e){return e?{point:e(t.point)}:t}function id(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ia({point:t},e){return{point:t,delta:id(t,$m(e)),offset:id(t,y1(e)),velocity:v1(e,.1)}}function y1(t){return t[0]}function $m(t){return t[t.length-1]}function v1(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,s=null;const i=$m(t);for(;n>=0&&(s=t[n],!(i.timestamp-s.timestamp>qe(e)));)n--;if(!s)return{x:0,y:0};s===t[0]&&t.length>2&&i.timestamp-s.timestamp>qe(e)*2&&(s=t[1]);const r=Xe(i.timestamp-s.timestamp);if(r===0)return{x:0,y:0};const o={x:(i.x-s.x)/r,y:(i.y-s.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function _1(t,{min:e,max:n},s){return e!==void 0&&t<e?t=s?re(e,t,s.min):Math.max(t,e):n!==void 0&&t>n&&(t=s?re(n,t,s.max):Math.min(t,n)),t}function rd(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function w1(t,{top:e,left:n,bottom:s,right:i}){return{x:rd(t.x,n,i),y:rd(t.y,e,s)}}function od(t,e){let n=e.min-t.min,s=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,s]=[s,n]),{min:n,max:s}}function T1(t,e){return{x:od(t.x,e.x),y:od(t.y,e.y)}}function E1(t,e){let n=.5;const s=Ue(t),i=Ue(e);return i>s?n=ts(e.min,e.max-s,t.min):s>i&&(n=ts(t.min,t.max-i,e.min)),lt(0,1,n)}function I1(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ga=.35;function A1(t=Ga){return t===!1?t=0:t===!0&&(t=Ga),{x:ad(t,"left","right"),y:ad(t,"top","bottom")}}function ad(t,e,n){return{min:cd(t,e),max:cd(t,n)}}function cd(t,e){return typeof t=="number"?t:t[e]||0}const b1=new WeakMap;class S1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=_e(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=p=>{n&&this.snapToCursor(gi(p).point),this.stopAnimation()},o=(p,m)=>{const{drag:v,dragPropagation:I,onDragStart:k}=this.getProps();if(v&&!I&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Xw(v),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=m,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),pt(V=>{let O=this.getAxisMotionValue(V).get()||0;if(vt.test(O)){const{projection:L}=this.visualElement;if(L&&L.layout){const F=L.layout.layoutBox[V];F&&(O=Ue(F)*(parseFloat(O)/100))}}this.originPoint[V]=O}),k&&J.update(()=>k(p,m),!1,!0),ja(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},c=(p,m)=>{this.latestPointerEvent=p,this.latestPanInfo=m;const{dragPropagation:v,dragDirectionLock:I,onDirectionLock:k,onDrag:R}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:V}=m;if(I&&this.currentDirection===null){this.currentDirection=C1(V),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",m.point,V),this.updateAxis("y",m.point,V),this.visualElement.render(),R&&J.update(()=>R(p,m),!1,!0)},l=(p,m)=>{this.latestPointerEvent=p,this.latestPanInfo=m,this.stop(p,m),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:p}=this.getProps();(p||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new Bm(e,{onSessionStart:r,onStart:o,onMove:c,onSessionEnd:l,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:s,contextWindow:Um(this.visualElement),element:this.visualElement.current})}stop(e,n){const s=e||this.latestPointerEvent,i=n||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!i||!s)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:c}=this.getProps();c&&J.postRender(()=>c(s,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,s){const{drag:i}=this.getProps();if(!s||!qi(e,i,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+s[e];this.constraints&&this.constraints[e]&&(o=_1(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var r;const{dragConstraints:e,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)==null?void 0:r.layout,i=this.constraints;e&&Fn(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&s?this.constraints=w1(s.layoutBox,e):this.constraints=!1,this.elastic=A1(n),i!==this.constraints&&!Fn(e)&&s&&this.constraints&&!this.hasMutatedConstraints&&pt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=I1(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Fn(e))return!1;const s=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=PT(s,i.root,this.visualElement.getTransformPagePoint());let o=T1(i.layout.layoutBox,r);if(n){const c=n(AT(o));this.hasMutatedConstraints=!!c,c&&(o=lm(c))}return o}startAnimation(e){const{drag:n,dragMomentum:s,dragElastic:i,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:c}=this.getProps(),l=this.constraints||{},h=pt(d=>{if(!qi(d,n,this.currentDirection))return;let p=l&&l[d]||{};(o===!0||o===d)&&(p={min:0,max:0});const m=i?200:1e6,v=i?40:1e7,I=D(D({type:"inertia",velocity:s?e[d]:0,bounceStiffness:m,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10},r),p);return this.startAxisValueAnimation(d,I)});return Promise.all(h).then(c)}startAxisValueAnimation(e,n){const s=this.getAxisMotionValue(e);return ja(this.visualElement,e),s.start(Oc(e,s,0,n,this.visualElement,!1))}stopAnimation(){pt(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,s=this.visualElement.getProps(),i=s[n];return i||this.visualElement.getValue(e,(s.initial?s.initial[e]:void 0)||0)}snapToCursor(e){pt(n=>{const{drag:s}=this.getProps();if(!qi(n,s,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:c}=i.layout.layoutBox[n],l=r.get()||0;r.set(e[n]-re(o,c,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!Fn(n)||!s||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};pt(o=>{const c=this.getAxisMotionValue(o);if(c&&this.constraints!==!1){const l=c.get();i[o]=E1({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),pt(o=>{if(!qi(o,e,null))return;const c=this.getAxisMotionValue(o),{min:l,max:h}=this.constraints[o];c.set(re(l,h,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;b1.set(this.visualElement,this);const e=this.visualElement.current,n=Hs(e,"pointerdown",h=>{const{drag:d,dragListener:p=!0}=this.getProps(),m=h.target,v=m!==e&&nT(m);d&&p&&!v&&this.start(h)});let s;const i=()=>{const{dragConstraints:h}=this.getProps();Fn(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),s||(s=P1(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:r}=this.visualElement,o=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),J.read(i);const c=si(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d})=>{this.isDragging&&d&&(pt(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=h[p].translate,m.set(m.get()+h[p].translate))}),this.visualElement.render())});return()=>{c(),n(),o(),l&&l(),s&&s()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:o=Ga,dragMomentum:c=!0}=e;return H(D({},e),{drag:n,dragDirectionLock:s,dragPropagation:i,dragConstraints:r,dragElastic:o,dragMomentum:c})}}function ld(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function P1(t,e,n){const s=$a(t,ld(n)),i=$a(e,ld(n));return()=>{s(),i()}}function qi(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function C1(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class R1 extends rn{constructor(e){super(e),this.removeGroupControls=ze,this.removeListeners=ze,this.controls=new S1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ze}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ra=t=>(e,n)=>{t&&J.update(()=>t(e,n),!1,!0)};class x1 extends rn{constructor(){super(...arguments),this.removePointerDownListener=ze}onPointerDown(e){this.session=new Bm(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Um(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:s,onPanEnd:i}=this.node.getProps();return{onSessionStart:ra(e),onStart:ra(n),onMove:ra(s),onEnd:(r,o)=>{delete this.session,i&&J.postRender(()=>i(r,o))}}}mount(){this.removePointerDownListener=Hs(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let oa=!1;class k1 extends N.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s,layoutId:i}=this.props,{projection:r}=e;r&&(n.group&&n.group.add(r),s&&s.register&&i&&s.register(r),oa&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions(H(D({},r.options),{layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()}))),ur.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:s,drag:i,isPresent:r}=this.props,{projection:o}=s;return o&&(o.isPresent=r,e.layoutDependency!==n&&o.setOptions(H(D({},o.options),{layoutDependency:n})),oa=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==r?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||J.postRender(()=>{const c=o.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:s}=e;s&&(s.options.layoutAnchor=n,s.root.didUpdate(),Uc.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:i}=e;oa=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),s&&s.deregister&&s.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function zm(t){const[e,n]=km(),s=N.useContext(_c);return y.jsx(k1,H(D({},t),{layoutGroup:s,switchLayoutGroup:N.useContext(jm),isPresent:e,safeToRemove:n}))}const V1={pan:{Feature:x1},drag:{Feature:R1,ProjectionNode:xm,MeasureLayout:zm}};function ud(t,e,n){const{props:s}=t;t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,r=s[i];r&&J.postRender(()=>r(e,gi(e)))}class D1 extends rn{mount(){const{current:e}=this.node;e&&(this.unmount=Jw(e,(n,s)=>(ud(this.node,s,"Start"),i=>ud(this.node,i,"End"))))}unmount(){}}class N1 extends rn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(n){e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=di(si(this.node.current,"focus",()=>this.onFocus()),si(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function hd(t,e,n){const{props:s}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&s.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),r=s[i];r&&J.postRender(()=>r(e,gi(e)))}class M1 extends rn{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=iT(e,(i,r)=>(hd(this.node,r,"Start"),(o,{success:c})=>hd(this.node,o,c?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Ya=new WeakMap,aa=new WeakMap,O1=t=>{const e=Ya.get(t.target);e&&e(t)},L1=t=>{t.forEach(O1)};function j1(n){var s=n,{root:t}=s,e=pe(s,["root"]);const i=t||document;aa.has(i)||aa.set(i,{});const r=aa.get(i),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(L1,D({root:t},e))),r[o]}function F1(t,e,n){const s=j1(e);return Ya.set(t,n),s.observe(t),()=>{Ya.delete(t),s.unobserve(t)}}const U1={some:0,all:1};class B1 extends rn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:s,amount:i="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:s,threshold:typeof i=="number"?i:U1[i]},c=h=>{const{isIntersecting:d}=h;if(this.isInView===d||(this.isInView=d,r&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),v=d?p:m;v&&v(h)};this.stopObserver=F1(this.node.current,o,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver=="undefined")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some($1(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function $1({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const z1={inView:{Feature:B1},tap:{Feature:M1},focus:{Feature:N1},hover:{Feature:D1}},H1={layout:{ProjectionNode:xm,MeasureLayout:zm}},W1=D(D(D(D({},p1),z1),V1),H1),Ws=l1(W1,u1);function K1(t,e,n){N.useInsertionEffect(()=>t.on(e,n),[t,e,n])}function xr(t){return typeof window=="undefined"?!1:t?Np():Nc()}const q1=50,dd=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),G1=()=>({time:0,x:dd(),y:dd()}),Y1={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function fd(t,e,n,s){const i=n[e],{length:r,position:o}=Y1[e],c=i.current,l=n.time;i.current=Math.abs(t[`scroll${o}`]),i.scrollLength=t[`scroll${r}`]-t[`client${r}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=ts(0,i.scrollLength,i.current);const h=s-l;i.velocity=h>q1?0:Ec(i.current-c,h)}function X1(t,e,n){fd(t,"x",e,n),fd(t,"y",e,n),e.time=n}function Q1(t,e){const n={x:0,y:0};let s=t;for(;s&&s!==e;)if($s(s))n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const i=s.getBoundingClientRect();s=s.parentElement;const r=s.getBoundingClientRect();n.x+=i.left-r.left,n.y+=i.top-r.top}else if(s instanceof SVGGraphicsElement){const{x:i,y:r}=s.getBBox();n.x+=i,n.y+=r;let o=null,c=s.parentNode;for(;!o;)c.tagName==="svg"&&(o=c),c=s.parentNode;s=o}else break;return n}const Xa={start:0,center:.5,end:1};function pd(t,e,n=0){let s=0;if(t in Xa&&(t=Xa[t]),typeof t=="string"){const i=parseFloat(t);t.endsWith("px")?s=i:t.endsWith("%")?t=i/100:t.endsWith("vw")?s=i/100*document.documentElement.clientWidth:t.endsWith("vh")?s=i/100*document.documentElement.clientHeight:t=i}return typeof t=="number"&&(s=e*t),n+s}const J1=[0,0];function Z1(t,e,n,s){let i=Array.isArray(t)?t:J1,r=0,o=0;return typeof t=="number"?i=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?i=t.split(" "):i=[t,Xa[t]?t:"0"]),r=pd(i[0],n,s),o=pd(i[1],e),r-o}const Ls={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},eI={x:0,y:0};function tI(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function nI(t,e,n){const{offset:s=Ls.All}=n,{target:i=t,axis:r="y"}=n,o=r==="y"?"height":"width",c=i!==t?Q1(i,t):eI,l=i===t?{width:t.scrollWidth,height:t.scrollHeight}:tI(i),h={width:t.clientWidth,height:t.clientHeight};e[r].offset.length=0;let d=!e[r].interpolate;const p=s.length;for(let m=0;m<p;m++){const v=Z1(s[m],h[o],l[o],c[r]);!d&&v!==e[r].interpolatorOffsets[m]&&(d=!0),e[r].offset[m]=v}d&&(e[r].interpolate=xc(e[r].offset,Rp(s),{clamp:!1}),e[r].interpolatorOffsets=[...e[r].offset]),e[r].progress=lt(0,1,e[r].interpolate(e[r].current))}function sI(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let s=e;for(;s&&s!==t;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function iI(t,e,n,s={}){return{measure:i=>{sI(t,s.target,n),X1(t,n,i),(s.offset||s.target)&&nI(t,n,s)},notify:()=>e(n)}}const jn=new WeakMap,md=new WeakMap,ca=new WeakMap,gd=new WeakMap,Gi=new WeakMap,yd=t=>t===document.scrollingElement?window:t;function Hm(t,i={}){var r=i,{container:e=document.scrollingElement,trackContentSize:n=!1}=r,s=pe(r,["container","trackContentSize"]);if(!e)return ze;let o=ca.get(e);o||(o=new Set,ca.set(e,o));const c=G1(),l=iI(e,t,c,s);if(o.add(l),!jn.has(e)){const d=()=>{for(const I of o)I.measure(Ee.timestamp);J.preUpdate(p)},p=()=>{for(const I of o)I.notify()},m=()=>J.read(d);jn.set(e,m);const v=yd(e);window.addEventListener("resize",m),e!==document.documentElement&&md.set(e,$a(e,m)),v.addEventListener("scroll",m),m()}if(n&&!Gi.has(e)){const d=jn.get(e),p={width:e.scrollWidth,height:e.scrollHeight};gd.set(e,p);const m=()=>{const I=e.scrollWidth,k=e.scrollHeight;(p.width!==I||p.height!==k)&&(d(),p.width=I,p.height=k)},v=J.read(m,!0);Gi.set(e,v)}const h=jn.get(e);return J.read(h,!1,!0),()=>{var v;Je(h);const d=ca.get(e);if(!d||(d.delete(l),d.size))return;const p=jn.get(e);jn.delete(e),p&&(yd(e).removeEventListener("scroll",p),(v=md.get(e))==null||v(),window.removeEventListener("resize",p));const m=Gi.get(e);m&&(Je(m),Gi.delete(e)),gd.delete(e)}}const rI=[[Ls.Enter,"entry"],[Ls.Exit,"exit"],[Ls.Any,"cover"],[Ls.All,"contain"]],vd={start:0,end:1};function oI(t){const e=t.trim().split(/\s+/);if(e.length!==2)return;const n=vd[e[0]],s=vd[e[1]];if(!(n===void 0||s===void 0))return[n,s]}function aI(t){if(t.length!==2)return;const e=[];for(const n of t)if(Array.isArray(n))e.push(n);else if(typeof n=="string"){const s=oI(n);if(!s)return;e.push(s)}else return;return e}function cI(t,e){const n=aI(t);if(!n)return!1;for(let s=0;s<2;s++){const i=n[s],r=e[s];if(i[0]!==r[0]||i[1]!==r[1])return!1}return!0}function Yc(t){if(!t)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,n]of rI)if(cI(t,e))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}const _d=new Map;function wd(t){const e={value:0},n=Hm(s=>{e.value=s[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function Wm(s){var i=s,{source:t,container:e}=i,n=pe(i,["source","container"]);var d,p;const{axis:r}=n;t&&(e=t);let o=_d.get(e);o||(o=new Map,_d.set(e,o));const c=(d=n.target)!=null?d:"self";let l=o.get(c);l||(l={},o.set(c,l));const h=r+((p=n.offset)!=null?p:[]).join(",");return l[h]||(n.target&&xr(n.target)?Yc(n.offset)?l[h]=new ViewTimeline({subject:n.target,axis:r}):l[h]=wd(D({container:e},n)):xr()?l[h]=new ScrollTimeline({source:e,axis:r}):l[h]=wd(D({container:e},n))),l[h]}function lI(t,e){const n=Wm(e),s=e.target?Yc(e.offset):void 0,i=e.target?xr(e.target)&&!!s:xr();return t.attachTimeline(H(D({timeline:i?n:void 0},s&&i&&{rangeStart:s.rangeStart,rangeEnd:s.rangeEnd}),{observe:r=>(r.pause(),im(o=>{r.time=r.iterationDuration*o},n))}))}function uI(t){return t.length===2}function hI(t,e){return uI(t)?Hm(n=>{t(n[e.axis].progress,n)},e):im(t,Wm(e))}function Km(t,i={}){var r=i,{axis:e="y",container:n=document.scrollingElement}=r,s=pe(r,["axis","container"]);if(!n)return ze;const o=D({axis:e,container:n},s);return typeof t=="function"?hI(t,o):lI(t,o)}const dI=()=>({scrollX:it(0),scrollY:it(0),scrollXProgress:it(0),scrollYProgress:it(0)}),Yi=t=>t?!t.current:!1;function Td(t,e,n,s){return{factory:i=>Km(i,H(D({},e),{axis:t,container:(n==null?void 0:n.current)||void 0,target:(s==null?void 0:s.current)||void 0})),times:[0,1],keyframes:[0,1],ease:i=>i,duration:1}}function fI(t,e){return typeof window=="undefined"?!1:t?Np()&&!!Yc(e):Nc()}function pI(s={}){var i=s,{container:t,target:e}=i,n=pe(i,["container","target"]);const r=Qt(dI);fI(e,n.offset)&&(r.scrollXProgress.accelerate=Td("x",n,t,e),r.scrollYProgress.accelerate=Td("y",n,t,e));const o=N.useRef(null),c=N.useRef(!1),l=N.useCallback(()=>(o.current=Km((h,{x:d,y:p})=>{r.scrollX.set(d.current),r.scrollXProgress.set(d.progress),r.scrollY.set(p.current),r.scrollYProgress.set(p.progress)},H(D({},n),{container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),()=>{var h;(h=o.current)==null||h.call(o)}),[t,e,JSON.stringify(n.offset)]);return Zr(()=>{if(c.current=!1,Yi(t)||Yi(e)){c.current=!0;return}else return l()},[l]),N.useEffect(()=>{if(c.current)return Zs(!Yi(t)),Zs(!Yi(e)),l()},[l]),r}function Xc(t){const e=Qt(()=>it(t)),{isStatic:n}=N.useContext(mi);if(n){const[,s]=N.useState(t);N.useEffect(()=>e.on("change",s),[])}return e}function qm(t,e){const n=Xc(e()),s=()=>n.set(e());return s(),Zr(()=>{const i=()=>J.preRender(s,!1,!0),r=t.map(o=>o.on("change",i));return()=>{r.forEach(o=>o()),Je(s)}}),n}function mI(t){Bs.current=[],t();const e=qm(Bs.current,t);return Bs.current=void 0,e}function Wn(t,e,n,s){if(typeof t=="function")return mI(t);if(n!==void 0&&!Array.isArray(n)&&typeof e!="function")return gI(t,e,n,s);const o=typeof e=="function"?e:pT(e,n,s),c=Array.isArray(t)?Ed(t,o):Ed([t],([h])=>o(h)),l=Array.isArray(t)?void 0:t.accelerate;return l&&!l.isTransformed&&typeof e!="function"&&Array.isArray(n)&&(s==null?void 0:s.clamp)!==!1&&(c.accelerate=H(D({},l),{times:e,keyframes:n,isTransformed:!0})),c}function Ed(t,e){const n=Qt(()=>[]);return qm(t,()=>{n.length=0;const s=t.length;for(let i=0;i<s;i++)n[i]=t[i].get();return e(n)})}function gI(t,e,n,s){const i=Qt(()=>Object.keys(n)),r=Qt(()=>({}));for(const o of i)r[o]=Wn(t,e,n[o],s);return r}function yI(t,e={}){const{isStatic:n}=N.useContext(mi),s=()=>we(t)?t.get():t;if(n)return Wn(s);const i=Xc(s());return N.useInsertionEffect(()=>mT(i,t,e),[i,JSON.stringify(e)]),i}function vI(t,e={}){return yI(t,D({type:"spring"},e))}function _I(t){const e=Xc(t.getVelocity()),n=()=>{const s=t.getVelocity();e.set(s),s&&J.update(n)};return K1(t,"change",()=>{J.update(n,!1,!0)}),e}const wI=({onFinished:t})=>{const[e,n]=N.useState(!0);return N.useEffect(()=>{const s=setTimeout(()=>{n(!1),t&&setTimeout(t,500)},2200);return()=>clearTimeout(s)},[t]),y.jsx(jE,{children:e&&y.jsxs(Ws.div,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"easeInOut"},style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"#0a0c10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:99999},children:[y.jsx(Ws.div,{animate:{scale:[1,1.08,1],opacity:[.8,1,.8]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},style:{width:"120px",height:"120px",display:"flex",alignItems:"center",justifyContent:"center"},children:y.jsx("img",{src:"/favicon.svg",alt:"Kone Academy",style:{width:"100%",height:"auto",filter:"drop-shadow(0 0 20px rgba(88, 166, 255, 0.3))"}})}),y.jsx(Ws.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.8},style:{marginTop:"2rem",letterSpacing:"0.3em",fontSize:"0.7rem",color:"#58a6ff",textTransform:"uppercase",fontWeight:600},children:"Welcome to the Ecosystem"})]})})},TI=()=>{const{scrollY:t}=pI(),e=_I(t),n=vI(e,{damping:30,stiffness:150}),s=Wn(n,[-2e3,2e3],[-5,5]),i=Wn(n,[-2e3,2e3],[-25,25]),r=Wn(n,[-2e3,2e3],[.92,1.08]),o=Wn(t,[0,5e3],[0,-400]);return y.jsxs("div",{className:"interactive-grid-container",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none",overflow:"hidden",backgroundColor:"var(--bg-primary)"},children:[y.jsx(Ws.div,{style:{y:o,skewY:s,scaleY:r,position:"absolute",top:"-20%",left:0,width:"100%",height:"140%",transformOrigin:"center center"},children:y.jsxs("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",children:[y.jsxs("defs",{children:[y.jsxs("filter",{id:"glow",children:[y.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),y.jsxs("feMerge",{children:[y.jsx("feMergeNode",{in:"coloredBlur"}),y.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),y.jsx("pattern",{id:"grid-pattern",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:y.jsxs(Ws.g,{style:{y:i},children:[y.jsx("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:"rgba(88, 166, 255, 0.05)",strokeWidth:"0.5"}),y.jsx("circle",{cx:"0",cy:"0",r:"1.3",fill:"var(--accent-primary)",opacity:"0.4",filter:"url(#glow)",children:y.jsx("animate",{attributeName:"opacity",values:"0.3;0.6;0.3",dur:"5s",repeatCount:"indefinite"})})]})})]}),y.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid-pattern)"})]})}),y.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(circle at 50% 50%, transparent 20%, rgba(10, 12, 16, 0.7) 100%)",pointerEvents:"none"}})]})};function Id(){const[t,e]=at.useState(!0);return at.useEffect(()=>{document.documentElement.setAttribute("data-theme","dark");const n=localStorage.getItem("kca-neon-theme");n&&Aa(n)},[]),y.jsxs(y.Fragment,{children:[y.jsx(wI,{onFinished:()=>e(!1)}),!t&&y.jsxs("div",{className:"App animate-fade-in",children:[y.jsx(TI,{}),y.jsx(R0,{}),y.jsxs("main",{id:"main-content",children:[y.jsx(k0,{}),y.jsx(V0,{}),y.jsx(D0,{}),y.jsx(L0,{}),y.jsx($0,{}),y.jsx(H0,{}),y.jsx(j0,{})]}),y.jsx(K0,{}),y.jsx(q0,{})]})]})}const EI=()=>{};var Ad={};/**
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
 */const Gm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},II=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],c=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,c=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,d=r>>2,p=(r&3)<<4|c>>4;let m=(c&15)<<2|h>>6,v=h&63;l||(v=64,o||(m=64)),s.push(n[d],n[p],n[m],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):II(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||c==null||h==null||p==null)throw new AI;const m=r<<2|c>>4;if(s.push(m),h!==64){const v=c<<4&240|h>>2;if(s.push(v),p!==64){const I=h<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bI=function(t){const e=Gm(t);return Ym.encodeByteArray(e,!0)},kr=function(t){return bI(t).replace(/\./g,"")},Xm=function(t){try{return Ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SI(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PI=()=>SI().__FIREBASE_DEFAULTS__,CI=()=>{if(typeof process=="undefined"||typeof Ad=="undefined")return;const t=Ad.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RI=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&Xm(t[1]);return e&&JSON.parse(e)},ro=()=>{try{return EI()||PI()||CI()||RI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qm=t=>{var e,n;return(n=(e=ro())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},xI=t=>{const e=Qm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Jm=()=>{var t;return(t=ro())==null?void 0:t.config},Zm=t=>{var e;return(e=ro())==null?void 0:e[`_${t}`]};/**
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
 */class kI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function VI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=D({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kr(JSON.stringify(n)),kr(JSON.stringify(o)),""].join(".")}/**
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
 */function Oe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DI(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function NI(){var e;const t=(e=ro())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(n){return!1}}function MI(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function eg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jI(){return!NI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tg(){try{return typeof indexedDB=="object"}catch(t){return!1}}function ng(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}function FI(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const UI="FirebaseError";class ht extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=UI,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kn.prototype.create)}}class kn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?BI(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new ht(i,c,s)}}function BI(t,e){return t.replace($I,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const $I=/\{\$([^}]+)}/g;function zI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(bd(r)&&bd(o)){if(!Zt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function bd(t){return t!==null&&typeof t=="object"}/**
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
 */function yi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function HI(t,e){const n=new WI(t,e);return n.subscribe.bind(n)}class WI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");KI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=la),i.error===void 0&&(i.error=la),i.complete===void 0&&(i.complete=la);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function la(){}/**
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
 */const qI=1e3,GI=2,YI=4*60*60*1e3,XI=.5;function Sd(t,e=qI,n=GI){const s=e*Math.pow(n,t),i=Math.round(XI*s*(Math.random()-.5)*2);return Math.min(YI,s+i)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function vi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function sg(t){return S(this,null,function*(){return(yield fetch(t,{credentials:"include"})).ok})}class ut{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pn="[DEFAULT]";/**
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
 */class QI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new kI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch(i){}}return this.instancesDeferred.get(n).promise}getImmediate(e){var i;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZI(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch(n){}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch(r){}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return S(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,n){var o;const s=this.normalizeInstanceIdentifier(n),i=(o=this.onInitCallbacks.get(s))!=null?o:new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:JI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch(i){}return s||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JI(t){return t===pn?void 0:t}function ZI(t){return t.instantiationMode==="EAGER"}/**
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
 */class eA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const tA={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},nA=Q.INFO,sA={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},iA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=sA[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oo{constructor(e){this.name=e,this._logLevel=nA,this._logHandler=iA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const rA=(t,e)=>e.some(n=>t instanceof n);let Pd,Cd;function oA(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aA(){return Cd||(Cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ig=new WeakMap,Qa=new WeakMap,rg=new WeakMap,ua=new WeakMap,Qc=new WeakMap;function cA(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Gt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ig.set(n,t)}).catch(()=>{}),Qc.set(e,t),e}function lA(t){if(Qa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Qa.set(t,e)}let Ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uA(t){Ja=t(Ja)}function hA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ha(this),e,...n);return rg.set(s,e.sort?e.sort():[e]),Gt(s)}:aA().includes(t)?function(...e){return t.apply(ha(this),e),Gt(ig.get(this))}:function(...e){return Gt(t.apply(ha(this),e))}}function dA(t){return typeof t=="function"?hA(t):(t instanceof IDBTransaction&&lA(t),rA(t,oA())?new Proxy(t,Ja):t)}function Gt(t){if(t instanceof IDBRequest)return cA(t);if(ua.has(t))return ua.get(t);const e=dA(t);return e!==t&&(ua.set(t,e),Qc.set(e,t)),e}const ha=t=>Qc.get(t);function og(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),c=Gt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Gt(o.result),l.oldVersion,l.newVersion,Gt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const fA=["get","getKey","getAll","getAllKeys","count"],pA=["put","add","delete","clear"],da=new Map;function Rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=pA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||fA.includes(n)))return;const r=function(o,...c){return S(this,null,function*(){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(c.shift())),(yield Promise.all([h[n](...c),i&&l.done]))[0]})};return da.set(e,r),r}uA(t=>H(D({},t),{get:(e,n,s)=>Rd(e,n)||t.get(e,n,s),has:(e,n)=>!!Rd(e,n)||t.has(e,n)}));/**
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
 */class mA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function gA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Za="@firebase/app",xd="0.14.11";/**
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
 */const kt=new oo("@firebase/app"),yA="@firebase/app-compat",vA="@firebase/analytics-compat",_A="@firebase/analytics",wA="@firebase/app-check-compat",TA="@firebase/app-check",EA="@firebase/auth",IA="@firebase/auth-compat",AA="@firebase/database",bA="@firebase/data-connect",SA="@firebase/database-compat",PA="@firebase/functions",CA="@firebase/functions-compat",RA="@firebase/installations",xA="@firebase/installations-compat",kA="@firebase/messaging",VA="@firebase/messaging-compat",DA="@firebase/performance",NA="@firebase/performance-compat",MA="@firebase/remote-config",OA="@firebase/remote-config-compat",LA="@firebase/storage",jA="@firebase/storage-compat",FA="@firebase/firestore",UA="@firebase/ai",BA="@firebase/firestore-compat",$A="firebase",zA="12.12.0";/**
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
 */const ec="[DEFAULT]",HA={[Za]:"fire-core",[yA]:"fire-core-compat",[_A]:"fire-analytics",[vA]:"fire-analytics-compat",[TA]:"fire-app-check",[wA]:"fire-app-check-compat",[EA]:"fire-auth",[IA]:"fire-auth-compat",[AA]:"fire-rtdb",[bA]:"fire-data-connect",[SA]:"fire-rtdb-compat",[PA]:"fire-fn",[CA]:"fire-fn-compat",[RA]:"fire-iid",[xA]:"fire-iid-compat",[kA]:"fire-fcm",[VA]:"fire-fcm-compat",[DA]:"fire-perf",[NA]:"fire-perf-compat",[MA]:"fire-rc",[OA]:"fire-rc-compat",[LA]:"fire-gcs",[jA]:"fire-gcs-compat",[FA]:"fire-fst",[BA]:"fire-fst-compat",[UA]:"fire-vertex","fire-js":"fire-js",[$A]:"fire-js-all"};/**
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
 */const Vr=new Map,WA=new Map,tc=new Map;function kd(t,e){try{t.container.addComponent(e)}catch(n){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Et(t){const e=t.name;if(tc.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;tc.set(e,t);for(const n of Vr.values())kd(n,t);for(const n of WA.values())kd(n,t);return!0}function Vn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const KA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new kn("app","Firebase",KA);/**
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
 */class qA{constructor(e,n,s){this._isDeleted=!1,this._options=D({},e),this._config=D({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=zA;function ag(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=D({name:ec,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(n||(n=Jm()),!n)throw Yt.create("no-options");const r=Vr.get(i);if(r){if(Zt(n,r.options)&&Zt(s,r.config))return r;throw Yt.create("duplicate-app",{appName:i})}const o=new eA(i);for(const l of tc.values())o.addComponent(l);const c=new qA(n,s,o);return Vr.set(i,c),c}function Jc(t=ec){const e=Vr.get(t);if(!e&&t===ec&&Jm())return ag();if(!e)throw Yt.create("no-app",{appName:t});return e}function Qe(t,e,n){var o;let s=(o=HA[t])!=null?o:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&c.push("and"),r&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}Et(new ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const GA="firebase-heartbeat-database",YA=1,ii="firebase-heartbeat-store";let fa=null;function cg(){return fa||(fa=og(GA,YA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),fa}function XA(t){return S(this,null,function*(){try{const n=(yield cg()).transaction(ii),s=yield n.objectStore(ii).get(lg(t));return yield n.done,s}catch(e){if(e instanceof ht)kt.warn(e.message);else{const n=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kt.warn(n.message)}}})}function Vd(t,e){return S(this,null,function*(){try{const s=(yield cg()).transaction(ii,"readwrite");yield s.objectStore(ii).put(e,lg(t)),yield s.done}catch(n){if(n instanceof ht)kt.warn(n.message);else{const s=Yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kt.warn(s.message)}}})}function lg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QA=1024,JA=30;class ZA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}triggerHeartbeat(){return S(this,null,function*(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>JA){const o=nb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kt.warn(s)}})}getHeartbeatsHeader(){return S(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dd(),{heartbeatsToSend:s,unsentEntries:i}=eb(this._heartbeatsCache.heartbeats),r=kr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return kt.warn(n),""}})}}function Dd(){return new Date().toISOString().substring(0,10)}function eb(t,e=QA){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Nd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return S(this,null,function*(){return tg()?ng().then(()=>!0).catch(()=>!1):!1})}read(){return S(this,null,function*(){if(yield this._canUseIndexedDBPromise){const n=yield XA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return S(this,null,function*(){var s;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Vd(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return S(this,null,function*(){var s;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Vd(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function Nd(t){return kr(JSON.stringify({version:2,heartbeats:t})).length}function nb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function sb(t){Et(new ut("platform-logger",e=>new mA(e),"PRIVATE")),Et(new ut("heartbeat",e=>new ZA(e),"PRIVATE")),Qe(Za,xd,t),Qe(Za,xd,"esm2020"),Qe("fire-js","")}sb("");var Md=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function w(){}w.prototype=_.prototype,b.F=_.prototype,b.prototype=new w,b.prototype.constructor=b,b.D=function(T,A,P){for(var E=Array(arguments.length-2),se=2;se<arguments.length;se++)E[se-2]=arguments[se];return _.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,_,w){w||(w=0);const T=Array(16);if(typeof _=="string")for(var A=0;A<16;++A)T[A]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(A=0;A<16;++A)T[A]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=b.g[0],w=b.g[1],A=b.g[2];let P=b.g[3],E;E=_+(P^w&(A^P))+T[0]+3614090360&4294967295,_=w+(E<<7&4294967295|E>>>25),E=P+(A^_&(w^A))+T[1]+3905402710&4294967295,P=_+(E<<12&4294967295|E>>>20),E=A+(w^P&(_^w))+T[2]+606105819&4294967295,A=P+(E<<17&4294967295|E>>>15),E=w+(_^A&(P^_))+T[3]+3250441966&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(P^w&(A^P))+T[4]+4118548399&4294967295,_=w+(E<<7&4294967295|E>>>25),E=P+(A^_&(w^A))+T[5]+1200080426&4294967295,P=_+(E<<12&4294967295|E>>>20),E=A+(w^P&(_^w))+T[6]+2821735955&4294967295,A=P+(E<<17&4294967295|E>>>15),E=w+(_^A&(P^_))+T[7]+4249261313&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(P^w&(A^P))+T[8]+1770035416&4294967295,_=w+(E<<7&4294967295|E>>>25),E=P+(A^_&(w^A))+T[9]+2336552879&4294967295,P=_+(E<<12&4294967295|E>>>20),E=A+(w^P&(_^w))+T[10]+4294925233&4294967295,A=P+(E<<17&4294967295|E>>>15),E=w+(_^A&(P^_))+T[11]+2304563134&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(P^w&(A^P))+T[12]+1804603682&4294967295,_=w+(E<<7&4294967295|E>>>25),E=P+(A^_&(w^A))+T[13]+4254626195&4294967295,P=_+(E<<12&4294967295|E>>>20),E=A+(w^P&(_^w))+T[14]+2792965006&4294967295,A=P+(E<<17&4294967295|E>>>15),E=w+(_^A&(P^_))+T[15]+1236535329&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(A^P&(w^A))+T[1]+4129170786&4294967295,_=w+(E<<5&4294967295|E>>>27),E=P+(w^A&(_^w))+T[6]+3225465664&4294967295,P=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(P^_))+T[11]+643717713&4294967295,A=P+(E<<14&4294967295|E>>>18),E=w+(P^_&(A^P))+T[0]+3921069994&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(A^P&(w^A))+T[5]+3593408605&4294967295,_=w+(E<<5&4294967295|E>>>27),E=P+(w^A&(_^w))+T[10]+38016083&4294967295,P=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(P^_))+T[15]+3634488961&4294967295,A=P+(E<<14&4294967295|E>>>18),E=w+(P^_&(A^P))+T[4]+3889429448&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(A^P&(w^A))+T[9]+568446438&4294967295,_=w+(E<<5&4294967295|E>>>27),E=P+(w^A&(_^w))+T[14]+3275163606&4294967295,P=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(P^_))+T[3]+4107603335&4294967295,A=P+(E<<14&4294967295|E>>>18),E=w+(P^_&(A^P))+T[8]+1163531501&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(A^P&(w^A))+T[13]+2850285829&4294967295,_=w+(E<<5&4294967295|E>>>27),E=P+(w^A&(_^w))+T[2]+4243563512&4294967295,P=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(P^_))+T[7]+1735328473&4294967295,A=P+(E<<14&4294967295|E>>>18),E=w+(P^_&(A^P))+T[12]+2368359562&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(w^A^P)+T[5]+4294588738&4294967295,_=w+(E<<4&4294967295|E>>>28),E=P+(_^w^A)+T[8]+2272392833&4294967295,P=_+(E<<11&4294967295|E>>>21),E=A+(P^_^w)+T[11]+1839030562&4294967295,A=P+(E<<16&4294967295|E>>>16),E=w+(A^P^_)+T[14]+4259657740&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(w^A^P)+T[1]+2763975236&4294967295,_=w+(E<<4&4294967295|E>>>28),E=P+(_^w^A)+T[4]+1272893353&4294967295,P=_+(E<<11&4294967295|E>>>21),E=A+(P^_^w)+T[7]+4139469664&4294967295,A=P+(E<<16&4294967295|E>>>16),E=w+(A^P^_)+T[10]+3200236656&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(w^A^P)+T[13]+681279174&4294967295,_=w+(E<<4&4294967295|E>>>28),E=P+(_^w^A)+T[0]+3936430074&4294967295,P=_+(E<<11&4294967295|E>>>21),E=A+(P^_^w)+T[3]+3572445317&4294967295,A=P+(E<<16&4294967295|E>>>16),E=w+(A^P^_)+T[6]+76029189&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(w^A^P)+T[9]+3654602809&4294967295,_=w+(E<<4&4294967295|E>>>28),E=P+(_^w^A)+T[12]+3873151461&4294967295,P=_+(E<<11&4294967295|E>>>21),E=A+(P^_^w)+T[15]+530742520&4294967295,A=P+(E<<16&4294967295|E>>>16),E=w+(A^P^_)+T[2]+3299628645&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(A^(w|~P))+T[0]+4096336452&4294967295,_=w+(E<<6&4294967295|E>>>26),E=P+(w^(_|~A))+T[7]+1126891415&4294967295,P=_+(E<<10&4294967295|E>>>22),E=A+(_^(P|~w))+T[14]+2878612391&4294967295,A=P+(E<<15&4294967295|E>>>17),E=w+(P^(A|~_))+T[5]+4237533241&4294967295,w=A+(E<<21&4294967295|E>>>11),E=_+(A^(w|~P))+T[12]+1700485571&4294967295,_=w+(E<<6&4294967295|E>>>26),E=P+(w^(_|~A))+T[3]+2399980690&4294967295,P=_+(E<<10&4294967295|E>>>22),E=A+(_^(P|~w))+T[10]+4293915773&4294967295,A=P+(E<<15&4294967295|E>>>17),E=w+(P^(A|~_))+T[1]+2240044497&4294967295,w=A+(E<<21&4294967295|E>>>11),E=_+(A^(w|~P))+T[8]+1873313359&4294967295,_=w+(E<<6&4294967295|E>>>26),E=P+(w^(_|~A))+T[15]+4264355552&4294967295,P=_+(E<<10&4294967295|E>>>22),E=A+(_^(P|~w))+T[6]+2734768916&4294967295,A=P+(E<<15&4294967295|E>>>17),E=w+(P^(A|~_))+T[13]+1309151649&4294967295,w=A+(E<<21&4294967295|E>>>11),E=_+(A^(w|~P))+T[4]+4149444226&4294967295,_=w+(E<<6&4294967295|E>>>26),E=P+(w^(_|~A))+T[11]+3174756917&4294967295,P=_+(E<<10&4294967295|E>>>22),E=A+(_^(P|~w))+T[2]+718787259&4294967295,A=P+(E<<15&4294967295|E>>>17),E=w+(P^(A|~_))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+P&4294967295}s.prototype.v=function(b,_){_===void 0&&(_=b.length);const w=_-this.blockSize,T=this.C;let A=this.h,P=0;for(;P<_;){if(A==0)for(;P<=w;)i(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<_;)if(T[A++]=b.charCodeAt(P++),A==this.blockSize){i(this,T),A=0;break}}else for(;P<_;)if(T[A++]=b[P++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=_},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;_=this.o*8;for(var w=b.length-8;w<b.length;++w)b[w]=_&255,_/=256;for(this.v(b),b=Array(16),_=0,w=0;w<4;++w)for(let T=0;T<32;T+=8)b[_++]=this.g[w]>>>T&255;return b};function r(b,_){var w=c;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=_(b)}function o(b,_){this.h=_;const w=[];let T=!0;for(let A=b.length-1;A>=0;A--){const P=b[A]|0;T&&P==_||(w[A]=P,T=!1)}this.g=w}var c={};function l(b){return-128<=b&&b<128?r(b,function(_){return new o([_|0],_<0?-1:0)}):new o([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return R(h(-b));const _=[];let w=1;for(let T=0;b>=w;T++)_[T]=b/w|0,w*=4294967296;return new o(_,0)}function d(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return R(d(b.substring(1),_));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(_,8));let T=p;for(let P=0;P<b.length;P+=8){var A=Math.min(8,b.length-P);const E=parseInt(b.substring(P,P+A),_);A<8?(A=h(Math.pow(_,A)),T=T.j(A).add(h(E))):(T=T.j(w),T=T.add(h(E)))}return T}var p=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();let b=0,_=1;for(let w=0;w<this.g.length;w++){const T=this.i(w);b+=(T>=0?T:4294967296+T)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(I(this))return"0";if(k(this))return"-"+R(this).toString(b);const _=h(Math.pow(b,6));var w=this;let T="";for(;;){const A=F(w,_).g;w=V(w,A.j(_));let P=((w.g.length>0?w.g[0]:w.h)>>>0).toString(b);if(w=A,I(w))return P+T;for(;P.length<6;)P="0"+P;T=P+T}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function I(b){if(b.h!=0)return!1;for(let _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=V(this,b),k(b)?-1:I(b)?0:1};function R(b){const _=b.g.length,w=[];for(let T=0;T<_;T++)w[T]=~b.g[T];return new o(w,~b.h).add(m)}t.abs=function(){return k(this)?R(this):this},t.add=function(b){const _=Math.max(this.g.length,b.g.length),w=[];let T=0;for(let A=0;A<=_;A++){let P=T+(this.i(A)&65535)+(b.i(A)&65535),E=(P>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);T=E>>>16,P&=65535,E&=65535,w[A]=E<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function V(b,_){return b.add(R(_))}t.j=function(b){if(I(this)||I(b))return p;if(k(this))return k(b)?R(this).j(R(b)):R(R(this).j(b));if(k(b))return R(this.j(R(b)));if(this.l(v)<0&&b.l(v)<0)return h(this.m()*b.m());const _=this.g.length+b.g.length,w=[];for(var T=0;T<2*_;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(let A=0;A<b.g.length;A++){const P=this.i(T)>>>16,E=this.i(T)&65535,se=b.i(A)>>>16,be=b.i(A)&65535;w[2*T+2*A]+=E*be,O(w,2*T+2*A),w[2*T+2*A+1]+=P*be,O(w,2*T+2*A+1),w[2*T+2*A+1]+=E*se,O(w,2*T+2*A+1),w[2*T+2*A+2]+=P*se,O(w,2*T+2*A+2)}for(b=0;b<_;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=_;b<2*_;b++)w[b]=0;return new o(w,0)};function O(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function L(b,_){this.g=b,this.h=_}function F(b,_){if(I(_))throw Error("division by zero");if(I(b))return new L(p,p);if(k(b))return _=F(R(b),_),new L(R(_.g),R(_.h));if(k(_))return _=F(b,R(_)),new L(R(_.g),_.h);if(b.g.length>30){if(k(b)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=_;T.l(b)<=0;)w=B(w),T=B(T);var A=W(w,1),P=W(T,1);for(T=W(T,2),w=W(w,2);!I(T);){var E=P.add(T);E.l(b)<=0&&(A=A.add(w),P=E),T=W(T,1),w=W(w,1)}return _=V(b,A.j(_)),new L(A,_)}for(A=p;b.l(_)>=0;){for(w=Math.max(1,Math.floor(b.m()/_.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),P=h(w),E=P.j(_);k(E)||E.l(b)>0;)w-=T,P=h(w),E=P.j(_);I(P)&&(P=m),A=A.add(P),b=V(b,E)}return new L(A,b)}t.B=function(b){return F(this,b).h},t.and=function(b){const _=Math.max(this.g.length,b.g.length),w=[];for(let T=0;T<_;T++)w[T]=this.i(T)&b.i(T);return new o(w,this.h&b.h)},t.or=function(b){const _=Math.max(this.g.length,b.g.length),w=[];for(let T=0;T<_;T++)w[T]=this.i(T)|b.i(T);return new o(w,this.h|b.h)},t.xor=function(b){const _=Math.max(this.g.length,b.g.length),w=[];for(let T=0;T<_;T++)w[T]=this.i(T)^b.i(T);return new o(w,this.h^b.h)};function B(b){const _=b.g.length+1,w=[];for(let T=0;T<_;T++)w[T]=b.i(T)<<1|b.i(T-1)>>>31;return new o(w,b.h)}function W(b,_){const w=_>>5;_%=32;const T=b.g.length-w,A=[];for(let P=0;P<T;P++)A[P]=_>0?b.i(P+w)>>>_|b.i(P+w+1)<<32-_:b.i(P+w);return new o(A,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Zc=o}).apply(typeof Md!="undefined"?Md:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Xi=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ug,js,hg,hr,nc,dg,fg,pg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xi=="object"&&Xi];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=n(this);function i(a,u){if(u)e:{var f=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,f){return a.call.apply(a.bind,arguments)}function h(a,u,f){return h=l,h.apply(null,arguments)}function d(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function f(){}f.prototype=u.prototype,a.Z=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,C,x){for(var U=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)U[Y-2]=arguments[Y];return u.prototype[C].apply(g,U)}}var m=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const u=a.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function I(a,u){for(let g=1;g<arguments.length;g++){const C=arguments[g];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=a.length||0;const x=C.length||0;a.length=f+x;for(let U=0;U<x;U++)a[f+U]=C[U]}else a.push(C)}}class k{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function R(a){o.setTimeout(()=>{throw a},0)}function V(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class O{constructor(){this.h=this.g=null}add(u,f){const g=L.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var L=new k(()=>new F,a=>a.reset());class F{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let B,W=!1,b=new O,_=()=>{const a=Promise.resolve(void 0);B=()=>{a.then(w)}};function w(){for(var a;a=V();){try{a.h.call(a.g)}catch(f){R(f)}var u=L;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}W=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,u),o.removeEventListener("test",f,u)}catch(f){}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function se(a,u){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(se,A),se.prototype.init=function(a,u){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&se.Z.h.call(this)},se.prototype.h=function(){se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var be="closure_listenable_"+(Math.random()*1e6|0),Ye=0;function Ul(a,u,f,g,C){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++Ye,this.da=this.fa=!1}function le(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function bt(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function St(a){const u={};for(const f in a)u[f]=a[f];return u}const Ci="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bl(a,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let x=0;x<Ci.length;x++)f=Ci[x],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Ri(a){this.src=a,this.g={},this.h=0}Ri.prototype.add=function(a,u,f,g,C){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const U=To(a,u,g,C);return U>-1?(u=a[U],f||(u.fa=!1)):(u=new Ul(u,this.src,x,!!g,C),u.fa=f,a.push(u)),u};function wo(a,u){const f=u.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,u,void 0),x;(x=C>=0)&&Array.prototype.splice.call(g,C,1),x&&(le(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function To(a,u,f,g){for(let C=0;C<a.length;++C){const x=a[C];if(!x.da&&x.listener==u&&x.capture==!!f&&x.ha==g)return C}return-1}var Eo="closure_lm_"+(Math.random()*1e6|0),Io={};function $l(a,u,f,g,C){if(Array.isArray(u)){for(let x=0;x<u.length;x++)$l(a,u[x],f,g,C);return null}return f=Wl(f),a&&a[be]?a.J(u,f,c(g)?!!g.capture:!1,C):mv(a,u,f,!1,g,C)}function mv(a,u,f,g,C,x){if(!u)throw Error("Invalid event type");const U=c(C)?!!C.capture:!!C;let Y=bo(a);if(Y||(a[Eo]=Y=new Ri(a)),f=Y.add(u,f,g,U,x),f.proxy)return f;if(g=gv(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)P||(C=U),C===void 0&&(C=!1),a.addEventListener(u.toString(),g,C);else if(a.attachEvent)a.attachEvent(Hl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function gv(){function a(f){return u.call(a.src,a.listener,f)}const u=yv;return a}function zl(a,u,f,g,C){if(Array.isArray(u))for(var x=0;x<u.length;x++)zl(a,u[x],f,g,C);else g=c(g)?!!g.capture:!!g,f=Wl(f),a&&a[be]?(a=a.i,x=String(u).toString(),x in a.g&&(u=a.g[x],f=To(u,f,g,C),f>-1&&(le(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete a.g[x],a.h--)))):a&&(a=bo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=To(u,f,g,C)),(f=a>-1?u[a]:null)&&Ao(f))}function Ao(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[be])wo(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(Hl(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=bo(u))?(wo(f,a),f.h==0&&(f.src=null,u[Eo]=null)):le(a)}}}function Hl(a){return a in Io?Io[a]:Io[a]="on"+a}function yv(a,u){if(a.da)a=!0;else{u=new se(u,this);const f=a.listener,g=a.ha||a.src;a.fa&&Ao(a),a=f.call(g,u)}return a}function bo(a){return a=a[Eo],a instanceof Ri?a:null}var So="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wl(a){return typeof a=="function"?a:(a[So]||(a[So]=function(u){return a.handleEvent(u)}),a[So])}function ke(){T.call(this),this.i=new Ri(this),this.M=this,this.G=null}p(ke,T),ke.prototype[be]=!0,ke.prototype.removeEventListener=function(a,u,f,g){zl(this,a,u,f,g)};function Le(a,u){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new A(u,a);else if(u instanceof A)u.target=u.target||a;else{var C=u;u=new A(g,a),Bl(u,C)}C=!0;let x,U;if(f)for(U=f.length-1;U>=0;U--)x=u.g=f[U],C=xi(x,g,!0,u)&&C;if(x=u.g=a,C=xi(x,g,!0,u)&&C,C=xi(x,g,!1,u)&&C,f)for(U=0;U<f.length;U++)x=u.g=f[U],C=xi(x,g,!1,u)&&C}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const f=a.g[u];for(let g=0;g<f.length;g++)le(f[g]);delete a.g[u],a.h--}}this.G=null},ke.prototype.J=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ke.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function xi(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let x=0;x<u.length;++x){const U=u[x];if(U&&!U.da&&U.capture==f){const Y=U.listener,ve=U.ha||U.src;U.fa&&wo(a.i,U),C=Y.call(ve,g)!==!1&&C}}return C&&!g.defaultPrevented}function vv(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Kl(a){a.g=vv(()=>{a.g=null,a.i&&(a.i=!1,Kl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class _v extends T{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Kl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(a){T.call(this),this.h=a,this.g={}}p(gs,T);var ql=[];function Gl(a){Se(a.g,function(u,f){this.g.hasOwnProperty(f)&&Ao(u)},a),a.g={}}gs.prototype.N=function(){gs.Z.N.call(this),Gl(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Po=o.JSON.stringify,wv=o.JSON.parse,Tv=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Yl(){}function Xl(){}var ys={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Co(){A.call(this,"d")}p(Co,A);function Ro(){A.call(this,"c")}p(Ro,A);var on={},Ql=null;function ki(){return Ql=Ql||new ke}on.Ia="serverreachability";function Jl(a){A.call(this,on.Ia,a)}p(Jl,A);function vs(a){const u=ki();Le(u,new Jl(u))}on.STAT_EVENT="statevent";function Zl(a,u){A.call(this,on.STAT_EVENT,a),this.stat=u}p(Zl,A);function je(a){const u=ki();Le(u,new Zl(u,a))}on.Ja="timingevent";function eu(a,u){A.call(this,on.Ja,a),this.size=u}p(eu,A);function _s(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function ws(){this.g=!0}ws.prototype.ua=function(){this.g=!1};function Ev(a,u,f,g,C,x){a.info(function(){if(a.g)if(x){var U="",Y=x.split("&");for(let te=0;te<Y.length;te++){var ve=Y[te].split("=");if(ve.length>1){const Te=ve[0];ve=ve[1];const ft=Te.split("_");U=ft.length>=2&&ft[1]=="type"?U+(Te+"="+ve+"&"):U+(Te+"=redacted&")}}}else U=null;else U=x;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+U})}function Iv(a,u,f,g,C,x,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+x+" "+U})}function Mn(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+bv(a,f)+(g?" "+g:"")})}function Av(a,u){a.info(function(){return"TIMEOUT: "+u})}ws.prototype.info=function(){};function bv(a,u){if(!a.g)return u;if(!u)return null;try{const x=JSON.parse(u);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var f=x[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let U=1;U<g.length;U++)g[U]=""}}}}return Po(x)}catch(x){return u}}var Vi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},nu;function xo(){}p(xo,Yl),xo.prototype.g=function(){return new XMLHttpRequest},nu=new xo;function Ts(a){return encodeURIComponent(String(a))}function Sv(a){var u=1;a=a.split(":");const f=[];for(;u>0&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function Nt(a,u,f,g){this.j=a,this.i=u,this.l=f,this.S=g||1,this.V=new gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new su}function su(){this.i=null,this.g="",this.h=!1}var iu={},ko={};function Vo(a,u,f){a.M=1,a.A=Ni(dt(u)),a.u=f,a.R=!0,ru(a,null)}function ru(a,u){a.F=Date.now(),Di(a),a.B=dt(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),vu(f.i,"t",g),a.C=0,f=a.j.L,a.h=new su,a.g=Ou(a.j,f?u:null,!a.u),a.P>0&&(a.O=new _v(h(a.Y,a,a.g),a.P)),u=a.V,f=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(ql[0]=C.toString()),C=ql);for(let x=0;x<C.length;x++){const U=$l(f,C[x],g||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=a.J?St(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),vs(),Ev(a.i,a.v,a.B,a.l,a.S,a.u)}Nt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Lt(a)==3?u.j():this.Y(a)},Nt.prototype.Y=function(a){try{if(a==this.g)e:{const Y=Lt(this.g),ve=this.g.ya(),te=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||bu(this.g)))){this.K||Y!=4||ve==7||(ve==8||te<=0?vs(3):vs(2)),Do(this);var u=this.g.ca();this.X=u;var f=Pv(this);if(this.o=u==200,Iv(this.i,this.v,this.B,this.l,this.S,Y,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var x=g;break t}}x=null}if(a=x)Mn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,No(this,a);else{this.o=!1,this.m=3,je(12),an(this),Es(this);break e}}if(this.R){a=!0;let Te;for(;!this.K&&this.C<f.length;)if(Te=Cv(this,f),Te==ko){Y==4&&(this.m=4,je(14),a=!1),Mn(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==iu){this.m=4,je(15),Mn(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Mn(this.i,this.l,Te,null),No(this,Te);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||f.length!=0||this.h.h||(this.m=1,je(16),a=!1),this.o=this.o&&a,!a)Mn(this.i,this.l,f,"[Invalid Chunked Response]"),an(this),Es(this);else if(f.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),$o(U),U.P=!0,je(11))}}else Mn(this.i,this.l,f,null),No(this,f);Y==4&&an(this),this.o&&!this.K&&(Y==4?Vu(this.j,this):(this.o=!1,Di(this)))}else $v(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,je(12)):(this.m=0,je(13)),an(this),Es(this)}}}catch(Y){}finally{}};function Pv(a){if(!ou(a))return a.g.la();const u=bu(a.g);if(u==="")return"";let f="";const g=u.length,C=Lt(a.g)==4;if(!a.h.i){if(typeof TextDecoder=="undefined")return an(a),Es(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<g;x++)a.h.h=!0,f+=a.h.i.decode(u[x],{stream:!(C&&x==g-1)});return u.length=0,a.h.g+=f,a.C=0,a.h.g}function ou(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Cv(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?ko:(f=Number(u.substring(f,g)),isNaN(f)?iu:(g+=1,g+f>u.length?ko:(u=u.slice(g,g+f),a.C=g+f,u)))}Nt.prototype.cancel=function(){this.K=!0,an(this)};function Di(a){a.T=Date.now()+a.H,au(a,a.H)}function au(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=_s(h(a.aa,a),u)}function Do(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Nt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Av(this.i,this.B),this.M!=2&&(vs(),je(17)),an(this),this.m=2,Es(this)):au(this,this.T-a)};function Es(a){a.j.I==0||a.K||Vu(a.j,a)}function an(a){Do(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Gl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function No(a,u){try{var f=a.j;if(f.I!=0&&(f.g==a||Mo(f.h,a))){if(!a.L&&Mo(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch(te){g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Fi(f),Li(f);else break e;Bo(f),je(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=_s(h(f.Va,f),6e3));uu(f.h)<=1&&f.ta&&(f.ta=void 0)}else ln(f,11)}else if((a.L||f.g==a)&&Fi(f),!E(u))for(C=f.Ba.g.parse(u),u=0;u<C.length;u++){let te=C[u];const Te=te[0];if(!(Te<=f.K))if(f.K=Te,te=te[1],f.I==2)if(te[0]=="c"){f.M=te[1],f.ba=te[2];const ft=te[3];ft!=null&&(f.ka=ft,f.j.info("VER="+f.ka));const un=te[4];un!=null&&(f.za=un,f.j.info("SVER="+f.za));const jt=te[5];jt!=null&&typeof jt=="number"&&jt>0&&(g=1.5*jt,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ft=a.g;if(Ft){const Bi=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var x=g.h;x.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Oo(x,x.h),x.h=null))}if(g.G){const zo=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;zo&&(g.wa=zo,ie(g.J,g.G,zo))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var U=a;if(g.na=Mu(g,g.L?g.ba:null,g.W),U.L){hu(g.h,U);var Y=U,ve=g.O;ve&&(Y.H=ve),Y.D&&(Do(Y),Di(Y)),g.g=U}else xu(g);f.i.length>0&&ji(f)}else te[0]!="stop"&&te[0]!="close"||ln(f,7);else f.I==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?ln(f,7):Uo(f):te[0]!="noop"&&f.l&&f.l.qa(te),f.A=0)}}vs(4)}catch(te){}}var Rv=class{constructor(a,u){this.g=a,this.map=u}};function cu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function uu(a){return a.h?1:a.g?a.g.size:0}function Mo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Oo(a,u){a.g?a.g.add(u):a.h=u}function hu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}cu.prototype.cancel=function(){if(this.i=du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function du(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.G);return u}return v(a.i)}var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xv(a,u){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let C,x=null;g>=0?(C=a[f].substring(0,g),x=a[f].substring(g+1)):C=a[f],u(C,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Mt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Mt?(this.l=a.l,Is(this,a.j),this.o=a.o,this.g=a.g,As(this,a.u),this.h=a.h,Lo(this,_u(a.i)),this.m=a.m):a&&(u=String(a).match(fu))?(this.l=!1,Is(this,u[1]||"",!0),this.o=bs(u[2]||""),this.g=bs(u[3]||"",!0),As(this,u[4]),this.h=bs(u[5]||"",!0),Lo(this,u[6]||"",!0),this.m=bs(u[7]||"")):(this.l=!1,this.i=new Ps(null,this.l))}Mt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ss(u,pu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ss(u,pu,!0),"@"),a.push(Ts(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ss(f,f.charAt(0)=="/"?Dv:Vv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ss(f,Mv)),a.join("")},Mt.prototype.resolve=function(a){const u=dt(this);let f=!!a.j;f?Is(u,a.j):f=!!a.o,f?u.o=a.o:f=!!a.g,f?u.g=a.g:f=a.u!=null;var g=a.h;if(f)As(u,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=u.h.lastIndexOf("/");C!=-1&&(g=u.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const x=[];for(let U=0;U<C.length;){const Y=C[U++];Y=="."?g&&U==C.length&&x.push(""):Y==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),g&&U==C.length&&x.push("")):(x.push(Y),g=!0)}g=x.join("/")}else g=C}return f?u.h=g:f=a.i.toString()!=="",f?Lo(u,_u(a.i)):f=!!a.m,f&&(u.m=a.m),u};function dt(a){return new Mt(a)}function Is(a,u,f){a.j=f?bs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function As(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Lo(a,u,f){u instanceof Ps?(a.i=u,Ov(a.i,a.l)):(f||(u=Ss(u,Nv)),a.i=new Ps(u,a.l))}function ie(a,u,f){a.i.set(u,f)}function Ni(a){return ie(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function bs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,kv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pu=/[#\/\?@]/g,Vv=/[#\?:]/g,Dv=/[#\?]/g,Nv=/[#\?@]/g,Mv=/#/g;function Ps(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function cn(a){a.g||(a.g=new Map,a.h=0,a.i&&xv(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ps.prototype,t.add=function(a,u){cn(this),this.i=null,a=On(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function mu(a,u){cn(a),u=On(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function gu(a,u){return cn(a),u=On(a,u),a.g.has(u)}t.forEach=function(a,u){cn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(u,C,g,this)},this)},this)};function yu(a,u){cn(a);let f=[];if(typeof u=="string")gu(a,u)&&(f=f.concat(a.g.get(On(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)f=f.concat(a[u]);return f}t.set=function(a,u){return cn(this),this.i=null,a=On(this,a),gu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=yu(this,a),a.length>0?String(a[0]):u):u};function vu(a,u,f){mu(a,u),f.length>0&&(a.i=null,a.g.set(On(a,u),v(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const C=Ts(f);f=yu(this,f);for(let x=0;x<f.length;x++){let U=C;f[x]!==""&&(U+="="+Ts(f[x])),a.push(U)}}return this.i=a.join("&")};function _u(a){const u=new Ps;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function On(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Ov(a,u){u&&!a.j&&(cn(a),a.i=null,a.g.forEach(function(f,g){const C=g.toLowerCase();g!=C&&(mu(this,g),vu(this,C,f))},a)),a.j=u}function Lv(a,u){const f=new ws;if(o.Image){const g=new Image;g.onload=d(Ot,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(Ot,f,"TestLoadImage: error",!1,u,g),g.onabort=d(Ot,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(Ot,f,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function jv(a,u){const f=new ws,g=new AbortController,C=setTimeout(()=>{g.abort(),Ot(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(C),x.ok?Ot(f,"TestPingServer: ok",!0,u):Ot(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Ot(f,"TestPingServer: error",!1,u)})}function Ot(a,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch(x){}}function Fv(){this.g=new Tv}function jo(a){this.i=a.Sb||null,this.h=a.ab||!1}p(jo,Yl),jo.prototype.g=function(){return new Mi(this.i,this.h)};function Mi(a,u){ke.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Mi,ke),t=Mi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Rs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function wu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Cs(this):Rs(this),this.readyState==3&&wu(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Cs(this))},t.Na=function(a){this.g&&(this.response=a,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Rs(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Rs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tu(a){let u="";return Se(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Fo(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Tu(f),typeof a=="string"?f!=null&&Ts(f):ie(a,u,f))}function ue(a){ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ue,ke);var Uv=/^https?$/i,Bv=["POST","PUT"];t=ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():nu.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(x){Eu(this,x);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())f.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Bv,u,void 0)>=0)||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,U]of f)this.g.setRequestHeader(x,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Eu(this,x)}};function Eu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Iu(a),Oi(a)}function Iu(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Le(this,"complete"),Le(this,"abort"),Oi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oi(this,!0)),ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Au(this):this.Xa())},t.Xa=function(){Au(this)};function Au(a){if(a.h&&typeof r!="undefined"){if(a.v&&Lt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Le(a,"readystatechange"),Lt(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=x===0){let U=String(a.D).match(fu)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),g=!Uv.test(U?U.toLowerCase():"")}f=g}if(f)Le(a,"complete"),Le(a,"success");else{a.o=6;try{var C=Lt(a)>2?a.g.statusText:""}catch(U){C=""}a.l=C+" ["+a.ca()+"]",Iu(a)}}finally{Oi(a)}}}}function Oi(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,u||Le(a,"ready");try{f.onreadystatechange=null}catch(g){}}}t.isActive=function(){return!!this.g};function Lt(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Lt(this)>2?this.g.status:-1}catch(a){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),wv(u)}};function bu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(u){return null}}function $v(a){const u={};a=(a.g&&Lt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var f=Sv(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=u[C]||[];u[C]=x,x.push(f)}bt(u,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function xs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Su(a){this.za=0,this.i=[],this.j=new ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=xs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=xs("baseRetryDelayMs",5e3,a),this.Za=xs("retryDelaySeedMs",1e4,a),this.Ta=xs("forwardChannelMaxRetries",2,a),this.va=xs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new cu(a&&a.concurrentRequestLimit),this.Ba=new Fv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Su.prototype,t.ka=8,t.I=1,t.connect=function(a,u,f,g){je(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Mu(this,null,this.W),ji(this)};function Uo(a){if(Pu(a),a.I==3){var u=a.V++,f=dt(a.J);if(ie(f,"SID",a.M),ie(f,"RID",u),ie(f,"TYPE","terminate"),ks(a,f),u=new Nt(a,a.j,u),u.M=2,u.A=Ni(dt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(u.A.toString(),"")}catch(g){}!f&&o.Image&&(new Image().src=u.A,f=!0),f||(u.g=Ou(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Di(u)}Nu(a)}function Li(a){a.g&&($o(a),a.g.cancel(),a.g=null)}function Pu(a){Li(a),a.v&&(o.clearTimeout(a.v),a.v=null),Fi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ji(a){if(!lu(a.h)&&!a.m){a.m=!0;var u=a.Ea;B||_(),W||(B(),W=!0),b.add(u,a),a.D=0}}function zv(a,u){return uu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=_s(h(a.Ea,a,u),Du(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Nt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=St(x),Bl(x,this.U)):x=this.U),this.u!==null||this.R||(C.J=x,x=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ru(this,C,u),f=dt(this.J),ie(f,"RID",a),ie(f,"CVER",22),this.G&&ie(f,"X-HTTP-Session-Id",this.G),ks(this,f),x&&(this.R?u="headers="+Ts(Tu(x))+"&"+u:this.u&&Fo(f,this.u,x)),Oo(this.h,C),this.Ra&&ie(f,"TYPE","init"),this.S?(ie(f,"$req",u),ie(f,"SID","null"),C.U=!0,Vo(C,f,null)):Vo(C,f,u),this.I=2}}else this.I==3&&(a?Cu(this,a):this.i.length==0||lu(this.h)||Cu(this))};function Cu(a,u){var f;u?f=u.l:f=a.V++;const g=dt(a.J);ie(g,"SID",a.M),ie(g,"RID",f),ie(g,"AID",a.K),ks(a,g),a.u&&a.o&&Fo(g,a.u,a.o),f=new Nt(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Ru(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Oo(a.h,f),Vo(f,g,u)}function ks(a,u){a.H&&Se(a.H,function(f,g){ie(u,g,f)}),a.l&&Se({},function(f,g){ie(u,g,f)})}function Ru(a,u,f){f=Math.min(a.i.length,f);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var C=a.i;let Y=-1;for(;;){const ve=["count="+f];Y==-1?f>0?(Y=C[0].g,ve.push("ofs="+Y)):Y=0:ve.push("ofs="+Y);let te=!0;for(let Te=0;Te<f;Te++){var x=C[Te].g;const ft=C[Te].map;if(x-=Y,x<0)Y=Math.max(0,C[Te].g-100),te=!1;else try{x="req"+x+"_"||"";try{var U=ft instanceof Map?ft:Object.entries(ft);for(const[un,jt]of U){let Ft=jt;c(jt)&&(Ft=Po(jt)),ve.push(x+un+"="+encodeURIComponent(Ft))}}catch(un){throw ve.push(x+"type="+encodeURIComponent("_badmap")),un}}catch(un){g&&g(ft)}}if(te){U=ve.join("&");break e}}U=void 0}return a=a.i.splice(0,f),u.G=a,U}function xu(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;B||_(),W||(B(),W=!0),b.add(u,a),a.A=0}}function Bo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=_s(h(a.Da,a),Du(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ku(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=_s(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,je(10),Li(this),ku(this))};function $o(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ku(a){a.g=new Nt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=dt(a.na);ie(u,"RID","rpc"),ie(u,"SID",a.M),ie(u,"AID",a.K),ie(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ie(u,"TO",a.ia),ie(u,"TYPE","xmlhttp"),ks(a,u),a.u&&a.o&&Fo(u,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ni(dt(u)),f.u=null,f.R=!0,ru(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Li(this),Bo(this),je(19))};function Fi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Vu(a,u){var f=null;if(a.g==u){Fi(a),$o(a),a.g=null;var g=2}else if(Mo(a.h,u))f=u.G,hu(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;g=ki(),Le(g,new eu(g,f)),ji(a)}else xu(a);else if(C=u.m,C==3||C==0&&u.X>0||!(g==1&&zv(a,u)||g==2&&Bo(a)))switch(f&&f.length>0&&(u=a.h,u.i=u.i.concat(f)),C){case 1:ln(a,5);break;case 4:ln(a,10);break;case 3:ln(a,6);break;default:ln(a,2)}}}function Du(a,u){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*u}function ln(a,u){if(a.j.info("Error code "+u),u==2){var f=h(a.bb,a),g=a.Ua;const C=!g;g=new Mt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Is(g,"https"),Ni(g),C?Lv(g.toString(),f):jv(g.toString(),f)}else je(2);a.I=0,a.l&&a.l.pa(u),Nu(a),Pu(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function Nu(a){if(a.I=0,a.ja=[],a.l){const u=du(a.h);(u.length!=0||a.i.length!=0)&&(I(a.ja,u),I(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function Mu(a,u,f){var g=f instanceof Mt?dt(f):new Mt(f);if(g.g!="")u&&(g.g=u+"."+g.g),As(g,g.u);else{var C=o.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const x=new Mt(null);g&&Is(x,g),u&&(x.g=u),C&&As(x,C),f&&(x.h=f),g=x}return f=a.G,u=a.wa,f&&u&&ie(g,f,u),ie(g,"VER",a.ka),ks(a,g),g}function Ou(a,u,f){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new ue(new jo({ab:f})):new ue(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lu(){}t=Lu.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ui(){}Ui.prototype.g=function(a,u){return new Ke(a,u)};function Ke(a,u){ke.call(this),this.g=new Su(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!E(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!E(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Ln(this)}p(Ke,ke),Ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){Uo(this.g)},Ke.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Po(a),a=f);u.i.push(new Rv(u.Ya++,a)),u.I==3&&ji(u)},Ke.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,Ke.Z.N.call(this)};function ju(a){Co.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(ju,Co);function Fu(){Ro.call(this),this.status=1}p(Fu,Ro);function Ln(a){this.g=a}p(Ln,Lu),Ln.prototype.ra=function(){Le(this.g,"a")},Ln.prototype.qa=function(a){Le(this.g,new ju(a))},Ln.prototype.pa=function(a){Le(this.g,new Fu)},Ln.prototype.oa=function(){Le(this.g,"b")},Ui.prototype.createWebChannel=Ui.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,pg=function(){return new Ui},fg=function(){return ki()},dg=on,nc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,hr=Vi,tu.COMPLETE="complete",hg=tu,Xl.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",ke.prototype.listen=ke.prototype.J,js=Xl,ue.prototype.listenOnce=ue.prototype.K,ue.prototype.getLastError=ue.prototype.Ha,ue.prototype.getLastErrorCode=ue.prototype.ya,ue.prototype.getStatus=ue.prototype.ca,ue.prototype.getResponseJson=ue.prototype.La,ue.prototype.getResponseText=ue.prototype.la,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Fa,ug=ue}).apply(typeof Xi!="undefined"?Xi:typeof self!="undefined"?self:typeof window!="undefined"?window:{});/**
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
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
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
 */let fs="12.12.0";function ib(t){fs=t}/**
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
 */const An=new oo("@firebase/firestore");function Un(){return An.logLevel}function z(t,...e){if(An.logLevel<=Q.DEBUG){const n=e.map(el);An.debug(`Firestore (${fs}): ${t}`,...n)}}function bn(t,...e){if(An.logLevel<=Q.ERROR){const n=e.map(el);An.error(`Firestore (${fs}): ${t}`,...n)}}function ri(t,...e){if(An.logLevel<=Q.WARN){const n=e.map(el);An.warn(`Firestore (${fs}): ${t}`,...n)}}function el(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch(e){return t}}/**
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
 */function X(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,mg(t,s,n)}function mg(t,e,n){let s=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch(i){s+=" CONTEXT: "+n}throw bn(s),new Error(s)}function de(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||mg(e,i,s)}function ne(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(De.UNAUTHENTICATED))}shutdown(){}}class ob{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ab{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(()=>S(this,null,function*(){yield l.promise,yield i(this.currentUser)}))},c=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(de(typeof s.accessToken=="string",31837,{l:s}),new gg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new De(e)}}class cb{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=De.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class lb{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new cb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Od{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ub{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const s=r=>{r.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Od(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Od(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hb(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class tl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=hb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%62))}return s}}function ee(t,e){return t<e?-1:t>e?1:0}function sc(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.charAt(s),r=e.charAt(s);if(i!==r)return pa(i)===pa(r)?ee(i,r):pa(i)?1:-1}return ee(t.length,e.length)}const db=55296,fb=57343;function pa(t){const e=t.charCodeAt(0);return e>=db&&e<=fb}function ss(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */const Ld="__name__";class mt{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&X(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return mt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=mt.compareSegments(e.get(i),n.get(i));if(r!==0)return r}return ee(e.length,n.length)}static compareSegments(e,n){const s=mt.isNumericId(e),i=mt.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?mt.extractNumericId(e).compare(mt.extractNumericId(n)):sc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zc.fromString(e.substring(4,e.length-2))}}class ce extends mt{construct(e,n,s){return new ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const pb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends mt{construct(e,n,s){return new Re(e,n,s)}static isValidIdentifier(e){return pb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ld}static keyField(){return new Re([Ld])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ce.fromString(e))}static fromName(e){return new G(ce.fromString(e).popFirst(5))}static empty(){return new G(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ce(e.slice()))}}/**
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
 */function yg(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mb(t,e,n,s){if(e===!0&&s===!0)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jd(t){if(!G.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fd(t){if(G.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function _g(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nl(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function _i(t,e){if(!vg(t))throw new K(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(i&&typeof o!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){n=`Expected '${s}' field to equal '${r.value}'`;break}}if(n)throw new K(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const Ud=-62135596800,Bd=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Bd);return new ae(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ud)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bd}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_i(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ud;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:ye("string",ae._jsonSchemaVersion),seconds:ye("number"),nanoseconds:ye("number")};/**
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
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new ae(0,0))}static max(){return new oe(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const oi=-1;function gb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(s===1e9?new ae(n+1,0):new ae(n,s));return new en(i,G.empty(),e)}function yb(t){return new en(t.readTime,t.key,oi)}class en{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new en(oe.min(),G.empty(),oi)}static max(){return new en(oe.max(),G.empty(),oi)}}function vb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const _b="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */function sl(t){return S(this,null,function*(){if(t.code!==j.FAILED_PRECONDITION||t.message!==_b)throw t;z("LocalStore","Unexpectedly lost primary lease")})}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,s)=>{n(e)})}static reject(e){return new M((n,s)=>{s(e)})}static waitFor(e){return new M((n,s)=>{let i=0,r=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=M.resolve(!1);for(const s of e)n=n.next(i=>i?M.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new M((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===r&&s(o)},d=>i(d))}})}static doWhile(e,n){return new M((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Tb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class il{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}il.ce=-1;/**
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
 */const rl=-1;function ol(t){return t==null}function Dr(t){return t===0&&1/t==-1/0}function Eb(t){return typeof t=="number"&&Number.isInteger(t)&&!Dr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const wg="";function Ib(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$d(e)),e=Ab(t.get(n),e);return $d(e)}function Ab(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const r=t.charAt(i);switch(r){case"\0":n+="";break;case wg:n+="";break;default:n+=r}}return n}function $d(t){return t+wg+""}/**
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
 */function zd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class We{constructor(e,n){this.comparator=e,this.root=n||Pe.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Pe.RED,this.left=i!=null?i:Pe.EMPTY,this.right=r!=null?r:Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Pe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Pe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,s,i,r){return this}insert(e,n,s){return new Pe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hd(this.data.getIterator())}getIteratorFrom(e){return new Hd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xe(this.comparator);return n.data=e,n}}class Hd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rt{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new rt([])}unionWith(e){let n=new xe(Re.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class bb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException!="undefined"&&r instanceof DOMException?new bb("Invalid base64 string: "+r):r}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const Sb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sn(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=Sb.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */const Eg="server_timestamp",Ig="__type__",Ag="__previous_value__",bg="__local_write_time__";function al(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Ig])==null?void 0:s.stringValue)===Eg}function cl(t){const e=t.mapValue.fields[Ag];return al(e)?cl(e):e}function Nr(t){const e=Sn(t.mapValue.fields[bg].timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class Pb{constructor(e,n,s,i,r,o,c,l,h,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const Mr="(default)";class Or{constructor(e,n){this.projectId=e,this.database=n||Mr}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database===Mr}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}function Cb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Or(t.options.projectId,e)}/**
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
 */const Sg="__type__",Rb="__max__",Ji={mapValue:{}},Pg="__vector__",ic="value";function Pn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?al(t)?4:kb(t)?9007199254740991:xb(t)?10:11:X(28295,{value:t})}function At(t,e){if(t===e)return!0;const n=Pn(t);if(n!==Pn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nr(t).isEqual(Nr(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Sn(i.timestampValue),c=Sn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return is(i.bytesValue).isEqual(is(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Ce(i.geoPointValue.latitude)===Ce(r.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ce(i.integerValue)===Ce(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Ce(i.doubleValue),c=Ce(r.doubleValue);return o===c?Dr(o)===Dr(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],At);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},c=r.mapValue.fields||{};if(zd(o)!==zd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!At(o[l],c[l])))return!1;return!0}(t,e);default:return X(52216,{left:t})}}function ai(t,e){return(t.values||[]).find(n=>At(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=Pn(t),s=Pn(e);if(n!==s)return ee(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(r,o){const c=Ce(r.integerValue||r.doubleValue),l=Ce(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Wd(t.timestampValue,e.timestampValue);case 4:return Wd(Nr(t),Nr(e));case 5:return sc(t.stringValue,e.stringValue);case 6:return function(r,o){const c=is(r),l=is(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const c=r.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ee(c[h],l[h]);if(d!==0)return d}return ee(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const c=ee(Ce(r.latitude),Ce(o.latitude));return c!==0?c:ee(Ce(r.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kd(t.arrayValue,e.arrayValue);case 10:return function(r,o){var m,v,I,k;const c=r.fields||{},l=o.fields||{},h=(m=c[ic])==null?void 0:m.arrayValue,d=(v=l[ic])==null?void 0:v.arrayValue,p=ee(((I=h==null?void 0:h.values)==null?void 0:I.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:Kd(h,d)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===Ji.mapValue&&o===Ji.mapValue)return 0;if(r===Ji.mapValue)return 1;if(o===Ji.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=sc(l[p],d[p]);if(m!==0)return m;const v=rs(c[l[p]],h[d[p]]);if(v!==0)return v}return ee(l.length,d.length)}(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function Wd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Sn(t),s=Sn(e),i=ee(n.seconds,s.seconds);return i!==0?i:ee(n.nanos,s.nanos)}function Kd(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=rs(n[i],s[i]);if(r)return r}return ee(n.length,s.length)}function os(t){return rc(t)}function rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Sn(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=rc(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${rc(n.fields[o])}`;return i+"}"}(t.mapValue):X(61005,{value:t})}function dr(t){switch(Pn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cl(t);return e?16+dr(e):16;case 5:return 2*t.stringValue.length;case 6:return is(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,r)=>i+dr(r),0)}(t.arrayValue);case 10:case 11:return function(s){let i=0;return ps(s.fields,(r,o)=>{i+=r.length+dr(o)}),i}(t.mapValue);default:throw X(13486,{value:t})}}function oc(t){return!!t&&"integerValue"in t}function ll(t){return!!t&&"arrayValue"in t}function fr(t){return!!t&&"mapValue"in t}function xb(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Sg])==null?void 0:s.stringValue)===Pg}function Ks(t){if(t.geoPointValue)return{geoPointValue:D({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:D({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ks(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return D({},t)}function kb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Rb}/**
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
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!fr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Re.emptyPath(),s={},i=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=c.popLast()}o?s[c.lastSegment()]=Ks(o):i.push(c.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());fr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];fr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ps(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new nt(Ks(this.value))}}function Cg(t){const e=[];return ps(t.fields,(n,s)=>{const i=new Re([n]);if(fr(s)){const r=Cg(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new rt(e)}/**
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
 */class tt{constructor(e,n,s,i,r,o,c){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new tt(e,0,oe.min(),oe.min(),oe.min(),nt.empty(),0)}static newFoundDocument(e,n,s,i){return new tt(e,1,n,oe.min(),s,i,0)}static newNoDocument(e,n){return new tt(e,2,n,oe.min(),oe.min(),nt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,oe.min(),oe.min(),nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lr{constructor(e,n){this.position=e,this.inclusive=n}}function qd(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),n.key):s=rs(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!At(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Vb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Rg{}class Ae extends Rg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Nb(e,n,s):n==="array-contains"?new Lb(e,s):n==="in"?new jb(e,s):n==="not-in"?new Fb(e,s):n==="array-contains-any"?new Ub(e,s):new Ae(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Mb(e,s):new Ob(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(rs(n,this.value)):n!==null&&Pn(this.value)===Pn(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends Rg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new tn(e,n)}matches(e){return xg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xg(t){return t.op==="and"}function kg(t){return Db(t)&&xg(t)}function Db(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function ac(t){if(t instanceof Ae)return t.field.canonicalString()+t.op.toString()+os(t.value);if(kg(t))return t.filters.map(e=>ac(e)).join(",");{const e=t.filters.map(n=>ac(n)).join(",");return`${t.op}(${e})`}}function Vg(t,e){return t instanceof Ae?function(s,i){return i instanceof Ae&&s.op===i.op&&s.field.isEqual(i.field)&&At(s.value,i.value)}(t,e):t instanceof tn?function(s,i){return i instanceof tn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,c)=>r&&Vg(o,i.filters[c]),!0):!1}(t,e):void X(19439)}function Dg(t){return t instanceof Ae?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Dg).join(" ,")+"}"}(t):"Filter"}class Nb extends Ae{constructor(e,n,s){super(e,n,s),this.key=G.fromName(s.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mb extends Ae{constructor(e,n){super(e,"in",n),this.keys=Ng("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ob extends Ae{constructor(e,n){super(e,"not-in",n),this.keys=Ng("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ng(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(s=>G.fromName(s.referenceValue))}class Lb extends Ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ll(n)&&ai(n.arrayValue,this.value)}}class jb extends Ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ai(this.value.arrayValue,n)}}class Fb extends Ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ai(this.value.arrayValue,n)}}class Ub extends Ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ll(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ai(this.value.arrayValue,s))}}/**
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
 */class Bb{constructor(e,n=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Yd(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Bb(t,e,n,s,i,r,o)}function ul(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ac(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>os(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>os(s)).join(",")),e.Te=n}return e.Te}function hl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Vb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Vg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gd(t.startAt,e.startAt)&&Gd(t.endAt,e.endAt)}/**
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
 */class ao{constructor(e,n=null,s=[],i=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function $b(t,e,n,s,i,r,o,c){return new ao(t,e,n,s,i,r,o,c)}function zb(t){return new ao(t)}function Xd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hb(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Wb(t){return t.collectionGroup!==null}function qs(t){const e=ne(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const r of e.explicitOrderBy)e.Ee.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new xe(Re.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new jr(r,s))}),n.has(Re.keyField().canonicalString())||e.Ee.push(new jr(Re.keyField(),s))}return e.Ee}function En(t){const e=ne(t);return e.Ie||(e.Ie=Kb(e,qs(t))),e.Ie}function Kb(t,e){if(t.limitType==="F")return Yd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new jr(i.field,r)});const n=t.endAt?new Lr(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Lr(t.startAt.position,t.startAt.inclusive):null;return Yd(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function cc(t,e,n){return new ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mg(t,e){return hl(En(t),En(e))&&t.limitType===e.limitType}function Og(t){return`${ul(En(t))}|lt:${t.limitType}`}function Ds(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>Dg(i)).join(", ")}]`),ol(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>os(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>os(i)).join(",")),`Target(${s})`}(En(t))}; limitType=${t.limitType})`}function dl(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):G.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of qs(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,c,l){const h=qd(o,c,l);return o.inclusive?h<=0:h<0}(s.startAt,qs(s),i)||s.endAt&&!function(o,c,l){const h=qd(o,c,l);return o.inclusive?h>=0:h>0}(s.endAt,qs(s),i))}(t,e)}function qb(t){return(e,n)=>{let s=!1;for(const i of qs(t)){const r=Gb(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Gb(t,e,n){const s=t.field.isKeyField()?G.comparator(e.key,n.key):function(r,o,c){const l=o.data.field(r),h=c.data.field(r);return l!==null&&h!==null?rs(l,h):X(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X(19790,{direction:t.dir})}}/**
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
 */class Dn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Tg(this.inner)}size(){return this.innerSize}}/**
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
 */const Yb=new We(G.comparator);function Fr(){return Yb}const Lg=new We(G.comparator);function Zi(...t){let e=Lg;for(const n of t)e=e.insert(n.key,n);return e}function jg(t){let e=Lg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function yn(){return Gs()}function Fg(){return Gs()}function Gs(){return new Dn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Xb=new We(G.comparator),Qb=new xe(G.comparator);function Ne(...t){let e=Qb;for(const n of t)e=e.add(n);return e}const Jb=new xe(ee);function Zb(){return Jb}/**
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
 */function fl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(e)?"-0":e}}function Ug(t){return{integerValue:""+t}}function eS(t,e){return Eb(e)?Ug(e):fl(t,e)}/**
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
 */class co{constructor(){this._=void 0}}function tS(t,e,n){return t instanceof ci?function(i,r){const o={fields:{[Ig]:{stringValue:Eg},[bg]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&al(r)&&(r=cl(r)),r&&(o.fields[Ag]=r),{mapValue:o}}(n,e):t instanceof li?$g(t,e):t instanceof ui?zg(t,e):function(i,r){const o=Bg(i,r),c=Qd(o)+Qd(i.Ae);return oc(o)&&oc(i.Ae)?Ug(c):fl(i.serializer,c)}(t,e)}function nS(t,e,n){return t instanceof li?$g(t,e):t instanceof ui?zg(t,e):n}function Bg(t,e){return t instanceof Ur?function(s){return oc(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class ci extends co{}class li extends co{constructor(e){super(),this.elements=e}}function $g(t,e){const n=Hg(e);for(const s of t.elements)n.some(i=>At(i,s))||n.push(s);return{arrayValue:{values:n}}}class ui extends co{constructor(e){super(),this.elements=e}}function zg(t,e){let n=Hg(e);for(const s of t.elements)n=n.filter(i=>!At(i,s));return{arrayValue:{values:n}}}class Ur extends co{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Qd(t){return Ce(t.integerValue||t.doubleValue)}function Hg(t){return ll(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class sS{constructor(e,n){this.field=e,this.transform=n}}function iS(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof li&&i instanceof li||s instanceof ui&&i instanceof ui?ss(s.elements,i.elements,At):s instanceof Ur&&i instanceof Ur?At(s.Ae,i.Ae):s instanceof ci&&i instanceof ci}(t.transform,e.transform)}class rS{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lo{}function Wg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qg(t.key,Rt.none()):new Ti(t.key,t.data,Rt.none());{const n=t.data,s=nt.empty();let i=new xe(Re.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Nn(t.key,s,new rt(i.toArray()),Rt.none())}}function oS(t,e,n){t instanceof Ti?function(i,r,o){const c=i.value.clone(),l=Zd(i.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Nn?function(i,r,o){if(!pr(i.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Zd(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Kg(i)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,s){return t instanceof Ti?function(r,o,c,l){if(!pr(r.precondition,o))return c;const h=r.value.clone(),d=ef(r.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,s):t instanceof Nn?function(r,o,c,l){if(!pr(r.precondition,o))return c;const h=ef(r.fieldTransforms,l,o),d=o.data;return d.setAll(Kg(r)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(t,e,n,s):function(r,o,c){return pr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function aS(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Bg(s.transform,i||null);r!=null&&(n===null&&(n=nt.empty()),n.set(s.field,r))}return n||null}function Jd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&ss(s,i,(r,o)=>iS(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ti extends lo{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nn extends lo{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Kg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Zd(t,e,n){const s=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,nS(o,c,n[i]))}return s}function ef(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,tS(r,o,e))}return s}class qg extends lo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cS extends lo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lS{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&oS(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ys(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ys(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Fg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=n.has(i.key)?null:c;const l=Wg(o,c);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ne())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,s)=>Jd(n,s))&&ss(this.baseMutations,e.baseMutations,(n,s)=>Jd(n,s))}}class pl{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){de(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=function(){return Xb}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new pl(e,n,s,i)}}/**
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
 */class uS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var me,Z;function hS(t){switch(t){case j.OK:return X(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return X(15467,{code:t})}}function dS(t){if(t===void 0)return bn("GRPC error has no .code"),j.UNKNOWN;switch(t){case me.OK:return j.OK;case me.CANCELLED:return j.CANCELLED;case me.UNKNOWN:return j.UNKNOWN;case me.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case me.INTERNAL:return j.INTERNAL;case me.UNAVAILABLE:return j.UNAVAILABLE;case me.UNAUTHENTICATED:return j.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case me.NOT_FOUND:return j.NOT_FOUND;case me.ALREADY_EXISTS:return j.ALREADY_EXISTS;case me.PERMISSION_DENIED:return j.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case me.ABORTED:return j.ABORTED;case me.OUT_OF_RANGE:return j.OUT_OF_RANGE;case me.UNIMPLEMENTED:return j.UNIMPLEMENTED;case me.DATA_LOSS:return j.DATA_LOSS;default:return X(39323,{code:t})}}(Z=me||(me={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Zc([4294967295,4294967295],0);class fS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function mS(t,e){return lc(t,e.toTimestamp())}function qn(t){return de(!!t,49232),oe.fromTimestamp(function(n){const s=Sn(n);return new ae(s.seconds,s.nanos)}(t))}function Gg(t,e){return uc(t,e).canonicalString()}function uc(t,e){const n=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function gS(t){const e=ce.fromString(t);return de(AS(e),10190,{key:e.toString()}),e}function hc(t,e){return Gg(t.databaseId,e.path)}function yS(t){const e=gS(t);return e.length===4?ce.emptyPath():_S(e)}function vS(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _S(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function tf(t,e,n){return{name:hc(t,e),fields:n.value.mapValue.fields}}function wS(t,e){let n;if(e instanceof Ti)n={update:tf(t,e.key,e.value)};else if(e instanceof qg)n={delete:hc(t,e.key)};else if(e instanceof Nn)n={update:tf(t,e.key,e.data),updateMask:IS(e.fieldMask)};else{if(!(e instanceof cS))return X(16599,{dt:e.type});n={verify:hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const c=o.transform;if(c instanceof ci)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof li)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ui)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ur)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw X(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:mS(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X(27497)}(t,e.precondition)),n}function TS(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map(n=>function(i,r){let o=i.updateTime?qn(i.updateTime):qn(r);return o.isEqual(oe.min())&&(o=qn(r)),new rS(o,i.transformResults||[])}(n,e))):[]}function ES(t){let e=yS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){de(s===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let r=[];n.where&&(r=function(p){const m=Yg(p);return m instanceof tn&&kg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(I){return new jr(Bn(I.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,ol(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,v=p.values||[];return new Lr(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new Lr(v,m)}(n.endAt)),$b(e,i,o,r,c,"F",l,h)}function Yg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Bn(n.unaryFilter.field);return Ae.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Bn(n.unaryFilter.field);return Ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bn(n.unaryFilter.field);return Ae.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bn(n.unaryFilter.field);return Ae.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ae.create(Bn(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(s=>Yg(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(n.compositeFilter.op))}(t):X(30097,{filter:t})}function Bn(t){return Re.fromServerFormat(t.fieldPath)}function IS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function AS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Xg(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class bS{constructor(e){this.yt=e}}function SS(t){const e=ES({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cc(e,e.limit,"L"):e}/**
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
 */class PS{constructor(){this.bn=new CS}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(en.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(en.min())}updateCollectionGroup(e,n,s){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class CS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new xe(ce.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new xe(ce.comparator)).toArray()}}/**
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
 */const nf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qg=41943040;class $e{static withCacheSize(e){return new $e(e,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */$e.DEFAULT_COLLECTION_PERCENTILE=10,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$e.DEFAULT=new $e(Qg,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$e.DISABLED=new $e(-1,0,0);/**
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
 */class as{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new as(0)}static ar(){return new as(-1)}}/**
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
 */const sf="LruGarbageCollector",RS=1048576;function rf([t,e],[n,s]){const i=ee(t,n);return i===0?ee(e,s):i}class xS{constructor(e){this.Pr=e,this.buffer=new xe(rf),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();rf(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kS{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){z(sf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>S(this,null,function*(){this.Rr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?z(sf,"Ignoring IndexedDB error during garbage collection: ",n):yield sl(n)}yield this.Ar(3e5)}))}}class VS{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return M.resolve(il.ce);const s=new xS(n);return this.Vr.forEachTarget(e,i=>s.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>s.Ir(i))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(nf)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nf):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let s,i,r,o,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(s=p,c=Date.now(),this.removeTargets(e,s,n))).next(p=>(r=p,l=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(h=Date.now(),Un()<=Q.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p})))}}function DS(t,e){return new VS(t,e)}/**
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
 */class NS{constructor(){this.changes=new Dn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?M.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class OS{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Ys(s.mutation,i,rt.empty(),ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ne()){const i=yn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Zi();return r.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=yn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ne()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,s,i){let r=Fr();const o=Gs(),c=function(){return Gs()}();return n.forEach((l,h)=>{const d=s.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof Nn)?r=r.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Ys(d.mutation,h,d.mutation.getFieldMask(),ae.now())):o.set(h.key,rt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new MS(d,(p=o.get(h))!=null?p:null))}),c))}recalculateAndSaveOverlays(e,n){const s=Gs();let i=new We((o,c)=>o-c),r=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=s.get(l)||rt.empty();d=c.applyToLocalView(h,d),s.set(l,d);const p=(i.get(c.batchId)||Ne()).add(l);i=i.insert(c.batchId,p)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Fg();d.forEach(m=>{if(!r.has(m)){const v=Wg(n.get(m),s.get(m));v!==null&&p.set(m,v),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return Hb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):M.resolve(yn());let c=oi,l=r;return o.next(h=>M.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),r.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,l,h,Ne())).next(d=>({batchId:c,changes:jg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(s=>{let i=Zi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Zi();return this.indexManager.getCollectionParents(e,r).next(c=>M.forEach(c,l=>{const h=function(p,m){return new ao(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,s,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,tt.newInvalidDocument(d)))});let c=Zi();return o.forEach((l,h)=>{const d=r.get(l);d!==void 0&&Ys(d.mutation,h,rt.empty(),ae.now()),dl(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class LS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:qn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:SS(i.bundledQuery),readTime:qn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class jS{constructor(){this.overlays=new We(G.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const s=yn();return M.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.St(e,n,r)}),M.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Lr.delete(s)),M.resolve()}getOverlaysForCollection(e,n,s){const i=yn(),r=n.length+1,o=new G(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new We((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let d=r.get(h.largestBatchId);d===null&&(d=yn(),r=r.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=yn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=i)););return M.resolve(c)}St(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new uS(n,s));let r=this.Lr.get(n);r===void 0&&(r=Ne(),this.Lr.set(n,r)),this.Lr.set(n,r.add(s.key))}}/**
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
 */class FS{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class ml{constructor(){this.kr=new xe(Ie.qr),this.Kr=new xe(Ie.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const s=new Ie(e,n);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Wr(new Ie(e,n))}Qr(e,n){e.forEach(s=>this.removeReference(s,n))}Gr(e){const n=new G(new ce([])),s=new Ie(n,e),i=new Ie(n,e+1),r=[];return this.Kr.forEachInRange([s,i],o=>{this.Wr(o),r.push(o.key)}),r}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new G(new ce([])),s=new Ie(n,e),i=new Ie(n,e+1);let r=Ne();return this.Kr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ie(e,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return G.comparator(e.key,n.key)||ee(e.Jr,n.Jr)}static Ur(e,n){return ee(e.Jr,n.Jr)||G.comparator(e.key,n.key)}}/**
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
 */class US{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new xe(Ie.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lS(r,n,s,i);this.mutationQueue.push(o);for(const c of i)this.Hr=this.Hr.add(new Ie(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Xr(s),r=i<0?0:i;return M.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?rl:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),r=[];return this.Hr.forEachInRange([s,i],o=>{const c=this.Zr(o.Jr);r.push(c)}),M.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new xe(ee);return n.forEach(i=>{const r=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([r,o],c=>{s=s.add(c.Jr)})}),M.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;G.isDocumentKey(r)||(r=r.child(""));const o=new Ie(new G(r),0);let c=new xe(ee);return this.Hr.forEachWhile(l=>{const h=l.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.Jr)),!0)},o),M.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(s=>{const i=this.Zr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return M.forEach(n.mutations,i=>{const r=new Ie(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=s})}nr(e){}containsKey(e,n){const s=new Ie(n,0),i=this.Hr.firstAfterOrEqual(s);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class BS{constructor(e){this.ti=e,this.docs=function(){return new We(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return M.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=Fr();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),M.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Fr();const o=n.path,c=new G(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||vb(yb(d),s)<=0||(i.has(d.key)||dl(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return M.resolve(r)}getAllFromCollectionGroup(e,n,s,i){X(9500)}ni(e,n){return M.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new $S(this)}getSize(e){return M.resolve(this.size)}}class $S extends NS{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(s)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class zS{constructor(e){this.persistence=e,this.ri=new Dn(n=>ul(n),hl),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.ii=0,this.si=new ml,this.targetCount=0,this.oi=as._r()}forEachTarget(e,n){return this.ri.forEach((s,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new as(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),M.waitFor(r).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const s=this.ri.get(n)||null;return M.resolve(s)}addMatchingKeys(e,n,s){return this.si.$r(n,s),M.resolve()}removeMatchingKeys(e,n,s){this.si.Qr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const s=this.si.jr(n);return M.resolve(s)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class Jg{constructor(e,n){this._i={},this.overlays={},this.ai=new il(0),this.ui=!1,this.ui=!0,this.ci=new FS,this.referenceDelegate=e(this),this.li=new zS(this),this.indexManager=new PS,this.remoteDocumentCache=function(i){return new BS(i)}(s=>this.referenceDelegate.hi(s)),this.serializer=new bS(n),this.Pi=new LS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this._i[e.toKey()];return s||(s=new US(n,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,s){z("MemoryPersistence","Starting transaction:",e);const i=new HS(this.ai.next());return this.referenceDelegate.Ti(),s(i).next(r=>this.referenceDelegate.Ei(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ii(e,n){return M.or(Object.values(this._i).map(s=>()=>s.containsKey(e,n)))}}class HS extends wb{constructor(e){super(),this.currentSequenceNumber=e}}class gl{constructor(e){this.persistence=e,this.Ri=new ml,this.Ai=null}static Vi(e){return new gl(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),M.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.di.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,s=>{const i=G.fromPath(s);return this.mi(e,i).next(r=>{r||n.removeEntry(i,oe.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Br{constructor(e,n){this.persistence=e,this.fi=new Dn(s=>Ib(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=DS(this,n)}static Vi(e,n){return new Br(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(i=>s+i))}pr(e){let n=0;return this.mr(e,s=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(s,i)=>this.wr(e,s,i).next(r=>r?M.resolve():n(i)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(c=>{c||(s++,r.removeEntry(o,oe.min()))})).next(()=>r.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),M.resolve()}removeReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dr(e.data.value)),n}wr(e,n,s){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yl{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ts=s,this.Es=i}static Is(e,n){let s=Ne(),i=Ne();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new yl(e,n.fromCache,s,i)}}/**
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
 */class WS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KS{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return jI()?8:Tb(Oe())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.gs(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ps(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new WS;return this.ys(e,n,o).next(c=>{if(r.result=c,this.As)return this.ws(e,n,o,c.size)})}).next(()=>r.result)}ws(e,n,s,i){return s.documentReadCount<this.Vs?(Un()<=Q.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Un()<=Q.DEBUG&&z("QueryEngine","Query:",Ds(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?(Un()<=Q.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):M.resolve())}gs(e,n){if(Xd(n))return M.resolve(null);let s=En(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cc(n,null,"F"),s=En(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Ne(...r);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,s).next(l=>{const h=this.Ss(n,c);return this.bs(n,h,o,l.readTime)?this.gs(e,cc(n,null,"F")):this.Ds(e,h,n,l)}))})))}ps(e,n,s,i){return Xd(n)||i.isEqual(oe.min())?M.resolve(null):this.fs.getDocuments(e,s).next(r=>{const o=this.Ss(n,r);return this.bs(n,o,s,i)?M.resolve(null):(Un()<=Q.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ds(n)),this.Ds(e,o,n,gb(i,oi)).next(c=>c))})}Ss(e,n){let s=new xe(qb(e));return n.forEach((i,r)=>{dl(e,r)&&(s=s.add(r))}),s}bs(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(e,n,s){return Un()<=Q.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ds(n)),this.fs.getDocumentsMatchingQuery(e,n,en.min(),s)}Ds(e,n,s,i){return this.fs.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */const qS="LocalStore";class GS{constructor(e,n,s,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new We(ee),this.Fs=new Dn(r=>ul(r),hl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OS(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function YS(t,e,n,s){return new GS(t,e,n,s)}function Zg(t,e){return S(this,null,function*(){const n=ne(t);return yield n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Os(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],c=[];let l=Ne();for(const h of i){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of r){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(s,l).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:c}))})})})}function XS(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let v=M.resolve();return m.forEach(I=>{v=v.next(()=>d.getEntry(l,I)).next(k=>{const R=h.docVersions.get(I);de(R!==null,48541),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let l=Ne();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function QS(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function JS(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=rl),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class of{constructor(){this.activeTargetIds=Zb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZS{constructor(){this.vo=new of,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,s){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new of,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class e2{Mo(e){}shutdown(){}}/**
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
 */const af="ConnectivityMonitor";class cf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){z(af,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){z(af,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let er=null;function dc(){return er===null?er=function(){return 268435456+Math.round(2147483648*Math.random())}():er++,"0x"+er.toString(16)}/**
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
 */const ma="RestConnection",t2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class n2{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===Mr?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(e,n,s,i,r){const o=dc(),c=this.Qo(e,n.toUriEncodedString());z(ma,`Sending RPC '${e}' ${o}:`,c,s);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,r);const{host:h}=new URL(c),d=vi(h);return this.zo(e,c,l,s,d).then(p=>(z(ma,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ri(ma,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",s),p})}jo(e,n,s,i,r,o){return this.Wo(e,n,s,i,r)}Go(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}Qo(e,n){const s=t2[e];let i=`${this.Ko}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class s2{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ve="WebChannelConnection",Ns=(t,e,n)=>{t.listen(e,s=>{try{n(s)}catch(i){setTimeout(()=>{throw i},0)}})};class Gn extends n2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Gn.c_){const e=fg();Ns(e,dg.STAT_EVENT,n=>{n.stat===nc.PROXY?z(Ve,"STAT_EVENT: detected buffering proxy"):n.stat===nc.NOPROXY&&z(Ve,"STAT_EVENT: detected no buffering proxy")}),Gn.c_=!0}}zo(e,n,s,i,r){const o=dc();return new Promise((c,l)=>{const h=new ug;h.setWithCredentials(!0),h.listenOnce(hg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case hr.NO_ERROR:const p=h.getResponseJson();z(Ve,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case hr.TIMEOUT:z(Ve,`RPC '${e}' ${o} timed out`),l(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case hr.HTTP_ERROR:const m=h.getStatus();if(z(Ve,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const I=v==null?void 0:v.error;if(I&&I.status&&I.message){const k=function(V){const O=V.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(O)>=0?O:j.UNKNOWN}(I.status);l(new K(k,I.message))}else l(new K(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new K(j.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{z(Ve,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);z(Ve,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",d,s,15)})}T_(e,n,s){const i=dc(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=r.join("");z(Ve,`Creating RPC '${e}' stream ${i}: ${h}`,c);const d=o.createWebChannel(h,c);this.E_(d);let p=!1,m=!1;const v=new s2({Jo:I=>{m?z(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(p||(z(Ve,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),z(Ve,`RPC '${e}' stream ${i} sending:`,I),d.send(I))},Ho:()=>d.close()});return Ns(d,js.EventType.OPEN,()=>{m||(z(Ve,`RPC '${e}' stream ${i} transport opened.`),v.i_())}),Ns(d,js.EventType.CLOSE,()=>{m||(m=!0,z(Ve,`RPC '${e}' stream ${i} transport closed`),v.o_(),this.I_(d))}),Ns(d,js.EventType.ERROR,I=>{m||(m=!0,ri(Ve,`RPC '${e}' stream ${i} transport errored. Name:`,I.name,"Message:",I.message),v.o_(new K(j.UNAVAILABLE,"The operation could not be completed")))}),Ns(d,js.EventType.MESSAGE,I=>{var k;if(!m){const R=I.data[0];de(!!R,16349);const V=R,O=(V==null?void 0:V.error)||((k=V[0])==null?void 0:k.error);if(O){z(Ve,`RPC '${e}' stream ${i} received error:`,O);const L=O.status;let F=function(b){const _=me[b];if(_!==void 0)return dS(_)}(L),B=O.message;L==="NOT_FOUND"&&B.includes("database")&&B.includes("does not exist")&&B.includes(this.databaseId.database)&&ri(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),F===void 0&&(F=j.INTERNAL,B="Unknown error status: "+L+" with message "+O.message),m=!0,v.o_(new K(F,B)),d.close()}else z(Ve,`RPC '${e}' stream ${i} received:`,R),v.__(R)}}),Gn.u_(),setTimeout(()=>{v.s_()},0),v}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,s){super.Go(e,n,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return pg()}}/**
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
 */function i2(t){return new Gn(t)}function ga(){return typeof document!="undefined"?document:null}/**
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
 */function uo(t){return new fS(t,!0)}/**
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
 */Gn.c_=!1;class ey{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-s);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const lf="PersistentStream";class r2{constructor(e,n,s,i,r,o,c,l){this.Ci=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ey(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}stop(){return S(this,null,function*(){this.x_()&&(yield this.close(0))})}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}k_(){return S(this,null,function*(){if(this.O_())return this.close(0)})}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(e,n){return S(this,null,function*(){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.t_(n)})}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.D_===n&&this.G_(s,i)},s=>{e(()=>{const i=new K(j.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)})})}G_(e,n){const s=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{s(()=>this.z_(i))}),this.stream.onMessage(i=>{s(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(()=>S(this,null,function*(){this.state=0,this.start()}))}z_(e){return z(lf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(z(lf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class o2 extends r2{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=TS(e.writeResults,e.commitTime),s=qn(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=vS(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>wS(this.serializer,s))};this.q_(n)}}/**
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
 */class a2{}class c2 extends a2{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Wo(e,uc(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(j.UNKNOWN,r.toString())})}jo(e,n,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,uc(n,s),i,o,c,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function l2(t,e,n,s){return new c2(t,e,n,s)}class u2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(bn(n),this.aa=!1):z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ei="RemoteStore";class h2{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo(o=>{s.enqueueAndForget(()=>S(this,null,function*(){Ai(this)&&(z(Ei,"Restarting streams for network reachability change."),yield function(l){return S(this,null,function*(){const h=ne(l);h.Ia.add(4),yield Ii(h),h.Va.set("Unknown"),h.Ia.delete(4),yield ho(h)})}(this))}))}),this.Va=new u2(s,i)}}function ho(t){return S(this,null,function*(){if(Ai(t))for(const e of t.Ra)yield e(!0)})}function Ii(t){return S(this,null,function*(){for(const e of t.Ra)yield e(!1)})}function Ai(t){return ne(t).Ia.size===0}function ty(t,e,n){return S(this,null,function*(){if(!wi(e))throw e;t.Ia.add(1),yield Ii(t),t.Va.set("Offline"),n||(n=()=>QS(t.localStore)),t.asyncQueue.enqueueRetryable(()=>S(this,null,function*(){z(Ei,"Retrying IndexedDB access"),yield n(),t.Ia.delete(1),yield ho(t)}))})}function ny(t,e){return e().catch(n=>ty(t,n,e))}function fo(t){return S(this,null,function*(){const e=ne(t),n=nn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:rl;for(;d2(e);)try{const i=yield JS(e.localStore,s);if(i===null){e.Ta.length===0&&n.L_();break}s=i.batchId,f2(e,i)}catch(i){yield ty(e,i)}sy(e)&&iy(e)})}function d2(t){return Ai(t)&&t.Ta.length<10}function f2(t,e){t.Ta.push(e);const n=nn(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function sy(t){return Ai(t)&&!nn(t).x_()&&t.Ta.length>0}function iy(t){nn(t).start()}function p2(t){return S(this,null,function*(){nn(t).ra()})}function m2(t){return S(this,null,function*(){const e=nn(t);for(const n of t.Ta)e.ea(n.mutations)})}function g2(t,e,n){return S(this,null,function*(){const s=t.Ta.shift(),i=pl.from(s,e,n);yield ny(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),yield fo(t)})}function y2(t,e){return S(this,null,function*(){e&&nn(t).Y_&&(yield function(s,i){return S(this,null,function*(){if(function(o){return hS(o)&&o!==j.ABORTED}(i.code)){const r=s.Ta.shift();nn(s).B_(),yield ny(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),yield fo(s)}})}(t,e)),sy(t)&&iy(t)})}function uf(t,e){return S(this,null,function*(){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),z(Ei,"RemoteStore received new credentials");const s=Ai(n);n.Ia.add(3),yield Ii(n),s&&n.Va.set("Unknown"),yield n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),yield ho(n)})}function v2(t,e){return S(this,null,function*(){const n=ne(t);e?(n.Ia.delete(2),yield ho(n)):e||(n.Ia.add(2),yield Ii(n),n.Va.set("Unknown"))})}function nn(t){return t.fa||(t.fa=function(n,s,i){const r=ne(n);return r.sa(),new o2(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:p2.bind(null,t),t_:y2.bind(null,t),ta:m2.bind(null,t),na:g2.bind(null,t)}),t.Ra.push(e=>S(this,null,function*(){e?(t.fa.B_(),yield fo(t)):(yield t.fa.stop(),t.Ta.length>0&&(z(Ei,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class vl{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,c=new vl(e,n,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ry(t,e){if(bn("AsyncQueue",`${e}: ${t}`),wi(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}class _2{constructor(){this.queries=hf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const i=ne(n),r=i.queries;i.queries=hf(),r.forEach((o,c)=>{for(const l of c.Sa)l.onError(s)})})(this,new K(j.ABORTED,"Firestore shutting down"))}}function hf(){return new Dn(t=>Og(t),Mg)}function w2(t){t.Ca.forEach(e=>{e.next()})}var df,ff;(ff=df||(df={})).Ma="default",ff.Cache="cache";const T2="SyncEngine";class E2{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Dn(c=>Og(c),Mg),this.Eu=new Map,this.Iu=new Set,this.Ru=new We(G.comparator),this.Au=new Map,this.Vu=new ml,this.du={},this.mu=new Map,this.fu=as.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function I2(t,e,n){return S(this,null,function*(){const s=P2(t);try{const i=yield function(o,c){const l=ne(o),h=ae.now(),d=c.reduce((v,I)=>v.add(I.key),Ne());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let I=Fr(),k=Ne();return l.xs.getEntries(v,d).next(R=>{I=R,I.forEach((V,O)=>{O.isValidDocument()||(k=k.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,I)).next(R=>{p=R;const V=[];for(const O of c){const L=aS(O,p.get(O.key).overlayedDocument);L!=null&&V.push(new Nn(O.key,L,Cg(L.value.mapValue),Rt.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,V,c)}).next(R=>{m=R;const V=R.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(v,R.batchId,V)})}).then(()=>({batchId:m.batchId,changes:jg(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let h=o.du[o.currentUser.toKey()];h||(h=new We(ee)),h=h.insert(c,l),o.du[o.currentUser.toKey()]=h}(s,i.batchId,n),yield po(s,i.changes),yield fo(s.remoteStore)}catch(i){const r=ry(i,"Failed to persist write");n.reject(r)}})}function pf(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Tu.forEach((r,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const l=ne(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)}),h&&w2(l)}(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}function A2(t,e){return S(this,null,function*(){const n=ne(t),s=e.batch.batchId;try{const i=yield XS(n.localStore,e);ay(n,s,null),oy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),yield po(n,i)}catch(i){yield sl(i)}})}function b2(t,e,n){return S(this,null,function*(){const s=ne(t);try{const i=yield function(o,c){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(de(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(s.localStore,e);ay(s,e,n),oy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),yield po(s,i)}catch(i){yield sl(i)}})}function oy(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function ay(t,e,n){const s=ne(t);let i=s.du[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.du[s.currentUser.toKey()]=i}}function po(t,e,n){return S(this,null,function*(){const s=ne(t),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((c,l)=>{o.push(s.pu(l,e,n).then(h=>{var d;if((h||n)&&s.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:d.current;s.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=yl.Is(l.targetId,h);r.push(p)}}))}),yield Promise.all(o),s.Pu.H_(i),yield function(l,h){return S(this,null,function*(){const d=ne(l);try{yield d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Ts,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>M.forEach(m.Es,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!wi(p))throw p;z(qS,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=d.vs.get(m),I=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(I);d.vs=d.vs.insert(m,k)}}})}(s.localStore,r))})}function S2(t,e){return S(this,null,function*(){const n=ne(t);if(!n.currentUser.isEqual(e)){z(T2,"User change. New user:",e.toKey());const s=yield Zg(n.localStore,e);n.currentUser=e,function(r,o){r.mu.forEach(c=>{c.forEach(l=>{l.reject(new K(j.CANCELLED,o))})}),r.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),yield po(n,s.Ns)}})}function P2(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=b2.bind(null,e),e}class $r{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return S(this,null,function*(){this.serializer=uo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),yield this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)})}Fu(e,n){return null}Mu(e,n){return null}vu(e){return YS(this.persistence,new KS,e.initialUser,this.serializer)}Cu(e){return new Jg(gl.Vi,this.serializer)}Du(e){return new ZS}terminate(){return S(this,null,function*(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}$r.provider={build:()=>new $r};class C2 extends $r{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){de(this.persistence.referenceDelegate instanceof Br,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new kS(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new Jg(s=>Br.Vi(s,n),this.serializer)}}class fc{initialize(e,n){return S(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=S2.bind(null,this.syncEngine),yield v2(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new _2}()}createDatastore(e){const n=uo(e.databaseInfo.databaseId),s=i2(e.databaseInfo);return l2(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,c){return new h2(s,i,r,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>pf(this.syncEngine,n,0),function(){return cf.v()?new cf:new e2}())}createSyncEngine(e,n){return function(i,r,o,c,l,h,d){const p=new E2(i,r,o,c,l,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return S(this,null,function*(){var e,n;yield function(i){return S(this,null,function*(){const r=ne(i);z(Ei,"RemoteStore shutting down."),r.Ia.add(5),yield Ii(r),r.Aa.shutdown(),r.Va.set("Unknown")})}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()})}}fc.provider={build:()=>new fc};/**
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
 */const sn="FirestoreClient";class R2{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=i,this.user=De.UNAUTHENTICATED,this.clientId=tl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,o=>S(this,null,function*(){z(sn,"Received user=",o.uid),yield this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,o=>(z(sn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>S(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ry(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}function ya(t,e){return S(this,null,function*(){t.asyncQueue.verifyOperationInProgress(),z(sn,"Initializing OfflineComponentProvider");const n=t.configuration;yield e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(i=>S(this,null,function*(){s.isEqual(i)||(yield Zg(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e})}function mf(t,e){return S(this,null,function*(){t.asyncQueue.verifyOperationInProgress();const n=yield x2(t);z(sn,"Initializing OnlineComponentProvider"),yield e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>uf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>uf(e.remoteStore,i)),t._onlineComponents=e})}function x2(t){return S(this,null,function*(){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(sn,"Using user provided OfflineComponentProvider");try{yield ya(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),yield ya(t,new $r)}}else z(sn,"Using default OfflineComponentProvider"),yield ya(t,new C2(void 0));return t._offlineComponents})}function k2(t){return S(this,null,function*(){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(sn,"Using user provided OnlineComponentProvider"),yield mf(t,t._uninitializedComponentsProvider._online)):(z(sn,"Using default OnlineComponentProvider"),yield mf(t,new fc))),t._onlineComponents})}function V2(t){return k2(t).then(e=>e.syncEngine)}function D2(t,e){const n=new Tn;return t.asyncQueue.enqueueAndForget(()=>S(this,null,function*(){return I2(yield V2(t),e,n)})),n.promise}/**
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
 */function cy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const N2="ComponentProvider",gf=new Map;function M2(t,e,n,s,i){return new Pb(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,cy(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
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
 */const ly="firestore.googleapis.com",yf=!0;class vf{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ly,this.ssl=yf}else this.host=e.host,this.ssl=(n=e.ssl)!=null?n:yf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<RS)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cy((s=e.experimentalLongPollingOptions)!=null?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mo{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new rb;switch(s.type){case"firstParty":return new lb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return S(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=gf.get(n);s&&(z(N2,"Removing Datastore"),gf.delete(n),s.terminate())}(this),Promise.resolve()}}function O2(t,e,n,s={}){var h;t=_g(t,mo);const i=vi(e),r=t._getSettings(),o=H(D({},r),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&sg(`https://${c}`),r.host!==ly&&r.host!==c&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=H(D({},r),{host:c,ssl:i,emulatorOptions:s});if(!Zt(l,o)&&(t._setSettings(l),s.mockUserToken)){let d,p;if(typeof s.mockUserToken=="string")d=s.mockUserToken,p=De.MOCK_USER;else{d=VI(s.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=s.mockUserToken.sub||s.mockUserToken.user_id;if(!m)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new De(m)}t._authCredentials=new ob(new gg(d,p))}}/**
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
 */class _l{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _l(this.firestore,e,this._query)}}class Me{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(_i(n,Me._jsonSchema))return new Me(e,s||null,new G(ce.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:ye("string",Me._jsonSchemaVersion),referencePath:ye("string")};class Xt extends _l{constructor(e,n,s){super(e,n,zb(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new G(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function L2(t,e,...n){if(t=He(t),yg("collection","path",e),t instanceof mo){const s=ce.fromString(e,...n);return Fd(s),new Xt(t,null,s)}{if(!(t instanceof Me||t instanceof Xt))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return Fd(s),new Xt(t.firestore,null,s)}}function j2(t,e,...n){if(t=He(t),arguments.length===1&&(e=tl.newId()),yg("doc","path",e),t instanceof mo){const s=ce.fromString(e,...n);return jd(s),new Me(t,null,new G(s))}{if(!(t instanceof Me||t instanceof Xt))throw new K(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return jd(s),new Me(t.firestore,t instanceof Xt?t.converter:null,new G(s))}}/**
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
 */const _f="AsyncQueue";class wf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ey(this,"async_queue_retry"),this._c=()=>{const s=ga();s&&z(_f,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=ga();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ga();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Tn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}lc(){return S(this,null,function*(){if(this.Yu.length!==0){try{yield this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!wi(e))throw e;z(_f,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}})}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,bn("INTERNAL UNHANDLED ERROR: ",Tf(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=vl.createAndSchedule(this,e,n,s,r=>this.hc(r));return this.tc.push(i),i}uc(){this.nc&&X(47125,{Pc:Tf(this.nc)})}verifyOperationInProgress(){}Tc(){return S(this,null,function*(){let e;do e=this.ac,yield e;while(e!==this.ac)})}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Tf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class uy extends mo{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new wf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return S(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wf(e),this._firestoreClient=void 0,yield e}})}}function F2(t,e){const n=typeof t=="object"?t:Jc(),s=typeof t=="string"?t:Mr,i=Vn(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=xI("firestore");r&&O2(i,...r)}return i}function U2(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||B2(t),t._firestoreClient}function B2(t){var s,i,r,o;const e=t._freezeSettings(),n=M2(t._databaseId,((s=t._app)==null?void 0:s.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new R2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class st{constructor(e){this._byteString=e}static fromBase64String(e){try{return new st(It.fromBase64String(e))}catch(n){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new st(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:st._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_i(e,st._jsonSchema))return st.fromBase64String(e.bytes)}}st._jsonSchemaVersion="firestore/bytes/1.0",st._jsonSchema={type:ye("string",st._jsonSchemaVersion),bytes:ye("string")};/**
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
 */class hy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wl{constructor(e){this._methodName=e}}/**
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
 */class xt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(_i(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:ye("string",xt._jsonSchemaVersion),latitude:ye("number"),longitude:ye("number")};/**
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
 */class _t{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:_t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_i(e,_t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new _t(e.vectorValues);throw new K(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_t._jsonSchemaVersion="firestore/vectorValue/1.0",_t._jsonSchema={type:ye("string",_t._jsonSchemaVersion),vectorValues:ye("object")};/**
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
 */const $2=/^__.*__$/;class z2{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Nn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ti(e,this.data,n,this.fieldTransforms)}}function dy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:t})}}class Tl{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Tl(D(D({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),s=this.i({path:n,arrayElement:!1});return s.mc(e),s}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),s=this.i({path:n,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return zr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(dy(this.dataSource)&&$2.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class H2{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||uo(e)}I(e,n,s,i=!1){return new Tl({dataSource:e,methodName:n,targetDoc:s,path:Re.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function W2(t){const e=t._freezeSettings(),n=uo(t._databaseId);return new H2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function K2(t,e,n,s,i,r={}){const o=t.I(r.merge||r.mergeFields?2:0,e,n,i);gy("Data must be an object, but it was:",o,s);const c=py(s,o);let l,h;if(r.merge)l=new rt(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const p of r.mergeFields){const m=Il(e,p,n);if(!o.contains(m))throw new K(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Y2(d,m)||d.push(m)}l=new rt(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new z2(new nt(c),l,h)}class El extends wl{_toFieldTransform(e){return new sS(e.path,new ci)}isEqual(e){return e instanceof El}}function fy(t,e){if(my(t=He(t)))return gy("Unsupported field value:",e,t),py(t,e);if(t instanceof wl)return function(s,i){if(!dy(i.dataSource))throw i.yc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const c of s){let l=fy(c,i.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=He(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return eS(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ae.fromDate(s);return{timestampValue:lc(i.serializer,r)}}if(s instanceof ae){const r=new ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:lc(i.serializer,r)}}if(s instanceof xt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof st)return{bytesValue:pS(i.serializer,s._byteString)};if(s instanceof Me){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Gg(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof _t)return function(o,c){const l=o instanceof _t?o.toArray():o;return{mapValue:{fields:{[Sg]:{stringValue:Pg},[ic]:{arrayValue:{values:l.map(d=>{if(typeof d!="number")throw c.yc("VectorValues must only contain numeric values.");return fl(c.serializer,d)})}}}}}}(s,i);if(Xg(s))return s._toProto(i.serializer);throw i.yc(`Unsupported field value: ${nl(s)}`)}(t,e)}function py(t,e){const n={};return Tg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(s,i)=>{const r=fy(i,e.dc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function my(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ae||t instanceof xt||t instanceof st||t instanceof Me||t instanceof wl||t instanceof _t||Xg(t))}function gy(t,e,n){if(!my(n)||!vg(n)){const s=nl(n);throw s==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+s)}}function Il(t,e,n){if((e=He(e))instanceof hy)return e._internalPath;if(typeof e=="string")return G2(t,e);throw zr("Field path arguments must be of type string or ",t,!1,void 0,n)}const q2=new RegExp("[~\\*/\\[\\]]");function G2(t,e,n){if(e.search(q2)>=0)throw zr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hy(...e.split("."))._internalPath}catch(s){throw zr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zr(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new K(j.INVALID_ARGUMENT,c+t+l)}function Y2(t,e){return t.some(n=>n.isEqual(e))}function X2(){return new El("serverTimestamp")}const Ef="@firebase/firestore",If="4.14.0";/**
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
 */class yy{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Q2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e,n;return(n=(e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)!=null?n:void 0}get(e){if(this._document){const n=this._document.data.field(Il("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Q2 extends yy{data(){return super.data()}}function J2(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class tr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yn extends yy{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Il("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Yn._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Yn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yn._jsonSchema={type:ye("string",Yn._jsonSchemaVersion),bundleSource:ye("string","DocumentSnapshot"),bundleName:ye("string"),bundle:ye("string")};class mr extends Yn{data(e={}){return super.data(e)}}class Xs{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new tr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new mr(this._firestore,this._userDataWriter,s.key,s,new tr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const l=new mr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>r||c.type!==3).map(c=>{const l=new mr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:Z2(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach(r=>{r._document!==null&&(n.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Z2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
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
 */Xs._jsonSchemaVersion="firestore/querySnapshot/1.0",Xs._jsonSchema={type:ye("string",Xs._jsonSchemaVersion),bundleSource:ye("string","QuerySnapshot"),bundleName:ye("string"),bundle:ye("string")};function eP(t,e){const n=_g(t.firestore,uy),s=j2(t),i=J2(t.converter,e),r=W2(t.firestore);return tP(n,[K2(r,"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Rt.exists(!1))]).then(()=>s)}function tP(t,e){const n=U2(t);return D2(n,e)}(function(e,n=!0){ib(ds),Et(new ut("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),c=new uy(new ab(s.getProvider("auth-internal")),new ub(o,s.getProvider("app-check-internal")),Cb(o,i),o);return r=D({useFetchStreams:n},r),c._setSettings(r),c},"PUBLIC").setMultipleInstances(!0)),Qe(Ef,If,e),Qe(Ef,If,"esm2020")})();var nP="firebase",sP="12.12.1";/**
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
 */Qe(nP,sP,"app");function vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iP=vy,_y=new kn("auth","Firebase",vy());/**
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
 */const Hr=new oo("@firebase/auth");function rP(t,...e){Hr.logLevel<=Q.WARN&&Hr.warn(`Auth (${ds}): ${t}`,...e)}function gr(t,...e){Hr.logLevel<=Q.ERROR&&Hr.error(`Auth (${ds}): ${t}`,...e)}/**
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
 */function Vt(t,...e){throw Al(t,...e)}function wt(t,...e){return Al(t,...e)}function wy(t,e,n){const s=H(D({},iP()),{[e]:n});return new kn("auth","Firebase",s).create(e,{appName:t.name})}function In(t){return wy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Al(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return _y.create(t,...e)}function q(t,e,...n){if(!t)throw Al(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gr(e),new Error(e)}function Dt(t,e){t||Pt(e)}/**
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
 */function pc(){var t;return typeof self!="undefined"&&((t=self.location)==null?void 0:t.href)||""}function oP(){return Af()==="http:"||Af()==="https:"}function Af(){var t;return typeof self!="undefined"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function aP(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oP()||eg()||"connection"in navigator)?navigator.onLine:!0}function cP(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=DI()||OI()}get(){return aP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bl(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ty{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hP=new bi(3e4,6e4);function Sl(t,e){return t.tenantId&&!e.tenantId?H(D({},e),{tenantId:t.tenantId}):e}function ms(r,o,c,l){return S(this,arguments,function*(t,e,n,s,i={}){return Ey(t,i,()=>S(this,null,function*(){let h={},d={};s&&(e==="GET"?d=s:h={body:JSON.stringify(s)});const p=yi(D({key:t.config.apiKey},d)).slice(1),m=yield t._getAdditionalHeaders();m["Content-Type"]="application/json",t.languageCode&&(m["X-Firebase-Locale"]=t.languageCode);const v=D({method:e,headers:m},h);return MI()||(v.referrerPolicy="no-referrer"),t.emulatorConfig&&vi(t.emulatorConfig.host)&&(v.credentials="include"),Ty.fetch()(yield Iy(t,t.config.apiHost,n,p),v)}))})}function Ey(t,e,n){return S(this,null,function*(){t._canInitEmulator=!1;const s=D(D({},lP),e);try{const i=new fP(t),r=yield Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=yield r.json();if("needConfirmation"in o)throw nr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nr(t,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wy(t,d,h);Vt(t,d)}}catch(i){if(i instanceof ht)throw i;Vt(t,"network-request-failed",{message:String(i)})}})}function dP(r,o,c,l){return S(this,arguments,function*(t,e,n,s,i={}){const h=yield ms(t,e,n,s,i);return"mfaPendingCredential"in h&&Vt(t,"multi-factor-auth-required",{_serverResponse:h}),h})}function Iy(t,e,n,s){return S(this,null,function*(){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?bl(t.config,i):`${t.config.apiScheme}://${i}`;return uP.includes(n)&&(yield r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o})}class fP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(wt(this.auth,"network-request-failed")),hP.get())})}}function nr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=wt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */function pP(t,e){return S(this,null,function*(){return ms(t,"POST","/v1/accounts:delete",e)})}function Wr(t,e){return S(this,null,function*(){return ms(t,"POST","/v1/accounts:lookup",e)})}/**
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
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function mP(t,e=!1){return S(this,null,function*(){const n=He(t),s=yield n.getIdToken(e),i=Pl(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Qs(va(i.auth_time)),issuedAtTime:Qs(va(i.iat)),expirationTime:Qs(va(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}})}function va(t){return Number(t)*1e3}function Pl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xm(n);return i?JSON.parse(i):(gr("Failed to decode base64 JWT payload"),null)}catch(i){return gr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bf(t){const e=Pl(t);return q(e,"internal-error"),q(typeof e.exp!="undefined","internal-error"),q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */function hi(t,e,n=!1){return S(this,null,function*(){if(n)return e;try{return yield e}catch(s){throw s instanceof ht&&gP(s)&&t.auth.currentUser===t&&(yield t.auth.signOut()),s}})}function gP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!=null?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(()=>S(this,null,function*(){yield this.iteration()}),n)}iteration(){return S(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
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
 */class mc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */function Kr(t){return S(this,null,function*(){var p;const e=t.auth,n=yield t.getIdToken(),s=yield hi(t,Wr(e,{idToken:n}));q(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=(p=i.providerUserInfo)!=null&&p.length?Ay(i.providerUserInfo):[],o=_P(t.providerData,r),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new mc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)})}function vP(t){return S(this,null,function*(){const e=He(t);yield Kr(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function _P(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Ay(t){return t.map(s=>{var i=s,{providerId:e}=i,n=pe(i,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */function wP(t,e){return S(this,null,function*(){const n=yield Ey(t,{},()=>S(this,null,function*(){const s=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=yield Iy(t,i,"/v1/token",`key=${r}`),c=yield t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return t.emulatorConfig&&vi(t.emulatorConfig.host)&&(l.credentials="include"),Ty.fetch()(o,l)}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}})}function TP(t,e){return S(this,null,function*(){return ms(t,"POST","/v2/accounts:revokeToken",Sl(t,e))})}/**
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
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken!="undefined","internal-error"),q(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):bf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=bf(e);this.updateTokensAndExpiration(e,null,n)}getToken(e,n=!1){return S(this,null,function*(){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,n){return S(this,null,function*(){const{accessToken:s,refreshToken:i,expiresIn:r}=yield wP(e,n);this.updateTokensAndExpiration(s,i,Number(r))})}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Xn;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function Ut(t,e){q(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ot{constructor(r){var o=r,{uid:e,auth:n,stsTokenManager:s}=o,i=pe(o,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mc(i.createdAt||void 0,i.lastLoginAt||void 0)}getIdToken(e){return S(this,null,function*(){const n=yield hi(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n})}getIdTokenResult(e){return mP(this,e)}reload(){return vP(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>D({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ot(H(D({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,n=!1){return S(this,null,function*(){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&(yield Kr(this)),yield this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)})}delete(){return S(this,null,function*(){if(yt(this.auth.app))return Promise.reject(In(this.auth));const e=yield this.getIdToken();return yield hi(this,pP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return H(D({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>D({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var O,L,F,B,W,b,_,w;const s=(O=n.displayName)!=null?O:void 0,i=(L=n.email)!=null?L:void 0,r=(F=n.phoneNumber)!=null?F:void 0,o=(B=n.photoURL)!=null?B:void 0,c=(W=n.tenantId)!=null?W:void 0,l=(b=n._redirectEventId)!=null?b:void 0,h=(_=n.createdAt)!=null?_:void 0,d=(w=n.lastLoginAt)!=null?w:void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:I,stsTokenManager:k}=n;q(p&&k,e,"internal-error");const R=Xn.fromJSON(this.name,k);q(typeof p=="string",e,"internal-error"),Ut(s,e.name),Ut(i,e.name),q(typeof m=="boolean",e,"internal-error"),q(typeof v=="boolean",e,"internal-error"),Ut(r,e.name),Ut(o,e.name),Ut(c,e.name),Ut(l,e.name),Ut(h,e.name),Ut(d,e.name);const V=new ot({uid:p,auth:e,email:i,emailVerified:m,displayName:s,isAnonymous:v,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:R,createdAt:h,lastLoginAt:d});return I&&Array.isArray(I)&&(V.providerData=I.map(T=>D({},T))),l&&(V._redirectEventId=l),V}static _fromIdTokenResponse(e,n,s=!1){return S(this,null,function*(){const i=new Xn;i.updateFromServerResponse(n);const r=new ot({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return yield Kr(r),r})}static _fromGetAccountInfoResponse(e,n,s){return S(this,null,function*(){const i=n.users[0];q(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Ay(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new Xn;c.updateFromIdToken(s);const l=new ot({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new mc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,h),l})}}/**
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
 */const Sf=new Map;function Ct(t){Dt(t instanceof Function,"Expected a class definition");let e=Sf.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sf.set(t,e),e)}/**
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
 */class by{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return S(this,null,function*(){return!0})}_set(e,n){return S(this,null,function*(){this.storage[e]=n})}_get(e){return S(this,null,function*(){const n=this.storage[e];return n===void 0?null:n})}_remove(e){return S(this,null,function*(){delete this.storage[e]})}_addListener(e,n){}_removeListener(e,n){}}by.type="NONE";const Pf=by;/**
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
 */function yr(t,e,n){return`firebase:${t}:${e}:${n}`}class Qn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=yr(this.userKey,i.apiKey,r),this.fullPersistenceKey=yr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return S(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=yield Wr(this.auth,{idToken:e}).catch(()=>{});return n?ot._fromGetAccountInfoResponse(this.auth,n,e):null}return ot._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return S(this,null,function*(){if(this.persistence===e)return;const n=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,n,s="authUser"){return S(this,null,function*(){if(!n.length)return new Qn(Ct(Pf),e,s);const i=(yield Promise.all(n.map(h=>S(this,null,function*(){if(yield h._isAvailable())return h})))).filter(h=>h);let r=i[0]||Ct(Pf);const o=yr(s,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=yield h._get(o);if(d){let p;if(typeof d=="string"){const m=yield Wr(e,{idToken:d}).catch(()=>{});if(!m)break;p=yield ot._fromGetAccountInfoResponse(e,m,d)}else p=ot._fromJSON(e,d);h!==r&&(c=p),r=h;break}}catch(d){}const l=i.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Qn(r,e,s):(r=l[0],c&&(yield r._set(o,c.toJSON())),yield Promise.all(n.map(h=>S(this,null,function*(){if(h!==r)try{yield h._remove(o)}catch(d){}}))),new Qn(r,e,s))})}}/**
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
 */function Cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ky(e))return"Blackberry";if(Vy(e))return"Webos";if(Py(e))return"Safari";if((e.includes("chrome/")||Cy(e))&&!e.includes("edge/"))return"Chrome";if(xy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Sy(t=Oe()){return/firefox\//i.test(t)}function Py(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cy(t=Oe()){return/crios\//i.test(t)}function Ry(t=Oe()){return/iemobile/i.test(t)}function xy(t=Oe()){return/android/i.test(t)}function ky(t=Oe()){return/blackberry/i.test(t)}function Vy(t=Oe()){return/webos/i.test(t)}function Cl(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EP(t=Oe()){var e;return Cl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function IP(){return LI()&&document.documentMode===10}function Dy(t=Oe()){return Cl(t)||xy(t)||Vy(t)||ky(t)||/windows phone/i.test(t)||Ry(t)}/**
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
 */function Ny(t,e=[]){let n;switch(t){case"Browser":n=Cf(Oe());break;case"Worker":n=`${Cf(Oe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${s}`}/**
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
 */class AP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}runMiddleware(e){return S(this,null,function*(){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)yield s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}})}}/**
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
 */function bP(n){return S(this,arguments,function*(t,e={}){return ms(t,"GET","/v2/passwordPolicy",Sl(t,e))})}/**
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
 */const SP=6;class PP{constructor(e){var s,i,r,o;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(s=n.minPasswordLength)!=null?s:SP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))!=null?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!=null?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var s,i,r,o,c,l;const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=(s=n.meetsMinPasswordLength)!=null?s:!0),n.isValid&&(n.isValid=(i=n.meetsMaxPasswordLength)!=null?i:!0),n.isValid&&(n.isValid=(r=n.containsLowercaseLetter)!=null?r:!0),n.isValid&&(n.isValid=(o=n.containsUppercaseLetter)!=null?o:!0),n.isValid&&(n.isValid=(c=n.containsNumericCharacter)!=null?c:!0),n.isValid&&(n.isValid=(l=n.containsNonAlphanumericCharacter)!=null?l:!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class CP{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rf(this),this.idTokenSubscription=new Rf(this),this.beforeStateQueue=new AP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(()=>S(this,null,function*(){var s,i,r;if(!this._deleted&&(this.persistenceManager=yield Qn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(o){}yield this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return S(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return S(this,null,function*(){try{const n=yield Wr(this,{idToken:e}),s=yield ot._fromGetAccountInfoResponse(this,n,e);yield this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return S(this,null,function*(){var r;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=yield this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,l=yield this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{yield this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)})}tryRedirectSignIn(e){return S(this,null,function*(){let n=null;try{n=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(s){yield this._setRedirectUser(null)}return n})}reloadAndSetCurrentUserOrClear(e){return S(this,null,function*(){try{yield Kr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=cP()}_delete(){return S(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return S(this,null,function*(){if(yt(this.app))return Promise.reject(In(this));const n=e?He(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))})}_updateCurrentUser(e,n=!1){return S(this,null,function*(){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>S(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return S(this,null,function*(){return yt(this.app)?Promise.reject(In(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return yt(this.app)?Promise.reject(In(this)):this.queue(()=>S(this,null,function*(){yield this.assertedPersistence.setPersistence(Ct(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return S(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return S(this,null,function*(){const e=yield bP(this),n=new PP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}revokeAccessToken(e){return S(this,null,function*(){if(this.currentUser){const n=yield this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),yield TP(this,s)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}_setRedirectUser(e,n){return S(this,null,function*(){const s=yield this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return S(this,null,function*(){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=yield Qn.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return S(this,null,function*(){var n,s;return this._isInitialized&&(yield this.queue(()=>S(this,null,function*(){}))),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return S(this,null,function*(){if(e===this.currentUser)return this.queue(()=>S(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(s=(n=this.currentUser)==null?void 0:n.uid)!=null?s:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}directlySetCurrentUser(e){return S(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return S(this,null,function*(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=yield(i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=yield this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e})}_getAppCheckToken(){return S(this,null,function*(){var n;if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=yield(n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken();return e!=null&&e.error&&rP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token})}}function Rl(t){return He(t)}class Rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=HI(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xl={loadJS(){return S(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RP(t){xl=t}function xP(t){return xl.loadJS(t)}function kP(){return xl.gapiScript}function VP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function DP(t,e){const n=Vn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Zt(r,e!=null?e:{}))return i;Vt(i,"already-initialized")}return n.initialize({options:e})}function NP(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function MP(t,e,n){const s=Rl(t);q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=My(e),{host:o,port:c}=OP(e),l=c===null?"":`:${c}`,h={url:`${r}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){q(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),q(Zt(h,s.config.emulator)&&Zt(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,vi(o)?sg(`${r}//${o}${l}`):LP()}function My(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OP(t){const e=My(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:xf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:xf(o)}}}function xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Oy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}/**
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
 */function Jn(t,e){return S(this,null,function*(){return dP(t,"POST","/v1/accounts:signInWithIdp",Sl(t,e))})}/**
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
 */const jP="http://localhost";class Cn extends Oy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=c,r=pe(c,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Cn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Jn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:jP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
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
 */class Ly{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Si extends Ly{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends Si{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch(n){return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class Ht extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ht.credential(n,s)}catch(i){return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
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
 */class Wt extends Si{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch(n){return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
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
 */class Kt extends Si{constructor(){super("twitter.com")}static credential(e,n){return Cn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Kt.credential(n,s)}catch(i){return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
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
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,n,s,i=!1){return S(this,null,function*(){const r=yield ot._fromIdTokenResponse(e,s,i),o=kf(s);return new cs({user:r,providerId:o,_tokenResponse:s,operationType:n})})}static _forOperation(e,n,s){return S(this,null,function*(){yield e._updateTokensIfNecessary(s,!0);const i=kf(s);return new cs({user:e,providerId:i,_tokenResponse:s,operationType:n})})}}function kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qr extends ht{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,qr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!=null?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new qr(e,n,s,i)}}function jy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qr._fromErrorAndOperation(t,r,e,s):r})}function FP(t,e,n=!1){return S(this,null,function*(){const s=yield hi(t,e._linkToIdToken(t.auth,yield t.getIdToken()),n);return cs._forOperation(t,"link",s)})}/**
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
 */function UP(t,e,n=!1){return S(this,null,function*(){const{auth:s}=t;if(yt(s.app))return Promise.reject(In(s));const i="reauthenticate";try{const r=yield hi(t,jy(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=Pl(r.idToken);q(o,s,"internal-error");const{sub:c}=o;return q(t.uid===c,s,"user-mismatch"),cs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Vt(s,"user-mismatch"),r}})}/**
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
 */function BP(t,e,n=!1){return S(this,null,function*(){if(yt(t.app))return Promise.reject(In(t));const s="signIn",i=yield jy(t,s,e),r=yield cs._fromIdTokenResponse(t,s,i);return n||(yield t._updateCurrentUser(r.user)),r})}function $P(t,e,n,s){return He(t).onIdTokenChanged(e,n,s)}function zP(t,e,n){return He(t).beforeAuthStateChanged(e,n)}const Gr="__sak";/**
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
 */class Fy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gr,"1"),this.storage.removeItem(Gr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HP=1e3,WP=10;class Zn extends Fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);IP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WP):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},HP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,n){return S(this,null,function*(){yield hn(Zn.prototype,this,"_set").call(this,e,n),this.localCache[e]=JSON.stringify(n)})}_get(e){return S(this,null,function*(){const n=yield hn(Zn.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(n),n})}_remove(e){return S(this,null,function*(){yield hn(Zn.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}Zn.type="LOCAL";const KP=Zn;/**
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
 */class Uy extends Fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uy.type="SESSION";const By=Uy;/**
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
 */function qP(t){return Promise.all(t.map(e=>S(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(n){return{fulfilled:!1,reason:n}}})))}/**
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
 */class go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new go(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}handleEvent(e){return S(this,null,function*(){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(h=>S(this,null,function*(){return h(n.origin,r)})),l=yield qP(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}go.receivers=[];/**
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
 */function kl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class GP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,n,s=50){return S(this,null,function*(){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const h=kl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(m.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
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
 */function Tt(){return window}function YP(t){Tt().location.href=t}/**
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
 */function $y(){return typeof Tt().WorkerGlobalScope!="undefined"&&typeof Tt().importScripts=="function"}function XP(){return S(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(t){return null}})}function QP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function JP(){return $y()?self:null}/**
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
 */const zy="firebaseLocalStorageDb",ZP=1,Yr="firebaseLocalStorage",Hy="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yo(t,e){return t.transaction([Yr],e?"readwrite":"readonly").objectStore(Yr)}function eC(){const t=indexedDB.deleteDatabase(zy);return new Pi(t).toPromise()}function gc(){const t=indexedDB.open(zy,ZP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Yr,{keyPath:Hy})}catch(i){n(i)}}),t.addEventListener("success",()=>S(this,null,function*(){const s=t.result;s.objectStoreNames.contains(Yr)?e(s):(s.close(),yield eC(),e(yield gc()))}))})}function Vf(t,e,n){return S(this,null,function*(){const s=yo(t,!0).put({[Hy]:e,value:n});return new Pi(s).toPromise()})}function tC(t,e){return S(this,null,function*(){const n=yo(t,!1).get(e),s=yield new Pi(n).toPromise();return s===void 0?null:s.value})}function Df(t,e){const n=yo(t,!0).delete(e);return new Pi(n).toPromise()}const nC=800,sC=3;class Wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return S(this,null,function*(){return this.db?this.db:(this.db=yield gc(),this.db)})}_withRetries(e){return S(this,null,function*(){let n=0;for(;;)try{const s=yield this._openDb();return yield e(s)}catch(s){if(n++>sC)throw s;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return S(this,null,function*(){return $y()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return S(this,null,function*(){this.receiver=go._getInstance(JP()),this.receiver._subscribe("keyChanged",(e,n)=>S(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(n.key)}})),this.receiver._subscribe("ping",(e,n)=>S(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return S(this,null,function*(){var n,s;if(this.activeServiceWorker=yield XP(),!this.activeServiceWorker)return;this.sender=new GP(this.activeServiceWorker);const e=yield this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return S(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||QP()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}})}_isAvailable(){return S(this,null,function*(){try{if(!indexedDB)return!1;const e=yield gc();return yield Vf(e,Gr,"1"),yield Df(e,Gr),!0}catch(e){}return!1})}_withPendingWrite(e){return S(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,n){return S(this,null,function*(){return this._withPendingWrite(()=>S(this,null,function*(){return yield this._withRetries(s=>Vf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)}))})}_get(e){return S(this,null,function*(){const n=yield this._withRetries(s=>tC(s,e));return this.localCache[e]=n,n})}_remove(e){return S(this,null,function*(){return this._withPendingWrite(()=>S(this,null,function*(){return yield this._withRetries(n=>Df(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return S(this,null,function*(){const e=yield this._withRetries(i=>{const r=yo(i,!1).getAll();return new Pi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n})}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>S(this,null,function*(){return this._poll()}),nC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wy.type="LOCAL";const iC=Wy;new bi(3e4,6e4);/**
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
 */function rC(t,e){return e?Ct(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vl extends Oy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oC(t){return BP(t.auth,new Vl(t),t.bypassAuthState)}function aC(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),UP(n,new Vl(t),t.bypassAuthState)}function cC(t){return S(this,null,function*(){const{auth:e,user:n}=t;return q(n,e,"internal-error"),FP(n,new Vl(t),t.bypassAuthState)})}/**
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
 */class Ky{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise((e,n)=>S(this,null,function*(){this.pendingPromise={resolve:e,reject:n};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}}))}onAuthEvent(e){return S(this,null,function*(){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(c)(l))}catch(h){this.reject(h)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oC;case"linkViaPopup":case"linkViaRedirect":return cC;case"reauthViaPopup":case"reauthViaRedirect":return aC;default:Vt(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lC=new bi(2e3,1e4);class Kn extends Ky{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}executeNotNull(){return S(this,null,function*(){const e=yield this.execute();return q(e,this.auth,"internal-error"),e})}onExecution(){return S(this,null,function*(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=kl();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lC.get())};e()}}Kn.currentPopupAction=null;/**
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
 */const uC="pendingRedirect",vr=new Map;class Js extends Ky{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}execute(){return S(this,null,function*(){let e=vr.get(this.auth._key());if(!e){try{const s=(yield hC(this.resolver,this.auth))?yield hn(Js.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return S(this,null,function*(){if(e.type==="signInViaRedirect")return hn(Js.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=yield this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,hn(Js.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return S(this,null,function*(){})}cleanUp(){}}function hC(t,e){return S(this,null,function*(){const n=pC(e),s=fC(t);if(!(yield s._isAvailable()))return!1;const i=(yield s._get(n))==="true";return yield s._remove(n),i})}function dC(t,e){vr.set(t._key(),e)}function fC(t){return Ct(t._redirectPersistence)}function pC(t){return yr(uC,t.config.apiKey,t.name)}function mC(t,e,n=!1){return S(this,null,function*(){if(yt(t.app))return Promise.reject(In(t));const s=Rl(t),i=rC(s,e),o=yield new Js(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,yield s._persistUserIfCurrent(o.user),yield s._setRedirectUser(null,e)),o})}/**
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
 */const gC=10*60*1e3;class yC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!qy(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nf(e))}saveEventToCache(e){this.cachedEventUids.add(Nf(e)),this.lastProcessedEventTime=Date.now()}}function Nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qy(t);default:return!1}}/**
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
 */function _C(n){return S(this,arguments,function*(t,e={}){return ms(t,"GET","/v1/projects",e)})}/**
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
 */const wC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TC=/^https?/;function EC(t){return S(this,null,function*(){if(t.config.emulator)return;const{authorizedDomains:e}=yield _C(t);for(const n of e)try{if(IC(n))return}catch(s){}Vt(t,"unauthorized-domain")})}function IC(t){const e=pc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!TC.test(n))return!1;if(wC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const AC=new bi(3e4,6e4);function Mf(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bC(t){return new Promise((e,n)=>{var i,r,o;function s(){Mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mf(),n(wt(t,"network-request-failed"))},timeout:AC.get()})}if((r=(i=Tt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Tt().gapi)!=null&&o.load)s();else{const c=VP("iframefcb");return Tt()[c]=()=>{gapi.load?s():n(wt(t,"network-request-failed"))},xP(`${kP()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw _r=null,e})}let _r=null;function SC(t){return _r=_r||bC(t),_r}/**
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
 */const PC=new bi(5e3,15e3),CC="__/auth/iframe",RC="emulator/auth/iframe",xC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VC(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bl(e,RC):`https://${t.config.authDomain}/${CC}`,s={apiKey:e.apiKey,appName:t.name,v:ds},i=kC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${yi(s).slice(1)}`}function DC(t){return S(this,null,function*(){const e=yield SC(t),n=Tt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:VC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xC,dontclear:!0},s=>new Promise((i,r)=>S(this,null,function*(){yield s.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),c=Tt().setTimeout(()=>{r(o)},PC.get());function l(){Tt().clearTimeout(c),i(s)}s.ping(l).then(l,()=>{r(o)})})))})}/**
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
 */const NC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MC=500,OC=600,LC="_blank",jC="http://localhost";class Of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function FC(t,e,n,s=MC,i=OC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=H(D({},NC),{width:s.toString(),height:i.toString(),top:r,left:o}),h=Oe().toLowerCase();n&&(c=Cy(h)?LC:n),Sy(h)&&(e=e||jC,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,I])=>`${m}${v}=${I},`,"");if(EP(h)&&c!=="_self")return UC(e||"",c),new Of(null);const p=window.open(e||"",c,d);q(p,t,"popup-blocked");try{p.focus()}catch(m){}return new Of(p)}function UC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const BC="__/auth/handler",$C="emulator/auth/handler",zC=encodeURIComponent("fac");function Lf(t,e,n,s,i,r){return S(this,null,function*(){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ds,eventId:i};if(e instanceof Ly){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Si){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=yield t._getAppCheckToken(),h=l?`#${zC}=${encodeURIComponent(l)}`:"";return`${HC(t)}?${yi(c).slice(1)}${h}`})}function HC({config:t}){return t.emulator?bl(t,$C):`https://${t.authDomain}/${BC}`}/**
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
 */const _a="webStorageSupport";class WC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=By,this._completeRedirectFn=mC,this._overrideRedirectResult=dC}_openPopup(e,n,s,i){return S(this,null,function*(){var o;Dt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=yield Lf(e,n,s,pc(),i);return FC(e,r,kl())})}_openRedirect(e,n,s,i){return S(this,null,function*(){yield this._originValidation(e);const r=yield Lf(e,n,s,pc(),i);return YP(r),new Promise(()=>{})})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}initAndGetManager(e){return S(this,null,function*(){const n=yield DC(e),s=new yC(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s})}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_a,{type:_a},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[_a];r!==void 0&&n(!!r),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dy()||Py()||Cl()}}const KC=WC;var jf="@firebase/auth",Ff="1.13.0";/**
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
 */class qC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}getToken(e){return S(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YC(t){Et(new ut("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ny(t)},h=new CP(s,i,r,l);return NP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Et(new ut("auth-internal",e=>{const n=Rl(e.getProvider("auth").getImmediate());return(s=>new qC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(jf,Ff,GC(t)),Qe(jf,Ff,"esm2020")}/**
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
 */const XC=5*60,QC=Zm("authIdTokenMaxAge")||XC;let Uf=null;const JC=t=>e=>S(Fl,null,function*(){const n=e&&(yield e.getIdTokenResult()),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>QC)return;const i=n==null?void 0:n.token;Uf!==i&&(Uf=i,yield fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});function ZC(t=Jc()){const e=Vn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DP(t,{popupRedirectResolver:KC,persistence:[iC,KP,By]}),s=Zm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=JC(r.toString());zP(n,o,()=>o(n.currentUser)),$P(n,c=>o(c))}}const i=Qm("auth");return i&&MP(n,`http://${i}`),n}function eR(){var t,e;return(e=(t=document.getElementsByTagName("head"))==null?void 0:t[0])!=null?e:document}RP({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=wt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",eR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YC("Browser");const Gy="@firebase/installations",Dl="0.6.21";/**
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
 */const Yy=1e4,Xy=`w:${Dl}`,Qy="FIS_v2",tR="https://firebaseinstallations.googleapis.com/v1",nR=60*60*1e3,sR="installations",iR="Installations";/**
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
 */const rR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rn=new kn(sR,iR,rR);function Jy(t){return t instanceof ht&&t.code.includes("request-failed")}/**
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
 */function Zy({projectId:t}){return`${tR}/projects/${t}/installations`}function ev(t){return{token:t.token,requestStatus:2,expiresIn:aR(t.expiresIn),creationTime:Date.now()}}function tv(t,e){return S(this,null,function*(){const s=(yield e.json()).error;return Rn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})})}function nv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function oR(t,{refreshToken:e}){const n=nv(t);return n.append("Authorization",cR(e)),n}function sv(t){return S(this,null,function*(){const e=yield t();return e.status>=500&&e.status<600?t():e})}function aR(t){return Number(t.replace("s","000"))}function cR(t){return`${Qy} ${t}`}/**
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
 */function lR(s,i){return S(this,arguments,function*({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Zy(t),o=nv(t),c=e.getImmediate({optional:!0});if(c){const p=yield c.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const l={fid:n,authVersion:Qy,appId:t.appId,sdkVersion:Xy},h={method:"POST",headers:o,body:JSON.stringify(l)},d=yield sv(()=>fetch(r,h));if(d.ok){const p=yield d.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:ev(p.authToken)}}else throw yield tv("Create Installation",d)})}/**
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
 */function iv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function uR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const hR=/^[cdef][\w-]{21}$/,yc="";function dR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=fR(t);return hR.test(n)?n:yc}catch(t){return yc}}function fR(t){return uR(t).substr(0,22)}/**
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
 */function vo(t){return`${t.appName}!${t.appId}`}/**
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
 */const rv=new Map;function ov(t,e){const n=vo(t);av(n,e),pR(n,e)}function av(t,e){const n=rv.get(t);if(n)for(const s of n)s(e)}function pR(t,e){const n=mR();n&&n.postMessage({key:t,fid:e}),gR()}let vn=null;function mR(){return!vn&&"BroadcastChannel"in self&&(vn=new BroadcastChannel("[Firebase] FID Change"),vn.onmessage=t=>{av(t.data.key,t.data.fid)}),vn}function gR(){rv.size===0&&vn&&(vn.close(),vn=null)}/**
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
 */const yR="firebase-installations-database",vR=1,xn="firebase-installations-store";let wa=null;function Nl(){return wa||(wa=og(yR,vR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xn)}}})),wa}function Xr(t,e){return S(this,null,function*(){const n=vo(t),i=(yield Nl()).transaction(xn,"readwrite"),r=i.objectStore(xn),o=yield r.get(n);return yield r.put(e,n),yield i.done,(!o||o.fid!==e.fid)&&ov(t,e.fid),e})}function cv(t){return S(this,null,function*(){const e=vo(t),s=(yield Nl()).transaction(xn,"readwrite");yield s.objectStore(xn).delete(e),yield s.done})}function _o(t,e){return S(this,null,function*(){const n=vo(t),i=(yield Nl()).transaction(xn,"readwrite"),r=i.objectStore(xn),o=yield r.get(n),c=e(o);return c===void 0?yield r.delete(n):yield r.put(c,n),yield i.done,c&&(!o||o.fid!==c.fid)&&ov(t,c.fid),c})}/**
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
 */function Ml(t){return S(this,null,function*(){let e;const n=yield _o(t.appConfig,s=>{const i=_R(s),r=wR(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===yc?{installationEntry:yield e}:{installationEntry:n,registrationPromise:e}})}function _R(t){const e=t||{fid:dR(),registrationStatus:0};return lv(e)}function wR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Rn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=TR(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ER(t)}:{installationEntry:e}}function TR(t,e){return S(this,null,function*(){try{const n=yield lR(t,e);return Xr(t.appConfig,n)}catch(n){throw Jy(n)&&n.customData.serverCode===409?yield cv(t.appConfig):yield Xr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}})}function ER(t){return S(this,null,function*(){let e=yield Bf(t.appConfig);for(;e.registrationStatus===1;)yield iv(100),e=yield Bf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=yield Ml(t);return s||n}return e})}function Bf(t){return _o(t,e=>{if(!e)throw Rn.create("installation-not-found");return lv(e)})}function lv(t){return IR(t)?{fid:t.fid,registrationStatus:0}:t}function IR(t){return t.registrationStatus===1&&t.registrationTime+Yy<Date.now()}/**
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
 */function AR(s,i){return S(this,arguments,function*({appConfig:t,heartbeatServiceProvider:e},n){const r=bR(t,n),o=oR(t,n),c=e.getImmediate({optional:!0});if(c){const p=yield c.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const l={installation:{sdkVersion:Xy,appId:t.appId}},h={method:"POST",headers:o,body:JSON.stringify(l)},d=yield sv(()=>fetch(r,h));if(d.ok){const p=yield d.json();return ev(p)}else throw yield tv("Generate Auth Token",d)})}function bR(t,{fid:e}){return`${Zy(t)}/${e}/authTokens:generate`}/**
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
 */function Ol(t,e=!1){return S(this,null,function*(){let n;const s=yield _o(t.appConfig,r=>{if(!uv(r))throw Rn.create("not-registered");const o=r.authToken;if(!e&&CR(o))return r;if(o.requestStatus===1)return n=SR(t,e),r;{if(!navigator.onLine)throw Rn.create("app-offline");const c=xR(r);return n=PR(t,c),c}});return n?yield n:s.authToken})}function SR(t,e){return S(this,null,function*(){let n=yield $f(t.appConfig);for(;n.authToken.requestStatus===1;)yield iv(100),n=yield $f(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ol(t,e):s})}function $f(t){return _o(t,e=>{if(!uv(e))throw Rn.create("not-registered");const n=e.authToken;return kR(n)?H(D({},e),{authToken:{requestStatus:0}}):e})}function PR(t,e){return S(this,null,function*(){try{const n=yield AR(t,e),s=H(D({},e),{authToken:n});return yield Xr(t.appConfig,s),n}catch(n){if(Jy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))yield cv(t.appConfig);else{const s=H(D({},e),{authToken:{requestStatus:0}});yield Xr(t.appConfig,s)}throw n}})}function uv(t){return t!==void 0&&t.registrationStatus===2}function CR(t){return t.requestStatus===2&&!RR(t)}function RR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+nR}function xR(t){const e={requestStatus:1,requestTime:Date.now()};return H(D({},t),{authToken:e})}function kR(t){return t.requestStatus===1&&t.requestTime+Yy<Date.now()}/**
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
 */function VR(t){return S(this,null,function*(){const e=t,{installationEntry:n,registrationPromise:s}=yield Ml(e);return s?s.catch(console.error):Ol(e).catch(console.error),n.fid})}/**
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
 */function DR(t,e=!1){return S(this,null,function*(){const n=t;return yield NR(n),(yield Ol(n,e)).token})}function NR(t){return S(this,null,function*(){const{registrationPromise:e}=yield Ml(t);e&&(yield e)})}/**
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
 */function MR(t){if(!t||!t.options)throw Ta("App Configuration");if(!t.name)throw Ta("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ta(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ta(t){return Rn.create("missing-app-config-values",{valueName:t})}/**
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
 */const hv="installations",OR="installations-internal",LR=t=>{const e=t.getProvider("app").getImmediate(),n=MR(e),s=Vn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},jR=t=>{const e=t.getProvider("app").getImmediate(),n=Vn(e,hv).getImmediate();return{getId:()=>VR(n),getToken:i=>DR(n,i)}};function FR(){Et(new ut(hv,LR,"PUBLIC")),Et(new ut(OR,jR,"PRIVATE"))}FR();Qe(Gy,Dl);Qe(Gy,Dl,"esm2020");/**
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
 */const Qr="analytics",UR="firebase_id",BR="origin",$R=60*1e3,zR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ll="https://www.googletagmanager.com/gtag/js";/**
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
 */const Be=new oo("@firebase/analytics");/**
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
 */const HR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ge=new kn("analytics","Analytics",HR);/**
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
 */function WR(t){if(!t.startsWith(Ll)){const e=Ge.create("invalid-gtag-resource",{gtagURL:t});return Be.warn(e.message),""}return t}function dv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function KR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function qR(t,e){const n=KR("firebase-js-sdk-policy",{createScriptURL:WR}),s=document.createElement("script"),i=`${Ll}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function GR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}function YR(t,e,n,s,i,r){return S(this,null,function*(){const o=s[i];try{if(o)yield e[o];else{const l=(yield dv(n)).find(h=>h.measurementId===i);l&&(yield e[l.appId])}}catch(c){Be.error(c)}t("config",i,r)})}function XR(t,e,n,s,i){return S(this,null,function*(){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=yield dv(n);for(const l of o){const h=c.find(p=>p.measurementId===l),d=h&&e[h.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),yield Promise.all(r),t("event",s,i||{})}catch(r){Be.error(r)}})}function QR(t,e,n,s){function i(r,...o){return S(this,null,function*(){try{if(r==="event"){const[c,l]=o;yield XR(t,e,n,c,l)}else if(r==="config"){const[c,l]=o;yield YR(t,e,n,s,c,l)}else if(r==="consent"){const[c,l]=o;t("consent",c,l)}else if(r==="get"){const[c,l,h]=o;t("get",c,l,h)}else if(r==="set"){const[c]=o;t("set",c)}else t(r,...o)}catch(c){Be.error(c)}})}return i}function JR(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=QR(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function ZR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ll)&&n.src.includes(t))return n;return null}/**
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
 */const ex=30,tx=1e3;class nx{constructor(e={},n=tx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const fv=new nx;function sx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}function ix(t){return S(this,null,function*(){var o;const{appId:e,apiKey:n}=t,s={method:"GET",headers:sx(n)},i=zR.replace("{app-id}",e),r=yield fetch(i,s);if(r.status!==200&&r.status!==304){let c="";try{const l=yield r.json();(o=l.error)!=null&&o.message&&(c=l.error.message)}catch(l){}throw Ge.create("config-fetch-failed",{httpStatus:r.status,responseMessage:c})}return r.json()})}function rx(s){return S(this,arguments,function*(t,e=fv,n){const{appId:i,apiKey:r,measurementId:o}=t.options;if(!i)throw Ge.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw Ge.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new cx;return setTimeout(()=>S(this,null,function*(){l.abort()}),$R),pv({appId:i,apiKey:r,measurementId:o},c,l,e)})}function pv(r,o,c){return S(this,arguments,function*(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=fv){var d;const{appId:l,measurementId:h}=t;try{yield ox(s,e)}catch(p){if(h)return Be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:h};throw p}try{const p=yield ix(t);return i.deleteThrottleMetadata(l),p}catch(p){const m=p;if(!ax(m)){if(i.deleteThrottleMetadata(l),h)return Be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:l,measurementId:h};throw p}const v=Number((d=m==null?void 0:m.customData)==null?void 0:d.httpStatus)===503?Sd(n,i.intervalMillis,ex):Sd(n,i.intervalMillis),I={throttleEndTimeMillis:Date.now()+v,backoffCount:n+1};return i.setThrottleMetadata(l,I),Be.debug(`Calling attemptFetch again in ${v} millis`),pv(t,I,s,i)}})}function ox(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Ge.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ax(t){if(!(t instanceof ht)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class cx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}function lx(t,e,n,s,i){return S(this,null,function*(){if(i&&i.global){t("event",n,s);return}else{const r=yield e,o=H(D({},s),{send_to:r});t("event",n,o)}})}function ux(t,e,n,s){return S(this,null,function*(){if(s&&s.global){const i={};for(const r of Object.keys(n))i[`user_properties.${r}`]=n[r];return t("set",i),Promise.resolve()}else{const i=yield e;t("config",i,{update:!0,user_properties:n})}})}/**
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
 */function hx(){return S(this,null,function*(){if(tg())try{yield ng()}catch(t){return Be.warn(Ge.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Be.warn(Ge.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0})}function dx(t,e,n,s,i,r,o){return S(this,null,function*(){var m;const c=rx(t);c.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&Be.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Be.error(v)),e.push(c);const l=hx().then(v=>{if(v)return s.getId()}),[h,d]=yield Promise.all([c,l]);ZR(r)||qR(r,h.measurementId),i("js",new Date);const p=(m=o==null?void 0:o.config)!=null?m:{};return p[BR]="firebase",p.update=!0,d!=null&&(p[UR]=d),i("config",h.measurementId,p),h.measurementId})}/**
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
 */class fx{constructor(e){this.app=e}_delete(){return delete es[this.app.options.appId],Promise.resolve()}}let es={},zf=[];const Hf={};let Ea="dataLayer",px="gtag",Wf,jl,Kf=!1;function mx(){const t=[];if(eg()&&t.push("This is a browser extension environment."),FI()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Ge.create("invalid-analytics-context",{errorInfo:e});Be.warn(n.message)}}function gx(t,e,n){mx();const s=t.options.appId;if(!s)throw Ge.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ge.create("no-api-key");if(es[s]!=null)throw Ge.create("already-exists",{id:s});if(!Kf){GR(Ea);const{wrappedGtag:r,gtagCore:o}=JR(es,zf,Hf,Ea,px);jl=r,Wf=o,Kf=!0}return es[s]=dx(t,zf,Hf,e,Wf,Ea,n),new fx(t)}function yx(t=Jc()){t=He(t);const e=Vn(t,Qr);return e.isInitialized()?e.getImmediate():vx(t)}function vx(t,e={}){const n=Vn(t,Qr);if(n.isInitialized()){const i=n.getImmediate();if(Zt(e,n.getOptions()))return i;throw Ge.create("already-initialized")}return n.initialize({options:e})}function _x(t,e,n){t=He(t),ux(jl,es[t.app.options.appId],e,n).catch(s=>Be.error(s))}function wx(t,e,n,s){t=He(t),lx(jl,es[t.app.options.appId],e,n,s).catch(i=>Be.error(i))}const qf="@firebase/analytics",Gf="0.10.21";function Tx(){Et(new ut(Qr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return gx(s,i,n)},"PUBLIC")),Et(new ut("analytics-internal",t,"PRIVATE")),Qe(qf,Gf),Qe(qf,Gf,"esm2020");function t(e){try{const n=e.getProvider(Qr).getImmediate();return{logEvent:(s,i,r)=>wx(n,s,i,r),setUserProperties:(s,i)=>_x(n,s,i)}}catch(n){throw Ge.create("interop-component-reg-failed",{reason:n})}}}Tx();const Yf={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:void 0};let Ms,Xf,vc,Ex;try{Yf.apiKey==="dummy_key"&&console.warn("Firebase Hub: Missing VITE_FIREBASE_API_KEY. Initializing in offline simulation mode."),Ms=ag(Yf),Xf=ZC(Ms),vc=F2(Ms),typeof window!="undefined"&&window.navigator.userAgent!=="ReactSnap"&&(Ex=yx(Ms))}catch(t){console.error("Firebase Hub: Critical Initialization Error. Forcing local fallback."),Ms={},Xf={},vc={}}class Qf extends N.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){return S(this,null,function*(){console.error("Uncaught error caught by ErrorBoundary:",e,n);try{yield eP(L2(vc,"client_errors"),{appName:this.props.appName||"Kone-Consult",errorMessage:e.message,errorStack:e.stack,componentStack:n.componentStack,url:window.location.href,userAgent:navigator.userAgent,timestamp:X2()}),console.log("Error successfully logged to Firestore.")}catch(s){console.error("Failed to log error to Firestore:",s)}})}render(){return this.state.hasError?y.jsxs("div",{style:{padding:"2rem",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",background:"#0a0a0f",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[y.jsx("h2",{style:{color:"#ec4899",marginBottom:"1rem",fontSize:"2rem"},children:"Oops, something went wrong."}),y.jsx("p",{style:{color:"#94a3b8",marginBottom:"2rem",maxWidth:"500px",lineHeight:"1.6"},children:this.props.fallbackMessage||"We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."}),y.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#ec4899",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 0 15px rgba(236, 72, 153, 0.4)"},children:"Refresh Page"})]}):this.props.children}}const Ia=document.getElementById("root");Ia.hasChildNodes()?ep(Ia,y.jsx(at.StrictMode,{children:y.jsx(Qf,{appName:"KCA-Landing",children:y.jsx(Id,{})})})):tp(Ia).render(y.jsx(at.StrictMode,{children:y.jsx(Qf,{appName:"KCA-Landing",children:y.jsx(Id,{})})}))});export default Ix();
