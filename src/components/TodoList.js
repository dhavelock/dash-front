import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    items: ["1", "2", "3"]
  };

  render() {
    return (
      <div>
        To do list goes here
        {this.state.items.map(() => {
          return <TodoItem />;
        })}
      </div>
    );
  }
}

export default TodoList;
