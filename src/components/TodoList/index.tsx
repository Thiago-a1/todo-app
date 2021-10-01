import { useContext } from "react";

import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

import { TodosContext } from "../../contexts/TodoContext";

import { Todo } from "../Todo";

import { Container } from "./styles";

export const TodoList = () => {
	const { todos, filter, clearCompleted, FilterTodos, moveTodo } = useContext(TodosContext);

	function handleClearCompleted () {
		clearCompleted();
	}

	function handleFilterTodos (filter: string) {
		FilterTodos(filter);
	}

	function handleAddActive (event: any) {
		const buttons = Array.from(document.querySelectorAll('.button'));
		const target = event.target;

		buttons.forEach((value) => {
				value.classList.remove("active");
		});

		target.classList.add('active');
	}

	function handleOnDragEnd (result: DropResult) {
		if (!result.destination) {
			return;
		}

		moveTodo(result.source.index, result.destination.index)
	}

	return (
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<Container 
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
						<>
						{todos.filter((todo) => {
							if (filter === 'active') {
								return todo.complete === false;
							} else if (filter === 'completed') {
								return todo.complete === true;
							} else {
								return todo;
							}
						}).map((todo, index) => {
								return (
									<Draggable key={todo.id} draggableId={todo.id} index={index}>
										{
										(provided) => (
												<div 
													ref={provided.innerRef} 
													{...provided.draggableProps}
													{...provided.dragHandleProps}>
													<Todo 
														id={todo.id} 
														content={todo.content} 
														complete={todo.complete}
													/>
												</div>
										)}
									</Draggable>
								)
							})}
						</>
						{provided.placeholder}
						<div className="footer-todolist" >
							<span>{todos.filter(todo => {
								return todo.complete === false;
							}).length} items left</span>

							<div className="filter-desktop">
								<button 
									className="button"
									onClick={(event) => [
										handleAddActive(event), 
										handleFilterTodos('all')
									]}
								>All</button>
								<button 
									className="button"
									onClick={(event) => [
										handleAddActive(event), 
										handleFilterTodos('active')
									]}
								>Active</button>
								<button 
									className="button"
									onClick={(event) => [
										handleAddActive(event), 
										handleFilterTodos('completed')
									]}
								>Completed</button>
							</div>

							<button 
								onClick={() => handleClearCompleted()}
							>
								Clear Completed
							</button>
						</div>
					</Container>
					)}
				</Droppable>
			</DragDropContext>
	)
}