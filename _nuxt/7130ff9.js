(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1185:function(t,e,n){"use strict";n.r(e);n(400);var r=n(397),o={name:"ImagePatina",head:function(){return this.$store.state.currentTool.head},components:{VueSlider:n(401)},data:function(){return{n:null,file:null,progress:0,iterations:16,quality:75,image:null,preview:"",resultsImg:"",loading:!1}},computed:{},watch:{quality:function(){this.resetProcess()}},mounted:function(){this.cover()},methods:{handleChange:function(t){var e=this,n=t.target.files;if(!n.length)return!1;var r=n[0];this.file=r;var o=new FileReader;o.readAsDataURL(r),o.addEventListener("load",(function(){e.preview=o.result,e.resetProcess()}),!1)},download:function(){if(this.image.src){var t=this.n.lastIndexOf("."),e=(-1==t?this.n:this.n.substring(0,t))+(this.quality<=100?"_JPEGreen.jpg":"_JPEGreen.png");Object(r.a)(this.image.src,e)}},cover:function(){var t=this;this.image=new Image,this.image.addEventListener("load",(function(){requestAnimationFrame(t.processImage)}))},update:function(){this.progress<=this.iterations?requestAnimationFrame(this.processImage):this.resetProcess()},resetProcess:function(){this.progress=0,this.image.src=this.preview},processImage:function(){this.loading=!0;var t=function(t){return t>=0?t<=255?t:255:0},e=function(t){return t>=-128?t<=127?t:127:-128},canvas=document.createElement("canvas"),n=canvas.getContext("2d");if(this.progress!=this.iterations){++this.progress,canvas.width=this.image.width,canvas.height=this.image.height,n.fillStyle="white",n.fillRect(0,0,this.image.width,this.image.height),n.drawImage(this.image,0,0);for(var r=n.getImageData(0,0,this.image.width,this.image.height),data=r.data,p=0;p<data.length/4;++p){var o=data[4*p],g=data[4*p+1],b=data[4*p+2],l=t(77*o+150*g+29*b>>8),u=e((-43*o-85*g+128*b>>8)-1),c=e((128*o-107*g-21*b>>8)-1),h=t(65536*l+91881*c>>16),d=t(65536*l-22553*u-46802*c>>16),m=t(65536*l+116130*u>>16);data[4*p]=h,data[4*p+1]=d,data[4*p+2]=m}n.putImageData(r,0,0);var v=this.quality<=100?canvas.toDataURL("image/jpeg",.01*this.quality):canvas.toDataURL("image/png");this.resultsImg=v,this.image.src=v}else this.loading=!1}}},l=(n(796),n(2)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"image_patina"},[e("nya-container",{attrs:{title:"图片加包浆"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{staticClass:"upfile",attrs:{type:"file",accept:"image/*",label:"请选择要处理的图片",placeholder:"点击这里上传文件"},on:{change:t.handleChange},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button"},on:{click:t.download}},[t._v("\n                "+t._s(t.loading?"".concat((t.progress/t.iterations*100).toFixed(0)," %"):"保存")+"\n            ")])],1),t._v(" "),e("div",{staticClass:"nya-subtitle"},[t._v("\n            图片质量\n        ")]),t._v(" "),e("client-only",[e("vue-slider",{attrs:{lazy:"",min:0,max:100},model:{value:t.quality,callback:function(e){t.quality=e},expression:"quality"}})],1),t._v(" "),e("nya-input",{attrs:{type:"number",label:"包浆次数",autocomplete:"off",fullwidth:""},on:{change:t.update},model:{value:t.iterations,callback:function(e){t.iterations="string"==typeof e?e.trim():e},expression:"iterations"}})],1),t._v(" "),t.preview?e("nya-container",{attrs:{title:"预览"}},[e("div",{staticClass:"preview"},[e("div",[e("div",{staticClass:"nya-subtitle"},[t._v("\n                    处理前\n                ")]),t._v(" "),e("img",{attrs:{src:t.preview,alt:"image"}})]),t._v(" "),e("div",[e("div",{staticClass:"nya-subtitle"},[t._v("\n                    处理后\n                ")]),t._v(" "),e("img",{attrs:{src:t.resultsImg,alt:"image"}})])])]):t._e(),t._v(" "),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("为什么要写这个功能可以参考："),e("a",{attrs:{href:"https://www.zhihu.com/question/29345490",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/29345490")])]),t._v(" "),e("li",[t._v("新做的表情包没人用？表情包没有年代感？这时即可使用本工具把图片做旧，让表情包看起来传播次数更多，更有收藏价值")]),t._v(" "),e("li",[t._v("如果处理时间过长或处理失败，请使用其他浏览器，推荐使用 Chrome")])])])],1)}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";e.a=function(t,e){var a=document.createElement("a");a.href=t,a.download=e,a.click()}},508:function(t,e,n){var content=n(797);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("efc3c708",content,!0,{sourceMap:!1})},796:function(t,e,n){"use strict";n(508)},797:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".image_patina .nya-subtitle{margin-top:.9375rem}.image_patina .vue-slider{margin-bottom:.9375rem}.image_patina .preview{display:flex;font-size:0;justify-content:space-between;width:100%}.image_patina .preview .nya-subtitle{padding:0}.image_patina .preview div{box-sizing:border-box;display:inline-block;padding:0 1.25rem;width:50%}@media(max-width:600px){.image_patina .preview{display:block}.image_patina .preview div{display:block;width:100%}}.image_patina .preview img{width:100%}",""]),r.locals={},t.exports=r}}]);