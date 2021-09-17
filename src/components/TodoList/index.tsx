import { useContext } from "react";

import { TodosContext } from "../../contexts/TodoContext";

import { Todo } from "../Todo";

import { Container } from "./styles";

export const TodoList = () => {
	const { todos, filter, clearCompleted, FilterTodos } = useContext(TodosContext);

	function handleClearCompleted () {
		clearCompleted();
	}

	function handleFilterTodos (filter: string) {
		FilterTodos(filter);
		handleAddActive();
	}

	function handleAddActive () {
		const buttons = Array.from(document.querySelectorAll('.button'));

		buttons.forEach((value, i, arr) => {
			value.addEventListener("click", (event) => {
				arr.find((element) => 
					element.classList.contains("active")
				)?.classList.remove("active");
				value.classList.add("active");
			})
		});
	}
	
	handleAddActive();

	return (
		<Container>
			{todos.filter((todo) => {
				if (filter === 'active') {
					return todo.complete === false;
				} else if (filter === 'completed') {
					return todo.complete === true;
				} else {
					return todo;
				}
			}).map(todo => {
					return (
						<Todo 
							key={todo.id} 
							id={todo.id} 
							content={todo.content} 
							complete={todo.complete}
						/>
					)
				})}
			<div className="footer-todolist" >
				<span>{todos.filter(todo => {
					return todo.complete === false;
				}).length} items left</span>

				<div className="filter-desktop">
					<button 
						className="button"
						onClick={() => handleFilterTodos('all')}
					>All</button>
					<button 
						className="button"
						onClick={() => handleFilterTodos('active')}
					>Active</button>
					<button 
						className="button"
						onClick={() => handleFilterTodos('completed')}
					>Completed</button>
				</div>

				<button 
					onClick={() => handleClearCompleted()}
				>
					Clear Completed
				</button>
			</div>
		</Container>
	)
}