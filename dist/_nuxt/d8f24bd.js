(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{432:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{fields:["Operation ID","Amount","Payout method","Status"],items:[{id:1,operation_id:"487486785768576586",amount:"830.00",method:"Payoneer",status:"Pending"},{id:2,operation_id:"487486785768576586",amount:"830.00",method:"Payoneer",status:"Cancelled"},{id:3,operation_id:"487486785768576586",amount:"830.00",method:"Payoneer",status:"Done"}]}},methods:{statusType:function(t){switch(t){case"Pending":return"clock";case"Done":return"tick-circle";case"Cancelled":return"close-circle-2"}}}},d=n(16),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"payouts"},[e("PageHeader",{attrs:{title:"Billings"}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"payouts-inner white-panel"},[e("DataTable",{attrs:{fields:t.fields}},[e("tbody",t._l(t.items,(function(n){return e("tr",{key:n.id},[e("td",[e("span",[t._v(t._s(n.operation_id))])]),t._v(" "),e("td",[e("span",[t._v(t._s(n.amount))])]),t._v(" "),e("td",[e("span",[t._v(t._s(n.method))])]),t._v(" "),e("td",[e("span",{class:["status-field","status-".concat(n.status.toLowerCase())]},[e("Icon",{attrs:{name:t.statusType(n.status)}}),t._v("\n                "+t._s(n.status)+"\n              ")],1)])])})),0)])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);