var gg=Object.defineProperty,pg=Object.defineProperties;var _g=Object.getOwnPropertyDescriptors;var jc=Object.getOwnPropertySymbols,yg=Object.getPrototypeOf,Ig=Object.prototype.hasOwnProperty,Eg=Object.prototype.propertyIsEnumerable,Tg=Reflect.get;var zc=(r,e,t)=>e in r?gg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ve=(r,e)=>{for(var t in e||(e={}))Ig.call(e,t)&&zc(r,t,e[t]);if(jc)for(var t of jc(e))Eg.call(e,t)&&zc(r,t,e[t]);return r},ti=(r,e)=>pg(r,_g(e));var Fo=(r,e,t)=>Tg(yg(r),t,e);var P=(r,e,t)=>new Promise((n,s)=>{var i=c=>{try{u(t.next(c))}catch(h){s(h)}},o=c=>{try{u(t.throw(c))}catch(h){s(h)}},u=c=>c.done?n(c.value):Promise.resolve(c.value).then(i,o);u((t=t.apply(r,e)).next())});const wg=()=>{};var $c={};/**
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
 */const vh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ag=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],u=r[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,u=o?r[s+1]:0,c=s+2<r.length,h=c?r[s+2]:0,f=i>>2,m=(i&3)<<4|u>>4;let p=(u&15)<<2|h>>6,v=h&63;c||(v=64,o||(p=64)),n.push(t[f],t[m],t[p],t[v])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(vh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ag(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],u=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const m=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||u==null||h==null||m==null)throw new vg;const p=i<<2|u>>4;if(n.push(p),h!==64){const v=u<<4&240|h>>2;if(n.push(v),m!==64){const D=h<<6&192|m;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class vg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bg=function(r){const e=vh(r);return bh.encodeByteArray(e,!0)},Ei=function(r){return bg(r).replace(/\./g,"")},Rg=function(r){try{return bh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rh(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sg=()=>Rh().__FIREBASE_DEFAULTS__,Pg=()=>{if(typeof process=="undefined"||typeof $c=="undefined")return;const r=$c.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Vg=()=>{if(typeof document=="undefined")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=r&&Rg(r[1]);return e&&JSON.parse(e)},Bi=()=>{try{return wg()||Sg()||Pg()||Vg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Cg=r=>{var e,t;return(t=(e=Bi())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Dg=r=>{const e=Cg(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Sh=()=>{var r;return(r=Bi())==null?void 0:r.config},cw=r=>{var e;return(e=Bi())==null?void 0:e[`_${r}`]};/**
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
 */class xg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Ng(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Ve({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ei(JSON.stringify(t)),Ei(JSON.stringify(o)),""].join(".")}/**
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
 */function Qn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lw(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qn())}function Ph(){var e;const r=(e=Bi())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function hw(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function dw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function fw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mw(){const r=Qn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Vh(){return!Ph()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ch(){return!Ph()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Dh(){try{return typeof indexedDB=="object"}catch(r){return!1}}function kg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function gw(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const Mg="FirebaseError";class gr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Mg,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xh.prototype.create)}}class xh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Og(i,n):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new gr(s,u,n)}}function Og(r,e){return r.replace(Fg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Fg=/\{\$([^}]+)}/g;function pw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Mt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Gc(i)&&Gc(o)){if(!Mt(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Gc(r){return r!==null&&typeof r=="object"}/**
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
 */function _w(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function yw(r,e){const t=new Lg(r,e);return t.subscribe.bind(t)}class Lg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Bg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Lo),s.error===void 0&&(s.error=Lo),s.complete===void 0&&(s.complete=Lo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(o){}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Lo(){}/**
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
 */const Ug=1e3,qg=2,jg=4*60*60*1e3,zg=.5;function Iw(r,e=Ug,t=qg){const n=e*Math.pow(t,r),s=Math.round(zg*n*(Math.random()-.5)*2);return Math.min(jg,n+s)}/**
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
 */function Te(r){return r&&r._delegate?r._delegate:r}/**
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
 */function Da(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function Nh(r){return P(this,null,function*(){return(yield fetch(r,{credentials:"include"})).ok})}class hs{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const sn="[DEFAULT]";/**
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
 */class $g{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new xg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch(s){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var s;const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(s=e==null?void 0:e.optional)!=null?s:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kg(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch(t){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch(i){}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return P(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&o.resolve(s)}return s}onInit(e,t){var o;const n=this.normalizeInstanceIdentifier(t),s=(o=this.onInitCallbacks.get(n))!=null?o:new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Gg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(s){}return n||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gg(r){return r===sn?void 0:r}function Kg(r){return r.instantiationMode==="EAGER"}/**
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
 */class Qg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $g(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Z||(Z={}));const Wg={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Hg=Z.INFO,Jg={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Yg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Jg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kh{constructor(e){this.name=e,this._logLevel=Hg,this._logHandler=Yg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Xg=(r,e)=>e.some(t=>r instanceof t);let Kc,Qc;function Zg(){return Kc||(Kc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ep(){return Qc||(Qc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mh=new WeakMap,Xo=new WeakMap,Oh=new WeakMap,Bo=new WeakMap,xa=new WeakMap;function tp(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Dt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Mh.set(t,r)}).catch(()=>{}),xa.set(e,r),e}function np(r){if(Xo.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Xo.set(r,e)}let Zo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Xo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Oh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function rp(r){Zo=r(Zo)}function sp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Uo(this),e,...t);return Oh.set(n,e.sort?e.sort():[e]),Dt(n)}:ep().includes(r)?function(...e){return r.apply(Uo(this),e),Dt(Mh.get(this))}:function(...e){return Dt(r.apply(Uo(this),e))}}function ip(r){return typeof r=="function"?sp(r):(r instanceof IDBTransaction&&np(r),Xg(r,Zg())?new Proxy(r,Zo):r)}function Dt(r){if(r instanceof IDBRequest)return tp(r);if(Bo.has(r))return Bo.get(r);const e=ip(r);return e!==r&&(Bo.set(r,e),xa.set(e,r)),e}const Uo=r=>xa.get(r);function op(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),u=Dt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Dt(o.result),c.oldVersion,c.newVersion,Dt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const ap=["get","getKey","getAll","getAllKeys","count"],up=["put","add","delete","clear"],qo=new Map;function Wc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(qo.get(e))return qo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=up.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||ap.includes(t)))return;const i=function(o,...u){return P(this,null,function*(){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(yield Promise.all([h[t](...u),s&&c.done]))[0]})};return qo.set(e,i),i}rp(r=>ti(Ve({},r),{get:(e,t,n)=>Wc(e,t)||r.get(e,t,n),has:(e,t)=>!!Wc(e,t)||r.has(e,t)}));/**
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
 */class cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function lp(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ea="@firebase/app",Hc="0.14.11";/**
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
 */const lt=new kh("@firebase/app"),hp="@firebase/app-compat",dp="@firebase/analytics-compat",fp="@firebase/analytics",mp="@firebase/app-check-compat",gp="@firebase/app-check",pp="@firebase/auth",_p="@firebase/auth-compat",yp="@firebase/database",Ip="@firebase/data-connect",Ep="@firebase/database-compat",Tp="@firebase/functions",wp="@firebase/functions-compat",Ap="@firebase/installations",vp="@firebase/installations-compat",bp="@firebase/messaging",Rp="@firebase/messaging-compat",Sp="@firebase/performance",Pp="@firebase/performance-compat",Vp="@firebase/remote-config",Cp="@firebase/remote-config-compat",Dp="@firebase/storage",xp="@firebase/storage-compat",Np="@firebase/firestore",kp="@firebase/ai",Mp="@firebase/firestore-compat",Op="firebase",Fp="12.12.0";/**
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
 */const Ti="[DEFAULT]",Lp={[ea]:"fire-core",[hp]:"fire-core-compat",[fp]:"fire-analytics",[dp]:"fire-analytics-compat",[gp]:"fire-app-check",[mp]:"fire-app-check-compat",[pp]:"fire-auth",[_p]:"fire-auth-compat",[yp]:"fire-rtdb",[Ip]:"fire-data-connect",[Ep]:"fire-rtdb-compat",[Tp]:"fire-fn",[wp]:"fire-fn-compat",[Ap]:"fire-iid",[vp]:"fire-iid-compat",[bp]:"fire-fcm",[Rp]:"fire-fcm-compat",[Sp]:"fire-perf",[Pp]:"fire-perf-compat",[Vp]:"fire-rc",[Cp]:"fire-rc-compat",[Dp]:"fire-gcs",[xp]:"fire-gcs-compat",[Np]:"fire-fst",[Mp]:"fire-fst-compat",[kp]:"fire-vertex","fire-js":"fire-js",[Op]:"fire-js-all"};/**
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
 */const wi=new Map,Bp=new Map,ta=new Map;function Jc(r,e){try{r.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ai(r){const e=r.name;if(ta.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;ta.set(e,r);for(const t of wi.values())Jc(t,r);for(const t of Bp.values())Jc(t,r);return!0}function Na(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Up(r,e,t=Ti){Na(r,e).clearInstance(t)}function qp(r){return r==null?!1:r.settings!==void 0}/**
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
 */const jp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new xh("app","Firebase",jp);/**
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
 */class zp{constructor(e,t,n){this._isDeleted=!1,this._options=Ve({},e),this._config=Ve({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const $p=Fp;function Gp(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Ve({name:Ti,automaticDataCollectionEnabled:!0},e),s=n.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(t||(t=Sh()),!t)throw xt.create("no-options");const i=wi.get(s);if(i){if(Mt(t,i.options)&&Mt(n,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const o=new Qg(s);for(const c of ta.values())o.addComponent(c);const u=new zp(t,n,o);return wi.set(s,u),u}function Kp(r=Ti){const e=wi.get(r);if(!e&&r===Ti&&Sh())return Gp();if(!e)throw xt.create("no-app",{appName:r});return e}function es(r,e,t){var o;let n=(o=Lp[r])!=null?o:r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const u=[`Unable to register library "${n}" with version "${e}":`];s&&u.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&u.push("and"),i&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(u.join(" "));return}Ai(new hs(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Qp="firebase-heartbeat-database",Wp=1,ds="firebase-heartbeat-store";let jo=null;function Fh(){return jo||(jo=op(Qp,Wp,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ds)}catch(t){console.warn(t)}}}}).catch(r=>{throw xt.create("idb-open",{originalErrorMessage:r.message})})),jo}function Hp(r){return P(this,null,function*(){try{const t=(yield Fh()).transaction(ds),n=yield t.objectStore(ds).get(Lh(r));return yield t.done,n}catch(e){if(e instanceof gr)lt.warn(e.message);else{const t=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(t.message)}}})}function Yc(r,e){return P(this,null,function*(){try{const n=(yield Fh()).transaction(ds,"readwrite");yield n.objectStore(ds).put(e,Lh(r)),yield n.done}catch(t){if(t instanceof gr)lt.warn(t.message);else{const n=xt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});lt.warn(n.message)}}})}function Lh(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Jp=1024,Yp=30;class Xp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new e_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}triggerHeartbeat(){return P(this,null,function*(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Yp){const o=t_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){lt.warn(n)}})}getHeartbeatsHeader(){return P(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xc(),{heartbeatsToSend:n,unsentEntries:s}=Zp(this._heartbeatsCache.heartbeats),i=Ei(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return lt.warn(t),""}})}}function Xc(){return new Date().toISOString().substring(0,10)}function Zp(r,e=Jp){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Zc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class e_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return P(this,null,function*(){return Dh()?kg().then(()=>!0).catch(()=>!1):!1})}read(){return P(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield Hp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return P(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return Yc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!=null?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return P(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return Yc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!=null?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return})}}function Zc(r){return Ei(JSON.stringify({version:2,heartbeats:r})).length}function t_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function n_(r){Ai(new hs("platform-logger",e=>new cp(e),"PRIVATE")),Ai(new hs("heartbeat",e=>new Xp(e),"PRIVATE")),es(ea,Hc,r),es(ea,Hc,"esm2020"),es("fire-js","")}n_("");var el=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nt,Bh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.F=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(w,T,S){for(var y=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)y[Le-2]=arguments[Le];return _.prototype[T].apply(w,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);const w=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)w[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;T<16;++T)w[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],T=E.g[2];let S=E.g[3],y;y=_+(S^I&(T^S))+w[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[2]+606105819&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[3]+3250441966&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[6]+2821735955&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[7]+4249261313&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[10]+4294925233&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[11]+2304563134&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[14]+2792965006&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[15]+1236535329&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(T^S&(I^T))+w[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[11]+643717713&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[0]+3921069994&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[15]+3634488961&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[4]+3889429448&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[3]+4107603335&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[8]+1163531501&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[7]+1735328473&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[12]+2368359562&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(I^T^S)+w[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[11]+1839030562&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[14]+4259657740&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[7]+4139469664&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[10]+3200236656&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[3]+3572445317&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[6]+76029189&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[15]+530742520&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[2]+3299628645&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(T^(I|~S))+w[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[14]+2878612391&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[5]+4237533241&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[10]+4293915773&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[1]+2240044497&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[6]+2734768916&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[13]+1309151649&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[2]+718787259&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.v=function(E,_){_===void 0&&(_=E.length);const I=_-this.blockSize,w=this.C;let T=this.h,S=0;for(;S<_;){if(T==0)for(;S<=I;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<_;)if(w[T++]=E.charCodeAt(S++),T==this.blockSize){s(this,w),T=0;break}}else for(;S<_;)if(w[T++]=E[S++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=_},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,I=0;I<4;++I)for(let w=0;w<32;w+=8)E[_++]=this.g[I]>>>w&255;return E};function i(E,_){var I=u;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;const I=[];let w=!0;for(let T=E.length-1;T>=0;T--){const S=E[T]|0;w&&S==_||(I[T]=S,w=!1)}this.g=I}var u={};function c(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return N(h(-E));const _=[];let I=1;for(let w=0;E>=I;w++)_[w]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return N(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(_,8));let w=m;for(let S=0;S<E.length;S+=8){var T=Math.min(8,E.length-S);const y=parseInt(E.substring(S,S+T),_);T<8?(T=h(Math.pow(_,T)),w=w.j(T).add(h(y))):(w=w.j(I),w=w.add(h(y)))}return w}var m=c(0),p=c(1),v=c(16777216);r=o.prototype,r.m=function(){if(k(this))return-N(this).m();let E=0,_=1;for(let I=0;I<this.g.length;I++){const w=this.i(I);E+=(w>=0?w:4294967296+w)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(k(this))return"-"+N(this).toString(E);const _=h(Math.pow(E,6));var I=this;let w="";for(;;){const T=ee(I,_).g;I=U(I,T.j(_));let S=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=T,D(I))return S+w;for(;S.length<6;)S="0"+S;w=S+w}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function k(E){return E.h==-1}r.l=function(E){return E=U(this,E),k(E)?-1:D(E)?0:1};function N(E){const _=E.g.length,I=[];for(let w=0;w<_;w++)I[w]=~E.g[w];return new o(I,~E.h).add(p)}r.abs=function(){return k(this)?N(this):this},r.add=function(E){const _=Math.max(this.g.length,E.g.length),I=[];let w=0;for(let T=0;T<=_;T++){let S=w+(this.i(T)&65535)+(E.i(T)&65535),y=(S>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=y>>>16,S&=65535,y&=65535,I[T]=y<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function U(E,_){return E.add(N(_))}r.j=function(E){if(D(this)||D(E))return m;if(k(this))return k(E)?N(this).j(N(E)):N(N(this).j(E));if(k(E))return N(this.j(N(E)));if(this.l(v)<0&&E.l(v)<0)return h(this.m()*E.m());const _=this.g.length+E.g.length,I=[];for(var w=0;w<2*_;w++)I[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<E.g.length;T++){const S=this.i(w)>>>16,y=this.i(w)&65535,Le=E.i(T)>>>16,Yt=E.i(T)&65535;I[2*w+2*T]+=y*Yt,z(I,2*w+2*T),I[2*w+2*T+1]+=S*Yt,z(I,2*w+2*T+1),I[2*w+2*T+1]+=y*Le,z(I,2*w+2*T+1),I[2*w+2*T+2]+=S*Le,z(I,2*w+2*T+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new o(I,0)};function z(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function j(E,_){this.g=E,this.h=_}function ee(E,_){if(D(_))throw Error("division by zero");if(D(E))return new j(m,m);if(k(E))return _=ee(N(E),_),new j(N(_.g),N(_.h));if(k(_))return _=ee(E,N(_)),new j(N(_.g),_.h);if(E.g.length>30){if(k(E)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=p,w=_;w.l(E)<=0;)I=H(I),w=H(w);var T=Y(I,1),S=Y(w,1);for(w=Y(w,2),I=Y(I,2);!D(w);){var y=S.add(w);y.l(E)<=0&&(T=T.add(I),S=y),w=Y(w,1),I=Y(I,1)}return _=U(E,T.j(_)),new j(T,_)}for(T=m;E.l(_)>=0;){for(I=Math.max(1,Math.floor(E.m()/_.m())),w=Math.ceil(Math.log(I)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),S=h(I),y=S.j(_);k(y)||y.l(E)>0;)I-=w,S=h(I),y=S.j(_);D(S)&&(S=p),T=T.add(S),E=U(E,y)}return new j(T,E)}r.B=function(E){return ee(this,E).h},r.and=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)&E.i(w);return new o(I,this.h&E.h)},r.or=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)|E.i(w);return new o(I,this.h|E.h)},r.xor=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)^E.i(w);return new o(I,this.h^E.h)};function H(E){const _=E.g.length+1,I=[];for(let w=0;w<_;w++)I[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(I,E.h)}function Y(E,_){const I=_>>5;_%=32;const w=E.g.length-I,T=[];for(let S=0;S<w;S++)T[S]=_>0?E.i(S+I)>>>_|E.i(S+I+1)<<32-_:E.i(S+I);return new o(T,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Bh=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Nt=o}).apply(typeof el!="undefined"?el:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var ni=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uh,Jr,qh,li,na,jh,zh,$h;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ni=="object"&&ni];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,l){if(l)e:{var d=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in d))break e;d=d[b]}a=a[a.length-1],g=d[a],l=l(g),l!=g&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var d=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&d.push([g,l[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function u(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function c(a,l,d){return a.call.apply(a.bind,arguments)}function h(a,l,d){return h=c,h.apply(null,arguments)}function f(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,l){function d(){}d.prototype=l.prototype,a.Z=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,b,V){for(var F=Array(arguments.length-2),K=2;K<arguments.length;K++)F[K-2]=arguments[K];return l.prototype[b].apply(g,F)}}var p=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const l=a.length;if(l>0){const d=Array(l);for(let g=0;g<l;g++)d[g]=a[g];return d}return[]}function D(a,l){for(let g=1;g<arguments.length;g++){const b=arguments[g];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const V=b.length||0;a.length=d+V;for(let F=0;F<V;F++)a[d+F]=b[F]}else a.push(b)}}class k{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function N(a){o.setTimeout(()=>{throw a},0)}function U(){var a=E;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class z{constructor(){this.h=this.g=null}add(l,d){const g=j.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var j=new k(()=>new ee,a=>a.reset());class ee{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let H,Y=!1,E=new z,_=()=>{const a=Promise.resolve(void 0);H=()=>{a.then(I)}};function I(){for(var a;a=U();){try{a.h.call(a.g)}catch(d){N(d)}var l=j;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Y=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,l),o.removeEventListener("test",d,l)}catch(d){}return a}();function y(a){return/^[\s\xa0]*$/.test(a)}function Le(a,l){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}m(Le,T),Le.prototype.init=function(a,l){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Le.Z.h.call(this)},Le.prototype.h=function(){Le.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Yt="closure_listenable_"+(Math.random()*1e6|0),Fm=0;function Lm(a,l,d,g,b){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=b,this.key=++Fm,this.da=this.fa=!1}function Us(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function qs(a,l,d){for(const g in a)l.call(d,a[g],g,a)}function Bm(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function qu(a){const l={};for(const d in a)l[d]=a[d];return l}const ju="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zu(a,l){let d,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(d in g)a[d]=g[d];for(let V=0;V<ju.length;V++)d=ju[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function js(a){this.src=a,this.g={},this.h=0}js.prototype.add=function(a,l,d,g,b){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const F=mo(a,l,g,b);return F>-1?(l=a[F],d||(l.fa=!1)):(l=new Lm(l,this.src,V,!!g,b),l.fa=d,a.push(l)),l};function fo(a,l){const d=l.type;if(d in a.g){var g=a.g[d],b=Array.prototype.indexOf.call(g,l,void 0),V;(V=b>=0)&&Array.prototype.splice.call(g,b,1),V&&(Us(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function mo(a,l,d,g){for(let b=0;b<a.length;++b){const V=a[b];if(!V.da&&V.listener==l&&V.capture==!!d&&V.ha==g)return b}return-1}var go="closure_lm_"+(Math.random()*1e6|0),po={};function $u(a,l,d,g,b){if(Array.isArray(l)){for(let V=0;V<l.length;V++)$u(a,l[V],d,g,b);return null}return d=Qu(d),a&&a[Yt]?a.J(l,d,u(g)?!!g.capture:!1,b):Um(a,l,d,!1,g,b)}function Um(a,l,d,g,b,V){if(!l)throw Error("Invalid event type");const F=u(b)?!!b.capture:!!b;let K=yo(a);if(K||(a[go]=K=new js(a)),d=K.add(l,d,g,F,V),d.proxy)return d;if(g=qm(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(b=F),b===void 0&&(b=!1),a.addEventListener(l.toString(),g,b);else if(a.attachEvent)a.attachEvent(Ku(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function qm(){function a(d){return l.call(a.src,a.listener,d)}const l=jm;return a}function Gu(a,l,d,g,b){if(Array.isArray(l))for(var V=0;V<l.length;V++)Gu(a,l[V],d,g,b);else g=u(g)?!!g.capture:!!g,d=Qu(d),a&&a[Yt]?(a=a.i,V=String(l).toString(),V in a.g&&(l=a.g[V],d=mo(l,d,g,b),d>-1&&(Us(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete a.g[V],a.h--)))):a&&(a=yo(a))&&(l=a.g[l.toString()],a=-1,l&&(a=mo(l,d,g,b)),(d=a>-1?l[a]:null)&&_o(d))}function _o(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Yt])fo(l.i,a);else{var d=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(d,g,a.capture):l.detachEvent?l.detachEvent(Ku(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=yo(l))?(fo(d,a),d.h==0&&(d.src=null,l[go]=null)):Us(a)}}}function Ku(a){return a in po?po[a]:po[a]="on"+a}function jm(a,l){if(a.da)a=!0;else{l=new Le(l,this);const d=a.listener,g=a.ha||a.src;a.fa&&_o(a),a=d.call(g,l)}return a}function yo(a){return a=a[go],a instanceof js?a:null}var Io="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qu(a){return typeof a=="function"?a:(a[Io]||(a[Io]=function(l){return a.handleEvent(l)}),a[Io])}function De(){w.call(this),this.i=new js(this),this.M=this,this.G=null}m(De,w),De.prototype[Yt]=!0,De.prototype.removeEventListener=function(a,l,d,g){Gu(this,a,l,d,g)};function Oe(a,l){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new T(l,a);else if(l instanceof T)l.target=l.target||a;else{var b=l;l=new T(g,a),zu(l,b)}b=!0;let V,F;if(d)for(F=d.length-1;F>=0;F--)V=l.g=d[F],b=zs(V,g,!0,l)&&b;if(V=l.g=a,b=zs(V,g,!0,l)&&b,b=zs(V,g,!1,l)&&b,d)for(F=0;F<d.length;F++)V=l.g=d[F],b=zs(V,g,!1,l)&&b}De.prototype.N=function(){if(De.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const d=a.g[l];for(let g=0;g<d.length;g++)Us(d[g]);delete a.g[l],a.h--}}this.G=null},De.prototype.J=function(a,l,d,g){return this.i.add(String(a),l,!1,d,g)},De.prototype.K=function(a,l,d,g){return this.i.add(String(a),l,!0,d,g)};function zs(a,l,d,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let V=0;V<l.length;++V){const F=l[V];if(F&&!F.da&&F.capture==d){const K=F.listener,Ee=F.ha||F.src;F.fa&&fo(a.i,F),b=K.call(Ee,g)!==!1&&b}}return b&&!g.defaultPrevented}function zm(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Wu(a){a.g=zm(()=>{a.g=null,a.i&&(a.i=!1,Wu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class $m extends w{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Wu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(a){w.call(this),this.h=a,this.g={}}m(Pr,w);var Hu=[];function Ju(a){qs(a.g,function(l,d){this.g.hasOwnProperty(d)&&_o(l)},a),a.g={}}Pr.prototype.N=function(){Pr.Z.N.call(this),Ju(this)},Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Eo=o.JSON.stringify,Gm=o.JSON.parse,Km=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Yu(){}function Xu(){}var Vr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function To(){T.call(this,"d")}m(To,T);function wo(){T.call(this,"c")}m(wo,T);var Xt={},Zu=null;function $s(){return Zu=Zu||new De}Xt.Ia="serverreachability";function ec(a){T.call(this,Xt.Ia,a)}m(ec,T);function Cr(a){const l=$s();Oe(l,new ec(l))}Xt.STAT_EVENT="statevent";function tc(a,l){T.call(this,Xt.STAT_EVENT,a),this.stat=l}m(tc,T);function Fe(a){const l=$s();Oe(l,new tc(l,a))}Xt.Ja="timingevent";function nc(a,l){T.call(this,Xt.Ja,a),this.size=l}m(nc,T);function Dr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function xr(){this.g=!0}xr.prototype.ua=function(){this.g=!1};function Qm(a,l,d,g,b,V){a.info(function(){if(a.g)if(V){var F="",K=V.split("&");for(let oe=0;oe<K.length;oe++){var Ee=K[oe].split("=");if(Ee.length>1){const ve=Ee[0];Ee=Ee[1];const et=ve.split("_");F=et.length>=2&&et[1]=="type"?F+(ve+"="+Ee+"&"):F+(ve+"=redacted&")}}}else F=null;else F=V;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+l+`
`+d+`
`+F})}function Wm(a,l,d,g,b,V,F){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+l+`
`+d+`
`+V+" "+F})}function Dn(a,l,d,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Jm(a,d)+(g?" "+g:"")})}function Hm(a,l){a.info(function(){return"TIMEOUT: "+l})}xr.prototype.info=function(){};function Jm(a,l){if(!a.g)return l;if(!l)return null;try{const V=JSON.parse(l);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var b=g[0];if(b!="noop"&&b!="stop"&&b!="close")for(let F=1;F<g.length;F++)g[F]=""}}}}return Eo(V)}catch(V){return l}}var Gs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},rc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},sc;function Ao(){}m(Ao,Yu),Ao.prototype.g=function(){return new XMLHttpRequest},sc=new Ao;function Nr(a){return encodeURIComponent(String(a))}function Ym(a){var l=1;a=a.split(":");const d=[];for(;l>0&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function yt(a,l,d,g){this.j=a,this.i=l,this.l=d,this.S=g||1,this.V=new Pr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ic}function ic(){this.i=null,this.g="",this.h=!1}var oc={},vo={};function bo(a,l,d){a.M=1,a.A=Qs(Ze(l)),a.u=d,a.R=!0,ac(a,null)}function ac(a,l){a.F=Date.now(),Ks(a),a.B=Ze(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ec(d.i,"t",g),a.C=0,d=a.j.L,a.h=new ic,a.g=Lc(a.j,d?l:null,!a.u),a.P>0&&(a.O=new $m(h(a.Y,a,a.g),a.P)),l=a.V,d=a.g,g=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Hu[0]=b.toString()),b=Hu);for(let V=0;V<b.length;V++){const F=$u(d,b[V],g||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=a.J?qu(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Cr(),Qm(a.i,a.v,a.B,a.l,a.S,a.u)}yt.prototype.ba=function(a){a=a.target;const l=this.O;l&&Tt(a)==3?l.j():this.Y(a)},yt.prototype.Y=function(a){try{if(a==this.g)e:{const K=Tt(this.g),Ee=this.g.ya(),oe=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||Sc(this.g)))){this.K||K!=4||Ee==7||(Ee==8||oe<=0?Cr(3):Cr(2)),Ro(this);var l=this.g.ca();this.X=l;var d=Xm(this);if(this.o=l==200,Wm(this.i,this.v,this.B,this.l,this.S,K,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,b=this.g;if((g=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var V=g;break t}}V=null}if(a=V)Dn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,So(this,a);else{this.o=!1,this.m=3,Fe(12),Zt(this),kr(this);break e}}if(this.R){a=!0;let ve;for(;!this.K&&this.C<d.length;)if(ve=Zm(this,d),ve==vo){K==4&&(this.m=4,Fe(14),a=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(ve==oc){this.m=4,Fe(15),Dn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Dn(this.i,this.l,ve,null),So(this,ve);if(uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||d.length!=0||this.h.h||(this.m=1,Fe(16),a=!1),this.o=this.o&&a,!a)Dn(this.i,this.l,d,"[Invalid Chunked Response]"),Zt(this),kr(this);else if(d.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Mo(F),F.P=!0,Fe(11))}}else Dn(this.i,this.l,d,null),So(this,d);K==4&&Zt(this),this.o&&!this.K&&(K==4?kc(this.j,this):(this.o=!1,Ks(this)))}else fg(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,Fe(12)):(this.m=0,Fe(13)),Zt(this),kr(this)}}}catch(K){}finally{}};function Xm(a){if(!uc(a))return a.g.la();const l=Sc(a.g);if(l==="")return"";let d="";const g=l.length,b=Tt(a.g)==4;if(!a.h.i){if(typeof TextDecoder=="undefined")return Zt(a),kr(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,d+=a.h.i.decode(l[V],{stream:!(b&&V==g-1)});return l.length=0,a.h.g+=d,a.C=0,a.h.g}function uc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Zm(a,l){var d=a.C,g=l.indexOf(`
`,d);return g==-1?vo:(d=Number(l.substring(d,g)),isNaN(d)?oc:(g+=1,g+d>l.length?vo:(l=l.slice(g,g+d),a.C=g+d,l)))}yt.prototype.cancel=function(){this.K=!0,Zt(this)};function Ks(a){a.T=Date.now()+a.H,cc(a,a.H)}function cc(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Dr(h(a.aa,a),l)}function Ro(a){a.D&&(o.clearTimeout(a.D),a.D=null)}yt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Hm(this.i,this.B),this.M!=2&&(Cr(),Fe(17)),Zt(this),this.m=2,kr(this)):cc(this,this.T-a)};function kr(a){a.j.I==0||a.K||kc(a.j,a)}function Zt(a){Ro(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Ju(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function So(a,l){try{var d=a.j;if(d.I!=0&&(d.g==a||Po(d.h,a))){if(!a.L&&Po(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(l)}catch(oe){g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Xs(d),Js(d);else break e;ko(d),Fe(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Dr(h(d.Va,d),6e3));dc(d.h)<=1&&d.ta&&(d.ta=void 0)}else tn(d,11)}else if((a.L||d.g==a)&&Xs(d),!y(l))for(b=d.Ba.g.parse(l),l=0;l<b.length;l++){let oe=b[l];const ve=oe[0];if(!(ve<=d.K))if(d.K=ve,oe=oe[1],d.I==2)if(oe[0]=="c"){d.M=oe[1],d.ba=oe[2];const et=oe[3];et!=null&&(d.ka=et,d.j.info("VER="+d.ka));const nn=oe[4];nn!=null&&(d.za=nn,d.j.info("SVER="+d.za));const wt=oe[5];wt!=null&&typeof wt=="number"&&wt>0&&(g=1.5*wt,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const At=a.g;if(At){const ei=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var V=g.h;V.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Vo(V,V.h),V.h=null))}if(g.G){const Oo=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(g.wa=Oo,ue(g.J,g.G,Oo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var F=a;if(g.na=Fc(g,g.L?g.ba:null,g.W),F.L){fc(g.h,F);var K=F,Ee=g.O;Ee&&(K.H=Ee),K.D&&(Ro(K),Ks(K)),g.g=F}else xc(g);d.i.length>0&&Ys(d)}else oe[0]!="stop"&&oe[0]!="close"||tn(d,7);else d.I==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?tn(d,7):No(d):oe[0]!="noop"&&d.l&&d.l.qa(oe),d.A=0)}}Cr(4)}catch(oe){}}var eg=class{constructor(a,l){this.g=a,this.map=l}};function lc(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dc(a){return a.h?1:a.g?a.g.size:0}function Po(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Vo(a,l){a.g?a.g.add(l):a.h=l}function fc(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}lc.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.G);return l}return v(a.i)}var gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tg(a,l){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let b,V=null;g>=0?(b=a[d].substring(0,g),V=a[d].substring(g+1)):b=a[d],l(b,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function It(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof It?(this.l=a.l,Mr(this,a.j),this.o=a.o,this.g=a.g,Or(this,a.u),this.h=a.h,Co(this,Tc(a.i)),this.m=a.m):a&&(l=String(a).match(gc))?(this.l=!1,Mr(this,l[1]||"",!0),this.o=Fr(l[2]||""),this.g=Fr(l[3]||"",!0),Or(this,l[4]),this.h=Fr(l[5]||"",!0),Co(this,l[6]||"",!0),this.m=Fr(l[7]||"")):(this.l=!1,this.i=new Br(null,this.l))}It.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Lr(l,pc,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Lr(l,pc,!0),"@"),a.push(Nr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Lr(d,d.charAt(0)=="/"?sg:rg,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Lr(d,og)),a.join("")},It.prototype.resolve=function(a){const l=Ze(this);let d=!!a.j;d?Mr(l,a.j):d=!!a.o,d?l.o=a.o:d=!!a.g,d?l.g=a.g:d=a.u!=null;var g=a.h;if(d)Or(l,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var b=l.h.lastIndexOf("/");b!=-1&&(g=l.h.slice(0,b+1)+g)}if(b=g,b==".."||b==".")g="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){g=b.lastIndexOf("/",0)==0,b=b.split("/");const V=[];for(let F=0;F<b.length;){const K=b[F++];K=="."?g&&F==b.length&&V.push(""):K==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&F==b.length&&V.push("")):(V.push(K),g=!0)}g=V.join("/")}else g=b}return d?l.h=g:d=a.i.toString()!=="",d?Co(l,Tc(a.i)):d=!!a.m,d&&(l.m=a.m),l};function Ze(a){return new It(a)}function Mr(a,l,d){a.j=d?Fr(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Or(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Co(a,l,d){l instanceof Br?(a.i=l,ag(a.i,a.l)):(d||(l=Lr(l,ig)),a.i=new Br(l,a.l))}function ue(a,l,d){a.i.set(l,d)}function Qs(a){return ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Fr(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Lr(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,ng),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ng(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pc=/[#\/\?@]/g,rg=/[#\?:]/g,sg=/[#\?]/g,ig=/[#\?@]/g,og=/#/g;function Br(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function en(a){a.g||(a.g=new Map,a.h=0,a.i&&tg(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Br.prototype,r.add=function(a,l){en(this),this.i=null,a=xn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function _c(a,l){en(a),l=xn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function yc(a,l){return en(a),l=xn(a,l),a.g.has(l)}r.forEach=function(a,l){en(this),this.g.forEach(function(d,g){d.forEach(function(b){a.call(l,b,g,this)},this)},this)};function Ic(a,l){en(a);let d=[];if(typeof l=="string")yc(a,l)&&(d=d.concat(a.g.get(xn(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)d=d.concat(a[l]);return d}r.set=function(a,l){return en(this),this.i=null,a=xn(this,a),yc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=Ic(this,a),a.length>0?String(a[0]):l):l};function Ec(a,l,d){_c(a,l),d.length>0&&(a.i=null,a.g.set(xn(a,l),v(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var d=l[g];const b=Nr(d);d=Ic(this,d);for(let V=0;V<d.length;V++){let F=b;d[V]!==""&&(F+="="+Nr(d[V])),a.push(F)}}return this.i=a.join("&")};function Tc(a){const l=new Br;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function xn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function ag(a,l){l&&!a.j&&(en(a),a.i=null,a.g.forEach(function(d,g){const b=g.toLowerCase();g!=b&&(_c(this,g),Ec(this,b,d))},a)),a.j=l}function ug(a,l){const d=new xr;if(o.Image){const g=new Image;g.onload=f(Et,d,"TestLoadImage: loaded",!0,l,g),g.onerror=f(Et,d,"TestLoadImage: error",!1,l,g),g.onabort=f(Et,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=f(Et,d,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function cg(a,l){const d=new xr,g=new AbortController,b=setTimeout(()=>{g.abort(),Et(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(b),V.ok?Et(d,"TestPingServer: ok",!0,l):Et(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Et(d,"TestPingServer: error",!1,l)})}function Et(a,l,d,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(d)}catch(V){}}function lg(){this.g=new Km}function Do(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Do,Yu),Do.prototype.g=function(){return new Ws(this.i,this.h)};function Ws(a,l){De.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ws,De),r=Ws.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,qr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ur(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function wc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Ur(this):qr(this),this.readyState==3&&wc(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,Ur(this))},r.Na=function(a){this.g&&(this.response=a,Ur(this))},r.ga=function(){this.g&&Ur(this)};function Ur(a){a.readyState=4,a.l=null,a.j=null,a.B=null,qr(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function qr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ac(a){let l="";return qs(a,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function xo(a,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ac(d),typeof a=="string"?d!=null&&Nr(d):ue(a,l,d))}function ge(a){De.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ge,De);var hg=/^https?$/i,dg=["POST","PUT"];r=ge.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():sc.g(),this.g.onreadystatechange=p(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(V){vc(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)d.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(dg,l,void 0)>=0)||g||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,F]of d)this.g.setRequestHeader(V,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){vc(this,V)}};function vc(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,bc(a),Hs(a)}function bc(a){a.A||(a.A=!0,Oe(a,"complete"),Oe(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Oe(this,"complete"),Oe(this,"abort"),Hs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),ge.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Rc(this):this.Xa())},r.Xa=function(){Rc(this)};function Rc(a){if(a.h&&typeof i!="undefined"){if(a.v&&Tt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Oe(a,"readystatechange"),Tt(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=V===0){let F=String(a.D).match(gc)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),g=!hg.test(F?F.toLowerCase():"")}d=g}if(d)Oe(a,"complete"),Oe(a,"success");else{a.o=6;try{var b=Tt(a)>2?a.g.statusText:""}catch(F){b=""}a.l=b+" ["+a.ca()+"]",bc(a)}}finally{Hs(a)}}}}function Hs(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,l||Oe(a,"ready");try{d.onreadystatechange=null}catch(g){}}}r.isActive=function(){return!!this.g};function Tt(a){return a.g?a.g.readyState:0}r.ca=function(){try{return Tt(this)>2?this.g.status:-1}catch(a){return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Gm(l)}};function Sc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(l){return null}}function fg(a){const l={};a=(a.g&&Tt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=Ym(a[g]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=l[b]||[];l[b]=V,V.push(d)}Bm(l,function(g){return g.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function jr(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Pc(a){this.za=0,this.i=[],this.j=new xr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=jr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=jr("baseRetryDelayMs",5e3,a),this.Za=jr("retryDelaySeedMs",1e4,a),this.Ta=jr("forwardChannelMaxRetries",2,a),this.va=jr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new lc(a&&a.concurrentRequestLimit),this.Ba=new lg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Pc.prototype,r.ka=8,r.I=1,r.connect=function(a,l,d,g){Fe(0),this.W=a,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Fc(this,null,this.W),Ys(this)};function No(a){if(Vc(a),a.I==3){var l=a.V++,d=Ze(a.J);if(ue(d,"SID",a.M),ue(d,"RID",l),ue(d,"TYPE","terminate"),zr(a,d),l=new yt(a,a.j,l),l.M=2,l.A=Qs(Ze(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(l.A.toString(),"")}catch(g){}!d&&o.Image&&(new Image().src=l.A,d=!0),d||(l.g=Lc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ks(l)}Oc(a)}function Js(a){a.g&&(Mo(a),a.g.cancel(),a.g=null)}function Vc(a){Js(a),a.v&&(o.clearTimeout(a.v),a.v=null),Xs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ys(a){if(!hc(a.h)&&!a.m){a.m=!0;var l=a.Ea;H||_(),Y||(H(),Y=!0),E.add(l,a),a.D=0}}function mg(a,l){return dc(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Dr(h(a.Ea,a,l),Mc(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new yt(this,this.j,a);let V=this.o;if(this.U&&(V?(V=qu(V),zu(V,this.U)):V=this.U),this.u!==null||this.R||(b.J=V,V=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Dc(this,b,l),d=Ze(this.J),ue(d,"RID",a),ue(d,"CVER",22),this.G&&ue(d,"X-HTTP-Session-Id",this.G),zr(this,d),V&&(this.R?l="headers="+Nr(Ac(V))+"&"+l:this.u&&xo(d,this.u,V)),Vo(this.h,b),this.Ra&&ue(d,"TYPE","init"),this.S?(ue(d,"$req",l),ue(d,"SID","null"),b.U=!0,bo(b,d,null)):bo(b,d,l),this.I=2}}else this.I==3&&(a?Cc(this,a):this.i.length==0||hc(this.h)||Cc(this))};function Cc(a,l){var d;l?d=l.l:d=a.V++;const g=Ze(a.J);ue(g,"SID",a.M),ue(g,"RID",d),ue(g,"AID",a.K),zr(a,g),a.u&&a.o&&xo(g,a.u,a.o),d=new yt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Dc(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Vo(a.h,d),bo(d,g,l)}function zr(a,l){a.H&&qs(a.H,function(d,g){ue(l,g,d)}),a.l&&qs({},function(d,g){ue(l,g,d)})}function Dc(a,l,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var b=a.i;let K=-1;for(;;){const Ee=["count="+d];K==-1?d>0?(K=b[0].g,Ee.push("ofs="+K)):K=0:Ee.push("ofs="+K);let oe=!0;for(let ve=0;ve<d;ve++){var V=b[ve].g;const et=b[ve].map;if(V-=K,V<0)K=Math.max(0,b[ve].g-100),oe=!1;else try{V="req"+V+"_"||"";try{var F=et instanceof Map?et:Object.entries(et);for(const[nn,wt]of F){let At=wt;u(wt)&&(At=Eo(wt)),Ee.push(V+nn+"="+encodeURIComponent(At))}}catch(nn){throw Ee.push(V+"type="+encodeURIComponent("_badmap")),nn}}catch(nn){g&&g(et)}}if(oe){F=Ee.join("&");break e}}F=void 0}return a=a.i.splice(0,d),l.G=a,F}function xc(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;H||_(),Y||(H(),Y=!0),E.add(l,a),a.A=0}}function ko(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Dr(h(a.Da,a),Mc(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,Nc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Dr(h(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Fe(10),Js(this),Nc(this))};function Mo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Nc(a){a.g=new yt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Ze(a.na);ue(l,"RID","rpc"),ue(l,"SID",a.M),ue(l,"AID",a.K),ue(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&ue(l,"TO",a.ia),ue(l,"TYPE","xmlhttp"),zr(a,l),a.u&&a.o&&xo(l,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Qs(Ze(l)),d.u=null,d.R=!0,ac(d,a)}r.Va=function(){this.C!=null&&(this.C=null,Js(this),ko(this),Fe(19))};function Xs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function kc(a,l){var d=null;if(a.g==l){Xs(a),Mo(a),a.g=null;var g=2}else if(Po(a.h,l))d=l.G,fc(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var b=a.D;g=$s(),Oe(g,new nc(g,d)),Ys(a)}else xc(a);else if(b=l.m,b==3||b==0&&l.X>0||!(g==1&&mg(a,l)||g==2&&ko(a)))switch(d&&d.length>0&&(l=a.h,l.i=l.i.concat(d)),b){case 1:tn(a,5);break;case 4:tn(a,10);break;case 3:tn(a,6);break;default:tn(a,2)}}}function Mc(a,l){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*l}function tn(a,l){if(a.j.info("Error code "+l),l==2){var d=h(a.bb,a),g=a.Ua;const b=!g;g=new It(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Mr(g,"https"),Qs(g),b?ug(g.toString(),d):cg(g.toString(),d)}else Fe(2);a.I=0,a.l&&a.l.pa(l),Oc(a),Vc(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Oc(a){if(a.I=0,a.ja=[],a.l){const l=mc(a.h);(l.length!=0||a.i.length!=0)&&(D(a.ja,l),D(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function Fc(a,l,d){var g=d instanceof It?Ze(d):new It(d);if(g.g!="")l&&(g.g=l+"."+g.g),Or(g,g.u);else{var b=o.location;g=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const V=new It(null);g&&Mr(V,g),l&&(V.g=l),b&&Or(V,b),d&&(V.h=d),g=V}return d=a.G,l=a.wa,d&&l&&ue(g,d,l),ue(g,"VER",a.ka),zr(a,g),g}function Lc(a,l,d){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new ge(new Do({ab:d})):new ge(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bc(){}r=Bc.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Zs(){}Zs.prototype.g=function(a,l){return new Ke(a,l)};function Ke(a,l){De.call(this),this.g=new Pc(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!y(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Nn(this)}m(Ke,De),Ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){No(this.g)},Ke.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Eo(a),a=d);l.i.push(new eg(l.Ya++,a)),l.I==3&&Ys(l)},Ke.prototype.N=function(){this.g.l=null,delete this.j,No(this.g),delete this.g,Ke.Z.N.call(this)};function Uc(a){To.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}m(Uc,To);function qc(){wo.call(this),this.status=1}m(qc,wo);function Nn(a){this.g=a}m(Nn,Bc),Nn.prototype.ra=function(){Oe(this.g,"a")},Nn.prototype.qa=function(a){Oe(this.g,new Uc(a))},Nn.prototype.pa=function(a){Oe(this.g,new qc)},Nn.prototype.oa=function(){Oe(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,$h=function(){return new Zs},zh=function(){return $s()},jh=Xt,na={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Gs.NO_ERROR=0,Gs.TIMEOUT=8,Gs.HTTP_ERROR=6,li=Gs,rc.COMPLETE="complete",qh=rc,Xu.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",De.prototype.listen=De.prototype.J,Jr=Xu,ge.prototype.listenOnce=ge.prototype.K,ge.prototype.getLastError=ge.prototype.Ha,ge.prototype.getLastErrorCode=ge.prototype.ya,ge.prototype.getStatus=ge.prototype.ca,ge.prototype.getResponseJson=ge.prototype.La,ge.prototype.getResponseText=ge.prototype.la,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Fa,Uh=ge}).apply(typeof ni!="undefined"?ni:typeof self!="undefined"?self:typeof window!="undefined"?window:{});/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let pr="12.12.0";function r_(r){pr=r}/**
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
 */const Ot=new kh("@firebase/firestore");function Un(){return Ot.logLevel}function s_(r){Ot.setLogLevel(r)}function x(r,...e){if(Ot.logLevel<=Z.DEBUG){const t=e.map(ka);Ot.debug(`Firestore (${pr}): ${r}`,...t)}}function pe(r,...e){if(Ot.logLevel<=Z.ERROR){const t=e.map(ka);Ot.error(`Firestore (${pr}): ${r}`,...t)}}function Ge(r,...e){if(Ot.logLevel<=Z.WARN){const t=e.map(ka);Ot.warn(`Firestore (${pr}): ${r}`,...t)}}function ka(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch(e){return r}}/**
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
 */function L(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Gh(r,n,t)}function Gh(r,e,t){let n=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch(s){n+=" CONTEXT: "+t}throw pe(n),new Error(n)}function B(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Gh(e,s,n)}function i_(r,e){r||L(57014,e)}function O(r,e){return r}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends gr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Kh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Re.UNAUTHENTICATED))}shutdown(){}}class o_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class a_{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){B(this.o===void 0,42304);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new Pe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(()=>P(this,null,function*(){yield c.promise,yield s(this.currentUser)}))},u=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(B(typeof n.accessToken=="string",31837,{l:n}),new Kh(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class u_{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class c_{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new u_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ra{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qp(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){B(this.o===void 0,3512);const n=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ra(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(B(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ra(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class h_{getToken(){return Promise.resolve(new ra(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function d_(r){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Ui{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=d_(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function $(r,e){return r<e?-1:r>e?1:0}function sa(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return zo(s)===zo(i)?$(s,i):zo(s)?1:-1}return $(r.length,e.length)}const f_=55296,m_=57343;function zo(r){const e=r.charCodeAt(0);return e>=f_&&e<=m_}function Wn(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function Wh(r){return r+"\0"}/**
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
 */const ia="__name__";class tt{constructor(e,t,n){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&L(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return tt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tt?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=tt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return $(e.length,t.length)}static compareSegments(e,t){const n=tt.isNumericId(e),s=tt.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?tt.extractNumericId(e).compare(tt.extractNumericId(t)):sa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nt.fromString(e.substring(4,e.length-2))}}class Q extends tt{construct(e,t,n){return new Q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new C(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}const g_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends tt{construct(e,t,n){return new le(e,t,n)}static isValidIdentifier(e){return g_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ia}static keyField(){return new le([ia])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new C(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new C(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(n+=u,s++):(i(),s++)}if(i(),o)throw new C(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(t)}static emptyPath(){return new le([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(Q.fromString(e))}static fromName(e){return new M(Q.fromString(e).popFirst(5))}static empty(){return new M(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new Q(e.slice()))}}/**
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
 */function Ma(r,e,t){if(!t)throw new C(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Hh(r,e,t,n){if(e===!0&&n===!0)throw new C(R.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function tl(r){if(!M.isDocumentKey(r))throw new C(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function nl(r){if(M.isDocumentKey(r))throw new C(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Jh(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function qi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":L(12329,{type:typeof r})}function W(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new C(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qi(r);throw new C(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Yh(r,e){if(e<=0)throw new C(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ie(r,e){const t={typeString:r};return e&&(t.value=e),t}function bn(r,e){if(!Jh(r))throw new C(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new C(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const rl=-62135596800,sl=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*sl);return new te(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<rl)throw new C(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sl}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bn(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-rl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:Ie("string",te._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
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
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new te(0,0))}static max(){return new q(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Hn=-1;class Jn{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function oa(r){return r.fields.find(e=>e.kind===2)}function on(r){return r.fields.filter(e=>e.kind!==2)}function p_(r,e){let t=$(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=__(r.fields[n],e.fields[n]),t!==0)return t;return $(r.fields.length,e.fields.length)}Jn.UNKNOWN_ID=-1;class fn{constructor(e,t){this.fieldPath=e,this.kind=t}}function __(r,e){const t=le.comparator(r.fieldPath,e.fieldPath);return t!==0?t:$(r.kind,e.kind)}class Yn{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Yn(0,He.min())}}function Xh(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=q.fromTimestamp(n===1e9?new te(t+1,0):new te(t,n));return new He(s,M.empty(),e)}function Zh(r){return new He(r.readTime,r.key,Hn)}class He{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new He(q.min(),M.empty(),Hn)}static max(){return new He(q.max(),M.empty(),Hn)}}function Oa(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(r.documentKey,e.documentKey),t!==0?t:$(r.largestBatchId,e.largestBatchId))}/**
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
 */const ed="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class td{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */function $t(r){return P(this,null,function*(){if(r.code!==R.FAILED_PRECONDITION||r.message!==ed)throw r;x("LocalStore","Unexpectedly lost primary lease")})}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,n)=>{t(e)})}static reject(e){return new A((t,n)=>{n(e)})}static waitFor(e){return new A((t,n)=>{let s=0,i=0,o=!1;e.forEach(u=>{++s,u.next(()=>{++i,o&&i===s&&t()},c=>n(c))}),o=!0,i===s&&t()})}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next(s=>s?A.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new A((n,s)=>{const i=e.length,o=new Array(i);let u=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{o[h]=f,++u,u===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new A((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */const Qe="SimpleDb";class ji{static open(e,t,n,s){try{return new ji(t,e.transaction(s,n))}catch(i){throw new ts(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Pe,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ts(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=Fa(n.target.error);this.S.reject(new ts(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(x(Qe,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new I_(t)}}class it{static delete(e){return x(Qe,"Removing database:",e),un(Rh().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Dh())return!1;if(it.F())return!0;const e=Qn(),t=it.M(e),n=0<t&&t<10,s=nd(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,it.M(Qn())===12.2&&pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}L(e){return P(this,null,function*(){return this.db||(x(Qe,"Opening database:",this.name),this.db=yield new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new ts(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new C(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new C(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new ts(e,o))},s.onupgradeneeded=i=>{x(Qe,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next(()=>{x(Qe,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db})}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}runTransaction(e,t,n,s){return P(this,null,function*(){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=yield this.L(e);const u=ji.open(this.db,e,i?"readonly":"readwrite",n),c=s(u).next(h=>(u.C(),h)).catch(h=>(u.abort(h),A.reject(h))).toPromise();return c.catch(()=>{}),yield u.D,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&o<3;if(x(Qe,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}})}close(){this.db&&this.db.close(),this.db=void 0}}function nd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class y_{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return un(this.U.delete())}}class ts extends C{constructor(e,t){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Gt(r){return r.name==="IndexedDbTransactionError"}class I_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(x(Qe,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(x(Qe,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),un(n)}add(e){return x(Qe,"ADD",this.store.name,e,e),un(this.store.add(e))}get(e){return un(this.store.get(e)).next(t=>(t===void 0&&(t=null),x(Qe,"GET",this.store.name,e,t),t))}delete(e){return x(Qe,"DELETE",this.store.name,e),un(this.store.delete(e))}count(){return x(Qe,"COUNT",this.store.name),un(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A((o,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(n),o=[];return this.H(i,(u,c)=>{o.push(c)}).next(()=>o)}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}X(e,t){x(Qe,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const s=this.cursor(n);return this.H(s,(i,o,u)=>u.delete())}ee(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.H(s,t)}te(e){const t=this.cursor({});return new A((n,s)=>{t.onerror=i=>{const o=Fa(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(u=>{u?o.continue():n()}):n()}})}H(e,t){const n=[];return new A((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const u=o.target.result;if(!u)return void s();const c=new y_(u),h=t(u.primaryKey,u.value,c);if(h instanceof A){const f=h.catch(m=>(c.done(),A.reject(m)));n.push(f)}c.isDone?s():c.G===null?u.continue():u.continue(c.G)}}).next(()=>A.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function un(r){return new A((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Fa(n.target.error);t(s)}})}let il=!1;function Fa(r){const e=it.M(Qn());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return il||(il=!0,setTimeout(()=>{throw n},0)),n}}return r}const ns="IndexBackfiller";class E_{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){x(ns,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,()=>P(this,null,function*(){this.task=null;try{const t=yield this.ne.ie();x(ns,`Documents written: ${t}`)}catch(t){Gt(t)?x(ns,"Ignoring IndexedDB error during index backfill: ",t):yield $t(t)}yield this.re(6e4)}))}}class T_{constructor(e,t){this.localStore=e,this.persistence=t}ie(e=50){return P(this,null,function*(){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))})}se(e,t){const n=new Set;let s=t,i=!0;return A.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return x(ns,`Processing collection: ${o}`),this.oe(e,o,s).next(u=>{s-=u,n.add(o)});i=!1})).next(()=>t-s)}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(s,i)).next(u=>(x(ns,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u))).next(()=>o.size)}))}_e(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=Zh(i);Oa(o,n)>0&&(n=o)}),new He(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ue{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ue.ce=-1;/**
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
 */const kt=-1;function bs(r){return r==null}function fs(r){return r===0&&1/r==-1/0}function rd(r){return typeof r=="number"&&Number.isInteger(r)&&!fs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const vi="";function ke(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ol(e)),e=w_(r.get(t),e);return ol(e)}function w_(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case vi:t+="";break;default:t+=i}}return t}function ol(r){return r+vi+""}function rt(r){const e=r.length;if(B(e>=2,64408,{path:r}),e===2)return B(r.charAt(0)===vi&&r.charAt(1)==="",56145,{path:r}),Q.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(vi,i);switch((o<0||o>t)&&L(50515,{path:r}),r.charAt(o+1)){case"":const u=r.substring(i,o);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:L(61167,{path:r})}i=o+2}return new Q(n)}/**
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
 */const an="remoteDocuments",Rs="owner",kn="owner",ms="mutationQueues",A_="userId",Je="mutations",al="batchId",dn="userMutationsIndex",ul=["userId","batchId"];/**
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
 */function hi(r,e){return[r,ke(e)]}function sd(r,e,t){return[r,ke(e),t]}const v_={},Xn="documentMutations",bi="remoteDocumentsV14",b_=["prefixPath","collectionGroup","readTime","documentId"],di="documentKeyIndex",R_=["prefixPath","collectionGroup","documentId"],id="collectionGroupIndex",S_=["collectionGroup","readTime","prefixPath","documentId"],gs="remoteDocumentGlobal",aa="remoteDocumentGlobalKey",Zn="targets",od="queryTargetsIndex",P_=["canonicalId","targetId"],er="targetDocuments",V_=["targetId","path"],La="documentTargetsIndex",C_=["path","targetId"],Ri="targetGlobalKey",mn="targetGlobal",ps="collectionParents",D_=["collectionId","parent"],tr="clientMetadata",x_="clientId",zi="bundles",N_="bundleId",$i="namedQueries",k_="name",Ba="indexConfiguration",M_="indexId",ua="collectionGroupIndex",O_="collectionGroup",rs="indexState",F_=["indexId","uid"],ad="sequenceNumberIndex",L_=["uid","sequenceNumber"],ss="indexEntries",B_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ud="documentKeyIndex",U_=["indexId","uid","orderedDocumentKey"],Gi="documentOverlays",q_=["userId","collectionPath","documentId"],ca="collectionPathOverlayIndex",j_=["userId","collectionPath","largestBatchId"],cd="collectionGroupOverlayIndex",z_=["userId","collectionGroup","largestBatchId"],Ua="globals",$_="name",ld=[ms,Je,Xn,an,Zn,Rs,mn,er,tr,gs,ps,zi,$i],G_=[...ld,Gi],hd=[ms,Je,Xn,bi,Zn,Rs,mn,er,tr,gs,ps,zi,$i,Gi],dd=hd,qa=[...dd,Ba,rs,ss],K_=qa,fd=[...qa,Ua],Q_=fd;/**
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
 */class la extends td{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Ae(r,e){const t=O(r);return it.O(t.le,e)}/**
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
 */function cl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Kt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function md(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function gd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Ce.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}}class ri{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n!=null?n:Ce.RED,this.left=s!=null?s:Ce.EMPTY,this.right=i!=null?i:Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ce(e!=null?e:this.key,t!=null?t:this.value,n!=null?n:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ce.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ll(this.data.getIterator())}getIteratorFrom(e){return new ll(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class ll{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Mn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class qe{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new qe([])}unionWith(e){let t=new se(le.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class pd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function W_(){return typeof atob!="undefined"}/**
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
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new pd("Invalid base64 string: "+i):i}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const H_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(r){if(B(!!r,39018),typeof r=="string"){let e=0;const t=H_.exec(r);if(B(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:he(r.seconds),nanos:he(r.nanos)}}function he(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function dt(r){return typeof r=="string"?me.fromBase64String(r):me.fromUint8Array(r)}/**
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
 */const _d="server_timestamp",yd="__type__",Id="__previous_value__",Ed="__local_write_time__";function Ki(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[yd])==null?void 0:n.stringValue)===_d}function Qi(r){const e=r.mapValue.fields[Id];return Ki(e)?Qi(e):e}function _s(r){const e=ht(r.mapValue.fields[Ed].timestampValue);return new te(e.seconds,e.nanos)}/**
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
 */class J_{constructor(e,t,n,s,i,o,u,c,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const ys="(default)";class Ft{constructor(e,t){this.projectId=e,this.database=t||ys}static empty(){return new Ft("","")}get isDefaultDatabase(){return this.database===ys}isEqual(e){return e instanceof Ft&&e.projectId===this.projectId&&e.database===this.database}}function Y_(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new C(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ft(r.options.projectId,e)}/**
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
 */const ja="__type__",Td="__max__",Vt={mapValue:{fields:{__type__:{stringValue:Td}}}},za="__vector__",nr="value",fi={nullValue:"NULL_VALUE"};function Lt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ki(r)?4:wd(r)?9007199254740991:Wi(r)?10:11:L(28295,{value:r})}function at(r,e){if(r===e)return!0;const t=Lt(r);if(t!==Lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return _s(r).isEqual(_s(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ht(s.timestampValue),u=ht(i.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return dt(s.bytesValue).isEqual(dt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return he(s.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return he(s.integerValue)===he(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=he(s.doubleValue),u=he(i.doubleValue);return o===u?fs(o)===fs(u):isNaN(o)&&isNaN(u)}return!1}(r,e);case 9:return Wn(r.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},u=i.mapValue.fields||{};if(cl(o)!==cl(u))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(u[c]===void 0||!at(o[c],u[c])))return!1;return!0}(r,e);default:return L(52216,{left:r})}}function Is(r,e){return(r.values||[]).find(t=>at(t,e))!==void 0}function Bt(r,e){if(r===e)return 0;const t=Lt(r),n=Lt(e);if(t!==n)return $(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,e.booleanValue);case 2:return function(i,o){const u=he(i.integerValue||i.doubleValue),c=he(o.integerValue||o.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,e);case 3:return hl(r.timestampValue,e.timestampValue);case 4:return hl(_s(r),_s(e));case 5:return sa(r.stringValue,e.stringValue);case 6:return function(i,o){const u=dt(i),c=dt(o);return u.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const u=i.split("/"),c=o.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=$(u[h],c[h]);if(f!==0)return f}return $(u.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const u=$(he(i.latitude),he(o.latitude));return u!==0?u:$(he(i.longitude),he(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return dl(r.arrayValue,e.arrayValue);case 10:return function(i,o){var p,v,D,k;const u=i.fields||{},c=o.fields||{},h=(p=u[nr])==null?void 0:p.arrayValue,f=(v=c[nr])==null?void 0:v.arrayValue,m=$(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return m!==0?m:dl(h,f)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Vt.mapValue&&o===Vt.mapValue)return 0;if(i===Vt.mapValue)return 1;if(o===Vt.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const p=sa(c[m],f[m]);if(p!==0)return p;const v=Bt(u[c[m]],h[f[m]]);if(v!==0)return v}return $(c.length,f.length)}(r.mapValue,e.mapValue);default:throw L(23264,{he:t})}}function hl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return $(r,e);const t=ht(r),n=ht(e),s=$(t.seconds,n.seconds);return s!==0?s:$(t.nanos,n.nanos)}function dl(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Bt(t[s],n[s]);if(i)return i}return $(t.length,n.length)}function rr(r){return ha(r)}function ha(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=ht(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return dt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return M.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ha(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${ha(t.fields[o])}`;return s+"}"}(r.mapValue):L(61005,{value:r})}function mi(r){switch(Lt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qi(r);return e?16+mi(e):16;case 5:return 2*r.stringValue.length;case 6:return dt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+mi(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Kt(n.fields,(i,o)=>{s+=i.length+mi(o)}),s}(r.mapValue);default:throw L(13486,{value:r})}}function pn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function da(r){return!!r&&"integerValue"in r}function Es(r){return!!r&&"arrayValue"in r}function fl(r){return!!r&&"nullValue"in r}function ml(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function gi(r){return!!r&&"mapValue"in r}function Wi(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[ja])==null?void 0:n.stringValue)===za}function is(r){if(r.geoPointValue)return{geoPointValue:Ve({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Ve({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Kt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=is(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=is(r.arrayValue.values[t]);return e}return Ve({},r)}function wd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Td}const Ad={mapValue:{fields:{[ja]:{stringValue:za},[nr]:{arrayValue:{}}}}};function X_(r){return"nullValue"in r?fi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?pn(Ft.empty(),M.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Wi(r)?Ad:{mapValue:{}}:L(35942,{value:r})}function Z_(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?pn(Ft.empty(),M.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Ad:"mapValue"in r?Wi(r)?{mapValue:{}}:Vt:L(61959,{value:r})}function gl(r,e){const t=Bt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function pl(r,e){const t=Bt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(t)}setAll(e){let t=le.emptyPath(),n={},s=[];e.forEach((o,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=u.popLast()}o?n[u.lastSegment()]=is(o):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Kt(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Se(is(this.value))}}function vd(r){const e=[];return Kt(r.fields,(t,n)=>{const s=new le([t]);if(gi(n)){const i=vd(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qe(e)}/**
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
 */class ce{constructor(e,t,n,s,i,o,u){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(e){return new ce(e,0,q.min(),q.min(),q.min(),Se.empty(),0)}static newFoundDocument(e,t,n,s){return new ce(e,1,t,q.min(),n,s,0)}static newNoDocument(e,t){return new ce(e,2,t,q.min(),q.min(),Se.empty(),0)}static newUnknownDocument(e,t){return new ce(e,3,t,q.min(),q.min(),Se.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ut{constructor(e,t){this.position=e,this.inclusive=t}}function _l(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=M.comparator(M.fromName(o.referenceValue),t.key):n=Bt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function yl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!at(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ts{constructor(e,t="asc"){this.field=e,this.dir=t}}function ey(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class bd{}class J extends bd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new ty(e,t,n):t==="array-contains"?new sy(e,n):t==="in"?new Dd(e,n):t==="not-in"?new iy(e,n):t==="array-contains-any"?new oy(e,n):new J(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new ny(e,n):new ry(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bt(t,this.value)):t!==null&&Lt(this.value)===Lt(t)&&this.matchesComparison(Bt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends bd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ne(e,t)}matches(e){return sr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sr(r){return r.op==="and"}function fa(r){return r.op==="or"}function $a(r){return Rd(r)&&sr(r)}function Rd(r){for(const e of r.filters)if(e instanceof ne)return!1;return!0}function ma(r){if(r instanceof J)return r.field.canonicalString()+r.op.toString()+rr(r.value);if($a(r))return r.filters.map(e=>ma(e)).join(",");{const e=r.filters.map(t=>ma(t)).join(",");return`${r.op}(${e})`}}function Sd(r,e){return r instanceof J?function(n,s){return s instanceof J&&n.op===s.op&&n.field.isEqual(s.field)&&at(n.value,s.value)}(r,e):r instanceof ne?function(n,s){return s instanceof ne&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,u)=>i&&Sd(o,s.filters[u]),!0):!1}(r,e):void L(19439)}function Pd(r,e){const t=r.filters.concat(e);return ne.create(t,r.op)}function Vd(r){return r instanceof J?function(t){return`${t.field.canonicalString()} ${t.op} ${rr(t.value)}`}(r):r instanceof ne?function(t){return t.op.toString()+" {"+t.getFilters().map(Vd).join(" ,")+"}"}(r):"Filter"}class ty extends J{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class ny extends J{constructor(e,t){super(e,"in",t),this.keys=Cd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ry extends J{constructor(e,t){super(e,"not-in",t),this.keys=Cd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Cd(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>M.fromName(n.referenceValue))}class sy extends J{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Es(t)&&Is(t.arrayValue,this.value)}}class Dd extends J{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Is(this.value.arrayValue,t)}}class iy extends J{constructor(e,t){super(e,"not-in",t)}matches(e){if(Is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Is(this.value.arrayValue,t)}}class oy extends J{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Es(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Is(this.value.arrayValue,n))}}/**
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
 */class ay{constructor(e,t=null,n=[],s=[],i=null,o=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.Te=null}}function ga(r,e=null,t=[],n=[],s=null,i=null,o=null){return new ay(r,e,t,n,s,i,o)}function _n(r){const e=O(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>ma(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),bs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>rr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>rr(n)).join(",")),e.Te=t}return e.Te}function Ss(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!ey(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Sd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!yl(r.startAt,e.startAt)&&yl(r.endAt,e.endAt)}function Si(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Pi(r,e){return r.filters.filter(t=>t instanceof J&&t.field.isEqual(e))}function Il(r,e,t){let n=fi,s=!0;for(const i of Pi(r,e)){let o=fi,u=!0;switch(i.op){case"<":case"<=":o=X_(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,u=!1;break;case"!=":case"not-in":o=fi}gl({value:n,inclusive:s},{value:o,inclusive:u})<0&&(n=o,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];gl({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function El(r,e,t){let n=Vt,s=!0;for(const i of Pi(r,e)){let o=Vt,u=!0;switch(i.op){case">=":case">":o=Z_(i.value),u=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,u=!1;break;case"!=":case"not-in":o=Vt}pl({value:n,inclusive:s},{value:o,inclusive:u})>0&&(n=o,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];pl({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class mt{constructor(e,t=null,n=[],s=[],i=null,o="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function xd(r,e,t,n,s,i,o,u){return new mt(r,e,t,n,s,i,o,u)}function _r(r){return new mt(r)}function Tl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function uy(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ga(r){return r.collectionGroup!==null}function $n(r){const e=O(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new se(le.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Ts(i,n))}),t.has(le.keyField().canonicalString())||e.Ee.push(new Ts(le.keyField(),n))}return e.Ee}function Me(r){const e=O(r);return e.Ie||(e.Ie=kd(e,$n(r))),e.Ie}function Nd(r){const e=O(r);return e.Re||(e.Re=kd(e,r.explicitOrderBy)),e.Re}function kd(r,e){if(r.limitType==="F")return ga(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ts(s.field,i)});const t=r.endAt?new Ut(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ut(r.startAt.position,r.startAt.inclusive):null;return ga(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function pa(r,e){const t=r.filters.concat([e]);return new mt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function cy(r,e){const t=r.explicitOrderBy.concat([e]);return new mt(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function Vi(r,e,t){return new mt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ly(r,e){return new mt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,e,r.endAt)}function hy(r,e){return new mt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,e)}function Ps(r,e){return Ss(Me(r),Me(e))&&r.limitType===e.limitType}function Md(r){return`${_n(Me(r))}|lt:${r.limitType}`}function qn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Vd(s)).join(", ")}]`),bs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>rr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>rr(s)).join(",")),`Target(${n})`}(Me(r))}; limitType=${r.limitType})`}function Vs(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of $n(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,u,c){const h=_l(o,u,c);return o.inclusive?h<=0:h<0}(n.startAt,$n(n),s)||n.endAt&&!function(o,u,c){const h=_l(o,u,c);return o.inclusive?h>=0:h>0}(n.endAt,$n(n),s))}(r,e)}function Od(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Fd(r){return(e,t)=>{let n=!1;for(const s of $n(r)){const i=dy(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function dy(r,e,t){const n=r.field.isKeyField()?M.comparator(e.key,t.key):function(i,o,u){const c=o.data.field(i),h=u.data.field(i);return c!==null&&h!==null?Bt(c,h):L(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L(19790,{direction:r.dir})}}/**
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
 */class gt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kt(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return gd(this.inner)}size(){return this.innerSize}}/**
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
 */const fy=new ae(M.comparator);function je(){return fy}const Ld=new ae(M.comparator);function Yr(...r){let e=Ld;for(const t of r)e=e.insert(t.key,t);return e}function Bd(r){let e=Ld;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function st(){return os()}function Ud(){return os()}function os(){return new gt(r=>r.toString(),(r,e)=>r.isEqual(e))}const my=new ae(M.comparator),gy=new se(M.comparator);function G(...r){let e=gy;for(const t of r)e=e.add(t);return e}const py=new se($);function Ka(){return py}/**
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
 */function Qa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(e)?"-0":e}}function qd(r){return{integerValue:""+r}}function jd(r,e){return rd(e)?qd(e):Qa(r,e)}/**
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
 */class Hi{constructor(){this._=void 0}}function _y(r,e,t){return r instanceof ir?function(s,i){const o={fields:{[yd]:{stringValue:_d},[Ed]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ki(i)&&(i=Qi(i)),i&&(o.fields[Id]=i),{mapValue:o}}(t,e):r instanceof yn?$d(r,e):r instanceof In?Gd(r,e):function(s,i){const o=zd(s,i),u=wl(o)+wl(s.Ae);return da(o)&&da(s.Ae)?qd(u):Qa(s.serializer,u)}(r,e)}function yy(r,e,t){return r instanceof yn?$d(r,e):r instanceof In?Gd(r,e):t}function zd(r,e){return r instanceof or?function(n){return da(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class ir extends Hi{}class yn extends Hi{constructor(e){super(),this.elements=e}}function $d(r,e){const t=Kd(e);for(const n of r.elements)t.some(s=>at(s,n))||t.push(n);return{arrayValue:{values:t}}}class In extends Hi{constructor(e){super(),this.elements=e}}function Gd(r,e){let t=Kd(e);for(const n of r.elements)t=t.filter(s=>!at(s,n));return{arrayValue:{values:t}}}class or extends Hi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wl(r){return he(r.integerValue||r.doubleValue)}function Kd(r){return Es(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Cs{constructor(e,t){this.field=e,this.transform=t}}function Iy(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof yn&&s instanceof yn||n instanceof In&&s instanceof In?Wn(n.elements,s.elements,at):n instanceof or&&s instanceof or?at(n.Ae,s.Ae):n instanceof ir&&s instanceof ir}(r.transform,e.transform)}class Ey{constructor(e,t){this.version=e,this.transformResults=t}}class de{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new de}static exists(e){return new de(void 0,e)}static updateTime(e){return new de(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ji{}function Qd(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ir(r.key,de.none()):new yr(r.key,r.data,de.none());{const t=r.data,n=Se.empty();let s=new se(le.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new pt(r.key,n,new qe(s.toArray()),de.none())}}function Ty(r,e,t){r instanceof yr?function(s,i,o){const u=s.value.clone(),c=vl(s.fieldTransforms,i,o.transformResults);u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,e,t):r instanceof pt?function(s,i,o){if(!pi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const u=vl(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Wd(s)),c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function as(r,e,t,n){return r instanceof yr?function(i,o,u,c){if(!pi(i.precondition,o))return u;const h=i.value.clone(),f=bl(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof pt?function(i,o,u,c){if(!pi(i.precondition,o))return u;const h=bl(i.fieldTransforms,c,o),f=o.data;return f.setAll(Wd(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(i,o,u){return pi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(r,e,t)}function wy(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=zd(n.transform,s||null);i!=null&&(t===null&&(t=Se.empty()),t.set(n.field,i))}return t||null}function Al(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Wn(n,s,(i,o)=>Iy(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class yr extends Ji{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pt extends Ji{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wd(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function vl(r,e,t){const n=new Map;B(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,u=e.data.field(i.field);n.set(i.field,yy(o,u,t[s]))}return n}function bl(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,_y(i,o,e))}return n}class Ir extends Ji{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wa extends Ji{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ha{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ty(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=as(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=as(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ud();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=t.has(s.key)?null:u;const c=Qd(o,u);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,n)=>Al(t,n))&&Wn(this.baseMutations,e.baseMutations,(t,n)=>Al(t,n))}}class Ja{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){B(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=function(){return my}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Ja(e,t,n,s)}}/**
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
 */class Ya{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Hd{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
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
 */class Ay{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ye,X;function Jd(r){switch(r){case R.OK:return L(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return L(15467,{code:r})}}function Yd(r){if(r===void 0)return pe("GRPC error has no .code"),R.UNKNOWN;switch(r){case ye.OK:return R.OK;case ye.CANCELLED:return R.CANCELLED;case ye.UNKNOWN:return R.UNKNOWN;case ye.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ye.INTERNAL:return R.INTERNAL;case ye.UNAVAILABLE:return R.UNAVAILABLE;case ye.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ye.NOT_FOUND:return R.NOT_FOUND;case ye.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ye.ABORTED:return R.ABORTED;case ye.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ye.DATA_LOSS:return R.DATA_LOSS;default:return L(39323,{code:r})}}(X=ye||(ye={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let us=null;function vy(r){if(us)throw new Error("a TestingHooksSpi instance is already set");us=r}/**
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
 */function Xd(){return new TextEncoder}/**
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
 */const by=new Nt([4294967295,4294967295],0);function Rl(r){const e=Xd().encode(r),t=new Bh;return t.update(e),new Uint8Array(t.digest())}function Sl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Nt([t,n],0),new Nt([s,i],0)]}class Xa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Xr(`Invalid padding: ${t}`);if(n<0)throw new Xr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Xr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Xr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Nt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(Nt.fromNumber(n)));return s.compare(by)===1&&(s=new Nt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Rl(e),[n,s]=Sl(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xa(i,s,t);return n.forEach(u=>o.insert(u)),o}insert(e){if(this.ge===0)return;const t=Rl(e),[n,s]=Sl(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Xr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ds{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ds(q.min(),s,new ae($),je(),G())}}class xs{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new xs(n,t,G(),G(),G())}}/**
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
 */class _i{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class Zd{constructor(e,t){this.targetId=e,this.Ce=t}}class ef{constructor(e,t,n=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Pl{constructor(){this.ve=0,this.Fe=Vl(),this.Me=me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=G(),t=G(),n=G();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:L(38017,{changeType:i})}}),new xs(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Vl()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,B(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Ry{constructor(e){this.Ge=e,this.ze=new Map,this.je=je(),this.Je=si(),this.He=si(),this.Ze=new ae($)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:L(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Si(i))if(n===0){const o=new M(i.path);this.et(t,o,ce.newNoDocument(o,q.min()))}else B(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const u=this.ut(e),c=u?this.ct(u,e,o):1;if(c!==0){this.it(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}us==null||us.o(function(f,m,p,v,D){var U,z,j,ee,H,Y;const k={localCacheCount:f,existenceFilterCount:m.count,databaseId:p.database,projectId:p.projectId},N=m.unchangedNames;return N&&(k.bloomFilter={applied:D===0,hashCount:(U=N==null?void 0:N.hashCount)!=null?U:0,bitmapLength:(ee=(j=(z=N==null?void 0:N.bits)==null?void 0:z.bitmap)==null?void 0:j.length)!=null?ee:0,padding:(Y=(H=N==null?void 0:N.bits)==null?void 0:H.padding)!=null?Y:0,mightContain:E=>{var _;return(_=v==null?void 0:v.mightContain(E))!=null?_:!1}}),k}(o,e.Ce,this.Ge.ht(),u,c))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,u;try{o=dt(n).toUint8Array()}catch(c){if(c instanceof pd)return Ge("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Xa(o,s,i)}catch(c){return Ge(c instanceof Xr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.ge===0?null:u}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Ge.ht(),u=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const u=this.ot(o);if(u){if(i.current&&Si(u.target)){const c=new M(u.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,ce.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let n=G();this.He.forEach((i,o)=>{let u=!0;o.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ds(e,t,this.Ze,this.je,n);return this.je=je(),this.Je=si(),this.He=si(),this.Ze=new ae($),s}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Pl,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new se($),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new se($),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Pl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function si(){return new ae(M.comparator)}function Vl(){return new ae(M.comparator)}const Sy={asc:"ASCENDING",desc:"DESCENDING"},Py={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vy={and:"AND",or:"OR"};class Cy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _a(r,e){return r.useProto3Json||bs(e)?e:{value:e}}function ar(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Dy(r,e){return ar(r,e.toTimestamp())}function _e(r){return B(!!r,49232),q.fromTimestamp(function(t){const n=ht(t);return new te(n.seconds,n.nanos)}(r))}function Za(r,e){return ya(r,e).canonicalString()}function ya(r,e){const t=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function nf(r){const e=Q.fromString(r);return B(df(e),10190,{key:e.toString()}),e}function ws(r,e){return Za(r.databaseId,e.path)}function ot(r,e){const t=nf(e);if(t.get(1)!==r.databaseId.projectId)throw new C(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new C(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new M(of(t))}function rf(r,e){return Za(r.databaseId,e)}function sf(r){const e=nf(r);return e.length===4?Q.emptyPath():of(e)}function Ia(r){return new Q(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function of(r){return B(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Cl(r,e,t){return{name:ws(r,e),fields:t.value.mapValue.fields}}function Yi(r,e,t){const n=ot(r,e.name),s=_e(e.updateTime),i=e.createTime?_e(e.createTime):q.min(),o=new Se({mapValue:{fields:e.fields}}),u=ce.newFoundDocument(n,s,i,o);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function xy(r,e){return"found"in e?function(n,s){B(!!s.found,43571),s.found.name,s.found.updateTime;const i=ot(n,s.found.name),o=_e(s.found.updateTime),u=s.found.createTime?_e(s.found.createTime):q.min(),c=new Se({mapValue:{fields:s.found.fields}});return ce.newFoundDocument(i,o,u,c)}(r,e):"missing"in e?function(n,s){B(!!s.missing,3894),B(!!s.readTime,22933);const i=ot(n,s.missing),o=_e(s.readTime);return ce.newNoDocument(i,o)}(r,e):L(7234,{result:e})}function Ny(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:L(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(B(f===void 0||typeof f=="string",58123),me.fromBase64String(f||"")):(B(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),me.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(h){const f=h.code===void 0?R.UNKNOWN:Yd(h.code);return new C(f,h.message||"")}(o);t=new ef(n,s,i,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=ot(r,n.document.name),i=_e(n.document.updateTime),o=n.document.createTime?_e(n.document.createTime):q.min(),u=new Se({mapValue:{fields:n.document.fields}}),c=ce.newFoundDocument(s,i,o,u),h=n.targetIds||[],f=n.removedTargetIds||[];t=new _i(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=ot(r,n.document),i=n.readTime?_e(n.readTime):q.min(),o=ce.newNoDocument(s,i),u=n.removedTargetIds||[];t=new _i([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=ot(r,n.document),i=n.removedTargetIds||[];t=new _i([],i,s,null)}else{if(!("filter"in e))return L(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Ay(s,i),u=n.targetId;t=new Zd(u,o)}}return t}function As(r,e){let t;if(e instanceof yr)t={update:Cl(r,e.key,e.value)};else if(e instanceof Ir)t={delete:ws(r,e.key)};else if(e instanceof pt)t={update:Cl(r,e.key,e.data),updateMask:By(e.fieldMask)};else{if(!(e instanceof Wa))return L(16599,{dt:e.type});t={verify:ws(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const u=o.transform;if(u instanceof ir)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof yn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof In)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof or)return{fieldPath:o.field.canonicalString(),increment:u.Ae};throw L(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Dy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L(27497)}(r,e.precondition)),t}function Ea(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?de.updateTime(_e(i.updateTime)):i.exists!==void 0?de.exists(i.exists):de.none()}(e.currentDocument):de.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,u){let c=null;if("setToServerValue"in u)B(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),c=new ir;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new yn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new In(f)}else"increment"in u?c=new or(o,u.increment):L(16584,{proto:u});const h=le.fromServerFormat(u.fieldPath);return new Cs(h,c)}(r,s)):[];if(e.update){e.update.name;const s=ot(r,e.update.name),i=new Se({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const h=c.fieldPaths||[];return new qe(h.map(f=>le.fromServerFormat(f)))}(e.updateMask);return new pt(s,i,o,t,n)}return new yr(s,i,t,n)}if(e.delete){const s=ot(r,e.delete);return new Ir(s,t)}if(e.verify){const s=ot(r,e.verify);return new Wa(s,t)}return L(1463,{proto:e})}function ky(r,e){return r&&r.length>0?(B(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?_e(s.updateTime):_e(i);return o.isEqual(q.min())&&(o=_e(i)),new Ey(o,s.transformResults||[])}(t,e))):[]}function af(r,e){return{documents:[rf(r,e.path)]}}function Xi(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=rf(r,s);const i=function(h){if(h.length!==0)return hf(ne.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:St(p.field),direction:Oy(p.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const u=_a(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function uf(r,e,t,n){const{ft:s,parent:i}=Xi(r,e),o={},u=[];let c=0;return t.forEach(h=>{const f=n?h.alias:"aggregate_"+c++;o[f]=h.alias,h.aggregateType==="count"?u.push({alias:f,count:{}}):h.aggregateType==="avg"?u.push({alias:f,avg:{field:St(h.fieldPath)}}):h.aggregateType==="sum"&&u.push({alias:f,sum:{field:St(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function cf(r){let e=sf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){B(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const p=lf(m);return p instanceof ne&&$a(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(p=>function(D){return new Ts(jn(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(p))}(t.orderBy));let u=null;t.limit&&(u=function(m){let p;return p=typeof m=="object"?m.value:m,bs(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(m){const p=!!m.before,v=m.values||[];return new Ut(v,p)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const p=!m.before,v=m.values||[];return new Ut(v,p)}(t.endAt)),xd(e,s,o,i,u,"F",c,h)}function My(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function lf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=jn(t.unaryFilter.field);return J.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=jn(t.unaryFilter.field);return J.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jn(t.unaryFilter.field);return J.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jn(t.unaryFilter.field);return J.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(r):r.fieldFilter!==void 0?function(t){return J.create(jn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ne.create(t.compositeFilter.filters.map(n=>lf(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(t.compositeFilter.op))}(r):L(30097,{filter:r})}function Oy(r){return Sy[r]}function Fy(r){return Py[r]}function Ly(r){return Vy[r]}function St(r){return{fieldPath:r.canonicalString()}}function jn(r){return le.fromServerFormat(r.fieldPath)}function hf(r){return r instanceof J?function(t){if(t.op==="=="){if(ml(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NAN"}};if(fl(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ml(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NOT_NAN"}};if(fl(t.value))return{unaryFilter:{field:St(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:St(t.field),op:Fy(t.op),value:t.value}}}(r):r instanceof ne?function(t){const n=t.getFilters().map(s=>hf(s));return n.length===1?n[0]:{compositeFilter:{op:Ly(t.op),filters:n}}}(r):L(54877,{filter:r})}function By(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function df(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function ff(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class ut{constructor(e,t,n,s,i=q.min(),o=q.min(),u=me.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mf{constructor(e){this.yt=e}}function Uy(r,e){let t;if(e.document)t=Yi(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=M.fromSegments(e.noDocument.path),s=Tn(e.noDocument.readTime);t=ce.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return L(56709);{const n=M.fromSegments(e.unknownDocument.path),s=Tn(e.unknownDocument.version);t=ce.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new te(s[0],s[1]);return q.fromTimestamp(i)}(e.readTime)),t}function Dl(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ci(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:ws(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ar(i,o.version.toTimestamp()),createTime:ar(i,o.createTime.toTimestamp())}}(r.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:En(e.version)};else{if(!e.isUnknownDocument())return L(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:En(e.version)}}return n}function Ci(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function En(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Tn(r){const e=new te(r.seconds,r.nanoseconds);return q.fromTimestamp(e)}function cn(r,e){const t=(e.baseMutations||[]).map(i=>Ea(r.yt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const u=e.mutations[i+1];o.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>Ea(r.yt,i)),s=te.fromMillis(e.localWriteTimeMs);return new Ha(e.batchId,s,t,n)}function Zr(r){const e=Tn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Tn(r.lastLimboFreeSnapshotVersion):q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const o=i.documents.length;return B(o===1,1966,{count:o}),Me(_r(sf(i.documents[0])))}(r.query):function(i){return Me(cf(i))}(r.query),new ut(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,me.fromBase64String(r.resumeToken))}function gf(r,e){const t=En(e.snapshotVersion),n=En(e.lastLimboFreeSnapshotVersion);let s;s=Si(e.target)?af(r.yt,e.target):Xi(r.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:_n(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Zi(r){const e=cf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Vi(e,e.limit,"L"):e}function $o(r,e){return new Ya(e.largestBatchId,Ea(r.yt,e.overlayMutation))}function xl(r,e){const t=e.path.lastSegment();return[r,ke(e.path.popLast()),t]}function Nl(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:En(n.readTime),documentKey:ke(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class qy{getBundleMetadata(e,t){return kl(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Tn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return kl(e).put(function(s){return{bundleId:s.id,createTime:En(_e(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Ml(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:Zi(i.bundledQuery),readTime:Tn(i.readTime)}}(n)})}saveNamedQuery(e,t){return Ml(e).put(function(s){return{name:s.name,readTime:En(_e(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function kl(r){return Ae(r,zi)}function Ml(r){return Ae(r,$i)}/**
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
 */class eo{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new eo(e,n)}getOverlay(e,t){return $r(e).get(xl(this.userId,t)).next(n=>n?$o(this.serializer,n):null)}getOverlays(e,t){const n=st();return A.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const u=new Ya(t,o);s.push(this.St(e,u))}),A.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(ke(o.getCollectionPath())));const i=[];return s.forEach(o=>{const u=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push($r(e).X(ca,u))}),A.waitFor(i)}getOverlaysForCollection(e,t,n){const s=st(),i=ke(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return $r(e).J(ca,o).next(u=>{for(const c of u){const h=$o(this.serializer,c);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=st();let o;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return $r(e).ee({index:cd,range:u},(c,h,f)=>{const m=$o(this.serializer,h);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>i)}St(e,t){return $r(e).put(function(s,i,o){const[u,c,h]=xl(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:As(s.yt,o.mutation)}}(this.serializer,this.userId,t))}}function $r(r){return Ae(r,Gi)}/**
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
 */class jy{bt(e){return Ae(e,Ua)}getSessionToken(e){return this.bt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?me.fromUint8Array(n):me.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class ln{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(he(e.integerValue));else if("doubleValue"in e){const n=he(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),fs(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=ht(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(dt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?wd(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Wi(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):L(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const s of Object.keys(n))this.Ot(s,t),this.Ct(n[s],t)}kt(e,t){var o,u;const n=e.fields||{};this.Ft(t,53);const s=nr,i=((u=(o=n[s].arrayValue)==null?void 0:o.values)==null?void 0:u.length)||0;this.Ft(t,15),t.Mt(he(i)),this.Ot(s,t),this.Ct(n[s],t)}Kt(e,t){const n=e.values||[];this.Ft(t,50);for(const s of n)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),M.fromName(e).path.forEach(n=>{this.Ft(t,60),this.$t(n,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}ln.Wt=new ln;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=255;function zy(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Ol(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=zy(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class $y{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(e){const t=this.en(e),n=Ol(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),n=Ol(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(On),this.sn(255)}_n(){this.an(On),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===On?(this.sn(On),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===On?(this.an(On),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Gy{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class Ky{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Gr{constructor(){this.cn=new $y,this.ascending=new Gy(this.cn),this.descending=new Ky(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class hn{constructor(e,t,n,s){this.hn=e,this.Pn=t,this.Tn=n,this.En=s}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.En,0),t!==e?n.set([0],this.En.length):++n[n.length-1],new hn(this.hn,this.Pn,this.Tn,n)}Rn(e,t,n){return{indexId:this.hn,uid:e,arrayValue:yi(this.Tn),directionalValue:yi(this.En),orderedDocumentKey:yi(t),documentKey:n.path.toArray()}}An(e,t,n){const s=this.Rn(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function vt(r,e){let t=r.hn-e.hn;return t!==0?t:(t=Fl(r.Tn,e.Tn),t!==0?t:(t=Fl(r.En,e.En),t!==0?t:M.comparator(r.Pn,e.Pn)))}function Fl(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function yi(r){return Ch()?function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n}(r):r}function Ll(r){return typeof r!="string"?r:function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(r)}class Bl{constructor(e){this.Vn=new se((t,n)=>le.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Vn=this.Vn.add(n):this.mn.push(n)}}get fn(){return this.Vn.size>1}gn(e){if(B(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=oa(e);if(t!==void 0&&!this.pn(t))return!1;const n=on(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.pn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const u=this.Vn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.yn(u,c)||!this.wn(this.dn[o++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(o>=this.dn.length||!this.wn(this.dn[o++],u))return!1}return!0}Sn(){if(this.fn)return null;let e=new se(le.comparator);const t=[];for(const n of this.mn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new fn(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new fn(n.field,0))}for(const n of this.dn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new fn(n.field,n.dir==="asc"?0:1)));return new Jn(Jn.UNKNOWN_ID,this.collectionId,t,Yn.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function pf(r){var t,n;if(B(r instanceof J||r instanceof ne,20012),r instanceof J){if(r instanceof Dd){const s=((n=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map(i=>J.create(r.field,"==",i)))||[];return ne.create(s,"or")}return r}const e=r.filters.map(s=>pf(s));return ne.create(e,r.op)}function Qy(r){if(r.getFilters().length===0)return[];const e=Aa(pf(r));return B(_f(e),7391),Ta(e)||wa(e)?[e]:e.getFilters()}function Ta(r){return r instanceof J}function wa(r){return r instanceof ne&&$a(r)}function _f(r){return Ta(r)||wa(r)||function(t){if(t instanceof ne&&fa(t)){for(const n of t.getFilters())if(!Ta(n)&&!wa(n))return!1;return!0}return!1}(r)}function Aa(r){if(B(r instanceof J||r instanceof ne,34018),r instanceof J)return r;if(r.filters.length===1)return Aa(r.filters[0]);const e=r.filters.map(n=>Aa(n));let t=ne.create(e,r.op);return t=Di(t),_f(t)?t:(B(t instanceof ne,64498),B(sr(t),40251),B(t.filters.length>1,57927),t.filters.reduce((n,s)=>eu(n,s)))}function eu(r,e){let t;return B(r instanceof J||r instanceof ne,38388),B(e instanceof J||e instanceof ne,25473),t=r instanceof J?e instanceof J?function(s,i){return ne.create([s,i],"and")}(r,e):Ul(r,e):e instanceof J?Ul(e,r):function(s,i){if(B(s.filters.length>0&&i.filters.length>0,48005),sr(s)&&sr(i))return Pd(s,i.getFilters());const o=fa(s)?s:i,u=fa(s)?i:s,c=o.filters.map(h=>eu(h,u));return ne.create(c,"or")}(r,e),Di(t)}function Ul(r,e){if(sr(e))return Pd(e,r.getFilters());{const t=e.filters.map(n=>eu(r,n));return ne.create(t,"or")}}function Di(r){if(B(r instanceof J||r instanceof ne,11850),r instanceof J)return r;const e=r.getFilters();if(e.length===1)return Di(e[0]);if(Rd(r))return r;const t=e.map(s=>Di(s)),n=[];return t.forEach(s=>{s instanceof J?n.push(s):s instanceof ne&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:ne.create(n,r.op)}/**
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
 */class Wy{constructor(){this.bn=new tu}addToCollectionParentIndex(e,t){return this.bn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(He.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(He.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class tu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new se(Q.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new se(Q.comparator)).toArray()}}/**
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
 */const ql="IndexedDbIndexManager",ii=new Uint8Array(0);class Hy{constructor(e,t){this.databaseId=t,this.Dn=new tu,this.Cn=new gt(n=>_n(n),(n,s)=>Ss(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Dn.add(t)});const i={collectionId:n,parent:ke(s)};return jl(e).put(i)}return A.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Wh(t),""],!1,!0);return jl(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(rt(o.parent))}return n})}addFieldIndex(e,t){const n=Kr(e),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Ln(e);return i.next(u=>{o.put(Nl(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Kr(e),s=Ln(e),i=Fn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Kr(e),n=Fn(e),s=Ln(e);return t.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(e,t){return A.forEach(this.vn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Bl(n).Sn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Fn(e);let s=!0;const i=new Map;return A.forEach(this.vn(t),o=>this.Fn(e,o).next(u=>{s&&(s=!!u),i.set(o,u)})).next(()=>{if(s){let o=G();const u=[];return A.forEach(i,(c,h)=>{x(ql,`Using index ${function(j){return`id=${j.indexId}|cg=${j.collectionGroup}|f=${j.fields.map(ee=>`${ee.fieldPath}:${ee.kind}`).join(",")}`}(c)} to execute ${_n(t)}`);const f=function(j,ee){const H=oa(ee);if(H===void 0)return null;for(const Y of Pi(j,H.fieldPath))switch(Y.op){case"array-contains-any":return Y.value.arrayValue.values||[];case"array-contains":return[Y.value]}return null}(h,c),m=function(j,ee){const H=new Map;for(const Y of on(ee))for(const E of Pi(j,Y.fieldPath))switch(E.op){case"==":case"in":H.set(Y.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return H.set(Y.fieldPath.canonicalString(),E.value),Array.from(H.values())}return null}(h,c),p=function(j,ee){const H=[];let Y=!0;for(const E of on(ee)){const _=E.kind===0?Il(j,E.fieldPath,j.startAt):El(j,E.fieldPath,j.startAt);H.push(_.value),Y&&(Y=_.inclusive)}return new Ut(H,Y)}(h,c),v=function(j,ee){const H=[];let Y=!0;for(const E of on(ee)){const _=E.kind===0?El(j,E.fieldPath,j.endAt):Il(j,E.fieldPath,j.endAt);H.push(_.value),Y&&(Y=_.inclusive)}return new Ut(H,Y)}(h,c),D=this.Mn(c,h,p),k=this.Mn(c,h,v),N=this.xn(c,h,m),U=this.On(c.indexId,f,D,p.inclusive,k,v.inclusive,N);return A.forEach(U,z=>n.Z(z,t.limit).next(j=>{j.forEach(ee=>{const H=M.fromSegments(ee.documentKey);o.has(H)||(o=o.add(H),u.push(H))})}))}).next(()=>u)}return A.resolve(null)})}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=Qy(ne.create(e.filters,"and")).map(n=>ga(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}On(e,t,n,s,i,o,u){const c=(t!=null?t.length:1)*Math.max(n.length,i.length),h=c/(t!=null?t.length:1),f=[];for(let m=0;m<c;++m){const p=t?this.Nn(t[m/h]):ii,v=this.Bn(e,p,n[m%h],s),D=this.Ln(e,p,i[m%h],o),k=u.map(N=>this.Bn(e,p,N,!0));f.push(...this.createRange(v,D,k))}return f}Bn(e,t,n,s){const i=new hn(e,M.empty(),t,n);return s?i:i.In()}Ln(e,t,n,s){const i=new hn(e,M.empty(),t,n);return s?i.In():i}Fn(e,t){const n=new Bl(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const u of i)n.gn(u)&&(!o||u.fields.length>o.fields.length)&&(o=u);return o})}getIndexType(e,t){let n=2;const s=this.vn(t);return A.forEach(s,i=>this.Fn(e,i).next(o=>{o?n!==0&&o.fields.length<function(c){let h=new se(le.comparator),f=!1;for(const m of c.filters)for(const p of m.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?f=!0:h=h.add(p.field));for(const m of c.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}kn(e,t){const n=new Gr;for(const s of on(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.ln(s.kind);ln.Wt.Dt(i,o)}return n.un()}Nn(e){const t=new Gr;return ln.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const n=new Gr;return ln.Wt.Dt(pn(this.databaseId,t),n.ln(function(i){const o=on(i);return o.length===0?0:o[o.length-1].kind}(e))),n.un()}xn(e,t,n){if(n===null)return[];let s=[];s.push(new Gr);let i=0;for(const o of on(e)){const u=n[i++];for(const c of s)if(this.Kn(t,o.fieldPath)&&Es(u))s=this.Un(s,o,u);else{const h=c.ln(o.kind);ln.Wt.Dt(u,h)}}return this.$n(s)}Mn(e,t,n){return this.xn(e,t,n.position)}$n(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Un(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const u of s){const c=new Gr;c.seed(u.un()),ln.Wt.Dt(o,c.ln(t.kind)),i.push(c)}return i}Kn(e,t){return!!e.filters.find(n=>n instanceof J&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Kr(e),s=Ln(e);return(t?n.J(ua,IDBKeyRange.bound(t,t)):n.J()).next(i=>{const o=[];return A.forEach(i,u=>s.get([u.indexId,this.uid]).next(c=>{o.push(function(f,m){const p=m?new Yn(m.sequenceNumber,new He(Tn(m.readTime),new M(rt(m.documentKey)),m.largestBatchId)):Yn.empty(),v=f.fields.map(([D,k])=>new fn(le.fromServerFormat(D),k));return new Jn(f.indexId,f.collectionGroup,v,p)}(u,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:$(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Kr(e),i=Ln(e);return this.Wn(e).next(o=>s.J(ua,IDBKeyRange.bound(t,t)).next(u=>A.forEach(u,c=>i.put(Nl(c.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),A.forEach(u,c=>this.Qn(e,s,c).next(h=>{const f=this.Gn(i,c);return h.isEqual(f)?A.resolve():this.zn(e,i,c,h,f)}))))})}jn(e,t,n,s){return Fn(e).put(s.Rn(this.uid,this.qn(n,t.key),t.key))}Jn(e,t,n,s){return Fn(e).delete(s.An(this.uid,this.qn(n,t.key),t.key))}Qn(e,t,n){const s=Fn(e);let i=new se(vt);return s.ee({index:ud,range:IDBKeyRange.only([n.indexId,this.uid,yi(this.qn(n,t))])},(o,u)=>{i=i.add(new hn(n.indexId,t,Ll(u.arrayValue),Ll(u.directionalValue)))}).next(()=>i)}Gn(e,t){let n=new se(vt);const s=this.kn(t,e);if(s==null)return n;const i=oa(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Es(o))for(const u of o.arrayValue.values||[])n=n.add(new hn(t.indexId,e.key,this.Nn(u),s))}else n=n.add(new hn(t.indexId,e.key,ii,s));return n}zn(e,t,n,s,i){x(ql,"Updating index entries for document '%s'",t.key);const o=[];return function(c,h,f,m,p){const v=c.getIterator(),D=h.getIterator();let k=Mn(v),N=Mn(D);for(;k||N;){let U=!1,z=!1;if(k&&N){const j=f(k,N);j<0?z=!0:j>0&&(U=!0)}else k!=null?z=!0:U=!0;U?(m(N),N=Mn(D)):z?(p(k),k=Mn(v)):(k=Mn(v),N=Mn(D))}}(s,i,vt,u=>{o.push(this.jn(e,t,n,u))},u=>{o.push(this.Jn(e,t,n,u))}),A.waitFor(o)}Wn(e){let t=1;return Ln(e).ee({index:ad,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,u)=>vt(o,u)).filter((o,u,c)=>!u||vt(o,c[u-1])!==0);const s=[];s.push(e);for(const o of n){const u=vt(o,e),c=vt(o,t);if(u===0)s[0]=e.In();else if(u>0&&c<0)s.push(o),s.push(o.In());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Hn(s[o],s[o+1]))return[];const u=s[o].An(this.uid,ii,M.empty()),c=s[o+1].An(this.uid,ii,M.empty());i.push(IDBKeyRange.bound(u,c))}return i}Hn(e,t){return vt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(zl)}getMinOffset(e,t){return A.mapArray(this.vn(t),n=>this.Fn(e,n).next(s=>s||L(44426))).next(zl)}}function jl(r){return Ae(r,ps)}function Fn(r){return Ae(r,ss)}function Kr(r){return Ae(r,Ba)}function Ln(r){return Ae(r,rs)}function zl(r){B(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Oa(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new He(e.readTime,e.documentKey,t)}/**
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
 */const $l={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yf=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function If(r,e,t){const n=r.store(Je),s=r.store(Xn),i=[],o=IDBKeyRange.only(t.batchId);let u=0;const c=n.ee({range:o},(f,m,p)=>(u++,p.delete()));i.push(c.next(()=>{B(u===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const m=sd(e,f.key.path,t.batchId);i.push(s.delete(m)),h.push(f.key)}return A.waitFor(i).next(()=>h)}function xi(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw L(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(yf,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);class to{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static wt(e,t,n,s){B(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new to(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return bt(e).ee({index:dn,range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=zn(e),o=bt(e);return o.add({}).next(u=>{B(typeof u=="number",49019);const c=new Ha(u,t,n,s),h=function(v,D,k){const N=k.baseMutations.map(z=>As(v.yt,z)),U=k.mutations.map(z=>As(v.yt,z));return{userId:D,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:N,mutations:U}}(this.serializer,this.userId,c),f=[];let m=new se((p,v)=>$(p.canonicalString(),v.canonicalString()));for(const p of s){const v=sd(this.userId,p.key.path,u);m=m.add(p.key.path.popLast()),f.push(o.put(h)),f.push(i.put(v,v_))}return m.forEach(p=>{f.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Zn[u]=c.keys()}),A.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return bt(e).get(t).next(n=>n?(B(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),cn(this.serializer,n)):null)}Xn(e,t){return this.Zn[t]?A.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Zn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return bt(e).ee({index:dn,range:s},(o,u,c)=>{u.userId===this.userId&&(B(u.batchId>=n,47524,{Yn:n}),i=cn(this.serializer,u)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=kt;return bt(e).ee({index:dn,range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,kt],[this.userId,Number.POSITIVE_INFINITY]);return bt(e).J(dn,t).next(n=>n.map(s=>cn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=hi(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return zn(e).ee({range:s},(o,u,c)=>{const[h,f,m]=o,p=rt(f);if(h===this.userId&&t.path.isEqual(p))return bt(e).get(m).next(v=>{if(!v)throw L(61480,{er:o,batchId:m});B(v.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:v.userId,batchId:m}),i.push(cn(this.serializer,v))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se($);const s=[];return t.forEach(i=>{const o=hi(this.userId,i.path),u=IDBKeyRange.lowerBound(o),c=zn(e).ee({range:u},(h,f,m)=>{const[p,v,D]=h,k=rt(v);p===this.userId&&i.path.isEqual(k)?n=n.add(D):m.done()});s.push(c)}),A.waitFor(s).next(()=>this.tr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=hi(this.userId,n),o=IDBKeyRange.lowerBound(i);let u=new se($);return zn(e).ee({range:o},(c,h,f)=>{const[m,p,v]=c,D=rt(p);m===this.userId&&n.isPrefixOf(D)?D.length===s&&(u=u.add(v)):f.done()}).next(()=>this.tr(e,u))}tr(e,t){const n=[],s=[];return t.forEach(i=>{s.push(bt(e).get(i).next(o=>{if(o===null)throw L(35274,{batchId:i});B(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(cn(this.serializer,o))}))}),A.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return If(e.le,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.nr(t.batchId)}),A.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return zn(e).ee({range:n},(i,o,u)=>{if(i[0]===this.userId){const c=rt(i[1]);s.push(c)}else u.done()}).next(()=>{B(s.length===0,56720,{rr:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Ef(e,this.userId,t)}ir(e){return Tf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:kt,lastStreamToken:""})}}function Ef(r,e,t){const n=hi(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return zn(r).ee({range:i,Y:!0},(u,c,h)=>{const[f,m,p]=u;f===e&&m===s&&(o=!0),h.done()}).next(()=>o)}function bt(r){return Ae(r,Je)}function zn(r){return Ae(r,Xn)}function Tf(r){return Ae(r,ms)}/**
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
 */class wn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new wn(0)}static ar(){return new wn(-1)}}/**
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
 */class Jy{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next(t=>{const n=new wn(t.highestTargetId);return t.highestTargetId=n.next(),this.cr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(t=>q.fromTimestamp(new te(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.ur(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.cr(e,s)))}addTargetData(e,t){return this.lr(e,t).next(()=>this.ur(e).next(n=>(n.targetCount+=1,this.hr(t,n),this.cr(e,n))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Bn(e).delete(t.targetId)).next(()=>this.ur(e)).next(n=>(B(n.targetCount>0,8065),n.targetCount-=1,this.cr(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return Bn(e).ee((o,u)=>{const c=Zr(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>A.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Bn(e).ee((n,s)=>{const i=Zr(s);t(i)})}ur(e){return Gl(e).get(Ri).next(t=>(B(t!==null,2888),t))}cr(e,t){return Gl(e).put(Ri,t)}lr(e,t){return Bn(e).put(gf(this.serializer,t))}hr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.ur(e).next(t=>t.targetCount)}getTargetData(e,t){const n=_n(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Bn(e).ee({range:s,index:od},(o,u,c)=>{const h=Zr(u);Ss(t,h.target)&&(i=h,c.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Pt(e);return t.forEach(o=>{const u=ke(o.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(e,n,o))}),A.waitFor(s)}removeMatchingKeys(e,t,n){const s=Pt(e);return A.forEach(t,i=>{const o=ke(i.path);return A.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Pt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Pt(e);let i=G();return s.ee({range:n,Y:!0},(o,u,c)=>{const h=rt(o[1]),f=new M(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=ke(t.path),s=IDBKeyRange.bound([n],[Wh(n)],!1,!0);let i=0;return Pt(e).ee({index:La,Y:!0,range:s},([o,u],c,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}At(e,t){return Bn(e).get(t).next(n=>n?Zr(n):null)}}function Bn(r){return Ae(r,Zn)}function Gl(r){return Ae(r,mn)}function Pt(r){return Ae(r,er)}/**
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
 */const Kl="LruGarbageCollector",wf=1048576;function Ql([r,e],[t,n]){const s=$(r,t);return s===0?$(e,n):s}class Yy{constructor(e){this.Pr=e,this.buffer=new se(Ql),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ql(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Af{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){x(Kl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>P(this,null,function*(){this.Rr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gt(t)?x(Kl,"Ignoring IndexedDB error during garbage collection: ",t):yield $t(t)}yield this.Ar(3e5)}))}}class Xy{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return A.resolve(Ue.ce);const n=new Yy(t);return this.Vr.forEachTarget(e,s=>n.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>n.Ir(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve($l)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$l):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,s,i,o,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(n=m,u=Date.now(),this.removeTargets(e,n,t))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(h=Date.now(),Un()<=Z.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(u-o)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function vf(r,e){return new Xy(r,e)}/**
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
 */class Zy{constructor(e,t){this.db=e,this.garbageCollector=vf(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}pr(e){let t=0;return this.mr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,(n,s)=>t(s))}addReference(e,t,n){return oi(e,n)}removeReference(e,t,n){return oi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return oi(e,t)}wr(e,t){return function(s,i){let o=!1;return Tf(s).te(u=>Ef(s,u,i).next(c=>(c&&(o=!0),A.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(e,(o,u)=>{if(u<=t){const c=this.wr(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,q.min()),Pt(e).delete(function(m){return[0,ke(m.path)]}(o))))});s.push(c)}}).next(()=>A.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return oi(e,t)}yr(e,t){const n=Pt(e);let s,i=Ue.ce;return n.ee({index:La},([o,u],{path:c,sequenceNumber:h})=>{o===0?(i!==Ue.ce&&t(new M(rt(s)),i),i=h,s=c):i=Ue.ce}).next(()=>{i!==Ue.ce&&t(new M(rt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function oi(r,e){return Pt(r).put(function(n,s){return{targetId:0,path:ke(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class bf{constructor(){this.changes=new gt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eI{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return rn(e).put(n)}removeEntry(e,t,n){return rn(e).delete(function(i,o){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Ci(o),u[u.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Sr(e,n)))}getEntry(e,t){let n=ce.newInvalidDocument(t);return rn(e).ee({index:di,range:IDBKeyRange.only(Qr(t))},(s,i)=>{n=this.br(t,i)}).next(()=>n)}Dr(e,t){let n={size:0,document:ce.newInvalidDocument(t)};return rn(e).ee({index:di,range:IDBKeyRange.only(Qr(t))},(s,i)=>{n={document:this.br(t,i),size:xi(i)}}).next(()=>n)}getEntries(e,t){let n=je();return this.Cr(e,t,(s,i)=>{const o=this.br(s,i);n=n.insert(s,o)}).next(()=>n)}vr(e,t){let n=je(),s=new ae(M.comparator);return this.Cr(e,t,(i,o)=>{const u=this.br(i,o);n=n.insert(i,u),s=s.insert(i,xi(o))}).next(()=>({documents:n,Fr:s}))}Cr(e,t,n){if(t.isEmpty())return A.resolve();let s=new se(Jl);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Qr(s.first()),Qr(s.last())),o=s.getIterator();let u=o.getNext();return rn(e).ee({index:di,range:i},(c,h,f)=>{const m=M.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&Jl(u,m)<0;)n(u,null),u=o.getNext();u&&u.isEqual(m)&&(n(u,h),u=o.hasNext()?o.getNext():null),u?f.j(Qr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,u=[o.popLast().toArray(),o.lastSegment(),Ci(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rn(e).J(IDBKeyRange.bound(u,c,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=je();for(const m of h){const p=this.br(M.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);p.isFoundDocument()&&(Vs(t,p)||s.has(p.key))&&(f=f.insert(p.key,p))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=je();const o=Hl(t,n),u=Hl(t,He.max());return rn(e).ee({index:id,range:IDBKeyRange.bound(o,u,!0)},(c,h,f)=>{const m=this.br(M.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(m.key,m),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new tI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Wl(e).get(aa).next(t=>(B(!!t,20021),t))}Sr(e,t){return Wl(e).put(aa,t)}br(e,t){if(t){const n=Uy(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(q.min())))return n}return ce.newInvalidDocument(e)}}function Rf(r){return new eI(r)}class tI extends bf{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new gt(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new se((i,o)=>$(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const u=this.Or.get(i);if(t.push(this.Mr.removeEntry(e,i,u.readTime)),o.isValidDocument()){const c=Dl(this.Mr.serializer,o);s=s.add(i.path.popLast());const h=xi(c);n+=h-u.size,t.push(this.Mr.addEntry(e,i,c))}else if(n-=u.size,this.trackRemovals){const c=Dl(this.Mr.serializer,o.convertToNoDocument(q.min()));t.push(this.Mr.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Mr.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next(n=>(this.Or.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Mr.vr(e,t).next(({documents:n,Fr:s})=>(s.forEach((i,o)=>{this.Or.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Wl(r){return Ae(r,gs)}function rn(r){return Ae(r,bi)}function Qr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Hl(r,e){const t=e.documentKey.path.toArray();return[r,Ci(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Jl(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=$(t[i],n[i]),s)return s;return s=$(t.length,n.length),s||(s=$(t[t.length-2],n[n.length-2]),s||$(t[t.length-1],n[n.length-1]))}/**
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
 */class nI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Sf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&as(n.mutation,s,qe.empty(),te.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,G()).next(()=>n))}getLocalViewOfDocuments(e,t,n=G()){const s=st();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Yr();return i.forEach((u,c)=>{o=o.insert(u,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=st();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,G()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,u)=>{t.set(o,u)})})}computeViews(e,t,n,s){let i=je();const o=os(),u=function(){return os()}();return t.forEach((c,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof pt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),as(f.mutation,h,f.mutation.getFieldMask(),te.now())):o.set(h.key,qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return u.set(h,new nI(f,(m=o.get(h))!=null?m:null))}),u))}recalculateAndSaveOverlays(e,t){const n=os();let s=new ae((o,u)=>o-u),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const u of o)u.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||qe.empty();f=u.applyToLocalView(h,f),n.set(c,f);const m=(s.get(u.batchId)||G()).add(c);s=s.insert(u.batchId,m)})}).next(()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,m=Ud();f.forEach(p=>{if(!i.has(p)){const v=Qd(t.get(p),n.get(p));v!==null&&m.set(p,v),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return A.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return uy(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ga(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):A.resolve(st());let u=Hn,c=i;return o.next(h=>A.forEach(h,(f,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),i.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{c=c.insert(f,p)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,G())).next(f=>({batchId:u,changes:Bd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(n=>{let s=Yr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Yr();return this.indexManager.getCollectionParents(e,i).next(u=>A.forEach(u,c=>{const h=function(m,p){return new mt(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ce.newInvalidDocument(f)))});let u=Yr();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&as(f.mutation,h,qe.empty(),te.now()),Vs(t,h)&&(u=u.insert(c,h))}),u})}}/**
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
 */class rI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return A.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:_e(s.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:Zi(s.bundledQuery),readTime:_e(s.readTime)}}(t)),A.resolve()}}/**
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
 */class sI{constructor(){this.overlays=new ae(M.comparator),this.Lr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=st();return A.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.St(e,t,i)}),A.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const s=st(),i=t.length+1,o=new M(t.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ae((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=st(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=st(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=s)););return A.resolve(u)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ya(t,n));let i=this.Lr.get(t);i===void 0&&(i=G(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}/**
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
 */class iI{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
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
 */class nu{constructor(){this.kr=new se(be.qr),this.Kr=new se(be.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new be(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Wr(new be(e,t))}Qr(e,t){e.forEach(n=>this.removeReference(n,t))}Gr(e){const t=new M(new Q([])),n=new be(t,e),s=new be(t,e+1),i=[];return this.Kr.forEachInRange([n,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new M(new Q([])),n=new be(t,e),s=new be(t,e+1);let i=G();return this.Kr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new be(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class be{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return M.comparator(e.key,t.key)||$(e.Jr,t.Jr)}static Ur(e,t){return $(e.Jr,t.Jr)||M.comparator(e.key,t.key)}}/**
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
 */class oI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new se(be.qr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ha(i,t,n,s);this.mutationQueue.push(o);for(const u of s)this.Hr=this.Hr.add(new be(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?kt:this.Yn-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new be(t,0),s=new be(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,s],o=>{const u=this.Zr(o.Jr);i.push(u)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se($);return t.forEach(s=>{const i=new be(s,0),o=new be(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],u=>{n=n.add(u.Jr)})}),A.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;M.isDocumentKey(i)||(i=i.child(""));const o=new be(new M(i),0);let u=new se($);return this.Hr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(u=u.add(c.Jr)),!0)},o),A.resolve(this.Yr(u))}Yr(e){const t=[];return e.forEach(n=>{const s=this.Zr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){B(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return A.forEach(t.mutations,s=>{const i=new be(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){const n=new be(t,0),s=this.Hr.firstAfterOrEqual(n);return A.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class aI{constructor(e){this.ti=e,this.docs=function(){return new ae(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():ce.newInvalidDocument(t))}getEntries(e,t){let n=je();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ce.newInvalidDocument(s))}),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=je();const o=t.path,u=new M(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Oa(Zh(f),n)<=0||(s.has(f.key)||Vs(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,t,n,s){L(9500)}ni(e,t){return A.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new uI(this)}getSize(e){return A.resolve(this.size)}}class uI extends bf{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(n)}),A.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class cI{constructor(e){this.persistence=e,this.ri=new gt(t=>_n(t),Ss),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new nu,this.targetCount=0,this.oi=wn._r()}forEachTarget(e,t){return this.ri.forEach((n,s)=>t(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),A.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new wn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.lr(t),A.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ri.forEach((o,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.si.containsKey(t))}}/**
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
 */class ru{constructor(e,t){this._i={},this.overlays={},this.ai=new Ue(0),this.ui=!1,this.ui=!0,this.ci=new iI,this.referenceDelegate=e(this),this.li=new cI(this),this.indexManager=new Wy,this.remoteDocumentCache=function(s){return new aI(s)}(n=>this.referenceDelegate.hi(n)),this.serializer=new mf(t),this.Pi=new rI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new oI(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){x("MemoryPersistence","Starting transaction:",e);const s=new lI(this.ai.next());return this.referenceDelegate.Ti(),n(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,t){return A.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class lI extends td{constructor(e){super(),this.currentSequenceNumber=e}}class no{constructor(e){this.persistence=e,this.Ri=new nu,this.Ai=null}static Vi(e){return new no(e)}get di(){if(this.Ai)return this.Ai;throw L(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.di,n=>{const s=M.fromPath(n);return this.mi(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Ni{constructor(e,t){this.persistence=e,this.fi=new gt(n=>ke(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=vf(this,t)}static Vi(e,t){return new Ni(e,t)}Ti(){}Ei(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}pr(e){let t=0;return this.mr(e,n=>{t++}).next(()=>t)}mr(e,t){return A.forEach(this.fi,(n,s)=>this.wr(e,n,s).next(i=>i?A.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,t).next(u=>{u||(n++,i.removeEntry(o,q.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),A.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mi(e.data.value)),t}wr(e,t,n){return A.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return A.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hI{constructor(e){this.serializer=e}k(e,t,n,s){const i=new ji("createOrUpgrade",t);n<1&&s>=1&&(function(c){c.createObjectStore(Rs)}(e),function(c){c.createObjectStore(ms,{keyPath:A_}),c.createObjectStore(Je,{keyPath:al,autoIncrement:!0}).createIndex(dn,ul,{unique:!0}),c.createObjectStore(Xn)}(e),Yl(e),function(c){c.createObjectStore(an)}(e));let o=A.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore(er),c.deleteObjectStore(Zn),c.deleteObjectStore(mn)}(e),Yl(e)),o=o.next(()=>function(c){const h=c.store(mn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return h.put(Ri,f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(c,h){return h.store(Je).J().next(m=>{c.deleteObjectStore(Je),c.createObjectStore(Je,{keyPath:al,autoIncrement:!0}).createIndex(dn,ul,{unique:!0});const p=h.store(Je),v=m.map(D=>p.put(D));return A.waitFor(v)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore(tr,{keyPath:x_})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.gi(i))),n<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore(gs)}(e),this.pi(i)))),n<7&&s>=7&&(o=o.next(()=>this.yi(i))),n<8&&s>=8&&(o=o.next(()=>this.wi(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.Si(i))),n<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore(zi,{keyPath:N_})})(e),function(c){c.createObjectStore($i,{keyPath:k_})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(c){const h=c.createObjectStore(Gi,{keyPath:q_});h.createIndex(ca,j_,{unique:!1}),h.createIndex(cd,z_,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(c){const h=c.createObjectStore(bi,{keyPath:b_});h.createIndex(di,R_),h.createIndex(id,S_)}(e)).next(()=>this.bi(e,i)).next(()=>e.deleteObjectStore(an))),n<14&&s>=14&&(o=o.next(()=>this.Di(e,i))),n<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore(Ba,{keyPath:M_,autoIncrement:!0}).createIndex(ua,O_,{unique:!1}),c.createObjectStore(rs,{keyPath:F_}).createIndex(ad,L_,{unique:!1}),c.createObjectStore(ss,{keyPath:B_}).createIndex(ud,U_,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore(rs).clear()}).next(()=>{t.objectStore(ss).clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(c){c.createObjectStore(Ua,{keyPath:$_})})(e)})),n<18&&s>=18&&Ch()&&(o=o.next(()=>{t.objectStore(rs).clear()}).next(()=>{t.objectStore(ss).clear()})),o}pi(e){let t=0;return e.store(an).ee((n,s)=>{t+=xi(s)}).next(()=>{const n={byteSize:t};return e.store(gs).put(aa,n)})}gi(e){const t=e.store(ms),n=e.store(Je);return t.J().next(s=>A.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,kt],[i.userId,i.lastAcknowledgedBatchId]);return n.J(dn,o).next(u=>A.forEach(u,c=>{B(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const h=cn(this.serializer,c);return If(e,i.userId,h).next(()=>{})}))}))}yi(e){const t=e.store(er),n=e.store(an);return e.store(mn).get(Ri).next(s=>{const i=[];return n.ee((o,u)=>{const c=new Q(o),h=function(m){return[0,ke(m)]}(c);i.push(t.get(h).next(f=>f?A.resolve():(m=>t.put({targetId:0,path:ke(m),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>A.waitFor(i))})}wi(e,t){e.createObjectStore(ps,{keyPath:D_});const n=t.store(ps),s=new tu,i=o=>{if(s.add(o)){const u=o.lastSegment(),c=o.popLast();return n.put({collectionId:u,parent:ke(c)})}};return t.store(an).ee({Y:!0},(o,u)=>{const c=new Q(o);return i(c.popLast())}).next(()=>t.store(Xn).ee({Y:!0},([o,u,c],h)=>{const f=rt(u);return i(f.popLast())}))}Si(e){const t=e.store(Zn);return t.ee((n,s)=>{const i=Zr(s),o=gf(this.serializer,i);return t.put(o)})}bi(e,t){const n=t.store(an),s=[];return n.ee((i,o)=>{const u=t.store(bi),c=function(m){return m.document?new M(Q.fromString(m.document.name).popFirst(5)):m.noDocument?M.fromSegments(m.noDocument.path):m.unknownDocument?M.fromSegments(m.unknownDocument.path):L(36783)}(o).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(u.put(h))}).next(()=>A.waitFor(s))}Di(e,t){const n=t.store(Je),s=Rf(this.serializer),i=new ru(no.Vi,this.serializer.yt);return n.J().next(o=>{const u=new Map;return o.forEach(c=>{var f;let h=(f=u.get(c.userId))!=null?f:G();cn(this.serializer,c).keys().forEach(m=>h=h.add(m)),u.set(c.userId,h)}),A.forEach(u,(c,h)=>{const f=new Re(h),m=eo.wt(this.serializer,f),p=i.getIndexManager(f),v=to.wt(f,this.serializer,p,i.referenceDelegate);return new Sf(s,v,m,p).recalculateAndSaveOverlaysForDocumentKeys(new la(t,Ue.ce),c).next()})})}}function Yl(r){r.createObjectStore(er,{keyPath:V_}).createIndex(La,C_,{unique:!0}),r.createObjectStore(Zn,{keyPath:"targetId"}).createIndex(od,P_,{unique:!0}),r.createObjectStore(mn)}const Rt="IndexedDbPersistence",Go=18e5,Ko=5e3,Qo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Pf="main";class su{constructor(e,t,n,s,i,o,u,c,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ci=i,this.window=o,this.document=u,this.Fi=h,this.Mi=f,this.xi=m,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=p=>Promise.resolve(),!su.v())throw new C(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Zy(this,s),this.qi=t+Pf,this.serializer=new mf(c),this.Ki=new it(this.qi,this.xi,new hI(this.serializer)),this.ci=new jy,this.li=new Jy(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Rf(this.serializer),this.Pi=new qy,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&pe(Rt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(R.FAILED_PRECONDITION,Qo);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new Ue(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}zi(e){return this.ki=t=>P(this,null,function*(){if(this.started)return e(t)}),e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K(t=>P(this,null,function*(){t.newVersion===null&&(yield e())}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(()=>P(this,null,function*(){this.started&&(yield this.$i())})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ai(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Ji(e)).next(t=>this.isPrimary&&!t?this.Hi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(Gt(e))return x(Rt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x(Rt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return Wr(e).get(kn).next(t=>A.resolve(this.Xi(t)))}Yi(e){return ai(e).delete(this.clientId)}es(){return P(this,null,function*(){if(this.isPrimary&&!this.ts(this.Li,Go)){this.Li=Date.now();const e=yield this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Ae(t,tr);return n.J().next(s=>{const i=this.ns(s,Go),o=s.filter(u=>i.indexOf(u)===-1);return A.forEach(o,u=>n.delete(u.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}})}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?A.resolve(!0):Wr(e).get(kn).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Ko)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new C(R.FAILED_PRECONDITION,Qo);return!1}}return!(!this.networkEnabled||!this.inForeground)||ai(e).J().next(n=>this.ns(n,Ko).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||o&&u)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&x(Rt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}shutdown(){return P(this,null,function*(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),yield this.Ki.runTransaction("shutdown","readwrite",[Rs,tr],e=>{const t=new la(e,Ue.ce);return this.Hi(t).next(()=>this.Yi(t))}),this.Ki.close(),this.ls()})}ns(e,t){return e.filter(n=>this.ts(n.updateTimeMs,t)&&!this.ss(n.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>ai(e).J().next(t=>this.ns(t,Go).map(n=>n.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return to.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Hy(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return eo.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,n){x(Rt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===18?Q_:c===17?fd:c===16?K_:c===15?qa:c===14?dd:c===13?hd:c===12?G_:c===11?ld:void L(60245)}(this.xi);let o;return this.Ki.runTransaction(e,s,i,u=>(o=new la(u,this.ai?this.ai.next():Ue.ce),t==="readwrite-primary"?this.ji(o).next(c=>!!c||this.Ji(o)).next(c=>{if(!c)throw pe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new C(R.FAILED_PRECONDITION,ed);return n(o)}).next(c=>this.Zi(o).next(()=>c)):this.Ps(o).next(()=>n(o)))).then(u=>(o.raiseOnCommittedEvent(),u))}Ps(e){return Wr(e).get(kn).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Ko)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new C(R.FAILED_PRECONDITION,Qo)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Wr(e).put(kn,t)}static v(){return it.v()}Hi(e){const t=Wr(e);return t.get(kn).next(n=>this.Xi(n)?(x(Rt,"Releasing primary lease."),t.delete(kn)):A.resolve())}ts(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(pe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;Vh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const n=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return x(Rt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return pe(Rt,"Failed to get zombied client id.",n),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){pe("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch(e){}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Wr(r){return Ae(r,Rs)}function ai(r){return Ae(r,tr)}function iu(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class ou{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=s}static Is(e,t){let n=G(),s=G();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ou(e,t.fromCache,n,s)}}/**
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
 */class dI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Vf{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Vh()?8:nd(Qn())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.gs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new dI;return this.ys(e,t,o).next(u=>{if(i.result=u,this.As)return this.ws(e,t,o,u.size)})}).next(()=>i.result)}ws(e,t,n,s){return n.documentReadCount<this.Vs?(Un()<=Z.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(Un()<=Z.DEBUG&&x("QueryEngine","Query:",qn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Un()<=Z.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Me(t))):A.resolve())}gs(e,t){if(Tl(t))return A.resolve(null);let n=Me(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Vi(t,null,"F"),n=Me(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=G(...i);return this.fs.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.Ss(t,u);return this.bs(t,h,o,c.readTime)?this.gs(e,Vi(t,null,"F")):this.Ds(e,h,t,c)}))})))}ps(e,t,n,s){return Tl(t)||s.isEqual(q.min())?A.resolve(null):this.fs.getDocuments(e,n).next(i=>{const o=this.Ss(t,i);return this.bs(t,o,n,s)?A.resolve(null):(Un()<=Z.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qn(t)),this.Ds(e,o,t,Xh(s,Hn)).next(u=>u))})}Ss(e,t){let n=new se(Fd(e));return t.forEach((s,i)=>{Vs(e,i)&&(n=n.add(i))}),n}bs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,n){return Un()<=Z.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",qn(t)),this.fs.getDocumentsMatchingQuery(e,t,He.min(),n)}Ds(e,t,n,s){return this.fs.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const au="LocalStore",fI=3e8;class mI{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ae($),this.Fs=new gt(i=>_n(i),Ss),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sf(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Cf(r,e,t,n){return new mI(r,e,t,n)}function Df(r,e){return P(this,null,function*(){const t=O(r);return yield t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],u=[];let c=G();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:u}))})})})}function gI(r,e){const t=O(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const m=h.batch,p=m.keys();let v=A.resolve();return p.forEach(D=>{v=v.next(()=>f.getEntry(c,D)).next(k=>{const N=h.docVersions.get(D);B(N!==null,48541),k.version.compareTo(N)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),v.next(()=>u.mutationQueue.removeMutationBatch(c,m))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=G();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function xf(r){const e=O(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function pI(r,e){const t=O(r),n=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const u=[];e.targetChanges.forEach((f,m)=>{const p=s.get(m);if(!p)return;u.push(t.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.li.addMatchingKeys(i,f.addedDocuments,m)));let v=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(me.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,n)),s=s.insert(m,v),function(k,N,U){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=fI?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(p,v,f)&&u.push(t.li.updateTargetData(i,v))});let c=je(),h=G();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(Nf(i,o,e.documentUpdates).next(f=>{c=f.Bs,h=f.Ls})),!n.isEqual(q.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next(m=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return A.waitFor(u).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.vs=s,i))}function Nf(r,e,t){let n=G(),s=G();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=je();return t.forEach((u,c)=>{const h=i.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(u,c.readTime),o=o.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(u,c)):x(au,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function _I(r,e){const t=O(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=kt),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function ur(r,e){const t=O(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.li.getTargetData(n,e).next(i=>i?(s=i,A.resolve(s)):t.li.allocateTargetId(n).next(o=>(s=new ut(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n})}function cr(r,e,t){return P(this,null,function*(){const n=O(r),s=n.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||(yield n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Gt(o))throw o;x(au,`Failed to update sequence numbers for target ${e}: ${o}`)}n.vs=n.vs.remove(e),n.Fs.delete(s.target)})}function ki(r,e,t){const n=O(r);let s=q.min(),i=G();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const m=O(c),p=m.Fs.get(f);return p!==void 0?A.resolve(m.vs.get(p)):m.li.getTargetData(h,f)}(n,o,Me(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(o,u.targetId).next(c=>{i=c})}).next(()=>n.Cs.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?i:G())).next(u=>(Of(n,Od(e),u),{documents:u,ks:i})))}function kf(r,e){const t=O(r),n=O(t.li),s=t.vs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.At(i,e).next(o=>o?o.target:null))}function Mf(r,e){const t=O(r),n=t.Ms.get(e)||q.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.xs.getAllFromCollectionGroup(s,e,Xh(n,Hn),Number.MAX_SAFE_INTEGER)).then(s=>(Of(t,e,s),s))}function Of(r,e,t){let n=r.Ms.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Ms.set(e,n)}function yI(r,e,t,n){return P(this,null,function*(){const s=O(r);let i=G(),o=je();for(const h of t){const f=e.qs(h.metadata.name);h.document&&(i=i.add(f));const m=e.Ks(h);m.setReadTime(e.Us(h.metadata.readTime)),o=o.insert(f,m)}const u=s.xs.newChangeBuffer({trackRemovals:!0}),c=yield ur(s,function(f){return Me(_r(Q.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",h=>Nf(h,u,o).next(f=>(u.apply(h),f)).next(f=>s.li.removeMatchingKeysForTargetId(h,c.targetId).next(()=>s.li.addMatchingKeys(h,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(h,f.Bs,f.Ls)).next(()=>f.Bs)))})}function II(n,s){return P(this,arguments,function*(r,e,t=G()){const i=yield ur(r,Me(Zi(e.bundledQuery))),o=O(r);return o.persistence.runTransaction("Save named query","readwrite",u=>{const c=_e(e.readTime);if(i.snapshotVersion.compareTo(c)>=0)return o.Pi.saveNamedQuery(u,e);const h=i.withResumeToken(me.EMPTY_BYTE_STRING,c);return o.vs=o.vs.insert(h.targetId,h),o.li.updateTargetData(u,h).next(()=>o.li.removeMatchingKeysForTargetId(u,i.targetId)).next(()=>o.li.addMatchingKeys(u,t,i.targetId)).next(()=>o.Pi.saveNamedQuery(u,e))})})}/**
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
 */const Ff="firestore_clients";function Xl(r,e){return`${Ff}_${r}_${e}`}const Lf="firestore_mutations";function Zl(r,e,t){let n=`${Lf}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Bf="firestore_targets";function Wo(r,e){return`${Bf}_${r}_${e}`}/**
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
 */const nt="SharedClientState";class Mi{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static $s(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new C(s.error.code,s.error.message))),o?new Mi(e,t,s.state,i):(pe(nt,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class cs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new C(n.error.code,n.error.message))),i?new cs(e,n.state,s):(pe(nt,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Oi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Ka();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=rd(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Oi(e,i):(pe(nt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class uu{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new uu(t.clientId,t.onlineState):(pe(nt,`Failed to parse online state: ${e}`),null)}}class va{constructor(){this.activeTargetIds=Ka()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ho{constructor(e,t,n,s,i){this.window=e,this.Ci=t,this.persistenceKey=n,this.zs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Js.bind(this),this.Hs=new ae($),this.started=!1,this.Zs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=Xl(this.persistenceKey,this.zs),this.Ys=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Hs=this.Hs.insert(this.zs,new va),this.eo=new RegExp(`^${Ff}_${o}_([^_]*)$`),this.no=new RegExp(`^${Lf}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${Bf}_${o}_(\\d+)$`),this.io=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.so=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}start(){return P(this,null,function*(){const e=yield this.syncEngine.hs();for(const n of e){if(n===this.zs)continue;const s=this.getItem(Xl(this.persistenceKey,n));if(s){const i=Oi.$s(n,s);i&&(this.Hs=this.Hs.insert(i.clientId,i))}}this.oo();const t=this.storage.getItem(this.io);if(t){const n=this._o(t);n&&this.ao(n)}for(const n of this.Zs)this.Js(n);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0})}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Hs)}isActiveQueryTarget(e){let t=!1;return this.Hs.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,t,n){this.co(e,t,n),this.lo(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Wo(this.persistenceKey,e));if(s){const i=cs.$s(e,s);i&&(n=i.state)}}return t&&this.ho.Qs(e),this.oo(),n}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Wo(this.persistenceKey,e))}updateQueryState(e,t,n){this.Po(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.lo(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x(nt,"READ",e,t),t}setItem(e,t){x(nt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){x(nt,"REMOVE",e),this.storage.removeItem(e)}Js(e){const t=e;if(t.storageArea===this.storage){if(x(nt,"EVENT",t.key,t.newValue),t.key===this.Xs)return void pe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable(()=>P(this,null,function*(){if(this.started){if(t.key!==null){if(this.eo.test(t.key)){if(t.newValue==null){const n=this.Io(t.key);return this.Ro(n,null)}{const n=this.Ao(t.key,t.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.no.test(t.key)){if(t.newValue!==null){const n=this.Vo(t.key,t.newValue);if(n)return this.mo(n)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const n=this.fo(t.key,t.newValue);if(n)return this.po(n)}}else if(t.key===this.io){if(t.newValue!==null){const n=this._o(t.newValue);if(n)return this.ao(n)}}else if(t.key===this.Ys){const n=function(i){let o=Ue.ce;if(i!=null)try{const u=JSON.parse(i);B(typeof u=="number",30636,{yo:i}),o=u}catch(u){pe(nt,"Failed to read sequence number from WebStorage",u)}return o}(t.newValue);n!==Ue.ce&&this.sequenceNumberHandler(n)}else if(t.key===this.so){const n=this.wo(t.newValue);yield Promise.all(n.map(s=>this.syncEngine.So(s)))}}}else this.Zs.push(t)}))}}get ho(){return this.Hs.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,t,n){const s=new Mi(this.currentUser,e,t,n),i=Zl(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ws())}lo(e){const t=Zl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}To(e){const t={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(t))}Po(e,t,n){const s=Wo(this.persistenceKey,e),i=new cs(e,t,n);this.setItem(s,i.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.so,t)}Io(e){const t=this.eo.exec(e);return t?t[1]:null}Ao(e,t){const n=this.Io(e);return Oi.$s(n,t)}Vo(e,t){const n=this.no.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Mi.$s(new Re(i),s,t)}fo(e,t){const n=this.ro.exec(e),s=Number(n[1]);return cs.$s(s,t)}_o(e){return uu.$s(e)}wo(e){return JSON.parse(e)}mo(e){return P(this,null,function*(){if(e.user.uid===this.currentUser.uid)return this.syncEngine.bo(e.batchId,e.state,e.error);x(nt,`Ignoring mutation for non-active user ${e.user.uid}`)})}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,t){const n=t?this.Hs.insert(e,t):this.Hs.remove(e),s=this.uo(this.Hs),i=this.uo(n),o=[],u=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||u.push(c)}),this.syncEngine.Co(o,u).then(()=>{this.Hs=n})}ao(e){this.Hs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let t=Ka();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Uf{constructor(){this.vo=new va,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new va,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EI{Mo(e){}shutdown(){}}/**
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
 */const eh="ConnectivityMonitor";class th{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){x(eh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){x(eh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ui=null;function ba(){return ui===null?ui=function(){return 268435456+Math.round(2147483648*Math.random())}():ui++,"0x"+ui.toString(16)}/**
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
 */const Jo="RestConnection",TI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class wI{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===ys?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,i){const o=ba(),u=this.Qo(e,t.toUriEncodedString());x(Jo,`Sending RPC '${e}' ${o}:`,u,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:h}=new URL(u),f=Da(h);return this.zo(e,u,c,n,f).then(m=>(x(Jo,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ge(Jo,`RPC '${e}' ${o} failed with error: `,m,"url: ",u,"request:",n),m})}jo(e,t,n,s,i,o){return this.Wo(e,t,n,s,i)}Go(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const n=TI[e];let s=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class AI{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const xe="WebChannelConnection",Hr=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})};class Gn extends wI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Gn.c_){const e=zh();Hr(e,jh.STAT_EVENT,t=>{t.stat===na.PROXY?x(xe,"STAT_EVENT: detected buffering proxy"):t.stat===na.NOPROXY&&x(xe,"STAT_EVENT: detected no buffering proxy")}),Gn.c_=!0}}zo(e,t,n,s,i){const o=ba();return new Promise((u,c)=>{const h=new Uh;h.setWithCredentials(!0),h.listenOnce(qh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case li.NO_ERROR:const m=h.getResponseJson();x(xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),u(m);break;case li.TIMEOUT:x(xe,`RPC '${e}' ${o} timed out`),c(new C(R.DEADLINE_EXCEEDED,"Request time out"));break;case li.HTTP_ERROR:const p=h.getStatus();if(x(xe,`RPC '${e}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const D=v==null?void 0:v.error;if(D&&D.status&&D.message){const k=function(U){const z=U.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(z)>=0?z:R.UNKNOWN}(D.status);c(new C(k,D.message))}else c(new C(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new C(R.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{x(xe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);x(xe,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,n,15)})}T_(e,t,n){const s=ba(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const h=i.join("");x(xe,`Creating RPC '${e}' stream ${s}: ${h}`,u);const f=o.createWebChannel(h,u);this.E_(f);let m=!1,p=!1;const v=new AI({Jo:D=>{p?x(xe,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(x(xe,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),x(xe,`RPC '${e}' stream ${s} sending:`,D),f.send(D))},Ho:()=>f.close()});return Hr(f,Jr.EventType.OPEN,()=>{p||(x(xe,`RPC '${e}' stream ${s} transport opened.`),v.i_())}),Hr(f,Jr.EventType.CLOSE,()=>{p||(p=!0,x(xe,`RPC '${e}' stream ${s} transport closed`),v.o_(),this.I_(f))}),Hr(f,Jr.EventType.ERROR,D=>{p||(p=!0,Ge(xe,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),v.o_(new C(R.UNAVAILABLE,"The operation could not be completed")))}),Hr(f,Jr.EventType.MESSAGE,D=>{var k;if(!p){const N=D.data[0];B(!!N,16349);const U=N,z=(U==null?void 0:U.error)||((k=U[0])==null?void 0:k.error);if(z){x(xe,`RPC '${e}' stream ${s} received error:`,z);const j=z.status;let ee=function(E){const _=ye[E];if(_!==void 0)return Yd(_)}(j),H=z.message;j==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&Ge(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ee===void 0&&(ee=R.INTERNAL,H="Unknown error status: "+j+" with message "+z.message),p=!0,v.o_(new C(ee,H)),f.close()}else x(xe,`RPC '${e}' stream ${s} received:`,N),v.__(N)}}),Gn.u_(),setTimeout(()=>{v.s_()},0),v}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return $h()}}/**
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
 */function vI(r){return new Gn(r)}/**
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
 */function qf(){return typeof window!="undefined"?window:null}function Ii(){return typeof document!="undefined"?document:null}/**
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
 */function Rn(r){return new Cy(r,!0)}/**
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
 */Gn.c_=!1;class cu{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const nh="PersistentStream";class jf{constructor(e,t,n,s,i,o,u,c){this.Ci=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new cu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}stop(){return P(this,null,function*(){this.x_()&&(yield this.close(0))})}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}k_(){return P(this,null,function*(){if(this.O_())return this.close(0)})}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(e,t){return P(this,null,function*(){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(pe(t.toString()),pe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.t_(t)})}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===t&&this.G_(n,s)},n=>{e(()=>{const s=new C(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(()=>P(this,null,function*(){this.state=0,this.start()}))}z_(e){return x(nh,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(x(nh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bI extends jf{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Ny(this.serializer,e),n=function(i){if(!("targetChange"in i))return q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?_e(o.readTime):q.min()}(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=Ia(this.serializer),t.addTarget=function(i,o){let u;const c=o.target;if(u=Si(c)?{documents:af(i,c)}:{query:Xi(i,c).ft},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=tf(i,o.resumeToken);const h=_a(i,o.expectedCount);h!==null&&(u.expectedCount=h)}else if(o.snapshotVersion.compareTo(q.min())>0){u.readTime=ar(i,o.snapshotVersion.toTimestamp());const h=_a(i,o.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const n=My(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=Ia(this.serializer),t.removeTarget=e,this.q_(t)}}class RI extends jf{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return B(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,B(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){B(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=ky(e.writeResults,e.commitTime),n=_e(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Ia(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>As(this.serializer,n))};this.q_(t)}}/**
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
 */class SI{}class PI extends SI{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new C(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,ya(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(R.UNKNOWN,i.toString())})}jo(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.jo(e,ya(t,n),s,o,u,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new C(R.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function VI(r,e,t,n){return new PI(r,e,t,n)}class CI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(pe(t),this.aa=!1):x("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const An="RemoteStore";class DI{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{n.enqueueAndForget(()=>P(this,null,function*(){Qt(this)&&(x(An,"Restarting streams for network reachability change."),yield function(c){return P(this,null,function*(){const h=O(c);h.Ia.add(4),yield Er(h),h.Va.set("Unknown"),h.Ia.delete(4),yield Ns(h)})}(this))}))}),this.Va=new CI(n,s)}}function Ns(r){return P(this,null,function*(){if(Qt(r))for(const e of r.Ra)yield e(!0)})}function Er(r){return P(this,null,function*(){for(const e of r.Ra)yield e(!1)})}function ro(r,e){const t=O(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),du(t)?hu(t):wr(t).O_()&&lu(t,e))}function lr(r,e){const t=O(r),n=wr(t);t.Ea.delete(e),n.O_()&&zf(t,e),t.Ea.size===0&&(n.O_()?n.L_():Qt(t)&&t.Va.set("Unknown"))}function lu(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wr(r).Z_(e)}function zf(r,e){r.da.$e(e),wr(r).X_(e)}function hu(r){r.da=new Ry({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),wr(r).start(),r.Va.ua()}function du(r){return Qt(r)&&!wr(r).x_()&&r.Ea.size>0}function Qt(r){return O(r).Ia.size===0}function $f(r){r.da=void 0}function xI(r){return P(this,null,function*(){r.Va.set("Online")})}function NI(r){return P(this,null,function*(){r.Ea.forEach((e,t)=>{lu(r,e)})})}function kI(r,e){return P(this,null,function*(){$f(r),du(r)?(r.Va.ha(e),hu(r)):r.Va.set("Unknown")})}function MI(r,e,t){return P(this,null,function*(){if(r.Va.set("Online"),e instanceof ef&&e.state===2&&e.cause)try{yield function(s,i){return P(this,null,function*(){const o=i.cause;for(const u of i.targetIds)s.Ea.has(u)&&(yield s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.da.removeTarget(u))})}(r,e)}catch(n){x(An,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),yield Fi(r,n)}else if(e instanceof _i?r.da.Xe(e):e instanceof Zd?r.da.st(e):r.da.tt(e),!t.isEqual(q.min()))try{const n=yield xf(r.localStore);t.compareTo(n)>=0&&(yield function(i,o){const u=i.da.Tt(o);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(c.resumeToken,o))}}),u.targetMismatches.forEach((c,h)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),zf(i,c);const m=new ut(f.target,c,h,f.sequenceNumber);lu(i,m)}),i.remoteSyncer.applyRemoteEvent(u)}(r,t))}catch(n){x(An,"Failed to raise snapshot:",n),yield Fi(r,n)}})}function Fi(r,e,t){return P(this,null,function*(){if(!Gt(e))throw e;r.Ia.add(1),yield Er(r),r.Va.set("Offline"),t||(t=()=>xf(r.localStore)),r.asyncQueue.enqueueRetryable(()=>P(this,null,function*(){x(An,"Retrying IndexedDB access"),yield t(),r.Ia.delete(1),yield Ns(r)}))})}function Gf(r,e){return e().catch(t=>Fi(r,t,e))}function Tr(r){return P(this,null,function*(){const e=O(r),t=qt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:kt;for(;OI(e);)try{const s=yield _I(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,FI(e,s)}catch(s){yield Fi(e,s)}Kf(e)&&Qf(e)})}function OI(r){return Qt(r)&&r.Ta.length<10}function FI(r,e){r.Ta.push(e);const t=qt(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function Kf(r){return Qt(r)&&!qt(r).x_()&&r.Ta.length>0}function Qf(r){qt(r).start()}function LI(r){return P(this,null,function*(){qt(r).ra()})}function BI(r){return P(this,null,function*(){const e=qt(r);for(const t of r.Ta)e.ea(t.mutations)})}function UI(r,e,t){return P(this,null,function*(){const n=r.Ta.shift(),s=Ja.from(n,e,t);yield Gf(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),yield Tr(r)})}function qI(r,e){return P(this,null,function*(){e&&qt(r).Y_&&(yield function(n,s){return P(this,null,function*(){if(function(o){return Jd(o)&&o!==R.ABORTED}(s.code)){const i=n.Ta.shift();qt(n).B_(),yield Gf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),yield Tr(n)}})}(r,e)),Kf(r)&&Qf(r)})}function rh(r,e){return P(this,null,function*(){const t=O(r);t.asyncQueue.verifyOperationInProgress(),x(An,"RemoteStore received new credentials");const n=Qt(t);t.Ia.add(3),yield Er(t),n&&t.Va.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),yield Ns(t)})}function Ra(r,e){return P(this,null,function*(){const t=O(r);e?(t.Ia.delete(2),yield Ns(t)):e||(t.Ia.add(2),yield Er(t),t.Va.set("Unknown"))})}function wr(r){return r.ma||(r.ma=function(t,n,s){const i=O(t);return i.sa(),new bI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Zo:xI.bind(null,r),Yo:NI.bind(null,r),t_:kI.bind(null,r),H_:MI.bind(null,r)}),r.Ra.push(e=>P(this,null,function*(){e?(r.ma.B_(),du(r)?hu(r):r.Va.set("Unknown")):(yield r.ma.stop(),$f(r))}))),r.ma}function qt(r){return r.fa||(r.fa=function(t,n,s){const i=O(t);return i.sa(),new RI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:LI.bind(null,r),t_:qI.bind(null,r),ta:BI.bind(null,r),na:UI.bind(null,r)}),r.Ra.push(e=>P(this,null,function*(){e?(r.fa.B_(),yield Tr(r)):(yield r.fa.stop(),r.Ta.length>0&&(x(An,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class fu{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,u=new fu(e,t,o,s,i);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ar(r,e){if(pe("AsyncQueue",`${e}: ${r}`),Gt(r))return new C(R.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class gn{static emptySet(e){return new gn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||M.comparator(t.key,n.key):(t,n)=>M.comparator(t.key,n.key),this.keyedMap=Yr(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new gn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class sh{constructor(){this.ga=new ae(M.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):L(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class vn{constructor(e,t,n,s,i,o,u,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(u=>{o.push({type:0,doc:u})}),new vn(e,t,gn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ps(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class jI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class zI{constructor(){this.queries=ih(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=O(t),i=s.queries;s.queries=ih(),i.forEach((o,u)=>{for(const c of u.Sa)c.onError(n)})})(this,new C(R.ABORTED,"Firestore shutting down"))}}function ih(){return new gt(r=>Md(r),Ps)}function mu(r,e){return P(this,null,function*(){const t=O(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new jI,n=e.Da()?0:1);try{switch(n){case 0:i.wa=yield t.onListen(s,!0);break;case 1:i.wa=yield t.onListen(s,!1);break;case 2:yield t.onFirstRemoteStoreListen(s)}}catch(o){const u=Ar(o,`Initialization of query '${qn(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&pu(t)})}function gu(r,e){return P(this,null,function*(){const t=O(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}})}function $I(r,e){const t=O(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const u of o.Sa)u.Fa(s)&&(n=!0);o.wa=s}}n&&pu(t)}function GI(r,e,t){const n=O(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function pu(r){r.Ca.forEach(e=>{e.next()})}var Sa,oh;(oh=Sa||(Sa={})).Ma="default",oh.Cache="cache";class _u{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new vn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Sa.Cache}}/**
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
 */class Wf{constructor(e,t){this.Ka=e,this.byteLength=t}Ua(){return"metadata"in this.Ka}}/**
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
 */class ah{constructor(e){this.serializer=e}qs(e){return ot(this.serializer,e)}Ks(e){return e.metadata.exists?Yi(this.serializer,e.document,!1):ce.newNoDocument(this.qs(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return _e(e)}}class yu{constructor(e,t){this.$a=e,this.serializer=t,this.Wa=[],this.Qa=[],this.collectionGroups=new Set,this.progress=Hf(e)}get queries(){return this.Wa}get documents(){return this.Qa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ka.namedQuery)this.Wa.push(e.Ka.namedQuery);else if(e.Ka.documentMetadata){this.Qa.push({metadata:e.Ka.documentMetadata}),e.Ka.documentMetadata.exists||++t;const n=Q.fromString(e.Ka.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ka.document&&(this.Qa[this.Qa.length-1].document=e.Ka.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Ve({},this.progress)):null}za(e){const t=new Map,n=new ah(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.qs(s.metadata.name);for(const o of s.metadata.queries){const u=(t.get(o)||G()).add(i);t.set(o,u)}}return t}ja(e){return P(this,null,function*(){const t=yield yI(e,new ah(this.serializer),this.Qa,this.$a.id),n=this.za(this.documents);for(const s of this.Wa)yield II(e,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}})}}function Hf(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class Jf{constructor(e){this.key=e}}class Yf{constructor(e){this.key=e}}class Xf{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=G(),this.mutatedKeys=G(),this.eu=Fd(e),this.tu=new gn(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new sh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const p=s.get(f),v=Vs(this.query,m)?m:null,D=!!p&&this.mutatedKeys.has(p.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;p&&v?p.data.isEqual(v.data)?D!==k&&(n.track({type:3,doc:v}),N=!0):this.su(p,v)||(n.track({type:2,doc:v}),N=!0,(c&&this.eu(v,c)>0||h&&this.eu(v,h)<0)&&(u=!0)):!p&&v?(n.track({type:0,doc:v}),N=!0):p&&!v&&(n.track({type:1,doc:p}),N=!0,(c||h)&&(u=!0)),N&&(v?(o=o.add(v),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{tu:o,iu:n,bs:u,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(v,D){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:N})}};return k(v)-k(D)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(n),s=s!=null?s:!1;const u=t&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Xa;return this.Xa=c,o.length!==0||h?{snapshot:new vn(this.query,e.tu,i,o,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=G(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))});const t=[];return e.forEach(n=>{this.Ya.has(n)||t.push(new Yf(n))}),this.Ya.forEach(n=>{e.has(n)||t.push(new Jf(n))}),t}cu(e){this.Za=e.ks,this.Ya=G();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Wt="SyncEngine";class KI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class QI{constructor(e){this.key=e,this.hu=!1}}class WI{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new gt(u=>Md(u),Ps),this.Eu=new Map,this.Iu=new Set,this.Ru=new ae(M.comparator),this.Au=new Map,this.Vu=new nu,this.du={},this.mu=new Map,this.fu=wn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function HI(r,e,t=!0){return P(this,null,function*(){const n=so(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=yield Zf(n,e,t,!0),s})}function JI(r,e){return P(this,null,function*(){const t=so(r);yield Zf(t,e,!0,!1)})}function Zf(r,e,t,n){return P(this,null,function*(){const s=yield ur(r.localStore,Me(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let u;return n&&(u=yield Iu(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&ro(r.remoteStore,s),u})}function Iu(r,e,t,n,s){return P(this,null,function*(){r.pu=(m,p,v)=>function(k,N,U,z){return P(this,null,function*(){let j=N.view.ru(U);j.bs&&(j=yield ki(k.localStore,N.query,!1).then(({documents:E})=>N.view.ru(E,j)));const ee=z&&z.targetChanges.get(N.targetId),H=z&&z.targetMismatches.get(N.targetId)!=null,Y=N.view.applyChanges(j,k.isPrimaryClient,ee,H);return Pa(k,N.targetId,Y.au),Y.snapshot})}(r,m,p,v);const i=yield ki(r.localStore,e,!0),o=new Xf(e,i.ks),u=o.ru(i.documents),c=xs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(u,r.isPrimaryClient,c);Pa(r,t,h.au);const f=new KI(e,t,o);return r.Tu.set(e,f),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),h.snapshot})}function YI(r,e,t){return P(this,null,function*(){const n=O(r),s=n.Tu.get(e),i=n.Eu.get(s.targetId);if(i.length>1)return n.Eu.set(s.targetId,i.filter(o=>!Ps(o,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||(yield cr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&lr(n.remoteStore,s.targetId),hr(n,s.targetId)}).catch($t))):(hr(n,s.targetId),yield cr(n.localStore,s.targetId,!0))})}function XI(r,e){return P(this,null,function*(){const t=O(r),n=t.Tu.get(e),s=t.Eu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),lr(t.remoteStore,n.targetId))})}function ZI(r,e,t){return P(this,null,function*(){const n=Au(r);try{const s=yield function(o,u){const c=O(o),h=te.now(),f=u.reduce((v,D)=>v.add(D.key),G());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let D=je(),k=G();return c.xs.getEntries(v,f).next(N=>{D=N,D.forEach((U,z)=>{z.isValidDocument()||(k=k.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,D)).next(N=>{m=N;const U=[];for(const z of u){const j=wy(z,m.get(z.key).overlayedDocument);j!=null&&U.push(new pt(z.key,j,vd(j.value.mapValue),de.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,U,u)}).next(N=>{p=N;const U=N.applyToLocalDocumentSet(m,k);return c.documentOverlayCache.saveOverlays(v,N.batchId,U)})}).then(()=>({batchId:p.batchId,changes:Bd(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,u,c){let h=o.du[o.currentUser.toKey()];h||(h=new ae($)),h=h.insert(u,c),o.du[o.currentUser.toKey()]=h}(n,s.batchId,t),yield _t(n,s.changes),yield Tr(n.remoteStore)}catch(s){const i=Ar(s,"Failed to persist write");t.reject(i)}})}function em(r,e){return P(this,null,function*(){const t=O(r);try{const n=yield pI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(B(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?B(o.hu,14607):s.removedDocuments.size>0&&(B(o.hu,42227),o.hu=!1))}),yield _t(t,n,e)}catch(n){yield $t(n)}})}function uh(r,e,t){const n=O(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach((i,o)=>{const u=o.view.va(e);u.snapshot&&s.push(u.snapshot)}),function(o,u){const c=O(o);c.onlineState=u;let h=!1;c.queries.forEach((f,m)=>{for(const p of m.Sa)p.va(u)&&(h=!0)}),h&&pu(c)}(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}function eE(r,e,t){return P(this,null,function*(){const n=O(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let o=new ae(M.comparator);o=o.insert(i,ce.newNoDocument(i,q.min()));const u=G().add(i),c=new Ds(q.min(),new Map,new ae($),o,u);yield em(n,c),n.Ru=n.Ru.remove(i),n.Au.delete(e),wu(n)}else yield cr(n.localStore,e,!1).then(()=>hr(n,e,t)).catch($t)})}function tE(r,e){return P(this,null,function*(){const t=O(r),n=e.batch.batchId;try{const s=yield gI(t.localStore,e);Tu(t,n,null),Eu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),yield _t(t,s)}catch(s){yield $t(s)}})}function nE(r,e,t){return P(this,null,function*(){const n=O(r);try{const s=yield function(o,u){const c=O(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(m=>(B(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);Tu(n,e,t),Eu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),yield _t(n,s)}catch(s){yield $t(s)}})}function rE(r,e){return P(this,null,function*(){const t=O(r);Qt(t.remoteStore)||x(Wt,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=yield function(o){const u=O(o);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(n===kt)return void e.resolve();const s=t.mu.get(n)||[];s.push(e),t.mu.set(n,s)}catch(n){const s=Ar(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}})}function Eu(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Tu(r,e,t){const n=O(r);let s=n.du[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.du[n.currentUser.toKey()]=s}}function hr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Eu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach(n=>{r.Vu.containsKey(n)||tm(r,n)})}function tm(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(lr(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),wu(r))}function Pa(r,e,t){for(const n of t)n instanceof Jf?(r.Vu.addReference(n.key,e),sE(r,n)):n instanceof Yf?(x(Wt,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,e),r.Vu.containsKey(n.key)||tm(r,n.key)):L(19791,{wu:n})}function sE(r,e){const t=e.key,n=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(n)||(x(Wt,"New document in limbo: "+t),r.Iu.add(n),wu(r))}function wu(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new M(Q.fromString(e)),n=r.fu.next();r.Au.set(n,new QI(t)),r.Ru=r.Ru.insert(t,n),ro(r.remoteStore,new ut(Me(_r(t.path)),n,"TargetPurposeLimboResolution",Ue.ce))}}function _t(r,e,t){return P(this,null,function*(){const n=O(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((u,c)=>{o.push(n.pu(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=ou.Is(c.targetId,h);i.push(m)}}))}),yield Promise.all(o),n.Pu.H_(s),yield function(c,h){return P(this,null,function*(){const f=O(c);try{yield f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>A.forEach(h,p=>A.forEach(p.Ts,v=>f.persistence.referenceDelegate.addReference(m,p.targetId,v)).next(()=>A.forEach(p.Es,v=>f.persistence.referenceDelegate.removeReference(m,p.targetId,v)))))}catch(m){if(!Gt(m))throw m;x(au,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const v=f.vs.get(p),D=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(D);f.vs=f.vs.insert(p,k)}}})}(n.localStore,i))})}function iE(r,e){return P(this,null,function*(){const t=O(r);if(!t.currentUser.isEqual(e)){x(Wt,"User change. New user:",e.toKey());const n=yield Df(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(u=>{u.forEach(c=>{c.reject(new C(R.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),yield _t(t,n.Ns)}})}function oE(r,e){const t=O(r),n=t.Au.get(e);if(n&&n.hu)return G().add(n.key);{let s=G();const i=t.Eu.get(e);if(!i)return s;for(const o of i){const u=t.Tu.get(o);s=s.unionWith(u.view.nu)}return s}}function aE(r,e){return P(this,null,function*(){const t=O(r),n=yield ki(t.localStore,e.query,!0),s=e.view.cu(n);return t.isPrimaryClient&&Pa(t,e.targetId,s.au),s})}function uE(r,e){return P(this,null,function*(){const t=O(r);return Mf(t.localStore,e).then(n=>_t(t,n))})}function cE(r,e,t,n){return P(this,null,function*(){const s=O(r),i=yield function(u,c){const h=O(u),f=O(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Xn(m,c).next(p=>p?h.localDocuments.getDocuments(m,p):A.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?yield Tr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Tu(s,e,n||null),Eu(s,e),function(u,c){O(O(u).mutationQueue).nr(c)}(s.localStore,e)):L(6720,"Unknown batchState",{Su:t}),yield _t(s,i)):x(Wt,"Cannot apply mutation batch with id: "+e)})}function lE(r,e){return P(this,null,function*(){const t=O(r);if(so(t),Au(t),e===!0&&t.gu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=yield ch(t,n.toArray());t.gu=!0,yield Ra(t.remoteStore,!0);for(const i of s)ro(t.remoteStore,i)}else if(e===!1&&t.gu!==!1){const n=[];let s=Promise.resolve();t.Eu.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(hr(t,o),cr(t.localStore,o,!0))),lr(t.remoteStore,o)}),yield s,yield ch(t,n),function(o){const u=O(o);u.Au.forEach((c,h)=>{lr(u.remoteStore,h)}),u.Vu.zr(),u.Au=new Map,u.Ru=new ae(M.comparator)}(t),t.gu=!1,yield Ra(t.remoteStore,!1)}})}function ch(r,e,t){return P(this,null,function*(){const n=O(r),s=[],i=[];for(const o of e){let u;const c=n.Eu.get(o);if(c&&c.length!==0){u=yield ur(n.localStore,Me(c[0]));for(const h of c){const f=n.Tu.get(h),m=yield aE(n,f);m.snapshot&&i.push(m.snapshot)}}else{const h=yield kf(n.localStore,o);u=yield ur(n.localStore,h),yield Iu(n,nm(h),o,!1,u.resumeToken)}s.push(u)}return n.Pu.H_(i),s})}function nm(r){return xd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function hE(r){return function(t){return O(O(t).persistence).hs()}(O(r).localStore)}function dE(r,e,t,n){return P(this,null,function*(){const s=O(r);if(s.gu)return void x(Wt,"Ignoring unexpected query state notification.");const i=s.Eu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=yield Mf(s.localStore,Od(i[0])),u=Ds.createSynthesizedRemoteEventForCurrentChange(e,t==="current",me.EMPTY_BYTE_STRING);yield _t(s,o,u);break}case"rejected":yield cr(s.localStore,e,!0),hr(s,e,n);break;default:L(64155,t)}})}function fE(r,e,t){return P(this,null,function*(){const n=so(r);if(n.gu){for(const s of e){if(n.Eu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){x(Wt,"Adding an already active target "+s);continue}const i=yield kf(n.localStore,s),o=yield ur(n.localStore,i);yield Iu(n,nm(i),o.targetId,!1,o.resumeToken),ro(n.remoteStore,o)}for(const s of t)n.Eu.has(s)&&(yield cr(n.localStore,s,!1).then(()=>{lr(n.remoteStore,s),hr(n,s)}).catch($t))}})}function so(r){const e=O(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=em.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eE.bind(null,e),e.Pu.H_=$I.bind(null,e.eventManager),e.Pu.yu=GI.bind(null,e.eventManager),e}function Au(r){const e=O(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nE.bind(null,e),e}function mE(r,e,t){const n=O(r);(function(i,o,u){return P(this,null,function*(){try{const c=yield o.getMetadata();if(yield function(v,D){const k=O(v),N=_e(D.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",U=>k.Pi.getBundleMetadata(U,D.id)).then(U=>!!U&&U.createTime.compareTo(N)>=0)}(i.localStore,c))return yield o.close(),u._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(Hf(c));const h=new yu(c,o.serializer);let f=yield o.bu();for(;f;){const p=yield h.Ga(f);p&&u._updateProgress(p),f=yield o.bu()}const m=yield h.ja(i.localStore);return yield _t(i,m.Ha,void 0),yield function(v,D){const k=O(v);return k.persistence.runTransaction("Save bundle","readwrite",N=>k.Pi.saveBundleMetadata(N,D))}(i.localStore,c),u._completeWith(m.progress),Promise.resolve(m.Ja)}catch(c){return Ge(Wt,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})})(n,e,t).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class dr{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return P(this,null,function*(){this.serializer=Rn(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),yield this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)})}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Cf(this.persistence,new Vf,e.initialUser,this.serializer)}Cu(e){return new ru(no.Vi,this.serializer)}Du(e){return new Uf}terminate(){return P(this,null,function*(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}dr.provider={build:()=>new dr};class vu extends dr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){B(this.persistence.referenceDelegate instanceof Ni,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Af(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new ru(n=>Ni.Vi(n,t),this.serializer)}}class ks extends dr{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}initialize(e){return P(this,null,function*(){yield Fo(ks.prototype,this,"initialize").call(this,e),yield this.xu.initialize(this,e),yield Au(this.xu.syncEngine),yield Tr(this.xu.remoteStore),yield this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))})}vu(e){return Cf(this.persistence,new Vf,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Af(n,e.asyncQueue,t)}Mu(e,t){const n=new T_(t,this.persistence);return new E_(e.asyncQueue,n)}Cu(e){const t=iu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new su(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,qf(),Ii(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Uf}}class io extends ks{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}initialize(e){return P(this,null,function*(){yield Fo(io.prototype,this,"initialize").call(this,e);const t=this.xu.syncEngine;this.sharedClientState instanceof Ho&&(this.sharedClientState.syncEngine={bo:cE.bind(null,t),Do:dE.bind(null,t),Co:fE.bind(null,t),hs:hE.bind(null,t),So:uE.bind(null,t)},yield this.sharedClientState.start()),yield this.persistence.zi(n=>P(this,null,function*(){yield lE(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))})}Du(e){const t=qf();if(!Ho.v(t))throw new C(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=iu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ho(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class jt{initialize(e,t){return P(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>uh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=iE.bind(null,this.syncEngine),yield Ra(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new zI}()}createDatastore(e){const t=Rn(e.databaseInfo.databaseId),n=vI(e.databaseInfo);return VI(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,u){return new DI(n,s,i,o,u)}(this.localStore,this.datastore,e.asyncQueue,t=>uh(this.syncEngine,t,0),function(){return th.v()?new th:new EI}())}createSyncEngine(e,t){return function(s,i,o,u,c,h,f){const m=new WI(s,i,o,u,c,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return P(this,null,function*(){var e,t;yield function(s){return P(this,null,function*(){const i=O(s);x(An,"RemoteStore shutting down."),i.Ia.add(5),yield Er(i),i.Aa.shutdown(),i.Va.set("Unknown")})}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()})}}jt.provider={build:()=>new jt};function lh(r,e=10240){let t=0;return{read(){return P(this,null,function*(){if(t<r.byteLength){const s={value:r.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}})},cancel(){return P(this,null,function*(){})},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class oo{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):pe("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class gE{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new Pe,this.buffer=new Uint8Array,this.Lu=function(){return new TextDecoder("utf-8")}(),this.ku().then(n=>{n&&n.Ua()?this.metadata.resolve(n.Ka.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Ka)}`))},n=>this.metadata.reject(n))}close(){return this.Bu.cancel()}getMetadata(){return P(this,null,function*(){return this.metadata.promise})}bu(){return P(this,null,function*(){return yield this.getMetadata(),this.ku()})}ku(){return P(this,null,function*(){const e=yield this.qu();if(e===null)return null;const t=this.Lu.decode(e),n=Number(t);isNaN(n)&&this.Ku(`length string (${t}) is not valid number`);const s=yield this.Uu(n);return new Wf(JSON.parse(s),e.length+n)})}$u(){return this.buffer.findIndex(e=>e===123)}qu(){return P(this,null,function*(){for(;this.$u()<0&&!(yield this.Wu()););if(this.buffer.length===0)return null;const e=this.$u();e<0&&this.Ku("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t})}Uu(e){return P(this,null,function*(){for(;this.buffer.length<e;)(yield this.Wu())&&this.Ku("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t})}Ku(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}Wu(){return P(this,null,function*(){const e=yield this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done})}}/**
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
 */class pE{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.bu();if(!n||!n.Ua())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.Ka)}`);this.metadata=n;do n=this.bu(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}Qu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const e=this.qu(),t=this.Uu(e);return new Wf(JSON.parse(t),e)}Uu(e){if(this.cursor+e>this.bundleData.length)throw new C(R.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
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
 */let _E=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}lookup(e){return P(this,null,function*(){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new C(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=yield function(s,i){return P(this,null,function*(){const o=O(s),u={documents:i.map(m=>ws(o.serializer,m))},c=yield o.jo("BatchGetDocuments",o.serializer.databaseId,Q.emptyPath(),u,i.length),h=new Map;c.forEach(m=>{const p=xy(o.serializer,m);h.set(p.key.toString(),p)});const f=[];return i.forEach(m=>{const p=h.get(m.toString());B(!!p,55234,{key:m}),f.push(p)}),f})}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t})}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ir(e,this.precondition(e))),this.writtenDocs.add(e.toString())}commit(){return P(this,null,function*(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const s=M.fromPath(n);this.mutations.push(new Wa(s,this.precondition(s)))}),yield function(n,s){return P(this,null,function*(){const i=O(n),o={writes:s.map(u=>As(i.serializer,u))};yield i.Wo("Commit",i.serializer.databaseId,Q.emptyPath(),o)})}(this.datastore,this.mutations),this.committed=!0})}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw L(50498,{Gu:e.constructor.name});t=q.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new C(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?de.exists(!1):de.updateTime(t):de.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new C(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return de.updateTime(t)}return de.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */class yE{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.zu=n.maxAttempts,this.M_=new cu(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(()=>P(this,null,function*(){const e=new _E(this.datastore),t=this.Hu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.Zu(s)}))}).catch(n=>{this.Zu(n)})}))}Hu(e){try{const t=this.updateFunction(e);return!bs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Xu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Jd(t)}return!1}}/**
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
 */const zt="FirestoreClient";class IE{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=Ui.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,o=>P(this,null,function*(){x(zt,"Received user=",o.uid),yield this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,o=>(x(zt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>P(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ar(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}function Yo(r,e){return P(this,null,function*(){r.asyncQueue.verifyOperationInProgress(),x(zt,"Initializing OfflineComponentProvider");const t=r.configuration;yield e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(s=>P(this,null,function*(){n.isEqual(s)||(yield Df(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e})}function hh(r,e){return P(this,null,function*(){r.asyncQueue.verifyOperationInProgress();const t=yield bu(r);x(zt,"Initializing OnlineComponentProvider"),yield e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>rh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>rh(e.remoteStore,s)),r._onlineComponents=e})}function bu(r){return P(this,null,function*(){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){x(zt,"Using user provided OfflineComponentProvider");try{yield Yo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ge("Error using user provided cache. Falling back to memory cache: "+t),yield Yo(r,new dr)}}else x(zt,"Using default OfflineComponentProvider"),yield Yo(r,new vu(void 0));return r._offlineComponents})}function ao(r){return P(this,null,function*(){return r._onlineComponents||(r._uninitializedComponentsProvider?(x(zt,"Using user provided OnlineComponentProvider"),yield hh(r,r._uninitializedComponentsProvider._online)):(x(zt,"Using default OnlineComponentProvider"),yield hh(r,new jt))),r._onlineComponents})}function rm(r){return bu(r).then(e=>e.persistence)}function vr(r){return bu(r).then(e=>e.localStore)}function sm(r){return ao(r).then(e=>e.remoteStore)}function Ru(r){return ao(r).then(e=>e.syncEngine)}function im(r){return ao(r).then(e=>e.datastore)}function fr(r){return P(this,null,function*(){const e=yield ao(r),t=e.eventManager;return t.onListen=HI.bind(null,e.syncEngine),t.onUnlisten=YI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XI.bind(null,e.syncEngine),t})}function EE(r){return r.asyncQueue.enqueue(()=>P(this,null,function*(){const e=yield rm(r),t=yield sm(r);return e.setNetworkEnabled(!0),function(s){const i=O(s);return i.Ia.delete(0),Ns(i)}(t)}))}function TE(r){return r.asyncQueue.enqueue(()=>P(this,null,function*(){const e=yield rm(r),t=yield sm(r);return e.setNetworkEnabled(!1),function(s){return P(this,null,function*(){const i=O(s);i.Ia.add(0),yield Er(i),i.Va.set("Offline")})}(t)}))}function wE(r,e,t,n){const s=new oo(n),i=new _u(e,s,t);return r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return mu(yield fr(r),i)})),()=>{s.Nu(),r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return gu(yield fr(r),i)}))}}function AE(r,e){const t=new Pe;return r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return function(s,i,o){return P(this,null,function*(){try{const u=yield function(h,f){const m=O(h);return m.persistence.runTransaction("read document","readonly",p=>m.localDocuments.getDocument(p,f))}(s,i);u.isFoundDocument()?o.resolve(u):u.isNoDocument()?o.resolve(null):o.reject(new C(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Ar(u,`Failed to get document '${i} from cache`);o.reject(c)}})}(yield vr(r),e,t)})),t.promise}function om(r,e,t={}){const n=new Pe;return r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return function(i,o,u,c,h){const f=new oo({next:p=>{f.Nu(),o.enqueueAndForget(()=>gu(i,m));const v=p.docs.has(u);!v&&p.fromCache?h.reject(new C(R.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&c&&c.source==="server"?h.reject(new C(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new _u(_r(u.path),f,{includeMetadataChanges:!0,qa:!0});return mu(i,m)}(yield fr(r),r.asyncQueue,e,t,n)})),n.promise}function vE(r,e){const t=new Pe;return r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return function(s,i,o){return P(this,null,function*(){try{const u=yield ki(s,i,!0),c=new Xf(i,u.ks),h=c.ru(u.documents),f=c.applyChanges(h,!1);o.resolve(f.snapshot)}catch(u){const c=Ar(u,`Failed to execute query '${i} against cache`);o.reject(c)}})}(yield vr(r),e,t)})),t.promise}function am(r,e,t={}){const n=new Pe;return r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return function(i,o,u,c,h){const f=new oo({next:p=>{f.Nu(),o.enqueueAndForget(()=>gu(i,m)),p.fromCache&&c.source==="server"?h.reject(new C(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new _u(u,f,{includeMetadataChanges:!0,qa:!0});return mu(i,m)}(yield fr(r),r.asyncQueue,e,t,n)})),n.promise}function bE(r,e,t){const n=new Pe;return r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){try{const s=yield im(r);n.resolve(function(o,u,c){return P(this,null,function*(){var k;const h=O(o),{request:f,gt:m,parent:p}=uf(h.serializer,Nd(u),c);h.connection.qo||delete f.parent;const v=(yield h.jo("RunAggregationQuery",h.serializer.databaseId,p,f,1)).filter(N=>!!N.result);B(v.length===1,64727);const D=(k=v[0].result)==null?void 0:k.aggregateFields;return Object.keys(D).reduce((N,U)=>(N[m[U]]=D[U],N),{})})}(s,e,t))}catch(s){n.reject(s)}})),n.promise}function RE(r,e){const t=new Pe;return r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return ZI(yield Ru(r),e,t)})),t.promise}function SE(r,e){const t=new oo(e);return r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return function(s,i){O(s).Ca.add(i),i.next()}(yield fr(r),t)})),()=>{t.Nu(),r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return function(s,i){O(s).Ca.delete(i)}(yield fr(r),t)}))}}function PE(r,e,t){const n=new Pe;return r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){const s=yield im(r);new yE(r.asyncQueue,s,t,e,n).ju()})),n.promise}function VE(r,e,t,n){const s=function(o,u){let c;return c=typeof o=="string"?Xd().encode(o):o,function(f,m){return new gE(f,m)}(function(f,m){if(f instanceof Uint8Array)return lh(f,m);if(f instanceof ArrayBuffer)return lh(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(t,Rn(e));r.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){mE(yield Ru(r),s,n)}))}function CE(r,e){return r.asyncQueue.enqueue(()=>P(this,null,function*(){return function(n,s){const i=O(n);return i.persistence.runTransaction("Get named query","readonly",o=>i.Pi.getNamedQuery(o,s))}(yield vr(r),e)}))}function um(r,e){return function(n,s){return new pE(n,s)}(r,e)}function DE(r,e){return r.asyncQueue.enqueue(()=>P(this,null,function*(){return function(n,s){return P(this,null,function*(){const i=O(n),o=i.indexManager,u=[];return i.persistence.runTransaction("Configure indexes","readwrite",c=>o.getFieldIndexes(c).next(h=>function(m,p,v,D,k){m=[...m],p=[...p],m.sort(v),p.sort(v);const N=m.length,U=p.length;let z=0,j=0;for(;z<U&&j<N;){const ee=v(m[j],p[z]);ee<0?k(m[j++]):ee>0?D(p[z++]):(z++,j++)}for(;z<U;)D(p[z++]);for(;j<N;)k(m[j++])}(h,s,p_,f=>{u.push(o.addFieldIndex(c,f))},f=>{u.push(o.deleteFieldIndex(c,f))})).next(()=>A.waitFor(u)))})}(yield vr(r),e)}))}function xE(r,e){return r.asyncQueue.enqueue(()=>P(this,null,function*(){return function(n,s){O(n).Cs.As=s}(yield vr(r),e)}))}function NE(r){return r.asyncQueue.enqueue(()=>P(this,null,function*(){return function(t){const n=O(t),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(yield vr(r))}))}/**
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
 */function cm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const kE="ComponentProvider",dh=new Map;function ME(r,e,t,n,s){return new J_(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,cm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
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
 */const lm="firestore.googleapis.com",fh=!0;class mh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lm,this.ssl=fh}else this.host=e.host,this.ssl=(t=e.ssl)!=null?t:fh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wf)throw new C(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cm((n=e.experimentalLongPollingOptions)!=null?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ms{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new C(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Qh;switch(n.type){case"firstParty":return new c_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return P(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=dh.get(t);n&&(x(kE,"Removing Datastore"),dh.delete(t),n.terminate())}(this),Promise.resolve()}}function hm(r,e,t,n={}){var h;r=W(r,Ms);const s=Da(e),i=r._getSettings(),o=ti(Ve({},i),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;s&&Nh(`https://${u}`),i.host!==lm&&i.host!==u&&Ge("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=ti(Ve({},i),{host:u,ssl:s,emulatorOptions:n});if(!Mt(c,o)&&(r._setSettings(c),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=Re.MOCK_USER;else{f=Ng(n.mockUserToken,(h=r._app)==null?void 0:h.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new C(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Re(p)}r._authCredentials=new o_(new Kh(f,m))}}/**
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
 */class we{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new we(this.firestore,e,this._query)}}class re{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ye(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}toJSON(){return{type:re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(bn(t,re._jsonSchema))return new re(e,n||null,new M(Q.fromString(t.referencePath)))}}re._jsonSchemaVersion="firestore/documentReference/1.0",re._jsonSchema={type:Ie("string",re._jsonSchemaVersion),referencePath:Ie("string")};class Ye extends we{constructor(e,t,n){super(e,t,_r(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new M(e))}withConverter(e){return new Ye(this.firestore,e,this._path)}}function OE(r,e,...t){if(r=Te(r),Ma("collection","path",e),r instanceof Ms){const n=Q.fromString(e,...t);return nl(n),new Ye(r,null,n)}{if(!(r instanceof re||r instanceof Ye))throw new C(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(e,...t));return nl(n),new Ye(r.firestore,null,n)}}function FE(r,e){if(r=W(r,Ms),Ma("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(R.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new we(r,null,function(n){return new mt(Q.emptyPath(),n)}(e))}function dm(r,e,...t){if(r=Te(r),arguments.length===1&&(e=Ui.newId()),Ma("doc","path",e),r instanceof Ms){const n=Q.fromString(e,...t);return tl(n),new re(r,null,new M(n))}{if(!(r instanceof re||r instanceof Ye))throw new C(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(e,...t));return tl(n),new re(r.firestore,r instanceof Ye?r.converter:null,new M(n))}}function LE(r,e){return r=Te(r),e=Te(e),(r instanceof re||r instanceof Ye)&&(e instanceof re||e instanceof Ye)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Su(r,e){return r=Te(r),e=Te(e),r instanceof we&&e instanceof we&&r.firestore===e.firestore&&Ps(r._query,e._query)&&r.converter===e.converter}/**
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
 */const gh="AsyncQueue";class ph{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new cu(this,"async_queue_retry"),this._c=()=>{const n=Ii();n&&x(gh,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Ii();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ii();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Pe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}lc(){return P(this,null,function*(){if(this.Yu.length!==0){try{yield this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Gt(e))throw e;x(gh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}})}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,pe("INTERNAL UNHANDLED ERROR: ",_h(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=fu.createAndSchedule(this,e,t,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:_h(this.nc)})}verifyOperationInProgress(){}Tc(){return P(this,null,function*(){let e;do e=this.ac,yield e;while(e!==this.ac)})}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function _h(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */class fm{constructor(){this._progressObserver={},this._taskCompletionResolver=new Pe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const BE=-1;class ie extends Ms{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new ph,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return P(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ph(e),this._firestoreClient=void 0,yield e}})}}function UE(r,e,t){t||(t=ys);const n=Na(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Mt(i,e))return s;throw new C(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new C(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wf)throw new C(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Da(e.host)&&Nh(e.host),n.initialize({options:e,instanceIdentifier:t})}function qE(r,e){const t=typeof r=="object"?r:Kp(),n=typeof r=="string"?r:e||ys,s=Na(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Dg("firestore");i&&hm(s,...i)}return s}function fe(r){if(r._terminated)throw new C(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||mm(r),r._firestoreClient}function mm(r){var n,s,i,o;const e=r._freezeSettings(),t=ME(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new IE(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}function jE(r,e){Ge("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return gm(r,jt.provider,{build:n=>new ks(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function zE(r){return P(this,null,function*(){Ge("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();gm(r,jt.provider,{build:t=>new io(t,e.cacheSizeBytes)})})}function gm(r,e,t){if((r=W(r,ie))._firestoreClient||r._terminated)throw new C(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new C(R.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},mm(r)}function $E(r){if(r._initialized&&!r._terminated)throw new C(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Pe;return r._queue.enqueueAndForgetEvenWhileRestricted(()=>P(this,null,function*(){try{yield function(n){return P(this,null,function*(){if(!it.v())return Promise.resolve();const s=n+Pf;yield it.delete(s)})}(iu(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function GE(r){return function(t){const n=new Pe;return t.asyncQueue.enqueueAndForget(()=>P(this,null,function*(){return rE(yield Ru(t),n)})),n.promise}(fe(r=W(r,ie)))}function KE(r){return EE(fe(r=W(r,ie)))}function QE(r){return TE(fe(r=W(r,ie)))}function WE(r){return Up(r.app,"firestore",r._databaseId.database),r._delete()}function Va(r,e){const t=fe(r=W(r,ie)),n=new fm;return VE(t,r._databaseId,e,n),n}function pm(r,e){return CE(fe(r=W(r,ie)),e).then(t=>t?new we(r,null,t.query):null)}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(me.fromBase64String(e))}catch(t){throw new C(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bn(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:Ie("string",Be._jsonSchemaVersion),bytes:Ie("string")};/**
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
 */class Sn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function HE(){return new Sn(ia)}/**
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
 */class Ht{constructor(e){this._methodName=e}}/**
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
 */class Xe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xe._jsonSchemaVersion}}static fromJSON(e){if(bn(e,Xe._jsonSchema))return new Xe(e.latitude,e.longitude)}}Xe._jsonSchemaVersion="firestore/geoPoint/1.0",Xe._jsonSchema={type:Ie("string",Xe._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class We{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bn(e,We._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new We(e.vectorValues);throw new C(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:Ie("string",We._jsonSchemaVersion),vectorValues:Ie("object")};/**
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
 */const JE=/^__.*__$/;class YE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new yr(e,this.data,t,this.fieldTransforms)}}class _m{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new pt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ym(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{dataSource:r})}}class uo{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new uo(Ve(Ve({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Li(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(ym(this.dataSource)&&JE.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class XE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Rn(e)}I(e,t,n,s=!1){return new uo({dataSource:e,methodName:t,targetDoc:n,path:le.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pn(r){const e=r._freezeSettings(),t=Rn(r._databaseId);return new XE(r._databaseId,!!e.ignoreUndefinedProperties,t)}function co(r,e,t,n,s,i={}){const o=r.I(i.merge||i.mergeFields?2:0,e,t,s);ku("Data must be an object, but it was:",o,n);const u=Tm(n,o);let c,h;if(i.merge)c=new qe(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const p=ft(e,m,t);if(!o.contains(p))throw new C(R.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Am(f,p)||f.push(p)}c=new qe(f),h=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=o.fieldTransforms;return new YE(new Se(u),c,h)}class Os extends Ht{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Os}}function Im(r,e,t){return new uo({dataSource:3,targetDoc:e.settings.targetDoc,methodName:r._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Pu extends Ht{_toFieldTransform(e){return new Cs(e.path,new ir)}isEqual(e){return e instanceof Pu}}class Vu extends Ht{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=Im(this,e,!0),n=this.Sc.map(i=>Vn(i,t)),s=new yn(n);return new Cs(e.path,s)}isEqual(e){return e instanceof Vu&&Mt(this.Sc,e.Sc)}}class Cu extends Ht{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=Im(this,e,!0),n=this.Sc.map(i=>Vn(i,t)),s=new In(n);return new Cs(e.path,s)}isEqual(e){return e instanceof Cu&&Mt(this.Sc,e.Sc)}}class Du extends Ht{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new or(e.serializer,jd(e.serializer,this.bc));return new Cs(e.path,t)}isEqual(e){return e instanceof Du&&this.bc===e.bc}}function xu(r,e,t,n){const s=r.I(1,e,t);ku("Data must be an object, but it was:",s,n);const i=[],o=Se.empty();Kt(n,(c,h)=>{const f=Mu(e,c,t);h=Te(h);const m=s.fc(f);if(h instanceof Os)i.push(f);else{const p=Vn(h,m);p!=null&&(i.push(f),o.set(f,p))}});const u=new qe(i);return new _m(o,u,s.fieldTransforms)}function Nu(r,e,t,n,s,i){const o=r.I(1,e,t),u=[ft(e,n,t)],c=[s];if(i.length%2!=0)throw new C(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)u.push(ft(e,i[p])),c.push(i[p+1]);const h=[],f=Se.empty();for(let p=u.length-1;p>=0;--p)if(!Am(h,u[p])){const v=u[p];let D=c[p];D=Te(D);const k=o.fc(v);if(D instanceof Os)h.push(v);else{const N=Vn(D,k);N!=null&&(h.push(v),f.set(v,N))}}const m=new qe(h);return new _m(f,m,o.fieldTransforms)}function Em(r,e,t,n=!1){return Vn(t,r.I(n?4:3,e))}function Vn(r,e){if(wm(r=Te(r)))return ku("Unsupported field value:",e,r),Tm(r,e);if(r instanceof Ht)return function(n,s){if(!ym(s.dataSource))throw s.yc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const u of n){let c=Vn(u,s.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=te.fromDate(n);return{timestampValue:ar(s.serializer,i)}}if(n instanceof te){const i=new te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ar(s.serializer,i)}}if(n instanceof Xe)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Be)return{bytesValue:tf(s.serializer,n._byteString)};if(n instanceof re){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Za(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof We)return function(o,u){const c=o instanceof We?o.toArray():o;return{mapValue:{fields:{[ja]:{stringValue:za},[nr]:{arrayValue:{values:c.map(f=>{if(typeof f!="number")throw u.yc("VectorValues must only contain numeric values.");return Qa(u.serializer,f)})}}}}}}(n,s);if(ff(n))return n._toProto(s.serializer);throw s.yc(`Unsupported field value: ${qi(n)}`)}(r,e)}function Tm(r,e){const t={};return gd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kt(r,(n,s)=>{const i=Vn(s,e.dc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function wm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof te||r instanceof Xe||r instanceof Be||r instanceof re||r instanceof Ht||r instanceof We||ff(r))}function ku(r,e,t){if(!wm(t)||!Jh(t)){const n=qi(t);throw n==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+n)}}function ft(r,e,t){if((e=Te(e))instanceof Sn)return e._internalPath;if(typeof e=="string")return Mu(r,e);throw Li("Field path arguments must be of type string or ",r,!1,void 0,t)}const ZE=new RegExp("[~\\*/\\[\\]]");function Mu(r,e,t){if(e.search(ZE)>=0)throw Li(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Sn(...e.split("."))._internalPath}catch(n){throw Li(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Li(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new C(R.INVALID_ARGUMENT,u+r+c)}function Am(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Ou{convertValue(e,t="none"){switch(Lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Kt(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[nr].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>he(o.doubleValue));return new We(t)}convertGeoPoint(e){return new Xe(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Qi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(_s(e));default:return null}}convertTimestamp(e){const t=ht(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Q.fromString(e);B(df(n),9688,{name:e});const s=new Ft(n.get(1),n.get(3)),i=new M(n.popFirst(5));return s.isEqual(t)||pe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Jt extends Ou{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,t)}}/**
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
 */function eT(){return new Os("deleteField")}function tT(){return new Pu("serverTimestamp")}function nT(...r){return new Vu("arrayUnion",r)}function rT(...r){return new Cu("arrayRemove",r)}function sT(r){return new Du("increment",r)}function iT(r){return new We(r)}/**
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
 */function oT(r){var n;const e=fe(W(r.firestore,ie)),t=(n=e._onlineComponents)==null?void 0:n.datastore.serializer;return t===void 0?null:Xi(t,Me(r._query)).ft}function aT(r,e){var i;const t=md(e,(o,u)=>new Hd(u,o.aggregateType,o._internalFieldPath)),n=fe(W(r.firestore,ie)),s=(i=n._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:uf(s,Nd(r._query),t,!0).request}const yh="@firebase/firestore",Ih="4.14.0";/**
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
 */function Kn(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}/**
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
 */class mr{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class vm{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Se({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
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
 */class vs{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e,t;return(t=(e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)!=null?t:void 0}get(e){if(this._document){const t=this._document.data.field(ft("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uT extends vs{data(){return super.data()}}/**
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
 */function bm(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fu{}class br extends Fu{}function cT(r,e,...t){let n=[];e instanceof Fu&&n.push(e),n=n.concat(t),function(i){const o=i.filter(c=>c instanceof Cn).length,u=i.filter(c=>c instanceof Rr).length;if(o>1||o>0&&u>0)throw new C(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Rr extends br{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Rr(e,t,n)}_apply(e){const t=this._parse(e);return Sm(e._query,t),new we(e.firestore,e.converter,pa(e._query,t))}_parse(e){const t=Pn(e.firestore);return function(i,o,u,c,h,f,m){let p;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new C(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Th(m,f);const D=[];for(const k of m)D.push(Eh(c,i,k));p={arrayValue:{values:D}}}else p=Eh(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Th(m,f),p=Em(u,o,m,f==="in"||f==="not-in");return J.create(h,f,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lT(r,e,t){const n=e,s=ft("where",r);return Rr._create(s,n,t)}class Cn extends Fu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Cn(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const u=i.getFlattenedFilters();for(const c of u)Sm(o,c),o=pa(o,c)}(e._query,t),new we(e.firestore,e.converter,pa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hT(...r){return r.forEach(e=>Pm("or",e)),Cn._create("or",r)}function dT(...r){return r.forEach(e=>Pm("and",e)),Cn._create("and",r)}class lo extends br{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lo(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new C(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ts(i,o)}(e._query,this._field,this._direction);return new we(e.firestore,e.converter,cy(e._query,t))}}function fT(r,e="asc"){const t=e,n=ft("orderBy",r);return lo._create(n,t)}class Fs extends br{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Fs(e,t,n)}_apply(e){return new we(e.firestore,e.converter,Vi(e._query,this._limit,this._limitType))}}function mT(r){return Yh("limit",r),Fs._create("limit",r,"F")}function gT(r){return Yh("limitToLast",r),Fs._create("limitToLast",r,"L")}class Ls extends br{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ls(e,t,n)}_apply(e){const t=Rm(e,this.type,this._docOrFields,this._inclusive);return new we(e.firestore,e.converter,ly(e._query,t))}}function pT(...r){return Ls._create("startAt",r,!0)}function _T(...r){return Ls._create("startAfter",r,!1)}class Bs extends br{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Bs(e,t,n)}_apply(e){const t=Rm(e,this.type,this._docOrFields,this._inclusive);return new we(e.firestore,e.converter,hy(e._query,t))}}function yT(...r){return Bs._create("endBefore",r,!1)}function IT(...r){return Bs._create("endAt",r,!0)}function Rm(r,e,t,n){if(t[0]=Te(t[0]),t[0]instanceof vs)return function(i,o,u,c,h){if(!c)throw new C(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const m of $n(i))if(m.field.isKeyField())f.push(pn(o,c.key));else{const p=c.data.field(m.field);if(Ki(p))throw new C(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const v=m.field.canonicalString();throw new C(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}f.push(p)}return new Ut(f,h)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Pn(r.firestore);return function(o,u,c,h,f,m){const p=o.explicitOrderBy;if(f.length>p.length)throw new C(R.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let D=0;D<f.length;D++){const k=f[D];if(p[D].field.isKeyField()){if(typeof k!="string")throw new C(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof k}`);if(!Ga(o)&&k.indexOf("/")!==-1)throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${k}' contains a slash.`);const N=o.path.child(Q.fromString(k));if(!M.isDocumentKey(N))throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const U=new M(N);v.push(pn(u,U))}else{const N=Em(c,h,k);v.push(N)}}return new Ut(v,m)}(r._query,r.firestore._databaseId,s,e,t,n)}}function Eh(r,e,t){if(typeof(t=Te(t))=="string"){if(t==="")throw new C(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ga(e)&&t.indexOf("/")!==-1)throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Q.fromString(t));if(!M.isDocumentKey(n))throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return pn(r,new M(n))}if(t instanceof re)return pn(r,t._key);throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qi(t)}.`)}function Th(r,e){if(!Array.isArray(r)||r.length===0)throw new C(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sm(r,e){const t=function(s,i){for(const o of s)for(const u of o.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Pm(r,e){if(!(e instanceof Rr||e instanceof Cn))throw new C(R.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function ho(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class Lu extends Ou{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,t)}}/**
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
 */function ET(r){return new mr("sum",ft("sum",r))}function TT(r){return new mr("avg",ft("average",r))}function Vm(){return new mr("count")}function wT(r,e){var t,n;return r instanceof mr&&e instanceof mr&&r.aggregateType===e.aggregateType&&((t=r._internalFieldPath)==null?void 0:t.canonicalString())===((n=e._internalFieldPath)==null?void 0:n.canonicalString())}function AT(r,e){return Su(r.query,e.query)&&Mt(r.data(),e.data())}/**
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
 */function vT(r){return Cm(r,{count:Vm()})}function Cm(r,e){const t=W(r.firestore,ie),n=fe(t),s=md(e,(i,o)=>new Hd(o,i.aggregateType,i._internalFieldPath));return bE(n,r._query,s).then(i=>function(u,c,h){const f=new Jt(u);return new vm(c,f,h)}(t,r,i))}class bT{constructor(e){this.kind="memory",this._onlineComponentProvider=jt.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new vu(void 0)}}toJSON(){return{kind:this.kind}}}class RT{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Dm(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class ST{constructor(){this.kind="memoryEager",this._offlineComponentProvider=dr.provider}toJSON(){return{kind:this.kind}}}class PT{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new vu(e)}}toJSON(){return{kind:this.kind}}}function VT(){return new ST}function CT(r){return new PT(r==null?void 0:r.cacheSizeBytes)}function DT(r){return new bT(r)}function xT(r){return new RT(r)}class NT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=jt.provider,this._offlineComponentProvider={build:t=>new ks(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class kT{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=jt.provider,this._offlineComponentProvider={build:t=>new io(t,e==null?void 0:e.cacheSizeBytes)}}}function Dm(r){return new NT(r==null?void 0:r.forceOwnership)}function MT(){return new kT}/**
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
 *//**
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
 */const xm="NOT SUPPORTED";class ct{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ze extends vs{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ft("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ze._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function OT(r,e,t){if(bn(e,ze._jsonSchema)){if(e.bundle===xm)throw new C(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Rn(r._databaseId),s=um(e.bundle,n),i=s.Qu(),o=new yu(s.getMetadata(),n);for(const f of i)o.Ga(f);const u=o.documents;if(u.length!==1)throw new C(R.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${u.length} documents.`);const c=Yi(n,u[0].document),h=new M(Q.fromString(e.bundleName));return new ze(r,new Lu(r),h,c,new ct(!1,!1),t||null)}}ze._jsonSchemaVersion="firestore/documentSnapshot/1.0",ze._jsonSchema={type:Ie("string",ze._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class ls extends ze{data(e={}){return super.data(e)}}class $e{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ct(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ls(this._firestore,this._userDataWriter,n.key,n,new ct(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(u=>{const c=new ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ct(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ct(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return u.type!==0&&(h=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),f=o.indexOf(u.doc.key)),{type:LT(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$e._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ui.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function FT(r,e,t){if(bn(e,$e._jsonSchema)){if(e.bundle===xm)throw new C(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Rn(r._databaseId),s=um(e.bundle,n),i=s.Qu(),o=new yu(s.getMetadata(),n);for(const p of i)o.Ga(p);if(o.queries.length!==1)throw new C(R.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const u=Zi(o.queries[0].bundledQuery),c=o.documents;let h=new gn;c.map(p=>{const v=Yi(n,p.document);h=h.add(v)});const f=vn.fromInitialDocuments(u,h,G(),!1,!1),m=new we(r,t||null,u);return new $e(r,new Lu(r),m,f)}}function LT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:r})}}function BT(r,e){return r instanceof ze&&e instanceof ze?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof $e&&e instanceof $e&&r._firestore===e._firestore&&Su(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */$e._jsonSchemaVersion="firestore/querySnapshot/1.0",$e._jsonSchema={type:Ie("string",$e._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};const UT={maxAttempts:5};/**
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
 */class Nm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Pn(e)}set(e,t,n){this._verifyNotCommitted();const s=Ct(e,this._firestore),i=ho(s.converter,t,n),o=co(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,de.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=Ct(e,this._firestore);let o;return o=typeof(t=Te(t))=="string"||t instanceof Sn?Nu(this._dataReader,"WriteBatch.update",i._key,t,n,s):xu(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,de.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ct(e,this._firestore);return this._mutations=this._mutations.concat(new Ir(t._key,de.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ct(r,e){if((r=Te(r)).firestore!==e)throw new C(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class qT{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Pn(e)}get(e){const t=Ct(e,this._firestore),n=new Lu(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return L(24041);const i=s[0];if(i.isFoundDocument())return new vs(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new vs(this._firestore,n,t._key,null,t.converter);throw L(18433,{doc:i})})}set(e,t,n){const s=Ct(e,this._firestore),i=ho(s.converter,t,n),o=co(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(e,t,n,...s){const i=Ct(e,this._firestore);let o;return o=typeof(t=Te(t))=="string"||t instanceof Sn?Nu(this._dataReader,"Transaction.update",i._key,t,n,s):xu(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Ct(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class km extends qT{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ct(e,this._firestore),n=new Jt(this._firestore);return super.get(e).then(s=>new ze(this._firestore,n,t._key,s._document,new ct(!1,!1),t.converter))}}function jT(r,e,t){r=W(r,ie);const n=Ve(Ve({},UT),t);(function(o){if(o.maxAttempts<1)throw new C(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n);const s=fe(r);return PE(s,i=>e(new km(r,i)),n)}/**
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
 */function zT(r){r=W(r,re);const e=W(r.firestore,ie),t=fe(e);return om(t,r._key).then(n=>Bu(e,r,n))}function $T(r){r=W(r,re);const e=W(r.firestore,ie),t=fe(e),n=new Jt(e);return AE(t,r._key).then(s=>new ze(e,n,r._key,s,new ct(s!==null&&s.hasLocalMutations,!0),r.converter))}function GT(r){r=W(r,re);const e=W(r.firestore,ie),t=fe(e);return om(t,r._key,{source:"server"}).then(n=>Bu(e,r,n))}function KT(r){r=W(r,we);const e=W(r.firestore,ie),t=fe(e),n=new Jt(e);return bm(r._query),am(t,r._query).then(s=>new $e(e,n,r,s))}function QT(r){r=W(r,we);const e=W(r.firestore,ie),t=fe(e),n=new Jt(e);return vE(t,r._query).then(s=>new $e(e,n,r,s))}function WT(r){r=W(r,we);const e=W(r.firestore,ie),t=fe(e),n=new Jt(e);return am(t,r._query,{source:"server"}).then(s=>new $e(e,n,r,s))}function HT(r,e,t){r=W(r,re);const n=W(r.firestore,ie),s=ho(r.converter,e,t),i=Pn(n);return Sr(n,[co(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,de.none())])}function JT(r,e,t,...n){r=W(r,re);const s=W(r.firestore,ie),i=Pn(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof Sn?Nu(i,"updateDoc",r._key,e,t,n):xu(i,"updateDoc",r._key,e),Sr(s,[o.toMutation(r._key,de.exists(!0))])}function YT(r){return Sr(W(r.firestore,ie),[new Ir(r._key,de.none())])}function XT(r,e){const t=W(r.firestore,ie),n=dm(r),s=ho(r.converter,e),i=Pn(r.firestore);return Sr(t,[co(i,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,de.exists(!1))]).then(()=>n)}function Ca(r,...e){var h,f,m;r=Te(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||Kn(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Kn(e[n])){const p=e[n];e[n]=(h=p.next)==null?void 0:h.bind(p),e[n+1]=(f=p.error)==null?void 0:f.bind(p),e[n+2]=(m=p.complete)==null?void 0:m.bind(p)}let i,o,u;if(r instanceof re)o=W(r.firestore,ie),u=_r(r._key.path),i={next:p=>{e[n]&&e[n](Bu(o,r,p))},error:e[n+1],complete:e[n+2]};else{const p=W(r,we);o=W(p.firestore,ie),u=p._query;const v=new Jt(o);i={next:D=>{e[n]&&e[n](new $e(o,v,p,D))},error:e[n+1],complete:e[n+2]},bm(r._query)}const c=fe(o);return wE(c,u,s,i)}function ZT(r,e,...t){const n=Te(r),s=function(c){const h={bundle:"",bundleName:"",bundleSource:""},f=["bundle","bundleName","bundleSource"];for(const m of f){if(!(m in c)){h.error=`snapshotJson missing required field: ${m}`;break}const p=c[m];if(typeof p!="string"){h.error=`snapshotJson field '${m}' must be a string.`;break}if(p.length===0){h.error=`snapshotJson field '${m}' cannot be an empty string.`;break}m==="bundle"?h.bundle=p:m==="bundleName"?h.bundleName=p:m==="bundleSource"&&(h.bundleSource=p)}return h}(e);if(s.error)throw new C(R.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||Kn(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let u=null;if(typeof t[o]=="object"&&Kn(t[o])){const c=t[o++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:t[o++],error:t[o++],complete:t[o++]};return function(h,f,m,p,v){let D,k=!1;return Va(h,f.bundle).then(()=>pm(h,f.bundleName)).then(U=>{U&&!k&&(v&&U.withConverter(v),D=Ca(U,m||{},p))}).catch(U=>(p.error&&p.error(U),()=>{})),()=>{k||(k=!0,D&&D())}}(n,s,i,u,t[o])}if(s.bundleSource==="DocumentSnapshot"){let u=null;if(typeof t[o]=="object"&&Kn(t[o])){const c=t[o++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:t[o++],error:t[o++],complete:t[o++]};return function(h,f,m,p,v){let D,k=!1;return Va(h,f.bundle).then(()=>{if(!k){const U=new re(h,v||null,M.fromPath(f.bundleName));D=Ca(U,m||{},p)}}).catch(U=>(p.error&&p.error(U),()=>{})),()=>{k||(k=!0,D&&D())}}(n,s,i,u,t[o])}throw new C(R.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function ew(r,e){r=W(r,ie);const t=fe(r),n=Kn(e)?e:{next:e};return SE(t,n)}function Sr(r,e){const t=fe(r);return RE(t,e)}function Bu(r,e,t){const n=t.docs.get(e._key),s=new Jt(r);return new ze(r,s,e._key,n,new ct(t.hasPendingWrites,t.fromCache),e.converter)}function tw(r){return r=W(r,ie),fe(r),new Nm(r,e=>Sr(r,e))}/**
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
 */function nw(r,e){r=W(r,ie);const t=fe(r);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return Ge("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=function(i){const o=typeof i=="string"?function(h){try{return JSON.parse(h)}catch(f){throw new C(R.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}}(i):i,u=[];if(Array.isArray(o.indexes))for(const c of o.indexes){const h=wh(c,"collectionGroup"),f=[];if(Array.isArray(c.fields))for(const m of c.fields){const p=wh(m,"fieldPath"),v=Mu("setIndexConfiguration",p);m.arrayConfig==="CONTAINS"?f.push(new fn(v,2)):m.order==="ASCENDING"?f.push(new fn(v,0)):m.order==="DESCENDING"&&f.push(new fn(v,1))}u.push(new Jn(Jn.UNKNOWN_ID,h,f,Yn.empty()))}return u}(e);return DE(t,n)}function wh(r,e){if(typeof r[e]!="string")throw new C(R.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
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
 */class Mm{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function rw(r){var s;r=W(r,ie);const e=Ah.get(r);if(e)return e;if(((s=fe(r)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const n=new Mm(r);return Ah.set(r,n),n}function sw(r){Om(r,!0)}function iw(r){Om(r,!1)}function ow(r){const e=fe(r._firestore);NE(e).then(t=>x("deleting all persistent cache indexes succeeded")).catch(t=>Ge("deleting all persistent cache indexes failed",t))}function Om(r,e){const t=fe(r._firestore);xE(t,e).then(n=>x(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>Ge(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const Ah=new WeakMap;/**
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
 */class aw{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Uu.instance.onExistenceFilterMismatch(e)}}class Uu{constructor(){this.t=new Map}static get instance(){return ci||(ci=new Uu,vy(ci)),ci}o(e){this.t.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.t;return n.set(t,e),()=>n.delete(t)}}let ci=null;(function(e,t=!0){r_($p),Ai(new hs("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),u=new ie(new a_(n.getProvider("auth-internal")),new l_(o,n.getProvider("app-check-internal")),Y_(o,s),o);return i=Ve({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),es(yh,Ih,e),es(yh,Ih,"esm2020")})();const ww=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Ou,AggregateField:mr,AggregateQuerySnapshot:vm,Bytes:Be,CACHE_SIZE_UNLIMITED:BE,CollectionReference:Ye,DocumentReference:re,DocumentSnapshot:ze,FieldPath:Sn,FieldValue:Ht,Firestore:ie,FirestoreError:C,GeoPoint:Xe,LoadBundleTask:fm,PersistentCacheIndexManager:Mm,Query:we,QueryCompositeFilterConstraint:Cn,QueryConstraint:br,QueryDocumentSnapshot:ls,QueryEndAtConstraint:Bs,QueryFieldFilterConstraint:Rr,QueryLimitConstraint:Fs,QueryOrderByConstraint:lo,QuerySnapshot:$e,QueryStartAtConstraint:Ls,SnapshotMetadata:ct,Timestamp:te,Transaction:km,VectorValue:We,WriteBatch:Nm,_AutoId:Ui,_ByteString:me,_DatabaseId:Ft,_DocumentKey:M,_EmptyAppCheckTokenProvider:h_,_EmptyAuthCredentialsProvider:Qh,_FieldPath:le,_TestingHooks:aw,_cast:W,_debugAssert:i_,_internalAggregationQueryToProtoRunAggregationQueryRequest:aT,_internalQueryToProtoQueryTarget:oT,_isBase64Available:W_,_logWarn:Ge,_validateIsNotUsedTogether:Hh,addDoc:XT,aggregateFieldEqual:wT,aggregateQuerySnapshotEqual:AT,and:dT,arrayRemove:rT,arrayUnion:nT,average:TT,clearIndexedDbPersistence:$E,collection:OE,collectionGroup:FE,connectFirestoreEmulator:hm,count:Vm,deleteAllPersistentCacheIndexes:ow,deleteDoc:YT,deleteField:eT,disableNetwork:QE,disablePersistentCacheIndexAutoCreation:iw,doc:dm,documentId:HE,documentSnapshotFromJSON:OT,enableIndexedDbPersistence:jE,enableMultiTabIndexedDbPersistence:zE,enableNetwork:KE,enablePersistentCacheIndexAutoCreation:sw,endAt:IT,endBefore:yT,ensureFirestoreConfigured:fe,executeWrite:Sr,getAggregateFromServer:Cm,getCountFromServer:vT,getDoc:zT,getDocFromCache:$T,getDocFromServer:GT,getDocs:KT,getDocsFromCache:QT,getDocsFromServer:WT,getFirestore:qE,getPersistentCacheIndexManager:rw,increment:sT,initializeFirestore:UE,limit:mT,limitToLast:gT,loadBundle:Va,memoryEagerGarbageCollector:VT,memoryLocalCache:DT,memoryLruGarbageCollector:CT,namedQuery:pm,onSnapshot:Ca,onSnapshotResume:ZT,onSnapshotsInSync:ew,or:hT,orderBy:fT,persistentLocalCache:xT,persistentMultipleTabManager:MT,persistentSingleTabManager:Dm,query:cT,queryEqual:Su,querySnapshotFromJSON:FT,refEqual:LE,runTransaction:jT,serverTimestamp:tT,setDoc:HT,setIndexConfiguration:nw,setLogLevel:s_,snapshotEqual:BT,startAfter:_T,startAt:pT,sum:ET,terminate:WE,updateDoc:JT,vector:iT,waitForPendingWrites:GE,where:lT,writeBatch:tw},Symbol.toStringTag,{value:"Module"}));export{Gp as A,qE as B,hs as C,ww as D,xh as E,gr as F,kh as L,$p as S,Ai as _,fw as a,dw as b,qp as c,Te as d,yw as e,Z as f,cw as g,Qn as h,lw as i,Rg as j,Da as k,Na as l,Cg as m,Kp as n,Mt as o,Nh as p,_w as q,es as r,mw as s,pw as t,hw as u,op as v,Dh as w,kg as x,Iw as y,gw as z};
