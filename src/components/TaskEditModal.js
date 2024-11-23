import React, { useState } from "react";

function TaskEditModal({ task, updateTask, closeModal }) {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleChange = (e) =>
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
    closeModal();
  };

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <h2>Edit Task</h2>
        <input
          type="text"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="date"
          name="dueDate"
          value={updatedTask.dueDate}
          onChange={handleChange}
        />
        <select
          name="status"
          value={updatedTask.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Save</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default TaskEditModal;
