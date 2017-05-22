import React, { Component } from 'react';
import { 
	FormGroup,
	FormControl,
	InputGroup,
	Button
} from 'react-bootstrap';
import './ChatInput.css'

class ChatInput extends Component {
	render() {
		const textareaStyle = {
			resize: 'none'
		};
		return (
			<div className={this.props.className}>
				<FormGroup controlId="formControlsTextarea">
					<InputGroup>
						<FormControl style={textareaStyle} componentClass="textarea" placeholder="Digite algo aqui..." />
						<InputGroup.Button className="btn-vertical-block">
							<Button className="btn-vertical-block" bsStyle="primary">Enviar</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
			</div>
		);
	}
}

export default ChatInput;