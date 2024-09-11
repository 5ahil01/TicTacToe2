import React, { useState } from "react";

const PlayerInfo = ({ initalName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);

  function handleClick() {
    setIsEditing(!isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li
      className={
        isActive ? "flex gap-1 p-1 border-2 border-black" : "flex p-1  gap-1"
      }
    >
      <span className="flex gap-3">
        {isEditing ? (
          <input
            value={playerName}
            onChange={handleChange}
            className="w-[100px]"
          />
        ) : (
          <span>{playerName}</span>
        )}
        <span>{symbol}</span>
      </span>
      <button onClick={handleClick}> {isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default PlayerInfo;
