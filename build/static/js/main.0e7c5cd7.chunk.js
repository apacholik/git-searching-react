(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),o=a.n(s),c=a(6),i=a.n(c),u=a(7),l=a(1),h=a(2),m=a(4),p=a(3),f=a(5),g=(a(19),a(21),a(8)),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={sort:{by:"stars",isOrderByDESC:!0,type:"Number"}},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"changeSorting",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e===this.state.sort.by?this.setState(function(e){return{sort:{by:e.sort.by,isOrderByDESC:!e.sort.isOrderByDESC,type:e.sort.type}}},function(){t.props.onChangeSorting&&t.props.onChangeSorting(Object(g.a)({},t.state.sort))}):this.setState(function(){return{sort:{by:e,isOrderByDESC:!0,type:a}}},function(){t.props.onChangeSorting&&t.props.onChangeSorting(Object(g.a)({},t.state.sort))})}},{key:"sorting",value:function(){var e=this,t=this.state.sort.isOrderByDESC?-1:1;"String"===this.state.sort.type&&(t*=-1);var a=Function("return ".concat(this.state.sort.type))();this.props.children.sort(function(n,r){return a(n[e.state.sort.by])===a(r[e.state.sort.by])?0:a(n[e.state.sort.by])>a(r[e.state.sort.by])?1*t:-1*t})}},{key:"render",value:function(){var e=this;this.sorting();var t=this.props.numberOfRows||5;return r.a.createElement("table",{className:"table is-fullwidth table is-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(b,{className:"has-text-right",onClick:function(){return e.changeSorting("id","Number")},sortIco:"id"===this.state.sort.by?this.state.sort.isOrderByDESC:void 0},"ID"),r.a.createElement(b,{onClick:function(){return e.changeSorting("title","String")},sortIco:"title"===this.state.sort.by?this.state.sort.isOrderByDESC:void 0},"Repo Title"),r.a.createElement(b,{onClick:function(){return e.changeSorting("owner","String")},sortIco:"owner"===this.state.sort.by?this.state.sort.isOrderByDESC:void 0},"Owner"),r.a.createElement(b,{onClick:function(){return e.changeSorting("stars","Number")},sortIco:"stars"===this.state.sort.by?this.state.sort.isOrderByDESC:void 0},"Stars"),r.a.createElement(b,{onClick:function(){return e.changeSorting("createAt","String")},sortIco:"createAt"===this.state.sort.by?this.state.sort.isOrderByDESC:void 0},"Create at"))),r.a.createElement("tbody",null,this.props.children.slice(this.props.startItemBy,t+this.props.startItemBy).map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"has-text-centered"},e.id),r.a.createElement("td",{className:"has-text-centered"},e.title),r.a.createElement("td",{className:"has-text-centered"},e.owner),r.a.createElement("td",{className:"has-text-centered"},e.stars),r.a.createElement("td",{className:"has-text-centered"},e.createAt))})))}}]),t}(r.a.Component),b=function(e){var t=e.children,a=e.onClick,n=e.className,s=e.sortIco,o=[r.a.createElement("span",{key:"desc",className:"icon"},r.a.createElement("i",{className:"fas fa-sort-down"})),r.a.createElement("span",{key:"asc",className:"icon"},r.a.createElement("i",{className:"fas fa-sort-up"}))];return r.a.createElement("th",{className:void 0===n?"has-text-centered":n,onClick:function(){return a()}},void 0!==s?o[Number(s)]:"",t)},y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).render=function(){return r.a.createElement("div",{className:"control has-icons-right"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Search...",onChange:function(){return a.delayForWriteEnd()},ref:a.inputRef}),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-search"})))},a.timeoutFingerprint=null,a.inputRef=new r.a.createRef,a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"delayForWriteEnd",value:function(){var e=this;clearInterval(this.timeoutFingerprint),this.timeoutFingerprint=setTimeout(function(){if(!e.props.onChange)throw new ReferenceError("Not add props onChange");e.props.onChange(e.inputRef.current.value)},1500)}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pagesNumber,a=e.onClick,n=this.props.actualPage||1;if(!a)throw new ReferenceError("Not add props onChange");for(var s=[],o=function(e){s.push(r.a.createElement("button",{key:e,className:"button is-text ".concat(n===e?"is-active":""),onClick:function(){return a(e)}},e))},c=1;c<=t;c++)o(c);return s}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){for(var e=this,t=this.props,a=t.maxNumberOfRows,n=t.stepBy,s=[],o=n;o<=a;o+=n)s.push(r.a.createElement("option",{key:o,value:o},o));return r.a.createElement("div",{className:"select is-small"},r.a.createElement("select",{onChange:function(t){e.props.onChange(t.target.value)}},s))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={githubRepos:[],pages:0,actualPage:1,startShowResultByItem:0,numberOfRows:5},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"searchInGithubRepositories",value:function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchParameters=new URLSearchParams("q=test&sort=stars&order=desc&page=1"),this.searchParameters.set("q",t),e.next=4,fetch("".concat("https://api.github.com/search/repositories","?").concat(this.searchParameters.toString())).then(function(e){return e.json()});case 4:(a=e.sent).items?this.setState(function(e){return{githubRepos:a.items.map(function(e){var t=new Date(e.created_at);return{id:e.id,title:e.name,owner:e.owner.login,stars:e.stargazers_count,createAt:"".concat(t.getFullYear(),"-").concat(t.getMonth()<9?"0".concat(t.getMonth()+1):"".concat(t.getMonth()+1),"-").concat(t.getDate()<10?"0".concat(t.getDate()):"".concat(t.getDate()))}}),pages:a.items.length/e.numberOfRows}}):a.errors&&(n="I'hv got errors:",a.errors.forEach(function(e){n+="\n".concat(e.message)}),alert(n));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"goToPage",value:function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState(function(e){return{actualPage:t,startShowResultByItem:(t-1)*e.numberOfRows}}),window.scrollTo(0,0);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"changeNumberOfShownRows",value:function(e){var t=this,a=parseInt(e,10);this.setState(function(e){return{numberOfRows:a,pages:Math.round(e.pages*e.numberOfRows/a)}},function(){return t.goToPage(1)})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-three-fifths is-offset-one-fifth"},r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement("div",{className:"column is-full"},r.a.createElement(y,{onChange:function(t){return e.searchInGithubRepositories(t)}})),r.a.createElement("div",{className:"column is-full has-text-right"},r.a.createElement(E,{maxNumberOfRows:20,stepBy:5,onChange:function(t){return e.changeNumberOfShownRows(t)}}),r.a.createElement("span",null," rows per page")),r.a.createElement("div",{className:"column is-full"},r.a.createElement(d,{startItemBy:this.state.startShowResultByItem,numberOfRows:this.state.numberOfRows},this.state.githubRepos)),r.a.createElement("div",{className:"column is-full has-text-centered"},r.a.createElement(v,{pagesNumber:this.state.pages,actualPage:this.state.actualPage,onClick:function(t){return e.goToPage(t)}}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.0e7c5cd7.chunk.js.map