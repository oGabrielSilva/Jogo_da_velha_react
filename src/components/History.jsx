import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Board() {
  const { history, setHistory, setSquares, setIsXNext, tie, whoIsWinner } =
    useContext(GameContext);

  const handleClick = () => {
    if (history.length < 1) return;

    const last = history.slice(-1);
    const newHistory = [...history];
    newHistory.pop();

    setSquares([...last[0].squares]);
    setIsXNext(!last[0].isNext);
    setHistory([...newHistory]);
  };

  return (
    <div className="returnState">
      {!tie && !whoIsWinner && (
        <button onClick={handleClick}>Voltar jogada</button>
      )}
    </div>
  );
}
