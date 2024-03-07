import { useState } from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveClick = () => {
    setIsRemoving(true);
    onRemoveTodo(todo.id, () => setIsRemoving(false));
  };

  return(
    <li>
      {todo.title} 
      <button onClick={handleRemoveClick} disabled={isRemoving}>
        {isRemoving ? "Removing..." : "Remove"}
      </button>
    </li>
  )
};

export default TodoListItem;
