import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

import { fetchLists, showAddListModal } from "../actions/todo";

import TodoItem from "./TodoItem";
import AddListModal from "./modals/AddListModal";

const styles = theme => ({
  root: {
    width: "250px",
    backgroundColor: theme.palette.background.paper
  }
});

class TodoList extends Component {
  state = {
    currentList: 0
  };

  componentDidMount() {
    this.props.fetchLists();
  }

  onClickRight() {
    if (this.state.currentList < this.props.lists.length - 1) {
      this.setState({ currentList: this.state.currentList + 1 });
    }
  }

  onClickLeft() {
    if (this.state.currentList > 0) {
      this.setState({ currentList: this.state.currentList - 1 });
    }
  }

  onClickPlus(list) {
    this.props.showAddListModal(list);
  }

  render() {
    if (this.props.lists.length === 0) {
      return <div />;
    }

    const list = this.props.lists[this.state.currentList]; // take first list
    const { classes } = this.props;

    return (
      <div>
        <div>
          <AddListModal list={list.id} />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography style={{ paddingLeft: "5px" }}>{list.name}</Typography>
            <div>
              <IconButton size="medium" onClick={() => this.onClickPlus(list.id)}>
                <Icon size="medium">add</Icon>
              </IconButton>
              <IconButton
                aria-label="delete"
                size="medium"
                disabled={this.state.currentList === 0}
                onClick={this.onClickLeft.bind(this)}
              >
                <KeyboardArrowLeft fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="medium"
                disabled={
                  this.state.currentList === this.props.lists.length - 1
                }
                onClick={this.onClickRight.bind(this)}
              >
                <KeyboardArrowRight fontSize="inherit" />
              </IconButton>
            </div>
          </Grid>
        </div>

        <List className={classes.root}>
          {list.items.map((item, index) => {
            return <TodoItem item={item} key={index} />;
          })}
        </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.todo.lists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLists, showAddListModal }, dispatch);
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);
