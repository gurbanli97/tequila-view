(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{441:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(19),c=(n(53),n(1),n(48),n(51),n(5),n(4),n(2),n(6),n(3),n(7),n(67));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,Promise.all([n.dispatch("deeplinks/fetchDeeplinks")]);case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{table:["Solution title","Modified date","Conversion","Clicks","Code preview"],showCodeModal:!1,codeToCopy:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({deeplinks:"deeplinks/deeplinks"})),methods:{handleCodeModal:function(link){this.showCodeModal=!0,this.codeToCopy=link},handleLinkCopy:function(){var link=this.codeToCopy;navigator.clipboard.writeText(link),document.getElementsByClassName("btn-greenland")[1].innerHTML="Copied!"}},mounted:function(){console.log(this.$auth)}},v=d,f=n(16),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"solutions"},[e("PageHeader",{attrs:{title:"My solutions","show-actions":""},scopedSlots:t._u([{key:"actions",fn:function(){return[e("button",{staticClass:"btn btn-greenland",on:{click:function(e){return t.$router.push("/solutions/create")}}},[t._v("Create solution")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"solutions-inner white-panel"},[t._m(0),t._v(" "),e("DataTable",{attrs:{fields:t.table}},[e("tbody",t._l(t.deeplinks,(function(n){return e("tr",{key:n.id},[e("td",[t._v(t._s(n.title))]),t._v(" "),e("td",[t._v(t._s(n.updated_at))]),t._v(" "),e("td",[t._v(t._s(n.conversion))]),t._v(" "),e("td",[t._v(t._s(n.clicks))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-link",on:{click:function(e){return t.handleCodeModal(n.url)}}},[t._v("\n                Show code\n                "),e("Icon",{attrs:{name:"arrow-down"}})],1)])])})),0)]),t._v(" "),e("FormModal",{attrs:{title:"Deeplink code",toggle:t.showCodeModal},on:{close:function(e){t.showCodeModal=!1}}},[e("b-form-group",[e("FormField",{attrs:{value:t.codeToCopy,disabled:""}})],1),t._v(" "),e("button",{staticClass:"btn btn-greenland",on:{click:t.handleLinkCopy}},[t._v("Copy code")])],1)],1)])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"action-tabs"},[e("button",{staticClass:"btn active"},[t._v("Deeplinks")]),t._v(" "),e("button",{staticClass:"btn"},[t._v("Widgets")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormField:n(183).default})}}]);