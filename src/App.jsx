import { useState } from "react";
import "./App.css";
import "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const mockTodos = [
  { id: 1, text: "Изучить React", completed: false },
  { id: 2, text: "Сделать проект Todo App", completed: false },
  { id: 3, text: "Попрактиковаться с Tailwind", completed: true },
];

function App() {
  const [todos, setTodos] = useState(mockTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const setTodoCompleted = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: true};
        } else {
          return todo;
        }
      })
    );
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <TodoInput addTodo={addTodo}/>
      <TodoList
          todos={todos}
          setTodoCompleted={setTodoCompleted}
          deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;