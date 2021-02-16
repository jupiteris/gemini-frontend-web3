import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import {connect} from 'react-redux'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';

class UserInfo extends React.Component {

  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({open: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
      const { user } = this.props;
    return (
      <div className="user-profile d-flex flex-row align-items-center">
        <Avatar
          alt=''
          src={'https://asia-mag.com/wp-content/uploads/2019/06/zhangitanai7.png'}
          className="user-avatar "
        />
        <div className="user-detail">
          <h4 className="user-name" onClick={this.handleClick}>{user.first_name + " " + user.last_name}<i
            className="zmdi zmdi-caret-down zmdi-hc-fw align-middle"/>
          </h4>
        </div>
        <Menu className="user-info"
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onClose={this.handleRequestClose}
              PaperProps={{
                style: {
                  minWidth: 120,
                  paddingTop: 0,
                  paddingBottom: 0
                }
              }}
        >
          <MenuItem onClick={this.handleRequestClose}>
            <i className="zmdi zmdi-account zmdi-hc-fw mr-2"/>
            <IntlMessages id="popup.profile"/>
          </MenuItem>
          <MenuItem onClick={() => {
            this.handleRequestClose();
            this.props.userSignOut()
          }}>
            <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2"/>

            <IntlMessages id="popup.logout"/>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({settings, auth}) => {
  const {locale} = settings;
  const { user } = auth.authUser;
  return {locale, user}
};
export default connect(mapStateToProps, {userSignOut})(UserInfo);


