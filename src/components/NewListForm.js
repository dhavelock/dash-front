import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { addTodoList } from "../actions/todo";
import { renderTextField } from "./fields/RenderField";

import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class NewListForm extends Component {
  state = {
    showInput: false
  }

  onSubmit(values) {
    this.props.addTodoList(values);
    this.setState({ showInput: false })
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Grid container justify="flex-start" spacing={2}>
          <Grid item>
            <IconButton
              size="medium"
              onClick={() => this.setState({ showInput: !this.state.showInput })}
            >
              <Icon size="medium">add</Icon>
            </IconButton>
          </Grid>
          {
            this.state.showInput &&
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Grid container justify="flex-start" alignItems="center" spacing={2}>
            <Grid item>
              <Field
                name="name"
                label="List Name"
                component={renderTextField}
              />
            </Grid>
            <Grid item>
              <Button variant="outlined" type="submit" color="primary">
                Create List
              </Button>
            </Grid>
            </Grid>
          </form>
        }
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodoList }, dispatch);
}

export default reduxForm({
  form: "newListForm"
})(connect(mapStateToProps, mapDispatchToProps)(NewListForm));
