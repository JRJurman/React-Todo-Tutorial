import React, { Component } from 'react';

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  updateTodo = event => {
    this.setState({
      value: event.target.value.toUpperCase()
    })
  }

  alertValue = event => {
    if (event.key === 'Enter') {
      this.props.createTodo(event.target.value)
    }
  }

  render() {
    return (
      <div className="new-todo">
        <input placeholder="New Todo"
          value={this.state.value}
          onChange={this.updateTodo}
          onKeyUp={this.alertValue} />
      </div>
    );
  }
}

export default NewTodo;
