import React from "react";

const BoardBtn = ({ playerSymbol, colIndex, rowIndex, handleSelect }) => {
  return (
    <button
      key={colIndex}
      className=" h-[80%] w-1/4 flex items-center justify-center bg-slate-300 text-8xl"
      onClick={() => handleSelect(rowIndex, colIndex)}
      disabled={playerSymbol !== null}
    >
      {playerSymbol}
    </button>
  );
};

export default BoardBtn;
