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
	filter: string;
	createTodo: (todoInput: string) => void;
	completeTodo: (todoId: string) => void;
	excludeTodo: (todoId: string) => void;
	clearCompleted: () => void;
	FilterTodos: (filter: string) => void;
	moveTodo: (from: number, to: number) => void;
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
	const [filter, setFilter] = useState('');

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
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

	function FilterTodos (filter: string) {
		setFilter(filter)
	}

	function moveTodo (from: number, to: number) {
		const list = todos;
		const [removed] = list.splice(from, 1);
		list.splice(to, 0, removed);

		setTodos(list);
	}

	return (
		<TodosContext.Provider 
			value={{
				todos, 
				filter,
				createTodo, 
				completeTodo, 
				excludeTodo, 
				clearCompleted, 
				FilterTodos,
				moveTodo}} 
		>
			{children}
		</TodosContext.Provider>
	)
}