import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodoCompleted, deleteTodo }) => {
  return (
    <div>
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