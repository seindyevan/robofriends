(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(6),i=n.n(c),s=(n(18),n(2)),a=n(3),u=n(5),l=n(4),h=n(7),d=n(1),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!=t.count}},{key:"render",value:function(){return console.log("Counter button"),Object(d.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(o.PureComponent),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(b,{color:"red"})]})}}]),n}(o.Component),f=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},p=function(e){var t=e.id,n=e.name,o=e.email;return Object(d.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:o})]})]})},g=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,t){return Object(d.jsx)(p,{id:e.id,name:e.name,email:e.email},t)}))})},v=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"},children:e.children})},O=(n(26),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Oooops... this is not good"}):this.props.children}}]),n}(o.Component)),w="CHANGE_SEARCH_FIELD",m="REQUEST_ROBOTS_PENDING",x="REQUEST_ROBOTS_SUCCESS",y="REQUEST_ROBOTS_FAILED",C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,r=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r?Object(d.jsx)("h1",{children:"Loading"}):Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)(j,{}),Object(d.jsx)(f,{searchChange:n}),Object(d.jsx)(v,{children:Object(d.jsx)(O,{children:Object(d.jsx)(g,{robots:c})})})]})}}]),n}(o.Component),k=Object(h.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:w,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:m}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:x,payload:t})})).catch((function(t){return e({type:y,payload:t})}))}))}}}))(C),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))},R=(n(27),{searchField:""}),E={isPending:!1,robots:[],error:""},P=n(8),F=n(12),L=n(13),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=Object(F.createLogger)(),W=Object(P.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{isPending:!0});case x:return Object.assign({},e,{robots:t.payload,isPending:!1});case y:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(P.c)(W,Object(P.a)(L.a,U));i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h.a,{store:_,children:Object(d.jsx)(k,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):T(t,e)}))}}(),S()}},[[29,1,2]]]);
//# sourceMappingURL=main.1b18a2eb.chunk.js.map