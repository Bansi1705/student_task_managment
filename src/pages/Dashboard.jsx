import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleAddTask = async (newTask) => {
    const tasktoAdd = { ...newTask, completed: false };
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasktoAdd),
      });
      console.log(tasktoAdd);
      const data = await response.json();
      setTasks([ ...tasks, data ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("lData");
    localStorage.removeItem("authData");
    navigate("/login");
  };
  return (
    <div>
      <Navbar title="Task Managment" onLogout={handleLogout} />
      <TaskForm addTask={handleAddTask} />
      <h1>hello</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Dashboard;
