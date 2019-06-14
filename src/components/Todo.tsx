import React from 'react';
import Modal from './Modal/Modal';
import { EditIcon, UncheckedIcon, CheckedIcon, TrashIcon } from '../icons';
import { ITodo, IListProps } from '../interfaces/index';

interface IState {
	isOpen: boolean;
	todo: ITodo;
}

export default class Todo extends React.Component<IListProps, IState> {
	state: IState = {
		isOpen: false,
		todo: {
			todo: '',
			id: '',
			complete: false
		}
	};
	handleToggleComplete = (id: string) => {
		this.props.toogleComplete(id);
	};

	handleDeleteTodo = (id: string) => {
		this.props.deleteTodo!(id);
	};

	handleEditTodo = (editTodo: ITodo) => {
		this.props.editTodo!(editTodo);
		this.setState({
			todo: editTodo
		});
		this.handleToogleModalOpen();
	};

	handleToogleModalOpen = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	};

	render() {
		return (
			<div className='list-container'>
				{this.props.todos.map((todo: ITodo) => (
					<div key={todo.id} className='todo-item'>
						<div className='todo-row'>
							<label className='todo-input'>{todo.todo}</label>
							<div className='todo-buttons'>
								<button
									type='button'
									onClick={() => this.handleToggleComplete(todo.id)}
								>
									{todo.complete ? <CheckedIcon /> : <UncheckedIcon />}
								</button>
								<div className='todo-buttons-seperator' />
								<button
									type='button'
									onClick={
										todo.complete
											? () => this.handleDeleteTodo(todo.id)
											: () => this.handleEditTodo(todo)
									}
								>
									{todo.complete ? <TrashIcon /> : <EditIcon />}
								</button>
							</div>
						</div>
					</div>
				))}
				{this.state.isOpen && (
					<Modal
						isOpen={this.state.isOpen}
						todo={this.state.todo}
						toogleOpen={this.handleToogleModalOpen}
						editTodo={this.handleEditTodo}
					/>
				)}
			</div>
		);
	}
}
