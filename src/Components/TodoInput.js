import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    onAdd(task);
    setTask("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task..."
        className="task-input"
      />
      <button onClick={() => handleSubmit()} className="add-btn">
        Add
      </button>
    </div>
  );
}
