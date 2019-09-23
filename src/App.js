import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";

const theme = createMuiTheme();

class App extends Component {
  render() {
    console.log(theme)
    return (
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    );
  }
}

export default App;
