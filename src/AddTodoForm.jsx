import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

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
			<InputWithLabel todoTitle={todoTitle} isFocused handleTitleChange={handleTitleChange}>
				Title
			</InputWithLabel>
			<button type="submit">Add</button>
		</form>
	)

};

export default AddTodoForm;