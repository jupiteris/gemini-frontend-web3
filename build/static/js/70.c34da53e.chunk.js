(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{6650:function(e,a,t){"use strict";t.r(a);var s=t(14),n=t(23),l=t(17),i=t(15),r=t(16),c=t(0),o=t.n(c),d=t(42),m=t.n(d),u=t(35),g=t(217),p=t.n(g),h=t(33),N=t.n(h),v=t(840),b=t(809),C=t(52),w=t(63),E=t.n(w),f=t(839),k=t(815),x=t.n(k),R=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(i.a)(a).call(this,e))).handleRequestClose=function(){t.setState({showMessage:!1})},t.showRegisters=function(e,a,t){var s=e.slice(a*t,(a+1)*t);return o.a.createElement(v.a,{registerList:s})},t.onSearch=function(e){t.setState({searchKey:e.target.value,selectPageNum:0})},t.RegisterSideBar=function(){return o.a.createElement("div",{className:"module-side"},o.a.createElement("div",{className:"module-side-header"},o.a.createElement("div",{className:"module-logo"},o.a.createElement("span",null,"Tenant"))),o.a.createElement("div",{className:"module-side-content"},o.a.createElement(C.a,{className:"module-side-scroll scrollbar",style:{height:t.props.width>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},o.a.createElement("div",{className:"module-add-task"},o.a.createElement(N.a,{className:"jr-btn btn-block",variant:"contained",color:"primary","aria-label":"add",onClick:t.onTapNewRegister},o.a.createElement("span",null,"New Tenant"))))))},t.onRegisterClose=function(){t.setState({isOpen:!1})},t.onTapNewRegister=function(){t.setState({isOpen:!0})},t.filterUsers=function(e,a){return e.filter(function(e){return(e.first_name+" "+e.last_name).toLowerCase().indexOf(a.toLowerCase())>-1})},t.handlePageClick=function(e){var a=e.selected;t.setState({selectPageNum:a})},t.state={noContentFoundMessage:"No Tenant found",alertMessage:"",showMessage:!1,drawerState:!1,searchKey:"",currentRegister:null,selectedRegister:null,selectedRegisters:0,addBuildingState:!1,isOpen:!1,selectPageNum:0,numPerPage:5},t}return Object(r.a)(a,e),Object(n.a)(a,[{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,a=e.alertMessage,t=e.showMessage,s=e.noContentFoundMessage,n=e.isOpen,l=e.selectedRegister,i=e.searchKey,r=e.selectPageNum,c=e.numPerPage,d=this.props.tenants,u=""===i?d:this.filterUsers(d,i);return o.a.createElement("div",{className:"app-wrapper"},o.a.createElement("div",{className:"app-module animated slideInUpTiny animation-duration-3"},o.a.createElement("div",{className:"d-block d-xl-none"},o.a.createElement(E.a,{open:this.state.drawerState,onClose:this.onToggleDrawer.bind(this)},this.RegisterSideBar())),o.a.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.RegisterSideBar()),o.a.createElement("div",{className:"module-box"},o.a.createElement("div",{className:"module-box-header"},o.a.createElement(m.a,{className:"drawer-btn d-block d-xl-none","aria-label":"Menu",onClick:this.onToggleDrawer.bind(this)},o.a.createElement("i",{className:"zmdi zmdi-menu"})),o.a.createElement(b.a,{placeholder:"Search tenant",notification:!1,apps:!1,value:i,onChange:this.onSearch})),o.a.createElement("div",{className:"module-box-content"},o.a.createElement("div",{className:"module-box-topbar"}),o.a.createElement(C.a,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},0===u.length?o.a.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},s):this.showRegisters(u,r,c)),o.a.createElement(x.a,{previousLabel:"previous",nextLabel:"next",breakLabel:o.a.createElement("a",{className:"page-link"},"..."),pageCount:u.length/c,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination justify-content-center",pageClassName:"page-item",activeClassName:"active",disabledClassName:"disabled",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item disabled"})))),n&&o.a.createElement(f.a,{user_type:"tenant",onRegisterClose:this.onRegisterClose,open:n,register:l}),o.a.createElement(p.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("span",{id:"message-id"},a)}))}}]),a}(c.Component);a.default=Object(u.c)(function(e){var a=e.settings,t=e.users;return{width:a.width,tenants:t.users.tenants}})(R)}}]);
//# sourceMappingURL=70.c34da53e.chunk.js.map