import React, { useState } from "react";
import "./App.css";

function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [dice, setDice] = useState(1);
  const [message, setMessage] = useState("Player 1 Turn on");
  const targetScore = 20;

  const rollDice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    setDice(diceRoll);

    if (currentPlayer === 1) {
      const newScore = player1Score + diceRoll;
      setPlayer1Score(newScore);
      if (newScore >= targetScore) {
        setMessage("Player 1 Wins! ");
        return;
      }
      setCurrentPlayer(2);
      setMessage("Player 2's Turn on");
    } else {
      const newScore = player2Score + diceRoll;
      setPlayer2Score(newScore);
      if (newScore >= targetScore) {
        setMessage("Player 2 Wins! ");
        return;
      }
      setCurrentPlayer(1);
      setMessage("Player 1's Turn on");
    }
  };

  const resetGame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCurrentPlayer(1);
    setDice(1);
    setMessage("Player 1's Turn on");
  };

  return (
    <div className="App">
      <h1>Rolling Dice Game</h1>
      <div className="scores">
        <div className="player">
          <h2>Player 1</h2>
          <p>Score: {player1Score}</p>
        </div>
        <div className="player">
          <h2>Player 2</h2>
          <p>Score: {player2Score}</p>
        </div>
      </div>
      <div className="dice-container">
        <img
          src={`/dice${dice}.png`}
          alt={`Dice showing ${dice}`}
          className="dice"
        />
      </div>
      <button onClick={rollDice} disabled={message.includes("Wins")}>
        Roll Dice
      </button>
      <button onClick={resetGame} className="reset-button">
        Reset Game
      </button>
      <p>{message}</p>
    </div>
  );
}

export default App;
