import './TodoList.css';

// TodoList component that displays a list of todos
export function TodoList(props) {
    const { todos } = props;

    return (
        <div className="todo-list-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <input 
                            type="checkbox" 
                            id={`todo-${todo.id}`}
                            defaultChecked={todo.completed}
                            className="todo-checkbox"
                        />
                        <label 
                            htmlFor={`todo-${todo.id}`}
                            className={`todo-text ${todo.completed ? 'completed' : ''}`}
                        >
                            {todo.text}
                        </label>
                    </li>
                ))}
            </ul>
            <button className="remove-completed-btn">
                Remove Completed Items
            </button>
        </div>
    );
}