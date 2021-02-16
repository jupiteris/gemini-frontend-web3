import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormControl from "@material-ui/core/FormControl";
import InputMask from "react-input-mask";

import BootstrapInput from "components/BootstrapInput";

class NewRegister extends React.Component {
  constructor(props) {
    super(props);
    // const { id, category, name, surName, address, homeNumber, cap, city, province, codFisc, mobile, email, phone, otherCategory} = props.register;
    this.state = {
      user_type: props.user_type,
      id: "",
      category: "",
      name: "",
      surName: "",
      address: "",
      homeNumber: "",
      cap: "",
      city: "",
      province: "",
      codFisc: "",
      mobile: "",
      email: "",
      phone: "",
      pec: "",
      cuu: "",
      Plva: "",
      userID: "",
      password: "",
      otherCategory: [],
      building: "",
    };
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
  beforeMaskedValueChangeMobile = (name) => (newState, oldState, userInput) => {
    let { value } = newState;
    let selection = newState.selection;
    let cursorPosition = selection ? selection.start : null;

    // keep minus if entered by user
    if (name === "mobile") {
      if (
        value.endsWith("-") &&
        userInput !== "-" &&
        !this.state.mobile.endsWith("-")
      ) {
        if (cursorPosition === value.length) {
          cursorPosition--;
          selection = { start: cursorPosition, end: cursorPosition };
        }
        value = value.slice(0, -1);
      }
    } else {
      if (
        value.endsWith("-") &&
        userInput !== "-" &&
        !this.state.phone.endsWith("-")
      ) {
        if (cursorPosition === value.length) {
          cursorPosition--;
          selection = { start: cursorPosition, end: cursorPosition };
        }
        value = value.slice(0, -1);
      }
    }

    return {
      value,
      selection,
    };
  };

  render() {
    const { onRegisterClose, open, register } = this.props;
    const {
      id,
      category,
      name,
      surName,
      address,
      homeNumber,
      cap,
      city,
      province,
      codFisc,
      mobile,
      email,
      phone,
      otherCategory,
      pec,
      cuu,
      Plva,
      userID,
      password,
      building,
    } = this.state;

    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {register === null ? "New Register" : "Save Register"}
          <IconButton className="text-white" onClick={onRegisterClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content p-lg-5">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <form className="row" noValidate autoComplete="off">
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">
                      Category
                    </label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100">
                      <Select
                        value={category}
                        onChange={this.handleChange("category")}
                        input={<BootstrapInput />}
                      >
                        <MenuItem value={"category1"}>ELECTRICIAN</MenuItem>
                        <MenuItem value={"category2"}>BRICKLAYER</MenuItem>
                        <MenuItem value={"category3"}>PAINTER</MenuItem>
                        <MenuItem value={"category4"}>BLACKSMITH</MenuItem>
                        <MenuItem value={"category5"}>CHIMNEY SWEEP</MenuItem>
                        <MenuItem value={"category6"}>PLUMBER</MenuItem>
                        <MenuItem value={"category7"}>PURGE SEWERAGE</MenuItem>
                        <MenuItem value={"category8"}>CLEANING</MenuItem>
                        <MenuItem value={"category9"}>RODENT CONTROL</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Name</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Surname</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Address</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">
                      Home Number
                    </label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">CAP</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">City</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">
                      Province
                    </label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">
                      Cod.Fisc.
                    </label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">P.lva</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Mobile</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <InputMask
                        mask="(3\9) 3999-999-999"
                        maskChar={null}
                        value={mobile}
                        onChange={this.handleChange("mobile")}
                        beforeMaskedValueChange={this.beforeMaskedValueChangeMobile(
                          "mobile"
                        )}
                      >
                        {(inputProps) => (
                          <input
                            {...inputProps}
                            type="tel"
                            className="form-control form-control-lg"
                          />
                        )}
                      </InputMask>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Phone</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <InputMask
                        mask="(3\9) 0999-999-999"
                        maskChar={null}
                        value={phone}
                        onChange={this.handleChange("phone")}
                        beforeMaskedValueChange={this.beforeMaskedValueChangeMobile(
                          "phone"
                        )}
                      >
                        {(inputProps) => (
                          <input
                            {...inputProps}
                            type="tel"
                            className="form-control form-control-lg"
                          />
                        )}
                      </InputMask>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Email</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">PEC</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">CUU</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input className="form-control form-control-lg" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button
            disabled={name === ""}
            variant="contained"
            color="primary"
            onClick={() => {
              onRegisterClose();
            }}
          >
            Save Sub Worker
          </Button>
        </div>
      </Modal>
    );
  }
}

export default NewRegister;
