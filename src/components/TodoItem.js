import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Grow from "@material-ui/core/Grow";
import Card from "@material-ui/core/Card";
import ButtonBase from '@material-ui/core/ButtonBase';

import { deleteTodoItem } from "../actions/todo";

const styles = theme => ({
  card: {
    padding: "0px",
    margin: "8px",
    '&:hover': {
      background: "#EEEEEE",
   },
  }
});

class TodoItem extends Component {
  state = {
    show: true
  };

  onClick() {
    // NOTE: This will also trigger on edit and delete clicks
    console.log("Card Click");
  }

  onEdit() {
    console.log("Edit Click");
  }

  onDelete() {
    const { item } = this.props;
    const data = {
      id: item.id
    };
    this.props.deleteTodoItem(data);
  }

  render() {
    const { item, classes } = this.props;

    return (
      <Grow
        in={this.state.show}
        timeout={{
          enter: 500,
          exit: 500
        }}
      >
        <Card className={classes.card} onClick={this.onClick.bind(this)}>
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
            <IconButton size="small" onClick={this.onEdit.bind(this)}>
              <Icon size="small">more_vert</Icon>
            </IconButton>
          </ListItem>
          {/* <Divider component="li" /> */}
        </Card>
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

TodoItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoItem)
);
