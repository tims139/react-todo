const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Read a book" },
  { id: 3, title: "Workout" },
];

function TodoList() {
  return (
		<ul>
			{todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;