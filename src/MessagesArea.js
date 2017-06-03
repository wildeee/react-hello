import React, { Component } from 'react';
import Message from './Message.js'

class MessagesArea extends Component {
	render() {
		const messages = this.props.messages.map((message) => {
			return (
				<div key={message.key}>
					<Message
						sender={message.sender}
						message={message.message}
						yourMessage={message.yourMessage}
						timestamp={message.timestamp} />
				</div>
			);
		});
		return (
			<div>
				{messages}
			</div>
		);
	}
}

export default MessagesArea;