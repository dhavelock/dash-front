import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { item } = this.props

    return <div>{ item.title }</div>;
  }
}

export default TodoItem;
