export default function GameBoard({ onSelectSquere, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymobol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquere(rowIndex, colIndex)}
                  disabled={playerSymobol !== null}>
                  {playerSymobol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
