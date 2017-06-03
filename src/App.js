import React, { Component } from 'react';
import ModalUsername from './ModalUsername.js';
import ChatInput from './ChatInput.js'
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: 'wilde'
		};
	};

	onUsernameChange = (username) => {
		console.log(username);
		this.setState({ username: username });
	};

	render() {
		return (
			<div className="body-padding">
				<ModalUsername showModal={true} onUsernameChange={this.onUsernameChange} />
				<ChatInput className="navbar navbar-default navbar-fixed-bottom body-padding"/>
			</div>
		);
	}
}

export default App;