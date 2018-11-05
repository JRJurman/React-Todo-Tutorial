import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const elementStyle = {
      textDecoration: this.props.isChecked ? 'line-through' : ''
    }
    return (
      <div className="todo">
        <input type="checkbox" checked={this.props.isChecked} />
        <span style={elementStyle}>{this.props.children}</span>
      </div>
    );
  }
}

export default Todo;
