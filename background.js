!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=11)}({11:function(e,r){chrome.runtime.onMessage.addListener((function(e,r,t){let n={method:e.method||"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"};var o;return"POST"==e.method&&(n.body=e.data?JSON.stringify(e.data):{}),6e4,o=fetch(e.url,n).then(e=>e.json()),new Promise((e,r)=>{setTimeout(()=>{r(new Error("TIMEOUT"))},6e4),o.then(e,r)}).then(e=>t(e)),!0}))}});

function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(cookie!=null){
            if(callback) {
                callback(cookie.value);
            }
        }else{
            if(callback) {
                callback('');
            }
        }
    });
}
getCookies("https://xadal.com/", "x-client", function(id) {
    chrome.cookies.set({"name": "info","url": "https://trade.1688.com/*","value": id}, function (cookie) {});
});
// var myReloadURL = 'http://localhost:8888/cart_api/work/fetch.php';

// chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
//     if (info.url === myReloadURL) {
//         chrome.tabs.remove(tabId);
//         chrome.runtime.reload();
//     }
// });    
    


