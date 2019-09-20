import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";

import Calendar from "./Calendar";
import TodoList from "./TodoList";
import Header from "./Header";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={8}>
            <Calendar />
          </Grid>
          <Grid item xs={4}>
            <TodoList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addListModal: state.todo.addListModal
  };
}

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
