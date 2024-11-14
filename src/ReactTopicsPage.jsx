// src/ReactTopicsPage.js
import { Link } from "react-router-dom";
import "./ReactTopicsPage.css";

const topics = [
  "Introduction to React",
  "JSX Syntax",
  "Components",
  "State and Props",
  "Event Handling",
  "React Hooks",
  "React Router",
  "React Context API",
  "React Lifecycle Methods",
  "Quiz",
];

function ReactTopicsPage() {
  return (
    <div className="react-topics-container">
      <div className="sidebar">
        <h3>React Topics</h3>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>
              <Link
                to={
                  index === topics.length - 1 ? "/quiz" : `/topic/${index + 1}`
                }
                className="topic-link"
              >
                {topic}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <h2>Choose a topic to learn more!</h2>
      </div>
    </div>
  );
}

export default ReactTopicsPage;
