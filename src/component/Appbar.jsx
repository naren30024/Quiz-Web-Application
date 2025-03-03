import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pyth.css"; // Import the CSS file
import LogoutIcon from '@mui/icons-material';
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const ResponsiveNavbar = () => {
  const navigate = useNavigate();
  // const [username, setUsername] = useState("User");
  const {user} = useContext(AuthContext)
  const [userData, setuserData] = useState(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : user;
  });
  
  

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(user));
    
    
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("datas");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/home">
          Dashboard
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Profile Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                👤 Profile
              </a>
              <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                <li>
                  <span className="dropdown-item text-muted">
                    <strong>{userData.firstName} {userData.lastName}</strong>
                  </span>
                </li>
              </ul>
            </li>

            {/* Add Question */}
            <li className="nav-item">
              <Link className="nav-link" to="/subject">
                Add Question ❓
              </Link>
            </li>

            {/* Results */}
            <li className="nav-item">
              <Link className="nav-link" to="/scorecard">
              📊 Results 
              </Link>
            </li>

            {/* Logout */}
            <li className="nav-item">
              <button className="btn btn-danger nav-link" onClick={handleLogout}>
                Logout
                
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
