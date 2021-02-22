import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Board from './components/Board';

const Container = styled.div`
  width: 95vw;
  height: 95vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: sans-serif;
`;

const duringGameMessage = 'Click a square';
const drawMessage = 'No winner';
const winMessage = (winner) => `Winner: ${winner}`;

const App = () => {
  const {
    winner,
    plays,
    maxPlays,
  } = useSelector((state) => state.ticTacToe);
  const [message, setMessage] = useState(duringGameMessage);

  useEffect(() => {
    if (winner) {
      return setMessage(winMessage(winner));
    }
    if (plays >= maxPlays) {
      return setMessage(drawMessage);
    }
    return setMessage(duringGameMessage);
  }, [winner, plays, maxPlays]);

  return (
    <Container>
      <Board />
      <p>{message}</p>
    </Container>
  );
};

export default App;
