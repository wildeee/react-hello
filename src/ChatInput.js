import React, { Component } from 'react';
import { 
	FormGroup,
	FormControl,
	InputGroup,
	Button
} from 'react-bootstrap';
import './ChatInput.css'

class ChatInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: ''
		};
	}

	handleMessageChange = (message) => {
		this.setState({ message: message.target.value });
	};

	enviarMensagem = () => {
		this.props.onMessageSend(this.state.message);
	};

	render() {
		const textareaStyle = {
			resize: 'none'
		};
		return (
			<div className="navbar navbar-default navbar-fixed-bottom body-padding">
				<FormGroup controlId="formControlsTextarea">
					<InputGroup>
						<FormControl style={textareaStyle} value={this.state.message} onChange={this.handleMessageChange} componentClass="textarea" placeholder="Digite algo aqui..." />
						<InputGroup.Button className="btn-vertical-block">
							<Button className="btn-vertical-block" bsStyle="primary" onClick={this.enviarMensagem}>Enviar</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
			</div>
		);
	}
}

export default ChatInput;