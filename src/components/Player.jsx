import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdithClick() {
    setIsEditing((editing) => !editing);
  }
  function hanleChange(event) {
    setPlayerName(event.target.value);
    console.log(event.target.value);
  }
  let edithablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    edithablePlayerName = (
      <input type="text" required value={playerName} onChange={hanleChange} />
    );
  }
  return (
    <li>
      <span className="player">
        {edithablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdithClick}>
        {!isEditing ? "Edith" : "Save"}
      </button>
    </li>
  );
}
