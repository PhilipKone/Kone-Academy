var Jn=Object.defineProperty,Yn=Object.defineProperties;var Xn=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols,Qn=Object.getPrototypeOf,ft=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,Zn=Reflect.get;var ht=(n,e,t)=>e in n?Jn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,m=(n,e)=>{for(var t in e||(e={}))ft.call(e,t)&&ht(n,t,e[t]);if(de)for(var t of de(e))pt.call(e,t)&&ht(n,t,e[t]);return n},y=(n,e)=>Yn(n,Xn(e));var he=(n,e)=>{var t={};for(var i in n)ft.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&de)for(var i of de(n))e.indexOf(i)<0&&pt.call(n,i)&&(t[i]=n[i]);return t};var U=(n,e,t)=>Zn(Qn(n),t,e);var o=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{c(t.next(l))}catch(u){r(u)}},a=l=>{try{c(t.throw(l))}catch(u){r(u)}},c=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,a);c((t=t.apply(n,e)).next())});import{r as V,L as jt,g as zt,i as ei,a as ti,_ as Y,C as X,b as Gt,S as re,E as se,c as k,d as R,e as ni,f as Bt,h as w,F as ae,j as ii,q as oe,k as He,l as Z,m as ri,n as Kt,o as _e,p as si,s as ai,t as oi,u as ci,v as li,w as ui,x as di,y as gt,z as hi,A as fi,B as pi}from"./index.esm-Bv5HeHBB.js";var gi="firebase",mi="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */V(gi,mi,"app");function Jt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ii=Jt,Yt=new se("auth","Firebase",Jt());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new jt("@firebase/auth");function _i(n,...e){we.logLevel<=Bt.WARN&&we.warn(`Auth (${re}): ${n}`,...e)}function pe(n,...e){we.logLevel<=Bt.ERROR&&we.error(`Auth (${re}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n,...e){throw qe(n,...e)}function v(n,...e){return qe(n,...e)}function Xt(n,e,t){const i=y(m({},Ii()),{[e]:t});return new se("auth","Firebase",i).create(e,{appName:n.name})}function x(n){return Xt(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qe(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Yt.create(n,...e)}function f(n,e,...t){if(!n)throw qe(e,...t)}function S(n){const e="INTERNAL ASSERTION FAILED: "+n;throw pe(e),new Error(e)}function P(n,e){n||S(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.href)||""}function wi(){return mt()==="http:"||mt()==="https:"}function mt(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wi()||Gt()||"connection"in navigator)?navigator.onLine:!0}function Ti(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.shortDelay=e,this.longDelay=t,P(t>e,"Short delay should be less than long delay!"),this.isMobile=ei()||ti()}get(){return yi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,e){P(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ki=new ce(3e4,6e4);function je(n,e){return n.tenantId&&!e.tenantId?y(m({},e),{tenantId:n.tenantId}):e}function ee(s,a,c,l){return o(this,arguments,function*(n,e,t,i,r={}){return Zt(n,r,()=>o(this,null,function*(){let u={},d={};i&&(e==="GET"?d=i:u={body:JSON.stringify(i)});const h=oe(m({key:n.config.apiKey},d)).slice(1),p=yield n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=m({method:e,headers:p},u);return ci()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&He(n.emulatorConfig.host)&&(g.credentials="include"),Qt.fetch()(yield en(n,n.config.apiHost,t,h),g)}))})}function Zt(n,e,t){return o(this,null,function*(){n._canInitEmulator=!1;const i=m(m({},vi),e);try{const r=new bi(n),s=yield Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=yield s.json();if("needConfirmation"in a)throw fe(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fe(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw fe(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw fe(n,"user-disabled",a);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xt(n,d,u);A(n,d)}}catch(r){if(r instanceof ae)throw r;A(n,"network-request-failed",{message:String(r)})}})}function Si(s,a,c,l){return o(this,arguments,function*(n,e,t,i,r={}){const u=yield ee(n,e,t,i,r);return"mfaPendingCredential"in u&&A(n,"multi-factor-auth-required",{_serverResponse:u}),u})}function en(n,e,t,i){return o(this,null,function*(){const r=`${e}${t}?${i}`,s=n,a=s.config.emulator?We(n.config,r):`${n.config.apiScheme}://${r}`;return Ei.includes(t)&&(yield s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a})}class bi{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(v(this.auth,"network-request-failed")),ki.get())})}}function fe(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=v(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n,e){return o(this,null,function*(){return ee(n,"POST","/v1/accounts:delete",e)})}function ye(n,e){return o(this,null,function*(){return ee(n,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function Pi(n,e=!1){return o(this,null,function*(){const t=R(n),i=yield t.getIdToken(e),r=ze(i);f(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:te(Oe(r.auth_time)),issuedAtTime:te(Oe(r.iat)),expirationTime:te(Oe(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function Oe(n){return Number(n)*1e3}function ze(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return pe("JWT malformed, contained fewer than 3 sections"),null;try{const r=ii(t);return r?JSON.parse(r):(pe("Failed to decode base64 JWT payload"),null)}catch(r){return pe("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function It(n){const e=ze(n);return f(e,"internal-error"),f(typeof e.exp!="undefined","internal-error"),f(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n,e,t=!1){return o(this,null,function*(){if(t)return e;try{return yield e}catch(i){throw i instanceof ae&&Ri(i)&&n.auth.currentUser===n&&(yield n.auth.signOut()),i}})}function Ri({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!=null?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>o(this,null,function*(){yield this.iteration()}),t)}iteration(){return o(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=te(this.lastLoginAt),this.creationTime=te(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */function Te(n){return o(this,null,function*(){var h;const e=n.auth,t=yield n.getIdToken(),i=yield ie(n,ye(e,{idToken:t}));f(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const s=(h=r.providerUserInfo)!=null&&h.length?tn(r.providerUserInfo):[],a=Oi(n.providerData,s),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new xe(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)})}function Ni(n){return o(this,null,function*(){const e=R(n);yield Te(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function Oi(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function tn(n){return n.map(i=>{var r=i,{providerId:e}=r,t=he(r,["providerId"]);return{providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n,e){return o(this,null,function*(){const t=yield Zt(n,{},()=>o(this,null,function*(){const i=oe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,a=yield en(n,r,"/v1/token",`key=${s}`),c=yield n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&He(n.emulatorConfig.host)&&(l.credentials="include"),Qt.fetch()(a,l)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function Mi(n,e){return o(this,null,function*(){return ee(n,"POST","/v2/accounts:revokeToken",je(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){f(e.idToken,"internal-error"),f(typeof e.idToken!="undefined","internal-error"),f(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):It(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){f(e.length!==0,"internal-error");const t=It(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return o(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(f(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return o(this,null,function*(){const{accessToken:i,refreshToken:r,expiresIn:s}=yield Li(e,t);this.updateTokensAndExpiration(i,r,Number(s))})}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,a=new z;return i&&(f(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(f(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),s&&(f(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new z,this.toJSON())}_performRefresh(){return S("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(n,e){f(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class T{constructor(s){var a=s,{uid:e,auth:t,stsTokenManager:i}=a,r=he(a,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ci(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new xe(r.createdAt||void 0,r.lastLoginAt||void 0)}getIdToken(e){return o(this,null,function*(){const t=yield ie(this,this.stsTokenManager.getToken(this.auth,e));return f(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return Pi(this,e)}reload(){return Ni(this)}_assign(e){this!==e&&(f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>m({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new T(y(m({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return o(this,null,function*(){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&(yield Te(this)),yield this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)})}delete(){return o(this,null,function*(){if(k(this.auth.app))return Promise.reject(x(this.auth));const e=yield this.getIdToken();return yield ie(this,Ai(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return y(m({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>m({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var rt,st,at,ot,ct,lt,ut,dt;const i=(rt=t.displayName)!=null?rt:void 0,r=(st=t.email)!=null?st:void 0,s=(at=t.phoneNumber)!=null?at:void 0,a=(ot=t.photoURL)!=null?ot:void 0,c=(ct=t.tenantId)!=null?ct:void 0,l=(lt=t._redirectEventId)!=null?lt:void 0,u=(ut=t.createdAt)!=null?ut:void 0,d=(dt=t.lastLoginAt)!=null?dt:void 0,{uid:h,emailVerified:p,isAnonymous:g,providerData:C,stsTokenManager:it}=t;f(h&&it,e,"internal-error");const Bn=z.fromJSON(this.name,it);f(typeof h=="string",e,"internal-error"),N(i,e.name),N(r,e.name),f(typeof p=="boolean",e,"internal-error"),f(typeof g=="boolean",e,"internal-error"),N(s,e.name),N(a,e.name),N(c,e.name),N(l,e.name),N(u,e.name),N(d,e.name);const Ne=new T({uid:h,auth:e,email:r,emailVerified:p,displayName:i,isAnonymous:g,photoURL:a,phoneNumber:s,tenantId:c,stsTokenManager:Bn,createdAt:u,lastLoginAt:d});return C&&Array.isArray(C)&&(Ne.providerData=C.map(Kn=>m({},Kn))),l&&(Ne._redirectEventId=l),Ne}static _fromIdTokenResponse(e,t,i=!1){return o(this,null,function*(){const r=new z;r.updateFromServerResponse(t);const s=new T({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return yield Te(s),s})}static _fromGetAccountInfoResponse(e,t,i){return o(this,null,function*(){const r=t.users[0];f(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?tn(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),c=new z;c.updateFromIdToken(i);const l=new T({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new xe(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Map;function b(n){P(n instanceof Function,"Expected a class definition");let e=_t.get(n);return e?(P(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_t.set(n,e),e)}/**
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
 */class nn{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return o(this,null,function*(){return!0})}_set(e,t){return o(this,null,function*(){this.storage[e]=t})}_get(e){return o(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return o(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}nn.type="NONE";const wt=nn;/**
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
 */function ge(n,e,t){return`firebase:${n}:${e}:${t}`}class G{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ge(this.userKey,r.apiKey,s),this.fullPersistenceKey=ge("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return o(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield ye(this.auth,{idToken:e}).catch(()=>{});return t?T._fromGetAccountInfoResponse(this.auth,t,e):null}return T._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return o(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,i="authUser"){return o(this,null,function*(){if(!t.length)return new G(b(wt),e,i);const r=(yield Promise.all(t.map(u=>o(this,null,function*(){if(yield u._isAvailable())return u})))).filter(u=>u);let s=r[0]||b(wt);const a=ge(i,e.config.apiKey,e.name);let c=null;for(const u of t)try{const d=yield u._get(a);if(d){let h;if(typeof d=="string"){const p=yield ye(e,{idToken:d}).catch(()=>{});if(!p)break;h=yield T._fromGetAccountInfoResponse(e,p,d)}else h=T._fromJSON(e,d);u!==s&&(c=h),s=u;break}}catch(d){}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new G(s,e,i):(s=l[0],c&&(yield s._set(a,c.toJSON())),yield Promise.all(t.map(u=>o(this,null,function*(){if(u!==s)try{yield u._remove(a)}catch(d){}}))),new G(s,e,i))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(on(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ln(e))return"Blackberry";if(un(e))return"Webos";if(sn(e))return"Safari";if((e.includes("chrome/")||an(e))&&!e.includes("edge/"))return"Chrome";if(cn(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function rn(n=w()){return/firefox\//i.test(n)}function sn(n=w()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function an(n=w()){return/crios\//i.test(n)}function on(n=w()){return/iemobile/i.test(n)}function cn(n=w()){return/android/i.test(n)}function ln(n=w()){return/blackberry/i.test(n)}function un(n=w()){return/webos/i.test(n)}function Ge(n=w()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Di(n=w()){var e;return Ge(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ui(){return ai()&&document.documentMode===10}function dn(n=w()){return Ge(n)||cn(n)||un(n)||ln(n)||/windows phone/i.test(n)||on(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(n,e=[]){let t;switch(n){case"Browser":t=yt(w());break;case"Worker":t=`${yt(w())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${re}/${i}`}/**
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
 */class Fi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}runMiddleware(e){return o(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)yield i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}})}}/**
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
 */function xi(t){return o(this,arguments,function*(n,e={}){return ee(n,"GET","/v2/passwordPolicy",je(n,e))})}/**
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
 */const Vi=6;class $i{constructor(e){var i,r,s,a;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=t.minPasswordLength)!=null?i:Vi,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))!=null?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!=null?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,s,a,c,l;const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=(i=t.meetsMinPasswordLength)!=null?i:!0),t.isValid&&(t.isValid=(r=t.meetsMaxPasswordLength)!=null?r:!0),t.isValid&&(t.isValid=(s=t.containsLowercaseLetter)!=null?s:!0),t.isValid&&(t.isValid=(a=t.containsUppercaseLetter)!=null?a:!0),t.isValid&&(t.isValid=(c=t.containsNumericCharacter)!=null?c:!0),t.isValid&&(t.isValid=(l=t.containsNonAlphanumericCharacter)!=null?l:!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tt(this),this.idTokenSubscription=new Tt(this),this.beforeStateQueue=new Fi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=b(t)),this._initializationPromise=this.queue(()=>o(this,null,function*(){var i,r,s;if(!this._deleted&&(this.persistenceManager=yield G.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(a){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return o(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return o(this,null,function*(){try{const t=yield ye(this,{idToken:e}),i=yield T._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return o(this,null,function*(){var s;if(k(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=yield this.assertedPersistence.getCurrentUser();let i=t,r=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,c=i==null?void 0:i._redirectEventId,l=yield this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{yield this.beforeStateQueue.runMiddleware(i)}catch(a){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return f(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)})}tryRedirectSignIn(e){return o(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(i){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return o(this,null,function*(){try{yield Te(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=Ti()}_delete(){return o(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return o(this,null,function*(){if(k(this.app))return Promise.reject(x(this));const t=e?R(e):null;return t&&f(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return o(this,null,function*(){if(!this._deleted)return e&&f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>o(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return o(this,null,function*(){return k(this.app)?Promise.reject(x(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return k(this.app)?Promise.reject(x(this)):this.queue(()=>o(this,null,function*(){yield this.assertedPersistence.setPersistence(b(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return o(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return o(this,null,function*(){const e=yield xi(this),t=new $i(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new se("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}revokeAccessToken(e){return o(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),yield Mi(this,i)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}_setRedirectUser(e,t){return o(this,null,function*(){const i=yield this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return o(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&b(e)||this._popupRedirectResolver;f(t,this,"argument-error"),this.redirectPersistenceManager=yield G.create(this,[b(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return o(this,null,function*(){var t,i;return this._isInitialized&&(yield this.queue(()=>o(this,null,function*(){}))),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return o(this,null,function*(){if(e===this.currentUser)return this.queue(()=>o(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(i=(t=this.currentUser)==null?void 0:t.uid)!=null?i:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(f(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,r);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}directlySetCurrentUser(e){return o(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return o(this,null,function*(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=yield(r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=yield this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e})}_getAppCheckToken(){return o(this,null,function*(){var t;if(k(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=yield(t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken();return e!=null&&e.error&&_i(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token})}}function Be(n){return R(n)}class Tt{constructor(e){this.auth=e,this.observer=null,this.addObserver=ni(t=>this.observer=t)}get next(){return f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke={loadJS(){return o(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qi(n){Ke=n}function Wi(n){return Ke.loadJS(n)}function ji(){return Ke.gapiScript}function zi(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n,e){const t=Z(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(_e(s,e!=null?e:{}))return r;A(r,"already-initialized")}return t.initialize({options:e})}function Bi(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(b);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ki(n,e,t){const i=Be(n);f(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=fn(e),{host:a,port:c}=Ji(e),l=c===null?"":`:${c}`,u={url:`${s}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){f(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),f(_e(u,i.config.emulator)&&_e(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,He(a)?si(`${s}//${a}${l}`):Yi()}function fn(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ji(n){const e=fn(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:vt(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:vt(a)}}}function vt(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Yi(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n,e){return o(this,null,function*(){return Si(n,"POST","/v1/accounts:signInWithIdp",je(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="http://localhost";class $ extends pn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):A("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=c,s=he(c,["providerId","signInMethod"]);if(!i||!r)return null;const a=new $(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return B(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,B(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,B(e,t)}buildRequest(){const e={requestUri:Xi,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=oe(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class le extends gn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O extends le{constructor(){super("facebook.com")}static credential(e){return $._fromParams({providerId:O.PROVIDER_ID,signInMethod:O.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return O.credentialFromTaggedObject(e)}static credentialFromError(e){return O.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return O.credential(e.oauthAccessToken)}catch(t){return null}}}O.FACEBOOK_SIGN_IN_METHOD="facebook.com";O.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L extends le{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $._fromParams({providerId:L.PROVIDER_ID,signInMethod:L.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return L.credentialFromTaggedObject(e)}static credentialFromError(e){return L.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return L.credential(t,i)}catch(r){return null}}}L.GOOGLE_SIGN_IN_METHOD="google.com";L.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M extends le{constructor(){super("github.com")}static credential(e){return $._fromParams({providerId:M.PROVIDER_ID,signInMethod:M.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return M.credentialFromTaggedObject(e)}static credentialFromError(e){return M.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return M.credential(e.oauthAccessToken)}catch(t){return null}}}M.GITHUB_SIGN_IN_METHOD="github.com";M.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends le{constructor(){super("twitter.com")}static credential(e,t){return $._fromParams({providerId:D.PROVIDER_ID,signInMethod:D.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return D.credentialFromTaggedObject(e)}static credentialFromError(e){return D.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return D.credential(t,i)}catch(r){return null}}}D.TWITTER_SIGN_IN_METHOD="twitter.com";D.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,i,r=!1){return o(this,null,function*(){const s=yield T._fromIdTokenResponse(e,i,r),a=Et(i);return new Q({user:s,providerId:a,_tokenResponse:i,operationType:t})})}static _forOperation(e,t,i){return o(this,null,function*(){yield e._updateTokensIfNecessary(i,!0);const r=Et(i);return new Q({user:e,providerId:r,_tokenResponse:i,operationType:t})})}}function Et(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends ae{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ve.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!=null?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new ve(e,t,i,r)}}function mn(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ve._fromErrorAndOperation(n,s,e,i):s})}function Qi(n,e,t=!1){return o(this,null,function*(){const i=yield ie(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return Q._forOperation(n,"link",i)})}/**
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
 */function Zi(n,e,t=!1){return o(this,null,function*(){const{auth:i}=n;if(k(i.app))return Promise.reject(x(i));const r="reauthenticate";try{const s=yield ie(n,mn(i,r,e,n),t);f(s.idToken,i,"internal-error");const a=ze(s.idToken);f(a,i,"internal-error");const{sub:c}=a;return f(n.uid===c,i,"user-mismatch"),Q._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&A(i,"user-mismatch"),s}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n,e,t=!1){return o(this,null,function*(){if(k(n.app))return Promise.reject(x(n));const i="signIn",r=yield mn(n,i,e),s=yield Q._fromIdTokenResponse(n,i,r);return t||(yield n._updateCurrentUser(s.user)),s})}function tr(n,e,t,i){return R(n).onIdTokenChanged(e,t,i)}function nr(n,e,t){return R(n).beforeAuthStateChanged(e,t)}const Ee="__sak";/**
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
 */class In{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ee,"1"),this.storage.removeItem(Ee),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=1e3,rr=10;class K extends In{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);Ui()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,rr):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ir)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return o(this,null,function*(){yield U(K.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return o(this,null,function*(){const t=yield U(K.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return o(this,null,function*(){yield U(K.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}K.type="LOCAL";const sr=K;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends In{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_n.type="SESSION";const wn=_n;/**
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
 */function ar(n){return Promise.all(n.map(e=>o(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
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
 */class Ae{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Ae(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}handleEvent(e){return o(this,null,function*(){const t=e,{eventId:i,eventType:r,data:s}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const c=Array.from(a).map(u=>o(this,null,function*(){return u(t.origin,s)})),l=yield ar(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ae.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class or{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,i=50){return o(this,null,function*(){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const u=Je("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return window}function cr(n){E().location.href=n}/**
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
 */function yn(){return typeof E().WorkerGlobalScope!="undefined"&&typeof E().importScripts=="function"}function lr(){return o(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function ur(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function dr(){return yn()?self:null}/**
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
 */const Tn="firebaseLocalStorageDb",hr=1,ke="firebaseLocalStorage",vn="fbase_key";class ue{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pe(n,e){return n.transaction([ke],e?"readwrite":"readonly").objectStore(ke)}function fr(){const n=indexedDB.deleteDatabase(Tn);return new ue(n).toPromise()}function Ve(){const n=indexedDB.open(Tn,hr);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ke,{keyPath:vn})}catch(r){t(r)}}),n.addEventListener("success",()=>o(this,null,function*(){const i=n.result;i.objectStoreNames.contains(ke)?e(i):(i.close(),yield fr(),e(yield Ve()))}))})}function kt(n,e,t){return o(this,null,function*(){const i=Pe(n,!0).put({[vn]:e,value:t});return new ue(i).toPromise()})}function pr(n,e){return o(this,null,function*(){const t=Pe(n,!1).get(e),i=yield new ue(t).toPromise();return i===void 0?null:i.value})}function St(n,e){const t=Pe(n,!0).delete(e);return new ue(t).toPromise()}const gr=800,mr=3;class En{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return o(this,null,function*(){return this.db?this.db:(this.db=yield Ve(),this.db)})}_withRetries(e){return o(this,null,function*(){let t=0;for(;;)try{const i=yield this._openDb();return yield e(i)}catch(i){if(t++>mr)throw i;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return o(this,null,function*(){return yn()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return o(this,null,function*(){this.receiver=Ae._getInstance(dr()),this.receiver._subscribe("keyChanged",(e,t)=>o(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>o(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return o(this,null,function*(){var t,i;if(this.activeServiceWorker=yield lr(),!this.activeServiceWorker)return;this.sender=new or(this.activeServiceWorker);const e=yield this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return o(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||ur()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return o(this,null,function*(){try{if(!indexedDB)return!1;const e=yield Ve();return yield kt(e,Ee,"1"),yield St(e,Ee),!0}catch(e){}return!1})}_withPendingWrite(e){return o(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return o(this,null,function*(){return this._withPendingWrite(()=>o(this,null,function*(){return yield this._withRetries(i=>kt(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return o(this,null,function*(){const t=yield this._withRetries(i=>pr(i,e));return this.localCache[e]=t,t})}_remove(e){return o(this,null,function*(){return this._withPendingWrite(()=>o(this,null,function*(){return yield this._withRetries(t=>St(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return o(this,null,function*(){const e=yield this._withRetries(r=>{const s=Pe(r,!1).getAll();return new ue(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t})}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>o(this,null,function*(){return this._poll()}),gr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}En.type="LOCAL";const Ir=En;new ce(3e4,6e4);/**
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
 */function _r(n,e){return e?b(e):(f(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ye extends pn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return B(e,this._buildIdpRequest())}_linkToIdToken(e,t){return B(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return B(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wr(n){return er(n.auth,new Ye(n),n.bypassAuthState)}function yr(n){const{auth:e,user:t}=n;return f(t,e,"internal-error"),Zi(t,new Ye(n),n.bypassAuthState)}function Tr(n){return o(this,null,function*(){const{auth:e,user:t}=n;return f(t,e,"internal-error"),Qi(t,new Ye(n),n.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>o(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}}))}onAuthEvent(e){return o(this,null,function*(){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(c)(l))}catch(u){this.reject(u)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wr;case"linkViaPopup":case"linkViaRedirect":return Tr;case"reauthViaPopup":case"reauthViaRedirect":return yr;default:A(this.auth,"internal-error")}}resolve(e){P(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){P(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new ce(2e3,1e4);class j extends kn{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,j.currentPopupAction&&j.currentPopupAction.cancel(),j.currentPopupAction=this}executeNotNull(){return o(this,null,function*(){const e=yield this.execute();return f(e,this.auth,"internal-error"),e})}onExecution(){return o(this,null,function*(){P(this.filter.length===1,"Popup operations only handle one event");const e=Je();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(v(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,j.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vr.get())};e()}}j.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="pendingRedirect",me=new Map;class ne extends kn{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}execute(){return o(this,null,function*(){let e=me.get(this.auth._key());if(!e){try{const i=(yield kr(this.resolver,this.auth))?yield U(ne.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}me.set(this.auth._key(),e)}return this.bypassAuthState||me.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return o(this,null,function*(){if(e.type==="signInViaRedirect")return U(ne.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,U(ne.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return o(this,null,function*(){})}cleanUp(){}}function kr(n,e){return o(this,null,function*(){const t=Ar(e),i=br(n);if(!(yield i._isAvailable()))return!1;const r=(yield i._get(t))==="true";return yield i._remove(t),r})}function Sr(n,e){me.set(n._key(),e)}function br(n){return b(n._redirectPersistence)}function Ar(n){return ge(Er,n.config.apiKey,n.name)}function Pr(n,e,t=!1){return o(this,null,function*(){if(k(n.app))return Promise.reject(x(n));const i=Be(n),r=_r(i,e),a=yield new ne(i,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,yield i._persistUserIfCurrent(a.user),yield i._setRedirectUser(null,e)),a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=10*60*1e3;class Cr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Sn(e)){const r=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rr&&this.cachedEventUids.clear(),this.cachedEventUids.has(bt(e))}saveEventToCache(e){this.cachedEventUids.add(bt(e)),this.lastProcessedEventTime=Date.now()}}function bt(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sn({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nr(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sn(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){return o(this,arguments,function*(n,e={}){return ee(n,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mr=/^https?/;function Dr(n){return o(this,null,function*(){if(n.config.emulator)return;const{authorizedDomains:e}=yield Or(n);for(const t of e)try{if(Ur(t))return}catch(i){}A(n,"unauthorized-domain")})}function Ur(n){const e=Fe(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!Mr.test(t))return!1;if(Lr.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Fr=new ce(3e4,6e4);function At(){const n=E().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xr(n){return new Promise((e,t)=>{var r,s,a;function i(){At(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{At(),t(v(n,"network-request-failed"))},timeout:Fr.get()})}if((s=(r=E().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=E().gapi)!=null&&a.load)i();else{const c=zi("iframefcb");return E()[c]=()=>{gapi.load?i():t(v(n,"network-request-failed"))},Wi(`${ji()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ie=null,e})}let Ie=null;function Vr(n){return Ie=Ie||xr(n),Ie}/**
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
 */const $r=new ce(5e3,15e3),Hr="__/auth/iframe",qr="emulator/auth/iframe",Wr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zr(n){const e=n.config;f(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?We(e,qr):`https://${n.config.authDomain}/${Hr}`,i={apiKey:e.apiKey,appName:n.name,v:re},r=jr.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${oe(i).slice(1)}`}function Gr(n){return o(this,null,function*(){const e=yield Vr(n),t=E().gapi;return f(t,n,"internal-error"),e.open({where:document.body,url:zr(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wr,dontclear:!0},i=>new Promise((r,s)=>o(this,null,function*(){yield i.restyle({setHideOnLeave:!1});const a=v(n,"network-request-failed"),c=E().setTimeout(()=>{s(a)},$r.get());function l(){E().clearTimeout(c),r(i)}i.ping(l).then(l,()=>{s(a)})})))})}/**
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
 */const Br={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kr=500,Jr=600,Yr="_blank",Xr="http://localhost";class Pt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qr(n,e,t,i=Kr,r=Jr){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=y(m({},Br),{width:i.toString(),height:r.toString(),top:s,left:a}),u=w().toLowerCase();t&&(c=an(u)?Yr:t),rn(u)&&(e=e||Xr,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[g,C])=>`${p}${g}=${C},`,"");if(Di(u)&&c!=="_self")return Zr(e||"",c),new Pt(null);const h=window.open(e||"",c,d);f(h,n,"popup-blocked");try{h.focus()}catch(p){}return new Pt(h)}function Zr(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const es="__/auth/handler",ts="emulator/auth/handler",ns=encodeURIComponent("fac");function Rt(n,e,t,i,r,s){return o(this,null,function*(){f(n.config.authDomain,n,"auth-domain-config-required"),f(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:re,eventId:r};if(e instanceof gn){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",oi(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))a[d]=h}if(e instanceof le){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=yield n._getAppCheckToken(),u=l?`#${ns}=${encodeURIComponent(l)}`:"";return`${is(n)}?${oe(c).slice(1)}${u}`})}function is({config:n}){return n.emulator?We(n,ts):`https://${n.authDomain}/${es}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="webStorageSupport";class rs{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wn,this._completeRedirectFn=Pr,this._overrideRedirectResult=Sr}_openPopup(e,t,i,r){return o(this,null,function*(){var a;P((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=yield Rt(e,t,i,Fe(),r);return Qr(e,s,Je())})}_openRedirect(e,t,i,r){return o(this,null,function*(){yield this._originValidation(e);const s=yield Rt(e,t,i,Fe(),r);return cr(s),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(P(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}initAndGetManager(e){return o(this,null,function*(){const t=yield Gr(e),i=new Cr(e);return t.register("authEvent",r=>(f(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Le,{type:Le},r=>{var a;const s=(a=r==null?void 0:r[0])==null?void 0:a[Le];s!==void 0&&t(!!s),A(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dn()||sn()||Ge()}}const ss=rs;var Ct="@firebase/auth",Nt="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}getToken(e){return o(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cs(n){Y(new X("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=i.options;f(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hn(n)},u=new Hi(i,r,s,l);return Bi(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Y(new X("auth-internal",e=>{const t=Be(e.getProvider("auth").getImmediate());return(i=>new as(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),V(Ct,Nt,os(n)),V(Ct,Nt,"esm2020")}/**
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
 */const ls=5*60,us=zt("authIdTokenMaxAge")||ls;let Ot=null;const ds=n=>e=>o(void 0,null,function*(){const t=e&&(yield e.getIdTokenResult()),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>us)return;const r=t==null?void 0:t.token;Ot!==r&&(Ot=r,yield fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});function hs(n=Kt()){const e=Z(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Gi(n,{popupRedirectResolver:ss,persistence:[Ir,sr,wn]}),i=zt("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const a=ds(s.toString());nr(t,a,()=>a(t.currentUser)),tr(t,c=>a(c))}}const r=ri("auth");return r&&Ki(t,`http://${r}`),t}function fs(){var n,e;return(e=(n=document.getElementsByTagName("head"))==null?void 0:n[0])!=null?e:document}qi({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=v("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",fs().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cs("Browser");const bn="@firebase/installations",Xe="0.6.21";/**
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
 */const An=1e4,Pn=`w:${Xe}`,Rn="FIS_v2",ps="https://firebaseinstallations.googleapis.com/v1",gs=60*60*1e3,ms="installations",Is="Installations";/**
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
 */const _s={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},H=new se(ms,Is,_s);function Cn(n){return n instanceof ae&&n.code.includes("request-failed")}/**
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
 */function Nn({projectId:n}){return`${ps}/projects/${n}/installations`}function On(n){return{token:n.token,requestStatus:2,expiresIn:ys(n.expiresIn),creationTime:Date.now()}}function Ln(n,e){return o(this,null,function*(){const i=(yield e.json()).error;return H.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})})}function Mn({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ws(n,{refreshToken:e}){const t=Mn(n);return t.append("Authorization",Ts(e)),t}function Dn(n){return o(this,null,function*(){const e=yield n();return e.status>=500&&e.status<600?n():e})}function ys(n){return Number(n.replace("s","000"))}function Ts(n){return`${Rn} ${n}`}/**
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
 */function vs(i,r){return o(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Nn(n),a=Mn(n),c=e.getImmediate({optional:!0});if(c){const h=yield c.getHeartbeatsHeader();h&&a.append("x-firebase-client",h)}const l={fid:t,authVersion:Rn,appId:n.appId,sdkVersion:Pn},u={method:"POST",headers:a,body:JSON.stringify(l)},d=yield Dn(()=>fetch(s,u));if(d.ok){const h=yield d.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:On(h.authToken)}}else throw yield Ln("Create Installation",d)})}/**
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
 */function Un(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Es(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ks=/^[cdef][\w-]{21}$/,$e="";function Ss(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=bs(n);return ks.test(t)?t:$e}catch(n){return $e}}function bs(n){return Es(n).substr(0,22)}/**
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
 */function Re(n){return`${n.appName}!${n.appId}`}/**
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
 */const Fn=new Map;function xn(n,e){const t=Re(n);Vn(t,e),As(t,e)}function Vn(n,e){const t=Fn.get(n);if(t)for(const i of t)i(e)}function As(n,e){const t=Ps();t&&t.postMessage({key:n,fid:e}),Rs()}let F=null;function Ps(){return!F&&"BroadcastChannel"in self&&(F=new BroadcastChannel("[Firebase] FID Change"),F.onmessage=n=>{Vn(n.data.key,n.data.fid)}),F}function Rs(){Fn.size===0&&F&&(F.close(),F=null)}/**
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
 */const Cs="firebase-installations-database",Ns=1,q="firebase-installations-store";let Me=null;function Qe(){return Me||(Me=li(Cs,Ns,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(q)}}})),Me}function Se(n,e){return o(this,null,function*(){const t=Re(n),r=(yield Qe()).transaction(q,"readwrite"),s=r.objectStore(q),a=yield s.get(t);return yield s.put(e,t),yield r.done,(!a||a.fid!==e.fid)&&xn(n,e.fid),e})}function $n(n){return o(this,null,function*(){const e=Re(n),i=(yield Qe()).transaction(q,"readwrite");yield i.objectStore(q).delete(e),yield i.done})}function Ce(n,e){return o(this,null,function*(){const t=Re(n),r=(yield Qe()).transaction(q,"readwrite"),s=r.objectStore(q),a=yield s.get(t),c=e(a);return c===void 0?yield s.delete(t):yield s.put(c,t),yield r.done,c&&(!a||a.fid!==c.fid)&&xn(n,c.fid),c})}/**
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
 */function Ze(n){return o(this,null,function*(){let e;const t=yield Ce(n.appConfig,i=>{const r=Os(i),s=Ls(n,r);return e=s.registrationPromise,s.installationEntry});return t.fid===$e?{installationEntry:yield e}:{installationEntry:t,registrationPromise:e}})}function Os(n){const e=n||{fid:Ss(),registrationStatus:0};return Hn(e)}function Ls(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(H.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Ms(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ds(n)}:{installationEntry:e}}function Ms(n,e){return o(this,null,function*(){try{const t=yield vs(n,e);return Se(n.appConfig,t)}catch(t){throw Cn(t)&&t.customData.serverCode===409?yield $n(n.appConfig):yield Se(n.appConfig,{fid:e.fid,registrationStatus:0}),t}})}function Ds(n){return o(this,null,function*(){let e=yield Lt(n.appConfig);for(;e.registrationStatus===1;)yield Un(100),e=yield Lt(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=yield Ze(n);return i||t}return e})}function Lt(n){return Ce(n,e=>{if(!e)throw H.create("installation-not-found");return Hn(e)})}function Hn(n){return Us(n)?{fid:n.fid,registrationStatus:0}:n}function Us(n){return n.registrationStatus===1&&n.registrationTime+An<Date.now()}/**
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
 */function Fs(i,r){return o(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},t){const s=xs(n,t),a=ws(n,t),c=e.getImmediate({optional:!0});if(c){const h=yield c.getHeartbeatsHeader();h&&a.append("x-firebase-client",h)}const l={installation:{sdkVersion:Pn,appId:n.appId}},u={method:"POST",headers:a,body:JSON.stringify(l)},d=yield Dn(()=>fetch(s,u));if(d.ok){const h=yield d.json();return On(h)}else throw yield Ln("Generate Auth Token",d)})}function xs(n,{fid:e}){return`${Nn(n)}/${e}/authTokens:generate`}/**
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
 */function et(n,e=!1){return o(this,null,function*(){let t;const i=yield Ce(n.appConfig,s=>{if(!qn(s))throw H.create("not-registered");const a=s.authToken;if(!e&&Hs(a))return s;if(a.requestStatus===1)return t=Vs(n,e),s;{if(!navigator.onLine)throw H.create("app-offline");const c=Ws(s);return t=$s(n,c),c}});return t?yield t:i.authToken})}function Vs(n,e){return o(this,null,function*(){let t=yield Mt(n.appConfig);for(;t.authToken.requestStatus===1;)yield Un(100),t=yield Mt(n.appConfig);const i=t.authToken;return i.requestStatus===0?et(n,e):i})}function Mt(n){return Ce(n,e=>{if(!qn(e))throw H.create("not-registered");const t=e.authToken;return js(t)?y(m({},e),{authToken:{requestStatus:0}}):e})}function $s(n,e){return o(this,null,function*(){try{const t=yield Fs(n,e),i=y(m({},e),{authToken:t});return yield Se(n.appConfig,i),t}catch(t){if(Cn(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))yield $n(n.appConfig);else{const i=y(m({},e),{authToken:{requestStatus:0}});yield Se(n.appConfig,i)}throw t}})}function qn(n){return n!==void 0&&n.registrationStatus===2}function Hs(n){return n.requestStatus===2&&!qs(n)}function qs(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+gs}function Ws(n){const e={requestStatus:1,requestTime:Date.now()};return y(m({},n),{authToken:e})}function js(n){return n.requestStatus===1&&n.requestTime+An<Date.now()}/**
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
 */function zs(n){return o(this,null,function*(){const e=n,{installationEntry:t,registrationPromise:i}=yield Ze(e);return i?i.catch(console.error):et(e).catch(console.error),t.fid})}/**
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
 */function Gs(n,e=!1){return o(this,null,function*(){const t=n;return yield Bs(t),(yield et(t,e)).token})}function Bs(n){return o(this,null,function*(){const{registrationPromise:e}=yield Ze(n);e&&(yield e)})}/**
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
 */function Ks(n){if(!n||!n.options)throw De("App Configuration");if(!n.name)throw De("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw De(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function De(n){return H.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="installations",Js="installations-internal",Ys=n=>{const e=n.getProvider("app").getImmediate(),t=Ks(e),i=Z(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Xs=n=>{const e=n.getProvider("app").getImmediate(),t=Z(e,Wn).getImmediate();return{getId:()=>zs(t),getToken:r=>Gs(t,r)}};function Qs(){Y(new X(Wn,Ys,"PUBLIC")),Y(new X(Js,Xs,"PRIVATE"))}Qs();V(bn,Xe);V(bn,Xe,"esm2020");/**
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
 */const be="analytics",Zs="firebase_id",ea="origin",ta=60*1e3,na="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",tt="https://www.googletagmanager.com/gtag/js";/**
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
 */const I=new jt("@firebase/analytics");/**
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
 */const ia={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_=new se("analytics","Analytics",ia);/**
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
 */function ra(n){if(!n.startsWith(tt)){const e=_.create("invalid-gtag-resource",{gtagURL:n});return I.warn(e.message),""}return n}function jn(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function sa(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function aa(n,e){const t=sa("firebase-js-sdk-policy",{createScriptURL:ra}),i=document.createElement("script"),r=`${tt}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function oa(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}function ca(n,e,t,i,r,s){return o(this,null,function*(){const a=i[r];try{if(a)yield e[a];else{const l=(yield jn(t)).find(u=>u.measurementId===r);l&&(yield e[l.appId])}}catch(c){I.error(c)}n("config",r,s)})}function la(n,e,t,i,r){return o(this,null,function*(){try{let s=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=yield jn(t);for(const l of a){const u=c.find(h=>h.measurementId===l),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),yield Promise.all(s),n("event",i,r||{})}catch(s){I.error(s)}})}function ua(n,e,t,i){function r(s,...a){return o(this,null,function*(){try{if(s==="event"){const[c,l]=a;yield la(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;yield ca(n,e,t,i,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,u]=a;n("get",c,l,u)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){I.error(c)}})}return r}function da(n,e,t,i,r){let s=function(...a){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=ua(s,n,e,t),{gtagCore:s,wrappedGtag:window[r]}}function ha(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(tt)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=30,pa=1e3;class ga{constructor(e={},t=pa){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zn=new ga;function ma(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}function Ia(n){return o(this,null,function*(){var a;const{appId:e,apiKey:t}=n,i={method:"GET",headers:ma(t)},r=na.replace("{app-id}",e),s=yield fetch(r,i);if(s.status!==200&&s.status!==304){let c="";try{const l=yield s.json();(a=l.error)!=null&&a.message&&(c=l.error.message)}catch(l){}throw _.create("config-fetch-failed",{httpStatus:s.status,responseMessage:c})}return s.json()})}function _a(i){return o(this,arguments,function*(n,e=zn,t){const{appId:r,apiKey:s,measurementId:a}=n.options;if(!r)throw _.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:r};throw _.create("no-api-key")}const c=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Ta;return setTimeout(()=>o(this,null,function*(){l.abort()}),ta),Gn({appId:r,apiKey:s,measurementId:a},c,l,e)})}function Gn(s,a,c){return o(this,arguments,function*(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=zn){var d;const{appId:l,measurementId:u}=n;try{yield wa(i,e)}catch(h){if(u)return I.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:l,measurementId:u};throw h}try{const h=yield Ia(n);return r.deleteThrottleMetadata(l),h}catch(h){const p=h;if(!ya(p)){if(r.deleteThrottleMetadata(l),u)return I.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:u};throw h}const g=Number((d=p==null?void 0:p.customData)==null?void 0:d.httpStatus)===503?gt(t,r.intervalMillis,fa):gt(t,r.intervalMillis),C={throttleEndTimeMillis:Date.now()+g,backoffCount:t+1};return r.setThrottleMetadata(l,C),I.debug(`Calling attemptFetch again in ${g} millis`),Gn(n,C,i,r)}})}function wa(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(s),i(_.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ya(n){if(!(n instanceof ae)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ta{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}function va(n,e,t,i,r){return o(this,null,function*(){if(r&&r.global){n("event",t,i);return}else{const s=yield e,a=y(m({},i),{send_to:s});n("event",t,a)}})}function Ea(n,e,t,i){return o(this,null,function*(){if(i&&i.global){const r={};for(const s of Object.keys(t))r[`user_properties.${s}`]=t[s];return n("set",r),Promise.resolve()}else{const r=yield e;n("config",r,{update:!0,user_properties:t})}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return o(this,null,function*(){if(ui())try{yield di()}catch(n){return I.warn(_.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return I.warn(_.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0})}function Sa(n,e,t,i,r,s,a){return o(this,null,function*(){var p;const c=_a(n);c.then(g=>{t[g.measurementId]=g.appId,n.options.measurementId&&g.measurementId!==n.options.measurementId&&I.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>I.error(g)),e.push(c);const l=ka().then(g=>{if(g)return i.getId()}),[u,d]=yield Promise.all([c,l]);ha(s)||aa(s,u.measurementId),r("js",new Date);const h=(p=a==null?void 0:a.config)!=null?p:{};return h[ea]="firebase",h.update=!0,d!=null&&(h[Zs]=d),r("config",u.measurementId,h),u.measurementId})}/**
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
 */class ba{constructor(e){this.app=e}_delete(){return delete J[this.app.options.appId],Promise.resolve()}}let J={},Dt=[];const Ut={};let Ue="dataLayer",Aa="gtag",Ft,nt,xt=!1;function Pa(){const n=[];if(Gt()&&n.push("This is a browser extension environment."),hi()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=_.create("invalid-analytics-context",{errorInfo:e});I.warn(t.message)}}function Ra(n,e,t){Pa();const i=n.options.appId;if(!i)throw _.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)I.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _.create("no-api-key");if(J[i]!=null)throw _.create("already-exists",{id:i});if(!xt){oa(Ue);const{wrappedGtag:s,gtagCore:a}=da(J,Dt,Ut,Ue,Aa);nt=s,Ft=a,xt=!0}return J[i]=Sa(n,Dt,Ut,e,Ft,Ue,t),new ba(n)}function Ca(n=Kt()){n=R(n);const e=Z(n,be);return e.isInitialized()?e.getImmediate():Na(n)}function Na(n,e={}){const t=Z(n,be);if(t.isInitialized()){const r=t.getImmediate();if(_e(e,t.getOptions()))return r;throw _.create("already-initialized")}return t.initialize({options:e})}function Oa(n,e,t){n=R(n),Ea(nt,J[n.app.options.appId],e,t).catch(i=>I.error(i))}function La(n,e,t,i){n=R(n),va(nt,J[n.app.options.appId],e,t,i).catch(r=>I.error(r))}const Vt="@firebase/analytics",$t="0.10.21";function Ma(){Y(new X(be,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Ra(i,r,t)},"PUBLIC")),Y(new X("analytics-internal",n,"PRIVATE")),V(Vt,$t),V(Vt,$t,"esm2020");function n(e){try{const t=e.getProvider(be).getImmediate();return{logEvent:(i,r,s)=>La(t,i,r,s),setUserProperties:(i,r)=>Oa(t,i,r)}}catch(t){throw _.create("interop-component-reg-failed",{reason:t})}}}Ma();const Ht={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:void 0};let W,qt,Wt,Da;try{Ht.apiKey==="dummy_key"&&console.warn("Firebase Hub: Missing VITE_FIREBASE_API_KEY. Initializing in offline simulation mode."),W=fi(Ht),qt=hs(W),Wt=pi(W),typeof window!="undefined"&&!window.navigator.userAgent.includes("ReactSnap")&&(Da=Ca(W))}catch(n){console.error("Firebase Hub: Critical Initialization Error. Forcing local fallback."),W={},qt={},Wt={}}const xa=W;export{Da as analytics,qt as auth,Wt as db,xa as default};
