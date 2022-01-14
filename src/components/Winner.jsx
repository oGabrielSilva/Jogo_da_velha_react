import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Winner() {
  const { whoIsWinner } = useContext(GameContext);

  if (whoIsWinner) return <p className="winner">{whoIsWinner} ganhou!</p>;
  return <></>;
}
