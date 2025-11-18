import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodoCompleted, deleteTodo }) => {
  return (
    <div className="flex flex-col">
      {todos.map((todo) => {
        return <TodoItem
                  key={todo.id}
                  todo={todo}
                  setTodoCompleted={setTodoCompleted}
                  deleteTodo={deleteTodo}
                />;
      })}
    </div>
  );
};

export default TodoList;