import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import dotenv from "dotenv";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "assets/vendors/style";
import defaultTheme from "./themes/defaultTheme";
import AppLocale from "../lngProvider";

import MainApp from "app/index";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LoadComponent from "components/LoadComponent";
import { setInitUrl } from "actions/Auth";
import RTL from "util/RTL";
import asyncComponent from "util/asyncComponent";
import NoticeBoard from "./NoticeBoard";
import { hideMessage } from "actions/Alert";

library.add(fab, fas);

const RestrictedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

class App extends Component {
  componentWillMount() {
    dotenv.config();
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    if (this.props.initURL === "") {
      this.props.setInitUrl(this.props.history.location.pathname);
    }
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
  }

  render() {
    const {
      match,
      location,
      locale,
      authUser,
      initURL,
      isDirectionRTL,
      showMessage,
      alertMessage,
      loader,
    } = this.props;
    if (location.pathname === "/") {
      if (!authUser) {
        return <Redirect to={"/signin"} />;
      } else {
        switch (authUser.user.user_type) {
          case "admin":
            return <Redirect to={"/app/home-page"} />;
          case "maintainer":
            return <Redirect to={"/app/maintainer"} />;
          case "sub_worker":
            return <Redirect to={"/app/s-worker"} />;
          case "user":
            return <Redirect to={"/app/user"} />;
          default:
            return <Redirect to={"/app/user"} />;
        }
      }
    }
    const applyTheme = createMuiTheme(defaultTheme);

    if (isDirectionRTL) {
      applyTheme.direction = "rtl";
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
      applyTheme.direction = "ltr";
    }

    const currentAppLocale = AppLocale[locale.locale];
    return (
      <MuiThemeProvider theme={applyTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          >
            <RTL>
              <div className="app-main">
                <Switch>
                  <RestrictedRoute
                    path={`${match.url}app`}
                    authUser={authUser}
                    component={MainApp}
                  />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/notice-board" component={NoticeBoard} />
                  <Route
                    component={asyncComponent(() =>
                      import("components/Error404")
                    )}
                  />
                </Switch>
                {showMessage && NotificationManager.error(alertMessage)}
                <NotificationContainer />
                {loader && <LoadComponent />}
              </div>
            </RTL>
          </IntlProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ settings, auth, alert }) => {
  const { sideNavColor, locale, isDirectionRTL } = settings;
  const { authUser, initURL } = auth;
  const { alertMessage, showMessage, loader } = alert;
  return {
    sideNavColor,
    locale,
    isDirectionRTL,
    authUser,
    initURL,
    alertMessage,
    showMessage,
    loader,
  };
};

const user = {
  user: {
    id: 1,
    email: "admin@geminismart.net",
    uid: "admin@geminismart.net",
    provider: "email",
    user_type: "admin",
    first_name: "",
    last_name: "",
    picture: "",
    business_name: "",
    address: "",
    home_number: "",
    zip_code: "",
    city: "",
    province: "",
    cod_fisc: "",
    p_lva: "",
    mobile: "",
    phone: "",
    pec: "",
    cuu: "",
    specialization: "",
    building: "",
    created_at: "2019-09-02T06:53:01.291Z",
    updated_at: "2021-02-04T14:36:55.420Z",
    category_id: 1,
    count_building_to_manage: null,
  },
  headers: {
    "access-token": "H59hgSS8_Z4RhxCflg0EPw",
    "cache-control": "max-age=0, private, must-revalidate",
    client: "Pr1fuRdmsYlvjKdcPxwx3A",
    "content-type": "application/json; charset=utf-8",
    uid: "admin@geminismart.net",
  },
  isRemember: false,
};

const user1 = {
  user: {
    id: 9,
    email: "test@test.com",
    user_type: "",
    first_name: "",
    last_name: "",
    picture: "",
    business_name: "",
    address: "",
    home_number: "",
    zip_code: "",
    city: "",
    province: "",
    cod_fisc: "",
    p_lva: "",
    mobile: "",
    phone: "",
    pec: "",
    cuu: "",
    specialization: "",
    building: "",
    created_at: "2021-02-04T14:43:42.363Z",
    updated_at: "2021-02-04T14:43:43.735Z",
    provider: "email",
    uid: "test@test.com",
    category_id: null,
    count_building_to_manage: null,
  },
  headers: {
    "access-token": "ngVJ8NlpGllNzUf9svUSKA",
    "cache-control": "max-age=0, private, must-revalidate",
    client: "PoEihq9F7_3yhur-6ymKdg",
    "content-type": "application/json; charset=utf-8",
    uid: "test@test.com",
  },
};

export default connect(mapStateToProps, { setInitUrl, hideMessage })(App);
