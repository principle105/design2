import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  
  const [ checked, setChecked ] = useState(false);
  
  const checkBox = () => {
    setChecked(false);
  }

  const onCheck = () => {
    setChecked(!checked);
  }

  return (
    <div>
      <input type="checkbox" id="check" checked={checked} onChange={() => onCheck()}/>
      <div className="navbar">
        <h2><NavLink to="/" className="logo">Design Project</NavLink></h2>
        <ul>
            <li>
              <NavLink to="/" className="item" onClick={() => checkBox()}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/form" className="item" onClick={() => checkBox()}>
                Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" className="item" onClick={() => checkBox()}>
                Resources
              </NavLink>
            </li>
        </ul>
        <label htmlFor="check">
          <i className="fas fa-bars menu-btn"></i>
          <i className="fas fa-times close-btn"></i>
        </label>
      </div>
    </div>
  )
}

export default NavBar;