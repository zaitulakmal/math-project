import React, { useState } from 'react';
import Worksheet from './Worksheet';

function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);

  const handleSubmit = (userName, userScore) => {
    if (!userName) {
      alert("Please enter your name!");
      return;
    }
    setScore(userScore);
  };

  return (
    <div className="App">
      <h1>Math Worksheet</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <Worksheet onSubmit={handleSubmit} />
      {score !== null && (
        <div>
          <h3>Your Score: {score}</h3>
        </div>
      )}
    </div>
  );
}

export default App;