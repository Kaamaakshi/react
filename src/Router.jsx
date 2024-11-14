import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactTopicsPage from "./ReactTopicsPage";
import IntroductionToReact from "./topics/IntroductionToReact";
import JSXSyntax from "./topics/JSXSyntax";
import Components from "./topics/Components";
import StateAndProps from "./topics/StateAndProps";
import EventHandling from "./topics/EventHandling";
import ReactHooks from "./topics/ReactHooks";
import ReactRouter from "./topics/ReactRouter";
import ReactContextAPI from "./topics/ReactContextAPI";
import ReactLifecycleMethods from "./topics/ReactLifecycleMethods";
import Quiz from "./topics/Quiz";
const List = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactTopicsPage />} />
        <Route path="/topic/1" element={<IntroductionToReact />} />
        <Route path="/topic/2" element={<JSXSyntax />} />
        <Route path="/topic/3" element={<Components />} />
        <Route path="/topic/4" element={<StateAndProps />} />
        <Route path="/topic/5" element={<EventHandling />} />
        <Route path="/topic/6" element={<ReactHooks />} />
        <Route path="/topic/7" element={<ReactRouter />} />
        <Route path="/topic/8" element={<ReactContextAPI />} />
        <Route path="/topic/9" element={<ReactLifecycleMethods />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default List;
