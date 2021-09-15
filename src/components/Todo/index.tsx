import { useContext } from 'react';

import { TodosContext } from '../../contexts/TodoContext';

import { Checkbox } from '../Checkbox'; 

import { Container, ExcludeContainer, Exclude } from './styles';

interface TodoProps {
	id: string;
	content: string;
	complete: boolean;
}

export const Todo = ({id, content, complete}: TodoProps) => {
	const { completeTodo, excludeTodo } = useContext(TodosContext)

	function handleCompleteTodo (todoId: string) {
		completeTodo(todoId);
	}

	function handleExcludeTodo (todoId: string) {
		excludeTodo(todoId);
	}

	return (
		<Container checked={complete}>
			<Checkbox checked={complete} onClick={() => handleCompleteTodo(id)}/>

			<span>{content}</span>

			<ExcludeContainer className="exclude-container">
				<Exclude onClick={() => handleExcludeTodo(id)}/>
			</ExcludeContainer >
		</Container>
	)
}