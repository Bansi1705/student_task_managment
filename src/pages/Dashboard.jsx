import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[])
  useEffect(()=>{
    console.log(tasks)
  },[tasks])

  const handleLogout = () => {
    localStorage.removeItem("lData");
    localStorage.removeItem("authData");
    navigate("/login");
  };
  return (
    <div>
      <Navbar title="Task Managment" onLogout={handleLogout} />
      <h1>hello</h1>
      <TaskList />
    </div>
  );
}

export default Dashboard;
