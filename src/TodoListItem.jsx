import { useState } from "react";
import styles from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveClick = () => {
    setIsRemoving(true);
    onRemoveTodo(todo.id, () => setIsRemoving(false));
  };

  return(
    <li className = {styles.listItem}>
      {todo.title} 
      <button onClick={handleRemoveClick} disabled={isRemoving} className={`${isRemoving ? styles.isRemoving : ''}`}>
        x
      </button>
    </li>
  )
};

export default TodoListItem;
