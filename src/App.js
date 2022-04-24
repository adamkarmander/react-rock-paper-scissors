import './index.css';

import Score from './components/Score';
import Game from './components/Game';

function App() {
  return (
    <div id="App">
      <h1 id="title">React Rock Paper Scissors</h1>
      <Score />
      <Game />
    </div>
  );
}

export default App;
