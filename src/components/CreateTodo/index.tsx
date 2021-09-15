import { FormEvent, useContext, useState } from 'react';

import { TodosContext } from '../../contexts/TodoContext';

import { Checkbox } from '../Checkbox';

import { InputContainer } from './styles';

export const CreateTodo = () => {
	const { createTodo } = useContext(TodosContext);

	const [todoContent, setTodoContent] = useState('');

	function handleCreateTodo(event: FormEvent) {
		event.preventDefault();

		createTodo(todoContent);

		setTodoContent('');
	}

	return (
		<InputContainer onSubmit={handleCreateTodo}>
			<Checkbox />

			<input 
				type="text" 
				placeholder="Create a new todo..."
				value={todoContent}
				onChange={event => setTodoContent(event.target.value)}
			/>
		</InputContainer>
	)
}