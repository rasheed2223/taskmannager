import React, { useState } from "react";
import TaskEditModal from "./TaskEditModal";

function TaskList({ tasks, updateTask, deleteTask }) {
  const [editingTask, setEditingTask] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description || "N/A"}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => setEditingTask(task)}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {editingTask && (
        <TaskEditModal
          task={editingTask}
          updateTask={updateTask}
          closeModal={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}

export default TaskList;
