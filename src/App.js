import React, { Component } from 'react';
import Example from './Example.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Example showModal={true} />
    );
  }
}

export default App;