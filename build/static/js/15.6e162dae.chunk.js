(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{6693:function(e,a,i){"use strict";i.r(a);var d=i(14),n=i(23),s=i(17),t=i(15),l=i(16),r=i(0),u=i.n(r),c=i(35),o=i(217),m=i.n(o),_=i(930),g=i(42),b=i.n(g),G=i(89),p=i.n(G),h=i(75),E=i.n(h),P=i(6715),B=function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(s.a)(this,Object(t.a)(a).call(this))).onBuildingOptionSelect=function(a){e.setState({menuState:!0,anchorEl:a.currentTarget})},e.handleRequestClose=function(){e.setState({menuState:!1})},e.onEditImages=function(a){e.setState({menuState:!1,addBuildingState:!1}),e.props.history.push("notice-board/images")},e.onEditMessages=function(){e.setState({menuState:!1,addBuildingState:!0}),e.props.history.push("notice-board/messages")},e.state={anchorEl:void 0,menuState:!1,addBuildingState:!1,addMaintenance:!1},e}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=this.props.building,i=this.state,d=i.menuState,n=i.anchorEl,s=a.id,t=a.building_name,l=(a.thumb,a.user_name),r=a.user_address,c=a.building_report,o=a.subBuildingList;return u.a.createElement("div",{className:"contact-item module-list-item"},u.a.createElement("div",{className:"d-flex f-1 flex-wrap"},u.a.createElement("div",{className:"d-flex f-1 flex-wrap",onClick:function(){return e.props.history.push("/notice-board")}},u.a.createElement("div",{className:"mx-1 mx-md-3 f-1 p-relative font-size-16"},u.a.createElement("div",{className:"align-center"},s)),u.a.createElement("div",{className:"col con-inf-mw-100 f-3"},u.a.createElement("p",{className:"mb-0"},u.a.createElement("span",{className:"text-truncate contact-name text-dark"},t)),u.a.createElement("div",{className:"text-muted"},u.a.createElement("span",{className:"email d-inline-block mr-2"},l,","),u.a.createElement("span",{className:"phone d-inline-block"},r))),u.a.createElement("div",{className:"col con-inf-mw-100 f-1 text-center"},u.a.createElement("p",{className:"mb-0"},u.a.createElement("span",{className:"text-truncate contact-name text-dark"},"No.Part of Building")),u.a.createElement("div",{className:"text-muted"},u.a.createElement("span",{className:"email d-inline-block mr-2"},o.length))),u.a.createElement("div",{className:"col con-inf-mw-100 f-1 text-center"},u.a.createElement("p",{className:"mb-0"},u.a.createElement("span",{className:"text-truncate contact-name text-dark"},"No.Reporter")),u.a.createElement("div",{className:"text-muted"},u.a.createElement("span",{className:"email d-inline-block mr-2"},c)))),u.a.createElement("div",{className:"col-auto px-1 actions d-none d-sm-flex"},u.a.createElement(b.a,{className:"icon-btn p-2",onClick:this.onBuildingOptionSelect},u.a.createElement("i",{className:"zmdi zmdi-more-vert"})),u.a.createElement(p.a,{id:"long-menu",anchorEl:n,open:d,onClose:this.handleRequestClose,MenuListProps:{style:{width:150}}},["Messages","Images"].map(function(a){return u.a.createElement(E.a,{key:a,onClick:function(){"Messages"===a?(e.handleRequestClose(),e.onEditMessages()):"Images"===a&&(e.handleRequestClose(),e.onEditImages())}},a)})))))}}]),a}(u.a.Component),R=Object(P.a)(B),I=function(e){var a=e.buildingList;return u.a.createElement("div",{className:"contact-main-content"},a.map(function(e,a){return u.a.createElement(R,{key:a,building:e})}))},y=i(52),f=function(e){function a(e){var i;return Object(d.a)(this,a),(i=Object(s.a)(this,Object(t.a)(a).call(this,e))).showBuildings=function(e){e.currentBuilding;var a=e.buildingList;return u.a.createElement(I,{buildingList:a})},i.onSearch=function(e){i.setState({searchKey:e.target.value})},i.state={noContentFoundMessage:"No building found in selected folder",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,searchKey:"",filterOption:"All buildings",allBuilding:_.a,buildingList:_.a,currentBuilding:null,selectedSubBuilding:null,selectedBuilding:null,selectedbuildings:0,addBuildingState:!1},i}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.state,a=e.buildingList,i=e.alertMessage,d=e.showMessage,n=e.noContentFoundMessage;return u.a.createElement("div",{className:"app-wrapper"},u.a.createElement("div",{className:"module-box content-margin-auto"},u.a.createElement("div",{className:"module-box-content"},u.a.createElement(y.a,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},0===a.length?u.a.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},n):this.showBuildings(this.state)))),u.a.createElement(m.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:d,autoHideDuration:3e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:u.a.createElement("span",{id:"message-id"},i)}))}}]),a}(r.Component);a.default=Object(c.c)(function(e){return{width:e.settings.width}})(f)},930:function(e,a,i){"use strict";a.a=[{id:1457690400,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690400-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690400-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690400-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1},{id:1457690401,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690401-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690401-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690401-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1},{id:1457690402,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690402-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690402-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690402-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1},{id:1457690403,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690403-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690403-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690403-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1},{id:1457690404,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690404-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690404-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690404-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1},{id:1457690405,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690405-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690405-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690405-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1},{id:1457690406,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690406-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690406-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690406-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1},{id:1457690407,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690407-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690407-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690407-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1},{id:1457690408,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690408-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690408-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690408-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1},{id:1457690409,building_name:"BuildingDetail 12345",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,subBuildingList:[{id:"1457690409-1",building_name:"Body 1",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690409-2",building_name:"Body 2",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1},{id:"1457690409-3",building_name:"Body 3",user_name:"Via della Ghiaia",user_address:"106121 PERUGIA (PG)",building_report:10,selected:!1}],selected:!1}]}}]);
//# sourceMappingURL=15.6e162dae.chunk.js.map