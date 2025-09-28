import React from "react";

export default function TodoItem({ todo, onToggle }) {
  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="checkbox"
        />
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      </label>
    </li>
  );
}
