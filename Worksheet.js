import React, { useState } from 'react';

function Worksheet({ onSubmit }) {
  const [answers, setAnswers] = useState([]);

  const questions = [
    { question: "Round 34 to the nearest 10", correct: "30" },
    { question: "Round 87 to the nearest 10", correct: "90" },
    // Add more questions as per your worksheet
  ];

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleReset = () => setAnswers([]);

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) score++;
    });
    return score;
  };

  return (
    <div>
      <div className="questions">
        {questions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            <input
              type="text"
              value={answers[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button onClick={() => onSubmit("User Name", calculateScore())}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Worksheet;