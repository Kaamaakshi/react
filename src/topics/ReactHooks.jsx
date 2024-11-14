import React from "react";
import Sidebar from "./Sidebar";
import "./ReactHooks.css"; // Import the CSS file for ReactHooks
import { Link } from "react-router-dom";

function ReactHooks() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="content">
        <div className="hooks-container">
          <h2>React Hooks</h2>
          <p>
            React Hooks allow you to use state and other React features in
            functional components without needing a class component.
          </p>
          <p>
            Before hooks, React's state and lifecycle features were only
            available in class components. With the introduction of hooks, you
            can use these features in functional components, making it easier to
            work with state, side effects, and context.
          </p>
          <h3>Common React Hooks:</h3>
          <ul>
            <li>
              <strong>useState</strong> - Allows you to add state to functional
              components.
            </li>
            <li>
              <strong>useEffect</strong> - Handles side effects like data
              fetching, subscriptions, etc.
            </li>
            <li>
              <strong>useContext</strong> - Accesses values from the context API
              without passing props.
            </li>
            <li>
              <strong>useReducer</strong> - An alternative to useState for
              complex state logic.
            </li>
            <li>
              <strong>useRef</strong> - Allows you to persist values across
              renders without causing a re-render.
            </li>
          </ul>
          <Link to="/topic/7">
            <button className="navigate-button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReactHooks;
