import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import { deleteTodoItem } from "../actions/todo";

const styles = {
  item: {
    backgroundColor: "#B0BEC5",
    color: "#FFFFFF",
    width: "100%"
  },
  secondary: {
    display: "inline",
    color: "#FAFAFA"
  }
};

class TodoItem extends Component {
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
      <div>
        <ListItem style={styles.item} alignItems="flex-start">
          <ListItemText
            primary={item.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  style={styles.secondary}
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
