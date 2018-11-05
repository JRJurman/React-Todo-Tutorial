import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <input type="checkbox" />
        {this.props.children}
      </div>
    );
  }
}

export default Todo;
