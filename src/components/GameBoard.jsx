import React from "react";
import { useState } from "react";
import BoardBtn from "./BoardBtn";

const GameBoard = ({ onSelectSquare, activePlayer, board }) => {
  // const [gameBoard, setGameBoard] = useState(intialBoard);
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevBoard) => {
  //     const updatedBoard = [...prevBoard.map((innerArr) => [...innerArr])];
  //     updatedBoard[rowIndex][colIndex] = activePlayer;

  //     return updatedBoard;
  //   });

  //   switchPlayer();
  // }

  return (
    <ol className=" flex flex-col  flex-1">
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className="flex items-center  h-1/3  justify-around">
          {row.map((col, colIndex) => (
            <BoardBtn
              playerSymbol={col}
              colIndex={colIndex}
              key={`${colIndex}${rowIndex}`}
              rowIndex={rowIndex}
              handleSelect={() => onSelectSquare(rowIndex, colIndex)}
            />
          ))}
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
