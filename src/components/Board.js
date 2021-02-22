import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const Board = ({ squares, handleSquareClick }) => {
  const squareSize = boardSize / Math.sqrt(squares.length);

  return (
    <Container boardSize={boardSize}>
      {squares.map((symbol, i) => (
        <Square
          squareSize={squareSize}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          onClick={() => { handleSquareClick(i); }}
        >
          {symbol}
        </Square>
      ))}
    </Container>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSquareClick: PropTypes.func.isRequired,
};

export default Board;
