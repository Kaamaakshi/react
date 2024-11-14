import React from "react";
import Sidebar from "./Sidebar";
import "./EventHandling.css"; // Import the CSS for EventHandling
import { Link } from "react-router-dom";

function EventHandling() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="content">
        <div className="eventhandling-container">
          <h2>Event Handling</h2>
          <p>
            React handles events similarly to DOM events, but there are some
            syntactical differences. React events are named using camelCase,
            rather than lowercase. For example, instead of `onclick`, you write
            `onClick` in React.
          </p>
          <p>
            React also passes an event object to the event handler, which is
            different from the traditional DOM events. In React, the event
            object is normalized, so you can work with the event in a consistent
            way across all browsers.
          </p>
          <h3>Example:</h3>
          <pre>
            <code>
              {/* Example of Event Handling in React */}
              {`function Button() {
  const handleClick = (event) => {
    alert("Button clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`}
            </code>
          </pre>
          <Link to="/topic/6">
            <button className="navigate-button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventHandling;
