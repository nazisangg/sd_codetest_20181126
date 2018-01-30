import React, { Component } from 'react';
// import logo from '../assets/logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'





import './App.css';
import { TodoContainer } from './todo/todo-container';

class App extends Component {
  render() {
    return (
      <TodoContainer />
    );
  }
}

export default App;
