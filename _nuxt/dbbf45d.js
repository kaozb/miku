(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1213:function(t,e,n){"use strict";n.r(e);var o=n(461).a,r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search_help"},[e("nya-container",{attrs:{title:"帮你百度"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{attrs:{label:"请输入要搜索的内容",placeholder:"MikuTools是什么？",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go.apply(null,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword="string"==typeof e?e.trim():e},expression:"keyword"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.go}},[t._v("\n                "+t._s(t.loading?"获取中":"开始获取")+"\n            ")])],1),t._v(" "),e("nya-select",{staticClass:"mt-15",attrs:{fullwidth:"",items:t.typeList,label:"选择搜索引擎"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),t._v(" "),t.results?e("nya-container",{attrs:{title:"获取成功"}},[e("a",{attrs:{href:t.results,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.results)+"\n        ")])]):t._e(),t._v(" "),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("沙雕网友问的问题太简单，不想回答？这个时候就可以使用这个工具教他百度啦ww")])])])],1)}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,n){"use strict";(function(t){n(11),n(54),n(55);e.a={name:"SearchHelp",head:function(){return this.$store.state.currentTool.head},data:function(){return{keyword:"",results:"",type:"baidu",typeList:{google:"谷歌",baidu:"百度",pornhub:"Pornhub",github:"GitHub"},loading:!1}},computed:{url:function(){return"".concat("https://miku.tools","/o/search_help?s=").concat(this.type,"&k=").concat(t.from(this.keyword).toString("base64"))}},methods:{go:function(){if(this.loading)return!1;this.keyword?this.results=this.url:this.$swal({type:"error",title:"下载失败",text:"ERROR: 请输入正确的链接"})}}}}).call(this,n(12).Buffer)}}]);