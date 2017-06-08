import React, {Component} from 'react';
import { 
	Button,
	Modal,
	FormGroup,
	FormControl,
	ControlLabel,
	HelpBlock
} from 'react-bootstrap';

class ModalUsername extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: props.showModal,
			username: props.username,
			showRequiredUsername: false
		};
	};

	submitUsername = () => {
		let usernameValue = this.state.username;
		if (!usernameValue) {
			this.setState({ showRequiredUsername: true });
			return;
		}
		this.setState({ showModal: false });
		this.props.onUsernameChange(usernameValue);
	};

	handleUserChange = (username) => {
		let usernameValue = username.target.value;
		this.setState({ username: usernameValue });
		if (usernameValue) {
			this.setState({ showRequiredUsername: false });
		}
	};

	render() {
		let requiredUsername;
		let validationState;
		if (this.state.showRequiredUsername) {
			requiredUsername = <HelpBlock>Campo obrigatório.</HelpBlock>
			validationState = 'error';
		}
		return (
			<div>
				<Modal show={this.state.showModal} keyboard={false} backdrop="static">
					<Modal.Header>
						<Modal.Title>Bem vindo!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup controlId="form-username" validationState={validationState}>
							<ControlLabel>Para continuar, nos diga seu nome.</ControlLabel>
							<FormControl type="text" placeholder="Nome" value={this.state.username} onChange={this.handleUserChange} componentClass="input" />
							{requiredUsername}
						</FormGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="primary" onClick={this.submitUsername}>Continuar</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default ModalUsername;