import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IntroductionToReact from "./topics/IntroductionToReact";
import JSXSyntax from "./topics/JSXSyntax";
import StateAndProps from "./topics/StateAndProps";
import EventHandling from "./topics/EventHandling";
import ReactHooks from "./topics/ReactHooks";
import ReactContextAPI from "./topics/ReactContextAPI";

import Quiz from "./topics/Quiz";
import ReactRouter from "./topics/ReactRouter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "250px", padding: "20px", flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<IntroductionToReact />} />
              <Route path="/topic/1" element={<IntroductionToReact />} />
              <Route path="/topic/2" element={<JSXSyntax />} />

              <Route path="/topic/4" element={<StateAndProps />} />
              <Route path="/topic/5" element={<EventHandling />} />
              <Route path="/topic/6" element={<ReactHooks />} />
              <Route path="/topic/7" element={<ReactRouter />} />
              <Route path="/topic/8" element={<ReactContextAPI />} />

              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
