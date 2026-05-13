import{r as N,a as I_,R as ft}from"./vendor-react-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Vf={exports:{}},zr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_=N,b_=Symbol.for("react.element"),S_=Symbol.for("react.fragment"),P_=Object.prototype.hasOwnProperty,C_=A_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R_={key:!0,ref:!0,__self:!0,__source:!0};function Df(t,e,n){var s,i={},r=null,o=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)P_.call(e,s)&&!R_.hasOwnProperty(s)&&(i[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:b_,type:t,key:r,ref:o,props:i,_owner:C_.current}}zr.Fragment=S_;zr.jsx=Df;zr.jsxs=Df;Vf.exports=zr;var _=Vf.exports,fa={},Cu=I_;fa.createRoot=Cu.createRoot,fa.hydrateRoot=Cu.hydrateRoot;var Nf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ru=ft.createContext&&ft.createContext(Nf),x_=["attr","size","title"];function k_(t,e){if(t==null)return{};var n=V_(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function V_(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function hr(){return hr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},hr.apply(this,arguments)}function xu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function dr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xu(Object(n),!0).forEach(function(s){D_(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xu(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function D_(t,e,n){return e=N_(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function N_(t){var e=M_(t,"string");return typeof e=="symbol"?e:e+""}function M_(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Mf(t){return t&&t.map((e,n)=>ft.createElement(e.tag,dr({key:n},e.attr),Mf(e.child)))}function Be(t){return e=>ft.createElement(O_,hr({attr:dr({},t.attr)},e),Mf(t.child))}function O_(t){var e=n=>{var{attr:s,size:i,title:r}=t,o=k_(t,x_),c=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ft.createElement("svg",hr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,o,{className:l,style:dr(dr({color:t.color||n.color},n.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),r&&ft.createElement("title",null,r),t.children)};return Ru!==void 0?ft.createElement(Ru.Consumer,null,n=>e(n)):e(Nf)}function L_(t){return Be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(t)}function F_(t){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(t)}function j_(t){return Be({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function U_(t){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function B_(t){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function $_(t){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"},child:[]}]})(t)}function z_(t){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(t)}function H_(t){return Be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function W_(t){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function K_(t){return Be({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}const q_=[{name:"Kone Consult",logo:"/app-consult.svg",color:"consult",glow:"rgba(37, 99, 235, 0.12)",url:"https://consult.koneacademy.io"},{name:"Kone Code",logo:"/app-code.svg",color:"code",glow:"rgba(34, 197, 94, 0.12)",url:"https://code.koneacademy.io"},{name:"Kone Lab",logo:"/app-lab.svg",color:"lab",glow:"rgba(168, 85, 247, 0.12)",url:"https://lab.koneacademy.io"},{name:"Kone Digital",logo:"/app-digital.svg",color:"digital",glow:"rgba(0, 255, 255, 0.12)",url:"https://digital.koneacademy.io"},{name:"Anim Studio",logo:"/app-studio.svg",color:"studio",glow:"rgba(239, 68, 68, 0.12)",url:"https://github.com/PhilipKone/anim-studio"},{name:"Kone Kids",logo:"/app-kids.svg",color:"kids",glow:"rgba(245, 158, 11, 0.12)",url:"https://kids.koneacademy.io"},{name:"Kone Shop",logo:"/app-shop.svg",color:"shop",glow:"rgba(236, 72, 153, 0.12)",url:"https://shop.koneacademy.io"},{name:"Kone Pay",logo:"/app-pay.svg",color:"pay",glow:"rgba(255, 215, 0, 0.12)",url:"https://consult.koneacademy.io/pay"}],ku=()=>{const[t,e]=N.useState(!1),n=N.useRef(null);return N.useEffect(()=>{const s=i=>{n.current&&!n.current.contains(i.target)&&e(!1)};return t&&document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[t]),N.useEffect(()=>{const s=i=>{i.key==="Escape"&&e(!1)};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[]),_.jsxs("div",{className:"app-launcher",ref:n,children:[_.jsx("button",{className:`app-launcher-trigger ${t?"active":""}`,onClick:()=>e(!t),"aria-label":"Open app launcher",title:"Kone Apps",children:_.jsx("span",{className:"waffle-icon",children:[...Array(9)].map((s,i)=>_.jsx("span",{className:"waffle-dot"},i))})}),_.jsxs("div",{className:`app-launcher-dropdown ${t?"open":""}`,children:[_.jsx("div",{className:"app-launcher-dropdown-header",children:"Kone Ecosystem"}),_.jsx("div",{className:"app-grid",children:q_.map(s=>_.jsxs("a",{className:"app-grid-item",href:s.url,target:"_blank",rel:"noopener noreferrer",style:{"--item-glow":s.glow},onClick:()=>e(!1),children:[_.jsx("div",{className:`app-icon app-icon--${s.color}`,children:_.jsx("img",{src:s.logo,alt:s.name,className:"app-icon-img"})}),_.jsx("span",{className:"app-label",children:s.name})]},s.name))})]})]})},G_=()=>{const[t,e]=N.useState(!1),[n,s]=N.useState(!1),i=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:3001/login":"https://consult.koneacademy.io/login";N.useEffect(()=>{const c=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const r=()=>{s(!n)},o=()=>{s(!1)};return _.jsx("header",{className:`header ${t?"scrolled":""}`,children:_.jsxs("div",{className:"header-container",children:[_.jsxs("div",{className:"logo",children:[_.jsx("img",{src:"/logo-circle-blue.svg",alt:"KCA Logo",className:"logo-icon"}),_.jsx("span",{className:"logo-text",children:"Kone Academy"})]}),_.jsx("div",{className:"mobile-toggle",onClick:r,children:n?_.jsx(K_,{}):_.jsx(W_,{})}),_.jsxs("nav",{className:`nav-menu ${n?"active":""}`,children:[_.jsx("a",{href:"#vision",className:"nav-link",onClick:o,children:"Vision"}),_.jsx("a",{href:"#divisions",className:"nav-link",onClick:o,children:"Divisions"}),_.jsx("a",{href:"#services",className:"nav-link",onClick:o,children:"Services"}),_.jsx("a",{href:"#careers",className:"nav-link",onClick:o,children:"Careers"}),_.jsxs("div",{className:"mobile-actions",children:[_.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem"},children:_.jsx(ku,{})}),_.jsx("a",{href:i,className:"btn-login",style:{display:"block",marginBottom:"1rem",textAlign:"center",textDecoration:"none",color:"var(--text-primary)"},children:"Login"}),_.jsx("a",{href:"https://github.com/PhilipKone/Kone-Academy",target:"_blank",rel:"noreferrer",className:"btn-github",children:"GitHub"}),_.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{textDecoration:"none",display:"inline-block",textAlign:"center"},children:"Get Started"})]})]}),_.jsxs("div",{className:"header-actions desktop-only",children:[_.jsx(ku,{}),_.jsx("a",{href:i,className:"btn-login",style:{marginRight:"1rem",textDecoration:"none",color:"var(--text-primary)",fontWeight:"500"},children:"Login"}),_.jsx("a",{href:"https://github.com/PhilipKone/Kone-Academy",target:"_blank",rel:"noreferrer",className:"btn-github",children:"GitHub"}),_.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{textDecoration:"none"},children:"Get Started"})]})]})})},X_=()=>{const t=N.useMemo(()=>["Research...","Coding...","Engineering..."],[]),[e,n]=N.useState(0),[s,i]=N.useState(""),[r,o]=N.useState(!1),c=N.useRef(null);return N.useEffect(()=>{const l=t[e];if(c.current&&(clearTimeout(c.current),c.current=null),!r&&s===l){c.current=setTimeout(()=>{o(!0)},2e3);return}if(r&&s===""){o(!1),n(p=>(p+1)%t.length);return}const d=setTimeout(()=>{i(r?s.substring(0,s.length-1):l.substring(0,s.length+1))},r?50:150);return()=>{clearTimeout(d),c.current&&clearTimeout(c.current)}},[s,r,e,t]),_.jsxs("span",{className:"typing-animation",children:[s,_.jsx("span",{className:"cursor",children:"|"})]})},Y_=()=>_.jsxs("section",{className:"hero",id:"home",children:[_.jsxs("div",{className:"hero-container",children:[_.jsxs("div",{className:"hero-content",children:[_.jsx("div",{className:"badge",children:"v1.1 Now Available"}),_.jsxs("h1",{className:"hero-title",children:["Research. Coding.",_.jsx("br",{}),_.jsx("span",{className:"text-gradient",children:"Engineering."})]}),_.jsxs("p",{className:"hero-subtitle",children:["The open-source initiative dedicated to pioneering research and building the next generation of engineers.",_.jsx("br",{}),_.jsx("span",{className:"text-white",children:"Research, code, and engineer the future the right way."})]}),_.jsxs("div",{className:"hero-actions",children:[_.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header",target:"_blank",rel:"noreferrer",className:"btn-primary big",style:{textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:"Start Learning"}),_.jsx("a",{href:(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:3001":"https://consult.koneacademy.io")+"/docs?category=general",target:"_blank",rel:"noreferrer",className:"btn-secondary big",style:{textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:"View Documentation"})]})]}),_.jsx("div",{className:"hero-visual",children:_.jsxs("div",{className:"terminal-window glass-panel",children:[_.jsxs("div",{className:"terminal-header",children:[_.jsx("div",{className:"dot red"}),_.jsx("div",{className:"dot yellow"}),_.jsx("div",{className:"dot green"}),_.jsx("div",{className:"terminal-title",children:"bash — ka-cli"})]}),_.jsxs("div",{className:"terminal-body",children:[_.jsxs("div",{className:"command-line",children:[_.jsx("span",{className:"prompt",children:"user@ka:~$"}),_.jsx("span",{className:"command",children:" init learning-path"})]}),_.jsx("div",{className:"output",children:_.jsx(X_,{})})]})]})})]}),_.jsx("div",{className:"hero-background-glow"})]}),Q_=()=>_.jsx("section",{className:"vision",id:"vision",children:_.jsxs("div",{className:"vision-container glass-panel",children:[_.jsxs("h2",{className:"section-title",children:["Our ",_.jsx("span",{className:"text-gradient",children:"Purpose"})]}),_.jsxs("div",{className:"vision-grid",children:[_.jsxs("div",{className:"vision-card",children:[_.jsx("h3",{className:"card-title",children:"Vision"}),_.jsx("p",{className:"vision-text",children:"Kone Academy is a multidisciplinary technology and innovation collective. We foster a powerful, global community of learners, researchers, and builders, where high-quality education and professional resources are made accessible to everyone. We blend deep educational accessibility with cutting-edge engineering, leveraging our collective talent to provide custom, high-performance digital, creative, and strategic solutions. From personalized learning pathways to commercial B2B growth platforms, we empower innovators and businesses at all levels to solve real-world problems through advanced design and computational precision."})]}),_.jsxs("div",{className:"vision-card",children:[_.jsx("h3",{className:"card-title",children:"Mission"}),_.jsx("p",{className:"vision-text",children:"Our mission is to empower innovators and developers at all levels by merging world-class software education and research with high-performance engineering, deploying custom digital solutions and creative services that deliver measurable results and sustainable competitive advantage to businesses."})]})]})]})}),J_=()=>{const t=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",e=[{id:"research",title:"Research",subtitle:"Kone Consult",icon:"🔬",description:"Research, data analysis, and mentorship.",features:["Topic Selection","Data Analysis","Writing"],status:"Active",link:t?"http://localhost:3001/":"https://consult.koneacademy.io/"},{id:"coding",title:"Coding",subtitle:"Kone Code",icon:"💻",description:"Software development and general programming from Python to C++ and R.",features:["Python Masterclass","Web Development","Data Science"],status:"Enrollment Open",link:t?"http://localhost:5174/":"https://code.koneacademy.io/"},{id:"engineering",title:"Engineering",subtitle:"Kone Lab",icon:"🛠️",description:"Practical engineering, 3D modeling, and embedded systems.",features:["Arduino","3D Simulation","Circuit Design"],status:"Lab Access",link:t?"http://localhost:5175/":"https://lab.koneacademy.io/"}];return _.jsxs("section",{className:"divisions",id:"divisions",children:[_.jsxs("div",{className:"section-header",children:[_.jsxs("h2",{className:"section-title",children:["Core ",_.jsx("span",{className:"text-gradient",children:"Modules"})]}),_.jsx("p",{className:"section-subtitle",children:"Select a specialized division to begin your journey."})]}),_.jsx("div",{className:"divisions-grid",children:e.map(n=>_.jsxs("div",{className:"division-card glass-panel",children:[_.jsxs("div",{className:"card-header",children:[_.jsx("div",{className:"card-icon",children:n.icon}),_.jsxs("div",{className:"card-status",children:[_.jsx("span",{className:"status-dot"}),n.status]})]}),_.jsxs("div",{className:"card-content",children:[_.jsx("h3",{className:"card-title",children:n.title}),_.jsx("p",{className:"card-subtitle",children:n.subtitle}),_.jsx("p",{className:"card-description",children:n.description}),_.jsx("div",{className:"card-features",children:n.features.map((s,i)=>_.jsx("span",{className:"feature-tag",children:s},i))})]}),_.jsx("div",{className:"card-footer",children:_.jsx("a",{href:n.link,className:"btn-link",target:n.link!=="#"?"_blank":"_self",rel:"noopener noreferrer",children:"Access Module →"})})]},n.id))})]})},Z_=({item:t})=>_.jsx("div",{className:"service-item glass-panel",children:_.jsxs("div",{className:"service-content",children:[_.jsx("span",{className:"service-icon",children:t.icon}),_.jsx("h4",{className:"service-title",children:t.title}),_.jsx("p",{className:"service-desc",children:t.desc}),_.jsx("div",{style:{marginTop:"auto",paddingTop:"1rem"},children:_.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform?usp=header",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{display:"block",textAlign:"center",textDecoration:"none",padding:"0.5rem",fontSize:"0.85rem"},children:"Request Service"})})]})}),ev=()=>{const t=[{category:"Research",items:[{title:"Thesis Guidance",desc:"End-to-end support for academic writing.",icon:"🎓"},{title:"Data Analysis",desc:"Processing complex datasets with Python/R.",icon:"📊"},{title:"Publication",desc:"Assistance with journal submissions.",icon:"✍️"}]},{category:"Coding",items:[{title:"Python Masterclass",desc:"From syntax to advanced algorithms.",icon:"🐍"},{title:"C / C++ School",desc:"System programming and memory management.",icon:"💻"},{title:"R & MATLAB",desc:"Statistical computing and data visualization.",icon:"📊"}]},{category:"Engineering",items:[{title:"IoT Systems",desc:"Arduino & ESP32 prototyping.",icon:"📡"},{title:"3D Simulation",desc:"CAD modeling for manufacturing.",icon:"🧊"},{title:"Robotics",desc:"Control systems and automation.",icon:"🤖"}]}];return _.jsx("section",{className:"services",id:"services",children:_.jsxs("div",{className:"services-container",children:[_.jsxs("div",{className:"section-header",children:[_.jsxs("h2",{className:"section-title",children:["Available ",_.jsx("span",{className:"text-gradient",children:"Services"})]}),_.jsx("p",{className:"section-subtitle",children:"Comprehensive tools and resources for your growth."})]}),_.jsx("div",{className:"services-layout",children:t.map((e,n)=>_.jsxs("div",{className:"service-category",children:[_.jsx("h3",{className:"category-title",children:e.category}),_.jsx("div",{className:"category-grid",children:e.items.map((s,i)=>_.jsx(Z_,{item:s},i))})]},n))})]})})},tv=()=>_.jsx("section",{className:"cta-section",id:"contact",children:_.jsx("div",{className:"cta-container glass-panel",children:_.jsxs("div",{className:"cta-content",children:[_.jsxs("h2",{className:"cta-title",children:["Ready to ",_.jsx("span",{className:"text-gradient",children:"Initialize?"})]}),_.jsx("p",{className:"cta-description",children:"Join the community and start building your future today."}),_.jsxs("div",{className:"cta-terminal",children:[_.jsxs("div",{className:"terminal-line",children:[_.jsx("span",{className:"prompt",children:"$"}),_.jsx("span",{className:"cmd",children:"kca join --user=you"})]}),_.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform",target:"_blank",rel:"noopener noreferrer",className:"btn-primary cta-btn",children:"Execute Join Command"})]})]})})});function nv(t){return Be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(t)}function sv(t){return Be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(t)}function iv(t){return Be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(t)}const rv=()=>_.jsx("section",{className:"careers-section",id:"careers",children:_.jsxs("div",{className:"container",children:[_.jsxs("div",{className:"section-header text-center mb-5",children:[_.jsx("span",{className:"badge-premium mb-3",children:"CAREERS & INTERNSHIPS"}),_.jsxs("h2",{className:"display-5 fw-bold text-white",children:["Join the ",_.jsx("span",{className:"text-gradient",children:"Collective"})]}),_.jsx("p",{className:"lead text-secondary mx-auto",style:{maxWidth:"600px"},children:"We don't just teach technology; we build it. Help us shape the future of engineering education."})]}),_.jsxs("div",{className:"careers-grid",children:[_.jsxs("div",{className:"career-card glass-panel-premium highlight",children:[_.jsx("div",{className:"card-badge",children:"OPEN INTERNSHIP"}),_.jsxs("div",{className:"role-header",children:[_.jsx("div",{className:"role-icon",children:_.jsx(iv,{})}),_.jsxs("div",{className:"role-title",children:[_.jsx("h3",{children:"IDE Stress Test Intern"}),_.jsx("span",{className:"location",children:"Remote / Hybrid"})]})]}),_.jsx("div",{className:"role-description",children:_.jsxs("p",{children:["Push the ",_.jsx("span",{className:"text-white fw-bold",children:"Kone Code IDE"})," to its absolute limits. We are looking for obsessive detail-oriented students to find edge cases, break compilers, and help us build the most robust browser-based development environment in existence."]})}),_.jsxs("div",{className:"role-features",children:[_.jsxs("div",{className:"feature",children:[_.jsx(sv,{className:"text-primary"}),_.jsx("span",{children:"Edge-case discovery & QA"})]}),_.jsxs("div",{className:"feature",children:[_.jsx(nv,{className:"text-primary"}),_.jsx("span",{children:"Performance Benchmarking"})]})]}),_.jsx("div",{className:"role-footer mt-4",children:_.jsx("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform",target:"_blank",rel:"noreferrer",className:"btn-primary w-100 py-3",children:"Apply to Test"})})]}),_.jsxs("div",{className:"career-card glass-panel-premium secondary",children:[_.jsx("h4",{className:"text-white mb-3",children:"Future Opportunities"}),_.jsx("p",{className:"text-secondary small",children:"We are constantly expanding our divisions (Lab, Consult, Shop). If you are a specialist in robotics, physical engineering, or AI architecture, we want to hear from you."}),_.jsx("div",{className:"mt-auto pt-4",children:_.jsx("a",{href:"mailto:philipkone45@gmail.com",className:"text-link",children:"General Application →"})})]})]})]})});function ov(t){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(t)}const av=()=>_.jsxs("footer",{className:"footer",children:[_.jsxs("div",{className:"footer-container",children:[_.jsxs("div",{className:"footer-brand",children:[_.jsxs("div",{className:"logo",children:[_.jsx("img",{src:"/logo-circle-blue.svg",alt:"KCA Logo",className:"logo-icon"}),_.jsx("span",{className:"logo-text",children:"Kone Academy"})]}),_.jsx("p",{className:"footer-tagline",children:"Research. Coding. Engineering."})]}),_.jsxs("div",{className:"footer-links",children:[_.jsxs("div",{className:"link-group",children:[_.jsx("h4",{children:"Platform"}),_.jsx("a",{href:"#vision",children:"Vision"}),_.jsx("a",{href:"#divisions",children:"Divisions"}),_.jsx("a",{href:"#services",children:"Services"}),_.jsx("a",{href:"#careers",children:"Careers"})]}),_.jsxs("div",{className:"link-group",children:[_.jsx("h4",{children:"Community"}),_.jsxs("div",{className:"social-icons",children:[_.jsx("a",{href:"https://x.com/koneacademy","aria-label":"X",children:_.jsx(ov,{})}),_.jsx("a",{href:"https://www.tiktok.com/@koneacademy?_r=1&_t=ZM-931L3z5lu71","aria-label":"TikTok",children:_.jsx(z_,{})}),_.jsx("a",{href:"https://github.com/PhilipKone/Kone-Academy","aria-label":"GitHub",children:_.jsx(j_,{})}),_.jsx("a",{href:"https://discord.gg/Ab4SCxPgUK",target:"_blank",rel:"noreferrer","aria-label":"Discord",children:_.jsx(L_,{})}),_.jsx("a",{href:"https://www.linkedin.com/company/konecodeacdemy/?viewAsMember=true","aria-label":"LinkedIn",children:_.jsx(B_,{})}),_.jsx("a",{href:"https://www.facebook.com/profile.php?id=61584327765846","aria-label":"Facebook",children:_.jsx(F_,{})}),_.jsx("a",{href:"https://www.instagram.com/koneacademy?igsh=bnlnaTZ5YmNsMXJ1&utm_source=qr","aria-label":"Instagram",children:_.jsx(U_,{})}),_.jsx("a",{href:"https://join.slack.com/t/koneacademy/shared_invite/zt-3te5lrqpj-d3gixasFIoSerlBnoQ1UMg",target:"_blank",rel:"noreferrer","aria-label":"Slack",children:_.jsx($_,{})}),_.jsx("a",{href:"https://youtube.com/@koneacademy?si=zqEGBiiu0NRdNk6p",target:"_blank",rel:"noreferrer","aria-label":"YouTube",children:_.jsx(H_,{})})]})]})]})]}),_.jsx("div",{className:"footer-bottom",children:_.jsxs("p",{children:["© ",new Date().getFullYear()," Kone Academy. Open Source License."]})})]}),cv=()=>{const[t,e]=N.useState(null),[n,s]=N.useState(!1),[i,r]=N.useState(!1);N.useEffect(()=>{const l=localStorage.getItem("kca-install-dismissed");if(l){const p=parseInt(l,10),m=7*24*60*60*1e3;if(Date.now()-p<m)return}if(window.matchMedia("(display-mode: standalone)").matches)return;const h=p=>{p.preventDefault(),e(p),s(!0)};window.addEventListener("beforeinstallprompt",h);const d=setTimeout(()=>{window.matchMedia("(display-mode: standalone)").matches||s(!0)},5e3);return()=>{window.removeEventListener("beforeinstallprompt",h),clearTimeout(d)}},[]);const o=async()=>{if(t){t.prompt();const{outcome:l}=await t.userChoice;l==="accepted"&&s(!1),e(null)}else alert(`To install Kone Academy:

• Chrome/Edge: Click the install icon (⊕) in the address bar
• Safari: Tap Share → Add to Home Screen
• Firefox: Not yet supported for PWA install`)},c=()=>{r(!0),localStorage.setItem("kca-install-dismissed",Date.now().toString()),setTimeout(()=>s(!1),350)};return n?_.jsx("div",{className:`install-banner ${i?"dismissing":""}`,children:_.jsxs("div",{className:"install-banner-inner",children:[_.jsx("div",{className:"install-banner-icon",children:_.jsx("img",{src:"/logo-circle-blue.svg",alt:"Kone Academy"})}),_.jsxs("div",{className:"install-banner-text",children:[_.jsx("div",{className:"install-banner-title",children:"Install Kone Academy"}),_.jsx("div",{className:"install-banner-subtitle",children:"Quick access from your home screen"})]}),_.jsxs("div",{className:"install-banner-actions",children:[_.jsx("button",{className:"install-btn",onClick:o,children:"Install"}),_.jsx("button",{className:"install-dismiss",onClick:c,"aria-label":"Dismiss install banner",children:"✕"})]})]})}):null},cc=N.createContext({});function qt(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}const lv=typeof window<"u",Hr=lv?N.useLayoutEffect:N.useEffect,Wr=N.createContext(null);function lc(t,e){t.indexOf(e)===-1&&t.push(e)}function fr(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const it=(t,e,n)=>n>e?e:n<t?t:n;let Ks=()=>{};const Gt={},Of=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Lf(t){return typeof t=="object"&&t!==null}const Ff=t=>/^0[^.\s]+$/u.test(t);function jf(t){let e;return()=>(e===void 0&&(e=t()),e)}const Fe=t=>t,uv=(t,e)=>n=>e(t(n)),ri=(...t)=>t.reduce(uv),Xn=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s};class uc{constructor(){this.subscriptions=[]}add(e){return lc(this.subscriptions,e),()=>fr(this.subscriptions,e)}notify(e,n,s){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,s);else for(let r=0;r<i;r++){const o=this.subscriptions[r];o&&o(e,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ze=t=>t*1e3,Ke=t=>t/1e3;function hc(t,e){return e?t*(1e3/e):0}const Uf=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,hv=1e-7,dv=12;function fv(t,e,n,s,i){let r,o,c=0;do o=e+(n-e)/2,r=Uf(o,s,i)-t,r>0?n=o:e=o;while(Math.abs(r)>hv&&++c<dv);return o}function oi(t,e,n,s){if(t===e&&n===s)return Fe;const i=r=>fv(r,0,1,t,n);return r=>r===0||r===1?r:Uf(i(r),e,s)}const Bf=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,$f=t=>e=>1-t(1-e),zf=oi(.33,1.53,.69,.99),dc=$f(zf),Hf=Bf(dc),Wf=t=>t>=1?1:(t*=2)<1?.5*dc(t):.5*(2-Math.pow(2,-10*(t-1))),fc=t=>1-Math.sin(Math.acos(t)),Kf=$f(fc),qf=Bf(fc),pv=oi(.42,0,1,1),mv=oi(0,0,.58,1),Gf=oi(.42,0,.58,1),gv=t=>Array.isArray(t)&&typeof t[0]!="number",Xf=t=>Array.isArray(t)&&typeof t[0]=="number",yv={linear:Fe,easeIn:pv,easeInOut:Gf,easeOut:mv,circIn:fc,circInOut:qf,circOut:Kf,backIn:dc,backInOut:Hf,backOut:zf,anticipate:Wf},_v=t=>typeof t=="string",Vu=t=>{if(Xf(t)){Ks(t.length===4);const[e,n,s,i]=t;return oi(e,n,s,i)}else if(_v(t))return yv[t];return t},Mi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function vv(t,e){let n=new Set,s=new Set,i=!1,r=!1;const o=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function l(d){o.has(d)&&(h.schedule(d),t()),d(c)}const h={schedule:(d,p=!1,m=!1)=>{const b=m&&i?n:s;return p&&o.add(d),b.add(d),d},cancel:d=>{s.delete(d),o.delete(d)},process:d=>{if(c=d,i){r=!0;return}i=!0;const p=n;n=s,s=p,n.forEach(l),n.clear(),i=!1,r&&(r=!1,h.process(d))}};return h}const Tv=40;function Yf(t,e){let n=!1,s=!0;const i={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,o=Mi.reduce((O,F)=>(O[F]=vv(r),O),{}),{setup:c,read:l,resolveKeyframes:h,preUpdate:d,update:p,preRender:m,render:T,postRender:b}=o,x=()=>{const O=Gt.useManualTiming,F=O?i.timestamp:performance.now();n=!1,O||(i.delta=s?1e3/60:Math.max(Math.min(F-i.timestamp,Tv),1)),i.timestamp=F,i.isProcessing=!0,c.process(i),l.process(i),h.process(i),d.process(i),p.process(i),m.process(i),T.process(i),b.process(i),i.isProcessing=!1,n&&e&&(s=!1,t(x))},R=()=>{n=!0,s=!0,i.isProcessing||t(x)};return{schedule:Mi.reduce((O,F)=>{const j=o[F];return O[F]=(H,A=!1,y=!1)=>(n||R(),j.schedule(H,A,y)),O},{}),cancel:O=>{for(let F=0;F<Mi.length;F++)o[Mi[F]].cancel(O)},state:i,steps:o}}const{schedule:X,cancel:Ge,state:ye,steps:Mo}=Yf(typeof requestAnimationFrame<"u"?requestAnimationFrame:Fe,!0);let Xi;function wv(){Xi=void 0}const Ne={now:()=>(Xi===void 0&&Ne.set(ye.isProcessing||Gt.useManualTiming?ye.timestamp:performance.now()),Xi),set:t=>{Xi=t,queueMicrotask(wv)}},Qf=t=>e=>typeof e=="string"&&e.startsWith(t),Jf=Qf("--"),Ev=Qf("var(--"),pc=t=>Ev(t)?Iv.test(t.split("/*")[0].trim()):!1,Iv=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Du(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const ss={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},qs={...ss,transform:t=>it(0,1,t)},Oi={...ss,default:1},Ds=t=>Math.round(t*1e5)/1e5,mc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Av(t){return t==null}const bv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gc=(t,e)=>n=>!!(typeof n=="string"&&bv.test(n)&&n.startsWith(t)||e&&!Av(n)&&Object.prototype.hasOwnProperty.call(n,e)),Zf=(t,e,n)=>s=>{if(typeof s!="string")return s;const[i,r,o,c]=s.match(mc);return{[t]:parseFloat(i),[e]:parseFloat(r),[n]:parseFloat(o),alpha:c!==void 0?parseFloat(c):1}},Sv=t=>it(0,255,t),Oo={...ss,transform:t=>Math.round(Sv(t))},un={test:gc("rgb","red"),parse:Zf("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+Oo.transform(t)+", "+Oo.transform(e)+", "+Oo.transform(n)+", "+Ds(qs.transform(s))+")"};function Pv(t){let e="",n="",s="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const pa={test:gc("#"),parse:Pv,transform:un.transform},ai=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Lt=ai("deg"),pt=ai("%"),U=ai("px"),Cv=ai("vh"),Rv=ai("vw"),Nu={...pt,parse:t=>pt.parse(t)/100,transform:t=>pt.transform(t*100)},Ln={test:gc("hsl","hue"),parse:Zf("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+pt.transform(Ds(e))+", "+pt.transform(Ds(n))+", "+Ds(qs.transform(s))+")"},he={test:t=>un.test(t)||pa.test(t)||Ln.test(t),parse:t=>un.test(t)?un.parse(t):Ln.test(t)?Ln.parse(t):pa.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?un.transform(t):Ln.transform(t),getAnimatableNone:t=>{const e=he.parse(t);return e.alpha=0,he.transform(e)}},xv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function kv(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(mc))==null?void 0:e.length)||0)+(((n=t.match(xv))==null?void 0:n.length)||0)>0}const ep="number",tp="color",Vv="var",Dv="var(",Mu="${}",Nv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Yn(t){const e=t.toString(),n=[],s={color:[],number:[],var:[]},i=[];let r=0;const c=e.replace(Nv,l=>(he.test(l)?(s.color.push(r),i.push(tp),n.push(he.parse(l))):l.startsWith(Dv)?(s.var.push(r),i.push(Vv),n.push(l)):(s.number.push(r),i.push(ep),n.push(parseFloat(l))),++r,Mu)).split(Mu);return{values:n,split:c,indexes:s,types:i}}function Mv(t){return Yn(t).values}function np({split:t,types:e}){const n=t.length;return s=>{let i="";for(let r=0;r<n;r++)if(i+=t[r],s[r]!==void 0){const o=e[r];o===ep?i+=Ds(s[r]):o===tp?i+=he.transform(s[r]):i+=s[r]}return i}}function Ov(t){return np(Yn(t))}const Lv=t=>typeof t=="number"?0:he.test(t)?he.getAnimatableNone(t):t,Fv=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:Lv(t);function jv(t){const e=Yn(t);return np(e)(e.values.map((s,i)=>Fv(s,e.split[i])))}const st={test:kv,parse:Mv,createTransformer:Ov,getAnimatableNone:jv};function Lo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Uv({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let i=0,r=0,o=0;if(!e)i=r=o=n;else{const c=n<.5?n*(1+e):n+e-n*e,l=2*n-c;i=Lo(l,c,t+1/3),r=Lo(l,c,t),o=Lo(l,c,t-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:s}}function pr(t,e){return n=>n>0?e:t}const ne=(t,e,n)=>t+(e-t)*n,Fo=(t,e,n)=>{const s=t*t,i=n*(e*e-s)+s;return i<0?0:Math.sqrt(i)},Bv=[pa,un,Ln],$v=t=>Bv.find(e=>e.test(t));function Ou(t){const e=$v(t);if(!e)return!1;let n=e.parse(t);return e===Ln&&(n=Uv(n)),n}const Lu=(t,e)=>{const n=Ou(t),s=Ou(e);if(!n||!s)return pr(t,e);const i={...n};return r=>(i.red=Fo(n.red,s.red,r),i.green=Fo(n.green,s.green,r),i.blue=Fo(n.blue,s.blue,r),i.alpha=ne(n.alpha,s.alpha,r),un.transform(i))},ma=new Set(["none","hidden"]);function zv(t,e){return ma.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function Hv(t,e){return n=>ne(t,e,n)}function yc(t){return typeof t=="number"?Hv:typeof t=="string"?pc(t)?pr:he.test(t)?Lu:qv:Array.isArray(t)?sp:typeof t=="object"?he.test(t)?Lu:Wv:pr}function sp(t,e){const n=[...t],s=n.length,i=t.map((r,o)=>yc(r)(r,e[o]));return r=>{for(let o=0;o<s;o++)n[o]=i[o](r);return n}}function Wv(t,e){const n={...t,...e},s={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(s[i]=yc(t[i])(t[i],e[i]));return i=>{for(const r in s)n[r]=s[r](i);return n}}function Kv(t,e){const n=[],s={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const r=e.types[i],o=t.indexes[r][s[r]],c=t.values[o]??0;n[i]=c,s[r]++}return n}const qv=(t,e)=>{const n=st.createTransformer(e),s=Yn(t),i=Yn(e);return s.indexes.var.length===i.indexes.var.length&&s.indexes.color.length===i.indexes.color.length&&s.indexes.number.length>=i.indexes.number.length?ma.has(t)&&!i.values.length||ma.has(e)&&!s.values.length?zv(t,e):ri(sp(Kv(s,i),i.values),n):pr(t,e)};function ip(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ne(t,e,n):yc(t)(t,e)}const Gv=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>X.update(e,n),stop:()=>Ge(e),now:()=>ye.isProcessing?ye.timestamp:Ne.now()}},rp=(t,e,n=10)=>{let s="";const i=Math.max(Math.round(e/n),2);for(let r=0;r<i;r++)s+=Math.round(t(r/(i-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},mr=2e4;function _c(t){let e=0;const n=50;let s=t.next(e);for(;!s.done&&e<mr;)e+=n,s=t.next(e);return e>=mr?1/0:e}function Xv(t,e=100,n){const s=n({...t,keyframes:[0,e]}),i=Math.min(_c(s),mr);return{type:"keyframes",ease:r=>s.next(i*r).value/e,duration:Ke(i)}}const ce={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function ga(t,e){return t*Math.sqrt(1-e*e)}const Yv=12;function Qv(t,e,n){let s=n;for(let i=1;i<Yv;i++)s=s-t(s)/e(s);return s}const jo=.001;function Jv({duration:t=ce.duration,bounce:e=ce.bounce,velocity:n=ce.velocity,mass:s=ce.mass}){let i,r,o=1-e;o=it(ce.minDamping,ce.maxDamping,o),t=it(ce.minDuration,ce.maxDuration,Ke(t)),o<1?(i=h=>{const d=h*o,p=d*t,m=d-n,T=ga(h,o),b=Math.exp(-p);return jo-m/T*b},r=h=>{const p=h*o*t,m=p*n+n,T=Math.pow(o,2)*Math.pow(h,2)*t,b=Math.exp(-p),x=ga(Math.pow(h,2),o);return(-i(h)+jo>0?-1:1)*((m-T)*b)/x}):(i=h=>{const d=Math.exp(-h*t),p=(h-n)*t+1;return-jo+d*p},r=h=>{const d=Math.exp(-h*t),p=(n-h)*(t*t);return d*p});const c=5/t,l=Qv(i,r,c);if(t=ze(t),isNaN(l))return{stiffness:ce.stiffness,damping:ce.damping,duration:t};{const h=Math.pow(l,2)*s;return{stiffness:h,damping:o*2*Math.sqrt(s*h),duration:t}}}const Zv=["duration","bounce"],eT=["stiffness","damping","mass"];function Fu(t,e){return e.some(n=>t[n]!==void 0)}function tT(t){let e={velocity:ce.velocity,stiffness:ce.stiffness,damping:ce.damping,mass:ce.mass,isResolvedFromDuration:!1,...t};if(!Fu(t,eT)&&Fu(t,Zv))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,s=2*Math.PI/(n*1.2),i=s*s,r=2*it(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:ce.mass,stiffness:i,damping:r}}else{const n=Jv({...t,velocity:0});e={...e,...n,mass:ce.mass},e.isResolvedFromDuration=!0}return e}function gr(t=ce.visualDuration,e=ce.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:s,restDelta:i}=n;const r=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],c={done:!1,value:r},{stiffness:l,damping:h,mass:d,duration:p,velocity:m,isResolvedFromDuration:T}=tT({...n,velocity:-Ke(n.velocity||0)}),b=m||0,x=h/(2*Math.sqrt(l*d)),R=o-r,k=Ke(Math.sqrt(l/d)),M=Math.abs(R)<5;s||(s=M?ce.restSpeed.granular:ce.restSpeed.default),i||(i=M?ce.restDelta.granular:ce.restDelta.default);let O,F,j,H,A,y;if(x<1)j=ga(k,x),H=(b+x*k*R)/j,O=E=>{const I=Math.exp(-x*k*E);return o-I*(H*Math.sin(j*E)+R*Math.cos(j*E))},A=x*k*H+R*j,y=x*k*R-H*j,F=E=>Math.exp(-x*k*E)*(A*Math.sin(j*E)+y*Math.cos(j*E));else if(x===1){O=I=>o-Math.exp(-k*I)*(R+(b+k*R)*I);const E=b+k*R;F=I=>Math.exp(-k*I)*(k*E*I-b)}else{const E=k*Math.sqrt(x*x-1);O=ee=>{const Te=Math.exp(-x*k*ee),We=Math.min(E*ee,300);return o-Te*((b+x*k*R)*Math.sinh(We)+E*R*Math.cosh(We))/E};const I=(b+x*k*R)/E,S=x*k*I-R*E,w=x*k*R-I*E;F=ee=>{const Te=Math.exp(-x*k*ee),We=Math.min(E*ee,300);return Te*(S*Math.sinh(We)+w*Math.cosh(We))}}const v={calculatedDuration:T&&p||null,velocity:E=>ze(F(E)),next:E=>{if(!T&&x<1){const S=Math.exp(-x*k*E),w=Math.sin(j*E),ee=Math.cos(j*E),Te=o-S*(H*w+R*ee),We=ze(S*(A*w+y*ee));return c.done=Math.abs(We)<=s&&Math.abs(o-Te)<=i,c.value=c.done?o:Te,c}const I=O(E);if(T)c.done=E>=p;else{const S=ze(F(E));c.done=Math.abs(S)<=s&&Math.abs(o-I)<=i}return c.value=c.done?o:I,c},toString:()=>{const E=Math.min(_c(v),mr),I=rp(S=>v.next(E*S).value,E,30);return E+"ms "+I},toTransition:()=>{}};return v}gr.applyToOptions=t=>{const e=Xv(t,100,gr);return t.ease=e.ease,t.duration=ze(e.duration),t.type="keyframes",t};const nT=5;function op(t,e,n){const s=Math.max(e-nT,0);return hc(n-t(s),e-s)}function ya({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:r=500,modifyTarget:o,min:c,max:l,restDelta:h=.5,restSpeed:d}){const p=t[0],m={done:!1,value:p},T=y=>c!==void 0&&y<c||l!==void 0&&y>l,b=y=>c===void 0?l:l===void 0||Math.abs(c-y)<Math.abs(l-y)?c:l;let x=n*e;const R=p+x,k=o===void 0?R:o(R);k!==R&&(x=k-p);const M=y=>-x*Math.exp(-y/s),O=y=>k+M(y),F=y=>{const v=M(y),E=O(y);m.done=Math.abs(v)<=h,m.value=m.done?k:E};let j,H;const A=y=>{T(m.value)&&(j=y,H=gr({keyframes:[m.value,b(m.value)],velocity:op(O,y,m.value),damping:i,stiffness:r,restDelta:h,restSpeed:d}))};return A(0),{calculatedDuration:null,next:y=>{let v=!1;return!H&&j===void 0&&(v=!0,F(y),A(y)),j!==void 0&&y>=j?H.next(y-j):(!v&&F(y),m)}}}function sT(t,e,n){const s=[],i=n||Gt.mix||ip,r=t.length-1;for(let o=0;o<r;o++){let c=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Fe:e;c=ri(l,c)}s.push(c)}return s}function vc(t,e,{clamp:n=!0,ease:s,mixer:i}={}){const r=t.length;if(Ks(r===e.length),r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const c=sT(e,s,i),l=c.length,h=d=>{if(o&&d<t[0])return e[0];let p=0;if(l>1)for(;p<t.length-2&&!(d<t[p+1]);p++);const m=Xn(t[p],t[p+1],d);return c[p](m)};return n?d=>h(it(t[0],t[r-1],d)):h}function iT(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=Xn(0,e,s);t.push(ne(n,1,i))}}function ap(t){const e=[0];return iT(e,t.length-1),e}function rT(t,e){return t.map(n=>n*e)}function oT(t,e){return t.map(()=>e||Gf).splice(0,t.length-1)}function Ns({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const i=gv(s)?s.map(Vu):Vu(s),r={done:!1,value:e[0]},o=rT(n&&n.length===e.length?n:ap(e),t),c=vc(o,e,{ease:Array.isArray(i)?i:oT(e,i)});return{calculatedDuration:t,next:l=>(r.value=c(l),r.done=l>=t,r)}}const aT=t=>t!==null;function Kr(t,{repeat:e,repeatType:n="loop"},s,i=1){const r=t.filter(aT),c=i<0||e&&n!=="loop"&&e%2===1?0:r.length-1;return!c||s===void 0?r[c]:s}const cT={decay:ya,inertia:ya,tween:Ns,keyframes:Ns,spring:gr};function cp(t){typeof t.type=="string"&&(t.type=cT[t.type])}class Tc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const lT=t=>t/100;class Gs extends Tc{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Ne.now()&&this.tick(Ne.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(s=this.options).onStop)==null||i.call(s))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;cp(e);const{type:n=Ns,repeat:s=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=e;let{keyframes:c}=e;const l=n||Ns;l!==Ns&&typeof c[0]!="number"&&(this.mixKeyframes=ri(lT,ip(c[0],c[1])),c=[0,100]);const h=l({...e,keyframes:c});r==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...c].reverse(),velocity:-o})),h.calculatedDuration===null&&(h.calculatedDuration=_c(h));const{calculatedDuration:d}=h;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(s+1)-i,this.generator=h}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:s,totalDuration:i,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:c,calculatedDuration:l}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:d,repeat:p,repeatType:m,repeatDelay:T,type:b,onUpdate:x,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const k=this.currentTime-h*(this.playbackSpeed>=0?1:-1),M=this.playbackSpeed>=0?k<0:k>i;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let O=this.currentTime,F=s;if(p){const y=Math.min(this.currentTime,i)/c;let v=Math.floor(y),E=y%1;!E&&y>=1&&(E=1),E===1&&v--,v=Math.min(v,p+1),!!(v%2)&&(m==="reverse"?(E=1-E,T&&(E-=T/c)):m==="mirror"&&(F=o)),O=it(0,1,E)*c}let j;M?(this.delayState.value=d[0],j=this.delayState):j=F.next(O),r&&!M&&(j.value=r(j.value));let{done:H}=j;!M&&l!==null&&(H=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&H);return A&&b!==ya&&(j.value=Kr(d,this.options,R,this.speed)),x&&x(j.value),A&&this.finish(),j}then(e,n){return this.finished.then(e,n)}get duration(){return Ke(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ke(e)}get time(){return Ke(this.currentTime)}set time(e){e=ze(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return op(s=>this.generator.next(s).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(Ne.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Ke(this.currentTime))}play(){var i,r;if(this.isStopped)return;const{driver:e=Gv,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(r=(i=this.options).onPlay)==null||r.call(i);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ne.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function uT(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const hn=t=>t*180/Math.PI,_a=t=>{const e=hn(Math.atan2(t[1],t[0]));return va(e)},hT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:_a,rotateZ:_a,skewX:t=>hn(Math.atan(t[1])),skewY:t=>hn(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},va=t=>(t=t%360,t<0&&(t+=360),t),ju=_a,Uu=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Bu=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),dT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Uu,scaleY:Bu,scale:t=>(Uu(t)+Bu(t))/2,rotateX:t=>va(hn(Math.atan2(t[6],t[5]))),rotateY:t=>va(hn(Math.atan2(-t[2],t[0]))),rotateZ:ju,rotate:ju,skewX:t=>hn(Math.atan(t[4])),skewY:t=>hn(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ta(t){return t.includes("scale")?1:0}function wa(t,e){if(!t||t==="none")return Ta(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,i;if(n)s=dT,i=n;else{const c=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=hT,i=c}if(!i)return Ta(e);const r=s[e],o=i[1].split(",").map(pT);return typeof r=="function"?r(o):o[r]}const fT=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return wa(n,e)};function pT(t){return parseFloat(t.trim())}const is=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],rs=new Set(is),$u=t=>t===ss||t===U,mT=new Set(["x","y","z"]),gT=is.filter(t=>!mT.has(t));function yT(t){const e=[];return gT.forEach(n=>{const s=t.getValue(n);s!==void 0&&(e.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),e}const zt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>wa(e,"x"),y:(t,{transform:e})=>wa(e,"y")};zt.translateX=zt.x;zt.translateY=zt.y;const pn=new Set;let Ea=!1,Ia=!1,Aa=!1;function lp(){if(Ia){const t=Array.from(pn).filter(s=>s.needsMeasurement),e=new Set(t.map(s=>s.element)),n=new Map;e.forEach(s=>{const i=yT(s);i.length&&(n.set(s,i),s.render())}),t.forEach(s=>s.measureInitialState()),e.forEach(s=>{s.render();const i=n.get(s);i&&i.forEach(([r,o])=>{var c;(c=s.getValue(r))==null||c.set(o)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Ia=!1,Ea=!1,pn.forEach(t=>t.complete(Aa)),pn.clear()}function up(){pn.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ia=!0)})}function _T(){Aa=!0,up(),lp(),Aa=!1}class wc{constructor(e,n,s,i,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=s,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(pn.add(this),Ea||(Ea=!0,X.read(up),X.resolveKeyframes(lp))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:s,motionValue:i}=this;if(e[0]===null){const r=i==null?void 0:i.get(),o=e[e.length-1];if(r!==void 0)e[0]=r;else if(s&&n){const c=s.readValue(n,o);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=o),i&&r===void 0&&i.set(e[0])}uT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),pn.delete(this)}cancel(){this.state==="scheduled"&&(pn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const vT=t=>t.startsWith("--");function hp(t,e,n){vT(e)?t.style.setProperty(e,n):t.style[e]=n}const TT={};function Ec(t,e){const n=jf(t);return()=>TT[e]??n()}const Ic=Ec(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),dp=Ec(()=>window.ViewTimeline!==void 0,"viewTimeline"),fp=Ec(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),xs=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`,zu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xs([0,.65,.55,1]),circOut:xs([.55,0,1,.45]),backIn:xs([.31,.01,.66,-.59]),backOut:xs([.33,1.53,.69,.99])};function pp(t,e){if(t)return typeof t=="function"?fp()?rp(t,e):"ease-out":Xf(t)?xs(t):Array.isArray(t)?t.map(n=>pp(n,e)||zu.easeOut):zu[t]}function wT(t,e,n,{delay:s=0,duration:i=300,repeat:r=0,repeatType:o="loop",ease:c="easeOut",times:l}={},h=void 0){const d={[e]:n};l&&(d.offset=l);const p=pp(c,i);Array.isArray(p)&&(d.easing=p);const m={delay:s,duration:i,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"};return h&&(m.pseudoElement=h),t.animate(d,m)}function mp(t){return typeof t=="function"&&"applyToOptions"in t}function ET({type:t,...e}){return mp(t)&&fp()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class gp extends Tc{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:s,keyframes:i,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:c,onComplete:l}=e;this.isPseudoElement=!!r,this.allowFlatten=o,this.options=e,Ks(typeof e.type!="string");const h=ET(e);this.animation=wT(n,s,i,h,r),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const d=Kr(i,this.options,c,this.speed);this.updateMotionValue&&this.updateMotionValue(d),hp(n,s,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,s,i;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(s=this.animation).commitStyles)==null||i.call(s))}get duration(){var n,s;const e=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return Ke(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ke(e)}get time(){return Ke(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ze(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:s,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Ic()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),s&&(this.animation.rangeEnd=s),Fe):i(this)}}const yp={anticipate:Wf,backInOut:Hf,circInOut:qf};function IT(t){return t in yp}function AT(t){typeof t.ease=="string"&&IT(t.ease)&&(t.ease=yp[t.ease])}const Uo=10;class bT extends gp{constructor(e){AT(e),cp(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:s,onComplete:i,element:r,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const c=new Gs({...o,autoplay:!1}),l=Math.max(Uo,Ne.now()-this.startTime),h=it(0,Uo,l-Uo),d=c.sample(l).value,{name:p}=this.options;r&&p&&hp(r,p,d),n.setWithVelocity(c.sample(Math.max(0,l-h)).value,d,h),c.stop()}}const Hu=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(st.test(t)||t==="0")&&!t.startsWith("url("));function ST(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function PT(t,e,n,s){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const r=t[t.length-1],o=Hu(i,e),c=Hu(r,e);return!o||!c?!1:ST(t)||(n==="spring"||mp(n))&&s}function ba(t){t.duration=0,t.type="keyframes"}const _p=new Set(["opacity","clipPath","filter","transform"]),CT=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function RT(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&CT.test(t[e]))return!0;return!1}const xT=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),kT=jf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function VT(t){var p;const{motionValue:e,name:n,repeatDelay:s,repeatType:i,damping:r,type:o,keyframes:c}=t;if(!(((p=e==null?void 0:e.owner)==null?void 0:p.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:d}=e.owner.getProps();return kT()&&n&&(_p.has(n)||xT.has(n)&&RT(c))&&(n!=="transform"||!d)&&!h&&!s&&i!=="mirror"&&r!==0&&o!=="inertia"}const DT=40;class NT extends Tc{constructor({autoplay:e=!0,delay:n=0,type:s="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",keyframes:c,name:l,motionValue:h,element:d,...p}){var b;super(),this.stop=()=>{var x,R;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(R=this.keyframeResolver)==null||R.cancel()},this.createdAt=Ne.now();const m={autoplay:e,delay:n,type:s,repeat:i,repeatDelay:r,repeatType:o,name:l,motionValue:h,element:d,...p},T=(d==null?void 0:d.KeyframeResolver)||wc;this.keyframeResolver=new T(c,(x,R,k)=>this.onKeyframesResolved(x,R,m,!k),l,h,d),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(e,n,s,i){var k,M;this.keyframeResolver=void 0;const{name:r,type:o,velocity:c,delay:l,isHandoff:h,onUpdate:d}=s;this.resolvedAt=Ne.now();let p=!0;PT(e,r,o,c)||(p=!1,(Gt.instantAnimations||!l)&&(d==null||d(Kr(e,s,n))),e[0]=e[e.length-1],ba(s),s.repeat=0);const T={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>DT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:e},b=p&&!h&&VT(T),x=(M=(k=T.motionValue)==null?void 0:k.owner)==null?void 0:M.current;let R;if(b)try{R=new bT({...T,element:x})}catch{R=new Gs(T)}else R=new Gs(T);R.finished.then(()=>{this.notifyFinished()}).catch(Fe),this.pendingTimeline&&(this.stopTimeline=R.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=R}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),_T()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function vp(t,e,n,s=0,i=1){const r=Array.from(t).sort((h,d)=>h.sortNodePosition(d)).indexOf(e),o=t.size,c=(o-1)*s;return typeof n=="function"?n(r,o):i===1?r*s:c-r*s}const MT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function OT(t){const e=MT.exec(t);if(!e)return[,];const[,n,s,i]=e;return[`--${n??s}`,i]}function Tp(t,e,n=1){const[s,i]=OT(t);if(!s)return;const r=window.getComputedStyle(e).getPropertyValue(s);if(r){const o=r.trim();return Of(o)?parseFloat(o):o}return pc(i)?Tp(i,e,n+1):i}const LT={type:"spring",stiffness:500,damping:25,restSpeed:10},FT=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),jT={type:"keyframes",duration:.8},UT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},BT=(t,{keyframes:e})=>e.length>2?jT:rs.has(t)?t.startsWith("scale")?FT(e[1]):LT:UT;function wp(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...s}=t;return{...e,...s}}return t}function Ac(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?wp(n,t):n}const $T=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function zT(t){for(const e in t)if(!$T.has(e))return!0;return!1}const bc=(t,e,n,s={},i,r)=>o=>{const c=Ac(s,t)||{},l=c.delay||s.delay||0;let{elapsed:h=0}=s;h=h-ze(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:m=>{e.set(m),c.onUpdate&&c.onUpdate(m)},onComplete:()=>{o(),c.onComplete&&c.onComplete()},name:t,motionValue:e,element:r?void 0:i};zT(c)||Object.assign(d,BT(t,d)),d.duration&&(d.duration=ze(d.duration)),d.repeatDelay&&(d.repeatDelay=ze(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(ba(d),d.delay===0&&(p=!0)),(Gt.instantAnimations||Gt.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(p=!0,ba(d),d.delay=0),d.allowFlatten=!c.type&&!c.ease,p&&!r&&e.get()!==void 0){const m=Kr(d.keyframes,c);if(m!==void 0){X.update(()=>{d.onUpdate(m),d.onComplete()});return}}return c.isSync?new Gs(d):new NT(d)};function Wu(t){const e=[{},{}];return t==null||t.values.forEach((n,s)=>{e[0][s]=n.get(),e[1][s]=n.getVelocity()}),e}function Sc(t,e,n,s){if(typeof e=="function"){const[i,r]=Wu(s);e=e(n!==void 0?n:t.custom,i,r)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,r]=Wu(s);e=e(n!==void 0?n:t.custom,i,r)}return e}function mn(t,e,n){const s=t.getProps();return Sc(s,e,n!==void 0?n:s.custom,t)}const Ep=new Set(["width","height","top","left","right","bottom",...is]),Ku=30,HT=t=>!isNaN(parseFloat(t)),Ms={current:void 0};class WT{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var r;const i=Ne.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((r=this.events.change)==null||r.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Ne.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=HT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new uc);const s=this.events[e].add(n);return e==="change"?()=>{s(),X.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-s}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ms.current&&Ms.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Ne.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ku)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ku);return hc(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function et(t,e){return new WT(t,e)}const Sa=t=>Array.isArray(t);function KT(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,et(n))}function qT(t){return Sa(t)?t[t.length-1]||0:t}function GT(t,e){const n=mn(t,e);let{transitionEnd:s={},transition:i={},...r}=n||{};r={...r,...s};for(const o in r){const c=qT(r[o]);KT(t,o,c)}}const me=t=>!!(t&&t.getVelocity);function XT(t){return!!(me(t)&&t.add)}function Pa(t,e){const n=t.getValue("willChange");if(XT(n))return n.add(e);if(!n&&Gt.WillChange){const s=new Gt.WillChange("auto");t.addValue("willChange",s),s.add(e)}}function Pc(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const YT="framerAppearId",Ip="data-"+Pc(YT);function Ap(t){return t.props[Ip]}function QT({protectedKeys:t,needsAnimating:e},n){const s=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,s}function bp(t,e,{delay:n=0,transitionOverride:s,type:i}={}){let{transition:r,transitionEnd:o,...c}=e;const l=t.getDefaultTransition();r=r?wp(r,l):l;const h=r==null?void 0:r.reduceMotion;s&&(r=s);const d=[],p=i&&t.animationState&&t.animationState.getState()[i];for(const m in c){const T=t.getValue(m,t.latestValues[m]??null),b=c[m];if(b===void 0||p&&QT(p,m))continue;const x={delay:n,...Ac(r||{},m)},R=T.get();if(R!==void 0&&!T.isAnimating()&&!Array.isArray(b)&&b===R&&!x.velocity){X.update(()=>T.set(b));continue}let k=!1;if(window.MotionHandoffAnimation){const F=Ap(t);if(F){const j=window.MotionHandoffAnimation(F,m,X);j!==null&&(x.startTime=j,k=!0)}}Pa(t,m);const M=h??t.shouldReduceMotion;T.start(bc(m,T,b,M&&Ep.has(m)?{type:!1}:x,t,k));const O=T.animation;O&&d.push(O)}if(o){const m=()=>X.update(()=>{o&&GT(t,o)});d.length?Promise.all(d).then(m):m()}return d}function Ca(t,e,n={}){var l;const s=mn(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(i=n.transitionOverride);const r=s?()=>Promise.all(bp(t,s,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(h=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:m}=i;return JT(t,e,h,d,p,m,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[h,d]=c==="beforeChildren"?[r,o]:[o,r];return h().then(()=>d())}else return Promise.all([r(),o(n.delay)])}function JT(t,e,n=0,s=0,i=0,r=1,o){const c=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),c.push(Ca(l,e,{...o,delay:n+(typeof s=="function"?0:s)+vp(t.variantChildren,l,s,i,r)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(c)}function ZT(t,e,n={}){t.notify("AnimationStart",e);let s;if(Array.isArray(e)){const i=e.map(r=>Ca(t,r,n));s=Promise.all(i)}else if(typeof e=="string")s=Ca(t,e,n);else{const i=typeof e=="function"?mn(t,e,n.custom):e;s=Promise.all(bp(t,i,n))}return s.then(()=>{t.notify("AnimationComplete",e)})}const ew={test:t=>t==="auto",parse:t=>t},Sp=t=>e=>e.test(t),Pp=[ss,U,pt,Lt,Rv,Cv,ew],qu=t=>Pp.find(Sp(t));function tw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Ff(t):!0}const nw=new Set(["brightness","contrast","saturate","opacity"]);function sw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(mc)||[];if(!s)return t;const i=n.replace(s,"");let r=nw.has(e)?1:0;return s!==n&&(r*=100),e+"("+r+i+")"}const iw=/\b([a-z-]*)\(.*?\)/gu,Ra={...st,getAnimatableNone:t=>{const e=t.match(iw);return e?e.map(sw).join(" "):t}},xa={...st,getAnimatableNone:t=>{const e=st.parse(t);return st.createTransformer(t)(e.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},Gu={...ss,transform:Math.round},rw={rotate:Lt,rotateX:Lt,rotateY:Lt,rotateZ:Lt,scale:Oi,scaleX:Oi,scaleY:Oi,scaleZ:Oi,skew:Lt,skewX:Lt,skewY:Lt,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:qs,originX:Nu,originY:Nu,originZ:U},Cc={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,top:U,right:U,bottom:U,left:U,inset:U,insetBlock:U,insetBlockStart:U,insetBlockEnd:U,insetInline:U,insetInlineStart:U,insetInlineEnd:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,paddingBlock:U,paddingBlockStart:U,paddingBlockEnd:U,paddingInline:U,paddingInlineStart:U,paddingInlineEnd:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,marginBlock:U,marginBlockStart:U,marginBlockEnd:U,marginInline:U,marginInlineStart:U,marginInlineEnd:U,fontSize:U,backgroundPositionX:U,backgroundPositionY:U,...rw,zIndex:Gu,fillOpacity:qs,strokeOpacity:qs,numOctaves:Gu},ow={...Cc,color:he,backgroundColor:he,outlineColor:he,fill:he,stroke:he,borderColor:he,borderTopColor:he,borderRightColor:he,borderBottomColor:he,borderLeftColor:he,filter:Ra,WebkitFilter:Ra,mask:xa,WebkitMask:xa},Cp=t=>ow[t],aw=new Set([Ra,xa]);function Rp(t,e){let n=Cp(t);return aw.has(n)||(n=st),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const cw=new Set(["auto","none","0"]);function lw(t,e,n){let s=0,i;for(;s<t.length&&!i;){const r=t[s];typeof r=="string"&&!cw.has(r)&&Yn(r).values.length&&(i=t[s]),s++}if(i&&n)for(const r of e)t[r]=Rp(n,i)}class uw extends wc{constructor(e,n,s,i,r){super(e,n,s,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let p=e[d];if(typeof p=="string"&&(p=p.trim(),pc(p))){const m=Tp(p,n.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Ep.has(s)||e.length!==2)return;const[i,r]=e,o=qu(i),c=qu(r),l=Du(i),h=Du(r);if(l!==h&&zt[s]){this.needsMeasurement=!0;return}if(o!==c)if($u(o)&&$u(c))for(let d=0;d<e.length;d++){const p=e[d];typeof p=="string"&&(e[d]=parseFloat(p))}else zt[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,s=[];for(let i=0;i<e.length;i++)(e[i]===null||tw(e[i]))&&s.push(i);s.length&&lw(e,s,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:s}=this;if(!e||!e.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=zt[s](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(s,i).jump(i,!1)}measureEndState(){var c;const{element:e,name:n,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const r=s.length-1,o=s[r];s[r]=zt[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(c=this.removedTransforms)!=null&&c.length&&this.removedTransforms.forEach(([l,h])=>{e.getValue(l).set(h)}),this.resolveNoneKeyframes()}}function xp(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const i=document.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(s=>s!=null)}const kp=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Os(t){return Lf(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Rc}=Yf(queueMicrotask,!1),Ye={x:!1,y:!1};function Vp(){return Ye.x||Ye.y}function hw(t){return t==="x"||t==="y"?Ye[t]?null:(Ye[t]=!0,()=>{Ye[t]=!1}):Ye.x||Ye.y?null:(Ye.x=Ye.y=!0,()=>{Ye.x=Ye.y=!1})}function Dp(t,e){const n=xp(t),s=new AbortController,i={passive:!0,...e,signal:s.signal};return[n,i,()=>s.abort()]}function dw(t){return!(t.pointerType==="touch"||Vp())}function fw(t,e,n={}){const[s,i,r]=Dp(t,n);return s.forEach(o=>{let c=!1,l=!1,h;const d=()=>{o.removeEventListener("pointerleave",b)},p=R=>{h&&(h(R),h=void 0),d()},m=R=>{c=!1,window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),l&&(l=!1,p(R))},T=()=>{c=!0,window.addEventListener("pointerup",m,i),window.addEventListener("pointercancel",m,i)},b=R=>{if(R.pointerType!=="touch"){if(c){l=!0;return}p(R)}},x=R=>{if(!dw(R))return;l=!1;const k=e(o,R);typeof k=="function"&&(h=k,o.addEventListener("pointerleave",b,i))};o.addEventListener("pointerenter",x,i),o.addEventListener("pointerdown",T,i)}),r}const Np=(t,e)=>e?t===e?!0:Np(t,e.parentElement):!1,xc=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,pw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function mw(t){return pw.has(t.tagName)||t.isContentEditable===!0}const gw=new Set(["INPUT","SELECT","TEXTAREA"]);function yw(t){return gw.has(t.tagName)||t.isContentEditable===!0}const Yi=new WeakSet;function Xu(t){return e=>{e.key==="Enter"&&t(e)}}function Bo(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const _w=(t,e)=>{const n=t.currentTarget;if(!n)return;const s=Xu(()=>{if(Yi.has(n))return;Bo(n,"down");const i=Xu(()=>{Bo(n,"up")}),r=()=>Bo(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",r,e)});n.addEventListener("keydown",s,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),e)};function Yu(t){return xc(t)&&!Vp()}const Qu=new WeakSet;function vw(t,e,n={}){const[s,i,r]=Dp(t,n),o=c=>{const l=c.currentTarget;if(!Yu(c)||Qu.has(c))return;Yi.add(l),n.stopPropagation&&Qu.add(c);const h=e(l,c),d=(T,b)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",m),Yi.has(l)&&Yi.delete(l),Yu(T)&&typeof h=="function"&&h(T,{success:b})},p=T=>{d(T,l===window||l===document||n.useGlobalTarget||Np(l,T.target))},m=T=>{d(T,!1)};window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",m,i)};return s.forEach(c=>{(n.useGlobalTarget?window:c).addEventListener("pointerdown",o,i),Os(c)&&(c.addEventListener("focus",h=>_w(h,i)),!mw(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),r}function kc(t){return Lf(t)&&"ownerSVGElement"in t}const Qi=new WeakMap;let Ft;const Mp=(t,e,n)=>(s,i)=>i&&i[0]?i[0][t+"Size"]:kc(s)&&"getBBox"in s?s.getBBox()[e]:s[n],Tw=Mp("inline","width","offsetWidth"),ww=Mp("block","height","offsetHeight");function Ew({target:t,borderBoxSize:e}){var n;(n=Qi.get(t))==null||n.forEach(s=>{s(t,{get width(){return Tw(t,e)},get height(){return ww(t,e)}})})}function Iw(t){t.forEach(Ew)}function Aw(){typeof ResizeObserver>"u"||(Ft=new ResizeObserver(Iw))}function bw(t,e){Ft||Aw();const n=xp(t);return n.forEach(s=>{let i=Qi.get(s);i||(i=new Set,Qi.set(s,i)),i.add(e),Ft==null||Ft.observe(s)}),()=>{n.forEach(s=>{const i=Qi.get(s);i==null||i.delete(e),i!=null&&i.size||Ft==null||Ft.unobserve(s)})}}const Ji=new Set;let Fn;function Sw(){Fn=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ji.forEach(e=>e(t))},window.addEventListener("resize",Fn)}function Pw(t){return Ji.add(t),Fn||Sw(),()=>{Ji.delete(t),!Ji.size&&typeof Fn=="function"&&(window.removeEventListener("resize",Fn),Fn=void 0)}}function ka(t,e){return typeof t=="function"?Pw(t):bw(t,e)}function Op(t,e){let n;const s=()=>{const{currentTime:i}=e,o=(i===null?0:i.value)/100;n!==o&&t(o),n=o};return X.preUpdate(s,!0),()=>Ge(s)}function Cw(t){return kc(t)&&t.tagName==="svg"}function Rw(...t){const e=!Array.isArray(t[0]),n=e?0:-1,s=t[0+n],i=t[1+n],r=t[2+n],o=t[3+n],c=vc(i,r,o);return e?c(s):c}function xw(t,e,n={}){const s=t.get();let i=null,r=s,o;const c=typeof s=="string"?s.replace(/[\d.-]/g,""):void 0,l=()=>{i&&(i.stop(),i=null),t.animation=void 0},h=()=>{const p=Ju(t.get()),m=Ju(r);if(p===m){l();return}const T=i?i.getGeneratorVelocity():t.getVelocity();l(),i=new Gs({keyframes:[p,m],velocity:T,type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:o})},d=()=>{var p;h(),t.animation=i??void 0,(p=t.events.animationStart)==null||p.notify(),i==null||i.then(()=>{var m;t.animation=void 0,(m=t.events.animationComplete)==null||m.notify()})};if(t.attach((p,m)=>{r=p,o=T=>m($o(T,c)),X.postRender(d)},l),me(e)){let p=n.skipInitialAnimation===!0;const m=e.on("change",b=>{p?(p=!1,t.jump($o(b,c),!1)):t.set($o(b,c))}),T=t.on("destroy",m);return()=>{m(),T()}}return l}function $o(t,e){return e?t+e:t}function Ju(t){return typeof t=="number"?t:parseFloat(t)}const kw=[...Pp,he,st],Vw=t=>kw.find(Sp(t)),Zu=()=>({translate:0,scale:1,origin:0,originPoint:0}),jn=()=>({x:Zu(),y:Zu()}),eh=()=>({min:0,max:0}),pe=()=>({x:eh(),y:eh()}),Dw=new WeakMap;function qr(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Xs(t){return typeof t=="string"||Array.isArray(t)}const Vc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dc=["initial",...Vc];function Gr(t){return qr(t.animate)||Dc.some(e=>Xs(t[e]))}function Lp(t){return!!(Gr(t)||t.variants)}function Nw(t,e,n){for(const s in e){const i=e[s],r=n[s];if(me(i))t.addValue(s,i);else if(me(r))t.addValue(s,et(i,{owner:t}));else if(r!==i)if(t.hasValue(s)){const o=t.getValue(s);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(s);t.addValue(s,et(o!==void 0?o:i,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Va={current:null},Fp={current:!1},Mw=typeof window<"u";function Ow(){if(Fp.current=!0,!!Mw)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Va.current=t.matches;t.addEventListener("change",e),e()}else Va.current=!1}const th=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let yr={};function jp(t){yr=t}function Lw(){return yr}class Fw{scrapeMotionValuesFromProps(e,n,s){return{}}constructor({parent:e,props:n,presenceContext:s,reducedMotionConfig:i,skipAnimations:r,blockInitialAnimation:o,visualState:c},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=wc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=Ne.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,X.render(this.render,!1,!0))};const{latestValues:h,renderState:d}=c;this.latestValues=h,this.baseTarget={...h},this.initialValues=n.initial?{...h}:{},this.renderState=d,this.parent=e,this.props=n,this.presenceContext=s,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=r,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Gr(n),this.isVariantNode=Lp(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...m}=this.scrapeMotionValuesFromProps(n,{},this);for(const T in m){const b=m[T];h[T]!==void 0&&me(b)&&b.set(h[T])}}mount(e){var n,s;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,Dw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Fp.current||Ow(),this.shouldReduceMotion=Va.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Ge(this.notifyUpdate),Ge(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&_p.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:c,times:l,ease:h,duration:d}=n.accelerate,p=new gp({element:this.current,name:e,keyframes:c,times:l,ease:h,duration:ze(d)}),m=o(p);this.valueSubscriptions.set(e,()=>{m(),p.cancel()});return}const s=rs.has(e);s&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&X.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;typeof window<"u"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),r&&r(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in yr){const n=yr[e];if(!n)continue;const{isEnabled:s,Feature:i}=n;if(!this.features[e]&&i&&s(this.props)&&(this.features[e]=new i(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<th.length;s++){const i=th[s];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const r="on"+i,o=e[r];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Nw(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const s=this.values.get(e);n!==s&&(s&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let s=this.values.get(e);return s===void 0&&n!==void 0&&(s=et(n===null?void 0:n,{owner:this}),this.addValue(e,s)),s}readValue(e,n){let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Of(s)||Ff(s))?s=parseFloat(s):!Vw(s)&&st.test(n)&&(s=Rp(e,n)),this.setBaseTarget(e,me(s)?s.get():s)),me(s)?s.get():s}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var r;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const o=Sc(this.props,n,(r=this.presenceContext)==null?void 0:r.custom);o&&(s=o[e])}if(n&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!me(i)?i:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new uc),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Rc.render(this.render)}}class Up extends Fw{constructor(){super(...arguments),this.KeyframeResolver=uw}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const s=e.style;return s?s[n]:void 0}removeValueFromRenderState(e,{vars:n,style:s}){delete n[e],delete s[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;me(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class en{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Bp({top:t,left:e,right:n,bottom:s}){return{x:{min:e,max:n},y:{min:t,max:s}}}function jw({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Uw(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),s=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function zo(t){return t===void 0||t===1}function Da({scale:t,scaleX:e,scaleY:n}){return!zo(t)||!zo(e)||!zo(n)}function cn(t){return Da(t)||$p(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function $p(t){return nh(t.x)||nh(t.y)}function nh(t){return t&&t!=="0%"}function _r(t,e,n){const s=t-n,i=e*s;return n+i}function sh(t,e,n,s,i){return i!==void 0&&(t=_r(t,i,s)),_r(t,n,s)+e}function Na(t,e=0,n=1,s,i){t.min=sh(t.min,e,n,s,i),t.max=sh(t.max,e,n,s,i)}function zp(t,{x:e,y:n}){Na(t.x,e.translate,e.scale,e.originPoint),Na(t.y,n.translate,n.scale,n.originPoint)}const ih=.999999999999,rh=1.0000000000001;function Bw(t,e,n,s=!1){var c;const i=n.length;if(!i)return;e.x=e.y=1;let r,o;for(let l=0;l<i;l++){r=n[l],o=r.projectionDelta;const{visualElement:h}=r.options;h&&h.props.style&&h.props.style.display==="contents"||(s&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(ht(t.x,-r.scroll.offset.x),ht(t.y,-r.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,zp(t,o)),s&&cn(r.latestValues)&&Zi(t,r.latestValues,(c=r.layout)==null?void 0:c.layoutBox))}e.x<rh&&e.x>ih&&(e.x=1),e.y<rh&&e.y>ih&&(e.y=1)}function ht(t,e){t.min+=e,t.max+=e}function oh(t,e,n,s,i=.5){const r=ne(t.min,t.max,i);Na(t,e,n,r,s)}function ah(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Zi(t,e,n){const s=n??t;oh(t.x,ah(e.x,s.x),e.scaleX,e.scale,e.originX),oh(t.y,ah(e.y,s.y),e.scaleY,e.scale,e.originY)}function Hp(t,e){return Bp(Uw(t.getBoundingClientRect(),e))}function $w(t,e,n){const s=Hp(t,n),{scroll:i}=e;return i&&(ht(s.x,i.offset.x),ht(s.y,i.offset.y)),s}const zw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Hw=is.length;function Ww(t,e,n){let s="",i=!0;for(let r=0;r<Hw;r++){const o=is[r],c=t[o];if(c===void 0)continue;let l=!0;if(typeof c=="number")l=c===(o.startsWith("scale")?1:0);else{const h=parseFloat(c);l=o.startsWith("scale")?h===1:h===0}if(!l||n){const h=kp(c,Cc[o]);if(!l){i=!1;const d=zw[o]||o;s+=`${d}(${h}) `}n&&(e[o]=h)}}return s=s.trim(),n?s=n(e,i?"":s):i&&(s="none"),s}function Nc(t,e,n){const{style:s,vars:i,transformOrigin:r}=t;let o=!1,c=!1;for(const l in e){const h=e[l];if(rs.has(l)){o=!0;continue}else if(Jf(l)){i[l]=h;continue}else{const d=kp(h,Cc[l]);l.startsWith("origin")?(c=!0,r[l]=d):s[l]=d}}if(e.transform||(o||n?s.transform=Ww(e,t.transform,n):s.transform&&(s.transform="none")),c){const{originX:l="50%",originY:h="50%",originZ:d=0}=r;s.transformOrigin=`${l} ${h} ${d}`}}function Wp(t,{style:e,vars:n},s,i){const r=t.style;let o;for(o in e)r[o]=e[o];i==null||i.applyProjectionStyles(r,s);for(o in n)r.setProperty(o,n[o])}function ch(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ss={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(U.test(t))t=parseFloat(t);else return t;const n=ch(t,e.target.x),s=ch(t,e.target.y);return`${n}% ${s}%`}},Kw={correct:(t,{treeScale:e,projectionDelta:n})=>{const s=t,i=st.parse(t);if(i.length>5)return s;const r=st.createTransformer(t),o=typeof i[0]!="number"?1:0,c=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=c,i[1+o]/=l;const h=ne(c,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=h),typeof i[3+o]=="number"&&(i[3+o]/=h),r(i)}},Ma={borderRadius:{...Ss,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ss,borderTopRightRadius:Ss,borderBottomLeftRadius:Ss,borderBottomRightRadius:Ss,boxShadow:Kw};function Kp(t,{layout:e,layoutId:n}){return rs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ma[t]||t==="opacity")}function Mc(t,e,n){var o;const s=t.style,i=e==null?void 0:e.style,r={};if(!s)return r;for(const c in s)(me(s[c])||i&&me(i[c])||Kp(c,t)||((o=n==null?void 0:n.getValue(c))==null?void 0:o.liveStyle)!==void 0)&&(r[c]=s[c]);return r}function qw(t){return window.getComputedStyle(t)}class Gw extends Up{constructor(){super(...arguments),this.type="html",this.renderInstance=Wp}readValueFromInstance(e,n){var s;if(rs.has(n))return(s=this.projection)!=null&&s.isProjecting?Ta(n):fT(e,n);{const i=qw(e),r=(Jf(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Hp(e,n)}build(e,n,s){Nc(e,n,s.transformTemplate)}scrapeMotionValuesFromProps(e,n,s){return Mc(e,n,s)}}const Xw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Yw={offset:"strokeDashoffset",array:"strokeDasharray"};function Qw(t,e,n=1,s=0,i=!0){t.pathLength=1;const r=i?Xw:Yw;t[r.offset]=`${-s}`,t[r.array]=`${e} ${n}`}const Jw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function qp(t,{attrX:e,attrY:n,attrScale:s,pathLength:i,pathSpacing:r=1,pathOffset:o=0,...c},l,h,d){if(Nc(t,c,h),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:m}=t;p.transform&&(m.transform=p.transform,delete p.transform),(m.transform||p.transformOrigin)&&(m.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),m.transform&&(m.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete p.transformBox);for(const T of Jw)p[T]!==void 0&&(m[T]=p[T],delete p[T]);e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),s!==void 0&&(p.scale=s),i!==void 0&&Qw(p,i,r,o,!1)}const Gp=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Xp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Zw(t,e,n,s){Wp(t,e,void 0,s);for(const i in e.attrs)t.setAttribute(Gp.has(i)?i:Pc(i),e.attrs[i])}function Yp(t,e,n){const s=Mc(t,e,n);for(const i in t)if(me(t[i])||me(e[i])){const r=is.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;s[r]=t[i]}return s}class e0 extends Up{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pe}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(rs.has(n)){const s=Cp(n);return s&&s.default||0}return n=Gp.has(n)?n:Pc(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,s){return Yp(e,n,s)}build(e,n,s){qp(e,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(e,n,s,i){Zw(e,n,s,i)}mount(e){this.isSVGTag=Xp(e.tagName),super.mount(e)}}const t0=Dc.length;function Qp(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?Qp(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<t0;n++){const s=Dc[n],i=t.props[s];(Xs(i)||i===!1)&&(e[s]=i)}return e}function Jp(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1;return!0}const n0=[...Vc].reverse(),s0=Vc.length;function i0(t){return e=>Promise.all(e.map(({animation:n,options:s})=>ZT(t,n,s)))}function r0(t){let e=i0(t),n=lh(),s=!0,i=!1;const r=h=>(d,p)=>{var T;const m=mn(t,p,h==="exit"?(T=t.presenceContext)==null?void 0:T.custom:void 0);if(m){const{transition:b,transitionEnd:x,...R}=m;d={...d,...R,...x}}return d};function o(h){e=h(t)}function c(h){const{props:d}=t,p=Qp(t.parent)||{},m=[],T=new Set;let b={},x=1/0;for(let k=0;k<s0;k++){const M=n0[k],O=n[M],F=d[M]!==void 0?d[M]:p[M],j=Xs(F),H=M===h?O.isActive:null;H===!1&&(x=k);let A=F===p[M]&&F!==d[M]&&j;if(A&&(s||i)&&t.manuallyAnimateOnMount&&(A=!1),O.protectedKeys={...b},!O.isActive&&H===null||!F&&!O.prevProp||qr(F)||typeof F=="boolean")continue;if(M==="exit"&&O.isActive&&H!==!0){O.prevResolvedValues&&(b={...b,...O.prevResolvedValues});continue}const y=o0(O.prevProp,F);let v=y||M===h&&O.isActive&&!A&&j||k>x&&j,E=!1;const I=Array.isArray(F)?F:[F];let S=I.reduce(r(M),{});H===!1&&(S={});const{prevResolvedValues:w={}}=O,ee={...w,...S},Te=oe=>{v=!0,T.has(oe)&&(E=!0,T.delete(oe)),O.needsAnimating[oe]=!0;const we=t.getValue(oe);we&&(we.liveStyle=!1)};for(const oe in ee){const we=S[oe],wt=w[oe];if(b.hasOwnProperty(oe))continue;let Et=!1;Sa(we)&&Sa(wt)?Et=!Jp(we,wt):Et=we!==wt,Et?we!=null?Te(oe):T.add(oe):we!==void 0&&T.has(oe)?Te(oe):O.protectedKeys[oe]=!0}O.prevProp=F,O.prevResolvedValues=S,O.isActive&&(b={...b,...S}),(s||i)&&t.blockInitialAnimation&&(v=!1);const We=A&&y;v&&(!We||E)&&m.push(...I.map(oe=>{const we={type:M};if(typeof oe=="string"&&(s||i)&&!We&&t.manuallyAnimateOnMount&&t.parent){const{parent:wt}=t,Et=mn(wt,oe);if(wt.enteringChildren&&Et){const{delayChildren:wi}=Et.transition||{};we.delay=vp(wt.enteringChildren,t,wi)}}return{animation:oe,options:we}}))}if(T.size){const k={};if(typeof d.initial!="boolean"){const M=mn(t,Array.isArray(d.initial)?d.initial[0]:d.initial);M&&M.transition&&(k.transition=M.transition)}T.forEach(M=>{const O=t.getBaseTarget(M),F=t.getValue(M);F&&(F.liveStyle=!0),k[M]=O??null}),m.push({animation:k})}let R=!!m.length;return s&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(R=!1),s=!1,i=!1,R?e(m):Promise.resolve()}function l(h,d){var m;if(n[h].isActive===d)return Promise.resolve();(m=t.variantChildren)==null||m.forEach(T=>{var b;return(b=T.animationState)==null?void 0:b.setActive(h,d)}),n[h].isActive=d;const p=c(h);for(const T in n)n[T].protectedKeys={};return p}return{animateChanges:c,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=lh(),i=!0}}}function o0(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Jp(e,t):!1}function an(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lh(){return{animate:an(!0),whileInView:an(),whileHover:an(),whileTap:an(),whileDrag:an(),whileFocus:an(),exit:an()}}function Oa(t,e){t.min=e.min,t.max=e.max}function Xe(t,e){Oa(t.x,e.x),Oa(t.y,e.y)}function uh(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const Zp=1e-4,a0=1-Zp,c0=1+Zp,em=.01,l0=0-em,u0=0+em;function Me(t){return t.max-t.min}function h0(t,e,n){return Math.abs(t-e)<=n}function hh(t,e,n,s=.5){t.origin=s,t.originPoint=ne(e.min,e.max,t.origin),t.scale=Me(n)/Me(e),t.translate=ne(n.min,n.max,t.origin)-t.originPoint,(t.scale>=a0&&t.scale<=c0||isNaN(t.scale))&&(t.scale=1),(t.translate>=l0&&t.translate<=u0||isNaN(t.translate))&&(t.translate=0)}function Ls(t,e,n,s){hh(t.x,e.x,n.x,s?s.originX:void 0),hh(t.y,e.y,n.y,s?s.originY:void 0)}function dh(t,e,n,s=0){const i=s?ne(n.min,n.max,s):n.min;t.min=i+e.min,t.max=t.min+Me(e)}function d0(t,e,n,s){dh(t.x,e.x,n.x,s==null?void 0:s.x),dh(t.y,e.y,n.y,s==null?void 0:s.y)}function fh(t,e,n,s=0){const i=s?ne(n.min,n.max,s):n.min;t.min=e.min-i,t.max=t.min+Me(e)}function vr(t,e,n,s){fh(t.x,e.x,n.x,s==null?void 0:s.x),fh(t.y,e.y,n.y,s==null?void 0:s.y)}function ph(t,e,n,s,i){return t-=e,t=_r(t,1/n,s),i!==void 0&&(t=_r(t,1/i,s)),t}function f0(t,e=0,n=1,s=.5,i,r=t,o=t){if(pt.test(e)&&(e=parseFloat(e),e=ne(o.min,o.max,e/100)-o.min),typeof e!="number")return;let c=ne(r.min,r.max,s);t===r&&(c-=e),t.min=ph(t.min,e,n,c,i),t.max=ph(t.max,e,n,c,i)}function mh(t,e,[n,s,i],r,o){f0(t,e[n],e[s],e[i],e.scale,r,o)}const p0=["x","scaleX","originX"],m0=["y","scaleY","originY"];function gh(t,e,n,s){mh(t.x,e,p0,n?n.x:void 0,s?s.x:void 0),mh(t.y,e,m0,n?n.y:void 0,s?s.y:void 0)}function yh(t){return t.translate===0&&t.scale===1}function tm(t){return yh(t.x)&&yh(t.y)}function _h(t,e){return t.min===e.min&&t.max===e.max}function g0(t,e){return _h(t.x,e.x)&&_h(t.y,e.y)}function vh(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function nm(t,e){return vh(t.x,e.x)&&vh(t.y,e.y)}function Th(t){return Me(t.x)/Me(t.y)}function wh(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function lt(t){return[t("x"),t("y")]}function y0(t,e,n){let s="";const i=t.x.translate/e.x,r=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||r||o)&&(s=`translate3d(${i}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(s+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:h,rotate:d,rotateX:p,rotateY:m,skewX:T,skewY:b}=n;h&&(s=`perspective(${h}px) ${s}`),d&&(s+=`rotate(${d}deg) `),p&&(s+=`rotateX(${p}deg) `),m&&(s+=`rotateY(${m}deg) `),T&&(s+=`skewX(${T}deg) `),b&&(s+=`skewY(${b}deg) `)}const c=t.x.scale*e.x,l=t.y.scale*e.y;return(c!==1||l!==1)&&(s+=`scale(${c}, ${l})`),s||"none"}const sm=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],_0=sm.length,Eh=t=>typeof t=="string"?parseFloat(t):t,Ih=t=>typeof t=="number"||U.test(t);function v0(t,e,n,s,i,r){i?(t.opacity=ne(0,n.opacity??1,T0(s)),t.opacityExit=ne(e.opacity??1,0,w0(s))):r&&(t.opacity=ne(e.opacity??1,n.opacity??1,s));for(let o=0;o<_0;o++){const c=sm[o];let l=Ah(e,c),h=Ah(n,c);if(l===void 0&&h===void 0)continue;l||(l=0),h||(h=0),l===0||h===0||Ih(l)===Ih(h)?(t[c]=Math.max(ne(Eh(l),Eh(h),s),0),(pt.test(h)||pt.test(l))&&(t[c]+="%")):t[c]=h}(e.rotate||n.rotate)&&(t.rotate=ne(e.rotate||0,n.rotate||0,s))}function Ah(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const T0=im(0,.5,Kf),w0=im(.5,.95,Fe);function im(t,e,n){return s=>s<t?0:s>e?1:n(Xn(t,e,s))}function E0(t,e,n){const s=me(t)?t:et(t);return s.start(bc("",s,e,n)),s.animation}function Ys(t,e,n,s={passive:!0}){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n)}const I0=(t,e)=>t.depth-e.depth;class A0{constructor(){this.children=[],this.isDirty=!1}add(e){lc(this.children,e),this.isDirty=!0}remove(e){fr(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(I0),this.isDirty=!1,this.children.forEach(e)}}function b0(t,e){const n=Ne.now(),s=({timestamp:i})=>{const r=i-n;r>=e&&(Ge(s),t(r-e))};return X.setup(s,!0),()=>Ge(s)}function er(t){return me(t)?t.get():t}class S0{constructor(){this.members=[]}add(e){lc(this.members,e);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===e||s===this.lead||s===this.prevLead)continue;const i=s.instance;(!i||i.isConnected===!1)&&!s.snapshot&&(fr(this.members,s),s.unmount())}e.scheduleRender()}remove(e){if(fr(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let s=this.members.indexOf(e)-1;s>=0;s--){const i=this.members[s];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(e,n){var i;const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=s.options,{layoutDependency:o}=e.options;(r===void 0||r!==o)&&(e.resumeFrom=s,n&&(s.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),(i=e.root)!=null&&i.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,s,i,r,o;(s=(n=e.options).onExitComplete)==null||s.call(n),(o=(i=e.resumingFrom)==null?void 0:(r=i.options).onExitComplete)==null||o.call(r)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const tr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ho=["","X","Y","Z"],P0=1e3;let C0=0;function Wo(t,e,n,s){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),s&&(s[t]=0))}function rm(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Ap(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:r}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",X,!(i||r))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&rm(s)}function om({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:s,resetTransform:i}){return class{constructor(o={},c=e==null?void 0:e()){this.id=C0++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(k0),this.nodes.forEach(L0),this.nodes.forEach(F0),this.nodes.forEach(V0)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new A0)}addEventListener(o,c){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new uc),this.eventHandlers.get(o).add(c)}notifyListeners(o,...c){const l=this.eventHandlers.get(o);l&&l.notify(...c)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=kc(o)&&!Cw(o),this.instance=o;const{layoutId:c,layout:l,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||c)&&(this.isLayoutDirty=!0),t){let d,p=0;const m=()=>this.root.updateBlockedByResize=!1;X.read(()=>{p=window.innerWidth}),t(o,()=>{const T=window.innerWidth;T!==p&&(p=T,this.root.updateBlockedByResize=!0,d&&d(),d=b0(m,250),tr.hasAnimatedSinceResize&&(tr.hasAnimatedSinceResize=!1,this.nodes.forEach(Ph)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&h&&(c||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:m,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||z0,{onLayoutAnimationStart:x,onLayoutAnimationComplete:R}=h.getProps(),k=!this.targetLayout||!nm(this.targetLayout,T),M=!p&&m;if(this.options.layoutRoot||this.resumeFrom||M||p&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...Ac(b,"layout"),onPlay:x,onComplete:R};(h.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(d,M)}else p||Ph(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ge(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(j0),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&rm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,(typeof p.latestValues.x=="string"||typeof p.latestValues.y=="string")&&(p.isLayoutDirty=!0),p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:c,layout:l}=this.options;if(c===void 0&&!l)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(N0),this.nodes.forEach(bh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Sh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(M0),this.nodes.forEach(O0),this.nodes.forEach(R0),this.nodes.forEach(x0)):this.nodes.forEach(Sh),this.clearAllSnapshots();const c=Ne.now();ye.delta=it(0,1e3/60,c-ye.timestamp),ye.timestamp=c,ye.isProcessing=!0,Mo.update.process(ye),Mo.preRender.process(ye),Mo.render.process(ye),ye.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Rc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(D0),this.sharedNodes.forEach(U0)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,X.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){X.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Me(this.snapshot.measuredBox.x)&&!Me(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=pe()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(c=!1),c&&this.instance){const l=s(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!tm(this.projectionDelta),l=this.getTransformTemplate(),h=l?l(this.latestValues,""):void 0,d=h!==this.prevTransformTemplateValue;o&&this.instance&&(c||cn(this.latestValues)||d)&&(i(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const c=this.measurePageBox();let l=this.removeElementScroll(c);return o&&(l=this.removeTransform(l)),H0(l),{animationId:this.root.animationId,measuredBox:c,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:o}=this.options;if(!o)return pe();const c=o.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(W0))){const{scroll:d}=this.root;d&&(ht(c.x,d.offset.x),ht(c.y,d.offset.y))}return c}removeElementScroll(o){var l;const c=pe();if(Xe(c,o),(l=this.scroll)!=null&&l.wasRoot)return c;for(let h=0;h<this.path.length;h++){const d=this.path[h],{scroll:p,options:m}=d;d!==this.root&&p&&m.layoutScroll&&(p.wasRoot&&Xe(c,o),ht(c.x,p.offset.x),ht(c.y,p.offset.y))}return c}applyTransform(o,c=!1,l){var d,p;const h=l||pe();Xe(h,o);for(let m=0;m<this.path.length;m++){const T=this.path[m];!c&&T.options.layoutScroll&&T.scroll&&T!==T.root&&(ht(h.x,-T.scroll.offset.x),ht(h.y,-T.scroll.offset.y)),cn(T.latestValues)&&Zi(h,T.latestValues,(d=T.layout)==null?void 0:d.layoutBox)}return cn(this.latestValues)&&Zi(h,this.latestValues,(p=this.layout)==null?void 0:p.layoutBox),h}removeTransform(o){var l;const c=pe();Xe(c,o);for(let h=0;h<this.path.length;h++){const d=this.path[h];if(!cn(d.latestValues))continue;let p;d.instance&&(Da(d.latestValues)&&d.updateSnapshot(),p=pe(),Xe(p,d.measurePageBox())),gh(c,d.latestValues,(l=d.snapshot)==null?void 0:l.layoutBox,p)}return cn(this.latestValues)&&gh(c,this.latestValues),c}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ye.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var T;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==c;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:p}=this.options;if(!this.layout||!(d||p))return;this.resolvedRelativeTargetAt=ye.timestamp;const m=this.getClosestProjectingParent();m&&this.linkedParentVersion!==m.layoutVersion&&!m.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&m&&m.layout?this.createRelativeTarget(m,this.layout.layoutBox,m.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=pe(),this.targetWithTransforms=pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),d0(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Xe(this.target,this.layout.layoutBox),zp(this.target,this.targetDelta)):Xe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?this.createRelativeTarget(m,this.target,m.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Da(this.parent.latestValues)||$p(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,c,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),vr(this.relativeTargetOrigin,c,l,this.options.layoutAnchor||void 0),Xe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var b;const o=this.getLead(),c=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(l=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===ye.timestamp&&(l=!1),l)return;const{layout:h,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||d))return;Xe(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;Bw(this.layoutCorrected,this.treeScale,this.path,c),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=pe());const{target:T}=o;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(uh(this.prevProjectionDelta.x,this.projectionDelta.x),uh(this.prevProjectionDelta.y,this.projectionDelta.y)),Ls(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==m||!wh(this.projectionDelta.x,this.prevProjectionDelta.x)||!wh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var c;if((c=this.options.visualElement)==null||c.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=jn(),this.projectionDelta=jn(),this.projectionDeltaWithTransform=jn()}setAnimationOrigin(o,c=!1){const l=this.snapshot,h=l?l.latestValues:{},d={...this.latestValues},p=jn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const m=pe(),T=l?l.source:void 0,b=this.layout?this.layout.source:void 0,x=T!==b,R=this.getStack(),k=!R||R.members.length<=1,M=!!(x&&!k&&this.options.crossfade===!0&&!this.path.some($0));this.animationProgress=0;let O;this.mixTargetDelta=F=>{const j=F/1e3;Ch(p.x,o.x,j),Ch(p.y,o.y,j),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(vr(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),B0(this.relativeTarget,this.relativeTargetOrigin,m,j),O&&g0(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=pe()),Xe(O,this.relativeTarget)),x&&(this.animationValues=d,v0(d,h,this.latestValues,j,M,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var c,l,h;this.notifyListeners("animationStart"),(c=this.currentAnimation)==null||c.stop(),(h=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Ge(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=X.update(()=>{tr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=et(0)),this.motionValue.jump(0,!1),this.currentAnimation=E0(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),o.onUpdate&&o.onUpdate(d)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(P0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:c,target:l,layout:h,latestValues:d}=o;if(!(!c||!l||!h)){if(this!==o&&this.layout&&h&&am(this.options.animationType,this.layout.layoutBox,h.layoutBox)){l=this.target||pe();const p=Me(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+p;const m=Me(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+m}Xe(c,l),Zi(c,d),Ls(this.projectionDeltaWithTransform,this.layoutCorrected,c,d)}}registerSharedNode(o,c){this.sharedNodes.has(o)||this.sharedNodes.set(o,new S0),this.sharedNodes.get(o).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var c;const{layoutId:o}=this.options;return o?((c=this.getStack())==null?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:o}=this.options;return o?(c=this.getStack())==null?void 0:c.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:c,preserveFollowOpacity:l}={}){const h=this.getStack();h&&h.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let c=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(c=!0),!c)return;const h={};l.z&&Wo("z",o,h,this.animationValues);for(let d=0;d<Ho.length;d++)Wo(`rotate${Ho[d]}`,o,h,this.animationValues),Wo(`skew${Ho[d]}`,o,h,this.animationValues);o.render();for(const d in h)o.setStaticValue(d,h[d]),this.animationValues&&(this.animationValues[d]=h[d]);o.scheduleRender()}applyProjectionStyles(o,c){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=er(c==null?void 0:c.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=er(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!cn(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const d=h.animationValues||h.latestValues;this.applyTransformsToTarget();let p=y0(this.projectionDeltaWithTransform,this.treeScale,d);l&&(p=l(d,p)),o.transform=p;const{x:m,y:T}=this.projectionDelta;o.transformOrigin=`${m.origin*100}% ${T.origin*100}% 0`,h.animationValues?o.opacity=h===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:o.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const b in Ma){if(d[b]===void 0)continue;const{correct:x,applyTo:R,isCSSVariable:k}=Ma[b],M=p==="none"?d[b]:x(d[b],h);if(R){const O=R.length;for(let F=0;F<O;F++)o[R[F]]=M}else k?this.options.visualElement.renderState.vars[b]=M:o[b]=M}this.options.layoutId&&(o.pointerEvents=h===this?er(c==null?void 0:c.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var c;return(c=o.currentAnimation)==null?void 0:c.stop()}),this.root.nodes.forEach(bh),this.root.sharedNodes.clear()}}}function R0(t){t.updateLayout()}function x0(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:i}=t.layout,{animationType:r}=t.options,o=e.source!==t.layout.source;if(r==="size")lt(p=>{const m=o?e.measuredBox[p]:e.layoutBox[p],T=Me(m);m.min=s[p].min,m.max=m.min+T});else if(r==="x"||r==="y"){const p=r==="x"?"y":"x";Oa(o?e.measuredBox[p]:e.layoutBox[p],s[p])}else am(r,e.layoutBox,s)&&lt(p=>{const m=o?e.measuredBox[p]:e.layoutBox[p],T=Me(s[p]);m.max=m.min+T,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[p].max=t.relativeTarget[p].min+T)});const c=jn();Ls(c,s,e.layoutBox);const l=jn();o?Ls(l,t.applyTransform(i,!0),e.measuredBox):Ls(l,s,e.layoutBox);const h=!tm(c);let d=!1;if(!t.resumeFrom){const p=t.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:m,layout:T}=p;if(m&&T){const b=t.options.layoutAnchor||void 0,x=pe();vr(x,e.layoutBox,m.layoutBox,b);const R=pe();vr(R,s,T.layoutBox,b),nm(x,R)||(d=!0),p.options.layoutRoot&&(t.relativeTarget=R,t.relativeTargetOrigin=x,t.relativeParent=p)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:e,delta:l,layoutDelta:c,hasLayoutChanged:h,hasRelativeLayoutChanged:d})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function k0(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function V0(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function D0(t){t.clearSnapshot()}function bh(t){t.clearMeasurements()}function N0(t){t.isLayoutDirty=!0,t.updateLayout()}function Sh(t){t.isLayoutDirty=!1}function M0(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function O0(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ph(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function L0(t){t.resolveTargetDelta()}function F0(t){t.calcProjection()}function j0(t){t.resetSkewAndRotation()}function U0(t){t.removeLeadSnapshot()}function Ch(t,e,n){t.translate=ne(e.translate,0,n),t.scale=ne(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Rh(t,e,n,s){t.min=ne(e.min,n.min,s),t.max=ne(e.max,n.max,s)}function B0(t,e,n,s){Rh(t.x,e.x,n.x,s),Rh(t.y,e.y,n.y,s)}function $0(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const z0={duration:.45,ease:[.4,0,.1,1]},xh=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),kh=xh("applewebkit/")&&!xh("chrome/")?Math.round:Fe;function Vh(t){t.min=kh(t.min),t.max=kh(t.max)}function H0(t){Vh(t.x),Vh(t.y)}function am(t,e,n){return t==="position"||t==="preserve-aspect"&&!h0(Th(e),Th(n),.2)}function W0(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const K0=om({attachResizeListener:(t,e)=>Ys(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Ko={current:void 0},cm=om({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ko.current){const t=new K0({});t.mount(window),t.setOptions({layoutScroll:!0}),Ko.current=t}return Ko.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),ci=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Dh(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function q0(...t){return e=>{let n=!1;const s=t.map(i=>{const r=Dh(i,e);return!n&&typeof r=="function"&&(n=!0),r});if(n)return()=>{for(let i=0;i<s.length;i++){const r=s[i];typeof r=="function"?r():Dh(t[i],null)}}}}function G0(...t){return N.useCallback(q0(...t),t)}class X0 extends N.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(Os(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,i=Os(s)&&s.offsetWidth||0,r=Os(s)&&s.offsetHeight||0,o=getComputedStyle(n),c=this.props.sizeRef.current;c.height=parseFloat(o.height),c.width=parseFloat(o.width),c.top=n.offsetTop,c.left=n.offsetLeft,c.right=i-c.width-c.left,c.bottom=r-c.height-c.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Y0({children:t,isPresent:e,anchorX:n,anchorY:s,root:i,pop:r}){var m;const o=N.useId(),c=N.useRef(null),l=N.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:h}=N.useContext(ci),d=((m=t.props)==null?void 0:m.ref)??(t==null?void 0:t.ref),p=G0(c,d);return N.useInsertionEffect(()=>{const{width:T,height:b,top:x,left:R,right:k,bottom:M}=l.current;if(e||r===!1||!c.current||!T||!b)return;const O=n==="left"?`left: ${R}`:`right: ${k}`,F=s==="bottom"?`bottom: ${M}`:`top: ${x}`;c.current.dataset.motionPopId=o;const j=document.createElement("style");h&&(j.nonce=h);const H=i??document.head;return H.appendChild(j),j.sheet&&j.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${b}px !important;
            ${O}px !important;
            ${F}px !important;
          }
        `),()=>{var A;(A=c.current)==null||A.removeAttribute("data-motion-pop-id"),H.contains(j)&&H.removeChild(j)}},[e]),_.jsx(X0,{isPresent:e,childRef:c,sizeRef:l,pop:r,children:r===!1?t:N.cloneElement(t,{ref:p})})}const Q0=({children:t,initial:e,isPresent:n,onExitComplete:s,custom:i,presenceAffectsLayout:r,mode:o,anchorX:c,anchorY:l,root:h})=>{const d=qt(J0),p=N.useId();let m=!0,T=N.useMemo(()=>(m=!1,{id:p,initial:e,isPresent:n,custom:i,onExitComplete:b=>{d.set(b,!0);for(const x of d.values())if(!x)return;s&&s()},register:b=>(d.set(b,!1),()=>d.delete(b))}),[n,d,s]);return r&&m&&(T={...T}),N.useMemo(()=>{d.forEach((b,x)=>d.set(x,!1))},[n]),N.useEffect(()=>{!n&&!d.size&&s&&s()},[n]),t=_.jsx(Y0,{pop:o==="popLayout",isPresent:n,anchorX:c,anchorY:l,root:h,children:t}),_.jsx(Wr.Provider,{value:T,children:t})};function J0(){return new Map}function lm(t=!0){const e=N.useContext(Wr);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:i}=e,r=N.useId();N.useEffect(()=>{if(t)return i(r)},[t]);const o=N.useCallback(()=>t&&s&&s(r),[r,s,t]);return!n&&s?[!1,o]:[!0]}const Li=t=>t.key||"";function Nh(t){const e=[];return N.Children.forEach(t,n=>{N.isValidElement(n)&&e.push(n)}),e}const Z0=({children:t,custom:e,initial:n=!0,onExitComplete:s,presenceAffectsLayout:i=!0,mode:r="sync",propagate:o=!1,anchorX:c="left",anchorY:l="top",root:h})=>{const[d,p]=lm(o),m=N.useMemo(()=>Nh(t),[t]),T=o&&!d?[]:m.map(Li),b=N.useRef(!0),x=N.useRef(m),R=qt(()=>new Map),k=N.useRef(new Set),[M,O]=N.useState(m),[F,j]=N.useState(m);Hr(()=>{b.current=!1,x.current=m;for(let y=0;y<F.length;y++){const v=Li(F[y]);T.includes(v)?(R.delete(v),k.current.delete(v)):R.get(v)!==!0&&R.set(v,!1)}},[F,T.length,T.join("-")]);const H=[];if(m!==M){let y=[...m];for(let v=0;v<F.length;v++){const E=F[v],I=Li(E);T.includes(I)||(y.splice(v,0,E),H.push(E))}return r==="wait"&&H.length&&(y=H),j(Nh(y)),O(m),null}const{forceRender:A}=N.useContext(cc);return _.jsx(_.Fragment,{children:F.map(y=>{const v=Li(y),E=o&&!d?!1:m===F||T.includes(v),I=()=>{if(k.current.has(v))return;if(R.has(v))k.current.add(v),R.set(v,!0);else return;let S=!0;R.forEach(w=>{w||(S=!1)}),S&&(A==null||A(),j(x.current),o&&(p==null||p()),s&&s())};return _.jsx(Q0,{isPresent:E,initial:!b.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:r,root:h,onExitComplete:E?void 0:I,anchorX:c,anchorY:l,children:y},v)})})},um=N.createContext({strict:!1}),Mh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Oh=!1;function eE(){if(Oh)return;const t={};for(const e in Mh)t[e]={isEnabled:n=>Mh[e].some(s=>!!n[s])};jp(t),Oh=!0}function hm(){return eE(),Lw()}function tE(t){const e=hm();for(const n in t)e[n]={...e[n],...t[n]};jp(e)}const nE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Tr(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||nE.has(t)}let dm=t=>!Tr(t);function sE(t){typeof t=="function"&&(dm=e=>e.startsWith("on")?!Tr(e):t(e))}try{sE(require("@emotion/is-prop-valid").default)}catch{}function iE(t,e,n){const s={};for(const i in t)i==="values"&&typeof t.values=="object"||me(t[i])||(dm(i)||n===!0&&Tr(i)||!e&&!Tr(i)||t.draggable&&i.startsWith("onDrag"))&&(s[i]=t[i]);return s}const Xr=N.createContext({});function rE(t,e){if(Gr(t)){const{initial:n,animate:s}=t;return{initial:n===!1||Xs(n)?n:void 0,animate:Xs(s)?s:void 0}}return t.inherit!==!1?e:{}}function oE(t){const{initial:e,animate:n}=rE(t,N.useContext(Xr));return N.useMemo(()=>({initial:e,animate:n}),[Lh(e),Lh(n)])}function Lh(t){return Array.isArray(t)?t.join(" "):t}const Oc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function fm(t,e,n){for(const s in e)!me(e[s])&&!Kp(s,n)&&(t[s]=e[s])}function aE({transformTemplate:t},e){return N.useMemo(()=>{const n=Oc();return Nc(n,e,t),Object.assign({},n.vars,n.style)},[e])}function cE(t,e){const n=t.style||{},s={};return fm(s,n,t),Object.assign(s,aE(t,e)),s}function lE(t,e){const n={},s=cE(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=s,n}const pm=()=>({...Oc(),attrs:{}});function uE(t,e,n,s){const i=N.useMemo(()=>{const r=pm();return qp(r,e,Xp(s),t.transformTemplate,t.style),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};fm(r,t.style,t),i.style={...r,...i.style}}return i}const hE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lc(t){return typeof t!="string"||t.includes("-")?!1:!!(hE.indexOf(t)>-1||/[A-Z]/u.test(t))}function dE(t,e,n,{latestValues:s},i,r=!1,o){const l=(o??Lc(t)?uE:lE)(e,s,i,t),h=iE(e,typeof t=="string",r),d=t!==N.Fragment?{...h,...l,ref:n}:{},{children:p}=e,m=N.useMemo(()=>me(p)?p.get():p,[p]);return N.createElement(t,{...d,children:m})}function fE({scrapeMotionValuesFromProps:t,createRenderState:e},n,s,i){return{latestValues:pE(n,s,i,t),renderState:e()}}function pE(t,e,n,s){const i={},r=s(t,{});for(const m in r)i[m]=er(r[m]);let{initial:o,animate:c}=t;const l=Gr(t),h=Lp(t);e&&h&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),c===void 0&&(c=e.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const p=d?c:o;if(p&&typeof p!="boolean"&&!qr(p)){const m=Array.isArray(p)?p:[p];for(let T=0;T<m.length;T++){const b=Sc(t,m[T]);if(b){const{transitionEnd:x,transition:R,...k}=b;for(const M in k){let O=k[M];if(Array.isArray(O)){const F=d?O.length-1:0;O=O[F]}O!==null&&(i[M]=O)}for(const M in x)i[M]=x[M]}}}return i}const mm=t=>(e,n)=>{const s=N.useContext(Xr),i=N.useContext(Wr),r=()=>fE(t,e,s,i);return n?r():qt(r)},mE=mm({scrapeMotionValuesFromProps:Mc,createRenderState:Oc}),gE=mm({scrapeMotionValuesFromProps:Yp,createRenderState:pm}),yE=Symbol.for("motionComponentSymbol");function _E(t,e,n){const s=N.useRef(n);N.useInsertionEffect(()=>{s.current=n});const i=N.useRef(null);return N.useCallback(r=>{var c;r&&((c=t.onMount)==null||c.call(t,r));const o=s.current;if(typeof o=="function")if(r){const l=o(r);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):o(r);else o&&(o.current=r);e&&(r?e.mount(r):e.unmount())},[e])}const gm=N.createContext({});function Nn(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function vE(t,e,n,s,i,r){var O,F;const{visualElement:o}=N.useContext(Xr),c=N.useContext(um),l=N.useContext(Wr),h=N.useContext(ci),d=h.reducedMotion,p=h.skipAnimations,m=N.useRef(null),T=N.useRef(!1);s=s||c.renderer,!m.current&&s&&(m.current=s(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:d,skipAnimations:p,isSVG:r}),T.current&&m.current&&(m.current.manuallyAnimateOnMount=!0));const b=m.current,x=N.useContext(gm);b&&!b.projection&&i&&(b.type==="html"||b.type==="svg")&&TE(m.current,n,i,x);const R=N.useRef(!1);N.useInsertionEffect(()=>{b&&R.current&&b.update(n,l)});const k=n[Ip],M=N.useRef(!!k&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,k))&&((F=window.MotionHasOptimisedAnimation)==null?void 0:F.call(window,k)));return Hr(()=>{T.current=!0,b&&(R.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),M.current&&b.animationState&&b.animationState.animateChanges())}),N.useEffect(()=>{b&&(!M.current&&b.animationState&&b.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var j;(j=window.MotionHandoffMarkAsComplete)==null||j.call(window,k)}),M.current=!1),b.enteringChildren=void 0)}),b}function TE(t,e,n,s){const{layoutId:i,layout:r,drag:o,dragConstraints:c,layoutScroll:l,layoutRoot:h,layoutAnchor:d,layoutCrossfade:p}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:ym(t.parent)),t.projection.setOptions({layoutId:i,layout:r,alwaysMeasureLayout:!!o||c&&Nn(c),visualElement:t,animationType:typeof r=="string"?r:"both",initialPromotionConfig:s,crossfade:p,layoutScroll:l,layoutRoot:h,layoutAnchor:d})}function ym(t){if(t)return t.options.allowProjection!==!1?t.projection:ym(t.parent)}function qo(t,{forwardMotionProps:e=!1,type:n}={},s,i){s&&tE(s);const r=n?n==="svg":Lc(t),o=r?gE:mE;function c(h,d){let p;const m={...N.useContext(ci),...h,layoutId:wE(h)},{isStatic:T}=m,b=oE(h),x=o(h,T);if(!T&&typeof window<"u"){EE();const R=IE(m);p=R.MeasureLayout,b.visualElement=vE(t,x,m,i,R.ProjectionNode,r)}return _.jsxs(Xr.Provider,{value:b,children:[p&&b.visualElement?_.jsx(p,{visualElement:b.visualElement,...m}):null,dE(t,h,_E(x,b.visualElement,d),x,T,e,r)]})}c.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=N.forwardRef(c);return l[yE]=t,l}function wE({layoutId:t}){const e=N.useContext(cc).id;return e&&t!==void 0?e+"-"+t:t}function EE(t,e){N.useContext(um).strict}function IE(t){const e=hm(),{drag:n,layout:s}=e;if(!n&&!s)return{};const i={...n,...s};return{MeasureLayout:n!=null&&n.isEnabled(t)||s!=null&&s.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function AE(t,e){if(typeof Proxy>"u")return qo;const n=new Map,s=(r,o)=>qo(r,o,t,e),i=(r,o)=>s(r,o);return new Proxy(i,{get:(r,o)=>o==="create"?s:(n.has(o)||n.set(o,qo(o,void 0,t,e)),n.get(o))})}const bE=(t,e)=>e.isSVG??Lc(t)?new e0(e):new Gw(e,{allowProjection:t!==N.Fragment});class SE extends en{constructor(e){super(e),e.animationState||(e.animationState=r0(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();qr(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let PE=0;class CE extends en{constructor(){super(...arguments),this.id=PE++,this.isExitComplete=!1}update(){var r;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;if(e&&s===!1){if(this.isExitComplete){const{initial:o,custom:c}=this.node.getProps();if(typeof o=="string"){const l=mn(this.node,o,c);if(l){const{transition:h,transitionEnd:d,...p}=l;for(const m in p)(r=this.node.getValue(m))==null||r.jump(p[m])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const RE={animation:{Feature:SE},exit:{Feature:CE}};function li(t){return{point:{x:t.pageX,y:t.pageY}}}const xE=t=>e=>xc(e)&&t(e,li(e));function Fs(t,e,n,s){return Ys(t,e,xE(n),s)}const _m=({current:t})=>t?t.ownerDocument.defaultView:null,Fh=(t,e)=>Math.abs(t-e);function kE(t,e){const n=Fh(t.x,e.x),s=Fh(t.y,e.y);return Math.sqrt(n**2+s**2)}const jh=new Set(["auto","scroll"]);class vm{constructor(e,n,{transformPagePoint:s,contextWindow:i=window,dragSnapToOrigin:r=!1,distanceThreshold:o=3,element:c}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=T=>{this.handleScroll(T.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Fi(this.lastRawMoveEventInfo,this.transformPagePoint));const T=Go(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,x=kE(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!x)return;const{point:R}=T,{timestamp:k}=ye;this.history.push({...R,timestamp:k});const{onStart:M,onMove:O}=this.handlers;b||(M&&M(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,T)},this.handlePointerMove=(T,b)=>{this.lastMoveEvent=T,this.lastRawMoveEventInfo=b,this.lastMoveEventInfo=Fi(b,this.transformPagePoint),X.update(this.updatePoint,!0)},this.handlePointerUp=(T,b)=>{this.end();const{onEnd:x,onSessionEnd:R,resumeAnimation:k}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=Go(T.type==="pointercancel"?this.lastMoveEventInfo:Fi(b,this.transformPagePoint),this.history);this.startEvent&&x&&x(T,M),R&&R(T,M)},!xc(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=o,this.contextWindow=i||window;const l=li(e),h=Fi(l,this.transformPagePoint),{point:d}=h,{timestamp:p}=ye;this.history=[{...d,timestamp:p}];const{onSessionStart:m}=n;m&&m(e,Go(h,this.history)),this.removeListeners=ri(Fs(this.contextWindow,"pointermove",this.handlePointerMove),Fs(this.contextWindow,"pointerup",this.handlePointerUp),Fs(this.contextWindow,"pointercancel",this.handlePointerUp)),c&&this.startScrollTracking(c)}startScrollTracking(e){let n=e.parentElement;for(;n;){const s=getComputedStyle(n);(jh.has(s.overflowX)||jh.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const s=e===window,i=s?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},r={x:i.x-n.x,y:i.y-n.y};r.x===0&&r.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(e,i),X.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ge(this.updatePoint)}}function Fi(t,e){return e?{point:e(t.point)}:t}function Uh(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Go({point:t},e){return{point:t,delta:Uh(t,Tm(e)),offset:Uh(t,VE(e)),velocity:DE(e,.1)}}function VE(t){return t[0]}function Tm(t){return t[t.length-1]}function DE(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,s=null;const i=Tm(t);for(;n>=0&&(s=t[n],!(i.timestamp-s.timestamp>ze(e)));)n--;if(!s)return{x:0,y:0};s===t[0]&&t.length>2&&i.timestamp-s.timestamp>ze(e)*2&&(s=t[1]);const r=Ke(i.timestamp-s.timestamp);if(r===0)return{x:0,y:0};const o={x:(i.x-s.x)/r,y:(i.y-s.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function NE(t,{min:e,max:n},s){return e!==void 0&&t<e?t=s?ne(e,t,s.min):Math.max(t,e):n!==void 0&&t>n&&(t=s?ne(n,t,s.max):Math.min(t,n)),t}function Bh(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function ME(t,{top:e,left:n,bottom:s,right:i}){return{x:Bh(t.x,n,i),y:Bh(t.y,e,s)}}function $h(t,e){let n=e.min-t.min,s=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,s]=[s,n]),{min:n,max:s}}function OE(t,e){return{x:$h(t.x,e.x),y:$h(t.y,e.y)}}function LE(t,e){let n=.5;const s=Me(t),i=Me(e);return i>s?n=Xn(e.min,e.max-s,t.min):s>i&&(n=Xn(t.min,t.max-i,e.min)),it(0,1,n)}function FE(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const La=.35;function jE(t=La){return t===!1?t=0:t===!0&&(t=La),{x:zh(t,"left","right"),y:zh(t,"top","bottom")}}function zh(t,e,n){return{min:Hh(t,e),max:Hh(t,n)}}function Hh(t,e){return typeof t=="number"?t:t[e]||0}const UE=new WeakMap;class BE{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=p=>{n&&this.snapToCursor(li(p).point),this.stopAnimation()},o=(p,m)=>{const{drag:T,dragPropagation:b,onDragStart:x}=this.getProps();if(T&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=hw(T),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=m,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lt(k=>{let M=this.getAxisMotionValue(k).get()||0;if(pt.test(M)){const{projection:O}=this.visualElement;if(O&&O.layout){const F=O.layout.layoutBox[k];F&&(M=Me(F)*(parseFloat(M)/100))}}this.originPoint[k]=M}),x&&X.update(()=>x(p,m),!1,!0),Pa(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},c=(p,m)=>{this.latestPointerEvent=p,this.latestPanInfo=m;const{dragPropagation:T,dragDirectionLock:b,onDirectionLock:x,onDrag:R}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:k}=m;if(b&&this.currentDirection===null){this.currentDirection=zE(k),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",m.point,k),this.updateAxis("y",m.point,k),this.visualElement.render(),R&&X.update(()=>R(p,m),!1,!0)},l=(p,m)=>{this.latestPointerEvent=p,this.latestPanInfo=m,this.stop(p,m),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:p}=this.getProps();(p||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new vm(e,{onSessionStart:r,onStart:o,onMove:c,onSessionEnd:l,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:s,contextWindow:_m(this.visualElement),element:this.visualElement.current})}stop(e,n){const s=e||this.latestPointerEvent,i=n||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!i||!s)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:c}=this.getProps();c&&X.postRender(()=>c(s,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,s){const{drag:i}=this.getProps();if(!s||!ji(e,i,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+s[e];this.constraints&&this.constraints[e]&&(o=NE(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var r;const{dragConstraints:e,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)==null?void 0:r.layout,i=this.constraints;e&&Nn(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&s?this.constraints=ME(s.layoutBox,e):this.constraints=!1,this.elastic=jE(n),i!==this.constraints&&!Nn(e)&&s&&this.constraints&&!this.hasMutatedConstraints&&lt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=FE(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Nn(e))return!1;const s=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=$w(s,i.root,this.visualElement.getTransformPagePoint());let o=OE(i.layout.layoutBox,r);if(n){const c=n(jw(o));this.hasMutatedConstraints=!!c,c&&(o=Bp(c))}return o}startAnimation(e){const{drag:n,dragMomentum:s,dragElastic:i,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:c}=this.getProps(),l=this.constraints||{},h=lt(d=>{if(!ji(d,n,this.currentDirection))return;let p=l&&l[d]||{};(o===!0||o===d)&&(p={min:0,max:0});const m=i?200:1e6,T=i?40:1e7,b={type:"inertia",velocity:s?e[d]:0,bounceStiffness:m,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...r,...p};return this.startAxisValueAnimation(d,b)});return Promise.all(h).then(c)}startAxisValueAnimation(e,n){const s=this.getAxisMotionValue(e);return Pa(this.visualElement,e),s.start(bc(e,s,0,n,this.visualElement,!1))}stopAnimation(){lt(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,s=this.visualElement.getProps(),i=s[n];return i||this.visualElement.getValue(e,(s.initial?s.initial[e]:void 0)||0)}snapToCursor(e){lt(n=>{const{drag:s}=this.getProps();if(!ji(n,s,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:c}=i.layout.layoutBox[n],l=r.get()||0;r.set(e[n]-ne(o,c,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!Nn(n)||!s||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};lt(o=>{const c=this.getAxisMotionValue(o);if(c&&this.constraints!==!1){const l=c.get();i[o]=LE({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),lt(o=>{if(!ji(o,e,null))return;const c=this.getAxisMotionValue(o),{min:l,max:h}=this.constraints[o];c.set(ne(l,h,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;UE.set(this.visualElement,this);const e=this.visualElement.current,n=Fs(e,"pointerdown",h=>{const{drag:d,dragListener:p=!0}=this.getProps(),m=h.target,T=m!==e&&yw(m);d&&p&&!T&&this.start(h)});let s;const i=()=>{const{dragConstraints:h}=this.getProps();Nn(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),s||(s=$E(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:r}=this.visualElement,o=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),X.read(i);const c=Ys(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d})=>{this.isDragging&&d&&(lt(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=h[p].translate,m.set(m.get()+h[p].translate))}),this.visualElement.render())});return()=>{c(),n(),o(),l&&l(),s&&s()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:o=La,dragMomentum:c=!0}=e;return{...e,drag:n,dragDirectionLock:s,dragPropagation:i,dragConstraints:r,dragElastic:o,dragMomentum:c}}}function Wh(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function $E(t,e,n){const s=ka(t,Wh(n)),i=ka(e,Wh(n));return()=>{s(),i()}}function ji(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function zE(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class HE extends en{constructor(e){super(e),this.removeGroupControls=Fe,this.removeListeners=Fe,this.controls=new BE(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Fe}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Xo=t=>(e,n)=>{t&&X.update(()=>t(e,n),!1,!0)};class WE extends en{constructor(){super(...arguments),this.removePointerDownListener=Fe}onPointerDown(e){this.session=new vm(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_m(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:s,onPanEnd:i}=this.node.getProps();return{onSessionStart:Xo(e),onStart:Xo(n),onMove:Xo(s),onEnd:(r,o)=>{delete this.session,i&&X.postRender(()=>i(r,o))}}}mount(){this.removePointerDownListener=Fs(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Yo=!1;class KE extends N.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s,layoutId:i}=this.props,{projection:r}=e;r&&(n.group&&n.group.add(r),s&&s.register&&i&&s.register(r),Yo&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),tr.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:s,drag:i,isPresent:r}=this.props,{projection:o}=s;return o&&(o.isPresent=r,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Yo=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==r?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||X.postRender(()=>{const c=o.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:s}=e;s&&(s.options.layoutAnchor=n,s.root.didUpdate(),Rc.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:i}=e;Yo=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),s&&s.deregister&&s.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function wm(t){const[e,n]=lm(),s=N.useContext(cc);return _.jsx(KE,{...t,layoutGroup:s,switchLayoutGroup:N.useContext(gm),isPresent:e,safeToRemove:n})}const qE={pan:{Feature:WE},drag:{Feature:HE,ProjectionNode:cm,MeasureLayout:wm}};function Kh(t,e,n){const{props:s}=t;t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,r=s[i];r&&X.postRender(()=>r(e,li(e)))}class GE extends en{mount(){const{current:e}=this.node;e&&(this.unmount=fw(e,(n,s)=>(Kh(this.node,s,"Start"),i=>Kh(this.node,i,"End"))))}unmount(){}}class XE extends en{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ri(Ys(this.node.current,"focus",()=>this.onFocus()),Ys(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function qh(t,e,n){const{props:s}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&s.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),r=s[i];r&&X.postRender(()=>r(e,li(e)))}class YE extends en{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=vw(e,(i,r)=>(qh(this.node,r,"Start"),(o,{success:c})=>qh(this.node,o,c?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Fa=new WeakMap,Qo=new WeakMap,QE=t=>{const e=Fa.get(t.target);e&&e(t)},JE=t=>{t.forEach(QE)};function ZE({root:t,...e}){const n=t||document;Qo.has(n)||Qo.set(n,{});const s=Qo.get(n),i=JSON.stringify(e);return s[i]||(s[i]=new IntersectionObserver(JE,{root:t,...e})),s[i]}function eI(t,e,n){const s=ZE(e);return Fa.set(t,n),s.observe(t),()=>{Fa.delete(t),s.unobserve(t)}}const tI={some:0,all:1};class nI extends en{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:s,amount:i="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:s,threshold:typeof i=="number"?i:tI[i]},c=h=>{const{isIntersecting:d}=h;if(this.isInView===d||(this.isInView=d,r&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),T=d?p:m;T&&T(h)};this.stopObserver=eI(this.node.current,o,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(sI(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function sI({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const iI={inView:{Feature:nI},tap:{Feature:YE},focus:{Feature:XE},hover:{Feature:GE}},rI={layout:{ProjectionNode:cm,MeasureLayout:wm}},oI={...RE,...iI,...qE,...rI},js=AE(oI,bE);function aI(t,e,n){N.useInsertionEffect(()=>t.on(e,n),[t,e,n])}function wr(t){return typeof window>"u"?!1:t?dp():Ic()}const cI=50,Gh=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),lI=()=>({time:0,x:Gh(),y:Gh()}),uI={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Xh(t,e,n,s){const i=n[e],{length:r,position:o}=uI[e],c=i.current,l=n.time;i.current=Math.abs(t[`scroll${o}`]),i.scrollLength=t[`scroll${r}`]-t[`client${r}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Xn(0,i.scrollLength,i.current);const h=s-l;i.velocity=h>cI?0:hc(i.current-c,h)}function hI(t,e,n){Xh(t,"x",e,n),Xh(t,"y",e,n),e.time=n}function dI(t,e){const n={x:0,y:0};let s=t;for(;s&&s!==e;)if(Os(s))n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const i=s.getBoundingClientRect();s=s.parentElement;const r=s.getBoundingClientRect();n.x+=i.left-r.left,n.y+=i.top-r.top}else if(s instanceof SVGGraphicsElement){const{x:i,y:r}=s.getBBox();n.x+=i,n.y+=r;let o=null,c=s.parentNode;for(;!o;)c.tagName==="svg"&&(o=c),c=s.parentNode;s=o}else break;return n}const ja={start:0,center:.5,end:1};function Yh(t,e,n=0){let s=0;if(t in ja&&(t=ja[t]),typeof t=="string"){const i=parseFloat(t);t.endsWith("px")?s=i:t.endsWith("%")?t=i/100:t.endsWith("vw")?s=i/100*document.documentElement.clientWidth:t.endsWith("vh")?s=i/100*document.documentElement.clientHeight:t=i}return typeof t=="number"&&(s=e*t),n+s}const fI=[0,0];function pI(t,e,n,s){let i=Array.isArray(t)?t:fI,r=0,o=0;return typeof t=="number"?i=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?i=t.split(" "):i=[t,ja[t]?t:"0"]),r=Yh(i[0],n,s),o=Yh(i[1],e),r-o}const ks={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},mI={x:0,y:0};function gI(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function yI(t,e,n){const{offset:s=ks.All}=n,{target:i=t,axis:r="y"}=n,o=r==="y"?"height":"width",c=i!==t?dI(i,t):mI,l=i===t?{width:t.scrollWidth,height:t.scrollHeight}:gI(i),h={width:t.clientWidth,height:t.clientHeight};e[r].offset.length=0;let d=!e[r].interpolate;const p=s.length;for(let m=0;m<p;m++){const T=pI(s[m],h[o],l[o],c[r]);!d&&T!==e[r].interpolatorOffsets[m]&&(d=!0),e[r].offset[m]=T}d&&(e[r].interpolate=vc(e[r].offset,ap(s),{clamp:!1}),e[r].interpolatorOffsets=[...e[r].offset]),e[r].progress=it(0,1,e[r].interpolate(e[r].current))}function _I(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let s=e;for(;s&&s!==t;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function vI(t,e,n,s={}){return{measure:i=>{_I(t,s.target,n),hI(t,n,i),(s.offset||s.target)&&yI(t,n,s)},notify:()=>e(n)}}const Dn=new WeakMap,Qh=new WeakMap,Jo=new WeakMap,Jh=new WeakMap,Ui=new WeakMap,Zh=t=>t===document.scrollingElement?window:t;function Em(t,{container:e=document.scrollingElement,trackContentSize:n=!1,...s}={}){if(!e)return Fe;let i=Jo.get(e);i||(i=new Set,Jo.set(e,i));const r=lI(),o=vI(e,t,r,s);if(i.add(o),!Dn.has(e)){const l=()=>{for(const m of i)m.measure(ye.timestamp);X.preUpdate(h)},h=()=>{for(const m of i)m.notify()},d=()=>X.read(l);Dn.set(e,d);const p=Zh(e);window.addEventListener("resize",d),e!==document.documentElement&&Qh.set(e,ka(e,d)),p.addEventListener("scroll",d),d()}if(n&&!Ui.has(e)){const l=Dn.get(e),h={width:e.scrollWidth,height:e.scrollHeight};Jh.set(e,h);const d=()=>{const m=e.scrollWidth,T=e.scrollHeight;(h.width!==m||h.height!==T)&&(l(),h.width=m,h.height=T)},p=X.read(d,!0);Ui.set(e,p)}const c=Dn.get(e);return X.read(c,!1,!0),()=>{var p;Ge(c);const l=Jo.get(e);if(!l||(l.delete(o),l.size))return;const h=Dn.get(e);Dn.delete(e),h&&(Zh(e).removeEventListener("scroll",h),(p=Qh.get(e))==null||p(),window.removeEventListener("resize",h));const d=Ui.get(e);d&&(Ge(d),Ui.delete(e)),Jh.delete(e)}}const TI=[[ks.Enter,"entry"],[ks.Exit,"exit"],[ks.Any,"cover"],[ks.All,"contain"]],ed={start:0,end:1};function wI(t){const e=t.trim().split(/\s+/);if(e.length!==2)return;const n=ed[e[0]],s=ed[e[1]];if(!(n===void 0||s===void 0))return[n,s]}function EI(t){if(t.length!==2)return;const e=[];for(const n of t)if(Array.isArray(n))e.push(n);else if(typeof n=="string"){const s=wI(n);if(!s)return;e.push(s)}else return;return e}function II(t,e){const n=EI(t);if(!n)return!1;for(let s=0;s<2;s++){const i=n[s],r=e[s];if(i[0]!==r[0]||i[1]!==r[1])return!1}return!0}function Fc(t){if(!t)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,n]of TI)if(II(t,e))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}const td=new Map;function nd(t){const e={value:0},n=Em(s=>{e.value=s[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function Im({source:t,container:e,...n}){const{axis:s}=n;t&&(e=t);let i=td.get(e);i||(i=new Map,td.set(e,i));const r=n.target??"self";let o=i.get(r);o||(o={},i.set(r,o));const c=s+(n.offset??[]).join(",");return o[c]||(n.target&&wr(n.target)?Fc(n.offset)?o[c]=new ViewTimeline({subject:n.target,axis:s}):o[c]=nd({container:e,...n}):wr()?o[c]=new ScrollTimeline({source:e,axis:s}):o[c]=nd({container:e,...n})),o[c]}function AI(t,e){const n=Im(e),s=e.target?Fc(e.offset):void 0,i=e.target?wr(e.target)&&!!s:wr();return t.attachTimeline({timeline:i?n:void 0,...s&&i&&{rangeStart:s.rangeStart,rangeEnd:s.rangeEnd},observe:r=>(r.pause(),Op(o=>{r.time=r.iterationDuration*o},n))})}function bI(t){return t.length===2}function SI(t,e){return bI(t)?Em(n=>{t(n[e.axis].progress,n)},e):Op(t,Im(e))}function Am(t,{axis:e="y",container:n=document.scrollingElement,...s}={}){if(!n)return Fe;const i={axis:e,container:n,...s};return typeof t=="function"?SI(t,i):AI(t,i)}const PI=()=>({scrollX:et(0),scrollY:et(0),scrollXProgress:et(0),scrollYProgress:et(0)}),Bi=t=>t?!t.current:!1;function sd(t,e,n,s){return{factory:i=>Am(i,{...e,axis:t,container:(n==null?void 0:n.current)||void 0,target:(s==null?void 0:s.current)||void 0}),times:[0,1],keyframes:[0,1],ease:i=>i,duration:1}}function CI(t,e){return typeof window>"u"?!1:t?dp()&&!!Fc(e):Ic()}function RI({container:t,target:e,...n}={}){const s=qt(PI);CI(e,n.offset)&&(s.scrollXProgress.accelerate=sd("x",n,t,e),s.scrollYProgress.accelerate=sd("y",n,t,e));const i=N.useRef(null),r=N.useRef(!1),o=N.useCallback(()=>(i.current=Am((c,{x:l,y:h})=>{s.scrollX.set(l.current),s.scrollXProgress.set(l.progress),s.scrollY.set(h.current),s.scrollYProgress.set(h.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var c;(c=i.current)==null||c.call(i)}),[t,e,JSON.stringify(n.offset)]);return Hr(()=>{if(r.current=!1,Bi(t)||Bi(e)){r.current=!0;return}else return o()},[o]),N.useEffect(()=>{if(r.current)return Ks(!Bi(t)),Ks(!Bi(e)),o()},[o]),s}function jc(t){const e=qt(()=>et(t)),{isStatic:n}=N.useContext(ci);if(n){const[,s]=N.useState(t);N.useEffect(()=>e.on("change",s),[])}return e}function bm(t,e){const n=jc(e()),s=()=>n.set(e());return s(),Hr(()=>{const i=()=>X.preRender(s,!1,!0),r=t.map(o=>o.on("change",i));return()=>{r.forEach(o=>o()),Ge(s)}}),n}function xI(t){Ms.current=[],t();const e=bm(Ms.current,t);return Ms.current=void 0,e}function Un(t,e,n,s){if(typeof t=="function")return xI(t);if(n!==void 0&&!Array.isArray(n)&&typeof e!="function")return kI(t,e,n,s);const o=typeof e=="function"?e:Rw(e,n,s),c=Array.isArray(t)?id(t,o):id([t],([h])=>o(h)),l=Array.isArray(t)?void 0:t.accelerate;return l&&!l.isTransformed&&typeof e!="function"&&Array.isArray(n)&&(s==null?void 0:s.clamp)!==!1&&(c.accelerate={...l,times:e,keyframes:n,isTransformed:!0}),c}function id(t,e){const n=qt(()=>[]);return bm(t,()=>{n.length=0;const s=t.length;for(let i=0;i<s;i++)n[i]=t[i].get();return e(n)})}function kI(t,e,n,s){const i=qt(()=>Object.keys(n)),r=qt(()=>({}));for(const o of i)r[o]=Un(t,e,n[o],s);return r}function VI(t,e={}){const{isStatic:n}=N.useContext(ci),s=()=>me(t)?t.get():t;if(n)return Un(s);const i=jc(s());return N.useInsertionEffect(()=>xw(i,t,e),[i,JSON.stringify(e)]),i}function DI(t,e={}){return VI(t,{type:"spring",...e})}function NI(t){const e=jc(t.getVelocity()),n=()=>{const s=t.getVelocity();e.set(s),s&&X.update(n)};return aI(t,"change",()=>{X.update(n,!1,!0)}),e}const MI=({onFinished:t})=>{const[e,n]=N.useState(!0);return N.useEffect(()=>{const s=setTimeout(()=>{n(!1),t&&setTimeout(t,500)},2200);return()=>clearTimeout(s)},[t]),_.jsx(Z0,{children:e&&_.jsxs(js.div,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"easeInOut"},style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"#0a0c10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:99999},children:[_.jsx(js.div,{animate:{scale:[1,1.08,1],opacity:[.8,1,.8]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},style:{width:"120px",height:"120px",display:"flex",alignItems:"center",justifyContent:"center"},children:_.jsx("img",{src:"/favicon.svg",alt:"Kone Academy",style:{width:"100%",height:"auto",filter:"drop-shadow(0 0 20px rgba(88, 166, 255, 0.3))"}})}),_.jsx(js.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.8},style:{marginTop:"2rem",letterSpacing:"0.3em",fontSize:"0.7rem",color:"#58a6ff",textTransform:"uppercase",fontWeight:600},children:"Welcome to the Ecosystem"})]})})},OI=()=>{const{scrollY:t}=RI(),e=NI(t),n=DI(e,{damping:30,stiffness:150}),s=Un(n,[-2e3,2e3],[-5,5]),i=Un(n,[-2e3,2e3],[-25,25]),r=Un(n,[-2e3,2e3],[.92,1.08]),o=Un(t,[0,5e3],[0,-400]);return _.jsxs("div",{className:"interactive-grid-container",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none",overflow:"hidden",backgroundColor:"var(--bg-primary)"},children:[_.jsx(js.div,{style:{y:o,skewY:s,scaleY:r,position:"absolute",top:"-20%",left:0,width:"100%",height:"140%",transformOrigin:"center center"},children:_.jsxs("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",children:[_.jsxs("defs",{children:[_.jsxs("filter",{id:"glow",children:[_.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),_.jsxs("feMerge",{children:[_.jsx("feMergeNode",{in:"coloredBlur"}),_.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),_.jsx("pattern",{id:"grid-pattern",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:_.jsxs(js.g,{style:{y:i},children:[_.jsx("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:"rgba(88, 166, 255, 0.05)",strokeWidth:"0.5"}),_.jsx("circle",{cx:"0",cy:"0",r:"1.3",fill:"var(--accent-primary)",opacity:"0.4",filter:"url(#glow)",children:_.jsx("animate",{attributeName:"opacity",values:"0.3;0.6;0.3",dur:"5s",repeatCount:"indefinite"})})]})})]}),_.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid-pattern)"})]})}),_.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(circle at 50% 50%, transparent 20%, rgba(10, 12, 16, 0.7) 100%)",pointerEvents:"none"}})]})};function LI(){const[t,e]=ft.useState(!0);return ft.useEffect(()=>{document.documentElement.setAttribute("data-theme","dark")},[]),_.jsxs(_.Fragment,{children:[_.jsx(MI,{onFinished:()=>e(!1)}),!t&&_.jsxs("div",{className:"App animate-fade-in",children:[_.jsx(OI,{}),_.jsx(G_,{}),_.jsx(Y_,{}),_.jsx(Q_,{}),_.jsx(J_,{}),_.jsx(ev,{}),_.jsx(rv,{}),_.jsx(tv,{}),_.jsx(av,{}),_.jsx(cv,{})]})]})}const FI=()=>{};var rd={};/**
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
 */const Sm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],c=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,c=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,d=r>>2,p=(r&3)<<4|c>>4;let m=(c&15)<<2|h>>6,T=h&63;l||(T=64,o||(m=64)),s.push(n[d],n[p],n[m],n[T])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||c==null||h==null||p==null)throw new UI;const m=r<<2|c>>4;if(s.push(m),h!==64){const T=c<<4&240|h>>2;if(s.push(T),p!==64){const b=h<<6&192|p;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BI=function(t){const e=Sm(t);return Pm.encodeByteArray(e,!0)},Er=function(t){return BI(t).replace(/\./g,"")},Cm=function(t){try{return Pm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $I(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zI=()=>$I().__FIREBASE_DEFAULTS__,HI=()=>{if(typeof process>"u"||typeof rd>"u")return;const t=rd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cm(t[1]);return e&&JSON.parse(e)},Yr=()=>{try{return FI()||zI()||HI()||WI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rm=t=>{var e,n;return(n=(e=Yr())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},KI=t=>{const e=Rm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},xm=()=>{var t;return(t=Yr())==null?void 0:t.config},km=t=>{var e;return(e=Yr())==null?void 0:e[`_${t}`]};/**
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
 */class qI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function GI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Er(JSON.stringify(n)),Er(JSON.stringify(o)),""].join(".")}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function YI(){var e;const t=(e=Yr())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZI(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eA(){return!YI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dm(){try{return typeof indexedDB=="object"}catch{return!1}}function Nm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}function tA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const nA="FirebaseError";class ot extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=nA,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sn.prototype.create)}}class Sn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?sA(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new ot(i,c,s)}}function sA(t,e){return t.replace(iA,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const iA=/\{\$([^}]+)}/g;function rA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(od(r)&&od(o)){if(!Xt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function od(t){return t!==null&&typeof t=="object"}/**
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
 */function ui(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function oA(t,e){const n=new aA(t,e);return n.subscribe.bind(n)}class aA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");cA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Zo),i.error===void 0&&(i.error=Zo),i.complete===void 0&&(i.complete=Zo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zo(){}/**
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
 */const lA=1e3,uA=2,hA=4*60*60*1e3,dA=.5;function ad(t,e=lA,n=uA){const s=e*Math.pow(n,t),i=Math.round(dA*s*(Math.random()-.5)*2);return Math.min(hA,s+i)}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}/**
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
 */function hi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mm(t){return(await fetch(t,{credentials:"include"})).ok}class rt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class fA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new qI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mA(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pA(t){return t===ln?void 0:t}function mA(t){return t.instantiationMode==="EAGER"}/**
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
 */class gA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const yA={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},_A=G.INFO,vA={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},TA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=vA[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qr{constructor(e){this.name=e,this._logLevel=_A,this._logHandler=TA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const wA=(t,e)=>e.some(n=>t instanceof n);let cd,ld;function EA(){return cd||(cd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IA(){return ld||(ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Om=new WeakMap,Ua=new WeakMap,Lm=new WeakMap,ea=new WeakMap,Uc=new WeakMap;function AA(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ht(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Om.set(n,t)}).catch(()=>{}),Uc.set(e,t),e}function bA(t){if(Ua.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ua.set(t,e)}let Ba={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ua.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SA(t){Ba=t(Ba)}function PA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ta(this),e,...n);return Lm.set(s,e.sort?e.sort():[e]),Ht(s)}:IA().includes(t)?function(...e){return t.apply(ta(this),e),Ht(Om.get(this))}:function(...e){return Ht(t.apply(ta(this),e))}}function CA(t){return typeof t=="function"?PA(t):(t instanceof IDBTransaction&&bA(t),wA(t,EA())?new Proxy(t,Ba):t)}function Ht(t){if(t instanceof IDBRequest)return AA(t);if(ea.has(t))return ea.get(t);const e=CA(t);return e!==t&&(ea.set(t,e),Uc.set(e,t)),e}const ta=t=>Uc.get(t);function Fm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),c=Ht(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ht(o.result),l.oldVersion,l.newVersion,Ht(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const RA=["get","getKey","getAll","getAllKeys","count"],xA=["put","add","delete","clear"],na=new Map;function ud(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(na.get(e))return na.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||RA.includes(n)))return;const r=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&l.done]))[0]};return na.set(e,r),r}SA(t=>({...t,get:(e,n,s)=>ud(e,n)||t.get(e,n,s),has:(e,n)=>!!ud(e,n)||t.has(e,n)}));/**
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
 */class kA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function VA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $a="@firebase/app",hd="0.14.11";/**
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
 */const Pt=new Qr("@firebase/app"),DA="@firebase/app-compat",NA="@firebase/analytics-compat",MA="@firebase/analytics",OA="@firebase/app-check-compat",LA="@firebase/app-check",FA="@firebase/auth",jA="@firebase/auth-compat",UA="@firebase/database",BA="@firebase/data-connect",$A="@firebase/database-compat",zA="@firebase/functions",HA="@firebase/functions-compat",WA="@firebase/installations",KA="@firebase/installations-compat",qA="@firebase/messaging",GA="@firebase/messaging-compat",XA="@firebase/performance",YA="@firebase/performance-compat",QA="@firebase/remote-config",JA="@firebase/remote-config-compat",ZA="@firebase/storage",eb="@firebase/storage-compat",tb="@firebase/firestore",nb="@firebase/ai",sb="@firebase/firestore-compat",ib="firebase",rb="12.12.0";/**
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
 */const za="[DEFAULT]",ob={[$a]:"fire-core",[DA]:"fire-core-compat",[MA]:"fire-analytics",[NA]:"fire-analytics-compat",[LA]:"fire-app-check",[OA]:"fire-app-check-compat",[FA]:"fire-auth",[jA]:"fire-auth-compat",[UA]:"fire-rtdb",[BA]:"fire-data-connect",[$A]:"fire-rtdb-compat",[zA]:"fire-fn",[HA]:"fire-fn-compat",[WA]:"fire-iid",[KA]:"fire-iid-compat",[qA]:"fire-fcm",[GA]:"fire-fcm-compat",[XA]:"fire-perf",[YA]:"fire-perf-compat",[QA]:"fire-rc",[JA]:"fire-rc-compat",[ZA]:"fire-gcs",[eb]:"fire-gcs-compat",[tb]:"fire-fst",[sb]:"fire-fst-compat",[nb]:"fire-vertex","fire-js":"fire-js",[ib]:"fire-js-all"};/**
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
 */const Ir=new Map,ab=new Map,Ha=new Map;function dd(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _t(t){const e=t.name;if(Ha.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ha.set(e,t);for(const n of Ir.values())dd(n,t);for(const n of ab.values())dd(n,t);return!0}function Pn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const cb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new Sn("app","Firebase",cb);/**
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
 */class lb{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const os=rb;function jm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:za,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(n||(n=xm()),!n)throw Wt.create("no-options");const r=Ir.get(i);if(r){if(Xt(n,r.options)&&Xt(s,r.config))return r;throw Wt.create("duplicate-app",{appName:i})}const o=new gA(i);for(const l of Ha.values())o.addComponent(l);const c=new lb(n,s,o);return Ir.set(i,c),c}function Bc(t=za){const e=Ir.get(t);if(!e&&t===za&&xm())return jm();if(!e)throw Wt.create("no-app",{appName:t});return e}function qe(t,e,n){let s=ob[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(o.join(" "));return}_t(new rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ub="firebase-heartbeat-database",hb=1,Qs="firebase-heartbeat-store";let sa=null;function Um(){return sa||(sa=Fm(ub,hb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wt.create("idb-open",{originalErrorMessage:t.message})})),sa}async function db(t){try{const n=(await Um()).transaction(Qs),s=await n.objectStore(Qs).get(Bm(t));return await n.done,s}catch(e){if(e instanceof ot)Pt.warn(e.message);else{const n=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(n.message)}}}async function fd(t,e){try{const s=(await Um()).transaction(Qs,"readwrite");await s.objectStore(Qs).put(e,Bm(t)),await s.done}catch(n){if(n instanceof ot)Pt.warn(n.message);else{const s=Wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pt.warn(s.message)}}}function Bm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fb=1024,pb=30;class mb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>pb){const o=_b(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Pt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pd(),{heartbeatsToSend:s,unsentEntries:i}=gb(this._heartbeatsCache.heartbeats),r=Er(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Pt.warn(n),""}}}function pd(){return new Date().toISOString().substring(0,10)}function gb(t,e=fb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),md(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),md(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dm()?Nm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await db(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return fd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return fd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function md(t){return Er(JSON.stringify({version:2,heartbeats:t})).length}function _b(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function vb(t){_t(new rt("platform-logger",e=>new kA(e),"PRIVATE")),_t(new rt("heartbeat",e=>new mb(e),"PRIVATE")),qe($a,hd,t),qe($a,hd,"esm2020"),qe("fire-js","")}vb("");var gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $c;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function v(){}v.prototype=y.prototype,A.F=y.prototype,A.prototype=new v,A.prototype.constructor=A,A.D=function(E,I,S){for(var w=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)w[ee-2]=arguments[ee];return y.prototype[I].apply(E,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,y,v){v||(v=0);const E=Array(16);if(typeof y=="string")for(var I=0;I<16;++I)E[I]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(I=0;I<16;++I)E[I]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=A.g[0],v=A.g[1],I=A.g[2];let S=A.g[3],w;w=y+(S^v&(I^S))+E[0]+3614090360&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(I^y&(v^I))+E[1]+3905402710&4294967295,S=y+(w<<12&4294967295|w>>>20),w=I+(v^S&(y^v))+E[2]+606105819&4294967295,I=S+(w<<17&4294967295|w>>>15),w=v+(y^I&(S^y))+E[3]+3250441966&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(S^v&(I^S))+E[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(I^y&(v^I))+E[5]+1200080426&4294967295,S=y+(w<<12&4294967295|w>>>20),w=I+(v^S&(y^v))+E[6]+2821735955&4294967295,I=S+(w<<17&4294967295|w>>>15),w=v+(y^I&(S^y))+E[7]+4249261313&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(S^v&(I^S))+E[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(I^y&(v^I))+E[9]+2336552879&4294967295,S=y+(w<<12&4294967295|w>>>20),w=I+(v^S&(y^v))+E[10]+4294925233&4294967295,I=S+(w<<17&4294967295|w>>>15),w=v+(y^I&(S^y))+E[11]+2304563134&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(S^v&(I^S))+E[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(I^y&(v^I))+E[13]+4254626195&4294967295,S=y+(w<<12&4294967295|w>>>20),w=I+(v^S&(y^v))+E[14]+2792965006&4294967295,I=S+(w<<17&4294967295|w>>>15),w=v+(y^I&(S^y))+E[15]+1236535329&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(I^S&(v^I))+E[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^I&(y^v))+E[6]+3225465664&4294967295,S=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(S^y))+E[11]+643717713&4294967295,I=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(I^S))+E[0]+3921069994&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(I^S&(v^I))+E[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^I&(y^v))+E[10]+38016083&4294967295,S=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(S^y))+E[15]+3634488961&4294967295,I=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(I^S))+E[4]+3889429448&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(I^S&(v^I))+E[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^I&(y^v))+E[14]+3275163606&4294967295,S=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(S^y))+E[3]+4107603335&4294967295,I=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(I^S))+E[8]+1163531501&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(I^S&(v^I))+E[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^I&(y^v))+E[2]+4243563512&4294967295,S=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(S^y))+E[7]+1735328473&4294967295,I=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(I^S))+E[12]+2368359562&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(v^I^S)+E[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^I)+E[8]+2272392833&4294967295,S=y+(w<<11&4294967295|w>>>21),w=I+(S^y^v)+E[11]+1839030562&4294967295,I=S+(w<<16&4294967295|w>>>16),w=v+(I^S^y)+E[14]+4259657740&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(v^I^S)+E[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^I)+E[4]+1272893353&4294967295,S=y+(w<<11&4294967295|w>>>21),w=I+(S^y^v)+E[7]+4139469664&4294967295,I=S+(w<<16&4294967295|w>>>16),w=v+(I^S^y)+E[10]+3200236656&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(v^I^S)+E[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^I)+E[0]+3936430074&4294967295,S=y+(w<<11&4294967295|w>>>21),w=I+(S^y^v)+E[3]+3572445317&4294967295,I=S+(w<<16&4294967295|w>>>16),w=v+(I^S^y)+E[6]+76029189&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(v^I^S)+E[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^I)+E[12]+3873151461&4294967295,S=y+(w<<11&4294967295|w>>>21),w=I+(S^y^v)+E[15]+530742520&4294967295,I=S+(w<<16&4294967295|w>>>16),w=v+(I^S^y)+E[2]+3299628645&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(I^(v|~S))+E[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~I))+E[7]+1126891415&4294967295,S=y+(w<<10&4294967295|w>>>22),w=I+(y^(S|~v))+E[14]+2878612391&4294967295,I=S+(w<<15&4294967295|w>>>17),w=v+(S^(I|~y))+E[5]+4237533241&4294967295,v=I+(w<<21&4294967295|w>>>11),w=y+(I^(v|~S))+E[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~I))+E[3]+2399980690&4294967295,S=y+(w<<10&4294967295|w>>>22),w=I+(y^(S|~v))+E[10]+4293915773&4294967295,I=S+(w<<15&4294967295|w>>>17),w=v+(S^(I|~y))+E[1]+2240044497&4294967295,v=I+(w<<21&4294967295|w>>>11),w=y+(I^(v|~S))+E[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~I))+E[15]+4264355552&4294967295,S=y+(w<<10&4294967295|w>>>22),w=I+(y^(S|~v))+E[6]+2734768916&4294967295,I=S+(w<<15&4294967295|w>>>17),w=v+(S^(I|~y))+E[13]+1309151649&4294967295,v=I+(w<<21&4294967295|w>>>11),w=y+(I^(v|~S))+E[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~I))+E[11]+3174756917&4294967295,S=y+(w<<10&4294967295|w>>>22),w=I+(y^(S|~v))+E[2]+718787259&4294967295,I=S+(w<<15&4294967295|w>>>17),w=v+(S^(I|~y))+E[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+S&4294967295}s.prototype.v=function(A,y){y===void 0&&(y=A.length);const v=y-this.blockSize,E=this.C;let I=this.h,S=0;for(;S<y;){if(I==0)for(;S<=v;)i(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<y;)if(E[I++]=A.charCodeAt(S++),I==this.blockSize){i(this,E),I=0;break}}else for(;S<y;)if(E[I++]=A[S++],I==this.blockSize){i(this,E),I=0;break}}this.h=I,this.o+=y},s.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;y=this.o*8;for(var v=A.length-8;v<A.length;++v)A[v]=y&255,y/=256;for(this.v(A),A=Array(16),y=0,v=0;v<4;++v)for(let E=0;E<32;E+=8)A[y++]=this.g[v]>>>E&255;return A};function r(A,y){var v=c;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=y(A)}function o(A,y){this.h=y;const v=[];let E=!0;for(let I=A.length-1;I>=0;I--){const S=A[I]|0;E&&S==y||(v[I]=S,E=!1)}this.g=v}var c={};function l(A){return-128<=A&&A<128?r(A,function(y){return new o([y|0],y<0?-1:0)}):new o([A|0],A<0?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return R(h(-A));const y=[];let v=1;for(let E=0;A>=v;E++)y[E]=A/v|0,v*=4294967296;return new o(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return R(d(A.substring(1),y));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let E=p;for(let S=0;S<A.length;S+=8){var I=Math.min(8,A.length-S);const w=parseInt(A.substring(S,S+I),y);I<8?(I=h(Math.pow(y,I)),E=E.j(I).add(h(w))):(E=E.j(v),E=E.add(h(w)))}return E}var p=l(0),m=l(1),T=l(16777216);t=o.prototype,t.m=function(){if(x(this))return-R(this).m();let A=0,y=1;for(let v=0;v<this.g.length;v++){const E=this.i(v);A+=(E>=0?E:4294967296+E)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(b(this))return"0";if(x(this))return"-"+R(this).toString(A);const y=h(Math.pow(A,6));var v=this;let E="";for(;;){const I=F(v,y).g;v=k(v,I.j(y));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(A);if(v=I,b(v))return S+E;for(;S.length<6;)S="0"+S;E=S+E}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function b(A){if(A.h!=0)return!1;for(let y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function x(A){return A.h==-1}t.l=function(A){return A=k(this,A),x(A)?-1:b(A)?0:1};function R(A){const y=A.g.length,v=[];for(let E=0;E<y;E++)v[E]=~A.g[E];return new o(v,~A.h).add(m)}t.abs=function(){return x(this)?R(this):this},t.add=function(A){const y=Math.max(this.g.length,A.g.length),v=[];let E=0;for(let I=0;I<=y;I++){let S=E+(this.i(I)&65535)+(A.i(I)&65535),w=(S>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);E=w>>>16,S&=65535,w&=65535,v[I]=w<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function k(A,y){return A.add(R(y))}t.j=function(A){if(b(this)||b(A))return p;if(x(this))return x(A)?R(this).j(R(A)):R(R(this).j(A));if(x(A))return R(this.j(R(A)));if(this.l(T)<0&&A.l(T)<0)return h(this.m()*A.m());const y=this.g.length+A.g.length,v=[];for(var E=0;E<2*y;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(let I=0;I<A.g.length;I++){const S=this.i(E)>>>16,w=this.i(E)&65535,ee=A.i(I)>>>16,Te=A.i(I)&65535;v[2*E+2*I]+=w*Te,M(v,2*E+2*I),v[2*E+2*I+1]+=S*Te,M(v,2*E+2*I+1),v[2*E+2*I+1]+=w*ee,M(v,2*E+2*I+1),v[2*E+2*I+2]+=S*ee,M(v,2*E+2*I+2)}for(A=0;A<y;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=y;A<2*y;A++)v[A]=0;return new o(v,0)};function M(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function O(A,y){this.g=A,this.h=y}function F(A,y){if(b(y))throw Error("division by zero");if(b(A))return new O(p,p);if(x(A))return y=F(R(A),y),new O(R(y.g),R(y.h));if(x(y))return y=F(A,R(y)),new O(R(y.g),y.h);if(A.g.length>30){if(x(A)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=y;E.l(A)<=0;)v=j(v),E=j(E);var I=H(v,1),S=H(E,1);for(E=H(E,2),v=H(v,2);!b(E);){var w=S.add(E);w.l(A)<=0&&(I=I.add(v),S=w),E=H(E,1),v=H(v,1)}return y=k(A,I.j(y)),new O(I,y)}for(I=p;A.l(y)>=0;){for(v=Math.max(1,Math.floor(A.m()/y.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),S=h(v),w=S.j(y);x(w)||w.l(A)>0;)v-=E,S=h(v),w=S.j(y);b(S)&&(S=m),I=I.add(S),A=k(A,w)}return new O(I,A)}t.B=function(A){return F(this,A).h},t.and=function(A){const y=Math.max(this.g.length,A.g.length),v=[];for(let E=0;E<y;E++)v[E]=this.i(E)&A.i(E);return new o(v,this.h&A.h)},t.or=function(A){const y=Math.max(this.g.length,A.g.length),v=[];for(let E=0;E<y;E++)v[E]=this.i(E)|A.i(E);return new o(v,this.h|A.h)},t.xor=function(A){const y=Math.max(this.g.length,A.g.length),v=[];for(let E=0;E<y;E++)v[E]=this.i(E)^A.i(E);return new o(v,this.h^A.h)};function j(A){const y=A.g.length+1,v=[];for(let E=0;E<y;E++)v[E]=A.i(E)<<1|A.i(E-1)>>>31;return new o(v,A.h)}function H(A,y){const v=y>>5;y%=32;const E=A.g.length-v,I=[];for(let S=0;S<E;S++)I[S]=y>0?A.i(S+v)>>>y|A.i(S+v+1)<<32-y:A.i(S+v);return new o(I,A.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,$c=o}).apply(typeof gd<"u"?gd:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $m,Vs,zm,nr,Wa,Hm,Wm,Km;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=n(this);function i(a,u){if(u)e:{var f=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in f))break e;f=f[P]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,f){return a.call.apply(a.bind,arguments)}function h(a,u,f){return h=l,h.apply(null,arguments)}function d(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function f(){}f.prototype=u.prototype,a.Z=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,P,C){for(var L=Array(arguments.length-2),K=2;K<arguments.length;K++)L[K-2]=arguments[K];return u.prototype[P].apply(g,L)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const u=a.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function b(a,u){for(let g=1;g<arguments.length;g++){const P=arguments[g];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=a.length||0;const C=P.length||0;a.length=f+C;for(let L=0;L<C;L++)a[f+L]=P[L]}else a.push(P)}}class x{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function R(a){o.setTimeout(()=>{throw a},0)}function k(){var a=A;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class M{constructor(){this.h=this.g=null}add(u,f){const g=O.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var O=new x(()=>new F,a=>a.reset());class F{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,H=!1,A=new M,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(v)}};function v(){for(var a;a=k();){try{a.h.call(a.g)}catch(f){R(f)}var u=O;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}H=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,u),o.removeEventListener("test",f,u)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function ee(a,u){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(ee,I),ee.prototype.init=function(a,u){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ee.Z.h.call(this)},ee.prototype.h=function(){ee.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Te="closure_listenable_"+(Math.random()*1e6|0),We=0;function Cl(a,u,f,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=P,this.key=++We,this.da=this.fa=!1}function oe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function we(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function wt(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function Et(a){const u={};for(const f in a)u[f]=a[f];return u}const wi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rl(a,u){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)a[f]=g[f];for(let C=0;C<wi.length;C++)f=wi[C],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Ei(a){this.src=a,this.g={},this.h=0}Ei.prototype.add=function(a,u,f,g,P){const C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);const L=ho(a,u,g,P);return L>-1?(u=a[L],f||(u.fa=!1)):(u=new Cl(u,this.src,C,!!g,P),u.fa=f,a.push(u)),u};function uo(a,u){const f=u.type;if(f in a.g){var g=a.g[f],P=Array.prototype.indexOf.call(g,u,void 0),C;(C=P>=0)&&Array.prototype.splice.call(g,P,1),C&&(oe(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ho(a,u,f,g){for(let P=0;P<a.length;++P){const C=a[P];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return P}return-1}var fo="closure_lm_"+(Math.random()*1e6|0),po={};function xl(a,u,f,g,P){if(Array.isArray(u)){for(let C=0;C<u.length;C++)xl(a,u[C],f,g,P);return null}return f=Dl(f),a&&a[Te]?a.J(u,f,c(g)?!!g.capture:!1,P):Gy(a,u,f,!1,g,P)}function Gy(a,u,f,g,P,C){if(!u)throw Error("Invalid event type");const L=c(P)?!!P.capture:!!P;let K=go(a);if(K||(a[fo]=K=new Ei(a)),f=K.add(u,f,g,L,C),f.proxy)return f;if(g=Xy(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)S||(P=L),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent(Vl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Xy(){function a(f){return u.call(a.src,a.listener,f)}const u=Yy;return a}function kl(a,u,f,g,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)kl(a,u[C],f,g,P);else g=c(g)?!!g.capture:!!g,f=Dl(f),a&&a[Te]?(a=a.i,C=String(u).toString(),C in a.g&&(u=a.g[C],f=ho(u,f,g,P),f>-1&&(oe(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete a.g[C],a.h--)))):a&&(a=go(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ho(u,f,g,P)),(f=a>-1?u[a]:null)&&mo(f))}function mo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Te])uo(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(Vl(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=go(u))?(uo(f,a),f.h==0&&(f.src=null,u[fo]=null)):oe(a)}}}function Vl(a){return a in po?po[a]:po[a]="on"+a}function Yy(a,u){if(a.da)a=!0;else{u=new ee(u,this);const f=a.listener,g=a.ha||a.src;a.fa&&mo(a),a=f.call(g,u)}return a}function go(a){return a=a[fo],a instanceof Ei?a:null}var yo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Dl(a){return typeof a=="function"?a:(a[yo]||(a[yo]=function(u){return a.handleEvent(u)}),a[yo])}function Se(){E.call(this),this.i=new Ei(this),this.M=this,this.G=null}p(Se,E),Se.prototype[Te]=!0,Se.prototype.removeEventListener=function(a,u,f,g){kl(this,a,u,f,g)};function Ve(a,u){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new I(u,a);else if(u instanceof I)u.target=u.target||a;else{var P=u;u=new I(g,a),Rl(u,P)}P=!0;let C,L;if(f)for(L=f.length-1;L>=0;L--)C=u.g=f[L],P=Ii(C,g,!0,u)&&P;if(C=u.g=a,P=Ii(C,g,!0,u)&&P,P=Ii(C,g,!1,u)&&P,f)for(L=0;L<f.length;L++)C=u.g=f[L],P=Ii(C,g,!1,u)&&P}Se.prototype.N=function(){if(Se.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const f=a.g[u];for(let g=0;g<f.length;g++)oe(f[g]);delete a.g[u],a.h--}}this.G=null},Se.prototype.J=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},Se.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Ii(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let P=!0;for(let C=0;C<u.length;++C){const L=u[C];if(L&&!L.da&&L.capture==f){const K=L.listener,fe=L.ha||L.src;L.fa&&uo(a.i,L),P=K.call(fe,g)!==!1&&P}}return P&&!g.defaultPrevented}function Qy(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Nl(a){a.g=Qy(()=>{a.g=null,a.i&&(a.i=!1,Nl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Jy extends E{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Nl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(a){E.call(this),this.h=a,this.g={}}p(us,E);var Ml=[];function Ol(a){we(a.g,function(u,f){this.g.hasOwnProperty(f)&&mo(u)},a),a.g={}}us.prototype.N=function(){us.Z.N.call(this),Ol(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _o=o.JSON.stringify,Zy=o.JSON.parse,e_=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ll(){}function Fl(){}var hs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vo(){I.call(this,"d")}p(vo,I);function To(){I.call(this,"c")}p(To,I);var tn={},jl=null;function Ai(){return jl=jl||new Se}tn.Ia="serverreachability";function Ul(a){I.call(this,tn.Ia,a)}p(Ul,I);function ds(a){const u=Ai();Ve(u,new Ul(u))}tn.STAT_EVENT="statevent";function Bl(a,u){I.call(this,tn.STAT_EVENT,a),this.stat=u}p(Bl,I);function De(a){const u=Ai();Ve(u,new Bl(u,a))}tn.Ja="timingevent";function $l(a,u){I.call(this,tn.Ja,a),this.size=u}p($l,I);function fs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function ps(){this.g=!0}ps.prototype.ua=function(){this.g=!1};function t_(a,u,f,g,P,C){a.info(function(){if(a.g)if(C){var L="",K=C.split("&");for(let J=0;J<K.length;J++){var fe=K[J].split("=");if(fe.length>1){const ge=fe[0];fe=fe[1];const ct=ge.split("_");L=ct.length>=2&&ct[1]=="type"?L+(ge+"="+fe+"&"):L+(ge+"=redacted&")}}}else L=null;else L=C;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+f+`
`+L})}function n_(a,u,f,g,P,C,L){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+f+`
`+C+" "+L})}function xn(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+i_(a,f)+(g?" "+g:"")})}function s_(a,u){a.info(function(){return"TIMEOUT: "+u})}ps.prototype.info=function(){};function i_(a,u){if(!a.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(a=0;a<C.length;a++)if(Array.isArray(C[a])){var f=C[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let L=1;L<g.length;L++)g[L]=""}}}}return _o(C)}catch{return u}}var bi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hl;function wo(){}p(wo,Ll),wo.prototype.g=function(){return new XMLHttpRequest},Hl=new wo;function ms(a){return encodeURIComponent(String(a))}function r_(a){var u=1;a=a.split(":");const f=[];for(;u>0&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function xt(a,u,f,g){this.j=a,this.i=u,this.l=f,this.S=g||1,this.V=new us(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var Kl={},Eo={};function Io(a,u,f){a.M=1,a.A=Pi(at(u)),a.u=f,a.R=!0,ql(a,null)}function ql(a,u){a.F=Date.now(),Si(a),a.B=at(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),ou(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Wl,a.g=Au(a.j,f?u:null,!a.u),a.P>0&&(a.O=new Jy(h(a.Y,a,a.g),a.P)),u=a.V,f=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Ml[0]=P.toString()),P=Ml);for(let C=0;C<P.length;C++){const L=xl(f,P[C],g||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=a.J?Et(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),ds(),t_(a.i,a.v,a.B,a.l,a.S,a.u)}xt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Dt(a)==3?u.j():this.Y(a)},xt.prototype.Y=function(a){try{if(a==this.g)e:{const K=Dt(this.g),fe=this.g.ya(),J=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||fu(this.g)))){this.K||K!=4||fe==7||(fe==8||J<=0?ds(3):ds(2)),Ao(this);var u=this.g.ca();this.X=u;var f=o_(this);if(this.o=u==200,n_(this.i,this.v,this.B,this.l,this.S,K,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var C=g;break t}}C=null}if(a=C)xn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bo(this,a);else{this.o=!1,this.m=3,De(12),nn(this),gs(this);break e}}if(this.R){a=!0;let ge;for(;!this.K&&this.C<f.length;)if(ge=a_(this,f),ge==Eo){K==4&&(this.m=4,De(14),a=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==Kl){this.m=4,De(15),xn(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else xn(this.i,this.l,ge,null),bo(this,ge);if(Gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||f.length!=0||this.h.h||(this.m=1,De(16),a=!1),this.o=this.o&&a,!a)xn(this.i,this.l,f,"[Invalid Chunked Response]"),nn(this),gs(this);else if(f.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Do(L),L.P=!0,De(11))}}else xn(this.i,this.l,f,null),bo(this,f);K==4&&nn(this),this.o&&!this.K&&(K==4?Tu(this.j,this):(this.o=!1,Si(this)))}else w_(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,De(12)):(this.m=0,De(13)),nn(this),gs(this)}}}catch{}finally{}};function o_(a){if(!Gl(a))return a.g.la();const u=fu(a.g);if(u==="")return"";let f="";const g=u.length,P=Dt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return nn(a),gs(a),"";a.h.i=new o.TextDecoder}for(let C=0;C<g;C++)a.h.h=!0,f+=a.h.i.decode(u[C],{stream:!(P&&C==g-1)});return u.length=0,a.h.g+=f,a.C=0,a.h.g}function Gl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function a_(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?Eo:(f=Number(u.substring(f,g)),isNaN(f)?Kl:(g+=1,g+f>u.length?Eo:(u=u.slice(g,g+f),a.C=g+f,u)))}xt.prototype.cancel=function(){this.K=!0,nn(this)};function Si(a){a.T=Date.now()+a.H,Xl(a,a.H)}function Xl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=fs(h(a.aa,a),u)}function Ao(a){a.D&&(o.clearTimeout(a.D),a.D=null)}xt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(s_(this.i,this.B),this.M!=2&&(ds(),De(17)),nn(this),this.m=2,gs(this)):Xl(this,this.T-a)};function gs(a){a.j.I==0||a.K||Tu(a.j,a)}function nn(a){Ao(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Ol(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function bo(a,u){try{var f=a.j;if(f.I!=0&&(f.g==a||So(f.h,a))){if(!a.L&&So(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Vi(f),xi(f);else break e;Vo(f),De(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=fs(h(f.Va,f),6e3));Jl(f.h)<=1&&f.ta&&(f.ta=void 0)}else rn(f,11)}else if((a.L||f.g==a)&&Vi(f),!w(u))for(P=f.Ba.g.parse(u),u=0;u<P.length;u++){let J=P[u];const ge=J[0];if(!(ge<=f.K))if(f.K=ge,J=J[1],f.I==2)if(J[0]=="c"){f.M=J[1],f.ba=J[2];const ct=J[3];ct!=null&&(f.ka=ct,f.j.info("VER="+f.ka));const on=J[4];on!=null&&(f.za=on,f.j.info("SVER="+f.za));const Nt=J[5];Nt!=null&&typeof Nt=="number"&&Nt>0&&(g=1.5*Nt,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Mt=a.g;if(Mt){const Ni=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var C=g.h;C.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Po(C,C.h),C.h=null))}if(g.G){const No=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(g.wa=No,te(g.J,g.G,No))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var L=a;if(g.na=Iu(g,g.L?g.ba:null,g.W),L.L){Zl(g.h,L);var K=L,fe=g.O;fe&&(K.H=fe),K.D&&(Ao(K),Si(K)),g.g=L}else _u(g);f.i.length>0&&ki(f)}else J[0]!="stop"&&J[0]!="close"||rn(f,7);else f.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?rn(f,7):ko(f):J[0]!="noop"&&f.l&&f.l.qa(J),f.A=0)}}ds(4)}catch{}}var c_=class{constructor(a,u){this.g=a,this.map=u}};function Yl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ql(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jl(a){return a.h?1:a.g?a.g.size:0}function So(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Po(a,u){a.g?a.g.add(u):a.h=u}function Zl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Yl.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function eu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.G);return u}return T(a.i)}var tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function l_(a,u){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let P,C=null;g>=0?(P=a[f].substring(0,g),C=a[f].substring(g+1)):P=a[f],u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function kt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof kt?(this.l=a.l,ys(this,a.j),this.o=a.o,this.g=a.g,_s(this,a.u),this.h=a.h,Co(this,au(a.i)),this.m=a.m):a&&(u=String(a).match(tu))?(this.l=!1,ys(this,u[1]||"",!0),this.o=vs(u[2]||""),this.g=vs(u[3]||"",!0),_s(this,u[4]),this.h=vs(u[5]||"",!0),Co(this,u[6]||"",!0),this.m=vs(u[7]||"")):(this.l=!1,this.i=new ws(null,this.l))}kt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ts(u,nu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ts(u,nu,!0),"@"),a.push(ms(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ts(f,f.charAt(0)=="/"?d_:h_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ts(f,p_)),a.join("")},kt.prototype.resolve=function(a){const u=at(this);let f=!!a.j;f?ys(u,a.j):f=!!a.o,f?u.o=a.o:f=!!a.g,f?u.g=a.g:f=a.u!=null;var g=a.h;if(f)_s(u,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=u.h.lastIndexOf("/");P!=-1&&(g=u.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const C=[];for(let L=0;L<P.length;){const K=P[L++];K=="."?g&&L==P.length&&C.push(""):K==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&L==P.length&&C.push("")):(C.push(K),g=!0)}g=C.join("/")}else g=P}return f?u.h=g:f=a.i.toString()!=="",f?Co(u,au(a.i)):f=!!a.m,f&&(u.m=a.m),u};function at(a){return new kt(a)}function ys(a,u,f){a.j=f?vs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function _s(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Co(a,u,f){u instanceof ws?(a.i=u,m_(a.i,a.l)):(f||(u=Ts(u,f_)),a.i=new ws(u,a.l))}function te(a,u,f){a.i.set(u,f)}function Pi(a){return te(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function vs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ts(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,u_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function u_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nu=/[#\/\?@]/g,h_=/[#\?:]/g,d_=/[#\?]/g,f_=/[#\?@]/g,p_=/#/g;function ws(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function sn(a){a.g||(a.g=new Map,a.h=0,a.i&&l_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=ws.prototype,t.add=function(a,u){sn(this),this.i=null,a=kn(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function su(a,u){sn(a),u=kn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function iu(a,u){return sn(a),u=kn(a,u),a.g.has(u)}t.forEach=function(a,u){sn(this),this.g.forEach(function(f,g){f.forEach(function(P){a.call(u,P,g,this)},this)},this)};function ru(a,u){sn(a);let f=[];if(typeof u=="string")iu(a,u)&&(f=f.concat(a.g.get(kn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)f=f.concat(a[u]);return f}t.set=function(a,u){return sn(this),this.i=null,a=kn(this,a),iu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=ru(this,a),a.length>0?String(a[0]):u):u};function ou(a,u,f){su(a,u),f.length>0&&(a.i=null,a.g.set(kn(a,u),T(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const P=ms(f);f=ru(this,f);for(let C=0;C<f.length;C++){let L=P;f[C]!==""&&(L+="="+ms(f[C])),a.push(L)}}return this.i=a.join("&")};function au(a){const u=new ws;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function kn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function m_(a,u){u&&!a.j&&(sn(a),a.i=null,a.g.forEach(function(f,g){const P=g.toLowerCase();g!=P&&(su(this,g),ou(this,P,f))},a)),a.j=u}function g_(a,u){const f=new ps;if(o.Image){const g=new Image;g.onload=d(Vt,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(Vt,f,"TestLoadImage: error",!1,u,g),g.onabort=d(Vt,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(Vt,f,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function y_(a,u){const f=new ps,g=new AbortController,P=setTimeout(()=>{g.abort(),Vt(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(C=>{clearTimeout(P),C.ok?Vt(f,"TestPingServer: ok",!0,u):Vt(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Vt(f,"TestPingServer: error",!1,u)})}function Vt(a,u,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function __(){this.g=new e_}function Ro(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ro,Ll),Ro.prototype.g=function(){return new Ci(this.i,this.h)};function Ci(a,u){Se.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ci,Se),t=Ci.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Is(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Is(this)),this.g&&(this.readyState=3,Is(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function cu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Es(this):Is(this),this.readyState==3&&cu(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Es(this))},t.Na=function(a){this.g&&(this.response=a,Es(this))},t.ga=function(){this.g&&Es(this)};function Es(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Is(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Is(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lu(a){let u="";return we(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function xo(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=lu(f),typeof a=="string"?f!=null&&ms(f):te(a,u,f))}function ae(a){Se.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ae,Se);var v_=/^https?$/i,T_=["POST","PUT"];t=ae.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hl.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){uu(this,C);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(T_,u,void 0)>=0)||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of f)this.g.setRequestHeader(C,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(C){uu(this,C)}};function uu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,hu(a),Ri(a)}function hu(a){a.A||(a.A=!0,Ve(a,"complete"),Ve(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ve(this,"complete"),Ve(this,"abort"),Ri(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),ae.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?du(this):this.Xa())},t.Xa=function(){du(this)};function du(a){if(a.h&&typeof r<"u"){if(a.v&&Dt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ve(a,"readystatechange"),Dt(a)==4){a.h=!1;try{const C=a.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=C===0){let L=String(a.D).match(tu)[1]||null;!L&&o.self&&o.self.location&&(L=o.self.location.protocol.slice(0,-1)),g=!v_.test(L?L.toLowerCase():"")}f=g}if(f)Ve(a,"complete"),Ve(a,"success");else{a.o=6;try{var P=Dt(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",hu(a)}}finally{Ri(a)}}}}function Ri(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,u||Ve(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Dt(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Zy(u)}};function fu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function w_(a){const u={};a=(a.g&&Dt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var f=r_(a[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[P]||[];u[P]=C,C.push(f)}wt(u,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function pu(a){this.za=0,this.i=[],this.j=new ps,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=As("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=As("baseRetryDelayMs",5e3,a),this.Za=As("retryDelaySeedMs",1e4,a),this.Ta=As("forwardChannelMaxRetries",2,a),this.va=As("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Yl(a&&a.concurrentRequestLimit),this.Ba=new __,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=pu.prototype,t.ka=8,t.I=1,t.connect=function(a,u,f,g){De(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Iu(this,null,this.W),ki(this)};function ko(a){if(mu(a),a.I==3){var u=a.V++,f=at(a.J);if(te(f,"SID",a.M),te(f,"RID",u),te(f,"TYPE","terminate"),bs(a,f),u=new xt(a,a.j,u),u.M=2,u.A=Pi(at(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=u.A,f=!0),f||(u.g=Au(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Si(u)}Eu(a)}function xi(a){a.g&&(Do(a),a.g.cancel(),a.g=null)}function mu(a){xi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Vi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ki(a){if(!Ql(a.h)&&!a.m){a.m=!0;var u=a.Ea;j||y(),H||(j(),H=!0),A.add(u,a),a.D=0}}function E_(a,u){return Jl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=fs(h(a.Ea,a,u),wu(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new xt(this,this.j,a);let C=this.o;if(this.U&&(C?(C=Et(C),Rl(C,this.U)):C=this.U),this.u!==null||this.R||(P.J=C,C=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=yu(this,P,u),f=at(this.J),te(f,"RID",a),te(f,"CVER",22),this.G&&te(f,"X-HTTP-Session-Id",this.G),bs(this,f),C&&(this.R?u="headers="+ms(lu(C))+"&"+u:this.u&&xo(f,this.u,C)),Po(this.h,P),this.Ra&&te(f,"TYPE","init"),this.S?(te(f,"$req",u),te(f,"SID","null"),P.U=!0,Io(P,f,null)):Io(P,f,u),this.I=2}}else this.I==3&&(a?gu(this,a):this.i.length==0||Ql(this.h)||gu(this))};function gu(a,u){var f;u?f=u.l:f=a.V++;const g=at(a.J);te(g,"SID",a.M),te(g,"RID",f),te(g,"AID",a.K),bs(a,g),a.u&&a.o&&xo(g,a.u,a.o),f=new xt(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),u&&(a.i=u.G.concat(a.i)),u=yu(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Po(a.h,f),Io(f,g,u)}function bs(a,u){a.H&&we(a.H,function(f,g){te(u,g,f)}),a.l&&we({},function(f,g){te(u,g,f)})}function yu(a,u,f){f=Math.min(a.i.length,f);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let K=-1;for(;;){const fe=["count="+f];K==-1?f>0?(K=P[0].g,fe.push("ofs="+K)):K=0:fe.push("ofs="+K);let J=!0;for(let ge=0;ge<f;ge++){var C=P[ge].g;const ct=P[ge].map;if(C-=K,C<0)K=Math.max(0,P[ge].g-100),J=!1;else try{C="req"+C+"_"||"";try{var L=ct instanceof Map?ct:Object.entries(ct);for(const[on,Nt]of L){let Mt=Nt;c(Nt)&&(Mt=_o(Nt)),fe.push(C+on+"="+encodeURIComponent(Mt))}}catch(on){throw fe.push(C+"type="+encodeURIComponent("_badmap")),on}}catch{g&&g(ct)}}if(J){L=fe.join("&");break e}}L=void 0}return a=a.i.splice(0,f),u.G=a,L}function _u(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;j||y(),H||(j(),H=!0),A.add(u,a),a.A=0}}function Vo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=fs(h(a.Da,a),wu(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,vu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=fs(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,De(10),xi(this),vu(this))};function Do(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vu(a){a.g=new xt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=at(a.na);te(u,"RID","rpc"),te(u,"SID",a.M),te(u,"AID",a.K),te(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&te(u,"TO",a.ia),te(u,"TYPE","xmlhttp"),bs(a,u),a.u&&a.o&&xo(u,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Pi(at(u)),f.u=null,f.R=!0,ql(f,a)}t.Va=function(){this.C!=null&&(this.C=null,xi(this),Vo(this),De(19))};function Vi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Tu(a,u){var f=null;if(a.g==u){Vi(a),Do(a),a.g=null;var g=2}else if(So(a.h,u))f=u.G,Zl(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var P=a.D;g=Ai(),Ve(g,new $l(g,f)),ki(a)}else _u(a);else if(P=u.m,P==3||P==0&&u.X>0||!(g==1&&E_(a,u)||g==2&&Vo(a)))switch(f&&f.length>0&&(u=a.h,u.i=u.i.concat(f)),P){case 1:rn(a,5);break;case 4:rn(a,10);break;case 3:rn(a,6);break;default:rn(a,2)}}}function wu(a,u){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*u}function rn(a,u){if(a.j.info("Error code "+u),u==2){var f=h(a.bb,a),g=a.Ua;const P=!g;g=new kt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ys(g,"https"),Pi(g),P?g_(g.toString(),f):y_(g.toString(),f)}else De(2);a.I=0,a.l&&a.l.pa(u),Eu(a),mu(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Eu(a){if(a.I=0,a.ja=[],a.l){const u=eu(a.h);(u.length!=0||a.i.length!=0)&&(b(a.ja,u),b(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function Iu(a,u,f){var g=f instanceof kt?at(f):new kt(f);if(g.g!="")u&&(g.g=u+"."+g.g),_s(g,g.u);else{var P=o.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;const C=new kt(null);g&&ys(C,g),u&&(C.g=u),P&&_s(C,P),f&&(C.h=f),g=C}return f=a.G,u=a.wa,f&&u&&te(g,f,u),te(g,"VER",a.ka),bs(a,g),g}function Au(a,u,f){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new ae(new Ro({ab:f})):new ae(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bu(){}t=bu.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Di(){}Di.prototype.g=function(a,u){return new $e(a,u)};function $e(a,u){Se.call(this),this.g=new pu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!w(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!w(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Vn(this)}p($e,Se),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){ko(this.g)},$e.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=_o(a),a=f);u.i.push(new c_(u.Ya++,a)),u.I==3&&ki(u)},$e.prototype.N=function(){this.g.l=null,delete this.j,ko(this.g),delete this.g,$e.Z.N.call(this)};function Su(a){vo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Su,vo);function Pu(){To.call(this),this.status=1}p(Pu,To);function Vn(a){this.g=a}p(Vn,bu),Vn.prototype.ra=function(){Ve(this.g,"a")},Vn.prototype.qa=function(a){Ve(this.g,new Su(a))},Vn.prototype.pa=function(a){Ve(this.g,new Pu)},Vn.prototype.oa=function(){Ve(this.g,"b")},Di.prototype.createWebChannel=Di.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Km=function(){return new Di},Wm=function(){return Ai()},Hm=tn,Wa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,nr=bi,zl.COMPLETE="complete",zm=zl,Fl.EventType=hs,hs.OPEN="a",hs.CLOSE="b",hs.ERROR="c",hs.MESSAGE="d",Se.prototype.listen=Se.prototype.J,Vs=Fl,ae.prototype.listenOnce=ae.prototype.K,ae.prototype.getLastError=ae.prototype.Ha,ae.prototype.getLastErrorCode=ae.prototype.ya,ae.prototype.getStatus=ae.prototype.ca,ae.prototype.getResponseJson=ae.prototype.La,ae.prototype.getResponseText=ae.prototype.la,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Fa,$m=ae}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
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
 */let as="12.12.0";function Tb(t){as=t}/**
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
 */const vn=new Qr("@firebase/firestore");function Mn(){return vn.logLevel}function B(t,...e){if(vn.logLevel<=G.DEBUG){const n=e.map(zc);vn.debug(`Firestore (${as}): ${t}`,...n)}}function Tn(t,...e){if(vn.logLevel<=G.ERROR){const n=e.map(zc);vn.error(`Firestore (${as}): ${t}`,...n)}}function Js(t,...e){if(vn.logLevel<=G.WARN){const n=e.map(zc);vn.warn(`Firestore (${as}): ${t}`,...n)}}function zc(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function q(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,qm(t,s,n)}function qm(t,e,n){let s=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Tn(s),new Error(s)}function le(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||qm(e,i,s)}function Z(t,e){return t}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Gm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ce.UNAUTHENTICATED))}shutdown(){}}class Eb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ib{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0,42304);let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new gn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(le(typeof s.accessToken=="string",31837,{l:s}),new Gm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new Ce(e)}}class Ab{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class bb{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new Ab(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){le(this.o===void 0,3512);const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Pb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Hc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=Pb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%62))}return s}}function Q(t,e){return t<e?-1:t>e?1:0}function Ka(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.charAt(s),r=e.charAt(s);if(i!==r)return ia(i)===ia(r)?Q(i,r):ia(i)?1:-1}return Q(t.length,e.length)}const Cb=55296,Rb=57343;function ia(t){const e=t.charCodeAt(0);return e>=Cb&&e<=Rb}function Qn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */const _d="__name__";class ut{constructor(e,n,s){n===void 0?n=0:n>e.length&&q(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&q(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ut.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ut?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=ut.compareSegments(e.get(i),n.get(i));if(r!==0)return r}return Q(e.length,n.length)}static compareSegments(e,n){const s=ut.isNumericId(e),i=ut.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?ut.extractNumericId(e).compare(ut.extractNumericId(n)):Ka(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $c.fromString(e.substring(4,e.length-2))}}class re extends ut{construct(e,n,s){return new re(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const xb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends ut{construct(e,n,s){return new Ae(e,n,s)}static isValidIdentifier(e){return xb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_d}static keyField(){return new Ae([_d])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new $(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new $(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new $(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(re.fromString(e))}static fromName(e){return new W(re.fromString(e).popFirst(5))}static empty(){return new W(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new re(e.slice()))}}/**
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
 */function Xm(t,e,n){if(!n)throw new $(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kb(t,e,n,s){if(e===!0&&s===!0)throw new $(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vd(t){if(!W.isDocumentKey(t))throw new $(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Td(t){if(W.isDocumentKey(t))throw new $(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ym(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Wc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q(12329,{type:typeof t})}function Qm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(t);throw new $(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function de(t,e){const n={typeString:t};return e&&(n.value=e),n}function di(t,e){if(!Ym(t))throw new $(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(i&&typeof o!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){n=`Expected '${s}' field to equal '${r.value}'`;break}}if(n)throw new $(D.INVALID_ARGUMENT,n);return!0}/**
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
 */const wd=-62135596800,Ed=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Ed);return new ie(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wd)throw new $(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ed}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(di(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:de("string",ie._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new ie(0,0))}static max(){return new se(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zs=-1;function Vb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(s===1e9?new ie(n+1,0):new ie(n,s));return new Yt(i,W.empty(),e)}function Db(t){return new Yt(t.readTime,t.key,Zs)}class Yt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Yt(se.min(),W.empty(),Zs)}static max(){return new Yt(se.max(),W.empty(),Zs)}}function Nb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
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
 */const Mb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ob{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Kc(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==Mb)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,s)=>{n(e)})}static reject(e){return new V((n,s)=>{s(e)})}static waitFor(e){return new V((n,s)=>{let i=0,r=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=V.resolve(!1);for(const s of e)n=n.next(i=>i?V.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new V((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===r&&s(o)},d=>i(d))}})}static doWhile(e,n){return new V((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Lb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qc.ce=-1;/**
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
 */const Gc=-1;function Xc(t){return t==null}function Ar(t){return t===0&&1/t==-1/0}function Fb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ar(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Jm="";function jb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Id(e)),e=Ub(t.get(n),e);return Id(e)}function Ub(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const r=t.charAt(i);switch(r){case"\0":n+="";break;case Jm:n+="";break;default:n+=r}}return n}function Id(t){return t+Jm+""}/**
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
 */function Ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||Ee.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zi(this.root,e,this.comparator,!0)}}class zi{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=i??Ee.EMPTY,this.right=r??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ee(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ee.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bd(this.data.getIterator())}getIteratorFrom(e){return new bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tt{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new tt([])}unionWith(e){let n=new be(Ae.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Bb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Bb("Invalid base64 string: "+r):r}}(e);return new vt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const $b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wn(t){if(le(!!t,39018),typeof t=="string"){let e=0;const n=$b.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jn(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
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
 */const eg="server_timestamp",tg="__type__",ng="__previous_value__",sg="__local_write_time__";function Yc(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[tg])==null?void 0:s.stringValue)===eg}function Qc(t){const e=t.mapValue.fields[ng];return Yc(e)?Qc(e):e}function br(t){const e=wn(t.mapValue.fields[sg].timestampValue);return new ie(e.seconds,e.nanos)}/**
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
 */class zb{constructor(e,n,s,i,r,o,c,l,h,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const Sr="(default)";class Pr{constructor(e,n){this.projectId=e,this.database=n||Sr}static empty(){return new Pr("","")}get isDefaultDatabase(){return this.database===Sr}isEqual(e){return e instanceof Pr&&e.projectId===this.projectId&&e.database===this.database}}function Hb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pr(t.options.projectId,e)}/**
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
 */const ig="__type__",Wb="__max__",Hi={mapValue:{}},rg="__vector__",qa="value";function En(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yc(t)?4:qb(t)?9007199254740991:Kb(t)?10:11:q(28295,{value:t})}function Tt(t,e){if(t===e)return!0;const n=En(t);if(n!==En(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return br(t).isEqual(br(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=wn(i.timestampValue),c=wn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Jn(i.bytesValue).isEqual(Jn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Ie(i.geoPointValue.latitude)===Ie(r.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ie(i.integerValue)===Ie(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Ie(i.doubleValue),c=Ie(r.doubleValue);return o===c?Ar(o)===Ar(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Qn(t.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},c=r.mapValue.fields||{};if(Ad(o)!==Ad(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Tt(o[l],c[l])))return!1;return!0}(t,e);default:return q(52216,{left:t})}}function ei(t,e){return(t.values||[]).find(n=>Tt(n,e))!==void 0}function Zn(t,e){if(t===e)return 0;const n=En(t),s=En(e);if(n!==s)return Q(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(r,o){const c=Ie(r.integerValue||r.doubleValue),l=Ie(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Sd(t.timestampValue,e.timestampValue);case 4:return Sd(br(t),br(e));case 5:return Ka(t.stringValue,e.stringValue);case 6:return function(r,o){const c=Jn(r),l=Jn(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const c=r.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=Q(c[h],l[h]);if(d!==0)return d}return Q(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const c=Q(Ie(r.latitude),Ie(o.latitude));return c!==0?c:Q(Ie(r.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pd(t.arrayValue,e.arrayValue);case 10:return function(r,o){var m,T,b,x;const c=r.fields||{},l=o.fields||{},h=(m=c[qa])==null?void 0:m.arrayValue,d=(T=l[qa])==null?void 0:T.arrayValue,p=Q(((b=h==null?void 0:h.values)==null?void 0:b.length)||0,((x=d==null?void 0:d.values)==null?void 0:x.length)||0);return p!==0?p:Pd(h,d)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===Hi.mapValue&&o===Hi.mapValue)return 0;if(r===Hi.mapValue)return 1;if(o===Hi.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Ka(l[p],d[p]);if(m!==0)return m;const T=Zn(c[l[p]],h[d[p]]);if(T!==0)return T}return Q(l.length,d.length)}(t.mapValue,e.mapValue);default:throw q(23264,{he:n})}}function Sd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=wn(t),s=wn(e),i=Q(n.seconds,s.seconds);return i!==0?i:Q(n.nanos,s.nanos)}function Pd(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=Zn(n[i],s[i]);if(r)return r}return Q(n.length,s.length)}function es(t){return Ga(t)}function Ga(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=wn(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Ga(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Ga(n.fields[o])}`;return i+"}"}(t.mapValue):q(61005,{value:t})}function sr(t){switch(En(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qc(t);return e?16+sr(e):16;case 5:return 2*t.stringValue.length;case 6:return Jn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,r)=>i+sr(r),0)}(t.arrayValue);case 10:case 11:return function(s){let i=0;return cs(s.fields,(r,o)=>{i+=r.length+sr(o)}),i}(t.mapValue);default:throw q(13486,{value:t})}}function Xa(t){return!!t&&"integerValue"in t}function Jc(t){return!!t&&"arrayValue"in t}function ir(t){return!!t&&"mapValue"in t}function Kb(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ig])==null?void 0:s.stringValue)===rg}function Us(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Us(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return{...t}}function qb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Wb}/**
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
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ir(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=Ae.emptyPath(),s={},i=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=c.popLast()}o?s[c.lastSegment()]=Us(o):i.push(c.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ir(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ir(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){cs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Je(Us(this.value))}}function og(t){const e=[];return cs(t.fields,(n,s)=>{const i=new Ae([n]);if(ir(s)){const r=og(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new tt(e)}/**
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
 */class Qe{constructor(e,n,s,i,r,o,c){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Qe(e,0,se.min(),se.min(),se.min(),Je.empty(),0)}static newFoundDocument(e,n,s,i){return new Qe(e,1,n,se.min(),s,i,0)}static newNoDocument(e,n){return new Qe(e,2,n,se.min(),se.min(),Je.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,se.min(),se.min(),Je.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cr{constructor(e,n){this.position=e,this.inclusive=n}}function Cd(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=Zn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Rd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Gb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ag{}class ve extends ag{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Yb(e,n,s):n==="array-contains"?new Zb(e,s):n==="in"?new eS(e,s):n==="not-in"?new tS(e,s):n==="array-contains-any"?new nS(e,s):new ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Qb(e,s):new Jb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Zn(n,this.value)):n!==null&&En(this.value)===En(n)&&this.matchesComparison(Zn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends ag{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Qt(e,n)}matches(e){return cg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function cg(t){return t.op==="and"}function lg(t){return Xb(t)&&cg(t)}function Xb(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function Ya(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+es(t.value);if(lg(t))return t.filters.map(e=>Ya(e)).join(",");{const e=t.filters.map(n=>Ya(n)).join(",");return`${t.op}(${e})`}}function ug(t,e){return t instanceof ve?function(s,i){return i instanceof ve&&s.op===i.op&&s.field.isEqual(i.field)&&Tt(s.value,i.value)}(t,e):t instanceof Qt?function(s,i){return i instanceof Qt&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,c)=>r&&ug(o,i.filters[c]),!0):!1}(t,e):void q(19439)}function hg(t){return t instanceof ve?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(hg).join(" ,")+"}"}(t):"Filter"}class Yb extends ve{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class Qb extends ve{constructor(e,n){super(e,"in",n),this.keys=dg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Jb extends ve{constructor(e,n){super(e,"not-in",n),this.keys=dg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dg(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class Zb extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jc(n)&&ei(n.arrayValue,this.value)}}class eS extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ei(this.value.arrayValue,n)}}class tS extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ei(this.value.arrayValue,n)}}class nS extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ei(this.value.arrayValue,s))}}/**
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
 */class sS{constructor(e,n=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function xd(t,e=null,n=[],s=[],i=null,r=null,o=null){return new sS(t,e,n,s,i,r,o)}function Zc(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ya(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>es(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>es(s)).join(",")),e.Te=n}return e.Te}function el(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Gb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ug(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rd(t.startAt,e.startAt)&&Rd(t.endAt,e.endAt)}/**
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
 */class Jr{constructor(e,n=null,s=[],i=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function iS(t,e,n,s,i,r,o,c){return new Jr(t,e,n,s,i,r,o,c)}function rS(t){return new Jr(t)}function kd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oS(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function aS(t){return t.collectionGroup!==null}function Bs(t){const e=Z(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const r of e.explicitOrderBy)e.Ee.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new be(Ae.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new Rr(r,s))}),n.has(Ae.keyField().canonicalString())||e.Ee.push(new Rr(Ae.keyField(),s))}return e.Ee}function yn(t){const e=Z(t);return e.Ie||(e.Ie=cS(e,Bs(t))),e.Ie}function cS(t,e){if(t.limitType==="F")return xd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Rr(i.field,r)});const n=t.endAt?new Cr(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Cr(t.startAt.position,t.startAt.inclusive):null;return xd(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Qa(t,e,n){return new Jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fg(t,e){return el(yn(t),yn(e))&&t.limitType===e.limitType}function pg(t){return`${Zc(yn(t))}|lt:${t.limitType}`}function Ps(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>hg(i)).join(", ")}]`),Xc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>es(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>es(i)).join(",")),`Target(${s})`}(yn(t))}; limitType=${t.limitType})`}function tl(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):W.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Bs(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,c,l){const h=Cd(o,c,l);return o.inclusive?h<=0:h<0}(s.startAt,Bs(s),i)||s.endAt&&!function(o,c,l){const h=Cd(o,c,l);return o.inclusive?h>=0:h>0}(s.endAt,Bs(s),i))}(t,e)}function lS(t){return(e,n)=>{let s=!1;for(const i of Bs(t)){const r=uS(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function uS(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,o,c){const l=o.data.field(r),h=c.data.field(r);return l!==null&&h!==null?Zn(l,h):q(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return q(19790,{direction:t.dir})}}/**
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
 */class Cn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Zm(this.inner)}size(){return this.innerSize}}/**
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
 */const hS=new Ue(W.comparator);function xr(){return hS}const mg=new Ue(W.comparator);function Wi(...t){let e=mg;for(const n of t)e=e.insert(n.key,n);return e}function gg(t){let e=mg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function dn(){return $s()}function yg(){return $s()}function $s(){return new Cn(t=>t.toString(),(t,e)=>t.isEqual(e))}const dS=new Ue(W.comparator),fS=new be(W.comparator);function Re(...t){let e=fS;for(const n of t)e=e.add(n);return e}const pS=new be(Q);function mS(){return pS}/**
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
 */function nl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ar(e)?"-0":e}}function _g(t){return{integerValue:""+t}}function gS(t,e){return Fb(e)?_g(e):nl(t,e)}/**
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
 */class Zr{constructor(){this._=void 0}}function yS(t,e,n){return t instanceof ti?function(i,r){const o={fields:{[tg]:{stringValue:eg},[sg]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Yc(r)&&(r=Qc(r)),r&&(o.fields[ng]=r),{mapValue:o}}(n,e):t instanceof ni?Tg(t,e):t instanceof si?wg(t,e):function(i,r){const o=vg(i,r),c=Vd(o)+Vd(i.Ae);return Xa(o)&&Xa(i.Ae)?_g(c):nl(i.serializer,c)}(t,e)}function _S(t,e,n){return t instanceof ni?Tg(t,e):t instanceof si?wg(t,e):n}function vg(t,e){return t instanceof kr?function(s){return Xa(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class ti extends Zr{}class ni extends Zr{constructor(e){super(),this.elements=e}}function Tg(t,e){const n=Eg(e);for(const s of t.elements)n.some(i=>Tt(i,s))||n.push(s);return{arrayValue:{values:n}}}class si extends Zr{constructor(e){super(),this.elements=e}}function wg(t,e){let n=Eg(e);for(const s of t.elements)n=n.filter(i=>!Tt(i,s));return{arrayValue:{values:n}}}class kr extends Zr{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Vd(t){return Ie(t.integerValue||t.doubleValue)}function Eg(t){return Jc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vS{constructor(e,n){this.field=e,this.transform=n}}function TS(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof ni&&i instanceof ni||s instanceof si&&i instanceof si?Qn(s.elements,i.elements,Tt):s instanceof kr&&i instanceof kr?Tt(s.Ae,i.Ae):s instanceof ti&&i instanceof ti}(t.transform,e.transform)}class wS{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class eo{}function Ig(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bg(t.key,bt.none()):new pi(t.key,t.data,bt.none());{const n=t.data,s=Je.empty();let i=new be(Ae.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Rn(t.key,s,new tt(i.toArray()),bt.none())}}function ES(t,e,n){t instanceof pi?function(i,r,o){const c=i.value.clone(),l=Nd(i.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Rn?function(i,r,o){if(!rr(i.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Nd(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Ag(i)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zs(t,e,n,s){return t instanceof pi?function(r,o,c,l){if(!rr(r.precondition,o))return c;const h=r.value.clone(),d=Md(r.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,s):t instanceof Rn?function(r,o,c,l){if(!rr(r.precondition,o))return c;const h=Md(r.fieldTransforms,l,o),d=o.data;return d.setAll(Ag(r)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(t,e,n,s):function(r,o,c){return rr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function IS(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=vg(s.transform,i||null);r!=null&&(n===null&&(n=Je.empty()),n.set(s.field,r))}return n||null}function Dd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Qn(s,i,(r,o)=>TS(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pi extends eo{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rn extends eo{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ag(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Nd(t,e,n){const s=new Map;le(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,_S(o,c,n[i]))}return s}function Md(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,yS(r,o,e))}return s}class bg extends eo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AS extends eo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bS{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&ES(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=zs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=zs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=yg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=n.has(i.key)?null:c;const l=Ig(o,c);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Re())}isEqual(e){return this.batchId===e.batchId&&Qn(this.mutations,e.mutations,(n,s)=>Dd(n,s))&&Qn(this.baseMutations,e.baseMutations,(n,s)=>Dd(n,s))}}class sl{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){le(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=function(){return dS}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new sl(e,n,s,i)}}/**
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
 */class SS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ue,Y;function PS(t){switch(t){case D.OK:return q(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return q(15467,{code:t})}}function CS(t){if(t===void 0)return Tn("GRPC error has no .code"),D.UNKNOWN;switch(t){case ue.OK:return D.OK;case ue.CANCELLED:return D.CANCELLED;case ue.UNKNOWN:return D.UNKNOWN;case ue.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ue.INTERNAL:return D.INTERNAL;case ue.UNAVAILABLE:return D.UNAVAILABLE;case ue.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ue.NOT_FOUND:return D.NOT_FOUND;case ue.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ue.ABORTED:return D.ABORTED;case ue.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ue.DATA_LOSS:return D.DATA_LOSS;default:return q(39323,{code:t})}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new $c([4294967295,4294967295],0);class RS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ja(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kS(t,e){return Ja(t,e.toTimestamp())}function $n(t){return le(!!t,49232),se.fromTimestamp(function(n){const s=wn(n);return new ie(s.seconds,s.nanos)}(t))}function Sg(t,e){return Za(t,e).canonicalString()}function Za(t,e){const n=function(i){return new re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function VS(t){const e=re.fromString(t);return le(US(e),10190,{key:e.toString()}),e}function ec(t,e){return Sg(t.databaseId,e.path)}function DS(t){const e=VS(t);return e.length===4?re.emptyPath():MS(e)}function NS(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MS(t){return le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Od(t,e,n){return{name:ec(t,e),fields:n.value.mapValue.fields}}function OS(t,e){let n;if(e instanceof pi)n={update:Od(t,e.key,e.value)};else if(e instanceof bg)n={delete:ec(t,e.key)};else if(e instanceof Rn)n={update:Od(t,e.key,e.data),updateMask:jS(e.fieldMask)};else{if(!(e instanceof AS))return q(16599,{dt:e.type});n={verify:ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const c=o.transform;if(c instanceof ti)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ni)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof kr)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw q(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:kS(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:q(27497)}(t,e.precondition)),n}function LS(t,e){return t&&t.length>0?(le(e!==void 0,14353),t.map(n=>function(i,r){let o=i.updateTime?$n(i.updateTime):$n(r);return o.isEqual(se.min())&&(o=$n(r)),new wS(o,i.transformResults||[])}(n,e))):[]}function FS(t){let e=DS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){le(s===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let r=[];n.where&&(r=function(p){const m=Pg(p);return m instanceof Qt&&lg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(b){return new Rr(On(b.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Xc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,T=p.values||[];return new Cr(T,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,T=p.values||[];return new Cr(T,m)}(n.endAt)),iS(e,i,o,r,c,"F",l,h)}function Pg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=On(n.unaryFilter.field);return ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=On(n.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=On(n.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=On(n.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(t):t.fieldFilter!==void 0?function(n){return ve.create(On(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(s=>Pg(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(n.compositeFilter.op))}(t):q(30097,{filter:t})}function On(t){return Ae.fromServerFormat(t.fieldPath)}function jS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function US(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Cg(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class BS{constructor(e){this.yt=e}}function $S(t){const e=FS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qa(e,e.limit,"L"):e}/**
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
 */class zS{constructor(){this.bn=new HS}addToCollectionParentIndex(e,n){return this.bn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Yt.min())}updateCollectionGroup(e,n,s){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class HS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new be(re.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new be(re.comparator)).toArray()}}/**
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
 */const Ld={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rg=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(Rg,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);/**
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
 */class ts{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ts(0)}static ar(){return new ts(-1)}}/**
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
 */const Fd="LruGarbageCollector",WS=1048576;function jd([t,e],[n,s]){const i=Q(t,n);return i===0?Q(e,s):i}class KS{constructor(e){this.Pr=e,this.buffer=new be(jd),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();jd(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qS{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(Fd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fi(n)?B(Fd,"Ignoring IndexedDB error during garbage collection: ",n):await Kc(n)}await this.Ar(3e5)})}}class GS{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return V.resolve(qc.ce);const s=new KS(n);return this.Vr.forEachTarget(e,i=>s.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>s.Ir(i))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Ld)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ld):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let s,i,r,o,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(s=p,c=Date.now(),this.removeTargets(e,s,n))).next(p=>(r=p,l=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(h=Date.now(),Mn()<=G.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p})))}}function XS(t,e){return new GS(t,e)}/**
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
 */class YS{constructor(){this.changes=new Cn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?V.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JS{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&zs(s.mutation,i,tt.empty(),ie.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Re()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Re()){const i=dn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Wi();return r.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=dn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Re()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,s,i){let r=xr();const o=$s(),c=function(){return $s()}();return n.forEach((l,h)=>{const d=s.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof Rn)?r=r.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),zs(d.mutation,h,d.mutation.getFieldMask(),ie.now())):o.set(h.key,tt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>c.set(h,new QS(d,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const s=$s();let i=new Ue((o,c)=>o-c),r=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=s.get(l)||tt.empty();d=c.applyToLocalView(h,d),s.set(l,d);const p=(i.get(c.batchId)||Re()).add(l);i=i.insert(c.batchId,p)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=yg();d.forEach(m=>{if(!r.has(m)){const T=Ig(n.get(m),s.get(m));T!==null&&p.set(m,T),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return oS(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):V.resolve(dn());let c=Zs,l=r;return o.next(h=>V.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),r.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,l,h,Re())).next(d=>({batchId:c,changes:gg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let i=Wi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Wi();return this.indexManager.getCollectionParents(e,r).next(c=>V.forEach(c,l=>{const h=function(p,m){return new Jr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,s,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Qe.newInvalidDocument(d)))});let c=Wi();return o.forEach((l,h)=>{const d=r.get(l);d!==void 0&&zs(d.mutation,h,tt.empty(),ie.now()),tl(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class ZS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return V.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:$n(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:$S(i.bundledQuery),readTime:$n(i.readTime)}}(n)),V.resolve()}}/**
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
 */class e1{constructor(){this.overlays=new Ue(W.comparator),this.Lr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const s=dn();return V.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.St(e,n,r)}),V.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Lr.delete(s)),V.resolve()}getOverlaysForCollection(e,n,s){const i=dn(),r=n.length+1,o=new W(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ue((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let d=r.get(h.largestBatchId);d===null&&(d=dn(),r=r.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=dn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=i)););return V.resolve(c)}St(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new SS(n,s));let r=this.Lr.get(n);r===void 0&&(r=Re(),this.Lr.set(n,r)),this.Lr.set(n,r.add(s.key))}}/**
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
 */class t1{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class il{constructor(){this.kr=new be(_e.qr),this.Kr=new be(_e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const s=new _e(e,n);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Wr(new _e(e,n))}Qr(e,n){e.forEach(s=>this.removeReference(s,n))}Gr(e){const n=new W(new re([])),s=new _e(n,e),i=new _e(n,e+1),r=[];return this.Kr.forEachInRange([s,i],o=>{this.Wr(o),r.push(o.key)}),r}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new W(new re([])),s=new _e(n,e),i=new _e(n,e+1);let r=Re();return this.Kr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new _e(e,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return W.comparator(e.key,n.key)||Q(e.Jr,n.Jr)}static Ur(e,n){return Q(e.Jr,n.Jr)||W.comparator(e.key,n.key)}}/**
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
 */class n1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new be(_e.qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bS(r,n,s,i);this.mutationQueue.push(o);for(const c of i)this.Hr=this.Hr.add(new _e(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Xr(s),r=i<0?0:i;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Gc:this.Yn-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),r=[];return this.Hr.forEachInRange([s,i],o=>{const c=this.Zr(o.Jr);r.push(c)}),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new be(Q);return n.forEach(i=>{const r=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([r,o],c=>{s=s.add(c.Jr)})}),V.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new _e(new W(r),0);let c=new be(Q);return this.Hr.forEachWhile(l=>{const h=l.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.Jr)),!0)},o),V.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(s=>{const i=this.Zr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return V.forEach(n.mutations,i=>{const r=new _e(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=s})}nr(e){}containsKey(e,n){const s=new _e(n,0),i=this.Hr.firstAfterOrEqual(s);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class s1{constructor(e){this.ti=e,this.docs=function(){return new Ue(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return V.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=xr();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Qe.newInvalidDocument(i))}),V.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=xr();const o=n.path,c=new W(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Nb(Db(d),s)<=0||(i.has(d.key)||tl(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(e,n,s,i){q(9500)}ni(e,n){return V.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new i1(this)}getSize(e){return V.resolve(this.size)}}class i1 extends YS{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(s)}),V.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class r1{constructor(e){this.persistence=e,this.ri=new Cn(n=>Zc(n),el),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.ii=0,this.si=new il,this.targetCount=0,this.oi=ts._r()}forEachTarget(e,n){return this.ri.forEach((s,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),V.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.lr(n),V.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),V.waitFor(r).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const s=this.ri.get(n)||null;return V.resolve(s)}addMatchingKeys(e,n,s){return this.si.$r(n,s),V.resolve()}removeMatchingKeys(e,n,s){this.si.Qr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const s=this.si.jr(n);return V.resolve(s)}containsKey(e,n){return V.resolve(this.si.containsKey(n))}}/**
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
 */class xg{constructor(e,n){this._i={},this.overlays={},this.ai=new qc(0),this.ui=!1,this.ui=!0,this.ci=new t1,this.referenceDelegate=e(this),this.li=new r1(this),this.indexManager=new zS,this.remoteDocumentCache=function(i){return new s1(i)}(s=>this.referenceDelegate.hi(s)),this.serializer=new BS(n),this.Pi=new ZS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new e1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this._i[e.toKey()];return s||(s=new n1(n,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const i=new o1(this.ai.next());return this.referenceDelegate.Ti(),s(i).next(r=>this.referenceDelegate.Ei(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ii(e,n){return V.or(Object.values(this._i).map(s=>()=>s.containsKey(e,n)))}}class o1 extends Ob{constructor(e){super(),this.currentSequenceNumber=e}}class rl{constructor(e){this.persistence=e,this.Ri=new il,this.Ai=null}static Vi(e){return new rl(e)}get di(){if(this.Ai)return this.Ai;throw q(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),V.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.di.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,s=>{const i=W.fromPath(s);return this.mi(e,i).next(r=>{r||n.removeEntry(i,se.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Vr{constructor(e,n){this.persistence=e,this.fi=new Cn(s=>jb(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=XS(this,n)}static Vi(e,n){return new Vr(e,n)}Ti(){}Ei(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(i=>s+i))}pr(e){let n=0;return this.mr(e,s=>{n++}).next(()=>n)}mr(e,n){return V.forEach(this.fi,(s,i)=>this.wr(e,s,i).next(r=>r?V.resolve():n(i)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(c=>{c||(s++,r.removeEntry(o,se.min()))})).next(()=>r.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),V.resolve()}removeReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=sr(e.data.value)),n}wr(e,n,s){return V.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return V.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ol{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ts=s,this.Es=i}static Is(e,n){let s=Re(),i=Re();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ol(e,n.fromCache,s,i)}}/**
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
 */class a1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class c1{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return eA()?8:Lb(ke())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.gs(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ps(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new a1;return this.ys(e,n,o).next(c=>{if(r.result=c,this.As)return this.ws(e,n,o,c.size)})}).next(()=>r.result)}ws(e,n,s,i){return s.documentReadCount<this.Vs?(Mn()<=G.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Mn()<=G.DEBUG&&B("QueryEngine","Query:",Ps(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?(Mn()<=G.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):V.resolve())}gs(e,n){if(kd(n))return V.resolve(null);let s=yn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qa(n,null,"F"),s=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Re(...r);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,s).next(l=>{const h=this.Ss(n,c);return this.bs(n,h,o,l.readTime)?this.gs(e,Qa(n,null,"F")):this.Ds(e,h,n,l)}))})))}ps(e,n,s,i){return kd(n)||i.isEqual(se.min())?V.resolve(null):this.fs.getDocuments(e,s).next(r=>{const o=this.Ss(n,r);return this.bs(n,o,s,i)?V.resolve(null):(Mn()<=G.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ps(n)),this.Ds(e,o,n,Vb(i,Zs)).next(c=>c))})}Ss(e,n){let s=new be(lS(e));return n.forEach((i,r)=>{tl(e,r)&&(s=s.add(r))}),s}bs(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(e,n,s){return Mn()<=G.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.fs.getDocumentsMatchingQuery(e,n,Yt.min(),s)}Ds(e,n,s,i){return this.fs.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */const l1="LocalStore";class u1{constructor(e,n,s,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Ue(Q),this.Fs=new Cn(r=>Zc(r),el),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JS(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function h1(t,e,n,s){return new u1(t,e,n,s)}async function kg(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Os(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],c=[];let l=Re();for(const h of i){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of r){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(s,l).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:c}))})})}function d1(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let T=V.resolve();return m.forEach(b=>{T=T.next(()=>d.getEntry(l,b)).next(x=>{const R=h.docVersions.get(b);le(R!==null,48541),x.version.compareTo(R)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let l=Re();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function f1(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function p1(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Gc),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class Ud{constructor(){this.activeTargetIds=mS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m1{constructor(){this.vo=new Ud,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,s){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ud,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class g1{Mo(e){}shutdown(){}}/**
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
 */const Bd="ConnectivityMonitor";class $d{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Bd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Bd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ki=null;function tc(){return Ki===null?Ki=function(){return 268435456+Math.round(2147483648*Math.random())}():Ki++,"0x"+Ki.toString(16)}/**
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
 */const ra="RestConnection",y1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _1{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===Sr?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(e,n,s,i,r){const o=tc(),c=this.Qo(e,n.toUriEncodedString());B(ra,`Sending RPC '${e}' ${o}:`,c,s);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,r);const{host:h}=new URL(c),d=hi(h);return this.zo(e,c,l,s,d).then(p=>(B(ra,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Js(ra,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",s),p})}jo(e,n,s,i,r,o){return this.Wo(e,n,s,i,r)}Go(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}Qo(e,n){const s=y1[e];let i=`${this.Ko}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class v1{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Pe="WebChannelConnection",Cs=(t,e,n)=>{t.listen(e,s=>{try{n(s)}catch(i){setTimeout(()=>{throw i},0)}})};class zn extends _1{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!zn.c_){const e=Wm();Cs(e,Hm.STAT_EVENT,n=>{n.stat===Wa.PROXY?B(Pe,"STAT_EVENT: detected buffering proxy"):n.stat===Wa.NOPROXY&&B(Pe,"STAT_EVENT: detected no buffering proxy")}),zn.c_=!0}}zo(e,n,s,i,r){const o=tc();return new Promise((c,l)=>{const h=new $m;h.setWithCredentials(!0),h.listenOnce(zm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case nr.NO_ERROR:const p=h.getResponseJson();B(Pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case nr.TIMEOUT:B(Pe,`RPC '${e}' ${o} timed out`),l(new $(D.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const m=h.getStatus();if(B(Pe,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const b=T==null?void 0:T.error;if(b&&b.status&&b.message){const x=function(k){const M=k.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(M)>=0?M:D.UNKNOWN}(b.status);l(new $(x,b.message))}else l(new $(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new $(D.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Pe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);B(Pe,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",d,s,15)})}T_(e,n,s){const i=tc(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=r.join("");B(Pe,`Creating RPC '${e}' stream ${i}: ${h}`,c);const d=o.createWebChannel(h,c);this.E_(d);let p=!1,m=!1;const T=new v1({Jo:b=>{m?B(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(p||(B(Pe,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),B(Pe,`RPC '${e}' stream ${i} sending:`,b),d.send(b))},Ho:()=>d.close()});return Cs(d,Vs.EventType.OPEN,()=>{m||(B(Pe,`RPC '${e}' stream ${i} transport opened.`),T.i_())}),Cs(d,Vs.EventType.CLOSE,()=>{m||(m=!0,B(Pe,`RPC '${e}' stream ${i} transport closed`),T.o_(),this.I_(d))}),Cs(d,Vs.EventType.ERROR,b=>{m||(m=!0,Js(Pe,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),T.o_(new $(D.UNAVAILABLE,"The operation could not be completed")))}),Cs(d,Vs.EventType.MESSAGE,b=>{var x;if(!m){const R=b.data[0];le(!!R,16349);const k=R,M=(k==null?void 0:k.error)||((x=k[0])==null?void 0:x.error);if(M){B(Pe,`RPC '${e}' stream ${i} received error:`,M);const O=M.status;let F=function(A){const y=ue[A];if(y!==void 0)return CS(y)}(O),j=M.message;O==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&Js(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),F===void 0&&(F=D.INTERNAL,j="Unknown error status: "+O+" with message "+M.message),m=!0,T.o_(new $(F,j)),d.close()}else B(Pe,`RPC '${e}' stream ${i} received:`,R),T.__(R)}}),zn.u_(),setTimeout(()=>{T.s_()},0),T}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,s){super.Go(e,n,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Km()}}/**
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
 */function T1(t){return new zn(t)}function oa(){return typeof document<"u"?document:null}/**
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
 */function to(t){return new RS(t,!0)}/**
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
 */zn.c_=!1;class Vg{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-s);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const zd="PersistentStream";class w1{constructor(e,n,s,i,r,o,c,l){this.Ci=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.D_===n&&this.G_(s,i)},s=>{e(()=>{const i=new $(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)})})}G_(e,n){const s=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{s(()=>this.z_(i))}),this.stream.onMessage(i=>{s(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(zd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(B(zd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E1 extends w1{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=LS(e.writeResults,e.commitTime),s=$n(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=NS(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>OS(this.serializer,s))};this.q_(n)}}/**
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
 */class I1{}class A1 extends I1{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Wo(e,Za(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(D.UNKNOWN,r.toString())})}jo(e,n,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,Za(n,s),i,o,c,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(D.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function b1(t,e,n,s){return new A1(t,e,n,s)}class S1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Tn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const mi="RemoteStore";class P1{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo(o=>{s.enqueueAndForget(async()=>{yi(this)&&(B(mi,"Restarting streams for network reachability change."),await async function(l){const h=Z(l);h.Ia.add(4),await gi(h),h.Va.set("Unknown"),h.Ia.delete(4),await no(h)}(this))})}),this.Va=new S1(s,i)}}async function no(t){if(yi(t))for(const e of t.Ra)await e(!0)}async function gi(t){for(const e of t.Ra)await e(!1)}function yi(t){return Z(t).Ia.size===0}async function Dg(t,e,n){if(!fi(e))throw e;t.Ia.add(1),await gi(t),t.Va.set("Offline"),n||(n=()=>f1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(mi,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await no(t)})}function Ng(t,e){return e().catch(n=>Dg(t,n,e))}async function so(t){const e=Z(t),n=Jt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gc;for(;C1(e);)try{const i=await p1(e.localStore,s);if(i===null){e.Ta.length===0&&n.L_();break}s=i.batchId,R1(e,i)}catch(i){await Dg(e,i)}Mg(e)&&Og(e)}function C1(t){return yi(t)&&t.Ta.length<10}function R1(t,e){t.Ta.push(e);const n=Jt(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Mg(t){return yi(t)&&!Jt(t).x_()&&t.Ta.length>0}function Og(t){Jt(t).start()}async function x1(t){Jt(t).ra()}async function k1(t){const e=Jt(t);for(const n of t.Ta)e.ea(n.mutations)}async function V1(t,e,n){const s=t.Ta.shift(),i=sl.from(s,e,n);await Ng(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await so(t)}async function D1(t,e){e&&Jt(t).Y_&&await async function(s,i){if(function(o){return PS(o)&&o!==D.ABORTED}(i.code)){const r=s.Ta.shift();Jt(s).B_(),await Ng(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await so(s)}}(t,e),Mg(t)&&Og(t)}async function Hd(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),B(mi,"RemoteStore received new credentials");const s=yi(n);n.Ia.add(3),await gi(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await no(n)}async function N1(t,e){const n=Z(t);e?(n.Ia.delete(2),await no(n)):e||(n.Ia.add(2),await gi(n),n.Va.set("Unknown"))}function Jt(t){return t.fa||(t.fa=function(n,s,i){const r=Z(n);return r.sa(),new E1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:x1.bind(null,t),t_:D1.bind(null,t),ta:k1.bind(null,t),na:V1.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await so(t)):(await t.fa.stop(),t.Ta.length>0&&(B(mi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class al{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,c=new al(e,n,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lg(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),fi(t))return new $(D.UNAVAILABLE,`${e}: ${t}`);throw t}class M1{constructor(){this.queries=Wd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const i=Z(n),r=i.queries;i.queries=Wd(),r.forEach((o,c)=>{for(const l of c.Sa)l.onError(s)})})(this,new $(D.ABORTED,"Firestore shutting down"))}}function Wd(){return new Cn(t=>pg(t),fg)}function O1(t){t.Ca.forEach(e=>{e.next()})}var Kd,qd;(qd=Kd||(Kd={})).Ma="default",qd.Cache="cache";const L1="SyncEngine";class F1{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Cn(c=>pg(c),fg),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ue(W.comparator),this.Au=new Map,this.Vu=new il,this.du={},this.mu=new Map,this.fu=ts.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function j1(t,e,n){const s=z1(t);try{const i=await function(o,c){const l=Z(o),h=ie.now(),d=c.reduce((T,b)=>T.add(b.key),Re());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let b=xr(),x=Re();return l.xs.getEntries(T,d).next(R=>{b=R,b.forEach((k,M)=>{M.isValidDocument()||(x=x.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,b)).next(R=>{p=R;const k=[];for(const M of c){const O=IS(M,p.get(M.key).overlayedDocument);O!=null&&k.push(new Rn(M.key,O,og(O.value.mapValue),bt.exists(!0)))}return l.mutationQueue.addMutationBatch(T,h,k,c)}).next(R=>{m=R;const k=R.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(T,R.batchId,k)})}).then(()=>({batchId:m.batchId,changes:gg(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let h=o.du[o.currentUser.toKey()];h||(h=new Ue(Q)),h=h.insert(c,l),o.du[o.currentUser.toKey()]=h}(s,i.batchId,n),await io(s,i.changes),await so(s.remoteStore)}catch(i){const r=Lg(i,"Failed to persist write");n.reject(r)}}function Gd(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Tu.forEach((r,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const l=Z(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)}),h&&O1(l)}(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function U1(t,e){const n=Z(t),s=e.batch.batchId;try{const i=await d1(n.localStore,e);jg(n,s,null),Fg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await io(n,i)}catch(i){await Kc(i)}}async function B1(t,e,n){const s=Z(t);try{const i=await function(o,c){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(le(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(s.localStore,e);jg(s,e,n),Fg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await io(s,i)}catch(i){await Kc(i)}}function Fg(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function jg(t,e,n){const s=Z(t);let i=s.du[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.du[s.currentUser.toKey()]=i}}async function io(t,e,n){const s=Z(t),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((c,l)=>{o.push(s.pu(l,e,n).then(h=>{var d;if((h||n)&&s.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:d.current;s.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=ol.Is(l.targetId,h);r.push(p)}}))}),await Promise.all(o),s.Pu.H_(i),await async function(l,h){const d=Z(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(h,m=>V.forEach(m.Ts,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>V.forEach(m.Es,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!fi(p))throw p;B(l1,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const T=d.vs.get(m),b=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(b);d.vs=d.vs.insert(m,x)}}}(s.localStore,r))}async function $1(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){B(L1,"User change. New user:",e.toKey());const s=await kg(n.localStore,e);n.currentUser=e,function(r,o){r.mu.forEach(c=>{c.forEach(l=>{l.reject(new $(D.CANCELLED,o))})}),r.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await io(n,s.Ns)}}function z1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=U1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=B1.bind(null,e),e}class Dr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=to(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return h1(this.persistence,new c1,e.initialUser,this.serializer)}Cu(e){return new xg(rl.Vi,this.serializer)}Du(e){return new m1}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Dr.provider={build:()=>new Dr};class H1 extends Dr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){le(this.persistence.referenceDelegate instanceof Vr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new qS(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new xg(s=>Vr.Vi(s,n),this.serializer)}}class nc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$1.bind(null,this.syncEngine),await N1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new M1}()}createDatastore(e){const n=to(e.databaseInfo.databaseId),s=T1(e.databaseInfo);return b1(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,c){return new P1(s,i,r,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Gd(this.syncEngine,n,0),function(){return $d.v()?new $d:new g1}())}createSyncEngine(e,n){return function(i,r,o,c,l,h,d){const p=new F1(i,r,o,c,l,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const r=Z(i);B(mi,"RemoteStore shutting down."),r.Ia.add(5),await gi(r),r.Aa.shutdown(),r.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}nc.provider={build:()=>new nc};/**
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
 */const Zt="FirestoreClient";class W1{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=i,this.user=Ce.UNAUTHENTICATED,this.clientId=Hc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{B(Zt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(B(Zt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Lg(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function aa(t,e){t.asyncQueue.verifyOperationInProgress(),B(Zt,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await kg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await K1(t);B(Zt,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Hd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Hd(e.remoteStore,i)),t._onlineComponents=e}async function K1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Zt,"Using user provided OfflineComponentProvider");try{await aa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await aa(t,new Dr)}}else B(Zt,"Using default OfflineComponentProvider"),await aa(t,new H1(void 0));return t._offlineComponents}async function q1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Zt,"Using user provided OnlineComponentProvider"),await Xd(t,t._uninitializedComponentsProvider._online)):(B(Zt,"Using default OnlineComponentProvider"),await Xd(t,new nc))),t._onlineComponents}function G1(t){return q1(t).then(e=>e.syncEngine)}function X1(t,e){const n=new gn;return t.asyncQueue.enqueueAndForget(async()=>j1(await G1(t),e,n)),n.promise}/**
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
 */function Ug(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Y1="ComponentProvider",Yd=new Map;function Q1(t,e,n,s,i){return new zb(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Ug(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
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
 */const Bg="firestore.googleapis.com",Qd=!0;class Jd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bg,this.ssl=Qd}else this.host=e.host,this.ssl=e.ssl??Qd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<WS)throw new $(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ug(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ro{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new wb;switch(s.type){case"firstParty":return new bb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new $(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Yd.get(n);s&&(B(Y1,"Removing Datastore"),Yd.delete(n),s.terminate())}(this),Promise.resolve()}}function J1(t,e,n,s={}){var h;t=Qm(t,ro);const i=hi(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&Mm(`https://${c}`),r.host!==Bg&&r.host!==c&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:i,emulatorOptions:s};if(!Xt(l,o)&&(t._setSettings(l),s.mockUserToken)){let d,p;if(typeof s.mockUserToken=="string")d=s.mockUserToken,p=Ce.MOCK_USER;else{d=GI(s.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=s.mockUserToken.sub||s.mockUserToken.user_id;if(!m)throw new $(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ce(m)}t._authCredentials=new Eb(new Gm(d,p))}}/**
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
 */class cl{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new cl(this.firestore,e,this._query)}}class xe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(di(n,xe._jsonSchema))return new xe(e,s||null,new W(re.fromString(n.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:de("string",xe._jsonSchemaVersion),referencePath:de("string")};class Kt extends cl{constructor(e,n,s){super(e,n,rS(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new W(e))}withConverter(e){return new Kt(this.firestore,e,this._path)}}function Z1(t,e,...n){if(t=je(t),Xm("collection","path",e),t instanceof ro){const s=re.fromString(e,...n);return Td(s),new Kt(t,null,s)}{if(!(t instanceof xe||t instanceof Kt))throw new $(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return Td(s),new Kt(t.firestore,null,s)}}function eP(t,e,...n){if(t=je(t),arguments.length===1&&(e=Hc.newId()),Xm("doc","path",e),t instanceof ro){const s=re.fromString(e,...n);return vd(s),new xe(t,null,new W(s))}{if(!(t instanceof xe||t instanceof Kt))throw new $(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return vd(s),new xe(t.firestore,t instanceof Kt?t.converter:null,new W(s))}}/**
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
 */const Zd="AsyncQueue";class ef{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vg(this,"async_queue_retry"),this._c=()=>{const s=oa();s&&B(Zd,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=oa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new gn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!fi(e))throw e;B(Zd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Tn("INTERNAL UNHANDLED ERROR: ",tf(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=al.createAndSchedule(this,e,n,s,r=>this.hc(r));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:tf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function tf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class $g extends ro{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new ef,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ef(e),this._firestoreClient=void 0,await e}}}function tP(t,e){const n=typeof t=="object"?t:Bc(),s=typeof t=="string"?t:Sr,i=Pn(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=KI("firestore");r&&J1(i,...r)}return i}function nP(t){if(t._terminated)throw new $(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||sP(t),t._firestoreClient}function sP(t){var s,i,r,o;const e=t._freezeSettings(),n=Q1(t._databaseId,((s=t._app)==null?void 0:s.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new W1(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(vt.fromBase64String(e))}catch(n){throw new $(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ze(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(di(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:de("string",Ze._jsonSchemaVersion),bytes:de("string")};/**
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
 */class zg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ll{constructor(e){this._methodName=e}}/**
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
 */class St{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:St._jsonSchemaVersion}}static fromJSON(e){if(di(e,St._jsonSchema))return new St(e.latitude,e.longitude)}}St._jsonSchemaVersion="firestore/geoPoint/1.0",St._jsonSchema={type:de("string",St._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class mt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(di(e,mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mt(e.vectorValues);throw new $(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mt._jsonSchemaVersion="firestore/vectorValue/1.0",mt._jsonSchema={type:de("string",mt._jsonSchemaVersion),vectorValues:de("object")};/**
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
 */const iP=/^__.*__$/;class rP{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Rn(e,this.data,this.fieldMask,n,this.fieldTransforms):new pi(e,this.data,n,this.fieldTransforms)}}function Hg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{dataSource:t})}}class ul{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ul({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),s=this.i({path:n,arrayElement:!1});return s.mc(e),s}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),s=this.i({path:n,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Nr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Hg(this.dataSource)&&iP.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class oP{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||to(e)}I(e,n,s,i=!1){return new ul({dataSource:e,methodName:n,targetDoc:s,path:Ae.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aP(t){const e=t._freezeSettings(),n=to(t._databaseId);return new oP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cP(t,e,n,s,i,r={}){const o=t.I(r.merge||r.mergeFields?2:0,e,n,i);Gg("Data must be an object, but it was:",o,s);const c=Kg(s,o);let l,h;if(r.merge)l=new tt(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const p of r.mergeFields){const m=dl(e,p,n);if(!o.contains(m))throw new $(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hP(d,m)||d.push(m)}l=new tt(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new rP(new Je(c),l,h)}class hl extends ll{_toFieldTransform(e){return new vS(e.path,new ti)}isEqual(e){return e instanceof hl}}function Wg(t,e){if(qg(t=je(t)))return Gg("Unsupported field value:",e,t),Kg(t,e);if(t instanceof ll)return function(s,i){if(!Hg(i.dataSource))throw i.yc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const c of s){let l=Wg(c,i.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=je(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return gS(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ie.fromDate(s);return{timestampValue:Ja(i.serializer,r)}}if(s instanceof ie){const r=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ja(i.serializer,r)}}if(s instanceof St)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ze)return{bytesValue:xS(i.serializer,s._byteString)};if(s instanceof xe){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Sg(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof mt)return function(o,c){const l=o instanceof mt?o.toArray():o;return{mapValue:{fields:{[ig]:{stringValue:rg},[qa]:{arrayValue:{values:l.map(d=>{if(typeof d!="number")throw c.yc("VectorValues must only contain numeric values.");return nl(c.serializer,d)})}}}}}}(s,i);if(Cg(s))return s._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Wc(s)}`)}(t,e)}function Kg(t,e){const n={};return Zm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(s,i)=>{const r=Wg(i,e.dc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function qg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ie||t instanceof St||t instanceof Ze||t instanceof xe||t instanceof ll||t instanceof mt||Cg(t))}function Gg(t,e,n){if(!qg(n)||!Ym(n)){const s=Wc(n);throw s==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+s)}}function dl(t,e,n){if((e=je(e))instanceof zg)return e._internalPath;if(typeof e=="string")return uP(t,e);throw Nr("Field path arguments must be of type string or ",t,!1,void 0,n)}const lP=new RegExp("[~\\*/\\[\\]]");function uP(t,e,n){if(e.search(lP)>=0)throw Nr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zg(...e.split("."))._internalPath}catch{throw Nr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nr(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new $(D.INVALID_ARGUMENT,c+t+l)}function hP(t,e){return t.some(n=>n.isEqual(e))}function dP(){return new hl("serverTimestamp")}const nf="@firebase/firestore",sf="4.14.0";/**
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
 */class Xg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(dl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fP extends Xg{data(){return super.data()}}function pP(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hn extends Xg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(dl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hn._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hn._jsonSchema={type:de("string",Hn._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class or extends Hn{data(e={}){return super.data(e)}}class Hs{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new or(this._firestore,this._userDataWriter,s.key,s,new qi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const l=new or(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>r||c.type!==3).map(c=>{const l=new or(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:mP(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach(r=>{r._document!==null&&(n.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:t})}}/**
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
 */Hs._jsonSchemaVersion="firestore/querySnapshot/1.0",Hs._jsonSchema={type:de("string",Hs._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};function gP(t,e){const n=Qm(t.firestore,$g),s=eP(t),i=pP(t.converter,e),r=aP(t.firestore);return yP(n,[cP(r,"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,bt.exists(!1))]).then(()=>s)}function yP(t,e){const n=nP(t);return X1(n,e)}(function(e,n=!0){Tb(os),_t(new rt("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),c=new $g(new Ib(s.getProvider("auth-internal")),new Sb(o,s.getProvider("app-check-internal")),Hb(o,i),o);return r={useFetchStreams:n,...r},c._setSettings(r),c},"PUBLIC").setMultipleInstances(!0)),qe(nf,sf,e),qe(nf,sf,"esm2020")})();var _P="firebase",vP="12.12.1";/**
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
 */qe(_P,vP,"app");function Yg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TP=Yg,Qg=new Sn("auth","Firebase",Yg());/**
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
 */const Mr=new Qr("@firebase/auth");function wP(t,...e){Mr.logLevel<=G.WARN&&Mr.warn(`Auth (${os}): ${t}`,...e)}function ar(t,...e){Mr.logLevel<=G.ERROR&&Mr.error(`Auth (${os}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw fl(t,...e)}function gt(t,...e){return fl(t,...e)}function Jg(t,e,n){const s={...TP(),[e]:n};return new Sn("auth","Firebase",s).create(e,{appName:t.name})}function _n(t){return Jg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Qg.create(t,...e)}function z(t,e,...n){if(!t)throw fl(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ar(e),new Error(e)}function Rt(t,e){t||It(e)}/**
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
 */function sc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function EP(){return rf()==="http:"||rf()==="https:"}function rf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function IP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EP()||Vm()||"connection"in navigator)?navigator.onLine:!0}function AP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rt(n>e,"Short delay should be less than long delay!"),this.isMobile=XI()||JI()}get(){return IP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pl(t,e){Rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PP=new _i(3e4,6e4);function ml(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ls(t,e,n,s,i={}){return ey(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=ui({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...r};return QI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&hi(t.emulatorConfig.host)&&(h.credentials="include"),Zg.fetch()(await ty(t,t.config.apiHost,n,c),h)})}async function ey(t,e,n){t._canInitEmulator=!1;const s={...bP,...e};try{const i=new RP(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gi(t,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Jg(t,d,h);Ct(t,d)}}catch(i){if(i instanceof ot)throw i;Ct(t,"network-request-failed",{message:String(i)})}}async function CP(t,e,n,s,i={}){const r=await ls(t,e,n,s,i);return"mfaPendingCredential"in r&&Ct(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function ty(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?pl(t.config,i):`${t.config.apiScheme}://${i}`;return SP.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class RP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gt(this.auth,"network-request-failed")),PP.get())})}}function Gi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=gt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function xP(t,e){return ls(t,"POST","/v1/accounts:delete",e)}async function Or(t,e){return ls(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kP(t,e=!1){const n=je(t),s=await n.getIdToken(e),i=gl(s);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ws(ca(i.auth_time)),issuedAtTime:Ws(ca(i.iat)),expirationTime:Ws(ca(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ca(t){return Number(t)*1e3}function gl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ar("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cm(n);return i?JSON.parse(i):(ar("Failed to decode base64 JWT payload"),null)}catch(i){return ar("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function of(t){const e=gl(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ot&&VP(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function VP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ic{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lr(t){var p;const e=t.auth,n=await t.getIdToken(),s=await ii(t,Or(e,{idToken:n}));z(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=(p=i.providerUserInfo)!=null&&p.length?ny(i.providerUserInfo):[],o=MP(t.providerData,r),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ic(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function NP(t){const e=je(t);await Lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MP(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ny(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function OP(t,e){const n=await ey(t,{},async()=>{const s=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await ty(t,i,"/v1/token",`key=${r}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return t.emulatorConfig&&hi(t.emulatorConfig.host)&&(l.credentials="include"),Zg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LP(t,e){return ls(t,"POST","/v2/accounts:revokeToken",ml(t,e))}/**
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
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):of(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=of(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await OP(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Wn;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function Ot(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nt{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new DP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ic(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kP(this,e)}reload(){return NP(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Lr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await ii(this,xP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:T,providerData:b,stsTokenManager:x}=n;z(p&&x,e,"internal-error");const R=Wn.fromJSON(this.name,x);z(typeof p=="string",e,"internal-error"),Ot(s,e.name),Ot(i,e.name),z(typeof m=="boolean",e,"internal-error"),z(typeof T=="boolean",e,"internal-error"),Ot(r,e.name),Ot(o,e.name),Ot(c,e.name),Ot(l,e.name),Ot(h,e.name),Ot(d,e.name);const k=new nt({uid:p,auth:e,email:i,emailVerified:m,displayName:s,isAnonymous:T,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:R,createdAt:h,lastLoginAt:d});return b&&Array.isArray(b)&&(k.providerData=b.map(M=>({...M}))),l&&(k._redirectEventId=l),k}static async _fromIdTokenResponse(e,n,s=!1){const i=new Wn;i.updateFromServerResponse(n);const r=new nt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Lr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];z(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?ny(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new Wn;c.updateFromIdToken(s);const l=new nt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ic(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,h),l}}/**
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
 */const af=new Map;function At(t){Rt(t instanceof Function,"Expected a class definition");let e=af.get(t);return e?(Rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,af.set(t,e),e)}/**
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
 */class sy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sy.type="NONE";const cf=sy;/**
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
 */function cr(t,e,n){return`firebase:${t}:${e}:${n}`}class Kn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=cr(this.userKey,i.apiKey,r),this.fullPersistenceKey=cr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Or(this.auth,{idToken:e}).catch(()=>{});return n?nt._fromGetAccountInfoResponse(this.auth,n,e):null}return nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Kn(At(cf),e,s);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=i[0]||At(cf);const o=cr(s,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){let p;if(typeof d=="string"){const m=await Or(e,{idToken:d}).catch(()=>{});if(!m)break;p=await nt._fromGetAccountInfoResponse(e,m,d)}else p=nt._fromJSON(e,d);h!==r&&(c=p),r=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Kn(r,e,s):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new Kn(r,e,s))}}/**
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
 */function lf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ay(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ly(e))return"Blackberry";if(uy(e))return"Webos";if(ry(e))return"Safari";if((e.includes("chrome/")||oy(e))&&!e.includes("edge/"))return"Chrome";if(cy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function iy(t=ke()){return/firefox\//i.test(t)}function ry(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oy(t=ke()){return/crios\//i.test(t)}function ay(t=ke()){return/iemobile/i.test(t)}function cy(t=ke()){return/android/i.test(t)}function ly(t=ke()){return/blackberry/i.test(t)}function uy(t=ke()){return/webos/i.test(t)}function yl(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FP(t=ke()){var e;return yl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function jP(){return ZI()&&document.documentMode===10}function hy(t=ke()){return yl(t)||cy(t)||uy(t)||ly(t)||/windows phone/i.test(t)||ay(t)}/**
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
 */function dy(t,e=[]){let n;switch(t){case"Browser":n=lf(ke());break;case"Worker":n=`${lf(ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${s}`}/**
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
 */class UP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function BP(t,e={}){return ls(t,"GET","/v2/passwordPolicy",ml(t,e))}/**
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
 */const $P=6;class zP{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$P,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class HP{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uf(this),this.idTokenSubscription=new uf(this),this.beforeStateQueue=new UP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Or(this,{idToken:e}),s=await nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(_n(this));const n=e?je(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BP(this),n=new zP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await LP(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&At(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&wP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _l(t){return je(t)}class uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=oA(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WP(t){vl=t}function KP(t){return vl.loadJS(t)}function qP(){return vl.gapiScript}function GP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function XP(t,e){const n=Pn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Xt(r,e??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:e})}function YP(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function QP(t,e,n){const s=_l(t);z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=fy(e),{host:o,port:c}=JP(e),l=c===null?"":`:${c}`,h={url:`${r}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){z(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),z(Xt(h,s.config.emulator)&&Xt(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,hi(o)?Mm(`${r}//${o}${l}`):ZP()}function fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JP(t){const e=fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:hf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:hf(o)}}}function hf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class py{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}/**
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
 */async function qn(t,e){return CP(t,"POST","/v1/accounts:signInWithIdp",ml(t,e))}/**
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
 */const eC="http://localhost";class In extends py{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new In(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qn(e,n)}buildRequest(){const e={requestUri:eC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
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
 */class my{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vi extends my{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jt extends vi{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return In._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ut.credential(n,s)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class Bt extends vi{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class $t extends vi{constructor(){super("twitter.com")}static credential(e,n){return In._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $t.credential(n,s)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await nt._fromIdTokenResponse(e,s,i),o=df(s);return new ns({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=df(s);return new ns({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function df(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fr extends ot{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Fr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Fr(e,n,s,i)}}function gy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Fr._fromErrorAndOperation(t,r,e,s):r})}async function tC(t,e,n=!1){const s=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",s)}/**
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
 */async function nC(t,e,n=!1){const{auth:s}=t;if(dt(s.app))return Promise.reject(_n(s));const i="reauthenticate";try{const r=await ii(t,gy(s,i,e,t),n);z(r.idToken,s,"internal-error");const o=gl(r.idToken);z(o,s,"internal-error");const{sub:c}=o;return z(t.uid===c,s,"user-mismatch"),ns._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),r}}/**
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
 */async function sC(t,e,n=!1){if(dt(t.app))return Promise.reject(_n(t));const s="signIn",i=await gy(t,s,e),r=await ns._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function iC(t,e,n,s){return je(t).onIdTokenChanged(e,n,s)}function rC(t,e,n){return je(t).beforeAuthStateChanged(e,n)}const jr="__sak";/**
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
 */class yy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oC=1e3,aC=10;class _y extends yy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);jP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aC):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},oC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_y.type="LOCAL";const cC=_y;/**
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
 */class vy extends yy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vy.type="SESSION";const Ty=vy;/**
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
 */function lC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new oo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async h=>h(n.origin,r)),l=await lC(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oo.receivers=[];/**
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
 */function Tl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const h=Tl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(m.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yt(){return window}function hC(t){yt().location.href=t}/**
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
 */function wy(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function dC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function pC(){return wy()?self:null}/**
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
 */const Ey="firebaseLocalStorageDb",mC=1,Ur="firebaseLocalStorage",Iy="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ao(t,e){return t.transaction([Ur],e?"readwrite":"readonly").objectStore(Ur)}function gC(){const t=indexedDB.deleteDatabase(Ey);return new Ti(t).toPromise()}function rc(){const t=indexedDB.open(Ey,mC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ur,{keyPath:Iy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ur)?e(s):(s.close(),await gC(),e(await rc()))})})}async function ff(t,e,n){const s=ao(t,!0).put({[Iy]:e,value:n});return new Ti(s).toPromise()}async function yC(t,e){const n=ao(t,!1).get(e),s=await new Ti(n).toPromise();return s===void 0?null:s.value}function pf(t,e){const n=ao(t,!0).delete(e);return new Ti(n).toPromise()}const _C=800,vC=3;class Ay{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oo._getInstance(pC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await dC(),!this.activeServiceWorker)return;this.sender=new uC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rc();return await ff(e,jr,"1"),await pf(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ff(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ao(i,!1).getAll();return new Ti(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ay.type="LOCAL";const TC=Ay;new _i(3e4,6e4);/**
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
 */function wC(t,e){return e?At(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wl extends py{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EC(t){return sC(t.auth,new wl(t),t.bypassAuthState)}function IC(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),nC(n,new wl(t),t.bypassAuthState)}async function AC(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),tC(n,new wl(t),t.bypassAuthState)}/**
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
 */class by{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EC;case"linkViaPopup":case"linkViaRedirect":return AC;case"reauthViaPopup":case"reauthViaRedirect":return IC;default:Ct(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bC=new _i(2e3,1e4);class Bn extends by{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Tl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bC.get())};e()}}Bn.currentPopupAction=null;/**
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
 */const SC="pendingRedirect",lr=new Map;class PC extends by{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lr.get(this.auth._key());if(!e){try{const s=await CC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lr.set(this.auth._key(),e)}return this.bypassAuthState||lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CC(t,e){const n=kC(e),s=xC(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function RC(t,e){lr.set(t._key(),e)}function xC(t){return At(t._redirectPersistence)}function kC(t){return cr(SC,t.config.apiKey,t.name)}async function VC(t,e,n=!1){if(dt(t.app))return Promise.reject(_n(t));const s=_l(t),i=wC(s,e),o=await new PC(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const DC=10*60*1e3;class NC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sy(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DC&&this.cachedEventUids.clear(),this.cachedEventUids.has(mf(e))}saveEventToCache(e){this.cachedEventUids.add(mf(e)),this.lastProcessedEventTime=Date.now()}}function mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sy(t);default:return!1}}/**
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
 */async function OC(t,e={}){return ls(t,"GET","/v1/projects",e)}/**
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
 */const LC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FC=/^https?/;async function jC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OC(t);for(const n of e)try{if(UC(n))return}catch{}Ct(t,"unauthorized-domain")}function UC(t){const e=sc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!FC.test(n))return!1;if(LC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const BC=new _i(3e4,6e4);function gf(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $C(t){return new Promise((e,n)=>{var i,r,o;function s(){gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gf(),n(gt(t,"network-request-failed"))},timeout:BC.get()})}if((r=(i=yt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=yt().gapi)!=null&&o.load)s();else{const c=GP("iframefcb");return yt()[c]=()=>{gapi.load?s():n(gt(t,"network-request-failed"))},KP(`${qP()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ur=null,e})}let ur=null;function zC(t){return ur=ur||$C(t),ur}/**
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
 */const HC=new _i(5e3,15e3),WC="__/auth/iframe",KC="emulator/auth/iframe",qC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XC(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pl(e,KC):`https://${t.config.authDomain}/${WC}`,s={apiKey:e.apiKey,appName:t.name,v:os},i=GC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ui(s).slice(1)}`}async function YC(t){const e=await zC(t),n=yt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:XC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),c=yt().setTimeout(()=>{r(o)},HC.get());function l(){yt().clearTimeout(c),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const QC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JC=500,ZC=600,eR="_blank",tR="http://localhost";class yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nR(t,e,n,s=JC,i=ZC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...QC,width:s.toString(),height:i.toString(),top:r,left:o},h=ke().toLowerCase();n&&(c=oy(h)?eR:n),iy(h)&&(e=e||tR,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[T,b])=>`${m}${T}=${b},`,"");if(FP(h)&&c!=="_self")return sR(e||"",c),new yf(null);const p=window.open(e||"",c,d);z(p,t,"popup-blocked");try{p.focus()}catch{}return new yf(p)}function sR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const iR="__/auth/handler",rR="emulator/auth/handler",oR=encodeURIComponent("fac");async function _f(t,e,n,s,i,r){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:os,eventId:i};if(e instanceof my){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof vi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${oR}=${encodeURIComponent(l)}`:"";return`${aR(t)}?${ui(c).slice(1)}${h}`}function aR({config:t}){return t.emulator?pl(t,rR):`https://${t.authDomain}/${iR}`}/**
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
 */const la="webStorageSupport";class cR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ty,this._completeRedirectFn=VC,this._overrideRedirectResult=RC}async _openPopup(e,n,s,i){var o;Rt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await _f(e,n,s,sc(),i);return nR(e,r,Tl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await _f(e,n,s,sc(),i);return hC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Rt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await YC(e),s=new NC(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(la,{type:la},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[la];r!==void 0&&n(!!r),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hy()||ry()||yl()}}const lR=cR;var vf="@firebase/auth",Tf="1.13.0";/**
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
 */class uR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dR(t){_t(new rt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dy(t)},h=new HP(s,i,r,l);return YP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_t(new rt("auth-internal",e=>{const n=_l(e.getProvider("auth").getImmediate());return(s=>new uR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(vf,Tf,hR(t)),qe(vf,Tf,"esm2020")}/**
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
 */const fR=5*60,pR=km("authIdTokenMaxAge")||fR;let wf=null;const mR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>pR)return;const i=n==null?void 0:n.token;wf!==i&&(wf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gR(t=Bc()){const e=Pn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XP(t,{popupRedirectResolver:lR,persistence:[TC,cC,Ty]}),s=km("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=mR(r.toString());rC(n,o,()=>o(n.currentUser)),iC(n,c=>o(c))}}const i=Rm("auth");return i&&QP(n,`http://${i}`),n}function yR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}WP({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=gt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",yR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dR("Browser");const Py="@firebase/installations",El="0.6.21";/**
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
 */const Cy=1e4,Ry=`w:${El}`,xy="FIS_v2",_R="https://firebaseinstallations.googleapis.com/v1",vR=60*60*1e3,TR="installations",wR="Installations";/**
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
 */const ER={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},An=new Sn(TR,wR,ER);function ky(t){return t instanceof ot&&t.code.includes("request-failed")}/**
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
 */function Vy({projectId:t}){return`${_R}/projects/${t}/installations`}function Dy(t){return{token:t.token,requestStatus:2,expiresIn:AR(t.expiresIn),creationTime:Date.now()}}async function Ny(t,e){const s=(await e.json()).error;return An.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function My({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function IR(t,{refreshToken:e}){const n=My(t);return n.append("Authorization",bR(e)),n}async function Oy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function AR(t){return Number(t.replace("s","000"))}function bR(t){return`${xy} ${t}`}/**
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
 */async function SR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Vy(t),i=My(t),r=e.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:xy,appId:t.appId,sdkVersion:Ry},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await Oy(()=>fetch(s,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Dy(h.authToken)}}else throw await Ny("Create Installation",l)}/**
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
 */function Ly(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function PR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const CR=/^[cdef][\w-]{21}$/,oc="";function RR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=xR(t);return CR.test(n)?n:oc}catch{return oc}}function xR(t){return PR(t).substr(0,22)}/**
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
 */function co(t){return`${t.appName}!${t.appId}`}/**
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
 */const Fy=new Map;function jy(t,e){const n=co(t);Uy(n,e),kR(n,e)}function Uy(t,e){const n=Fy.get(t);if(n)for(const s of n)s(e)}function kR(t,e){const n=VR();n&&n.postMessage({key:t,fid:e}),DR()}let fn=null;function VR(){return!fn&&"BroadcastChannel"in self&&(fn=new BroadcastChannel("[Firebase] FID Change"),fn.onmessage=t=>{Uy(t.data.key,t.data.fid)}),fn}function DR(){Fy.size===0&&fn&&(fn.close(),fn=null)}/**
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
 */const NR="firebase-installations-database",MR=1,bn="firebase-installations-store";let ua=null;function Il(){return ua||(ua=Fm(NR,MR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bn)}}})),ua}async function Br(t,e){const n=co(t),i=(await Il()).transaction(bn,"readwrite"),r=i.objectStore(bn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&jy(t,e.fid),e}async function By(t){const e=co(t),s=(await Il()).transaction(bn,"readwrite");await s.objectStore(bn).delete(e),await s.done}async function lo(t,e){const n=co(t),i=(await Il()).transaction(bn,"readwrite"),r=i.objectStore(bn),o=await r.get(n),c=e(o);return c===void 0?await r.delete(n):await r.put(c,n),await i.done,c&&(!o||o.fid!==c.fid)&&jy(t,c.fid),c}/**
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
 */async function Al(t){let e;const n=await lo(t.appConfig,s=>{const i=OR(s),r=LR(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===oc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OR(t){const e=t||{fid:RR(),registrationStatus:0};return $y(e)}function LR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(An.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=FR(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jR(t)}:{installationEntry:e}}async function FR(t,e){try{const n=await SR(t,e);return Br(t.appConfig,n)}catch(n){throw ky(n)&&n.customData.serverCode===409?await By(t.appConfig):await Br(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function jR(t){let e=await Ef(t.appConfig);for(;e.registrationStatus===1;)await Ly(100),e=await Ef(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Al(t);return s||n}return e}function Ef(t){return lo(t,e=>{if(!e)throw An.create("installation-not-found");return $y(e)})}function $y(t){return UR(t)?{fid:t.fid,registrationStatus:0}:t}function UR(t){return t.registrationStatus===1&&t.registrationTime+Cy<Date.now()}/**
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
 */async function BR({appConfig:t,heartbeatServiceProvider:e},n){const s=$R(t,n),i=IR(t,n),r=e.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:Ry,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await Oy(()=>fetch(s,c));if(l.ok){const h=await l.json();return Dy(h)}else throw await Ny("Generate Auth Token",l)}function $R(t,{fid:e}){return`${Vy(t)}/${e}/authTokens:generate`}/**
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
 */async function bl(t,e=!1){let n;const s=await lo(t.appConfig,r=>{if(!zy(r))throw An.create("not-registered");const o=r.authToken;if(!e&&WR(o))return r;if(o.requestStatus===1)return n=zR(t,e),r;{if(!navigator.onLine)throw An.create("app-offline");const c=qR(r);return n=HR(t,c),c}});return n?await n:s.authToken}async function zR(t,e){let n=await If(t.appConfig);for(;n.authToken.requestStatus===1;)await Ly(100),n=await If(t.appConfig);const s=n.authToken;return s.requestStatus===0?bl(t,e):s}function If(t){return lo(t,e=>{if(!zy(e))throw An.create("not-registered");const n=e.authToken;return GR(n)?{...e,authToken:{requestStatus:0}}:e})}async function HR(t,e){try{const n=await BR(t,e),s={...e,authToken:n};return await Br(t.appConfig,s),n}catch(n){if(ky(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await By(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Br(t.appConfig,s)}throw n}}function zy(t){return t!==void 0&&t.registrationStatus===2}function WR(t){return t.requestStatus===2&&!KR(t)}function KR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vR}function qR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function GR(t){return t.requestStatus===1&&t.requestTime+Cy<Date.now()}/**
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
 */async function XR(t){const e=t,{installationEntry:n,registrationPromise:s}=await Al(e);return s?s.catch(console.error):bl(e).catch(console.error),n.fid}/**
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
 */async function YR(t,e=!1){const n=t;return await QR(n),(await bl(n,e)).token}async function QR(t){const{registrationPromise:e}=await Al(t);e&&await e}/**
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
 */function JR(t){if(!t||!t.options)throw ha("App Configuration");if(!t.name)throw ha("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ha(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ha(t){return An.create("missing-app-config-values",{valueName:t})}/**
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
 */const Hy="installations",ZR="installations-internal",ex=t=>{const e=t.getProvider("app").getImmediate(),n=JR(e),s=Pn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},tx=t=>{const e=t.getProvider("app").getImmediate(),n=Pn(e,Hy).getImmediate();return{getId:()=>XR(n),getToken:i=>YR(n,i)}};function nx(){_t(new rt(Hy,ex,"PUBLIC")),_t(new rt(ZR,tx,"PRIVATE"))}nx();qe(Py,El);qe(Py,El,"esm2020");/**
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
 */const $r="analytics",sx="firebase_id",ix="origin",rx=60*1e3,ox="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sl="https://www.googletagmanager.com/gtag/js";/**
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
 */const Oe=new Qr("@firebase/analytics");/**
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
 */const ax={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},He=new Sn("analytics","Analytics",ax);/**
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
 */function cx(t){if(!t.startsWith(Sl)){const e=He.create("invalid-gtag-resource",{gtagURL:t});return Oe.warn(e.message),""}return t}function Wy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function lx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ux(t,e){const n=lx("firebase-js-sdk-policy",{createScriptURL:cx}),s=document.createElement("script"),i=`${Sl}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function hx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dx(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await Wy(n)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(c){Oe.error(c)}t("config",i,r)}async function fx(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=await Wy(n);for(const l of o){const h=c.find(p=>p.measurementId===l),d=h&&e[h.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Oe.error(r)}}function px(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[c,l]=o;await fx(t,e,n,c,l)}else if(r==="config"){const[c,l]=o;await dx(t,e,n,s,c,l)}else if(r==="consent"){const[c,l]=o;t("consent",c,l)}else if(r==="get"){const[c,l,h]=o;t("get",c,l,h)}else if(r==="set"){const[c]=o;t("set",c)}else t(r,...o)}catch(c){Oe.error(c)}}return i}function mx(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=px(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function gx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sl)&&n.src.includes(t))return n;return null}/**
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
 */const yx=30,_x=1e3;class vx{constructor(e={},n=_x){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ky=new vx;function Tx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function wx(t){var o;const{appId:e,apiKey:n}=t,s={method:"GET",headers:Tx(n)},i=ox.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let c="";try{const l=await r.json();(o=l.error)!=null&&o.message&&(c=l.error.message)}catch{}throw He.create("config-fetch-failed",{httpStatus:r.status,responseMessage:c})}return r.json()}async function Ex(t,e=Ky,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw He.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw He.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new bx;return setTimeout(async()=>{c.abort()},rx),qy({appId:s,apiKey:i,measurementId:r},o,c,e)}async function qy(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Ky){var c;const{appId:r,measurementId:o}=t;try{await Ix(s,e)}catch(l){if(o)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:o};throw l}try{const l=await wx(t);return i.deleteThrottleMetadata(r),l}catch(l){const h=l;if(!Ax(h)){if(i.deleteThrottleMetadata(r),o)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:r,measurementId:o};throw l}const d=Number((c=h==null?void 0:h.customData)==null?void 0:c.httpStatus)===503?ad(n,i.intervalMillis,yx):ad(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(r,p),Oe.debug(`Calling attemptFetch again in ${d} millis`),qy(t,p,s,i)}}function Ix(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(He.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ax(t){if(!(t instanceof ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class bx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Sx(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o={...s,send_to:r};t("event",n,o)}}async function Px(t,e,n,s){if(s&&s.global){const i={};for(const r of Object.keys(n))i[`user_properties.${r}`]=n[r];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function Cx(){if(Dm())try{await Nm()}catch(t){return Oe.warn(He.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Oe.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Rx(t,e,n,s,i,r,o){const c=Ex(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Oe.error(m)),e.push(c);const l=Cx().then(m=>{if(m)return s.getId()}),[h,d]=await Promise.all([c,l]);gx(r)||ux(r,h.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[ix]="firebase",p.update=!0,d!=null&&(p[sx]=d),i("config",h.measurementId,p),h.measurementId}/**
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
 */class xx{constructor(e){this.app=e}_delete(){return delete Gn[this.app.options.appId],Promise.resolve()}}let Gn={},Af=[];const bf={};let da="dataLayer",kx="gtag",Sf,Pl,Pf=!1;function Vx(){const t=[];if(Vm()&&t.push("This is a browser extension environment."),tA()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=He.create("invalid-analytics-context",{errorInfo:e});Oe.warn(n.message)}}function Dx(t,e,n){Vx();const s=t.options.appId;if(!s)throw He.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw He.create("no-api-key");if(Gn[s]!=null)throw He.create("already-exists",{id:s});if(!Pf){hx(da);const{wrappedGtag:r,gtagCore:o}=mx(Gn,Af,bf,da,kx);Pl=r,Sf=o,Pf=!0}return Gn[s]=Rx(t,Af,bf,e,Sf,da,n),new xx(t)}function Nx(t=Bc()){t=je(t);const e=Pn(t,$r);return e.isInitialized()?e.getImmediate():Mx(t)}function Mx(t,e={}){const n=Pn(t,$r);if(n.isInitialized()){const i=n.getImmediate();if(Xt(e,n.getOptions()))return i;throw He.create("already-initialized")}return n.initialize({options:e})}function Ox(t,e,n){t=je(t),Px(Pl,Gn[t.app.options.appId],e,n).catch(s=>Oe.error(s))}function Lx(t,e,n,s){t=je(t),Sx(Pl,Gn[t.app.options.appId],e,n,s).catch(i=>Oe.error(i))}const Cf="@firebase/analytics",Rf="0.10.21";function Fx(){_t(new rt($r,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Dx(s,i,n)},"PUBLIC")),_t(new rt("analytics-internal",t,"PRIVATE")),qe(Cf,Rf),qe(Cf,Rf,"esm2020");function t(e){try{const n=e.getProvider($r).getImmediate();return{logEvent:(s,i,r)=>Lx(n,s,i,r),setUserProperties:(s,i)=>Ox(n,s,i)}}catch(n){throw He.create("interop-component-reg-failed",{reason:n})}}}Fx();const xf={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:void 0};let Rs,kf,ac,jx;try{xf.apiKey==="dummy_key"&&console.warn("Firebase Hub: Missing VITE_FIREBASE_API_KEY. Initializing in offline simulation mode."),Rs=jm(xf),kf=gR(Rs),ac=tP(Rs),typeof window<"u"&&(jx=Nx(Rs))}catch{console.error("Firebase Hub: Critical Initialization Error. Forcing local fallback."),Rs={},kf={},ac={}}class Ux extends N.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}async componentDidCatch(e,n){console.error("Uncaught error caught by ErrorBoundary:",e,n);try{await gP(Z1(ac,"client_errors"),{appName:this.props.appName||"Kone-Consult",errorMessage:e.message,errorStack:e.stack,componentStack:n.componentStack,url:window.location.href,userAgent:navigator.userAgent,timestamp:dP()}),console.log("Error successfully logged to Firestore.")}catch(s){console.error("Failed to log error to Firestore:",s)}}render(){return this.state.hasError?_.jsxs("div",{style:{padding:"2rem",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",background:"#0a0a0f",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[_.jsx("h2",{style:{color:"#ec4899",marginBottom:"1rem",fontSize:"2rem"},children:"Oops, something went wrong."}),_.jsx("p",{style:{color:"#94a3b8",marginBottom:"2rem",maxWidth:"500px",lineHeight:"1.6"},children:this.props.fallbackMessage||"We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."}),_.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#ec4899",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 0 15px rgba(236, 72, 153, 0.4)"},children:"Refresh Page"})]}):this.props.children}}const Bx=fa.createRoot(document.getElementById("root"));Bx.render(_.jsx(ft.StrictMode,{children:_.jsx(Ux,{appName:"KCA-Landing",children:_.jsx(LI,{})})}));
