(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{6674:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(23),i=t(17),c=t(15),s=t(16),r=t(0),o=t.n(r),d=t(63),m=t.n(d),u=t(42),g=t.n(u),h=t(35),p=t(33),E=t.n(p),v=t(217),f=t.n(v),b=t(89),N=t.n(b),x=t(75),B=t.n(x),S=t(6715),w=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(i.a)(this,Object(c.a)(a).call(this))).onBuildingOptionSelect=function(a){e.setState({menuState:!0,anchorEl:a.currentTarget})},e.handleRequestClose=function(){e.setState({menuState:!1})},e.onDeleteBuilding=function(a){e.setState({addBuildingState:!1})},e.state={anchorEl:void 0,menuState:!1,addBuildingState:!1,addMaintenance:!1},e}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.building,n=(a.onBuildingSelect,a.onSaveBuilding,a.onSaveBody,this.state),l=n.menuState,i=n.anchorEl;n.addBuildingState,n.addBody,n.addMaintenance;return o.a.createElement("div",{className:"contact-item module-list-item"},o.a.createElement("div",{className:"d-flex f-1 flex-wrap"},o.a.createElement("div",{className:"d-flex f-1 flex-wrap"},o.a.createElement("div",{className:"mx-1 mx-md-3 font-size-16 f-1 position-relative"},o.a.createElement("div",{className:"align-center"},"123123")),o.a.createElement("div",{className:"col con-inf-mw-100 f-1"},o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-truncate contact-name text-dark"},"Building Name")),o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-truncate contact-name text-dark"},"Via della Pace n.30")),o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-truncate contact-name text-dark"},"Building Address"))),o.a.createElement("div",{className:"col con-inf-mw-100 f-2"},o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-truncate contact-name text-dark"},"Admin Name")),o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-truncate contact-name text-dark"},"Via della Pace n.30")),o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-truncate contact-name text-dark"},"Address")),o.a.createElement("p",{className:"mb-0"},o.a.createElement("span",{className:"text-truncate contact-name text-dark"},"Mob: 12312312")))),o.a.createElement("div",{className:"col-auto px-1 actions d-none d-sm-flex"},o.a.createElement(g.a,{className:"icon-btn p-2",onClick:this.onBuildingOptionSelect},o.a.createElement("i",{className:"zmdi zmdi-more-vert"})),o.a.createElement(N.a,{id:"long-menu",anchorEl:i,open:l,onClose:this.handleRequestClose,MenuListProps:{style:{width:150}}},["Delete"].map(function(a){return o.a.createElement(B.a,{key:a,onClick:function(){"Delete"===a&&(e.handleRequestClose(),e.onDeleteBuilding(t))}},a)})))))}}]),a}(o.a.Component),O=Object(S.a)(w),y=function(e){var a=e.buildingList,t=e.onBuildingSelect,n=e.onSaveBuilding,l=e.onDeleteBuilding;return o.a.createElement("div",{className:"contact-main-content"},a.map(function(e,a){return o.a.createElement(O,{key:a,building:e,onSaveBuilding:n,onDeleteBuilding:l,onBuildingSelect:t})}))},C=t(809),k=t(47),j=t(810),z=t.n(j),M=function(e){function a(e){var t;Object(n.a)(this,a),t=Object(i.a)(this,Object(c.a)(a).call(this,e));var l=e.building,s=l.id,r=(l.thumb,l.name),o=l.email,d=l.phone,m=l.designation,u=l.selected,g=l.starred,h=l.frequently;return t.state={id:s,name:r,email:o,phone:d,designation:m,selected:u,starred:g,frequently:h},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=(e.onSaveBuilding,e.onBuildingClose),t=(e.onDeleteBuilding,e.open),n=e.building,l=this.state,i=(l.id,l.name);l.email,l.phone,l.designation,l.selected,l.starred,l.frequently;return o.a.createElement(k.f,{className:"modal-box",isOpen:t},o.a.createElement(k.g,{className:"modal-box-header bg-primary text-white"},(n.name,"Add Building"),o.a.createElement(g.a,{className:"text-white",onClick:a},o.a.createElement(z.a,null))),o.a.createElement("div",{className:"modal-box-content"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-lg-12 d-flex flex-column order-lg-1"},o.a.createElement("form",{className:"row",noValidate:!0,autoComplete:"off"},o.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},o.a.createElement("div",{className:"col-md-4 text-right p-relative"},o.a.createElement("label",{className:"align-center font-size-18"},"BUILDING CODE")),o.a.createElement("div",{className:"col-md-8 p-0"},o.a.createElement("input",{className:"form-control form-control-lg",type:"number"}))))))),o.a.createElement("div",{className:"modal-box-footer d-flex flex-row"},o.a.createElement(E.a,{disabled:""===i,variant:"contained",color:"primary",onClick:function(){a()}},"Save Building")))}}]),a}(o.a.Component),D=t(52),L=[1,2,3,4,5],q=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(c.a)(a).call(this,e))).BuildingSideBar=function(){return o.a.createElement("div",{className:"module-side"},o.a.createElement("div",{className:"module-side-header"},o.a.createElement("div",{className:"module-logo"},o.a.createElement("span",null,"BUILDING"))),o.a.createElement("div",{className:"module-side-content"},o.a.createElement(D.a,{className:"module-side-scroll scrollbar",style:{height:t.props.width>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},o.a.createElement("div",{className:"module-add-task"},o.a.createElement(E.a,{className:"jr-btn btn-block",variant:"contained",color:"primary","aria-label":"add",onClick:t.onAddBuilding},o.a.createElement("span",null,"Add Building"))))))},t.onAddBuilding=function(){t.setState({addBuildingState:!0})},t.onBuildingClose=function(){t.setState({addBuildingState:!1})},t.handleRequestClose=function(){t.setState({showMessage:!1})},t.showBuildings=function(e){e.currentBuilding;var a=e.buildingList;return o.a.createElement(y,{buildingList:a})},t.onSearch=function(e){t.setState({searchKey:e.target.value})},t.state={noContentFoundMessage:"No building found",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,searchKey:"",filterOption:"All buildings",allBuilding:L,buildingList:L,currentBuilding:null,selectedSubBuilding:null,selectedBuilding:null,selectedbuildings:0,addBuildingState:!1},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,a=e.user,t=e.buildingList,n=e.addBuildingState,l=(e.selectedbuildings,e.alertMessage),i=e.showMessage,c=e.noContentFoundMessage;e.currentBuilding;return o.a.createElement("div",{className:"app-wrapper"},o.a.createElement("div",{className:"app-module animated slideInUpTiny animation-duration-3"},o.a.createElement("div",{className:"d-block d-xl-none"},o.a.createElement(m.a,{open:this.state.drawerState,onClose:this.onToggleDrawer.bind(this)},this.BuildingSideBar(a))),o.a.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.BuildingSideBar(a)),o.a.createElement("div",{className:"module-box"},o.a.createElement("div",{className:"module-box-header"},o.a.createElement(g.a,{className:"drawer-btn d-block d-xl-none","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)},o.a.createElement("i",{className:"zmdi zmdi-menu"})),o.a.createElement(C.a,{placeholder:"Search here...",notification:!1,apps:!1,value:this.state.searchKey,onChange:this.onSearch})),o.a.createElement("div",{className:"module-box-content"},o.a.createElement(D.a,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},0===t.length?o.a.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},c):this.showBuildings(this.state))))),o.a.createElement(M,{open:n,building:{},onBuildingClose:this.onBuildingClose}),o.a.createElement(f.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:i,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("span",{id:"message-id"},l)}))}}]),a}(r.Component);a.default=Object(h.c)(function(e){return{width:e.settings.width}})(q)},809:function(e,a,t){"use strict";var n=t(14),l=t(23),i=t(17),c=t(15),s=t(16),r=t(216),o=t(0),d=t.n(o),m=t(42),u=t.n(m),g=t(47),h=t(165),p=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(i.a)(this,Object(c.a)(a).call(this))).onSearchBoxSelect=function(){e.setState({searchBox:!e.state.searchBox})},e.state={anchorEl:void 0,searchBox:!1,popoverOpen:!1},e.toggle=e.toggle.bind(Object(r.a)(Object(r.a)(e))),e}return Object(s.a)(a,e),Object(l.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,a=e.placeholder,t=e.onChange,n=e.value,l=e.user,i=e.notification,c=e.apps;return d.a.createElement("div",{className:"module-box-header-inner"},d.a.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},d.a.createElement("div",{className:"form-group"},d.a.createElement("input",{className:"form-control border-0",type:"search",placeholder:a,onChange:t,value:n}),d.a.createElement("button",{className:"search-icon"},d.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),l&&d.a.createElement(g.h,{className:"p-3",placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},d.a.createElement("h3",null,l.name),d.a.createElement("h4",null,l.email)),d.a.createElement("div",{className:"d-inline-block d-sm-none"},d.a.createElement(g.c,{className:"quick-menu nav-searchbox",isOpen:this.state.searchBox,toggle:this.onSearchBoxSelect.bind(this)},d.a.createElement(g.e,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},d.a.createElement(u.a,{className:"icon-btn"},d.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),d.a.createElement(g.d,{className:"p-0"},d.a.createElement(h.a,{styleName:"search-dropdown",placeholder:"",onChange:t,value:n})))),d.a.createElement("div",{className:"module-box-header-right"},c&&d.a.createElement(u.a,{className:"size-40","aria-label":"Menu"},d.a.createElement("i",{className:"zmdi zmdi-apps"})),i&&d.a.createElement(u.a,{className:"size-40","aria-label":"Menu"},d.a.createElement("i",{className:"zmdi zmdi-notifications-none"})),l&&d.a.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:l.name,onMouseEnter:this.toggle,onMouseLeave:this.toggle,onClick:this.toggle,src:l.avatar})))}}]),a}(d.a.Component);a.a=p,p.defaultProps={styleName:"",value:"",notification:!0,apps:!0}},810:function(e,a,t){"use strict";var n=t(812);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),i=(0,n(t(814)).default)(l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),l.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Close");a.default=i},812:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},814:function(e,a,t){"use strict";var n=t(812);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),i=n(t(59)),c=n(t(39));var s=function(e,a){var t=function(a){return l.default.createElement(c.default,a,e)};return t.displayName="".concat(a,"Icon"),(t=(0,i.default)(t)).muiName="SvgIcon",t};a.default=s}}]);
//# sourceMappingURL=27.b617a238.chunk.js.map