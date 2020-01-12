import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { authLogin } from "../actions/auth";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { renderTextField } from "./fields/RenderField";

import logo from "../static/images/react_logo.png";

class Login extends Component {
  onSubmit(values) {
    this.props.authLogin(values.username, values.password);
  }

  render() {
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Grid item>
              <img
                style={{ width: "60px", height: "60px" }}
                alt="logo"
                src={logo}
              />
            </Grid>
          </Grid>
          <Grid item>
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
              <Field
                name="username"
                label="Username"
                component={renderTextField}
              />
              <Field
                name="password"
                label="Password"
                type="password"
                component={renderTextField}
              />
              <Button type="submit" color="primary">
                Login
              </Button>
            </form>
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

export default reduxForm({
  form: "loginForm" // a unique identifier for this form
})(connect(mapStateToProps, mapDispatchToProps)(Login));
