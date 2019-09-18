import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

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
  onDelete() {}

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

export default TodoItem;
