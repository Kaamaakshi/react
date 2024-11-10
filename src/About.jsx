import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about-container">
      <h2>About React</h2>
      <p>
        React is a JavaScript library for building user interfaces. It’s
        maintained by Facebook and a community of developers.
      </p>
      <ul>
        <li>Component-Based</li>
        <li>Learn Once, Write Anywhere</li>
        <li>Declarative and Efficient</li>
      </ul>
      <Link to="/quiz">
        <button style={{ marginLeft: "10px" }}>Take the Quiz</button>
      </Link>
    </div>
  );
}

export default About;
