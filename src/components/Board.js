import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fillSquare, join, resetGame } from '../redux-flow/reducers/tic-tac-toe/action-creators';
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
const squareSize = boardSize / 3;

const Board = () => {
  const { board } = useSelector((state) => state.ticTacToe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(join(localStorage.getItem('me'), localStorage.getItem('me')));
  }, [board]);

  return (
    <Container boardSize={boardSize}>
      {board.map((row, rowIndex) => row.map((symbol, columnIndex) => (
        <Square
          squareSize={squareSize}
          key={String(rowIndex) + String(columnIndex)}
          onClick={() => {
            dispatch(fillSquare({
              column: columnIndex,
              row: rowIndex,
              player: localStorage.getItem('me'),
            }));
          }}
        >
          {symbol}
        </Square>
      )))}
      <button type="button" onClick={() => dispatch(resetGame())}>Clean</button>
    </Container>
  );
};

export default Board;
