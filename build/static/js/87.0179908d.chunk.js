(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{6696:function(e,a,t){"use strict";t.r(a);var n=t(14),s=t(23),r=t(17),c=t(15),i=t(16),l=t(0),o=t.n(l),m=t(35),d=t(217),h=t.n(d),u=t(833),p=t(6715),g=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(r.a)(this,Object(c.a)(a).call(this))).state={anchorEl:void 0,menuState:!1},e}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.maintenance,t=(e.onMaintenanceSelect,this.state),n=(t.menuState,t.anchorEl,t.suspendDialogVisible,a.id),s=a.building,r=a.reporter;a.reportContent,a.assign,a.viewDate;return o.a.createElement("div",{className:"contact-item module-list-item"},o.a.createElement("div",{className:"d-flex f-1 flex-wrap"},o.a.createElement("div",{className:"d-flex f-1 flex-wrap"},o.a.createElement("div",{className:"mx-1 mx-md-3 font-size-16 f-1 position-relative"},o.a.createElement("div",{className:"position-absolute align-center"},n)),o.a.createElement("div",{className:"col con-inf-mw-100 f-2"},o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-truncate contact-name text-primary-color text-bold"},"Administrator")),o.a.createElement("div",{className:"text-muted"},o.a.createElement("span",{className:"email d-inline-block mr-2"},"Building Name")),o.a.createElement("div",{className:"text-muted"},o.a.createElement("span",{className:"email d-inline-block mr-2"},s.address))),o.a.createElement("div",{className:"col con-inf-mw-100 f-2"},o.a.createElement("div",{className:"text-muted"},o.a.createElement("span",{className:"text-primary-color text-bold"},"Description of report"))),o.a.createElement("div",{className:"col con-inf-mw-100 f-1"},o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-primary-darken-4-color"},"Due Date: \xa0\xa0\xa0\xa0",r.date)),o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-primary-darken-4-color"},"Reject Date: ",r.date))))))}}]),a}(o.a.Component),E=Object(p.a)(g),b=function(e){var a=e.maintenanceList;return o.a.createElement("div",{className:"contact-main-content"},a.map(function(e,a){return o.a.createElement(E,{key:a,maintenance:e})}))},v=t(809),N=t(52),f=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).handleRequestClose=function(){t.setState({showMessage:!1})},t.showBuildings=function(e){e.currentBuilding;var a=e.maintenanceList;return o.a.createElement(b,{maintenanceList:a})},t.onSearch=function(e){t.setState({searchKey:e.target.value})},t.state={noContentFoundMessage:"No maintenance found in not view",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,searchKey:"",allBuilding:u.a,maintenanceList:u.a},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.maintenanceList,t=e.alertMessage,n=e.showMessage,s=e.noContentFoundMessage;return o.a.createElement("div",{className:"app-wrapper"},o.a.createElement("div",{className:"module-box content-margin-auto"},o.a.createElement("div",{className:"module-box-header"},o.a.createElement(v.a,{placeholder:"Search here...",notification:!1,apps:!1,value:this.state.searchKey,onChange:this.onSearch})),o.a.createElement("div",{className:"module-box-content"},o.a.createElement(N.a,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},0===a.length?o.a.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},s):this.showBuildings(this.state)))),o.a.createElement(h.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:n,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("span",{id:"message-id"},t)}))}}]),a}(l.Component);a.default=Object(m.c)(function(e){return{width:e.settings.width}})(f)},809:function(e,a,t){"use strict";var n=t(14),s=t(23),r=t(17),c=t(15),i=t(16),l=t(216),o=t(0),m=t.n(o),d=t(42),h=t.n(d),u=t(47),p=t(165),g=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(r.a)(this,Object(c.a)(a).call(this))).onSearchBoxSelect=function(){e.setState({searchBox:!e.state.searchBox})},e.state={anchorEl:void 0,searchBox:!1,popoverOpen:!1},e.toggle=e.toggle.bind(Object(l.a)(Object(l.a)(e))),e}return Object(i.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,a=e.placeholder,t=e.onChange,n=e.value,s=e.user,r=e.notification,c=e.apps;return m.a.createElement("div",{className:"module-box-header-inner"},m.a.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{className:"form-control border-0",type:"search",placeholder:a,onChange:t,value:n}),m.a.createElement("button",{className:"search-icon"},m.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),s&&m.a.createElement(u.h,{className:"p-3",placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},m.a.createElement("h3",null,s.name),m.a.createElement("h4",null,s.email)),m.a.createElement("div",{className:"d-inline-block d-sm-none"},m.a.createElement(u.c,{className:"quick-menu nav-searchbox",isOpen:this.state.searchBox,toggle:this.onSearchBoxSelect.bind(this)},m.a.createElement(u.e,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},m.a.createElement(h.a,{className:"icon-btn"},m.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),m.a.createElement(u.d,{className:"p-0"},m.a.createElement(p.a,{styleName:"search-dropdown",placeholder:"",onChange:t,value:n})))),m.a.createElement("div",{className:"module-box-header-right"},c&&m.a.createElement(h.a,{className:"size-40","aria-label":"Menu"},m.a.createElement("i",{className:"zmdi zmdi-apps"})),r&&m.a.createElement(h.a,{className:"size-40","aria-label":"Menu"},m.a.createElement("i",{className:"zmdi zmdi-notifications-none"})),s&&m.a.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:s.name,onMouseEnter:this.toggle,onMouseLeave:this.toggle,onClick:this.toggle,src:s.avatar})))}}]),a}(m.a.Component);a.a=g,g.defaultProps={styleName:"",value:"",notification:!0,apps:!0}},833:function(e,a,t){"use strict";a.a=[{id:1457690400,building:{id:123,name:"BUILDING 1",address:"Via del mercato 1, 06121 PERUGIA(PG)"},reporter:{name:"Massimo Ghirga",phoneNumber:"3352452636",date:"2019/06/12"},reportContent:"Light not work in the hole"},{id:1457690401,building:{id:124,name:"BUILDING 2",address:"Via del mercato 1, 06121 PERUGIA(PG)"},reporter:{name:"Massimo Ghirga",phoneNumber:"3352452636",date:"2019/06/12"},reportContent:"Light not work in the hole"},{id:1457690403,building:{id:125,name:"BUILDING 3",address:"Via del mercato 1, 06121 PERUGIA(PG)"},reporter:{name:"Massimo Ghirga",phoneNumber:"3352452636",date:"2019/06/12"},reportContent:"Light not work in the hole"}]}}]);
//# sourceMappingURL=87.0179908d.chunk.js.map