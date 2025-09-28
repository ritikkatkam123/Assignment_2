import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onToggle={() => onToggle(index)} />
      ))}
    </ul>
  );
}
