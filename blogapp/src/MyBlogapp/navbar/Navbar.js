import React from "react";
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/bloglogo-removebg-preview.png"
export const Navbar = () => {
  const navigate = useNavigate();
  const res = localStorage.getItem("user");
  const user = JSON.parse(res);
  console.log("user data", user);

  const handleLogout = () => {
    localStorage.clear();
    
  };
  return (
    <>
      <div className="blog-navbar">
        <div className="nav-left">
          <img className="logoName" src={logo} />
        </div>
        <div className="nav-right">
          <h3 className="nav-right-content">My Post</h3>
          <h3 className="nav-right-content"><Link to='/blogList'>All Blog</Link></h3>
          {user?.userName ? (
          <h3 className="navbar-h3">{user?.userName}</h3>
          ) : (
            navigate("/")
          )}
          <button className="logout-btn"><Link to="/" onClick={handleLogout}>Logout</Link></button>
        </div>
      </div>
    </>
  );
};
