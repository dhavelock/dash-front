import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Grow from "@material-ui/core/Grow";

import { deleteTodoItem } from "../actions/todo";

class TodoItem extends Component {
  state = {
    show: true
  };

  onDelete() {
    const { item } = this.props;
    const data = {
      id: item.id
    };
    this.props.deleteTodoItem(data);
  }

  render() {
    const { item } = this.props;

    return (
      <Grow
        in={this.state.show}
        timeout={{
          enter: 500,
          exit: 500
        }}
      >
        <div>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={item.title}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {item.description}
                  </Typography>
                </React.Fragment>
              }
            />
            <IconButton size="small" onClick={this.onDelete.bind(this)}>
              <Icon size="small">clear</Icon>
            </IconButton>
            <IconButton size="small">
              <Icon size="small">more_vert</Icon>
            </IconButton>
          </ListItem>
          <Divider component="li" />
        </div>
      </Grow>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTodoItem }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
