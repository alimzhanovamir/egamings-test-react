(this["webpackJsonpegamings-test-react"]=this["webpackJsonpegamings-test-react"]||[]).push([[0],{14:function(e,t,a){e.exports={layout:"layout_layout__2mnBN",main:"layout_main__2iU-1",loader:"layout_loader__3kjzx"}},15:function(e,t,a){e.exports={subheader:"subheader_subheader__1Zwzf",subheader__title:"subheader_subheader__title__2NUFv",subheader__found:"subheader_subheader__found__2aUnj"}},18:function(e,t,a){e.exports={header:"header_header__1yaIZ",header__title:"header_header__title__33ZQu"}},28:function(e,t,a){e.exports=a.p+"static/media/nofound.4ab1dace.png"},3:function(e,t,a){e.exports={pagination:"pagination_pagination__2cgg1",pagination__list:"pagination_pagination__list__1EeaX",pagination__button:"pagination_pagination__button__1TI-d","pagination__button--active":"pagination_pagination__button--active__Zni8r","mobile-pagination":"pagination_mobile-pagination__wQzbQ","mobile-pagination__button":"pagination_mobile-pagination__button__3cIo-","mobile-pagination__button--active":"pagination_mobile-pagination__button--active__28K-D","mobile-pagination__count":"pagination_mobile-pagination__count__1MstH"}},32:function(e,t,a){e.exports=a(45)},37:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),o=(a(37),a(38),a(14)),l=a.n(o),_=a(6),u=a.n(_),s=a(4),m=a(5),g=a.n(m),f=a(26),b=a(10),p=a.n(b),d=a(17),v=a(1),h=[15,30,50,100],O=Object(v.f)([]),N=Object(v.f)(0),E=Object(v.f)(0),j=Object(v.f)([]),y=Object(v.f)(!1),S=Object(v.f)([]),w=Object(v.f)(h),x=Object(v.f)([]),k=Object(v.f)([1]),I=Object(v.f)(""),C=Object(v.f)(""),D=(Object(v.f)(h[0]),Object(v.f)(h[0])),J=Object(v.f)(1),$=Object(v.f)(1),F=Object(v.b)({$games:O,$numberOfPages:$,$searchForm:I,$currentCategoryID:C,$numberOfElementsOnPage:D,$currentPage:J,$localStorage:S}),Q=Object(v.e)(),A=Object(v.e)(),P=Object(v.e)(),q=Object(v.e)(),z=Object(v.e)(),L=Object(v.e)(),M=Object(v.e)(),B=Object(v.e)(),W=Object(v.e)(),Z=Object(v.d)("get request",{handler:function(){return Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!1);case 1:case"end":return e.stop()}}),e)})))()}}),H=Object(v.d)("get games array",{handler:function(){return Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:return e.next=4,fetch("https://alimzhanovamir.herokuapp.com/games");case 4:return t=e.sent,e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))()}});function K(e){return e.map((function(e){var t=e.ID,a=e.Name;return{ID:t,Name:"string"===typeof a?a:a.en}}))}O.on(H.done,(function(e,t){var a=t.result,n=a.games,r=Object.keys(a.merchants).map((function(e){return Object(f.a)({},a.merchants[e])})),c=[].concat(Object(s.a)(K(a.categories)),Object(s.a)(K(r))).sort((function(e,t){var a=e.Name,n=t.Name;return a.localeCompare(n)}));return P([{ID:"",Name:"All"},{ID:"favorites",Name:"Favorites"}].concat(Object(s.a)(c))),Q(n.length),n})),N.on(Q,(function(e,t){return t})),E.on(A,(function(e,t){return t})),x.on(P,(function(e,t){return t})),y.on(H.done,(function(e,t){t.result;return!0})).on(Z.done,(function(e,t){t.result;return!1})),I.on(q,(function(e,t){return B(1),t.toLowerCase()})),C.on(z,(function(e,t){return B(1),t})),D.on(L,(function(e,t){return B(1),t})),$.on(B,(function(e,t){return t})),j.on(F,(function(e,t){var a=S.getState(),n=I.getState(),r=C.getState(),c=O.getState();""!==n&&(c=c.filter((function(e){var t=e.Name;return("string"===typeof t?t:t.en).toLowerCase().includes(n)}))),""!==r&&"favorites"!==r&&(c=c.filter((function(e){var t=e.CategoryID;return!r||t.includes(r)}))),"favorites"===r&&(c=c.filter((function(e){var t=e.ID;return!r||a.includes(t)}))),c=c.sort((function(e,t){var a=e.Name,n=t.Name;return a.en.localeCompare(n.en)})),M(c.length);var i=D.getState(),o=$.getState(),l=(o-1)*i,_=o*i,u=c.slice(l,_);return A(c.length),u})),k.on(M,(function(e,t){var a=0,n=[];if(t>0){var r=t/D.getState();a=Math.ceil(r)}if(a>1)for(var c=0;c<a;c++)n.push(c+1);else 1===a&&n.push(1);return n})),S.on(W,(function(e,t){return localStorage.setItem("favorites",JSON.stringify(t)),JSON.parse(localStorage.getItem("favorites"))}));var U=a(2);var R=function(e){var t=e.id,a=e.inFavorite,n=e.imageSrc,c=e.name,i=e.modClass,o=Object(U.a)(S);return r.a.createElement("article",{className:" ".concat(g.a["game-card"]," ").concat(i?g.a["game-card--top"]:null)},r.a.createElement("div",{className:g.a["game-card__cover"]},r.a.createElement("img",{className:g.a["game-card__image"],src:n,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0438\u0433\u0440\u044b ".concat(c)})),r.a.createElement("h3",{className:g.a["game-card__title"]},c),a?r.a.createElement("button",{className:"".concat(g.a["game-card__button"]," ").concat(g.a["game-card__button--in"]),onClick:function(){return function(e){var t=Object(s.a)(o).filter((function(t){return t!==e}));W(t)}(t)}},"Remove"):r.a.createElement("button",{className:g.a["game-card__button"],onClick:function(){return function(e){var t=[].concat(Object(s.a)(o),[e]);W(t)}(t)}},"Add"))},T=a(28),G=a.n(T);var V=function(){var e=Object(U.a)(j),t=Object(U.a)(S);return e.length?r.a.createElement("ul",{className:u.a.list},e.map((function(e){var a=t.some((function(t){return t==e.ID}));return r.a.createElement("li",{className:u.a.list__item,key:e.ID},r.a.createElement(R,{id:e.ID,inFavorite:a,imageSrc:e.ImageFullPath,name:e.Name.en}))}))):r.a.createElement("div",{className:u.a["list-empty"]},r.a.createElement("div",{className:u.a["list-empty__inner"]},r.a.createElement("img",{className:u.a["list-empty__image"],src:G.a,alt:""}),r.a.createElement("p",{className:u.a["list-empty__text"]},"Sorry, no games")))},X=a(18),Y=a.n(X),ee=a(7),te=a.n(ee);var ae=function(){var e=Object(U.a)(I),t=Object(U.a)(w),a=Object(U.a)(x);return r.a.createElement("form",{className:te.a.filter},r.a.createElement("input",{className:te.a.filter__search,value:e,onChange:function(e){q(e.target.value)},type:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a","aria-label":"Search"}),r.a.createElement("div",{className:te.a.filter__selection},r.a.createElement("select",{className:"".concat(te.a.filter__number," ").concat(te.a["filter__number--wide"]),onChange:function(e){z(e.target.value)},name:"",id:"","aria-label":"Categories"},a.map((function(e){var t=e.ID,a=e.Name;return r.a.createElement("option",{value:t,key:t},"string"===typeof a?a:a.en)}))),r.a.createElement("select",{className:te.a.filter__number,onChange:function(e){L(e.target.value)},name:"",id:"","aria-label":"Number of games per page"},t.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))))};var ne=function(){var e=Object(U.a)(N);return r.a.createElement("header",{className:Y.a.header},r.a.createElement("h1",{className:Y.a.header__title},"Total games: ".concat(e)),r.a.createElement(ae,null))},re=a(19),ce=a(3),ie=a.n(ce);var oe=function(){var e,t=Object(re.useMediaQuery)({query:"(min-width: 768px)"}),a=Object(re.useMediaQuery)({query:"(max-width: 767px)"}),n=Object(U.a)(k),c=Object(U.a)($);if(t){e=function(e,t){for(var a,n=t,r=e-2,c=e+2+1,i=[],o=[],l=1;l<=n;l++)(1==l||l==n||l>=r&&l<c)&&i.push(l);for(var _=0,u=i;_<u.length;_++){var s=u[_];a&&(s-a===2?o.push(a+1):s-a!==1&&o.push("...")),o.push(s),a=s}return o}(c,n.length)}return t?r.a.createElement("div",{className:ie.a.pagination},r.a.createElement("ul",{className:ie.a.pagination__list},e.length>1&&r.a.createElement("li",{className:ie.a.pagination__item},r.a.createElement("button",{className:"".concat(ie.a.pagination__button," ").concat(ie.a["pagination__button--prev"]),onClick:function(){return B(--c)},disabled:1===c},"\u041d\u0430\u0437\u0430\u0434")),e.map((function(e,t){return r.a.createElement("li",{className:ie.a.pagination__item,key:t},r.a.createElement("button",{className:" ".concat(ie.a.pagination__button,"  ").concat(e===c?ie.a["pagination__button--active"]:""," "),onClick:function(){return B(e)},disabled:e===c||"number"!==typeof e},e))})),r.a.createElement("li",{className:ie.a.pagination__item},e.length>1&&r.a.createElement("button",{className:"".concat(ie.a.pagination__button," ").concat(ie.a["pagination__button--next"]),onClick:function(){return B(++c)},disabled:c===n.length},"\u0412\u043f\u0435\u0440\u0435\u0434")))):a?r.a.createElement("div",{className:ie.a["mobile-pagination"]},r.a.createElement("button",{className:ie.a["mobile-pagination__button"],onClick:function(){return B(--c)},disabled:1===c},"\xab"),r.a.createElement("p",{className:ie.a["mobile-pagination__count"]},"".concat(c,"/").concat(n.length)),r.a.createElement("button",{className:ie.a["mobile-pagination__button"],onClick:function(){return B(++c)},disabled:c===n.length},"\xbb")):null},le=a(15),_e=a.n(le);var ue=function(e){var t=Object(U.a)(E);return r.a.createElement("header",{className:_e.a.subheader},r.a.createElement("h1",{className:_e.a.subheader__title},e.title),r.a.createElement("span",{className:_e.a.subheader__found},"Found games: ".concat(t)))};var se=function(){return Object(U.a)(y)?r.a.createElement("div",{className:l.a.layout},r.a.createElement(ne,null),r.a.createElement("main",{className:l.a.main},r.a.createElement(ue,{title:"All games"}),r.a.createElement(oe,null),r.a.createElement(V,null),r.a.createElement(oe,null))):r.a.createElement("div",{className:l.a.loader},"Loading...")};var me=function(){return console.log("localStorage =",JSON.parse(localStorage.getItem("favorites"))),JSON.parse(localStorage.getItem("favorites"))?W(JSON.parse(localStorage.getItem("favorites"))):W([]),Object(n.useEffect)((function(){console.log("mounted App"),H()}),[]),console.log("render App"),r.a.createElement(se,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(31);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge.a,null,r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={"game-card":"game-card_game-card__3QHR3","game-card--top":"game-card_game-card--top__13JPo","game-card__cover":"game-card_game-card__cover__L-cKS","game-card__image":"game-card_game-card__image__2ymll","game-card__title":"game-card_game-card__title__3en_a","game-card__button":"game-card_game-card__button__3wqNo","game-card__button--in":"game-card_game-card__button--in__36ijv"}},6:function(e,t,a){e.exports={list:"list_list__1GVEx","list-empty":"list_list-empty__1wzOC","list-empty__inner":"list_list-empty__inner__iB0wJ","list-empty__image":"list_list-empty__image__21AEv","list-empty__text":"list_list-empty__text__1cPCq"}},7:function(e,t,a){e.exports={filter:"filter_filter__K3had",filter__selection:"filter_filter__selection__3L_ks",filter__search:"filter_filter__search__2HaQ1",filter__number:"filter_filter__number__21W26","filter__number--wide":"filter_filter__number--wide__W3puv"}}},[[32,1,2]]]);
//# sourceMappingURL=main.9e208a51.chunk.js.map