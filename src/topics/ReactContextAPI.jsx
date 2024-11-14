import React from "react";
import Sidebar from "./Sidebar";
import "./ReactContextAPI.css"; // Import the CSS for ReactContextAPI
import { Link } from "react-router-dom";

function ReactContextAPI() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="content">
        <div className="context-container">
          <h2>React Context API</h2>
          <p>
            The React Context API allows you to share values between components
            without passing props manually through every level of the tree.
          </p>
          <p>
            It is useful for global data like themes, authentication, or user
            settings that need to be accessed by many components at different
            nesting levels.
          </p>
          <h3>How does it work?</h3>
          <p>
            You can create a Context using <code>React.createContext()</code>{" "}
            and then use the <code>Provider</code> component to wrap parts of
            your app that need access to that context. Inside the components,
            you can use the
            <code>useContext()</code> hook or the <code>Context.Consumer</code>{" "}
            to consume the context data.
          </p>
          <Link to="/quiz">
            <button className="navigate-button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReactContextAPI;
