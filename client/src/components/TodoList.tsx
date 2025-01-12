interface Todo {
  id: string;
  title: string;
  isComplated: boolean;
}
interface TodoListProps {
  todos: Todo[];
  toggleTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}
export const TodoList = (props: TodoListProps) => {
  console.log("rendered");
  return (
    <ul>
      {props.todos.map((todo: Todo) => (
        <li key={todo.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={todo.isComplated}
            onChange={() => {
              todo.isComplated = !todo.isComplated;
              props.toggleTodo(todo);
            }}
            className="mr-2"
          />
          <span className={todo.isComplated ? "line-through " : ""}>
            {todo.title}
          </span>
          <button
            onClick={() => props.deleteTodo(todo.id)}
            className="ml-2 text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
