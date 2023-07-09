import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onFinish = () => {
    // Handle form submission
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary" style={{ height: "100vh" }}>
      <form onSubmit={onFinish} style={{ width: "350px" }} className="p-4 bg-light rounded shadow">
      <h2 className="">Login</h2>
      <hr />
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" placeholder="Email"/>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" placeholder="Password"/>
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
