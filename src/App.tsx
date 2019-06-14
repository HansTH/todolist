import React from 'react';
import './styles/index.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { ITodo, ITodos } from 'interfaces';

class App extends React.Component<{}, ITodos> {
	state: ITodos = {
		todos: []
	};

	addTodo = (todo: ITodo) => {
		this.setState({
			todos: [todo, ...this.state.todos]
		});
	};

	toogleComplete = (id: string) => {
		const todo = [...this.state.todos].map(todo => {
			if (todo.id === id) {
				todo.complete = !todo.complete;
			}
			return todo;
		});
		this.setState({
			todos: todo
		});
	};

	deleteTodo = (id: string) => {
		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		});
	};

	editTodo = (todo: ITodo) => {
		const items = [...this.state.todos].map(item => {
			if (item.id === todo.id) {
				item.todo = todo.todo;
			}
			return item;
		});
		this.setState({
			todos: items
		});
	};

	render() {
		return (
			<div className='app-container'>
				<TodoForm onSubmit={this.addTodo} />
				<TodoList
					todos={this.state.todos.filter((todo: ITodo) => !todo.complete)}
					toogleComplete={this.toogleComplete}
					editTodo={this.editTodo}
				/>
				{Object.keys(this.state.todos).length !== 0 && (
					<>
						<div className='list-seperator' />
						<TodoList
							todos={this.state.todos.filter((todo: ITodo) => todo.complete)}
							toogleComplete={this.toogleComplete}
							deleteTodo={this.deleteTodo}
						/>
					</>
				)}
			</div>
		);
	}
}

export default App;
