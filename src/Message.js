import React, { Component } from 'react';
import './Message.css'

class Message extends Component {
	render() {
		let sender;
		let messageStyle = 'message';
		let fullMessageStyle = 'full-message';
		if (this.props.yourMessage) {
			messageStyle += ' yourself';
			fullMessageStyle += ' pull-right'
		} else {
			sender = <p className="sender">{this.props.sender}:</p>;
			messageStyle += ' other';
		}
		return (
			<div className="col-xs-12">
				<div className={fullMessageStyle}>
					{sender}
					<p className={messageStyle}>{this.props.message}</p>
				</div>
			</div>
		);
	}
}

export default Message;