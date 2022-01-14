import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Reset() {
  const { setIsXNext, setSquares, setWhoIsWinner, setTie } =
    useContext(GameContext);

  const handleClick = () => {
    setIsXNext(true);
    setSquares(Array(9).fill(null));
    setWhoIsWinner(null);
    setTie(false);
  };

  return (
    <p className="reset">
      <button onClick={handleClick}>Zerar</button>
    </p>
  );
}
