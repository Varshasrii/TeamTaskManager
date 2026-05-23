import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  const token = localStorage.getItem("token");

  const [showSignup, setShowSignup] = useState(false);

  if (token) {
    return <Dashboard />;
  }

  return (
    <div>

      {
        showSignup ? (
          <div>
            <Signup />

            <button onClick={() => setShowSignup(false)}>
              Go to Login
            </button>
          </div>
        ) : (
          <div>
            <Login />

            <button onClick={() => setShowSignup(true)}>
              Go to Signup
            </button>
          </div>
        )
      }

    </div>
  );
}

export default App;