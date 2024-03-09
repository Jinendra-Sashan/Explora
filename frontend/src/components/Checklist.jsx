import React, { useState } from "react";
import "./Checklist.css";

const MyComponent = (props) => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: taskInput, checked: false }]);
      setTaskInput("");
    }
  };

  const handleCheckboxChange = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="background-container">
      <div className="div">
        <div className="Add-textbox">
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Add a new task"
            value={taskInput}
            onChange={handleInputChange}
          />
          <button className="Add-button" type="submit"></button>
        </form>
        </div>

        {tasks.map((task) => (
          <div className="task-container" key={task.id}>
            <div className="task-box">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <div className={`task-text ${task.checked ? 'completed' : ''}`}>{task.text}</div>
              </label>
              <button className="delete-button" onClick={() => handleDeleteTask(task.id)}></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
