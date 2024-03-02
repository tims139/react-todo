const AddTodoForm = ({onAddTodo}) => {
	
	const handleAddTodo = (event) => {
		event.preventDefault();
		const todoTitle = event.target.elements.title.value;
		onAddTodo(todoTitle);
		event.target.reset();
	}
	
	return(
		<form onSubmit={handleAddTodo}>
			<label htmlFor="todoTitle">Title</label>
			<input id="todoTitle" type="text" name="title" />
			<button type="submit">Add</button>
		</form>
	)

};

export default AddTodoForm;