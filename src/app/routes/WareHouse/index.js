import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import buildingList from "../BuildingPage/data/buildingList";
import AppModuleHeader from "components/AppModuleHeader/index";
import CustomScrollbars from "util/CustomScrollbars";
import WareHoustList from "./WareHoustList";
import AddWareHouse from "./AddWareHouse";

class WareHouse extends Component {
  SideBar = () => {
    return (
      <div className="module-side">
        <div className="module-side-header">
          <div className="module-logo">
            <span>WareHouses</span>
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
                onClick={this.onAddWareHouse}
              >
                <span>{"New WareHouse"}</span>
              </Button>
            </div>
          </CustomScrollbars>
        </div>
      </div>
    );
  };

  onBuildingItemSelect(building) {
    let currentBuilding = this.getBuilding(1457690400);
    this.setState({
      subBuildingList: currentBuilding.subBuildingList,
      loader: true,
    });
    setTimeout(() => {
      this.setState({ loader: false });
    }, 1500);
  }

  onSubBuildingItemSelect(subBuilding) {
    let selectedSubBuilding = this.getSubBuilding(subBuilding.id);
    this.setState({
      selectedSubBuilding: selectedSubBuilding,
      loader: true,
    });
    setTimeout(() => {
      this.setState({ loader: false });
    }, 1500);
  }
  onAddWareHouse = () => {
    this.setState({ addWareHouse: true });
  };
  onClose = () => {
    this.setState({ addWareHouse: false });
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No body found in this building",
      alertMessage: "",
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      searchUser: "",
      filterOption: "All buildings",
      buildingList: buildingList,
      subBuildingList: null,
      selectedSubBuilding: null,
      selectedBuilding: null,
      selectedSubBuildings: 0,
      addBuildingState: false,
      addWareHouse: false,
    };
  }
  componentDidMount() {
    this.onBuildingItemSelect();
  }

  getBuilding(id) {
    return buildingList.find((building) => building.id === id);
  }

  getSubBuilding(id) {
    return this.state.subBuildingList.find(
      (subBuilding) => subBuilding.id === id
    );
  }
  updateBuilding(evt) {
    this.setState({
      searchUser: evt.target.value,
    });
    this.filterBuilding(evt.target.value);
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState,
    });
  }
  onSave = () => {};
  onSubBuildingSelect = (data) => {
    data.selected = !data.selected;
    let selectedSubBuildings = 0;
    const subBuildingList = this.state.subBuildingList.map((building) => {
      if (building.selected) {
        selectedSubBuildings++;
      }
      if (building.id === data.id) {
        if (building.selected) {
          selectedSubBuildings++;
        }
        return data;
      } else {
        return building;
      }
    });
    this.setState({
      selectedSubBuildings: selectedSubBuildings,
      subBuildingList: subBuildingList,
    });
  };
  getAllSubBuilding = () => {
    let subBuildingList = this.state.subBuildingList.map((building) =>
      building
        ? {
            ...building,
            selected: true,
          }
        : building
    );
    this.setState({
      selectedSubBuildings: subBuildingList.length,
      subBuildingList: subBuildingList,
    });
  };
  getUnselectedAllSubBuilding = () => {
    let subBuildingList = this.state.subBuildingList.map((building) =>
      building
        ? {
            ...building,
            selected: false,
          }
        : building
    );
    this.setState({
      selectedSubBuildings: 0,
      subBuildingList: subBuildingList,
    });
  };
  onAllSubBuildingSelect() {
    const selectAll =
      this.state.selectedSubBuildings < this.state.subBuildingList.length;
    if (selectAll) {
      this.getAllSubBuilding();
    } else {
      this.getUnselectedAllSubBuilding();
    }
  }
  onDeleteSelectedBuilding = () => {
    const subBuildingList = this.state.subBuildingList.filter(
      (building) => !building.selected
    );
    this.setState({
      alertMessage: "BuildingDetail Deleted Successfully",
      showMessage: true,
      subBuildingList: subBuildingList,
      selectedSubBuildings: 0,
    });
  };
  showWareHouses = ({ subBuildingList, buildingList }) => {
    return (
      <WareHoustList
        subBuildingList={subBuildingList}
        onSubBuildingItemSelect={this.onSubBuildingItemSelect.bind(this)}
        onSubBuildingSelect={this.onSubBuildingSelect.bind(this)}
      />
    );
  };

  render() {
    const {
      subBuildingList,
      addWareHouse,
      selectedSubBuildings,
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
              {this.SideBar()}
            </Drawer>
          </div>
          <div className="app-module-sidenav d-none d-xl-flex">
            {this.SideBar()}
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
                onChange={this.updateBuilding.bind(this)}
                value={this.state.searchUser}
              />
            </div>
            <div className="module-box-content">
              <div className="module-box-topbar">
                <Checkbox
                  color="primary"
                  indeterminate={
                    selectedSubBuildings > 0 &&
                    selectedSubBuildings < subBuildingList.length
                  }
                  checked={selectedSubBuildings > 0}
                  onChange={this.onAllSubBuildingSelect.bind(this)}
                  value="SelectMail"
                />

                {selectedSubBuildings > 0 && (
                  <IconButton
                    className="icon-btn"
                    onClick={this.onDeleteSelectedBuilding.bind(this)}
                  >
                    <i className="zmdi zmdi-delete" />
                  </IconButton>
                )}
              </div>
              <CustomScrollbars
                className="module-list-scroll scrollbar"
                style={{
                  height:
                    this.props.width >= 1200
                      ? "calc(100vh - 265px)"
                      : "calc(100vh - 245px)",
                }}
              >
                {subBuildingList == null ? (
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                ) : (
                  this.showWareHouses(this.state)
                )}
              </CustomScrollbars>
            </div>
          </div>
        </div>
        <AddWareHouse
          open={addWareHouse}
          onSave={this.onSave}
          onClose={this.onClose}
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
export default withRouter(connect(mapStateToProps)(WareHouse));
