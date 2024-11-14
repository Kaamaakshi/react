// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>React Topics</h3>
      <ul>
        <li>
          <Link to="/topic/1">Introduction to React</Link>
        </li>
        <li>
          <Link to="/topic/2">JSX Syntax</Link>
        </li>

        <li>
          <Link to="/topic/4">State and Props</Link>
        </li>
        <li>
          <Link to="/topic/5">Event Handling</Link>
        </li>
        <li>
          <Link to="/topic/6">React Hooks</Link>
        </li>
        <li>
          <Link to="/topic/7">React Router</Link>
        </li>
        <li>
          <Link to="/topic/8">React Context API</Link>
        </li>

        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
