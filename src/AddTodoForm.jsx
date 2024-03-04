import { useState } from "react";

const AddTodoForm = ({onAddTodo}) => {

	const [todoTitle, setTodoTitle] = useState('');

	const handleTitleChange = (e) => {
		const newTodoTitle = e.target.value;
		setTodoTitle(newTodoTitle);
	}
	
	const handleAddTodo = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Date.now(),
			title: todoTitle
		};
		onAddTodo(newTodo);
		setTodoTitle('');
	}
	
	return(
		<form onSubmit={handleAddTodo}>
			<label htmlFor="todoTitle">Title</label>
			<input id="todoTitle" type="text" name="title" value={todoTitle} onChange={handleTitleChange} />
			<button type="submit">Add</button>
		</form>
	)

};

export default AddTodoForm;