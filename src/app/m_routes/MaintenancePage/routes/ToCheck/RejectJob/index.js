import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class RejectJob extends React.Component {
  constructor(props) {
    super(props);
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      levelFloor: "",
      intend: "",
      files: null,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeFile = (files) => {
    this.setState({ files: files });
  };
  updateDate = (name) => (date) => {
    if (date) {
      this.setState({ [name]: this.formatDate(date.toLocaleDateString()) });
    }
  };
  formatDate = (d) => {
    let date = new Date(d);
    let reformattedDate = [
      date.getFullYear(),
      ("0" + (date.getMonth() + 1)).slice(-2),
      ("0" + date.getDate()).slice(-2),
    ].join("-");
    return reformattedDate;
  };
  render() {
    const { onClose, open, rent } = this.props;
    const { id, levelFloor, intend, files } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {"Reject Job"}
          <IconButton
            className="text-white"
            onClick={() => onClose("rejectDialogVisible")}
          >
            <CloseIcon />
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">NOTE</label>
              </div>
              <div className="col-md-8 p-0">
                <textarea
                  className="form-control form-control-lg"
                  rows="6"
                  style={{
                    width: "100%",
                    height: 70,
                    marginTop: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}
                  placeholder="Description"
                  onChange={this.handleChange("notes")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button
            disabled={id === ""}
            variant="contained"
            color="primary"
            onClick={() => {
              onClose("rejectDialogVisible");
            }}
          >
            Reject
          </Button>
        </div>
      </Modal>
    );
  }
}

export default RejectJob;
