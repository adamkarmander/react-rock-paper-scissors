import '../index.css';

function Score(props) {
  return (
    <div>
      <h1 id="score">Score: {props.userScore}-{props.computerScore} (You-Computer)</h1>
    </div>
  );
}

export default Score;