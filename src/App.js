import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodo from './elements/NewTodo';
import Todo from './elements/Todo';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {name: 'ELEMENTS', value: true},
        {name: 'PROPS', value: false}
      ]
    }
  }

  render() {
    const Todos = this.state.todos.map(todo => <Todo isChecked={todo.value}>{todo.name}</Todo>)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NewTodo />
          {Todos}
        </header>
      </div>
    );
  }
}

export default App;
