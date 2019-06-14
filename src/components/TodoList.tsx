import React from 'react';
import Todo from './Todo';
import { IListProps } from '../interfaces';

export default function TodoList({
	todos,
	toogleComplete,
	editTodo,
	deleteTodo
}: IListProps) {
	return (
		<div className='list-container'>
			<Todo
				todos={todos}
				toogleComplete={toogleComplete}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
			/>
		</div>
	);
}
