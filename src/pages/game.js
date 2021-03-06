import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Board from '../components/Board';
import { resetGame } from '../redux-flow/reducers/tic-tac-toe/action-creators';

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

const GamePage = () => {
  const {
    winner,
    plays,
    maxPlays,
    X,
    O,
  } = useSelector((state) => state.ticTacToe);
  const { userName } = useSelector((state) => state.identification);
  const dispatch = useDispatch();
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
      <p>
        {userName
          ? `Your user name: ${userName}`
          : "You're viewing the game as a guest"}
      </p>
      <p>
        Player X:
        {' '}
        {X}
      </p>
      <p>
        Player O:
        {' '}
        {O}
      </p>
      <Board />
      <p>{message}</p>
      <button type="button" onClick={() => dispatch(resetGame())}>Reset Game</button>
    </Container>
  );
};

export default GamePage;
