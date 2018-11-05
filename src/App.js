import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodo from './elements/NewTodo';
import Todo from './elements/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NewTodo />
          <Todo isChecked>Element</Todo>
          <Todo isChecked>Props</Todo>
          <Todo>State</Todo>
        </header>
      </div>
    );
  }
}

export default App;
