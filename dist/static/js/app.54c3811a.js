(function(t){function e(e){for(var a,i,l=e[0],r=e[1],c=e[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var r=n[l];0!==o[r]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05d6":function(t,e,n){},"10de":function(t,e,n){},"230f":function(t,e,n){"use strict";var a=n("65ed"),o=n.n(a);o.a},"2a1c":function(t,e,n){},"518d":function(t,e,n){"use strict";var a=n("6cd3"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("p",{staticClass:"title"},[t._v("自定义组件汇总")]),n("ul",{staticClass:"menu-list"},[n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/"}},[t._v("表单组件")])],1),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/commoncss"}},[t._v("常用样式")])],1),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/dragSortPage"}},[t._v("拖动排序")])],1)]),n("div",{staticClass:"main-wrap"},[n("router-view")],1)])},s=[],i=(n("5c0b"),n("efc0"),n("2877")),l={},r=Object(i["a"])(l,o,s,!1,null,"29e9dd66",null),c=r.exports,p=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"item-wrap"},[n("router-view")],1)])},d=[],f={name:"home",data:function(){return{}},mounted:function(){},methods:{}},m=f,h=(n("d9c3"),Object(i["a"])(m,u,d,!1,null,"b0cdd474",null)),b=(h.exports,function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],v={},g=Object(i["a"])(v,b,C,!1,null,null,null),w=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-list-page-wrap"},[n("div",{staticClass:"item-wrap"},[t._m(0),n("div",{staticClass:"item-cpm"},[n("cpm-CustomSelect",t._b({on:{selectCallback:t.selectCallback}},"cpm-CustomSelect",t.selectConfig,!1))],1)]),t._m(1),n("div",{staticClass:"item-wrap"},[t._m(2),n("div",{staticClass:"item-cpm",staticStyle:{width:"100%"}},[n("p",{staticClass:"line-box"},[n("button",{staticClass:"btn btn-def",on:{click:t.showCheckList}},[t._v("显示选中的内容")]),n("button",{staticClass:"btn btn-del",on:{click:t.showCheckList}},[t._v("批量删除")])]),n("cpm-TableList",t._b({on:{tableCallback:t.tableCallback,pageCallback:t.pageCallback,checkCallback:t.checkCallback}},"cpm-TableList",t.tableConfig,!1))],1)]),n("div",{staticClass:"item-wrap"},[t._m(3),n("div",{staticClass:"item-cpm",staticStyle:{width:"100%"}},[n("button",{staticClass:"btn btn-def",on:{click:t.showPopupLoad}},[t._v("显示加载弹窗")]),n("button",{staticClass:"btn btn-def",on:{click:t.showPopupToast}},[t._v("显示toast弹窗")]),n("button",{staticClass:"btn btn-def",on:{click:t.showPopupConfirm}},[t._v("显示confirm弹窗")]),n("button",{staticClass:"btn btn-def",on:{click:t.showPopupPrompt}},[t._v("显示prompt弹窗")]),n("cpm-PopupToast",t._b({},"cpm-PopupToast",t.popupLoadConfig,!1)),n("cpm-PopupToast",t._b({},"cpm-PopupToast",t.popupToastConfig,!1)),n("cpm-PopupConfirm",t._b({on:{callback:t.confirmCallback},scopedSlots:t._u([{key:"content",fn:function(){return[t._v(t._s(t.PopupConfirmConfig.msg))]},proxy:!0}])},"cpm-PopupConfirm",t.PopupConfirmConfig,!1)),n("cpm-PopupPrompt",t._b({on:{callback:t.promptCallback}},"cpm-PopupPrompt",t.PopupPromptConfig,!1))],1)])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"item-title"},[n("span",[t._v("select单选组件")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-wrap"},[n("p",{staticClass:"item-title"},[n("span",[t._v("select多选组件")])]),n("div",{staticClass:"item-cpm"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"item-title"},[n("span",[t._v("tableList组件")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"item-title"},[n("span",[t._v("弹窗组件")])])}],_=n("b646"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"clickOut",rawName:"v-clickOut",value:t.hideSelect,expression:"hideSelect"}],staticClass:"custom-select",attrs:{id:t.getRandom("custom-select-",1,100)}},[n("p",{staticClass:"selected-item",class:{"default-item":0===t.selectedItem.key||""===t.selectedItem.key},attrs:{id:t.getRandom("select-default-",1,100)},on:{click:function(e){t.showSel=!t.showSel}}},[t._v(t._s(t.selectedItem.value)),n("i",{staticClass:"icon-arrow"})]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showSel,expression:"showSel"}],staticClass:"select-item-list",staticStyle:{display:"none"},attrs:{id:t.getRandom("select-list-",1,100)}},[n("vperfect-scrollbar",{ref:"scroll",staticClass:"tabel",attrs:{settings:t.settings},on:{"ps-scroll-y":t.scrollY,"ps-y-reach-end":t.scrollEnd}},t._l(t.dataArr,(function(e,a){return n("li",{key:"time_"+a,class:{active:t.selectedItem.key===e.key||(0===t.selectedItem.key||""===t.selectedItem.key)&&0===a},on:{click:function(n){return n.stopPropagation(),t.selectCallback(e)}}},[t._v(t._s(e.value))])})),0)],1)])},P=[],S=n("9d63"),T=n.n(S),O={name:"CustomSelect",props:{selectedItem:{type:Object,default:function(){return{}}},showSelect:{type:Boolean,default:!1},dataArr:{type:Array,default:function(){return[]}}},components:{"vperfect-scrollbar":T.a},data:function(){return{showSel:!1,counter:0,settings:{wheelSpeed:.5,mark:!1}}},directives:{clickOut:{bind:function(t,e){function n(n){!t.contains(n.target)&&e.expression&&e.value()}t.handler=n,document.addEventListener("click",t.handler)},unbind:function(t){document.removeEventListener("click",t.handler)}}},watch:{showSelect:function(t,e){this.showSel=t}},mounted:function(){var t=this;t.showSel=t.showSelect},methods:{selectCallback:function(t){this.$emit("selectCallback",t),this.showSel=!1},hideSelect:function(){this.showSel=!1},getRandom:function(t,e,n){var a=Math.floor(Math.random()*(n-e+1))+e;return t+a},scrollY:function(){this.settings.mark=!0},scrollEnd:function(){}}},L=O,$=(n("230f"),Object(i["a"])(L,y,P,!1,null,"7ef83ae0",null)),E=$.exports,j=n("bc3a"),R=n.n(j),z=n("a7fe"),I=n.n(z);a["a"].use(I.a,R.a);var D=a["a"].axios.create({baseURL:"http://localhost:8080/",withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},transformRequest:[function(t){var e="";for(var n in t)!0===t.hasOwnProperty(n)&&(e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&");return e}]});function A(t,e,n,a){D({method:t,url:e,data:"POST"===t||"PUT"===t?n:null,params:"GET"===t||"DELETE"===t?n:null}).then((function(t){a(t)})).catch((function(t){a(t)}))}function B(t,e){A("GET","/testApi/getDataList",t,(function(t){e(t.data)}))}var F=n("96eb"),M=n.n(F);M.a.setup({timeout:"100-1000"}),M.a.mock(/(\/testApi\/getDataList)/,{msgCode:200,result:{"data|12":[{colOne:"@cname()",colTwo:"@name()",colThree:"@cword(5, 20)",colFour:"@word(5, 20)",colFive:"@csentence()"}],totalSize:210}});var J={name:"FormListPage",components:{cpmCustomSelect:E,cpmTableList:_["TableList"],cpmPopupToast:_["PopupToast"],cpmPopupConfirm:_["PopupConfirm"],cpmPopupPrompt:_["PopupPrompt"]},data:function(){return{selectConfig:{selectedItem:{key:0,value:"请选择项目"},showSelect:!1,dataArr:[{key:1,value:"选择项一"},{key:2,value:"选择项二"},{key:3,value:"选择项三"},{key:4,value:"选择项四"},{key:5,value:"选择项五"},{key:6,value:"选择项六"},{key:7,value:"选择项七"},{key:8,value:"选择项八"}]},tableConfig:{tableCols:[{title:"列一",name:"colOne"},{title:"列二",name:"colTwo"},{title:"列三",name:"colThree"},{title:"列四",name:"colFour"},{title:"列五",name:"colFive"},{title:"操作",name:"button"},{title:"内嵌标签",name:"innerHtml"}],dataList:[],curPage:1,pageSize:12,totalPage:1,showCheckbox:!0},popupLoadConfig:{msg:"加载中...",direction:"vr",duration:3e3,type:"loading"},popupToastConfig:{msg:"依赖包完成",direction:"vr",duration:3e3,type:"success"},PopupConfirmConfig:{show:!1,title:"提示",msg:"您已经成功引入自定义的弹窗组件了吗？"},PopupPromptConfig:{show:!1,title:"输入信息",inputType:"password"}}},mounted:function(){this.getTableDataList()},methods:{selectCallback:function(t){this.selectConfig.selectedItem=t,console.log("selectCallback-----result=",JSON.stringify(t))},getTableDataList:function(){var t=this;t.tableConfig.dataList=[],B("",(function(e){t.tableConfig.dataList=e.result.data.map((function(t,e){return t.checked=!1,t.button=[{theme:"info",text:"详情"},{theme:"def",text:"编辑"},{theme:"del",text:"删除"}],t.innerHtml='<a href="http://www.baidu.com" style="color:#0079FF;">标签</a>',t})),t.tableConfig.totalPage=Math.ceil(e.result.totalSize/t.tableConfig.pageSize)}))},showCheckList:function(){var t=this,e=t.tableConfig.dataList.filter((function(t,e){return!0===t.checked}));console.log("选中的内容暂时在控制台显示：",e)},tableCallback:function(t){console.log("tableCallback-----result=",JSON.stringify(t))},pageCallback:function(t){this.tableConfig.curPage=t.currentPage,this.getTableDataList(),console.log("pageCallback-----result=",JSON.stringify(t))},checkCallback:function(t){this.tableConfig.dataList=t},showPopupLoad:function(){var t=this;t.$eventbus.$emit("toast",t.popupLoadConfig)},showPopupToast:function(){this.$eventbus.$emit("toast",this.popupToastConfig)},showPopupConfirm:function(){this.PopupConfirmConfig.show=!0},confirmCallback:function(t){this.PopupConfirmConfig.show=!1,0===t.index&&(this.popupToastConfig.msg="更新成功",this.$eventbus.$emit("toast",this.popupToastConfig))},showPopupPrompt:function(){this.PopupPromptConfig.show=!0},promptCallback:function(t){this.PopupPromptConfig.show=!1,0===t.index&&(this.popupToastConfig.msg="您输入的内容是："+t.text,this.popupToastConfig.type="info",this.$eventbus.$emit("toast",this.popupToastConfig))}}},N=J,U=(n("518d"),n("83b9"),Object(i["a"])(N,x,k,!1,null,"814f5e14",null)),G=U.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"commoncss-page-wrap"},[n("cpm-commoncss")],1)},Y=[],q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-css-wrap"},[n("ul",{staticClass:"list-viewer"},[n("li",{staticClass:"list-item"},[n("p",{staticClass:"title none-user-select"},[n("i",{staticClass:"title-mark"}),t._v("不让文本被选中，你选中不到我！！！")]),n("pre",[t._v("        -webkit-user-select: none;\n        -moz-user-select: none;\n        -o-user-select: none;\n        user-select: none;")])]),n("li",{staticClass:"list-item"},[n("p",{staticClass:"title text-over-line"},[n("i",{staticClass:"title-mark"}),t._v("单行文本溢出省略号，一大群测试文字来袭，测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试")]),n("pre",[t._v("        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;")]),n("p",{staticClass:"notes"},[t._v("注：该标签的width如果不是100%，则需要设置其width，否则可能无效。")])]),n("li",{staticClass:"list-item"},[n("p",{staticClass:"title text-over-multiline"},[n("i",{staticClass:"title-mark"}),t._v("多行文本溢出省略号，一大群测试文字来袭，测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试")]),n("pre",[t._v("        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 2;\n        overflow: hidden;")]),n("p",{staticClass:"notes"},[t._v("注：该标签的width如果不是100%，则需要设置其width，否则可能无效。")])]),n("li",{staticClass:"list-item"},[n("p",{staticClass:"title"},[n("i",{staticClass:"title-mark"}),t._v("三角实心箭头，快来看，三角实心箭头在这 >>>>>> "),n("i",{staticClass:"icon-solid-arrow"})]),n("pre",[t._v('        .icon-solid-arrow{\n          width: 20px;\n          height: 20px;\n          display: inline-block;\n          border-bottom: 10px transparent dashed;\n          border-left: 10px transparent dashed;\n          border-right: 10px transparent dashed;\n          border-top: 10px solid #999999;\n        }\n\n        <i class="icon-solid-arrow"></i>\n      ')]),n("p",{staticClass:"notes"},[t._v("注：根据箭头方向来调整对应border上面的参数。")])]),n("li",{staticClass:"list-item"},[n("p",{staticClass:"title"},[n("i",{staticClass:"title-mark"}),t._v("三角空心箭头，快来看，三角空心箭头在这 >>>>>> "),n("i",{staticClass:"icon-hollow-arrow"})]),n("pre",[t._v("        .icon-hollow-arrow{\n          width: 20px;\n          height: 20px;\n          display: inline-block;\n          position: relative;\n          overflow: hidden;\n\n          &::before,\n          &::after{\n            width: 0;\n            height: 0;\n            content: '';\n            display: block;\n            position: absolute;\n            border-bottom: 10px transparent dashed;\n            border-left: 10px transparent dashed;\n            border-right: 10px transparent dashed;\n          }\n\n          &::before{\n            border-top: 10px solid #999999;\n            left: 0;\n            top: 0;\n          }\n\n          &::after{\n            border-top: 10px solid #ffffff;\n            left: 0;\n            top: -1px;\n          }\n        }\n\n        <i class=\"icon-hollow-arrow\"></i>\n      ")]),n("p",{staticClass:"notes"},[t._v("注：根据箭头方向来调整对应border上面的参数。")])]),n("li",{staticClass:"list-item"},[n("p",{staticClass:"title"},[n("i",{staticClass:"title-mark"}),t._v("水滴形状，快看！它在这，有点丑的水滴 >>>>>> "),n("i",{staticClass:"icon-water-drop"},[n("span",{staticClass:"text"},[t._v("A")]),n("span",{staticClass:"water-drop"})])]),n("pre",[t._v('        .icon-water-drop{\n          width: 20px;\n          height: 20px;\n          display: inline-block;\n          position: relative;\n\n          .water-drop,\n          .text{\n            width: 20px;\n            height: 20px;\n            display: block;\n            position: relative;\n            color: #fff;\n            text-align: center;\n            font-size: 14px;\n            line-height: 20px;\n            font-style: normal;\n          }\n\n          .text {\n            position: absolute;\n            z-index: 100;\n          }\n\n          .water-drop:before {\n            content: \'\';\n            width: 20px;\n            height: 20px;\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            z-index: 1;\n            background: #BCBCBC;\n            border-radius: 20px;\n          }\n\n          .water-drop:after {\n            content: \'\';\n            height: 0;\n            width: 0;\n            border: 8px transparent solid;\n            display: block;\n            position: absolute;\n            top: 2px;\n            left: 15px;\n            border-right: 8px solid transparent;\n            border-bottom: 8px solid transparent;\n            border-left: 8px solid #BCBCBC;\n          }\n        }\n\n        <i class="icon-water-drop"><span class="text">A</span><span class="water-drop"></span></i>\n      ')]),n("p",{staticClass:"notes"})]),n("li",{staticClass:"list-item"},[n("p",{staticClass:"title"},[n("i",{staticClass:"title-mark"}),t._v("input的复选框checkbox的样式修改，他在这！！！ >>>>>> "),n("span",{staticClass:"new-checkbox"},[n("input",{attrs:{type:"checkbox",id:"newCheckbox"}}),n("label",{attrs:{for:"newCheckbox"}},[t._v("选项")])])]),n("pre",[t._v('        .new-checkbox{\n          height: 18px;\n          line-height: 18px;\n          display: inline-flex;\n          align-items: center;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -o-user-select: none;\n          user-select: none;\n\n          input[type="checkbox"]{\n            width: 17px;\n            height: 17px;\n            position: relative;\n            border-radius: 2px;\n            cursor: pointer;\n            margin-right: 8px;\n\n            &::before {\n              content: \'\';\n              position: absolute;\n              top: 0;\n              left: 0;\n              width: 16px;\n              height: 16px;\n              line-height: 17px;\n              text-align: center;\n              color: #dddddd;\n              font-size: 16px;\n              background-color: #ffffff;\n              border-radius: 2px;\n              border: 1px solid #dddddd;\n            }\n\n            &:checked::before{\n              content: "\\2713";\n              border-color: #298fff;\n              color: #298fff;\n              font-weight: bold;\n            }\n          }\n\n          label{\n            height: 18px;\n            display: inline-block;\n            font-size: 14px;\n            cursor: pointer;\n          }\n        }\n\n        <span class="new-checkbox"><input type="checkbox" id="newCheckbox" /><label for="newCheckbox">选项</label></span>\n      ')]),n("p",{staticClass:"notes"},[t._v("注：因为选中项点击快的快，文字会被选中，让文字不被选中，体验效果更好哦。")])]),n("li",{staticClass:"list-item"},[n("p",{staticClass:"title"},[n("i",{staticClass:"title-mark"}),t._v("input的复选框radio的样式修改，他在这！！！ >>>>>> "),n("span",{staticClass:"new-radio"},[n("input",{attrs:{type:"radio",id:"newRadio1",name:"new_radio",checked:""}}),n("label",{attrs:{for:"newRadio1"}},[t._v("选项一")])]),n("span",{staticClass:"new-radio"},[n("input",{attrs:{type:"radio",id:"newRadio2",name:"new_radio"}}),n("label",{attrs:{for:"newRadio2"}},[t._v("选项二")])])]),n("pre",[t._v('        .new-radio{\n          height: 18px;\n          line-height: 18px;\n          display: inline-flex;\n          margin-right: 20px;\n          align-items: center;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -o-user-select: none;\n          user-select: none;\n\n          input[type="radio"]{\n            width: 17px;\n            height: 17px;\n            appearance: none;\n            position: relative;\n            cursor: pointer;\n            margin-right: 8px;\n\n            &::before {\n              content: \'\';\n              position: absolute;\n              top: 0;\n              left: 0;\n              width: 16px;\n              height: 16px;\n              line-height: 17px;\n              text-align: center;\n              font-size: 16px;\n              background-color: #ffffff;\n              border-radius: 50%;\n              border: 1px solid #dddddd;\n            }\n\n            &:checked::before{\n              content: "";\n              background-color: #298fff;\n              border-color: #298fff;\n            }\n\n            &:checked::after{\n              content: \'\';\n              width: 10px;\n              height: 5px;\n              border: 2px solid white;\n              border-top: transparent;\n              border-right: transparent;\n              text-align: center;\n              display: block;\n              position: absolute;\n              top: 4px;\n              left: 3px;\n              vertical-align: middle;\n              transform: rotate(-45deg);\n            }\n          }\n\n          label{\n            height: 18px;\n            display: inline-block;\n            font-size: 14px;\n            cursor: pointer;\n          }\n        }\n\n        <span class="new-radio"><input type="radio" id="newRadio1" name="new_radio" checked /><label for="newRadio1">选项一</label></span>\n        <span class="new-radio"><input type="radio" id="newRadio2" name="new_radio" /><label for="newRadio2">选项二</label></span>\n      ')]),n("p",{staticClass:"notes"},[t._v("注：因为选中项点击快的快，文字会被选中，让文字不被选中，体验效果更好哦。原来打钩也可以写的呀，孤陋寡闻了。。。")])])])])}],Q={name:"CommonCss",data:function(){return{}}},V=Q,W=(n("7a82"),Object(i["a"])(V,q,K,!1,null,"77920835",null)),X=W.exports,Z={name:"CommonCssPage",components:{cpmCommoncss:X},data:function(){return{}}},tt=Z,et=(n("c35c"),Object(i["a"])(tt,H,Y,!1,null,"09fa3132",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drag-sort-page-warp"},[n("p",[t._v("排序拖拽页面")]),n("cmp-dragsort")],1)},ot=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drag-sort-wrap"},[t._v("\n  拖拽排序\n")])},it=[],lt={name:"DragSort",data:function(){return{}}},rt=lt,ct=Object(i["a"])(rt,st,it,!1,null,"56593ea2",null),pt=ct.exports,ut={name:"DragSortPage",components:{cmpDragsort:pt},data:function(){return{}}},dt=ut,ft=Object(i["a"])(dt,at,ot,!1,null,"3905858a",null),mt=ft.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category-scroll-page-warp"},[n("p",[t._v("分类滚动页面")]),n("cmp-categoryscroll")],1)},bt=[],Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category-scroll-wrap"},[t._v("\n  分类滚动\n")])},vt=[],gt={name:"CategoryScroll",data:function(){return{}}},wt=gt,xt=Object(i["a"])(wt,Ct,vt,!1,null,"dde794b0",null),kt=xt.exports,_t={name:"CategoryScrollPage",components:{cmpCategoryscroll:kt},data:function(){return{}}},yt=_t,Pt=Object(i["a"])(yt,ht,bt,!1,null,"48dbd918",null),St=Pt.exports;a["a"].use(p["a"]);var Tt=new p["a"]({mode:"hash",base:"./",routes:[{path:"/",name:"formlist",component:G},{path:"/about",name:"about",component:w},{path:"/commoncss",name:"commoncss",component:nt},{path:"/dragSortPage",alias:"/test1",name:"DragSortPage",component:mt,beforeEnter:function(t,e,n){console.log("我进入了params模板"),console.log(t),console.log(e),n()}},{path:"/categoryScrollPage",name:"CategoryScrollPage",component:St}]}),Ot=n("2f62");a["a"].use(Ot["a"]);var Lt=new Ot["a"].Store({state:{},mutations:{},actions:{}});n("05d6");a["a"].config.productionTip=!1,a["a"].prototype.$eventbus=new a["a"],new a["a"]({router:Tt,store:Lt,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("e332"),o=n.n(a);o.a},"65ed":function(t,e,n){},"6cd3":function(t,e,n){},"7a82":function(t,e,n){"use strict";var a=n("10de"),o=n.n(a);o.a},"83b9":function(t,e,n){"use strict";var a=n("8c37"),o=n.n(a);o.a},"8c37":function(t,e,n){},ba84:function(t,e,n){},c35c:function(t,e,n){"use strict";var a=n("ba84"),o=n.n(a);o.a},d9c3:function(t,e,n){"use strict";var a=n("e9e5"),o=n.n(a);o.a},e332:function(t,e,n){},e9e5:function(t,e,n){},efc0:function(t,e,n){"use strict";var a=n("2a1c"),o=n.n(a);o.a}});