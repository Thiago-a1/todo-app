import { useContext } from "react";
import { TodosContext } from "../../contexts/TodoContext";

import { FilterContainer, Button } from "./styles"

export const Filter = ({style}: any) => {
	const { FilterTodos } = useContext(TodosContext);

	function handleAddActive (event: any) {
		const buttons = Array.from(document.querySelectorAll('.button'));
		const target = event.target;

		buttons.forEach((value) => {
				value.classList.remove("active");
		});

		target.classList.add('active');
	}

	function handleFilterTodos (filter: string) {
		FilterTodos(filter);
	}

	return (
		<FilterContainer style={style}>
			<Button 
				className="active button" 
				onClick={(event) => [
					handleAddActive(event),
					handleFilterTodos('all')
				]}
			>All</Button>
			<Button 
				className="button" 
				onClick={(event) => [
					handleAddActive(event),
					handleFilterTodos('active')
				]}
			>Active</Button>
			<Button 
				className="button" 
				onClick={(event) => [
					handleAddActive(event),
					handleFilterTodos('completed')
				]}
			>Completed</Button>
		</FilterContainer>
	)
}