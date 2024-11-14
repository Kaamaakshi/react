import React from "react";

function Timer({ timeRemaining }) {
  return (
    <div className="timer">
      Time Remaining: {Math.floor(timeRemaining / 60)}:
      {String(timeRemaining % 60).padStart(2, "0")}
    </div>
  );
}

export default Timer;
