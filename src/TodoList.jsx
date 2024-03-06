import TodoListItem from "./TodoListItem.jsx";

const TodoList = ({ todoList, onRemoveTodo }) => (
  <ul>
    {todoList.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
    ))}
  </ul>
);

export default TodoList;
