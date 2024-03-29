import React, { Component } from "react";
import { connect } from "react-redux";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";

import { standard } from "./themes"

const theme = createMuiTheme(standard);

class App extends Component {
  render() {
    const { token } = this.props.auth;

    return (
      <ThemeProvider theme={theme}>
        {
          token == null ?
          <LoginPage />
          :
          <Dashboard />
        }
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps, {}
)(App);
