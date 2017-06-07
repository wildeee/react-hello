import React, { Component } from 'react';
import ModalUsername from './ModalUsername.js';
import MessagesArea from './MessagesArea.js';
import ChatInput from './ChatInput.js'
import './App.css';

let MESSAGES = [
	{sender: 'Wilde', message: 'Opa, tudo bom?', yourMessage: true, timestamp: new Date(), key: 1},
	{sender: 'Teste', message: 'eae, sussa?', yourMessage: false, timestamp: new Date(), key: 2},
	{sender: 'Wilde', message: 'belezinha manolo', yourMessage: true, timestamp: new Date(), key: 3},
	{sender: 'Teste', message: 'e aí, como vai a vida?', yourMessage: false, timestamp: new Date(), key: 4},
	{sender: 'Wilde', message: 'Tranquilão velho, e ae?', yourMessage: true, timestamp: new Date(), key: 5},
	{sender: 'Wilde', message: 'A mãe melhorou?', yourMessage: true, timestamp: new Date(), key: 6},
	{sender: 'Teste', message: 'Ah, deu uma melhorada sim', yourMessage: false, timestamp: new Date(), key: 7},
	{sender: 'Wilde', message: 'Que bom cara, estava preocupado', yourMessage: true, timestamp: new Date(), key: 8}
];

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: 'wilde'
		};
	};

	onUsernameChange = (username) => {
		this.setState({ username: username });
	};

	render() {
		const styleChat = 'navbar navbar-default navbar-fixed-bottom body-padding';
		return (
			<div className="messages-area-container">
				<ModalUsername showModal={false} username={this.state.username} onUsernameChange={this.onUsernameChange} />
				<MessagesArea messages={MESSAGES} />
				<ChatInput className={styleChat} />
			</div>
		);
	}
}

export default App;