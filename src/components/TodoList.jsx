import React from "react";

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "done" : ""}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            {todo.text}
          </label>
          <button onClick={() => onDelete(todo.id)}>Видалити</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
