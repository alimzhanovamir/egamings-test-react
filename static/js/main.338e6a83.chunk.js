(this["webpackJsonpegamings-test-react"]=this["webpackJsonpegamings-test-react"]||[]).push([[0],{14:function(e,t,a){e.exports={layout:"layout_layout__2mnBN",main:"layout_main__2iU-1",loader:"layout_loader__3kjzx"}},17:function(e,t,a){e.exports={header:"header_header__1yaIZ",header__title:"header_header__title__33ZQu"}},2:function(e,t,a){e.exports={pagination:"pagination_pagination__2cgg1",pagination__list:"pagination_pagination__list__1EeaX",pagination__button:"pagination_pagination__button__1TI-d",active:"pagination_active__26_Bk","pagination__button--active":"pagination_pagination__button--active__Zni8r"}},26:function(e,t,a){e.exports=a.p+"static/media/nofound.4ab1dace.png"},30:function(e,t,a){e.exports=a(43)},35:function(e,t,a){},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=(a(35),a(36),a(14)),l=a.n(i),m=a(5),s=a.n(m),_=a(6),u=a.n(_);var g=function(e){var t=e.imageSrc,a=e.name,n=e.modClass;return r.a.createElement("article",{className:" ".concat(u.a["game-card"]," ").concat(n?u.a["game-card--top"]:null)},r.a.createElement("div",{className:u.a["game-card__cover"]},r.a.createElement("img",{className:u.a["game-card__image"],src:t,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0438\u0433\u0440\u044b ".concat(a)})),r.a.createElement("h3",{className:u.a["game-card__title"]},a),r.a.createElement("button",{className:u.a["game-card__button"]},"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"))},f=a(3),p=a(4),d=a(24),b=a(10),v=a.n(b),h=a(16),E=a(1),O=[15,30,50,100],N=Object(E.f)([]),j=Object(E.f)([]),y=Object(E.f)(!1),x=(Object(E.f)(!1),Object(E.f)(O)),k=Object(E.f)([]),w=Object(E.f)([1]),C=Object(E.f)(""),S=Object(E.f)(""),I=(Object(E.f)(O[0]),Object(E.f)(O[0])),D=Object(E.f)(1),$=Object(E.f)(1),P=Object(E.b)({$games:N,$numberOfPages:$,$searchForm:C,$currentCategoryID:S,$numberOfElementsOnPage:I,$currentPage:D}),B=(Object(E.e)(),Object(E.e)()),A=Object(E.e)(),J=Object(E.e)(),L=Object(E.e)(),q=Object(E.e)(),z=Object(E.e)(),Q=Object(E.d)("get request",{handler:function(){return Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!1);case 1:case"end":return e.stop()}}),e)})))()}}),W=Object(E.d)("get games array",{handler:function(){return Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:return e.next=4,fetch("https://alimzhanovamir.herokuapp.com/games");case 4:return t=e.sent,e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))()}});function Z(e){return e.map((function(e){var t=e.ID,a=e.Name;return{ID:t,Name:"string"===typeof a?a:a.en}}))}N.on(W.done,(function(e,t){var a=t.result,n=Object.keys(a.merchants).map((function(e){return Object(d.a)({},a.merchants[e])})),r=[].concat(Object(p.a)(Z(a.categories)),Object(p.a)(Z(n))).sort((function(e,t){var a=e.Name,n=t.Name;return a.localeCompare(n)}));return B([{ID:"",Name:"All"}].concat(Object(p.a)(r))),a.games})),k.on(B,(function(e,t){return t})),y.on(W.done,(function(e,t){t.result;return!0})).on(Q.done,(function(e,t){t.result;return!1})),C.on(A,(function(e,t){return t.toLowerCase()})),S.on(J,(function(e,t){return t})),I.on(L,(function(e,t){return z(1),t})),$.on(z,(function(e,t){return t})),j.on(P,(function(e,t){var a=C.getState(),n=S.getState(),r=N.getState();""!==a&&(r=r.filter((function(e){var t=e.Name;return("string"===typeof t?t:t.en).toLowerCase().includes(a)}))),""!==n&&(r=r.filter((function(e){var t=e.CategoryID;return!n||t.includes(n)}))),r=r.sort((function(e,t){var a=e.Name,n=t.Name;return a.en.localeCompare(n.en)})),q(r.length);var c=I.getState(),o=$.getState(),i=(o-1)*c,l=o*c;return r.slice(i,l)})),w.on(q,(function(e,t){var a=0,n=[];if(t>0&&(a=Math.ceil(t/I.getState())),a>1)for(var r=D.getState();r<a;r++)n.push(r);else 1===a&&n.push(1);return n}));var F=a(26),H=a.n(F);var M=function(){var e=Object(f.a)(j);return e.length?r.a.createElement("ul",{className:s.a.list},e.map((function(e){return r.a.createElement("li",{className:s.a.list__item,key:e.ID},r.a.createElement(g,{imageSrc:e.ImageFullPath,name:e.Name.en}))}))):r.a.createElement("div",{className:s.a["list-empty"]},r.a.createElement("div",{className:s.a["list-empty__inner"]},r.a.createElement("img",{className:s.a["list-empty__image"],src:H.a,alt:""}),r.a.createElement("p",{className:s.a["list-empty__text"]},"Sorry, no games")))},V=a(17),G=a.n(V),K=a(7),R=a.n(K);var T=function(){var e=Object(f.a)(C),t=Object(f.a)(x),a=Object(f.a)(k);return console.log(e),r.a.createElement("form",{className:R.a.filter},r.a.createElement("button",{className:R.a.filter__refresh,onClick:function(e){console.log("click"),e.preventDefault(),W()}},"\u21ba"),r.a.createElement("input",{className:R.a.filter__search,value:e,onChange:function(e){A(e.target.value)},type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a"}),r.a.createElement("select",{className:R.a.filter__number,onChange:function(e){L(e.target.value)},name:"",id:""},t.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("select",{className:R.a.filter__number,onChange:function(e){J(e.target.value)},name:"",id:""},a.map((function(e){var t=e.ID,a=e.Name;return r.a.createElement("option",{value:t,key:t},"string"===typeof a?a:a.en)}))))};var U=function(){return r.a.createElement("header",{className:G.a.header},r.a.createElement("h1",{className:G.a.header__title},"\u0418\u0433\u0440\u044b"),r.a.createElement(T,null))},X=a(2),Y=a.n(X);var ee=function(){var e=Object(f.a)(w),t=Object(f.a)($);return console.log("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446 = "+e.length),console.log("\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 = "+t),e.length?r.a.createElement("div",{className:Y.a.pagination},r.a.createElement("ul",{className:Y.a.pagination__list},r.a.createElement("li",{className:Y.a.pagination__item},r.a.createElement("button",{className:"".concat(Y.a.pagination__button," ").concat(Y.a["pagination__button--prev"]),onClick:function(){return z(t--)},disabled:1===t},"\u041d\u0430\u0437\u0430\u0434")),e.map((function(e){return r.a.createElement("li",{className:Y.a.pagination__item,key:e},r.a.createElement("button",{className:" ".concat(Y.a.pagination__button,"  ").concat(e===t?Y.a["pagination__button--active"]:null," "),onClick:function(){return z(e)}},e))})),r.a.createElement("li",{className:Y.a.pagination__item},r.a.createElement("button",{className:"".concat(Y.a.pagination__button," ").concat(Y.a["pagination__button--next"]),onClick:function(){return z(t+1)},disabled:t===e.length},"\u0412\u043f\u0435\u0440\u0435\u0434")))):null};var te=function(){return Object(f.a)(y)?r.a.createElement("div",{className:l.a.layout},r.a.createElement(U,null),r.a.createElement("main",{className:l.a.main},r.a.createElement("h2",null,"\u0412\u0441\u0435 \u0438\u0433\u0440\u044b"),r.a.createElement(ee,null),r.a.createElement(M,null),r.a.createElement(ee,null))):r.a.createElement("div",{className:l.a.loader},"Loading...")};var ae=function(){return Object(n.useEffect)((function(){console.log("mounted App"),W()}),[]),console.log("render App"),r.a.createElement(te,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a(29);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne.a,null,r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={list:"list_list__1GVEx","list-empty":"list_list-empty__1wzOC","list-empty__inner":"list_list-empty__inner__iB0wJ","list-empty__image":"list_list-empty__image__21AEv","list-empty__text":"list_list-empty__text__1cPCq"}},6:function(e,t,a){e.exports={"game-card":"game-card_game-card__3QHR3","game-card--top":"game-card_game-card--top__13JPo","game-card__cover":"game-card_game-card__cover__L-cKS","game-card__image":"game-card_game-card__image__2ymll","game-card__title":"game-card_game-card__title__3en_a","game-card__button":"game-card_game-card__button__3wqNo"}},7:function(e,t,a){e.exports={filter__refresh:"filter_filter__refresh__ExV_b",filter__search:"filter_filter__search__2HaQ1",filter__number:"filter_filter__number__21W26"}}},[[30,1,2]]]);
//# sourceMappingURL=main.338e6a83.chunk.js.map