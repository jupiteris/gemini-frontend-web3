import React, { Component } from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import buildingList from "./data/buildingList";
import BuildingList from "./BuildingList";
import CustomScrollbars from "util/CustomScrollbars";

class NoticeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No building found in selected folder",
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

  showBuildings = ({ currentBuilding, buildingList }) => {
    return <BuildingList buildingList={buildingList} />;
  };
  onSearch = (e) => {
    this.setState({ searchKey: e.target.value });
  };

  render() {
    const {
      buildingList,
      alertMessage,
      showMessage,
      noContentFoundMessage,
    } = this.state;
    return (
      <div className="app-wrapper">
        <div className="module-box content-margin-auto">
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
export default connect(mapStateToProps)(NoticeBoard);
