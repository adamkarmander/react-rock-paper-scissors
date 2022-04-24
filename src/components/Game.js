import '../index.css';

function Game() {
    return (
      <div id="gameContainer">
        <h1>Please choose one of the following:</h1>
        <button class="myButton" id="rock">Rock ✊</button>
        <button class="myButton" id="paper">Paper ✋</button>
        <button class="myButton" id="scissors">Scissors ✌️</button>
      </div>
    );
  }
  
  export default Game;