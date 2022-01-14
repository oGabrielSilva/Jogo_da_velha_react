import React, { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import Player from './Player';
import Reset from './Reset';
import Winner from './Winner';
import Square from './Square';
import History from './History';
import { v4 as uuid } from 'uuid';
import calculateWinner from '../utils/calculaterWinner';
import Tie from './Tie';

export default function Board() {
  const { squares, setWhoIsWinner, tie, setTie } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);
    const draw = squares.filter((value) => value === null);

    if (winner) setWhoIsWinner(winner);
    else if (draw.length < 1 && !winner) setTie((s) => !s);
  }, [squares, setWhoIsWinner, setTie]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Tie />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square key={uuid()} value={value} index={index} />
        ))}
      </div>
      <History />
    </div>
  );
}
