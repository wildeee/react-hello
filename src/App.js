import React, { Component } from 'react';
import ModalUsername from './ModalUsername.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <ModalUsername showModal={true} />
    );
  }
}

export default App;