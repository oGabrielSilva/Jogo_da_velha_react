import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Square({ value, index }) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setHistory,
    history,
  } = useContext(GameContext);

  const handleClick = () => {
    if (squares[index] || whoIsWinner) return;
    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';

    setHistory([
      ...history,
      {
        squares: [...squares],
        isNext: !isXNext,
      },
    ]);

    setSquares(newSquares);
    setIsXNext((is) => !is);
  };

  return <button onClick={handleClick}>{value}</button>;
}
