import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Tie() {
  const { tie } = useContext(GameContext);

  if (tie) return <p className="winner">Empate</p>;
  return <></>;
}
