(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{6700:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(23),c=t(17),s=t(15),r=t(16),o=t(0),i=t.n(o),m=t(63),d=t.n(m),u=t(42),p=t.n(u),h=t(35),g=t(33),E=t.n(g),b=t(217),v=t.n(b),N=t(809),f=t(52),w=t(120),x=t(47),D=t(64),C=t.n(D),k=t(810),y=t.n(k),S=t(822),O=t.n(S),j=t(166),z=t.n(j),M=t(817),B=t(818),I=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).handleChange=function(e){return function(a){t.setState(Object(w.a)({},e,a.target.value))}},t.handleChangeFile=function(e){t.setState({uploadFile:e})},t.updateDate=function(e){return function(a){a&&t.setState(Object(w.a)({},e,t.formatDate(a.toLocaleDateString())))}},t.formatDate=function(e){var a=new Date(e);return[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-")},t.state={id:"",component:"",brand:"",publishDate:"",expiryDate:"",uploadFile:""},t}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=(e.onSave,e.onClose),t=e.open,n=(e.system,this.state),l=n.id,c=n.component,s=(n.brand,n.publishDate),r=n.expiryDate;n.uploadFile;return i.a.createElement(x.f,{className:"modal-box",isOpen:t},i.a.createElement(x.g,{className:"modal-box-header bg-primary text-white"},""===l?"New Image":"Edit Image",i.a.createElement(p.a,{className:"text-white",onClick:a},i.a.createElement(y.a,null))),i.a.createElement("div",{className:"modal-box-content"},i.a.createElement("div",{className:"row no-gutters"},i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right"},i.a.createElement("label",{className:"font-size-18"},"Image")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement(z.a,{className:"w-100 mb-2"},i.a.createElement(M.a,{filesLimit:1,dropzoneText:"Drag and drop a file here or click",onChange:this.handleChangeFile})))),i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right p-relative"},i.a.createElement("label",{className:"align-center font-size-18"},"Url")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement(z.a,{className:"w-100 mb-2"},i.a.createElement(C.a,{value:c,onChange:this.handleChange("component"),fullWidth:!0,margin:"none"})))),i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right p-relative"},i.a.createElement("label",{className:"align-center font-size-18"},"Publish Date")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement("div",{className:"d-flex"},i.a.createElement(O.a,{disabled:!0,readOnly:!0,customInput:i.a.createElement(B.a,null),peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",selected:s?new Date(s):new Date,onChange:this.updateDate("publishDate")}))))),i.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},i.a.createElement("div",{className:"col-md-4 text-right p-relative"},i.a.createElement("label",{className:"align-center font-size-18"},"Expiry Date")),i.a.createElement("div",{className:"col-md-8 p-0"},i.a.createElement("div",{className:"d-flex"},i.a.createElement(O.a,{customInput:i.a.createElement(B.a,null),peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",selected:r?new Date(r):null,onChange:this.updateDate("expiryDate")}))))),i.a.createElement("div",{className:"modal-box-footer d-flex flex-row"},i.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){a()}},"Save Image")))}}]),a}(i.a.Component),F=function(e){var a=e.data,t=a.image,n=a.url,l=a.publishDate;a.expiryDate;return i.a.createElement("li",{className:"col-lg-6 col-sm-6 col-xs-12 articles"},i.a.createElement("span",{className:"article-image jr-link"},i.a.createElement("img",{onClick:function(){return window.open(n,"_blank")},src:t,alt:"Articales Post"})),i.a.createElement("div",{className:"article-description"},i.a.createElement("a",{href:n,target:"_blank"},i.a.createElement("span",{className:"jr-link"},n)),i.a.createElement("div",{className:"meta-wrapper"},i.a.createElement("span",{className:"meta-date"},i.a.createElement("i",{className:"zmdi zmdi-calendar-note zmdi-hc-lg"}),l))))},P=[{image:"http://jumbo-react.g-axon.com/static/media/desserts.bf7b12e2.jpeg",url:"https://www.google.com",publishDate:"2019/07/01",expiryDate:"2019/07/10"},{image:"http://jumbo-react.g-axon.com/static/media/article-post-1.60355775.jpeg",url:"https://www.google.com",publishDate:"2019/07/01",expiryDate:"2019/07/10"},{image:"http://jumbo-react.g-axon.com/static/media/article-post.4ac6d461.jpeg",url:"https://www.google.com",publishDate:"2019/07/01",expiryDate:"2019/07/10"}],T=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).BuildingSideBar=function(){return i.a.createElement("div",{className:"module-side"},i.a.createElement("div",{className:"module-side-header"},i.a.createElement("div",{className:"module-logo"},i.a.createElement("span",null,"Images"))),i.a.createElement("div",{className:"module-side-content"},i.a.createElement(f.a,{className:"module-side-scroll scrollbar",style:{height:t.props.width>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},i.a.createElement("div",{className:"module-add-task"},i.a.createElement(E.a,{className:"jr-btn btn-block",variant:"contained",color:"primary","aria-label":"add",onClick:t.onAddImage},i.a.createElement("span",null,"New Image"))))))},t.onAddImage=function(){t.setState({addImage:!0})},t.onClose=function(){t.setState({addImage:!1})},t.onSave=function(){t.setState({addImage:!1})},t.onSearch=function(e){t.setState({searchKey:e.target.value})},t.state={noContentFoundMessage:"No building found in selected folder",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,searchKey:"",filterOption:"All buildings",currentBuilding:null,selectedSubBuilding:null,selectedBuilding:null,selectedbuildings:0,addMessage:!1},t}return Object(r.a)(a,e),Object(l.a)(a,[{key:"updateBuilding",value:function(e){this.setState({searchUser:e.target.value}),this.filterBuilding(e.target.value)}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,a=(e.buildingList,e.alertMessage),t=e.showMessage,n=(e.noContentFoundMessage,e.data,e.addImage);return i.a.createElement("div",{className:"app-wrapper"},i.a.createElement("div",{className:"app-module animated slideInUpTiny animation-duration-3"},i.a.createElement("div",{className:"d-block d-xl-none"},i.a.createElement(d.a,{open:this.state.drawerState,onClose:this.onToggleDrawer.bind(this)},this.BuildingSideBar())),i.a.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.BuildingSideBar()),i.a.createElement("div",{className:"module-box"},i.a.createElement("div",{className:"module-box-header"},i.a.createElement(p.a,{className:"drawer-btn d-block d-xl-none","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)},i.a.createElement("i",{className:"zmdi zmdi-menu"})),i.a.createElement(N.a,{placeholder:"Search here...",notification:!1,apps:!1,onChange:this.updateBuilding.bind(this),value:this.state.searchUser})),i.a.createElement("div",{className:"module-box-content p-3"},i.a.createElement(f.a,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},i.a.createElement("div",{className:"card shadow border-0 p-4"},i.a.createElement("ul",{className:"row articles-section list-unstyled"},P.map(function(e,a){return i.a.createElement(F,{key:a,data:e})})))))),n&&i.a.createElement(I,{open:n,onSave:this.onSave,onClose:this.onClose}),i.a.createElement(v.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:i.a.createElement("span",{id:"message-id"},a)})))}}]),a}(o.Component);a.default=Object(h.c)(function(e){return{width:e.settings.width}})(T)},809:function(e,a,t){"use strict";var n=t(14),l=t(23),c=t(17),s=t(15),r=t(16),o=t(216),i=t(0),m=t.n(i),d=t(42),u=t.n(d),p=t(47),h=t(165),g=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(c.a)(this,Object(s.a)(a).call(this))).onSearchBoxSelect=function(){e.setState({searchBox:!e.state.searchBox})},e.state={anchorEl:void 0,searchBox:!1,popoverOpen:!1},e.toggle=e.toggle.bind(Object(o.a)(Object(o.a)(e))),e}return Object(r.a)(a,e),Object(l.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,a=e.placeholder,t=e.onChange,n=e.value,l=e.user,c=e.notification,s=e.apps;return m.a.createElement("div",{className:"module-box-header-inner"},m.a.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{className:"form-control border-0",type:"search",placeholder:a,onChange:t,value:n}),m.a.createElement("button",{className:"search-icon"},m.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),l&&m.a.createElement(p.h,{className:"p-3",placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},m.a.createElement("h3",null,l.name),m.a.createElement("h4",null,l.email)),m.a.createElement("div",{className:"d-inline-block d-sm-none"},m.a.createElement(p.c,{className:"quick-menu nav-searchbox",isOpen:this.state.searchBox,toggle:this.onSearchBoxSelect.bind(this)},m.a.createElement(p.e,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},m.a.createElement(u.a,{className:"icon-btn"},m.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),m.a.createElement(p.d,{className:"p-0"},m.a.createElement(h.a,{styleName:"search-dropdown",placeholder:"",onChange:t,value:n})))),m.a.createElement("div",{className:"module-box-header-right"},s&&m.a.createElement(u.a,{className:"size-40","aria-label":"Menu"},m.a.createElement("i",{className:"zmdi zmdi-apps"})),c&&m.a.createElement(u.a,{className:"size-40","aria-label":"Menu"},m.a.createElement("i",{className:"zmdi zmdi-notifications-none"})),l&&m.a.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:l.name,onMouseEnter:this.toggle,onMouseLeave:this.toggle,onClick:this.toggle,src:l.avatar})))}}]),a}(m.a.Component);a.a=g,g.defaultProps={styleName:"",value:"",notification:!0,apps:!0}},818:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(0),l=t.n(n),c=function(e){return l.a.createElement("input",{className:"form-control form-control-lg",value:e.value,readOnly:!0,placeholder:e.placeholder?e.placeholder:"Click to select date",onClick:e.onClick})}}}]);
//# sourceMappingURL=17.05138a9f.chunk.js.map