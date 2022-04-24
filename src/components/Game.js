import '../index.css';

function Game(props) {
  return (
    <div id="gameContainer">
      <h1>Please choose one of the following:</h1>
      <button className="myButton" id="rock" onClick={(e) => displayResults(e)}>Rock ✊</button>
      <button className="myButton" id="paper" onClick={(e) => displayResults(e)}>Paper ✋</button>
      <button className="myButton" id="scissors" onClick={(e) => displayResults(e)}>Scissors ✌️</button>
      <div id="results" />
    </div>
  );

  function generateComputerChoice() {
    const choices = [
      { key: 'rock', value: 'Rock ✊' },
      { key: 'paper', value: 'Paper ✋' },
      { key: 'scissors', value: 'Scissors ✌️' }
    ];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
  }

  function getWinner(userChoice, computerChoice) {
    switch (userChoice + computerChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        props.setUserScore(props.userScore + 1);
        return 'You win!';
      case 'rockpaper':
      case 'paperscissors':
      case 'scissorsrock':
        props.setComputerScore(props.computerScore + 1);
        return 'Computer wins!';
      default:
        return "It's a draw!";
    }
  }

  function displayResults(e) {
    let userChoice = e.target;
    let computerChoice = generateComputerChoice();

    const userChoiceDisplay = document.createElement('h1');
    userChoiceDisplay.innerHTML = 'Your choice: ' + userChoice.innerHTML;

    const computerChoiceDisplay = document.createElement('h1');
    computerChoiceDisplay.innerHTML = "Computer's choice: " + computerChoice.value;

    const winnerDisplay = document.createElement('h1');
    winnerDisplay.innerHTML = getWinner(userChoice.id, computerChoice.key);

    document.getElementById('results').innerHTML = "";
    document.getElementById('results').append(userChoiceDisplay, computerChoiceDisplay, winnerDisplay);
  }
}

export default Game;