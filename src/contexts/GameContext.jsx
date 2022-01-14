import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [whoIsWinner, setWhoIsWinner] = useState(null);
  const [history, setHistory] = useState([]);
  const [tie, setTie] = useState(false);

  const state = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setWhoIsWinner,
    history,
    setHistory,
    tie,
    setTie,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}
