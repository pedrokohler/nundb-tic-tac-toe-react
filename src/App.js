import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import Game from './domain/game';

const Container = styled.div`
  width: 95vw;
  height: 95vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: sans-serif;
`;

const game = new Game(3);
const maxPlays = game.rowSize ** 2;
const duringGameMessage = 'Click a square';
const drawMessage = 'No winner';
const winMessage = (winner) => `Winner: ${winner}`;

const App = () => {
  const [board, setBoard] = useState(game.board);
  const [message, setMessage] = useState(duringGameMessage);

  const handleSquareClick = useCallback((squareIndex) => {
    game.fillSquare(squareIndex);
    setBoard(game.board);

    if (game.winner) {
      return setMessage(winMessage(game.winner));
    }
    if (game.plays >= maxPlays) {
      return setMessage(drawMessage);
    }
    return setMessage(duringGameMessage);
  }, []);

  return (
    <Container>
      <Board squares={board} handleSquareClick={handleSquareClick} />
      <p>{message}</p>
    </Container>
  );
};

export default App;
