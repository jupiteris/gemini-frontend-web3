import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import BuildingList from "./BuildingList";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddBuilding from "./AddBuilding";
import CustomScrollbars from "util/CustomScrollbars";

const buildingList = [1, 2, 3, 4, 5];
class BuildingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No building found",
      alertMessage: "",
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      searchKey: "",
      filterOption: "All buildings",
      allBuilding: buildingList,
      buildingList: buildingList,
      currentBuilding: null,
      selectedSubBuilding: null,
      selectedBuilding: null,
      selectedbuildings: 0,
      addBuildingState: false,
    };
  }

  BuildingSideBar = () => {
    return (
      <div className="module-side">
        <div className="module-side-header">
          <div className="module-logo">
            <span>BUILDING</span>
          </div>
        </div>

        <div className="module-side-content">
          <CustomScrollbars
            className="module-side-scroll scrollbar"
            style={{
              height:
                this.props.width >= 1200
                  ? "calc(100vh - 200px)"
                  : "calc(100vh - 80px)",
            }}
          >
            <div className="module-add-task">
              <Button
                className="jr-btn btn-block"
                variant="contained"
                color="primary"
                aria-label="add"
                onClick={this.onAddBuilding}
              >
                <span>{"Add Building"}</span>
              </Button>
            </div>
          </CustomScrollbars>
        </div>
      </div>
    );
  };

  onAddBuilding = () => {
    this.setState({ addBuildingState: true });
  };
  onBuildingClose = () => {
    this.setState({ addBuildingState: false });
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState,
    });
  }

  showBuildings = ({ currentBuilding, buildingList }) => {
    return <BuildingList buildingList={buildingList} />;
  };
  onSearch = (e) => {
    this.setState({ searchKey: e.target.value });
  };

  render() {
    const {
      user,
      buildingList,
      addBuildingState,
      selectedbuildings,
      alertMessage,
      showMessage,
      noContentFoundMessage,
      currentBuilding,
    } = this.state;
    return (
      <div className="app-wrapper">
        <div className="app-module animated slideInUpTiny animation-duration-3">
          <div className="d-block d-xl-none">
            <Drawer
              open={this.state.drawerState}
              onClose={this.onToggleDrawer.bind(this)}
            >
              {this.BuildingSideBar(user)}
            </Drawer>
          </div>
          <div className="app-module-sidenav d-none d-xl-flex">
            {this.BuildingSideBar(user)}
          </div>

          <div className="module-box">
            <div className="module-box-header">
              <IconButton
                className="drawer-btn d-block d-xl-none"
                aria-label="Menu"
                onClick={this.onToggleDrawer.bind(this)}
              >
                <i className="zmdi zmdi-menu" />
              </IconButton>
              <AppModuleHeader
                placeholder="Search here..."
                notification={false}
                apps={false}
                value={this.state.searchKey}
                onChange={this.onSearch}
              />
            </div>
            <div className="module-box-content">
              <CustomScrollbars
                className="module-list-scroll scrollbar"
                style={{
                  height:
                    this.props.width >= 1200
                      ? "calc(100vh - 265px)"
                      : "calc(100vh - 245px)",
                }}
              >
                {buildingList.length === 0 ? (
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                ) : (
                  this.showBuildings(this.state)
                )}
              </CustomScrollbars>
            </div>
          </div>
        </div>

        <AddBuilding
          open={addBuildingState}
          building={{}}
          onBuildingClose={this.onBuildingClose}
        />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={showMessage}
          autoHideDuration={3000}
          onClose={this.handleRequestClose}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">{alertMessage}</span>}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { width } = settings;
  return { width };
};
export default connect(mapStateToProps)(BuildingPage);
