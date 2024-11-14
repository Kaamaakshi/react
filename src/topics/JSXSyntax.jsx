import React from "react";
import Sidebar from "./Sidebar";
import "./JSXSyntax.css"; // Import the specific CSS for JSXSyntax
import { Link } from "react-router-dom";

function JSXSyntax() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="content">
        <div className="syntax-container">
          <h2>JSX Syntax</h2>
          <p>
            JSX stands for JavaScript XML. It allows you to write HTML-like
            syntax inside JavaScript, making the code easier to understand and
            manage.
          </p>
          <p>
            JSX looks very similar to HTML, but there are some differences. For
            example, JSX requires that the tag names are camelCased, such as{" "}
            <code>className</code>
            instead of <code>class</code>, and JSX elements must have a single
            parent element.
          </p>

          <h3>JSX Example:</h3>
          <pre>
            <code>{`const element = <h1>Hello, world!</h1>;`}</code>
          </pre>
          <p>
            In the example above, we are creating a JSX element{" "}
            <code>&lt;h1&gt;Hello, world!&lt;/h1&gt;</code>. This code is
            syntactically similar to HTML but will be compiled into JavaScript
            by React.
          </p>
          <Link to="/topic/4">
            <button className="navigate-button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JSXSyntax;
