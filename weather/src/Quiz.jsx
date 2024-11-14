import React, { useState } from "react";
import "./App.css";

function Quiz() {
  const questions = [
    {
      question: "What is React?",
      options: ["A Library", "A Framework", "A Language"],
      answer: "A Library",
    },
    {
      question: "What is a component?",
      options: ["A function", "A UI element", "A tool"],
      answer: "A UI element",
    },
    {
      question: "What does 'state' represent?",
      options: ["Permanent data", "Dynamic data", "Static data"],
      answer: "Dynamic data",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  // Handle selecting an option
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);
  };

  // Handle Answer Submission
  const handleAnswerSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  // Navigate to Next Question
  const handleNextQuestion = () => {
    handleAnswerSubmit();
    setSelectedOption(answers[currentQuestion + 1] || "");
    setCurrentQuestion(currentQuestion + 1);
  };

  // Navigate to Previous Question
  const handlePreviousQuestion = () => {
    setSelectedOption(answers[currentQuestion - 1] || "");
    setCurrentQuestion(currentQuestion - 1);
  };

  // Restart Quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizEnded(false);
    setSelectedOption("");
    setAnswers(Array(questions.length).fill(""));
  };

  return (
    <div className="quiz-container">
      {quizEnded ? (
        <div className="result-display">
          <h2>
            Your Score: {score}/{questions.length}
          </h2>
          <button className="try-again-button" onClick={restartQuiz}>
            Try Again
          </button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="option-container">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            ))}
          </div>

          <div className="navigation-buttons">
            {/* Previous Button */}
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            {/* Next or Submit Button */}
            {currentQuestion < questions.length - 1 ? (
              <button onClick={handleNextQuestion} disabled={!selectedOption}>
                Next
              </button>
            ) : (
              <button
                onClick={() => {
                  handleAnswerSubmit();
                  setQuizEnded(true);
                }}
                disabled={!selectedOption}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
