import React from "react";

function Question({
  question,
  options,
  currentAnswer,
  handleAnswer,
  currentQuestion,
}) {
  return (
    <div className="question-container">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{question}</p>
      <ul className="option-list">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswer(index)}
            className={currentAnswer === index ? "selected" : ""}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
