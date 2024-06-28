import { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import styles from './AddTodoForm.module.css';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleTitleChange = (e) => setTodoTitle(e.target.value);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!todoTitle.trim()) return;
    setIsAdding(true);
    await onAddTodo(todoTitle);
    setTodoTitle("");
    setIsAdding(false);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel todoTitle={todoTitle} isFocused handleTitleChange={handleTitleChange}>
        Title
      </InputWithLabel>
      <button type="submit" disabled={isAdding || !todoTitle.trim()} className={`${isAdding ? styles.isAdding : ''}`}>
        +
      </button>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default AddTodoForm;