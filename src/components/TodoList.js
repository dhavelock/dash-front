import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchLists } from "../actions/todo";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    currentList: 0
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    if (this.props.lists.length === 0) {
      return <div />
    }

    const list = this.props.lists[1]; // take first list

    return (
      <div>
        Title: {list.name}
        <br />
        Items:
        {list.items.map((item, index) => {
          console.log(list);
          return <TodoItem item={item} key={index} />;
        })}
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
  return bindActionCreators({ fetchLists }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
