(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a785451e"],{"287f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"col-md-12 p-0 mb-2"},[t("div",{staticClass:"card-header py-0"},[t("span",{staticClass:"p-name imgname"},[t("em",{class:e.GetClass(e.extension)}),e._v(e._s(this.fileName))]),".pdf"!=e.extension?t("a",{staticClass:"float-right font-20 mt-2 text-white",staticStyle:{"z-index":"999999"},on:{click:e.DownloadFile}},[t("em",{staticClass:"fa fa-download"})]):e._e(),e._v("  ")])]),".docx"==e.extension||".doc"==e.extension||".xls"==e.extension||".xlsx"==e.extension||".pptx"==e.extension?t("div",{staticClass:"col-md-12 p-0 m-auto text-center"},[t("iframe",{staticStyle:{"background-color":"white"},attrs:{height:"850px",width:"100%",src:"https://view.officeapps.live.com/op/embed.aspx?src="+e.imgpath,frameborder:"0"}})]):e._e(),".txt"==e.extension||".pdf"==e.extension?t("div",{staticClass:"col-md-12 p-0 m-auto text-center"},[t("iframe",{staticStyle:{"background-color":"white"},attrs:{height:"850px",width:"100%",src:e.imgpath,frameborder:"0"}})]):e._e(),".mp4"==e.extension?t("div",{staticClass:"col-md-12 p-0 m-auto text-center"},[t("video",{attrs:{autoplay:"",controls:"",id:"backgroundvid"}},[t("source",{attrs:{src:e.imgpath,type:"video/mp4"}})])]):e._e(),".mp3"==e.extension?t("div",{staticClass:"col-md-12 p-0 m-auto text-center"},[t("audio",{attrs:{autoplay:"",controls:"",id:"backgroundvid"}},[t("source",{attrs:{src:e.imgpath,type:"audio/mpeg"}})])]):e._e(),".jpg"==e.extension||".jpeg"==e.extension||".png"==e.extension?t("VueEasyLightbox",{attrs:{visible:e.visibleRef,imgs:e.imgpath}}):e._e()],1)},o=[],s=(a("b7ef"),a("5494"),a("9769")),n=a("825ae"),l={components:{VueEasyLightbox:n["a"]},created:function(){this.GetStorageFileSummary(),this.openLightbox()},data(){return{fileName:"",storageUniqueCode:null,visibleRef:!1,fileType:null,path:null,filePath:null,extension:null}},methods:{GetStorageFileSummary(){this.isLoading=!0;var e=atob(window.location.search.split("=")[1].split("&")[0].replace(/[^a-z0-9\s]/gi,"").replace("3","")),t=parseInt(e),a={StorageFileId:t},i=this;s["a"].GetStorageFileSummary(a).then(e=>{i.storageUniqueCode=JSON.parse(e.data).FileJsonData[0].StorageUniqueCode,i.filePath=JSON.parse(e.data).FileJsonData[0].storage_file_path,i.fileName=JSON.parse(e.data).FileJsonData[0].storage_file_name,i.fileType=JSON.parse(e.data).FileJsonData[0].storage_file_type,i.extension=JSON.parse(e.data).FileJsonData[0].storage_file_ext,i.imgpath=JSON.parse(e.data).FileJsonData[0].storage_file_path.replace("/wwwroot","")})},DownloadFile(){var e=this,t="storageUniqueCode="+this.storageUniqueCode;s["a"].GetPublicallyStorageDoc(t).then(t=>{var a=new Blob([t.data],{type:e.fileType}),i=document.createElement("a");i.href=window.URL.createObjectURL(a);var o=e.fileName;i.download=o,i.click()})},GetClass:function(e){var t=null;return".pdf"==e?t="fa fa-file-pdf-o mr-2 text-danger":".xls"==e||".xlsx"==e?t="fa fa-file-excel-o mr-2 text-danger":".png"==e||".jpeg"==e||".jpg"==e?t="fa fa-file-image-o mr-2 text-danger":".txt"==e?t="fa fa-file-text-o mr-2 text-danger":".doc"==e||".docx"==e||".txt"==e?t="fa fa-file-word-o mr-2 text-danger":".mp4"==e?t="fa fa-file-video-o mr-2 text-danger":".mp3"==e&&(t="fa fa-file-audio-o mr-2 text-danger"),t},openLightbox:function(){var e=this;e.visibleRef=!0},onHide:function(){var e=this;e.visibleRef=!1}}},r=l,d=(a("9598"),a("2877")),c=Object(d["a"])(r,i,o,!1,null,null,null);t["default"]=c.exports},"3b65":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"body{padding:0;background:#1c1c1c;color:#f2f2f2}footer{display:none}.imgname{font-size:16px}.btn__close{display:none}.card-header{border-bottom:1px solid #000}.vel-modal{background:none!important}",""]),e.exports=t},9598:function(e,t,a){"use strict";a("a380")},a380:function(e,t,a){var i=a("3b65");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("499e").default;o("4f725e8e",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-a785451e.js.map