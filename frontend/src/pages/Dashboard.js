import { useEffect, useState } from "react";

function Dashboard() {

  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [projectData, setProjectData] = useState({
    title: "",
    description: ""
  });

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    project: ""
  });

  const handleProjectChange = (e) => {

    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    });

  };

  const handleTaskChange = (e) => {

    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    });

  };

  const createProject = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://teamtaskmanager-production-4e1a.up.railway.app/api/projects/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          body: JSON.stringify(projectData)
        }
      );

      const data = await response.json();

      alert(data.message);

      fetchProjects();

    } catch (error) {

      console.log(error);

    }

  };

  const createTask = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://teamtaskmanager-production-4e1a.up.railway.app/api/tasks/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          body: JSON.stringify(taskData)
        }
      );

      const data = await response.json();

      alert(data.message);

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const fetchProjects = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://teamtaskmanager-production-4e1a.up.railway.app/api/projects",
        {
          headers: {
            Authorization: token
          }
        }
      );

      const data = await response.json();

      setProjects(data);

    } catch (error) {

      console.log(error);

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

      setTasks(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProjects();
    fetchTasks();

  }, []);

  return (
    <div style={{ padding: "30px" }}>

      <h1>Dashboard</h1>

      <h2>Create Project</h2>

      <input
        type="text"
        name="title"
        placeholder="Project Title"
        onChange={handleProjectChange}
      />

      <br /><br />

      <input
        type="text"
        name="description"
        placeholder="Project Description"
        onChange={handleProjectChange}
      />

      <br /><br />

      <button onClick={createProject}>
        Create Project
      </button>

      <br /><br />

      <h2>Create Task</h2>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        onChange={handleTaskChange}
      />

      <br /><br />

      <input
        type="text"
        name="description"
        placeholder="Task Description"
        onChange={handleTaskChange}
      />

      <br /><br />

      <input
        type="text"
        name="project"
        placeholder="Project ID"
        onChange={handleTaskChange}
      />

      <br /><br />

      <button onClick={createTask}>
        Create Task
      </button>

      <br /><br />

      <h2>Projects</h2>

      {
        projects.map((project) => (
          <div
            key={project._id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
      }

      <h2>Tasks</h2>

      {
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              border: "1px solid blue",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </div>
        ))
      }

    </div>
  );
}

export default Dashboard;