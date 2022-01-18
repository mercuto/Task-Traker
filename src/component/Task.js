import React from "react";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="task-info">
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>
      <p style={{ color: "red" }} onClick={() => onDelete(task.id)}>
        X
      </p>
    </div>
  );
}

export default Task;
