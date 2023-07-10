import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const adminName = props.name;
const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/create-quiz" style={{fontWeight: "600"}}>
          Quiz Application
        </Link>
        <div className="navbar-text text-light fs-5">
          Welcome, {adminName}!
        </div>
        <button className="btn btn-light" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
