import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";

import { standard } from "./themes"

const theme = createMuiTheme(standard);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    );
  }
}

export default App;
