import React, { useState } from 'react';
import './index.css';

import Score from './components/Score';
import Game from './components/Game';

function App() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  return (
    <div id="App">
      <h1 id="title">React Rock Paper Scissors</h1>
      <Score userScore={userScore} computerScore={computerScore} />
      <Game userScore={userScore}
        setUserScore={setUserScore}
        computerScore={computerScore}
        setComputerScore={setComputerScore}
      />
    </div>
  );
}

export default App;
