import { useState } from "react";
import PropTypes from "prop-types";
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

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
