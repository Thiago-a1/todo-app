import {createContext, useState, ReactNode, useEffect} from 'react';
import { v4 } from 'uuid';

interface Todo {
	id: string;
	content: string;
	complete: boolean;
}

interface TodosProviderProps {
	children: ReactNode;
}

interface TodosContextData {
	todos: Todo[];
	showTodos: Todo[];
	createTodo: (todoInput: string) => void;
	completeTodo: (todoId: string) => void;
	excludeTodo: (todoId: string) => void;
	clearCompleted: () => void;
	filterTodos: (filter: string) => void;
}

export const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider ({children}: TodosProviderProps) {
	const [todos, setTodos] = useState<Todo[]>(() => {
		const storageTodos = localStorage.getItem('todos');

			return (storageTodos ? JSON.parse(storageTodos || '') : [
			{
				id: v4(),
				content: 'Complete online JavaScript course',
				complete: true,
			}
		]) as [];
	});
	const [showTodos, setShowTodos] = useState<Todo[]>([]);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		setShowTodos(todos);
	}, [todos]);

	function createTodo(todoInput: string) {
		const todo = {
			id: v4(),
			content: todoInput,
			complete: false,
		};
		setTodos([...todos, todo]);
	};

	function completeTodo (todoId: string) {
		let index = todos.findIndex(todo => todo.id === todoId);

		todos[index].complete = todos[index].complete === false ? true : false;

		setTodos([...todos]);
	}

	function excludeTodo (todoId: string) {
		let index = todos.findIndex(todo => todo.id === todoId);

		todos.splice(index, 1);

		setTodos([...todos]);
	}

	function clearCompleted () {
		const newTodosArray = todos.filter(todo => {
			return todo.complete ===  false
		})

		setTodos([...newTodosArray]);
	}

	function filterTodos (filter: string | 'all' ) {
		if (filter === 'all') {
			setShowTodos(todos);
		} else if (filter === 'active') {
			let filteredTodos = todos.filter(todo => todo.complete === false)

			setShowTodos(filteredTodos);
		} else if (filter === 'completed') {
			let filteredTodos = todos.filter(todo => todo.complete === true)

			setShowTodos(filteredTodos);
		};
	}

	return (
		<TodosContext.Provider 
			value={{
				todos, 
				showTodos,
				createTodo, 
				completeTodo, 
				excludeTodo, 
				clearCompleted, 
				filterTodos}} 
		>
			{children}
		</TodosContext.Provider>
	)
}