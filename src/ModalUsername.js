import React, {Component} from 'react';
import { 
	Button,
	Modal,
	FormGroup,
	FormControl,
	ControlLabel
} from 'react-bootstrap';

class ModalUsername extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: props.showModal
		};
	};

	close = () => {
		this.setState({ showModal: false });
	};

	handleUsernameChange = (username) => {
		this.props.onUsernameChange(username.target.value);
	};

	render() {
		return (
			<div>
				<Modal show={this.state.showModal} onHide={this.close} keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>Bem vindo!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup controlId="form-username">
							<ControlLabel>Para continuar, nos diga seu nome.</ControlLabel>
							<FormControl type="text" placeholder="Nome" value={this.props.username} onChange={this.handleUsernameChange} componentClass="input" />
						</FormGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="primary" onClick={this.close}>Continuar</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default ModalUsername;