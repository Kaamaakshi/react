import React from "react";
import Sidebar from "./Sidebar";
function ReviewAnswers({ questions, answers }) {
  return (
    <div className="review-container">
      <h2>Review Answers</h2>
      {questions.map((question, index) => (
        <div key={index} className="question-review">
          <p>
            <strong>Q{index + 1}:</strong> {question.question}
          </p>
          <p>
            <strong>Your Answer:</strong>{" "}
            {answers[index] !== null
              ? question.options[answers[index]]
              : "No answer"}
          </p>
          <p>
            <strong>Correct Answer:</strong> {question.options[question.answer]}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ReviewAnswers;
