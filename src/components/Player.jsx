import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdithClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function hanleChange(event) {
    setPlayerName(event.target.value);
  }
  let edithablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    edithablePlayerName = (
      <input type="text" required value={playerName} onChange={hanleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
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
