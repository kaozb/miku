(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1148:function(t,e,o){t.exports=o.p+"img/Google.e9d790a.svg"},1149:function(t,e,o){t.exports=o.p+"img/Pornhub.139652e.svg"},1150:function(t,e,o){t.exports=o.p+"img/Baidu.8bbe408.svg"},1151:function(t,e,o){t.exports=o.p+"img/GitHub.dd4640e.svg"},1152:function(t,e,o){"use strict";o(549)},1153:function(t,e,o){var n=o(3)((function(i){return i[1]}));n.push([t.i,".search_help{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;height:100%;left:0;padding-top:9.375rem;position:absolute;top:0;width:100%}.search_help .footer{bottom:1.25rem;font-size:1.25rem;left:0;position:fixed;text-align:center;width:100%}.search_help .logo{display:block;height:5.9375rem;margin:0 auto 2.5rem}.search_help .search-box{max-width:100%;width:43.75rem}.search_help .search-box input{background-color:transparent;border:none;box-sizing:border-box;display:inline-block;outline:none;padding:.9375rem 1.25rem}.search_help .search-box .search-input{align-items:center;border-radius:.375rem;box-shadow:0 .0625rem .375rem 0 rgba(32,33,36,.28);display:flex;transition:all .3s ease}.search_help .search-box .search-input.force{transform:scale(1.08)}.search_help .search-box .search-input input{width:calc(100% - 3.125rem)}.search_help .search-box .search-input i{display:inline-block;font-size:1.25rem}@media(max-width:600px){.search_help .search-box{box-sizing:border-box;padding:0 1.25rem;width:100%}}.search_help .info{font-size:1.5625rem;margin-top:3.125rem}.search_help .mouse{font-size:2.5rem;left:0;position:fixed;top:0;transform:scaleX(-1);transition:all 1s linear}",""]),n.locals={},t.exports=n},1218:function(t,e,o){"use strict";o.r(e);var n=o(467).a,r=(o(1152),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search_help"},[e("div",{ref:"mouse",staticClass:"mouse"},[e("i",{staticClass:"eva eva-navigation-2"})]),t._v(" "),e("div",{staticClass:"search-box"},[e("img",{staticClass:"logo",attrs:{src:t.s?t.Logo[t.s]:t.px,alt:"Logo"}}),t._v(" "),e("div",{staticClass:"search-input",class:2===t.n?"force":""},[e("input",{ref:"input",staticClass:"input-box",attrs:{type:"search"},domProps:{value:t.inputVal}}),t._v(" "),e("i",{ref:"searchIcon",staticClass:"eva eva-search-outline"})])]),t._v(" "),e("div",{staticClass:"info"},[t._v("\n        "+t._s(t.info[t.n-1])+"\n    ")]),t._v(" "),e("div",{staticClass:"footer"},[e("span",[t._v("帮你百度 - BY")]),t._v(" "),e("a",{attrs:{href:t.$store.state.env.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("MikuTools")])])])}),[],!1,null,null,null);e.default=component.exports},467:function(t,e,o){"use strict";(function(t){o(11),o(54),o(55),o(121),o(46);e.a={name:"SearchHelp",layout:"blank",head:function(){return{title:this.title}},data:function(){return{title:"帮你百度 - ".concat("MikuTools"),k:"",s:"",n:0,px:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",inputVal:"",info:["第一步：找到搜索框，并点击它","第二步：输入想要查找的内容","第三步：点击搜索按钮，立即前往","学会了吗，是不是很简单"],Logo:{google:o(1148),pornhub:o(1149),baidu:o(1150),github:o(1151)}}},computed:{url:function(){var s=this.s,t=encodeURIComponent(this.k);return"github"===s?"https://github.com/search?q=".concat(t):"google"===s?"https://www.google.com/search?q=".concat(t):"baidu"===s?"https://www.baidu.com/s?wd=".concat(t):"pornhub"===s?"https://www.pornhub.com/video/search?search=".concat(t):""}},mounted:function(){this.$route.query.s&&this.$route.query.k?(this.k=t.from(this.$route.query.k,"base64").toString(),this.s=this.$route.query.s,this.step1()):this.$swal({type:"error",title:"出现错误",text:"ERROR: 参数不正确"})},methods:{step1:function(){this.n++;var t=this.$refs.input.getBoundingClientRect();this.$refs.mouse.style.transform="translateX(".concat(t.left+20,"px) translateY(").concat(t.top+15,"px) scale(-1,1)"),setTimeout(this.step2,2e3)},step2:function(){var t=this;this.n++,this.$refs.mouse.style.opacity=.3,this.$refs.input.focus(),setTimeout((function(){var s=t.k.split(""),e=200*s.length;s.forEach((function(e,i){setTimeout((function(){t.inputVal=t.k.slice(0,i+1)}),200*i)})),setTimeout(t.step3,e+1e3)}),500)},step3:function(){var t=this,e=this.$refs.searchIcon.getBoundingClientRect();this.$refs.mouse.style.opacity=1,setTimeout((function(){t.n++,t.$refs.mouse.style.transform="translateX(".concat(e.left-15,"px) translateY(").concat(e.top,"px) scale(-1,1)"),setTimeout(t.step4,2e3)}),800)},step4:function(){var t=this;this.n++,setTimeout((function(){window.location.href=t.url}),1e3)}}}}).call(this,o(12).Buffer)},549:function(t,e,o){var content=o(1153);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("11661ec7",content,!0,{sourceMap:!1})}}]);