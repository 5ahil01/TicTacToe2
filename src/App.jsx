import { useState } from "react";
import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./Win-Combo.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const nullBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// const deepCopyofInitalBoard = [...intialBoard.map(innerAr => [...innerAr])];

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]); //gameTurns an array which will store game turns

  function deriveGameBoard(gameTurns) {
    let gameBoard = [...nullBoard.map((innerAr) => [...innerAr])];

    //Filling the gameBoard according to the clicks
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
    }
    return gameBoard;
  }

  function handleSelectSquare(rowIndex, colIndex) {
    let currentPlayer = activePlayer;
    setActivePlayer(() => (activePlayer === "X" ? "O" : "X")); //Switching the player

    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handlePlayAgain() {
    // gameBoard = [...nullBoard.map((innerAr) => [...innerAr])];
    // creating initalBoard again from nullBoard creaing deep copy of nullBoard
    setGameTurns([]);
    setActivePlayer("X");
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  function deriveWinner() {
    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
      const firstSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

      if (
        firstSymbol &&
        firstSymbol === secondSymbol &&
        firstSymbol === thirdSymbol
      ) {
        winner = players[firstSymbol];
      }
    }
    return winner;
  }

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner();
  const hasDraw = gameTurns.length === 9 && !winner;

  return (
    <div className="flex  flex-col justify-center  items-center ">
      <div
        id="container"
        className="w-[500px] h-[500px] flex flex-col border-2 border-black"
      >
        <ol className="flex gap-5 py-5 px-16 bg-yellow-100 justify-between">
          <PlayerInfo
            initalName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <PlayerInfo
            initalName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayer={activePlayer}
          board={gameBoard}
        />
      </div>
      {(winner || hasDraw) && (
        <GameOver winner={winner} playAgainFxn={handlePlayAgain} />
      )}
    </div>
  );
}

export default App;
