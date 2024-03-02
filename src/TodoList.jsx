import TodoListItem from './TodoListItem.jsx'

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Read a book" },
  { id: 3, title: "Workout" },
];

const TodoList = () => (
	<ul>
		{todoList.map((todo) => (
			<TodoListItem key={todo.id} todo={todo} />
		))}
	</ul>
)

export default TodoList;