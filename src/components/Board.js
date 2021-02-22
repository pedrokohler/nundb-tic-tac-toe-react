import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fillSquare } from '../redux-flow/reducers/tic-tac-toe/action-creators';
import Square from './Square';

const Container = styled.div`
    height: ${({ boardSize }) => `${boardSize}px`};
    width: ${({ boardSize }) => `${boardSize}px`};

    display: flex;
    flex-direction: row;
    align-items: space-around;
    justify-content: center;
    flex-wrap: wrap;
`;

const boardSize = 300;
const getSquareSize = (board) => boardSize / Math.sqrt(board.length);

const Board = () => {
  const { board } = useSelector((state) => state.ticTacToe);
  const dispatch = useDispatch();
  const [squareSize, setSquareSize] = useState(getSquareSize(board));

  useEffect(() => {
    setSquareSize(getSquareSize(board));
  }, [board]);

  return (
    <Container boardSize={boardSize}>
      {board.map((symbol, i) => (
        <Square
          squareSize={squareSize}
          // no other possible key can be used, so disabling eslint
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          onClick={() => { dispatch(fillSquare(i)); }}
        >
          {symbol}
        </Square>
      ))}
    </Container>
  );
};

export default Board;
