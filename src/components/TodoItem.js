import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import moment from "moment";

import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Grow from "@material-ui/core/Grow";
import Card from "@material-ui/core/Card";

import { deleteTodoItem } from "../actions/todo";
// import color from "../themes/helpers/ItemColor";

const styles = theme => ({
  card: {
    padding: "0px",
    margin: "8px",
    "&:hover": {
      opacity: "0.5 !important"
    }
  }
});

function color(deadline, created) {
  const now = moment();
  var period = (deadline - created) / (1000 * 3600 * 24);
  var days = (now - created) / (1000 * 3600 * 24);
  var factor = days > period ? 1.0 : days / period;

  console.log(factor);

  var r1 = 99.0;
  var r2 = 255.0;
  var g1 = 255.0;
  var g2 = 65.0;
  var b1 = 33.0;
  var b2 = 0.0;

  var r = Math.round(factor * (r2 - r1) + r1).toString(16);
  var rHex = r.length === 1 ? "0" + r : r;
  var g = Math.round(factor * (g2 - g1) + g1).toString(16);
  var gHex = g.length === 1 ? "0" + g : g;
  var b = Math.round(factor * (b2 - b1) + b1).toString(16);
  var bHex = b.length === 1 ? "0" + b : b;

  return "#" + rHex + gHex + bHex;
}

class TodoItem extends Component {
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

    const itemColor = item.deadline
      ? color(moment(item.deadline), moment(item.timestamp))
      : "#66b3ff";

    const deadlineStr =
      item.deadline == null
        ? ""
        : moment(item.deadline).format("MMMM Do, h:mm a");

    const background = {
      background: itemColor
    };

    return (
      <Grow
        in={true}
        timeout={{
          enter: 500,
          exit: 500
        }}
      >
        <Card
          style={background}
          className={classes.card}
          onClick={this.onClick.bind(this)}
        >
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
                  {item.description !== "" && <br />}
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {deadlineStr}
                  </Typography>
                </React.Fragment>
              }
            />
            <IconButton size="small" onClick={this.onDelete.bind(this)}>
              <Icon size="small">clear</Icon>
            </IconButton>
            {/* <IconButton size="small" onClick={this.onEdit.bind(this)}>
              <Icon size="small">more_vert</Icon>
            </IconButton> */}
          </ListItem>
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
  connect(mapStateToProps, mapDispatchToProps)(TodoItem)
);
