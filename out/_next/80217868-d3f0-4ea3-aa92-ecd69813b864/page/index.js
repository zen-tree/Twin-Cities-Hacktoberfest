module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([2],{284:function(e,t,n){e.exports=n(285)},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),o=n.n(r),a=n(0),s=n.n(a),i=n(28),u=n.n(i),c=n(87),l=n.n(c),p=n(51),f=n(53),m=n(81),d=n.n(m);n(85),n(86);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(r=(t.__proto__||Object.getPrototypeOf(t)).call(this))||"object"!==h(r)&&"function"!=typeof r?y(n):r).formattedDate=e.formattedDate.bind(y(e)),e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.a),n=t,(r=[{key:"formattedDate",value:function(e){var t=this.props.postDate,n=new Date(t).getFullYear(),r=new Date(t).getMonth(),o=new Date(t).getDate();return["January","February","March","April","May","June","July","August","September","October","November","December"][r]+" "+o+", "+n}},{key:"render",value:function(){return s.a.createElement("article",{className:"blog-list--item"},s.a.createElement("header",null,s.a.createElement(u.a,{as:"/blog/".concat(this.props.postSlug),href:"/blog?id=".concat(this.props.postSlug)},s.a.createElement("a",{className:"blog-list--title",dangerouslySetInnerHTML:{__html:this.props.postTitle}})),s.a.createElement("div",{className:"blog-list--time",dateTime:this.props.postDate},this.formattedDate())),s.a.createElement("p",{className:"blog-list--description",dangerouslySetInnerHTML:{__html:this.props.postContent}}),s.a.createElement("div",{className:"mr-btn--group"},s.a.createElement(u.a,{as:"/blog/".concat(this.props.postSlug),href:"/blog?id=".concat(this.props.postSlug)},s.a.createElement("a",{className:"mr-btn"},"Read more"))))}}])&&b(n.prototype,r),o&&b(n,o),t}(),v=n(52);var w=function(e){return s.a.createElement(p.a,{title:"Mathias Rechtzigel | Homepage",displayTitle:"Mathias Rechtzigel",description:"Developer, User Experience Designer, Digital Strategist",metaDescription:"This is the meta description",showTitleCard:!0},s.a.createElement(f.a,null,s.a.createElement(v.a,{sectionTitle:"Latest Articles"}),e.posts.map(function(e){return s.a.createElement(g,{postSlug:e.slug,postTitle:e.title.rendered,postContent:e.acf.blog_sneak_peak,postDate:e.date,key:e.slug+e.date})})))};w.getInitialProps=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function s(e,t){try{var n=a[e](t),s=n.value}catch(e){return void o(e)}n.done?r(s):Promise.resolve(s).then(i,u)}function i(e){s("next",e)}function u(e){s("throw",e)}i()})}}(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("http://142.93.82.174/wp-json/wp/v2/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log("Show data fetched. Count: ".concat(n.length)),e.abrupt("return",{posts:n});case 8:case"end":return e.stop()}},e,this)}));t.default=w},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var a in o.open(t.method||"get",e,!0),t.headers)o.setRequestHeader(a,t.headers[a]);function s(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,a,s){t.push(a=a.toLowerCase()),n.push([a,s]),e=r[a],r[a]=e?e+","+s:s}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:s,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(s())},o.onerror=r,o.send(t.body)})};t.default=r},87:function(e,t,n){e.exports=window.fetch||(window.fetch=n(39).default||n(39))}},[284]).default}});