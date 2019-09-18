import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import GoogleLogin from "react-google-login";
import axios from "axios";

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
      <div>
        <Button variant="outlined" onClick={this.onClick.bind(this)}>
          Add Calendar
        </Button>
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={this.responseGoogle.bind(this)}
          onFailure={this.responseGoogle.bind(this)}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default Header;
