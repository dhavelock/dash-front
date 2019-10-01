import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GoogleLogin from "react-google-login";
import axios from "axios";

import { toggleView } from "../actions/todo";

import logo from "../static/images/react_logo.png";

// OAuth client id
const CLIENT_ID =
  "977909200493-ockp0clkj7jn2h1hteepv03j2obtembq.apps.googleusercontent.com";

// Api key
const API_KEY = "AIzaSyBqY4iBgonhZyDcruPRsJzukuoGZlezplI";

// API Call
const EVENTS_LIST_URL = `https://www.googleapis.com/calendar/v3/calendars/dylan.havelock%40gmail.com/events?key=${API_KEY}`;

class Header extends Component {
  onClick() {
    console.log("button click");
  }

  onClickView() {
    this.props.toggleView();
  }

  responseGoogle = response => {
    console.log(response);
    const accessToken = response.Zi.access_token;

    axios({
      method: "GET",
      url: EVENTS_LIST_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => {
        console.log("res 2", res);
      })
      .catch(err => {
        console.log("err 2", err);
      });
  };

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
            View
          </Button>
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.responseGoogle.bind(this)}
            onFailure={this.responseGoogle.bind(this)}
            cookiePolicy={"single_host_origin"}
            render={renderProps => (
              <Button
                variant="outlined"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Add Calendar
              </Button>
            )}
          />
        </Grid>
        <Grid item xs style={{ textAlign: "center" }}>
          <img
            style={{ width: "80px", height: "80px" }}
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
  return bindActionCreators({ toggleView }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
