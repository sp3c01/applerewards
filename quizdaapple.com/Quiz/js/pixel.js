(()=>{"use strict";var e={370:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.visibleForTesting=void 0,t.visibleForTesting=(e,t)=>{}},568:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AppStorage=void 0;const i=n(923);t.AppStorage=class{static save(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}static load(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null}static getFbc(){const e=document.cookie.split(";");for(const t of e){const[e,n]=t.trim().split("=");if("_fbc"===e)return decodeURIComponent(n)}}static getFbp(){var e;return null!==(e=i.Utils.getCookieByNames("_fbp","fbp"))&&void 0!==e?e:void 0}}},717:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CountryService=void 0,t.CountryService=class{static getCountry(e){var t,i;return n(this,void 0,void 0,(function*(){if(null===(t=e.geolocation)||void 0===t?void 0:t.country)return e.geolocation.country;const n=yield(yield fetch("https://ipapi.co/json/")).json();return null!==(i=n.country)&&void 0!==i?i:null}))}}},75:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FBC=void 0;class n{constructor(e){this.version="fb",this.fbclid=e,this.subdomainIndex=0,this.creationTime=Date.now()}static fromClid(e){return e?new n(e):null}formatted(){return`${this.version}.${this.subdomainIndex}.${this.creationTime}.${this.fbclid}`}}t.FBC=n},865:function(e,t,n){var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.FormsListener=void 0;const s=n(370),a=n(119),l=n(568),c=n(717),d=n(562),u=n(554),p=n(526),v=n(923);class h{static init(){this.inited||(this.inited=!0,"complete"===document.readyState?this.startListening():window.addEventListener("load",this.startListening))}static startListening(){this.listenToForms(),new d.Observer({throttle:2e3,groupEvents:!0}).observeNewElements(document.body,(()=>{this.listenToForms()}))}static listenToForms(){Array.from(document.querySelectorAll("input, textarea")).forEach((e=>{this.canUseEl(e)&&(h.tryFill(e),e.addEventListener("input",h.handleInput),e.addEventListener("blur",h.handleInput))}))}static tryFill(e){var t,n,i,o;return r(this,void 0,void 0,(function*(){const r=yield p.Tracker.getTruthyLead(),s=h.classifyInput(e);s===a.InputType.Phone&&(e.value=null!==(t=r.phone)&&void 0!==t?t:""),s===a.InputType.Email&&(e.value=null!==(n=r.email)&&void 0!==n?n:""),s===a.InputType.Name&&(e.value=`${null!==(i=r.firstName)&&void 0!==i?i:""} ${null!==(o=r.lastName)&&void 0!==o?o:""}`)}))}static handleInput(e){return r(this,void 0,void 0,(function*(){const t=e.target,n=h.classifyInput(t),i=yield p.Tracker.getTruthyLead();if(n===a.InputType.Phone){const e=yield c.CountryService.getCountry(i),n=u.Phone.format(t.value,"BR"===e);l.AppStorage.save(p.Tracker.leadKey,Object.assign(Object.assign({},i),{phone:n}))}if(n===a.InputType.Email&&l.AppStorage.save(p.Tracker.leadKey,Object.assign(Object.assign({},i),{email:t.value})),n===a.InputType.Name){const e=t.value.split(" "),n=e[0],o=e.slice(1).join(" ");l.AppStorage.save(p.Tracker.leadKey,Object.assign(Object.assign({},i),{firstName:n,lastName:o}))}}))}static classifyInput(e){const{id:t,name:n,type:i,placeholder:o}=e;return"email"===i||(null==o?void 0:o.toLowerCase().includes("email"))||(null==t?void 0:t.toLowerCase().includes("field-email"))||(null==n?void 0:n.toLowerCase().includes("email"))?a.InputType.Email:(null==n?void 0:n.toLowerCase().includes("phone"))||(null==t?void 0:t.toLowerCase().includes("field-phone"))||(null==o?void 0:o.toLowerCase().includes("phone"))?a.InputType.Phone:(null==n?void 0:n.toLowerCase().includes("name"))||(null==t?void 0:t.toLowerCase().includes("field-name"))||(null==o?void 0:o.toLowerCase().includes("name"))?a.InputType.Name:a.InputType.Unknown}static canUseEl(e){if(this.usedIds.has(e.id))return!1;const t=v.Utils.getId(e);return this.usedIds.add(t),!0}}h.inited=!1,h.usedIds=new Set,i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],h,"startListening",null),i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[HTMLInputElement]),o("design:returntype",Promise)],h,"tryFill",null),i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Event]),o("design:returntype",Promise)],h,"handleInput",null),i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[HTMLInputElement]),o("design:returntype",String)],h,"classifyInput",null),t.FormsListener=h},8:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Ips=void 0,t.Ips=class{static getIpv4(){var e;return n(this,void 0,void 0,(function*(){try{const t=yield fetch("https://api.ipify.org?format=json").then((e=>e.json()));return null!==(e=t.ip)&&void 0!==e?e:void 0}catch(e){return void console.log("error on getIpv4",e)}}))}static getIpv6(){var e;return n(this,void 0,void 0,(function*(){try{const t=yield fetch("https://api6.ipify.org?format=json").then((e=>e.json()));return null!==(e=t.ip)&&void 0!==e?e:void 0}catch(e){return void console.log("error on getIpv6",e)}}))}}},774:function(e,t,n){var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.checkoutButtonKeywors=t.checkoutLinkKeywords=t.NavigationListener=void 0;const r=n(370),s=n(562),a=n(526),l=n(923);class c{static init(){this.inited||(this.inited=!0,c.monitorLinks(),c.monitorWindowOpen(),c.monitorButtons(),c.monitorForms(),new s.Observer({throttle:2e3,groupEvents:!0}).observeNewElements(document.body,(()=>{c.monitorLinks(),c.monitorButtons(),c.monitorForms()})))}static monitorButtons(){Array.from(document.querySelectorAll("button")).forEach((e=>{this.canUseEl(e)&&e.addEventListener("click",(()=>{var t,n;c.isCheckoutButtonText(null!==(t=e.textContent)&&void 0!==t?t:"")&&(console.log("tracking ic with button",e),a.Tracker.track("InitiateCheckout")),c.isLeadButtonText(null!==(n=e.textContent)&&void 0!==n?n:"")&&(console.log("tracking lead with button",e),a.Tracker.track("Lead"))}))}))}static monitorForms(){Array.from(document.querySelectorAll("form")).forEach((e=>{this.canUseEl(e)&&e.addEventListener("submit",(t=>{var n,i;const o=e.querySelector('button[type="submit"]');console.log("submitButton",o),c.isCheckoutButtonText(null!==(n=null==o?void 0:o.textContent)&&void 0!==n?n:"")&&(console.log("tracking ic with form",e),a.Tracker.track("InitiateCheckout")),c.isLeadButtonText(null!==(i=null==o?void 0:o.textContent)&&void 0!==i?i:"")&&(console.log("tracking lead with button",o),a.Tracker.track("Lead"))}))}))}static monitorWindowOpen(){const e=window.open;window.open=function(t,n,i){return c.isCheckoutLink(null==t?void 0:t.toString(),void 0)&&a.Tracker.track("InitiateCheckout"),e(t,n||"",i||"")}}static monitorLinks(){const e=Array.from(document.querySelectorAll("a"));console.log("links to monitor",e),e.forEach((e=>{this.canUseEl(e)&&e.addEventListener("click",(()=>{var t,n;console.log("link clicked",e),c.isCheckoutLink(e.href,null!==(t=e.textContent)&&void 0!==t?t:"")&&a.Tracker.track("InitiateCheckout");const i=c.isLeadButtonText(null!==(n=e.textContent)&&void 0!==n?n:"");console.log("canSendLead",i),i&&(console.log("tracking lead with button",e),a.Tracker.track("Lead"))}))}))}static canUseEl(e){if(this.usedIds.has(e.id))return!1;const t=l.Utils.getId(e);return this.usedIds.add(t),!0}static isCheckoutLink(e,n){var i;console.log("check is checkout link: ",e);const o=a.Tracker.getTruthyLead();if(null!=o.icTextMatch)return null!==(i=null==n?void 0:n.includes(o.icTextMatch))&&void 0!==i&&i;for(const n of t.checkoutLinkKeywords)if(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))return!0;return!1}static isCheckoutButtonText(e){var n;console.log("check can iniate checkout: ",e);const i=a.Tracker.getTruthyLead();return null!=i.icTextMatch?null!==(n=null==e?void 0:e.includes(i.icTextMatch))&&void 0!==n&&n:t.checkoutButtonKeywors.some((t=>e.toLowerCase().includes(t)))}static isLeadButtonText(e){var t;console.log("check can send lead: ",e);const n=a.Tracker.getTruthyLead();return null!=n.leadTextMatch&&null!==(t=null==e?void 0:e.includes(n.leadTextMatch))&&void 0!==t&&t}}c.inited=!1,c.usedIds=new Set,i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],c,"monitorButtons",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],c,"monitorForms",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],c,"monitorWindowOpen",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],c,"monitorLinks",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Object,Object]),o("design:returntype",Boolean)],c,"isCheckoutLink",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",Boolean)],c,"isCheckoutButtonText",null),i([r.visibleForTesting,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",Boolean)],c,"isLeadButtonText",null),t.NavigationListener=c,t.checkoutLinkKeywords=["checkout","pagamento","payment","pay","kiwify","hotmart","eduzz","monetizze","vindi","pague","comprar","finalizar","compra","cart","carrinho","order","pedido","confirmar","confirmacao","confirmation","adoorei","vega","buygoods","octuspay","perfect","iexperience","payt","guru","green","yampi","appmax","pepper"],t.checkoutButtonKeywors=["comprar","finalizar","compra","confirmar","quero ter","proximo passo","próximo passo","inscrição","inscricao","participar","participe","quero participar","checkout"]},562:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Observer=void 0,t.Observer=class{constructor(e){var t,n;this.mutations=[],this.timer=null,this.setThrottle(null!==(t=e.throttle)&&void 0!==t?t:100),this.groupEvents=null!==(n=e.groupEvents)&&void 0!==n&&n}observeNewElements(e,t){this.callback=t,new MutationObserver(((e,t)=>{const n=this.groupEvents?1:null;(null==n||this.mutations.length<n)&&this.mutations.push({list:e,_observer:t})})).observe(e,{subtree:!0,childList:!0})}setThrottle(e){var t;this.throttle=e,null===(t=this.timer)||void 0===t||t.unref(),this.timer=setInterval((()=>{this.checkMutations()}),this.throttle)}checkMutations(){const e=this.mutations.length;for(let t=0;t<e;t++){const e=this.mutations.shift();e&&this.callback(e.list,e._observer)}}}},554:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Phone=void 0,t.Phone=class{static format(e,t=!0){const n=e.replace(/\D/g,"");let i=n;const o=t?"55":"";return t&&(n.startsWith("00")?i=n.substring(2):n.startsWith("0")&&(i=n.substring(1)),10===i.length?i=`55${i.substring(0,2)}9${i.substring(2)}`:12===i.length&&i.startsWith("55")&&(i=`55${i.substring(0,4)}9${i.substring(4)}`)),i.startsWith(o)||(i=`${o}${i}`),i.replace(/^0+/,"")}}},428:function(e,t,n){var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PixelUtmify=void 0;const s=n(370),a=n(937),l=n(792),c=n(923);class d{static init(e){return r(this,void 0,void 0,(function*(){var t,n,i,o,s,a;"undefined"==typeof fbq&&(t=window,n=document,i="script",t.fbq||(o=t.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},t._fbq||(t._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(s=n.createElement(i)).async=!0,s.src="https://connect.facebook.net/en_US/fbevents.js",null==(a=n.getElementsByTagName(i)[0])||a.parentNode.insertBefore(s,a))),e&&e.length>0&&(yield Promise.all(e.map((e=>r(this,void 0,void 0,(function*(){d.initedPixels.includes(e)||(yield fbq("init",e),d.initedPixels.push(e))}))))))}))}static get baseUrl(){return"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"http://localhost:3001/tracking/v1":"https://tracking.utmify.com.br/tracking/v1"}static event(e){var t,n,i,o,s,l,c,d;return r(this,void 0,void 0,(function*(){const r=`${this.baseUrl}/events`,u=yield fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json()));if(console.log(`response for ${null===(t=e.lead)||void 0===t?void 0:t.pixelId}: ${null===(n=null==u?void 0:u.lead)||void 0===n?void 0:n.metaPixelIds}`),null==u.lead._id)return null;const p=new a.Lead({_id:u.lead._id,pixelId:u.lead.pixelId,userAgent:u.lead.userAgent,birthdate:u.lead.birthdate,email:u.lead.email,fbc:u.lead.fbc,fbp:u.lead.fbp,firstName:u.lead.firstName,geolocation:u.lead.geolocation,ip:u.lead.ip,ipv6:u.lead.ipv6,lastName:u.lead.lastName,metaPixelIds:u.lead.metaPixelIds,phone:u.lead.phone,parameters:u.lead.parameters,updatedAt:new Date,icTextMatch:null!==(i=u.icTextMatch)&&void 0!==i?i:null,leadTextMatch:null!==(o=u.leadTextMatch)&&void 0!==o?o:null});return"PageView"===e.type&&(yield this.init(p.metaPixelIds)),this.metaEvent(Object.assign(Object.assign({},e),{event:{_id:u.event._id,pageTitle:null!==(l=null===(s=e.event)||void 0===s?void 0:s.pageTitle)&&void 0!==l?l:null,sourceUrl:null!==(d=null===(c=e.event)||void 0===c?void 0:c.sourceUrl)&&void 0!==d?d:null}})),p}))}static updateLead(e){return r(this,void 0,void 0,(function*(){const t=`${this.baseUrl}/lead`;return!0===(yield fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())))}))}static metaEvent(e){var t,n,i,o,s,a,d,u,p,v,h,f,g,y,m,b,w,T,k,_,L,x,F,C;return r(this,void 0,void 0,(function*(){const r=l.StringUtils.removeAllNonAlphaChars(null!==(i=null===(n=null===(t=e.lead)||void 0===t?void 0:t.geolocation)||void 0===n?void 0:n.city)&&void 0!==i?i:void 0),I=l.StringUtils.removeAllNonAlphaChars(null!==(a=null===(s=null===(o=e.lead)||void 0===o?void 0:o.geolocation)||void 0===s?void 0:s.state)&&void 0!==a?a:void 0),P=l.StringUtils.removeAllNonAlhaNumericChars(null!==(p=null===(u=null===(d=e.lead)||void 0===d?void 0:d.geolocation)||void 0===u?void 0:u.zipcode)&&void 0!==p?p:void 0),j=l.StringUtils.removeAllNonAlphaAccentChars(null===(v=e.lead)||void 0===v?void 0:v.firstName),O=l.StringUtils.removeAllNonAlphaAccentChars(null===(h=e.lead)||void 0===h?void 0:h.lastName);fbq("track",e.type,{event_time:c.Utils.getEventTime(),event_day:c.Utils.getEventDay(),event_day_in_month:c.Utils.getEventDayInMonth(),event_month:c.Utils.getEventMonth(),event_time_interval:c.Utils.getEventTimeInterval(),event_url:window.location.href,event_source_url:window.location.href,traffic_source:document.referrer,ct:yield c.Utils.hashValue(r),st:yield c.Utils.hashValue(I),zp:yield c.Utils.hashValue(P),client_user_agent:null===(f=e.lead)||void 0===f?void 0:f.userAgent,client_ip_address:null!==(y=null===(g=e.lead)||void 0===g?void 0:g.ipv6)&&void 0!==y?y:null===(m=e.lead)||void 0===m?void 0:m.ip,country:yield c.Utils.hashValue(null!==(T=null===(w=null===(b=e.lead)||void 0===b?void 0:b.geolocation)||void 0===w?void 0:w.country)&&void 0!==T?T:void 0),external_id:null===(k=e.lead)||void 0===k?void 0:k._id,fn:yield c.Utils.hashValue(j),ln:yield c.Utils.hashValue(O),em:yield c.Utils.hashValue(null===(_=null==e?void 0:e.lead)||void 0===_?void 0:_.email),ph:yield c.Utils.hashValue(null===(L=null==e?void 0:e.lead)||void 0===L?void 0:L.phone),fbc:null===(x=e.lead)||void 0===x?void 0:x.fbc,fbp:null===(F=e.lead)||void 0===F?void 0:F.fbp,content_type:"product",page_title:document.title},{eventID:null===(C=e.event)||void 0===C?void 0:C._id})}))}}d.initedPixels=[],i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",Promise)],d,"metaEvent",null),t.PixelUtmify=d},792:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StringUtils=void 0,t.StringUtils=class{static removeAllNonAlphaAccentChars(e){return null!=e?e.replace(/[0-9]/g,"").replace(/[^a-zA-ZÀ-ÿ\s]/g,"").replace(/[^a-zA-ZÀ-ÿ]/g,"").toLowerCase():void 0}static removeAllNonAlphaChars(e){return null!=e?e.replace(/[^a-zA-Z]/g,"").toLowerCase():void 0}static removeAllNonAlhaNumericChars(e){return null!=e?e.replace(/[^a-zA-Z0-9]/g,"").toLowerCase():void 0}}},526:function(e,t,n){var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Tracker=void 0;const s=n(370),a=n(937),l=n(568),c=n(75),d=n(865),u=n(8),p=n(774),v=n(428),h=n(436);class f{static get pixelId(){return window.pixelId}static init(){return r(this,void 0,void 0,(function*(){if(console.log("Tracker.inited?:",this.inited),this.inited)return;this.inited=!0;const[e,t]=yield Promise.all([u.Ips.getIpv4(),u.Ips.getIpv6()]);f.ipv4=e,f.ipv6=t,d.FormsListener.init(),p.NavigationListener.init(),f.track("PageView"),h.ViewContentListener.init(),yield f.trySendFbp()}))}static trySendFbp(){return r(this,void 0,void 0,(function*(){const e=()=>r(this,void 0,void 0,(function*(){const e=f.getTruthyLead();(null==e?void 0:e._id)&&e.fbp&&(yield v.PixelUtmify.updateLead({_id:e._id,fbp:e.fbp}))&&l.AppStorage.save(f.leadKey,e)}));setTimeout(e,2500),setTimeout(e,5e3)}))}static track(e){return r(this,void 0,void 0,(function*(){if(this.trackedEvents.includes(e))return;this.trackedEvents.push(e);const t=this.getTruthyLead(),n=yield v.PixelUtmify.event({type:e,lead:t,event:this.getEventData()});l.AppStorage.save(this.leadKey,n)}))}static getTruthyLead(){const e=f.getLeadFromLocalStorageOrNew();return f.getLeadWithBasicFields(e)}static getLeadFromLocalStorageOrNew(){return l.AppStorage.load(this.leadKey)||new a.Lead({pixelId:this.pixelId,userAgent:navigator.userAgent,icTextMatch:null,leadTextMatch:null})}static getLeadWithBasicFields(e){const t=f.getFbc(e),n=f.getFbp(e);return Object.assign(Object.assign({},e),{fbc:t,fbp:n,parameters:window.location.search,ip:f.ipv4,ipv6:f.ipv6})}static getFbc(e){var t;if(e.fbc)return e.fbc;const n=null!==(t=new URLSearchParams(window.location.search).get("fbclid"))&&void 0!==t?t:void 0,i=n?c.FBC.fromClid(n):void 0,o=null==i?void 0:i.formatted();if(o)return o;return l.AppStorage.getFbc()||o}static getFbp(e){return e.fbp?e.fbp:l.AppStorage.getFbp()}static getEventData(){return{sourceUrl:document.referrer||null,pageTitle:document.title||null}}}f.inited=!1,f.trackedEvents=[],f.leadKey="lead",i([s.visibleForTesting,o("design:type",String),o("design:paramtypes",[])],f,"pixelId",null),i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",a.Lead)],f,"getLeadFromLocalStorageOrNew",null),i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[a.Lead]),o("design:returntype",a.Lead)],f,"getLeadWithBasicFields",null),i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[a.Lead]),o("design:returntype",Object)],f,"getFbc",null),i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[a.Lead]),o("design:returntype",Object)],f,"getFbp",null),i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Object)],f,"getEventData",null),t.Tracker=f},923:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Utils=void 0;class i{static hashValue(e){return n(this,void 0,void 0,(function*(){if(e&&e.length){if(crypto&&crypto.subtle){const t=(new TextEncoder).encode(e),n=yield crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}return sha256||(yield i.loadScript("https://cdn.jsdelivr.net/npm/js-sha256/src/sha256.min.js")),sha256(e)}}))}static loadScript(e){return n(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{const i=document.createElement("script");i.src=e,i.onload=t,i.onerror=n,document.head.appendChild(i)}))}))}static wait(e){return new Promise((t=>{setTimeout(t,e)}))}static getEventTime(){const e=new Date,t=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds());return Math.floor(t/1e3)}static getEventDayInMonth(){return(new Date).getDate()}static getEventDay(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]}static getEventMonth(){return["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()]}static getEventTimeInterval(){const e=(new Date).getHours();return`${e}-${e+1}`}static getCookieByNames(...e){for(const t of e){const e=t,n=i.getCookieFromStorage(e);if(n)return n}for(const t of e){const e=t,n=i.getCookieFromUrl(e);if(n)return n}return null}static getCookieFromStorage(e){const t=document.cookie.split(";");for(const n of t){const[t,i]=n.trim().split("=");if(t===e)return i}return null}static getCookieFromUrl(...e){const t=new URLSearchParams(window.location.search);for(const n of e)if(t.has(n))return t.get(n);return null}static getId(e){if(e.id)return e.id;const t=i.uuid();return e.id=t,t}static uuid(){const e=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()+e()+e()}`}}t.Utils=i},436:function(e,t,n){var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ViewContentListener=void 0;const s=n(370),a=n(526),l=n(923);class c{static init(){c.trackByTime(),c.trackByScroll()}static trackByTime(){return r(this,void 0,void 0,(function*(){yield l.Utils.wait(8e3),a.Tracker.track("ViewContent")}))}static trackByScroll(){return r(this,void 0,void 0,(function*(){window.addEventListener("scroll",(()=>r(this,void 0,void 0,(function*(){console.log("scrolling",window.scrollY),window.scrollY>100&&a.Tracker.track("ViewContent")}))))}))}}i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Promise)],c,"trackByTime",null),i([s.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Promise)],c,"trackByScroll",null),t.ViewContentListener=c},119:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.InputType=void 0,(n=t.InputType||(t.InputType={})).Name="Name",n.Email="Email",n.Phone="Phone",n.Unknown="Unknown"},937:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Lead=void 0,t.Lead=class{constructor(e){this.pixelId=e.pixelId,this._id=e._id,this.email=e.email,this.firstName=e.firstName,this.lastName=e.lastName,this.phone=e.phone,this.birthdate=e.birthdate,this.metaPixelIds=e.metaPixelIds,this.geolocation=e.geolocation,this.userAgent=e.userAgent,this.ip=e.ip,this.ipv6=e.ipv6,this.fbc=e.fbc,this.fbp=e.fbp,this.parameters=e.parameters,this.updatedAt=e.updatedAt,this.icTextMatch=e.icTextMatch,this.leadTextMatch=e.leadTextMatch}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}(()=>{const e=n(526);console.log("Tracker version 1.0.0"),e.Tracker.init()})()})();