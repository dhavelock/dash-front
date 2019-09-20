import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

import {
  fetchLists,
  showAddListModal
} from "../actions/todo";

import TodoItem from "./TodoItem";
import AddListModal from "./modals/AddListModal"

const styles = {
  title: {
    backgroundColor: "#F5F5F5",
    color: "#212121"
  },
  root: {
    width: "100%",
    backgroundColor: "#F5F5F5"
  }
};

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

  onClickPlus() {
    this.props.showAddListModal();
  }

  render() {
    if (this.props.lists.length === 0) {
      return <div />;
    }

    const list = this.props.lists[this.state.currentList]; // take first list

    return (
      <div style={styles.title}>
        <div>
          <AddListModal list={this.state.currentList} />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography style={{ paddingLeft: "5px"}}>{list.name}</Typography>
            <div>
              <IconButton size="medium" onClick={this.onClickPlus.bind(this)}>
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

        <List style={styles.root}>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
