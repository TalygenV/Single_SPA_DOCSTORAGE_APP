(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdcd9802"],{"231c":function(t,e,a){"use strict";a("33bb")},"33bb":function(t,e,a){var s=a("6be4");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("14ae597e",s,!0,{sourceMap:!1,shadowMode:!1})},"445f":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",[e("StorageBar",{attrs:{type:"Doc"}}),e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"listing"},[e("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"div_forListView"}},[e("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tblFileList"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"text-center",staticStyle:{width:"50px !important"}},[e("input",{staticClass:"chkitems",attrs:{id:"chkAll",value:"",type:"checkbox"},on:{change:function(e){return t.onChange()}}})]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])]),e("tbody",[t._l(t.UserData,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"text-center"},[e("input",{staticClass:"chkItems",attrs:{Id:a.USER_ID,type:"checkbox"},domProps:{value:a.USER_ID},on:{change:function(e){return t.onChange()}}})]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.USER_NAME)+" ")])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.DESIGNATION_NAME)+" ")])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.DEPARTMENT_NAME)+" ")])]),e("td",["1001"==a.STATUS_ID?e("span",{staticClass:"fullPaid btn d-inline-block w-80 text-center text-truncate btn-success",attrs:{title:"Active"}},[t._v(" Active")]):t._e(),"1084"==a.STATUS_ID?e("span",{staticClass:"sent bg-secondary btn d-inline-block w-80 text-center text-truncate text-white",attrs:{title:"Approved"}},[t._v(" Approved")]):t._e(),"Rejected"==a.STATUS_ID?e("span",{staticClass:"stop btn d-inline-block w-80 text-center text-truncate btn-danger",attrs:{title:"Rejected"}},[t._v(" Rejected")]):t._e(),"1003"==a.STATUS_ID?e("span",{staticClass:"stop px-2 bg-primary btn d-inline-block w-80 text-center text-truncate",attrs:{title:"Deleted"}},[t._v(" Deleted")]):t._e(),"1002"==a.STATUS_ID?e("span",{staticClass:"fullPaid btn d-inline-block w-80 text-center text-truncate btn-danger",attrs:{title:"Inactive"}},[t._v("Inactive")]):t._e(),"1005"==a.STATUS_ID?e("span",{staticClass:"fullPaid btn d-inline-block w-80 text-center text-truncate btn-secondary",attrs:{title:"Pending"}},[t._v(" Pending")]):t._e(),"ActivationAwaited"==a.STATUS_ID?e("span",{staticClass:"fullPaid btn d-inline-block w-80 text-center text-truncate btn-warning",attrs:{title:"ActivationAwaited"}},[t._v(" ActivationAwaited")]):t._e()]),e("td",[e("span",{staticClass:"text-right text-overflow-dynamic-container"},[t._v(" "+t._s(a.CONSUMED_STROAGE)+" ")])]),e("td",["1002"!=a.STATUS_ID?e("span",{staticClass:"text-overflow-dynamic-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.ALLOWED_STORAGE,expression:"item.ALLOWED_STORAGE"}],staticClass:"maxAllowedStorage form-control text-right disabled",attrs:{type:"text","asp-for":"item.MaxStorage",id:"idMaxStorage"+a.USER_ID,step:"0.01",maxlength:"13"},domProps:{value:a.ALLOWED_STORAGE},on:{input:function(e){e.target.composing||t.$set(a,"ALLOWED_STORAGE",e.target.value)}}})]):t._e(),"1002"==a.STATUS_ID?e("span",{staticClass:"text-overflow-dynamic-container"},[e("input",{staticClass:"maxAllowedStorage form-control text-right disabled",attrs:{type:"text","asp-for":"item.MaxStorage",id:"idMaxStorage"+a.USER_ID,step:"0.01",maxlength:"13",value:"0"}})]):t._e()]),e("td",{staticClass:"text-center single-action"},[t.hideEditIcon?e("a",{staticClass:"aEdit",attrs:{title:"Edit",id:"idEdit"+a.USER_ID},on:{click:function(e){return t.editAllowedStorage(a.USER_ID)}}},[e("i",{staticClass:"fa fa-pencil text-success action-icon"})]):t._e(),e("div",{staticStyle:{display:"none"},attrs:{id:"divAction"+a.USER_ID}},[e("a",{staticClass:"aCancel mr-2",attrs:{id:"idCancel_"+a.USER_ID,value:a.USER_ID,title:"Cancel",href:"javascript:;"},on:{click:function(e){return t.CancelAction(a.USER_ID,a.ALLOWED_STORAGE)}}},[e("i",{staticClass:"fa fa-times-circle text-danger action-icon"})]),e("a",{staticClass:"aSave",attrs:{title:"Save",value:a.USER_ID,id:"idSave_"+a.USER_ID,href:"javascript:;"},on:{click:function(e){return t.SaveData(a.USER_ID,a.ALLOWED_STORAGE,a.CONSUMED_STROAGE)}}},[e("i",{staticClass:"fa fa-save text-primary action-icon"})])])])])})),0==t.NoRecordLength?e("tr",[e("td",{staticClass:"text-danger text-center no-record",attrs:{colspan:"7"}},[t._v("No Record Found")])]):t._e(),t.NoRecordLength>0?e("tr",[e("td",{staticClass:"text-right fr font-weight-bold",attrs:{colspan:"2"}},[t._v("Total")]),e("td",{staticClass:"text-right fr font-weight-bold",attrs:{colspan:"4"}},[t._v(t._s(t.totalConsumedStorage)+" MB ")]),e("td",{staticClass:"text-right fr font-weight-bold"},[t._v(t._s(t.totalAllowedStorage)+" MB")])]):t._e()],2)])])]),e("div",{staticClass:"col-lg-12 text-right mt-3 float-right p-0"},[e("button",{staticClass:"btn btn-warning float-left",attrs:{title:"Previous"},on:{click:function(e){return t.PreviousButton()}}},[t._v("Previous")]),e("button",{staticClass:"btn btn-success",attrs:{title:"Save"},on:{click:function(e){return t.SaveButton()}}},[e("em",{staticClass:"fa fa-save pr-2",attrs:{"aria-hidden":"true"}}),t._v(" Save")])])],1)},i=[function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("User Name")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Designation")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Department")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Status")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Consumed Storage (MB)")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Allocated Storage (MB)")])])},function(){var t=this,e=t._self._c;return e("th",{staticClass:"text-center nonresize",attrs:{"data-width":"5%"}},[e("span",[t._v("Action")])])}],n=(a("14d9"),a("4555")),r=a("9769"),o=a("162b"),l={components:{Pager:n["a"],StorageBar:o["a"]},data(){return{isLoading:!1,UserData:[],DepartmentData:[],designationData:[],userStorageDetailSummary:[],pageNo:1,searchCondition:null,sortExp:null,sortBy:null,pageSize:10,totalRecords:"",dropDivShow:!1,showByNameDiv:!1,showByConsumedDiv:!1,divDesignationShow:!1,hideEditIcon:!0,isAllocatedSpaceOpen:!1,UserStorageValue:null,UserId:null,saveStorage:null,StorageValue:null,jsonobj:[],JSONSearchData:[],departmentList:null,designationList:null,txtSearchUserName:"",txtConsumedStorage:"",userFilterData:[],CheckIfExistDepartment:[],jsonFilteredData:[],label:!1,totalConsumedStorage:0,totalAllowedStorage:0,NoRecordLength:0,isDeptSearchOn:!1,isDesgSearchOn:!1,arrayDepartmentChecks:[],departmentSelectedArray:[],designationSelectedArray:[],arrayDesignationChecks:[],CheckIfExistDesignation:[],CheckIfExist:[],txtDepartmentName:[],tempArray:[],txtSearchDeptValue:"",containerSize:null,docStorageMaxLimit:null,AllowedClientStorage:null,AllowedUserStorage:null,total:null,consumed:null,allocated:null,jsonObjData:[]}},created(){var t=this;t.FetchData(),t.GetDDLDesignationData(),t.GetDDLDepartmentData(),t.GetStoragedata()},computed:{AvailableSpace(){return"All"==this.type?this.total>=this.consumed?this.total-this.consumed:0:this.AllowedClientStorage+this.AllowedUserStorage<this.allocated?this.allocated-this.AllowedClientStorage-this.AllowedUserStorage:0},AllowedStorage(){var t=this.AllowedClientStorage+this.AllowedUserStorage;return t}},methods:{validate:function(){var t=this,e=(t.AllowedClientStorage,t.AllowedUserStorage),a=t.AvailableSpace,s=t.totalAllowedStorage,i=e+a;return!(i<s)||(t.ShowAlert(t.$t("You cannot assign space more than available space"),"failure",!0,t.$t("Alert")),!1)},PreviousButton:function(){var t=this;t.$parent.ShowNextTab(3)},searchDept:function(){var t=this;""!=t.txtSearchDeptValue&&(t.DepartmentData=t.DepartmentData.filter(e=>e.name.toLowerCase().includes(t.txtSearchDeptValue)))},ClearFilter:function(t,e,a){},enableDepartmentSearch:function(){var t=this;$(".DepartmentchkItems:checked").length>0?(t.isDeptSearchOn=!0,t.departmentSelectedArray=[],$(".DepartmentchkItems:checked").each((function(){var e=$(this).val();t.arrayDepartmentChecks=t.DepartmentData.filter(t=>t.value==e),t.departmentSelectedArray=t.departmentSelectedArray.concat(t.arrayDepartmentChecks)}))):t.isDeptSearchOn=!1},enableDesignationSearch:function(){var t=this;$(".DesignationchkItems:checked").length>0?(t.isDesgSearchOn=!0,t.designationSelectedArray=[],$(".DesignationchkItems:checked").each((function(){var e=$(this).val();t.arrayDesignationChecks=t.designationData.filter(t=>t.value==e),t.designationSelectedArray=t.designationSelectedArray.concat(t.arrayDesignationChecks)}))):t.isDesgSearchOn=!1},SkipButton:function(){var t=this;t.$parent.ShowNextTab(5)},SaveButton:function(){var t=this;t.jsonObjData=[];new FormData;if(0!=$("#tblFileList tr").length){var e=`pageNo=${t.pageNo}&pageSize=${t.pageSize}&sortBy=&sortExp=&userTypeIds=1,2,3`;r["a"].GetUserStorageDetail(e).then((function(e){t.UserData=JSON.parse(e.data).USERSTORAGEDETAILLIST,null!=t.UserData&&t.UserData.forEach((e,a)=>{let s={DataId:e.USER_ID,DataValue:e.ALLOWED_STORAGE};t.jsonObjData.push(s)});let a=[{refCode:"UserSetting",moduleName:"DocStorage"}];var s="configData",i="conditionData",n="[{"+JSON.stringify(s)+":"+JSON.stringify(t.jsonObjData)+", "+JSON.stringify(i)+":"+JSON.stringify(a)+"}]";1==t.validate()?r["a"].ManageDocUserStorageSettingData(JSON.stringify(n)).then(e=>{0==e.data?t.$parent.ShowNextTab(5):t.ShowAlert(t.$t("UnknownErrorOccur"),"failure",!0,t.$t("Alert"))}):t.ShowAlert(t.$t("You cannot assign space more than available space"),"failure",!0,t.$t("Alert"))}))}else t.ShowAlert(t.$t("UnknownErrorOccur"),"failure",!0,t.$t("Alert"))},disableDepartmentButton:function(){var t=this;t.isDeptSearchOn=!1},disableDisgnationButton:function(){var t=this;t.isDesgSearchOn=!1},SearchUserStorage:function(){var t=this;t.userFilterData=[],$(".DepartmentchkItems:checked").each((function(){var e=$(this).val();t.CheckIfExistDepartment=t.UserData.filter(t=>t.DEPARTMENT_ID==e),t.JSONSearchData=Array.from(t.CheckIfExistDepartment),t.userFilterData=t.userFilterData.concat(t.JSONSearchData),t.departmentSelectedArray.length>0?t.dropDivShow=!0:t.dropDivShow=!1})),$(".DesignationchkItems:checked").each((function(){0==t.userFilterData.length&&(t.jsonFilteredData=t.UserData);var e=$(this).val();t.CheckIfExistDesignation=t.UserData.filter(t=>t.DESIGNATION_ID==e),t.JSONSearchData=Array.from(t.CheckIfExistDesignation),t.userFilterData=t.userFilterData.concat(t.JSONSearchData),t.designationSelectedArray.length>0?t.divDesignationShow=!0:t.divDesignationShow=!1})),""!=t.txtSearchUserName&&(0==t.userFilterData.length&&(t.jsonFilteredData=t.UserData),t.CheckIfExist=t.UserData.filter(e=>e.USER_NAME.toLowerCase().includes(t.txtSearchUserName)),t.JSONSearchData=Array.from(t.CheckIfExist),t.userFilterData=t.userFilterData.concat(t.JSONSearchData)),""!=t.txtConsumedStorage&&(0==t.userFilterData.length&&(t.jsonFilteredData=t.UserData),t.CheckIfExist=t.jsonFilteredData.filter((function(e){return e.CONSUMED_STROAGE==t.txtConsumedStorage})),t.JSONSearchData=Array.from(t.CheckIfExist),t.userFilterData=t.userFilterData.concat(t.JSONSearchData)),t.UserData=t.userFilterData,t.getTotalStorageData()},ResetButton:function(){var t=this;t.FetchData(),t.GetDDLDesignationData(),t.GetDDLDepartmentData(),t.dropDivShow=!1,t.divDesignationShow=!1,t.showByNameDiv=!1,t.showByConsumedDiv=!1,$(".DepartmentchkItems").prop("checked",!1),$(".DesignationchkItems").prop("checked",!1),t.txtSearchUserName="",t.txtConsumedStorage="",t.toggleExpandCollapseButton(t.label=!0),t.userFilterData=[],t.designationSelectedArray=[],t.departmentSelectedArray=[]},toggleExpandCollapseButton:function(){var t=this;0==t.label?(t.dropDivShow=!0,t.divDesignationShow=!0,t.showByNameDiv=!0,t.showByConsumedDiv=!0,t.label=!0):(t.dropDivShow=!1,t.divDesignationShow=!1,t.showByNameDiv=!1,t.showByConsumedDiv=!1,t.label=!1,t.isDeptSearchOn=!1,t.isDesgSearchOn=!1),t.txtSearchUserName="",t.txtConsumedStorage=""},getTotalStorageData:function(){var t=this;t.totalAllowedStorage=0,t.totalConsumedStorage=0,t.UserData.forEach(e=>{"1002"!=e.STATUS_ID&&(t.totalAllowedStorage+=e.ALLOWED_STORAGE,t.totalConsumedStorage+=e.CONSUMED_STROAGE)})},AllocatedSpacePopup:function(){var t=this,e="",a="";$("#tblFileList .chkItems:checked").not("[id^='chkAll']").each((function(){a=$(this).closest("tr").find(".maxAllowedStorage").val(),e=$(this).val();let s={Id:e,value:a};t.jsonobj.push(s)})),t.isAllocatedSpaceOpen=!0},closeAllocatedSpace:function(){var t=this;t.isAllocatedSpaceOpen=!1},GetStoragedata:function(){var t=this;t=this;r["a"].GetStorageReport().then((function(e){t.total=e.data[0].CONTAINER_LIMIT,t.consumed=e.data[0].CONTAINER_SIZE,t.allocated=e.data[0].DOC_STORAGE_MAXLIMIT}));var e="pageNo=1&pageSize=10&sortBy=&sortExp=&userTypeIds=4";r["a"].GetUserStorageDetail(e).then((function(e){var a=JSON.parse(e.data).USERSTORAGEDETAILLIST;t.AllowedClientStorage=0,a.forEach(e=>{t.AllowedClientStorage+=e.ALLOWED_STORAGE})}));var a="pageNo=1&pageSize=10&sortBy=&sortExp=&userTypeIds=1,2,3";r["a"].GetUserStorageDetail(a).then((function(e){var a=JSON.parse(e.data).USERSTORAGEDETAILLIST;t.AllowedUserStorage=0,a.forEach(e=>{t.AllowedUserStorage+=e.ALLOWED_STORAGE})}))},SaveData:function(t,e,a){var s=this;s.isLoading=!0,s.jsonObjData=[],s.UserId=t,s.UserStorageValue=e;let i={DataId:s.UserId,DataValue:s.UserStorageValue};s.jsonObjData.push(i);let n=[{refCode:"UserSetting",moduleName:"DocStorage"}];var o="configData",l="conditionData",c="[{"+JSON.stringify(o)+":"+JSON.stringify(s.jsonObjData)+", "+JSON.stringify(l)+":"+JSON.stringify(n)+"}]";if(e>s.total)return s.ShowAlert(s.$t("Allocate Storage cannot be more than total Storage"),"failure",!0,s.$t("Alert")),s.isLoading=!1,!1;e<a?s.ShowAlert(s.$t("Allocate Storage cannot be less than consumed Storage"),"failure",!0,s.$t("Alert")):isNaN(e)?s.ShowAlert(s.$t("Allocate Storage must be numeric."),"failure",!0,s.$t("Alert")):r["a"].ManageDocUserStorageSettingData(JSON.stringify(c)).then(e=>{0==e.data?(this.ShowAlert("Storage Configuration Data Updated Successfully"),$("#idMaxStorage"+t).addClass("disabled"),$("#divAction"+t).hide(),$("#idEdit"+t).show(),s.FetchData(),s.GetDDLDesignationData(),s.GetDDLDepartmentData(),s.$parent.GetStorageSetupStatusDetail()):s.ShowAlert(s.$t("UnknownErrorOccur"),"failure",!0,s.$t("Alert"))}),s.isLoading=!1},CancelAction:function(t){var e=this;$("#idMaxStorage"+t).addClass("disabled"),$("#idEdit"+t).show(),$("#divAction"+t).hide(),e.FetchData(),e.GetDDLDesignationData(),e.GetDDLDepartmentData()},editAllowedStorage:function(t){$("#idMaxStorage"+t).removeClass("disabled"),$("#idEdit"+t).hide(),$("#divAction"+t).show()},PagerData:function(t,e,a,s){var i=this;i.pageNo=t,i.pageSize=s,i.FetchData(i.pageNo,e,a,i.pageSize)},pagerMethod:function(t){"Prev"==t.target.innerHTML?this.pageNo=this.pageNo-1:"Next"==t.target.innerHTML?this.pageNo=parseInt(this.pageNo)+1:this.pageNo=t.target.innerHTML,"First"==this.pageNo&&(this.pageNo="1"),"Last"==this.pageNo&&(this.pageNo=this.TotalPages),parseInt(this.pageNo)>0?this.PagerData(this.pageNo,"","",this.pageSize):this.pageNo=1},pageSizecommon:function(t){var e=this;e.pageNo=1,e.pageSize=t.target.value,e.PagerData(e.pageNo,"","",e.pageSize)},onChange:function(){var t=$(".chkItems:checked").not("[id^='chkAll']").length;t>0?$("#btnStorageSpace").removeClass("disabled"):$("#btnStorageSpace").addClass("disabled")},GetDDLDepartmentData:function(){var t=this;var e="moduleName=DocStorage&type=DEPARTMENT";r["a"].GetDDLDatas(e).then(e=>{t.DepartmentData=e.data.DATA})},GetDDLDesignationData:function(){var t=this;var e="moduleName=DocStorage&type=HR_DESIG";r["a"].GetDDLDatas(e).then(e=>{t.designationData=e.data.DATA})},FetchData:function(){var t=this;t.isLoading=!0;var e=`pageNo=${t.pageNo}&pageSize=${t.pageSize}&sortBy=&sortExp=&userTypeIds=1,2,3`;r["a"].GetUserStorageDetail(e).then((function(e){t.UserData=JSON.parse(e.data).USERSTORAGEDETAILLIST,t.totalRecords=t.UserData[0].totalRecords,t.userStorageDetailSummary=JSON.parse(e.data).USERSTORAGEDETAILSUMMARY,t.getTotalStorageData(),t.isLoading=!1,null==t.UserData?t.NoRecordLength=0:t.NoRecordLength=t.UserData.length})),setTimeout((function(){t.ResponsiveDataTable("tblFileList")}),500),$("#btnStorageSpace").addClass("disabled")}}},c=l,d=a("2877"),h=Object(d["a"])(c,s,i,!1,null,null,null);e["a"]=h.exports},"6be4":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".scrolll{height:300px;overflow:scroll}",""]),t.exports=e},"7d47":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content",attrs:{id:"main-content"}},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("section",{staticClass:"main-content"},[e("div",{staticClass:"container-fluid padding-t_10"},[e("div",{staticClass:"left-menu-tab",attrs:{id:"UserLeftMenu"}},[e("leftsearch",{attrs:{classs:"DepartmentchkItems",header:"Manage User Storage",fields:t.leftSearchfeild,modulename:"DocStorage"},on:{SetLeftSearch:t.SetLeftSearch,click:t.ResetButton}})],1),e("div",{staticClass:"right-content",attrs:{id:"UserRightContent"}},[e("div",{staticClass:"col-md-12 pb-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"},[e("StorageBar",{attrs:{type:"Doc"}})],1)])]),e("hr",{staticClass:"mt-2 mb-2 p-0"}),t._l(t.userStorageDetailSummary,(function(a,s){return e("div",{key:s,staticClass:"col-md-12 p-0"},[e("ul",{staticClass:"dashbord-widget"},[e("li",{staticClass:"one_wid"},[e("h3",[e("span",{staticClass:"inherit-span",attrs:{id:"spnStorageLimit"}},[t._v(t._s(a.DOC_STORAGE_MAXLIMIT))]),t._v(" MB"),e("br"),e("span",[t._v("Total")])]),e("i",{staticClass:"fa fa-hdd-o",attrs:{"aria-hidden":"true"}})]),e("li",{staticClass:"two_wid"},[e("h3",[e("span",{staticClass:"inherit-span",attrs:{id:"TotalConsumedSpace"}},[t._v(t._s(t.totalConsumedStorage))]),t._v("MB"),e("br"),e("span",[t._v("Consumed")])]),e("i",{staticClass:"fa fa-hdd-o",attrs:{"aria-hidden":"true"}})]),e("li",{staticClass:"three_wid"},[e("h3",[e("span",{staticClass:"inherit-span",attrs:{id:"TotalAvailableSpace"}},[t._v(t._s(a.DOC_STORAGE_MAXLIMIT-(t.AllowedClientStorage+t.totalAllowedStorage)))]),t._v("MB"),e("br"),e("span",[t._v("Available")])]),e("i",{staticClass:"fa fa-hdd-o",attrs:{"aria-hidden":"true"}})]),e("li",{staticClass:"four_wid"},[e("h3",[e("span",{staticClass:"inherit-span",attrs:{id:"AssignedtoUser"}},[t._v(t._s(t.totalAllowedStorage))]),t._v(" MB"),e("br"),e("span",[t._v("Assigned To User")])]),e("i",{staticClass:"fa fa-user-o",attrs:{"aria-hidden":"true"}})]),e("li",{staticClass:"five_wid"},[e("h3",[e("span",{staticClass:"inherit-span",attrs:{id:"abc"}},[t._v(t._s(t.AllowedClientStorage))]),t._v(" MB"),e("br"),e("span",[t._v("Assigned To Client")])]),e("i",{staticClass:"fa fa-id-card-o",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"clearfix"})])})),e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition p-actions-expand"},[e("span",{staticClass:"p-actions float-right"},[e("a",{staticClass:"p-action-btn text-white disabled",attrs:{id:"btnStorageSpace",href:"#myModal","data-toggle":"modal",alt:"Allocate Space",title:"Allocate Space"},on:{click:t.AllocatedSpacePopup}},[e("i",{staticClass:"fa fa-plus"}),e("br"),t._v("Allocate Space ")]),e("input",{attrs:{id:"ReportViewer",type:"hidden",value:"L"}})]),t._m(0)])]),e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"listing mt-2"},[e("div",{staticClass:"expand-list"},[e("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"},on:{click:t.ExpandCollapseList}},[e("i",{staticClass:"icon-solid arrow-solid-left",staticStyle:{"font-size":"9pt"}})])]),e("div",{staticClass:"listing py-3 px-3"},[e("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"div_forListView"}},[e("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tablelistingdata"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"text-center",staticStyle:{width:"50px !important"}},[e("input",{staticClass:"chkitems",attrs:{id:"chkAll",value:"",type:"checkbox"},on:{change:function(e){return t.onChange()}}})]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])]),e("tbody",[t._l(t.UserData,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"text-center"},[e("input",{staticClass:"chkItems",attrs:{Id:a.USER_ID,type:"checkbox"},domProps:{value:a.USER_ID},on:{change:function(e){return t.onChange()}}})]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.USER_NAME)+" ")])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.DESIGNATION_NAME)+" ")])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.DEPARTMENT_NAME)+" ")])]),e("td",["1001"==a.STATUS_ID?e("span",{staticClass:"fullPaid btn d-inline-block w-80 text-center text-truncate btn-success"},[t._v(" Active")]):t._e(),"1084"==a.STATUS_ID?e("span",{staticClass:"sent bg-secondary btn d-inline-block w-80 text-center text-truncate text-white",attrs:{title:""}},[t._v(" Approved")]):t._e(),"Rejected"==a.STATUS_ID?e("span",{staticClass:"stop btn d-inline-block w-80 text-center text-truncate btn-danger",attrs:{title:""}},[t._v(" Rejected")]):t._e(),"1003"==a.STATUS_ID?e("span",{staticClass:"stop px-2 bg-primary btn d-inline-block w-80 text-center text-truncate",attrs:{title:""}},[t._v(" Deleted")]):t._e(),"1002"==a.STATUS_ID?e("span",{staticClass:"fullPaid btn d-inline-block w-80 text-center text-truncate btn-danger"},[t._v("Inactive")]):t._e(),"1005"==a.STATUS_ID?e("span",{staticClass:"fullPaid btn d-inline-block w-80 text-center text-truncate btn-secondary"},[t._v(" Pending")]):t._e(),"ActivationAwaited"==a.STATUS_ID?e("span",{staticClass:"fullPaid btn d-inline-block w-80 text-center text-truncate btn-warning"},[t._v(" ActivationAwaited")]):t._e()]),e("td",[e("span",{staticClass:"text-right text-overflow-dynamic-container"},[t._v(" "+t._s("1002"==a.STATUS_ID?0:a.CONSUMED_STROAGE)+" ")])]),e("td",["1002"!=a.STATUS_ID?e("span",{staticClass:"text-overflow-dynamic-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.ALLOWED_STORAGE,expression:"item.ALLOWED_STORAGE"}],staticClass:"maxAllowedStorage form-control text-right disabled",attrs:{type:"text","asp-for":"item.MaxStorage",id:"idMaxStorage"+a.USER_ID,step:"0.01",maxlength:"13"},domProps:{value:a.ALLOWED_STORAGE},on:{input:function(e){e.target.composing||t.$set(a,"ALLOWED_STORAGE",e.target.value)}}})]):t._e(),"1002"==a.STATUS_ID?e("span",{staticClass:"text-overflow-dynamic-container"},[e("input",{staticClass:"maxAllowedStorage form-control text-right disabled",attrs:{type:"text","asp-for":"item.MaxStorage",id:"idMaxStorage"+a.USER_ID,step:"0.01",maxlength:"13",value:"0"}})]):t._e()]),e("td",{staticClass:"text-center single-action"},[t.hideEditIcon?e("a",{staticClass:"aEdit",attrs:{title:"Edit",id:"idEdit"+a.USER_ID},on:{click:function(e){return t.editAllowedStorage(a.USER_ID)}}},[e("em",{staticClass:"fa fa-pencil text-success action-icon"})]):t._e(),e("div",{staticStyle:{display:"none"},attrs:{id:"divAction"+a.USER_ID}},[e("a",{staticClass:"aCancel mr-2",attrs:{id:"idCancel_"+a.USER_ID,value:a.USER_ID,title:"Cancel",href:"javascript:;"},on:{click:function(e){return t.CancelAction(a.USER_ID,a.ALLOWED_STORAGE)}}},[e("em",{staticClass:"fa fa-times-circle text-danger action-icon"})]),e("a",{staticClass:"aSave",attrs:{title:"Save",value:a.USER_ID,id:"idSave_"+a.USER_ID,href:"javascript:;"},on:{click:function(e){return t.SaveData(a.USER_ID,a.ALLOWED_STORAGE)}}},[e("em",{staticClass:"fa fa-save text-primary action-icon"})])])])])})),0==t.UserData.length?e("tr",[e("td",{staticClass:"text-danger text-center no-record",attrs:{colspan:"7"}},[t._v("No Record Found")])]):t._e(),t.NoRecordLength>0?e("tr",[e("td",{staticClass:"text-right fr font-weight-bold",attrs:{colspan:"2"}},[t._v("Total")]),e("td",{staticClass:"text-right fr font-weight-bold",attrs:{colspan:"4"}},[t._v(t._s(t.totalConsumedStorage)+" MB ")]),e("td",{staticClass:"text-right fr font-weight-bold"},[t._v(t._s(t.totalAllowedStorage)+" MB ")])]):t._e()],2)])])])])])],2)])]),t.isAllocatedSpaceOpen?e("AllocatedSpace",{attrs:{jsonobj:t.jsonobj}}):t._e()],1)},i=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"collapse-head-btns"},[e("a",{staticClass:"collapse-btns",attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-angle-up text-white"})])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("User Name")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Designation")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Department")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Status")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Consumed Storage(MB)")])])},function(){var t=this,e=t._self._c;return e("th",[e("span",[t._v("Allocated Storage (MB)")])])},function(){var t=this,e=t._self._c;return e("th",{staticClass:"text-center nonresize",attrs:{"data-width":"5%"}},[e("span",[t._v("Action")])])}],n=(a("14d9"),a("4555")),r=a("445f"),o=a("9769"),l=a("c857"),c=a("162b"),d=a("05a5");let h=[{fieldName:"Department",fieldType:"ddl-check",name:"Department",fieldIcon:"fa fa fa-users",fieldSearchConditionName:[],isSearch:!1,value:"",listOptions:[]},{fieldName:"Designation",fieldType:"ddl-check",name:"Designation",fieldIcon:"fa fa-user-circle",fieldSearchConditionName:"",isSearch:!1,value:"",listOptions:[]},{fieldName:"Search by User Name",fieldType:"text",fieldIcon:"fa fa-user",name:"UserName",fieldSearchConditionName:"",isSearch:!1,value:"",listOptions:[]},{fieldName:"Consumed Storage",fieldType:"text",fieldIcon:"fa fa-hdd-o",name:"ConsumedStorage",fieldSearchConditionName:"",isSearch:!1,value:"",listOptions:[]}];function S(t,e,a){var s=t,i="moduleName=DocStorage&type=DEPARTMENT",n="moduleName=DocStorage&type=HR_DESIG";"DEPARTMENT"==a?o["a"].GetDDLDatas(i).then(t=>(t.data.DATA.forEach(t=>{let e={name:t.name,value:t.value};s.leftSearchfeild[0].listOptions.push(e)}),s.$parent.DepartmentDataTemp=t.data.DATA)):o["a"].GetDDLDatas(n).then(t=>(t.data.DATA.forEach(t=>{let e={name:t.name,value:t.value};s.leftSearchfeild[1].listOptions.push(e)}),s.$parent.DepartmentDataTemp=t.data.DATA))}var D={lefrsearchschema:h,bindleftCommonSearchdropdown:S},g={components:{Pager:n["a"],AllocatedSpace:l["a"],UserStorageListingTable:r["a"],StorageBar:c["a"],leftsearch:d["a"]},data(){return{isLoading:!1,UserData:[],DepartmentData:[],designationData:[],userStorageDetailSummary:[],pageNo:1,searchCondition:null,sortExp:null,sortBy:null,pageSize:10,totalRecords:"",dropDivShow:!1,showByNameDiv:!1,showByConsumedDiv:!1,divDesignationShow:!1,hideEditIcon:!0,isAllocatedSpaceOpen:!1,UserStorageValue:null,UserId:null,saveStorage:null,StorageValue:null,jsonobj:[],JSONSearchData:[],departmentList:null,designationList:null,txtSearchUserName:"",txtConsumedStorage:"",userFilterData:[],CheckIfExistDepartment:[],jsonFilteredData:[],label:!1,totalConsumedStorage:0,totalAllowedStorage:0,NoRecordLength:0,isDeptSearchOn:!1,isDesgSearchOn:!1,arrayDepartmentChecks:[],departmentSelectedArray:[],designationSelectedArray:[],arrayDesignationChecks:[],CheckIfExistDesignation:[],CheckIfExist:[],txtDepartmentName:[],tempArray:[],txtSearchDeptValue:"",txtSearchDesgValue:"",droplabeldept:!0,droplabeldesg:!1,FinalCheckedArray:[],unCheckedArray:[],DepartmentDataTemp:[],labelChecked:!1,desglabelChecked:!1,DesignationDataTemp:[],isShowDept:!1,isShowDesg:!1,avaliablestorage:null,AllowedClientStorage:null,leftSearchfeild:D.lefrsearchschema,tempUserData:[],jsonObjData:[]}},created(){var t=this;t.FetchData(),t.FetchClientData(),D.bindleftCommonSearchdropdown(t,"DocStorage","DEPARTMENT"),D.bindleftCommonSearchdropdown(t,"DocStorage","Designation")},methods:{DisplaySelectedArray:function(t){var e=this;"Dept"==t?e.departmentSelectedArray.length>0?e.isShowDept=!0:e.departmentSelectedArray.length<0&&(e.isShowDept=!1):"Desg"==t&&(e.designationSelectedArray.length>0?e.isShowDesg=!0:e.designationSelectedArray.length<0&&(e.isShowDesg=!1))},SelectAllOnClick:function(t){var e=this;"Dept"==t&&(0==e.labelChecked?($.each(e.DepartmentData,(function(a,s){s.checkitem=!0,e.isDeptSearchOn=!0,e.enableLeftItem(s,t)})),e.labelChecked=!0):$.each(e.DepartmentData,(function(t,a){a.checkitem=!1,e.departmentSelectedArray=[],e.isDeptSearchOn=!1,e.isShowDept=!1})),0==!$(".selectallId").prop("checked")&&(e.departmentSelectedArray=[],$(".selectallId").prop("checked",!0),$.each(e.DepartmentData,(function(a,s){s.checkitem=!0,e.enableLeftItem(s,t)})))),"Desg"==t&&(0==e.desglabelChecked?($.each(e.designationData,(function(a,s){s.checkitem=!0,e.isDesgSearchOn=!0,e.enableLeftItem(s,t)})),e.desglabelChecked=!0):$.each(e.designationData,(function(t,a){a.checkitem=!1,e.designationSelectedArray=[],e.isDesgSearchOn=!1,e.isShowDesg=!1})),0==!$(".selectallDesgId").prop("checked")&&(e.designationSelectedArray=[],$(".selectallDesgId").prop("checked",!0),$.each(e.designationData,(function(a,s){s.checkitem=!0,e.enableLeftItem(s,t)}))))},ClearFilter:function(t,e){var a=this;"departmentDDL"==e?(a.departmentSelectedArray=a.departmentSelectedArray.filter(e=>e.value!=t),$(".checkedcls"+t).prop("checked",!1),a.DepartmentDataTemp.forEach(e=>{e.value==t&&(e.checkitem=!1)}),a.departmentSelectedArray.length<a.DepartmentData.length&&$(".selectallId").prop("checked",!1)):"designationDDL"==e&&(a.designationSelectedArray=a.designationSelectedArray.filter(e=>e.value!=t),$(".checkedDesgcls"+t).prop("checked",!1),a.DesignationDataTemp.forEach(e=>{e.value==t&&(e.checkitem=!1)}),a.designationSelectedArray.length<a.designationData.length&&$(".selectallDesgId").prop("checked",!1)),a.departmentSelectedArray.length>0?a.isDeptSearchOn=!0:a.isDeptSearchOn=!1,a.designationSelectedArray.length>0?a.isDesgSearchOn=!0:a.isDesgSearchOn=!1},enableLeftItem:function(t,e){var a=this;"Dept"==e?(1==t.checkitem?a.departmentSelectedArray=a.departmentSelectedArray.concat(t):(a.departmentSelectedArray=a.departmentSelectedArray.filter(e=>e.value!=t.value),$(".checkedcls"+t.value).prop("checked",!1),a.isShowDept=!1),a.departmentSelectedArray.length>0?a.isDeptSearchOn=!0:a.isDeptSearchOn=!1,a.departmentSelectedArray.length==a.DepartmentData.length&&$(".selectallId").prop("checked",!0),a.departmentSelectedArray.length<a.DepartmentData.length&&$(".selectallId").prop("checked",!1)):"Desg"==e&&(1==t.checkitem?a.designationSelectedArray=a.designationSelectedArray.concat(t):(a.designationSelectedArray=a.designationSelectedArray.filter(e=>e.value!=t.value),$(".checkedDesgcls"+t.value).prop("checked",!1),a.isShowDesg=!1),a.designationSelectedArray.length>0?a.isDesgSearchOn=!0:a.isDesgSearchOn=!1,a.designationSelectedArray.length==a.designationData.length&&$(".selectallDesgId").prop("checked",!0),a.designationSelectedArray.length<a.designationData.length&&$(".selectallDesgId").prop("checked",!1))},disableButton:function(t){var e=this;"Dept"==t?e.departmentSelectedArray.length>0?e.isDeptSearchOn=!0:e.isDeptSearchOn=!1:"Desg"==t&&(e.designationSelectedArray.length>0?e.isDesgSearchOn=!0:e.isDesgSearchOn=!1)},SearchUserStorage:function(){var t=this;t.userFilterData=[],$("input[name=Department]:checked").each((function(){var e=$(this).val();t.CheckIfExistDepartment=t.UserData.filter(t=>t.DEPARTMENT_ID==e),t.JSONSearchData=Array.from(t.CheckIfExistDepartment),t.userFilterData=t.userFilterData.concat(t.JSONSearchData),t.departmentSelectedArray.length>0?t.dropDivShow=!0:t.dropDivShow=!1})),$("input[name=Designation]:checked").each((function(){0==t.userFilterData.length&&(t.jsonFilteredData=t.UserData);var e=$(this).val();t.CheckIfExistDesignation=t.UserData.filter(t=>t.DESIGNATION_ID==e),t.JSONSearchData=Array.from(t.CheckIfExistDesignation),t.userFilterData=t.userFilterData.concat(t.JSONSearchData),t.designationSelectedArray.length>0?t.divDesignationShow=!0:t.divDesignationShow=!1})),""!=$("input[name=UserName]").val()&&(0==t.userFilterData.length&&(t.jsonFilteredData=t.UserData),t.CheckIfExist=t.jsonFilteredData.filter(t=>t.USER_NAME.includes($("input[name=UserName]").val())),t.JSONSearchData=Array.from(t.CheckIfExist),t.userFilterData=t.userFilterData.concat(t.JSONSearchData)),""!=$("input[name=ConsumedStorage]").val()&&(0==t.userFilterData.length&&(t.jsonFilteredData=t.UserData),t.CheckIfExist=t.jsonFilteredData.filter((function(e){return e.CONSUMED_STROAGE==t.txtConsumedStorage})),t.JSONSearchData=Array.from(t.CheckIfExist),t.userFilterData=t.userFilterData.concat(t.JSONSearchData)),""==$("input[name=ConsumedStorage]").val()&&""==$("input[name=UserName]").val()&&0==$("input[name=Department]:checked").length&&0==$("input[name=Designation]:checked").length?t.UserData=t.tempUserData:t.UserData=t.userFilterData,setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500),t.getTotalStorageData()},ResetButton:function(){var t=this;t.FetchData(),t.GetDDLDepartmentData(),t.GetDDLDesignationData(),$("#deptToggle").hide(),$("#desgToggle").hide(),t.showByNameDiv=!1,t.showByConsumedDiv=!1,$(".DepartmentchkItems").prop("checked",!1),$(".DesignationchkItems").prop("checked",!1),t.txtSearchUserName="",t.txtConsumedStorage="",t.toggleExpandCollapseButton(t.label=!0),t.userFilterData=[],t.designationSelectedArray=[],t.departmentSelectedArray=[],t.txtSearchDeptValue="",t.txtSearchDesgValue="",t.isDeptSearchOn=!1,t.isDesgSearchOn=!1,t.isShowDesg=!1,t.isShowDept=!1,$(".selectallId").prop("checked",!1),$(".selectallDesgId").prop("checked",!1)},toggleExpandCollapseButton:function(){var t=this;0==t.label?($("#collapseUserName").show(),$("#desgToggle").show(),t.showByNameDiv=!0,t.showByConsumedDiv=!0,t.label=!0,t.isDeptSearchOn=!0,t.isDesgSearchOn=!0):($("#collapseUserName").hide(),$("#desgToggle").hide(),t.showByNameDiv=!1,t.showByConsumedDiv=!1,t.label=!1,t.isDeptSearchOn=!0,t.isDesgSearchOn=!0),t.departmentSelectedArray.length>0?t.isDeptSearchOn=!0:t.isDeptSearchOn=!1,t.designationSelectedArray.length>0?t.isDesgSearchOn=!0:t.isDesgSearchOn=!1},getTotalStorageData:function(){var t=this;t.totalAllowedStorage=0,t.totalConsumedStorage=0,t.UserData.forEach(e=>{"1002"!=e.STATUS_ID&&(t.totalAllowedStorage+=e.ALLOWED_STORAGE,t.totalConsumedStorage+=e.CONSUMED_STROAGE)}),t.avaliablestorage=parseInt(t.totalAllowedStorage)-parseInt(t.totalConsumedStorage)},AllocatedSpacePopup:function(){var t=this;t.jsonobj=[];var e="";$("#tblFileList .chkItems:checked").not("[id^='chkAll']").each((function(){e=$(this).val();let a={Id:e};t.jsonobj.push(a)})),t.isAllocatedSpaceOpen=!0},closeAllocatedSpace:function(){var t=this;t.isAllocatedSpaceOpen=!1},SaveData:function(t,e){var a=this;a.isLoading=!0,a.UserId=t,a.UserStorageValue=e;let s={DataId:a.UserId,DataValue:a.UserStorageValue};a.jsonObjData.push(s);let i=[{refCode:"UserSetting",moduleName:"DocStorage"}];var n="configData",r="conditionData",l="[{"+JSON.stringify(n)+":"+JSON.stringify(a.jsonObjData)+", "+JSON.stringify(r)+":"+JSON.stringify(i)+"}]";o["a"].ManageDocUserStorageSettingData(JSON.stringify(l)).then(e=>{0==e.data?(this.ShowAlert("Storage Configuration Data Updated Successfully"),$("#idMaxStorage"+t).addClass("disabled"),$("#divAction"+t).hide(),$("#idEdit"+t).show(),a.FetchData(),a.GetDDLDesignationData(),a.GetDDLDepartmentData()):a.ShowAlert(a.$t("UnknownErrorOccur"),"failure",!0,a.$t("Alert"))}),a.isLoading=!1},CancelAction:function(t){var e=this;$("#idMaxStorage"+t).addClass("disabled"),$("#idEdit"+t).show(),$("#divAction"+t).hide(),e.FetchData(),e.GetDDLDesignationData(),e.GetDDLDepartmentData()},editAllowedStorage:function(t){$("#idMaxStorage"+t).removeClass("disabled"),$("#idEdit"+t).hide(),$("#divAction"+t).show()},PagerData:function(t,e,a,s){var i=this;i.pageNo=t,i.pageSize=s,i.FetchData(i.pageNo,e,a,i.pageSize)},pagerMethod:function(t){"Prev"==t.target.innerHTML?this.pageNo=this.pageNo-1:"Next"==t.target.innerHTML?this.pageNo=parseInt(this.pageNo)+1:this.pageNo=t.target.innerHTML,"First"==this.pageNo&&(this.pageNo="1"),"Last"==this.pageNo&&(this.pageNo=this.TotalPages),parseInt(this.pageNo)>0?this.PagerData(this.pageNo,"","",this.pageSize):this.pageNo=1},pageSizecommon:function(t){var e=this;e.pageNo=1,e.pageSize=t.target.value,e.PagerData(e.pageNo,"","",e.pageSize)},onChange:function(){var t=$(".chkItems:checked").not("[id^='chkAll']").length;t>0?$("#btnStorageSpace").removeClass("disabled"):$("#btnStorageSpace").addClass("disabled")},ReflectedDepartmentData:function(t){var e=this;void 0!=t.target.value&&(e.DepartmentDataTemp=e.DepartmentData.filter(e=>e.name.toLowerCase().includes(t.target.value)))},ReflectedDesignationData:function(t){var e=this;void 0!=t.target.value&&(e.DesignationDataTemp=e.designationData.filter(e=>e.name.toLowerCase().includes(t.target.value)))},GetDDLDepartmentData:function(){var t=this;var e="moduleName=DocStorage&type=DEPARTMENT";o["a"].GetDDLDatas(e).then(e=>{t.DepartmentData=e.data.DATA,t.DepartmentDataTemp=t.DepartmentData,$.each(t.DepartmentData,(function(t,e){e.checkitem=!1}))})},GetDDLDesignationData:function(){var t=this;var e="moduleName=DocStorage&type=HR_DESIG";o["a"].GetDDLDatas(e).then(e=>{t.designationData=e.data.DATA,t.DesignationDataTemp=t.designationData,$.each(t.designationData,(function(t,e){e.checkitem=!1}))})},SetLeftSearch:function(){var t=this;t.UserData=t.tempUserData,t.SearchUserStorage()},ExpandCollapseList(){var t=document.getElementById("UserLeftMenu");t.classList.toggle("left-menu-tab-collapsed");var e=document.getElementById("UserRightContent");e.classList.toggle("right-content-expand")},FetchData:function(){var t=this;t.isLoading=!0;var e=`pageNo=${t.pageNo}&pageSize=${t.pageSize}&sortBy=&sortExp=&userTypeIds=1,2,3`;o["a"].GetUserStorageDetail(e).then((function(e){t.UserData=JSON.parse(e.data).USERSTORAGEDETAILLIST,t.tempUserData=JSON.parse(e.data).USERSTORAGEDETAILLIST,t.totalRecords=t.UserData[0].totalRecords,t.userStorageDetailSummary=JSON.parse(e.data).USERSTORAGEDETAILSUMMARY,t.getTotalStorageData(),t.isLoading=!1,null==t.UserData?t.NoRecordLength=0:t.NoRecordLength=t.UserData.length,setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)})),$("#btnStorageSpace").addClass("disabled")},FetchClientData:function(){var t=this;t.isLoading=!0;var e=`pageNo=${t.pageNo}&pageSize=${t.pageSize}&sortBy=&sortExp=&userTypeIds=4`;o["a"].GetUserStorageDetail(e).then((function(e){var a=JSON.parse(e.data).USERSTORAGEDETAILLIST;t.AllowedClientStorage=0,a.forEach(e=>{null==e.ALLOWED_STORAGE||void 0==e.ALLOWED_STORAGE?(e.ALLOWED_STORAGE=0,t.AllowedClientStorage+=e.ALLOWED_STORAGE):t.AllowedClientStorage+=e.ALLOWED_STORAGE})})),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500),$("#btnStorageSpace").addClass("disabled")}}},p=g,u=(a("231c"),a("2877")),m=Object(u["a"])(p,s,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-fdcd9802.js.map