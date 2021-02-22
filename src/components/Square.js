import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    width: ${({ squareSize }) => `${squareSize - 2}px`};
    height: ${({ squareSize }) => `${squareSize - 2}px`};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 2.5em;

    border: solid 1px black;

    /* guarantee no text selection  */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
`;

const Square = ({ children, squareSize, onClick }) => (
  <Container
    squareSize={squareSize}
    onClick={onClick}
  >
    {children}
  </Container>
);

Square.propTypes = {
  squareSize: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
