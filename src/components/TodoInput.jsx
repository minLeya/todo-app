import { useState } from "react"

const TodoInput = ({addTodo}) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        const newTodo = {id: Date.now, text, completed: false};
        addTodo(newTodo);
        setText("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button type="submit">Добавить</button>
            </form>

        </div>
    );
}

export default TodoInput;