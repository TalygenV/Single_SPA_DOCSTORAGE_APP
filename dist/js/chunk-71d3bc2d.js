(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71d3bc2d"],{"53c8":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-popups"},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header ui-draggable-handle"},[t("h4",{staticClass:"modal-title",attrs:{name:"header"}},[e._v("Add Group")]),t("button",{staticClass:"close",on:{click:e.ClosePopup}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),t("div",{staticClass:"modal-body"},[t("Form",{ref:"form",scopedSlots:e._u([{key:"default",fn:function({values:a,errors:s}){return[t("section",{staticClass:"main-content",attrs:{id:"divMainContent"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"form-group"},[t("label",[e._v(e._s(e.$t("Group Name"))+":"),t("span",{staticClass:"text-danger"},[e._v("*")])]),t("Field",{attrs:{name:"txtGroupName",rules:{required:!0},label:"Group Name"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.txtGroupName,expression:"txtGroupName"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{id:"txtGroupName",type:"text",maxlength:"200"},domProps:{value:e.txtGroupName},on:{input:function(t){t.target.composing||(e.txtGroupName=t.target.value)}}},"input",e.field,!1)),t("span",{staticClass:"invalid-feedback d-block",attrs:{name:"txtGroupName",id:"txtGroupName"}},[e._v(e._s(a[0]))])]}}],null,!0),model:{value:e.txtGroupName,callback:function(t){e.txtGroupName=t},expression:"txtGroupName"}})],1)]),t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"form-group",attrs:{id:"app"}},[t("label",[e._v(e._s(e.$t("Select User(s)"))+":"),t("span",{staticClass:"text-danger"},[e._v("*")])]),t("Field",{attrs:{name:"SelectedValue",rules:{required:!0},label:"Users"},scopedSlots:e._u([{key:"default",fn:function({field:a,errorMessage:i,meta:l}){return[t("Multiselect",e._b({attrs:{options:e.Options,multiple:!0,mode:"tags","close-on-select":!1,searchable:!0,taggable:!1,"track-by":"value",object:!0,"preselect-first":!0,label:"label"},on:{tag:e.addTag},model:{value:e.SelectedValue,callback:function(t){e.SelectedValue=t},expression:"SelectedValue"}},"Multiselect",a,!1)),t("span",{staticClass:"invalid-feedback d-block",attrs:{name:"SelectedValue",id:"SelectedValue"}},[e._v(e._s(s[0]))])]}}],null,!0),model:{value:e.SelectedValue,callback:function(t){e.SelectedValue=t},expression:"SelectedValue"}})],1)]),t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"},[t("div",{staticClass:"form-group"},[t("label",[e._v(e._s(e.$t("Description"))+":"),t("span",{staticClass:"text-danger"},[e._v("*")])]),t("Field",{attrs:{name:"Description",rules:{required:!0},label:"Description"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.txtDescription,expression:"txtDescription"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{id:"txtDescription",maxlength:"1000"},domProps:{value:e.txtDescription},on:{input:function(t){t.target.composing||(e.txtDescription=t.target.value)}}},"textarea",e.field,!1)),t("span",{staticClass:"invalid-feedback d-block",attrs:{name:"txtDescription",id:"txtDescription"}},[e._v(e._s(a[0]))])]}}],null,!0),model:{value:e.txtDescription,callback:function(t){e.txtDescription=t},expression:"txtDescription"}})],1)])])])]}}])})],1),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"popupgreenbtn btn btn-success formbtn widthhalf pr-2",attrs:{title:"Search"},on:{click:function(t){return e.Save(e.values,e.meta)}}},[e._v("Save")]),t("button",{staticClass:"popupredbtn btn btn-danger formbtn widthhalf pr-2",attrs:{title:"Cancel"},on:{click:e.ClosePopup}},[t("em",{staticClass:"fa fa-times pr-2",attrs:{"aria-hidden":"true"}}),e._v(" Cancel")])])])])])],1)},i=[],l=(a("14d9"),a("9769")),r=a("8e5f"),o=a.n(r),n={components:{Multiselect:o.a},props:{GroupData:{}},data(){return{isLoading:!1,loggeduserid:null,companyId:null,selected:[],UserListDDL:[],first_value:"",Options:[],closeOnSelect:!1,ShowModalAddGroup:!1,SelectedValue:[],AddEditText:"",SelectValue:[],GroupId:0}},created:function(){var e=this;e.loggeduserid=e.GetUserInfo.ID,e.companyId=e.GetUserInfo.CompanyId,e.BindUserListDDL("","COMPANY_USER_LIST")},methods:{BindGroupsData:function(e){this.AddEditText="Edit",null!=this.GroupData.GroupId&&(this.GroupId=this.GroupData.GroupId,this.txtGroupName=this.GroupData.txtGroupName,this.txtDescription=this.GroupData.txtDescription,this.SelectedValue=this.GroupData.GroupUserIds.split(",").map(e=>e.trim()))},ClosePopup:function(){this.$emit("CloseAddGroupPopup"),this.$parent.SharePopup()},BindUserListDDL:function(e,t){var a=this;a.isLoading=!0;let s={};s["type"]=t,s["refid"]=e,l["a"].GetDDLData(s).then((function(e){null!=e.data&&(a.UserListDDL=e.data.DATA,""!=e.data&&e.data.DATA.forEach((e,t)=>{a.Value=e.value,a.first_value=e.first_value,a.Options.push({value:a.Value,label:a.first_value})}),null!=a.GroupData&&a.BindGroupsData(a.GroupData),a.isLoading=!1)}))},CloseAddGroupPopup:function(){this.ShowModalAddGroup=!1},Save:function(e){var t=this;t.$refs.form.validate().then(e=>{if(t.vSelectValidate=!0,e){if(t.SelectedValue.forEach((e,a)=>{t.SelectValue.push(e.value)}),t.SelectedValue.length>1){let e={GroupId:t.GroupId,Name:t.txtGroupName,Description:t.txtDescription,Module_Id:"0",Sub_Module_Id:"0",Company_Id:t.companyId,Created_By:t.loggeduserid,GroupUserIds:t.SelectValue.join(",")};var a=JSON.stringify(e);l["a"].ManageUserGroup(a).then(e=>{t.isLoading=!0,"OK"==e.statusText?(t.$emit("CloseAddGroupPopup"),"Edit"==t.AddEditText?t.ShowAlert(t.$t("UpdatedSuccess",[t.$t("GroupName")]),"Success",!0,t.$t("Alert")):t.ShowAlert(t.$t("AddedSuccess",[t.$t("GroupName")]),"Success",!0,t.$t("Alert")),t.isLoading=!1):(t.$emit("CloseAddGroupPopup"),t.ShowAlert(t.$t("Error"+[t.$t("GroupName")]),"failure",!0,t.$t("Alert")),t.isLoading=!1)})}else t.ShowAlert([t.$t("Select more then one user.")]),t.$t("Alert")}t.isLoading=!1})}}},d=n,c=a("2877"),u=Object(c["a"])(d,s,i,!1,null,null,null);t["a"]=u.exports},"53ec":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-popups"},[t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header ui-draggable-handle"},[t("h4",{staticClass:"modal-title",attrs:{name:"header"}},[e._v("Copy Confirmation")]),t("button",{staticClass:"close",on:{click:e.ClosePopup}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),t("div",{staticClass:"modal-body"},[t("form",{attrs:{id:"frmCopyMoveConfirmation"}},[t("div",{attrs:{id:"divPopUp"}},[t("input",{attrs:{type:"hidden",id:"hdnDestFolderId"},domProps:{value:e.destFolderId}}),t("input",{attrs:{type:"hidden",id:"hdnOperationSelected"},domProps:{value:e.operationSelected}}),t("div",{staticClass:"table-responsive tableborder"},[t("table",{staticClass:"table-sorting table table-bordered mb-0"},[t("thead",{staticClass:"thead-light"},[t("tr",[t("th",{staticClass:"text-center",staticStyle:{"font-weight":"bold"},attrs:{width:"5%"}},[e._v("#")]),t("th",{staticStyle:{"font-weight":"bold"},attrs:{width:"45%"}},[e._v(e._s(e.$t("FileName")))]),t("th",{staticStyle:{"font-weight":"bold"},attrs:{width:"15%"}},[e._v(e._s(e.$t("Status")))]),t("th",{staticStyle:{"font-weight":"bold"},attrs:{width:"35%"}},[e._v(e._s(e.$t("Option")))])])]),t("tbody",[null==e.fileList||0==e.fileList.length?t("tr",[t("td",{staticClass:"text-center text-danger no-record",attrs:{colspan:"4"}},[t("span",[e._v(e._s(e.$t("NoRecordfound")))])])]):e._e(),e._l(e.fileList,(function(a,s){return t("tr",{key:s,class:{gray:s%2==0}},[t("td",{staticClass:"td0 tdcm text-center"},[e._v(e._s(s+1))]),t("td",[t("span",{attrs:{title:a.fileName}},[e._v(e._s(a.fileName))])]),t("td",[e._v(e._s(e.GetStatusName(a.status)))]),t("td",[1==a.confilict?t("div",[t("div",{staticClass:"form-check form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.radiobtnValue,expression:"radiobtnValue"}],attrs:{name:"status",type:"radio",value:"2"},domProps:{checked:e._q(e.radiobtnValue,"2")},on:{change:function(t){e.radiobtnValue="2"}}}),t("label",{staticClass:"form-check-label font-weight-normal"},[e._v(" "+e._s(e.$t("Rename"))+" ")])]),4!=a.copyMoveOption?t("div",{staticClass:"form-check form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.radiobtnValue,expression:"radiobtnValue"}],attrs:{name:"status",type:"radio",value:"3"},domProps:{checked:e._q(e.radiobtnValue,"3")},on:{change:function(t){e.radiobtnValue="3"}}}),t("label",{staticClass:"form-check-label font-weight-normal"},[e._v(" "+e._s(e.$t("Replace"))+" ")])]):e._e()]):e._e(),t("div",{staticStyle:{display:"none"}},[t("div",{staticClass:"form-check form-check-inline"},[t("label",{staticClass:"form-check-label font-weight-normal"},[e._v(" "+e._s(e.$t("Cancel"))+" ")])]),t("div",{staticClass:"form-check form-check-inline"},[t("label",{staticClass:"form-check-label font-weight-normal"},[e._v(" "+e._s(e.$t("Rename"))+" ")])]),t("div",{staticClass:"form-check form-check-inline"},[t("label",{staticClass:"form-check-label font-weight-normal"},[e._v(" "+e._s(e.$t("Replace"))+" ")])])])])])}))],2)])])])])]),e.fileList&&1!=e.fileList[0].status?t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"popupgreenbtn btn btn-success formbtn widthhalf pr-2",attrs:{title:"Search"},on:{click:function(t){return e.Save()}}},[e._v("Save")]),t("button",{staticClass:"popupredbtn btn btn-danger formbtn widthhalf pr-2",attrs:{title:"Cancel"},on:{click:e.ClosePopup}},[t("em",{staticClass:"fa fa-times pr-2",attrs:{"aria-hidden":"true"}}),e._v(" Cancel")])]):e._e()])])])])},i=[],l=(a("14d9"),{props:{copyFileInfo:null},data(){return{destFolderId:null,operationSelected:null,fileList:[]}},created(){this.fileList=this.copyFileInfo,console.log(this.fileList)},methods:{GetStatusName(e){var t="";switch(e){case-1:t="InProcess";break;case 0:t="Pending";break;case 1:t="Successful";break;case 2:t="Failure";break;case 3:t="AlreadyExist";break;case 4:t="FileSizeExceeded";break;case 5:t="Uploading";break}return t},ClosePopup(){this.$parent.copyFileInfo=null},Save(){if(1==this.fileList[0].confilict){let e={};e={DestFolderId:this.fileList[0].destFolderId,FileId:this.fileList[0].fileId,FileName:this.fileList[0].fileName,Operation:this.fileList[0].operation,Status:this.fileList[0].status,CopyMoveOption:this.radiobtnValue,confilict:!0},this.fileList=[],this.fileList.push(e),this.$emit("SaveCopyFile",this.fileList),this.$parent.$parent.ShowUpload(!0)}else this.$emit("SaveCopyFile",this.fileList)}}}),r=l,o=a("2877"),n=Object(o["a"])(r,s,i,!1,null,null,null);t["a"]=n.exports},"872d":function(e,t,a){var s=a("9c82");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var i=a("499e").default;i("2dee0261",s,!0,{sourceMap:!1,shadowMode:!1})},"9c82":function(e,t,a){var s=a("24fb");t=s(!1),t.push([e.i,".multiselect-tags{margin:0!important}",""]),e.exports=t},b48e:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"my-popups"},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header ui-draggable-handle"},[t("h4",{staticClass:"modal-title",attrs:{name:"header"}},[e._v(" Share Document "),1==e.generateJSONData.length?t("span",{attrs:{title:e.generateJSONData[0].Name}},[e._v(" - "+e._s(e.truncateText(e.generateJSONData[0].Name,20)))]):e._e()]),t("button",{staticClass:"close",on:{click:e.closemanagepopup}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),t("div",{staticClass:"modal-body"},[t("Form",{ref:"form",scopedSlots:e._u([{key:"default",fn:function({values:a,errors:s}){return[t("section",{staticClass:"main-content",attrs:{id:"divMainContent"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left",staticStyle:{width:"43%"}},[t("div",{staticClass:"col-12 p-0 mb-2 d-flex"},[t("span",[e._v("Share with: ")]),t("div",{staticClass:"ml-3 custom-control custom-radio custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.SharedType,expression:"SharedType"}],staticClass:"form-check-input custom-control-input",attrs:{type:"radio",value:"Department",id:"Department",name:"Department"},domProps:{checked:e._q(e.SharedType,"Department")},on:{change:function(t){e.SharedType="Department"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"Department"}},[e._v("Department")])]),t("div",{staticClass:"custom-control custom-radio custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.SharedType,expression:"SharedType"}],staticClass:"form-check-input custom-control-input",attrs:{type:"radio",value:"User",id:"User",name:"User"},domProps:{checked:e._q(e.SharedType,"User")},on:{change:function(t){e.SharedType="User"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"User"}},[e._v("Users")])]),t("div",{staticClass:"custom-control custom-radio custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.SharedType,expression:"SharedType"}],staticClass:"form-check-input custom-control-input",attrs:{type:"radio",value:"Project",id:"Project",name:"project"},domProps:{checked:e._q(e.SharedType,"Project")},on:{change:function(t){e.SharedType="Project"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"Project"}},[e._v("Project")])]),t("div",{staticClass:"custom-control custom-radio custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.SharedType,expression:"SharedType"}],staticClass:"form-check-input custom-control-input",attrs:{type:"radio",value:"Group",id:"Group",name:"group"},domProps:{checked:e._q(e.SharedType,"Group")},on:{change:function(t){e.SharedType="Group"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"Group"}},[e._v("Groups")])]),t("div",{staticClass:"custom-control custom-radio custom-control-inline pl-0"},[t("a",{staticClass:"round-icon-small2 btn-dark theme-primary float-right",attrs:{title:"Add Groups"},on:{click:e.OpenAddGroupPopup}},[t("em",{staticClass:"fa fa-plus text-white font-14 mt-1"})])])])])]),e.IsShowDiv?t("div",{staticClass:"form-group"},[t("label",[e._v(e._s(e.LabelName)+": "),t("span",{staticClass:"text-danger"},[e._v("*")])]),t("Field",{attrs:{name:e.LabelName,rules:{required:!0},label:"Parent"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("select",{directives:[{name:"model",rawName:"v-model",value:e.ParentValue,expression:"ParentValue"}],class:{"form-control":!0,"is-invalid":a[0]&&!e.ParentValue},attrs:{name:"ParentValue",disabled:e.isDisabled},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.ParentValue=t.target.multiple?a:a[0]},function(t){return e.UsersByParentId(e.ParentValue)}]}},[t("option",{attrs:{value:"",disabled:"",selected:"Selected"}},[e._v(e._s(e.$t("Select")))]),e._l(e.UserParentList,(function(a){return t("option",{domProps:{value:a.Id}},[e._v(" "+e._s(a.Name)+" ")])}))],2),t("span",{staticClass:"text-danger",attrs:{Style:"font-size: 80%;"}},[e._v(e._s(a[0]))])]}}],null,!0)})],1):e._e(),t("div",{staticClass:"row"},[1==e.chkValidate?t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Users: "),e.IsRequiredDiv?t("span",{staticClass:"text-danger"},[e._v("*")]):e._e()]),t("Field",{attrs:{name:"SelectedValue",rules:{required:!0},label:"Users"},scopedSlots:e._u([{key:"default",fn:function({field:a,errorMessage:i,meta:l}){return[t("Multiselect",e._b({class:{"form-control":!0,"is-invalid":s[0]},attrs:{multiple:!0,options:e.Options,mode:"tags","close-on-select":!1,searchable:!0,taggable:!1,label:"label","track-by":"value",placeholder:"Select"},on:{tag:e.addTag},model:{value:e.SelectedValue,callback:function(t){e.SelectedValue=t},expression:"SelectedValue"}},"Multiselect",a,!1)),t("span",{staticClass:"invalid-feedback d-block",attrs:{name:"SelectedValue",id:"SelectedValue"}},[e._v(e._s(s[0]))])]}}],null,!0),model:{value:e.SelectedValue,callback:function(t){e.SelectedValue=t},expression:"SelectedValue"}})],1)]):e._e(),0==e.chkValidate?t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Users: "),e.IsRequiredDiv?t("span",{staticClass:"text-danger"},[e._v("*")]):e._e()]),t("Multiselect",e._b({attrs:{options:e.Options,mode:"tags","close-on-select":!1,searchable:!0,multiple:!0,taggable:!1,placeholder:"All","track-by":"value",object:!0,label:"label","preselect-first":!0},on:{tag:e.addTag},model:{value:e.SelectedValue,callback:function(t){e.SelectedValue=t},expression:"SelectedValue"}},"Multiselect",e.field,!1))],1)]):e._e(),t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Permissions: "),t("span",{staticClass:"text-danger"},[e._v("*")])]),t("Field",{attrs:{name:"Permission",rules:{required:!0},label:"Permission"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.PermissionId,expression:"PermissionId"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{placeholder:"Select"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.PermissionId=t.target.multiple?a:a[0]}}},"select",e.field,!1),[t("option",{attrs:{value:"",disabled:""}},[e._v("Select")]),t("option",{attrs:{value:"r"}},[e._v("Read")]),t("option",{attrs:{value:"w"}},[e._v("Write")]),t("option",{attrs:{value:"o"}},[e._v("Owner")])]),a[0]?t("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Permission",id:"PermissionId"}},[e._v(e._s(a[0]))]):e._e()]}}],null,!0)})],1)])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6 d-flex align-items-center"},[t("label",[e._v(" Expiration: ")]),t("label",{class:{switch:!0,"switch enabled":1==e.isTrueCheck}},[t("input",{staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox",id:"isTrueCheck"},domProps:{checked:e.isTrueCheck},on:{click:function(t){e.userLoggedIn=!e.userLoggedIn},change:function(t){return e.ChangeCheckValue(e.item,t)}}}),t("span",{staticClass:"slider round"},[t("span",{staticClass:"slider-yes"},[e._v("Yes")]),t("span",{staticClass:"slider-no"},[e._v("No")])])])]),t("div",{staticClass:"col-lg-6"},[e.userLoggedIn?t("v-date-picker",{staticClass:"input-group",attrs:{"min-date":new Date,popover:e.popover,placeholder:"Enter expiration date"},scopedSlots:e._u([{key:"default",fn:function({inputValue:a,inputEvents:s,togglePopover:i}){return[t("input",e._g({staticClass:"form-control",attrs:{placeholder:"Enter expiration date"},domProps:{value:a}},s)),t("div",{staticClass:"input-group-append",on:{click:function(e){return i()}}},[t("span",{staticClass:"input-group-text"},[t("em",{staticClass:"fa fa-calendar"})])])]}}],null,!0),model:{value:e.ExpirationDate,callback:function(t){e.ExpirationDate=t},expression:"ExpirationDate"}}):e._e()],1),e.userLoggedIn2?t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"input-group"},[t("input",e._g({directives:[{name:"model",rawName:"v-model",value:e.FileGenerateLink,expression:"FileGenerateLink"}],ref:"myText",staticClass:"form-control",attrs:{disabled:""},domProps:{value:e.FileGenerateLink},on:{input:function(t){t.target.composing||(e.FileGenerateLink=t.target.value)}}},e.inputEvents)),t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[t("a",{staticClass:"fa fa-clone",on:{click:e.CopyLink}})])]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.tool,expression:"tool"}],staticClass:"tooltiptext"},[e._v(e._s(e.text))])])]):e._e()])])]}}])})],1),t("div",{staticClass:"col-lg-12 float-left"},[t("div",{staticClass:"row flex-row-reverse"},[t("div",{staticClass:"col-lg-6 text-right py-3"},[t("button",{staticClass:"popupgreenbtn btn btn-primary formbtn widthhalf pr-2",attrs:{title:"Share"},on:{click:function(t){return e.ShareDocument()}}},[t("em",{staticClass:"fa fa-share-alt pr-2",attrs:{"aria-hidden":"true"}}),e._v(" Share")]),t("a",{staticClass:"popupredbtn btn btn-danger formbtn widthhalf pr-2 ml-2",attrs:{title:"Cancel"},on:{click:e.closemanagepopup}},[t("em",{staticClass:"fa fa-times pr-2",attrs:{"aria-hidden":"true"}}),e._v(" Cancel")])]),t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"py-3"},[t("span",{staticClass:"mandatory"},[e._v(e._s(e.$t("MandatoryString")))])])])])])])])])],1),e.ShowModalAddGroup?t("ModalAddGroup",{on:{ModalAddGroup:e.ModalAddGroup,CloseAddGroupPopup:e.CloseAddGroupPopup}}):e._e()],1)},i=[],l=(a("14d9"),a("9769")),r=a("53c8"),o=a("8e5f"),n=a.n(o);const d="https://appfilemedia.talygen.com/api";var c={components:{ModalAddGroup:r["a"],Multiselect:n.a},data(){return{isLoading:!1,loggeduserid:null,companyId:null,sharemodal:!1,foldername:null,folderIdmanage:null,currentState:!1,datemodrl:new Date,userLoggedIn:!1,userLoggedIn2:!1,isValid:"",popover:{visibility:"click"},UserParentList:[],UserListDat:[],SelectedValue:[],Options:[],IsShowDiv:!0,LabelName:"Department",myObj:[],SelectValue:[],FileFolderValues:[],ExpirationChecked:0,iSLinkGenerateChecked:0,ExpirationDate:null,FileGenerateLink:null,vSelectValidate:!1,IsRequiredDiv:!1,UserListArray:[],chkValidate:!1,IsBindEdited:!0,AddEditText:"",isDisabled:!1,isTrue:!0,ShowModalAddGroup:!1,UniqueUrl:"",tool:!1,text:"Copied!",PermissionId:"",ParentValue:"",UniqueCode:"",generateJSONForSingleFile:[],errorMessage:"",SharedType:"Department"}},watch:{SharedType:function(e){var t=this;t.onChange()}},computed:{isActive(){return this.currentState}},props:{folderId:{type:String,required:!0},folderName:{type:String,required:!0},idFile:{type:String,required:!0},docCode:{type:String,required:!0},GroupData:{},StorageUniqueCode:{type:String,required:!0},generateJSONData:{type:Array,required:!0}},mounted:function(){$("body").on("click","#FolderFullTree .folderlink",(function(){$(".folderlink").removeClass("selectedfolder"),$(this).addClass("selectedfolder")}))},created:function(){var e=this;e.loggeduserid=e.GetUserInfo.ID,e.companyId=e.GetUserInfo.CompanyId,e.BindDepartmentDDL("Department"),null!=e.GroupData&&e.BindGroupsData(e.GroupData)},methods:{BindGroupsData:function(e){var t=this;t.AddEditText="Edit",t.isDisabled=!0,null!=t.GroupData[0].Id&&(t.ParentValue=t.GroupData[0].Id,t.ExpirationDate=null==t.GroupData[0].view_expiration_date?t.GroupData[0].view_expiration_date:t.GroupData[0].view_expiration_date.format("YYYY-MM-DD"),t.IsExpiration=t.GroupData[0].IsExpiration,1==t.IsExpiration?(t.isTrueCheck=!0,t.userLoggedIn=!0,t.ExpirationChecked=1):(t.isTrueCheck=!1,t.userLoggedIn=!1,t.ExpirationChecked=0),t.PermissionId=t.GroupData[0].permission,null!=t.GroupData[0].SharedMembers&&(t.SelectedValue=t.GroupData[0].SharedMembers.split(",").map(e=>e.trim())),t.SharedType=t.GroupData[0].SharedType,1==t.IsBindEdited&&(t.BindUsersDDL(t.SharedType,t.ParentValue),t.BindDepartmentDDL(t.SharedType)),t.IsShowDiv=!0,t.IsRequiredDiv=!1,"UserGroups"==t.SharedType?(t.LabelName="Groups",$("#Department").prop("checked",!1),$("#Group").prop("checked",!0)):"Project"==t.SharedType&&(t.LabelName="Project",$("#Department").prop("checked",!1),$("#Project").prop("checked",!0)),t.chkValidate=!1)},UsersByParentId(e){var t=this;"Department"==t.LabelName&&t.BindUsersDDL("Department",t.ParentValue),"Project"==t.LabelName&&t.BindUsersDDL("Project",t.ParentValue),"Groups"==t.LabelName&&t.BindUsersDDL("UserGroups",t.ParentValue),"Users"==t.LabelName&&t.BindUsersDDL("Users",t.ParentValue)},OpenAddGroupPopup:function(){var e=this;"Edit"!=e.AddEditText?(e.$parent.ModalAddGroup(),e.$parent.closePopupGroupListing()):this.ShowModalAddGroup=!0},onChange:function(){var e=this;this.SeletcedValue=[],this.ParentValue="","Department"==e.SharedType?(this.BindDepartmentDDL("Department"),this.IsShowDiv=!0,this.IsRequiredDiv=!1,this.LabelName="Department",this.chkValidate=!1):"User"==e.SharedType?(this.BindUsersDDL("Users"),this.IsShowDiv=!1,this.IsRequiredDiv=!0,this.UserParentList=null,this.LabelName="Users",this.ParentValue=0,this.chkValidate=!0):"Project"==e.SharedType?(this.BindDepartmentDDL("Project"),this.IsShowDiv=!0,this.IsRequiredDiv=!1,this.LabelName="Project",this.chkValidate=!1):"Group"==e.SharedType&&(this.BindDepartmentDDL("UserGroups"),this.LabelName="Groups",this.IsShowDiv=!0,this.IsRequiredDiv=!1,this.chkValidate=!1)},popup:function(){this.sharemodal=!0},ShareDoc:function(){this.sharemodal=!0},closemanagepopup:function(){var e=this;"Edit"!=e.AddEditText?e.$parent.closePopupGroupListing():e.$parent.ClosePopupShared()},CloseAddGroupPopup:function(){this.ShowModalAddGroup=!1},closeSharePopup:function(){var e=this;e.sharemodal=!1},BreadCrumb:function(){var e=this;e.$emit("BreadCrumb")},ChangeCheckValue:function(e,t){var a=$("#isTrueCheck").is(":checked");1==a?this.ExpirationChecked=1:(this.ExpirationChecked=0,this.ExpirationDate=null)},ChangeCheck:function(e){var t=this,a="",s=$("#isCheck").is(":checked");if(1==s){if(null!=t.generateJSONData)a="docJsonData="+JSON.stringify(t.generateJSONData);else{let e={SourceId:t.idFile,RefCode:t.docCode};t.generateJSONForSingleFile.push(e),a="docJsonData="+JSON.stringify(t.generateJSONForSingleFile)}l["a"].GenerateDocPublicLink(a).then(e=>{1==e.data.code&&(t.UniqueUrl=d+"/GenerateDocPublicLink?storageUniqueCode="+e.data.docUniqueCode,t.FileGenerateLink=t.UniqueUrl,t.isLoading=!1)})}else t.iSLinkGenerateChecked=0,t.FileGenerateLink=null},GeneratePublickLink:function(){var e=this,t=`docId=${e.folderId}&refCode=DocFolder`;l["a"].GenerateDocPublicLink(t).then(t=>{1==t.data.code&&(e.UniqueCode=t.data.docUniqueCode,e.UniqueUrl=d+"/GetPublicallyStorageDocs?storageUniqueCode="+e.UniqueCode,e.FileGenerateLink=e.UniqueUrl)})},BindDepartmentDDL:function(e,t){var a=this;a.isLoading=!0,a.Options=[];let s={};s["refCode"]=e,s["parentId"]=t,l["a"].SharedUsersParentList(s).then((function(e){null!=e.data?(a.UserListData=JSON.parse(e.data),a.UserParentList=a.UserListData.DocParentListing):a.UserParentList=[],a.isLoading=!1}))},BindUsersDDL:function(e,t){var a=this;a.Options=[];let s={};s["refCode"]=e,s["parentId"]=t,l["a"].SharedUsersParentListByParentId(s).then((function(e){a.UserListData=JSON.parse(e.data),a.UserList=a.UserListData.DocParentUserListing,null!=a.UserList.length&&(a.UserList.forEach((e,t)=>{a.Value=e.Id,a.first_value=e.Name,a.Options.push({value:a.Value,label:a.first_value})}),null!=a.GroupData&&(a.BindGroupsData(a.GroupData),a.IsBindEdited=!1))}))},showTool(){this.tool=!0,setTimeout(()=>this.tool=!1,1e3)},CopyLink(){var e=this;navigator.clipboard.writeText(e.FileGenerateLink),e.showTool()},ShareDocument:function(e){var t=this;t.isLoading=!0;var a="",s=0;t.$refs.form.validate().then(e=>{if(t.vSelectValidate=!0,!(t.ParentValue>0&&"User"!=t.SharedType||0==t.ParentValue&&"User"==t.SharedType))return"Department"==t.SharedType?(t.ShowAlert("Department is required","failure",!0,t.$t("Alert")),$("#ParentValue").addClass("is-invalid")):"Project"==t.SharedType?(t.ShowAlert("Project is required","failure",!0,t.$t("Alert")),$("#ParentValue").addClass("is-invalid")):"Group"==t.SharedType&&(t.ShowAlert("Group is required","failure",!0,t.$t("Alert")),$("#ParentValue").addClass("is-invalid")),t.isLoading=!1,!1;if(t.errorMessage="",$("#ParentValue").removeClass("is-invalid"),e){if(null!=t.idFile){if(this.IsDocCode=this.docCode,a=this.idFile,s=this.folderId,null!=t.UserParentList)var i=t.ParentValue;else i=0;let e={};if(0==t.SelectedValue.length?(e={SourceId:a,UserId:0},t.SelectValue.push(e)):t.SelectedValue.forEach((s,i)=>{var l;e={SourceId:a,UserId:null!==(l=s.value)&&void 0!==l?l:0},t.SelectValue.push(e)}),t.FileFolderValues=[...new Set(t.SelectValue)],null!=a){let e={SourceId:a,DocPermission:t.PermissionId,ParentId:i,RefCode:this.IsDocCode,IsExpiration:t.ExpirationChecked,DocExpirationDate:t.ExpirationDate,IsFileGenerateLink:t.iSLinkGenerateChecked,FileGenerateLink:null==t.FileGenerateLink?null:t.FileGenerateLink.split("/")[4],ShareUserIds:t.FileFolderValues};t.SelectValue=[],t.myObj.push(e)}}else $("#tblFileList .chkItems:checked").not("[id^='chkAll']").each((function(){if(this.IsDocCode=$(this).attr("doccode"),s=void 0==$(this).attr("folderId")?0:$(this).attr("folderId"),a=$(this).val(),null!=t.UserParentList)var e=t.ParentValue;else e=0;let i={};if(0==t.SelectedValue.length?(i={SourceId:a,UserId:0},t.SelectValue.push(i)):t.SelectedValue.forEach((e,s)=>{var l;i={SourceId:a,UserId:null!==(l=e.value)&&void 0!==l?l:0},t.SelectValue.push(i)}),t.FileFolderValues=[...new Set(t.SelectValue)],0==$(this).attr("doccode")||1==$(this).attr("doccode")){let s={SourceId:a,DocPermission:t.PermissionId,ParentId:e,RefCode:this.IsDocCode,IsExpiration:t.ExpirationChecked,DocExpirationDate:t.ExpirationDate,IsFileGenerateLink:t.iSLinkGenerateChecked,FileGenerateLink:null==t.FileGenerateLink?null:t.FileGenerateLink.split("/")[4],ShareUserIds:t.FileFolderValues};t.SelectValue=[],t.myObj.push(s)}}));var r=JSON.stringify(t.myObj),o=`jsonData=${r}&folderId=${s}&parentType=${t.SharedType}`;l["a"].ManageSharedDocStorage(o).then((function(e){null!=e.data&&(1==e.data?(t.ShowAlert(t.$t("ShareDocumentSuccess",[t.$t("ShareFileFolder")]),"Success",!0,t.$t("Alert")),"Edit"!=t.AddEditText?(t.$parent.closepopup(),t.$emit("StorageDocumentListing")):(t.$parent.ClosePopupShared(),t.$parent.FetchData())):t.ShowAlert(t.$t("ShareDocumentError",[t.$t("ShareFileFolder")]),"failure",!0,t.$t("Alert")))}))}t.isLoading=!1})}}},u=c,p=(a("f4da"),a("2877")),h=Object(p["a"])(u,s,i,!1,null,null,null);t["a"]=h.exports},c00f:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-popups"},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header ui-draggable-handle"},[t("h4",{staticClass:"modal-title",attrs:{name:"header"}},[e._v(" Choose Destination Folder ")]),t("button",{staticClass:"close",on:{click:e.closepopuptag}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"collapse show px-3 py-2 border FullTreeData",staticStyle:{"max-height":"90vh","overflow-y":"auto"},attrs:{id:"main"}},[t("DocCommonTreeView",{attrs:{checkActionType:e.checkActionType,mySpaceOrOrganization:e.mySpaceOrOrganization,organizationSpace:e.organizationSpace,type:e.checkType,MySpaceFolders:e.FolderArray,FolderIdMoveLeftMenu:e.FolderIdMoveLeftMenu},on:{FolderIdMoveLeftMenu:e.FolderIdMoveLeftMenu}})],1)]),t("div",{staticClass:"modal-footer text-right"},["Move"==e.checkActionType?t("button",{staticClass:"popupgreenbtn btn btn-success formbtn widthhalf",attrs:{title:"Search"},on:{click:e.MoveFolderFiles}},[t("em",{staticClass:"fa fa-arrows"}),e._v(" Move")]):e._e(),"Copy"==e.checkActionType?t("button",{staticClass:"popupgreenbtn btn btn-success formbtn widthhalf",attrs:{title:"Search"},on:{click:e.CloneFolderFiles}},[t("em",{staticClass:"fa fa-files-o"}),e._v(" Clone")]):e._e()])])])])],1)},i=[],l=(a("14d9"),a("c29f")),r=a("9769"),o=a("5a2d"),n={components:{ChildFolder:o["a"],DocCommonTreeView:l["a"]},props:{checkActionType:{type:String,required:!1},moveObj:{type:Array,required:!0},organizationSpace:{type:Array,required:!0},FolderArray:{type:Array,required:!0},mySpaceOrOrganization:{type:Number,required:!1}},data(){return{isLoading:!1,loggeduserid:null,FindalFolderArray:[],checkType:"popup"}},mounted:function(){console.log($("#FolderFullTree")),$("#FolderFullTree").last().treeview(),$("body").on("click","#FolderFullTree .folderlink",(function(){$("#FolderFullTree .folderlink").removeClass("selectedfolder"),$(this).addClass("selectedfolder")}))},created:function(){this.loggeduserid=this.GetUserInfo.ID,this.GetFullTree()},methods:{GetFullTree(){var e=this;e.isLoading=!0;var t=JSON.stringify(e.moveObj);r["a"].MoveFolderTreeView(t).then(t=>{t.data.folderTreeList.forEach((a,s)=>{if(a.OWNER_USER_ID==this.loggeduserid&&0==a.IsGlobal){var i=e.FindalFolderArray.filter((function(e){return e.FOLDER_ID==a.FOLDER_ID}));if(0==i.length&&null==a.FOLDER_PARENT_ID){let s=a.FOLDER_ID,i=e.getChildFolder(s,a,t.data.folderTreeList);e.FindalFolderArray.push(i)}}}),e.folderTreeList=t.data.folderTreeList,e.sharedFolder=t.data.sharedTreeList,e.folderTreeList.forEach((t,a)=>{e.sharedFolder.forEach((e,a)=>{e.ParentId!=t.FOLDER_ID&&(t.SHARED_USER_ID,this.loggeduserid)})}),e.isLoading=!1})},getChildFolder:function(e,t,a){let s=this,i=t;var l=a.filter((function(t){return t.FOLDER_PARENT_ID==e}));let r=[];return l.forEach((e,t)=>{let i=e.FOLDER_ID;var l=r.filter((function(t){return t.FOLDER_ID==e.FOLDER_ID}));if(0==l.length){var o=a.filter((function(e){return e.FOLDER_PARENT_ID==i}));if(null!=o&&o.length>0){let t=s.getChildFolder(i,e,a);r.push(t)}else r.push(e)}}),i.chidFolder=r,i},FolderIdMoveLeftMenu(e,t){var a=this;a.FolderIds=e,a.$emit("FolderIdmove",e,t)},MoveFolderFiles:function(){var e=this;e.$emit("MoveFoldersFiles"),e.$emit("closemovefilefolderpopup")},CloneFolderFiles:function(){var e=this;e.$emit("CloneFoldersFiles"),e.$parent.closemovefilefolderpopup()},closepopuptag:function(){var e=this;e.$emit("closemovefilefolderpopup"),e.$parent.closepopupFolder()}}},d=n,c=a("2877"),u=Object(c["a"])(d,s,i,!1,null,null,null);t["a"]=u.exports},f4da:function(e,t,a){"use strict";a("872d")}}]);
//# sourceMappingURL=chunk-71d3bc2d.js.map