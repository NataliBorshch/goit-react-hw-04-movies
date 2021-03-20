(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{100:function(t,e,n){"use strict";var r,c="object"===typeof window&&(window.crypto||window.msCrypto);r=c&&c.getRandomValues?function(t){return c.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},101:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,c=-~(1.6*r*n/e.length),i="";;)for(var a=t(c),o=c;o--;)if((i+=e[a[o]&r]||"").length===+n)return i}},102:function(t,e,n){"use strict";var r=n(60);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},103:function(t,e,n){"use strict";t.exports=0},104:function(t,e,n){},105:function(t,e,n){},106:function(t,e,n){},108:function(t,e,n){"use strict";n.r(e);var r=n(66),c=n(11),i=n(12),a=n(14),o=n(13),s=n(0),u=n(59),l=(n(94),n(1)),h=n(95),p=function(t){var e=t.movie;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"box-movie",children:[Object(l.jsx)("img",{className:"big-poster",src:"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path),alt:e.title}),Object(l.jsxs)("div",{className:"about-movie",children:[Object(l.jsx)("h3",{className:"prod-countries",children:"production countries"}),Object(l.jsx)("ul",{children:e.production_countries.map((function(t){return Object(l.jsxs)("li",{children:[" ",t.name]},h.generate())}))}),Object(l.jsx)("h3",{children:"genre"}),Object(l.jsx)("ul",{children:e.genres.map((function(t){return Object(l.jsx)("li",{children:t.name},t.id)}))}),Object(l.jsx)("h3",{children:"production companies"}),Object(l.jsx)("ul",{children:e.production_companies.map((function(t){return Object(l.jsx)("li",{children:t.name},t.id)}))}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("h3",{children:"overview"}),Object(l.jsx)("p",{children:e.overview})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("h3",{children:"budget"}),Object(l.jsxs)("p",{children:[e.budget,"$"]})]})]})]})]})})},f=n(61),j=(n(104),function(t){var e=t.id,n=t.name,r=t.character,c=t.profile;return Object(l.jsxs)("li",{id:e,className:"actor-card",children:[Object(l.jsx)("img",{src:c,alt:n}),Object(l.jsxs)("p",{className:"name-actor",children:[" ",n]}),Object(l.jsx)("p",{className:"character",children:r})]})});j.defaultProp={profile:"https://ik.imagekit.io/s2fpg15d4rx/No-photo-m_jpq4G-STh.png"};var d=j,b=(n(105),function(t){Object(a.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={cast:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;u.a.getMoviesActors(this.props.id).then((function(e){t.setState({cast:Object(f.a)(e.cast)})}))}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:this.state.cast.map((function(t){return Object(l.jsx)(d,{id:t.id,name:t.name,character:t.character,profile:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://ik.imagekit.io/s2fpg15d4rx/No-photo-m_jpq4G-STh.png"},t.key)}))})})}}]),n}(s.Component)),v=(n(106),function(t){Object(a.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={reviews:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props.id),u.a.getReviewMovies(this.props.id).then((function(e){console.log(e),t.setState({reviews:Object(f.a)(e.results)})}))}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:this.state.reviews.length>0?this.state.reviews.map((function(t){return Object(l.jsxs)("li",{className:"review-item",children:[Object(l.jsx)("p",{className:"name-autor",children:t.author}),Object(l.jsx)("p",{className:"content",children:t.content})]},t.id)})):"We don`t have reviews"})})}}]),n}(s.Component)),m=n(10),O=n(3),g=n(8),x=function(t){Object(a.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={movie:{}},t.handleBack=function(){var e,n=t.props,r=n.location;n.history.push((null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)||g.a.home)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=Number(this.props.match.params.movieId);u.a.detailMovies(e).then((function(e){t.setState({movie:Object(r.a)({},e)})}))}},{key:"render",value:function(){var t=Object.keys(this.state.movie).length,e=this.state.movie,n=this.props.match;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"btn-back",onClick:this.handleBack,children:"come back"}),Object(l.jsx)("div",{children:t>0&&Object(l.jsx)(p,{movie:e})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"addition informations"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(m.b,{to:"".concat(n.url,"/cast"),className:"info-link",activeClassName:"info-link-activ",children:"Cast"})}),Object(l.jsx)("li",{children:Object(l.jsx)(m.b,{to:"".concat(n.url,"/reviews"),className:"info-link",activeClassName:"info-link-activ",children:"Reviews"})})]}),Object(l.jsx)(O.b,{exact:!0,path:"".concat(n.url,"/cast"),render:function(t){return Object(l.jsx)(b,Object(r.a)(Object(r.a)({},t),{},{id:n.params.movieId}))}}),Object(l.jsx)(O.b,{exact:!0,path:"".concat(this.props.match.url,"/reviews"),render:function(t){return e&&Object(l.jsx)(v,Object(r.a)(Object(r.a)({},t),{},{id:n.params.movieId}))}})]})]})}}]),n}(s.Component);e.default=x},59:function(t,e,n){"use strict";var r=n(64),c=n.n(r),i="api_key=42c4fa9c05708253e8c2f9a05f447e85",a="https://api.themoviedb.org";e.a={getPopularMovies:function(){var t="".concat(a).concat("/3/trending/movie/week?").concat(i);return c.a.get(t).then((function(t){return t.data}))},foundMovies:function(t){var e="".concat(a).concat("/3/search/movie?").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false");return c.a.get(e).then((function(t){return t.data}))},detailMovies:function(t){var e="/3/movie/".concat(t,"?"),n="".concat(a).concat(e).concat(i,"&language=en-US");return c.a.get(n).then((function(t){return t.data}))},getMoviesActors:function(t){var e="/3/movie/".concat(t,"/credits?"),n="".concat(a).concat(e).concat(i,"&language=en-US");return c.a.get(n).then((function(t){return t.data}))},getReviewMovies:function(t){var e="/3/movie/".concat(t,"/reviews?"),n="".concat(a).concat(e).concat(i,"&language=en-US&page=1");return c.a.get(n).then((function(t){return t.data}))}}},60:function(t,e,n){"use strict";var r,c,i,a=n(97),o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){i=!1}function u(t){if(t){if(t!==r){if(t.length!==o.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==o&&(r=o,s())}function l(){return i||(i=function(){r||u(o);for(var t,e=r.split(""),n=[],c=a.nextValue();e.length>0;)c=a.nextValue(),t=Math.floor(c*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||o},characters:function(t){return u(t),r},seed:function(t){a.seed(t),c!==t&&(s(),c=t)},lookup:function(t){return l()[t]},shuffled:l}},66:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return i}))},94:function(t,e,n){},95:function(t,e,n){"use strict";t.exports=n(96)},96:function(t,e,n){"use strict";var r=n(60),c=n(98),i=n(102),a=n(103)||0;function o(){return c(a)}t.exports=o,t.exports.generate=o,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=i},97:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},98:function(t,e,n){"use strict";var r,c,i=n(99);n(60);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===c?r++:(r=0,c=n),e+=i(7),e+=i(t),r>0&&(e+=i(r)),e+=i(n)}},99:function(t,e,n){"use strict";var r=n(60),c=n(100),i=n(101);t.exports=function(t){for(var e,n=0,a="";!e;)a+=i(c,r.get(),1),e=t<Math.pow(16,n+1),n++;return a}}}]);
//# sourceMappingURL=movieDetais-page.b64f1ea3.chunk.js.map