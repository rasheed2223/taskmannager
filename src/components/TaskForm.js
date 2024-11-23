import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.dueDate) {
      addTask({ ...task, id: Date.now() });
      setTask({ title: "", description: "", dueDate: "", status: "Pending" });
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={task.description}
        placeholder="Description"
        onChange={handleChange}
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
      />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
