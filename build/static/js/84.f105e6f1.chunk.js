(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{6654:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(23),c=t(17),o=t(15),s=t(16),r=t(0),i=t.n(r),m=t(35),d=t(217),h=t.n(d),u=t(833),p=t(809),g=t(52),E=t(120),f=t(42),v=t.n(f),b=t(89),N=t.n(b),w=t(75),x=t.n(w),C=t(6715),O=t(47),j=t(33),D=t.n(j),S=t(810),k=t.n(S),y=t(817),z=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).handleChange=function(e){return function(a){t.setState(Object(E.a)({},e,a.target.value))}},t.handleChangeFile=function(e){t.setState({files:e})},t.state={id:"",levelFloor:"",intend:"",files:null},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.onClose,t=e.open,n=(e.rent,this.state),l=n.id;n.levelFloor,n.intend,n.files;return i.a.createElement(O.f,{className:"modal-box",isOpen:t},i.a.createElement(O.g,{className:"modal-box-header bg-primary text-white"},"Reject",i.a.createElement(v.a,{className:"text-white",onClick:function(){return a("rejectDialogVisible")}},i.a.createElement(k.a,null))),i.a.createElement("div",{className:"modal-box-content"},i.a.createElement("div",{className:"row no-gutters"},i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right"},i.a.createElement("label",{className:"font-size-18"},"NOTE")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement("textarea",{className:"form-control form-control-lg",rows:"6",style:{width:"100%",height:70,marginTop:5,paddingHorizontal:10,paddingVertical:5},placeholder:"Description",onChange:this.handleChange("notes")}))),i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right p-relative"},i.a.createElement("label",{className:"font-size-18"},"ADD IMAGE")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement(y.a,{filesLimit:1,showFileNamesInPreview:!0,dropzoneText:"Drag and drop a file here or click",onChange:this.handleChangeFile}))))),i.a.createElement("div",{className:"modal-box-footer d-flex flex-row"},i.a.createElement(D.a,{disabled:""===l,variant:"contained",color:"primary",onClick:function(){a("rejectDialogVisible")}},"Reject")))}}]),a}(i.a.Component),M=t(818),B=t(822),I=t.n(B),L=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).handleChange=function(e){return function(a){t.setState(Object(E.a)({},e,a.target.value))}},t.handleChangeFile=function(e){t.setState({files:e})},t.updateDate=function(e){return function(a){a&&t.setState(Object(E.a)({},e,t.formatDate(a.toLocaleDateString())))}},t.formatDate=function(e){var a=new Date(e);return[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-")},t.state={id:"",levelFloor:"",intend:"",files:null},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.onClose,t=e.open,n=(e.rent,this.state),l=n.id;n.levelFloor,n.intend,n.files;return i.a.createElement(O.f,{className:"modal-box",isOpen:t},i.a.createElement(O.g,{className:"modal-box-header bg-primary text-white"},"Suspend Work",i.a.createElement(v.a,{className:"text-white",onClick:function(){return a("suspendDialogVisible")}},i.a.createElement(k.a,null))),i.a.createElement("div",{className:"modal-box-content"},i.a.createElement("div",{className:"row no-gutters"},i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right p-relative"},i.a.createElement("label",{className:"align-center font-size-18"},"FROM DATE")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement("div",{className:"d-flex"},i.a.createElement(I.a,{customInput:i.a.createElement(M.a,null),peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",selected:new Date,onChange:this.updateDate("publishDate")})))),i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right p-relative"},i.a.createElement("label",{className:"align-center font-size-18"},"TO DATE")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement("div",{className:"d-flex"},i.a.createElement(I.a,{customInput:i.a.createElement(M.a,null),peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",selected:new Date,onChange:this.updateDate("publishDate")})))),i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right"},i.a.createElement("label",{className:"font-size-18"},"NOTE")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement("textarea",{className:"form-control form-control-lg",rows:"6",style:{width:"100%",height:70,marginTop:5,paddingHorizontal:10,paddingVertical:5},placeholder:"Description",onChange:this.handleChange("notes")}))),i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right"},i.a.createElement("label",{className:"font-size-18"},"ADD IMAGE")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement(y.a,{filesLimit:1,showFileNamesInPreview:!0,dropzoneText:"Drag and drop a file here or click",onChange:this.handleChangeFile}))))),i.a.createElement("div",{className:"modal-box-footer d-flex flex-row"},i.a.createElement(D.a,{disabled:""===l,variant:"contained",color:"primary",onClick:function(){a("suspendDialogVisible")}},"Suspend")))}}]),a}(i.a.Component),T=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).handleRequestClose=function(){e.setState({menuState:!1})},e.onBuildingClose=function(){e.setState({addBuildingState:!1})},e.onOptionSelect=function(a){e.setState({menuState:!0,anchorEl:a.currentTarget})},e.onTapReject=function(){e.setState({menuState:!1,rejectDialogVisible:!0})},e.onTapChat=function(){e.setState({menuState:!1}),e.props.history.push("/app/m-chat")},e.onTapSuspend=function(){e.setState({menuState:!1,suspendDialogVisible:!0})},e.onClose=function(a){e.setState(Object(E.a)({},a,!1))},e.state={anchorEl:void 0,menuState:!1,rejectDialogVisible:!1,suspendDialogVisible:!1},e}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.maintenance,n=(a.onMaintenanceSelect,this.state),l=n.menuState,c=n.anchorEl,o=n.rejectDialogVisible,s=n.suspendDialogVisible,r=t.id,m=t.building,d=t.reporter;t.reportContent,t.assign,t.viewDate;return i.a.createElement("div",{className:"contact-item module-list-item"},i.a.createElement("div",{className:"d-flex f-1 flex-wrap"},i.a.createElement("div",{className:"d-flex f-1 flex-wrap"},i.a.createElement("div",{className:"mx-1 mx-md-3 font-size-16 f-1 position-relative"},i.a.createElement("div",{className:"position-absolute align-center"},r)),i.a.createElement("div",{className:"col con-inf-mw-100 f-2"},i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"text-truncate contact-name text-primary-color text-bold"},"Administrator")),i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"email d-inline-block mr-2"},"Building Name")),i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"email d-inline-block mr-2"},m.address))),i.a.createElement("div",{className:"col con-inf-mw-100 f-2"},i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"text-primary-color text-bold"},"Description of report"))),i.a.createElement("div",{className:"col con-inf-mw-100 f-2"},i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"text-primary-darken-4-color"},"Due Date: \xa0\xa0\xa0\xa0\xa0\xa0",d.date)),i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"text-primary-darken-4-color"},"Accept Date: ",d.date)))),i.a.createElement("div",{className:"col-auto px-1 actions d-none d-sm-flex"},i.a.createElement(v.a,{className:"icon-btn p-2",onClick:this.onOptionSelect},i.a.createElement("i",{className:"zmdi zmdi-more-vert"})),i.a.createElement(N.a,{id:"long-menu",anchorEl:c,open:l,onClose:this.handleRequestClose,MenuListProps:{style:{width:150}}},["Reject","Suspend","Chat"].map(function(a){return i.a.createElement(x.a,{key:a,onClick:function(){"Reject"===a?e.onTapReject():"Chat"===a?e.onTapChat():"Suspend"===a&&e.onTapSuspend()}},a)})))),o&&i.a.createElement(z,{open:o,onClose:this.onClose}),s&&i.a.createElement(L,{open:s,onClose:this.onClose}))}}]),a}(i.a.Component),V=Object(C.a)(T),F=function(e){var a=e.maintenanceList;return i.a.createElement("div",{className:"contact-main-content"},a.map(function(e,a){return i.a.createElement(V,{key:a,maintenance:e})}))},G=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).handleRequestClose=function(){t.setState({showMessage:!1})},t.showBuildings=function(e){e.currentBuilding;var a=e.maintenanceList;return i.a.createElement(F,{maintenanceList:a})},t.onSearch=function(e){t.setState({searchKey:e.target.value})},t.state={noContentFoundMessage:"No maintenance found in not view",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,searchKey:"",allBuilding:u.a,maintenanceList:u.a},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.maintenanceList,t=e.alertMessage,n=e.showMessage,l=e.noContentFoundMessage;return i.a.createElement("div",{className:"app-wrapper"},i.a.createElement("div",{className:"module-box content-margin-auto"},i.a.createElement("div",{className:"module-box-header"},i.a.createElement(p.a,{placeholder:"Search here...",notification:!1,apps:!1,value:this.state.searchKey,onChange:this.onSearch})),i.a.createElement("div",{className:"module-box-content"},i.a.createElement(g.a,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},0===a.length?i.a.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},l):this.showBuildings(this.state)))),i.a.createElement(h.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:n,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:i.a.createElement("span",{id:"message-id"},t)}))}}]),a}(r.Component);a.default=Object(m.c)(function(e){return{width:e.settings.width}})(G)},809:function(e,a,t){"use strict";var n=t(14),l=t(23),c=t(17),o=t(15),s=t(16),r=t(216),i=t(0),m=t.n(i),d=t(42),h=t.n(d),u=t(47),p=t(165),g=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).onSearchBoxSelect=function(){e.setState({searchBox:!e.state.searchBox})},e.state={anchorEl:void 0,searchBox:!1,popoverOpen:!1},e.toggle=e.toggle.bind(Object(r.a)(Object(r.a)(e))),e}return Object(s.a)(a,e),Object(l.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,a=e.placeholder,t=e.onChange,n=e.value,l=e.user,c=e.notification,o=e.apps;return m.a.createElement("div",{className:"module-box-header-inner"},m.a.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{className:"form-control border-0",type:"search",placeholder:a,onChange:t,value:n}),m.a.createElement("button",{className:"search-icon"},m.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),l&&m.a.createElement(u.h,{className:"p-3",placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},m.a.createElement("h3",null,l.name),m.a.createElement("h4",null,l.email)),m.a.createElement("div",{className:"d-inline-block d-sm-none"},m.a.createElement(u.c,{className:"quick-menu nav-searchbox",isOpen:this.state.searchBox,toggle:this.onSearchBoxSelect.bind(this)},m.a.createElement(u.e,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},m.a.createElement(h.a,{className:"icon-btn"},m.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),m.a.createElement(u.d,{className:"p-0"},m.a.createElement(p.a,{styleName:"search-dropdown",placeholder:"",onChange:t,value:n})))),m.a.createElement("div",{className:"module-box-header-right"},o&&m.a.createElement(h.a,{className:"size-40","aria-label":"Menu"},m.a.createElement("i",{className:"zmdi zmdi-apps"})),c&&m.a.createElement(h.a,{className:"size-40","aria-label":"Menu"},m.a.createElement("i",{className:"zmdi zmdi-notifications-none"})),l&&m.a.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:l.name,onMouseEnter:this.toggle,onMouseLeave:this.toggle,onClick:this.toggle,src:l.avatar})))}}]),a}(m.a.Component);a.a=g,g.defaultProps={styleName:"",value:"",notification:!0,apps:!0}},818:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(0),l=t.n(n),c=function(e){return l.a.createElement("input",{className:"form-control form-control-lg",value:e.value,readOnly:!0,placeholder:e.placeholder?e.placeholder:"Click to select date",onClick:e.onClick})}},833:function(e,a,t){"use strict";a.a=[{id:1457690400,building:{id:123,name:"BUILDING 1",address:"Via del mercato 1, 06121 PERUGIA(PG)"},reporter:{name:"Massimo Ghirga",phoneNumber:"3352452636",date:"2019/06/12"},reportContent:"Light not work in the hole"},{id:1457690401,building:{id:124,name:"BUILDING 2",address:"Via del mercato 1, 06121 PERUGIA(PG)"},reporter:{name:"Massimo Ghirga",phoneNumber:"3352452636",date:"2019/06/12"},reportContent:"Light not work in the hole"},{id:1457690403,building:{id:125,name:"BUILDING 3",address:"Via del mercato 1, 06121 PERUGIA(PG)"},reporter:{name:"Massimo Ghirga",phoneNumber:"3352452636",date:"2019/06/12"},reportContent:"Light not work in the hole"}]}}]);
//# sourceMappingURL=84.f105e6f1.chunk.js.map