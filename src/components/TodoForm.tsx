import React, { Component } from 'react';
import { PlusIcon } from '../icons';
import { ITodo } from 'interfaces/index';
import uuid from 'uuid';

// TYPEALIAS
import { FormElement, InputElement } from '../typealias';

// INTERFACE
interface IProps {
	onSubmit: (newTodo: ITodo) => void;
}

export default class TodoForm extends Component<IProps, ITodo> {
	state: ITodo = {
		todo: '',
		id: '',
		complete: false
	};

	handleOnChange = (e: InputElement) => {
		const { value }: any = e.target;

		this.setState({
			todo: value
		});
	};

	handleSubmit = (e: FormElement) => {
		e.preventDefault();

		const newTodo: ITodo = {
			todo: this.state.todo,
			id: uuid(),
			complete: false
		};
		this.props.onSubmit(newTodo);
		this.setState({
			todo: '',
			id: '',
			complete: false
		});
	};

	render() {
		return (
			<div className='todoform-container'>
				<p className='app-title'>ToDoList</p>
				<form className='searchbar-input-group' onSubmit={this.handleSubmit}>
					<input
						type='text'
						value={this.state.todo}
						onChange={this.handleOnChange}
					/>
					<button type='submit' disabled={this.state.todo.length === 0}>
						<PlusIcon />
					</button>
				</form>
			</div>
		);
	}
}
