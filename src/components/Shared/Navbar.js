import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
const Navbar = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="navbar daddynav bg-black text-white shadow-xl shadow-black w-full" 
    style={{backgroundColor:"#051f38" ,}} >
      <div className="navbar-start bg-black text-white "  style={{backgroundColor:"#051f38" ,}} >
        <div className="dropdown bg-black text-white">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className=" menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52"
          >
            <li className="Nav_btn">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="Nav_btn">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            {/* <li className="Nav_btn">
              <HashLink smooth to="#about">
                About
              </HashLink>
            </li> */}
            <li className="Nav_btn">
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li className="Nav_btn">
              <NavLink to="/Experience">Experience</NavLink>
            </li>
            <li className="Nav_btn">
              <NavLink to="/education">Education</NavLink>
            </li>
            <li className="Nav_btn">
            <NavLink to="/contactme" >
              Contact me
            </NavLink>
          </li>
            {/* <li className="Nav_btn">
              <NavLink to="/blogs">Blogs</NavLink>
            </li> */}
          </ul>
        </div>
        <button
          onClick={refreshPage}
          className="btn btn-ghost normal-case lg:text-xl font-serif"
        >
          <Typewriter
            options={{
              strings: ["Muhammad Anas Rizwan"],
              autoStart: true,
              loop: true,
            }}
          />
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal p-0">
        <li className="Nav_btn">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="Nav_btn">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            {/* <li className="Nav_btn">
              <HashLink smooth to="#about">
                About
              </HashLink>
            </li> */}
            <li className="Nav_btn">
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li className="Nav_btn">
              <NavLink to="/experince">Experience</NavLink>
            </li>
            <li className="Nav_btn">
              <NavLink to="/education">Education</NavLink>
            </li>
            <li className="Nav_btn">
            <NavLink to="/contactme" >
              Contact me
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <ul>
          <li className="Nav_btn">
            <NavLink to="/contactme" className="btn btn-secondary">
              Contact me
            </NavLink>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
