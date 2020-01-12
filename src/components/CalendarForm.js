import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { setCalendarUrl } from "../actions/account";
import { renderTextField } from "./fields/RenderField";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class CalendarForm extends Component {
  onSubmit(values) {
    const { calendar_url } = values;
    this.props.setCalendarUrl(calendar_url);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Grid container justify="flex-start" alignItems="center" spacing={2}>
            <Grid item>
              <Button variant="outlined" type="submit" color="primary">
                Set Url
              </Button>
            </Grid>
            <Grid item>
              <Field
                name="calendar_url"
                label="Calendar Url"
                component={renderTextField}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCalendarUrl }, dispatch);
}

export default reduxForm({
  form: "setCalendarUrlForm"
})(connect(mapStateToProps, mapDispatchToProps)(CalendarForm));
