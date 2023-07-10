import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const adminName = props.user.firstname + ' ' + props.user.lastname;
    console.log(adminName);
  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/create-quiz" style={{fontWeight: "600"}}>
          Quiz Application
        </Link>
        <div className="navbar-text text-light">
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
