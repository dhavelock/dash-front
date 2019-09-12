import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  item: {
    backgroundColor: "#B0BEC5",
    color: "#FFFFFF"
  },
  secondary: {
    display: "inline",
    color: "#FAFAFA"
  }
};

class TodoItem extends Component {
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
        </ListItem>
        <Divider component="li" />
      </div>
    );
  }
}

export default TodoItem;
