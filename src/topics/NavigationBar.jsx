// src/NavigationBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>{" "}
        {/* Link to Sign Up */}
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>{" "}
        {/* Link to Quiz (will redirect if not signed up) */}
      </ul>
    </nav>
  );
}

export default NavigationBar;
