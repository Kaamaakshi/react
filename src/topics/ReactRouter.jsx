import React from "react";
import Sidebar from "./Sidebar";
import "./ReactRouter.css"; // Import the CSS for ReactRouter
import { Link } from "react-router-dom";

function ReactRouter() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="content">
        <div className="router-container">
          <h2>React Router</h2>
          <p>
            React Router is a library that allows you to handle routing in your
            React application, enabling navigation between different components
            and pages.
          </p>
          <p>
            With React Router, you can define routes that render different
            components when users navigate to specific URLs in your application.
            It also allows for nested routing, route parameters, and route
            guards.
          </p>
          <h3>Commonly Used Features:</h3>
          <ul>
            <li>
              <strong>useHistory</strong> - A hook that gives you access to the
              history instance, allowing navigation.
            </li>
            <li>
              <strong>useParams</strong> - A hook that lets you access route
              parameters.
            </li>
            <li>
              <strong>useLocation</strong> - A hook that allows you to access
              the current location (URL).
            </li>
            <li>
              <strong>useRouteMatch</strong> - A hook that helps with matching a
              specific route pattern.
            </li>
          </ul>
          <Link to="/topic/8">
            <button className="navigate-button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReactRouter;
