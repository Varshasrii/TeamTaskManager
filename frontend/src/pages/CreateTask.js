import { useState, useEffect } from "react";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
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

console.log(data);

setProjects(Array.isArray(data) ? data : []);
  };

  const createTask = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "https://teamtaskmanager-production-4e1a.up.railway.app/api/tasks/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify({
          title,
          description,
          project
        })
      }
    );

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Task</h1>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <select
        value={project}
        onChange={(e) => setProject(e.target.value)}
      >
        <option value="">Select Project</option>

        {projects.map((p) => (
          <option key={p._id} value={p._id}>
            {p.title}
          </option>
        ))}
      </select>

      <br /><br />

      <button onClick={createTask}>
        Create Task
      </button>
    </div>
  );
}

export default CreateTask;