!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("6JpON"),i=Array.from(document.querySelectorAll("label")),a=Array.from(document.querySelectorAll("input")),u=document.querySelector(".form"),f=document.querySelector('button[type="submit"]');f.style.fontSize="15px",f.style.padding="5px";var c=!0,d=!1,s=void 0;try{for(var y,p=i[Symbol.iterator]();!(c=(y=p.next()).done);c=!0){var m=y.value;m.style.display="inline-block",m.style.fontSize="15px",m.style.fontWeight="600"}}catch(e){d=!0,s=e}finally{try{c||null==p.return||p.return()}finally{if(d)throw s}}var v=!0,b=!1,x=void 0;try{for(var h,w=a[Symbol.iterator]();!(v=(h=w.next()).done);v=!0){var S=h.value;S.style.display="block",S.style.padding="5px",S.style.fontSize="15px"}}catch(e){b=!0,x=e}finally{try{v||null==w.return||w.return()}finally{if(b)throw x}}var g=function(e,t){return new Promise((function(n,r){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))};u.addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(u.elements.amount.value),r=Number(u.elements.step.value),o=Number(u.elements.delay.value),i=1;i<=n;i+=1){g(i,o+r*(i-1)).then((function(t){var n=t.position,r=t.delay;e(l).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(r," ms"))})).catch((function(t){var n=t.position,r=t.delay;e(l).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(r," ms"))}))}}))}();
//# sourceMappingURL=03-promises.7ec61a7d.js.map
