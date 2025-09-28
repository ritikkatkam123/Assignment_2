import React, { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (task.trim() === "") {
      alert("⚠️ Please enter a task!");
      return;
    }
    setTodos([...todos, { text: task, completed: false }]);
    alert("✅ Task added successfully!");
  };

  const toggleComplete = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1 className="title">📝 My To-Do List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleComplete} />
      </div>
    </div>
  );
}
