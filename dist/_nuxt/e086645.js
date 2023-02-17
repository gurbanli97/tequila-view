(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{449:function(t,e,r){"use strict";r.r(e);r(1),r(3),r(13);var o={data:function(){return{createWidgetForm:{type:"",screen_size_width:400,primary_color:"",result_background_color:"",search_form_background_color:"",search_form_text_color:"",search_form_secondary_text_color:""}}},methods:{handletWidgetSelect:function(t,e){document.querySelectorAll(".widget-type > div").forEach((function(t){t.classList.remove("selected")})),t.target.parentElement.classList.add("selected"),this.createWidgetForm.type=e},openColorPicker:function(t){t.target.children[0].showPicker()},handleWidgetCreate:function(){this.$store.dispatch("widgets/createWidget",this.createWidgetForm)},prepareFrame:function(){var iframe=document.createElement("iframe");iframe.setAttribute("src","http://localhost:3000/widgets?type=".concat(this.createWidgetForm.type,"&bg_color=").concat(this.createWidgetForm.result_background_color)),iframe.setAttribute("width","400px"),iframe.setAttribute("height","400px"),iframe.setAttribute("frameborder","0"),console.log(iframe)}}},c=r(16),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"widgets create"},[e("PageHeader",{attrs:{title:"Widgets","show-actions":"","show-back-button":""},scopedSlots:t._u([{key:"actions",fn:function(){return[e("button",{staticClass:"btn btn-preview",on:{click:t.prepareFrame}},[t._v("Preview")]),t._v(" "),e("button",{staticClass:"btn btn-code"},[t._v("View code")]),t._v(" "),e("button",{staticClass:"btn btn-greenland",on:{click:t.handleWidgetCreate}},[t._v("Save")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"widgets-create-inner"},[e("div",{staticClass:"create-widget-forms"},[e("div",{staticClass:"create general"},[t._m(0),t._v(" "),e("div",{staticClass:"body"},[e("FormField",{attrs:{placeholder:"Enter widget name"}})],1)]),t._v(" "),e("div",{staticClass:"create type"},[t._m(1),t._v(" "),e("div",{staticClass:"row body align-items-start flex-wrap"},[e("div",{staticClass:"widget-type full col-4"},[e("span",[t._v("Full widget")]),t._v(" "),e("div",{on:{click:function(e){return t.handletWidgetSelect(e,"full_widget")}}},[e("img",{attrs:{src:"/images/widgets/full.svg",alt:"full-widget"}})])]),t._v(" "),e("div",{staticClass:"widget-type price col-4"},[e("span",[t._v("Price widget")]),t._v(" "),e("div",{on:{click:function(e){return t.handletWidgetSelect(e,"price_widget")}}},[e("img",{attrs:{src:"/images/widgets/price.svg",alt:"price-widget"}})])]),t._v(" "),e("div",{staticClass:"widget-type horizontal col-4"},[e("span",[t._v("Horizontal line widget")]),t._v(" "),e("div",{on:{click:function(e){return t.handletWidgetSelect(e,"horizontal_widget")}}},[e("img",{attrs:{src:"/images/widgets/horizontal.svg",alt:"horizontal-widget"}})])])])]),t._v(" "),e("div",{staticClass:"create colors"},[t._m(2),t._v(" "),e("div",{staticClass:"body"},[e("h4",[t._v("Colors")]),t._v(" "),e("div",{staticClass:"row mt-4 justify-content-between flex-wrap"},[e("b-form-group",{staticClass:"col-4",attrs:{label:"Primary"}},[e("div",{staticClass:"color-picker",on:{click:function(e){return t.openColorPicker(e)}}},[t._v("\n                "+t._s(t.createWidgetForm.primary_color)+"\n                "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createWidgetForm.primary_color,expression:"createWidgetForm.primary_color"}],attrs:{type:"color"},domProps:{value:t.createWidgetForm.primary_color},on:{input:function(e){e.target.composing||t.$set(t.createWidgetForm,"primary_color",e.target.value)}}})])]),t._v(" "),e("b-form-group",{staticClass:"col-4",attrs:{label:"Result background"}},[e("div",{staticClass:"color-picker",on:{click:function(e){return t.openColorPicker(e)}}},[t._v("\n                "+t._s(t.createWidgetForm.result_background_color)+"\n                "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createWidgetForm.result_background_color,expression:"createWidgetForm.result_background_color"}],attrs:{type:"color"},domProps:{value:t.createWidgetForm.result_background_color},on:{input:function(e){e.target.composing||t.$set(t.createWidgetForm,"result_background_color",e.target.value)}}})])]),t._v(" "),e("b-form-group",{staticClass:"col-4",attrs:{label:"Result background"}},[e("div",{staticClass:"color-picker",on:{click:function(e){return t.openColorPicker(e)}}},[t._v("\n                "+t._s(t.createWidgetForm.search_form_background_color)+"\n                "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createWidgetForm.search_form_background_color,expression:"createWidgetForm.search_form_background_color"}],attrs:{type:"color"},domProps:{value:t.createWidgetForm.search_form_background_color},on:{input:function(e){e.target.composing||t.$set(t.createWidgetForm,"search_form_background_color",e.target.value)}}})])]),t._v(" "),e("b-form-group",{staticClass:"col-4",attrs:{label:"Result background"}},[e("div",{staticClass:"color-picker",on:{click:function(e){return t.openColorPicker(e)}}},[t._v("\n                "+t._s(t.createWidgetForm.search_form_text_color)+"\n                "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createWidgetForm.search_form_text_color,expression:"createWidgetForm.search_form_text_color"}],attrs:{type:"color"},domProps:{value:t.createWidgetForm.search_form_text_color},on:{input:function(e){e.target.composing||t.$set(t.createWidgetForm,"search_form_text_color",e.target.value)}}})])]),t._v(" "),e("b-form-group",{staticClass:"col-4",attrs:{label:"Result background"}},[e("div",{staticClass:"color-picker",on:{click:function(e){return t.openColorPicker(e)}}},[t._v("\n                "+t._s(t.createWidgetForm.search_form_secondary_text_color)+"\n                "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createWidgetForm.search_form_secondary_text_color,expression:"createWidgetForm.search_form_secondary_text_color"}],attrs:{type:"color"},domProps:{value:t.createWidgetForm.search_form_secondary_text_color},on:{input:function(e){e.target.composing||t.$set(t.createWidgetForm,"search_form_secondary_text_color",e.target.value)}}})])])],1)])])])])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"head"},[e("div",[e("span",[t._v("1")]),t._v(" "),e("h3",[t._v("General")])]),t._v(" "),e("button",{staticClass:"btn"},[t._v("Edit")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"head"},[e("div",[e("span",[t._v("2")]),t._v(" "),e("h3",[t._v("Widget type")])]),t._v(" "),e("button",{staticClass:"btn"},[t._v("Edit")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"head"},[e("div",[e("span",[t._v("3")]),t._v(" "),e("h3",[t._v("Appearance")])]),t._v(" "),e("button",{staticClass:"btn"},[t._v("Edit")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormField:r(183).default})}}]);