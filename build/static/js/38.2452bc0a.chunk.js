(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{6684:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(17),o=t(15),c=t(23),s=t(16),i=t(0),r=t.n(i),m=t(63),d=t.n(m),u=t(42),p=t.n(u),h=t(35),b=t(6715),g=t(33),E=t.n(g),v=t(217),N=t.n(v),f=t(809),x=t(52),C=t(890),O=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(l.a)(this,Object(o.a)(a).call(this))).onSubBuildingOptionSelect=function(a){e.setState({menuState:!0,anchorEl:a.currentTarget})},e.handleRequestClose=function(){e.setState({menuState:!1})},e.renderUrl=function(e){return e.startsWith("http")?e:"http://localhost:5000"+e},e.state={anchorEl:void 0,menuState:!1,addCadstral:!1,addRent:!1,addSystem:!1,addDocument:!1,addCertificate:!1},e}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.item,t=(e.onEdit,e.onDelete,this.state),n=(t.menuState,t.anchorEl,a.id,a.condition),l=a.note,o=a.attachment,c=a.component,s=a.sub_component,i=(a.building_id,a.name),m="Good"===n?"green":"Bad"===n?"red":"#ffc107";return r.a.createElement("div",{className:"contact-item module-list-item"},r.a.createElement("div",{className:"d-flex f-1 flex-wrap",onClick:function(){alert("Edit")}},r.a.createElement("div",{className:"mx-1 mx-md-3"},r.a.createElement("div",{className:"rounded-circle size-80 text-center mx-1 mx-md-3 font-size-20"},r.a.createElement("img",{className:"rounded-circle size-80 mx-1 mx-md-3 image-resize-cover",alt:"",src:this.renderUrl(o.url)}))),r.a.createElement("div",{className:"f-1"},r.a.createElement("p",{className:"mb-1 ml-2"},r.a.createElement("span",{className:"text-truncate contact-name text-primary-color text-bold font-size-18"},i.charAt(0).toUpperCase()+i.slice(1))),r.a.createElement("div",{className:"text-muted"},r.a.createElement("span",{className:"d-inline-block outdoor-item-status",style:{backgroundColor:m}},n)),r.a.createElement("div",{className:"text-muted mt-1"},r.a.createElement("span",null,r.a.createElement(C.a,{icon:"th-large",className:"mr-2"})),r.a.createElement("span",{className:"d-inline-block"},c.name)),r.a.createElement("div",{className:"text-muted"},r.a.createElement("span",null,r.a.createElement(C.a,{icon:"th-list",className:"mr-2"})),r.a.createElement("span",{className:"d-inline-block"},s.name))),r.a.createElement("div",{className:"f-1 text-center"},r.a.createElement("div",{className:"text-dark break-all"},l)),r.a.createElement("div",{className:"f-1 text-center"},r.a.createElement("p",{className:"mb-0"},r.a.createElement("span",{className:"text-truncate contact-name text-dark"},"Reports")),r.a.createElement("div",{className:"text-muted"},r.a.createElement("span",{className:"email d-inline-block mr-2"},0)))),r.a.createElement("div",{className:"col-auto px-1 actions d-none d-sm-flex"},r.a.createElement(p.a,{className:"icon-btn p-2",onClick:this.onSubBuildingOptionSelect},r.a.createElement("i",{className:"zmdi zmdi-more-vert"}))))}}]),a}(r.a.Component),S=Object(b.a)(O),k=function(e){var a=e.data,t=e.onEdit,n=e.onDelete;return null!=a?r.a.createElement("div",{className:"contact-main-content"},a.map(function(e,a){return r.a.createElement(S,{key:a,item:e,onEdit:t,onDelete:n})})):null},w=t(120),y=t(47),j=t(810),z=t.n(j),B=t(75),D=t.n(B),P=t(166),I=t.n(P),M=t(122),_=t.n(M),L=t(817),U=t(820),R=["Good","Normal","Bad"],F=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).handleSubmit=function(){var e=t.state,a=e.component,n=e.sub_component,l=e.condition,o=e.name,c=e.note,s=e.files,i=t.props,r=i.building_id,m=i.onSave,d=new FormData;d.append("body[name]",o),d.append("body[component_id]",a),d.append("body[sub_component_id]",n),d.append("body[condition]",l),d.append("body[note]",c),d.append("body[building_id]",r),d.append("body[attachment]",s[0]),m(d)},t.isValid=function(){var e=t.state,a=e.component,n=e.sub_component,l=e.condition,o=e.name,c=e.note,s=e.files;return""!==a&&""!==n&&""!==l&&""!==o&&""!==c&&null!==s},t.handleChange=function(e){return function(a){t.setState(Object(w.a)({},e,a.target.value))}},t.handleChangeFile=function(e){t.setState({files:e})},t.state={id:"",component:"",sub_component:"",condition:"",name:"",note:"",files:null},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=(a.onSave,a.onClose),n=a.open,l=(a.rent,this.state),o=l.id,c=l.component,s=l.sub_component,i=l.condition,m=l.name,d=l.note,u=this.props,h=u.allComponent,b=u.allSubComponent;return r.a.createElement(y.f,{className:"modal-box",isOpen:n},r.a.createElement(y.g,{className:"modal-box-header bg-primary text-white"},""===o?"Insert Outdoor":"Edit Outdoor",r.a.createElement(p.a,{className:"text-white",onClick:t},r.a.createElement(z.a,null))),r.a.createElement("div",{className:"modal-box-content"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-lg-12 d-flex flex-column order-lg-1"},r.a.createElement("form",{className:"row",noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},r.a.createElement("div",{className:"col-md-4 text-right p-relative"},r.a.createElement("label",{className:"align-center font-size-18"},"Name")),r.a.createElement("div",{className:"col-md-8 p-0"},r.a.createElement("input",{value:m,onChange:this.handleChange("name"),className:"form-control form-control-lg"}))),r.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},r.a.createElement("div",{className:"col-md-4 text-right p-relative"},r.a.createElement("label",{className:"align-center font-size-18"},"Component")),r.a.createElement("div",{className:"col-md-8 p-0"},r.a.createElement(I.a,{className:"w-100 mb-2"},r.a.createElement(_.a,{value:c,onChange:this.handleChange("component"),input:r.a.createElement(U.a,null)},h.map(function(e){return r.a.createElement(D.a,{key:e.id,value:e.id},e.name)}))))),r.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},r.a.createElement("div",{className:"col-md-4 text-right p-relative"},r.a.createElement("label",{className:"align-center font-size-18"},"Sub Component")),r.a.createElement("div",{className:"col-md-8 p-0"},r.a.createElement(I.a,{className:"w-100 mb-2"},r.a.createElement(_.a,{value:s,onChange:this.handleChange("sub_component"),input:r.a.createElement(U.a,null)},b.map(function(e){return r.a.createElement(D.a,{key:e.id,value:e.id},e.name)}))))),r.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},r.a.createElement("div",{className:"col-md-4 text-right p-relative"},r.a.createElement("label",{className:"align-center font-size-18"},"Condition")),r.a.createElement("div",{className:"col-md-8 p-0"},r.a.createElement(I.a,{className:"w-100 mb-2"},r.a.createElement(_.a,{value:i,onChange:this.handleChange("condition"),input:r.a.createElement(U.a,null)},R.map(function(e){return r.a.createElement(D.a,{key:e,value:e},e)}))))),r.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},r.a.createElement("div",{className:"col-md-4 text-right"},r.a.createElement("label",{className:"font-size-18"},"NOTE")),r.a.createElement("div",{className:"col-md-8 p-0"},r.a.createElement(I.a,{className:"w-100 mb-2"},r.a.createElement("textarea",{className:"form-control form-control-lg",rows:"6",style:{width:"100%",height:70,marginTop:5,paddingHorizontal:10,paddingVertical:5},placeholder:"Description",value:d,onChange:this.handleChange("note")})))),r.a.createElement("div",{className:"row col-md-12 col-12 p-0 mb-2"},r.a.createElement("div",{className:"col-md-4 text-right"},r.a.createElement("label",{className:"font-size-18"},"Attachment")),r.a.createElement("div",{className:"col-md-8 p-0"},r.a.createElement(L.a,{filesLimit:1,acceptedFiles:["image/jpeg","image/jpg","image/png","image/bmp"],dropzoneText:"Drag and drop a file here or click",onChange:this.handleChangeFile}))))))),r.a.createElement("div",{className:"modal-box-footer d-flex flex-row"},r.a.createElement(E.a,{disabled:!this.isValid(),variant:"contained",color:"primary",onClick:function(){e.handleSubmit()}},"Save Outdoor")))}}]),a}(r.a.Component),T=Object(h.c)(function(e){var a=e.component,t=e.subComponent;return{allComponent:a.allComponent,allSubComponent:t.allSubComponent}})(F),q=t(3),A=t(815),V=t.n(A),H=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).SideBar=function(){return r.a.createElement("div",{className:"module-side"},r.a.createElement("div",{className:"module-side-header"},r.a.createElement("div",{className:"module-logo"},r.a.createElement("span",null,"Outdoors"))),r.a.createElement("div",{className:"module-side-content"},r.a.createElement(x.a,{className:"module-side-scroll scrollbar",style:{height:t.props.width>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},r.a.createElement("div",{className:"module-add-task"},r.a.createElement(E.a,{className:"jr-btn btn-block",variant:"contained",color:"primary","aria-label":"add",onClick:t.onAdd},r.a.createElement("span",null,"New Outdoor"))))))},t.onAdd=function(){t.setState({addOutdoor:!0})},t.onEdit=function(e){t.setState({selectedItem:e,addOutdoor:!0})},t.onSave=function(e){t.setState({addOutdoor:!1}),t.props.dispatch(Object(q.qb)()),t.props.dispatch(Object(q.k)(e))},t.onUpdate=function(e){t.setState({addOutdoor:!1,selectedItem:{}}),t.props.dispatch(Object(q.qb)()),t.props.dispatch(Object(q.zb)(e.id,e))},t.onDelete=function(){t.setState({addOutdoor:!1,selectedItem:{}})},t.onClose=function(){t.setState({addOutdoor:!1,selectedItem:{}})},t.handleRequestClose=function(){t.setState({showMessage:!1})},t.getBuildingId=function(){var e=t.props.match.url.split("/");return e[e.length-2]},t.showBuildings=function(e,a,n){var l=e.slice(a*n,(a+1)*n);return r.a.createElement(k,{data:l,onEdit:t.onEdit,onDelete:t.onDelete})},t.onSearch=function(e){t.setState({searchKey:e.target.value,selectPageNum:0})},t.filterData=function(e,a){return e.filter(function(e){return e.name.toLowerCase().indexOf(a.toLowerCase())>-1})},t.handlePageClick=function(e){var a=e.selected;t.setState({selectPageNum:a})},t.state={noContentFoundMessage:"No Outdoor found in this building",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,searchKey:"",addOutdoor:!1,selectedItem:{},selectPageNum:0,numPerPage:10},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(q.Z)(this.getBuildingId()))}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}}]),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.searchKey,n=a.addOutdoor,l=a.alertMessage,o=a.showMessage,c=a.noContentFoundMessage,s=(a.selectedItem,a.selectPageNum),i=a.numPerPage,m=this.props.outdoors,u=""===t?m:this.filterData(m,t);return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"app-module animated slideInUpTiny animation-duration-3"},r.a.createElement("div",{className:"d-block d-xl-none"},r.a.createElement(d.a,{open:this.state.drawerState,onClose:this.onToggleDrawer.bind(this)},this.SideBar())),r.a.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.SideBar()),r.a.createElement("div",{className:"module-box"},r.a.createElement("div",{className:"module-box-header"},r.a.createElement(p.a,{className:"drawer-btn d-block d-xl-none","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)},r.a.createElement("i",{className:"zmdi zmdi-menu"})),r.a.createElement(f.a,{placeholder:"Search here...",notification:!1,apps:!1,onChange:this.onSearch,value:t})),r.a.createElement("div",{className:"module-box-content"},r.a.createElement("div",{className:"module-box-topbar"},r.a.createElement(p.a,{className:"icon-btn",onClick:function(){e.props.history.goBack()}},r.a.createElement("i",{className:"zmdi zmdi-arrow-back"}))),r.a.createElement(x.a,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},null==m||0===m.length?r.a.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},c):this.showBuildings(u,s,i)),r.a.createElement(V.a,{previousLabel:"previous",nextLabel:"next",breakLabel:r.a.createElement("a",{className:"page-link"},"..."),pageCount:u.length/i,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination justify-content-center",pageClassName:"page-item",activeClassName:"active",disabledClassName:"disabled",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item disabled"})))),r.a.createElement(T,{open:n,onSave:this.onSave,building_id:this.getBuildingId(),onUpdate:this.onUpdate,onClose:this.onClose}),r.a.createElement(N.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:o,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},l)}))}}]),a}(i.Component);a.default=Object(b.a)(Object(h.c)(function(e){var a=e.settings,t=e.outdoor;return{width:a.width,outdoors:t.outdoors}})(H))},809:function(e,a,t){"use strict";var n=t(14),l=t(23),o=t(17),c=t(15),s=t(16),i=t(216),r=t(0),m=t.n(r),d=t(42),u=t.n(d),p=t(47),h=t(165),b=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(o.a)(this,Object(c.a)(a).call(this))).onSearchBoxSelect=function(){e.setState({searchBox:!e.state.searchBox})},e.state={anchorEl:void 0,searchBox:!1,popoverOpen:!1},e.toggle=e.toggle.bind(Object(i.a)(Object(i.a)(e))),e}return Object(s.a)(a,e),Object(l.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,a=e.placeholder,t=e.onChange,n=e.value,l=e.user,o=e.notification,c=e.apps;return m.a.createElement("div",{className:"module-box-header-inner"},m.a.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{className:"form-control border-0",type:"search",placeholder:a,onChange:t,value:n}),m.a.createElement("button",{className:"search-icon"},m.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),l&&m.a.createElement(p.h,{className:"p-3",placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},m.a.createElement("h3",null,l.name),m.a.createElement("h4",null,l.email)),m.a.createElement("div",{className:"d-inline-block d-sm-none"},m.a.createElement(p.c,{className:"quick-menu nav-searchbox",isOpen:this.state.searchBox,toggle:this.onSearchBoxSelect.bind(this)},m.a.createElement(p.e,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},m.a.createElement(u.a,{className:"icon-btn"},m.a.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),m.a.createElement(p.d,{className:"p-0"},m.a.createElement(h.a,{styleName:"search-dropdown",placeholder:"",onChange:t,value:n})))),m.a.createElement("div",{className:"module-box-header-right"},c&&m.a.createElement(u.a,{className:"size-40","aria-label":"Menu"},m.a.createElement("i",{className:"zmdi zmdi-apps"})),o&&m.a.createElement(u.a,{className:"size-40","aria-label":"Menu"},m.a.createElement("i",{className:"zmdi zmdi-notifications-none"})),l&&m.a.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:l.name,onMouseEnter:this.toggle,onMouseLeave:this.toggle,onClick:this.toggle,src:l.avatar})))}}]),a}(m.a.Component);a.a=b,b.defaultProps={styleName:"",value:"",notification:!0,apps:!0}},820:function(e,a,t){"use strict";var n=t(37),l=t(90),o=t.n(l),c=Object(n.withStyles)(function(e){return{input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}})(o.a);a.a=c}}]);
//# sourceMappingURL=38.2452bc0a.chunk.js.map