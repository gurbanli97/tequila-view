(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{444:function(e,t,r){"use strict";r.r(t);r(36),r(5),r(4),r(2),r(1),r(6),r(3),r(7);var l=r(0);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={data:function(){return{dateRange:[],filters:{searchInput:"",travelTo:"",specialist:"",status:""},type_options:[{label:"String",value:"string"},{label:"Boolean",value:"bool"},{label:"Select",value:"select"}]}},watch:{},created:function(){var e=this;this.$nuxt.$on("clear-filters",(function(){e.dateRange=[],e.filters.travelTo="",e.filters.specialist="",e.filters.status="",e.filters.searchInput="",e.$router.push({query:{}})}))},beforeDestroy:function(){this.$nuxt.$off("clear-filters")},methods:{handleChange:function(){var e=this;this.$nextTick((function(){e.dateRange.length?e.$router.push({query:o({dateFrom:e.dateRange[0],dateTo:e.dateRange[1]},e.$mapObjectToQuery(e.filters))}):e.$router.push({query:o({},e.$mapObjectToQuery(e.filters))})}))}}},f=r(16),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"filters"},[t("b-row",{staticClass:"align-items-end"},[t("b-col",{attrs:{xl:"3"}},[t("b-form-group",{attrs:{label:"Date range"}},[t("date-picker",{attrs:{range:"","value-type":"YYYY-MM-DD",type:"date",placeholder:"Enter date range"},on:{change:e.handleChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1)],1),e._v(" "),t("b-col",{attrs:{xl:"3"}},[t("b-form-group",{attrs:{label:"Travel to"}},[t("v-select",{attrs:{placeholder:"All",options:e.type_options,"close-on-select":!0,clearable:!1,reduce:function(data){return data.value}},on:{input:e.handleChange},model:{value:e.filters.travelTo,callback:function(t){e.$set(e.filters,"travelTo",t)},expression:"filters.travelTo"}})],1)],1),e._v(" "),t("b-col",{attrs:{xl:"3"}},[t("b-form-group",{attrs:{label:"Specialist"}},[t("v-select",{attrs:{options:e.type_options,"close-on-select":!0,clearable:!1,reduce:function(data){return data.value}},on:{input:e.handleChange},model:{value:e.filters.specialist,callback:function(t){e.$set(e.filters,"specialist",t)},expression:"filters.specialist"}})],1)],1),e._v(" "),t("b-col",{attrs:{xl:"3"}},[t("b-form-group",{attrs:{label:"Status"}},[t("v-select",{attrs:{options:e.type_options,"close-on-select":!0,clearable:!1,reduce:function(data){return data.value}},on:{input:e.handleChange},model:{value:e.filters.status,callback:function(t){e.$set(e.filters,"status",t)},expression:"filters.status"}})],1)],1),e._v(" "),t("b-col",{staticClass:"mt-4",attrs:{xl:"3"}},[t("form-field",{attrs:{placeholder:"Search","input-style":"search"},on:{input:e.handleChange},model:{value:e.filters.searchInput,callback:function(t){e.$set(e.filters,"searchInput","string"==typeof t?t.trim():t)},expression:"filters.searchInput"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormField:r(177).default})}}]);