import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Sidebar from "./Sidebar";
import "./Styles.css"; // Import the custom CSS for this page

function IntroductionToReact() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="content">
        <div className="introduction-container">
          <h2>Introduction to React</h2>
          <p>
            React is a JavaScript library for building user interfaces,
            developed by Facebook. It allows developers to build single-page
            applications with reusable UI components.
          </p>
          <p>
            The core of React is based around components, which are the building
            blocks of the user interface. Each component has its own state and
            properties (props) that control its behavior and appearance.
          </p>
          <p>
            React enables efficient updates and rendering of components through
            a virtual DOM. This helps to ensure that the UI is always up-to-date
            with the underlying data.
          </p>

          {/* Button to navigate to the JSX Syntax page */}
          <Link to="/topic/2">
            <button className="navigate-button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroductionToReact;
