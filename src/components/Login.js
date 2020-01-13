import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { authLogin } from "../actions/auth";

import Button from "@material-ui/core/Button";

import { renderTextField } from "./fields/RenderField";

class Login extends Component {
  onSubmit(values) {
    this.props.authLogin(values.username, values.password);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          <Field name="username" label="Username" component={renderTextField} />
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
  form: "loginForm"
})(connect(mapStateToProps, mapDispatchToProps)(Login));
