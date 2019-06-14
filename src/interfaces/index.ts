export interface ITodo {
	todo: string;
	id: string;
	complete: boolean;
}

export interface ITodos {
	todos: ITodo[];
}

export interface IListProps extends ITodos {
	toogleComplete: (id: string) => void;
	deleteTodo?: (id: string) => void;
	editTodo?: (todo: ITodo) => void;
}
