import { useState } from "react"

const TodoInput = ({addTodo}) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        const newTodo = {id: Date.now(), text, completed: false};
        addTodo(newTodo);
        setText("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Add new task"
                    className="w-80 h-10 px-3 border-2 border-black rounded-md"
                />
                <button type="submit" className="w-10 h-10 border-2 border-black rounded-md text-2xl flex justify-center items-center">+</button>
            </form>

        </div>
    );
}

export default TodoInput;