import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: props.isChecked || false
    }
  }

  onCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const elementStyle = {
      textDecoration: this.state.checked ? 'line-through' : ''
    }
    return (
      <div className="todo" onClick={this.onCheck}>
        <input type="checkbox" checked={this.state.checked} readOnly />
        <span style={elementStyle}>{this.props.children}</span>
      </div>
    );
  }
}

export default Todo;
