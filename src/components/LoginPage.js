import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { authLogin } from "../actions/auth";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import Login from "./Login";
import Signup from "./Signup";

import logo from "../static/images/react_logo.png";

class LoginPage extends Component {
  state = {
    login: true
  };

  onToggle() {
    this.setState({ login: !this.state.login });
  }

  render() {
    const toggleText = this.state.login ? "Sign up here!" : "Log in here!";
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <img
              style={{ width: "60px", height: "60px" }}
              alt="logo"
              src={logo}
            />
          </Grid>
          <Grid item>{this.state.login ? <Login /> : <Signup />}</Grid>
          <Grid item>
            <Link
              component="button"
              variant="body2"
              onClick={this.onToggle.bind(this)}
            >
              {toggleText}
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    view: state.todo.view
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authLogin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
