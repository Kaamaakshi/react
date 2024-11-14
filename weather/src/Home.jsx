import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the React Learning Quiz</h1>
      <p>Learn about React basics and test your knowledge!</p>
      <Link to="/about">
        <button>Learn About React</button>
      </Link>
      <Link to="/quiz">
        <button style={{ marginLeft: "10px" }}>Take the Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
