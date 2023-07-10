import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/admin/login", {
        email,
        password,
      });
      
      if (response.data.success) {
        console.log("Login successful:", response.data);
        localStorage.setItem("token", response.data.data);
        navigate("/create-quiz"); 
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary" style={{ height: "100vh" }}>
      <form onSubmit={onFinish} style={{ width: "350px" }} className="p-4 bg-light rounded shadow">
        <h2>Login</h2>
        <hr />
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
