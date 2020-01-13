import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { authSignup } from "../actions/auth";

import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import { renderTextField } from "./fields/RenderField";

class Signup extends Component {
  state = {
    error: ""
  };

  onSubmit(values) {
    if (values.password1 === values.password2) {
      this.setState({ error: "" });
      this.props.authSignup(
        values.username,
        values.password1,
        values.password2
      );
    } else {
      this.setState({ error: "Passwords do not match" });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          <Field name="username" label="Email" component={renderTextField} />
          <Field
            name="password1"
            label="Password"
            type="password"
            component={renderTextField}
          />
          <Field
            name="password2"
            label="Confirm Password"
            type="password"
            component={renderTextField}
          />
          <Button type="submit" color="primary">
            Sign Up
          </Button>
        </form>
        {this.state.error !== "" && (
          <Typography variant="caption" style={{color: "red"}}>
            {this.state.error}
          </Typography>
        )}
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
  return bindActionCreators({ authSignup }, dispatch);
}

export default reduxForm({
  form: "signupForm"
})(connect(mapStateToProps, mapDispatchToProps)(Signup));
