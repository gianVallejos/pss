"use strict";var precacheConfig=[["/pss/index.html","bb800c020924fcdecd365e0c8f6f5481"],["/pss/static/css/main.dc4334bb.css","63bd8867e77d01823ebaf3f97b248a36"],["/pss/static/js/main.69f57c99.js","83ac6561082d1a4b41c0f87eb17928e9"],["/pss/static/media/arrow-down.1ed752b0.svg","1ed752b0e9dee3ae6517179f83d0616d"],["/pss/static/media/arrow-left.6c9efe0c.svg","6c9efe0c8c1fb630cd48d0381ece4297"],["/pss/static/media/arrow-right.a0e061b5.svg","a0e061b54507c1ea6361ee20ac930f2c"],["/pss/static/media/background-perfil.b453cdbd.jpg","b453cdbd6d0d83d11573247d9025b3ac"],["/pss/static/media/badge.b16247b2.svg","b16247b22a6b7b93ae4c25f7fd3dbc99"],["/pss/static/media/bell.f8b24c32.svg","f8b24c32ae9ddd3113bf35befd174ee0"],["/pss/static/media/box.1053851c.svg","1053851c2a11b72275d05264095beb84"],["/pss/static/media/calculator.2b2c1f23.svg","2b2c1f2341c16a4a19b15ac164e5bf87"],["/pss/static/media/calculator.3f897c79.svg","3f897c7969e169893bc6958b41d0e200"],["/pss/static/media/cart.99708839.svg","99708839cdbeed9493afa902f891655f"],["/pss/static/media/cart.de41ed2c.svg","de41ed2c8be8c8a59dc68809cf92d25e"],["/pss/static/media/dashboard.4c77b012.svg","4c77b0124e9059ecfcd675a432c11705"],["/pss/static/media/discount.6eb56035.svg","6eb56035860e0b964db4496b58c462dd"],["/pss/static/media/exit.fa90d87d.svg","fa90d87da817a2b8a3f07abc41862254"],["/pss/static/media/header-logo.eb420a21.png","eb420a215a18d7ae35661d70ddaad709"],["/pss/static/media/logotipo-log.2f971855.png","2f971855180d385f038daab913a1d1d8"],["/pss/static/media/package.d9f00029.svg","d9f000296e1f3eb5e2405f6d39a9a1e6"],["/pss/static/media/settings.b29d9210.svg","b29d92108d9c06f0b9bb51274fe2e496"],["/pss/static/media/silhouette.7f7f274d.svg","7f7f274d485eb5cb78877b19cbec2e3a"],["/pss/static/media/truck.eac67081.svg","eac670817fb9c287c4079cd7dfceb680"],["/pss/static/media/user.1b8be325.svg","1b8be325b8be2529c2c818d8e3fd5d2b"],["/pss/static/media/users.4c415f6c.svg","4c415f6c55ba2a28474e05f42ebe6c92"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),c=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),t=urlsToCacheKeys.has(a));var c="/pss/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});