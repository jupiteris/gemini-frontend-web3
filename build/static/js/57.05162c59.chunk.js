(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{6640:function(e,t,a){"use strict";a.r(t);var n=a(18),i=a(14),l=a(23),s=a(17),c=a(15),r=a(16),o=a(216),d=a(0),m=a.n(d),u=a(42),h=a.n(u),p=a(121),g=a.n(p),b=a(35),E=a(217),N=a.n(E),v=a(832),f=a(825),S=a(809),x=a(52),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).onMaintenanceSelect=function(e){e.selected=!e.selected;var t=0,n=a.state.maintenanceList.map(function(a){return a.selected&&t++,a.id===e.id?(a.selected&&t++,e):a});a.setState({selectedbuildings:t,maintenanceList:n})},a.onDeleteMaintenance=function(e){a.setState({alertMessage:"BuildingDetail Deleted Successfully",showMessage:!0,allBuilding:a.state.allBuilding.filter(function(t){return t.id!==e.id}),maintenanceList:a.state.allBuilding.filter(function(t){return t.id!==e.id})})},a.onDeleteSelectedBuilding=function(){var e=a.state.allBuilding.filter(function(e){return!e.selected});a.setState({alertMessage:"BuildingDetail Deleted Successfully",showMessage:!0,allBuilding:e,maintenanceList:e,selectedbuildings:0})},a.handleRequestClose=function(){a.setState({showMessage:!1})},a.getAllBuilding=function(){var e=a.state.allBuilding.map(function(e){return e?Object(n.a)({},e,{selected:!0}):e});a.setState({selectedbuildings:e.length,allBuilding:e,maintenanceList:e})},a.getUnselectedAllBuilding=function(){var e=a.state.allBuilding.map(function(e){return e?Object(n.a)({},e,{selected:!1}):e});a.setState({selectedbuildings:0,allBuilding:e,maintenanceList:e})},a.onSaveCadastral=function(){},a.onSaveRent=function(){},a.onSaveSystem=function(){},a.onSaveDocument=function(){},a.onSaveCertificate=function(){},a.showBuildings=function(e){e.currentBuilding;var t=e.maintenanceList;return m.a.createElement(f.a,{maintenanceList:t,onMaintenanceSelect:a.onMaintenanceSelect.bind(Object(o.a)(Object(o.a)(a))),onDeleteMaintenance:a.onDeleteMaintenance.bind(Object(o.a)(Object(o.a)(a)))})},a.onSearch=function(e){a.setState({searchKey:e.target.value})},a.state={noContentFoundMessage:"No maintenance found in not view",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,searchKey:"",filterOption:"All buildings",allBuilding:v.a,maintenanceList:v.a,currentBuilding:null,selectedSubBuilding:null,selectedBuilding:null,selectedbuildings:0,addBuildingState:!1},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"onAllBuildingSelect",value:function(){this.state.selectedbuildings<this.state.maintenanceList.length?this.getAllBuilding():this.getUnselectedAllBuilding()}},{key:"render",value:function(){var e=this.state,t=e.maintenanceList,a=(e.addBuildingState,e.selectedbuildings),n=e.alertMessage,i=e.showMessage,l=e.noContentFoundMessage;return m.a.createElement("div",{className:"app-wrapper"},m.a.createElement("div",{className:"module-box content-margin-auto"},m.a.createElement("div",{className:"module-box-header"},m.a.createElement(S.a,{placeholder:"Search here...",notification:!1,apps:!1,value:this.state.searchKey,onChange:this.onSearch})),m.a.createElement("div",{className:"module-box-content"},m.a.createElement("div",{className:"module-box-topbar"},m.a.createElement(g.a,{color:"primary",indeterminate:a>0&&a<t.length,checked:a>0,onChange:this.onAllBuildingSelect.bind(this),value:"SelectMail"}),a>0&&m.a.createElement(h.a,{className:"icon-btn",onClick:this.onDeleteSelectedBuilding.bind(this)},m.a.createElement("i",{className:"zmdi zmdi-delete"}))),m.a.createElement(x.a,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},0===t.length?m.a.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},l):this.showBuildings(this.state)))),m.a.createElement(N.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:i,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:m.a.createElement("span",{id:"message-id"},n)}))}}]),t}(d.Component);t.default=Object(b.c)(function(e){return{width:e.settings.width}})(B)},809:function(e,t,a){"use strict";var n=a(14),i=a(23),l=a(17),s=a(15),c=a(16),r=a(216),o=a(0),d=a.n(o),m=a(42),u=a.n(m),h=a(47),p=a(165),g=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).onSearchBoxSelect=function(){e.setState({searchBox:!e.state.searchBox})},e.state={anchorEl:void 0,searchBox:!1,popoverOpen:!1},e.toggle=e.toggle.bind(Object(r.a)(Object(r.a)(e))),e}return Object(c.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,t=e.placeholder,a=e.onChange,n=e.value,i=e.user,l=e.notification,s=e.apps;return d.a.createElement("div",{className:"module-box-header-inner"},d.a.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},d.a.createElement("div",{className:"form-group"},d.a.createElement("input",{className:"form-control border-0",type:"search",placeholder:t,onChange:a,value:n}),d.a.createElement("button",{className:"search-icon"},d.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),i&&d.a.createElement(h.h,{className:"p-3",placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},d.a.createElement("h3",null,i.name),d.a.createElement("h4",null,i.email)),d.a.createElement("div",{className:"d-inline-block d-sm-none"},d.a.createElement(h.c,{className:"quick-menu nav-searchbox",isOpen:this.state.searchBox,toggle:this.onSearchBoxSelect.bind(this)},d.a.createElement(h.e,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},d.a.createElement(u.a,{className:"icon-btn"},d.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),d.a.createElement(h.d,{className:"p-0"},d.a.createElement(p.a,{styleName:"search-dropdown",placeholder:"",onChange:a,value:n})))),d.a.createElement("div",{className:"module-box-header-right"},s&&d.a.createElement(u.a,{className:"size-40","aria-label":"Menu"},d.a.createElement("i",{className:"zmdi zmdi-apps"})),l&&d.a.createElement(u.a,{className:"size-40","aria-label":"Menu"},d.a.createElement("i",{className:"zmdi zmdi-notifications-none"})),i&&d.a.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:i.name,onMouseEnter:this.toggle,onMouseLeave:this.toggle,onClick:this.toggle,src:i.avatar})))}}]),t}(d.a.Component);t.a=g,g.defaultProps={styleName:"",value:"",notification:!0,apps:!0}},825:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),s=a(23),c=a(17),r=a(15),o=a(16),d=a(121),m=a.n(d),u=a(6715),h=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(r.a)(t).call(this))).onBuildingOptionSelect=function(t){e.setState({menuState:!0,anchorEl:t.currentTarget})},e.handleRequestClose=function(){e.setState({menuState:!1})},e.onBuildingClose=function(){e.setState({addBuildingState:!1})},e.onDeleteBuilding=function(t){e.setState({addBuildingState:!1}),e.props.onDeleteMaintenance(t)},e.onEditBuilding=function(){e.setState({menuState:!1,addBuildingState:!0})},e.onBodies=function(){e.props.history.push("/app/buildingDashboard/3")},e.state={anchorEl:void 0,menuState:!1,addBuildingState:!1},e}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.maintenance,n=t.onMaintenanceSelect,l=this.state,s=(l.menuState,l.anchorEl,a.id),c=a.building,r=a.reporter,o=a.reportContent,d=a.assign,u=a.viewDate;return i.a.createElement("div",{className:"contact-item module-list-item"},i.a.createElement(m.a,{color:"primary",checked:a.selected,value:"checkedF",onClick:function(){n(a)}}),i.a.createElement("div",{style:{display:"flex",flex:1,flexWrap:"wrap"}},i.a.createElement("div",{style:{display:"flex",flex:1,flexWrap:"wrap"},onClick:function(){return e.props.history.push("".concat(5))}},i.a.createElement("div",{className:"mx-1 mx-md-3",style:{fontSize:16,flex:1,position:"relative"}},i.a.createElement("div",{style:{position:"relative",top:"50%",transform:"translateY(-50%)"}},s)),i.a.createElement("div",{className:"col con-inf-mw-100",style:{flex:2}},i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"text-truncate contact-name text-primary-color text-bold"},c.name)),i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"email d-inline-block mr-2"},c.address)),i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"phone d-inline-block text-primary-accent-4-color"},r.name)),i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"phone d-inline-block"},r.phoneNumber)),i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"phone d-inline-block text-dark"},o))),i.a.createElement("div",{className:"col con-inf-mw-100",style:{flex:1}},i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"text-primary-color text-bold"},d?d.maintainerName:"")),i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"text-dark"},d?d.maintainerAddress:"")),i.a.createElement("div",{className:"text-muted"},i.a.createElement("span",{className:"text-primary-accent-4-color"},d?d.category:""))),i.a.createElement("div",{className:"col con-inf-mw-100",style:{flex:1}},i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"text-primary-darken-4-color"},"Report Date: ",r.date)),u&&i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"text-primary-darken-4-color"},"View Date: \xa0\xa0\xa0",u)),d&&i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"text-primary-darken-4-color"},"Assign Date: ",d.date))))))}}]),t}(i.a.Component),p=Object(u.a)(h);t.a=function(e){var t=e.maintenanceList,a=e.onMaintenanceSelect,n=e.onDeleteMaintenance;return i.a.createElement("div",{className:"contact-main-content"},t.map(function(e,t){return i.a.createElement(p,{key:t,maintenance:e,onDeleteMaintenance:n,onMaintenanceSelect:a})}))}},832:function(e,t,a){"use strict";t.a=[{id:1457690400,building:{id:123,name:"BUILDING 1",address:"Via del mercato 1, 06121 PERUGIA(PG)"},reporter:{name:"Massimo Ghirga",phoneNumber:"3352452636",date:"2019/06/12"},reportContent:"Light not work in the hole",assign:{maintainerName:"JHON LENNON",maintainerAddress:"Via del mercato 1, 06121 PERUGIA(PG)",category:"Plumber and Electronic",date:"2019/06/13"},viewDate:"2019/06/10"},{id:1457690401,building:{id:124,name:"BUILDING 2",address:"Via del mercato 1, 06121 PERUGIA(PG)"},reporter:{name:"Massimo Ghirga",phoneNumber:"3352452636",date:"2019/06/12"},reportContent:"Light not work in the hole",assign:{maintainerName:"JHON LENNON",maintainerAddress:"Via del mercato 1, 06121 PERUGIA(PG)",category:"Plumber and Electronic",date:"2019/06/13"},viewDate:"2019/06/10"},{id:1457690403,building:{id:125,name:"BUILDING 3",address:"Via del mercato 1, 06121 PERUGIA(PG)"},reporter:{name:"Massimo Ghirga",phoneNumber:"3352452636",date:"2019/06/12"},reportContent:"Light not work in the hole",assign:{maintainerName:"JHON LENNON",maintainerAddress:"Via del mercato 1, 06121 PERUGIA(PG)",category:"Plumber and Electronic",date:"2019/06/13"},viewDate:"2019/06/10"}]}}]);
//# sourceMappingURL=57.05162c59.chunk.js.map