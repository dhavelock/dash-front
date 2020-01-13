import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { toggleView } from "../actions/todo";
import { authLogout } from "../actions/auth";

import logo from "../static/images/react_logo.png";

class Header extends Component {
  onClickView() {
    this.props.toggleView();
  }

  onClickLogout() {
    this.props.authLogout();
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs>
          <Button variant="outlined" onClick={this.onClickView.bind(this)}>
            Toggle
          </Button>
          <Button variant="outlined" onClick={this.onClickLogout.bind(this)}>
            Logout
          </Button>
        </Grid>
        <Grid item xs style={{ textAlign: "center" }}>
          <img
            style={{ width: "60px", height: "60px" }}
            alt="logo"
            src={logo}
          />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleView, authLogout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
