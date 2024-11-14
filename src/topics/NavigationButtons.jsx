import React from "react";

function NavigationButtons({
  handleNext,
  handlePrev,
  currentQuestion,
  totalQuestions,
}) {
  return (
    <div className="navigation-buttons">
      <button onClick={handlePrev} disabled={currentQuestion === 0}>
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentQuestion === totalQuestions - 1}
      >
        Next
      </button>
    </div>
  );
}

export default NavigationButtons;
