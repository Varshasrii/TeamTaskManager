import React, { useEffect, useState } from "react";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("Token:", token);

      const response = await fetch(
        "https://teamtaskmanager-production-4e1a.up.railway.app/api/projects",
        {
          headers: {
            Authorization: token
          }
        }
      );

      const data = await response.json();

      console.log("Projects Response:", data);

      if (Array.isArray(data)) {
        setProjects(data);
      } else if (Array.isArray(data.projects)) {
        setProjects(data.projects);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.log("Project Error:", error);
      setProjects([]);
    }
  };

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://teamtaskmanager-production-4e1a.up.railway.app/api/tasks",
        {
          headers: {
            Authorization: token
          }
        }
      );

      const data = await response.json();

      console.log("Tasks Response:", data);

      if (Array.isArray(data)) {
        setTasks(data);
      } else if (Array.isArray(data.tasks)) {
        setTasks(data.tasks);
      } else {
        setTasks([]);
      }
    } catch (error) {
      console.log("Task Error:", error);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <h2>Projects</h2>

      {projects.length === 0 ? (
        <p>No Projects Found</p>
      ) : (
        projects.map((project) => (
          <div
            key={project._id}
            style={{
              border: "1px solid black",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
      )}

      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              border: "1px solid blue",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;