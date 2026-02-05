import React from "react";

export default function TaskList({ tasks }) {
  return (
    <>
      <div className="task-grid">
        {tasks.map((task) => (
          <div className="task-card" style={{ position: "relative" }} key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.desc}</p>

            <div className="task-meta">
              <span>{task.date}</span>
              <span className="priority-badge priority-high">
                {task.priority}
              </span>
            </div>

            <div className="task-actions">
              <button
                className="btn-icon"
                style={{ background: "#00d2ff" }}
                title="Edit Task"
              >
                ✏️
              </button>
              <button
                className="btn-icon"
                style={{ background: "#00b894" }}
                title="Mark Completion"
              >
                ✔️
              </button>
              <button
                className="btn-icon"
                style={{ background: "#ff416c" }}
                title="Delete Task"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
