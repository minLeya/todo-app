import "../index.css";

const TodoItem = ({todo, setTodoCompleted, deleteTodo}) => {
    return (
        <div className="flex space-x-4">
            <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
            <div>
                <button onClick={()=>setTodoCompleted(todo.id)}>Done</button>
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </div>

        </div>
    );
}

export default TodoItem;