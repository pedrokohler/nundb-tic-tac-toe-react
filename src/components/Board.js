import React from 'react';
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
const squareSize = boardSize / 3;

const Board = () => {
  const { board } = useSelector((state) => state.ticTacToe);
  const { userName } = useSelector((state) => state.identification);
  const dispatch = useDispatch();

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
              player: userName,
            }));
          }}
        >
          {symbol}
        </Square>
      )))}
    </Container>
  );
};

export default Board;
