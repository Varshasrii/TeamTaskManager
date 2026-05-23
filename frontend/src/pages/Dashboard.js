import { useEffect, useState } from "react";

function Dashboard() {

  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const role = localStorage.getItem("role");

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
        "http://localhost:5000/api/projects/create",
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
        "http://localhost:5000/api/tasks/create",
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
        "http://localhost:5000/api/projects",
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
        "http://localhost:5000/api/tasks",
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

  const deleteProject = async (id) => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/projects/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token
          }
        }
      );

      const data = await response.json();

      alert(data.message);

      fetchProjects();

    } catch (error) {

      console.log(error);

    }

  };

  const deleteTask = async (id) => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/tasks/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token
          }
        }
      );

      const data = await response.json();

      alert(data.message);

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const updateTaskStatus = async (id) => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          body: JSON.stringify({
            status: "Completed"
          })
        }
      );

      const data = await response.json();

      alert(data.message);

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.reload();

  };

  useEffect(() => {

    fetchProjects();
    fetchTasks();

  }, []);

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh"
      }}
    >

      <h1>Dashboard</h1>

      <button onClick={handleLogout}>
        Logout
      </button>

      <br /><br />

      {
        role === "Admin" && (
          <div>

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

          </div>
        )
      }

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
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0px 2px 5px gray",
              marginBottom: "10px"
            }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            {
              role === "Admin" && (
                <button onClick={() => deleteProject(project._id)}>
                  Delete Project
                </button>
              )
            }

          </div>
        ))
      }

      <h2>Tasks</h2>

      {
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0px 2px 5px gray",
              marginBottom: "10px"
            }}
          >
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>Status: {task.status}</p>

            {
              role === "Admin" && (
                <button onClick={() => deleteTask(task._id)}>
                  Delete Task
                </button>
              )
            }

            <br /><br />

            {
              role === "Admin" && (
                <button onClick={() => updateTaskStatus(task._id)}>
                  Mark Completed
                </button>
              )
            }

          </div>
        ))
      }

    </div>
  );
}

export default Dashboard;