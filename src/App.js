import React, { Component } from 'react';
import ModalUsername from './ModalUsername.js';
import MessagesArea from './MessagesArea.js';
import ChatInput from './ChatInput.js'
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import './App.css';

let key = 1;
let MESSAGES = [
	{sender: 'Wilde', message: 'Opa, tudo bom?', yourMessage: true, timestamp: new Date(), key: key++},
	{sender: 'Teste', message: 'eae, sussa?', yourMessage: false, timestamp: new Date(), key: key++},
	{sender: 'Wilde', message: 'belezinha manolo', yourMessage: true, timestamp: new Date(), key: key++},
	{sender: 'Teste', message: 'e aí, como vai a vida?', yourMessage: false, timestamp: new Date(), key: key++},
	{sender: 'Wilde', message: 'Tranquilão velho, e ae?', yourMessage: true, timestamp: new Date(), key: key++},
	{sender: 'Wilde', message: 'A mãe melhorou?', yourMessage: true, timestamp: new Date(), key: key++},
	{sender: 'Teste', message: 'Ah, deu uma melhorada sim', yourMessage: false, timestamp: new Date(), key: key++},
	{sender: 'Wilde', message: 'Que bom cara, estava preocupado', yourMessage: true, timestamp: new Date(), key: key++}
];

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			messages: MESSAGES,
			socket: io.connect(process.env.SOCKET_URL || 'http://localhost:8080')
		};
	};

	onUsernameChange = (username) => {
		this.setState({ username: username });
	};

	onMessageSend = (message) => {
		let messages = this.state.messages;
		let newMessage = {
			sender: this.state.username,
			message: message,
			yourMessage: true,
			timestamp: new Date(),
			key: key++
		};
		messages.push(newMessage);
		this.state.socket.emit('chat message', newMessage);
		this.setState({ messages: messages });
	};

	render() {
		return (
			<div className="messages-area-container">
				<ModalUsername showModal={true} username={this.state.username} onUsernameChange={this.onUsernameChange} />
				<MessagesArea messages={this.state.messages} />
				<ChatInput onMessageSend={this.onMessageSend} />
			</div>
		);
	}
}

export default App;