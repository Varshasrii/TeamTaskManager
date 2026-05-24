import { useState } from "react";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSignup = async () => {

  try {

    const response = await fetch(
      "https://teamtaskmanager-production-4e1a.up.railway.app/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          role: "Admin"
        })
      }
    );

    const data = await response.json();

    alert(data.message);

  } catch (error) {

    console.log(error);

  }

};
  return (
    <div style={{ padding: "30px" }}>
      <h1>Signup</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <br /><br />

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

      <button onClick={handleSignup}>
  Signup
</button>
    </div>
  );
}

export default Signup;