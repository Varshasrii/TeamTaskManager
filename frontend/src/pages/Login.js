import { useState } from "react";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleLogin = async () => {
  try {
    const response = await fetch(
      "https://teamtaskmanager-production-4e1a.up.railway.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    console.log("Login Response:", data);

    if (data.token) {
      localStorage.setItem("token", data.token);

      if (data.user) {
        localStorage.setItem("role", data.user.role);
      }

      alert("Login Successful");
      window.location.href = "/dashboard";
    } else {
      alert(data.message || "Login Failed");
    }

  } catch (error) {
    console.log(error);
  }
};
  

  return (
    <div style={{ padding: "30px" }}>

      <h1>Login</h1>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;
