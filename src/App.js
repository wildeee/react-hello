import React, { Component } from 'react';
import ModalUsername from './ModalUsername.js';
import ChatInput from './ChatInput.js'
import './App.css';

class App extends Component {

	onModalExit = (username) => {
		this.setState({ username: username });
	}

	render() {
		return (
			<div className="body-padding">
				<ModalUsername showModal={false} onModalExit={this.onModalExit} />
				<ChatInput className="navbar navbar-default navbar-fixed-bottom body-padding"/>
			</div>
		);
	}
}

export default App;