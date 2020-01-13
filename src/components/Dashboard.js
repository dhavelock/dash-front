import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";

import Calendar from "./Calendar";
import CalendarForm from "./CalendarForm"
import TodoList from "./TodoList";
import Header from "./Header";
import ListView from "./ListView";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.view ? (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Calendar />
              <CalendarForm />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TodoList />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <ListView />
            </Grid>
          </Grid>
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

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
