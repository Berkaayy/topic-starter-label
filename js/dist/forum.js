module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/PostUser"]},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(0),i=r.n(o),u=r(2),a=r.n(u);i.a.initializers.add("dem13n-topic-starter-label",(function(){Object(n.extend)(a.a.prototype,"view",(function(t){var e=i.a.current.get("routeName");if("discussion"===e||"discussion.near"===e||"blogArticle"===e){var r="blogArticle"===e?i.a.translator.trans("dem13n.forum.blog_article_author"):i.a.translator.trans("dem13n.forum.topic_starter"),n=this.attrs.post,o=n.user().id(),u=n.discussion().user().id();if(!u&&!o)return;o===u&&function(t){var e=t.discussion().firstPost();return!e||e.id()!==t.id()}(n)&&t.children.push(m("span",{className:"topicStarter"},r))}}))}))}]);
//# sourceMappingURL=forum.js.map