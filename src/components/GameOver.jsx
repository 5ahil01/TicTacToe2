import React from "react";

const GameOver = ({ winner, playAgainFxn }) => {
  return (
    <div className="px-5">
      <div>{winner ? <p>{winner} Won</p> : <p>It's a draw</p>}</div>
      <button onClick={playAgainFxn}>Play Again</button>
    </div>
  );
};

export default GameOver;
