(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-032e0a52"],{"029c":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t._self._c;return a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("loader",{attrs:{"is-visible":t.isLoading}}),t._m(0),a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"border p-3"},[a("div",{staticClass:"row"},[a("StorageBar",{attrs:{type:"All"}}),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-7 col-xl-7 managestorage"},[a("div",{staticClass:"row"},[t._m(1),t._v("  "),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 my-4 jslider"},[a("div",{staticClass:"form-group SliderSingle-screens green"},[a("div",{staticClass:"jslider-label jslider-label-to"},[a("span",[t._v(t._s(t.formatBytes(t.docStorageMaxLimit)))])]),a("VueSlider",{attrs:{min:t.minScreenSize,id:"txtStorage",max:t.maxScreenSize,"tooltip-formatter":a=>t.formatBytes(a)},on:{dragEnd:function(a){return t.OnSlide("storage")}},model:{value:t.storage,callback:function(a){t.storage=a},expression:"storage"}})],1)]),t._m(2),t._v("  "),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 my-4 jslider"},[a("div",{staticClass:"form-group SliderSingle-files yellow"},[a("div",{staticClass:"jslider-label jslider-label-to"},[a("span",[t._v(t._s(t.formatBytes(t.docStorageMaxLimit)))])]),a("VueSlider",{attrs:{min:t.minFileSize,id:"txtFilesAllocation",max:t.maxFileSize,"tooltip-formatter":a=>t.formatBytes(a)},on:{dragEnd:function(a){return t.OnSlide("files")}},model:{value:t.filesAllocation,callback:function(a){t.filesAllocation=a},expression:"filesAllocation"}})],1)]),t._m(3),t._v("  "),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 my-4 jslider"},[a("div",{staticClass:"form-group SliderSingle-docstorage red"},[a("div",{staticClass:"jslider-label jslider-label-to"},[a("span",[t._v(t._s(t.formatBytes(t.docStorageMaxLimit)))])]),a("VueSlider",{attrs:{min:t.minDocStorage,id:"txtdocStorageAllocation",max:t.maxDocStorage,"tooltip-formatter":a=>t.formatBytes(a)},on:{dragEnd:function(a){return t.OnSlide("docstorage")}},model:{value:t.docStorageAllocation,callback:function(a){t.docStorageAllocation=a},expression:"docStorageAllocation"}})],1)]),t._m(4),t._v("  "),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 my-4 jslider"},[a("div",{staticClass:"form-group SliderSingle-transactionSize blue"},[a("div",{staticClass:"jslider-label jslider-label-to"},[a("span",[t._v(t._s(t.formatBytes(t.docStorageMaxLimit)))])]),a("VueSlider",{attrs:{min:t.minTransactionSize,id:"txtTransactionSize",max:t.maxTransactionSize,"tooltip-formatter":a=>t.formatBytes(a)},on:{dragEnd:function(a){return t.OnSlide("transactionSize")}},model:{value:t.transactionSize,callback:function(a){t.transactionSize=a},expression:"transactionSize"}})],1)])]),a("div",{staticClass:"row flex-row-reverse mt-3"},[a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-success",attrs:{id:"update-details",href:"javascript:;",title:"Save"},on:{click:function(a){return t.SaveStorageManagement()}}},[a("i",{staticClass:"fa fa-save pr-2"}),t._v("Save")])])])]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-5 col-xl-5"},[a("div",{staticClass:"row"},[t._m(5),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 listing"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"project_milestones203 table table-bordered dt-responsive nowrap mt-0"},[a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",{staticStyle:{"font-weight":"600 !important"}},[t._v("Total Storage:")]),a("th",{staticStyle:{"font-weight":"600 !important"},attrs:{id:"spn-containermaxlimit"}},[t._v(" "+t._s(t.formatBytes(t.docStorageMaxLimit)))])]),a("tr",{staticClass:"btop"},[a("th",[t._v("Screenshot Allocation Space:")]),a("th",{attrs:{id:"spn-screenmaxlimit"}},[t._v(t._s(t.formatBytes(t.storage))+" ")])])]),a("tbody",[a("tr",[a("td",[t._v(t._s(t.$t("ScreenshotAllocationSpace"))+":")]),a("td",{attrs:{id:"spn-screenmaxlimit"}},[t._v(t._s(t.formatBytes(t.storage))+" ")])]),a("tr",[a("td",[t._v(t._s(t.$t("CanTakeScreenshots"))+":")]),a("td",{attrs:{id:"Cantakescreen"}},[t._v(t._s(t.formatBytes(t.screenCount))+" ")])]),a("tr",[a("td",[t._v(t._s(t.$t("ScreenshotStorageConsumed"))+":")]),a("td",{attrs:{id:"spn-screensize"}},[t._v(t._s(t.formatBytes(t.screenshotSize))+" ")])]),a("tr",[a("td",[t._v(t._s(t.$t("ScreenshotUploaded"))+":")]),a("td",{attrs:{id:"spn-screencount"}},[t._v(t._s(t.formatBytes(t.screenshotCount))+" ")])])]),a("thead",{staticClass:"thead-bg"},[a("tr",{staticClass:"btop"},[a("th",[t._v(t._s(t.$t("FilesAllocationSpace"))+":")]),a("th",{attrs:{id:"spn-filemaxlimit"}},[t._v(t._s(t.formatBytes(t.filesAllocation))+" ")])])]),a("tbody",[a("tr",[a("td",[t._v("File Storage Consumed:")]),a("td",{attrs:{id:"spn-filesize"}},[t._v(t._s(t.formatBytes(t.fileSize))+" ")])])]),a("thead",{staticClass:"thead-bg"},[a("tr",{staticClass:"btop"},[a("th",[t._v("Doc Storage Allocation Space:")]),a("th",{attrs:{id:"spn-docstoragemaxlimit"}},[t._v(t._s(t.formatBytes(t.docStorageAllocation))+" ")])])]),a("tbody",[a("tr",[a("td",[t._v("Doc Storage Assigned:")]),a("td",{attrs:{id:"spn-docstorageassigned"}},[t._v(t._s(t.formatBytes(t.docStorageAssigned))+" ")])]),a("tr",[a("td",[t._v("Doc Storage Consumed:")]),a("td",{attrs:{id:"spn-docstoragesize"}},[t._v(t._s(t.formatBytes(t.docStorageUsed))+" ")])])]),a("thead",{staticClass:"thead-bg"},[a("tr",{staticClass:"btop"},[a("th",[t._v("Transaction Size Allocation Space:")]),a("th",{attrs:{id:"spn-transactionmaxlimit"}},[t._v(t._s(t.formatBytes(t.transactionSize))+" ")])])]),a("tbody",[a("tr",[a("td",[t._v("Transaction Storage Consumed:")]),a("td",{attrs:{id:"spn-transactionsize"}},[t._v(t._s(t.formatBytes(t.transactionTotalSize))+" ")])]),a("tr",[a("td",{staticClass:"font-weight-bold bg-light"},[t._v("Storage Consumed:")]),a("td",{staticClass:"LeaveTotal font-weight-bold bg-light",attrs:{id:"spn-containersize"}},[t._v(t._s(t.formatBytes(t.containerSize))+" ")])])])])])])])])],1)])])])],1)},i=[function(){var t=this,a=t._self._c;return a("section",{staticClass:"page-action"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[t._v("Manage Storage")])])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v("Screenshot Allocation Space:")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v("Files Allocation Space:")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-lg-12 mt-4 mb-2"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v("Doc Storage Allocation Space:")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-lg-12 mt-4 mb-2"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v("Transaction Size Allocation Space:")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[t._v("Storage Details")])])])}],l=e("9769"),s=e("162b"),n={components:{StorageBar:s["a"]},data(){return{isLoading:!1,storage:null,filesAllocation:null,filesMaxLimit:null,docStorageAllocation:null,transactionSize:null,docStorageMaxLimit:null,screenshotSize:null,screenshotCount:null,fileSize:null,fileCount:null,docStorageAssigned:null,docStorageUsed:null,transactionTotalSize:null,containerSize:null,screenCount:null,progressBarMinValue:20,progressBarMaxValue:100,ContainerPercentage:null,storageData:null,filesAllocationData:null,docStorageAllocationData:null,transactionSizeData:null,availableSpace:null,containerdata:[],minScreenSize:0,minFileSize:0,minDocStorage:0,minTransactionSize:0,CurrentScreenSize:0,CurrentFileSize:0,CurrentDocStorageSize:0,CurrentTransactionSize:0,maxScreenSize:0,maxFileSize:0,maxDocStorage:0,maxTransactionSize:0}},created:function(){var t=this;t.GetCompanyContainerDetails()},watch:{containerSize:function(t){this.ContainerPercentage=parseFloat(100*t/this.docStorageMaxLimit).toFixed(0)},docStorageMaxLimit:function(t){var a=this;a.maxScreenSize=t-a.minFileSize-a.minDocStorage-a.minTransactionSize,a.maxFileSize=t-a.minScreenSize-a.minDocStorage-a.minTransactionSize,a.maxDocStorage=t-a.minFileSize-a.minScreenSize-a.minTransactionSize,a.maxTransactionSize=t-a.minFileSize-a.minDocStorage-a.minScreenSize}},methods:{GetCompanyContainerDetails:function(){var t=this;t.isLoading=!0,l["a"].GetCompanyContainerDetails().then((function(a){null!=a.data.data&&(t.containerdata=a.data.data[0],t.minScreenSize=Math.round(parseFloat(t.containerdata.SCREENSHOT_SIZE)),t.minFileSize=Math.round(parseFloat(t.containerdata.FILE_SIZE)),t.minDocStorage=Math.round(parseFloat(t.containerdata.DOC_STORAGE_ASSIGED)),t.minTransactionSize=Math.round(parseFloat(t.containerdata.TRANSACTION_TOTAL_SIZE)),t.GetStoragedata(),t.isLoading=!1)}))},GetStoragedata:function(){var t=this;l["a"].GetStorageReport().then((function(a){t.isLoading=!0,t.storage=a.data[0].SCREEN_MAXLIMIT,t.filesAllocation=a.data[0].FILE_MAXLIMIT,t.GetScreenCount(t.filesAllocation),t.docStorageAllocation=a.data[0].DOC_STORAGE_MAXLIMIT,t.transactionSize=a.data[0].TRANSACTION_SIZE_LIMIT,t.docStorageMaxLimit=a.data[0].CONTAINER_LIMIT,t.screenshotSize=a.data[0].SCREENSHOT_SIZE,t.screenshotCount=a.data[0].SCREENSHOT_COUNT,t.fileSize=a.data[0].FILE_SIZE,t.fileCount=a.data[0].FILE_COUNT,t.docStorageAssigned=a.data[0].DOC_STORAGE_ASSIGED,t.docStorageUsed=a.data[0].DOC_STORAGE_USED,t.transactionTotalSize=a.data[0].TRANSACTION_TOTAL_SIZE,t.containerSize=a.data[0].CONTAINER_SIZE,t.UsedScreenshotSpace=a.data[0].SCREENSHOT_COUNT,t.UsedFileSpace=a.data[0].FILE_SIZE,t.UsedDocStorageSpace=a.data[0].DOC_STORAGE_USED,t.UsedTransactionSpace=a.data[0].TRANSACTION_TOTAL_SIZE,t.minScreenSize=Math.round(parseFloat(t.containerdata.SCREENSHOT_SIZE)),t.minFileSize=Math.round(parseFloat(t.containerdata.FILE_SIZE)),t.minDocStorage=Math.round(parseFloat(t.containerdata.DOC_STORAGE_ASSIGED)),t.minTransactionSize=Math.round(parseFloat(t.containerdata.TRANSACTION_TOTAL_SIZE)),t.isLoading=!1}))},GetScreenCount:function(t){var a=this,e=parseFloat(70.5,10)+parseFloat(5.8,10);a.screenCount=Math.round(1024*t/e)},SaveStorageManagement:function(){var t=this,a=`maxFileSize=${t.filesAllocation}&maxScreenSize=${t.storage}&maxDocSize=${t.docStorageAllocation}&maxTransactionSize=${t.transactionSize}`;t.isLoading=!0,l["a"].SaveContainerDetails(a).then((function(a){0==a.data&&(t.ShowAlert("Storage has been saved succesfully","Success"),t.GetStoragedata(),t.isLoading=!1)}))},OnSlide:function(t){var a=this;a.minScreenSize=Math.round(parseFloat(a.containerdata.SCREENSHOT_SIZE)),a.minFileSize=Math.round(parseFloat(a.containerdata.FILE_SIZE)),a.minDocStorage=Math.round(parseFloat(a.containerdata.DOC_STORAGE_ASSIGED)),a.minTransactionSize=Math.round(parseFloat(a.containerdata.TRANSACTION_TOTAL_SIZE)),a.CurrentScreenSize=Math.round(parseFloat(a.storage)),a.CurrentFileSize=Math.round(parseFloat(a.filesAllocation)),a.CurrentDocStorageSize=Math.round(parseFloat(a.docStorageAllocation)),a.CurrentTransactionSize=Math.round(parseFloat(a.transactionSize));var e=a.CurrentScreenSize-a.minScreenSize,o=a.CurrentFileSize-a.minFileSize,i=a.CurrentDocStorageSize-a.minDocStorage,l=a.CurrentTransactionSize-a.minTransactionSize,s=0;"storage"==t?(a.CurrentScreenSize>a.docStorageMaxLimit-a.minFileSize-a.minDocStorage-a.minTransactionSize&&(a.storage=a.docStorageMaxLimit-a.minFileSize-a.minDocStorage-a.minTransactionSize,a.CurrentScreenSize=Math.round(parseFloat(a.storage))),a.docStorageMaxLimit-a.storage-a.filesAllocation-a.docStorageAllocation-a.transactionSize<0&&(s=a.storage+a.filesAllocation+a.docStorageAllocation+a.transactionSize-a.docStorageMaxLimit),s>o?(s-=o,a.filesAllocation=a.filesAllocation-o):(a.filesAllocation=a.filesAllocation-s,s=0),s>0&&(s>i?(s-=i,a.docStorageAllocation=a.docStorageAllocation-i):(a.docStorageAllocation=a.docStorageAllocation-s,s=0),s>0&&(s>l?(s-=l,a.vm.transactionSize=a.transactionSize-l):(a.transactionSize=a.transactionSize-s,s=0))),a.storage=a.docStorageMaxLimit-a.filesAllocation-a.docStorageAllocation-a.transactionSize-s):"files"==t?(a.CurrentFileSize>a.docStorageMaxLimit-a.minScreenSize-a.minDocStorage-a.minTransactionSize&&(a.filesAllocation=a.docStorageMaxLimit-a.minScreenSize-a.minDocStorage-a.minTransactionSize,a.CurrentFileSize=Math.round(parseFloat(a.filesAllocation))),a.docStorageMaxLimit-a.storage-a.filesAllocation-a.docStorageAllocation-a.transactionSize<0&&(s=a.storage+a.filesAllocation+a.docStorageAllocation+a.transactionSize-a.docStorageMaxLimit),s>e?(s-=e,a.storage=a.storage-e):(a.storage=a.storage-s,s=0),s>0&&(s>i?(s-=i,a.docStorageAllocation=a.docStorageAllocation-i):(a.docStorageAllocation=a.docStorageAllocation-s,s=0),s>0&&(s>l?(s-=l,a.transactionSize=a.transactionSize-l):(a.transactionSize=a.transactionSize-s,s=0))),a.filesAllocation=a.docStorageMaxLimit-a.storage-a.docStorageAllocation-a.transactionSize-s):"docstorage"==t?(a.CurrentDocStorageSize>a.docStorageMaxLimit-a.minScreenSize-a.minFileSize-a.minTransactionSize&&(a.docStorageAllocation=a.docStorageMaxLimit-a.minScreenSize-a.minFileSize-a.minTransactionSize,a.CurrentDocStorageSize=Math.round(parseFloat(a.docStorageAllocation))),a.docStorageMaxLimit-a.storage-a.filesAllocation-a.docStorageAllocation-a.transactionSize<0&&(s=a.storage+a.filesAllocation+a.docStorageAllocation+a.transactionSize-a.docStorageMaxLimit),s>e?(s-=e,a.storage=a.storage-e):(a.storage=a.storage-s,s=0),s>0&&(s>o?(s-=o,a.filesAllocation=a.filesAllocation-o):(a.filesAllocation=a.filesAllocation-s,s=0),s>0&&(s>l?(s-=l,a.vm.transactionSize=a.transactionSize-l):(a.transactionSize=a.transactionSize-s,s=0))),a.docStorageAllocation=a.docStorageMaxLimit-a.storage-a.filesAllocation-a.transactionSize-s):"transactionSize"==t&&(a.CurrentTransactionSize>a.docStorageMaxLimit-a.minScreenSize-a.minDocStorage-a.minFileSize&&(a.transactionSize=a.docStorageMaxLimit-a.minScreenSize-a.minFileSize-a.minDocStorage,a.CurrentTransactionSize=Math.round(parseFloat(a.transactionSize))),a.docStorageMaxLimit-a.storage-a.filesAllocation-a.docStorageAllocation-a.transactionSize<0&&(s=a.storage+a.filesAllocation+a.docStorageAllocation+a.transactionSize-a.docStorageMaxLimit),s>e?(s-=e,a.storage=a.storage-e):(a.storage=a.storage-s,s=0),s>0&&(s>o?(s-=o,a.filesAllocation=a.filesAllocation-o):(a.filesAllocation=a.filesAllocation-s,s=0),s>0&&(s>i?(s-=i,a.docStorageAllocation=a.docStorageAllocation-i):(a.docStorageAllocation=a.docStorageAllocation-s,s=0))),a.transactionSize=a.docStorageMaxLimit-a.storage-a.filesAllocation-a.docStorageAllocation-s)},formatBytes:function(t,a=!1,e=2){if(!+t)return"0 Bytes";const o=1024,i=e<0?0:e,l=["MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(t)/Math.log(o));return a?parseFloat((t/Math.pow(o,s)).toFixed(i)):`${parseFloat((t/Math.pow(o,s)).toFixed(i))} ${l[s]}`}}},r=n,c=(e("e334"),e("2877")),d=Object(c["a"])(r,o,i,!1,null,null,null);a["default"]=d.exports},"162b":function(t,a,e){"use strict";var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"},[a("div",[a("b-progress",{attrs:{height:"1.5rem",value:"All"==t.type?t.consumed:t.AllowedStorage,max:"All"==t.type?t.total:t.allocated}})],1),a("div",{staticClass:"level_info my-2 d-block float-left w-100",staticStyle:{height:"auto"}},[a("div",{staticClass:"d-flex bd-highlight"},["Doc"==t.type?a("div",{staticClass:"p-2 bd-highlight font-12"},[a("b",{attrs:{id:"divClientStorage pr-1"}},[a("span"),t._v(" "),a("span",{staticClass:"clr-1"},[t._v(" "+t._s(t.AllowedClientStoragePercentage)+"% ("+t._s(t.formatBytes(t.AllowedClientStorage))+")")])]),t._v(" "),a("span",[t._v("Allocated to Client")])]):t._e(),"Doc"==t.type?a("div",{staticClass:"p-2 bd-highlight font-12"},[a("b",{attrs:{id:"divConsumendStorage pr-1"}},[a("span"),t._v(" "),a("span",{staticClass:"clr-2"},[t._v(" "+t._s(t.AllowedUserStoragePercentage)+"% ("+t._s(t.formatBytes(t.AllowedUserStorage))+")")])]),t._v(" "),a("span",[t._v("Allocated to User")])]):t._e(),"All"==t.type?a("div",{staticClass:"p-2 bd-highlight font-12"},[t._m(0),a("span",{staticClass:"clr-1 pr-1"},[t._v(t._s(t.ConsumedPercentage)+"% ("+t._s(t.formatBytes(t.consumed))+") ")]),a("span",[t._v("Storage Consumed")])]):t._e(),a("div",{staticClass:"p-2 bd-highlight font-12"},[t._m(1),a("span",{staticClass:"clr-3 pr-1"},[t._v(t._s(t.AvailablePercentage)+"% ("+t._s(t.formatBytes(t.AvailableSpace))+") ")]),a("span",[t._v("Available Storage")])]),a("div",{staticClass:"ml-auto p-2 bd-highlight font-12"},[t._m(2),a("span",{staticClass:"font-weight-bold pr-1"},[t._v(t._s(t.formatBytes("All"==t.type?t.total:t.allocated))+" ")]),t._v(" "),a("span",[t._v("Total Storage")])])])])])},l=[function(){var t=this,a=t._self._c;return a("b",{attrs:{id:"divFreeStorage"}},[a("span")])},function(){var t=this,a=t._self._c;return a("b",{attrs:{id:"divFreeStorage"}},[a("span")])},function(){var t=this,a=t._self._c;return a("b",{attrs:{id:"divFreeStorage"}},[a("span")])}],s=e("9769"),n={props:{type:{type:String,required:!0}},data(){return{total:null,consumed:null,allocated:null,AllowedClientStorage:null,AllowedUserStorage:null}},created:function(){var t=this;t.GetStoragedata()},computed:{ConsumedPercentage:{get:function(){return parseFloat(100*this.consumed/this.total).toFixed(0)},set:function(t){}},AllocatedPercentage(){return parseFloat(100*this.allocated/this.total).toFixed(0)},AvailableSpace(){return"All"==this.type?this.total>=this.consumed?this.total-this.consumed:0:this.AllowedClientStorage+this.AllowedUserStorage<this.allocated?this.allocated-this.AllowedClientStorage-this.AllowedUserStorage:0},AvailablePercentage(){if("All"==this.type){var t=this.total>=this.consumed?this.total-this.consumed:0;return parseFloat(100*t/this.total).toFixed(0)}t=this.AllowedClientStorage+this.AllowedUserStorage<this.allocated?this.allocated-this.AllowedClientStorage-this.AllowedUserStorage:0;return parseFloat(100*t/this.allocated).toFixed(0)},AllowedStorage(){var t=this.AllowedClientStorage+this.AllowedUserStorage;return t},AllowedStoragePercentage(){var t=parseFloat(100*(this.AllowedClientStorage+this.AllowedUserStorage)/this.allocated).toFixed(0);return t},AllowedClientStoragePercentage(){var t=parseFloat(100*this.AllowedClientStorage/this.allocated).toFixed(0);return t},AllowedUserStoragePercentage(){var t=parseFloat(100*this.AllowedUserStorage/this.allocated).toFixed(0);return t}},watch:{consumed:function(t){this.ConsumedPercentage=parseFloat(100*this.consumed/this.total).toFixed(0)}},methods:{GetStoragedata:function(){var t=this;if(s["a"].GetStorageReport().then((function(a){t.total=null==a.data[0].CONTAINER_LIMIT||null==a.data[0].CONTAINER_LIMIT?0:a.data[0].CONTAINER_LIMIT,t.consumed=null==a.data[0].CONTAINER_SIZE||void 0==a.data[0].CONTAINER_SIZE?0:a.data[0].CONTAINER_SIZE,t.allocated=null==a.data[0].DOC_STORAGE_MAXLIMIT||void 0==a.data[0].DOC_STORAGE_MAXLIMIT?o:a.data[0].DOC_STORAGE_MAXLIMIT})),"Doc"==t.type){var a="pageNo=1&pageSize=10&sortBy=&sortExp=&userTypeIds=4";s["a"].GetUserStorageDetail(a).then((function(a){var e=JSON.parse(a.data).USERSTORAGEDETAILLIST;t.AllowedClientStorage=0,e.forEach(a=>{null==a.ALLOWED_STORAGE||void 0==a.ALLOWED_STORAGE?(a.ALLOWED_STORAGE=0,t.AllowedClientStorage+=a.ALLOWED_STORAGE):t.AllowedClientStorage+=a.ALLOWED_STORAGE})}));var e="pageNo=1&pageSize=10&sortBy=&sortExp=&userTypeIds=1,2,3";s["a"].GetUserStorageDetail(e).then((function(a){var e=JSON.parse(a.data).USERSTORAGEDETAILLIST;t.AllowedUserStorage=0,e.forEach(a=>{"1002"!=a.STATUS_ID&&(null==a.ALLOWED_STORAGE||void 0==a.ALLOWED_STORAGE?(a.ALLOWED_STORAGE=0,t.AllowedUserStorage+=a.ALLOWED_STORAGE):t.AllowedUserStorage+=a.ALLOWED_STORAGE)})}))}t.total=isNaN(t.total)?0:t.total,t.consumed=isNaN(t.consumed)?0:t.consumed,t.allocated=isNaN(t.allocated)?0:t.allocated,t.AllowedClientStorage=isNaN(t.AllowedClientStorage)?0:t.AllowedClientStorage,t.AllowedUserStorage=isNaN(t.AllowedUserStorage)?0:t.AllowedUserStorage},formatBytes:function(t,a=!1,e=2){if(!+t)return"0 Bytes";const o=1024,i=e<0?0:e,l=["MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(t)/Math.log(o));return a?parseFloat((t/Math.pow(o,s)).toFixed(i)):`${parseFloat((t/Math.pow(o,s)).toFixed(i))} ${l[s]}`}}},r=n,c=e("2877"),d=Object(c["a"])(r,i,l,!1,null,null,null);a["a"]=d.exports},"488d":function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,".vue-slider-dot-tooltip{position:absolute;visibility:visible}.vue-slider-dot-tooltip-inner{background-color:#505557;height:20px}.jslider .jslider-label{font-size:14px;line-height:12px;color:#000;opacity:.5;white-space:nowrap;padding:0 2px;position:absolute;top:-12px;left:91%}.vue-slider{height:5px!important;padding:30px 0}.vue-slider-dot-handle{width:18px!important;height:18px!important;top:-2px;left:-2px}.vue-slider-dot-tooltip-inner{font-size:12px}.vue-slider-dot-tooltip-text{font-weight:300}",""]),t.exports=a},"6b6a":function(t,a,e){var o=e("488d");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("499e").default;i("6447ddf7",o,!0,{sourceMap:!1,shadowMode:!1})},e334:function(t,a,e){"use strict";e("6b6a")}}]);
//# sourceMappingURL=chunk-032e0a52.js.map