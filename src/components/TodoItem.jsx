const TodoItem = ({todo, setTodoCompleted, deleteTodo}) => {
    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={()=>setTodoCompleted(todo.id)}>Done</button>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;