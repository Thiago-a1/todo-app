import { useContext } from "react";
import { TodosContext } from "../../contexts/TodoContext";

import { FilterContainer, Button } from "./styles"

export const Filter = ({style}: any) => {
	const { FilterTodos } = useContext(TodosContext);

	function handleAddActive () {
		const buttons = Array.from(document.querySelectorAll('.btn'));

		buttons.forEach((value, i, arr) =>{
			value.addEventListener("click", (event) => {
				arr.find((element) => 
					element.classList.contains("active")
				)?.classList.remove("active");
				value.classList.add("active");
			})
		});
	}

	function handleFilterTodos (filter: string) {
		FilterTodos(filter);
	}

	handleAddActive();

	return (
		<FilterContainer style={style}>
			<Button 
				className="active button" 
				onClick={() => handleFilterTodos('all')}
			>All</Button>
			<Button 
				className="button" 
				onClick={() => handleFilterTodos('active')}
			>Active</Button>
			<Button 
				className="button" 
				onClick={() => handleFilterTodos('completed')}
			>Completed</Button>
		</FilterContainer>
	)
}