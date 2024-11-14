import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Question from "./Question";
import NavigationButtons from "./NavigationButtons";
import ReviewAnswers from "./ReviewAnswers";
import "./Quiz.css";

const questions = [
  {
    question: "What is React?",
    options: [
      "A JavaScript framework",
      "A library for building UIs",
      "A CSS framework",
      "A server-side technology",
    ],
    answer: 1,
  },
  {
    question: "What is JSX?",
    options: [
      "A JavaScript XML",
      "A server-side language",
      "A framework",
      "A database",
    ],
    answer: 0,
  },
  // Add more questions here
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes timer

  // Handle answer selection
  const handleAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  // Move to next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Move to previous question
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Submit the quiz
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Start reviewing answers
  const handleReviewAnswers = () => {
    setReviewMode(true);
  };

  // Timer countdown
  useEffect(() => {
    if (timeRemaining > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeRemaining === 0) {
      setIsSubmitted(true);
    }
  }, [timeRemaining, isSubmitted]);

  // Function to calculate the number of correct answers
  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        score++;
      }
    });
    return score;
  };

  // Calculate the correct answers and percentage score
  const correctAnswersCount = calculateScore();
  const totalQuestions = questions.length;
  const percentage = ((correctAnswersCount / totalQuestions) * 100).toFixed(2);

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      <Timer timeRemaining={timeRemaining} />
      {!isSubmitted ? (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          currentAnswer={answers[currentQuestion]}
          handleAnswer={handleAnswer}
          currentQuestion={currentQuestion}
        />
      ) : reviewMode ? (
        <ReviewAnswers questions={questions} answers={answers} />
      ) : (
        <div>
          <h2>Quiz Submitted!</h2>
          <p>
            You answered {correctAnswersCount} out of {totalQuestions} questions
            correctly.
          </p>
          <p>
            Your score: {correctAnswersCount}/{totalQuestions}
          </p>
          <button onClick={handleReviewAnswers}>Review Answers</button>
        </div>
      )}
      {!isSubmitted && (
        <div className="submit-review-buttons">
          <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
      )}
      {!isSubmitted && !reviewMode && (
        <NavigationButtons
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
}

export default Quiz;
