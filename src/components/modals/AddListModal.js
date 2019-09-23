import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import {
  showAddListModal,
  hideAddListModal,
  addTodoItem
} from "../../actions/todo";
import { renderTextField } from "../fields/RenderField";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class AddListModal extends Component {
  onSubmit(values) {
    const data = {
      ...values,
      list: this.props.list
    };
    this.props.addTodoItem(data);
  }

  render() {
    const { handleSubmit } = this.props;
    const open = this.props.addListModal;

    console.log(this.props.list);

    return (
      <div>
        <Dialog key={this.props.list} open={open===this.props.list} onClose={this.props.hideAddListModal}>
          <DialogTitle id="form-dialog-title">Add a list item {this.props.list}</DialogTitle>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <DialogContent>
              <Field name="title" label="Title" component={renderTextField} />
              <Field
                name="description"
                label="Description"
                component={renderTextField}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.hideAddListModal} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Add
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addListModal: state.todo.addListModal,
    lists: state.todo.lists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { showAddListModal, hideAddListModal, addTodoItem },
    dispatch
  );
}

export default reduxForm({
  form: "addListForm" // a unique identifier for this form
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddListModal)
);
