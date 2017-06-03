import React, { Component } from 'react';
import './Message.css'

class Message extends Component {
	render() {
		let senderStyle = 'sender';
		let messageStyle = 'message';
		let fullMessageStyle = 'full-message';
		if (this.props.yourMessage) {
			senderStyle += ' pull-right';
			messageStyle += ' yourself';
			fullMessageStyle += ' pull-right'
		} else {
			messageStyle += ' other';
		}
		return (
			<div className="col-xs-12">
				<div className={fullMessageStyle}>
					<div>
						<p className={senderStyle}>{this.props.sender}:</p>
					</div>
					<p className={messageStyle}>{this.props.message}</p>
				</div>
			</div>
		);
	}
}

export default Message;