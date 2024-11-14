import React from "react";
import Sidebar from "./Sidebar";
import "./StateAndProps.css"; // Import the CSS for StateAndProps
import { Link } from "react-router-dom";

function StateAndProps() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="content">
        <div className="stateprops-container">
          <h2>State and Props</h2>
          <p>
            State is used to manage data within a component, and props allow
            data to be passed from one component to another. They are the
            building blocks of React components for managing data and
            communication.
          </p>
          <p>
            <strong>State</strong>: Each component can have its own state, which
            can change over time, affecting the component’s behavior or
            rendering. State is managed within the component.
          </p>
          <p>
            <strong>Props</strong>: Props (short for "properties") are passed to
            a component from its parent component. Props are immutable, meaning
            they cannot be changed by the child component receiving them.
          </p>
          <h3>Example:</h3>
          <pre>
            <code>
              {`function Parent() {
  const [count, setCount] = useState(0);
  return <Child count={count} setCount={setCount} />;
}

function Child({ count, setCount }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
            </code>
          </pre>
          <Link to="/topic/5">
            <button className="navigate-button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StateAndProps;
