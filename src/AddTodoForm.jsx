import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
      <button type="submit" disabled={isAdding || !todoTitle.trim()}>
        {isAdding ? "Adding..." : "Add"}
      </button>
    </form>
  );
};

export default AddTodoForm;