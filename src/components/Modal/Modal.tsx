import React, { Component } from 'react';
import Backdrop from './Backdrop';
import './modal.css';
import { ITodo } from 'interfaces';

// TYPEALIAS
import { FormElement, InputElement } from '../../typealias';

// INTERFACE
interface IState {
	isOpen: boolean;
	todo: ITodo;
}

interface IProps {
	todo: ITodo;
	isOpen: boolean;
	toogleOpen: () => void;
	editTodo: (todo: ITodo) => void;
}

export class Modal extends Component<IProps, IState> {
	state: IState = {
		isOpen: this.props.isOpen,
		todo: this.props.todo
	};

	handleChange = (e: InputElement) => {
		const { value } = e.currentTarget;
		this.setState({
			todo: {
				todo: value,
				id: this.props.todo.id,
				complete: this.props.todo.complete
			}
		});
	};

	handleSubmit = (e: FormElement) => {
		e.preventDefault();
		this.props.editTodo(this.state.todo);
	};

	render() {
		return (
			<>
				<Backdrop
					isOpen={this.state.isOpen}
					toogleOpen={this.props.toogleOpen}
				/>
				<div className='modal'>
					<div className='modal-header'>
						<h1>Edit Todo</h1>
					</div>
					<div className='modal-input'>
						<form onSubmit={this.handleSubmit}>
							<input
								type='text'
								onChange={this.handleChange}
								value={this.state.todo.todo}
							/>
							<div className='modal-buttons'>
								<button type='button' onClick={this.props.toogleOpen}>
									Cancel
								</button>
								<button type='submit'>Save Changes</button>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default Modal;
