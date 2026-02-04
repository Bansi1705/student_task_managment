import React from "react";

export default function TaskList() {
  return (
    <>
      <div className="task-grid">
        <div className="task-card" style={{ position: "relative" }}>
            <h3>Complete React Assignment</h3>
            <p>finish task manager UI and Styling</p>

            <div className="task-meta">
                <span>Date:2026-02-10</span>
                <span className="priority-badge priority-high">High</span>
            </div>

            <div className="task-actions">
                <button className="btn-icon" style={{background:"#00d2ff"}} title="Edit Task">
                    ✏️
                </button>
                <button className="btn-icon" style={{background:"#00b894"}} title="Mark Completion" >✔️</button>
                <button className="btn-icon" style={{background:"#ff416c"}} title="Delete Task" >🗑️</button>
            </div>
        </div>
      </div>
    </>
  );
}
